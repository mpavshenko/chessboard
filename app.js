"use strict";function board(e,i){function a(){for(var e=0;e<n.SQUARES.length;e++){var i=n.SQUARES[e],a=n.get(i);if(a){var t=$("#"+i);console.log(e+" "+i+" "+a.type),t.append($('<div id="'+i+'" class="piece"></div>').width(s).height(s).css("background-image","url(img/pieces/"+a.type+a.color+".svg)"))}}}var n=new Chess;n.reset();var t=$(e),r=$(i),d=window.innerWidth,c=window.innerHeight,s=Math.floor((Math.min(d,c)-40)/8.6),p=.3*s,o=8*s+4,l=o+2*p;t.width(l).height(l);for(var h=$('<div class="gameField"/>').height(o).width(o),g=[],v=0;v<n.SQUARES.length;v++){var u=n.SQUARES[v],m=n.square_color(u),f=n.get(u),b=$('<div id="'+u+'" class="cell"></div>').width(s).height(s);h.append(b.addClass(m)),f&&b.append($('<div id="'+u+'" class="piece"></div>').width(s).height(s).css("background-image","url(img/pieces/"+f.type+f.color+".svg)")),g.push(b[0])}for(var w=$("<div>").css("margin-left",p+"px"),x=["A","B","C","D","E","F","G","H"],v=0;v<8;v++){var S=$('<div class="alphabetLetter">'+x[v]+"</div>").width(s).height(p).css("line-height",p+"px").css("font-size",.2*s+"px");w.append(S)}for(var k=$('<div class="numericLetterPanel"/>').width(p),v=8;v>0;v--){var y=$('<div class="numericLetter">'+v+"</div>").css("line-height",s+"px").css("font-size",.2*s+"px");k.append(y)}t.append(w),t.append($("<div/>").append(k).append(h).append(k.clone())),t.append(w.clone());for(var z=["b","w"],C=["r","n","b","k","q","p"],E=$("<div/>"),A=[],v=0;v<z.length;v++){for(var P=$('<div class="'+z[v]+'"/>'),R=0;R<C.length;R++)(b=$('<div class="cell"></div>').width(s).height(s)).append($('<div class="piece"/>').width(s).height(s).css("background-image","url(img/pieces/"+C[R]+z[v]+".svg)")),P.append(b),A.push(b[0]);E.append(P)}E.append('<div class="clearfix"/>'),r.append(E).css("padding",p+"px"),dragula(g.concat(A),{revertOnSpill:!0,removeOnSpill:!0,accepts:function(e,i,a,n){return!($(i).parents("#pieces-panel").length>0)&&(setTimeout(function(){$(e).hasClass("gu-transit")?$($(e).detach().prependTo($(i))):$(e).parent().children().not(":first").remove()}),!0)},copy:function(e){return $(e).parents("#pieces-panel").length>0}});var U={};return U.clear=function(){n.clear(),$(".piece",e).remove()},U.initial=function(){U.clear(),n.reset(),a()},U.sizePx=l,U}var board=board("#board-container","#pieces-panel");$("#clear-btn").click(board.clear),$("#initial-btn").click(board.initial),$("#download-image-btn").click(function(e){console.log(board.sizePx),html2canvas($("#board-container"),{onrendered:function(e){document.body.appendChild(e);var i=document.createElement("a"),a=e.toDataURL("image/png");a=a.replace("image/png","image/octet-stream"),document.body.removeChild(e),i.download="board.png",i.href=a,i.click()},width:board.sizePx,height:board.sizePx})});
//# sourceMappingURL=app.js.map
