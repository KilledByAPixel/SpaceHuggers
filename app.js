/*
    Javascript Space Game
    By Frank Force 2021

*/

'use strict';

const clampCamera = !debug;
const lowGraphicsSettings = glOverlay = !window['chrome']; // only chromium uses high settings
const startCameraScale = 4*16;
const defaultCameraScale = 4*16;
const precipitationEnable = 1;
const maxPlayers = 4;

const team_none = 0;
const team_player = 1;
const team_enemy = 2;

let updateWindowSize, renderWindowSize, gameplayWindowSize;

const resetGame=()=>
{
    gameTimer.set();
    startLevel(1);
}

engineInit(

///////////////////////////////////////////////////////////////////////////////
()=> // appInit 
{
    resetGame();
    cameraScale = startCameraScale;
},

///////////////////////////////////////////////////////////////////////////////
()=> // appUpdate
{
    const cameraSize = vec2(mainCanvas.width, mainCanvas.height).scale(1/cameraScale);
    renderWindowSize = cameraSize.add(vec2(5));

    gameplayWindowSize = vec2(mainCanvas.width, mainCanvas.height).scale(1/defaultCameraScale);
    updateWindowSize = gameplayWindowSize.add(vec2(30));
    //debugRect(cameraPos, maxGameplayCameraSize);
    //debugRect(cameraPos, updateWindowSize);

    if (debug)
    {
        randSeeded(randSeeded(randSeeded(randSeed = Date.now()))); // set random seed for debug mode stuf
        if (keyWasPressed(81))
            new Enemy(mousePosWorld);

        if (keyWasPressed(84))
        {
            //for(let i=30;i--;)
                new Grenade(mousePosWorld);
        }

        if (keyWasPressed(69))
            explosion(mousePosWorld);

        if (keyIsDown(89))
        {
            let e = new ParticleEmitter(mousePosWorld);

            // test
            e.collideTiles = 1;
            //e.tileIndex=7;
            e.emitSize = 2;
            e.colorStartA = new Color(1,1,1,1);
            e.colorStartB = new Color(0,1,1,1);
            e.colorEndA = new Color(0,0,1,0);
            e.colorEndB = new Color(0,.5,1,0);
            e.emitConeAngle = .1;
            e.particleTime = 1
            e.speed = .3
            e.elasticity = .1
            e.gravityScale = 1;
            //e.additive = 1;
            e.angle = -PI;
        }

        if (mouseWheel) // mouse zoom
            cameraScale = clamp(cameraScale*(1-mouseWheel/10), defaultTileSize.x*16, defaultTileSize.x/16);
                    
        //if (keyWasPressed(77))
        //    playSong([[[,0,219,,,,,1.1,,-.1,-50,-.05,-.01,1],[2,0,84,,,.1,,.7,,,,.5,,6.7,1,.05]],[[[0,-1,1,0,5,0],[1,1,8,8,0,3]]],[0,0,0,0],90]) // music test

        if (keyWasPressed(77))
            players[0].pos = mousePosWorld;

        /*if (keyWasPressed(32))
        {
            skyParticles && skyParticles.destroy();
            tileLayer.destroy();
            tileBackgroundLayer.destroy();
            tileParallaxLayers.forEach((tileParallaxLayer)=>tileParallaxLayer.destroy());
            randomizeLevelParams();
            applyArtToLevel();
        }*/
    }

    if (keyWasPressed(82))
        startLevel(level);
},

///////////////////////////////////////////////////////////////////////////////
()=> // appUpdatePost
{
    if (!debug || !gifTimer.isSet())
    {
        if (players.length == 1)
        {
            const player = players[0];
            cameraPos = cameraPos.lerp(player.pos, clamp(player.getAliveTime()/2));
        }
        else
        {
            // camera follows average pos of living players
            let posTotal = vec2();
            let playerCount = 0;
            let cameraOffset = 1;
            for(const player of players)
            {
                if (!player.isDead())
                {
                    ++playerCount;
                    posTotal = posTotal.add(player.pos.add(vec2(0,cameraOffset)));
                }
            }

            if (playerCount)
                cameraPos = cameraPos.lerp(posTotal.scale(1/playerCount), .2);
        }

        // spawn players if they don't exist
        for(let i = maxPlayers;i--;)
        {
            if (!players[i] && (gamepadWasPressed(0, i)||gamepadWasPressed(1, i)))
                new Player(checkpointPos, i);
        }
        
        // clamp to bottom and sides of level
        if (clampCamera)
        {
            const w = maxWidth/2/cameraScale+1;
            const h = maxHeight/2/cameraScale+2;
            cameraPos.y = max(cameraPos.y, h);
            if (w*2 < tileCollisionSize.x)
                cameraPos.x = clamp(cameraPos.x, tileCollisionSize.x - w, w);
        }

        updateParallaxLayers();
    }

    updateSky();
},

///////////////////////////////////////////////////////////////////////////////
()=> // appRender
{
    const gradient = mainContext.createLinearGradient(0,0,0,mainCanvas.height);
    gradient.addColorStop(0,levelSkyColor.rgba());
    gradient.addColorStop(1,levelSkyHorizonColor.rgba());
    mainContext.fillStyle = gradient;

    //mainContext.fillStyle = levelSkyColor.rgba();
    mainContext.fillRect(0,0,mainCanvas.width, mainCanvas.height);

    drawStars();
},

///////////////////////////////////////////////////////////////////////////////
()=> // appRenderPost
{
    const drawText = (text, x, y, size, alpha, color, outlineColor)=>
    {
        mainContext.font = size + 'in impact';
        mainContext.lineWidth = 3;
        mainContext.textAlign = 'center';

        mainContext.fillStyle = color.scale(1,alpha).rgba();
        mainContext.fillText(text, x, y);

        mainContext.strokeStyle = outlineColor.scale(1,alpha).rgba();
        mainContext.lineWidth = 2;
        mainContext.strokeText(text, x, y);
    }

    const gameTime = gameTimer.get();
    const p = percent(gameTime, 8, 10);
    if (p > 0)
    {
        let y = 140;
        drawText('SPACE HUGGERS',mainCanvas.width/2, y, 1.4, p, new Color().setHSLA(time/4,1,.5), new Color(0,0,0));
        drawText('A JS13k Game by Frank Force',mainCanvas.width/2, y+=70, .6, p, new Color(1,1,1), new Color(0,0,0));
    }

    // fade in level transition
    const levelTime = levelTimer.get();
    const fade = percent(levelTime, .5, 2);
    drawRect(cameraPos, vec2(1e3), new Color(0,0,0,fade))
});