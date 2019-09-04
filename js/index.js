//防止屏幕移动
$(document).bind("touchmove",function(e){
    e.preventDefault();
});
var winWidth;
if (window.innerWidth)
winWidth = window.innerWidth;
else if ((document.body) && (document.body.clientWidth))
winWidth = document.body.clientWidth;

var winHeight;
if (window.innerHeight)
winHeight = window.innerHeight;
else if ((document.body) && (document.body.clientHeight))
winHeight = document.body.clientHeight;

$(function(){
    function init(){
        app = new PIXI.Application(winHeight, winWidth, {
            backgroundColor: '0xffffff'
        });
        app.stage.displayList = new PIXI.DisplayList();
        $(".main").append(app.view);
    }
    
    init();
    
})
