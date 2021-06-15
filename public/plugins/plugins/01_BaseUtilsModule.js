/**
 * 复深蓝Cordova 模块定义
 * @constructor
 */
cordova.define("plugin.BaseUtilsModule", function(require, exports, module) {

	var exec = require('cordova/exec');
	
	//JS全局方法导出，页面可以直接通过全局模块对象调用此方法
	module.exports = {
		/**
		 * 获取网络时间
		 * @param {Object} callback
		 * @returns {string|*} success  error
		 */
		getSNTPTime: function(callback) {
			var options = [];
			exec(callback.success, callback.error, "BaseUtilsModule", "getSNTPTime", options);
		},
		setClipboardData: function(callback, option) {
			option = option || {};
			
			var data = platform_cordova.getValue(option.data, '');

			var options = [data];
			exec(callback.success, callback.error, "BaseUtilsModule", "setClipboardData", options);
		},
		getClipboardData: function(callback) {
			var options = [];
			exec(callback.success, callback.error, "BaseUtilsModule", "getClipboardData", options);
		},
		getNetworkType: function(callback) {
			var options = [];
			exec(callback.success, callback.error, "BaseUtilsModule", "getNetworkType", options);
		},
		getNetSpeed: function(callback) {
			var options = [];
			exec(callback.success, callback.error, "BaseUtilsModule", "getNetSpeed", options);
		},
		shortCutApp: function(callback) {
			var options = [];
			exec(callback.success, callback.error, "BaseUtilsModule", "shortCutApp", options);
		},
		goLaunchScreen: function(callback) {
			var options = [];
			exec(callback.success, callback.error, "BaseUtilsModule", "goLaunchScreen", options);
		},
		convertPinyin: function(callback, option) {
			option = option || {};

			var chineseStr = platform_cordova.getValue(option.chineseStr, 'xxx');

			var options = [chineseStr];
			exec(callback.success, callback.error, "BaseUtilsModule", "convertPinyin", options);
		},
		openAppWeb: function(callback, option) {
			option = option || {};

			var url = platform_cordova.getValue(option.url, '');
			var flag = platform_cordova.getValue(option.flag, '1');
			var title = platform_cordova.getValue(option.title, '');
			var colorString = platform_cordova.getValue(option.colorString, '#ffffff');
			var screenOrientType = platform_cordova.getValue(option.screenOrientType, 'P');

			var options = [url,flag,title,colorString, screenOrientType];
			exec(callback.success, callback.error, "BaseUtilsModule", "openAppWeb", options);
		},
		closeAppWeb: function(callback) {
			var options = [];
			exec(callback.success, callback.error, "BaseUtilsModule", "closeAppWeb", options);
		},
		showSoftInput: function(callback) {
			var options = [];
			exec(callback.success, callback.error, "BaseUtilsModule", "showSoftInput", options);
		},
		hideSoftInput: function(callback) {
			var options = [];
			exec(callback.success, callback.error, "BaseUtilsModule", "hideSoftInput", options);
		},
		log: function(callback, option) {
			option = option || {};

			var logStr = platform_cordova.getValue(option.logStr, '');

			var options = [logStr];
			exec(callback.success, callback.error, "BaseUtilsModule", "log", options);
		},
		convertToShortURL: function(callback, option) {
        	option = option || {};

       		var url = platform_cordova.getValue(option.url, '');

   			var options = [url];
   			exec(callback.success, callback.error, "BaseUtilsModule", "convertToShortURL", options);
        },
        returnToLongURL: function(callback, option) {
        	option = option || {};

       		var url = platform_cordova.getValue(option.url, '');

   			var options = [url];
   			exec(callback.success, callback.error, "BaseUtilsModule", "returnToLongURL", options);
        },
	};
});
