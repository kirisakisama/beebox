interface notice{
	message:string,
	time:string,
	title:string,
	icon:string
}
const v1:notice[]=[
    {
        "message": "在花园南部区域发现大量蚜虫，正啃食玫瑰花叶片，严重危害植物生长，急需采取措施进行防治。",
        "time": "2025-04-01 09:30",
        "title": "花园南部蚜虫危害",
        "icon": "pest"
    },
    {
        "message": "温室自动灌溉设备突然断开连接，无法正常工作，灌溉系统不能按计划进行浇水，可能影响温室植物生长环境。",
        "time": "2025-04-01 10:45",
        "title": "温室灌溉设备断连",
        "icon": "device"
    }
]
const v2:notice[]=[
    {
        "message": "蜂箱内温湿度传感器显示，当前蜂箱温度升高至 35℃，湿度降低至 40%，偏离适宜范围，可能影响蜜蜂生存和蜂蜜品质。",
        "time": "2025-04-01 14:20",
        "title": "蜂箱温湿度异常",
        "icon": "climate"
    },
    {
        "message": "第 5 号蜂箱蜂蜜收集完成，已收集到 2.5 升优质蜂蜜，可进行后续的过滤、包装等处理环节。",
        "time": "2025-04-01 16:15",
        "title": "5 号蜂箱蜂蜜收集毕",
        "icon": "honey"
    }
]

export const getNotice = (): notice[][] => {
    return [v1, v2];
};