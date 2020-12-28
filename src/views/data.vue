<template>
<div class="wrap">
<div class="main">
<div class="main_left">
<ul v-for="(val,index) in list[0].type" @click="clc(index)">
<li>{{val.tit}}</li>
</ul>
</div>
<div class="main_right">
<ul v-for="(val,index) in list[0].type[this.indexs].datainfo">
<li>
<img :src="val.img" />
<span>{{val.name}}</span>
</li>
</ul>
</div>
</div>
</div>
</template>

<script>
import axios from "axios"
export default {
name: "tab1",
data() {
return {
indexs: "0",
list: [{
"type": [{
"tit": "常用",
"datainfo": [{
"img": "../../static/img/美食.png",
"name": "美食",
"datatype": "大众点评"
},
{
"img": "../../static/img/星巴克.png",
"name": "酒店",
"datatype": "房价-预定"
},
{
"img": "../../static/img/公交.png",
"name": "银行",
"datatype": ""
},
{
"img": "../../static/img/医院.png",
"name": "ATM",
"datatype": ""
},
{
"img": "../../static/img/银行.png",
"name": "公交地铁",
"datatype": ""
},
{
"img": "../../static/img/电影院.png",
"name": "团购",
"datatype": ""
},
{
"img": "../../static/img/超市.png",
"name": "超市",
"datatype": ""
},
{
"img": "../../static/img/加油站.png",
"name": "加油站",
"datatype": "折扣油价"
},
{
"img": "../../static/img/星巴克.png",
"name": "电影院",
"datatype": "影讯-预定"
},
{
"img": "../../static/img/星巴克 (1).png",
"name": "星巴克",
"datatype": ""
},
{
"img": "../../static/img/汉堡可乐.png",
"name": "麦肯比",
"datatype": ""
},
{
"img": "../../static/img/ktv (1).png",
"name": "KTV",
"datatype": ""
},
{
"img": "../../static/img/啤酒.png",
"name": "酒吧",
"datatype": ""
},
{
"img": "../../static/img/洗浴用具.png",
"name": "洗浴",
"datatype": ""
},
{
"img": "../../static/img/商场.png",
"name": "商场",
"datatype": ""
},
{
"img": "../../static/img/医院 (2).png",
"name": "医院",
"datatype": "大众点评"
},
{
"img": "../../static/img/卫生间 .png",
"name": "公厕",
"datatype": ""
}
]
},
{
"tit": "特色",
"datainfo": [{
"img": "../../static/img/酒店.png",
"name": "周边微博",
"datatype": "大众点评"
},
{
"img": "../../static/img/美食.png",
"name": "酒店",
"datatype": "房价-预定"
},
{
"img": "../../static/img/银行.png",
"name": "银行",
"datatype": ""
},
{
"img": "../../static/img/洗浴用具.png",
"name": "ATM",
"datatype": ""
},
{
"img": "../../static/img/公交 (1).png",
"name": "公交地铁",
"datatype": ""
},
{
"img": "../../static/img/团购.png",
"name": "团购",
"datatype": ""
},
{
"img": "../../static/img/超市 (1).png",
"name": "超市",
"datatype": ""
},
{
"img": "../../static/img/加油站 (1).png",
"name": "加油站",
"datatype": "折扣油价"
},
{
"img": "../../static/img/电影院 (1).png",
"name": "电影院",
"datatype": "影讯-预定"
},
{
"img": "../../static/img/星巴克 (1).png",
"name": "星巴克",
"datatype": ""
},
{
"img": "../../static/img/汉堡可乐.png",
"name": "麦肯比",
"datatype": ""
},
{
"img": "../../static/img/ktv (1).png",
"name": "KTV",
"datatype": ""
}
]
},
{
"tit": "餐饮",
"datainfo": [{
"img": "../../static/img/美食.png",
"name": "周边微博",
"datatype": "大众点评"
},
{
"img": "../../static/img/酒店.png",
"name": "酒店",
"datatype": "房价-预定"
},
{
"img": "../../static/img/银行.png",
"name": "银行",
"datatype": ""
},
{
"img": "../../static/img/洗浴用具.png",
"name": "ATM",
"datatype": ""
},
{
"img": "../../static/img/公交 (1).png",
"name": "公交地铁",
"datatype": ""
},
{
"img": "../../static/img/团购.png",
"name": "团购",
"datatype": ""
},
{
"img": "../../static/img/超市 (1).png",
"name": "超市",
"datatype": ""
}
]
},
{
"tit": "购物",
"datainfo": [{
"img": "../../static/img/美食.png",
"name": "周边微博",
"datatype": "大众点评"
},
{
"img": "../../static/img/酒店.png",
"name": "酒店",
"datatype": "房价-预定"
},
{
"img": "../../static/img/银行.png",
"name": "银行",
"datatype": ""
},
{
"img": "../../static/img/洗浴用具.png",
"name": "ATM",
"datatype": ""
}
]
},
{
"tit": "休闲",
"datainfo": [{
"img": "../../static/img/美食.png",
"name": "周边微博",
"datatype": "大众点评"
},
{
"img": "../../static/img/酒店.png",
"name": "酒店",
"datatype": "房价-预定"
},
{
"img": "../../static/img/银行.png",
"name": "银行",
"datatype": ""
},
{
"img": "../../static/img/洗浴用具.png",
"name": "ATM",
"datatype": ""
},
{
"img": "../../static/img/美食.png",
"name": "周边微博",
"datatype": "大众点评"
},
{
"img": "../../static/img/酒店.png",
"name": "酒店",
"datatype": "房价-预定"
},
{
"img": "../../static/img/银行.png",
"name": "银行",
"datatype": ""
},
{
"img": "../../static/img/洗浴用具.png",
"name": "ATM",
"datatype": ""
},
{
"img": "../../static/img/美食.png",
"name": "周边微博",
"datatype": "大众点评"
},
{
"img": "../../static/img/酒店.png",
"name": "酒店",
"datatype": "房价-预定"
},
{
"img": "../../static/img/银行.png",
"name": "银行",
"datatype": ""
},
{
"img": "../../static/img/洗浴用具.png",
"name": "ATM",
"datatype": ""
},
{
"img": "../../static/img/洗浴用具.png",
"name": "ATM",
"datatype": ""
}
]
},
{
"tit": "交通",
"datainfo": [{
"img": "../../static/img/美食.png",
"name": "周边微博",
"datatype": "大众点评"
},
{
"img": "../../static/img/酒店.png",
"name": "酒店",
"datatype": "房价-预定"
},
{
"img": "../../static/img/银行.png",
"name": "银行",
"datatype": ""
},
{
"img": "../../static/img/洗浴用具.png",
"name": "ATM",
"datatype": ""
},
{
"img": "../../static/img/美食.png",
"name": "周边微博",
"datatype": "大众点评"
}
]
},
{
"tit": "便民",
"datainfo": [{
"img": "../../static/img/美食.png",
"name": "周边微博",
"datatype": "大众点评"
},
{
"img": "../../static/img/酒店.png",
"name": "酒店",
"datatype": "房价-预定"
},
{
"img": "../../static/img/银行.png",
"name": "银行",
"datatype": ""
},
{
"img": "../../static/img/洗浴用具.png",
"name": "ATM",
"datatype": ""
},
{
"img": "../../static/img/美食.png",
"name": "周边微博",
"datatype": "大众点评"
},
{
"img": "../../static/img/美食.png",
"name": "周边微博",
"datatype": "大众点评"
},
{
"img": "../../static/img/酒店.png",
"name": "酒店",
"datatype": "房价-预定"
},
{
"img": "../../static/img/银行.png",
"name": "银行",
"datatype": ""
},
{
"img": "../../static/img/洗浴用具.png",
"name": "ATM",
"datatype": ""
},
{
"img": "../../static/img/美食.png",
"name": "周边微博",
"datatype": "大众点评"
},
{
"img": "../../static/img/美食.png",
"name": "周边微博",
"datatype": "大众点评"
},
{
"img": "../../static/img/酒店.png",
"name": "酒店",
"datatype": "房价-预定"
},
{
"img": "../../static/img/银行.png",
"name": "银行",
"datatype": ""
},
{
"img": "../../static/img/洗浴用具.png",
"name": "ATM",
"datatype": ""
},
{
"img": "../../static/img/美食.png",
"name": "周边微博",
"datatype": "大众点评"
}
]
}, {
"tit": "酒店",
"datainfo": [{
"img": "../../static/img/美食.png",
"name": "周边微博",
"datatype": "大众点评"
},
{
"img": "../../static/img/酒店.png",
"name": "酒店",
"datatype": "房价-预定"
}
]
},
{
"tit": "资讯",
"datainfo": [{
"img": "../../static/img/美食.png",
"name": "周边微博",
"datatype": "大众点评"
},
{
"img": "../../static/img/酒店.png",
"name": "酒店",
"datatype": "房价-预定"
},
{
"img": "../../static/img/美食.png",
"name": "周边微博",
"datatype": "大众点评"
},
{
"img": "../../static/img/酒店.png",
"name": "酒店",
"datatype": "房价-预定"
},
{
"img": "../../static/img/美食.png",
"name": "周边微博",
"datatype": "大众点评"
},
{
"img": "../../static/img/酒店.png",
"name": "酒店",
"datatype": "房价-预定"
}
]
}

]
}

]
}
},
methods: {
clc(index) {
this.indexs = index

}
}
}
</script>
<style type="text/css">
.main_left {
width: 30%;
height: 100vh;
float: left;
overflow: auto;
}

.main_left ul li {
width: 100%;
height: 1rem;
text-align: center;
line-height: 1rem;
font-size: 18px;
border-bottom: 1px solid #ccc;
}

.main_left ul li:hover {
background: #efefef;
}

.main_right {
width: 70%;
height: 100vh;
float: left;
overflow: auto;
}

.main_right ul li {
width: 100%;
height: 1rem;
line-height: 1rem;
font-size: 18px;
background: #efefef;
}

.main_right ul li img {
width: 1rem;
float: left;
}
</style>