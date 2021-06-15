/**
 * 复深蓝Cordova 模块定义
 */
cordova.define("plugin.VideoUtilsModule", function(require, exports, module) {

	var exec = require('cordova/exec');
	
	//JS全局方法导出，页面可以直接通过全局模块对象调用此方法
	module.exports = {
		recordVideo: function(callback, option) {
			option = option || {};
			
			var fileName = platform_cordova.getValue(option.fileName, '');
			var dirName = platform_cordova.getValue(option.dirName, '');
			
			var options = [fileName, dirName];
			exec(callback.success, callback.error, "VideoUtilsModule", "recordVideo", options);
		},
		playVideo: function(callback, option) {
			option = option || {};
			
			var filePath = platform_cordova.getValue(option.filePath, '');
			
			var options = [filePath];
			exec(callback.success, callback.error, "VideoUtilsModule", "playVideo", options);
		},
	};
});