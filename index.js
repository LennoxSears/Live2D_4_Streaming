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
        "新人主播会多多努力的，大家多多支持点个关注啊。",
        "每天下午两点不见不散呢！",
        "喜欢主播可以加下QQ粉丝群584502884",
        "直播间里大家彼此尊重，不要引战哦",
    ];
  var r = Math.floor(Math.random() * MsgText.length);
  return MsgText[r];
}

var randomMotion = () => {
  var talkMotion = [
        "plainTalk",
        "talk",
        "blinkTalk"
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

////////////////////////////////////////////////////////randomActivity
setInterval(function() {
  randomActivity();
}, 12000);
