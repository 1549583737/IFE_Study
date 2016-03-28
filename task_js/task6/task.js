function id(name){
  return document.getElementById(name);
}

function addEvent(elm,type,handler){
  if(!elm) return false;
  if(elm.addEventListener){
    elm.addEventListener(type,handler,false);
    return true;
  }else if(elm.attachEvent){
    elm.attachEvent('on'+type,function(){handler.apply(elm)});
    return true;
  }
  return false;
}


function addElm(parElm,elmTxt,leftOrRight){
  if(!parElm) return false;
  var dir = leftOrRight.toUpperCase();
  var tarElm = document.createElement('span');
  var firElm = parElm.firstElementChild;
  tarElm.innerHTML = elmTxt;
  if(dir == 'RIGHT'){
    parElm.appendChild(tarElm);
  }else if(dir == 'LEFT'){
    parElm.insertBefore(tarElm,firElm);
  }else{
    alert('参数有误');
  }
}


function removeElm(parElm,leftOrRight){
  if(!parElm) return false;
  var dir = leftOrRight.toUpperCase();
  var firElm = parElm.firstChild;
  var nodeElms = parElm.childNodes;
  var lstElm = nodeElms[nodeElms.length-1];
  
  if(dir == 'RIGHT'){
    parElm.removeChild(firElm);
  }else if(dir == 'LEFT'){
    parElm.removeChild(lstElm);
  }else{
    alert('参数有误');
  }
}

var lfInBtn = id('leftIn');
var rgInBtn = id('rightIn');
var lfOutBtn = id('leftOut');
var rgOutBtn = id('rightOut');
var parNode = id('wrap');
var txt = id('txt').value;


function init(){
addEvent(lfInBtn,'click',addElm(parNode,txt,'left'));
addEvent(rgInBtn,'click',addElm(parNode,txt,'right'));
addEvent(lfOutBtn,'click',removeElm(parNode,'left'));
addEvent(lfOutBtn,'click',removeElm(parNode,'right'));
}

init();








