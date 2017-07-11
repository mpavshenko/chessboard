"use strict";function board(e,n){function i(e){var n=$('<div class="cell"></div>').width(g).height(g);return n.append($('<div class="piece"/>').width(g).height(g).css("background-image",e)),n}function r(){Q.removeClass("clicked"),Q=null}function a(){H=_,$("#arrow-btn").css("background-color","white"),$("#arrow-btn").css("color",u),$("."+m+" .cell, ."+m+" .piece").addClass("cursor-pointer")}function t(){H=null,F=null,$("#arrow-btn").css("background-color",u),$("#arrow-btn").css("color","white"),$("."+m+" .cell, ."+m+" .piece").removeClass("cursor-pointer")}function c(){for(var e=0;e<s.SQUARES.length;e++){var n=s.SQUARES[e],i=s.get(n);if(i){var r=$("#"+n);console.log(e+" "+n+" "+i.type),r.append($('<div id="'+n+'" class="piece"></div>').width(g).height(g).css("background-image","url(img/pieces/"+i.type+i.color+".svg)"))}}}function o(){$(window).width()-$("#board-container").outerWidth(!0)-Math.min($("#pieces-panel").outerWidth(!0),$("#pieces-panel").outerHeight(!0))>0?($("#pieces-panel .cell").css("float","none"),$("#pieces-panel .pieces-panel-row").css("float","left")):($("#pieces-panel .cell").css("float","left"),$("#pieces-panel .pieces-panel-row").css("float","none"))}var s=new Chess;s.reset();var l=$(e),p=$(n),d=window.innerWidth,h=window.innerHeight,u="#2780E3",g=Math.floor((Math.min(d,h)-40)/8.6),v=.3*g,f=8*g+4,w=f+2*v;l.width(w).height(w);for(var m="gameField",b=$('<div class="'+m+'"/>').height(f).width(f),k=[],y=0;y<s.SQUARES.length;y++){var A=s.SQUARES[y],S=s.square_color(A),x=s.get(A),C=$('<div id="'+A+'" class="cell"></div>').width(g).height(g);b.append(C.addClass(S)),x&&C.append($('<div class="piece"></div>').width(g).height(g).css("background-image","url(img/pieces/"+x.type+x.color+".svg)")),k.push(C[0])}for(var E=$("<div>").css("margin-left",v+"px"),R=["A","B","C","D","E","F","G","H"],y=0;y<8;y++){var z=$('<div class="alphabetLetter">'+R[y]+"</div>").width(g).height(v).css("line-height",v+"px").css("font-size",.2*g+"px");E.append(z)}for(var P=$('<div class="numericLetterPanel"/>').width(v),y=8;y>0;y--){var L=$('<div class="numericLetter">'+y+"</div>").css("line-height",g+"px").css("font-size",.2*g+"px");P.append(L)}l.append(E),l.append($("<div/>").append(P).append(b).append(P.clone())),l.append(E.clone());for(var W=["b","w"],T=["r","n","b","k","q","p"],U=$("<div/>"),D=[],y=0;y<W.length;y++){for(var M=$('<div class="pieces-panel-row"/>'),O=0;O<T.length;O++){C=i("url(img/pieces/"+T[O]+W[y]+".svg)");M.append(C),D.push(C[0])}if(0==y){C=i("url(img/pieces/custom/duck.svg)");M.append(C),D.push(C[0]),C=i("url(img/pieces/custom/owl.svg)"),M.append(C),D.push(C[0])}else{C=i("url(img/pieces/custom/pig.svg)");M.append(C),D.push(C[0]),C=i("url(img/pieces/custom/rocket.svg)"),M.append(C),D.push(C[0])}U.append(M)}U.append('<div class="clearfix"/>'),p.append(U).css("padding",v+"px");var Q=null,H=null,_="ARROW_DRAW_MODE",q=$cArrows("."+m),F=null;$(".cell").on("click",function(e){if(e.stopPropagation(),H==_)if($(this).parents("."+m).length>0)if(F){var n=$(this).attr("id");F!=n&&q.arrow("#"+F,"#"+$(this).attr("id"),{arrow:{connectionType:"center"},render:{strokeStyle:u,lineWidth:g/8}}),F=null}else F=$(this).attr("id");else t();else{var i=$(this);Q?(0==i.parents("#pieces-panel").length?(Q.is(i)||i.empty(),Q.parents("#pieces-panel").length>0?$(Q.children()[0]).clone().prependTo(i):$(Q.children()[0]).detach().prependTo(i)):0==Q.parents("#pieces-panel").length&&Q.empty(),r()):i.children().length>0&&(Q=i,i.addClass("clicked"))}}),$(window).on("click",function(e){Q&&(0==Q.parents("#pieces-panel").length&&Q.empty(),r()),t()});var B=dragula(k.concat(D),{revertOnSpill:!0,removeOnSpill:!0,accepts:function(e,n,i,r){return!($(n).parents("#pieces-panel").length>0)&&(setTimeout(function(){$(".gu-transit",n).prependTo(n)}),!0)},copy:function(e){return $(e).parents("#pieces-panel").length>0}});B.on("drag",function(e,n){t(),Q&&r()}),B.on("drop",function(e,n,i,r){$(n).children().not(":first").remove()}),$(window).resize(function(){o()}),$(document).ready(function(){o()});var G={};return G.clear=function(){s.clear(),$(".piece",e).remove()},G.initial=function(){G.clear(),s.reset(),c()},G.createArrow=function(e){a(),e.stopPropagation()},G.clearArrowLayout=function(){q.CanvasStorage[2]=[],q.redraw()},G.sizePx=w,G}var board=board("#board-container","#pieces-panel");$("#clear-btn").click(board.clear),$("#initial-btn").click(board.initial),$("#arrow-btn").click(board.createArrow),$("#arrows-delete-btn").click(board.clearArrowLayout),$("#download-image-btn").click(function(e){console.log(board.sizePx),html2canvas($("#board-container"),{onrendered:function(e){document.body.appendChild(e);var n=document.createElement("a"),i=e.toDataURL("image/png");i=i.replace("image/png","image/octet-stream"),document.body.removeChild(e),n.download="board.png",n.href=i,n.click()},width:board.sizePx,height:board.sizePx})});
//# sourceMappingURL=app.js.map
