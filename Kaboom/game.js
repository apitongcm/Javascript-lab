kaboom({
    global:true,
    fullscreen:true,
    scale: 1,
    debug:true
});

loadSprite(link-left ,'Assets\faceleft.png');
loadSprite(link-right ,'./Assets/faceright.png');
loadSprite(link-up ,'./Assets/faceup.png');
loadSprite(link-down ,'./Assets/facedown.png');
loadSprite(block-down ,'./Assets/block-down.png');
loadSprite(block-up ,'./Assets/block-top.png');
loadSprite(block-right ,'./Assets/block-right.png');
loadSprite(block-left ,'./Assets/block-left.png');
loadSprite(block-edge-topleft ,'./Assets/block-tl.png');
loadSprite(block-edge-topright ,'./Assets/block-tr.png');
loadSprite(block-edge-bottonright ,'./Assets/block-rd.png');
loadSprite(block-edge-bottonleft ,'./Assets/block-ld.png');
loadSprite(golden-chest ,'./Assets/chest.png');
loadSprite(slicer-top ,'./Assets/door.png');
loadSprite(slicer-side ,'./Assets/door1.png');
loadSprite(enemy-flower ,'./Assets/enemybomb.png');
loadSprite(enemy ,'./Assets/enemyfacedown.png');
loadSprite(explode ,'./Assets/explode.png');
loadSprite(floor ,'./Assets/floor.png');
loadSprite(hole ,'./Assets/hole.png');
loadSprite(ladder ,'./Assets/ladder.png');
loadSprite(leaf ,'./Assets/leaf.png');
loadSprite(lights ,'./Assets/lights.png');
loadSprite(sword ,'./Assets/sword.png');


scene("game",() => {

    const map = [
        'a         ',
        'a         ',
        'a         ',
        'a         ',
        'a         ',
        'a         ',
        'a         ',
        'a         ',
        'a         ',
        'aaaaaaaaaa',
    ]

    const levelCfg = {
        width:48,
        height:48,
        'a':[sprite('block-left'),solid()]
    }

    addLevel(map, levelCfg)


});

start("game")