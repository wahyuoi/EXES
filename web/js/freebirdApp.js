/*! Copyright (c) 2011 Piotr Rochala (http://rocha.la)
 * Dual licensed under the MIT (http://www.opensource.org/licenses/mit-license.php)
 * and GPL (http://www.opensource.org/licenses/gpl-license.php) licenses.
 *
 * Version: 1.3.2
 *
 */
(function(a){jQuery.fn.extend({slimScroll:function(b){var c={width:"auto",height:"250px",size:"7px",color:"#000",position:"right",distance:"1px",start:"top",opacity:0.4,alwaysVisible:false,disableFadeOut:false,railVisible:false,railColor:"#333",railOpacity:0.2,railDraggable:true,railClass:"slimScrollRail",barClass:"slimScrollBar",wrapperClass:"slimScrollDiv",allowPageScroll:false,wheelStep:20,touchScrollStep:200,borderRadius:"7px",railBorderRadius:"7px"};
var d=a.extend(c,b);
this.each(function(){var z,s,l,q,C,v,p,k,m="<div></div>",w=30,r=false;
var D=a(this);
if(D.parent().hasClass(d.wrapperClass)){var i=D.scrollTop();
x=D.parent().find("."+d.barClass);
e=D.parent().find("."+d.railClass);
E();
if(a.isPlainObject(b)){if("height" in b&&b.height=="auto"){D.parent().css("height","auto");
D.css("height","auto");
var o=D.parent().parent().height();
D.parent().css("height",o);
D.css("height",o)
}if("scrollTo" in b){i=parseInt(d.scrollTo)
}else{if("scrollBy" in b){i+=parseInt(d.scrollBy)
}else{if("destroy" in b){x.remove();
e.remove();
D.unwrap();
return
}}}y(i,false,true)
}return
}d.height=(b.height=="auto")?D.parent().height():b.height;
var j=a(m).addClass(d.wrapperClass).css({position:"relative",overflow:"hidden",width:d.width,height:d.height});
D.css({overflow:"hidden",width:d.width,height:d.height});
var e=a(m).addClass(d.railClass).css({width:d.size,height:"100%",position:"absolute",top:0,display:(d.alwaysVisible&&d.railVisible)?"block":"none","border-radius":d.railBorderRadius,background:d.railColor,opacity:d.railOpacity,zIndex:90});
var x=a(m).addClass(d.barClass).css({background:d.color,width:d.size,position:"absolute",top:0,opacity:d.opacity,display:d.alwaysVisible?"block":"none","border-radius":d.borderRadius,BorderRadius:d.borderRadius,MozBorderRadius:d.borderRadius,WebkitBorderRadius:d.borderRadius,zIndex:99});
var f=(d.position=="right")?{right:d.distance}:{left:d.distance};
e.css(f);
x.css(f);
D.wrap(j);
D.parent().append(x);
D.parent().append(e);
if(d.railDraggable){x.bind("mousedown",function(F){var G=a(document);
l=true;
t=parseFloat(x.css("top"));
pageY=F.pageY;
G.bind("mousemove.slimscroll",function(H){currTop=t+H.pageY-pageY;
x.css("top",currTop);
y(0,x.position().top,false)
});
G.bind("mouseup.slimscroll",function(H){l=false;
n();
G.unbind(".slimscroll")
});
return false
}).bind("selectstart.slimscroll",function(F){F.stopPropagation();
F.preventDefault();
return false
})
}e.hover(function(){h()
},function(){n()
});
x.hover(function(){s=true
},function(){s=false
});
D.hover(function(){z=true;
h();
n()
},function(){z=false;
n()
});
D.bind("touchstart",function(G,F){if(G.originalEvent.touches.length){C=G.originalEvent.touches[0].pageY
}});
D.bind("touchmove",function(G){if(!r){G.originalEvent.preventDefault()
}if(G.originalEvent.touches.length){var F=(C-G.originalEvent.touches[0].pageY)/d.touchScrollStep;
y(F,true);
C=G.originalEvent.touches[0].pageY
}});
E();
if(d.start==="bottom"){x.css({top:D.outerHeight()-x.outerHeight()});
y(0,true)
}else{if(d.start!=="top"){y(a(d.start).position().top,null,true);
if(!d.alwaysVisible){x.hide()
}}}A();
function B(G){if(!z){return
}var G=G||window.event;
var H=0;
if(G.wheelDelta){H=-G.wheelDelta/120
}if(G.detail){H=G.detail/3
}var F=G.target||G.srcTarget||G.srcElement;
if(a(F).closest("."+d.wrapperClass).is(D.parent())){y(H,true)
}if(G.preventDefault&&!r){G.preventDefault()
}if(!r){G.returnValue=false
}}function y(K,H,F){r=false;
var J=K;
var I=D.outerHeight()-x.outerHeight();
if(H){J=parseInt(x.css("top"))+K*parseInt(d.wheelStep)/100*x.outerHeight();
J=Math.min(Math.max(J,0),I);
J=(K>0)?Math.ceil(J):Math.floor(J);
x.css({top:J+"px"})
}p=parseInt(x.css("top"))/(D.outerHeight()-x.outerHeight());
J=p*(D[0].scrollHeight-D.outerHeight());
if(F){J=K;
var G=J/D[0].scrollHeight*D.outerHeight();
G=Math.min(Math.max(G,0),I);
x.css({top:G+"px"})
}D.scrollTop(J);
D.trigger("slimscrolling",~~J);
h();
n()
}function A(){if(window.addEventListener){this.addEventListener("DOMMouseScroll",B,false);
this.addEventListener("mousewheel",B,false)
}else{document.attachEvent("onmousewheel",B)
}}function E(){v=Math.max((D.outerHeight()/D[0].scrollHeight)*D.outerHeight(),w);
x.css({height:v+"px"});
var F=v==D.outerHeight()?"none":"block";
x.css({display:F})
}function h(){E();
clearTimeout(q);
if(p==~~p){r=d.allowPageScroll;
if(k!=p){var F=(~~p==0)?"top":"bottom";
D.trigger("slimscroll",F)
}}else{r=false
}k=p;
if(v>=D.outerHeight()){r=true;
return
}x.stop(true,true).fadeIn("fast");
if(d.railVisible){e.stop(true,true).fadeIn("fast")
}}function n(){if(!d.alwaysVisible){q=setTimeout(function(){if(!(d.disableFadeOut&&z)&&!s&&!l){x.fadeOut("slow");
e.fadeOut("slow")
}},1000)
}}});
return this
}});
jQuery.fn.extend({slimscroll:jQuery.fn.slimScroll})
})(jQuery);
JSManager.setLoaded(201,"vendors/slimscroll.js");
if(!document.createElement("canvas").getContext){(function(){var af=Math;
var o=af.round;
var n=af.sin;
var D=af.cos;
var K=af.abs;
var Q=af.sqrt;
var d=10;
var f=d/2;
var C=+navigator.userAgent.match(/MSIE ([\d.]+)?/)[1];
function B(){return this.context_||(this.context_=new G(this))
}var w=Array.prototype.slice;
function h(j,m,p){var i=w.call(arguments,2);
return function(){return j.apply(m,i.concat(w.call(arguments)))
}
}function aj(i){return String(i).replace(/&/g,"&amp;").replace(/"/g,"&quot;")
}function ad(m,j,i){if(!m.namespaces[j]){m.namespaces.add(j,i,"#default#VML")
}}function U(j){ad(j,"g_vml_","urn:schemas-microsoft-com:vml");
ad(j,"g_o_","urn:schemas-microsoft-com:office:office");
if(!j.styleSheets.ex_canvas_){var i=j.createStyleSheet();
i.owningElement.id="ex_canvas_";
i.cssText="canvas{display:inline-block;overflow:hidden;text-align:left;width:300px;height:150px}"
}}U(document);
var e={init:function(i){var j=i||document;
j.createElement("canvas");
j.attachEvent("onreadystatechange",h(this.init_,this,j))
},init_:function(p){var m=p.getElementsByTagName("canvas");
for(var j=0;
j<m.length;
j++){this.initElement(m[j])
}},initElement:function(j){if(!j.getContext){j.getContext=B;
U(j.ownerDocument);
j.innerHTML="";
j.attachEvent("onpropertychange",A);
j.attachEvent("onresize",ab);
var i=j.attributes;
if(i.width&&i.width.specified){j.style.width=i.width.nodeValue+"px"
}else{j.width=j.clientWidth
}if(i.height&&i.height.specified){j.style.height=i.height.nodeValue+"px"
}else{j.height=j.clientHeight
}}return j
}};
function A(j){var i=j.srcElement;
switch(j.propertyName){case"width":i.getContext().clearRect();
i.style.width=i.attributes.width.nodeValue+"px";
i.firstChild.style.width=i.clientWidth+"px";
break;
case"height":i.getContext().clearRect();
i.style.height=i.attributes.height.nodeValue+"px";
i.firstChild.style.height=i.clientHeight+"px";
break
}}function ab(j){var i=j.srcElement;
if(i.firstChild){i.firstChild.style.width=i.clientWidth+"px";
i.firstChild.style.height=i.clientHeight+"px"
}}e.init();
var l=[];
for(var ai=0;
ai<16;
ai++){for(var ah=0;
ah<16;
ah++){l[ai*16+ah]=ai.toString(16)+ah.toString(16)
}}function E(){return[[1,0,0],[0,1,0],[0,0,1]]
}function M(p,m){var j=E();
for(var i=0;
i<3;
i++){for(var al=0;
al<3;
al++){var Z=0;
for(var ak=0;
ak<3;
ak++){Z+=p[i][ak]*m[ak][al]
}j[i][al]=Z
}}return j
}function y(j,i){i.fillStyle=j.fillStyle;
i.lineCap=j.lineCap;
i.lineJoin=j.lineJoin;
i.lineWidth=j.lineWidth;
i.miterLimit=j.miterLimit;
i.shadowBlur=j.shadowBlur;
i.shadowColor=j.shadowColor;
i.shadowOffsetX=j.shadowOffsetX;
i.shadowOffsetY=j.shadowOffsetY;
i.strokeStyle=j.strokeStyle;
i.globalAlpha=j.globalAlpha;
i.font=j.font;
i.textAlign=j.textAlign;
i.textBaseline=j.textBaseline;
i.arcScaleX_=j.arcScaleX_;
i.arcScaleY_=j.arcScaleY_;
i.lineScale_=j.lineScale_
}var b={aliceblue:"#F0F8FF",antiquewhite:"#FAEBD7",aquamarine:"#7FFFD4",azure:"#F0FFFF",beige:"#F5F5DC",bisque:"#FFE4C4",black:"#000000",blanchedalmond:"#FFEBCD",blueviolet:"#8A2BE2",brown:"#A52A2A",burlywood:"#DEB887",cadetblue:"#5F9EA0",chartreuse:"#7FFF00",chocolate:"#D2691E",coral:"#FF7F50",cornflowerblue:"#6495ED",cornsilk:"#FFF8DC",crimson:"#DC143C",cyan:"#00FFFF",darkblue:"#00008B",darkcyan:"#008B8B",darkgoldenrod:"#B8860B",darkgray:"#A9A9A9",darkgreen:"#006400",darkgrey:"#A9A9A9",darkkhaki:"#BDB76B",darkmagenta:"#8B008B",darkolivegreen:"#556B2F",darkorange:"#FF8C00",darkorchid:"#9932CC",darkred:"#8B0000",darksalmon:"#E9967A",darkseagreen:"#8FBC8F",darkslateblue:"#483D8B",darkslategray:"#2F4F4F",darkslategrey:"#2F4F4F",darkturquoise:"#00CED1",darkviolet:"#9400D3",deeppink:"#FF1493",deepskyblue:"#00BFFF",dimgray:"#696969",dimgrey:"#696969",dodgerblue:"#1E90FF",firebrick:"#B22222",floralwhite:"#FFFAF0",forestgreen:"#228B22",gainsboro:"#DCDCDC",ghostwhite:"#F8F8FF",gold:"#FFD700",goldenrod:"#DAA520",grey:"#808080",greenyellow:"#ADFF2F",honeydew:"#F0FFF0",hotpink:"#FF69B4",indianred:"#CD5C5C",indigo:"#4B0082",ivory:"#FFFFF0",khaki:"#F0E68C",lavender:"#E6E6FA",lavenderblush:"#FFF0F5",lawngreen:"#7CFC00",lemonchiffon:"#FFFACD",lightblue:"#ADD8E6",lightcoral:"#F08080",lightcyan:"#E0FFFF",lightgoldenrodyellow:"#FAFAD2",lightgreen:"#90EE90",lightgrey:"#D3D3D3",lightpink:"#FFB6C1",lightsalmon:"#FFA07A",lightseagreen:"#20B2AA",lightskyblue:"#87CEFA",lightslategray:"#778899",lightslategrey:"#778899",lightsteelblue:"#B0C4DE",lightyellow:"#FFFFE0",limegreen:"#32CD32",linen:"#FAF0E6",magenta:"#FF00FF",mediumaquamarine:"#66CDAA",mediumblue:"#0000CD",mediumorchid:"#BA55D3",mediumpurple:"#9370DB",mediumseagreen:"#3CB371",mediumslateblue:"#7B68EE",mediumspringgreen:"#00FA9A",mediumturquoise:"#48D1CC",mediumvioletred:"#C71585",midnightblue:"#191970",mintcream:"#F5FFFA",mistyrose:"#FFE4E1",moccasin:"#FFE4B5",navajowhite:"#FFDEAD",oldlace:"#FDF5E6",olivedrab:"#6B8E23",orange:"#FFA500",orangered:"#FF4500",orchid:"#DA70D6",palegoldenrod:"#EEE8AA",palegreen:"#98FB98",paleturquoise:"#AFEEEE",palevioletred:"#DB7093",papayawhip:"#FFEFD5",peachpuff:"#FFDAB9",peru:"#CD853F",pink:"#FFC0CB",plum:"#DDA0DD",powderblue:"#B0E0E6",rosybrown:"#BC8F8F",royalblue:"#4169E1",saddlebrown:"#8B4513",salmon:"#FA8072",sandybrown:"#F4A460",seagreen:"#2E8B57",seashell:"#FFF5EE",sienna:"#A0522D",skyblue:"#87CEEB",slateblue:"#6A5ACD",slategray:"#708090",slategrey:"#708090",snow:"#FFFAFA",springgreen:"#00FF7F",steelblue:"#4682B4",tan:"#D2B48C",thistle:"#D8BFD8",tomato:"#FF6347",turquoise:"#40E0D0",violet:"#EE82EE",wheat:"#F5DEB3",whitesmoke:"#F5F5F5",yellowgreen:"#9ACD32"};
function P(j){var p=j.indexOf("(",3);
var i=j.indexOf(")",p+1);
var m=j.substring(p+1,i).split(",");
if(m.length!=4||j.charAt(3)!="a"){m[3]=1
}return m
}function c(i){return parseFloat(i)/100
}function s(j,m,i){return Math.min(i,Math.max(m,j))
}function L(ak){var i,am,an,al,ao,Z;
al=parseFloat(ak[0])/360%360;
if(al<0){al++
}ao=s(c(ak[1]),0,1);
Z=s(c(ak[2]),0,1);
if(ao==0){i=am=an=Z
}else{var j=Z<0.5?Z*(1+ao):Z+ao-Z*ao;
var m=2*Z-j;
i=a(m,j,al+1/3);
am=a(m,j,al);
an=a(m,j,al-1/3)
}return"#"+l[Math.floor(i*255)]+l[Math.floor(am*255)]+l[Math.floor(an*255)]
}function a(j,i,m){if(m<0){m++
}if(m>1){m--
}if(6*m<1){return j+(i-j)*6*m
}else{if(2*m<1){return i
}else{if(3*m<2){return j+(i-j)*(2/3-m)*6
}else{return j
}}}}var F={};
function I(j){if(j in F){return F[j]
}var ak,Z=1;
j=String(j);
if(j.charAt(0)=="#"){ak=j
}else{if(/^rgb/.test(j)){var p=P(j);
var ak="#",al;
for(var m=0;
m<3;
m++){if(p[m].indexOf("%")!=-1){al=Math.floor(c(p[m])*255)
}else{al=+p[m]
}ak+=l[s(al,0,255)]
}Z=+p[3]
}else{if(/^hsl/.test(j)){var p=P(j);
ak=L(p);
Z=p[3]
}else{ak=b[j]||j
}}}return F[j]={color:ak,alpha:Z}
}var q={style:"normal",variant:"normal",weight:"normal",size:10,family:"sans-serif"};
var O={};
function H(i){if(O[i]){return O[i]
}var p=document.createElement("div");
var m=p.style;
try{m.font=i
}catch(j){}return O[i]={style:m.fontStyle||q.style,variant:m.fontVariant||q.variant,weight:m.fontWeight||q.weight,size:m.fontSize||q.size,family:m.fontFamily||q.family}
}function x(m,j){var i={};
for(var al in m){i[al]=m[al]
}var ak=parseFloat(j.currentStyle.fontSize),Z=parseFloat(m.size);
if(typeof m.size=="number"){i.size=m.size
}else{if(m.size.indexOf("px")!=-1){i.size=Z
}else{if(m.size.indexOf("em")!=-1){i.size=ak*Z
}else{if(m.size.indexOf("%")!=-1){i.size=(ak/100)*Z
}else{if(m.size.indexOf("pt")!=-1){i.size=Z/0.75
}else{i.size=ak
}}}}}i.size*=0.981;
return i
}function ag(i){return i.style+" "+i.variant+" "+i.weight+" "+i.size+"px "+i.family
}var v={butt:"flat",round:"round"};
function V(i){return v[i]||"square"
}function G(i){this.m_=E();
this.mStack_=[];
this.aStack_=[];
this.currentPath_=[];
this.strokeStyle="#000";
this.fillStyle="#000";
this.lineWidth=1;
this.lineJoin="miter";
this.lineCap="butt";
this.miterLimit=d*1;
this.globalAlpha=1;
this.font="10px sans-serif";
this.textAlign="left";
this.textBaseline="alphabetic";
this.canvas=i;
var m="width:"+i.clientWidth+"px;height:"+i.clientHeight+"px;overflow:hidden;position:absolute";
var j=i.ownerDocument.createElement("div");
j.style.cssText=m;
i.appendChild(j);
var p=j.cloneNode(false);
p.style.backgroundColor="red";
p.style.filter="alpha(opacity=0)";
i.appendChild(p);
this.element_=j;
this.arcScaleX_=1;
this.arcScaleY_=1;
this.lineScale_=1
}var r=G.prototype;
r.clearRect=function(){if(this.textMeasureEl_){this.textMeasureEl_.removeNode(true);
this.textMeasureEl_=null
}this.element_.innerHTML=""
};
r.beginPath=function(){this.currentPath_=[]
};
r.moveTo=function(j,i){var m=aa(this,j,i);
this.currentPath_.push({type:"moveTo",x:m.x,y:m.y});
this.currentX_=m.x;
this.currentY_=m.y
};
r.lineTo=function(j,i){var m=aa(this,j,i);
this.currentPath_.push({type:"lineTo",x:m.x,y:m.y});
this.currentX_=m.x;
this.currentY_=m.y
};
r.bezierCurveTo=function(m,j,ao,an,am,ak){var i=aa(this,am,ak);
var al=aa(this,m,j);
var Z=aa(this,ao,an);
N(this,al,Z,i)
};
function N(i,Z,m,j){i.currentPath_.push({type:"bezierCurveTo",cp1x:Z.x,cp1y:Z.y,cp2x:m.x,cp2y:m.y,x:j.x,y:j.y});
i.currentX_=j.x;
i.currentY_=j.y
}r.quadraticCurveTo=function(am,m,j,i){var al=aa(this,am,m);
var ak=aa(this,j,i);
var an={x:this.currentX_+2/3*(al.x-this.currentX_),y:this.currentY_+2/3*(al.y-this.currentY_)};
var Z={x:an.x+(ak.x-this.currentX_)/3,y:an.y+(ak.y-this.currentY_)/3};
N(this,an,Z,ak)
};
r.arc=function(ap,an,ao,ak,j,m){ao*=d;
var au=m?"at":"wa";
var aq=ap+D(ak)*ao-f;
var at=an+n(ak)*ao-f;
var i=ap+D(j)*ao-f;
var ar=an+n(j)*ao-f;
if(aq==i&&!m){aq+=0.125
}var Z=aa(this,ap,an);
var am=aa(this,aq,at);
var al=aa(this,i,ar);
this.currentPath_.push({type:au,x:Z.x,y:Z.y,radius:ao,xStart:am.x,yStart:am.y,xEnd:al.x,yEnd:al.y})
};
r.rect=function(m,j,i,p){this.moveTo(m,j);
this.lineTo(m+i,j);
this.lineTo(m+i,j+p);
this.lineTo(m,j+p);
this.closePath()
};
r.strokeRect=function(m,j,i,p){var Z=this.currentPath_;
this.beginPath();
this.moveTo(m,j);
this.lineTo(m+i,j);
this.lineTo(m+i,j+p);
this.lineTo(m,j+p);
this.closePath();
this.stroke();
this.currentPath_=Z
};
r.fillRect=function(m,j,i,p){var Z=this.currentPath_;
this.beginPath();
this.moveTo(m,j);
this.lineTo(m+i,j);
this.lineTo(m+i,j+p);
this.lineTo(m,j+p);
this.closePath();
this.fill();
this.currentPath_=Z
};
r.createLinearGradient=function(j,p,i,m){var Z=new Y("gradient");
Z.x0_=j;
Z.y0_=p;
Z.x1_=i;
Z.y1_=m;
return Z
};
r.createRadialGradient=function(p,ak,m,j,Z,i){var al=new Y("gradientradial");
al.x0_=p;
al.y0_=ak;
al.r0_=m;
al.x1_=j;
al.y1_=Z;
al.r1_=i;
return al
};
r.drawImage=function(av,m){var an,al,ap,aC,at,aq,ax,aE;
var ao=av.runtimeStyle.width;
var au=av.runtimeStyle.height;
av.runtimeStyle.width="auto";
av.runtimeStyle.height="auto";
var am=av.width;
var aA=av.height;
av.runtimeStyle.width=ao;
av.runtimeStyle.height=au;
if(arguments.length==3){an=arguments[1];
al=arguments[2];
at=aq=0;
ax=ap=am;
aE=aC=aA
}else{if(arguments.length==5){an=arguments[1];
al=arguments[2];
ap=arguments[3];
aC=arguments[4];
at=aq=0;
ax=am;
aE=aA
}else{if(arguments.length==9){at=arguments[1];
aq=arguments[2];
ax=arguments[3];
aE=arguments[4];
an=arguments[5];
al=arguments[6];
ap=arguments[7];
aC=arguments[8]
}else{throw Error("Invalid number of arguments")
}}}var aD=aa(this,an,al);
var p=ax/2;
var j=aE/2;
var aB=[];
var i=10;
var ak=10;
aB.push(" <g_vml_:group",' coordsize="',d*i,",",d*ak,'"',' coordorigin="0,0"',' style="width:',i,"px;height:",ak,"px;position:absolute;");
if(this.m_[0][0]!=1||this.m_[0][1]||this.m_[1][1]!=1||this.m_[1][0]){var Z=[];
Z.push("M11=",this.m_[0][0],",","M12=",this.m_[1][0],",","M21=",this.m_[0][1],",","M22=",this.m_[1][1],",","Dx=",o(aD.x/d),",","Dy=",o(aD.y/d),"");
var az=aD;
var ay=aa(this,an+ap,al);
var aw=aa(this,an,al+aC);
var ar=aa(this,an+ap,al+aC);
az.x=af.max(az.x,ay.x,aw.x,ar.x);
az.y=af.max(az.y,ay.y,aw.y,ar.y);
aB.push("padding:0 ",o(az.x/d),"px ",o(az.y/d),"px 0;filter:progid:DXImageTransform.Microsoft.Matrix(",Z.join(""),", sizingmethod='clip');")
}else{aB.push("top:",o(aD.y/d),"px;left:",o(aD.x/d),"px;")
}aB.push(' ">','<g_vml_:image src="',av.src,'"',' style="width:',d*ap,"px;"," height:",d*aC,'px"',' cropleft="',at/am,'"',' croptop="',aq/aA,'"',' cropright="',(am-at-ax)/am,'"',' cropbottom="',(aA-aq-aE)/aA,'"'," />","</g_vml_:group>");
this.element_.insertAdjacentHTML("BeforeEnd",aB.join(""))
};
r.stroke=function(at){var Z=10;
var au=10;
var ak=5000;
var am={x:null,y:null};
var ar={x:null,y:null};
for(var an=0;
an<this.currentPath_.length;
an+=ak){var aq=[];
var al=false;
aq.push("<g_vml_:shape",' filled="',!!at,'"',' style="position:absolute;width:',Z,"px;height:",au,'px;"',' coordorigin="0,0"',' coordsize="',d*Z,",",d*au,'"',' stroked="',!at,'"',' path="');
var av=false;
for(var ao=an;
ao<Math.min(an+ak,this.currentPath_.length);
ao++){if(ao%ak==0&&ao>0){aq.push(" m ",o(this.currentPath_[ao-1].x),",",o(this.currentPath_[ao-1].y))
}var m=this.currentPath_[ao];
var ap;
switch(m.type){case"moveTo":ap=m;
aq.push(" m ",o(m.x),",",o(m.y));
break;
case"lineTo":aq.push(" l ",o(m.x),",",o(m.y));
break;
case"close":aq.push(" x ");
m=null;
break;
case"bezierCurveTo":aq.push(" c ",o(m.cp1x),",",o(m.cp1y),",",o(m.cp2x),",",o(m.cp2y),",",o(m.x),",",o(m.y));
break;
case"at":case"wa":aq.push(" ",m.type," ",o(m.x-this.arcScaleX_*m.radius),",",o(m.y-this.arcScaleY_*m.radius)," ",o(m.x+this.arcScaleX_*m.radius),",",o(m.y+this.arcScaleY_*m.radius)," ",o(m.xStart),",",o(m.yStart)," ",o(m.xEnd),",",o(m.yEnd));
break
}if(m){if(am.x==null||m.x<am.x){am.x=m.x
}if(ar.x==null||m.x>ar.x){ar.x=m.x
}if(am.y==null||m.y<am.y){am.y=m.y
}if(ar.y==null||m.y>ar.y){ar.y=m.y
}}}aq.push(' ">');
if(!at){z(this,aq)
}else{J(this,aq,am,ar)
}aq.push("</g_vml_:shape>");
this.element_.insertAdjacentHTML("beforeEnd",aq.join(""))
}};
function z(m,ak){var j=I(m.strokeStyle);
var p=j.color;
var Z=j.alpha*m.globalAlpha;
var i=m.lineScale_*m.lineWidth;
if(i<1){Z*=i
}ak.push("<g_vml_:stroke",' opacity="',Z,'"',' joinstyle="',m.lineJoin,'"',' miterlimit="',m.miterLimit,'"',' endcap="',V(m.lineCap),'"',' weight="',i,'px"',' color="',p,'" />')
}function J(av,am,aO,aw){var an=av.fillStyle;
var aF=av.arcScaleX_;
var aE=av.arcScaleY_;
var j=aw.x-aO.x;
var p=aw.y-aO.y;
if(an instanceof Y){var ar=0;
var aJ={x:0,y:0};
var aB=0;
var aq=1;
if(an.type_=="gradient"){var ap=an.x0_/aF;
var m=an.y0_/aE;
var ao=an.x1_/aF;
var aQ=an.y1_/aE;
var aN=aa(av,ap,m);
var aM=aa(av,ao,aQ);
var ak=aM.x-aN.x;
var Z=aM.y-aN.y;
ar=Math.atan2(ak,Z)*180/Math.PI;
if(ar<0){ar+=360
}if(ar<0.000001){ar=0
}}else{var aN=aa(av,an.x0_,an.y0_);
aJ={x:(aN.x-aO.x)/j,y:(aN.y-aO.y)/p};
j/=aF*d;
p/=aE*d;
var aH=af.max(j,p);
aB=2*an.r0_/aH;
aq=2*an.r1_/aH-aB
}var az=an.colors_;
az.sort(function(aR,i){return aR.offset-i.offset
});
var au=az.length;
var ay=az[0].color;
var ax=az[au-1].color;
var aD=az[0].alpha*av.globalAlpha;
var aC=az[au-1].alpha*av.globalAlpha;
var aI=[];
for(var aL=0;
aL<au;
aL++){var at=az[aL];
aI.push(at.offset*aq+aB+" "+at.color)
}am.push('<g_vml_:fill type="',an.type_,'"',' method="none" focus="100%"',' color="',ay,'"',' color2="',ax,'"',' colors="',aI.join(","),'"',' opacity="',aC,'"',' g_o_:opacity2="',aD,'"',' angle="',ar,'"',' focusposition="',aJ.x,",",aJ.y,'" />')
}else{if(an instanceof X){if(j&&p){var al=-aO.x;
var aG=-aO.y;
am.push("<g_vml_:fill",' position="',al/j*aF*aF,",",aG/p*aE*aE,'"',' type="tile"',' src="',an.src_,'" />')
}}else{var aP=I(av.fillStyle);
var aA=aP.color;
var aK=aP.alpha*av.globalAlpha;
am.push('<g_vml_:fill color="',aA,'" opacity="',aK,'" />')
}}}r.fill=function(){this.stroke(true)
};
r.closePath=function(){this.currentPath_.push({type:"close"})
};
function aa(j,Z,p){var i=j.m_;
return{x:d*(Z*i[0][0]+p*i[1][0]+i[2][0])-f,y:d*(Z*i[0][1]+p*i[1][1]+i[2][1])-f}
}r.save=function(){var i={};
y(this,i);
this.aStack_.push(i);
this.mStack_.push(this.m_);
this.m_=M(E(),this.m_)
};
r.restore=function(){if(this.aStack_.length){y(this.aStack_.pop(),this);
this.m_=this.mStack_.pop()
}};
function k(i){return isFinite(i[0][0])&&isFinite(i[0][1])&&isFinite(i[1][0])&&isFinite(i[1][1])&&isFinite(i[2][0])&&isFinite(i[2][1])
}function ae(j,i,p){if(!k(i)){return
}j.m_=i;
if(p){var Z=i[0][0]*i[1][1]-i[0][1]*i[1][0];
j.lineScale_=Q(K(Z))
}}r.translate=function(m,j){var i=[[1,0,0],[0,1,0],[m,j,1]];
ae(this,M(i,this.m_),false)
};
r.rotate=function(j){var p=D(j);
var m=n(j);
var i=[[p,m,0],[-m,p,0],[0,0,1]];
ae(this,M(i,this.m_),false)
};
r.scale=function(m,j){this.arcScaleX_*=m;
this.arcScaleY_*=j;
var i=[[m,0,0],[0,j,0],[0,0,1]];
ae(this,M(i,this.m_),true)
};
r.transform=function(Z,p,al,ak,j,i){var m=[[Z,p,0],[al,ak,0],[j,i,1]];
ae(this,M(m,this.m_),true)
};
r.setTransform=function(ak,Z,am,al,p,j){var i=[[ak,Z,0],[am,al,0],[p,j,1]];
ae(this,i,true)
};
r.drawText_=function(aq,ao,an,au,am){var at=this.m_,ax=1000,j=0,aw=ax,al={x:0,y:0},ak=[];
var i=x(H(this.font),this.element_);
var p=ag(i);
var ay=this.element_.currentStyle;
var Z=this.textAlign.toLowerCase();
switch(Z){case"left":case"center":case"right":break;
case"end":Z=ay.direction=="ltr"?"right":"left";
break;
case"start":Z=ay.direction=="rtl"?"right":"left";
break;
default:Z="left"
}switch(this.textBaseline){case"hanging":case"top":al.y=i.size/1.75;
break;
case"middle":break;
default:case null:case"alphabetic":case"ideographic":case"bottom":al.y=-i.size/2.25;
break
}switch(Z){case"right":j=ax;
aw=0.05;
break;
case"center":j=aw=ax/2;
break
}var av=aa(this,ao+al.x,an+al.y);
ak.push('<g_vml_:line from="',-j,' 0" to="',aw,' 0.05" ',' coordsize="100 100" coordorigin="0 0"',' filled="',!am,'" stroked="',!!am,'" style="position:absolute;width:1px;height:1px;">');
if(am){z(this,ak)
}else{J(this,ak,{x:-j,y:0},{x:aw,y:i.size})
}var ar=at[0][0].toFixed(3)+","+at[1][0].toFixed(3)+","+at[0][1].toFixed(3)+","+at[1][1].toFixed(3)+",0,0";
var ap=o(av.x/d)+","+o(av.y/d);
ak.push('<g_vml_:skew on="t" matrix="',ar,'" ',' offset="',ap,'" origin="',j,' 0" />','<g_vml_:path textpathok="true" />','<g_vml_:textpath on="true" string="',aj(aq),'" style="v-text-align:',Z,";font:",aj(p),'" /></g_vml_:line>');
this.element_.insertAdjacentHTML("beforeEnd",ak.join(""))
};
r.fillText=function(m,i,p,j){this.drawText_(m,i,p,j,false)
};
r.strokeText=function(m,i,p,j){this.drawText_(m,i,p,j,true)
};
r.measureText=function(m){if(!this.textMeasureEl_){var i='<span style="position:absolute;top:-20000px;left:0;padding:0;margin:0;border:none;white-space:pre;"></span>';
this.element_.insertAdjacentHTML("beforeEnd",i);
this.textMeasureEl_=this.element_.lastChild
}var j=this.element_.ownerDocument;
this.textMeasureEl_.innerHTML="";
this.textMeasureEl_.style.font=this.font;
this.textMeasureEl_.appendChild(j.createTextNode(m));
return{width:this.textMeasureEl_.offsetWidth}
};
r.clip=function(){};
r.arcTo=function(){};
r.createPattern=function(j,i){return new X(j,i)
};
function Y(i){this.type_=i;
this.x0_=0;
this.y0_=0;
this.r0_=0;
this.x1_=0;
this.y1_=0;
this.r1_=0;
this.colors_=[]
}Y.prototype.addColorStop=function(j,i){i=I(i);
this.colors_.push({offset:j,color:i.color,alpha:i.alpha})
};
function X(j,i){T(j);
switch(i){case"repeat":case null:case"":this.repetition_="repeat";
break;
case"repeat-x":case"repeat-y":case"no-repeat":this.repetition_=i;
break;
default:R("SYNTAX_ERR")
}this.src_=j.src;
this.width_=j.width;
this.height_=j.height
}function R(i){throw new S(i)
}function T(i){if(!i||i.nodeType!=1||i.tagName!="IMG"){R("TYPE_MISMATCH_ERR")
}if(i.readyState!="complete"){R("INVALID_STATE_ERR")
}}function S(i){this.code=this[i];
this.message=i+": DOM Exception "+this.code
}var ac=S.prototype=new Error;
ac.INDEX_SIZE_ERR=1;
ac.DOMSTRING_SIZE_ERR=2;
ac.HIERARCHY_REQUEST_ERR=3;
ac.WRONG_DOCUMENT_ERR=4;
ac.INVALID_CHARACTER_ERR=5;
ac.NO_DATA_ALLOWED_ERR=6;
ac.NO_MODIFICATION_ALLOWED_ERR=7;
ac.NOT_FOUND_ERR=8;
ac.NOT_SUPPORTED_ERR=9;
ac.INUSE_ATTRIBUTE_ERR=10;
ac.INVALID_STATE_ERR=11;
ac.SYNTAX_ERR=12;
ac.INVALID_MODIFICATION_ERR=13;
ac.NAMESPACE_ERR=14;
ac.INVALID_ACCESS_ERR=15;
ac.VALIDATION_ERR=16;
ac.TYPE_MISMATCH_ERR=17;
G_vmlCanvasManager=e;
CanvasRenderingContext2D=G;
CanvasGradient=Y;
CanvasPattern=X;
DOMException=S
})()
}JSManager.setLoaded(202,"vendors/excanvas.js");
(function(b){b.color={};
b.color.make=function(f,e,c,d){var h={};
h.r=f||0;
h.g=e||0;
h.b=c||0;
h.a=d!=null?d:1;
h.add=function(l,k){for(var j=0;
j<l.length;
++j){h[l.charAt(j)]+=k
}return h.normalize()
};
h.scale=function(l,k){for(var j=0;
j<l.length;
++j){h[l.charAt(j)]*=k
}return h.normalize()
};
h.toString=function(){if(h.a>=1){return"rgb("+[h.r,h.g,h.b].join(",")+")"
}else{return"rgba("+[h.r,h.g,h.b,h.a].join(",")+")"
}};
h.normalize=function(){function i(k,l,j){return l<k?k:l>j?j:l
}h.r=i(0,parseInt(h.r),255);
h.g=i(0,parseInt(h.g),255);
h.b=i(0,parseInt(h.b),255);
h.a=i(0,h.a,1);
return h
};
h.clone=function(){return b.color.make(h.r,h.b,h.g,h.a)
};
return h.normalize()
};
b.color.extract=function(e,d){var f;
do{f=e.css(d).toLowerCase();
if(f!=""&&f!="transparent"){break
}e=e.parent()
}while(e.length&&!b.nodeName(e.get(0),"body"));
if(f=="rgba(0, 0, 0, 0)"){f="transparent"
}return b.color.parse(f)
};
b.color.parse=function(f){var e,c=b.color.make;
if(e=/rgb\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*\)/.exec(f)){return c(parseInt(e[1],10),parseInt(e[2],10),parseInt(e[3],10))
}if(e=/rgba\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]+(?:\.[0-9]+)?)\s*\)/.exec(f)){return c(parseInt(e[1],10),parseInt(e[2],10),parseInt(e[3],10),parseFloat(e[4]))
}if(e=/rgb\(\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*\)/.exec(f)){return c(parseFloat(e[1])*2.55,parseFloat(e[2])*2.55,parseFloat(e[3])*2.55)
}if(e=/rgba\(\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\s*\)/.exec(f)){return c(parseFloat(e[1])*2.55,parseFloat(e[2])*2.55,parseFloat(e[3])*2.55,parseFloat(e[4]))
}if(e=/#([a-fA-F0-9]{2})([a-fA-F0-9]{2})([a-fA-F0-9]{2})/.exec(f)){return c(parseInt(e[1],16),parseInt(e[2],16),parseInt(e[3],16))
}if(e=/#([a-fA-F0-9])([a-fA-F0-9])([a-fA-F0-9])/.exec(f)){return c(parseInt(e[1]+e[1],16),parseInt(e[2]+e[2],16),parseInt(e[3]+e[3],16))
}var d=b.trim(f).toLowerCase();
if(d=="transparent"){return c(255,255,255,0)
}else{e=a[d]||[0,0,0];
return c(e[0],e[1],e[2])
}};
var a={aqua:[0,255,255],azure:[240,255,255],beige:[245,245,220],black:[0,0,0],blue:[0,0,255],brown:[165,42,42],cyan:[0,255,255],darkblue:[0,0,139],darkcyan:[0,139,139],darkgrey:[169,169,169],darkgreen:[0,100,0],darkkhaki:[189,183,107],darkmagenta:[139,0,139],darkolivegreen:[85,107,47],darkorange:[255,140,0],darkorchid:[153,50,204],darkred:[139,0,0],darksalmon:[233,150,122],darkviolet:[148,0,211],fuchsia:[255,0,255],gold:[255,215,0],green:[0,128,0],indigo:[75,0,130],khaki:[240,230,140],lightblue:[173,216,230],lightcyan:[224,255,255],lightgreen:[144,238,144],lightgrey:[211,211,211],lightpink:[255,182,193],lightyellow:[255,255,224],lime:[0,255,0],magenta:[255,0,255],maroon:[128,0,0],navy:[0,0,128],olive:[128,128,0],orange:[255,165,0],pink:[255,192,203],purple:[128,0,128],violet:[128,0,128],red:[255,0,0],silver:[192,192,192],white:[255,255,255],yellow:[255,255,0]}
})(jQuery);
(function(e){var d=Object.prototype.hasOwnProperty;
if(!e.fn.detach){e.fn.detach=function(){return this.each(function(){if(this.parentNode){this.parentNode.removeChild(this)
}})
}
}function a(i,h){var k=h.children("."+i)[0];
if(k==null){k=document.createElement("canvas");
k.className=i;
e(k).css({direction:"ltr",position:"absolute",left:0,top:0}).appendTo(h);
if(!k.getContext){if(window.G_vmlCanvasManager){k=window.G_vmlCanvasManager.initElement(k)
}else{throw new Error("Canvas is not available. If you're using IE with a fall-back such as Excanvas, then there's either a mistake in your conditional include, or the page has no DOCTYPE and is rendering in Quirks Mode.")
}}}this.element=k;
var j=this.context=k.getContext("2d");
var f=window.devicePixelRatio||1,l=j.webkitBackingStorePixelRatio||j.mozBackingStorePixelRatio||j.msBackingStorePixelRatio||j.oBackingStorePixelRatio||j.backingStorePixelRatio||1;
this.pixelRatio=f/l;
this.resize(h.width(),h.height());
this.textContainer=null;
this.text={};
this._textCache={}
}a.prototype.resize=function(j,f){if(j<=0||f<=0){throw new Error("Invalid dimensions for plot, width = "+j+", height = "+f)
}var i=this.element,h=this.context,k=this.pixelRatio;
if(this.width!=j){i.width=j*k;
i.style.width=j+"px";
this.width=j
}if(this.height!=f){i.height=f*k;
i.style.height=f+"px";
this.height=f
}h.restore();
h.save();
h.scale(k,k)
};
a.prototype.clear=function(){this.context.clearRect(0,0,this.width,this.height)
};
a.prototype.render=function(){var f=this._textCache;
for(var p in f){if(d.call(f,p)){var o=this.getTextLayer(p),h=f[p];
o.hide();
for(var n in h){if(d.call(h,n)){var j=h[n];
for(var q in j){if(d.call(j,q)){var l=j[q].positions;
for(var k=0,m;
m=l[k];
k++){if(m.active){if(!m.rendered){o.append(m.element);
m.rendered=true
}}else{l.splice(k--,1);
if(m.rendered){m.element.detach()
}}}if(l.length==0){delete j[q]
}}}}}o.show()
}}};
a.prototype.getTextLayer=function(h){var f=this.text[h];
if(f==null){if(this.textContainer==null){this.textContainer=e("<div class='flot-text'></div>").css({position:"absolute",top:0,left:0,bottom:0,right:0,"font-size":"smaller",color:"#545454"}).insertAfter(this.element)
}f=this.text[h]=e("<div></div>").addClass(h).css({position:"absolute",top:0,left:0,bottom:0,right:0}).appendTo(this.textContainer)
}return f
};
a.prototype.getTextInfo=function(n,p,k,l,h){var o,f,j,i;
p=""+p;
if(typeof k==="object"){o=k.style+" "+k.variant+" "+k.weight+" "+k.size+"px/"+k.lineHeight+"px "+k.family
}else{o=k
}f=this._textCache[n];
if(f==null){f=this._textCache[n]={}
}j=f[o];
if(j==null){j=f[o]={}
}i=j[p];
if(i==null){var m=e("<div></div>").html(p).css({position:"absolute","max-width":h,top:-9999}).appendTo(this.getTextLayer(n));
if(typeof k==="object"){m.css({font:o,color:k.color})
}else{if(typeof k==="string"){m.addClass(k)
}}i=j[p]={width:m.outerWidth(true),height:m.outerHeight(true),element:m,positions:[]};
m.detach()
}return i
};
a.prototype.addText=function(p,s,q,v,j,k,f,o,r){var h=this.getTextInfo(p,v,j,k,f),m=h.positions;
if(o=="center"){s-=h.width/2
}else{if(o=="right"){s-=h.width
}}if(r=="middle"){q-=h.height/2
}else{if(r=="bottom"){q-=h.height
}}for(var l=0,n;
n=m[l];
l++){if(n.x==s&&n.y==q){n.active=true;
return
}}n={active:true,rendered:false,element:m.length?h.element.clone():h.element,x:s,y:q};
m.push(n);
n.element.css({top:Math.round(q),left:Math.round(s),"text-align":o})
};
a.prototype.removeText=function(p,r,q,v,j,k){if(v==null){var f=this._textCache[p];
if(f!=null){for(var o in f){if(d.call(f,o)){var h=f[o];
for(var s in h){if(d.call(h,s)){var m=h[s].positions;
for(var l=0,n;
n=m[l];
l++){n.active=false
}}}}}}}else{var m=this.getTextInfo(p,v,j,k).positions;
for(var l=0,n;
n=m[l];
l++){if(n.x==r&&n.y==q){n.active=false
}}}};
function c(T,D,F,h){var w=[],O={colors:["#edc240","#afd8f8","#cb4b4b","#4da74d","#9440ed"],legend:{show:true,noColumns:1,labelFormatter:null,labelBoxBorderColor:"#ccc",container:null,position:"ne",margin:5,backgroundColor:null,backgroundOpacity:0.85,sorted:null},xaxis:{show:null,position:"bottom",mode:null,font:null,color:null,tickColor:null,transform:null,inverseTransform:null,min:null,max:null,autoscaleMargin:null,ticks:null,tickFormatter:null,labelWidth:null,labelHeight:null,reserveSpace:null,tickLength:null,alignTicksWithAxis:null,tickDecimals:null,tickSize:null,minTickSize:null},yaxis:{autoscaleMargin:0.02,position:"left"},xaxes:[],yaxes:[],series:{points:{show:false,radius:3,lineWidth:2,fill:true,fillColor:"#ffffff",symbol:"circle"},lines:{lineWidth:2,fill:false,fillColor:null,steps:false},bars:{show:false,lineWidth:2,barWidth:1,fill:true,fillColor:null,align:"left",horizontal:false,zero:true},shadowSize:3,highlightColor:null},grid:{show:true,aboveData:false,color:"#545454",backgroundColor:null,borderColor:null,tickColor:null,margin:0,labelMargin:5,axisMargin:8,borderWidth:2,minBorderMargin:null,markings:null,markingsColor:"#f4f4f4",markingsLineWidth:2,clickable:false,hoverable:false,autoHighlight:true,mouseActiveRadius:10},interaction:{redrawOverlayInterval:1000/60},hooks:{}},ag=null,ap=null,aq=null,G=null,aA=null,at=[],aa=[],M={left:0,right:0,top:0,bottom:0},l=0,ah=0,q={processOptions:[],processRawData:[],processDatapoints:[],processOffset:[],drawBackground:[],drawSeries:[],draw:[],bindEvents:[],drawOverlay:[],shutdown:[]},i=this;
i.setData=N;
i.setupGrid=R;
i.draw=ay;
i.getPlaceholder=function(){return T
};
i.getCanvas=function(){return ag.element
};
i.getPlotOffset=function(){return M
};
i.width=function(){return l
};
i.height=function(){return ah
};
i.offset=function(){var aC=aq.offset();
aC.left+=M.left;
aC.top+=M.top;
return aC
};
i.getData=function(){return w
};
i.getAxes=function(){var aD={},aC;
e.each(at.concat(aa),function(aE,aF){if(aF){aD[aF.direction+(aF.n!=1?aF.n:"")+"axis"]=aF
}});
return aD
};
i.getXAxes=function(){return at
};
i.getYAxes=function(){return aa
};
i.c2p=ac;
i.p2c=U;
i.getOptions=function(){return O
};
i.highlight=ar;
i.unhighlight=al;
i.triggerRedrawOverlay=ab;
i.pointOffset=function(aC){return{left:parseInt(at[A(aC,"x")-1].p2c(+aC.x)+M.left,10),top:parseInt(aa[A(aC,"y")-1].p2c(+aC.y)+M.top,10)}
};
i.shutdown=p;
i.destroy=function(){p();
T.removeData("plot").empty();
w=[];
O=null;
ag=null;
ap=null;
aq=null;
G=null;
aA=null;
at=[];
aa=[];
q=null;
ak=[];
i=null
};
i.resize=function(){var aD=T.width(),aC=T.height();
ag.resize(aD,aC);
ap.resize(aD,aC)
};
i.hooks=q;
K(i);
ae(F);
aB();
N(D);
R();
ay();
aw();
function I(aE,aC){aC=[i].concat(aC);
for(var aD=0;
aD<aE.length;
++aD){aE[aD].apply(this,aC)
}}function K(){var aD={Canvas:a};
for(var aC=0;
aC<h.length;
++aC){var aE=h[aC];
aE.init(i,aD);
if(aE.options){e.extend(true,O,aE.options)
}}}function ae(aE){e.extend(true,O,aE);
if(aE&&aE.colors){O.colors=aE.colors
}if(O.xaxis.color==null){O.xaxis.color=e.color.parse(O.grid.color).scale("a",0.22).toString()
}if(O.yaxis.color==null){O.yaxis.color=e.color.parse(O.grid.color).scale("a",0.22).toString()
}if(O.xaxis.tickColor==null){O.xaxis.tickColor=O.grid.tickColor||O.xaxis.color
}if(O.yaxis.tickColor==null){O.yaxis.tickColor=O.grid.tickColor||O.yaxis.color
}if(O.grid.borderColor==null){O.grid.borderColor=O.grid.color
}if(O.grid.tickColor==null){O.grid.tickColor=e.color.parse(O.grid.color).scale("a",0.22).toString()
}var aC,aJ,aH,aG=T.css("font-size"),aF=aG?+aG.replace("px",""):13,aD={style:T.css("font-style"),size:Math.round(0.8*aF),variant:T.css("font-variant"),weight:T.css("font-weight"),family:T.css("font-family")};
aH=O.xaxes.length||1;
for(aC=0;
aC<aH;
++aC){aJ=O.xaxes[aC];
if(aJ&&!aJ.tickColor){aJ.tickColor=aJ.color
}aJ=e.extend(true,{},O.xaxis,aJ);
O.xaxes[aC]=aJ;
if(aJ.font){aJ.font=e.extend({},aD,aJ.font);
if(!aJ.font.color){aJ.font.color=aJ.color
}if(!aJ.font.lineHeight){aJ.font.lineHeight=Math.round(aJ.font.size*1.15)
}}}aH=O.yaxes.length||1;
for(aC=0;
aC<aH;
++aC){aJ=O.yaxes[aC];
if(aJ&&!aJ.tickColor){aJ.tickColor=aJ.color
}aJ=e.extend(true,{},O.yaxis,aJ);
O.yaxes[aC]=aJ;
if(aJ.font){aJ.font=e.extend({},aD,aJ.font);
if(!aJ.font.color){aJ.font.color=aJ.color
}if(!aJ.font.lineHeight){aJ.font.lineHeight=Math.round(aJ.font.size*1.15)
}}}if(O.xaxis.noTicks&&O.xaxis.ticks==null){O.xaxis.ticks=O.xaxis.noTicks
}if(O.yaxis.noTicks&&O.yaxis.ticks==null){O.yaxis.ticks=O.yaxis.noTicks
}if(O.x2axis){O.xaxes[1]=e.extend(true,{},O.xaxis,O.x2axis);
O.xaxes[1].position="top";
if(O.x2axis.min==null){O.xaxes[1].min=null
}if(O.x2axis.max==null){O.xaxes[1].max=null
}}if(O.y2axis){O.yaxes[1]=e.extend(true,{},O.yaxis,O.y2axis);
O.yaxes[1].position="right";
if(O.y2axis.min==null){O.yaxes[1].min=null
}if(O.y2axis.max==null){O.yaxes[1].max=null
}}if(O.grid.coloredAreas){O.grid.markings=O.grid.coloredAreas
}if(O.grid.coloredAreasColor){O.grid.markingsColor=O.grid.coloredAreasColor
}if(O.lines){e.extend(true,O.series.lines,O.lines)
}if(O.points){e.extend(true,O.series.points,O.points)
}if(O.bars){e.extend(true,O.series.bars,O.bars)
}if(O.shadowSize!=null){O.series.shadowSize=O.shadowSize
}if(O.highlightColor!=null){O.series.highlightColor=O.highlightColor
}for(aC=0;
aC<O.xaxes.length;
++aC){P(at,aC+1).options=O.xaxes[aC]
}for(aC=0;
aC<O.yaxes.length;
++aC){P(aa,aC+1).options=O.yaxes[aC]
}for(var aI in q){if(O.hooks[aI]&&O.hooks[aI].length){q[aI]=q[aI].concat(O.hooks[aI])
}}I(q.processOptions,[O])
}function N(aC){w=r(aC);
B();
V()
}function r(aF){var aD=[];
for(var aC=0;
aC<aF.length;
++aC){var aE=e.extend(true,{},O.series);
if(aF[aC].data!=null){aE.data=aF[aC].data;
delete aF[aC].data;
e.extend(true,aE,aF[aC]);
aF[aC].data=aE.data
}else{aE.data=aF[aC]
}aD.push(aE)
}return aD
}function A(aD,aE){var aC=aD[aE+"axis"];
if(typeof aC=="object"){aC=aC.n
}if(typeof aC!="number"){aC=1
}return aC
}function k(){return e.grep(at.concat(aa),function(aC){return aC
})
}function ac(aF){var aD={},aC,aE;
for(aC=0;
aC<at.length;
++aC){aE=at[aC];
if(aE&&aE.used){aD["x"+aE.n]=aE.c2p(aF.left)
}}for(aC=0;
aC<aa.length;
++aC){aE=aa[aC];
if(aE&&aE.used){aD["y"+aE.n]=aE.c2p(aF.top)
}}if(aD.x1!==undefined){aD.x=aD.x1
}if(aD.y1!==undefined){aD.y=aD.y1
}return aD
}function U(aG){var aE={},aD,aF,aC;
for(aD=0;
aD<at.length;
++aD){aF=at[aD];
if(aF&&aF.used){aC="x"+aF.n;
if(aG[aC]==null&&aF.n==1){aC="x"
}if(aG[aC]!=null){aE.left=aF.p2c(aG[aC]);
break
}}}for(aD=0;
aD<aa.length;
++aD){aF=aa[aD];
if(aF&&aF.used){aC="y"+aF.n;
if(aG[aC]==null&&aF.n==1){aC="y"
}if(aG[aC]!=null){aE.top=aF.p2c(aG[aC]);
break
}}}return aE
}function P(aD,aC){if(!aD[aC-1]){aD[aC-1]={n:aC,direction:aD==at?"x":"y",options:e.extend(true,{},aD==at?O.xaxis:O.yaxis)}
}return aD[aC-1]
}function B(){var aN=w.length,aE=-1,aF;
for(aF=0;
aF<w.length;
++aF){var aK=w[aF].color;
if(aK!=null){aN--;
if(typeof aK=="number"&&aK>aE){aE=aK
}}}if(aN<=aE){aN=aE+1
}var aJ,aC=[],aI=O.colors,aH=aI.length,aD=0;
for(aF=0;
aF<aN;
aF++){aJ=e.color.parse(aI[aF%aH]||"#666");
if(aF%aH==0&&aF){if(aD>=0){if(aD<0.5){aD=-aD-0.2
}else{aD=0
}}else{aD=-aD
}}aC[aF]=aJ.scale("rgb",1+aD)
}var aG=0,aO;
for(aF=0;
aF<w.length;
++aF){aO=w[aF];
if(aO.color==null){aO.color=aC[aG].toString();
++aG
}else{if(typeof aO.color=="number"){aO.color=aC[aO.color].toString()
}}if(aO.lines.show==null){var aM,aL=true;
for(aM in aO){if(aO[aM]&&aO[aM].show){aL=false;
break
}}if(aL){aO.lines.show=true
}}if(aO.lines.zero==null){aO.lines.zero=!!aO.lines.fill
}aO.xaxis=P(at,A(aO,"x"));
aO.yaxis=P(aa,A(aO,"y"))
}}function V(){var aQ=Number.POSITIVE_INFINITY,aK=Number.NEGATIVE_INFINITY,aC=Number.MAX_VALUE,aX,aV,aU,aP,aE,aL,aW,aR,aJ,aI,aD,a3,a0,aN,a2,aZ;
function aG(a6,a5,a4){if(a5<a6.datamin&&a5!=-aC){a6.datamin=a5
}if(a4>a6.datamax&&a4!=aC){a6.datamax=a4
}}e.each(k(),function(a4,a5){a5.datamin=aQ;
a5.datamax=aK;
a5.used=false
});
for(aX=0;
aX<w.length;
++aX){aL=w[aX];
aL.datapoints={points:[]};
I(q.processRawData,[aL,aL.data,aL.datapoints])
}for(aX=0;
aX<w.length;
++aX){aL=w[aX];
a2=aL.data;
aZ=aL.datapoints.format;
if(!aZ){aZ=[];
aZ.push({x:true,number:true,required:true});
aZ.push({y:true,number:true,required:true});
if(aL.bars.show||(aL.lines.show&&aL.lines.fill)){var aS=!!((aL.bars.show&&aL.bars.zero)||(aL.lines.show&&aL.lines.zero));
aZ.push({y:true,number:true,required:false,defaultValue:0,autoscale:aS});
if(aL.bars.horizontal){delete aZ[aZ.length-1].y;
aZ[aZ.length-1].x=true
}}aL.datapoints.format=aZ
}if(aL.datapoints.pointsize!=null){continue
}aL.datapoints.pointsize=aZ.length;
aR=aL.datapoints.pointsize;
aW=aL.datapoints.points;
var aH=aL.lines.show&&aL.lines.steps;
aL.xaxis.used=aL.yaxis.used=true;
for(aV=aU=0;
aV<a2.length;
++aV,aU+=aR){aN=a2[aV];
var aF=aN==null;
if(!aF){for(aP=0;
aP<aR;
++aP){a3=aN[aP];
a0=aZ[aP];
if(a0){if(a0.number&&a3!=null){a3=+a3;
if(isNaN(a3)){a3=null
}else{if(a3==Infinity){a3=aC
}else{if(a3==-Infinity){a3=-aC
}}}}if(a3==null){if(a0.required){aF=true
}if(a0.defaultValue!=null){a3=a0.defaultValue
}}}aW[aU+aP]=a3
}}if(aF){for(aP=0;
aP<aR;
++aP){a3=aW[aU+aP];
if(a3!=null){a0=aZ[aP];
if(a0.autoscale!==false){if(a0.x){aG(aL.xaxis,a3,a3)
}if(a0.y){aG(aL.yaxis,a3,a3)
}}}aW[aU+aP]=null
}}else{if(aH&&aU>0&&aW[aU-aR]!=null&&aW[aU-aR]!=aW[aU]&&aW[aU-aR+1]!=aW[aU+1]){for(aP=0;
aP<aR;
++aP){aW[aU+aR+aP]=aW[aU+aP]
}aW[aU+1]=aW[aU-aR+1];
aU+=aR
}}}}for(aX=0;
aX<w.length;
++aX){aL=w[aX];
I(q.processDatapoints,[aL,aL.datapoints])
}for(aX=0;
aX<w.length;
++aX){aL=w[aX];
aW=aL.datapoints.points;
aR=aL.datapoints.pointsize;
aZ=aL.datapoints.format;
var aM=aQ,aT=aQ,aO=aK,aY=aK;
for(aV=0;
aV<aW.length;
aV+=aR){if(aW[aV]==null){continue
}for(aP=0;
aP<aR;
++aP){a3=aW[aV+aP];
a0=aZ[aP];
if(!a0||a0.autoscale===false||a3==aC||a3==-aC){continue
}if(a0.x){if(a3<aM){aM=a3
}if(a3>aO){aO=a3
}}if(a0.y){if(a3<aT){aT=a3
}if(a3>aY){aY=a3
}}}}if(aL.bars.show){var a1;
switch(aL.bars.align){case"left":a1=0;
break;
case"right":a1=-aL.bars.barWidth;
break;
default:a1=-aL.bars.barWidth/2
}if(aL.bars.horizontal){aT+=a1;
aY+=a1+aL.bars.barWidth
}else{aM+=a1;
aO+=a1+aL.bars.barWidth
}}aG(aL.xaxis,aM,aO);
aG(aL.yaxis,aT,aY)
}e.each(k(),function(a4,a5){if(a5.datamin==aQ){a5.datamin=null
}if(a5.datamax==aK){a5.datamax=null
}})
}function aB(){T.css("padding",0).children().filter(function(){return !e(this).hasClass("flot-overlay")&&!e(this).hasClass("flot-base")
}).remove();
if(T.css("position")=="static"){T.css("position","relative")
}ag=new a("flot-base",T);
ap=new a("flot-overlay",T);
G=ag.context;
aA=ap.context;
aq=e(ap.element).unbind();
var aC=T.data("plot");
if(aC){aC.shutdown();
ap.clear()
}T.data("plot",i)
}function aw(){if(O.grid.hoverable){aq.mousemove(f);
aq.bind("mouseleave",S)
}if(O.grid.clickable){aq.click(L)
}I(q.bindEvents,[aq])
}function p(){if(m){clearTimeout(m)
}aq.unbind("mousemove",f);
aq.unbind("mouseleave",S);
aq.unbind("click",L);
I(q.shutdown,[aq])
}function o(aH){function aD(aI){return aI
}var aG,aC,aE=aH.options.transform||aD,aF=aH.options.inverseTransform;
if(aH.direction=="x"){aG=aH.scale=l/Math.abs(aE(aH.max)-aE(aH.min));
aC=Math.min(aE(aH.max),aE(aH.min))
}else{aG=aH.scale=ah/Math.abs(aE(aH.max)-aE(aH.min));
aG=-aG;
aC=Math.max(aE(aH.max),aE(aH.min))
}if(aE==aD){aH.p2c=function(aI){return(aI-aC)*aG
}
}else{aH.p2c=function(aI){return(aE(aI)-aC)*aG
}
}if(!aF){aH.c2p=function(aI){return aC+aI/aG
}
}else{aH.c2p=function(aI){return aF(aC+aI/aG)
}
}}function ad(aF){var aC=aF.options,aL=aF.ticks||[],aK=aC.labelWidth||0,aG=aC.labelHeight||0,aM=aK||(aF.direction=="x"?Math.floor(ag.width/(aL.length||1)):null),aI=aF.direction+"Axis "+aF.direction+aF.n+"Axis",aJ="flot-"+aF.direction+"-axis flot-"+aF.direction+aF.n+"-axis "+aI,aE=aC.font||"flot-tick-label tickLabel";
for(var aH=0;
aH<aL.length;
++aH){var aN=aL[aH];
if(!aN.label){continue
}var aD=ag.getTextInfo(aJ,aN.label,aE,null,aM);
aK=Math.max(aK,aD.width);
aG=Math.max(aG,aD.height)
}aF.labelWidth=aC.labelWidth||aK;
aF.labelHeight=aC.labelHeight||aG
}function H(aE){var aD=aE.labelWidth,aL=aE.labelHeight,aJ=aE.options.position,aC=aE.direction==="x",aH=aE.options.tickLength,aI=O.grid.axisMargin,aK=O.grid.labelMargin,aN=true,aG=true,aF=true,aM=false;
e.each(aC?at:aa,function(aP,aO){if(aO&&(aO.show||aO.reserveSpace)){if(aO===aE){aM=true
}else{if(aO.options.position===aJ){if(aM){aG=false
}else{aN=false
}}}if(!aM){aF=false
}}});
if(aG){aI=0
}if(aH==null){aH=aF?"full":5
}if(!isNaN(+aH)){aK+=+aH
}if(aC){aL+=aK;
if(aJ=="bottom"){M.bottom+=aL+aI;
aE.box={top:ag.height-M.bottom,height:aL}
}else{aE.box={top:M.top+aI,height:aL};
M.top+=aL+aI
}}else{aD+=aK;
if(aJ=="left"){aE.box={left:M.left+aI,width:aD};
M.left+=aD+aI
}else{M.right+=aD+aI;
aE.box={left:ag.width-M.right,width:aD}
}}aE.position=aJ;
aE.tickLength=aH;
aE.box.padding=aK;
aE.innermost=aN
}function af(aC){if(aC.direction=="x"){aC.box.left=M.left-aC.labelWidth/2;
aC.box.width=ag.width-M.left-M.right+aC.labelWidth
}else{aC.box.top=M.top-aC.labelHeight/2;
aC.box.height=ag.height-M.bottom-M.top+aC.labelHeight
}}function E(){var aE=O.grid.minBorderMargin,aD,aC;
if(aE==null){aE=0;
for(aC=0;
aC<w.length;
++aC){aE=Math.max(aE,2*(w[aC].points.radius+w[aC].points.lineWidth/2))
}}var aF={left:aE,right:aE,top:aE,bottom:aE};
e.each(k(),function(aG,aH){if(aH.reserveSpace&&aH.ticks&&aH.ticks.length){if(aH.direction==="x"){aF.left=Math.max(aF.left,aH.labelWidth/2);
aF.right=Math.max(aF.right,aH.labelWidth/2)
}else{aF.bottom=Math.max(aF.bottom,aH.labelHeight/2);
aF.top=Math.max(aF.top,aH.labelHeight/2)
}}});
M.left=Math.ceil(Math.max(aF.left,M.left));
M.right=Math.ceil(Math.max(aF.right,M.right));
M.top=Math.ceil(Math.max(aF.top,M.top));
M.bottom=Math.ceil(Math.max(aF.bottom,M.bottom))
}function R(){var aE,aG=k(),aH=O.grid.show;
for(var aD in M){var aF=O.grid.margin||0;
M[aD]=typeof aF=="number"?aF:aF[aD]||0
}I(q.processOffset,[M]);
for(var aD in M){if(typeof(O.grid.borderWidth)=="object"){M[aD]+=aH?O.grid.borderWidth[aD]:0
}else{M[aD]+=aH?O.grid.borderWidth:0
}}e.each(aG,function(aJ,aK){var aI=aK.options;
aK.show=aI.show==null?aK.used:aI.show;
aK.reserveSpace=aI.reserveSpace==null?aK.show:aI.reserveSpace;
n(aK)
});
if(aH){var aC=e.grep(aG,function(aI){return aI.show||aI.reserveSpace
});
e.each(aC,function(aI,aJ){av(aJ);
Z(aJ);
x(aJ,aJ.ticks);
ad(aJ)
});
for(aE=aC.length-1;
aE>=0;
--aE){H(aC[aE])
}E();
e.each(aC,function(aI,aJ){af(aJ)
})
}l=ag.width-M.left-M.right;
ah=ag.height-M.bottom-M.top;
e.each(aG,function(aI,aJ){o(aJ)
});
if(aH){ax()
}az()
}function n(aF){var aG=aF.options,aE=+(aG.min!=null?aG.min:aF.datamin),aC=+(aG.max!=null?aG.max:aF.datamax),aI=aC-aE;
if(aI==0){var aD=aC==0?1:0.01;
if(aG.min==null){aE-=aD
}if(aG.max==null||aG.min!=null){aC+=aD
}}else{var aH=aG.autoscaleMargin;
if(aH!=null){if(aG.min==null){aE-=aI*aH;
if(aE<0&&aF.datamin!=null&&aF.datamin>=0){aE=0
}}if(aG.max==null){aC+=aI*aH;
if(aC>0&&aF.datamax!=null&&aF.datamax<=0){aC=0
}}}}aF.min=aE;
aF.max=aC
}function av(aH){var aD=aH.options;
var aG;
if(typeof aD.ticks=="number"&&aD.ticks>0){aG=aD.ticks
}else{aG=0.3*Math.sqrt(aH.direction=="x"?ag.width:ag.height)
}var aM=(aH.max-aH.min)/aG,aI=-Math.floor(Math.log(aM)/Math.LN10),aF=aD.tickDecimals;
if(aF!=null&&aI>aF){aI=aF
}var aC=Math.pow(10,-aI),aE=aM/aC,aO;
if(aE<1.5){aO=1
}else{if(aE<3){aO=2;
if(aE>2.25&&(aF==null||aI+1<=aF)){aO=2.5;
++aI
}}else{if(aE<7.5){aO=5
}else{aO=10
}}}aO*=aC;
if(aD.minTickSize!=null&&aO<aD.minTickSize){aO=aD.minTickSize
}aH.delta=aM;
aH.tickDecimals=Math.max(0,aF!=null?aF:aI);
aH.tickSize=aD.tickSize||aO;
if(aD.mode=="time"&&!aH.tickGenerator){throw new Error("Time mode requires the flot.time plugin.")
}if(!aH.tickGenerator){aH.tickGenerator=function(aR){var aT=[],aU=b(aR.min,aR.tickSize),aQ=0,aP=Number.NaN,aS;
do{aS=aP;
aP=aU+aQ*aR.tickSize;
aT.push(aP);
++aQ
}while(aP<aR.max&&aP!=aS);
return aT
};
aH.tickFormatter=function(aU,aS){var aR=aS.tickDecimals?Math.pow(10,aS.tickDecimals):1;
var aT=""+Math.round(aU*aR)/aR;
if(aS.tickDecimals!=null){var aQ=aT.indexOf(".");
var aP=aQ==-1?0:aT.length-aQ-1;
if(aP<aS.tickDecimals){return(aP?aT:aT+".")+(""+aR).substr(1,aS.tickDecimals-aP)
}}return aT
}
}if(e.isFunction(aD.tickFormatter)){aH.tickFormatter=function(aP,aQ){return""+aD.tickFormatter(aP,aQ)
}
}if(aD.alignTicksWithAxis!=null){var aJ=(aH.direction=="x"?at:aa)[aD.alignTicksWithAxis-1];
if(aJ&&aJ.used&&aJ!=aH){var aN=aH.tickGenerator(aH);
if(aN.length>0){if(aD.min==null){aH.min=Math.min(aH.min,aN[0])
}if(aD.max==null&&aN.length>1){aH.max=Math.max(aH.max,aN[aN.length-1])
}}aH.tickGenerator=function(aR){var aS=[],aP,aQ;
for(aQ=0;
aQ<aJ.ticks.length;
++aQ){aP=(aJ.ticks[aQ].v-aJ.min)/(aJ.max-aJ.min);
aP=aR.min+aP*(aR.max-aR.min);
aS.push(aP)
}return aS
};
if(!aH.mode&&aD.tickDecimals==null){var aL=Math.max(0,-Math.floor(Math.log(aH.delta)/Math.LN10)+1),aK=aH.tickGenerator(aH);
if(!(aK.length>1&&/\..*0$/.test((aK[1]-aK[0]).toFixed(aL)))){aH.tickDecimals=aL
}}}}}function Z(aG){var aI=aG.options.ticks,aH=[];
if(aI==null||(typeof aI=="number"&&aI>0)){aH=aG.tickGenerator(aG)
}else{if(aI){if(e.isFunction(aI)){aH=aI(aG)
}else{aH=aI
}}}var aF,aC;
aG.ticks=[];
for(aF=0;
aF<aH.length;
++aF){var aD=null;
var aE=aH[aF];
if(typeof aE=="object"){aC=+aE[0];
if(aE.length>1){aD=aE[1]
}}else{aC=+aE
}if(aD==null){aD=aG.tickFormatter(aC,aG)
}if(!isNaN(aC)){aG.ticks.push({v:aC,label:aD})
}}}function x(aC,aD){if(aC.options.autoscaleMargin&&aD.length>0){if(aC.options.min==null){aC.min=Math.min(aC.min,aD[0].v)
}if(aC.options.max==null&&aD.length>1){aC.max=Math.max(aC.max,aD[aD.length-1].v)
}}}function ay(){ag.clear();
I(q.drawBackground,[G]);
var aD=O.grid;
if(aD.show&&aD.backgroundColor){s()
}if(aD.show&&!aD.aboveData){z()
}for(var aC=0;
aC<w.length;
++aC){I(q.drawSeries,[G,w[aC]]);
an(w[aC])
}I(q.draw,[G]);
if(aD.show&&aD.aboveData){z()
}ag.render();
ab()
}function v(aC,aG){var aD,aI,aJ,aK,aH=k();
for(var aF=0;
aF<aH.length;
++aF){aD=aH[aF];
if(aD.direction==aG){aK=aG+aD.n+"axis";
if(!aC[aK]&&aD.n==1){aK=aG+"axis"
}if(aC[aK]){aI=aC[aK].from;
aJ=aC[aK].to;
break
}}}if(!aC[aK]){aD=aG=="x"?at[0]:aa[0];
aI=aC[aG+"1"];
aJ=aC[aG+"2"]
}if(aI!=null&&aJ!=null&&aI>aJ){var aE=aI;
aI=aJ;
aJ=aE
}return{from:aI,to:aJ,axis:aD}
}function s(){G.save();
G.translate(M.left,M.top);
G.fillStyle=y(O.grid.backgroundColor,ah,0,"rgba(255, 255, 255, 0)");
G.fillRect(0,0,l,ah);
G.restore()
}function z(){var aS,aR,aV,aE;
G.save();
G.translate(M.left,M.top);
var aF=O.grid.markings;
if(aF){if(e.isFunction(aF)){aR=i.getAxes();
aR.xmin=aR.xaxis.min;
aR.xmax=aR.xaxis.max;
aR.ymin=aR.yaxis.min;
aR.ymax=aR.yaxis.max;
aF=aF(aR)
}for(aS=0;
aS<aF.length;
++aS){var aP=aF[aS],aG=v(aP,"x"),aK=v(aP,"y");
if(aG.from==null){aG.from=aG.axis.min
}if(aG.to==null){aG.to=aG.axis.max
}if(aK.from==null){aK.from=aK.axis.min
}if(aK.to==null){aK.to=aK.axis.max
}if(aG.to<aG.axis.min||aG.from>aG.axis.max||aK.to<aK.axis.min||aK.from>aK.axis.max){continue
}aG.from=Math.max(aG.from,aG.axis.min);
aG.to=Math.min(aG.to,aG.axis.max);
aK.from=Math.max(aK.from,aK.axis.min);
aK.to=Math.min(aK.to,aK.axis.max);
var aH=aG.from===aG.to,aN=aK.from===aK.to;
if(aH&&aN){continue
}aG.from=Math.floor(aG.axis.p2c(aG.from));
aG.to=Math.floor(aG.axis.p2c(aG.to));
aK.from=Math.floor(aK.axis.p2c(aK.from));
aK.to=Math.floor(aK.axis.p2c(aK.to));
if(aH||aN){var aC=aP.lineWidth||O.grid.markingsLineWidth,aT=aC%2?0.5:0;
G.beginPath();
G.strokeStyle=aP.color||O.grid.markingsColor;
G.lineWidth=aC;
if(aH){G.moveTo(aG.to+aT,aK.from);
G.lineTo(aG.to+aT,aK.to)
}else{G.moveTo(aG.from,aK.to+aT);
G.lineTo(aG.to,aK.to+aT)
}G.stroke()
}else{G.fillStyle=aP.color||O.grid.markingsColor;
G.fillRect(aG.from,aK.to,aG.to-aG.from,aK.from-aK.to)
}}}aR=k();
aV=O.grid.borderWidth;
for(var aQ=0;
aQ<aR.length;
++aQ){var aD=aR[aQ],aL=aD.box,aO=aD.tickLength,aJ,aI,aU,aW;
if(!aD.show||aD.ticks.length==0){continue
}G.lineWidth=1;
if(aD.direction=="x"){aJ=0;
if(aO=="full"){aI=(aD.position=="top"?0:ah)
}else{aI=aL.top-M.top+(aD.position=="top"?aL.height:0)
}}else{aI=0;
if(aO=="full"){aJ=(aD.position=="left"?0:l)
}else{aJ=aL.left-M.left+(aD.position=="left"?aL.width:0)
}}if(!aD.innermost){G.strokeStyle=aD.options.color;
G.beginPath();
aU=aW=0;
if(aD.direction=="x"){aU=l+1
}else{aW=ah+1
}if(G.lineWidth==1){if(aD.direction=="x"){aI=Math.floor(aI)+0.5
}else{aJ=Math.floor(aJ)+0.5
}}G.moveTo(aJ,aI);
G.lineTo(aJ+aU,aI+aW);
G.stroke()
}G.strokeStyle=aD.options.tickColor;
G.beginPath();
for(aS=0;
aS<aD.ticks.length;
++aS){var aM=aD.ticks[aS].v;
aU=aW=0;
if(isNaN(aM)||aM<aD.min||aM>aD.max||(aO=="full"&&((typeof aV=="object"&&aV[aD.position]>0)||aV>0)&&(aM==aD.min||aM==aD.max))){continue
}if(aD.direction=="x"){aJ=aD.p2c(aM);
aW=aO=="full"?-ah:aO;
if(aD.position=="top"){aW=-aW
}}else{aI=aD.p2c(aM);
aU=aO=="full"?-l:aO;
if(aD.position=="left"){aU=-aU
}}if(G.lineWidth==1){if(aD.direction=="x"){aJ=Math.floor(aJ)+0.5
}else{aI=Math.floor(aI)+0.5
}}G.moveTo(aJ,aI);
G.lineTo(aJ+aU,aI+aW)
}G.stroke()
}if(aV){aE=O.grid.borderColor;
if(typeof aV=="object"||typeof aE=="object"){if(typeof aV!=="object"){aV={top:aV,right:aV,bottom:aV,left:aV}
}if(typeof aE!=="object"){aE={top:aE,right:aE,bottom:aE,left:aE}
}if(aV.top>0){G.strokeStyle=aE.top;
G.lineWidth=aV.top;
G.beginPath();
G.moveTo(0-aV.left,0-aV.top/2);
G.lineTo(l,0-aV.top/2);
G.stroke()
}if(aV.right>0){G.strokeStyle=aE.right;
G.lineWidth=aV.right;
G.beginPath();
G.moveTo(l+aV.right/2,0-aV.top);
G.lineTo(l+aV.right/2,ah);
G.stroke()
}if(aV.bottom>0){G.strokeStyle=aE.bottom;
G.lineWidth=aV.bottom;
G.beginPath();
G.moveTo(l+aV.right,ah+aV.bottom/2);
G.lineTo(0,ah+aV.bottom/2);
G.stroke()
}if(aV.left>0){G.strokeStyle=aE.left;
G.lineWidth=aV.left;
G.beginPath();
G.moveTo(0-aV.left/2,ah+aV.bottom);
G.lineTo(0-aV.left/2,0);
G.stroke()
}}else{G.lineWidth=aV;
G.strokeStyle=O.grid.borderColor;
G.strokeRect(-aV/2,-aV/2,l+aV,ah+aV)
}}G.restore()
}function ax(){e.each(k(),function(aN,aD){var aG=aD.box,aF=aD.direction+"Axis "+aD.direction+aD.n+"Axis",aJ="flot-"+aD.direction+"-axis flot-"+aD.direction+aD.n+"-axis "+aF,aC=aD.options.font||"flot-tick-label tickLabel",aH,aM,aK,aI,aL;
ag.removeText(aJ);
if(!aD.show||aD.ticks.length==0){return
}for(var aE=0;
aE<aD.ticks.length;
++aE){aH=aD.ticks[aE];
if(!aH.label||aH.v<aD.min||aH.v>aD.max){continue
}if(aD.direction=="x"){aI="center";
aM=M.left+aD.p2c(aH.v);
if(aD.position=="bottom"){aK=aG.top+aG.padding
}else{aK=aG.top+aG.height-aG.padding;
aL="bottom"
}}else{aL="middle";
aK=M.top+aD.p2c(aH.v);
if(aD.position=="left"){aM=aG.left+aG.width-aG.padding;
aI="right"
}else{aM=aG.left+aG.padding
}}ag.addText(aJ,aM,aK,aH.label,aC,null,null,aI,aL)
}})
}function an(aC){if(aC.lines.show){J(aC)
}if(aC.bars.show){X(aC)
}if(aC.points.show){Y(aC)
}}function J(aF){function aE(aQ,aR,aJ,aV,aU){var aW=aQ.points,aK=aQ.pointsize,aO=null,aN=null;
G.beginPath();
for(var aP=aK;
aP<aW.length;
aP+=aK){var aM=aW[aP-aK],aT=aW[aP-aK+1],aL=aW[aP],aS=aW[aP+1];
if(aM==null||aL==null){continue
}if(aT<=aS&&aT<aU.min){if(aS<aU.min){continue
}aM=(aU.min-aT)/(aS-aT)*(aL-aM)+aM;
aT=aU.min
}else{if(aS<=aT&&aS<aU.min){if(aT<aU.min){continue
}aL=(aU.min-aT)/(aS-aT)*(aL-aM)+aM;
aS=aU.min
}}if(aT>=aS&&aT>aU.max){if(aS>aU.max){continue
}aM=(aU.max-aT)/(aS-aT)*(aL-aM)+aM;
aT=aU.max
}else{if(aS>=aT&&aS>aU.max){if(aT>aU.max){continue
}aL=(aU.max-aT)/(aS-aT)*(aL-aM)+aM;
aS=aU.max
}}if(aM<=aL&&aM<aV.min){if(aL<aV.min){continue
}aT=(aV.min-aM)/(aL-aM)*(aS-aT)+aT;
aM=aV.min
}else{if(aL<=aM&&aL<aV.min){if(aM<aV.min){continue
}aS=(aV.min-aM)/(aL-aM)*(aS-aT)+aT;
aL=aV.min
}}if(aM>=aL&&aM>aV.max){if(aL>aV.max){continue
}aT=(aV.max-aM)/(aL-aM)*(aS-aT)+aT;
aM=aV.max
}else{if(aL>=aM&&aL>aV.max){if(aM>aV.max){continue
}aS=(aV.max-aM)/(aL-aM)*(aS-aT)+aT;
aL=aV.max
}}if(aM!=aO||aT!=aN){G.moveTo(aV.p2c(aM)+aR,aU.p2c(aT)+aJ)
}aO=aL;
aN=aS;
G.lineTo(aV.p2c(aL)+aR,aU.p2c(aS)+aJ)
}G.stroke()
}function aG(aJ,aR,aQ){var aX=aJ.points,aW=aJ.pointsize,aO=Math.min(Math.max(0,aQ.min),aQ.max),aY=0,aV,aU=false,aN=1,aM=0,aS=0;
while(true){if(aW>0&&aY>aX.length+aW){break
}aY+=aW;
var a0=aX[aY-aW],aL=aX[aY-aW+aN],aZ=aX[aY],aK=aX[aY+aN];
if(aU){if(aW>0&&a0!=null&&aZ==null){aS=aY;
aW=-aW;
aN=2;
continue
}if(aW<0&&aY==aM+aW){G.fill();
aU=false;
aW=-aW;
aN=1;
aY=aM=aS+aW;
continue
}}if(a0==null||aZ==null){continue
}if(a0<=aZ&&a0<aR.min){if(aZ<aR.min){continue
}aL=(aR.min-a0)/(aZ-a0)*(aK-aL)+aL;
a0=aR.min
}else{if(aZ<=a0&&aZ<aR.min){if(a0<aR.min){continue
}aK=(aR.min-a0)/(aZ-a0)*(aK-aL)+aL;
aZ=aR.min
}}if(a0>=aZ&&a0>aR.max){if(aZ>aR.max){continue
}aL=(aR.max-a0)/(aZ-a0)*(aK-aL)+aL;
a0=aR.max
}else{if(aZ>=a0&&aZ>aR.max){if(a0>aR.max){continue
}aK=(aR.max-a0)/(aZ-a0)*(aK-aL)+aL;
aZ=aR.max
}}if(!aU){G.beginPath();
G.moveTo(aR.p2c(a0),aQ.p2c(aO));
aU=true
}if(aL>=aQ.max&&aK>=aQ.max){G.lineTo(aR.p2c(a0),aQ.p2c(aQ.max));
G.lineTo(aR.p2c(aZ),aQ.p2c(aQ.max));
continue
}else{if(aL<=aQ.min&&aK<=aQ.min){G.lineTo(aR.p2c(a0),aQ.p2c(aQ.min));
G.lineTo(aR.p2c(aZ),aQ.p2c(aQ.min));
continue
}}var aP=a0,aT=aZ;
if(aL<=aK&&aL<aQ.min&&aK>=aQ.min){a0=(aQ.min-aL)/(aK-aL)*(aZ-a0)+a0;
aL=aQ.min
}else{if(aK<=aL&&aK<aQ.min&&aL>=aQ.min){aZ=(aQ.min-aL)/(aK-aL)*(aZ-a0)+a0;
aK=aQ.min
}}if(aL>=aK&&aL>aQ.max&&aK<=aQ.max){a0=(aQ.max-aL)/(aK-aL)*(aZ-a0)+a0;
aL=aQ.max
}else{if(aK>=aL&&aK>aQ.max&&aL<=aQ.max){aZ=(aQ.max-aL)/(aK-aL)*(aZ-a0)+a0;
aK=aQ.max
}}if(a0!=aP){G.lineTo(aR.p2c(aP),aQ.p2c(aL))
}G.lineTo(aR.p2c(a0),aQ.p2c(aL));
G.lineTo(aR.p2c(aZ),aQ.p2c(aK));
if(aZ!=aT){G.lineTo(aR.p2c(aZ),aQ.p2c(aK));
G.lineTo(aR.p2c(aT),aQ.p2c(aK))
}}}G.save();
G.translate(M.left,M.top);
G.lineJoin="round";
var aH=aF.lines.lineWidth,aC=aF.shadowSize;
if(aH>0&&aC>0){G.lineWidth=aC;
G.strokeStyle="rgba(0,0,0,0.1)";
var aI=Math.PI/18;
aE(aF.datapoints,Math.sin(aI)*(aH/2+aC/2),Math.cos(aI)*(aH/2+aC/2),aF.xaxis,aF.yaxis);
G.lineWidth=aC/2;
aE(aF.datapoints,Math.sin(aI)*(aH/2+aC/4),Math.cos(aI)*(aH/2+aC/4),aF.xaxis,aF.yaxis)
}G.lineWidth=aH;
G.strokeStyle=aF.color;
var aD=C(aF.lines,aF.color,0,ah);
if(aD){G.fillStyle=aD;
aG(aF.datapoints,aF.xaxis,aF.yaxis)
}if(aH>0){aE(aF.datapoints,0,0,aF.xaxis,aF.yaxis)
}G.restore()
}function Y(aF){function aI(aO,aN,aV,aL,aT,aU,aR,aK){var aS=aO.points,aJ=aO.pointsize;
for(var aM=0;
aM<aS.length;
aM+=aJ){var aQ=aS[aM],aP=aS[aM+1];
if(aQ==null||aQ<aU.min||aQ>aU.max||aP<aR.min||aP>aR.max){continue
}G.beginPath();
aQ=aU.p2c(aQ);
aP=aR.p2c(aP)+aL;
if(aK=="circle"){G.arc(aQ,aP,aN,0,aT?Math.PI:Math.PI*2,false)
}else{aK(G,aQ,aP,aN,aT)
}G.closePath();
if(aV){G.fillStyle=aV;
G.fill()
}G.stroke()
}}G.save();
G.translate(M.left,M.top);
var aH=aF.points.lineWidth,aD=aF.shadowSize,aC=aF.points.radius,aG=aF.points.symbol;
if(aH==0){aH=0.0001
}if(aH>0&&aD>0){var aE=aD/2;
G.lineWidth=aE;
G.strokeStyle="rgba(0,0,0,0.1)";
aI(aF.datapoints,aC,null,aE+aE/2,true,aF.xaxis,aF.yaxis,aG);
G.strokeStyle="rgba(0,0,0,0.2)";
aI(aF.datapoints,aC,null,aE/2,true,aF.xaxis,aF.yaxis,aG)
}G.lineWidth=aH;
G.strokeStyle=aF.color;
aI(aF.datapoints,aC,C(aF.points,aF.color),0,false,aF.xaxis,aF.yaxis,aG);
G.restore()
}function ao(aN,aM,aV,aI,aQ,aE,aL,aK,aU,aR,aD){var aF,aT,aJ,aP,aG,aC,aO,aH,aS;
if(aR){aH=aC=aO=true;
aG=false;
aF=aV;
aT=aN;
aP=aM+aI;
aJ=aM+aQ;
if(aT<aF){aS=aT;
aT=aF;
aF=aS;
aG=true;
aC=false
}}else{aG=aC=aO=true;
aH=false;
aF=aN+aI;
aT=aN+aQ;
aJ=aV;
aP=aM;
if(aP<aJ){aS=aP;
aP=aJ;
aJ=aS;
aH=true;
aO=false
}}if(aT<aL.min||aF>aL.max||aP<aK.min||aJ>aK.max){return
}if(aF<aL.min){aF=aL.min;
aG=false
}if(aT>aL.max){aT=aL.max;
aC=false
}if(aJ<aK.min){aJ=aK.min;
aH=false
}if(aP>aK.max){aP=aK.max;
aO=false
}aF=aL.p2c(aF);
aJ=aK.p2c(aJ);
aT=aL.p2c(aT);
aP=aK.p2c(aP);
if(aE){aU.fillStyle=aE(aJ,aP);
aU.fillRect(aF,aP,aT-aF,aJ-aP)
}if(aD>0&&(aG||aC||aO||aH)){aU.beginPath();
aU.moveTo(aF,aJ);
if(aG){aU.lineTo(aF,aP)
}else{aU.moveTo(aF,aP)
}if(aO){aU.lineTo(aT,aP)
}else{aU.moveTo(aT,aP)
}if(aC){aU.lineTo(aT,aJ)
}else{aU.moveTo(aT,aJ)
}if(aH){aU.lineTo(aF,aJ)
}else{aU.moveTo(aF,aJ)
}aU.stroke()
}}function X(aE){function aD(aJ,aI,aL,aK,aN,aM){var aO=aJ.points,aG=aJ.pointsize;
for(var aH=0;
aH<aO.length;
aH+=aG){if(aO[aH]==null){continue
}ao(aO[aH],aO[aH+1],aO[aH+2],aI,aL,aK,aN,aM,G,aE.bars.horizontal,aE.bars.lineWidth)
}}G.save();
G.translate(M.left,M.top);
G.lineWidth=aE.bars.lineWidth;
G.strokeStyle=aE.color;
var aC;
switch(aE.bars.align){case"left":aC=0;
break;
case"right":aC=-aE.bars.barWidth;
break;
default:aC=-aE.bars.barWidth/2
}var aF=aE.bars.fill?function(aG,aH){return C(aE.bars,aE.color,aG,aH)
}:null;
aD(aE.datapoints,aC,aC+aE.bars.barWidth,aF,aE.xaxis,aE.yaxis);
G.restore()
}function C(aE,aC,aD,aG){var aF=aE.fill;
if(!aF){return null
}if(aE.fillColor){return y(aE.fillColor,aD,aG,aC)
}var aH=e.color.parse(aC);
aH.a=typeof aF=="number"?aF:0.4;
aH.normalize();
return aH.toString()
}function az(){if(O.legend.container!=null){e(O.legend.container).html("")
}else{T.find(".legend").remove()
}if(!O.legend.show){return
}var aK=[],aH=[],aI=false,aR=O.legend.labelFormatter,aQ,aM;
for(var aG=0;
aG<w.length;
++aG){aQ=w[aG];
if(aQ.label){aM=aR?aR(aQ.label,aQ):aQ.label;
if(aM){aH.push({label:aM,color:aQ.color})
}}}if(O.legend.sorted){if(e.isFunction(O.legend.sorted)){aH.sort(O.legend.sorted)
}else{if(O.legend.sorted=="reverse"){aH.reverse()
}else{var aF=O.legend.sorted!="descending";
aH.sort(function(aT,aS){return aT.label==aS.label?0:((aT.label<aS.label)!=aF?1:-1)
})
}}}for(var aG=0;
aG<aH.length;
++aG){var aO=aH[aG];
if(aG%O.legend.noColumns==0){if(aI){aK.push("</tr>")
}aK.push("<tr>");
aI=true
}aK.push('<td class="legendColorBox"><div style="border:1px solid '+O.legend.labelBoxBorderColor+';padding:1px"><div style="width:4px;height:0;border:5px solid '+aO.color+';overflow:hidden"></div></div></td><td class="legendLabel">'+aO.label+"</td>")
}if(aI){aK.push("</tr>")
}if(aK.length==0){return
}var aP='<table style="font-size:smaller;color:'+O.grid.color+'">'+aK.join("")+"</table>";
if(O.legend.container!=null){e(O.legend.container).html(aP)
}else{var aL="",aD=O.legend.position,aE=O.legend.margin;
if(aE[0]==null){aE=[aE,aE]
}if(aD.charAt(0)=="n"){aL+="top:"+(aE[1]+M.top)+"px;"
}else{if(aD.charAt(0)=="s"){aL+="bottom:"+(aE[1]+M.bottom)+"px;"
}}if(aD.charAt(1)=="e"){aL+="right:"+(aE[0]+M.right)+"px;"
}else{if(aD.charAt(1)=="w"){aL+="left:"+(aE[0]+M.left)+"px;"
}}var aN=e('<div class="legend">'+aP.replace('style="','style="position:absolute;'+aL+";")+"</div>").appendTo(T);
if(O.legend.backgroundOpacity!=0){var aJ=O.legend.backgroundColor;
if(aJ==null){aJ=O.grid.backgroundColor;
if(aJ&&typeof aJ=="string"){aJ=e.color.parse(aJ)
}else{aJ=e.color.extract(aN,"background-color")
}aJ.a=1;
aJ=aJ.toString()
}var aC=aN.children();
e('<div style="position:absolute;width:'+aC.width()+"px;height:"+aC.height()+"px;"+aL+"background-color:"+aJ+';"> </div>').prependTo(aN).css("opacity",O.legend.backgroundOpacity)
}}}var ak=[],m=null;
function au(aJ,aH,aE){var aP=O.grid.mouseActiveRadius,a1=aP*aP+1,aZ=null,aS=false,aX,aV,aU;
for(aX=w.length-1;
aX>=0;
--aX){if(!aE(w[aX])){continue
}var aQ=w[aX],aI=aQ.xaxis,aG=aQ.yaxis,aW=aQ.datapoints.points,aR=aI.c2p(aJ),aO=aG.c2p(aH),aD=aP/aI.scale,aC=aP/aG.scale;
aU=aQ.datapoints.pointsize;
if(aI.options.inverseTransform){aD=Number.MAX_VALUE
}if(aG.options.inverseTransform){aC=Number.MAX_VALUE
}if(aQ.lines.show||aQ.points.show){for(aV=0;
aV<aW.length;
aV+=aU){var aL=aW[aV],aK=aW[aV+1];
if(aL==null){continue
}if(aL-aR>aD||aL-aR<-aD||aK-aO>aC||aK-aO<-aC){continue
}var aN=Math.abs(aI.p2c(aL)-aJ),aM=Math.abs(aG.p2c(aK)-aH),aT=aN*aN+aM*aM;
if(aT<a1){a1=aT;
aZ=[aX,aV/aU]
}}}if(aQ.bars.show&&!aZ){var aF,aY;
switch(aQ.bars.align){case"left":aF=0;
break;
case"right":aF=-aQ.bars.barWidth;
break;
default:aF=-aQ.bars.barWidth/2
}aY=aF+aQ.bars.barWidth;
for(aV=0;
aV<aW.length;
aV+=aU){var aL=aW[aV],aK=aW[aV+1],a0=aW[aV+2];
if(aL==null){continue
}if(w[aX].bars.horizontal?(aR<=Math.max(a0,aL)&&aR>=Math.min(a0,aL)&&aO>=aK+aF&&aO<=aK+aY):(aR>=aL+aF&&aR<=aL+aY&&aO>=Math.min(a0,aK)&&aO<=Math.max(a0,aK))){aZ=[aX,aV/aU]
}}}}if(aZ){aX=aZ[0];
aV=aZ[1];
aU=w[aX].datapoints.pointsize;
return{datapoint:w[aX].datapoints.points.slice(aV*aU,(aV+1)*aU),dataIndex:aV,series:w[aX],seriesIndex:aX}
}return null
}function f(aC){if(O.grid.hoverable){j("plothover",aC,function(aD){return aD.hoverable!=false
})
}}function S(aC){if(O.grid.hoverable){j("plothover",aC,function(aD){return false
})
}}function L(aC){j("plotclick",aC,function(aD){return aD.clickable!=false
})
}function j(aD,aC,aE){var aF=aq.offset(),aI=aC.pageX-aF.left-M.left,aG=aC.pageY-aF.top-M.top,aK=ac({left:aI,top:aG});
aK.pageX=aC.pageX;
aK.pageY=aC.pageY;
var aL=au(aI,aG,aE);
if(aL){aL.pageX=parseInt(aL.series.xaxis.p2c(aL.datapoint[0])+aF.left+M.left,10);
aL.pageY=parseInt(aL.series.yaxis.p2c(aL.datapoint[1])+aF.top+M.top,10)
}if(O.grid.autoHighlight){for(var aH=0;
aH<ak.length;
++aH){var aJ=ak[aH];
if(aJ.auto==aD&&!(aL&&aJ.series==aL.series&&aJ.point[0]==aL.datapoint[0]&&aJ.point[1]==aL.datapoint[1])){al(aJ.series,aJ.point)
}}if(aL){ar(aL.series,aL.datapoint,aD)
}}T.trigger(aD,[aK,aL])
}function ab(){var aC=O.interaction.redrawOverlayInterval;
if(aC==-1){aj();
return
}if(!m){m=setTimeout(aj,aC)
}}function aj(){m=null;
aA.save();
ap.clear();
aA.translate(M.left,M.top);
var aD,aC;
for(aD=0;
aD<ak.length;
++aD){aC=ak[aD];
if(aC.series.bars.show){am(aC.series,aC.point)
}else{ai(aC.series,aC.point)
}}aA.restore();
I(q.drawOverlay,[aA])
}function ar(aE,aC,aG){if(typeof aE=="number"){aE=w[aE]
}if(typeof aC=="number"){var aF=aE.datapoints.pointsize;
aC=aE.datapoints.points.slice(aF*aC,aF*(aC+1))
}var aD=Q(aE,aC);
if(aD==-1){ak.push({series:aE,point:aC,auto:aG});
ab()
}else{if(!aG){ak[aD].auto=false
}}}function al(aE,aC){if(aE==null&&aC==null){ak=[];
ab();
return
}if(typeof aE=="number"){aE=w[aE]
}if(typeof aC=="number"){var aF=aE.datapoints.pointsize;
aC=aE.datapoints.points.slice(aF*aC,aF*(aC+1))
}var aD=Q(aE,aC);
if(aD!=-1){ak.splice(aD,1);
ab()
}}function Q(aE,aF){for(var aC=0;
aC<ak.length;
++aC){var aD=ak[aC];
if(aD.series==aE&&aD.point[0]==aF[0]&&aD.point[1]==aF[1]){return aC
}}return -1
}function ai(aC,aI){var aG=aI[0],aE=aI[1],aJ=aC.xaxis,aH=aC.yaxis,aK=(typeof aC.highlightColor==="string")?aC.highlightColor:e.color.parse(aC.color).scale("a",0.5).toString();
if(aG<aJ.min||aG>aJ.max||aE<aH.min||aE>aH.max){return
}var aF=aC.points.radius+aC.points.lineWidth/2;
aA.lineWidth=aF;
aA.strokeStyle=aK;
var aD=1.5*aF;
aG=aJ.p2c(aG);
aE=aH.p2c(aE);
aA.beginPath();
if(aC.points.symbol=="circle"){aA.arc(aG,aE,aD,0,2*Math.PI,false)
}else{aC.points.symbol(aA,aG,aE,aD,false)
}aA.closePath();
aA.stroke()
}function am(aF,aC){var aG=(typeof aF.highlightColor==="string")?aF.highlightColor:e.color.parse(aF.color).scale("a",0.5).toString(),aE=aG,aD;
switch(aF.bars.align){case"left":aD=0;
break;
case"right":aD=-aF.bars.barWidth;
break;
default:aD=-aF.bars.barWidth/2
}aA.lineWidth=aF.bars.lineWidth;
aA.strokeStyle=aG;
ao(aC[0],aC[1],aC[2]||0,aD,aD+aF.bars.barWidth,function(){return aE
},aF.xaxis,aF.yaxis,aA,aF.bars.horizontal,aF.bars.lineWidth)
}function y(aK,aC,aI,aD){if(typeof aK=="string"){return aK
}else{var aJ=G.createLinearGradient(0,aI,0,aC);
for(var aF=0,aE=aK.colors.length;
aF<aE;
++aF){var aG=aK.colors[aF];
if(typeof aG!="string"){var aH=e.color.parse(aD);
if(aG.brightness!=null){aH=aH.scale("rgb",aG.brightness)
}if(aG.opacity!=null){aH.a*=aG.opacity
}aG=aH.toString()
}aJ.addColorStop(aF/(aE-1),aG)
}return aJ
}}}e.plot=function(j,h,f){var i=new c(e(j),h,f,e.plot.plugins);
return i
};
e.plot.version="0.8.3";
e.plot.plugins=[];
e.fn.plot=function(h,f){return this.each(function(){e.plot(this,h,f)
})
};
function b(h,f){return f*Math.floor(h/f)
}})(jQuery);
JSManager.setLoaded(200,"vendors/flot.js");
(function(a){var l={xaxis:{timezone:null,timeformat:null,twelveHourClock:false,monthNames:null}};
function h(o,m){return m*Math.floor(o/m)
}function k(w,o,s,n){if(typeof w.strftime=="function"){return w.strftime(o)
}var z=function(B,r){B=""+B;
r=""+(r==null?"0":r);
return B.length==1?r+B:B
};
var m=[];
var A=false;
var y=w.getHours();
var v=y<12;
if(s==null){s=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]
}if(n==null){n=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"]
}var p;
if(y>12){p=y-12
}else{if(y==0){p=12
}else{p=y
}}for(var q=0;
q<o.length;
++q){var x=o.charAt(q);
if(A){switch(x){case"a":x=""+n[w.getDay()];
break;
case"b":x=""+s[w.getMonth()];
break;
case"d":x=z(w.getDate());
break;
case"e":x=z(w.getDate()," ");
break;
case"h":case"H":x=z(y);
break;
case"I":x=z(p);
break;
case"l":x=z(p," ");
break;
case"m":x=z(w.getMonth()+1);
break;
case"M":x=z(w.getMinutes());
break;
case"q":x=""+(Math.floor(w.getMonth()/3)+1);
break;
case"S":x=z(w.getSeconds());
break;
case"y":x=z(w.getFullYear()%100);
break;
case"Y":x=""+w.getFullYear();
break;
case"p":x=(v)?("am"):("pm");
break;
case"P":x=(v)?("AM"):("PM");
break;
case"w":x=""+w.getDay();
break
}m.push(x);
A=false
}else{if(x=="%"){A=true
}else{m.push(x)
}}}return m.join("")
}function j(r){function m(v,s,p,w){v[s]=function(){return p[w].apply(p,arguments)
}
}var o={date:r};
if(r.strftime!=undefined){m(o,"strftime",r,"strftime")
}m(o,"getTime",r,"getTime");
m(o,"setTime",r,"setTime");
var n=["Date","Day","FullYear","Hours","Milliseconds","Minutes","Month","Seconds"];
for(var q=0;
q<n.length;
q++){m(o,"get"+n[q],r,"getUTC"+n[q]);
m(o,"set"+n[q],r,"setUTC"+n[q])
}return o
}function e(n,m){if(m.timezone=="browser"){return new Date(n)
}else{if(!m.timezone||m.timezone=="utc"){return j(new Date(n))
}else{if(typeof timezoneJS!="undefined"&&typeof timezoneJS.Date!="undefined"){var o=new timezoneJS.Date();
o.setTimezone(m.timezone);
o.setTime(n);
return o
}else{return j(new Date(n))
}}}}var c={second:1000,minute:60*1000,hour:60*60*1000,day:24*60*60*1000,month:30*24*60*60*1000,quarter:3*30*24*60*60*1000,year:365.2425*24*60*60*1000};
var f=[[1,"second"],[2,"second"],[5,"second"],[10,"second"],[30,"second"],[1,"minute"],[2,"minute"],[5,"minute"],[10,"minute"],[30,"minute"],[1,"hour"],[2,"hour"],[4,"hour"],[8,"hour"],[12,"hour"],[1,"day"],[2,"day"],[3,"day"],[0.25,"month"],[0.5,"month"],[1,"month"],[2,"month"]];
var b=f.concat([[3,"month"],[6,"month"],[1,"year"]]);
var d=f.concat([[1,"quarter"],[2,"quarter"],[1,"year"]]);
function i(m){m.hooks.processOptions.push(function(o,n){a.each(o.getAxes(),function(r,p){var q=p.options;
if(q.mode=="time"){p.tickGenerator=function(A){var G=[];
var F=e(A.min,q);
var y=0;
var J=(q.tickSize&&q.tickSize[1]==="quarter")||(q.minTickSize&&q.minTickSize[1]==="quarter")?d:b;
if(q.minTickSize!=null){if(typeof q.tickSize=="number"){y=q.tickSize
}else{y=q.minTickSize[0]*c[q.minTickSize[1]]
}}for(var E=0;
E<J.length-1;
++E){if(A.delta<(J[E][0]*c[J[E][1]]+J[E+1][0]*c[J[E+1][1]])/2&&J[E][0]*c[J[E][1]]>=y){break
}}var L=J[E][0];
var H=J[E][1];
if(H=="year"){if(q.minTickSize!=null&&q.minTickSize[1]=="year"){L=Math.floor(q.minTickSize[0])
}else{var w=Math.pow(10,Math.floor(Math.log(A.delta/c.year)/Math.LN10));
var s=(A.delta/c.year)/w;
if(s<1.5){L=1
}else{if(s<3){L=2
}else{if(s<7.5){L=5
}else{L=10
}}}L*=w
}if(L<1){L=1
}}A.tickSize=q.tickSize||[L,H];
var D=A.tickSize[0];
H=A.tickSize[1];
var z=D*c[H];
if(H=="second"){F.setSeconds(h(F.getSeconds(),D))
}else{if(H=="minute"){F.setMinutes(h(F.getMinutes(),D))
}else{if(H=="hour"){F.setHours(h(F.getHours(),D))
}else{if(H=="month"){F.setMonth(h(F.getMonth(),D))
}else{if(H=="quarter"){F.setMonth(3*h(F.getMonth()/3,D))
}else{if(H=="year"){F.setFullYear(h(F.getFullYear(),D))
}}}}}}F.setMilliseconds(0);
if(z>=c.minute){F.setSeconds(0)
}if(z>=c.hour){F.setMinutes(0)
}if(z>=c.day){F.setHours(0)
}if(z>=c.day*4){F.setDate(1)
}if(z>=c.month*2){F.setMonth(h(F.getMonth(),3))
}if(z>=c.quarter*2){F.setMonth(h(F.getMonth(),6))
}if(z>=c.year){F.setMonth(0)
}var K=0;
var I=Number.NaN;
var B;
do{B=I;
I=F.getTime();
G.push(I);
if(H=="month"||H=="quarter"){if(D<1){F.setDate(1);
var x=F.getTime();
F.setMonth(F.getMonth()+(H=="quarter"?3:1));
var C=F.getTime();
F.setTime(I+K*c.hour+(C-x)*D);
K=F.getHours();
F.setHours(0)
}else{F.setMonth(F.getMonth()+D*(H=="quarter"?3:1))
}}else{if(H=="year"){F.setFullYear(F.getFullYear()+D)
}else{F.setTime(I+z)
}}}while(I<A.max&&I!=B);
return G
};
p.tickFormatter=function(A,w){var y=e(A,w.options);
if(q.timeformat!=null){return k(y,q.timeformat,q.monthNames,q.dayNames)
}var E=(w.options.tickSize&&w.options.tickSize[1]=="quarter")||(w.options.minTickSize&&w.options.minTickSize[1]=="quarter");
var D=w.tickSize[0]*c[w.tickSize[1]];
var z=w.max-w.min;
var C=(q.twelveHourClock)?" %p":"";
var B=(q.twelveHourClock)?"%I":"%H";
var s;
if(D<c.minute){s=B+":%M:%S"+C
}else{if(D<c.day){if(z<2*c.day){s=B+":%M"+C
}else{s="%b %d "+B+":%M"+C
}}else{if(D<c.month){s="%b %d"
}else{if((E&&D<c.quarter)||(!E&&D<c.year)){if(z<c.year){s="%b"
}else{s="%b %Y"
}}else{if(E&&D<c.year){if(z<c.year){s="Q%q"
}else{s="Q%q %Y"
}}else{s="%Y"
}}}}}var x=k(y,s,q.monthNames,q.dayNames);
return x
}
}})
})
}a.plot.plugins.push({init:i,options:l,name:"time",version:"1.0"});
a.plot.formatDate=k;
a.plot.dateGenerator=e
})(jQuery);
JSManager.setLoaded(199,"vendors/flot.time.js");
(function(c){var e=10;
var a=0.95;
function d(z){var i=null,E=null,j=null,o=null,w=null,p=null,f=false,y=null;
var k=[];
z.hooks.processOptions.push(function(G,F){if(F.series.pie.show){F.grid.show=false;
if(F.series.pie.label.show=="auto"){if(F.legend.show){F.series.pie.label.show=false
}else{F.series.pie.label.show=true
}}if(F.series.pie.radius=="auto"){if(F.series.pie.label.show){F.series.pie.radius=3/4
}else{F.series.pie.radius=1
}}if(F.series.pie.tilt>1){F.series.pie.tilt=1
}else{if(F.series.pie.tilt<0){F.series.pie.tilt=0
}}}});
z.hooks.bindEvents.push(function(H,F){var G=H.getOptions();
if(G.series.pie.show){if(G.grid.hoverable){F.unbind("mousemove").mousemove(v)
}if(G.grid.clickable){F.unbind("click").click(m)
}}});
z.hooks.processDatapoints.push(function(J,G,H,I){var F=J.getOptions();
if(F.series.pie.show){A(J,G,H,I)
}});
z.hooks.drawOverlay.push(function(G,H){var F=G.getOptions();
if(F.series.pie.show){B(G,H)
}});
z.hooks.draw.push(function(H,G){var F=H.getOptions();
if(F.series.pie.show){q(H,G)
}});
function A(H,F,G){if(!f){f=true;
i=H.getCanvas();
E=c(i).parent();
j=H.getOptions();
H.setData(D(H.getData()))
}}function D(K){var I=0,H=0,M=0,F=j.series.pie.combine.color,L=[];
for(var G=0;
G<K.length;
++G){var J=K[G].data;
if(c.isArray(J)&&J.length==1){J=J[0]
}if(c.isArray(J)){if(!isNaN(parseFloat(J[1]))&&isFinite(J[1])){J[1]=+J[1]
}else{J[1]=0
}}else{if(!isNaN(parseFloat(J))&&isFinite(J)){J=[1,+J]
}else{J=[1,0]
}}K[G].data=[J]
}for(var G=0;
G<K.length;
++G){I+=K[G].data[0][1]
}for(var G=0;
G<K.length;
++G){var J=K[G].data[0][1];
if(J/I<=j.series.pie.combine.threshold){H+=J;
M++;
if(!F){F=K[G].color
}}}for(var G=0;
G<K.length;
++G){var J=K[G].data[0][1];
if(M<2||J/I>j.series.pie.combine.threshold){L.push(c.extend(K[G],{data:[[1,J]],color:K[G].color,label:K[G].label,angle:J*Math.PI*2/I,percent:J/(I/100)}))
}}if(M>1){L.push({data:[[1,H]],color:F,label:j.series.pie.combine.label,angle:H*Math.PI*2/I,percent:H/(I/100)})
}return L
}function q(K,N){if(!E){return
}var G=K.getPlaceholder().width(),I=K.getPlaceholder().height(),M=E.children().filter(".legend").children().width()||0;
y=N;
f=false;
o=Math.min(G,I/j.series.pie.tilt)/2;
p=I/2+j.series.pie.offset.top;
w=G/2;
if(j.series.pie.offset.left=="auto"){if(j.legend.position.match("w")){w+=M/2
}else{w-=M/2
}if(w<o){w=o
}else{if(w>G-o){w=G-o
}}}else{w+=j.series.pie.offset.left
}var L=K.getData(),O=0;
do{if(O>0){o*=a
}O+=1;
J();
if(j.series.pie.tilt<=0.8){H()
}}while(!F()&&O<e);
if(O>=e){J();
E.prepend("<div class='error'>Could not draw pie with labels contained inside canvas</div>")
}if(K.setSeries&&K.insertLegend){K.setSeries(L);
K.insertLegend()
}function J(){y.clearRect(0,0,G,I);
E.children().filter(".pieLabel, .pieLabelBackground").remove()
}function H(){var U=j.series.pie.shadow.left;
var T=j.series.pie.shadow.top;
var R=10;
var S=j.series.pie.shadow.alpha;
var P=j.series.pie.radius>1?j.series.pie.radius:o*j.series.pie.radius;
if(P>=G/2-U||P*j.series.pie.tilt>=I/2-T||P<=R){return
}y.save();
y.translate(U,T);
y.globalAlpha=S;
y.fillStyle="#000";
y.translate(w,p);
y.scale(1,j.series.pie.tilt);
for(var Q=1;
Q<=R;
Q++){y.beginPath();
y.arc(0,0,P,0,Math.PI*2,false);
y.fill();
P-=Q
}y.restore()
}function F(){var S=Math.PI*j.series.pie.startAngle;
var P=j.series.pie.radius>1?j.series.pie.radius:o*j.series.pie.radius;
y.save();
y.translate(w,p);
y.scale(1,j.series.pie.tilt);
y.save();
var U=S;
for(var R=0;
R<L.length;
++R){L[R].startAngle=U;
T(L[R].angle,L[R].color,true)
}y.restore();
if(j.series.pie.stroke.width>0){y.save();
y.lineWidth=j.series.pie.stroke.width;
U=S;
for(var R=0;
R<L.length;
++R){T(L[R].angle,j.series.pie.stroke.color,false)
}y.restore()
}C(y);
y.restore();
if(j.series.pie.label.show){return Q()
}else{return true
}function T(Y,V,X){if(Y<=0||isNaN(Y)){return
}if(X){y.fillStyle=V
}else{y.strokeStyle=V;
y.lineJoin="round"
}y.beginPath();
if(Math.abs(Y-Math.PI*2)>1e-9){y.moveTo(0,0)
}y.arc(0,0,P,U,U+Y/2,false);
y.arc(0,0,P,U+Y/2,U+Y,false);
y.closePath();
U+=Y;
if(X){y.fill()
}else{y.stroke()
}}function Q(){var Z=S;
var V=j.series.pie.label.radius>1?j.series.pie.label.radius:o*j.series.pie.label.radius;
for(var Y=0;
Y<L.length;
++Y){if(L[Y].percent>=j.series.pie.label.threshold*100){if(!X(L[Y],Z,Y)){return false
}}Z+=L[Y].angle
}return true;
function X(am,af,ad){if(am.data[0][1]==0){return true
}var ao=j.legend.labelFormatter,an,ab=j.series.pie.label.formatter;
if(ao){an=ao(am.label,am)
}else{an=am.label
}if(ab){an=ab(an,am)
}var ag=((af+am.angle)+af)/2;
var al=w+Math.round(Math.cos(ag)*V);
var aj=p+Math.round(Math.sin(ag)*V)*j.series.pie.tilt;
var ac="<span class='pieLabel' id='pieLabel"+ad+"' style='position:absolute;top:"+aj+"px;left:"+al+"px;'>"+an+"</span>";
E.append(ac);
var ak=E.children("#pieLabel"+ad);
var aa=(aj-ak.height()/2);
var ae=(al-ak.width()/2);
ak.css("top",aa);
ak.css("left",ae);
if(0-aa>0||0-ae>0||I-(aa+ak.height())<0||G-(ae+ak.width())<0){return false
}if(j.series.pie.label.background.opacity!=0){var ah=j.series.pie.label.background.color;
if(ah==null){ah=am.color
}var ai="top:"+aa+"px;left:"+ae+"px;";
c("<div class='pieLabelBackground' style='position:absolute;width:"+ak.width()+"px;height:"+ak.height()+"px;"+ai+"background-color:"+ah+";'></div>").css("opacity",j.series.pie.label.background.opacity).insertBefore(ak)
}return true
}}}}function C(F){if(j.series.pie.innerRadius>0){F.save();
var G=j.series.pie.innerRadius>1?j.series.pie.innerRadius:o*j.series.pie.innerRadius;
F.globalCompositeOperation="destination-out";
F.beginPath();
F.fillStyle=j.series.pie.stroke.color;
F.arc(0,0,G,0,Math.PI*2,false);
F.fill();
F.closePath();
F.restore();
F.save();
F.beginPath();
F.strokeStyle=j.series.pie.stroke.color;
F.arc(0,0,G,0,Math.PI*2,false);
F.stroke();
F.closePath();
F.restore()
}}function r(I,J){for(var K=false,H=-1,F=I.length,G=F-1;
++H<F;
G=H){((I[H][1]<=J[1]&&J[1]<I[G][1])||(I[G][1]<=J[1]&&J[1]<I[H][1]))&&(J[0]<(I[G][0]-I[H][0])*(J[1]-I[H][1])/(I[G][1]-I[H][1])+I[H][0])&&(K=!K)
}return K
}function s(N,M){var H=z.getData(),K=z.getOptions(),L=K.series.pie.radius>1?K.series.pie.radius:o*K.series.pie.radius,Q,O;
for(var Y=0;
Y<H.length;
++Y){var T=H[Y];
if(T.pie.show){y.save();
y.beginPath();
y.moveTo(0,0);
y.arc(0,0,L,T.startAngle,T.startAngle+T.angle/2,false);
y.arc(0,0,L,T.startAngle+T.angle/2,T.startAngle+T.angle,false);
y.closePath();
Q=N-w;
O=M-p;
if(y.isPointInPath){if(y.isPointInPath(N-w,M-p)){y.restore();
return{datapoint:[T.percent,T.data],dataIndex:0,series:T,seriesIndex:Y}
}}else{var X=L*Math.cos(T.startAngle),V=L*Math.sin(T.startAngle),I=L*Math.cos(T.startAngle+T.angle/4),F=L*Math.sin(T.startAngle+T.angle/4),R=L*Math.cos(T.startAngle+T.angle/2),P=L*Math.sin(T.startAngle+T.angle/2),aa=L*Math.cos(T.startAngle+T.angle/1.5),Z=L*Math.sin(T.startAngle+T.angle/1.5),J=L*Math.cos(T.startAngle+T.angle),G=L*Math.sin(T.startAngle+T.angle),U=[[0,0],[X,V],[I,F],[R,P],[aa,Z],[J,G]],S=[Q,O];
if(r(U,S)){y.restore();
return{datapoint:[T.percent,T.data],dataIndex:0,series:T,seriesIndex:Y}
}}y.restore()
}}return null
}function v(F){n("plothover",F)
}function m(F){n("plotclick",F)
}function n(F,L){var G=z.offset();
var J=parseInt(L.pageX-G.left);
var H=parseInt(L.pageY-G.top);
var N=s(J,H);
if(j.grid.autoHighlight){for(var I=0;
I<k.length;
++I){var K=k[I];
if(K.auto==F&&!(N&&K.series==N.series)){h(K.series)
}}}if(N){l(N.series,F)
}var M={pageX:L.pageX,pageY:L.pageY};
E.trigger(F,[M,N])
}function l(G,H){var F=x(G);
if(F==-1){k.push({series:G,auto:H});
z.triggerRedrawOverlay()
}else{if(!H){k[F].auto=false
}}}function h(G){if(G==null){k=[];
z.triggerRedrawOverlay()
}var F=x(G);
if(F!=-1){k.splice(F,1);
z.triggerRedrawOverlay()
}}function x(H){for(var F=0;
F<k.length;
++F){var G=k[F];
if(G.series==H){return F
}}return -1
}function B(J,K){var H=J.getOptions();
var F=H.series.pie.radius>1?H.series.pie.radius:o*H.series.pie.radius;
K.save();
K.translate(w,p);
K.scale(1,H.series.pie.tilt);
for(var I=0;
I<k.length;
++I){G(k[I].series)
}C(K);
K.restore();
function G(L){if(L.angle<=0||isNaN(L.angle)){return
}K.fillStyle="rgba(255, 255, 255, "+H.series.pie.highlight.opacity+")";
K.beginPath();
if(Math.abs(L.angle-Math.PI*2)>1e-9){K.moveTo(0,0)
}K.arc(0,0,F,L.startAngle,L.startAngle+L.angle/2,false);
K.arc(0,0,F,L.startAngle+L.angle/2,L.startAngle+L.angle,false);
K.closePath();
K.fill()
}}}var b={series:{pie:{show:false,radius:"auto",innerRadius:0,startAngle:3/2,tilt:1,shadow:{left:5,top:15,alpha:0.02},offset:{top:0,left:"auto"},stroke:{color:"#fff",width:1},label:{show:"auto",formatter:function(f,h){return"<div style='font-size:x-small;text-align:center;padding:2px;color:"+h.color+";'>"+f+"<br/>"+Math.round(h.percent)+"%</div>"
},radius:1,background:{color:null,opacity:0},threshold:0},combine:{threshold:-1,color:null,label:"Other"},highlight:{opacity:0.5}}}};
c.plot.plugins.push({init:d,options:b,name:"pie",version:"1.1"})
})(jQuery);
JSManager.setLoaded(213,"vendors/flot.pie.js");
(function(b){var a={crosshair:{mode:null,color:"rgba(170, 0, 0, 0.80)",lineWidth:1}};
function c(i){var k={x:-1,y:-1,locked:false};
i.setCrosshair=function e(m){if(!m){k.x=-1
}else{var l=i.p2c(m);
k.x=Math.max(0,Math.min(l.left,i.width()));
k.y=Math.max(0,Math.min(l.top,i.height()))
}i.triggerRedrawOverlay()
};
i.clearCrosshair=i.setCrosshair;
i.lockCrosshair=function f(l){if(l){i.setCrosshair(l)
}k.locked=true
};
i.unlockCrosshair=function h(){k.locked=false
};
function d(l){if(k.locked){return
}if(k.x!=-1){k.x=-1;
i.triggerRedrawOverlay()
}}function j(l){if(k.locked){return
}if(i.getSelection&&i.getSelection()){k.x=-1;
return
}var m=i.offset();
k.x=Math.max(0,Math.min(l.pageX-m.left,i.width()));
k.y=Math.max(0,Math.min(l.pageY-m.top,i.height()));
i.triggerRedrawOverlay()
}i.hooks.bindEvents.push(function(m,l){if(!m.getOptions().crosshair.mode){return
}l.mouseout(d);
l.mousemove(j)
});
i.hooks.drawOverlay.push(function(q,l){var r=q.getOptions().crosshair;
if(!r.mode){return
}var n=q.getPlotOffset();
l.save();
l.translate(n.left,n.top);
if(k.x!=-1){var m=q.getOptions().crosshair.lineWidth%2?0.5:0;
l.strokeStyle=r.color;
l.lineWidth=r.lineWidth;
l.lineJoin="round";
l.beginPath();
if(r.mode.indexOf("x")!=-1){var p=Math.floor(k.x)+m;
l.moveTo(p,0);
l.lineTo(p,q.height())
}if(r.mode.indexOf("y")!=-1){var o=Math.floor(k.y)+m;
l.moveTo(0,o);
l.lineTo(q.width(),o)
}l.stroke()
}l.restore()
});
i.hooks.shutdown.push(function(m,l){l.unbind("mouseout",d);
l.unbind("mousemove",j)
})
}b.plot.plugins.push({init:c,options:a,name:"crosshair",version:"1.0"})
})(jQuery);
JSManager.setLoaded(208,"vendors/flot.crosshair.js");
/*! jQuery UI - v1.10.4 - 2014-04-28
* http://jqueryui.com
* Includes: jquery.ui.effect.js, jquery.ui.effect-bounce.js, jquery.ui.effect-fade.js, jquery.ui.effect-slide.js
* Copyright 2014 jQuery Foundation and other contributors; Licensed MIT */
(function(a,c){var b="ui-effects-";
a.effects={effect:{}};
/*!
 * jQuery Color Animations v2.1.2
 * https://github.com/jquery/jquery-color
 *
 * Copyright 2013 jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * Date: Wed Jan 16 08:47:09 2013 -0600
 */
(function(s,h){var o="backgroundColor borderBottomColor borderLeftColor borderRightColor borderTopColor color columnRuleColor outlineColor textDecorationColor textEmphasisColor",l=/^([\-+])=\s*(\d+\.?\d*)/,k=[{re:/rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,parse:function(v){return[v[1],v[2],v[3],v[4]]
}},{re:/rgba?\(\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,parse:function(v){return[v[1]*2.55,v[2]*2.55,v[3]*2.55,v[4]]
}},{re:/#([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})/,parse:function(v){return[parseInt(v[1],16),parseInt(v[2],16),parseInt(v[3],16)]
}},{re:/#([a-f0-9])([a-f0-9])([a-f0-9])/,parse:function(v){return[parseInt(v[1]+v[1],16),parseInt(v[2]+v[2],16),parseInt(v[3]+v[3],16)]
}},{re:/hsla?\(\s*(\d+(?:\.\d+)?)\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,space:"hsla",parse:function(v){return[v[1],v[2]/100,v[3]/100,v[4]]
}}],i=s.Color=function(w,x,v,y){return new s.Color.fn.parse(w,x,v,y)
},n={rgba:{props:{red:{idx:0,type:"byte"},green:{idx:1,type:"byte"},blue:{idx:2,type:"byte"}}},hsla:{props:{hue:{idx:0,type:"degrees"},saturation:{idx:1,type:"percent"},lightness:{idx:2,type:"percent"}}}},r={"byte":{floor:true,max:255},percent:{max:1},degrees:{mod:360,floor:true}},q=i.support={},e=s("<p>")[0],d,p=s.each;
e.style.cssText="background-color:rgba(1,1,1,.5)";
q.rgba=e.style.backgroundColor.indexOf("rgba")>-1;
p(n,function(v,w){w.cache="_"+v;
w.props.alpha={idx:3,type:"percent",def:1}
});
function m(w,y,x){var v=r[y.type]||{};
if(w==null){return(x||!y.def)?null:y.def
}w=v.floor?~~w:parseFloat(w);
if(isNaN(w)){return y.def
}if(v.mod){return(w+v.mod)%v.mod
}return 0>w?0:v.max<w?v.max:w
}function j(v){var x=i(),w=x._rgba=[];
v=v.toLowerCase();
p(k,function(C,D){var A,B=D.re.exec(v),z=B&&D.parse(B),y=D.space||"rgba";
if(z){A=x[y](z);
x[n[y].cache]=A[n[y].cache];
w=x._rgba=A._rgba;
return false
}});
if(w.length){if(w.join()==="0,0,0,0"){s.extend(w,d.transparent)
}return x
}return d[v]
}i.fn=s.extend(i.prototype,{parse:function(B,z,v,A){if(B===h){this._rgba=[null,null,null,null];
return this
}if(B.jquery||B.nodeType){B=s(B).css(z);
z=h
}var y=this,x=s.type(B),w=this._rgba=[];
if(z!==h){B=[B,z,v,A];
x="array"
}if(x==="string"){return this.parse(j(B)||d._default)
}if(x==="array"){p(n.rgba.props,function(C,D){w[D.idx]=m(B[D.idx],D)
});
return this
}if(x==="object"){if(B instanceof i){p(n,function(C,D){if(B[D.cache]){y[D.cache]=B[D.cache].slice()
}})
}else{p(n,function(D,E){var C=E.cache;
p(E.props,function(F,G){if(!y[C]&&E.to){if(F==="alpha"||B[F]==null){return
}y[C]=E.to(y._rgba)
}y[C][G.idx]=m(B[F],G,true)
});
if(y[C]&&s.inArray(null,y[C].slice(0,3))<0){y[C][3]=1;
if(E.from){y._rgba=E.from(y[C])
}}})
}return this
}},is:function(x){var v=i(x),y=true,w=this;
p(n,function(z,B){var C,A=v[B.cache];
if(A){C=w[B.cache]||B.to&&B.to(w._rgba)||[];
p(B.props,function(D,E){if(A[E.idx]!=null){y=(A[E.idx]===C[E.idx]);
return y
}})
}return y
});
return y
},_space:function(){var v=[],w=this;
p(n,function(x,y){if(w[y.cache]){v.push(x)
}});
return v.pop()
},transition:function(w,C){var x=i(w),y=x._space(),z=n[y],A=this.alpha()===0?i("transparent"):this,B=A[z.cache]||z.to(A._rgba),v=B.slice();
x=x[z.cache];
p(z.props,function(G,I){var F=I.idx,E=B[F],D=x[F],H=r[I.type]||{};
if(D===null){return
}if(E===null){v[F]=D
}else{if(H.mod){if(D-E>H.mod/2){E+=H.mod
}else{if(E-D>H.mod/2){E-=H.mod
}}}v[F]=m((D-E)*C+E,I)
}});
return this[y](v)
},blend:function(y){if(this._rgba[3]===1){return this
}var x=this._rgba.slice(),w=x.pop(),v=i(y)._rgba;
return i(s.map(x,function(z,A){return(1-w)*v[A]+w*z
}))
},toRgbaString:function(){var w="rgba(",v=s.map(this._rgba,function(x,y){return x==null?(y>2?1:0):x
});
if(v[3]===1){v.pop();
w="rgb("
}return w+v.join()+")"
},toHslaString:function(){var w="hsla(",v=s.map(this.hsla(),function(x,y){if(x==null){x=y>2?1:0
}if(y&&y<3){x=Math.round(x*100)+"%"
}return x
});
if(v[3]===1){v.pop();
w="hsl("
}return w+v.join()+")"
},toHexString:function(v){var w=this._rgba.slice(),x=w.pop();
if(v){w.push(~~(x*255))
}return"#"+s.map(w,function(y){y=(y||0).toString(16);
return y.length===1?"0"+y:y
}).join("")
},toString:function(){return this._rgba[3]===0?"transparent":this.toRgbaString()
}});
i.fn.parse.prototype=i.fn;
function f(x,w,v){v=(v+1)%1;
if(v*6<1){return x+(w-x)*v*6
}if(v*2<1){return w
}if(v*3<2){return x+(w-x)*((2/3)-v)*6
}return x
}n.hsla.to=function(x){if(x[0]==null||x[1]==null||x[2]==null){return[null,null,null,x[3]]
}var v=x[0]/255,A=x[1]/255,B=x[2]/255,D=x[3],C=Math.max(v,A,B),y=Math.min(v,A,B),E=C-y,F=C+y,w=F*0.5,z,G;
if(y===C){z=0
}else{if(v===C){z=(60*(A-B)/E)+360
}else{if(A===C){z=(60*(B-v)/E)+120
}else{z=(60*(v-A)/E)+240
}}}if(E===0){G=0
}else{if(w<=0.5){G=E/F
}else{G=E/(2-F)
}}return[Math.round(z)%360,G,w,D==null?1:D]
};
n.hsla.from=function(z){if(z[0]==null||z[1]==null||z[2]==null){return[null,null,null,z[3]]
}var y=z[0]/360,x=z[1],w=z[2],v=z[3],A=w<=0.5?w*(1+x):w+x-w*x,B=2*w-A;
return[Math.round(f(B,A,y+(1/3))*255),Math.round(f(B,A,y)*255),Math.round(f(B,A,y-(1/3))*255),v]
};
p(n,function(w,y){var x=y.props,v=y.cache,A=y.to,z=y.from;
i.fn[w]=function(F){if(A&&!this[v]){this[v]=A(this._rgba)
}if(F===h){return this[v].slice()
}var C,E=s.type(F),B=(E==="array"||E==="object")?F:arguments,D=this[v].slice();
p(x,function(G,I){var H=B[E==="object"?G:I.idx];
if(H==null){H=D[I.idx]
}D[I.idx]=m(H,I)
});
if(z){C=i(z(D));
C[v]=D;
return C
}else{return i(D)
}};
p(x,function(B,C){if(i.fn[B]){return
}i.fn[B]=function(G){var I=s.type(G),F=(B==="alpha"?(this._hsla?"hsla":"rgba"):w),E=this[F](),H=E[C.idx],D;
if(I==="undefined"){return H
}if(I==="function"){G=G.call(this,H);
I=s.type(G)
}if(G==null&&C.empty){return this
}if(I==="string"){D=l.exec(G);
if(D){G=H+parseFloat(D[2])*(D[1]==="+"?1:-1)
}}E[C.idx]=G;
return this[F](E)
}
})
});
i.hook=function(w){var v=w.split(" ");
p(v,function(x,y){s.cssHooks[y]={set:function(C,D){var A,B,z="";
if(D!=="transparent"&&(s.type(D)!=="string"||(A=j(D)))){D=i(A||D);
if(!q.rgba&&D._rgba[3]!==1){B=y==="backgroundColor"?C.parentNode:C;
while((z===""||z==="transparent")&&B&&B.style){try{z=s.css(B,"backgroundColor");
B=B.parentNode
}catch(E){}}D=D.blend(z&&z!=="transparent"?z:"_default")
}D=D.toRgbaString()
}try{C.style[y]=D
}catch(E){}}};
s.fx.step[y]=function(z){if(!z.colorInit){z.start=i(z.elem,y);
z.end=i(z.end);
z.colorInit=true
}s.cssHooks[y].set(z.elem,z.start.transition(z.end,z.pos))
}
})
};
i.hook(o);
s.cssHooks.borderColor={expand:function(w){var v={};
p(["Top","Right","Bottom","Left"],function(y,x){v["border"+x+"Color"]=w
});
return v
}};
d=s.Color.names={aqua:"#00ffff",black:"#000000",blue:"#0000ff",fuchsia:"#ff00ff",gray:"#808080",green:"#008000",lime:"#00ff00",maroon:"#800000",navy:"#000080",olive:"#808000",purple:"#800080",red:"#ff0000",silver:"#c0c0c0",teal:"#008080",white:"#ffffff",yellow:"#ffff00",transparent:[null,null,null,0],_default:"#ffffff"}
})(jQuery);
(function(){var e=["add","remove","toggle"],f={border:1,borderBottom:1,borderColor:1,borderLeft:1,borderRight:1,borderTop:1,borderWidth:1,margin:1,padding:1};
a.each(["borderLeftStyle","borderRightStyle","borderBottomStyle","borderTopStyle"],function(i,j){a.fx.step[j]=function(k){if(k.end!=="none"&&!k.setAttr||k.pos===1&&!k.setAttr){jQuery.style(k.elem,j,k.end);
k.setAttr=true
}}
});
function h(m){var j,i,k=m.ownerDocument.defaultView?m.ownerDocument.defaultView.getComputedStyle(m,null):m.currentStyle,l={};
if(k&&k.length&&k[0]&&k[k[0]]){i=k.length;
while(i--){j=k[i];
if(typeof k[j]==="string"){l[a.camelCase(j)]=k[j]
}}}else{for(j in k){if(typeof k[j]==="string"){l[j]=k[j]
}}}return l
}function d(i,k){var m={},j,l;
for(j in k){l=k[j];
if(i[j]!==l){if(!f[j]){if(a.fx.step[j]||!isNaN(parseFloat(l))){m[j]=l
}}}}return m
}if(!a.fn.addBack){a.fn.addBack=function(i){return this.add(i==null?this.prevObject:this.prevObject.filter(i))
}
}a.effects.animateClass=function(i,j,m,l){var k=a.speed(j,m,l);
return this.queue(function(){var p=a(this),n=p.attr("class")||"",o,q=k.children?p.find("*").addBack():p;
q=q.map(function(){var r=a(this);
return{el:r,start:h(this)}
});
o=function(){a.each(e,function(r,s){if(i[s]){p[s+"Class"](i[s])
}})
};
o();
q=q.map(function(){this.end=h(this.el[0]);
this.diff=d(this.start,this.end);
return this
});
p.attr("class",n);
q=q.map(function(){var v=this,r=a.Deferred(),s=a.extend({},k,{queue:false,complete:function(){r.resolve(v)
}});
this.el.animate(this.diff,s);
return r.promise()
});
a.when.apply(a,q.get()).done(function(){o();
a.each(arguments,function(){var r=this.el;
a.each(this.diff,function(s){r.css(s,"")
})
});
k.complete.call(p[0])
})
})
};
a.fn.extend({addClass:(function(i){return function(k,j,m,l){return j?a.effects.animateClass.call(this,{add:k},j,m,l):i.apply(this,arguments)
}
})(a.fn.addClass),removeClass:(function(i){return function(k,j,m,l){return arguments.length>1?a.effects.animateClass.call(this,{remove:k},j,m,l):i.apply(this,arguments)
}
})(a.fn.removeClass),toggleClass:(function(i){return function(l,k,j,n,m){if(typeof k==="boolean"||k===c){if(!j){return i.apply(this,arguments)
}else{return a.effects.animateClass.call(this,(k?{add:l}:{remove:l}),j,n,m)
}}else{return a.effects.animateClass.call(this,{toggle:l},k,j,n)
}}
})(a.fn.toggleClass),switchClass:function(i,k,j,m,l){return a.effects.animateClass.call(this,{add:k,remove:i},j,m,l)
}})
})();
(function(){a.extend(a.effects,{version:"1.10.4",save:function(h,j){for(var f=0;
f<j.length;
f++){if(j[f]!==null){h.data(b+j[f],h[0].style[j[f]])
}}},restore:function(h,k){var j,f;
for(f=0;
f<k.length;
f++){if(k[f]!==null){j=h.data(b+k[f]);
if(j===c){j=""
}h.css(k[f],j)
}}},setMode:function(f,h){if(h==="toggle"){h=f.is(":hidden")?"show":"hide"
}return h
},getBaseline:function(h,i){var j,f;
switch(h[0]){case"top":j=0;
break;
case"middle":j=0.5;
break;
case"bottom":j=1;
break;
default:j=h[0]/i.height
}switch(h[1]){case"left":f=0;
break;
case"center":f=0.5;
break;
case"right":f=1;
break;
default:f=h[1]/i.width
}return{x:f,y:j}
},createWrapper:function(h){if(h.parent().is(".ui-effects-wrapper")){return h.parent()
}var i={width:h.outerWidth(true),height:h.outerHeight(true),"float":h.css("float")},l=a("<div></div>").addClass("ui-effects-wrapper").css({fontSize:"100%",background:"transparent",border:"none",margin:0,padding:0}),f={width:h.width(),height:h.height()},k=document.activeElement;
try{k.id
}catch(j){k=document.body
}h.wrap(l);
if(h[0]===k||a.contains(h[0],k)){a(k).focus()
}l=h.parent();
if(h.css("position")==="static"){l.css({position:"relative"});
h.css({position:"relative"})
}else{a.extend(i,{position:h.css("position"),zIndex:h.css("z-index")});
a.each(["top","left","bottom","right"],function(m,n){i[n]=h.css(n);
if(isNaN(parseInt(i[n],10))){i[n]="auto"
}});
h.css({position:"relative",top:0,left:0,right:"auto",bottom:"auto"})
}h.css(f);
return l.css(i).show()
},removeWrapper:function(f){var h=document.activeElement;
if(f.parent().is(".ui-effects-wrapper")){f.parent().replaceWith(f);
if(f[0]===h||a.contains(f[0],h)){a(h).focus()
}}return f
},setTransition:function(h,j,f,i){i=i||{};
a.each(j,function(l,k){var m=h.cssUnit(k);
if(m[0]>0){i[k]=m[0]*f+m[1]
}});
return i
}});
function d(h,f,i,j){if(a.isPlainObject(h)){f=h;
h=h.effect
}h={effect:h};
if(f==null){f={}
}if(a.isFunction(f)){j=f;
i=null;
f={}
}if(typeof f==="number"||a.fx.speeds[f]){j=i;
i=f;
f={}
}if(a.isFunction(i)){j=i;
i=null
}if(f){a.extend(h,f)
}i=i||f.duration;
h.duration=a.fx.off?0:typeof i==="number"?i:i in a.fx.speeds?a.fx.speeds[i]:a.fx.speeds._default;
h.complete=j||f.complete;
return h
}function e(f){if(!f||typeof f==="number"||a.fx.speeds[f]){return true
}if(typeof f==="string"&&!a.effects.effect[f]){return true
}if(a.isFunction(f)){return true
}if(typeof f==="object"&&!f.effect){return true
}return false
}a.fn.extend({effect:function(){var i=d.apply(this,arguments),k=i.mode,f=i.queue,h=a.effects.effect[i.effect];
if(a.fx.off||!h){if(k){return this[k](i.duration,i.complete)
}else{return this.each(function(){if(i.complete){i.complete.call(this)
}})
}}function j(n){var o=a(this),m=i.complete,p=i.mode;
function l(){if(a.isFunction(m)){m.call(o[0])
}if(a.isFunction(n)){n()
}}if(o.is(":hidden")?p==="hide":p==="show"){o[p]();
l()
}else{h.call(o[0],i,l)
}}return f===false?this.each(j):this.queue(f||"fx",j)
},show:(function(f){return function(i){if(e(i)){return f.apply(this,arguments)
}else{var h=d.apply(this,arguments);
h.mode="show";
return this.effect.call(this,h)
}}
})(a.fn.show),hide:(function(f){return function(i){if(e(i)){return f.apply(this,arguments)
}else{var h=d.apply(this,arguments);
h.mode="hide";
return this.effect.call(this,h)
}}
})(a.fn.hide),toggle:(function(f){return function(i){if(e(i)||typeof i==="boolean"){return f.apply(this,arguments)
}else{var h=d.apply(this,arguments);
h.mode="toggle";
return this.effect.call(this,h)
}}
})(a.fn.toggle),cssUnit:function(f){var h=this.css(f),i=[];
a.each(["em","px","%","pt"],function(j,k){if(h.indexOf(k)>0){i=[parseFloat(h),k]
}});
return i
}})
})();
(function(){var d={};
a.each(["Quad","Cubic","Quart","Quint","Expo"],function(f,e){d[e]=function(h){return Math.pow(h,f+2)
}
});
a.extend(d,{Sine:function(e){return 1-Math.cos(e*Math.PI/2)
},Circ:function(e){return 1-Math.sqrt(1-e*e)
},Elastic:function(e){return e===0||e===1?e:-Math.pow(2,8*(e-1))*Math.sin(((e-1)*80-7.5)*Math.PI/15)
},Back:function(e){return e*e*(3*e-2)
},Bounce:function(h){var e,f=4;
while(h<((e=Math.pow(2,--f))-1)/11){}return 1/Math.pow(4,3-f)-7.5625*Math.pow((e*3-2)/22-h,2)
}});
a.each(d,function(f,e){a.easing["easeIn"+f]=e;
a.easing["easeOut"+f]=function(h){return 1-e(1-h)
};
a.easing["easeInOut"+f]=function(h){return h<0.5?e(h*2)/2:1-e(h*-2+2)/2
}
})
})()
})(jQuery);
(function(a,b){a.effects.effect.bounce=function(n,m){var c=a(this),d=["position","top","bottom","left","right","height","width"],l=a.effects.setMode(c,n.mode||"effect"),k=l==="hide",y=l==="show",z=n.direction||"up",e=n.distance,j=n.times||5,A=j*2+(y||k?1:0),x=n.duration/A,q=n.easing,f=(z==="up"||z==="down")?"top":"left",p=(z==="up"||z==="left"),w,h,v,r=c.queue(),s=r.length;
if(y||k){d.push("opacity")
}a.effects.save(c,d);
c.show();
a.effects.createWrapper(c);
if(!e){e=c[f==="top"?"outerHeight":"outerWidth"]()/3
}if(y){v={opacity:1};
v[f]=0;
c.css("opacity",0).css(f,p?-e*2:e*2).animate(v,x,q)
}if(k){e=e/Math.pow(2,j-1)
}v={};
v[f]=0;
for(w=0;
w<j;
w++){h={};
h[f]=(p?"-=":"+=")+e;
c.animate(h,x,q).animate(v,x,q);
e=k?e*2:e/2
}if(k){h={opacity:0};
h[f]=(p?"-=":"+=")+e;
c.animate(h,x,q)
}c.queue(function(){if(k){c.hide()
}a.effects.restore(c,d);
a.effects.removeWrapper(c);
m()
});
if(s>1){r.splice.apply(r,[1,0].concat(r.splice(s,A+1)))
}c.dequeue()
}
})(jQuery);
(function(a,b){a.effects.effect.fade=function(f,c){var d=a(this),e=a.effects.setMode(d,f.mode||"toggle");
d.animate({opacity:e},{queue:false,duration:f.duration,easing:f.easing,complete:c})
}
})(jQuery);
(function(a,b){a.effects.effect.slide=function(e,j){var f=a(this),l=["position","top","bottom","left","right","width","height"],k=a.effects.setMode(f,e.mode||"show"),n=k==="show",m=e.direction||"left",h=(m==="up"||m==="down")?"top":"left",d=(m==="up"||m==="left"),c,i={};
a.effects.save(f,l);
f.show();
c=e.distance||f[h==="top"?"outerHeight":"outerWidth"](true);
a.effects.createWrapper(f).css({overflow:"hidden"});
if(n){f.css(h,d?(isNaN(c)?"-"+c:-c):c)
}i[h]=(n?(d?"+=":"-="):(d?"-=":"+="))+c;
f.animate(i,{queue:false,duration:e.duration,easing:e.easing,complete:function(){if(k==="hide"){f.hide()
}a.effects.restore(f,l);
a.effects.removeWrapper(f);
j()
}})
}
})(jQuery);
JSManager.setLoaded(212,"vendors/jquery-ui-effects.js");
Object.define("Awaitable",Class,{DURATION_WAIT:200,DURATION_TIMEOUT:10000,status:"default",_completion:null,_timeWaited:0,_numIntervalsLapsed:0,_asyncScheduler:null,_getRefreshInterval:function _getRefreshInterval(){return 100
},setCompletion:function setCompletion(a){this._completion=a;
return this
},start:function(){this._startTime=new Date().getTime();
this._numIntervalsLapsed=0;
this._resetWithStatus("started");
this._setupAsyncTask();
this._asyncScheduler=setTimeout(FunctionUtils.bind(this,this._doAsyncWork),this._getRefreshInterval());
return this
},_executeAsync:function _executeAsync(){BUG("Awaitable does not implement async execution method")
},wait:function wait(a){if(this.status=="error"){return
}if(this.status=="ready"){a&&a();
return
}ASSERT_NOT_EQUAL(this.status,"default");
this._timeWaited+=this.DURATION_WAIT;
if(this._timeWaited>this.DURATION_TIMEOUT){this._resetWithStatus("timeout");
BUG("Awaitable timed out")
}setTimeout(FunctionUtils.bind(this,this.wait,a),this.DURATION_WAIT)
},_setupAsyncTask:function _setupAsyncTask(){},_doAsyncWork:function _doAsyncWork(){var b=new Date().getTime();
var h;
if(!this._lastCallTime){h=0
}else{h=b-this._lastCallTime
}this._lastCallTime=b;
try{this.status="working";
if(this._executeAsync()){this._resetWithStatus("ready");
this._completion&&this._completion()
}}catch(i){this._resetWithStatus("error");
throw i
}if(this.status=="ready"){return
}++this._numIntervalsLapsed;
var f=new Date().getTime();
var c=this._getRefreshInterval();
var k=this._numIntervalsLapsed*c;
var d=f-this._startTime;
var a=k-d;
var j=Math.min(c,a);
j=Math.max(0,j);
this._asyncScheduler=setTimeout(FunctionUtils.bind(this,this._doAsyncWork),j)
},_resetWithStatus:function _resetWithStatus(a){clearInterval(this._asyncScheduler);
this._asyncScheduler=null;
this.status=a;
this._timeWaited=0;
return this
}});
JSManager.setLoaded(233,"freebird/object/Awaitable.js");
Object.define("UIAnimation",Awaitable,{NUM_ANIMATION_FRAMES:50,_getRefreshInterval:function _getRefreshInterval(){return this._getTotalDuration()/this.NUM_ANIMATION_FRAMES
},_getTotalDuration:function _getTotalDuration(){return 1000
}});
JSManager.setLoaded(252,"freebird/animations/Animation.js");
Object.extend(LineChart,{formatYAxisLabel:function formatYAxisLabel(b,a){return StringUtils.renderAmount(b)
}});
Object.extend(LineChart.prototype,{container:null,plot:null,tooltipContainer:null,_plotOptions:{},_activeItemIdentifier:null,_CURRENT_TOOLTIP:null,_shouldAnimateTooltipPositioning:false,initialize:function initialize(a){this.container=Element.findById(a);
this.tooltipContainer=Element.findDescendentByClass(this.container,"tooltipContainer");
EventNotificationManager.subscribe(EventType.KEYPRESS_ESCAPE,FunctionUtils.bind(this,this._didKeypressEscape))
},_didKeypressEscape:function _didKeypressEscape(a){if(!this._CURRENT_TOOLTIP){return
}this._hideTooltip();
this._CURRENT_TOOLTIP=null
},render:function render(b,a){a.yaxis.tickFormatter=LineChart.formatYAxisLabel;
this._plotOptions=a;
this.plot=UIChart.create(this.container,b,a);
this.container.bind("plothover",FunctionUtils.bind(this,this._onHover));
this.container.bind("plotclick",FunctionUtils.bind(this,this._onClick));
this.container.mouseleave(FunctionUtils.bind(this,this._onMouseLeave))
},_onMouseLeave:function _onMouseLeave(a){this._hideTooltip()
},_onClick:function _onClick(d,e,c){if(!c){return
}var b=Element.findDescendentByClass(this.tooltipContainer,"expandForm");
var a=AsyncRequest.createWithForm(b);
a.isSilent=true;
a.successCallback=FunctionUtils.bind(this,function(){Element.addClass(this.tooltipContainer,"expanded");
this._positionTooltipNearItem(c,true)
});
a.send()
},_onHover:function _onHover(c,d,b){if(this._isOutOfBounds(d)){return
}var a=this._plotOptions.tooltip||{};
if(a.contextual){this._renderContextualTooltip(c,d,b)
}else{this._renderPersistentTooltip(c,d,b)
}},_renderContextualTooltip:function _renderContextualTooltip(e,f,d){if(!d){return
}var a=d.seriesIndex+"::"+d.dataIndex;
if(this._activeItemIdentifier==a){return
}this._activeItemIdentifier=a;
Element.addClass(this.container,"clickable");
var c=d.series.data[d.dataIndex];
var b=ASSERT_TRUTHY(c[2].tooltipUI,"Expected valid tooltip UI");
Element.show(this.tooltipContainer);
Element.setInnerHtml(this.tooltipContainer,b);
Element.removeClass(this.tooltipContainer,"expanded");
this._positionTooltipNearItem(d);
this._CURRENT_TOOLTIP=d
},_positionTooltipNearItem:function _positionTooltipNearItem(o){var e=Element.width(this.tooltipContainer);
var l=Element.positionInDocument(this.container);
var p={top:o.pageY,left:o.pageX};
var c=p.left-l.left;
var j=p.top-l.top;
var f=30;
var a=15;
var b=c-(e/2);
var i=j+f;
var m=Element.windowSize();
var k=m.width-l.left-e-a;
if(b>k){b=k;
var h=Element.findDescendentByClass(this.tooltipContainer,"arrowContainer");
var d=20;
var n=c-k-(d/2);
Element.setStyle(h,"background-position",n+"px 0px")
}if(this._shouldAnimateTooltipPositioning){this.tooltipContainer.animate({left:b,top:i})
}else{this.tooltipContainer.css("left",b);
this.tooltipContainer.css("top",i)
}},_renderPersistentTooltip:function _renderPersistentTooltip(z,h,C){var o=this.plot.getData();
var A=this.plot.getAxes();
var e=o[0];
var D=e.data.length-1;
var f=0.6;
for(var y=0;
y<e.data.length;
++y){var v=e.data[y][0];
if(v>h.x){if(y==0){D=y
}else{var s=e.data[y-1][0];
var d=s+(f*(v-s));
D=((h.x>d)?y:y-1)
}break
}}ASSERT_FALSE(D==-1,"Failed to locate closest data point");
var l="";
var w=A.xaxis.tickFormatter(e.data[D][0],A.xaxis);
if(o.length==1){l=w+": "+o[0].data[D][1]
}else{for(var B=0;
B<o.length;
++B){var n=o[B];
var q=n.data[D];
if(!q){continue
}var x=q[1];
var m=q[2]||{};
l+=m.tooltipUI||("<div>"+n.label+": "+x+"</div>")
}l='<div><div class="titleContainer">'+w+'</div><div class="labelsContainer">'+l+"</div></div>"
}Element.show(this.tooltipContainer);
Element.removeClass(this.tooltipContainer,"expanded");
Element.setInnerHtml(this.tooltipContainer,l);
var k=this.plot.width();
var p=Element.width(this.container);
var r=p-k;
var c=k*(h.x-A.xaxis.min)/(A.xaxis.max-A.xaxis.min);
var b=r+c-10-this.tooltipContainer.width()/2;
var a=-(this.tooltipContainer.height()-5);
this.tooltipContainer.css("left",b);
this.tooltipContainer.css("top",a)
},_isOutOfBounds:function _isOutOfBounds(b){var a=this.plot.getAxes();
return b.x<a.xaxis.min||b.x>a.xaxis.max||b.y<a.yaxis.min||b.y>a.yaxis.max
},_hideTooltip:function _hideTooltip(){Element.hide(this.tooltipContainer);
this._activeItemIdentifier=null
}});
JSManager.setLoaded(181,"charts/Line.js");
Object.extend(BrowserHistory,{currentLocation:null,listener:null,ignoreLocationChange:null,WAIT_TIME:200,currentWaitTime:0,storage:{},_initialHistoryData:null,_usePushState:false,initialize:function initialize(){this._initialHistoryData={url:window.location.pathname+(window.location.search||""),title:document.title.replace("Buxfer: ","")};
if(typeof history.pushState!=="undefined"){this._usePushState=true;
window.addEventListener("popstate",FunctionUtils.bind(this,function(b){this.fireHistoryEvent(b.state)
}));
return
}var a=this.getCurrentLocation();
this.currentLocation=a;
if(isOpera()){this.WAIT_TIME=400
}setInterval(FunctionUtils.bind(this,this.checkLocation),100)
},addListener:function addListener(a){this.listener=a
},add:function add(c,d){d.url=c;
if(this._usePushState){history.pushState(d,d.title||document.title,c);
if(d.title){Page.setTitle(d.title)
}return
}if(!d.title){d.title=document.title
}var a=this;
var b=function(){if(a.currentWaitTime>0){a.currentWaitTime=a.currentWaitTime-a.WAIT_TIME
}c=a.removeHash(c);
a.storage[c]=d;
a.ignoreLocationChange=true;
a.currentLocation=c;
a.setLocationFromHash(c)
};
window.setTimeout(b,0);
this.currentWaitTime=this.currentWaitTime+this.WAIT_TIME
},getCurrentLocation:function getCurrentLocation(){return Page.getLocationHash()
},fireHistoryEvent:function fireHistoryEvent(a){if(!this.listener){return
}a=a||this._initialHistoryData;
if(a.url==Page.currentPageUrl){return
}this.listener(a.url,a);
Page.setTitle(a.title)
},checkLocation:function checkLocation(){if(this.ignoreLocationChange==true){this.ignoreLocationChange=false;
return
}var a=this.getCurrentLocation();
if(a==this.currentLocation){return
}var b=this.normalizeHash(a);
if(b==this.currentLocation){return
}this.currentLocation=a;
this.fireHistoryEvent(this.storage[a])
},getIFrameHash:function getIFrameHash(){var a=Element.findById("DHFrame").contentWindow.document;
return Page.getLocationHash(a.location)
},setLocationFromHash:function setLocationFromHash(c){var d=window.location+"";
var b=d;
if(d.match(/#/)){var a=d.split(/#/);
b=a[0]
}window.location=b+"#"+c
},removeHash:function removeHash(a){if(!a){return null
}return a.replace(/^#/,"")
},iframeLoaded:function iframeLoaded(b){if(this.ignoreLocationChange){this.ignoreLocationChange=false;
return
}var d=b+"";
var a=d.split(/\?/);
a[0]="home";
window.location=a.join("#");
var c=a[1];
this.fireHistoryEvent(this.storage[c])
},normalizeHash:function normalizeHash(c){if(c.indexOf("?")==-1){return c
}var b=c.split(/\?/);
var a="";
jQuery.each(b[1].split(/&/),function(j,h){var f=h.split(/=/);
var j=f[0];
var k;
if(f.length==2){k=f[1]
}else{var i=[];
for(var e=1,d=f.length;
e<d;
++e){i.push(f[e])
}k=i.join("=")
}if(a){a+="&"
}a+=URLEncode(j)+"="+URLEncode(k)
});
return b[0]+"?"+a
}});
BrowserHistory.initialize();
JSManager.setLoaded(157,"browsers/History.js");
Object.define("BrowserStore",{isAvailable:function isAvailable(){try{return typeof(localStorage)!="undefined"
}catch(a){return false
}},showInstallationPrompt:function showInstallationPrompt(){var a="Sorry, looks like your browser does not allow offline data storage. Please upgrade your browser to the latest version";
USERERROR(a)
},addItem:function addItem(a,b){return localStorage.setItem(a,b)
},getItem:function getItem(a){return localStorage.getItem(a)
},getAllItems:function getAllItems(){var d=localStorage.length;
var a={};
for(var c=0;
c<d;
++c){var b=localStorage.key(c);
a[b]=localStorage.getItem(b)
}return a
},deleteItem:function deleteItem(a){localStorage.removeItem(a)
}});
JSManager.setLoaded(155,"browsers/Storage.js");
Object.define("Form",{getInputValue:function getInputValue(c,b){var a=ASSERT_TRUTHY(this.findInput(c,b),"Failed to locate input with name ["+b+"]");
return Element.getAttribute(a,"value")
},setInputValue:function setInputValue(c,b,d){var a=ASSERT_TRUTHY(this.findInput(c,b),"Failed to locate input with name ["+b+"]");
return Element.setAttribute(a,"value",d)
},findInput:function findInput(c,b){var a;
ArrayUtils.each(["textarea","input","select"],function(e,d){var f=Element.maybeFindDescendentBySelector(c,d+'[name="'+b+'"]');
if(f){a=f;
return false
}});
return a
},getParams:function getParams(a){a=Element.findById(a);
var b={};
jQuery.each(["textarea","input","select",".UICheckbox"],function(e,d){var c=a.find(d);
jQuery.each(c,function(j,h){h=Element.findById(h);
var i=Element.getAttribute(h,"name");
if(!i||i.match(/^__/)){return true
}var k=Element.getAttribute(h,"type");
if(k=="button"||k=="submit"||(k=="radio"&&!h.prop("checked"))){return true
}var f;
if(Element.isCheckbox(h)){f=Element.isCheckboxSelected(h)?"on":"off"
}else{f=h.val()
}b[i]=f
})
});
return b
},submit:function submit(b,o,a){a=a||{};
b=Element.findById(b);
var f=this.getParams(b);
var m=null;
if(o){if(Element.isSubmitButton(o)||Element.hasClass(o,"UIButton")){var p=Element.getAttribute(o,"name");
var j=Element.getAttribute(o,"value");
if(p&&j){f[p]=j
}var l=Element.maybeFindDescendentByClass(o,"buttonTitleContainer");
if(l){m=Element.getAttribute(l,"target")
}}}var e=Element.getAttribute(b,"action")||"/decode";
var c=Url.parse(e);
c.addQueryParams(f);
var d=Element.getAttribute(b,"target");
if(d=="asyncParent"){var k=UIController.maybeReloadAsyncParentWithUrl(b,c.toString());
if(k==EventDelegater.STOP){return k
}}var n=Element.getAttribute(b,"notify");
if(n){EventNotificationManager.notify(n,{href:c.toString()});
return EventDelegater.STOP
}if(d=="_new"||m=="_new"){Page.openWindow(c.toString());
return EventDelegater.STOP
}if(!this._shouldSubmitAsync(b)){b.submit();
return EventDelegater.STOP
}if(Element.hasClass(b,"isLoading")){return
}var h=AsyncRequest.create(c);
if(o){h.loadingElement=o
}if(d){h.target=d;
var i=Element.getAttribute(b,"targetReplacement");
if(i){h.targetReplacement=i
}}h.evalScript=true;
h.successCallback=function(q,r,s){Element.removeClass(b,"isLoading");
if(a.callback){return a.callback(q,r,s)
}return EventDelegater.FORWARD
};
h.errorCallback=function(q,r){Element.removeClass(b,"isLoading");
if(a.errorCallback){return a.errorCallback(q,r)
}return EventDelegater.FORWARD
};
h.send();
Element.addClass(b,"isLoading");
return EventDelegater.STOP
},onSubmitClick:function onSubmitClick(a){var b=Element.findParentByTagName(a,"form");
return Form.submit(b,a)
},_shouldSubmitAsync:function _shouldSubmitAsync(b){var a=Element.getAttribute(b,"enableAsync");
if(a==="false"){return false
}else{if(a==="true"){return true
}}return EventDelegater.areLinksAsync&&Element.getAttribute(b,"action").substr(0,1)=="/"
}});
JSManager.setLoaded(27,"forms/Form.js");
Object.extend(Page,{currentPageUrl:null,isFreebird:false,isHarvest:false,codeVersion:"",redirectToHashIfNeeded:function redirectToHashIfNeeded(){var a=(window.location.hash||"").replace("#","");
if(a&&a.substr(0,1)=="/"&&a!=window.location.href){window.location.href=a
}},setupApplication:function setupApplication(a){this.isHarvest=a.isHarvest;
this.codeVersion=a.codeVersion;
EventDelegater.areLinksAsync=true;
BrowserHistory.addListener(Page.handleBrowserHistoryChange);
AutoCompleter.installGlobalSearchAutocompleter();
this.isFreebird=a.isFreebird;
this.currentPageUrl=window.location.pathname+(window.location.search||"");
var b=Element.maybeFindById("appPlaceholder");
if(!b){return
}if(this.isFreebird){b.fadeOut();
this._setupFreebirdApplication()
}else{Element.hide(b);
this._setupLegacyApplication()
}},_setupFreebirdApplication:function _setupFreebirdApplication(){var e=Element.maybeFindById("appPageContainer");
if(!e){return
}var b=Element.positionInDocument(e).top;
var a=Element.windowSize();
var c=Element.maybeFindBySelector(".UIAppFooter");
if(c){var f=Element.size(c);
var d=a.height-b-f.height;
Element.setStyle(e,"min-height",d)
}},_setupLegacyApplication:function _setupLegacyApplication(){var a=Element.maybeFindById("the_indicator");
if(!a){WARNING("Failed to locate indicator on legacy app page");
return
}a.css("visibility","hidden");
var b=Page.getLocationHash();
if(b&&b.substr(0,1)=="!"){TabManager.loadTabFromLocation(u)
}},setTitle:function setTitle(b){var a=this.isHarvest?"The Harvest Plan":"Buxfer";
document.title=b+" - "+a
},setUrl:function setUrl(b,a){a=a||{};
this.currentPageUrl=b;
if(a.fromBrowserNavigation){return
}BrowserHistory.add(b,a);
if(_gaq){_gaq.push(["_trackPageview",b])
}if(_qevents){_qevents.push({qacct:"p-6bMjOUA-AmaJA"})
}},getCurrentParams:function getCurrentParams(){return this.getParamsFromUrl(this.getCurrentUrl())
},getCurrentUrl:function getCurrentUrl(){if(!this.currentPageUrl){this.currentPageUrl=window.location.pathname+(window.location.search||"")
}return this.currentPageUrl
},getParamsFromUrl:function getParamsFromUrl(b){var d=b.split(/\?/);
var c=d[0];
var a=d[1];
var e={};
if(c.substr(0,1)=="!"){c=c.substr(1);
e.cmd=c.replace(/\//g,".")
}else{e.CMD_URL=c
}if(a){jQuery.each(a.split(/&/),function(l,j){var i=j.split(/=/);
var n=i[0];
var o;
if(i.length==2){o=i[1]
}else{var m=[];
for(var h=1,f=i.length;
h<f;
++h){m.push(i[h])
}o=m.join("=")
}e[n]=URLDecode(o)
})
}return e
},getWidth:function getWidth(){return self.innerWidth||document.documentElement.clientWidth||document.body.clientWidth||0
},getHeight:function getHeight(){return self.innerHeight||document.documentElement.clientHeight||document.body.clientHeight||0
},getLocationHash:function getLocationHash(a){a=a||window.location;
if(!a.hash){return""
}a=a.hash.replace(/^#/,"");
return a
},handleBrowserHistoryChange:function handleBrowserHistoryChange(a,b){Page.openUrl(a,{fromBrowserNavigation:true})
},reload:function reload(){this.openUrl(this.currentPageUrl)
},openUrl:function openUrl(b,a){if(!b){WARNING("[Page] Invalid url",b);
return
}a=a||{};
if(Object.isString(b)){if(b.substr(0,1)=="!"){var c=this.getParamsFromUrl(b);
b=Url.createWithPath("/decode");
b.addQueryParams(c)
}else{b=Url.parse(b)
}}var d=AsyncRequest.create(b);
d.target=a.target;
d.targetReplacement=a.targetReplacement;
d.loadingElement=a.loadingElement;
d.fromBrowserNavigation=a.fromBrowserNavigation;
d.send()
},getBaseUrl:function getBaseUrl(){var a=window.location;
return a.protocol+"//"+a.host
},openWindow:function openWindow(a){window.openWindow(a,800,600)
}});
JSManager.setLoaded(260,"ajax/Page.js");
AjaxManager={lastRequestUrl:"",lastRequestTime:null,lastRequestId:null,TARGET_REPLACE_INNER_HTML:"innerHTML",getLastRequestUrl:function getLastRequestUrl(){return this.lastRequestUrl
},getReferer:function getReferer(){return Page.getCurrentUrl()
},getCommonParams:function getCommonParams(){var a={__referer:this.getReferer(),__mode:"async",__codeVersion:Page.codeVersion,__jsBitmap:JSManager.getBitMapString()};
if(g_uid){a.__uid=g_uid
}return a
},sendRequest:function sendRequest(h,e){e=e||{};
var b="/decode";
var f=h.cmd||"";
if(h.CMD_URL){b=h.CMD_URL;
delete h.CMD_URL;
f=b
}if(!e.isSilent){var c=DateUtils.getCurrentUnixTime();
this.lastRequestTime=c;
this.lastRequestId=f
}var i=joinParams(h);
this.lastRequestUrl=b+(i?("?"+i):"");
Object.extend(h,this.getCommonParams());
this.setLoadingStatus(true,e);
if(e.errorDiv){var d=Element.findById(e.errorDiv);
if(d){d.html("");
Element.hide(d)
}}var a=Object.extend({},h);
delete a.callback;
e.__requestPath=b;
jQuery.ajax(b,{data:jQuery.param(a),dataType:"json",success:FunctionUtils.bind(this,this._onRequestComplete,h,e),error:FunctionUtils.bind(this,this._onRequestError,h,e)})
},handleResponse:function handleResponse(h,f,e,a){if(f.status!="OK"){this.handleBackendError(f,e,a);
return
}var b=null;
if(f.html){b=jQuery(f.html)
}var k=null;
if(b){k=b.attr("target")||a.target;
if(!k){var p=Element.getAttribute(b,"id");
if(p&&Element.maybeFindById(p)){k=p
}}}var m=!a.isSilent&&!a.preserveOverlay;
var l=function l(){var r=(b&&Element.getAttribute(b,"id")=="redirect-overlay");
if(f.script&&(r||!e.callback||a.evalScript)){JSManager.evalScript(f.script)
}if(r){return
}var q=e.callback||a.callback;
if(q){q(f,a,e)
}if(a.message){TabManager.setStatusMessage(a.message)
}};
if(k=="__page"){if(m){Overlay.hide()
}var d=ASSERT_TRUTHY(Element.getAttribute(b,"pageUrl"),"Expected non-empty page URL");
var i=ASSERT_TRUTHY(Element.getAttribute(b,"pageTitle"),"Expected non-empty page title");
Page.setUrl(d,{title:i,fromBrowserNavigation:a.fromBrowserNavigation});
Element.removeAttribute(b,"pageUrl");
var n=Element.getAttribute(b,"navigationCategory");
if(n){Element.removeAttribute(b,"navigationCategory");
f.navigationCategory=n
}var j=Element.findById("appPage");
EventNotificationManager.notify(EventType.PAGE_WILL_LOAD,{request:h,response:f});
Element.hide(b);
j.replaceWith(b);
if(Element.getAttribute(b,"scrollToTop")==="true"){window.scroll(0,0)
}b.fadeIn({complete:function c(){EventNotificationManager.notify(EventType.PAGE_DID_LOAD,{request:h,response:f})
}});
l();
return
}if(k=="__tab"){this.handleTabResponse(b)
}else{if(k=="__overlay"){Element.insertInDOM(b);
var o={shouldEmptyStack:true};
Object.extend(o,a);
Overlay.present(b,o);
m=false
}else{if(a.targetReplacement&&a.targetReplacement.toLowerCase()==this.TARGET_REPLACE_INNER_HTML.toLowerCase()){Element.setInnerHtml(k,f.html)
}else{if(k&&k!="__ignore"){k=ASSERT_TRUTHY(Element.findById(k),"Invalid replacement target");
Element.replaceWithContent(k,f.html)
}}}}if(m){Overlay.hide()
}l()
},handleBackendError:function handleBackendError(b,c,a){a=a||{};
c=c||{};
if(a.isSilent){return
}if(a.errorCallback&&a.errorCallback(b,c)===EventDelegater.STOP){return
}if(b.sysError){ErrorManager.renderSystemError()
}else{USERERROR(b.mesg)
}},handleTabResponse:function handleTabResponse(c){var a=Element.maybeFindById(c.attr("id"));
var b=Element.findById("the_tab");
if(a){a.replaceWith(c)
}else{Element.findById("the_tab").append(c)
}},setLoadingStatus:function setLoadingStatus(c,e){e=e||{};
if(e.ignoreIndicator||e.isSilent){return
}if(e.loadingElement){Element.setLoading(e.loadingElement,c);
return
}var b=Element.maybeFindById(e.indicator);
if(!b){if(Page.isFreebird){var f=Element.maybeFindBySelector(".UIAppFilters");
if(!f){return
}Element.setLoading(f,c);
return
}else{b=Element.maybeFindById("the_indicator")
}}if(!b){return
}var a=c?"visible":"hidden";
b.css("visibility",a);
var d=Element.maybeFindById("page_indicator");
if(d){d.css("visibility",a)
}},_onRequestComplete:function _onRequestComplete(i,f,a,j,d){f=f||{};
this.setLoadingStatus(false,f);
if(d.status!=200||!a){return
}try{this.handleResponse(d,a,i,f)
}catch(h){var c=f.__requestPath;
if(c==="/decode"){c=i.cmd
}var b="Error handling AJAX response for '"+c+"'";
if(f.isSilent){ErrorManager.logJSError(b,h)
}else{ErrorManager.handleSystemError(b,h)
}}},_onRequestError:function _onRequestError(d,c,b,e,a){this.setLoadingStatus(false,c);
if(!a){return
}if(b.status!=200){ErrorManager.renderSystemError()
}else{ErrorManager.handleSystemError("AJAX request failed with error ["+a+"]")
}},_isDuplicateRequest:function _isDuplicateRequest(c,d,b){if(b.isSilent||!this.lastRequestTime||!this.lastRequestId){return false
}var a=DateUtils.getCurrentUnixTime();
return a-this.lastRequestTime<1&&c==this.lastRequestId
}};
JSManager.setLoaded(261,"ajax/Manager.js");
Object.define("KeyboardUtils",{isCharacterKey:function isCharacterKey(b){if(this.isMetaKey(b)){return false
}var a=this.getCharacterCode(b);
return((a>=65&&a<=90)||(a>=97&&a<=122)||a==47||a==63)
},getCharacterCode:function getCharacterCode(a){return a.which||a.keyCode
},getCharacter:function getCharacter(a){return String.fromCharCode(this.getCharacterCode(a))
},isMetaKey:function isMetaKey(a){return(a.metaKey||a.ctrlKey||a.altKey)
},isNavkey:function isNavkey(a){switch(a.keyCode){case Key.TAB:case Key.BACKSPACE:case Key.LEFT:case Key.RIGHT:case Key.DELETE:case Key.ESCAPE:case Key.UP:case Key.DOWN:case Key.HOME:case Key.END:case Key.ENTER:return true;
default:return false
}},isNumericKey:function isNumericKey(a){return this._matchesCharacter(a,/[\d\.,]/)
},_matchesCharacter:function _matchesCharacter(b,a){var d=this.getCharacter(b);
return a.test(d)
}});
JSManager.setLoaded(267,"utils/Keyboard.js");
Object.define("Shortcutter",{enabled:false,handlers:{},timeout:null,buffer:"",registerShortcuts:function(){Object.extend(this.handlers,{a:'Page.openUrl("/transaction/add")',b:'Page.openUrl("/budgets")',d:'Page.openUrl("/dashboard")',f:'Page.openUrl("/forecast")',r:'Page.openUrl("/reports")',u:"Page.reload()","/":'Element.findById("globalSearchInput").focus()',"?":'Page.openUrl("/help/keyboard_shortcuts")'})
},handleKeypress:function(f){if(!this.enabled){return
}if(Overlay.isVisible()){return
}if(!KeyboardUtils.isCharacterKey(f)){return
}var d=KeyboardUtils.getCharacter(f).toLowerCase();
var c=Event.element(f);
if(Element.nodeType(c)==3){c=c.parent()
}if(this.isInputElement(c)){return
}this.buffer+=d;
if(this.timeout){clearTimeout(this.timeout)
}var b=this.buffer;
this.buffer="";
var a=this.handlers[b];
if(a){Event.stop(f);
JSManager.evalScript(a)
}},isInputElement:function(b){if(Element.hasClass(b,"controlTitleContainer")){return true
}var a=Element.tagName(b);
var c=b.attr("type")||"text";
return(a=="input"&&(c=="text"||c=="password"||c=="file"))||a=="textarea"||a=="select"
}});
Shortcutter.registerShortcuts();
Event.observe(document,"keypress",FunctionUtils.bind(Shortcutter,Shortcutter.handleKeypress));
JSManager.setLoaded(258,"misc/Shortcutter.js");
g.InviteAddressbookWidget={_numInitAttempts:0,_contacts:null,init:function init(){if(!cloudsponge){if(g.InviteAddressbookWidget._numInitAttempts>=10){WARNING("Failed to initialize cloudsponge");
return
}++g.InviteAddressbookWidget._numInitAttempts;
setTimeout(g.InviteAddressbookWidget.init,500);
return
}cloudsponge.init({domain_key:"GGXUHQNXFZHMCYXZ4ZGN",displaySelectAllNone:true,initiallySelectedContacts:true,afterSubmitContacts:FunctionUtils.bind(this,this._afterSubmitContacts),beforeClosing:FunctionUtils.bind(this,this._beforeClosing)})
},_afterSubmitContacts:function _afterSubmitContacts(c,b,a){this._contacts=c;
return true
},_beforeClosing:function _beforeClosing(){var a=[];
jQuery.each(this._contacts,function(c,b){var d=b.email;
if(!d){return
}jQuery.each(d,function(f,e){a.push(e.address)
})
});
if(a.length>0){AJ({cmd:"Invite.send",emails:a.join(","),text:""})
}this._contacts=null;
Overlay.hide();
return true
}};
JSManager.setLoaded(16,"invites/AddressbookWidget.js");
Object.extend(SyncCredentialManager,{_storageKeyPrefix:"cred-",isAvailable:function isAvailable(){return BrowserStore.isAvailable()
},deleteAllCredentials:function deleteAllCredentials(){var a=this.getAllCredentials();
ArrayUtils.each(a,function(c,b){SyncCredentialManager.deleteCredentials(c)
})
},deleteCredentials:function deleteCredentials(a){if(!this.isAvailable()){return
}BrowserStore.deleteItem(this.getKeyForAccountId(a))
},getKeyForAccountId:function getKeyForAccountId(a){return this._storageKeyPrefix+a
},showInstallationPrompt:function showInstallationPrompt(){BrowserStore.showInstallationPrompt()
},saveCredentials:function saveCredentials(d,a){if(!this.isAvailable()){BrowserStore.showInstallationPrompt();
return
}var b=this.getCredentialsForAccount(d);
if(b!==null){this.deleteCredentials(d)
}BrowserStore.addItem(this.getKeyForAccountId(d),a)
},getCredentialsForAccount:function getCredentialsForAccount(a){if(!this.isAvailable()){return null
}return BrowserStore.getItem(this.getKeyForAccountId(a))
},getAllCredentials:function getAllCredentials(){var b=BrowserStore.getAllItems();
var a={};
ArrayUtils.each(b,FunctionUtils.bind(this,function(c,d){if(!StringUtils.startsWith(c,this._storageKeyPrefix)){return true
}var e=c.substring(this._storageKeyPrefix.length);
a[e]=d
}));
return a
}});
JSManager.setLoaded(165,"sync/credentials/Manager.js");
Object.define("WidgetManager",{objects:{},register:function register(a){this.objects[a.idPrefix]=a
},lookup:function lookup(a){if(!(a in this.objects)){WARNING("[WidgetManager] Bad id: "+a);
return null
}return this.objects[a]
}});
var W=FunctionUtils.bind(WidgetManager,WidgetManager.lookup);
JSManager.setLoaded(154,"widgets/Manager.js");
Event.observe(document,"click",function(a){hideAllDropDowns(a,{source:"documentClick"})
});
Event.observe(document,"keyup",function(a){if(KeyboardUtils.getCharacterCode(a)===Key.ESCAPE){hideAllDropDowns(a,{source:"keyPress"})
}});
function getAllChildNodes(b,a){jQuery.each(b.children(),function(c,d){d=Element.findById(d);
a.push(d);
getAllChildNodes(d,a)
})
}function registerDropdown(b,a){a=a||{};
a.element=Element.findById(b);
b=a.element.attr("id");
G_DROPDOWNS[b]=a
}function hideAllDropDowns(c,a){if(!a){a={}
}var b=a.source=="keyPress";
jQuery.each(G_DROPDOWNS,function(i,j){try{var l=j.element;
if(!l){return
}if(!Element.visible(l)){return
}if(b){Element.hide(l);
if(j.onhide){j.onhide()
}return
}if(j.onDocumentClick=="show"&&a.source=="documentClick"){return
}var d=Event.element(c);
var k=d.attr("id")||"";
if(j.retainOnDropdownClick){if(Element.contains(l,d)){return
}}var h=j.button;
var f=Element.findById(h);
if(f){if(Element.contains(f,d)){return
}}if(k!=h&&k.indexOf(i)!=0){Element.hide(l);
if(j.onhide){j.onhide()
}}}catch(e){WARNING("Error hiding dropdown",e)
}})
}JSManager.setLoaded(160,"dropdowns/Utils.js");
Object.define("UIChart",{_plots:{},setupClass:function setupClass(){EventNotificationManager.subscribe(EventType.PAGE_DID_RESIZE,FunctionUtils.bind(this,this._didPageResize))
},_didPageResize:function _didPageResize(b){var a=Element.findAllBySelector(".UIChart");
ArrayUtils.each(a,function(d,c){UIChart.refreshLayout(c)
})
},create:function create(b,f,d){b=Element.findById(b);
var a=ASSERT_TRUTHY(Element.getAttribute(b,"id"),"Expected non-empty id for chart container");
var c=Element.findDescendentByClass(b,"plotContainer");
var e=c.plot(f,d).data("plot");
if(d.grid.clickable){Element.addClass(b,"clickable")
}this._plots[a]=e;
return e
},getChart:function getChart(b){var a=Element.getAttribute(b,"id");
var c=this._plots[a];
if(!c){WARNING("Failed to get chart for element",a)
}return c
},refreshLayout:function refreshLayout(a){var b=UIChart.getChart(a);
b.resize();
b.setupGrid();
b.draw()
}});
JSManager.setLoaded(242,"freebird/charts/UIChart.js");
Object.define("UIFlotChart",{getValueForSeriesAtIndex:function getValueForSeriesAtIndex(d,b,a,e){var c=d[b];
if(!c){BUG("Invalid series index",b)
}return c.data[a][e]
},setValueForSeriesAtIndex:function setValueForSeriesAtIndex(e,b,a,f,d){var c=e[b];
if(!c){BUG("Invalid series index",b)
}c.data[a][f]=d
}});
JSManager.setLoaded(243,"freebird/charts/Flot.js");
Object.define("UIPieChartController",UIController,{didLoad:function didLoad(a,e){var d=e.chartData;
var f=e.chartOptions;
a=Element.findById(a);
var c=Element.findDescendentByClass(a,"plotContainer");
var b=0;
ArrayUtils.each(d,FunctionUtils.bind(this,function(h,i){b+=i.data
}));
Element.setAttribute(a,"totalValue",b);
if(!f.isAnimated){UIChart.create(a,d,f);
this.layoutTotalContainer(a);
this.setTotalAmount(a,b);
return
}new UIPieChartAnimationOpen().plotChart(a,d,f)
},layoutTotalContainer:function layoutTotalContainer(b){var a=Element.size(b);
var e=a.width-100;
var i=Element.findDescendentByClass(b,"totalContainer");
var f=Element.findDescendentByClass(i,"totalAmountContainer");
var d=Element.getAttribute(b,"totalValue");
var j=StringUtils.renderAmount(d);
Element.setInnerHtml(f,j);
var h=Element.size(f);
var k=Element.fontSize(f);
while(k>20&&h.width>e){--k;
Element.setStyle(f,"font-size",k+"px");
h=Element.size(f)
}Element.setInnerHtml(f,"");
var c=(a.height-h.height)/2;
Element.setStyle(i,"top",c)
},setTotalAmount:function setTotalAmount(a,e){var b=Element.findDescendentByClass(a,"totalAmountContainer");
var j=Element.getAttribute(a,"totalValue");
var f=StringUtils.renderAmount(e);
if(e!=j){var d=StringUtils.renderAmount(j).length;
if(f.length<d){var h="";
for(var c=f.length;
c<d;
++c){h+="&nbsp;"
}f=h+f
}}Element.setInnerHtml(b,f);
if(e==0){Element.hide(b)
}else{Element.show(b)
}}});
JSManager.setLoaded(244,"freebird/charts/pie/UIController.js");
Object.define("UIPieChartAnimation",UIAnimation,{container:null,chart:null,allSeries:null,numSeries:null,totalValue:null,valuePerIncrement:null,emptySeriesIndex:0,setContainer:function setContainer(b){this.container=b;
this.chart=ASSERT_TRUTHY(UIChart.getChart(this.container));
this.originalData=this.chart.originalData;
this.allSeries=this.chart.getData();
this.totalValue=Element.getAttribute(b,"totalValue");
this.valuePerIncrement=MathUtils.roundAmount(this.totalValue/this.NUM_ANIMATION_FRAMES);
if(!this.chart.hasEmptySeries){var a={color:"transparent"};
this.allSeries=ArrayUtils.prepend(this.allSeries,a);
this.chart.hasEmptySeries=true
}UIPieChartController.setTotalAmount(this.container,this.totalValue);
this.numSeries=this.allSeries.length;
return this
},executeAnimationFrame:function executeAnimationFrame(){BUG("Animation execution not defined")
},_executeAsync:function _executeAsync(){var c=this.executeAnimationFrame();
var a=this.totalValue-this.emptySeriesValue;
var b=StringUtils.renderAmount(a);
UIPieChartController.setTotalAmount(this.container,a);
this.chart.setData(this.allSeries);
this.chart.draw();
if(c){Element.removeAttribute(this.container,"isLoading")
}return c
},_getValueForSeriesAtIndex:function _getValueForSeriesAtIndex(a){return UIFlotChart.getValueForSeriesAtIndex(this.allSeries,a,0,1)
},_setValueForSeriesAtIndex:function _setValueForSeriesAtIndex(a,b){UIFlotChart.setValueForSeriesAtIndex(this.allSeries,a,0,1,b)
}});
JSManager.setLoaded(245,"freebird/charts/pie/animations/PieChart.js");
Object.define("UIPieChartAnimationClose",UIPieChartAnimation,{emptySeriesValue:null,currentSeriesIndex:null,_setupAsyncTask:function _setupAsyncTask(){this.emptySeriesValue=0;
this.currentSeriesIndex=1;
this.allSeries[this.emptySeriesIndex].data=[[1,this.emptySeriesValue]]
},executeAnimationFrame:function executeAnimationFrame(){if(this.emptySeriesValue>=this.totalValue||this.currentSeriesIndex>=this.numSeries){this.emptySeriesValue=this.totalValue;
return true
}this.emptySeriesValue+=this.valuePerIncrement;
this.emptySeriesValue=Math.min(this.totalValue,this.emptySeriesValue);
this._setValueForSeriesAtIndex(this.emptySeriesIndex,this.emptySeriesValue);
var a=this.valuePerIncrement;
while(this.currentSeriesIndex<this.numSeries){var b=this._getValueForSeriesAtIndex(this.currentSeriesIndex);
b-=a;
this._setValueForSeriesAtIndex(this.currentSeriesIndex,Math.max(0,b));
if(b>=0){break
}++this.currentSeriesIndex;
a=Math.abs(b)
}}});
JSManager.setLoaded(247,"freebird/charts/pie/animations/Close.js");
Object.define("UIPieChartAnimationOpen",UIPieChartAnimation,{emptySeriesValue:null,currentSeriesIndex:null,plotChart:function plotChart(a,f,c){a=Element.findById(a);
var e={};
ArrayUtils.each(f,FunctionUtils.bind(this,function(h,i){e[h]=Object.extend({},i);
f[h].data=0
}));
var d=UIChart.create(a,f,c);
d.originalData=e;
UIPieChartController.layoutTotalContainer(a);
if(c.grid.clickable){var b=Element.findDescendentByClass(a,"plotContainer");
a.bind("plotclick",FunctionUtils.bind(this,this._onChartClick))
}Element.setAttribute(a,"isLoading","true");
return this.setContainer(a).start()
},_setupAsyncTask:function _setupAsyncTask(){this.emptySeriesValue=this.totalValue;
this.currentSeriesIndex=this.numSeries-1;
this.allSeries[this.emptySeriesIndex].data=[[1,this.emptySeriesValue]]
},executeAnimationFrame:function executeAnimationFrame(){if(this.emptySeriesValue<=0||this.currentSeriesIndex<=0){this.emptySeriesValue=0;
return true
}this.emptySeriesValue-=this.valuePerIncrement;
this.emptySeriesValue=Math.max(0,this.emptySeriesValue);
this._setValueForSeriesAtIndex(this.emptySeriesIndex,this.emptySeriesValue);
var b=this.valuePerIncrement;
while(this.currentSeriesIndex>0){var c=this._getValueForSeriesAtIndex(this.currentSeriesIndex);
var a=this.chart.originalData[this.currentSeriesIndex-1].data;
c+=b;
if(c<=a){this._setValueForSeriesAtIndex(this.currentSeriesIndex,c);
break
}this._setValueForSeriesAtIndex(this.currentSeriesIndex,a);
--this.currentSeriesIndex;
b=Math.max(0,c-a)
}},_onChartClick:function _onChartClick(a,d,c){if(!c){return
}var b=this.originalData[c.seriesIndex-1]||{};
if(!b.href){return
}EventNotificationManager.notify("page-reload",{href:b.href})
}});
JSManager.setLoaded(246,"freebird/charts/pie/animations/Open.js");
if(typeof Url=="undefined"){Object.define("Url",Class.create());
Object.extend(Url,{createWithForm:function createWithForm(a){return Url.parse(Element.getAttribute(a,"action")).addQueryParams(Form.getParams(a))
},createWithPath:function createWithPath(b){var a=new Url();
a.path=b.replace(/[\/]+/g,"/");
return a
},parse:function parse(b){var c=document.createElement("a");
c.href=b;
var a=new Url();
a.protocol=c.protocol;
a.host=c.hostname;
a.port=c.port;
a.path=(c.pathname||"/").replace(/[\/]+/g,"/");
if(!StringUtils.startsWith(a.path,"/")){a.path="/"+a.path
}a.setQueryString(c.search);
a.hash=c.hash;
return a
},parseQueryString:function parseQueryString(c){if(!c||!c.length){return{}
}var a=c;
if(StringUtils.startsWith(c,"?")){a=c.substr(1)
}if(!a.length){return{}
}var b={};
jQuery.each(a.split(/&/),function(i,h){var f=h.split(/=/);
var l=f[0];
var m;
if(f.length==2){m=f[1]
}else{var j=[];
for(var e=1,d=f.length;
e<d;
++e){j.push(f[e])
}m=j.join("=")
}b[l]=decodeURIComponent(m)
});
return b
}});
Object.extend(Url.prototype,{initialize:function initialize(){this.protocol=null;
this.host=null;
this.port=null;
this.path=null;
this.queryParams={};
this.hash=null
},setQueryString:function setQueryString(a){this.queryParams=Url.parseQueryString(a);
return this
},addQueryParam:function addQueryParam(a,b){if(b===null){delete this.queryParams[a]
}else{this.queryParams[a]=b
}return this
},addQueryParams:function addQueryParams(a){ArrayUtils.each(a,FunctionUtils.bind(this,function(b,c){this.addQueryParam(b,c)
}));
return this
},toString:function toString(){var a=this.path;
var b=jQuery.param(this.queryParams);
if(b){a+="?"+b
}return a
}})
}JSManager.setLoaded(29,"network/Url.js");
if(typeof AsyncRequest==="undefined"){Object.define("AsyncRequest",Class.create());
Object.extend(AsyncRequest,{createWithForm:function createWithForm(c){var a=Url.createWithForm(c);
var b=new AsyncRequest(a);
b.target=Element.getAttribute(c,"target");
b.targetReplacement=Element.getAttribute(c,"targetReplacement");
return b
},create:function create(a,b){if(Object.isString(a)){a=Url.parse(a)
}if(b){a.addQueryParams(b)
}return new AsyncRequest(a)
}});
Object.extend(AsyncRequest.prototype,{initialize:function(a){this.url=a;
this.successCallback=null;
this.errorCallback=null;
this.target=null;
this.targetReplacement=null;
this.preserveOverlay=false;
this.isSilent=false;
this.ignoreIndicator=false;
this.evalScript=false;
this.loadingElement=null;
this.fromBrowserNavigation=false
},send:function send(){var b=this.url.queryParams;
b.CMD_URL=this.url.path;
b.callback=this.successCallback;
var a={target:this.target,targetReplacement:this.targetReplacement,preserveOverlay:this.preserveOverlay,isSilent:this.isSilent,ignoreIndicator:this.ignoreIndicator,evalScript:this.evalScript,loadingElement:this.loadingElement,fromBrowserNavigation:this.fromBrowserNavigation,errorCallback:this.errorCallback};
AJ(b,a)
}})
}JSManager.setLoaded(28,"network/Request.js");
Object.define("UITransactionListController",UIController,{setupClass:function setupClass(){EventNotificationManager.subscribe(EventType.PAGE_DID_LOAD,FunctionUtils.bind(this,this._didPageLoad))
},_didPageLoad:function _didPageLoad(a){this._CURRENT_TOGGLE=null
},didReload:function didReload(a){this._CURRENT_TOGGLE=null
},didClick:function didClick(a,d){if(Element.maybeFindParentByClass(d,"UIListNavigation")){return this._didClickNavigation(a,d)
}if(!Element.maybeFindParentByClass(d,"transactions")){return EventDelegater.FORWARD
}var e=["UITransactionListTagRuleInput","UITransactionListTagInput","UITransactionListItem"];
var b=false;
ArrayUtils.each(e,function(h,f){if(Element.maybeFindParentByClass(d,f)){b=true;
return false
}});
if(b){return EventDelegater.FORWARD
}if(Element.maybeFindParentByClass(d,"actionsToggleCell")){var c=Element.findParentByClass(d,"UILinkToggle");
return this._didClickToggleLink(a,c)
}if(Element.maybeFindParentByTagName(d,"tr")){return this._didClickRow(a,d)
}return EventDelegater.FORWARD
},_didClickRow:function _didClickRow(a,c){var b=this._maybeFindCheckboxForClickTarget(a,c);
if(b){if(!Element.isCheckbox(c)){Element.setCheckboxSelected(b,!Element.isCheckboxSelected(b))
}return this._didClickCheckbox(a,b)
}if(Element.maybeFindParentByClass(c,"UIEditable")){return EventDelegater.FORWARD
}return this._didClickCell(a,c)
},_didClickCheckbox:function _didClickCheckbox(b,h){var f=Element.findDescendentByClass(b,"bulkActionsForm");
var a=[];
if(Element.hasClass(h,"selectAllCheckbox")){var c=Element.isCheckboxSelected(h);
var i=Element.findAllDescendentsBySelector(b,".transactionSelectCheckbox");
ArrayUtils.each(i,FunctionUtils.bind(this,function(k,l){l=Element.findById(l);
if(!Element.hasClass(l,"selectAllCheckbox")){Element.setCheckboxSelected(l,c);
this._setRowSelectedForCheckbox(l);
if(c){var m=ASSERT_TRUTHY(Element.getAttribute(l,"data-tid"),"No tid provided for checkbox");
a.push(m)
}}}))
}else{this._setRowSelectedForCheckbox(h);
var e=ASSERT_TRUTHY(Element.getAttribute(h,"data-tid"),"No tid provided for checkbox");
var d=Form.getInputValue(f,"bulkSelectedTids")||"";
if(d){a=d.split(",")
}var j=ArrayUtils.toHash(a);
if(e in j){delete j[e]
}else{j[e]=1
}a=ArrayUtils.keys(j)
}this._setSelectedTids(b,a);
return EventDelegater.FORWARD
},_setSelectedTids:function(c,i){var f=Element.findAllDescendentsBySelector(c,".transactionSelectCheckbox");
var h=f.length-1;
var e=Element.findDescendentByClass(c,"selectAllCheckbox");
Element.setCheckboxSelected(e,i.length==h);
var b=i.length;
Element.addClassIf(Element.findDescendentByClass(c,"UITransactionListBulkActions"),"selected",b>0);
var d=Element.findAllDescendentsBySelector(c,".UITransactionListBulkActions .UIControl");
ArrayUtils.each(d,function(j,k){UIControlController.setEnabled(k,b>0)
});
var a=Element.findDescendentByClass(c,"bulkActionsForm");
Form.setInputValue(a,"bulkSelectedTids",i.join(","))
},_setRowSelectedForCheckbox:function _setRowSelectedForCheckbox(a){var b=Element.findParentByTagName(a,"tr");
Element.addClassIf(b,"selected",Element.isCheckboxSelected(a))
},_didClickNavigation:function _didClickNavigation(b,d){var a=Element.maybeFindParentByTagName(d,"a");
if(!a){return EventDelegater.FORWARD
}var c=Element.findDescendentByClass(b,"selectAllCheckbox");
Element.setCheckboxSelected(c,false);
return UILinkController.didClick(a,d)
},_CURRENT_TOGGLE:null,_didClickToggleLink:function _didClickToggleLink(a,b){if(this._CURRENT_TOGGLE&&!Element.isEqualTo(b,this._CURRENT_TOGGLE)){UILinkToggleController.didClick(this._CURRENT_TOGGLE);
Element.removeClass(Element.findParentByTagName(this._CURRENT_TOGGLE,"tr"),"selected");
this._CURRENT_TOGGLE=null
}var c=Element.findParentByTagName(b,"tr");
UILinkToggleController.didClick(b);
if(UILinkToggleController.isOpen(b)){this._CURRENT_TOGGLE=b;
Element.addClass(c,"selected")
}else{this._CURRENT_TOGGLE=null;
Element.removeClass(c,"selected")
}return EventDelegater.STOP
},_didClickCell:function _didClickCell(a,c){if(Element.maybeFindParentByTagName(c,"th")){return EventDelegater.FORWARD
}var d=Element.findParentByClass(c,"transactionRow");
var b=Element.findDescendentBySelector(d,"td.actionsToggleCell .UILinkToggle.actionsToggleButtonContainer");
return this._didClickToggleLink(a,b)
},_maybeFindCheckboxForClickTarget:function _maybeFindCheckboxForClickTarget(b,c){if(Element.isCheckbox(c)){if(Element.hasClass(c,"transactionSelectCheckbox")){return c
}return null
}var a=Element.tagName(c);
if(a=="td"||a=="th"){return Element.maybeFindDescendentBySelector(c,".transactionSelectCheckbox")
}return null
}});
JSManager.setLoaded(249,"freebird/transactions/list/UIController.js");
Object.define("UITransactionListFiltersController",UIController,{didClick:function didClick(a,c){var b=Element.maybeFindParentByClass(c,"advancedSearchButton");
if(b){this._didClickAdvancedSearchButton(a);
return EventDelegater.STOP
}return EventDelegater.FORWARD
},_didClickAdvancedSearchButton:function _didClickAdvancedSearchButton(a){var b=Element.findById(Element.getAttribute(a,"expandedContainerId"));
if(Element.hasClass(b,"expanded")){Element.removeClass(a,"expanded");
b.slideUp({complete:function(){Element.removeClass(b,"expanded")
}})
}else{Element.addClass(a,"expanded");
b.slideDown({complete:function(){Element.addClass(b,"expanded")
}})
}}});
JSManager.setLoaded(251,"freebird/transactions/list/UIFiltersController.js");
Object.define("UITransactionListTagRuleInputController",UIController,{didClick:function didClick(a,c){if(Element.maybeFindParentByClass(c,"ruleKeywordsInput")){var b=Element.findDescendentByClass(a,"applyRuleCheckbox");
Element.setCheckboxSelected(b,true)
}return EventDelegater.FORWARD
}});
JSManager.setLoaded(250,"freebird/transactions/list/UITagRuleInputController.js");
Object.define("UIDashboardController",UIController,{didLoad:function didLoad(a,b){if(b.showTutorial){Overlay.present(Element.findDescendentByClass(a,"tutorialDialog"))
}this._resizeIfNeeded(a);
EventNotificationManager.subscribe(EventType.PAGE_DID_RESIZE,FunctionUtils.bind(this,this._resizeIfNeeded,a))
},_resizeIfNeeded:function _resizeIfNeeded(a){if(!Element.isInDOM(a)){return
}var b=Element.maybeFindDescendentByClass(a,"sectionsContainer");
if(b){UIGridController.resizeIfNeeded(b)
}}});
JSManager.setLoaded(238,"freebird/dashboard/UIController.js");
Object.define("UIDashboardTutorialDialogController",UIController,{didLoad:function didLoad(a,c){var b=AsyncRequest.create("/w/tutorial/event",{tutorialId:c.tutorialId,eventName:"IMPRESSION"});
b.isSilent=true;
b.preserveOverlay=true;
b.send()
},didClick:function didClick(a,b){if(Element.maybeFindParentByClass(b,"tutorialStartButton")){return this._didClickStartButton(a,b)
}return UIModalDialogController.didClick(a,b)
},_didClickStartButton:function _didClickStartButton(a,b){Overlay.hide({complete:function(){UITutorialController.beginTutorial(Element.findById(Element.getAttribute(a,"tutorialContainerId")))
}});
return EventDelegater.STOP
}});
JSManager.setLoaded(239,"freebird/dashboard/UITutorialDialogController.js");
Object.define("UICategoriesController",UIController,{didClick:function didClick(b,d){var a=Element.maybeFindParentByClass(d,"topMoverCell");
if(a){Element.toggleClass(b,"percentMode");
return EventDelegater.STOP
}var c=Element.maybeFindParentByTagName(d,"a");
if(c){return UILinkController.didClick(c,d,{loadingElement:b})
}return EventDelegater.FORWARD
}});
JSManager.setLoaded(240,"freebird/categories/UIController.js");
Object.define("UIBudgetChartController",UIController,{didClick:function didClick(a,c){var b=Element.maybeFindParentByTagName(c,"a");
if(b){return UILinkController.didClick(b,c,{loadingElement:a})
}return EventDelegater.FORWARD
}});
JSManager.setLoaded(220,"freebird/budgets/UIChartController.js");
Object.define("UIBudgetListController",UIController,{didLoad:function didLoad(a){this._resizeIfNeeded(a);
EventNotificationManager.subscribe(EventType.PAGE_DID_RESIZE,FunctionUtils.bind(this,this._resizeIfNeeded,a))
},_resizeIfNeeded:function _resizeIfNeeded(a){return UIReportController.resizeIfNeeded(a)
}});
JSManager.setLoaded(221,"freebird/budgets/UIListController.js");
Object.define("UISidebarController",UIController,{MIN_PAGE_WIDTH_FOR_EXPANSION:1280,setupClass:function setupClass(){EventNotificationManager.subscribe("data-invalidate",FunctionUtils.bind(this,this._didInvalidateData))
},didLoad:function didLoad(a,c){EventNotificationManager.subscribe(EventType.CLICK,FunctionUtils.bind(this,this._didClickPage,a));
EventNotificationManager.subscribe(EventType.PAGE_WILL_LOAD,FunctionUtils.bind(this,this._willPageLoad,a));
var d=Element.getAttribute(a,"forceMinimized");
if(d!==null){Element.addClass(a,"forceMinimized");
Element.addClassIf(a,"minimized",d==="1");
Element.addClassIf(jQuery(".pageBody"),"sidebarMinimized",d==="1")
}EventNotificationManager.subscribe(EventType.PAGE_DID_RESIZE,FunctionUtils.bind(this,this._didResize,a));
this._didResize(a);
var e=Element.getAttribute(a,"forcePinned");
if(e!==null&&e>=0){this._setPinned(a,true,{animated:false});
var b=Element.findDescendentBySelector(a,".navItem[type="+e+"]");
this._didClickNavItem(a,b,{animated:false})
}},_didInvalidateData:function _didInvalidateData(a){ArrayUtils.each(a.invalidatedTypes,FunctionUtils.bind(this,function(b,c){if(Element.maybeFindById("drawer-"+c)){this._reloadListOfType(c)
}}))
},_didClickPage:function _didClickPage(a,b){var c=b.target;
if(Element.maybeFindParentByClass(b.target,"bxOverlayContainer")||Element.maybeFindParentByClass(b.target,"UISidebar")){return
}this._closeDrawer(a)
},_willPageLoad:function _willPageLoad(a,d){this._closeDrawer(a);
var c=d.response||{};
if(c.navigationCategory){var b=Element.maybeFindById("sidebar-navitem-"+c.navigationCategory);
if(b){this._setHighlightedItem("the-sidebar",b)
}}},didClick:function didClick(a,b){if(Element.maybeFindParentByClass(b,"expandToggleButton")){return this._didClickExpandToggleButton(a,b)
}if(Element.maybeFindParentByClass(b,"pinToggleButton")){return this._didClickPinToggleButton(a,b)
}if(Element.maybeFindParentByClass(b,"sortTitleContainer")){return this._didClickSortTitle(a,b)
}if(Element.maybeFindParentByClass(b,"itemContainer")){return this._didClickItem(a,b)
}if(Element.maybeFindParentByClass(b,"sectionTitleContainer")){return this._didClickSectionTitle(a,b)
}if(Element.maybeFindParentByClass(b,"navItem")){return this._didClickNavItem(a,b)
}return EventDelegater.FORWARD
},_didClickNavItem:function _didClickNavItem(a,f,c){var b=Element.findParentByClass(f,"navItem");
if(Element.getAttribute(b,"href")){this._closeDrawer(a);
this._setHighlightedItem(a,b);
return UILinkController.didClick(b,f)
}var i=Element.getData(a,"selectedItemId");
var e=ASSERT_TRUTHY(Element.id(b),"Expected non-empty id for nav item");
if(e==i){this._closeDrawer(a);
return EventDelegater.STOP
}if(i){Element.removeClass(i,"selected");
Element.hide(this._drawerForItem(a,i))
}var h=ASSERT_TRUTHY(Element.getAttribute(b,"type"),"Expected non-empty type for drawer item");
var d=this._drawerForItem(a,b);
Element.addClass(b,"selected");
Element.show(d);
Element.setData(a,"selectedItemId",e);
if(Element.hasClass(a,"pinned")){this._persistPreference("pinned",h)
}this._openDrawer(a,c);
if(Element.hasClass(d,"loadingComplete")){this._setupScrollForDrawerIfNeeded(d)
}else{this._reloadListOfType(h)
}return EventDelegater.STOP
},_doesNavItemHaveDrawer:function _doesNavItemHaveDrawer(a,b){return !Element.getAttribute(b,"href")
},_openDrawer:function _openDrawer(a,c){c=c||{};
if(Element.hasClass(a,"open")){return
}var d=Element.findDescendentByClass(a,"drawerContainer");
var e=function(){Element.addClass(a,"open");
Element.removeClass(a,"closed")
};
if(c.animated===false){Element.show(d);
e();
return
}var b={effect:"slide",easing:"easeInOutCubic",complete:e};
d.show(b)
},closeDrawer:function closeDrawer(){var a=Element.findBySelector(".UISidebar");
this._closeDrawer(a)
},_closeDrawer:function _closeDrawer(a){if(Element.hasClass(a,"closed")||Element.hasClass(a,"pinned")){return
}var b={effect:"slide",easing:"easeInOutCubic",complete:FunctionUtils.bind(this,function(){Element.removeClass(a,"closing");
Element.addClass(a,"closed");
Element.removeClass(a,"open");
var e=Element.getData(a,"selectedItemId");
if(!e){WARNING("No selected item when closing drawer");
return
}var d=this._drawerForItem(a,e);
UISidebarDrawerController.setBulkEditEnabled(Element.findDescendentByClass(d,"UISidebarDrawer"),false);
Element.removeClass(e,"selected");
Element.hide(d);
Element.setData(a,"selectedItemId","")
})};
Element.addClass(a,"closing");
var c=Element.findDescendentByClass(a,"drawerContainer");
c.hide(b)
},_setHighlightedItem:function _setHighlightedItem(a,c){var b=Element.getData(a,"highlightedItemId");
var d=c&&Element.id(c);
if(b==d){return
}if(b){Element.removeClass(b,"highlighted")
}if(!c){Element.setData(a,"highlightedItemId","");
return
}Element.addClass(c,"highlighted");
Element.setData(a,"highlightedItemId",d)
},_drawerForItem:function _drawerForItem(a,d){var f=ASSERT_TRUTHY(Element.getAttribute(d,"type"),"Expected non-empty type for drawer item");
var b="drawer-"+f;
var e=Element.maybeFindById(b);
if(!e){e=Element.create("div");
Element.setAttribute(e,"id",b);
var c=Element.findDescendentByClass(a,"drawerContainer");
Element.addClass(c,"sidebarLoading");
Element.append(c,e)
}return e
},_reloadListOfType:function _reloadListOfType(h,j){j=j||{};
var b=Element.findById("drawer-"+h);
Element.removeClass(b,"loadingComplete");
var d=false;
var c=Element.maybeFindDescendentByClass(b,"UISidebarDrawer");
if(c&&Element.hasClass(c,"editModeEnabled")){d=true
}var a=Url.createWithPath("/sidebar/list");
a.addQueryParams({type:h,isEditingEnabled:d});
if(j.extraRequestParams){a.addQueryParams(j.extraRequestParams)
}var e=AsyncRequest.create(a);
e.target=b;
e.targetReplacement="innerHTML";
e.preserveOverlay=true;
e.evalScript=true;
e.successCallback=FunctionUtils.bind(this,function i(){if(Element.visible(b)){var k=Element.findParentByClass(b,"drawerContainer");
Element.removeClass(k,"sidebarLoading");
this._setupScrollForDrawerIfNeeded(b)
}Element.addClass(b,"loadingComplete")
});
e.errorCallback=function f(){if(Element.visible(b)){var k=Element.findParentByClass(b,"drawerContainer");
Element.removeClass(k,"sidebarLoading")
}return EventDelegater.FORWARD
};
e.send()
},_didClickItem:function _didClickItem(a,d){var b=Element.findParentByClass(d,"itemContainer");
var c=Element.findParentByTagName(d,"a");
Element.setAttribute(c,"indicatorElement",b);
return UILinkController.didClick(c,d,{loadingElement:b})
},_didClickSectionTitle:function _didClickSectionTitle(b,e){var a=Element.findParentByClass(e,"sectionListContainer");
var d=Element.findDescendentByClass(a,"sectionListItemsContainer");
var c=function(){Element.toggleClass(d,"closed")
};
if(Element.hasClass(d,"closed")){d.slideDown({complete:c})
}else{d.slideUp({complete:c})
}},_didClickSortTitle:function _didClickSortTitle(a,d){var b=Element.findParentByClass(d,"UISidebarDrawer");
var c=Element.findParentByClass(d,"sortTitleContainer");
this._reloadListOfType(Element.getAttribute(b,"type"),{extraRequestParams:{sortField:Element.getAttribute(c,"sortField"),sortOrder:Element.getAttribute(c,"sortOrder")}})
},_setupScrollForDrawerIfNeeded:function _setupScrollForDrawerIfNeeded(b){var a=Element.maybeFindDescendentByClass(b,"UISidebarDrawer");
if(!a){return
}UISidebarDrawerController.setupScrollIfNeeded(a)
},_didResize:function _didResize(a){var e=Element.getData(a,"selectedItemId");
if(e){var c=this._drawerForItem(a,e);
this._setupScrollForDrawerIfNeeded(c)
}if(Element.hasClass(a,"forceMinimized")){return
}var b=Element.windowSize();
var d=b.width<=this.MIN_PAGE_WIDTH_FOR_EXPANSION;
this._setMinimized(a,d,{animated:false})
},_setMinimized:function _setMinimized(b,c,d){d=d||{};
var a=Element.hasClass(b,"minimized");
if(a==c){return
}var e=c?60:200;
var f=Element.findDescendentByClass(b,"navigationContainer");
if(d.animated===false){Element.setWidth(f,e);
Element.addClassIf(b,"minimized",c);
Element.addClassIf(Element.findBySelector(".pageBody"),"sidebarMinimized",c);
return
}Element.addClass(b,"expandToggling");
f.animate({width:e},{complete:function(){Element.removeClass(b,"expandToggling");
Element.addClassIf(b,"minimized",c);
Element.addClassIf(Element.findBySelector(".pageBody"),"sidebarMinimized",c)
}})
},_setAppContentPosition:function _setAppContentPosition(a,b){var c=(b.isMinimized?60:200)+(b.isPinned?300:0);
var d=jQuery(".pageBody");
if(b.animated===false){Element.setStyle(d,"padding-left",c)
}else{d.animate({"padding-left":c})
}},_didClickExpandToggleButton:function _didClickExpandToggleButton(a,c){var b=!Element.hasClass(a,"minimized");
this._setMinimized(a,b);
this._setAppContentPosition(a,{isMinimized:b,isPinned:Element.hasClass(a,"pinned")});
this._persistPreference("minimized",b?1:0)
},_didClickPinToggleButton:function _didClickPinToggleButton(b,d){var a=!Element.hasClass(b,"pinned");
this._setPinned(b,a);
if(a){var c=Element.getData(b,"selectedItemId");
this._persistPreference("pinned",Element.getAttribute(c,"type"))
}else{this._persistPreference("pinned",-1);
this._closeDrawer(b)
}},_setPinned:function _setPinned(b,a,c){c=c||{};
Element.addClassIf(b,"pinned",a);
Element.addClassIf(jQuery(".pageBody"),"sidebarPinned",a);
var d;
if(a){this._setMinimized(b,true,c);
d=true
}else{d=Element.hasClass(b,"minimized")
}this._setAppContentPosition(b,{isMinimized:d,isPinned:a,animated:c.animated})
},_persistPreference:function _persistPreference(a,c){var b=AsyncRequest.create("/w/sidebar/preference",{name:a,value:c});
b.isSilent=true;
b.preserveOverlay=true;
b.send()
}});
JSManager.setLoaded(253,"freebird/sidebar/UIController.js");
Object.define("UISidebarDrawerController",UIController,{setupScrollIfNeeded:function setupScrollIfNeeded(c){if(Element.maybeFindDescendentByClass(c,"emptyStateContainer")){return
}var d=Element.windowSize();
var h=Element.size(Element.findDescendentByClass(c,"actionButtonsContainer"));
var i=Element.findDescendentByClass(c,"scrollInfoLabel");
var b=Element.size(i);
var a=Element.size(Element.findDescendentByClass(c,"listHeaderContainer"));
var f=d.height-h.height-b.height-a.height-20;
var e=Element.findDescendentByClass(c,"itemListScrollContainer");
Element.makeScrollableWithMaxHeight(e,f,{size:"8px"});
Element.showIf(i,Element.hasClass(e,"scrollable"))
},didClick:function didClick(a,c){if(Element.maybeFindParentByClass(c,"editEnableAction")){this.setBulkEditEnabled(a,true);
return EventDelegater.STOP
}if(Element.maybeFindParentByClass(c,"editDisableAction")){this.setBulkEditEnabled(a,false);
return EventDelegater.STOP
}if(!Element.hasClass(a,"editModeEnabled")){return EventDelegater.FORWARD
}var b=Element.maybeFindParentByClass(c,"itemContainer");
if(b){return this._didSelectItem(a,c)
}return EventDelegater.FORWARD
},_didSelectItem:function _didSelectItem(a,i){var l=Element.findParentByClass(i,"itemContainer");
var b=!Element.hasClass(l,"selected");
Element.toggleClass(l,"selected");
var h=Element.maybeFindParentByClass(i,"bulkSelectCheckbox");
if(!h){h=Element.findDescendentByClass(l,"bulkSelectCheckbox");
UICheckboxController.setSelected(h,b)
}var k=ASSERT_TRUTHY(Element.getAttribute(h,"itemId"),"Expected non-empty id for checkbox");
var e=Element.findDescendentByClass(a,"bulkActionsForm");
var j=StringUtils.explodeCSV(Form.getInputValue(e,"selectedIds"));
var c=ArrayUtils.toHash(j);
if(b){c[k]=1
}else{delete c[k]
}j=ArrayUtils.keys(c);
var f=j.length;
Element.addClassIf(e,"disabled",f==0);
Form.setInputValue(e,"selectedIds",j.join(","));
var d=Element.findAllDescendentsByClass(e,"UIButton");
ArrayUtils.each(d,function(m,n){UIControlController.setEnabled(n,f>0)
});
return EventDelegater.STOP
},setBulkEditEnabled:function setBulkEditEnabled(b,d){Element.addClassIf(b,"editModeEnabled",d);
if(d){return
}var a=Element.maybeFindDescendentByClass(b,"bulkActionsForm");
if(!a){return
}Form.setInputValue(a,"selectedIds","");
var e=Element.findAllDescendentsBySelector(b,".itemContainer.selected");
ArrayUtils.each(e,function(f,h){Element.removeClass(h,"selected");
var i=Element.findDescendentByClass(h,"bulkSelectCheckbox");
UICheckboxController.setSelected(i,false)
});
var c=Element.findAllDescendentsByClass(a,"UIButton");
ArrayUtils.each(c,function(f,h){UIControlController.setEnabled(h,false)
})
}});
JSManager.setLoaded(254,"freebird/sidebar/UIDrawerController.js");
Object.define("UISidebarTagDrawerController",UIController,{didLoad:function didLoad(a){UISidebarDrawerController.didLoad(a)
},didClick:function didClick(a,d){var c=Element.maybeFindParentByClass(d,"tagContainer");
if(c){var b=Element.maybeFindParentByClass(d,"itemContentContainer");
if(!b){if(Element.hasClass(c,"hasChildren")){this._toggleChildTags(c,d);
return EventDelegater.STOP
}}}return UISidebarDrawerController.didClick(a,d)
},_toggleChildTags:function _toggleChildTags(b,d){var c=function(){Element.toggleClass(b,"closed")
};
var a=Element.findDescendentByClass(b,"childTagsContainer");
if(Element.hasClass(b,"closed")){a.slideDown({complete:c})
}else{a.slideUp({complete:c})
}}});
JSManager.setLoaded(255,"freebird/sidebar/UITagDrawerController.js");
Object.define("UISyncPrivacyController",UIController,{didClick:function didClick(a,d){if(Element.maybeFindParentByClass(d,"cancelActionContainer")){Overlay.hide();
return
}var b=Element.maybeFindParentByClass(d,"saveModeContainer");
if(!b){return EventDelegater.FORWARD
}var c=Element.findDescendentBySelector(a,".privacyOptionsContainer > .UIGrid > tbody > tr.selected");
this._setRowSelected(c,false);
var e=Element.findParentByTagName(b,"tr");
this._setRowSelected(e,true);
return EventDelegater.STOP
},_setRowSelected:function _setRowSelected(c,a){Element.addClassIf(c,"selected",a);
var b=Element.findDescendentBySelector(c,'input[type="radio"]');
Element.setCheckboxSelected(b,a)
}});
JSManager.setLoaded(227,"freebird/sync/UIPrivacyController.js");
Object.define("UISyncSaveCredentialsController",UIController,{didLoad:function didLoad(a,e){var b=ASSERT_TRUTHY(e.accountIds,"Expected valid account id");
var c=ASSERT_TRUTHY(e.credentials,"Expected valid credentials");
var d=ASSERT_TRUTHY(e.redirectUrl,"Expected valid redirect url");
ArrayUtils.each(b,function(f,h){SyncCredentialManager.saveCredentials(h,c)
});
AsyncRequest.create(d).send();
Overlay.hide()
}});
JSManager.setLoaded(225,"freebird/sync/UISaveCredentialsController.js");
Object.define("UISyncPageActionController",UIController,{didClick:function didClick(a,c){var e=ASSERT_TRUTHY(Element.getAttribute(a,"accountId"));
var d=SyncCredentialManager.getCredentialsForAccount(e);
if(d){var b=Url.parse(Element.getAttribute(a,"href"));
b.addQueryParam("credentials",d);
Element.setAttribute(a,"href",b)
}return UILinkController.didClick(a,c)
}});
JSManager.setLoaded(231,"freebird/sync/UIActionLinkController.js");
Object.define("UISyncDisableActionController",UIController,{didClick:function didClick(a,b){var c=ASSERT_TRUTHY(Element.getAttribute(a,"accountId"));
SyncCredentialManager.deleteCredentials(c);
return UILinkController.didClick(a,b)
}});
JSManager.setLoaded(230,"freebird/sync/UIDisableActionController.js");
Object.define("UISyncAllButtonController",UIController,{didLoad:function didLoad(a,b){this._hideIfNoSyncableAccounts(a,b)
},_hideIfNoSyncableAccounts:function _hideIfNoSyncableAccounts(a,d){if(d.hasOnlineAccounts){return
}var c=d.offlineAccountIds||[];
var b=false;
ArrayUtils.each(c,function(e,h){var f=SyncCredentialManager.getCredentialsForAccount(h);
if(f){b=true;
return false
}});
if(!b){Element.hide(a)
}},didClick:function didClick(a,b){UISidebarController.closeDrawer();
UISyncAllProgressController.startSync();
return EventDelegater.STOP
}});
JSManager.setLoaded(229,"freebird/sync/all/UIButtonController.js");
Object.define("UISyncAllProgressController",UIController,{didLoad:function didLoad(a,b){if(b.status=="running"){this._startProgressUpdate(a)
}else{this._maybeStartOfflineSync(a)
}},_maybeStartOfflineSync:function _maybeStartOfflineSync(a){var c=StringUtils.explodeCSV(Element.getAttribute(a,"offlineSyncableAccountIds"));
var b=[];
ArrayUtils.each(c,function(d,e){if(SyncCredentialManager.getCredentialsForAccount(e)){b.push(e)
}});
if(!b.length){return
}UISyncAllProgressController.startSync({accountIds:b,isBackground:true})
},startSync:function startSync(b){b=b||{};
var a=Element.findDescendentByClass("pageBody","UISyncAllProgress");
if(Element.hasClass(a,"running")){return
}var c=SyncCredentialManager.getAllCredentials();
var e={};
if(ArrayUtils.keys(c).length){e.credentials=JSManager.encodeJSON(c)
}if(b.accountIds){e.accountIds=b.accountIds.join(",")
}var d=AsyncRequest.create("/sync/all/start",e);
d.isSilent=b.isBackground;
d.successCallback=FunctionUtils.bind(this,function(f){this._startProgressUpdate(a);
delete e.accountIds;
var h=AsyncRequest.create("/sync/all/sync",e);
h.preserveOverlay=true;
h.isSilent=true;
h.send()
});
d.send()
},didClick:function didClick(b,d){if(Element.maybeFindParentByClass(d,"cancelActionContainer")){return this._didClickCancel(b)
}if(Element.maybeFindParentByClass(d,"closeActionContainer")){this._closeProgressBar(b);
return EventDelegater.STOP
}var a=Element.maybeFindParentByClass(d,"refreshActionContainer");
if(a){Element.setLoading(a,true);
window.location=window.location.href;
return EventDelegater.STOP
}var c=Element.maybeFindParentByClass(d,"transactionsActionContainer");
if(c){return UILinkController.didClick(c)
}return EventDelegater.FORWARD
},_startProgressUpdate:function _startProgressUpdate(a){jQuery(a).slideDown({complete:function(){Element.addClass(a,"running")
}});
this._fetchProgress(a)
},_fetchProgress:function _fetchProgress(a){var b=AsyncRequest.create("/sync/all/progress");
b.preserveOverlay=true;
b.isSilent=true;
b.successCallback=FunctionUtils.bind(this,function(e){var d=Element.fromContent(e.html);
var c=JSManager.decodeJSON(Element.innerHtml(d));
if(c.status=="completed"){this._updateProgress(a,c);
this._didComplete(a);
return
}if(c.status=="running"){this._updateProgress(a,c);
this._scheduleProgressFetch(a);
return
}});
b.errorCallback=FunctionUtils.bind(this,function(c){var d=Element.getAttribute(a,"numErrors")||0;
if(d<10){this._scheduleProgressFetch(a)
}return EventDelegater.STOP
});
b.send()
},_scheduleProgressFetch:function _scheduleProgressFetch(a){setTimeout(FunctionUtils.bind(this,this._fetchProgress,a),1500)
},_didClickCancel:function _didClickCancel(a){var b=AsyncRequest.create("/w/sync/all/cancel");
b.preserveOverlay=true;
b.isSilent=true;
b.send();
this._closeProgressBar(a);
return EventDelegater.STOP
},_closeProgressBar:function _closeProgressBar(a){jQuery(a).slideUp({complete:FunctionUtils.bind(this,function(){Element.removeClass(a,"running");
this._updateProgress(a,{numSyncableAccounts:0,numSyncedAccounts:0,tids:""})
})})
},_hideProgress:function _hideProgress(a){Element.removeClass(a,"running");
Element.removeClass(a,"completed")
},_didComplete:function _didComplete(a){Element.removeClass(a,"running");
Element.addClass(a,"completed")
},_updateProgress:function _updateProgress(a,j){var l=j.numSyncableAccounts;
var i=j.numSyncedAccounts;
var e=j.tids||"";
var f=Element.findDescendentByClass(a,"progressTextContainer");
Element.setInnerHtml(f,i+" OF "+l);
var h=Math.max(5,Math.floor(100*i/l));
var d=Element.findDescendentByClass(a,"progressInnerContainer");
Element.setStyle(d,"width",h+"%");
Element.setInnerHtml(d,h+"%");
var k=StringUtils.explodeCSV(e);
if(k.length){var b=Element.findDescendentByClass(a,"transactionsActionContainer");
Element.setAttribute(b,"href","/transactions?tids="+e);
Element.show(b)
}var c=Element.findDescendentByClass(a,"transactionsCountContainer");
Element.setInnerHtml(c,k.length)
}});
JSManager.setLoaded(228,"freebird/sync/all/UIProgressController.js");
Object.define("UIMembershipPaymentController",UIController,{RATE_SCHEDULE:null,STRIPE_KEY:null,didLoad:function didLoad(a,b){this.STRIPE_KEY=b.stripeKey;
this.RATE_SCHEDULE=b.rateSchedule
},didClick:function didClick(b,d){var a=Element.maybeFindParentByClass(d,"chooseCreditCardButton");
if(a){Element.hide(Element.findDescendentByClass(b,"paymentMethodButtonsContainer"));
Element.show(Element.findDescendentByClass(b,"creditCardInputsContainer"));
return EventDelegater.STOP
}var c=Element.maybeFindParentByClass(d,"creditCardSubmitButton");
if(c){this._submitCreditCardPayment(b,c);
return EventDelegater.STOP
}return EventDelegater.FORWARD
},didDropdownSelectValue:function didDropdownSelectValue(a,c){var b=Element.getAttribute(c,"name");
if(b=="planType"||b=="planPeriod"){this._recomputeTotalAmount(a)
}},_recomputeTotalAmount:function _recomputeTotalAmount(a){var b=Element.findDescendentBySelector(a,".UIDropdown[name=planType]");
var h=Element.findDescendentBySelector(a,".UIDropdown[name=planPeriod]");
var j=UIDropdownController.getValue(b);
var i=UIDropdownController.getValue(h);
var f=ASSERT_TRUTHY(this.RATE_SCHEDULE[j][i],"Failed to find rate for plan");
var d="";
if(i==12){var e=this.RATE_SCHEDULE[j][1];
var d=Math.round(100*(e-f)/e);
d="("+d+"% SAVINGS)"
}var k=Element.findDescendentByClass(a,"amountValueContainer");
Element.setInnerHtml(k,f);
var c=Element.findDescendentByClass(a,"savingsContainer");
Element.setInnerHtml(c,d)
},_submitCreditCardPayment:function _submitCreditCardPayment(b,d){Stripe.setPublishableKey(this.STRIPE_KEY);
var c=Element.findDescendentByClass(b,"paymentForm");
var e=FunctionUtils.bind_DEPRECATED(function(i,j){if(j.error){USERERROR(j.error.message);
WARNING("[Stripe JS Error] "+j.error.message);
return
}var k=j.id;
Element.setAttribute(Form.findInput(c,"stripeToken"),"value",k);
Form.submit(c,d)
},this);
var f=Form.getParams(c);
var h={cardNumber:"credit card number",expiryMonth:"expiry date",expiryYear:"expiry date",cardCVV:"security code"};
var a=false;
ArrayUtils.each(h,function(i,j){if(f[i]){return true
}USERERROR("Please enter a valid "+j);
a=true;
return false
});
if(a){return
}Stripe.createToken({number:f.cardNumber,cvc:f.cardCVV,exp_month:f.expiryMonth,exp_year:f.expiryYear},e)
}});
JSManager.setLoaded(222,"freebird/membership/UIPayment.js");
Object.define("UIAlertPopupController",UIController,{didPopupOpen:function didPopupOpen(b){var c=Element.maybeFindDescendentByClass(b,"badgeContainer");
if(!c){return EventDelegater.FORWARD
}var d=Element.getAttribute(c,"count");
if(d>0){Element.setAttribute(c,"count",0);
Element.setInnerHtml(c,0);
Element.hide(c);
var a=Element.getAttribute(b,"alertIds")||"";
var f=Element.getAttribute(b,"syncAlertIds")||"";
var e=AsyncRequest.create("/w/alert/markAllRead",{alertIds:a,syncAlertIds:f});
e.isSilent=true;
e.send()
}return EventDelegater.FORWARD
},didClick:function didClick(a,c){var d=Element.maybeFindParentByClass(c,"alertListContainer");
if(!d){return UIPopupController.didClick(a,c)
}UIPopupController.closePopup(a);
var b=Element.findParentByTagName(c,"a");
return UILinkController.didClick(b,c)
}});
JSManager.setLoaded(241,"freebird/alerts/UIPopupController.js");
Object.define("UIPageTitleController",UIController,{didClick:function didClick(a,b){if(Element.maybeFindParentByClass(b,"secondaryActionShowButton")){this._showSecondaryActions(a);
return EventDelegater.STOP
}if(Element.maybeFindParentByClass(b,"secondaryActionHideButton")){this._hideSecondaryActions(a);
return EventDelegater.STOP
}return EventDelegater.FORWARD
},_showSecondaryActions:function _showSecondaryActions(a){Element.setStyle(a,"transition-duration","0.4s");
Element.addClass(a,"actionsExpanded");
var d=Element.findDescendentByClass(a,"secondaryActionsContainer");
var b=Element.findDescendentByClass(a,"secondaryActionHideButton");
var c=Element.size(d).width-Element.size(b).width;
Element.setStyle(a,"transform","translate3d(-"+c+"px, 0, 0)")
},_hideSecondaryActions:function _hideSecondaryActions(a){Element.setStyle(a,"transition-duration","0.4s");
setTimeout(function(){Element.removeClass(a,"actionsExpanded")
},200);
var b=Element.findDescendentByClass(a,"secondaryActionsContainer");
Element.setStyle(a,"transform","translate3d(0px, 0, 0)")
}});
JSManager.setLoaded(236,"freebird/app/UITitleController.js");
Object.define("UIPageStatusController",UIController,{didLoad:function(a,b){Element.findById(a).slideDown()
},didClick:function didClick(a){Element.findById(a).slideUp();
return EventDelegater.STOP
}});
JSManager.setLoaded(237,"freebird/app/UIStatusController.js");
Object.define("UIDownloadPageActionController",UIController,{didClick:function didClick(a,b){return UIPopupController.didClick(a,b)
}});
JSManager.setLoaded(234,"freebird/app/actions/UIDownloadController.js");
Object.define("UIAppHeaderController",UIController,{didLoad:function didLoad(a){EventNotificationManager.subscribe(EventType.PAGE_DID_LOAD,FunctionUtils.bind(this,this._didPageLoad,a))
},_didPageLoad:function _didPageLoad(a,d){var c=Url.parse(Page.getCurrentUrl());
if(c.path=="/transactions"){return
}var b=Element.findDescendentByClass(a,"globalSearchInput");
Element.setValue(b,"");
Element.blur(b)
},didFocus:function didFocus(a,b){if(Element.hasClass(b,"globalSearchInput")){this._setSearchExpanded(a,true)
}},didBlur:function didBlur(a,b){if(Element.hasClass(b,"globalSearchInput")){this._setSearchExpanded(a,false)
}},_setSearchExpanded:function _setSearchExpanded(b,i){var c=Element.findDescendentByClass(b,"rightActionsContainer");
var e=Element.size(c).width;
var a=250;
var d=a+(i?e:0);
var f=Element.findDescendentByClass(b,"globalSearchInput");
var h;
if(i){h=Element.getAttribute(f,"placeholderExtended");
Element.addClass(b,"searchActive")
}else{h=Element.getAttribute(f,"placeholderDefault");
Element.removeClass(b,"searchActive")
}f.animate({width:d});
Element.setAttribute(f,"placeholder",h)
}});
JSManager.setLoaded(235,"freebird/app/UIHeaderController.js");
Object.define("UIReportController",UIController,{didLoad:function didLoad(a,b){this.resizeIfNeeded(a);
EventNotificationManager.subscribe(EventType.PAGE_DID_RESIZE,FunctionUtils.bind(this,this.resizeIfNeeded,a))
},resizeIfNeeded:function resizeIfNeeded(b){if(!Element.isInDOM(b)||Element.getAttribute(b,"hasFixedLayout")==="true"){return
}var e=Element.width(b);
var k=Element.maybeFindDescendentByClass(b,"UITimeline");
var a=parseInt(Element.getAttribute(b,"minContentWidth"))||600;
var i=parseInt(Element.getAttribute(b,"minChartWidth"))||600;
var f=a+i;
if(Element.hasClass(b,"modeConcise")){if(e<f){return
}var l=Element.findAllDescendentsBySelector(b,".chartsContainer > tbody > tr");
var j=Element.findAllDescendentsBySelector(b,".chartsContainer > tbody > tr > td");
Element.addClass(j[0],"rBorder");
Element.removeClass(j[1],"tBorder rBorder");
jQuery(j[1]).appendTo(l[0]);
if(k){Element.setAttribute(j[0],"rowspan",2);
Element.removeAttribute(j[0],"colspan")
}else{jQuery(l[1]).remove()
}Element.removeClass(b,"modeConcise")
}else{if(e>=f){return
}var c=Element.findDescendentByClass(b,"chartsContainer");
var l=Element.findAllDescendentsBySelector(b,".chartsContainer > tbody > tr");
var j=Element.findAllDescendentsBySelector(b,".chartsContainer > tbody > tr > td");
Element.removeClass(j[0],"rBorder");
Element.removeAttribute(j[0],"rowspan");
Element.setAttribute(j[0],"colspan",2);
Element.addClass(j[1],"tBorder rBorder");
if(k){jQuery(j[1]).prependTo(l[1])
}else{var h=Element.create("tr");
h.appendTo(c);
jQuery(j[1]).appendTo(h)
}Element.addClass(b,"modeConcise")
}var d=Element.findAllDescendentsByClass(b,"UIChart");
ArrayUtils.each(d,function(n,m){UIChart.refreshLayout(m)
})
}});
JSManager.setLoaded(223,"freebird/reports/UIController.js");
Object.define("UIAccountController",UIController,{didLoad:function didLoad(a,b){if(b.onLoadUrl){Page.openUrl(b.onLoadUrl)
}}});
JSManager.setLoaded(224,"freebird/accounts/UIController.js");
(function(f){var a={aliceblue:"#f0f8ff",antiquewhite:"#faebd7",aqua:"#00ffff",aquamarine:"#7fffd4",azure:"#f0ffff",beige:"#f5f5dc",bisque:"#ffe4c4",black:"#000000",blanchedalmond:"#ffebcd",blue:"#0000ff",blueviolet:"#8a2be2",brown:"#a52a2a",burlywood:"#deb887",cadetblue:"#5f9ea0",chartreuse:"#7fff00",chocolate:"#d2691e",coral:"#ff7f50",cornflowerblue:"#6495ed",cornsilk:"#fff8dc",crimson:"#dc143c",cyan:"#00ffff",darkblue:"#00008b",darkcyan:"#008b8b",darkgoldenrod:"#b8860b",darkgray:"#a9a9a9",darkgrey:"#a9a9a9",darkgreen:"#006400",darkkhaki:"#bdb76b",darkmagenta:"#8b008b",darkolivegreen:"#556b2f",darkorange:"#ff8c00",darkorchid:"#9932cc",darkred:"#8b0000",darksalmon:"#e9967a",darkseagreen:"#8fbc8f",darkslateblue:"#483d8b",darkslategray:"#2f4f4f",darkslategrey:"#2f4f4f",darkturquoise:"#00ced1",darkviolet:"#9400d3",deeppink:"#ff1493",deepskyblue:"#00bfff",dimgray:"#696969",dimgrey:"#696969",dodgerblue:"#1e90ff",firebrick:"#b22222",floralwhite:"#fffaf0",forestgreen:"#228b22",fuchsia:"#ff00ff",gainsboro:"#dcdcdc",ghostwhite:"#f8f8ff",gold:"#ffd700",goldenrod:"#daa520",gray:"#808080",grey:"#808080",green:"#008000",greenyellow:"#adff2f",honeydew:"#f0fff0",hotpink:"#ff69b4","indianred ":"#cd5c5c","indigo  ":"#4b0082",ivory:"#fffff0",khaki:"#f0e68c",lavender:"#e6e6fa",lavenderblush:"#fff0f5",lawngreen:"#7cfc00",lemonchiffon:"#fffacd",lightblue:"#add8e6",lightcoral:"#f08080",lightcyan:"#e0ffff",lightgoldenrodyellow:"#fafad2",lightgray:"#d3d3d3",lightgrey:"#d3d3d3",lightgreen:"#90ee90",lightpink:"#ffb6c1",lightsalmon:"#ffa07a",lightseagreen:"#20b2aa",lightskyblue:"#87cefa",lightslategray:"#778899",lightslategrey:"#778899",lightsteelblue:"#b0c4de",lightyellow:"#ffffe0",lime:"#00ff00",limegreen:"#32cd32",linen:"#faf0e6",magenta:"#ff00ff",maroon:"#800000",mediumaquamarine:"#66cdaa",mediumblue:"#0000cd",mediumorchid:"#ba55d3",mediumpurple:"#9370d8",mediumseagreen:"#3cb371",mediumslateblue:"#7b68ee",mediumspringgreen:"#00fa9a",mediumturquoise:"#48d1cc",mediumvioletred:"#c71585",midnightblue:"#191970",mintcream:"#f5fffa",mistyrose:"#ffe4e1",moccasin:"#ffe4b5",navajowhite:"#ffdead",navy:"#000080",oldlace:"#fdf5e6",olive:"#808000",olivedrab:"#6b8e23",orange:"#ffa500",orangered:"#ff4500",orchid:"#da70d6",palegoldenrod:"#eee8aa",palegreen:"#98fb98",paleturquoise:"#afeeee",palevioletred:"#d87093",papayawhip:"#ffefd5",peachpuff:"#ffdab9",peru:"#cd853f",pink:"#ffc0cb",plum:"#dda0dd",powderblue:"#b0e0e6",purple:"#800080",red:"#ff0000",rosybrown:"#bc8f8f",royalblue:"#4169e1",saddlebrown:"#8b4513",salmon:"#fa8072",sandybrown:"#f4a460",seagreen:"#2e8b57",seashell:"#fff5ee",sienna:"#a0522d",silver:"#c0c0c0",skyblue:"#87ceeb",slateblue:"#6a5acd",slategray:"#708090",slategrey:"#708090",snow:"#fffafa",springgreen:"#00ff7f",steelblue:"#4682b4",tan:"#d2b48c",teal:"#008080",thistle:"#d8bfd8",tomato:"#ff6347",turquoise:"#40e0d0",violet:"#ee82ee",wheat:"#f5deb3",white:"#ffffff",whitesmoke:"#f5f5f5",yellow:"#ffff00",yellowgreen:"#9acd32"};
function b(){f("document").ready(function(){var j=document.createElement("p"),k,m={webkitTransform:"-webkit-transform",OTransform:"-o-transform",msTransform:"-ms-transform",MozTransform:"-moz-transform",transform:"transform"};
document.body.appendChild(j);
for(var l in m){if(j.style[l]!==undefined){j.style[l]="rotateX(1deg)";
k=window.getComputedStyle(j).getPropertyValue(m[l])
}}document.body.removeChild(j);
i=(k!==undefined&&k.length>0&&k!=="none")
})
}var c=(navigator.appName=="Microsoft Internet Explorer");
var e=window.HTMLCanvasElement;
var i=null;
b();
var h=Math.PI;
var d=function(l,j,k){this.animate=function(m){if(m){this._RBefore()
}else{this._Before()
}if(typeof m!==k&&m){var o=this._Recto;
var n=this._Recto_color;
this._Recto=this._Verso;
this._Color=this._Recto_color=this._Verso_color;
this._Verso=o;
this._Color_target=this._Verso_color=n;
this._Reversing=true;
switch(this._Direction){case"TOP":this._Direction="BOTTOM";
break;
case"BOTTOM":this._Direction="TOP";
break;
case"LEFT":this._Direction="RIGHT";
break;
case"RIGHT":this._Direction="LEFT";
break
}}if(this._noCSS||!i){this.initiateFlippy();
this.cvO=document.getElementById("flippy"+this._UID);
this.jO.data("_oFlippy_",this);
this._Int=setInterval(f.proxy(this.drawFlippy,this),this._Refresh_rate)
}else{this.jO.addClass("flippy_active").parent().css({perspective:Math.floor(this._Depth*this._nW)+"px"});
this.jO.data("_oFlippy_",this);
this._Int=setInterval(f.proxy(this.drawFlippyCSS,this),this._Refresh_rate)
}};
this.drawFlippyCSS=function(){this._Ang=(this._Direction=="RIGHT"||this._Direction=="TOP")?this._Ang+this._Step_ang:this._Ang-this._Step_ang;
var m=(this._Direction=="RIGHT"||this._Direction=="LEFT")?"Y":"X";
if(((this._Direction=="RIGHT"||this._Direction=="TOP")&&this._Ang>90&&this._Ang<=(90+this._Step_ang))||((this._Direction=="LEFT"||this._Direction=="BOTTOM")&&this._Ang<-90&&this._Ang>=(-90-this._Step_ang))){if(this._Reversing){this._RMidway()
}else{this._Midway()
}this.jO.css({opacity:this._Color_target_alpha,background:this._Color_target}).empty().append(this._Verso);
this._Ang=(this._Direction=="RIGHT"||this._Direction=="TOP")?-90:90;
this._Half=true
}if(this._Direction=="RIGHT"||this._Direction=="TOP"){this._Ang=(this._Ang>(this._Step_ang)&&this._Half)?this._Ang-(this._Step_ang):this._Ang
}else{this._Ang=(this._Ang<(-this._Step_ang)&&this._Half)?this._Ang+(this._Step_ang):this._Ang
}if(((this._Direction=="RIGHT"||this._Direction=="TOP")&&this._Ang>0&&this._Half)||((this._Direction=="LEFT"||this._Direction=="BOTTOM")&&this._Ang<0&&this._Half)){this.jO.removeClass("flippy_active").css({"-webkit-transform":"rotate"+m+"(0deg)","-moz-transform":"rotate"+m+"(0deg)","-o-transform":"rotate"+m+"(0deg)","-ms-transform":"rotate"+m+"(0deg)",transform:"rotate"+m+"(0deg)"}).find(".flippy_light").remove();
clearInterval(this._Int);
this._Half=false;
if(this._Reversing){this._RAfter()
}else{this._After()
}return
}else{this.jO.css({"-webkit-transform":"rotate"+m+"("+this._Ang+"deg)","-moz-transform":"rotate"+m+"("+this._Ang+"deg)","-o-transform":"rotate"+m+"("+this._Ang+"deg)","-ms-transform":"rotate"+m+"("+this._Ang+"deg)",transform:"rotate"+m+"("+this._Ang+"deg)"})
}this.applyLight();
if(this._Reversing){this._RDuring()
}else{this._During()
}};
this.applyLight=function(){if(this.jO.find(".flippy_light").size()===0){this.jO.append('<div class="flippy_light"></div>').find(".flippy_light").css({position:"absolute",top:"0",left:"0","min-width":this._nW+"px","min-height":this._nH+"px",width:this._nW+"px",height:this._nH+"px","background-color":((this._Direction=="LEFT"&&this._Half)||(this._Direction=="RIGHT"&&!this._Half)||(this._Direction=="TOP"&&this._Half)||(this._Direction=="BOTTOM"&&!this._Half))?"#000":"#FFF",opacity:(Math.abs(this._Ang)*this._Light/90)/100})
}else{this.jO.find(".flippy_light").css({"background-color":((this._Direction=="LEFT"&&this._Half)||(this._Direction=="RIGHT"&&!this._Half)||(this._Direction=="TOP"&&this._Half)||(this._Direction=="BOTTOM"&&!this._Half))?"#000":"#FFF",opacity:(Math.abs(this._Ang)*this._Light/90)/100})
}};
this.initiateFlippy=function(){var m;
this.jO.addClass("flippy_active").empty().css({opacity:this._Color_alpha,background:"none",position:"relative",overflow:"visible"});
switch(this._Direction){case"TOP":this._CenterX=(Math.sin(h/2)*this._nW*this._Depth);
this._CenterY=this._H/2;
m='<canvas id="flippy'+this._UID+'" class="flippy" width="'+(this._W+(2*this._CenterX))+'" height="'+this._H+'"></canvas>';
this.new_flippy(m);
this.jO.find("#flippy"+this._UID).css({position:"absolute",top:"0",left:"-"+this._CenterX+"px"});
break;
case"BOTTOM":this._CenterX=(Math.sin(h/2)*this._nW*this._Depth);
this._CenterY=this._H/2;
m='<canvas id="flippy'+this._UID+'" class="flippy" width="'+(this._W+(2*this._CenterX))+'" height="'+this._H+'"></canvas>';
this.new_flippy(m);
this.jO.find("#flippy"+this._UID).css({position:"absolute",top:"0",left:"-"+this._CenterX+"px"});
break;
case"LEFT":this._CenterY=(Math.sin(h/2)*this._nH*this._Depth);
this._CenterX=this._W/2;
m='<canvas id="flippy'+this._UID+'" class="flippy" width="'+this._W+'" height="'+(this._H+(2*this._CenterY))+'"></canvas>';
this.new_flippy(m);
this.jO.find("#flippy"+this._UID).css({position:"absolute",top:"-"+this._CenterY+"px",left:"0"});
break;
case"RIGHT":this._CenterY=(Math.sin(h/2)*this._nH*this._Depth);
this._CenterX=this._W/2;
m='<canvas id="flippy'+this._UID+'" class="flippy" width="'+this._W+'" height="'+(this._H+(2*this._CenterY))+'"></canvas>';
this.new_flippy(m);
this.jO.find("#flippy"+this._UID).css({position:"absolute",top:"-"+this._CenterY+"px",left:"0"});
break
}};
this.drawFlippy=function(){this._Ang+=this._Step_ang;
if(this._Ang>90&&this._Ang<=(90+this._Step_ang)){if(this._Reversing){this._RMidway()
}else{this._Midway()
}this.jO.css({opacity:this._Color_target_alpha})
}this._Ang=(this._Ang>(180+this._Step_ang))?this._Ang-(180+this._Step_ang):this._Ang;
var m=(this._Ang/180)*h;
if(this.cvO===null){return
}if(c&&!e){G_vmlCanvasManager.initElement(this.cvO)
}var n=this.cvO.getContext("2d");
n.clearRect(0,0,this._W+(2*this._CenterX),this._H+(2*this._CenterY));
n.beginPath();
var p=Math.sin(m)*this._H*this._Depth;
var o=Math.sin(m)*this._W*this._Depth;
var r,q;
switch(this._Direction){case"LEFT":r=Math.cos(m)*(this._W/2);
n.fillStyle=(this._Ang>90)?this.changeColor(this._Color_target,Math.floor(Math.sin(m)*this._Light)):this.changeColor(this._Color,-Math.floor(Math.sin(m)*this._Light));
n.moveTo(this._CenterX-r,this._CenterY+p);
n.lineTo(this._CenterX+r,this._CenterY-p);
n.lineTo(this._CenterX+r,this._CenterY+this._H+p);
n.lineTo(this._CenterX-r,this._CenterY+this._H-p);
n.lineTo(this._CenterX-r,this._CenterY);
n.fill();
break;
case"RIGHT":r=Math.cos(m)*(this._W/2);
n.fillStyle=(this._Ang>90)?this.changeColor(this._Color_target,-Math.floor(Math.sin(m)*this._Light)):this.changeColor(this._Color,Math.floor(Math.sin(m)*this._Light));
n.moveTo(this._CenterX+r,this._CenterY+p);
n.lineTo(this._CenterX-r,this._CenterY-p);
n.lineTo(this._CenterX-r,this._CenterY+this._H+p);
n.lineTo(this._CenterX+r,this._CenterY+this._H-p);
n.lineTo(this._CenterX+r,this._CenterY);
n.fill();
break;
case"TOP":q=Math.cos(m)*(this._H/2);
n.fillStyle=(this._Ang>90)?this.changeColor(this._Color_target,-Math.floor(Math.sin(m)*this._Light)):this.changeColor(this._Color,Math.floor(Math.sin(m)*this._Light));
n.moveTo(this._CenterX+o,this._CenterY-q);
n.lineTo(this._CenterX-o,this._CenterY+q);
n.lineTo(this._CenterX+this._W+o,this._CenterY+q);
n.lineTo(this._CenterX+this._W-o,this._CenterY-q);
n.lineTo(this._CenterX,this._CenterY-q);
n.fill();
break;
case"BOTTOM":q=Math.cos(m)*(this._H/2);
n.fillStyle=(this._Ang>90)?this.changeColor(this._Color_target,Math.floor(Math.sin(m)*this._Light)):this.changeColor(this._Color,-Math.floor(Math.sin(m)*this._Light));
n.moveTo(this._CenterX+o,this._CenterY+q);
n.lineTo(this._CenterX-o,this._CenterY-q);
n.lineTo(this._CenterX+this._W+o,this._CenterY-q);
n.lineTo(this._CenterX+this._W-o,this._CenterY+q);
n.lineTo(this._CenterX,this._CenterY+q);
n.fill();
break
}if(this._Ang>180){this.jO.removeClass("flippy_active").css({background:this._Color_target}).append(this._Verso).removeClass("flippy_container").find(".flippy").remove();
clearInterval(this._Int);
if(this._Reversing){this._RAfter()
}else{this._After()
}return
}if(this._Reversing){this._RDuring()
}else{this._During()
}};
this.new_flippy=function(o){if(c&&!e){this.jO.addClass("flippy_container").attr("id","flippy_container"+this._UID);
var n=document.getElementById("flippy_container"+this._UID);
var m=document.createElement(o);
n.appendChild(m)
}else{this.jO.append(o)
}};
this.convertColor=function(m){var n=a.hasOwnProperty(m)?a[m]:m;
if(/^transparent$/i.test(n)){return"#ffffff"
}if(n.substr(0,4)=="rgb("){return["#",this.toHex(n.substr(4,n.length).split(",")[0]>>>0),this.toHex(n.substr(3,n.length).split(",")[1]>>>0),this.toHex(n.substr(3,n.length-4).split(",")[2]>>>0)].join("")
}if(n.substr(0,5)=="rgba("){return["#",this.toHex(n.substr(5,n.length).split(",")[0]>>>0),this.toHex(n.substr(3,n.length).split(",")[1]>>>0),this.toHex(n.substr(3,n.length-4).split(",")[2]>>>0)].join("")
}return n
};
this.toHex=function(p){var m=[];
while(Math.floor(p)>16){m.push(p%16);
p=Math.floor(p/16)
}var n,o;
switch(p){case 10:n="A";
break;
case 11:n="B";
break;
case 12:n="C";
break;
case 13:n="D";
break;
case 14:n="E";
break;
case 15:n="F";
break;
default:n=""+p;
break
}for(o=m.length-1;
o>=0;
o--){switch(m[o]){case 10:n+="A";
break;
case 11:n+="B";
break;
case 12:n+="C";
break;
case 13:n+="D";
break;
case 14:n+="E";
break;
case 15:n+="F";
break;
default:n+=""+m[o];
break
}}if(n.length==1){return"0"+n
}else{return n
}};
this.changeColor=function(n,r){var s=n.substr(1,2);
var m=n.substr(3,2);
var v=n.substr(5,2);
var o=(parseInt(s,16)+r>255)?255:parseInt(s,16)+r;
var q=(parseInt(m,16)+r>255)?255:parseInt(m,16)+r;
var p=(parseInt(v,16)+r>255)?255:parseInt(v,16)+r;
s=(o<=0)?"00":this.toHex(o);
m=(q<=0)?"00":this.toHex(q);
v=(p<=0)?"00":this.toHex(p);
return"#"+s+m+v
};
j=f.extend({step_ang:10,refresh_rate:15,duration:300,depth:0.12,color_target:"white",light:60,content:"",direction:"LEFT",noCSS:false,onStart:function(){},onMidway:function(){},onAnimation:function(){},onFinish:function(){},onReverseStart:function(){},onReverseMidway:function(){},onReverseAnimation:function(){},onReverseFinish:function(){}},j);
this._Reversing=false;
this._Half=false;
this._UID=Math.floor(Math.random()*1000000);
this.jO=l;
this._noCSS=j.noCSS;
this._Ang=0;
this._Step_ang=(j.refresh_rate/j.duration)*200;
this._Refresh_rate=j.refresh_rate;
this._Duration=j.duration;
this._Depth=j.depth;
if(j.color_target){this._Color_target_is_rgba=(j.color_target.substr(0,5)=="rgba(");
this._Color=l.css("background-color");
this._Color_target_alpha=(this._Color_target_is_rgba)?j.color_target.substr(3,j.color_target.length-4).split(",")[3]>>>0:1;
this._Color_alpha=/^transparent$/i.test(""+this._Color)?0:(this._Color.substr(0,5)=="rgba(")?this._Color.substr(3,this._Color.length-4).split(",")[3]>>>0:1;
this._Color_target=this.convertColor(j.color_target);
this._Color=this.convertColor(this._Color)
}this._Direction=j.direction.toUpperCase();
this._Light=j.light;
this._Content=(typeof j.content=="object")?j.content.html():j.content;
this._Recto_color=this._Color;
this._Verso_color=this._Color_target;
this._Recto=(j.recto!==k)?j.recto:this.jO.html();
this._Verso=(j.verso!==k)?j.verso:this._Content;
this._Before=j.onStart;
this._During=j.onAnimation;
this._Midway=j.onMidway;
this._After=j.onFinish;
this._RBefore=j.onReverseStart;
this._RDuring=j.onReverseAnimation;
this._RMidway=j.onReverseMidway;
this._RAfter=j.onReverseFinish;
this._nW=this.jO.width();
this._nH=this.jO.height();
this._W=this.jO.outerWidth();
this._H=this.jO.outerHeight();
j=null
};
f.fn.flippy=function(j){return this.each(function(){$t=f(this);
if(!$t.hasClass("flippy_active")){var k=new d($t,j);
k.animate()
}})
};
f.fn.flippyReverse=function(){return this.each(function(){$t=f(this);
if(!$t.hasClass("flippy_active")){var j=$t.data("_oFlippy_");
j.animate(true)
}})
}
})(jQuery);
JSManager.setLoaded(206,"vendors/jquery.flippy.js");
Object.define("UIAuthDialogController",UIController,{showWithMode:function showWithMode(b,f){b=Element.findById(b);
var d,c;
if(f=="login"){d="authModeLogin";
c="authModeSignup"
}else{c="authModeLogin";
d="authModeSignup"
}var e=function(){var h=(f=="login")?"username":"email";
Element.findDescendentBySelector(b,"input[name="+h+"]").focus()
};
if(Element.visible(b)){if(Element.hasClass(b,d)){return
}var a=b.children().first();
a.flippy({verso:Element.innerHtml(a),duration:500,depth:1,direction:f=="login"?"right":"left",onMidway:function(){Element.addClass(b,d);
Element.removeClass(b,c)
},onFinish:e})
}else{Element.addClass(b,d);
Element.removeClass(b,c);
Overlay.present(b);
e()
}},didClick:function didClick(a,c){var b=Element.maybeFindParentByClass(c,"authToggleLink");
if(b){if(Element.hasClass(a,"authModeLogin")){this.showWithMode(a,"signup")
}else{this.showWithMode(a,"login")
}return EventDelegater.STOP
}return UIModalDialogController.didClick(a,c)
}});
JSManager.setLoaded(232,"freebird/auth/UIDialogController.js");
