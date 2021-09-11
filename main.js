img="";

function preload()
{
    img = loadimg('car.jpg');
}

function setup
{
    canvas=createCanvas(350,360);
    canvas.center();
}

function draw
{
    fill("#800000");
    storke("#FFFF00");
    rect(46,56,230,320);
    text('car' 45,56,340,430);
    objectdectected.object(gotResluts);
}

function gotResluts()
{
     if (error,result)
     {
         console.log(error);
     }
}

