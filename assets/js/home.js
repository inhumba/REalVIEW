import{$ as n}from"./jquery.js";import"./mmenu.min.js";n(document).ready((function(){n(".more").click((function(){n(this).addClass("hidden"),n(this).parent().next().removeClass("hidden")})),n(document).on("focus blur",".add--post",(function(){n(".box--member").toggleClass("active")})),new Mmenu("#menu",{offCanvas:{position:"right"}})}));
