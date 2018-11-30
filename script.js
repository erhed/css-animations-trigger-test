const divName = 'divtoshow'; 
const divName2 = 'divtoshow2';
const divName3 = 'divtoshow3';

const obj = document.getElementById(divName);
const obj2 = document.getElementById(divName2);
const obj3 = document.getElementById(divName3);

const testBoxDiv1 = document.getElementById('testBox1');
const testBoxDiv2 = document.getElementById('testBox2');
const testBoxDiv3 = document.getElementById('testBox3');

let myTimeout1, myTimeout2, myTimeout3;

testBoxDiv1.onmouseover = function() {
  if (myTimeout1) { 
    clearTimeout(myTimeout1); 
  }
  testBoxDiv1.classList.add("testBoxHover1");
  obj.style.backgroundColor = "var(--blue1)";
  obj2.style.backgroundColor = "var(--blue2)";
  obj3.style.backgroundColor = "var(--blue3)";
  obj.classList.add("bong-animation");
  obj2.classList.add("bong-animation");
  obj3.classList.add("bong-animation");
  myTimeout1 = setTimeout(() => {
    testBoxDiv1.classList.remove("testBoxHover1");
    obj.classList.remove("bong-animation");
    obj2.classList.remove("bong-animation");
    obj3.classList.remove("bong-animation");
  }, 600);
}

testBoxDiv2.onmouseover = function() {
  if (myTimeout2) { 
    clearTimeout(myTimeout2); 
  }
  testBoxDiv2.classList.add("testBoxHover2");
  obj.style.backgroundColor = "var(--yellow1)";
  obj2.style.backgroundColor = "var(--yellow2)";
  obj3.style.backgroundColor = "var(--yellow3)";
  obj.classList.add("bong-animation");
  obj2.classList.add("bong-animation");
  obj3.classList.add("bong-animation");
  myTimeout2 = setTimeout(() => {
    testBoxDiv2.classList.remove("testBoxHover2");
    obj.classList.remove("bong-animation");
    obj2.classList.remove("bong-animation");
    obj3.classList.remove("bong-animation");
  }, 600);
}

testBoxDiv3.onmouseover = function() {
  if (myTimeout3) { 
    clearTimeout(myTimeout3); 
  }
  testBoxDiv3.classList.add("testBoxHover3");
  obj.style.backgroundColor = "var(--red1)";
  obj2.style.backgroundColor = "var(--red2)";
  obj3.style.backgroundColor = "var(--red3)";
  obj.classList.add("bong-animation");
  obj2.classList.add("bong-animation");
  obj3.classList.add("bong-animation");
  myTimeout3 = setTimeout(() => {
    testBoxDiv3.classList.remove("testBoxHover3");
    obj.classList.remove("bong-animation");
    obj2.classList.remove("bong-animation");
    obj3.classList.remove("bong-animation");
  }, 600);
}

function mouseX(evt) { if (!evt) evt = window.event; if (evt.pageX) return evt.pageX; else if (evt.clientX) return evt.clientX + (document.documentElement.scrollLeft ? document.documentElement.scrollLeft : document.body.scrollLeft); else return 0; }
function mouseY(evt) { if (!evt) evt = window.event; if (evt.pageY) return evt.pageY; else if (evt.clientY) return evt.clientY + (document.documentElement.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop); else return 0; }

function follow(evt) {
  obj.style.left = (parseInt(mouseX(evt)) - 20) + 'px';
  obj.style.top = (parseInt(mouseY(evt)) - 20) + 'px';
  obj2.style.left = (parseInt(mouseX(evt)) - 40) + 'px';
  obj2.style.top = (parseInt(mouseY(evt)) - 40) + 'px';
  obj3.style.left = (parseInt(mouseX(evt)) - 60) + 'px';
  obj3.style.top = (parseInt(mouseY(evt)) - 60) + 'px';
}

document.onmousemove = follow;