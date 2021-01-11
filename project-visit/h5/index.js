// import  PIXI from 'pixi.js';
var flag = true

IsPC()
var  firstText ='',firstNameText ='',secondText ='',secondNameText ='',thirdText = '',thirdNameText ='',forthText ='',forthNameText ='',fifthText ='',fifthNameText =''
var firstUser = {},secondUser = {},thirdUser = {},forthUser = {},fifthUser = {},myRanks = {},myPlayInfo = {}
var bloodGiftNum = 0,rocketNum = 0;
var bloodGiftNumber='',rocketNumber='';
var times = [],gameTime = '';
var innerWidth = window.innerWidth
var innerHeight = window.innerHeight
// window.resizeTo(775, 640)
var controlShut = false
// var beginMs = document.createElement("audio");
var readyMs = document.createElement("audio");
var gameMs = document.createElement("audio");
// beginMs.setAttribute("src", "sound/HappyLittleElves.mp3");
readyMs.setAttribute("src", "sound/readyGO.wav");
gameMs.setAttribute("src", "sound/gameMs.mp3");
// beginMs.loop = true
var together = true
var continueNum = 0
var Text = PIXI.Text
var Application = PIXI.Application
var Sprite = PIXI.Sprite
var Container = PIXI.Container
var Graphics = PIXI.Graphics
var loader = PIXI.Loader
const app = new Application({
    width:innerWidth,
    height:innerHeight,
    antialias:true,
    transparent:false,
    resolution:flag?1:window.devicePixelRatio,
    backgroundColor:0xfbe5aa
})
app.width = innerWidth
var realScale = app.width/app.height, idealScale = 375/600,constraintScale = app.width/375
var horizion = false
var noHorizion = '',firstHorizion = true

// function isHorizion(){
//     if(window.innerWidth/window.innerHeight>25/26){
//         noHorizion = new Sprite(
//             PIXI.loader.resources['noHorizion'].texture
//         )
//         noHorizion.width = 375*constraintScale
//         noHorizion.height = 600*constraintScale
//         noHorizion.anchor.set(0.5,0.5)
//         noHorizion.position.set(-375*constraintScale,innerHeight/2)
//         app.stage.addChild(noHorizion)
//         console.log('为横屏')
//         noHorizion.x = 187.5*constraintScale
//         horizion = true
//         firstHorizion = false
//         return
//     }else{
//         console.log('为竖屏')
//         return
//     }
// }
// window.addEventListener("resize",function(){
//     console.log('监听到窗口变化')
//     if(horizion){
//         console.log('已显示，要隐藏')
//         noHorizion.x = -375*constraintScale
//         app.renderer.resize(document.documentElement.clientWidth,document.documentElement.clientHeight)
//         constraintScale = app.width/375
//         setup()
//     }else{
//         console.log('未显示，不隐藏')
//         if(firstHorizion){
//             noHorizion = new Sprite(
//                 PIXI.loader.resources['noHorizion'].texture
//             )
//             noHorizion.width = 375*constraintScale
//             noHorizion.height = 600*constraintScale
//             noHorizion.anchor.set(0.5,0.5)
//             noHorizion.position.set(-375*constraintScale,innerHeight/2)
//             app.stage.addChild(noHorizion)
//         }
//         noHorizion.x = 187.5*constraintScale
//     }
//     horizion = !horizion
// })
if(innerWidth/innerHeight>375/600){
    // console.log("过宽")
    var gameContainerY = 100*constraintScale-(495*constraintScale-(innerHeight-100*constraintScale))/2
    // console.log(gameContainerY)
    // app.resizeTo(375/600*innerHeight,innerHeight)
    // app.height = innerHeight
    // app.width = 375/600*innerHeight
}else{
    // console.log("过长")
    var gameContainerY = 100*constraintScale
    // app.resizeTo(innerWidth,600/375*innerWidth)
    // app.width = innerWidth
    // app.height = 600/375*innerWidth
}
const gansContainer = new Container();
const gameContainer = new Container();
const lanbContainer = new Container();
const rankContainer = new Container();
const indexContainer = new Container();
const introduceContain = new Container();
const PCIntroContrainer = new Container()
PCIntroContrainer.x = -375*constraintScale
const controlIntroContrainer = new Container()
controlIntroContrainer.x = -375*constraintScale
const overContainer = new Container();
const winContainer  = new Container()
var leftContainer = new Container();
const topContainer = new Container();
const bottomContainer = new Container();
const rightContainer = new Container();
const continueContrainer = new Container();
const sendStreamer = new Container();

// continueContrainer.position.set(375*constraintScale,100*constraintScale)
introduceContain.x = -375*constraintScale
overContainer.x = -375*constraintScale
winContainer.x = -375 *constraintScale
sendStreamer.x = -375 *constraintScale
const ranks = new Container();
ranks.width = 231*constraintScale
ranks.height = 400*constraintScale
ranks.y = 150*constraintScale
rankContainer.y = 0*constraintScale
rankContainer.x = 375*constraintScale
indexContainer.x = 0*constraintScale
indexContainer.y = 0*constraintScale
gameContainer.backgroundColor = 0x1d9ce0;
// gameContainer.position.set(0,100*constraintScale)
// gameContainer.anchor(0,0.5)
// gameContainer.y = (innerHeight-105*constraintScale)/2+105*constraintScale
gameContainer.y = gameContainerY
app.stage.addChild(gameContainer);
app.stage.addChild(lanbContainer);
app.stage.addChild(overContainer);
app.stage.addChild(winContainer);
app.stage.addChild(continueContrainer);
var style = {
	fontFamily: 'myfont',
    fontSize: '28px',
    stroke: '#ffffff', 
    strokeThickness: 4,
    align : 'center',
};
var bloodNum = 0
var mark = 0
var sendHL= new Container()
sendHL.x = -375*constraintScale
var visitNotOpen= new Container()
visitNotOpen.x=-375*constraintScale
// const Mark = new Text(mark,style)
function IsPC() {
    var userAgent = navigator.userAgent;
    var Agents = ["Android", "iPhone", "SymbianOS", "Windows Phone", "iPad", "iPod"];
    flag = true;
    for (var v = 0; v < Agents.length; v++) {
        if (userAgent.indexOf(Agents[v]) > 0) {
            flag = false;
            break;
        }
    }
    // console.log('是否为PC端：'+flag)
    
}
app.stage.addChild(indexContainer)
app.stage.addChild(controlIntroContrainer)
app.stage.addChild(rankContainer);
app.stage.addChild(introduceContain);
app.stage.addChild(PCIntroContrainer)
app.stage.addChild(sendHL)
app.stage.addChild(visitNotOpen)
app.stage.addChild(sendStreamer)
document.body.appendChild(app.view);
var user = ''
var bg = ''
var lanb = ''
var blood = ''
var blood2 = ''
var ready = ''
var go = ''
var backgroundcolor = ''
var Mark = ''
PIXI.loader
    .add('user2', "image/user2.png")
    .add('user', "image/user.png")
    .add('huya',"image/huya.png")
    .add('bag',"image/background.png")
    .add('lanb',"./image/lanb.png")
    .add('blood','image/bloods.png')
    .add('index','image/index.png')
    .add('start',"image/start.png")
    .add('ready',"image/ready.png")
    .add('go',"image/GO.png")
    .add('gans',"image/gans.png")
    .add('backgroundcolor',"image/background-color.png")
    .add('rankBottom',"image/rankBotton.png")
    .add('togetherBottom',"image/togetherModer.png")
    .add('introduce',"image/introduce.png")
    .add('rankPage',"image/rank.png")
    .add('test',"image/test.png")
    .add('true',"image/huyaSendBlood.png")
    .add('back',"image/back.png")
    .add('first',"image/first.png")
    .add('second',"image/second.png")
    .add('third',"image/third.png")
    .add('forth',"image/forth.png")
    .add('fifth',"image/fifth.png")
    .add('gameOver',"image/over.png")
    .add('victory',"image/victory.png")
    .add('turnBack',"image/turnBack.png")
    .add('rule',"image/rule.png")
    .add('close',"image/close.png")
    .add('again',"image/again.png")
    .add ('pointFont',"font/pointFont.fnt")
    .add ('hideWall',"image/hide.jpg")
    .add ('userBoom',"image/userCry.png")
    .add ('fire',"image/fire.png")
    .add ('rocket',"image/rocket.jpg")
    .add ('bloodGift',"image/bloodGift.jpg")
    .add ('fireRocket1',"image/fireRocket1.png")
    .add ('fireRocket2',"image/fireRocket2.png")
    .add ('fireRocket3',"image/fireRocket3.png")
    .add ('fireRocket4',"image/fireRocket4.png")
    .add ('fireRocket5',"image/fireRocket5.png")
    .add ('huya2',"image/huya2.png")
    .add ('wf',"image/wf.png")
    .add ('gift',"image/gift.png")
    .add ('openRoom',"image/openRoom.png")
    .add ('waitGame',"image/waitGame.png")
    .add ('noOpen',"image/noOpen.png")
    .add ('hasOpen',"image/hasOpen.png")
    .add ('joinGame',"image/joinGame.png")
    .add ('VirtualButton',"image/VirtualButton.png")
    .add ('vB',"image/vb.png")
    .add ('virsualB',"image/virsualB.png")
    .add ('next',"image/next.png")
    .add ('PCIntro',"image/PCIntro.png")
    .add ('bloodButton',"image/bloodButton.png")
    .add ('fireButton',"image/fireButton.png")
    .add ('user3',"image/user3.png")
    .add ('trainButton',"image/trainButton.png")
    .add ('continue',"image/continue.png")
    .add ('huyaBoss1',"image/huyaBoss1.png")
    .add ('huyaBoss2',"image/huyaBoss2.png")
    .add ('huyaBossBoom',"image/huyaBossBoom.png")
    .add ('huyaSendCry',"image/huyaGirlCry.png")
    .add ('true2',"image/huyaSendBlood2.png")
    .add ('huyaSendCry2',"image/huyaGirlCry2.png")
    .add ('waitGame2',"image/waitGame2.png")
    .add ('sendOne',"image/sendOne.png")
    .add ('sendOver',"image/sendOver.png")
    .add ('tryAgain',"image/tryAgain.png")
    .add ('noHorizion',"image/noHorizion.png")
    .load(setup)
function showSendContainer(){
    console.log('12333')
    if(flag){
        TweenMax.to(PCIntroContrainer,0.3,{x:-375*constraintScale})
    }else{
        TweenMax.to(introduceContain,0.3,{x:-375*constraintScale})
    }
    TweenMax.to(sendStreamer,0.3,{x:0})
}
function continueShow(){
    let continueSprite = new Sprite(
        PIXI.loader.resources['continue'].texture
    )
    continueSprite.width = 81.9*constraintScale
    continueSprite.height = 109.2*constraintScale
    continueSprite.position.set(375*constraintScale,86*constraintScale)
    continueContrainer.addChild(continueSprite)
    let continueLength = new PIXI.BitmapText('0', {font: 24*constraintScale+"px pointFont", tint: "0x642f00"});
    continueLength.text = continueNum
    continueLength.anchor.set(0.5,0.5)
    continueLength.position.set(375*constraintScale,185*constraintScale)
    continueContrainer.addChild(continueLength)
    TweenMax.to(continueSprite,0.5,{x:265*constraintScale,onComplete:function(){
        TweenMax.to(continueSprite,0.2,{alpha:0})
    }})
    TweenMax.to(continueLength,0.5,{x:285*constraintScale,onComplete:function(){
        TweenMax.to(continueLength,0.2,{alpha:0})
    }})
}
function addRank(){
    let test = new Sprite(
        PIXI.loader.resources["test"].texture
    )
    test.y = 50*constraintScale
    ranks.addChild(test)
}
function gameOverIt(){
    clearTimeout(gameTime)
    controlShut = false
    TweenMax.pauseAll()
    gansContainer.removeChildren(0,gansContainer.children.length)
    topContainer.removeChildren(0,topContainer.children.length)
    leftContainer.removeChildren(0,leftContainer.children.length)
    rightContainer.removeChildren(0,rightContainer.children.length)
    bottomContainer.removeChildren(0,bottomContainer.children.length)
    continueContrainer.removeChildren(0,continueContrainer.children.length)
    for(let i in times){
        clearTimeout(times[i])
    }
    clearTimeout(gameTime)
    TweenMax.to(overContainer,0.4,{x:0})
    if(flag){
        gameMs.pause()  
    }else{   
        gameMs.stop()
    }
}
function back(){
    TweenMax.to(indexContainer,1,{x:0})
    TweenMax.to(rankContainer,1,{x:-375*constraintScale})
}
function turnBackIndex(){
    TweenMax.to(indexContainer,1,{x:0})
    TweenMax.to(introduceContain,1,{x:-375*constraintScale})
}
function gameAgain(){
    bloodNum = 0
    TweenMax.to(blood,0.2,{x:bloodNum*constraintScale})
    mark = 0
    Mark.text = mark

    TweenMax.to(overContainer,0.4,{x:-375*constraintScale})
    start()
}
function loseTurnBackIndex(){
    // closeRoom()
    if(flag){
        // beginMs.play();
    }
    bloodNum = 0
    TweenMax.to(blood,0.2,{x:bloodNum*constraintScale})
    mark = 0
    Mark.text = mark
    TweenMax.to(indexContainer,0.4,{x:0})
    TweenMax.to(overContainer,0.4,{x:-375*constraintScale})
}
function winBackIndex(){
    bloodNum = 0
    TweenMax.to(blood,0.2,{x:bloodNum*constraintScale})
    mark = 0
    Mark.text = mark
    TweenMax.to(indexContainer,0.4,{x:0})
    TweenMax.to(winContainer,0.4,{x:-375*constraintScale})
}
function flashRank(){
    firstText = new Text('',{fontSize:"15px"})
    firstText.x = 240*constraintScale
    firstText.y = 85*constraintScale
    ranks.addChild(firstText)
    firstNameText = new Text('',{fontSize:"15px"})
    firstNameText.x = 125*constraintScale
    firstNameText.y = 85*constraintScale
    ranks.addChild(firstNameText)
    secondText = new Text('',{fontSize:"15px"})
    secondText.x = 240*constraintScale
    secondText.y = 135*constraintScale
    ranks.addChild(secondText)
    secondNameText = new Text('',{fontSize:"15px"})
    secondNameText.x = 125*constraintScale
    secondNameText.y = 135*constraintScale
    ranks.addChild(secondNameText)
    thirdText = new Text('',{fontSize:"15px"})
    thirdText.x = 240*constraintScale
    thirdText.y = 185*constraintScale
    ranks.addChild(thirdText)
    thirdNameText = new Text('',{fontSize:"15px"})
    thirdNameText.x = 125*constraintScale
    thirdNameText.y = 185*constraintScale
    ranks.addChild(thirdNameText)
    forthText = new Text('',{fontSize:"15px"})
    forthText.x = 240*constraintScale
    forthText.y = 235*constraintScale
    ranks.addChild(forthText)
    forthNameText = new Text('',{fontSize:"15px"})
    forthNameText.x = 125*constraintScale
    forthNameText.y = 235*constraintScale
    ranks.addChild(forthNameText)
    fifthText = new Text('',{fontSize:"15px"})
    fifthText.x = 240*constraintScale
    fifthText.y = 285*constraintScale
    ranks.addChild(fifthText)
    fifthNameText = new Text('',{fontSize:"15px"})
    fifthNameText.x = 125*constraintScale
    fifthNameText.y = 285*constraintScale
    ranks.addChild(fifthNameText)
}
function reflashRank(){
    firstText.text = firstUser.score
    firstNameText.text = firstUser.name
    secondText.text = secondUser.score
    secondNameText.text = secondUser.name
    thirdText.text = thirdUser.score
    thirdNameText.text = thirdUser.name
    forthText.text = forthUser.score
    forthNameText.text = forthUser.name
    fifthText.text = fifthUser.score
    fifthNameText.text = fifthUser.name
}
function reciprocal(){
    let three = new Sprite(
        PIXI.loader.resources['three'].texture
    )
    three.anchor.set(0.5,0.5)
    three.position.set(187.5,200)
    app.stage.addChild(three)
}
function setup(){
    if(!flag){
        let top = new Sprite(
            PIXI.loader.resources["virsualB"].texture
        )
        top.width = 280*constraintScale
        top.height = 90*constraintScale
        top.anchor.set(0,0.5)
        top.rotation = -1.57
        top.position.set(187.5*constraintScale,250*constraintScale)
        top.buttonMode = true;
        top.interactive = true;
        top.on('pointerdown',VirsualTop)
        gameContainer.addChild(top)
        let right = new Sprite(
            PIXI.loader.resources["virsualB"].texture
        )
        // right.width = 84.9*constraintScale
        // right.height = 26.1*constraintScale
        // right.rotation = 1.57
        right.height = 90*constraintScale
        right.width = 200*constraintScale
        right.anchor.set(0,0.5)
        right.buttonMode = true;
        right.interactive = true;
        right.on('pointerdown',VirsualRight)
        right.position.set(200*constraintScale,250*constraintScale)
        gameContainer.addChild(right)
        let bottom = new Sprite(
            PIXI.loader.resources["virsualB"].texture
        )
        bottom.width = 280*constraintScale
        bottom.height = 90*constraintScale
        bottom.buttonMode = true;
        bottom.interactive = true;
        bottom.on('pointerdown',VirsualBottom)
        // bottom.width = 84.9*constraintScale
        // bottom.height = 26.1*constraintScale
        bottom.rotation = 1.57
        bottom.anchor.set(0.5,0.5)
        bottom.position.set(187.5*constraintScale,400*constraintScale)
        gameContainer.addChild(bottom)
        let left = new Sprite(
            PIXI.loader.resources["virsualB"].texture
        )
        left.width = 200*constraintScale
        left.height = 90*constraintScale
        left.buttonMode = true;
        left.interactive = true;
        left.on('pointerdown',VirsualLeft)
        left.rotation = 3.14
        left.anchor.set(1,0.5)
        left.position.set(-30*constraintScale,250*constraintScale)
        gameContainer.addChild(left)
        top.alpha = 0
        bottom.alpha = 0
        right.alpha = 0
        left.alpha = 0
    }
    app.resolution = flag?1:window.devicePixelRatio
    Mark = new PIXI.BitmapText('0', {font: 35*constraintScale + "px pointFont", tint: "0x000000",stroke: '0xffffff', strokeThickness: 4});
    Mark.x = 298*constraintScale
    Mark.y = 50*constraintScale
    Mark.anchor.set(0.5,0)
    // beginMs.play();
    init()
    const victoryImg = new Sprite(
        PIXI.loader.resources["victory"].texture
    )
    const backIndex = new Sprite(
        PIXI.loader.resources["turnBack"].texture
    )
    victoryImg.width = 375*constraintScale
    victoryImg.height = 600*constraintScale
    backIndex.width = 103*constraintScale
    backIndex.height = 36*constraintScale
    backIndex.anchor.set(0.5,0.5)
    backIndex.x=187.5*constraintScale
    backIndex.y=300*constraintScale
    backIndex.buttonMode = true;
    backIndex.interactive = true;
    backIndex.on('pointerdown',winBackIndex)
    backIndex.on('mouseover',doom)
    winContainer.addChild(victoryImg)
    winContainer.addChild(backIndex)
    const overImg = new Sprite(
        PIXI.loader.resources["gameOver"].texture
    )
    overImg.width = 375*constraintScale
    overImg.height = 600*constraintScale
    const again = new Sprite(
        PIXI.loader.resources["again"].texture
    )
    again.x = 80*constraintScale
    again.y = 345*constraintScale
    again.buttonMode = true;
    again.interactive = true;
    const turnBack = new Sprite(
        PIXI.loader.resources["turnBack"].texture
    )
    turnBack.anchor.set(0.5,0.5)
    turnBack.width = 103*constraintScale
    turnBack.height = 36*constraintScale
    turnBack.x = 187.5*constraintScale
    turnBack.y = 355*constraintScale
    turnBack.buttonMode = true;
    turnBack.interactive = true;
    again.on('pointerdown',gameAgain)
    again.on('mouseover',doom)
    turnBack.on('pointerdown',loseTurnBackIndex)
    turnBack.on('mouseover',doom)
    overContainer.addChild(overImg)
    // overContainer.addChild(again)
    overContainer.addChild(turnBack)
    const controlIntro = new Sprite(
        PIXI.loader.resources['rule'].texture
    )
    controlIntro.width = 375*constraintScale
    controlIntro.height = 600*constraintScale
    controlIntroContrainer.addChild(controlIntro)
    const next = new Sprite(
        PIXI.loader.resources['next'].texture
    )
    next.width = 180*constraintScale
    next.height = 50*constraintScale
    
    next.anchor.set(0.5,1)
    next.position.set(187.5*constraintScale,innerHeight-20)
    next.buttonMode = true;
    next.interactive = true;
    next.on('pointerdown',nextIntro)
    controlIntroContrainer.addChild(next)
    const intro = new Sprite(
        PIXI.loader.resources["waitGame"].texture
    )
    intro.width = 375*constraintScale
    intro.height = 600*constraintScale
    const closeRule = new Sprite(
        PIXI.loader.resources["start"].texture
    )
    closeRule.width = 180*constraintScale
    closeRule.height = 50*constraintScale
    closeRule.anchor.set(0.5,1)
    closeRule.x = 187.5*constraintScale
    closeRule.y = innerHeight-20
    closeRule.buttonMode = true;
    closeRule.interactive = true;
    closeRule.on('pointerdown',showSendContainer)
    closeRule.on('mouseover',doom)
    introduceContain.addChild(intro)
    introduceContain.addChild(closeRule)
    const rankPage = new Sprite(
        PIXI.loader.resources["rankPage"].texture
    )
    const backBotton = new Sprite(
        PIXI.loader.resources["back"].texture
    )
    backBotton.buttonMode = true;
    backBotton.interactive = true;
    backBotton.on('pointerdown',back)
    backBotton.on('mouseover',doom)
    backBotton.x = -30*constraintScale
    rankPage.zIndex = 10*constraintScale
    // rankContainer.addChild(backBotton)
    // rankContainer.addChild(rankPage)
    // rankContainer.addChild(ranks)
    // const test = new Sprite(
    //     PIXI.loader.resources["test"].texture
    // )
    // ranks.addChild(test)
    // const first = new Sprite(
    //     PIXI.loader.resources["first"].texture
    // )
    // first.y = 70
    // ranks.addChild(first)
    // const second = new Sprite(
    //     PIXI.loader.resources["second"].texture
    // )
    // second.y = 120
    // ranks.addChild(second)
    // const third = new Sprite(
    //     PIXI.loader.resources["third"].texture
    // )
    // third.y = 170
    // ranks.addChild(third)
    // const forth = new Sprite(
    //     PIXI.loader.resources["forth"].texture
    // )
    // forth.y = 220
    // ranks.addChild(forth)
    // const fifth = new Sprite(
    //     PIXI.loader.resources["fifth"].texture
    // )
    // fifth.y = 270
    // ranks.addChild(fifth)

    

    backgroundcolor = new Sprite(
        PIXI.loader.resources["backgroundcolor"].texture
    )
    backgroundcolor.width = 375*constraintScale
    backgroundcolor.height = 551*constraintScale
    gameContainer.addChild(backgroundcolor)
    blood = new Sprite(
        PIXI.loader.resources["blood"].texture
    )
    blood.width = 375*constraintScale
    blood.height = 105*constraintScale
    blood2 = new Sprite(
        PIXI.loader.resources["blood"].texture
    )
    blood2.x = 375*constraintScale
    lanbContainer.addChild(blood)
    // lanbContainer.addChild(blood2)
    gameContainer.addChild(gansContainer)
    user = new Sprite(
        PIXI.loader.resources["user"].texture
    );
    user.width = 89.66666666666667*constraintScale;
    user.height = 97.75*constraintScale;
    user.position.set(187.5*constraintScale,250*constraintScale)
    user.anchor.set(0.5,0.5)
    gameContainer.addChild(user);

    
    bg = new Sprite(
        PIXI.loader.resources["bag"].texture
    )
    bg.width = 375*constraintScale;
    bg.height = 500*constraintScale;
    bg.position.set(0,0)
    gameContainer.addChild(bg)
    lanb = new Sprite(
        PIXI.loader.resources["lanb"].texture
    )
    lanb.width = 375*constraintScale
    lanb.height = 105*constraintScale
    lanb.lastSortedIndex = 1
    lanbContainer.addChild(lanb)
    const index = new Sprite(
        PIXI.loader.resources["index"].texture
    )
    index.width = 375*constraintScale
    index.height = 600*constraintScale
    indexContainer.addChild(index)
    const startBottom = new Sprite(
        PIXI.loader.resources['start'].texture
    )
    startBottom.x = 97.5*constraintScale
    startBottom.y = 350*constraintScale
    startBottom.buttonMode = true;
    startBottom.interactive = true;
    // indexContainer.addChild(startBottom)
    const togetherBottom = new Sprite(
        PIXI.loader.resources['togetherBottom'].texture
    )
    togetherBottom.x = 97.5*constraintScale
    togetherBottom.y = 290*constraintScale
    togetherBottom.buttonMode = true;
    togetherBottom.interactive = true;
    // indexContainer.addChild(togetherBottom)
    const rankBottom = new Sprite(
        PIXI.loader.resources['rankBottom'].texture
    )
    rankBottom.x = 97.5*constraintScale
    rankBottom.y = 410*constraintScale
    rankBottom.buttonMode = true;
    rankBottom.interactive = true;
    // indexContainer.addChild(rankBottom)
    const introduceBottom = new Sprite(
        PIXI.loader.resources['openRoom'].texture
    )
    introduceBottom.width = 235*constraintScale
    introduceBottom.height = 59*constraintScale
    introduceBottom.anchor.set(0.5,0.5)
    introduceBottom.x = 187.5*constraintScale
    introduceBottom.y = 14/15*innerHeight
    introduceBottom.buttonMode = true;
    introduceBottom.interactive = true;
    indexContainer.addChild(introduceBottom)

    const trainButton = new Sprite(
        PIXI.loader.resources['trainButton'].texture
    )
    trainButton.width = 235*constraintScale
    trainButton.height = 59*constraintScale
    trainButton.anchor.set(0.5,0.5)
    trainButton.x = 187.5*constraintScale
    trainButton.y = 12/15*innerHeight
    trainButton.buttonMode = true;
    trainButton.interactive = true;
    trainButton.on('pointerdown',alone)
    trainButton.on('mouseover',doom)
    indexContainer.addChild(trainButton)

    introduceBottom.on('pointerdown',ruleShow)
    introduceBottom.on('mouseover',doom)
    togetherBottom.on('pointerdown',play2)
    togetherBottom.on('mouseover',doom)
    // rankBottom.on('click',rankPageMove)
    
    rankBottom.on('pointerdown',rankPageMove)
    rankBottom.on('mouseover',doom)
    startBottom.on('pointerdown',start)
    startBottom.on('mouseover',doom)
    
    ready = new Sprite(
        PIXI.loader.resources["ready"].texture
    )
    ready.anchor.set(0.5,0.5)
    ready.width = 249.6*constraintScale
    ready.height = 82.8*constraintScale
    ready.position.set(187.5*constraintScale,-300*constraintScale)
    gameContainer.addChild(ready);
    go = new Sprite(
        PIXI.loader.resources["go"].texture
    )
    go.anchor.set(0.5,0.5)
    go.position.set(187.5*constraintScale,-300*constraintScale)
    go.width = 168*constraintScale
    go.height = 88.8*constraintScale
    gameContainer.addChild(go);
    
    gameContainer.addChild(rightContainer);
    gameContainer.addChild(topContainer);
    gameContainer.addChild(leftContainer);
    gameContainer.addChild(bottomContainer);
    
    flashRank()
    const rocketLogo = new Sprite(
        PIXI.loader.resources["rocket"].texture
    )
    rocketLogo.width=22*constraintScale
    rocketLogo.height=22*constraintScale
    rocketLogo.anchor.set(0.5,0.5)
    rocketLogo.x=160*constraintScale
    rocketLogo.y=70*constraintScale
    lanbContainer.addChild(rocketLogo)
    rocketNumber = new PIXI.BitmapText('X0', {font: 18*constraintScale+"px pointFont", tint: "0xffffff"});
    rocketNumber.x = 170*constraintScale
    rocketNumber.y = 63*constraintScale
    lanbContainer.addChild(rocketNumber)
    const bloodLogo = new Sprite(
        PIXI.loader.resources["bloodGift"].texture
    )
    bloodLogo.width=22*constraintScale
    bloodLogo.height=22*constraintScale
    bloodLogo.anchor.set(0.5,0.5)
    bloodLogo.x=100*constraintScale
    bloodLogo.y=70*constraintScale
    lanbContainer.addChild(bloodLogo)
    bloodGiftNumber = new PIXI.BitmapText('X0', {font: 18*constraintScale+"px pointFont", tint: "0xffffff"});
    bloodGiftNumber.x = 110*constraintScale
    bloodGiftNumber.y = 63*constraintScale
    lanbContainer.addChild(bloodGiftNumber)
    
    lanbContainer.addChild(Mark);

    const PCIntroduce = new Sprite(
        PIXI.loader.resources["PCIntro"].texture
    )
    PCIntroduce.width = 375*constraintScale
    PCIntroduce.height = 600*constraintScale
    PCIntroContrainer.addChild(PCIntroduce)
    const startBottomPc = new Sprite(
        PIXI.loader.resources['start'].texture
    )
    startBottomPc.anchor.set(0.5,0.5)
    startBottomPc.x = 187.5*constraintScale
    startBottomPc.y = 560*constraintScale
    startBottomPc.buttonMode = true;
    startBottomPc.interactive = true;
    startBottomPc.on('pointerdown',showSendContainer)
    startBottomPc.on('mouseover',doom)
    PCIntroContrainer.addChild(startBottomPc)
    
    if(!flag){
        const fireButton = new Sprite(
            PIXI.loader.resources['fireButton'].texture
        )
        fireButton.width = 65*constraintScale
        fireButton.height = 64*constraintScale
        fireButton.position.set(50*constraintScale,4/6*innerHeight)
        gameContainer.addChild(fireButton)
        const bloodButton = new Sprite(
            PIXI.loader.resources['bloodButton'].texture
        )
        bloodButton.width = 65*constraintScale
        bloodButton.height = 64*constraintScale
        bloodButton.position.set(260*constraintScale,4/6*innerHeight)
        gameContainer.addChild(bloodButton)
        fireButton.buttonMode = true;
        fireButton.interactive = true;
        fireButton.on('pointerdown',fireRocketAPP)
        bloodButton.buttonMode = true;
        bloodButton.interactive = true;
        bloodButton.on('pointerdown',addBloodAPP)
    }
    
    
    let sendStreamerBg = new Sprite(
        PIXI.loader.resources['waitGame2'].texture
    )
    sendStreamerBg.width = 375*constraintScale
    sendStreamerBg.height = 600*constraintScale
    sendStreamer.addChild(sendStreamerBg)
    let sendOne = new Sprite(
        PIXI.loader.resources['sendOne'].texture
    )
    sendOne.width = 98*constraintScale
    sendOne.height = 33.5*constraintScale
    sendOne.position.set(220*constraintScale,130*constraintScale)
    let sendOne2 = new Sprite(
        PIXI.loader.resources['sendOne'].texture
    )
    sendOne2.width = 98*constraintScale
    sendOne2.height = 33.5*constraintScale
    sendOne2.position.set(220*constraintScale,170*constraintScale)
    sendStreamer.addChild(sendOne)
    sendStreamer.addChild(sendOne2)
    let sendOver = new Sprite(
        PIXI.loader.resources['sendOver'].texture
    )
    sendOver.width = 244.5*constraintScale
    sendOver.height = 44*constraintScale
    sendOver.anchor.set(0.5,0.5)
    sendOver.position.set(187.5*constraintScale,300*constraintScale)
    sendStreamer.addChild(sendOver)
    
    sendOver.buttonMode = true;
    sendOver.interactive = true;
    sendOver.on('pointerdown',start)

    sendOne2.buttonMode = true;
    sendOne2.interactive = true;
    sendOne2.on('pointerdown',sendStreamerBlood)

    sendOne.buttonMode = true;
    sendOne.interactive = true;
    sendOne.on('pointerdown',sendStreamerRocket)
    webS()
}
function sendStreamerBlood(){
    console.log('sendBlood')
    let args = []
    args[0] = {}
    args[0].giftId = 4
    args[0].giftCount = 1
    hyExt.logger.info('当前观众送礼：' + JSON.stringify(args))
    hyExt.context.sendGift(args[0]).then(() => {
        giftSend(0,NickName,1)  
    }).catch(err => {
    hyExt.logger.info('当前观众送礼失败，错误信息：' + err.message)
    })
}
function sendStreamerRocket(){
    console.log('sendRocket')
    let args = []
    args[0] = {}
    args[0].giftId = 4
    args[0].giftCount = 1
    hyExt.logger.info('当前观众送礼：' + JSON.stringify(args))
    hyExt.context.sendGift(args[0]).then(() => {
        giftSend(1,NickName,1)
    }).catch(err => {
    hyExt.logger.info('当前观众送礼失败，错误信息：' + err.message)
    })
}
function alone(){
    together = false
    TweenMax.to(indexContainer,1,{x:375*constraintScale})
    if(flag){
        PCIntroContrainer.x = 0
    }else{
        controlIntroContrainer.x = 0
    }
}
function nextIntro(){
    TweenMax.to(controlIntroContrainer,1,{x:375*constraintScale})
    // TweenMax.to(sendHL,1,{x:375})
    TweenMax.to(introduceContain,1,{x:0})
}
function giftSend(option,name,sendItemCount){
    let giftContainer = new Container()
    app.stage.addChild(giftContainer)
    let giftlanb = new Sprite(
        PIXI.loader.resources["gift"].texture
    )
    giftlanb.anchor.set(0.5,0.5)
    giftlanb.width = 301*constraintScale
    giftlanb.height = 108*constraintScale
    giftlanb.position.set(187.5*constraintScale,160*constraintScale)
    giftContainer.position.set(-375*constraintScale,0)
    giftContainer.addChild(giftlanb)
    TweenMax.to(giftContainer,0.5,{x:0,onComplete:function(){
        setTimeout(() => {
            TweenMax.to(giftContainer,0.5,{alpha:0})
        }, 1000);
    }})
    if(option == 1){
        rocketNum=rocketNum+sendItemCount
        var gift = new Sprite(
            PIXI.loader.resources["rocket"].texture
        )
        gift.width = 40
        gift.height = 40
        gift.position.set(275.5*constraintScale,155*constraintScale)
        gift.anchor.set(0.5,0.5)
        giftContainer.addChild(gift)
        let sendName = new PIXI.Text(name+'送主播火箭前来助威', {fontSize:"14px", tint: "0x000000"});
        sendName.position.set(90*constraintScale,145*constraintScale)
        giftContainer.addChild(sendName)
        setTimeout(() => {
            TweenMax.to(gift,1,{width:22*constraintScale,height:22,x:160*constraintScale,y:70*constraintScale,onComplete:function(){
                rocketNumber.text = "X"+rocketNum
                giftContainer.removeChild(gift)
            }})
        }, 1500);
        
    }
    if(option == 0){
        bloodGiftNum=bloodGiftNum+sendItemCount
        var gift = new Sprite(
            PIXI.loader.resources["bloodGift"].texture
        )
        gift.width = 40*constraintScale
        gift.height = 40*constraintScale
        gift.position.set(275.5*constraintScale,155*constraintScale)
        gift.anchor.set(0.5,0.5)
        giftContainer.addChild(gift)
        setTimeout(() => {
            TweenMax.to(gift,1,{width:22*constraintScale,height:22*constraintScale,x:100*constraintScale,y:70*constraintScale,onComplete:function(){
                bloodGiftNumber.text = "X"+bloodGiftNum
                giftContainer.removeChild(gift)
            }})
        }, 1500);
        let sendName = new PIXI.Text(name+' 送主播血瓶助威', {fontSize:"14px", tint: "0x000000"});
        sendName.position.set(90*constraintScale,145*constraintScale)
        giftContainer.addChild(sendName)
    }
}
function doom(){
    let waterMs = document.createElement("audio");
    waterMs.setAttribute("src","sound/waterMs.mp3")
    waterMs.play()
}
function rankPageMove(){
    TweenMax.to(indexContainer,1,{x:375*constraintScale})
    TweenMax.to(rankContainer,1,{x:27.5*constraintScale})
    let rankList = []
    rankList[0] = {}
    rankList[0].header = {"x-header":"application/json"}
    rankList[0].url = "http://39.96.68.53:9090/record/getAll"
    rankList[0].method = "GET"
    rankList[0].data = {}
    rankList[0].dataType = "json"
    hyExt.logger.info('发送HTTP请求：' + JSON.stringify(args))
    hyExt.request(rankList[0]).then(resp => {
        firstText.text = resp.data.data[0].score
        firstNameText.text = resp.data.data[0].name
        secondText.text = resp.data.data[1].score
        secondNameText.text = resp.data.data[1].name
        thirdText.text = resp.data.data[2].score
        thirdNameText.text = resp.data.data[2].name
        forthText.text = resp.data.data[3].score
        forthNameText.text = resp.data.data[3].name
        fifthText.text = resp.data.data[4].score
        fifthNameText.text = resp.data.data[4].name
    }).catch(err => {
        // console.log(err)
    })
}
function ruleShow(){
    ws.send(JSON.stringify(new Packet(1000,'')))
    TweenMax.to(sendHL,0.5,{x:0})
    TweenMax.to(visitNotOpen,0.5,{x:0})
    together = true
    if(flag){
        // beginMs.play();
    }
    TweenMax.to(indexContainer,1,{x:375*constraintScale})
    // TweenMax.to(sendHL,1,{x:375})
    if(flag){
        TweenMax.to(PCIntroContrainer,1,{x:0})
    }else{
        TweenMax.to(controlIntroContrainer,1,{x:0})
    }
    
} 
function start (){
    // TweenMax.to(winContainer,0.4,{x : 0})
    // openRoom()
    // joinGame()
    controlShut = true
    gameTime = setTimeout(() => {
        controlShut = false
        let huyaYesMs = document.createElement("audio");
            huyaYesMs.setAttribute("src", "sound/huyaYes.mp3");
            huyaYesMs.play()
        TweenMax.to(winContainer,0.4,{x : 0})
    }, 158034);
    if(flag){
        TweenMax.to(sendStreamer,1,{x : -375*constraintScale,onComplete:function(){
            startGame()
        }})  
    }else{
        TweenMax.to(sendStreamer,1,{x : -375*constraintScale,onComplete:function(){
            startGame()
        }})  
    }
}
function startGame(){
    // beginMs.pause()
        readyMs.play()
        TweenMax.to(ready,0.5,{y:230*constraintScale})
        setTimeout(() => {
            TweenMax.to(go,0.5,{y:230*constraintScale})
            TweenMax.to(ready,0.5,{y:800*constraintScale})
        }, 700);
        setTimeout(() => {
            gameMs.currentTime = 0;
            gameMs.play()
            TweenMax.to(go,0.5,{y:800*constraintScale,onComplete:function(){
                
                //BOSS
                for(let i in topBossJava){
                    let time = setTimeout(() => {
                        TopBossmodule(2,0)
                    }, topBossJava[i]);
                    times.push(time)
                }
                for(let i in bottomBossJava){
                    let time = setTimeout(() => {
                        BottomBossmodule(2,0)
                    }, bottomBossJava[i]);
                    times.push(time)
                }
                for(let i in leftJavaTrue){
                    let time = setTimeout(() => {
                        Leftmodule(0.7,1)
                    }, leftJavaTrue[i]);
                    times.push(time)
                }
                for(let i in leftBossJava){
                    let time = setTimeout(() => {
                        LeftBossmodule(2,0)
                    }, leftBossJava[i]);
                    times.push(time)
                }
                for(let i in rightBossJava){
                    let time = setTimeout(() => {
                        RightBossmodule(2,0)
                    }, rightBossJava[i]);
                    times.push(time)
                }
                for(let i in rightJavaTrue){
                    let time = setTimeout(() => {
                        Rightmodule(1,1)
                        // console.log('1')
                    }, rightJavaTrue[i]);
                    times.push(time)
                }
                for(let i in leftJava){
                    let time = setTimeout(() => {
                        Leftmodule(1.5,0)
                    }, leftJava[i]);
                    times.push(time)
                }
                for(let i in topJavaTrue){
                    let time = setTimeout(() => {
                        Topmodule(1,1)
                    }, topJavaTrue[i]);
                    times.push(time)
                }
                for(let i in topJava){
                    let time = setTimeout(() => {
                        Topmodule(1.5,0)
                    }, topJava[i]);
                    times.push(time)
                }
                for(let i in bottomJava){
                    let time = setTimeout(() => {
                        Bottommodule(1.5,0)
                    }, bottomJava[i]);
                    times.push(time)
                }
                for(let i in rightJava){
                    let time = setTimeout(() => {
                        Rightmodule(1.5,0)
                    }, rightJava[i]);
                    times.push(time)
                }
                for(let i in bottomJavaTrue){
                    let time = setTimeout(() => {
                        Bottommodule(1,1)
                    }, bottomJavaTrue[i]);
                    times.push(time)
                }
            }})
        }, 1400);
}
function huyaBoom(boomPosition){
    var boomMs = document.createElement("audio");
    boomMs.setAttribute("src", "sound/boom.mp3");
    boomMs.play()
    let fire = PIXI.loader.resources['fire'].texture
    var cutnum = 7;
    var width = parseInt(fire.width/cutnum),height = parseInt(fire.height);
    var fireArray = [];
    for(var i = 0;i<cutnum;i++){
        var rectangle = new PIXI.Rectangle(i*width,0,width,height)
        var frame = new PIXI.Texture(fire,rectangle)
        fireArray.push(frame)
    }
    const movieClip = new PIXI.AnimatedSprite(fireArray);  
    movieClip.anchor.set(0.5,0.5)  
    movieClip.position.set(187.5*constraintScale,250*constraintScale)
    movieClip.animationSpeed = parseFloat((20 / 120).toFixed(2));  
    movieClip.loop = false
    movieClip.onComplete = function(){
        gameContainer.removeChild(movieClip)
    }
    movieClip.play();  
    gameContainer.addChild(movieClip);  
}
function TopBossmodule (time,option){
    let sprite = ''
    sprite = new Sprite(
        PIXI.loader.resources["huyaBoss1"].texture
    )
    sprite.anchor.set(0.5,0.5)
    sprite.width = 70.2*constraintScale;
    sprite.height = 78*constraintScale;
    sprite.position.set(187.5*constraintScale,0)
    sprite.option = 2
    let sprite2 = ''
    sprite2 = new Sprite(
        PIXI.loader.resources["huyaBoss2"].texture
    )
    sprite2.anchor.set(0.5,0.5)
    sprite2.width = 70.2*constraintScale;
    sprite2.height = 78*constraintScale;
    sprite2.position.set(187.5*constraintScale,0)
    sprite2.option = 0
    sprite2.BOOS = true
    topContainer.addChild(sprite);
    topContainer.addChild(sprite2);
    TweenMax.to(sprite, time ,  {x: 187.5*constraintScale, y: 200*constraintScale,ease:Linear.easeNone ,onComplete :function(){
        removeMark()

        topContainer.removeChild(sprite);
    }});
    TweenMax.to(sprite2, time ,  {x: 187.5*constraintScale, y: 200*constraintScale,ease:Linear.easeNone ,onComplete :function(){
        removeMark()
        huyaBoom()
        user.texture=PIXI.loader.resources["userBoom"].texture
        let huyaCryMs = document.createElement("audio");
        huyaCryMs.setAttribute("src", "sound/huyaCry.mp3");
        huyaCryMs.play()
        topContainer.removeChild(sprite);
        topContainer.removeChild(sprite2);
    }});
}
function Rightmodule (time,option){
    let sprite = ''
    // console.log('888')
    if(option == 0){
        // console.log('2')
        sprite = new Sprite(
            PIXI.loader.resources["huya"].texture
        )
        sprite.anchor.set(0.5,0.5)
        sprite.width = 70.2*constraintScale;
        sprite.height = 68.4*constraintScale;
    }
    if(option == 1){
        // console.log('3')
        sprite = new Sprite(
            PIXI.loader.resources["true2"].texture
        )
        // console.log(sprite)
        sprite.anchor.set(0.5,0.5)
        sprite.width = 71.7*constraintScale;
        sprite.height = 89.7*constraintScale;
    }
    sprite.option = option
    sprite.position.set(350*constraintScale,250*constraintScale)
    rightContainer.addChild(sprite);
    TweenMax.to(sprite, time ,  {x: 210*constraintScale, y: 250*constraintScale,ease:Linear.easeNone  ,onComplete :function(){
        if(option == 0){
            removeMark()
            huyaBoom()
            user.texture=PIXI.loader.resources["userBoom"].texture
            let huyaCryMs = document.createElement("audio");
            huyaCryMs.setAttribute("src", "sound/huyaCry.mp3");
            huyaCryMs.play()
        }
        if(option == 1){
            blueAdd()
            let huyaYesMs = document.createElement("audio");
            huyaYesMs.setAttribute("src", "sound/huyaYes.mp3");
            huyaYesMs.play()
        }
        rightContainer.removeChild(sprite);
    }});  
}
function Topmodule (time,option){
    let sprite = ''
    if(option == 0){
        sprite = new Sprite(
            PIXI.loader.resources["huya"].texture
        )
        sprite.anchor.set(0.5,0.5)
        sprite.width = 70.2*constraintScale;
        sprite.height = 68.4*constraintScale;
    }
    if(option == 1){
        sprite = new Sprite(
            PIXI.loader.resources["true"].texture
        )
        sprite.anchor.set(0.5,0.5)
        sprite.width = 71.7*constraintScale;
        sprite.height = 89.7*constraintScale;
    }
    sprite.position.set(187.5*constraintScale,0)
    sprite.option = option
    topContainer.addChild(sprite);
    TweenMax.to(sprite, time ,  {x: 187.5*constraintScale, y: 200*constraintScale,ease:Linear.easeNone ,onComplete :function(){
        if(option == 0){
            removeMark()
            huyaBoom()
            user.texture=PIXI.loader.resources["userBoom"].texture
            let huyaCryMs = document.createElement("audio");
            huyaCryMs.setAttribute("src", "sound/huyaCry.mp3");
            huyaCryMs.play()
        }
        if(option == 1){
            blueAdd()
            let huyaYesMs = document.createElement("audio");
            huyaYesMs.setAttribute("src", "sound/huyaYes.mp3");
            huyaYesMs.play()
        }
        topContainer.removeChild(sprite);
    }});
    
}
function LeftBossmodule (time,option){
    let sprite = ''
    sprite = new Sprite(
        PIXI.loader.resources["huyaBoss1"].texture
    )
    sprite.anchor.set(0.5,0.5)
    sprite.width = 70.2*constraintScale;
    sprite.height = 78*constraintScale;
    sprite.position.set(0,250*constraintScale)
    sprite.option = 2
    let sprite2 = ''
    sprite2 = new Sprite(
        PIXI.loader.resources["huyaBoss2"].texture
    )
    sprite2.anchor.set(0.5,0.5)
    sprite2.width = 70.2*constraintScale;
    sprite2.height = 78*constraintScale;
    sprite2.position.set(0,250*constraintScale)
    sprite2.option = 0
    sprite2.BOOS = true
    leftContainer.addChild(sprite);
    leftContainer.addChild(sprite2);
    TweenMax.to(sprite, time ,  {x: 135*constraintScale, y: 250*constraintScale,ease:Linear.easeNone ,onComplete :function(){
        removeMark()

        leftContainer.removeChild(sprite);
    }});
    TweenMax.to(sprite2, time ,  {x: 135*constraintScale, y: 250*constraintScale,ease:Linear.easeNone ,onComplete :function(){
        removeMark()
        huyaBoom()
        user.texture=PIXI.loader.resources["userBoom"].texture
        let huyaCryMs = document.createElement("audio");
        huyaCryMs.setAttribute("src", "sound/huyaCry.mp3");
        huyaCryMs.play()
        leftContainer.removeChild(sprite);
        leftContainer.removeChild(sprite2);
    }});
}
function Leftmodule (time,option){
    let sprite = ''
    if(option == 0){
        sprite = new Sprite(
            PIXI.loader.resources["huya"].texture
        )
        sprite.anchor.set(0.5,0.5)
        sprite.width = 70.2*constraintScale;
        sprite.height = 68.4*constraintScale;
        
    }
    if(option == 1){
        sprite = new Sprite(
            PIXI.loader.resources["true"].texture
        )
        sprite.anchor.set(0.5,0.5)
        sprite.width = 71.7*constraintScale;
        sprite.height = 89.7*constraintScale;
    }
    sprite.option = option
    sprite.position.set(0,250*constraintScale)
    leftContainer.addChild(sprite);
    TweenMax.to(sprite, time ,  {x: 135*constraintScale, y: 250*constraintScale ,ease:Linear.easeNone ,onComplete :function(){
        if(option == 0){
            removeMark()
            huyaBoom()
            user.texture=PIXI.loader.resources["userBoom"].texture
            let huyaCryMs = document.createElement("audio");
            huyaCryMs.setAttribute("src", "sound/huyaCry.mp3");
            huyaCryMs.play()
        }
        if(option == 1){
            blueAdd()
            let huyaYesMs = document.createElement("audio");
            huyaYesMs.setAttribute("src", "sound/huyaYes.mp3");
            huyaYesMs.play()
        }
        leftContainer.removeChild(sprite);
    }});  
}
function BottomBossmodule (time,option){
    let sprite = ''
    sprite = new Sprite(
        PIXI.loader.resources["huyaBoss1"].texture
    )
    sprite.anchor.set(0.5,0.5)
    sprite.width = 70.2*constraintScale;
    sprite.height = 78*constraintScale;
    sprite.position.set(187.5*constraintScale,550*constraintScale)
    sprite.option = 2
    let sprite2 = ''
    sprite2 = new Sprite(
        PIXI.loader.resources["huyaBoss2"].texture
    )
    sprite2.anchor.set(0.5,0.5)
    sprite2.width = 70.2*constraintScale;
    sprite2.height = 78*constraintScale;
    sprite2.position.set(187.5*constraintScale,550*constraintScale)
    sprite2.option = 0
    sprite2.BOOS = true
    bottomContainer.addChild(sprite);
    bottomContainer.addChild(sprite2);
    TweenMax.to(sprite, time ,  {x: 187.5*constraintScale, y: 275*constraintScale,ease:Linear.easeNone ,onComplete :function(){
        removeMark()

        bottomContainer.removeChild(sprite);
    }});
    TweenMax.to(sprite2, time ,  {x: 187.5*constraintScale, y: 275*constraintScale,ease:Linear.easeNone ,onComplete :function(){
        removeMark()
        huyaBoom()
        user.texture=PIXI.loader.resources["userBoom"].texture
        let huyaCryMs = document.createElement("audio");
        huyaCryMs.setAttribute("src", "sound/huyaCry.mp3");
        huyaCryMs.play()
        bottomContainer.removeChild(sprite);
        bottomContainer.removeChild(sprite2);
    }});
}
function Bottommodule (time,option){
    let sprite = ''
    if(option == 0){
        sprite = new Sprite(
            PIXI.loader.resources["huya"].texture
        )
        sprite.anchor.set(0.5,0.5)
        sprite.width = 70.2*constraintScale;
        sprite.height = 68.4*constraintScale;
    }
    if(option == 1){
        sprite = new Sprite(
            PIXI.loader.resources["true"].texture
        )
        sprite.anchor.set(0.5,0.5)
        sprite.width = 71.7*constraintScale;
        sprite.height = 89.7*constraintScale;
    }
    sprite.option = option
    sprite.position.set(187.5*constraintScale,550*constraintScale)
    bottomContainer.addChild(sprite);
    TweenMax.to(sprite, time ,  {x: 187.5*constraintScale, y: 275*constraintScale,ease:Linear.easeNone  ,onComplete :function(){
        if(option == 0){
            removeMark()
            huyaBoom()
            user.texture=PIXI.loader.resources["userBoom"].texture
            let huyaCryMs = document.createElement("audio");
            huyaCryMs.setAttribute("src", "sound/huyaCry.mp3");
            huyaCryMs.play()
        }
        if(option == 1){
            blueAdd()
            let huyaYesMs = document.createElement("audio");
            huyaYesMs.setAttribute("src", "sound/huyaYes.mp3");
            huyaYesMs.play()
        }
        bottomContainer.removeChild(sprite);
    }});  
}
function RightBossmodule (time,option){
    let sprite = ''
    sprite = new Sprite(
        PIXI.loader.resources["huyaBoss1"].texture
    )
    sprite.anchor.set(0.5,0.5)
    sprite.width = 70.2*constraintScale;
    sprite.height = 78*constraintScale;
    sprite.position.set(350*constraintScale,250*constraintScale)
    sprite.option = 2
    let sprite2 = ''
    sprite2 = new Sprite(
        PIXI.loader.resources["huyaBoss2"].texture
    )
    sprite2.anchor.set(0.5,0.5)
    sprite2.width = 70.2*constraintScale;
    sprite2.height = 78*constraintScale;
    sprite2.position.set(350*constraintScale,250*constraintScale)
    sprite2.option = 0
    sprite2.BOOS = true
    rightContainer.addChild(sprite);
    rightContainer.addChild(sprite2);
    
    TweenMax.to(sprite, time ,  {x: 210*constraintScale, y: 250*constraintScale,ease:Linear.easeNone ,onComplete :function(){
        removeMark()

        rightContainer.removeChild(sprite);
    }});
    TweenMax.to(sprite2, time ,  {x: 210*constraintScale, y: 250*constraintScale,ease:Linear.easeNone ,onComplete :function(){
        removeMark()
        huyaBoom()
        user.texture=PIXI.loader.resources["userBoom"].texture
        let huyaCryMs = document.createElement("audio");
        huyaCryMs.setAttribute("src", "sound/huyaCry.mp3");
        huyaCryMs.play()
        rightContainer.removeChild(sprite);
        rightContainer.removeChild(sprite2);
    }});
}
// function Rightmodule (time,option){
//     let sprite = ''
//     if(option == 0){
//         sprite = new Sprite(
//             PIXI.loader.resources["huya"].texture
//         )
//         sprite.anchor.set(0.5,0.5)
//         sprite.width = 70.2*constraintScale;
//         sprite.height = 68.4*constraintScale;
//     }
//     if(option == 1){
//         sprite = new Sprite(
//             PIXI.loader.resources["true"].texture
//         )
//         sprite.anchor.set(0.5,0.5)
//         sprite.width = 71.7*constraintScale;
//         sprite.height = 89.7*constraintScale;
//     }
//     sprite.option = option
//     sprite.position.set(350*constraintScale,250*constraintScale)
//     rightContainer.addChild(sprite);
//     TweenMax.to(sprite, time ,  {x: 210*constraintScale, y: 250*constraintScale,ease:Linear.easeNone  ,onComplete :function(){
//         if(option == 0){
//             removeMark()
//             huyaBoom()
//             user.texture=PIXI.loader.resources["userBoom"].texture
//             let huyaCryMs = document.createElement("audio");
//             huyaCryMs.setAttribute("src", "sound/huyaCry.mp3");
//             huyaCryMs.play()
//         }
//         if(option == 1){
//             blueAdd()
//             let huyaYesMs = document.createElement("audio");
//             huyaYesMs.setAttribute("src", "sound/huyaYes.mp3");
//             huyaYesMs.play()
//         }
//         rightContainer.removeChild(sprite);
//     }});  
// }
function shakeRight(){
    TweenMax.to(bg,0.1,{x:3*constraintScale,onComplete:function(){
        TweenMax.to(bg,0.1,{x:0})
    }})
}
function shakeLeft(){
    TweenMax.to(bg,0.1,{x:-3*constraintScale,onComplete:function(){
        TweenMax.to(bg,0.1,{x:0})
    }})
}
function shakeTop(){
    TweenMax.to(bg,0.1,{y:-3*constraintScale,onComplete:function(){
        TweenMax.to(bg,0.1,{y:0})
    }})
}
function shakeBottom(){
    TweenMax.to(bg,0.1,{y:3*constraintScale,onComplete:function(){
        TweenMax.to(bg,0.1,{y:0})
    }})
}
function addMark(){
    // flashScore()
    // myScore()
    TweenMax.to(Mark,0.1,{x:285*constraintScale,onComplete:function(){
        TweenMax.to(Mark,0.1,{x:298*constraintScale})
    }})
    if(together){
        sendScore()
    }
    let extra = 0
    if(continueNum>=10){
        let a = continueNum%10
        extra = (continueNum-a)/10
        // console.log(extra)
    }
    mark = mark+50*(extra+1)
    Mark.text = mark
    // addMyScore()
    
    // if(mark>100){
    //     console.log('more than 100')
    //     Mark.width = 80
    // }
}
function removeMark(){
    continueNum = 0
    TweenMax.to(Mark,0.1,{x:285*constraintScale,onComplete:function(){
        TweenMax.to(Mark,0.1,{x:298*constraintScale})
    }})
    mark = mark-100
    if(together){
        sendScore()
    }
    Mark.text = mark
    bloodNum = bloodNum-20
    if(bloodNum<=-150){
        gameOverIt()
    }
    TweenMax.to(blood,0.2,{x:bloodNum})
}
function gansMoveT(){
    let topgans = new Sprite(
        PIXI.loader.resources["gans"].texture
    )
    topgans.rotation = -1.57
    topgans.width = 27*constraintScale
    topgans.height=15*constraintScale
    topgans.x= 194*constraintScale
    topgans.y = 252*constraintScale
    if(topContainer.children.length!=0){
        TweenMax.to(topgans,0.2,{y:(topContainer.children[0].y+60)*constraintScale,onComplete:function(){
            gansContainer.removeChild(topgans)
        }})
    }else{
        TweenMax.to(topgans,0.2,{y:-10*constraintScale})
    }
    gansContainer.addChild(topgans)
}
function gansMoveL(){
    let leftgans = new Sprite(
        PIXI.loader.resources["gans"].texture
    )
    leftgans.rotation = 3.14
    leftgans.width = 27*constraintScale
    leftgans.height=15*constraintScale
    leftgans.x= 189*constraintScale
    leftgans.y = 272*constraintScale
    if(leftContainer.children.length!=0){
        TweenMax.to(leftgans,0.2,{x:(leftContainer.children[0].x+30)*constraintScale,onComplete:function(){
            gansContainer.removeChild(leftgans)
        }})
    }else{
        TweenMax.to(leftgans,0.2,{x:-10*constraintScale})
    }
    gansContainer.addChild(leftgans)
    
}
function gansMoveR(){
    let rightgans = new Sprite(
        PIXI.loader.resources["gans"].texture
    )
    rightgans.width = 27*constraintScale
    rightgans.height=15*constraintScale
    rightgans.x= 189*constraintScale
    rightgans.y = 256*constraintScale
    if(rightContainer.children.length!=0){
        TweenMax.to(rightgans,0.2,{x:(rightContainer.children[0].x-50)*constraintScale,onComplete:function(){
            gansContainer.removeChild(rightgans)
        }})
    }else{
        TweenMax.to(rightgans,0.2,{x:375*constraintScale})
    }
    gansContainer.addChild(rightgans)
}
function gansMoveB(){
    let bottongans = new Sprite(
        PIXI.loader.resources["gans"].texture
    )
    bottongans.rotation = 1.57
    bottongans.width = 27*constraintScale
    bottongans.height=15*constraintScale
    bottongans.x= 209*constraintScale
    bottongans.y = 248*constraintScale
    if(bottomContainer.children.length!=0){
        TweenMax.to(bottongans,0.2,{y:(bottomContainer.children[0].y-80)*constraintScale,onComplete:function(){
            gansContainer.removeChild(bottongans)
        }})
    }else{
        TweenMax.to(bottongans,0.2,{y:510*constraintScale})
    }
    gansContainer.addChild(bottongans)
}
var scaleX = 0
function init(){
    document.onkeydown = (event)=>{
        switch(event.keyCode){
            case 38:
                if(controlShut){
                    user.texture=PIXI.loader.resources["user"].texture
                gansMoveT()
                if(scaleX == 1){
                    user.scale.x = -user.scale.x
                    scaleX = 0
                }
                TweenMax.to(user, 0.1,  {rotation: 4.71 });
                shakeTop()
                if(topContainer.children.length>0){
                    TweenMax.killTweensOf(topContainer.getChildAt(0));
                    // console.log('1')
                    if(topContainer.getChildAt(0).option == 1){
                        removeMark()
                        topContainer.children[0].texture = PIXI.loader.resources["huyaSendCry"].texture
                        let huyaCryMs = document.createElement("audio");
                        huyaCryMs.setAttribute("src", "sound/huyaCry.mp3");
                        huyaCryMs.play()
                        setTimeout(() => {
                            if(topContainer.children.length>0){
                                topContainer.removeChildAt(0)
                            }
                        }, 200);
                    }
                    if(topContainer.getChildAt(0).option == 0){
                        addMark()
                        if(topContainer.getChildAt(0).BOOS == true){
                            topContainer.children[0].texture = PIXI.loader.resources["huyaBossBoom"].texture
                        }else{
                            topContainer.children[0].texture = PIXI.loader.resources["huya2"].texture
                        }
                        let outfire = document.createElement("audio");
                        outfire.setAttribute("src", "sound/outfire.mp3");
                        outfire.play()
                        continueNum+=1
                        if(continueNum>4){
                            continueShow()
                        }
                        setTimeout(() => {
                            if(topContainer.children.length>0){
                                topContainer.removeChildAt(0)
                                // console.log(topContainer.children)
                            }
                        }, 200);
                    }
                    if(topContainer.getChildAt(0).option == 2){
                        addMark()
                        if(topContainer.children.length>0){
                            topContainer.removeChildAt(0)
                        }
                    }
                }
                }
            break;
            case 39:
                if(controlShut){
                    user.texture=PIXI.loader.resources["user"].texture
                gansMoveR()
                // console.log('39')
                if(scaleX == 1){
                    user.scale.x = -user.scale.x
                    scaleX = 0
                }
                TweenMax.to(user, 0.1,  {rotation: 0 });
                shakeRight()
                if(rightContainer.children.length>0){
                    TweenMax.killTweensOf(rightContainer.getChildAt(0));
                    if(rightContainer.getChildAt(0).option == 1){
                        removeMark()
                        rightContainer.children[0].texture = PIXI.loader.resources["huyaSendCry2"].texture
                        let huyaCryMs = document.createElement("audio");
                        huyaCryMs.setAttribute("src", "sound/huyaCry.mp3");
                        huyaCryMs.play()
                        setTimeout(() => {
                            if(rightContainer.children.length>0){
                                rightContainer.removeChildAt(0)
                            }
                        }, 200);
                    }
                    if(rightContainer.getChildAt(0).option == 0){
                        addMark()
                        let outfire = document.createElement("audio");
                        outfire.setAttribute("src", "sound/outfire.mp3");
                        outfire.play()
                        continueNum+=1
                        if(continueNum>4){
                            continueShow()
                        }
                        if(rightContainer.getChildAt(0).BOOS == true){
                            rightContainer.children[0].texture = PIXI.loader.resources["huyaBossBoom"].texture
                        }else{
                            rightContainer.children[0].texture = PIXI.loader.resources["huya2"].texture
                        }
                        setTimeout(() => {
                            if(rightContainer.children.length>0){
                                rightContainer.removeChildAt(0)
                            }
                        }, 200);
                    }
                    if(rightContainer.getChildAt(0).option == 2){
                        addMark()
                        if(rightContainer.children.length>0){
                            rightContainer.removeChildAt(0)
                        }
                    }
                }
                }
            break;
            case 40:
                if(controlShut){
                    user.texture=PIXI.loader.resources["user"].texture
                gansMoveB()
                TweenMax.to(user, 0.1,  {rotation: -1.57 });
                if(scaleX == 0){
                    user.scale.x = -user.scale.x
                    scaleX = 1
                }
                shakeBottom()
                if(bottomContainer.children.length>0){
                    TweenMax.killTweensOf(bottomContainer.getChildAt(0));
                    if(bottomContainer.getChildAt(0).option == 1){
                        removeMark()
                        bottomContainer.children[0].texture = PIXI.loader.resources["huyaSendCry"].texture
                        let huyaCryMs = document.createElement("audio");
                        huyaCryMs.setAttribute("src", "sound/huyaCry.mp3");
                        huyaCryMs.play()
                        setTimeout(() => {
                            if(bottomContainer.children.length>0){
                                bottomContainer.removeChildAt(0)
                            }
                        }, 200);
                    }
                    if(bottomContainer.getChildAt(0).option == 0){
                        addMark()
                        if(bottomContainer.getChildAt(0).BOOS == true){
                            bottomContainer.children[0].texture = PIXI.loader.resources["huyaBossBoom"].texture
                        }else{
                            bottomContainer.children[0].texture = PIXI.loader.resources["huya2"].texture
                        }
                        let outfire = document.createElement("audio");
                        outfire.setAttribute("src", "sound/outfire.mp3");
                        outfire.play()
                        continueNum+=1
                        if(continueNum>4){
                            continueShow()
                        }
                        setTimeout(() => {
                            if(bottomContainer.children.length>0){
                                bottomContainer.removeChildAt(0)
                            }
                        }, 200);
                    }
                    if(bottomContainer.getChildAt(0).option == 2){
                        addMark()
                        if(bottomContainer.children.length>0){
                            bottomContainer.removeChildAt(0)
                        }
                    }
                }
                }
            break;
            case 37:
                if(controlShut){
                    user.texture=PIXI.loader.resources["user"].texture
                gansMoveL()
                if(scaleX == 0){
                    user.scale.x = -user.scale.x
                    scaleX = 1
                }
                TweenMax.to(user, 0.1,  {rotation: 0 });
                shakeLeft()
                if(leftContainer.children.length>0){
                    TweenMax.killTweensOf(leftContainer.getChildAt(0));
                    if(leftContainer.getChildAt(0).option == 1){
                        removeMark()
                        leftContainer.children[0].texture = PIXI.loader.resources["huyaSendCry"].texture
                        let huyaCryMs = document.createElement("audio");
                        huyaCryMs.setAttribute("src", "sound/huyaCry.mp3");
                        huyaCryMs.play()
                        setTimeout(() => {
                            if(leftContainer.children.length>0){
                                leftContainer.removeChildAt(0)
                            }
                        }, 200);
                    }
                    if(leftContainer.getChildAt(0).option == 0){
                        addMark()
                        let outfire = document.createElement("audio");
                        outfire.setAttribute("src", "sound/outfire.mp3");
                        outfire.play()
                        continueNum+=1
                        if(continueNum>4){
                            continueShow()
                        }
                        if(leftContainer.getChildAt(0).BOOS == true){
                            leftContainer.children[0].texture = PIXI.loader.resources["huyaBossBoom"].texture
                        }else{
                            leftContainer.children[0].texture = PIXI.loader.resources["huya2"].texture
                        }
                        setTimeout(() => {
                            if(leftContainer.children.length>0){
                                leftContainer.removeChildAt(0)
                            }
                        }, 200);
                    }
                    if(leftContainer.getChildAt(0).option == 2){
                        addMark()
                        if(leftContainer.children.length>0){
                            leftContainer.removeChildAt(0)
                        }
                    }
                    
                }
                }
            break;
            case 90:
//z
                addBloodAPP()
            break
            case 88:
//x
                if(rocketNum!=0){
                    rocketNum = rocketNum-1
                    rocketNumber.text = rocketNum
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
                    rocketModule.position.set(187.5*constraintScale,600*constraintScale)
                    gameContainer.addChild(rocketModule)
                    TweenMax.to(rocketModule,0.7,{y:-260*constraintScale})
                    gansContainer.removeChildren(0,gansContainer.children.length)
                    topContainer.removeChildren(0,topContainer.children.length)
                    leftContainer.removeChildren(0,leftContainer.children.length)
                    rightContainer.removeChildren(0,rightContainer.children.length)
                    bottomContainer.removeChildren(0,bottomContainer.children.length)
                }
                
            break
        }
    }
  }
  function fireBoom(boomPosition){
    var boomMs = document.createElement("audio");
    boomMs.setAttribute("src", "sound/boom.mp3");
    boomMs.play()
    let fire = PIXI.loader.resources['fire'].texture
    var cutnum = 7;
    var width = parseInt(fire.width/cutnum),height = parseInt(fire.height);
    var fireArray = [];
    for(var i = 0;i<cutnum;i++){
        var rectangle = new PIXI.Rectangle(i*width,0,width,height)
        var frame = new PIXI.Texture(fire,rectangle)
        fireArray.push(frame)
    }
    const movieClip = new PIXI.AnimatedSprite(fireArray);  
    // movieClip.anchor.set(0.5,0.5)  
    movieClip.position.set(boomPosition.x*constraintScale,boomPosition.y*constraintScale)
    movieClip.animationSpeed = parseFloat((20 / 120).toFixed(2));  
    movieClip.loop = false
    movieClip.onComplete = function(){
        gameContainer.removeChild(movieClip)
    }
    movieClip.play();  
    gameContainer.addChild(movieClip);  
}
// function fireRocket(){
//     if(rocketNum>0){
//         // var boomMs = document.createElement("audio");
//         // boomMs.setAttribute("src", "sound/boom.mp3");
//         // boomMs.play()
//         let fireRocket = PIXI.Texture.fromImage("fire");
//         var cutnum = 5;
//         var fireRocket = [];
//         for(var i = 0;i<cutnum;i++){
//             // var rectangle = new PIXI.Rectangle(i*width,0,width,height)
//             var frame = new PIXI.Texture(fire,rectangle)
//             fireArray.push(frame)
//         }
//         const fireRocket1 = new PIXI.Texture(fireRocket1)
//         fireRocket1
//         const movieClip = new PIXI.AnimatedSprite(fireArray);  
//         movieClip.anchor.set(0.5,0.5)  
//         movieClip.position.set(187.5,250)
//         movieClip.animationSpeed = parseFloat((20 / 120).toFixed(2));  
//         movieClip.loop = false
//         movieClip.onComplete = function(){
//             gameContainer.removeChild(movieClip)
//         }
//         movieClip.play();  
//         gameContainer.addChild(movieClip);
//     }
// }
function VirsualTop(){
    if(controlShut){
        user.texture=PIXI.loader.resources["user"].texture
    gansMoveT()
    if(scaleX == 1){
        user.scale.x = -user.scale.x
        scaleX = 0
    }
    TweenMax.to(user, 0.1,  {rotation: 4.71 });
    shakeTop()
    if(topContainer.children.length>0){
        TweenMax.killTweensOf(topContainer.getChildAt(0));
        // console.log('1')
        if(topContainer.getChildAt(0).option == 1){
            removeMark()
            topContainer.children[0].texture = PIXI.loader.resources["huyaSendCry"].texture
            let huyaCryMs = document.createElement("audio");
            huyaCryMs.setAttribute("src", "sound/huyaCry.mp3");
            huyaCryMs.play()
            setTimeout(() => {
                if(topContainer.children.length>0){
                    topContainer.removeChildAt(0)
                }
            }, 200);
        }
        if(topContainer.getChildAt(0).option == 0){
            addMark()
            if(topContainer.getChildAt(0).BOOS == true){
                topContainer.children[0].texture = PIXI.loader.resources["huyaBossBoom"].texture
            }else{
                topContainer.children[0].texture = PIXI.loader.resources["huya2"].texture
            }
            let outfire = document.createElement("audio");
            outfire.setAttribute("src", "sound/outfire.mp3");
            outfire.play()
            continueNum+=1
            if(continueNum>4){
                continueShow()
            }
            setTimeout(() => {
                if(topContainer.children.length>0){
                    topContainer.removeChildAt(0)
                    // console.log(topContainer.children)
                }
            }, 200);
        }
        if(topContainer.getChildAt(0).option == 2){
            addMark()
            if(topContainer.children.length>0){
                topContainer.removeChildAt(0)
            }
        }
    }
    }
}
function VirsualRight(){
    if(controlShut){
        user.texture=PIXI.loader.resources["user"].texture
    gansMoveR()
    // console.log('39')
    if(scaleX == 1){
        user.scale.x = -user.scale.x
        scaleX = 0
    }
    TweenMax.to(user, 0.1,  {rotation: 0 });
    shakeRight()
    if(rightContainer.children.length>0){
        TweenMax.killTweensOf(rightContainer.getChildAt(0));
        if(rightContainer.getChildAt(0).option == 1){
            removeMark()
            rightContainer.children[0].texture = PIXI.loader.resources["huyaSendCry2"].texture
            let huyaCryMs = document.createElement("audio");
            huyaCryMs.setAttribute("src", "sound/huyaCry.mp3");
            huyaCryMs.play()
            setTimeout(() => {
                if(rightContainer.children.length>0){
                    rightContainer.removeChildAt(0)
                }
            }, 200);
        }
        if(rightContainer.getChildAt(0).option == 0){
            addMark()
            let outfire = document.createElement("audio");
            outfire.setAttribute("src", "sound/outfire.mp3");
            outfire.play()
            continueNum+=1
            if(continueNum>4){
                continueShow()
            }
            if(rightContainer.getChildAt(0).BOOS == true){
                rightContainer.children[0].texture = PIXI.loader.resources["huyaBossBoom"].texture
            }else{
                rightContainer.children[0].texture = PIXI.loader.resources["huya2"].texture
            }
            setTimeout(() => {
                if(rightContainer.children.length>0){
                    rightContainer.removeChildAt(0)
                }
            }, 200);
        }
        if(rightContainer.getChildAt(0).option == 2){
            addMark()
            if(rightContainer.children.length>0){
                rightContainer.removeChildAt(0)
            }
        }
    }
    }
}
function VirsualBottom(){
    if(controlShut){
        user.texture=PIXI.loader.resources["user"].texture
    gansMoveB()
    TweenMax.to(user, 0.1,  {rotation: -1.57 });
    if(scaleX == 0){
        user.scale.x = -user.scale.x
        scaleX = 1
    }
    shakeBottom()
    if(bottomContainer.children.length>0){
        TweenMax.killTweensOf(bottomContainer.getChildAt(0));
        if(bottomContainer.getChildAt(0).option == 1){
            removeMark()
            bottomContainer.children[0].texture = PIXI.loader.resources["huyaSendCry"].texture
            let huyaCryMs = document.createElement("audio");
            huyaCryMs.setAttribute("src", "sound/huyaCry.mp3");
            huyaCryMs.play()
            setTimeout(() => {
                if(bottomContainer.children.length>0){
                    bottomContainer.removeChildAt(0)
                }
            }, 200);
        }
        if(bottomContainer.getChildAt(0).option == 0){
            addMark()
            if(bottomContainer.getChildAt(0).BOOS == true){
                bottomContainer.children[0].texture = PIXI.loader.resources["huyaBossBoom"].texture
            }else{
                bottomContainer.children[0].texture = PIXI.loader.resources["huya2"].texture
            }
            let outfire = document.createElement("audio");
            outfire.setAttribute("src", "sound/outfire.mp3");
            outfire.play()
            continueNum+=1
            if(continueNum>4){
                continueShow()
            }
            setTimeout(() => {
                if(bottomContainer.children.length>0){
                    bottomContainer.removeChildAt(0)
                }
            }, 200);
        }
        if(bottomContainer.getChildAt(0).option == 2){
            addMark()
            if(bottomContainer.children.length>0){
                bottomContainer.removeChildAt(0)
            }
        }
    }
    }
}
function VirsualLeft(){
    if(controlShut){
        user.texture=PIXI.loader.resources["user"].texture
    gansMoveL()
    if(scaleX == 0){
        user.scale.x = -user.scale.x
        scaleX = 1
    }
    TweenMax.to(user, 0.1,  {rotation: 0 });
    shakeLeft()
    if(leftContainer.children.length>0){
        TweenMax.killTweensOf(leftContainer.getChildAt(0));
        if(leftContainer.getChildAt(0).option == 1){
            removeMark()
            leftContainer.children[0].texture = PIXI.loader.resources["huyaSendCry"].texture
            let huyaCryMs = document.createElement("audio");
            huyaCryMs.setAttribute("src", "sound/huyaCry.mp3");
            huyaCryMs.play()
            setTimeout(() => {
                if(leftContainer.children.length>0){
                    leftContainer.removeChildAt(0)
                }
            }, 200);
        }
        if(leftContainer.getChildAt(0).option == 0){
            addMark()
            let outfire = document.createElement("audio");
            outfire.setAttribute("src", "sound/outfire.mp3");
            outfire.play()
            continueNum+=1
            if(continueNum>4){
                continueShow()
            }
            if(leftContainer.getChildAt(0).BOOS == true){
                leftContainer.children[0].texture = PIXI.loader.resources["huyaBossBoom"].texture
            }else{
                leftContainer.children[0].texture = PIXI.loader.resources["huya2"].texture
            }
            setTimeout(() => {
                if(leftContainer.children.length>0){
                    leftContainer.removeChildAt(0)
                }
            }, 200);
        }
        if(leftContainer.getChildAt(0).option == 2){
            addMark()
            if(leftContainer.children.length>0){
                leftContainer.removeChildAt(0)
            }
        }
        
    }
    }
}
function fireRocketAPP(){
    if(rocketNum!=0){
        rocketNum = rocketNum-1
        rocketNumber.text = rocketNum
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
        rocketModule.position.set(187.5*constraintScale,600*constraintScale)
        gameContainer.addChild(rocketModule)
        TweenMax.to(rocketModule,0.7,{y:-260*constraintScale})
        gansContainer.removeChildren(0,gansContainer.children.length)
        topContainer.removeChildren(0,topContainer.children.length)
        leftContainer.removeChildren(0,leftContainer.children.length)
        rightContainer.removeChildren(0,rightContainer.children.length)
        bottomContainer.removeChildren(0,bottomContainer.children.length)
    }
}
function addBloodAPP(){
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
function blueAdd(){
    user.texture = PIXI.loader.resources["user3"].texture
    if(bloodNum<=-10){
        bloodNum = bloodNum+10
        TweenMax.to(blood,0.2,{x:bloodNum})
    }
    if(-10<bloodNum<0){
        bloodNum = 0
        TweenMax.to(blood,0.2,{x:bloodNum})
    }
}
