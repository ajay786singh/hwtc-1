/*global jQuery *//*jshint multistr:true browser:true *//*!
* FitVids 1.0.3
*
* Copyright 2013, Chris Coyier - http://css-tricks.com + Dave Rupert - http://daverupert.com
* Credit to Thierry Koblentz - http://www.alistapart.com/articles/creating-intrinsic-ratios-for-video/
* Released under the WTFPL license - http://sam.zoy.org/wtfpl/
*
* Date: Thu Sept 01 18:00:00 2011 -0500
*/function initialize(){var e={center:busStop,zoom:18,streetViewControl:false};map=new google.maps.Map(document.getElementById("map-canvas"),e);var t=new google.maps.Marker({position:busStop,map:map,icon:"http://chart.apis.google.com/chart?chst=d_map_pin_icon&chld=bus|FFFF00",title:"Hospitality Workers Training Centre"});panorama=map.getStreetView();panorama.setPosition(busStop);panorama.setPov({heading:265,pitch:0})}function toggleStreetView(){var e=panorama.getVisible();if(e==false){panorama.setVisible(true)}else{panorama.setVisible(false)}}(function(e){"use strict";e.fn.fitVids=function(t){var n={customSelector:null};if(!document.getElementById("fit-vids-style")){var r=document.createElement("div"),i=document.getElementsByTagName("base")[0]||document.getElementsByTagName("script")[0],s="&shy;<style>.fluid-width-video-wrapper{width:100%;position:relative;padding:0;}.fluid-width-video-wrapper iframe,.fluid-width-video-wrapper object,.fluid-width-video-wrapper embed {position:absolute;top:0;left:0;width:100%;height:100%;}</style>";r.className="fit-vids-style";r.id="fit-vids-style";r.style.display="none";r.innerHTML=s;i.parentNode.insertBefore(r,i)}if(t){e.extend(n,t)}return this.each(function(){var t=["iframe[src*='player.vimeo.com']","iframe[src*='youtube.com']","iframe[src*='youtube-nocookie.com']","iframe[src*='kickstarter.com'][src*='video.html']","object","embed"];if(n.customSelector){t.push(n.customSelector)}var r=e(this).find(t.join(","));r=r.not("object object");r.each(function(){var t=e(this);if(this.tagName.toLowerCase()==="embed"&&t.parent("object").length||t.parent(".fluid-width-video-wrapper").length){return}var n=this.tagName.toLowerCase()==="object"||t.attr("height")&&!isNaN(parseInt(t.attr("height"),10))?parseInt(t.attr("height"),10):t.height(),r=!isNaN(parseInt(t.attr("width"),10))?parseInt(t.attr("width"),10):t.width(),i=n/r;if(!t.attr("id")){var s="fitvid"+Math.floor(Math.random()*999999);t.attr("id",s)}t.wrap('<div class="fluid-width-video-wrapper"></div>').parent(".fluid-width-video-wrapper").css("padding-top",i*100+"%");t.removeAttr("height").removeAttr("width")})})}})(window.jQuery||window.Zepto);(function(e){e.fn.fitText=function(t,n){var r=t||1,i=e.extend({minFontSize:Number.NEGATIVE_INFINITY,maxFontSize:Number.POSITIVE_INFINITY},n);return this.each(function(){var t=e(this);var n=function(){t.css("font-size",Math.max(Math.min(t.width()/(r*10),parseFloat(i.maxFontSize)),parseFloat(i.minFontSize)))};n();e(window).on("resize.fittext orientationchange.fittext",n)})}})(jQuery);var isMobile;if(navigator.userAgent.match(/Android/i)||navigator.userAgent.match(/webOS/i)||navigator.userAgent.match(/iPhone/i)||navigator.userAgent.match(/iPod/i)||navigator.userAgent.match(/iPad/i)||navigator.userAgent.match(/BlackBerry/)){isMobile=true}jQuery(document).ready(function(e){function s(){if(r.css("position")==="relative"){return false}else{return true}}function o(){i=e(this).scrollTop();t.css({"margin-top":-(i/3)+"px",opacity:1-i/250});n.css({"background-position":"center "+ -i/6+"px"});r.css({opacity:1-i/100});if(r.css("opacity")<=0){e("header").addClass("active-header");e(".nav").css("display","none");e(".second-nav").fadeIn("slow")}else{e("header").removeClass("active-header");e(".second-nav").css("display","none");e(".nav").css("display","block")}}var t=e(".bannertext");var n=e(".bannerimage");var r=e(".nav");var i;e(".columns-1").fitVids();e(".front-headline").fitText(2);e(window).resize(function(){e(".content-img").each(function(){var t=e(this).find("img").height();var n=e(this).css("padding-bottom");var r=parseInt(t)+parseInt(n);var i=e(this).next().css("margin-top",r+"px")})});e(".content-img").each(function(){var t=e(this).find("img").height();var n=e(this).css("padding-bottom");var r=parseInt(t)+parseInt(n);var i=e(this).next().css("margin-top",r+"px")});if(!isMobile){e(window).scroll(function(){if(s()){o()}})}e(window).resize(function(){if(s()&&!isMobile){o()}});e("ul li a").on("click",function(t){if(e(this).attr("href")=="#contact"){t.preventDefault();e("html,body").animate({scrollTop:e("footer").offset().top},500)}});e("#mobile-nav-button a").on("click",function(t){e("body").toggleClass("open-right");t.preventDefault()})});var map;var panorama;var busStop=new google.maps.LatLng(43.652267,-79.376321);google.maps.event.addDomListener(window,"load",initialize)