!function($){$.fn.kareoDialog=function(options){var dialog=this,settings=$.extend($.fn.defaults,options),browserHeight=$(window).height(),dialogContainer=dialog.find(".kareo-dialog-container"),dialogContent=dialog.find(".kareo-dialog-content");return dialog.css({position:"fixed","z-index":"999",top:"0"}),dialogContainer.css("height",browserHeight).fadeIn(250),dialog.find(".kareo-dialog-overlay").css("height",browserHeight),dialog.find(".kareo-dialog-close").click(function(){dialogContainer.fadeOut(100)}),dialogContent.css({width:settings.width,height:settings.height,"max-width":settings.maxWidth,"max-height":settings.maxHeight,"min-width":settings.minWidth,"min-height":settings.minHeight,"background-color":settings.backgroundColor}),dialog},$.fn.defaults={backgroundColor:"white"}}(jQuery);