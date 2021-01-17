var canvas=new fabric.Canvas("my_canvas");
playerx=10;
playery=10;
blockwidth=30;
blockheight=30;
var playerobject = "";
var blockobject = "";
function playerupdate() {
fabric.Image.fromURL("player.png",function(Img){
    playerobject=Img;
    playerobject.scaleToWidth(150);
    playerobject.scaleToHeight(140);
    playerobject.set({
        top:playery,left:playerx
    });
    canvas.add(playerobject);
})
}
{
    function new_image(get_Image) {
        fabric.Image.fromURL(get_Image,function(Img){
            blockobject=Img;
            blockobject.scaleToWidth(blockwidth);
            blockobject.scaleToHeight(blockheight);
            blockobject.set({
              top:playery,left:playerx  
            });
            canvas.add(blockobject);
        }); 
    } 
}
window.addEventListener("keydown",my_keydown);
function my_keydown(e) {
    keypressed=e.keyCode;
    console.log(keypressed);
    if (e.shiftKey==true && keypressed == "80"){
        console.log("p and shift are pressed together");
        blockwidth=blockwidth + 10;
        blockheight=blockheight + 10;
        document.getElementById("current_width").innerHTML = blockwidth;
        document.getElementById("current_height").innerHTML = blockheight;

    } 
    if (e.shiftKey==true && keypressed == "77"){
        console.log("m and shift are pressed together");
        blockwidth=blockwidth - 10;
        blockheight=blockheight - 10;
        document.getElementById("current_width").innerHTML = blockwidth;
        document.getElementById("current_height").innerHTML = blockheight;
        
    }
    if (keypressed=="38"){
        up();
        console.log("up arrow was pressed");
    }
    if (keypressed=="40"){
        down();
        console.log("down arrow was pressed");
    }

    if (keypressed=="37"){
        left();
        console.log("left arrow was pressed");
    }

    if (keypressed=="39"){
        right();
        console.log("right arrow was pressed");
    }

    if (keypressed=="65"){
        new_image("captian_america_left_hand.png")
        console.log("a was pressed");
    }

    if (keypressed=="66"){
        new_image("hulk_face.png.png")
        console.log("b was pressed");
    }

    if (keypressed=="67"){
        new_image("hulk_left_hand.png")
        console.log("c was pressed");
    }

    if (keypressed=="68"){
        new_image("hulk_legs.png")
        console.log("d was pressed");
    }

    if (keypressed=="69"){
        new_image("hulk_right_hand.png")
        console.log("e was pressed");
    }
 
    if (keypressed=="70"){
        new_image("hulkd_body.png")
        console.log("f was pressed");
    }

    if (keypressed=="71"){
        new_image("ironman_body.png")
        console.log("g was pressed");
    }
 
    if (keypressed=="72"){
        new_image("ironman_face.png")
        console.log("h was pressed");
    }
}
