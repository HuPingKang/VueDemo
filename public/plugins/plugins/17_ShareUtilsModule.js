/**
 * 复深蓝Cordova 模块定义
 */
cordova.define("plugin.ShareUtilsModule", function(require, exports, module) {

	var exec = require('cordova/exec');
	
	//JS全局方法导出，页面可以直接通过全局模块对象调用此方法
	module.exports = {
		shareInfo: function(callback, option) {
			option = option || {};
			
			var url = platform_cordova.getValue(option.url, '');
			var title = platform_cordova.getValue(option.title, '');
			var content = platform_cordova.getValue(option.content, '');
			var imageUrl = platform_cordova.getValue(option.imageUrl, '');

			var options = [url, title, content,imageUrl];
			exec(callback.success, callback.error, "ShareUtilsModule", "shareInfo", options);
		},
		shareQQ: function(callback, option) {
			option = option || {};
			
			var url = platform_cordova.getValue(option.url, '');
			var title = platform_cordova.getValue(option.title, '');
			var content = platform_cordova.getValue(option.content, '');
			var imageUrl = platform_cordova.getValue(option.imageUrl, '');

			var options = [url, title, content,imageUrl];
			exec(callback.success, callback.error, "ShareUtilsModule", "shareQQ", options);
		},
		shareWechat: function(callback, option) {
			option = option || {};
			
			var url = platform_cordova.getValue(option.url, '');
			var title = platform_cordova.getValue(option.title, '');
			var content = platform_cordova.getValue(option.content, '');
			var imageUrl = platform_cordova.getValue(option.imageUrl, '');
			var isAddLogo = platform_cordova.getValue(option.isAddLogo, '');
			var options = [url, title, content,imageUrl,isAddLogo];
               
			exec(callback.success, callback.error, "ShareUtilsModule", "shareWechat", options);
		},
		shareMoments: function(callback, option) {
			option = option || {};
			
			var url = platform_cordova.getValue(option.url, '');
			var title = platform_cordova.getValue(option.title, '');
			var content = platform_cordova.getValue(option.content, '');
			var imageUrl = platform_cordova.getValue(option.imageUrl, '');

			var options = [url, title, content, imageUrl];
			exec(callback.success, callback.error, "ShareUtilsModule", "shareMoments", options);
		},
		shareMicroblog: function(callback, option) {
			option = option || {};
			
			var url = platform_cordova.getValue(option.url, '');
			var title = platform_cordova.getValue(option.title, '');
			var content = platform_cordova.getValue(option.content, '');
			var imageUrl = platform_cordova.getValue(option.imageUrl, '');
			
			var options = [url, title, content,imageUrl];
			exec(callback.success, callback.error, "ShareUtilsModule", "shareMicroblog", options);
		},
		shareSMS: function(callback, option) {
			option = option || {};
			
			var url = platform_cordova.getValue(option.url, '');
            var title = platform_cordova.getValue(option.title, '');
            var content = platform_cordova.getValue(option.content, '');
            var imageUrl = platform_cordova.getValue(option.imageUrl, '');
			
			var options = [url,title, content,imageUrl];
			exec(callback.success, callback.error, "ShareUtilsModule", "shareSMS", options);
		},
		shareMail: function(callback, option) {
			option = option || {};
			
			var url = platform_cordova.getValue(option.url, '');
            var title = platform_cordova.getValue(option.title, '');
            var content = platform_cordova.getValue(option.content, '');
            var imageUrl = platform_cordova.getValue(option.imageUrl, '');
			
			var options = [url,title, content,imageUrl];
			exec(callback.success, callback.error, "ShareUtilsModule", "shareMail", options);
		},
		shareImagesToMoments: function(callback, option) {
			option = option || {};

           var imageArray = platform_cordova.getValue(option.imageArray, []);

           var options = [imageArray];
		   exec(callback.success, callback.error, "ShareUtilsModule", "shareImagesToMoments", options);
		},
	};
});
