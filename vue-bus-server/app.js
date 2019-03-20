//app.js
//1:加载模块
const express = require("express");
const pool  = require("./pool");
const bodyParse = require("body-parser");
const qs = require("querystring");
// 引入session模块,cookie模块
const cookieParser = require("cookie-parser");
const session = require("express-session");
//2:创建express对象
var app = express();
//服务器node.js 允许跨域访问配置项
app.use(cookieParser());  // 使用cookie
// 设置session
app.use(session({
    secret : "secret", // 对session id 相关的cookie 进行签名
    resave : true,
    saveUninitialized : false,  // 是否保存未初始化的会话
    cookie : {
        maxAge : 1000*60*3  //设置session 的有效时间 ,单位为毫秒
    }
}))

// 2.1 引入跨域模块
const cors = require("cors");
// 2.2配置那个程序允许跨域访问
app.use(cors({
    origin : ["http://localhost:3001","http://127.0.0.1:3001","https://y.qq.com:8080"],
    credentials : true
}))
app.use(bodyParse.urlencoded({
    extended : false  // querystring
}))


//3:指定静态目录
//服务器指定目录 绝对路径 出错
app.use(express.static(__dirname+"/public"));

//4:绑定监听端口
app.listen(3000);
//功能一:学子商城首页图片轮播
//GET /imagelist   json
app.get("/imagelist",(req,res)=>{
  var obj = [
 {id:1,img_url:"http://127.0.0.1:3000/img/banner_15.jpg"},
 {id:2,img_url:"http://127.0.0.1:3000/img/banner_05.jpg"},
 {id:3,img_url:"http://127.0.0.1:3000/img/banner_03.jpg"},
 {id:4,img_url:"http://127.0.0.1:3000/img/banner_16.png"},
 {id:5,img_url:"http://127.0.0.1:3000/img/banner_20.jpg"}
];
  res.send(obj)
});

app.get("/imagewei",(req,res)=>{
  var obj = [
 {id:6,img_url:"http://127.0.0.1:3000/img/3_1.png"},
 {id:7,img_url:"http://127.0.0.1:3000/img/3_2.png"},
 {id:8,img_url:"http://127.0.0.1:3000/img/3_3.png"}
];
  res.send(obj)
});



app.get("/magebus",(req,res)=>{
  var obj = [
 {id:11,img_url:"http://127.0.0.1:3000/img/66.png"},
 {id:12,img_url:"http://127.0.0.1:3000/img/67.png"},
 {id:13,img_url:"http://127.0.0.1:3000/img/68.png"},
 {id:14,img_url:"http://127.0.0.1:3000/img/69.png"},
 {id:15,img_url:"http://127.0.0.1:3000/img/70.png"},
 {id:16,img_url:"http://127.0.0.1:3000/img/71.png"},
 {id:17,img_url:"http://127.0.0.1:3000/img/72.png"},
 {id:18,img_url:"http://127.0.0.1:3000/img/73.png"},
 {id:19,img_url:"http://127.0.0.1:3000/img/74.png"},
 {id:20,img_url:"http://127.0.0.1:3000/img/75.png"},
 {id:21,img_url:"http://127.0.0.1:3000/img/76.png"},
 {id:22,img_url:"http://127.0.0.1:3000/img/77.png"},
 {id:23,img_url:"http://127.0.0.1:3000/img/78.png"},
 {id:24,img_url:"http://127.0.0.1:3000/img/79.png"},
 {id:25,img_url:"http://127.0.0.1:3000/img/80.png"},
 {id:26,img_url:"http://127.0.0.1:3000/img/81.png"} 
];
  res.send(obj)
});
app.get("/home",(req,res)=>{
  var obj=[
    {id:30,img_url:"http://127.0.0.1:3000/img/153327125265166078.jpg",name:"轻奢品牌",tit:"GUccl古驰京燕",now:2690},
    {id:31,img_url:"http://127.0.0.1:3000/img/153510877032533455.png",name:"重奢品牌",tit:"GUccl古驰京燕",now:2690},
    {id:32,img_url:"http://127.0.0.1:3000/img/124.png",name:"一折起售",tit:"GUccl古驰京燕",now:2690},
    {id:33,img_url:"http://127.0.0.1:3000/img/125.png",name:"时尚箱包",tit:"GUccl古驰京燕",now:2690}
  ];
  res.send(obj)
})
app.get("/home_1",(req,res)=>{
  var obj=[
    {id:34,img_url:"http://127.0.0.1:3000/img/promise_01.png"},
    {id:35,img_url:"http://127.0.0.1:3000/img/promise_02.png"},
    {id:36,img_url:"http://127.0.0.1:3000/img/promise_03.png"},
    {id:37,img_url:"http://127.0.0.1:3000/img/promise_04.png"}
  ];
  res.send(obj)
})
app.get("/subpage1",(req,res)=>{
  var id=req.query.id
  var show=req.query.show
  console.log(show)
  if(show==1){
  var obj=[
    {id:1,img_url:"http://127.0.0.1:3000/img/41.png",title:"SWARIVSKl",now:838,old:1467,label:"8成新"},
    {id:2,img_url:"http://127.0.0.1:3000/img/42.png",title:"OMEGA",now:838,old:1467,label:"8成新"},
    {id:3,img_url:"http://127.0.0.1:3000/img/43.png",title:"GUCCl",now:838,old:1467,label:"8成新"},
    {id:4,img_url:"http://127.0.0.1:3000/img/44.png",title:"Louis Vuitton",now:838,old:1467,label:"8成新"},
    {id:5,img_url:"http://127.0.0.1:3000/img/45.png",title:"OMEGA",now:838,old:1467,label:"8成新"},
    {id:6,img_url:"http://127.0.0.1:3000/img/46.png",title:"Ari Jordan",now:838,old:1467,label:"8成新"},
    {id:7,img_url:"http://127.0.0.1:3000/img/47.png",title:"Louis Vuitoon",now:838,old:1467,label:"8成新"},
    {id:8,img_url:"http://127.0.0.1:3000/img/48.png",title:"Guccl",now:838,old:1467,label:"8成新"}
  ];
  res.send(obj)
  }
  if(show==undefined){
    var obj=[
      {id:1,img_url:"http://127.0.0.1:3000/img/41.png",title:"SWARIVSKl",now:838,old:1467,label:"8成新"},
      {id:2,img_url:"http://127.0.0.1:3000/img/42.png",title:"OMEGA",now:838,old:1467,label:"8成新"},
      {id:3,img_url:"http://127.0.0.1:3000/img/43.png",title:"GUCCl",now:838,old:1467,label:"8成新"},
      {id:4,img_url:"http://127.0.0.1:3000/img/44.png",title:"Louis Vuitton",now:838,old:1467,label:"8成新"},
      {id:5,img_url:"http://127.0.0.1:3000/img/45.png",title:"OMEGA",now:838,old:1467,label:"8成新"},
      {id:6,img_url:"http://127.0.0.1:3000/img/46.png",title:"Ari Jordan",now:838,old:1467,label:"8成新"},
      {id:7,img_url:"http://127.0.0.1:3000/img/47.png",title:"Louis Vuitoon",now:838,old:1467,label:"8成新"},
      {id:8,img_url:"http://127.0.0.1:3000/img/48.png",title:"Guccl",now:838,old:1467,label:"8成新"}
    ]
    res.send(obj[id-1])
  }
})
app.get("/May_1",(req,res)=>{
  var obj=[
    {id:50,img_url:"http://127.0.0.1:3000/img/154124159630688970.jpg",title:"SWARIVSKl",now:838,old:1467,label:"8成新"},
    {id:51,img_url:"http://127.0.0.1:3000/img/154123821150080338.jpg",title:"OMEGA",now:838,old:1467,label:"8成新"},
    {id:52,img_url:"http://127.0.0.1:3000/img/154123959723239555.jpg",title:"GUCCl",now:838,old:1467,label:"8成新"},
    {id:53,img_url:"http://127.0.0.1:3000/img/154124015527479567.jpg",title:"Louis Vuitton",now:838,old:1467,label:"8成新"},
    {id:54,img_url:"http://127.0.0.1:3000/img/154124040667926326.jpg",title:"OMEGA",now:838,old:1467,label:"8成新"},
    {id:55,img_url:"http://127.0.0.1:3000/img/154124062571565981.jpg",title:"Ari Jordan",now:838,old:1467,label:"8成新"},
    {id:56,img_url:"http://127.0.0.1:3000/img/154124104268775960.jpg",title:"Louis Vuitoon",now:838,old:1467,label:"8成新"},
    {id:57,img_url:"http://127.0.0.1:3000/img/154124133368352011.jpg",title:"Guccl",now:838,old:1467,label:"8成新"}
  ];
  res.send(obj)
})
app.get("/imagelist_1",(req,res)=>{
  var obj=[
    {id:1,img_url:"http://127.0.0.1:3000/img/bg_lease.png"},
    {id:2,img_url:"http://127.0.0.1:3000/img/brand_story_pic1.png"},
  ];
  res.send(obj)
})
app.get("/second",(req,res)=>{
  var obj=[
    {id:3,img_url:"http://127.0.0.1:3000/img/126.png",middlename:"单肩包"},
    {id:4,img_url:"http://127.0.0.1:3000/img/127.png",middlename:"手提包"},
    {id:5,img_url:"http://127.0.0.1:3000/img/128.png",middlename:"手包...拿包"},
    {id:6,img_url:"http://127.0.0.1:3000/img/129.png",middlename:"钱包/卡包"},
    {id:7,img_url:"http://127.0.0.1:3000/img/131.png",middlename:"双肩包"},
    {id:8,img_url:"http://127.0.0.1:3000/img/132.png",middlename:"公文包"},
    {id:9,img_url:"http://127.0.0.1:3000/img/133.png",middlename:"腰包/胸包"},
    {id:10,img_url:"http://127.0.0.1:3000/img/80.png",middlename:"旅行箱包"},
    {id:11,img_url:"http://127.0.0.1:3000/img/81.png",middlename:"ipad..机套"},
    {id:12,img_url:"http://127.0.0.1:3000/img/134.png",middlename:"卡套..件套"}
  ];
  res.send(obj)
})
app.get("/Description",(req,res)=>{
  var obj=[
    {id:3,kind:"Mar by Marc Jacobs",classify:"品牌"},
    {id:4,kind:"手镯/手链/手环",classify:"品类"},
    {id:5,kind:"如图",classify:"颜色"},
    {id:6,kind:"女士",classify:"款式"},
    {id:7,kind:"全新",classify:"成色"},
    {id:8,kind:"2800875",classify:"商品ID"}
  ];
  res.send(obj)
})
app.get("/addCart",(req,res)=>{
  var pid = req.query.pid;
  var reg = /^[0-9]{}$/;
  if(!reg.test(pid)){
    res.send({code:-1,msg:"参数有误"});
    return;
  }
  res.send({code:1,msg:"添加成功"});
})

app.post("/signin",(req,res)=>{
  req.on("data",(buf)=>{
      var str = buf.toString();
      //console.log(str)
      obj = JSON.parse(str);
      //console.log(obj)
      var $uname = obj.uname;
      var $upwd = obj.upwd;
      console.log($uname,$upwd)
      if($uname==""){
          res.send({code:400,msg:"用户名称不能为空!"});
          return;
      }
      if($upwd==""){
          res.send({code:405,msg:"用户密码不能为空!"});
          return;
      }
      var sql = "SELECT id,uname,upwd FROM xs_user WHERE uname=? AND upwd=md5(?)";
      pool.query(sql,[$uname,$upwd],(err,result)=>{
        if(err) throw err;
        if(result.length>0){
            req.session.Mid = result[0].id;
            //console.log(req.session.Mid);
            res.send({code: 1, msg: "登录成功~"});
        }else {
            //req.session.Mid = null;
            res.send({code: 0, msg: "登录失败!"});
        }
    })
})
})


//判断登录状态
app.get("/islogin",(req,res)=>{
  var mid = req.session.Mid;
  //console.log(mid);
  if(mid){
    var sql = "SELECT id,uname FROM xs_user WHERE id=?";
    pool.query(sql,[mid],(err,result)=>{
      if(err) throw err;
          res.send({msg : 1,data : result[0]});
  })
  }else{
    res.send({mgs: 0});
  }
})
//注销
app.get("/singout",(req,res)=>{
  req.session.Mid = undefined;
  res.end();
})
// 注册 新用户
const md5 = require("md5-node");
app.post("/register",(req,res)=>{
    req.on("data",(buf)=> {
    var obj = buf.toString();
    obj = JSON.parse(obj);
    //console.log(obj);
    var uname = obj.uname;
    var upwd = obj.upwd;
    if (uname == "") {
        res.send({code: 400, msg: "用户名不能为空!"});
        return;
    }
    if (upwd == "") {
        res.send({code: 405, msg: "用户密码不能为空!"});
        return;
    }
    var checkuname = "SELECT uname FROM xs_user";
   pool.query(checkuname,(err,result)=>{
        if(err) throw err;
        //console.log(result);
        // 循环遍历对比
        var num = 0;
        for(var i=0;i<result.length;i++){
            //console.log(result[i].uname);
            if(uname==result[i].uname){
                res.send({code:404});
                return;
            }else{
                num++;
                if(num==1) {
                    var sql = "INSERT INTO xs_user(uname,upwd) VALUES(?,?)";
                    pool.query(sql, [uname, md5(upwd), null], (err, result)=>{
                        if(err) throw err;
                        result.affectedRows > 0 ? res.send({ok: 1}) : res.send({ok: 0});
                        //console.log(result);
                    })
                }
                return;
            }
        }
    })
    })
  })