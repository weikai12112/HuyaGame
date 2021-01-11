
function play2(){
    const hide = new Sprite(
        PIXI.loader.resources["hideWall"].texture
    ) 
    hide.x = 375
    // app.stage.addChild(hide);
    const play2 =  new Container()
    const play2map =  new Container()
    const leftContainer2 = new Container()
    const topContainer2 = new Container()
    const rightContainer2 = new Container()
    const bottomContainer2 = new Container()
    play2.x = 400
    play2map.y = 100
    const gameMap = new Sprite(
        PIXI.loader.resources["backgroundcolor"].texture
    )
    const wall = new Sprite(
        PIXI.loader.resources["bag"].texture
    )
    const p2Lanb = new Sprite(
        PIXI.loader.resources["lanb"].texture
    )
    var user2 = new Sprite(
        PIXI.loader.resources["user"].texture
    );
    user2.width = 50;
    user2.height = 50;
    user2.position.set(187.5,250)
    user2.anchor.set(0.5,0.5)
    wall.height = 500
    play2map.addChild(gameMap)
    app.stage.addChild(play2);
    play2.addChild(play2map);
    play2.addChild(p2Lanb);
    play2map.addChild(wall);
    play2map.addChild(user2);
    play2map.addChild(leftContainer2);
    play2map.addChild(rightContainer2);
    play2map.addChild(topContainer2);
    play2map.addChild(bottomContainer2);
    Bottommodule2(1.5,0)
    function Leftmodule2 (time,option){
        let sprite = ''
        if(option == 0){
            sprite = new Sprite(
                PIXI.loader.resources["huya"].texture
            )
        }
        if(option == 1){
            sprite = new Sprite(
                PIXI.loader.resources["true"].texture
            )
        }
        sprite.option = option
        sprite.width = 25;
        sprite.height = 25;
        sprite.y=235
        leftContainer2.addChild(sprite);
        TweenMax.to(sprite, time ,  {x: 135, y: 235 ,ease:Linear.easeNone ,onComplete :function(){
            console.log(app.stage)
            if(option == 0){
                removeMark()
            }
            leftContainer2.removeChild(sprite);
        }});  
    }
    function Bottommodule2 (time,option){
        let sprite = ''
        if(option == 0){
            sprite = new Sprite(
                PIXI.loader.resources["huya"].texture
            )
        }
        if(option == 1){
            sprite = new Sprite(
                PIXI.loader.resources["true"].texture
            )
        }
        sprite.option = option
        sprite.width = 25;
        sprite.height = 25;
        sprite.position.set(175,550)
        bottomContainer2.addChild(sprite);
        TweenMax.to(sprite, time ,  {x: 175, y: 275,ease:Linear.easeNone  ,onComplete :function(){
            if(option == 0){
                removeMark()
            }
            bottomContainer2.removeChild(sprite);
        }});  
    }
    function Topmodule2 (time,option){
        let sprite = ''
        if(option == 0){
            sprite = new Sprite(
                PIXI.loader.resources["huya"].texture
            )
        }
        if(option == 1){
            sprite = new Sprite(
                PIXI.loader.resources["true"].texture
            )
        }
        sprite.width = 25;
        sprite.height = 25;
        sprite.position.set(175,0)
        sprite.option = option
        topContainer2.addChild(sprite);
        TweenMax.to(sprite, time ,  {x: 175, y: 200,ease:Linear.easeNone ,onComplete :function(){
            if(option == 0){
                removeMark()
            }
            topContainer2.removeChild(sprite);
        }});
        
    }
    function Rightmodule2 (time,option){
        let sprite = ''
        if(option == 0){
            sprite = new Sprite(
                PIXI.loader.resources["huya"].texture
            )
        }
        if(option == 1){
            sprite = new Sprite(
                PIXI.loader.resources["true"].texture
            )
        }
        sprite.option = option
        sprite.width = 25;
        sprite.height = 25;
        sprite.position.set(350,235)
        rightContainer2.addChild(sprite);
        TweenMax.to(sprite, time ,  {x: 210, y: 235,ease:Linear.easeNone  ,onComplete :function(){
            if(option == 0){
                removeMark()
            }
            rightContainer2.removeChild(sprite);
        }});  
    }
}
