function Packet(uri,body){
  this.uri = uri;
  this.body = body;
}
var NickName = '',heart = '',visitOpen = true


hyExt.logger.info('获取当前用户（观众/主播）信息')
hyExt.context.getUserInfo().then(userInfo => {
  NickName = userInfo.userNick
}).catch(err => {
  hyExt.logger.info('获取当前用户（观众/主播）信息失败，错误信息：' + err.message)
})
var isOpen = true
var ws = ''
function webS(){
  ws = new window['hyExt'].WebSocket('ws://39.96.68.53:9091');
  ws.binaryType = "arraybuffer";
  ws.onopen = function(event){
    console.log('open')
    let heartPacket = new Packet(1000,'围开哥哥')
    heart = setInterval(() => {
      ws.send(JSON.stringify(heartPacket))
    }, 290000);
  }
  ws.onmessage = function (event) {
    console.log(event.data)
    console.log('onmessage')
    if(JSON.parse(event.data).uri == 3000){
      visitOpen = false
      joinGame()
    }
    if(JSON.parse(event.data).uri == 6000){
      visitOpen = true
      joinGame()
    }
  }
  ws.onerror = function (event) {
    console.log('error',event)
  }
  ws.onclose = function (event) {
    console.log('close')
    clearInterval(heart)
    // if(isOpen){
    //   let noRoomOpen = new Sprite(
    //     PIXI.loader.resources["noOpen"].texture
    //   )
    //   noRoomOpen.width = 375*constraintScale
    //   noRoomOpen.height = 600*constraintScale
    //   app.stage.addChild(noRoomOpen)
    //   isOpen = false
    // }
  }
}
function joinGame(){
  if(visitOpen&&sendHL.children.length == 0){
    if(visitNotOpen.children.length!=0){
      visitNotOpen.removeChildren(0,visitNotOpen.children.length)
    }
    
    let hasOpen = new Sprite(
      PIXI.loader.resources["hasOpen"].texture
    )
    hasOpen.width = 375*constraintScale
    hasOpen.height = 600*constraintScale
    sendHL.addChild(hasOpen)
    let joinGame = new Sprite(
        PIXI.loader.resources["joinGame"].texture
    )
    joinGame.anchor.set(0.5,0.5)
    joinGame.width = 125*constraintScale
    joinGame.height = 36*constraintScale
    joinGame.position.set(187.5*constraintScale,265*constraintScale)
    joinGame.on('pointerdown',sendHuLiang)
    joinGame.buttonMode = true;
    joinGame.interactive = true;
    sendHL.addChild(joinGame)
  }
  if(!visitOpen&&visitNotOpen.children.length == 0){
    if(sendHL.children.length != 0){
      sendHL.removeChildren(0,sendHL.children.length)
    }
    let noRoomOpen = new Sprite(
      PIXI.loader.resources["noOpen"].texture
    )
    noRoomOpen.width = 375*constraintScale
    noRoomOpen.height = 600*constraintScale
    let back = new Sprite(
      PIXI.loader.resources['back'].texture
    )
    back.position.set(0,100*constraintScale)
    back.buttonMode = true;
    back.interactive = true;
    back.on('pointerdown',noOpenBack)
    visitNotOpen.addChild(noRoomOpen)
    visitNotOpen.addChild(back)
    let tryAgain = new Sprite(
      PIXI.loader.resources['tryAgain'].texture
    )
    tryAgain.width = 125*constraintScale
    tryAgain.height = 36*constraintScale
    tryAgain.anchor.set(0.5,0.5)
    tryAgain.position.set(187.5*constraintScale,260*constraintScale)
    visitNotOpen.addChild(tryAgain)
    tryAgain.buttonMode = true;
    tryAgain.interactive = true;
    tryAgain.on('pointerdown',tryAgainIt)
  }
}
function tryAgainIt(){
  ws.send(JSON.stringify(new Packet(1000,'')))
  joinGame()
}
function noOpenBack(){
  
  if(flag){

    TweenMax.to(PCIntroContrainer,0.3,{x:-375*constraintScale})
  }else{
      TweenMax.to(controlIntroContrainer,0.3,{x:-375*constraintScale})
  }
  TweenMax.to(visitNotOpen,0.3,{x:-375*constraintScale})
  TweenMax.to(indexContainer,0.3,{x:0})
}
function sendScore(){
  ws.send(JSON.stringify(new Packet(5000,mark)))
}
// let sendBlood = []
// sendBlood[0] = {}
// sendBlood[0].giftId = 20277
// sendBlood[0].giftCount = 1
// hyExt.context.sendGift(sendBlood[0]).then(() => {
//   console.log('当前观众血瓶送礼成功')    
// }).catch(err => {
//   hyExt.logger.info('当前观众送礼失败，错误信息：' + err.message)
// })

// let sendRocket = []
// sendRocket[0] = {}
// sendRocket[0].giftId = 20269
// sendRocket[0].giftCount = 1
// hyExt.context.sendGift(sendRocket[0]).then(() => {
//   console.log('当前观众火箭送礼成功')    
// }).catch(err => {
//   hyExt.logger.info('当前观众送礼失败，错误信息：' + err.message)
// })
function sendHuLiang(){
  console.log('虎粮')
  let sendJion = []
  sendJion[0] = {}
  sendJion[0].giftId = 4
  sendJion[0].giftCount = 1
  hyExt.context.sendGift(sendJion[0]).then(() => {
    console.log('当前观众虎粮送礼成功') 
    // TweenMax.to(introduceContain,1,{x:375})
    TweenMax.to(sendHL,1,{x:375*constraintScale})
    ws.send(JSON.stringify(new Packet(2000,NickName)))
  }).catch(err => {
    hyExt.logger.info('当前观众送礼失败，错误信息：' + err.message)
  })
}
//监听观众送礼
let args = []
args[0] = "giftSubmit"
args[1] = (...args) => getDAOJU(args)
hyExt.logger.info('监听宿主消息：' + JSON.stringify(args))
hyExt.context.on(args[0], args[1])

function getDAOJU(args){
  console.log('监听成功')
  console.log(args)
  if(args[0].itemId == 20277){
    console.log('送虎粮')
    giftSend(0,NickName,args[0].sendItemCount)
  }
  if(args[0].itemId == 20269){
    giftSend(0,NickName,args[0].sendItemCount)
  }
}