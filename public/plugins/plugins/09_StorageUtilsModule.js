/**
 * 复深蓝Cordova 模块定义
 */
cordova.define("plugin.StorageUtilsModule", function(require, exports, module) {

	var exec = require('cordova/exec');
	
	//JS全局方法导出，页面可以直接通过全局模块对象调用此方法
	module.exports = {
		saveData: function(callback, option) {
			option = option || {};
			
			var key = platform_cordova.getValue(option.key, '');
			var value = platform_cordova.getValue(option.value, '');
			
			var options = [key, value];
			exec(callback.success, callback.error, "StorageUtilsModule", "saveData", options);
		},
		getData: function(callback, option) {
			option = option || {};
			
			var key = platform_cordova.getValue(option.key, '');
			
			var options = [key];
			exec(callback.success, callback.error, "StorageUtilsModule", "getData", options);
		},
		deleteData: function(callback, option) {
			option = option || {};
			
			var key = platform_cordova.getValue(option.key, '');
			
			var options = [key];
			exec(callback.success, callback.error, "StorageUtilsModule", "deleteData", options);
		},
		getStorageInfo: function(callback) {
			var options = [];
			exec(callback.success, callback.error, "StorageUtilsModule", "getStorageInfo", options);
		},
		cleanData: function(callback) {
			var options = [];
			exec(callback.success, callback.error, "StorageUtilsModule", "cleanData", options);
		},
	};
});