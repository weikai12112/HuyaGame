// const { Tween } = require("gsap/gsap-core");
var module = true //true和观众玩，false和主播玩
var playing = false //true正在游戏,false不在游戏
// import  PIXI from 'pixi.js';
var input = ''
var  firstText ='',firstNameText ='',secondText ='',secondNameText ='',thirdText = '',thirdNameText ='',forthText ='',forthNameText ='',fifthText ='',fifthNameText =''
var firstUser = {},secondUser = {},thirdUser = {},forthUser = {},fifthUser = {},myRanks = {},myPlayInfo = {}
var bloodGiftNum = 0,rocketNum = 0;
var bloodGiftNumber='',rocketNumber='';
var times = [],gameTime = '';
var innerWidth = window.innerWidth
var innerHeight = window.innerHeight
window.resizeTo(775, 640)
console.log(document.body)
var controlShut = false
// var beginMs = document.createElement("audio");
var readyMs = document.createElement("audio");
var gameMs = document.createElement("audio");
// beginMs.setAttribute("src", "sound/HappyLittleElves.mp3");
readyMs.setAttribute("src", "sound/readyGO.wav");
gameMs.setAttribute("src", "sound/gameMs.mp3");
// beginMs.loop = true
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
    resolution:1,
    backgroundColor:0xfbe5aa
})
const gansContainer = new Container();
const gameContainer = new Container();
const lanbContainer = new Container();
const rankContainer = new Container();
const indexContainer = new Container();
const soloContainer =new Container();
const introduceContain = new Container();
const overContainer = new Container();
const winContainer  = new Container()
var leftContainer = new Container();
const topContainer = new Container();
const bottomContainer = new Container();
const rightContainer = new Container();
const continueContrainer = new Container();
const soloPaperContrainer = new Container();
const streamerRankContainer = new Container();
soloPaperContrainer.x = -375
introduceContain.x = -375
overContainer.x = -375
winContainer.x = -375 
const ranks = new Container();
ranks.width = 231
ranks.height = 400
ranks.y = 150
rankContainer.y = 0
rankContainer.x = 375
indexContainer.x = 0
indexContainer.y = 0
indexContainer.width = 375
indexContainer.height = 600
soloContainer.x = -375
gameContainer.backgroundColor = 0x1d9ce0;
gameContainer.position.set(0,100)
streamerRankContainer.x = 695
app.stage.addChild(gameContainer);
app.stage.addChild(lanbContainer);
app.stage.addChild(overContainer);
app.stage.addChild(winContainer);
app.stage.addChild(soloContainer);
var style = {
    fontFamily: '黑体',
    fill:0xffffff
};
var bloodNum = 0
var mark = 0
// const Mark = new Text(mark,style)
soloContainer.x = -375

app.stage.addChild(indexContainer)
app.stage.addChild(soloContainer)
app.stage.addChild(introduceContain);
app.stage.addChild(continueContrainer)
app.stage.addChild(rankContainer);
app.stage.addChild(soloContainer);
app.stage.addChild(streamerRankContainer);
app.stage.addChild(soloPaperContrainer);
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
var inviteButton = ''
var waitInvite = ''
var warPaper = ''
var soloP1Name = '',soloP1RoomId = '',soloP1Score = '',soloP1Photo = ''
var soloP2Name = '',soloP2RoomId = '',soloP2Score = '',soloP2Photo = ''
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
    .add ('continue',"image/continue.png")
    .add ('user3',"image/user3.png")
    .add ('soloButton',"image/soloButton.png")
    .add ('solo',"image/solo.png")
    .add ('cancel',"image/cancel.png")
    .add ('inviteButton',"image/inviteButton.png")
    .add ('input',"image/input.png")
    .add ('cancelInvite',"image/cancelInvite.png")
    .add ('warPaper',"image/warPaper.png")
    .add ('streamerRank',"image/streamerRank.png")
    .add ('refuse',"image/refuse.png")
    .add ('agree',"image/agree.png")
    .add ('agreed',"image/agreed.png")
    .add ('refused',"image/refused.png")
    .add ('lineOut',"image/lineOut.png")
    .add ('leftContext',"image/leftContext.png")
    .add ('playing',"image/playing.png")
    .add ('huyaBoss1',"image/huyaBoss1.png")
    .add ('huyaBoss2',"image/huyaBoss2.png")
    .add ('huyaBossBoom',"image/huyaBossBoom.png")
    .add ('huyaSendCry',"image/huyaGirlCry.png")
    .add ('true2',"image/huyaSendBlood2.png")
    .add ('huyaSendCry2',"image/huyaGirlCry2.png")
    .add ('three',"image/three.png")
    .add ('two',"image/two.png")
    .add ('one',"image/one.png")
    .load(setup)
    function continueShow(){
        let continueSprite = new Sprite(
            PIXI.loader.resources['continue'].texture
        )
        continueSprite.width = 81.9
        continueSprite.height = 109.2
        continueSprite.position.set(375,86)
        continueContrainer.addChild(continueSprite)
        let continueLength = new PIXI.BitmapText('0', {font: "24px pointFont", tint: "0x642f00"});
        continueLength.text = continueNum
        continueLength.anchor.set(0.5,0.5)
        continueLength.position.set(375,185)
        continueContrainer.addChild(continueLength)
        TweenMax.to(continueSprite,0.5,{x:265,onComplete:function(){
            TweenMax.to(continueSprite,0.2,{alpha:0})
        }})
        TweenMax.to(continueLength,0.5,{x:285,onComplete:function(){
            TweenMax.to(continueLength,0.2,{alpha:0})
        }})
    }
function reciprocal(){
    let three = new Sprite(
        PIXI.loader.resources['three'].texture
    )
    three.anchor.set(0.5,0.5)
    three.width = 180
    three.height = 180
    three.position.set(187.5,-200)
    app.stage.addChild(three)
    let two = new Sprite(
        PIXI.loader.resources['two'].texture
    )
    two.anchor.set(0.5,0.5)
    two.width = 180
    two.height = 180
    two.position.set(187.5,-200)
    app.stage.addChild(two)
    let one = new Sprite(
        PIXI.loader.resources['one'].texture
    )
    one.anchor.set(0.5,0.5)
    one.width = 180
    one.height = 180
    one.position.set(187.5,-200)
    app.stage.addChild(one)
    
    let diu = document.createElement("audio");
    diu.setAttribute("src", "sound/diu.mp3");
    diu.play()
    TweenMax.to(three,0.3,{y:300,onComplete:function(){
        setTimeout(() => {
            TweenMax.to(three,0.4,{y:800})
            let diu = document.createElement("audio");
            diu.setAttribute("src", "sound/diu.mp3");
            diu.play()
            TweenMax.to(two,0.3,{y:300,onComplete:function(){
                setTimeout(() => {
                    TweenMax.to(two,0.4,{y:800})
                    let diu = document.createElement("audio");
                    diu.setAttribute("src", "sound/diu.mp3");
                    diu.play()
                    TweenMax.to(one,0.3,{y:300,onComplete:function(){
                        setTimeout(() => {
                            TweenMax.to(one,0.4,{y:800,onComplete:function(){
                                console.log('begin')
                                start()
                            }})
                        }, 800);
                    }})
                }, 800);
            }})
        }, 800);
    }})
}
function paperShow(name,photo){
    if(soloPaperContrainer.children.length!=0){
        soloPaperContrainer.removeChildren (0,soloPaperContrainer.length)
    }
    let warPaper = new Sprite(
        PIXI.loader.resources["warPaper"].texture
    )
    warPaper.width = 375
    warPaper.height = 600
    soloPaperContrainer.addChild(warPaper)
    console.log(photo)
    let newPhoto = photo.slice(0,4)+'s'+photo.slice(4)
    console.log(newPhoto)
    let inviterPhoto = PIXI.Sprite.from(newPhoto);
    inviterPhoto.width = 90
    inviterPhoto.height = 90
    inviterPhoto.anchor.set(0.5,0.5)
    inviterPhoto.position.set(187.5,200)
    soloPaperContrainer.addChild(inviterPhoto)
    let text = new Text(name+" 发来挑战",{fontSize:"24px"})
    text.anchor.set(0.5,0.5)
    text.position.set(187.5,270)
    soloPaperContrainer.addChild(text)
    let refuse = new Sprite(
        PIXI.loader.resources['refuse'].texture
    )
    refuse.anchor.set(0.5,0.5)
    refuse.position.set(130,320)
    refuse.buttonMode = true;
    refuse.interactive = true;
    refuse.on('click',refuseSolo)
    refuse.on('mouseover',doom)
    soloPaperContrainer.addChild(refuse)
    let agree = new Sprite(
        PIXI.loader.resources['agree'].texture
    )
    agree.anchor.set(0.5,0.5)
    agree.position.set(250,320)
    agree.buttonMode = true;
    agree.interactive = true;
    agree.on('click',agreeSolo)
    agree.on('mouseover',doom)
    soloPaperContrainer.addChild(agree)
    TweenMax.to(soloPaperContrainer,0.5,{x:0})
}
function addRank(){
    let test = new Sprite(
        PIXI.loader.resources["test"].texture
    )
    test.y = 50
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
    gameMs.pause()
}
function back(){
    TweenMax.to(indexContainer,1,{x:0})
    TweenMax.to(rankContainer,1,{x:-375})
}
function turnBackIndex(){
    TweenMax.to(indexContainer,1,{x:0})
    TweenMax.to(introduceContain,1,{x:-375})
}
function gameAgain(){
    bloodNum = 0
    TweenMax.to(blood,0.2,{x:bloodNum})
    mark = 0
    Mark.text = mark

    TweenMax.to(overContainer,0.4,{x:-375})
    start()
}
function loseTurnBackIndex(){
    if(module){
        closeRoom()
    }else{
        closeSoloRoom()
    }
    playing = false
    // beginMs.play();
    bloodNum = 0
    TweenMax.to(blood,0.2,{x:bloodNum})
    mark = 0
    Mark.text = mark
    TweenMax.to(indexContainer,0.4,{x:0})
    TweenMax.to(overContainer,0.4,{x:-375})
}
function winBackIndex(){
    playing = false
    bloodNum = 0
    TweenMax.to(blood,0.2,{x:bloodNum})
    mark = 0
    Mark.text = mark
    TweenMax.to(indexContainer,0.4,{x:0})
    TweenMax.to(winContainer,0.4,{x:-375})
    if(module){
        closeRoom()
    }else{
        closeSoloRoom()
    }
}
function flashRank(){
    firstText = new Text('',{fontSize:"15px"})
    firstText.x = 240
    firstText.y = 85
    ranks.addChild(firstText)
    firstNameText = new Text('',{fontSize:"15px"})
    firstNameText.x = 125
    firstNameText.y = 85
    ranks.addChild(firstNameText)
    secondText = new Text('',{fontSize:"15px"})
    secondText.x = 240
    secondText.y = 135
    ranks.addChild(secondText)
    secondNameText = new Text('',{fontSize:"15px"})
    secondNameText.x = 125
    secondNameText.y = 135
    ranks.addChild(secondNameText)
    thirdText = new Text('',{fontSize:"15px"})
    thirdText.x = 240
    thirdText.y = 185
    ranks.addChild(thirdText)
    thirdNameText = new Text('',{fontSize:"15px"})
    thirdNameText.x = 125
    thirdNameText.y = 185
    ranks.addChild(thirdNameText)
    forthText = new Text('',{fontSize:"15px"})
    forthText.x = 240
    forthText.y = 235
    ranks.addChild(forthText)
    forthNameText = new Text('',{fontSize:"15px"})
    forthNameText.x = 125
    forthNameText.y = 235
    ranks.addChild(forthNameText)
    fifthText = new Text('',{fontSize:"15px"})
    fifthText.x = 240
    fifthText.y = 285
    ranks.addChild(fifthText)
    fifthNameText = new Text('',{fontSize:"15px"})
    fifthNameText.x = 125
    fifthNameText.y = 285
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
function keyBoard(){
    var x = document.createElement("input");
    x.setAttribute("type", "text");
    //监听输入结果：
    x.setAttribute("onchange", (event) =>{
        console.log(event)
    });

    //弹出键盘：
    x.focus();

    //关闭键盘：
    // x.blur();
}
function soloBackIndex(){
    TweenMax.to(soloContainer,0.5,{x:-375})
    TweenMax.to(indexContainer,0.5,{x:0})
}
function cancelInviteHim(){
    soloContainer.addChild(inviteButton)
    soloContainer.removeChild(cancelInvite)
    closeSoloRoom()
}
function streamerRank(){
    TweenMax.to(streamerRankContainer,0.5,{x:375})
}
function invite(){
    soloContainer.removeChild(inviteButton)
    soloContainer.addChild(cancelInvite)
    let ProfileInfo = {
        name: streamerInfomation.streamerNick,
        photo: streamerInfomation.streamerAvatarUrl,
        // roomid:streamerInfomation.streamerRoomId
    }
    ws.send(JSON.stringify(new Packet(7000,ProfileInfo)))
}
function test(){
    ws.send(JSON.stringify(new Packet(9000)))
}
function setup(){
    
    let rankBg = new Sprite(
        PIXI.loader.resources['streamerRank'].texture
    )
    rankBg.width = 320
    rankBg.height = 600
    streamerRankContainer.addChild(rankBg)

    Mark = new PIXI.BitmapText('0', {font: "35px pointFont", tint: "0x000000",stroke: '0xffffff', strokeThickness: 4});
    Mark.x = 298
    Mark.y = 50
    Mark.anchor.set(0.5,0)
    init()
    const soloSprite = new Sprite(
        PIXI.loader.resources["solo"].texture
    )
    soloSprite.width = 375
    soloSprite.height = 600
    soloContainer.addChild(soloSprite)
    inviteButton = new Sprite(
        PIXI.loader.resources["inviteButton"].texture
    )
    inviteButton.anchor.set(0.5,0.5)
    inviteButton.position.set(187.5,300)
    inviteButton.buttonMode = true;
    inviteButton.interactive = true;
    inviteButton.on('click',invite)
    inviteButton.on('mouseover',doom)
    soloContainer.addChild(inviteButton)
    cancelInvite = new Sprite(
        PIXI.loader.resources["cancelInvite"].texture
    )
    cancelInvite.anchor.set(0.5,0.5)
    cancelInvite.position.set(187.5,300)
    cancelInvite.buttonMode = true;
    cancelInvite.interactive = true;
    cancelInvite.on('click',cancelInviteHim)
    cancelInvite.on('mouseover',doom)
    const soloBack = new Sprite(
        PIXI.loader.resources["back"].texture
    )
    soloBack.buttonMode = true;
    soloBack.interactive = true;
    soloBack.on('click',soloBackIndex)
    soloBack.on('mouseover',doom)
    soloBack.position.set(0,90)
    soloContainer.addChild(soloBack)
    // const input = new Sprite(
    //     PIXI.loader.resources["input"].texture
    // )
    // input.width = 225
    // input.height = 43.2
    // input.anchor.set(0.5,0.5)
    // input.position.set(187.5,240)
    // input.buttonMode = true;
    // input.interactive = true;
    // input.on('click',keyBoard)
    // input.on('mouseover',doom)
    input = new PIXI.TextInput({
		input: {
			fontSize: '20px',
			padding: '12px',
			width: '200px',
			color: '#26272E'
		},
		box: {
			default: {fill: 0xfbe5aa, rounded: 12, stroke: {color: 0x6a371a, width: 3}},
			focused: {fill: 0xfbe5aa, rounded: 12, stroke: {color: 0x493420, width: 3}},
			disabled: {fill: 0x493420, rounded: 12}
		}
	})
	
	input.placeholder = ''
	input.x = 187.5
	input.y = 240
	input.pivot.x = input.width/2
	input.pivot.y = input.height/2
    soloContainer.addChild(input);
    // soloContainer.addChild(input)
    const victoryImg = new Sprite(
        PIXI.loader.resources["victory"].texture
    )
    const backIndex = new Sprite(
        PIXI.loader.resources["turnBack"].texture
    )
    backIndex.x=135.5
    backIndex.y=400
    backIndex.buttonMode = true;
    backIndex.interactive = true;
    backIndex.on('click',winBackIndex)
    backIndex.on('mouseover',doom)
    winContainer.addChild(victoryImg)
    winContainer.addChild(backIndex)
    const overImg = new Sprite(
        PIXI.loader.resources["gameOver"].texture
    )
    const again = new Sprite(
        PIXI.loader.resources["again"].texture
    )
    again.x = 80
    again.y = 345
    again.buttonMode = true;
    again.interactive = true;
    const turnBack = new Sprite(
        PIXI.loader.resources["turnBack"].texture
    )
    turnBack.x = 187.5
    turnBack.y = 345
    turnBack.anchor.set(0.5,0.5)
    turnBack.buttonMode = true;
    turnBack.interactive = true;
    again.on('click',gameAgain)
    again.on('mouseover',doom)
    turnBack.on('click',loseTurnBackIndex)
    turnBack.on('mouseover',doom)
    overContainer.addChild(overImg)
    // overContainer.addChild(again)
    overContainer.addChild(turnBack)
    const intro = new Sprite(
        PIXI.loader.resources["waitGame"].texture
    )
    intro.width = 375
    intro.height = 600
    const closeRule = new Sprite(
        PIXI.loader.resources["start"].texture
    )
    closeRule.anchor.set(0.5,0.5)
    closeRule.x = 187.5
    closeRule.y = 565
    closeRule.buttonMode = true;
    closeRule.interactive = true;
    closeRule.on('click',start)
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
    backBotton.on('click',back)
    backBotton.on('mouseover',doom)
    backBotton.x = -30
    rankPage.zIndex = 10
    // rankContainer.addChild(backBotton)
    rankContainer.addChild(rankPage)
    rankContainer.addChild(ranks)
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
    gameContainer.addChild(backgroundcolor)
    blood = new Sprite(
        PIXI.loader.resources["blood"].texture
    )
    blood2 = new Sprite(
        PIXI.loader.resources["blood"].texture
    )
    blood2.x = 375
    lanbContainer.addChild(blood)
    lanbContainer.addChild(blood2)
    gameContainer.addChild(gansContainer)
    user = new Sprite(
        PIXI.loader.resources["user"].texture
    );
    console.log(user)
    user.width = 89.66666666666667;
    user.height = 97.75;
    user.position.set(187.5,250)
    user.anchor.set(0.5,0.5)
    gameContainer.addChild(user);

    
    bg = new Sprite(
        PIXI.loader.resources["bag"].texture
    )
    bg.width = 375;
    bg.height = 500;
    bg.position.set(0,0)
    gameContainer.addChild(bg)
    lanb = new Sprite(
        PIXI.loader.resources["lanb"].texture
    )
    lanb.lastSortedIndex = 1
    console.log(lanb)
    lanbContainer.addChild(lanb)
    const index = new Sprite(
        PIXI.loader.resources["index"].texture
    )
    index.width = 375
    index.height = 600
    indexContainer.addChild(index)
    const startBottom = new Sprite(
        PIXI.loader.resources['start'].texture
    )
    startBottom.x = 97.5
    startBottom.y = 350
    startBottom.buttonMode = true;
    startBottom.interactive = true;
    // indexContainer.addChild(startBottom)
    const togetherBottom = new Sprite(
        PIXI.loader.resources['togetherBottom'].texture
    )
    togetherBottom.x = 97.5
    togetherBottom.y = 290
    togetherBottom.buttonMode = true;
    togetherBottom.interactive = true;
    // indexContainer.addChild(togetherBottom)
    const rankBottom = new Sprite(
        PIXI.loader.resources['rankBottom'].texture
    )
    rankBottom.x = 97.5
    rankBottom.y = 410
    rankBottom.buttonMode = true;
    rankBottom.interactive = true;
    // indexContainer.addChild(rankBottom)
    const introduceBottom = new Sprite(
        PIXI.loader.resources['openRoom'].texture
    )
    introduceBottom.anchor.set(0.5,0.5)
    introduceBottom.x = 187.5
    introduceBottom.y = 520
    introduceBottom.buttonMode = true;
    introduceBottom.interactive = true;
    indexContainer.addChild(introduceBottom)
    introduceBottom.on('click',ruleShow)
    introduceBottom.on('mouseover',doom)
    togetherBottom.on('click',play2)
    togetherBottom.on('mouseover',doom)
    rankBottom.on('click',rankPageMove)
    rankBottom.on('mouseover',doom)
    startBottom.on('click',start)
    startBottom.on('mouseover',doom)
    
    const soloBottom = new Sprite(
        PIXI.loader.resources['soloButton'].texture
    )
    soloBottom.anchor.set(0.5,0.5)
    soloBottom.width = 235
    soloBottom.height = 59
    soloBottom.x = 187.5
    soloBottom.y = 450
    soloBottom.buttonMode = true;
    soloBottom.interactive = true;
    indexContainer.addChild(soloBottom)
    soloBottom.on('click',soloShow)
    soloBottom.on('mouseover',doom)

    ready = new Sprite(
        PIXI.loader.resources["ready"].texture
    )
    ready.anchor.set(0.5,0.5)
    ready.width = 249.6
    ready.height = 82.8
    ready.position.set(187.5,-300)
    gameContainer.addChild(ready);
    go = new Sprite(
        PIXI.loader.resources["go"].texture
    )
    go.anchor.set(0.5,0.5)
    go.position.set(187.5,-300)
    go.width = 168
    go.height = 88.8
    gameContainer.addChild(go);
    
    gameContainer.addChild(rightContainer);
    gameContainer.addChild(topContainer);
    gameContainer.addChild(leftContainer);
    gameContainer.addChild(bottomContainer);
    
    flashRank()
    const rocketLogo = new Sprite(
        PIXI.loader.resources["rocket"].texture
    )
    rocketLogo.width=22
    rocketLogo.height=22
    rocketLogo.anchor.set(0.5,0.5)
    rocketLogo.x=160
    rocketLogo.y=70
    lanbContainer.addChild(rocketLogo)
    rocketNumber = new PIXI.BitmapText('X0', {font: "18px pointFont", tint: "0xffffff"});
    rocketNumber.x = 170
    rocketNumber.y = 63
    lanbContainer.addChild(rocketNumber)
    const bloodLogo = new Sprite(
        PIXI.loader.resources["bloodGift"].texture
    )
    bloodLogo.width=22
    bloodLogo.height=22
    bloodLogo.anchor.set(0.5,0.5)
    bloodLogo.x=100
    bloodLogo.y=70
    lanbContainer.addChild(bloodLogo)
    bloodGiftNumber = new PIXI.BitmapText('X0', {font: "18px pointFont", tint: "0xffffff"});
    bloodGiftNumber.x = 110
    bloodGiftNumber.y = 63
    lanbContainer.addChild(bloodGiftNumber)
    console.log(bloodGiftNumber)
    
    lanbContainer.addChild(Mark);

    getStreamerData()

    console.log('soloFlash')
    soloP1Name = new PIXI.Text('NickName',{fontSize:"20px", tint: "0x000000"});
    soloP1Name.position.set(130,240)
    streamerRankContainer.addChild(soloP1Name)
    soloP1RoomId = new PIXI.Text('房间号：',{fontSize:"16px", tint: "0x000000"});
    soloP1RoomId.position.set(130,280)
    streamerRankContainer.addChild(soloP1RoomId)
    soloP1Score = new PIXI.Text('分数：',{fontSize:"20px", tint: "0xffffff",fill:"0xffffff"});
    soloP1Score.position.set(160,195)
    soloP1Score.anchor.set(0.5,0.5)
    streamerRankContainer.addChild(soloP1Score)
    soloP2Name = new PIXI.Text('对战主播昵称',{fontSize:"20px", tint: "0x000000"});
    soloP2Name.position.set(130,485)
    streamerRankContainer.addChild(soloP2Name)
    soloP2RoomId = new PIXI.Text('房间号：',{fontSize:"16px", tint: "0x000000"});
    soloP2RoomId.position.set(130,525)
    streamerRankContainer.addChild(soloP2RoomId)
    soloP2Score = new PIXI.Text('分数：',{fontSize:"20px", tint: "0x000000",fill:"0xffffff"});
    soloP2Score.position.set(160,440)
    soloP2Score.anchor.set(0.5,0.5)
    streamerRankContainer.addChild(soloP2Score)
    soloP1Photo = PIXI.Sprite.from('http://huyaimg.msstatic.com/avatar/1095/ae/86773ae1e8a6c81829350bb01060b5_180_135.jpg');
    soloP1Photo.width = 90
    soloP1Photo.height = 90
    soloP1Photo.position.set(25,230)
    streamerRankContainer.addChild(soloP1Photo)
    soloP2Photo = PIXI.Sprite.from('http://huyaimg.msstatic.com/avatar/1095/ae/86773ae1e8a6c81829350bb01060b5_180_135.jpg');
    soloP2Photo.width = 90
    soloP2Photo.height = 90
    soloP2Photo.position.set(25,475)
    streamerRankContainer.addChild(soloP2Photo)
}
function soloInfoFlash(){
}
function soloShow(){
    TweenMax.to(indexContainer,0.6,{x:375})
    TweenMax.to(soloContainer,0.6,{x:0})
}
function giftSend(option,name,sendItemCount){
    let giftContainer = new Container()
    app.stage.addChild(giftContainer)
    let giftlanb = new Sprite(
        PIXI.loader.resources["gift"].texture
    )
    giftlanb.anchor.set(0.5,0.5)
    giftlanb.position.set(187.5,160)
    giftContainer.position.set(-375,0)
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
        gift.position.set(275.5,155)
        gift.anchor.set(0.5,0.5)
        giftContainer.addChild(gift)
        let sendName = new PIXI.Text(name+'送来火箭前来助威', {fontSize:"14px", tint: "0x000000"});
        sendName.position.set(90,145)
        giftContainer.addChild(sendName)
        setTimeout(() => {
            TweenMax.to(gift,1,{width:22,height:22,x:160,y:70,onComplete:function(){
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
        gift.width = 40
        gift.height = 40
        gift.position.set(275.5,155)
        gift.anchor.set(0.5,0.5)
        giftContainer.addChild(gift)
        setTimeout(() => {
            TweenMax.to(gift,1,{width:22,height:22,x:100,y:70,onComplete:function(){
                bloodGiftNumber.text = "X"+bloodGiftNum
                giftContainer.removeChild(gift)
            }})
        }, 1500);
        let sendName = new PIXI.Text(name+' 送来“血瓶”助威', {fontSize:"14px", tint: "0x000000"});
        sendName.position.set(90,145)
        giftContainer.addChild(sendName)
    }
    console.log(bloodGiftNumber)
}
function doom(){
    let waterMs = document.createElement("audio");
    waterMs.setAttribute("src","sound/waterMs.mp3")
    waterMs.play()
}
function rankPageMove(){
    TweenMax.to(indexContainer,1,{x:375})
    TweenMax.to(rankContainer,1,{x:27.5})
    let rankList = []
    rankList[0] = {}
    rankList[0].header = {"x-header":"application/json"}
    rankList[0].url = "http://39.96.68.53:9090/record/getAll"
    rankList[0].method = "GET"
    rankList[0].data = {}
    rankList[0].dataType = "json"
    hyExt.logger.info('发送HTTP请求：' + JSON.stringify(args))
    hyExt.request(rankList[0]).then(resp => {
        console.log(resp)
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
        console.log(err)
    })
}
function ruleShow(){
    
    scoreRank.alpha = 1
    module = true
    // beginMs.play();
    openRoom()
    TweenMax.to(indexContainer,1,{x:375})
    TweenMax.to(introduceContain,1,{x:0})
    TweenMax.to(streamerRankContainer,0.5,{x:695})
} 
function start (){
    playing = true
    controlShut = true
    let huyaYesMs = document.createElement("audio");
    huyaYesMs.setAttribute("src", "sound/huyaYes.mp3");
    huyaYesMs.play()
    gameTime = setTimeout(() => {
        controlShut = false
        TweenMax.to(winContainer,0.4,{x : 0})

    }, 158034);
    TweenMax.to(introduceContain,1,{x : -375,onComplete:function(){
        // beginMs.pause()
        readyMs.play()
        TweenMax.to(ready,0.5,{y:230})
        setTimeout(() => {
            TweenMax.to(go,0.5,{y:230})
            TweenMax.to(ready,0.5,{y:800})
        }, 700);
        setTimeout(() => {
            gameMs.currentTime = 0;
            gameMs.play()
            TweenMax.to(go,0.5,{y:800,onComplete:function(){
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
                for(let i in leftJava){
                    let time = setTimeout(() => {
                        Leftmodule(1.5,0)
                    }, leftJava[i]);
                    times.push(time)
                }
                for(let i in rightJava){
                    let time = setTimeout(() => {
                        Rightmodule(1.5,0)
                    }, rightJava[i]);
                    times.push(time)
                }

                for(let i in topJavaTrue){
                    let time = setTimeout(() => {
                        Topmodule(0.7,1)
                    }, topJavaTrue[i]);
                    times.push(time)
                }
                for(let i in bottomJavaTrue){
                    let time = setTimeout(() => {
                        Bottommodule(0.7,1)
                    }, bottomJavaTrue[i]);
                    times.push(time)
                }
                for(let i in leftJavaTrue){
                    let time = setTimeout(() => {
                        Leftmodule(0.7,1)
                    }, leftJavaTrue[i]);
                    times.push(time)
                }
                for(let i in rightJavaTrue){
                    let time = setTimeout(() => {
                        Rightmodule(0.7,1)
                    }, rightJavaTrue[i]);
                    times.push(time)
                }
            }})
        }, 1400);
        
    }})
    
}
function huyaBoom(boomPosition){
    var boomMs = document.createElement("audio");
    boomMs.setAttribute("src", "sound/boom.mp3");
    boomMs.play()
    let fire = PIXI.Texture.fromImage("fire");
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
    movieClip.position.set(187.5,250)
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
    sprite.width = 70.2 ;
    sprite.height = 78 ;
    sprite.position.set(187.5 ,0)
    sprite.option = 2
    let sprite2 = ''
    sprite2 = new Sprite(
        PIXI.loader.resources["huyaBoss2"].texture
    )
    sprite2.anchor.set(0.5,0.5)
    sprite2.width = 70.2 ;
    sprite2.height = 78 ;
    sprite2.position.set(187.5 ,0)
    sprite2.option = 0
    sprite2.BOOS = true
    topContainer.addChild(sprite);
    topContainer.addChild(sprite2);
    setTimeout(() => {
        topButton()
        setTimeout(() => {
            topButton()
        }, 400);
    }, 500);
    TweenMax.to(sprite, time ,  {x: 187.5 , y: 200 ,ease:Linear.easeNone ,onComplete :function(){
        removeMark()

        topContainer.removeChild(sprite);
    }});
    TweenMax.to(sprite2, time ,  {x: 187.5 , y: 200 ,ease:Linear.easeNone ,onComplete :function(){
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
    console.log('888')
    if(option == 0){
        console.log('2')
        sprite = new Sprite(
            PIXI.loader.resources["huya"].texture
        )
        sprite.anchor.set(0.5,0.5)
        sprite.width = 70.2 ;
        sprite.height = 68.4 ;
        
        setTimeout(() => {
            rightButton()
        }, 500);
    }
    if(option == 1){
        console.log('3')
        sprite = new Sprite(
            PIXI.loader.resources["true2"].texture
        )
        console.log(sprite)
        sprite.anchor.set(0.5,0.5)
        sprite.width = 71.7 ;
        sprite.height = 89.7 ;
    }
    sprite.option = option
    sprite.position.set(350 ,250 )
    rightContainer.addChild(sprite);
    
    TweenMax.to(sprite, time ,  {x: 210 , y: 250 ,ease:Linear.easeNone  ,onComplete :function(){
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
        sprite.width = 70.2 ;
        sprite.height = 68.4 ;
        setTimeout(() => {
            topButton()
        }, 500);
    }
    if(option == 1){
        sprite = new Sprite(
            PIXI.loader.resources["true"].texture
        )
        sprite.anchor.set(0.5,0.5)
        sprite.width = 71.7 ;
        sprite.height = 89.7 ;
    }
    sprite.position.set(187.5 ,0)
    sprite.option = option
    topContainer.addChild(sprite);
    
    
    TweenMax.to(sprite, time ,  {x: 187.5 , y: 200 ,ease:Linear.easeNone ,onComplete :function(){
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
    sprite.width = 70.2 ;
    sprite.height = 78 ;
    sprite.position.set(0,250 )
    sprite.option = 2
    let sprite2 = ''
    sprite2 = new Sprite(
        PIXI.loader.resources["huyaBoss2"].texture
    )
    sprite2.anchor.set(0.5,0.5)
    sprite2.width = 70.2 ;
    sprite2.height = 78 ;
    sprite2.position.set(0,250 )
    sprite2.option = 0
    sprite2.BOOS = true
    leftContainer.addChild(sprite);
    leftContainer.addChild(sprite2);
    
    setTimeout(() => {
        leftButton()
        setTimeout(() => {
            leftButton()
        }, 400);
    }, 500);
    TweenMax.to(sprite, time ,  {x: 135 , y: 250 ,ease:Linear.easeNone ,onComplete :function(){
        removeMark()

        leftContainer.removeChild(sprite);
    }});
    TweenMax.to(sprite2, time ,  {x: 135 , y: 250 ,ease:Linear.easeNone ,onComplete :function(){
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
        sprite.width = 70.2 ;
        sprite.height = 68.4 ;
        setTimeout(() => {
            leftButton()
        }, 500);
    }
    if(option == 1){
        sprite = new Sprite(
            PIXI.loader.resources["true"].texture
        )
        sprite.anchor.set(0.5,0.5)
        sprite.width = 71.7 ;
        sprite.height = 89.7 ;
    }
    sprite.option = option
    sprite.position.set(0,250 )
    leftContainer.addChild(sprite);
    
    TweenMax.to(sprite, time ,  {x: 135 , y: 250  ,ease:Linear.easeNone ,onComplete :function(){
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
    sprite.width = 70.2 ;
    sprite.height = 78 ;
    sprite.position.set(187.5 ,550 )
    sprite.option = 2
    let sprite2 = ''
    sprite2 = new Sprite(
        PIXI.loader.resources["huyaBoss2"].texture
    )
    sprite2.anchor.set(0.5,0.5)
    sprite2.width = 70.2 ;
    sprite2.height = 78 ;
    sprite2.position.set(187.5 ,550 )
    sprite2.option = 0
    sprite2.BOOS = true
    bottomContainer.addChild(sprite);
    bottomContainer.addChild(sprite2);
    setTimeout(() => {
        bottomButton()
        setTimeout(() => {
            bottomButton()
        }, 400);
    }, 500);
    TweenMax.to(sprite, time ,  {x: 187.5 , y: 275 ,ease:Linear.easeNone ,onComplete :function(){
        removeMark()

        bottomContainer.removeChild(sprite);
    }});
    TweenMax.to(sprite2, time ,  {x: 187.5 , y: 275 ,ease:Linear.easeNone ,onComplete :function(){
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
        sprite.width = 70.2 ;
        sprite.height = 68.4 ;
        setTimeout(() => {
            bottomButton()
        }, 500);
    }
    if(option == 1){
        sprite = new Sprite(
            PIXI.loader.resources["true"].texture
        )
        sprite.anchor.set(0.5,0.5)
        sprite.width = 71.7 ;
        sprite.height = 89.7 ;
    }
    sprite.option = option
    sprite.position.set(187.5 ,550 )
    bottomContainer.addChild(sprite);
    
    TweenMax.to(sprite, time ,  {x: 187.5 , y: 275 ,ease:Linear.easeNone  ,onComplete :function(){
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
    sprite.width = 70.2 ;
    sprite.height = 78 ;
    sprite.position.set(350 ,250 )
    sprite.option = 2
    let sprite2 = ''
    sprite2 = new Sprite(
        PIXI.loader.resources["huyaBoss2"].texture
    )
    sprite2.anchor.set(0.5,0.5)
    sprite2.width = 70.2 ;
    sprite2.height = 78 ;
    sprite2.position.set(350 ,250 )
    sprite2.option = 0
    sprite2.BOOS = true
    rightContainer.addChild(sprite);
    rightContainer.addChild(sprite2);
    setTimeout(() => {
        rightButton()
        setTimeout(() => {
            rightButton()
        }, 500);
    }, 500);
    TweenMax.to(sprite, time ,  {x: 210 , y: 250 ,ease:Linear.easeNone ,onComplete :function(){
        removeMark()

        rightContainer.removeChild(sprite);
    }});
    TweenMax.to(sprite2, time ,  {x: 210 , y: 250 ,ease:Linear.easeNone ,onComplete :function(){
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
function shakeRight(){
    console.log('shake')
    TweenMax.to(bg,0.1,{x:3,onComplete:function(){
        TweenMax.to(bg,0.1,{x:0})
    }})
}
function shakeLeft(){
    console.log('shake')
    TweenMax.to(bg,0.1,{x:-3,onComplete:function(){
        TweenMax.to(bg,0.1,{x:0})
    }})
}
function shakeTop(){
    console.log('shake')
    TweenMax.to(bg,0.1,{y:-3,onComplete:function(){
        TweenMax.to(bg,0.1,{y:0})
    }})
}
function shakeBottom(){
    console.log('shake')
    TweenMax.to(bg,0.1,{y:3,onComplete:function(){
        TweenMax.to(bg,0.1,{y:0})
    }})
}
function addMark(){
    // flashScore()
    // myScore()
    console.log(Mark)
    TweenMax.to(Mark,0.1,{x:285,onComplete:function(){
        TweenMax.to(Mark,0.1,{x:298})
    }})
    let extra = 0
    if(continueNum>=10){
        let a = continueNum%10
        extra = (continueNum-a)/10
        console.log(extra)
    }
    mark = mark+50*(extra+1)
    Mark.text = mark
    if(module){
        addMyScore()
    }else{
        sendSoloScore()
    }
    
    // if(mark>100){
    //     console.log('more than 100')
    //     Mark.width = 80
    // }
}
function removeMark(){
    // flashScore()
    // myScore()
    continueNum = 0
    console.log(Mark)
    TweenMax.to(Mark,0.1,{x:285,onComplete:function(){
        TweenMax.to(Mark,0.1,{x:298})
    }})
    mark = mark-100
    if(module){
        addMyScore()
    }else{
        sendSoloScore()
    }
    Mark.text = mark
    bloodNum = bloodNum-20
    if(bloodNum<=-150){
        console.log('Over')
        gameOverIt()
    }
    
    // if(mark<-100){
    //     console.log('more than 100')
    //     Mark.width = 80
    // }
    TweenMax.to(blood,0.2,{x:bloodNum})
}
function gansMoveT(){
    let topgans = new Sprite(
        PIXI.loader.resources["gans"].texture
    )
    topgans.rotation = -1.57
    topgans.width = 27
    topgans.height=15
    topgans.x= 194
    topgans.y = 252
    if(topContainer.children.length!=0){
        TweenMax.to(topgans,0.2,{y:topContainer.children[0].y+60,onComplete:function(){
            gansContainer.removeChild(topgans)
        }})
    }else{
        TweenMax.to(topgans,0.2,{y:-10})
    }
    gansContainer.addChild(topgans)
}
function gansMoveL(){
    console.log('gans')
    let leftgans = new Sprite(
        PIXI.loader.resources["gans"].texture
    )
    leftgans.rotation = 3.14
    leftgans.width = 27
    leftgans.height=15
    leftgans.x= 189
    leftgans.y = 272
    if(leftContainer.children.length!=0){
        TweenMax.to(leftgans,0.2,{x:leftContainer.children[0].x+30,onComplete:function(){
            gansContainer.removeChild(leftgans)
        }})
    }else{
        TweenMax.to(leftgans,0.2,{x:-10})
    }
    gansContainer.addChild(leftgans)
    
}
function gansMoveR(){
    let rightgans = new Sprite(
        PIXI.loader.resources["gans"].texture
    )
    rightgans.width = 27
    rightgans.height=15
    rightgans.x= 189
    rightgans.y = 256
    if(rightContainer.children.length!=0){
        TweenMax.to(rightgans,0.2,{x:rightContainer.children[0].x-30,onComplete:function(){
            gansContainer.removeChild(rightgans)
        }})
    }else{
        TweenMax.to(rightgans,0.2,{x:375})
    }
    gansContainer.addChild(rightgans)
}
function gansMoveB(){
    let bottongans = new Sprite(
        PIXI.loader.resources["gans"].texture
    )
    bottongans.rotation = 1.57
    bottongans.width = 27
    bottongans.height=15
    bottongans.x= 209
    bottongans.y = 248
    if(bottomContainer.children.length!=0){
        TweenMax.to(bottongans,0.2,{y:bottomContainer.children[0].y-20,onComplete:function(){
            gansContainer.removeChild(bottongans)
        }})
    }else{
        TweenMax.to(bottongans,0.2,{y:510})
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
                    console.log('1')
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
                                console.log(topContainer.children)
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
                console.log('39')
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
                addBloodPC()
            break
            case 88:
//x
                fireRocketPC()
            break
        }
    }
  }
  function fireBoom(boomPosition){
    var boomMs = document.createElement("audio");
    boomMs.setAttribute("src", "sound/boom.mp3");
    boomMs.play()
    let fire = PIXI.Texture.fromImage("fire");
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
    movieClip.position.set(boomPosition.x,boomPosition.y)
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
function topButton(){
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
        console.log('1')
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
                    console.log(topContainer.children)
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
function leftButton(){
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
function rightButton(){
    if(controlShut){
        user.texture=PIXI.loader.resources["user"].texture
    gansMoveR()
    console.log('39')
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
function bottomButton(){
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
