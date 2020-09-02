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

function openNav() {
  document.getElementById("mySidepanel").style.width = "250px";
}

function closeNav() {
  document.getElementById("mySidepanel").style.width = "0";
  document.getElementById("myP").style.visibility="visible";
  document.getElementById("myP1").style.visibility="visible";
}
  
  function closeNavonly() {
document.getElementById("mySidepanel").style.width = "0";
  
}
  
    function hide() {
  document.getElementById("mySidepanel").style.width = "0";
  document.getElementById("myP").style.visibility="hidden";
  document.getElementById("myP1").style.visibility="hidden";
}
function myFunction() {
  alert("All Copyright Reserved To AlCaesar 2020");
}


function openNav2() {
  document.getElementById("Nilesatpanel").style.width = "250px";
}

function closeNav2() {
  document.getElementById("Nilesatpanel").style.width = "0";
  document.getElementById("myP").style.visibility="visible";
  document.getElementById("myP1").style.visibility="visible";
}
  
  function closeNavonly2() {
document.getElementById("Nilesatpanel").style.width = "0";
  
}
  
    function hide2() {
  document.getElementById("Nilesatpanel").style.width = "0";
  document.getElementById("myP").style.visibility="hidden";
  document.getElementById("myP1").style.visibility="hidden";
}

