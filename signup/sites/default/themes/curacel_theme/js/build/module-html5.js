!function($){$(".tabFeatureImg .imgCont").show();var featuredVid="",featuredVideoDom=$(".tabFeatureImg video.featuredModVideo");$(window).width()>768&&(featuredVideoDom.hide(),featuredVideoDom.first().fadeIn(),$(".module-feature .tabs").find("h3").click(function(){$(this).hasClass("active")||($(this).addClass("active"),$(this).next().slideToggle("fast"),featuredVid=$(this).data("tabframe"),$(".tabFeatureImg video.featuredModVideo.active").removeClass("active").hide(),$(".tabFeatureImg .imgCont").removeClass("claptop cipad cphone").addClass("c"+featuredVid),$(".tabFeatureImg .imgCont img").hide().attr("src","http://www.kareo.com/sites/default/files/ck/webupload/images/banners/04/"+featuredVid.replace("2","")+".png").fadeIn(),setTimeout(function(){$(".tabFeatureImg video.featuredModVideo[data-tabframe='"+featuredVid+"']").addClass("active").fadeIn(250,function(){this.currentTime=0,this.play()})},400),$(".module-feature .tabs h3").not($(this)).removeClass("active"),$(".module-feature .tabs p").not($(this).next()).removeClass("active").slideUp("fast"))})),$(window).scroll(function(){var scrollTop=$(window).scrollTop(),winH=$(window).height(),activeVid=$("video.featuredModVideo.active");activeVid.length&&scrollTop+.5*winH>=activeVid.offset().top&&activeVid.get(0).play()})}(jQuery);