var express = require('express')
var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.use(express.static('public'))

app.get('/', function(req, res){
  res.sendFile(__dirname + '/live2d.html');
});

io.on('connection', function(socket){
  console.log('a user connected');
});

http.listen(3000, function(){
  console.log('listening on *:3000');
});

var randomMsg = () => {
  var MsgText = [
        "你这么可爱，点个关注啊。",
        "每晚八点不见不散。",
        "喜欢主播可以加下QQ粉丝群584502884",
        "直播间里大家彼此尊重，不要引战哦"
    ];
  var r = Math.floor(Math.random() * MsgText.length);
  return MsgText[r];
}

var randomMotion = () => {
  var talkMotion = [
    "happy",
    "look",
    "upset"  
   ];
  var r = Math.floor(Math.random() * talkMotion.length);
  return talkMotion[r];
}

var sendMsgToLive2d = (msg) => {
  io.emit('message', msg);
}

var sendMotionToLive2d = (motion) => {
  io.emit('motion', motion);
}

var sendExpressionToLive2d = (exp) => {
  io.emit('expression', exp);
}

var randomActivity = () => {
  sendMsgToLive2d(randomMsg());
  sendMotionToLive2d(randomMotion());
}

var randomAction = (al) => {
  var r = Math.floor(Math.random() * al.length);
  al[r]();
}

var actionList = []
var miao = () => {
  sendMsgToLive2d("喵~");
  sendMotionToLive2d("miao")
}
actionList.push(miao)

var lip = () => {
  sendMsgToLive2d("啧啧~啧啧啧~");
  sendMotionToLive2d("lip")
}
actionList.push(lip)

var yami = () => {
  sendMsgToLive2d("敲好吃的~");
  sendMotionToLive2d("yami")
}
actionList.push(yami)

var tickle = () => {
  sendMsgToLive2d("嘿嘿~略~");
  sendMotionToLive2d("tickle")
}
actionList.push(tickle)
////////////////////////////////////////////////////////randomActivity
setInterval(function() {
  let  r = Math.floor(Math.random() * 10);
  (r > 5) ? randomActivity() : randomAction(actionList);
}, 12000);


//////////////////////////////////////////////////////////
/*********************************************************
ChatRoom Control
*********************************************************/