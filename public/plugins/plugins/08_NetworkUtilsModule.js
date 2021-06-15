/**
 * 复深蓝Cordova 模块定义
 */
cordova.define("plugin.NetworkUtilsModule", function(require, exports, module) {

	var exec = require('cordova/exec');
	
	//JS全局方法导出，页面可以直接通过全局模块对象调用此方法
	module.exports = {
		setUserAgent: function(callback, option) {
			option = option || {};
			 
			var userAgent = platform_cordova.getValue(option.userAgent, '');
			
			var options = [userAgent];
			exec(callback.success, callback.error, "NetworkUtilsModule", "setUserAgent", options);
		},
		getRequest: function(callback, option) {
			option = option || {};
			 
			var url = platform_cordova.getValue(option.url, '');
			var headerJson = platform_cordova.getValue(option.headerJson, '');
			var bodyJson = platform_cordova.getValue(option.bodyJson, '');
			
			var options = [url, headerJson, bodyJson];
			exec(callback.success, callback.error, "NetworkUtilsModule", "getRequest", options);
		},
		postRequest: function(callback, option) {
			option = option || {};
			 
			var url = platform_cordova.getValue(option.url, '');
			var headerJson = platform_cordova.getValue(option.headerJson, '');
			var bodyJson = platform_cordova.getValue(option.bodyJson, '');
			
			var options = [url, headerJson, bodyJson];
			exec(callback.success, callback.error, "NetworkUtilsModule", "postRequest", options);
		},
		fileDownload: function(callback, option) {
			option = option || {};
			 
			var headerJson = platform_cordova.getValue(option.headerJson, '');
			var url = platform_cordova.getValue(option.url, '');
			var fileName = platform_cordova.getValue(option.fileName, 'test.zip');
			var isShowProgress = platform_cordova.getValue(option.isShowProgress, '1');
			var progressMsg = platform_cordova.getValue(option.progressMsg, '正在下载, 请勿退出');
			
			var options = [headerJson, url, fileName, isShowProgress, progressMsg];
			exec(callback.success, callback.error, "NetworkUtilsModule", "fileDownload", options);
		},
		fileUpload: function(callback, option) {
			option = option || {};
			 
			var headerJson = platform_cordova.getValue(option.headerJson, '');
			var url = platform_cordova.getValue(option.url, '');
			var filePaths = platform_cordova.getValue(option.filePaths, '');
			var name = platform_cordova.getValue(option.name, '');
			var limitSize = platform_cordova.getValue(option.limitSize, '');
			var bodyJson = platform_cordova.getValue(option.bodyJson, '');
			
			var options = [headerJson, url, filePaths, name, limitSize, bodyJson];
			exec(callback.success, callback.error, "NetworkUtilsModule", "fileUpload", options);
		},
		
	};
});