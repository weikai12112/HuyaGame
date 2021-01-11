let whiteArgs = []
whiteArgs[0] = {}
whiteArgs[0].x = 0
whiteArgs[0].y = 0
whiteArgs[0].width = 695
whiteArgs[0].height = 600
hyExt.logger.info('创建小程序普通白板：' + JSON.stringify(whiteArgs))
hyExt.stream.addWhiteBoard(whiteArgs[0]).then(() => {
  hyExt.logger.info('创建小程序普通白板成功')    
}).catch(err => {
  hyExt.logger.info('创建小程序普通白板失败，错误信息：' + err.message)
})

var streamerInfomation = {}
function getStreamerData(){
  hyExt.logger.info('获取当前直播间主播信息')
  hyExt.context.getStreamerInfo().then(streamerInfo => {
    streamerInfomation = streamerInfo 
  }).catch(err => {
    hyExt.logger.info('获取当前直播间主播信息失败，错误信息：' + err.message)
  })
}
hyExt.logger.info('获取当前直播间主播信息')
hyExt.context.getStreamerInfo().then(streamerInfo => {
  console.log(streamerInfo.streamerRoomId,streamerInfo.streamerNick,streamerInfo.streamerAvatarUrl	)
        myPlayInfo  = streamerInfo
    let myInfo = []
    myInfo[0] = {}
    myInfo[0].url = "http://39.96.68.53:9090/record/getOne?huyaId="+streamerInfo.streamerRoomId
    myInfo[0].header = {"x-header":"application/json"}
    myInfo[0].method = "GET"
    myInfo[0].data = {huyaId:streamerInfo.streamerRoomId}
    myInfo[0].dataType = "json"
    console.log(myInfo)
    hyExt.request(myInfo[0]).then(resp => {
      myRanks = resp.data.data
    }).catch(err => {
      console.log(err)
    })
}).catch(err => {
  console.log(err.message)
})
var giftData =  []
hyExt.logger.info('获取当前直播间礼物配置')
hyExt.context.getGiftConf().then(giftConfig => {
    giftData = giftConfig
}).catch(err => {
  hyExt.logger.info('获取当前直播间礼物配置失败，错误信息：' + err.message)
})
console.table(giftData)

let args = []
args[0] = {}
args[1] = (...args) => getDAOJU(args)
hyExt.logger.info('监听当前直播间礼物变化消息：' + JSON.stringify(args))
hyExt.context.onGiftChange(args[0], args[1]).then(() => {
  hyExt.logger.info('监听当前直播间礼物变化消息成功')    
}).catch(err => {
  hyExt.logger.info('监听当前直播间礼物变化消息失败，错误信息：' + err.message)
})

function getDAOJU(args){
  console.log(args)
  if(args[0].itemId == 20277){
    giftSend(0,args[0].sendNick,args[0].sendItemCount)
  }
  if(args[0].itemId == 20269){
    giftSend(1,args[0].sendNick,args[0].sendItemCount)
  }
}


function Packet(uri,body){
  this.uri = uri;
  this.body = body;
}

// ProfileMessage({
//   uri : "",
//   toRoomid : "",
//   fromRoomid : "",
//   message:""
// })
// ProfileInfo({
//   uid:"",
//   roomid:"",
//   name:"",
//   photo:"",
//   score:"",
//   soloRoomId:""
// })

var ws = '',heart = '',inviteInfo = new Object(),wsRoomId='',invitingId=''
var scoreArray = []
var scoreRank = new PIXI.Container()
ws = new window['hyExt'].WebSocket('ws://39.96.68.53:9091');
console.log(ws)
//websocket连接所传输二进制数据的类型,只支持“arraybuffer”
ws.binaryType = "arraybuffer";

ws.onopen = function (event) {
  // console.log('onopen')
  let heartPacket = new Packet(1000,"")
  heart = setInterval(() => {
    ws.send(JSON.stringify(heartPacket))
  }, 290000);
  console.log('open')
  // ws.send(JSON.stringify({uri:1000,body:''}))
}
ws.onmessage = function (event) {
  console.log("MO MESSAGE")
  let wsData = JSON.parse(event.data)
  console.log(wsData)
  if(wsData.uri == 5000){
    addScore(wsData.body)
    flashScore()
  }
  if(wsData.uri == 7000){
    console.log('发来服务器的房间')
    wsRoomId = wsData.body.soloRoomId
    inviteInfo.message = wsData.body.soloRoomId
    let  ProfileMessage = {}
    ProfileMessage.uri = 1000
    ProfileMessage.toRoomid = input.text
    ProfileMessage.fromRoomid = streamerInfomation.streamerRoomId
    ProfileMessage.message = wsRoomId
    ProfileMessage.name = streamerInfomation.streamerNick
    ProfileMessage.photo = streamerInfomation.streamerAvatarUrl
    ws.send(JSON.stringify(new Packet(6666,ProfileMessage)))
  }
  if(wsData.uri == 6666){
    if(wsData.body.uri == 1000){
      if(!playing){
        inviteInfo = wsData.body
        console.log('收到邀请')
        paperShow(wsData.body.name,wsData.body.photo)
      }else{
        let ProfileMessage = {
          uri : 3333,
          toRoomid:inviteInfo.fromRoomid,
          fromRoomid:streamerInfomation.streamerRoomId
        }
        ws.send(JSON.stringify(new Packet(6666,ProfileMessage)))
      }
      // TweenMax.to(soloPaperContrainer,0.5,{x:0})
    }
    if(wsData.body.uri ==3333){
      console.log('对方在玩游戏')
      let gameMessage = new Sprite(
        PIXI.loader.resources['playing'].texture
      )
      gameMessage.width = 254.5
      gameMessage.height = 58.5
      gameMessage.anchor.set(0.5,0.5)
      gameMessage.position.set(187.5,200)
      gameMessage.alpha = 0
      app.stage.addChild(gameMessage)
      TweenMax.to(gameMessage,0.7,{alpha:1,onComplete:function(){
        TweenMax.to(gameMessage,1,{alpha:0})
      }})
      // gameMessage(2000)
      cancelInviteHim()
    }
    if(wsData.body.uri == 2000){
      console.log('被拒绝')
      let gameMessage = new Sprite(
        PIXI.loader.resources['refused'].texture
      )
      gameMessage.width = 254.5
      gameMessage.height = 58.5
      gameMessage.anchor.set(0.5,0.5)
      gameMessage.position.set(187.5,200)
      gameMessage.alpha = 0
      app.stage.addChild(gameMessage)
      TweenMax.to(gameMessage,0.7,{alpha:1,onComplete:function(){
        TweenMax.to(gameMessage,1,{alpha:0})
      }})
      // gameMessage(2000)
      cancelInviteHim()
    }
    if(wsData.body.uri == 404){
      console.log('404对方未上线')
      let gameMessage = new Sprite(
        PIXI.loader.resources['lineOut'].texture
      )
      gameMessage.width = 254.5
      gameMessage.height = 58.5
      gameMessage.anchor.set(0.5,0.5)
      gameMessage.position.set(187.5,200)
      gameMessage.alpha = 0
      app.stage.addChild(gameMessage)
      TweenMax.to(gameMessage,0.7,{alpha:1,onComplete:function(){
        TweenMax.to(gameMessage,1,{alpha:0})
      }})
      // gameMessage(404)
    }
    if(wsData.body.uri == 3000){
      soloContainer.addChild(inviteButton)
      soloContainer.removeChild(cancelInvite)
      let gameMessage = new Sprite(
        PIXI.loader.resources['agreed'].texture
      )
      gameMessage.width = 254.5
      gameMessage.height = 58.5
      gameMessage.anchor.set(0.5,0.5)
      gameMessage.position.set(187.5,200)
      gameMessage.alpha = 0
      app.stage.addChild(gameMessage)
      
      TweenMax.to(gameMessage,0.7,{alpha:1,onComplete:function(){
        TweenMax.to(gameMessage,1,{alpha:0})
      }})
      console.log('对方接受对局')
      // gameMessage(3000)
    }
  }
  if(wsData.uri == 8000){
    //对方进入房间
    scoreRank.alpha = 0

    inviteInfo.message = wsRoomId
    module = false
    TweenMax.to(soloContainer,0.5,{x:-375})
    TweenMax.to(indexContainer,0.5,{x:-375})
    // TweenMax.to(introduceContain,0.5,{x:0})
    reciprocal()
    soloP1Name.text = streamerInfomation.streamerNick
    soloP1RoomId.text = streamerInfomation.streamerRoomId
    soloP1Photo.texture = PIXI.Texture.from(streamerInfomation.streamerAvatarUrl.slice(0,4)+"s"+streamerInfomation.streamerAvatarUrl.slice(4))
    soloP2Name.text = wsData.body.name
    console.log(wsData.body.name)
    soloP2RoomId.text = "房间号："+wsData.body.roomid
    soloP2Photo.texture = PIXI.Texture.from(wsData.body.photo.slice(0,4)+"s"+wsData.body.photo.slice(4))
    streamerRank()
  }
  if(wsData.uri == 9000){
    //对方发来分数
    console.log('对方发来分数')
    if(wsData.body.roomid != streamerInfomation.streamerRoomId){
      soloP2Score.text = '分数：'+wsData.body.score
    }
    // streamerRank(wsData.body.name,wsData.body.roomid)
    
  }
  if(wsData.uri == 10000){
    // let gameMessage = new Sprite(
    //   PIXI.loader.resources['leftContext'].texture
    // )
    // gameMessage.width = 254.5
    // gameMessage.height = 58.5
    // gameMessage.anchor.set(0.5,0.5)
    // gameMessage.position.set(187.5,200)
    // gameMessage.alpha = 0
    // app.stage.addChild(gameMessage)
    // TweenMax.to(gameMessage,0.7,{alpha:1,onComplete:function(){
    //   TweenMax.to(gameMessage,1,{alpha:0})
    // }})
    // gameMessage(10000)
    
  }
}
ws.onerror = function (event) {
  console.log('error',event)
}
ws.onclose = function (event) {
  console.log('close')
}
function gameMessage(code){
  let gameMessage = new Sprite(
    PIXI.loader.resources['lineOut'].texture
  )
  gameMessage.width = 254.5
  gameMessage.height = 58.5
  gameMessage.anchor.set(0.5,0.5)
  gameMessage.position.set(187.5,200)
  gameMessage.alpha = 0
  if(code == 2000){
    console.log(code)
    gameMessage.text = PIXI.loader.resources['refused'].texture
  }
  if(code == 404){
    gameMessage.text = PIXI.loader.resources['lineOut'].texture
  }
  if(code == 3000){
    gameMessage.text = PIXI.loader.resources['agreed'].texture
  }
  if(code == 10000){
    gameMessage.text = PIXI.loader.resources['leftContext'].texture
  }
  app.stage.addChild(gameMessage)
  TweenMax.to(gameMessage,0.7,{alpha:1,onComplete:function(){
    TweenMax.to(gameMessage,1,{alpha:0})
  }})
}
function openRoom(){
  let openPacket = new Packet(6000,"")
  ws.send(JSON.stringify(openPacket)) 
}
//被邀请者离开房间
function leftSoloRoom(){
  let ProfileInfo = {
    roomid : streamerInfomation.streamerRoomId,
    name:streamerInfomation.streamerNick,
    soloRoomId:inviteInfo.message
  }
  ws.send(JSON.stringify(new Packet(10000,ProfileInfo)))
}
//邀请者自己离开房间
function closeSoloRoom(){
  let ProfileInfo = {
    roomid : streamerInfomation.streamerRoomId,
    name:streamerInfomation.streamerNick,
    soloRoomId:wsRoomId
  }
  ws.send(JSON.stringify(new Packet(10000,ProfileInfo)))
}
function refuseSolo(){
  //拒绝的话
  console.log('拒绝')
  let ProfileMessage = {
    uri : 2000,
    toRoomid:inviteInfo.fromRoomid,
    fromRoomid:streamerInfomation.streamerRoomId
  }
  ws.send(JSON.stringify(new Packet(6666,ProfileMessage)))
  TweenMax.to(soloPaperContrainer,0.5,{x:-375})
}
function agreeSolo(){
//同意的话
  soloContainer.x = -375
  module = false
  console.log('同意')
  let ProfileMessage ={
    uri:3000,
    fromRoomid:streamerInfomation.streamerRoomId,
    toRoomid:inviteInfo.fromRoomid
  }
  ws.send(JSON.stringify(new Packet(6666,ProfileMessage)))
  streamerRank()
  soloP1Name.text = streamerInfomation.streamerNick
  soloP1RoomId.text = streamerInfomation.streamerRoomId
  soloP1Photo.texture = PIXI.Texture.from(streamerInfomation.streamerAvatarUrl.slice(0,4)+"s"+streamerInfomation.streamerAvatarUrl.slice(4))
  soloP2Name.text = inviteInfo.name
  soloP2RoomId.text = '房间号：'+inviteInfo.fromRoomid
  soloP2Photo.texture = PIXI.Texture.from(inviteInfo.photo.slice(0,4)+"s"+inviteInfo.photo.slice(4))
  let ProfileInfo = {
    roomid : streamerInfomation.streamerRoomId,
    name:streamerInfomation.streamerNick,
    soloRoomId:inviteInfo.message,
    photo:streamerInfomation.streamerAvatarUrl
  }
  ws.send(JSON.stringify(new Packet(8000,ProfileInfo)))
  scoreRank.alpha = 0
  
  // beginMs.play();
  TweenMax.to(indexContainer,1,{x:375})
  // TweenMax.to(streamerRankContainer,0.5,{x:375})
  // TweenMax.to(introduceContain,1,{x:0})
  reciprocal()
  TweenMax.to(soloPaperContrainer,0.5,{x:-375})
}
function sendSoloScore(){
  soloP1Score.text = '分数：'+mark
  let ProfileInfo={
    roomid : streamerInfomation.streamerRoomId,
    name:streamerInfomation.streamerNick,
    soloRoomId:inviteInfo.message,
    score:mark
  }
  ws.send(JSON.stringify(new Packet(9000,ProfileInfo)))
  // ws.send(JSON.stringify({uri:9000,body:{name:streamerInfomation.streamerNick,roomid:streamerInfomation.streamerRoomId,score:mark,soloRoomId:inviteInfo.message}}))
}
function closeRoom(){
  let closeRoom = new Packet(3000,"")
  ws.send(JSON.stringify(closeRoom))
  // setTimeout(() => {
  //   ws.onclose()
  // }, 2000);
  // clearInterval(heart)
}
function flashScore(){
  // for(i = 0 ;i< scoreRank.children.length;i++){
  //   scoreRank.removeChildren (0,this.children.length )
  // }
  if(scoreRank.children.length!=0){
    scoreRank.removeChildren (0,scoreRank.children.length)
  }
  app.stage.addChild(scoreRank)
  if(scoreArray.length>0){
    for(let i = 0;i<scoreArray.length-1;i++){
      for(let j = i+1 ;j<scoreArray.length;j++){
        if(scoreArray[j].score>scoreArray[i].score){
          let a = scoreArray[j]
          scoreArray[j] = scoreArray[i]
          scoreArray[i]= a
        }
      }
    }
  }
  for(let i = 0 ;scoreArray.length>6?i<6:i<scoreArray.length;i++){
    let playerName = new PIXI.Text(scoreArray[i].name,{fontSize:"16px", tint: "0x000000"})
    playerName.position.set(450,198+i*65)
    let playerScore = new PIXI.Text(scoreArray[i].score,{fontSize:"16px", tint: "0x000000"})
    playerScore.position.set(625,198+i*65)
    scoreRank.addChild(playerScore)
    scoreRank.addChild(playerName)
  }
  console.log(scoreArray)
  // let first = new PIXI.Text(scoreArray[0].name+'('+scoreArray[0].uid+')'+scoreArray[0].score,{fontSize:"18px"})
  // first.position.set(475,600)
  
}
function addMyScore(){
  let auner = {
    name:'主播',
    uid:'123456',
    score : mark
  }
  addScore(auner)
  flashScore()
}
function addScore(obj){
  let exist = false
  for(let i = 0;i<scoreArray.length;i++){
    if(scoreArray[i].uid == obj.uid){
      scoreArray[i]=obj
      exist = true
    }
  }
  if(!exist){
    scoreArray.push(obj)
  }
}
function addBloodPC(){
  if(bloodGiftNum>0){
      bloodGiftNum = bloodGiftNum-1
      addBlood()
  }
}
function addBlood(){
  bloodGiftNumber.text = 'X'+bloodGiftNum
  if(bloodNum<=-20){
    bloodNum = bloodNum+20
  }
  if(-20<bloodNum<0){
      bloodNum = 0
  }
  TweenMax.to(blood,0.2,{x:bloodNum})
  user.texture = PIXI.loader.resources["user3"].texture
}
function fireRocketPC(){
  if(rocketNum!=0){
      rocketNum = rocketNum-1
      rocketNumber.text = 'X'+rocketNum
      if(topContainer.children[0]){
          for(i = 0 ;i< topContainer.children.length;i++){
              fireBoom(topContainer.children[i].position)
              TweenMax.killTweensOf(topContainer.getChildAt(i));
          }
      }
      if(leftContainer.children[0]){
          for(i = 0 ;i< leftContainer.children.length;i++){
              fireBoom(leftContainer.children[i].position)
              TweenMax.killTweensOf(leftContainer.getChildAt(i));
          }
      }
      if(rightContainer.children[0]){
          for(i = 0 ;i< rightContainer.children.length;i++){
              fireBoom(rightContainer.children[i].position)
              TweenMax.killTweensOf(rightContainer.getChildAt(i));
          }
      }
      if(bottomContainer.children[0]){
          for(i = 0 ;i< bottomContainer.children.length;i++){
              fireBoom(bottomContainer.children[i].position)
              TweenMax.killTweensOf(bottomContainer.getChildAt(i));
          }
      }
      let rocketModule = new Sprite(
          PIXI.loader.resources["wf"].texture
      )
      rocketModule.anchor.set(0.5,0)
      rocketModule.position.set(187.5,600)
      gameContainer.addChild(rocketModule)
      TweenMax.to(rocketModule,0.7,{y:-260})
      gansContainer.removeChildren(0,gansContainer.children.length)
      topContainer.removeChildren(0,topContainer.children.length)
      leftContainer.removeChildren(0,leftContainer.children.length)
      rightContainer.removeChildren(0,rightContainer.children.length)
      bottomContainer.removeChildren(0,bottomContainer.children.length)
  }
}



