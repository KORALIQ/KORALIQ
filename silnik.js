import kaboom from "https://unpkg.com/kaboom/dist/kaboom.mjs";

// initialize kaboom context
kaboom();

loadSprite("obrazek","obrazek.png")
loadSound("muzyczka","Super Mario Bros. medley.mp3")

// add a piece of text at position (120, 80)
add([
    text("hello"),
    pos(120, 80),
]);

add([
    sprite("obrazek"),
    pos(0,0)
])

loadSprite("gwiazda","gwiazda1.png")

add([
    sprite("gwiazda"),
    pos(3000,30)
])

const gwiazda = add([
    sprite("gwiazda"),
    pos(100,10),
    rotate(0),
    // origin()



])

//
//gwiazda.rotate += 1

onClick(() => {
    gwiazda.moveTo(mousePos(0,0))
})

onTouchStart((x,y)=>{
    play("muzyczka", {"volume": 0.1})
})

onUpdate(()=>{

    if( gwiazda.pos.x < 300) gwiazda.pos.x += 1

    onKeyPress("space",()=>(
        play("muzyczka", {"volume": 0.1})
    ))
    //gwiazda.moveTo(gwiazda.pos.x+1,gwiazda.pos.y, gwiazda.angle =+ 20)

 
    //gwiazda.angle =+ 1

   // if(gwiazda.pos.x > 300) //gwiazda.angle=+ 1) 
    
    
   // gwiazda.pos.x =300

    gwiazda.angle += 1

    

    //if(gwiazda.pos.x > 300) gwiazda.rotate(0)

   
        //gwiazda.angle += 10
    

    //debug.log(renifer.pos.x)
    
})
