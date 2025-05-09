//import { ChatDeepSeek } from "@langchain/deepseek";
import { ChatDeepSeek, aChat } from "./MyChatDeepSeek";
//import {marked} from 'marked'
export interface chat {
	role : "ai" | "user" | "system",
	msg : string,
	done : boolean
}

export class agent {
	chats : chat[];
	llm = new ChatDeepSeek({
		model: "deepseek-chat",
		temperature: 0,
		apiKey: 'sk-c8f12eb2625149e494c63c59a6dca88d'
	});
	constructor(msg : chat[]) {
		this.chats = msg;
	}
	mystreamSend(userMsg : string) {
		this.chats.push({
			role: "user",
			msg: userMsg,
			done: true
		});
		this.chats.push({
			role: "ai",
			msg: '',
			done: false
		})
		let l = this.chats.length;
		const callback=(arg:string)=>{
			this.chats[l-1].msg+=arg;
		}
		const close=()=>{
			console.log("done")
			//this.chats[l-1].msg=marked.parse(this.chats[l-1].msg) as string
			this.chats[l-1].done=true;
		}
		this.llm.stream(this.chats.map((v) => {
			let role : string;
			let msg : string;
			if (v.role === "ai") role = "ai";
			else if (v.role === "user") role = "human";
			else if (v.role === "system") role = "system";
			msg = v.msg;
			return [role, msg];
		}) as aChat[],callback,close);
	}
	// async streamSend(userMsg : string) : Promise<string> {
	// 	this.chats.push({
	// 		role:"user",
	// 		msg:userMsg,
	// 		done:true
	// 	});
	// 	this.chats.push({
	// 		role:"ai",
	// 		msg:'',
	// 		done:false
	// 	})
	// 	let l=this.chats.length;
	// 	let stream = await this.llm.stream(this.chats.map((v)=>{
	// 		let role:string;
	// 		let msg:string;
	// 		if(v.role==="ai") role="ai";
	// 		else if(v.role==="user") role="human";
	// 		else if(v.role==="system") role="system";
	// 		msg=v.msg;
	// 		return [role,msg];
	// 	}) as aChat[]);
	// 	for await (const chunk of stream) {
	// 	  this.chats[l-1].msg+=chunk.content.toString();
	// 	}
	// 	this.chats[l-1].done=true;
	// 	return this.chats[l-1].msg;
	// }
	// async send(userMsg : string) : Promise<string> {
	// 	this.chats.push({
	// 		role:"user",
	// 		msg:userMsg,
	// 		done:true
	// 	});
	// 	let aiMsgStruct=await this.llm.invoke(this.chats.map((v)=>{
	// 		let role:string;
	// 		let msg:string;
	// 		if(v.role==="ai") role="ai";
	// 		else if(v.role==="user") role="human";
	// 		else if(v.role==="system") role="system";
	// 		msg=v.msg;
	// 		return [role,msg];
	// 	}));
	// 	let aiMsg=aiMsgStruct.content.toString();
	// 	this.chats.push({
	// 		role:"ai",
	// 		msg:aiMsg,
	// 		done:true
	// 	})
	// 	return aiMsg;
	// }
}