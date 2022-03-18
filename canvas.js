

var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");

window.onload = function () {
    var imageObj = new Image();
  
    imageObj.onload = function () {
      ctx.drawImage(imageObj, 0,100,600,300);
    };
    imageObj.crossOrigin='Anonymouse';
    // imageObj.src = 'images/img0.png';
    imageObj.src = 'https://dummyimage.com/600x400/000/fff'
  };
  
function myfunctionForHeader() {
    ctx.beginPath();
    ctx.lineWidth = "4";
    ctx.strokeStyle = "grey";
    ctx.font = "30px Arial";
    ctx.rect(0,0,600,100);
    ctx.fillText(document.getElementById("header").value, 250,50,100,100);
    // ctx.fillText("header",250,50,100,100)
    ctx.stroke();
    }
function myFunctionForFooter() {
    ctx.beginPath();
    ctx.lineWidth = "0";
    ctx.strokeStyle = "grey";
    ctx.font = "30px Arial";
    ctx.rect(0,400,600,100);
    ctx.fillText(document.getElementById("footer").value, 250,450,600, 300);
    // ctx.fillText("footer",250,470,600, 300)
    ctx.stroke();
        }
function  myFunction(){
    this.myFunctionForFooter();
    this.myfunctionForHeader();
}
function downloadImage() {
        // get canvas data  
        // var canvas = document.getElementById("myCanvas");
        // var anchor = document.createElement("a");
        // anchor.href = canvas.toDataURL("image/jpg");
        // anchor.download = "IMAGE.PNG";
        // anchor.click();

        var c = document.getElementById("myCanvas");
        image = c
          .toDataURL("image/png")
          .replace("image/png", "image/octet-stream");
        var link = document.createElement("a");
        link.download = "Devsinc-Canvas.png";
        link.href = image;
        link.click();
}