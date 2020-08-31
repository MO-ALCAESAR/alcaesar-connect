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

var popunder=new Array()
popunder[0]="http://www.target.com"

//Specify the width and height of new popunder window (in pixels).
var width = '700'; 
var height = '450';

//these are obvious variables. set "yes" or "no".
var p = 'scrollbars=yes, resizable=yes, toolbar=yes,' + 'menubar=yes, status=yes, location=yes, left=85, top=20, height=' + height + ',width=' + width;

// Load new PopUnder only once per browser session? (0=no, 1=yes)
// Putting 0 will cause the Popunder to load every time page is loaded
// Specifying 1 will cause it to load only once per session
var one_time=0

// That's it! Don't edit the code below unless you're really good. :-P //

function get_cookie(Name) {
  var search = Name + "="
  var returnvalue = "";
  if (document.cookie.length > 0) {
    offset = document.cookie.indexOf(search)
    if (offset != -1) { // if the cookie exists
      offset += search.length
      //set the index of beginning value
      end = document.cookie.indexOf(";", offset);

    if (end == -1) // set the index of the end of cookie value
         end = document.cookie.length;
         returnvalue = unescape(document.cookie.substring(offset, end))
      }
   }
  return returnvalue;
}

function loadornot(){
if (get_cookie('popunder')==''){
load_pop_power()
document.cookie="popunder=yes"
}
}

function load_pop_power(){
win2 = window.open(popunder[Math.floor(Math.random()*(popunder.length))], "bw", p)
win2.blur()
window.focus()
}

if (one_time==0)
load_pop_power()
else
loadornot()
