/**
 * 复深蓝Cordova 模块定义
 */
cordova.define("plugin.AppUtilsModule", function(require, exports, module) {

	var exec = require('cordova/exec');
	
	//JS全局方法导出，页面可以直接通过全局模块对象调用此方法
	module.exports = {
		getAppInfo: function(callback) {
			var options = [];
			exec(callback.success, callback.error, "AppUtilsModule", "getAppInfo", options);
		},
		getStatusHeight: function(callback) {
			var options = [];
			exec(callback.success, callback.error, "AppUtilsModule", "getStatusHeight", options);
		},
		setStatusBarColor: function(callback, option) {
			option = option || {};
			
			var color = platform_cordova.getValue(option.color, '#000000');
			
			var options = [color];
			exec(callback.success, callback.error, "AppUtilsModule", "setStatusBarColor", options);
		},
		setStatusBarTextColor: function(callback, option) {
			option = option || {};
			
			var color = platform_cordova.getValue(option.color, '1');
			
			var options = [color];
			exec(callback.success, callback.error, "AppUtilsModule", "setStatusBarTextColor", options);
		},
		openApp: function(callback, option) {
			option = option || {};
			
			var action = platform_cordova.getValue(option.action, '');
			var schema = platform_cordova.getValue(option.schema, '');
			var key = platform_cordova.getValue(option.key, '');
			var value = platform_cordova.getValue(option.value, '');
			
			var idPath = '';
			if(platform_cordova.isIphoneApp()){
				idPath = schema;
			}else{
				idPath = action;
			}
			var options = [idPath, key, value];
			exec(callback.success, callback.error, "AppUtilsModule", "openApp", options);
		},
		openAppByAction: function(callback, option) {
        	option = option || {};

        	var action = platform_cordova.getValue(option.action, '');
        	var schema = platform_cordova.getValue(option.schema, '');
        	var isReturn = platform_cordova.getValue(option.isReturn, '0');
        	var key = platform_cordova.getValue(option.key, '');
        	var value = platform_cordova.getValue(option.value, '');

			var idPath = '';
			if(platform_cordova.isIphoneApp()){
				idPath = schema;
			}else{
				idPath = action;
			}
			
        	var options = [idPath, isReturn, key, value];
        	exec(callback.success, callback.error, "AppUtilsModule", "openAppByAction", options);
        },
		exitApp: function(callback) {
			var options = [];
			exec(callback.success, callback.error, "AppUtilsModule", "exitApp", options);
		},
		checkRunTop: function(callback) {
			var options = [];
			exec(callback.success, callback.error, "AppUtilsModule", "checkRunTop", options);
		},
		checkRun: function(callback, option) {
			option = option || {};
			
			var packageName = platform_cordova.getValue(option.packageName, '');
			
			var options = [packageName];
			exec(callback.success, callback.error, "AppUtilsModule", "checkRun", options);
		},
		getBackgroundApps: function(callback) {
			var options = [];
			exec(callback.success, callback.error, "AppUtilsModule", "getBackgroundApps", options);
		},
		getScreenOrient: function(callback) {
			var options = [];
			exec(callback.success, callback.error, "AppUtilsModule", "getScreenOrient", options);
		},
		settingScreenOrient: function(callback, option) {
			option = option || {};
			
			var type = platform_cordova.getValue(option.type, '');
			
			var options = [type];
			exec(callback.success, callback.error, "AppUtilsModule", "settingScreenOrient", options);
		},
		captureScreen: function(callback) {
			var options = [];
			exec(callback.success, callback.error, "AppUtilsModule", "captureScreen", options);
		},
		setCaptureScreen: function(callback, option) {
			option = option || {};
			
			var canCapture = platform_cordova.getValue(option.canCapture, '');
			
			var options = [canCapture];
			exec(callback.success, callback.error, "AppUtilsModule", "setCaptureScreen", options);
		},
		getAppMemoryInfo: function(callback) {
			var options = [];
			exec(callback.success, callback.error, "AppUtilsModule", "getAppMemoryInfo", options);
		},
		turnToGeneralViewCon: function(callback, option) {
			option = option || {};
			
			var url = platform_cordova.getValue(option.url, '');
			
			var options = [url];
			exec(callback.success, callback.error, "AppUtilsModule", "turnToGeneralViewCon", options);
		},
               
		logout: function(callback) {
            var options = [];
            exec(callback.success, callback.error, "AppUtilsModule", "logout", options);
        },
	};
});
