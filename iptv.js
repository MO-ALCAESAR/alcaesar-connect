    $(document).keydown(function(e) {
            return 123 != e.keyCode && !e.ctrlKey && !e.shiftKey && void 0
        }), $(document).on("contextmenu", function(e) {
            e.preventDefault()
        }),
        function e() {
            try {
                ! function e(t) {
                    1 === ("" + t / t).length && t % 20 != 0 || function() {}.constructor("debugger")(), e(++t)
                }(0)
            } catch (t) {
                setTimeout(e, 1e3)
            }
        }();
  
  var isNS = (navigator.appName == "Netscape") ? 1 : 0;

if(navigator.appName == "Netscape") document.captureEvents(Event.MOUSEDOWN||Event.MOUSEUP);

function mischandler(){
return false;
}

function mousehandler(e){
var myevent = (isNS) ? e : event;
var eventbutton = (isNS) ? myevent.which : myevent.button;
if((eventbutton==2)||(eventbutton==3)) return false;
}
document.oncontextmenu = mischandler;
document.onmousedown = mousehandler;
document.onmouseup = mousehandler;

  var timeleft = 10;
  var downloadTimer = setInterval(function(){
  if(timeleft <= 0){
    clearInterval(downloadTimer);
  }
  document.getElementById("progressBar").value = 10 - timeleft;
  timeleft -= 1;
}, 400);

    function pageRedirect() {
        window.location.replace("https://exe.io/st?api=2fec556b6050d5b85345c33c2e0fb3cd8ff0d578&url=http://www.omarabdelfattah.rf.gd/korafree/index.php");
    }      
