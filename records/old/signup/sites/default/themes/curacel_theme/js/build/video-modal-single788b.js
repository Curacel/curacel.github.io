!function($){$(document).ready(function(){function getUrlParameters(parameter){var currLocation=window.location.search,paramArray=currLocation.split("?")[1],returnBool=!0;if(void 0!=paramArray){paramArray=paramArray.split("&");for(var i=0;i<paramArray.length;i++){if(parr=paramArray[i].split("="),parr[0]==parameter)return parr[1];returnBool=!1}}return returnBool?void 0:!1}function launchVideo(ytId){iframeUrl="http://www.youtube.com/embed/"+ytId+"?autoplay=1",$("#video-modal-single").css("opacity","1").css("left","0"),$("#ytplayer-single").attr("src",iframeUrl)}var getDemo=getUrlParameters("demo");getDemo&&$("#demo-modal").css("opacity","1").css("left","0");var getForm=getUrlParameters("form");getForm&&$("#contact-us-modal").css("opacity","1").css("left","0");var getVideo=getUrlParameters("video");if(getVideo){var ytId=$(".action-video-single").data("yt-id");launchVideo(ytId)}$(".action-video-single").on("click",function(e){var ytId=$(this).attr("data-yt-id");$("#video-modal-single").css("opacity","1").css("left","0"),e.preventDefault(),launchVideo(ytId)}),$(".video-dialog-close").on("click",function(e){$("#ytplayer-single").attr("src",""),$("#video-modal-single").css("opacity","0").css("left","-103%"),e.preventDefault(),$(".action-video-single").hover(function(){$(this).css("cursor","pointer")})})})}(jQuery);