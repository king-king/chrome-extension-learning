define(function(require,exports){var a=require("configs/settings"),b=require("utils/log"),c=navigator.userAgent.toLowerCase(),d=null!==c.match(/firefox/),e=function(){if(d)return null;try{var c=Array.prototype.slice.call(arguments);a.isCnSites?(c.unshift("_trackEvent"),_czc&&_czc.push(c)):(c.unshift("send","event"),_gaq&&_gaq.push(c))}catch(e){b.log("track error")}};exports.error=function(){return d?null:void e("error",arguments[0],arguments[1])},exports.report=function(a){return d?null:void e(a)},exports.restart=function(){if(d)return null;if(a.isCnSites){if(!b){var b=b||[];!function(a){var b=a.createElement("script");b.type="text/javascript",b.async=!0,b.src="https://s95.cnzz.com/stat.php?id=1253390991&web_id=1253390991";var c=a.getElementsByTagName("script")[0];c.parentNode.insertBefore(b,c)}(document)}}else if(!c){var c=c||[];c.push(["_setAccount","UA-36126366-4"]),c.push(["_setDomainName","ticktick.com"]),c.push(["_setAllowLinker",!0]),c.push(["_trackPageview"]),function(){var a=document.createElement("script");a.type="text/javascript",a.async=!0,a.src="https://ssl.google-analytics.com/ga.js";var b=document.getElementsByTagName("script")[0];b.parentNode.insertBefore(a,b)}()}}});