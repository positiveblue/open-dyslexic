jQuery(document).ready(function($){$(".rwd-container").hide();$("h3.rwd-toggle").click(function(){$(this).toggleClass("active").next().slideToggle("fast");return false;});});jQuery(document).ready(function($){setTimeout(function(){$(".fade").fadeOut("slow",function(){$(".fade").remove();});},2000);});