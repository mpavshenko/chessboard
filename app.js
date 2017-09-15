"use strict";function board(e,n){function t(e,n,t){var i=$('<div class="cell"></div>').width(b).height(b);return i.append($('<div data-type="'+B.type+'" data-color="'+B.color+'" class="piece"/>').width(b).height(b).css("background-image",e)),i}function i(){L&&L.removeClass("clicked"),L=null}function r(){D=H,$("#arrow-btn").css("background-color","white"),$("#arrow-btn").css("box-shadow","inset 0 0 0 "+b/10+"px "+g),$("#arrow-btn").css("color",g),$("."+m+" .cell, ."+m+" .piece").addClass("cursor-pointer")}function o(){D=null,O=null,$("#arrow-btn").css("background-color",""),$("#arrow-btn").css("box-shadow","none"),$("#arrow-btn").css("color","white"),$("."+m+" .cell, ."+m+" .piece").removeClass("cursor-pointer")}function a(e,n,t,i){l.remove(e),console.log(e,n,t,i),console.log(l.put({type:n,color:t},i)),console.log(l.fen())}function p(){for(var e=0;e<l.SQUARES.length;e++){var n=l.SQUARES[e],t=l.get(n);if(t){var i=$("#"+n);console.log(e+" "+n+" "+t.type),i.append($('<div data-type="'+t.type+'" data-color="'+t.color+'" id="'+n+'" class="piece"></div>').width(b).height(b).css("background-image","url(img/pieces/"+t.type+t.color+".svg)"))}}}function s(){$(".btn-main").height(b).width(b).css("font-size",b/2).css("line-height",b+"px");var e=$("body").hasClass("hide-sidedrawer")?0:$("#sidedrawer").width(),n=$(window).width()-e-$("#board-container").outerWidth(!0)-$("#pieces-panel").outerWidth(!0)-$("#tools-container").outerHeight(!0)>0,t=$("#tools-container").position().top>0;!t||t&&n?$("#tools-panel>div").removeClass("horizontal").addClass("vertical"):$("#tools-panel>div").removeClass("vertical").addClass("horizontal")}function c(){var e=$("body").hasClass("hide-sidedrawer")?0:$("#sidedrawer").width();$(window).width()-e-$("#board-container").outerWidth(!0)-Math.min($("#pieces-panel").outerWidth(!0),$("#pieces-panel").outerHeight(!0))>0?($("#pieces-panel .cell").css("float","none"),$("#pieces-panel .pieces-panel-row").css("float","left")):($("#pieces-panel .cell").css("float","left"),$("#pieces-panel .pieces-panel-row").css("float","none"))}var l=new Chess;l.reset();var d=$(e),h=$(n),P=window.innerWidth,u=window.innerHeight-$("#header").height(),g="#2780E3",b=Math.floor((Math.min(P,u)-40)/8.6),v=.3*b,w=8*b+4,f=w+2*v;d.width(f).height(f);for(var m="gameField",k=$('<div class="'+m+'"/>').height(w).width(w),y=[],R=0;R<l.SQUARES.length;R++){var Q=l.SQUARES[R],q=l.square_color(Q),B=l.get(Q),N=$('<div id="'+Q+'" class="cell"></div>').width(b).height(b);k.append(N.addClass(q)),B&&N.append($('<div data-type="'+B.type+'" data-color="'+B.color+'" class="piece"></div>').width(b).height(b).css("background-image","url(img/pieces/"+B.type+B.color+".svg)")),y.push(N[0])}for(var K=$("<div>").css("margin-left",v+"px"),C=["A","B","C","D","E","F","G","H"],R=0;R<8;R++){var x=$('<div class="alphabetLetter">'+C[R]+"</div>").width(b).height(v).css("line-height",v+"px").css("font-size",.2*b+"px");K.append(x)}for(var S=$('<div class="numericLetterPanel"/>').width(v),R=8;R>0;R--){var A=$('<div class="numericLetter">'+R+"</div>").css("line-height",b+"px").css("font-size",.2*b+"px");S.append(A)}d.append(K),d.append($("<div/>").append(S).append(k).append(S.clone())),d.append(K.clone());for(var z=["b","w"],E=["r","n","b","k","q","p"],T=$("<div/>"),W=[],R=0;R<z.length;R++){for(var U=$('<div class="pieces-panel-row"/>'),F=0;F<E.length;F++){N=t("url(img/pieces/"+E[F]+z[R]+".svg)");U.append(N),W.push(N[0])}if(0==R){N=t("url(img/pieces/custom/duck.svg)");U.append(N),W.push(N[0]),N=t("url(img/pieces/custom/owl.svg)"),U.append(N),W.push(N[0])}else{N=t("url(img/pieces/custom/bomb.svg)");U.append(N),W.push(N[0]),N=t("url(img/pieces/custom/rocket.svg)"),U.append(N),W.push(N[0])}T.append(U)}T.append('<div class="clearfix"/>'),h.append(T).css("padding",v+"px");var L=null,D=null,H="ARROW_DRAW_MODE",M=$cArrows("."+m),O=null;$(".cell").on("click",function(e){if(e.stopPropagation(),D==H)if($(this).parents("."+m).length>0)if(O){var n=$(this).attr("id");O!=n&&(M.arrow("#"+O,"#"+$(this).attr("id"),{arrow:{connectionType:"center"},render:{strokeStyle:"white",lineWidth:b/7}}),M.arrow("#"+O,"#"+$(this).attr("id"),{arrow:{connectionType:"center"},render:{strokeStyle:g,lineWidth:b/8}})),O=null}else O=$(this).attr("id");else o();else{var t=$(this);L?(0==t.parents("#pieces-panel").length?(L.is(t)||t.empty(),L.parents("#pieces-panel").length>0?$(L.children()[0]).clone().prependTo(t):$(L.children()[0]).detach().prependTo(t)):0==L.parents("#pieces-panel").length&&L.empty(),0!=L.parents("#pieces-panel").length&&0!=t.parents(".gameField").length||i()):t.children().length>0&&(L=t,t.addClass("clicked"))}}),$(window).on("click",function(e){L&&(0==L.parents("#pieces-panel").length&&L.empty(),i()),o()});var j=dragula(y.concat(W),{revertOnSpill:!0,removeOnSpill:!0,accepts:function(e,n,t,i){return!($(n).parents("#pieces-panel").length>0)&&(setTimeout(function(){$(".gu-transit",n).prependTo(n)}),!0)},copy:function(e){return $(e).parents("#pieces-panel").length>0}});j.on("drag",function(e,n){o(),L&&i()}),j.on("drop",function(e,n,t,i){var r=$(n).attr("id"),o=$(t).attr("id");a(r,$(e).attr("data-type"),$(e).attr("data-color"),o),$(n).children().not(":first").remove()}),$(window).resize(function(){c(),s()}),$(document).ready(function(){c(),s()});var _={};return _.clear=function(){l.clear(),$(".piece",e).remove()},_.initial=function(){_.clear(),l.reset(),p()},_.getPosition=function(){alert(l.fen())},_.setPosition=function(e){_.clear(),l.reset(),l.load(e),p()},_.setPositionFromUser=function(){var e=prompt("Введите позиции в формате FEN","rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1");e&&_.setPosition(e)},_.createArrow=function(e){i(),r(),e.stopPropagation()},_.clearArrowLayout=function(){M.CanvasStorage[2]=[],M.redraw()},_.sizePx=f,_}function setSavedPosition(e){board.setPosition(savedPositions[e])}var board=board("#board-container","#pieces-panel");$("#load-fen-btn-header").click(board.setPositionFromUser),$("#save-fen-btn-header").click(board.getPosition),$("#clear-btn, #clear-btn-header").click(board.clear),$("#initial-btn, #initial-btn-header").click(board.initial),$("#arrow-btn, #arrow-btn-header").click(board.createArrow),$("#arrows-delete-btn, #arrows-delete-btn-header").click(board.clearArrowLayout),$("#download-image-btn, #download-image-btn-header").click(function(e){console.log(board.sizePx),html2canvas($("#board-container"),{onrendered:function(e){document.body.appendChild(e);var n=document.createElement("a"),t=e.toDataURL("image/png");t=t.replace("image/png","image/octet-stream"),document.body.removeChild(e),n.download="board.png",n.href=t,n.click()},width:board.sizePx,height:board.sizePx})});var savedPositions={"1-1":"rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1","1-2":"rnbqkbnr/pppppppp/8/8/4P3/8/PPPP1PPP/RNBQKBNR b KQkq e3 0 1","1-3":"rnbqkbnr/pp1ppppp/8/2p5/4P3/5N2/PPPP1PPP/RNBQKB1R b KQkq - 1 2","2-1":"rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1","2-2":"rnbqkbnr/pppppppp/8/8/4P3/8/PPPP1PPP/RNBQKBNR b KQkq e3 0 1","2-3":"rnbqkbnr/pp1ppppp/8/2p5/4P3/5N2/PPPP1PPP/RNBQKB1R b KQkq - 1 2","3-1":"rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1","3-2":"rnbqkbnr/pppppppp/8/8/4P3/8/PPPP1PPP/RNBQKBNR b KQkq e3 0 1","3-3":"rnbqkbnr/pp1ppppp/8/2p5/4P3/5N2/PPPP1PPP/RNBQKB1R b KQkq - 1 2"};console.log("=>"),jQuery(function(e){var n=e("body"),t=e("#sidedrawer");e(".js-show-sidedrawer").on("click",function(){var n={onclose:function(){t.removeClass("active").appendTo(document.body)}},i=e(mui.overlay("on",n));t.appendTo(i),setTimeout(function(){t.addClass("active")},20)}),e(".js-hide-sidedrawer").on("click",function(){n.toggleClass("hide-sidedrawer")});var i=e("strong",t);i.next().hide(),i.on("click",function(){var n=e(this).next();n.is(":visible")?n.hide():n.show()})});
//# sourceMappingURL=app.js.map
