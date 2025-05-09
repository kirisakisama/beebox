interface llmInit {
	model : string,
	temperature ?: number,
	apiKey ?: string
}
let sendUrl = "https://api.deepseek.com/chat/completions"
let headers = {
	"Authorization": "Bearer sk-c8f12eb2625149e494c63c59a6dca88d",
	"Content-type": "application/json",
}
export type aChat = ["system" | "ai" | "human", "string"]
export class ChatDeepSeek {
	model : string;
	temperature : number;
	apiKey : string;
	constructor(args : llmInit) {
		this.model = args.model;
		if (args.temperature) this.temperature = args.temperature
		if (args.apiKey) this.apiKey = args.apiKey
	}
	stream(chats : aChat[], callback : (arg0 : string) => void, close : () => void) {
		let body = {
			model: this.model,
			messages:  chats.map(v=>{
				let role:string;
				let content:string;
				if(v[0]==="ai") role="assistant";
				else if(v[0]==="human") role="user";
				else if(v[0]==="system") role="system";
				content=v[1];
				return {role,content};
			}),
			stream: true
		}
		const sseModule = uni.requireNativePlugin("yj-ssemodule");
		sseModule.open({
			'url': sendUrl,
			'method': 'post',
			'headers': headers,
			'body': body
		}, e => {
			//console.log(e);
			if(e.result==="[DONE]"){
				close();
				return;
			}
			try {
				let s = JSON.parse(e.result);
				callback(s.choices[0].delta.content)
				//console.log(s.choices[0].delta.content)
			} catch {
			}
		})
		sseModule.close({}, e => {
			//console.log("断开了")
			//close()
		})
	}
}