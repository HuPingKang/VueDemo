/**
 * 复深蓝Cordova 模块定义
 */
cordova.define("plugin.PackageUtilsModule", function(require, exports, module) {

	var exec = require('cordova/exec');
	
	//JS全局方法导出，页面可以直接通过全局模块对象调用此方法
	module.exports = {
		getPid: function(callback) {
			var options = [];
			exec(callback.success, callback.error, "PackageUtilsModule", "getPid", options);
		},
		getUid: function(callback) {
			var options = [];
			exec(callback.success, callback.error, "PackageUtilsModule", "getUid", options);
		},
		installApp: function(callback, option) {
			option = option || {};
			
			var appPath = platform_cordova.getValue(option.appPath, '');
			
			var options = [appPath];
			
			exec(callback.success, callback.error, "PackageUtilsModule", "installApp", options);
		},
		unInstallApp: function(callback, option) {
			option = option || {};
			
			var packageName = platform_cordova.getValue(option.packageName, '');
			
			var options = [packageName];
			exec(callback.success, callback.error, "PackageUtilsModule", "unInstallApp", options);
		},
		backupApp: function(callback, option) {
			option = option || {};
			
			var packageName = platform_cordova.getValue(option.packageName, '');
			
			var options = [packageName];
			exec(callback.success, callback.error, "PackageUtilsModule", "backupApp", options);
		},
		getAppSign: function(callback, option) {
			option = option || {};
			
			var packageName = platform_cordova.getValue(option.packageName, '');
			
			var options = [packageName];
			exec(callback.success, callback.error, "PackageUtilsModule", "getAppSign", options);
		},
		getInstallList: function(callback) {
			var options = [];
			exec(callback.success, callback.error, "PackageUtilsModule", "getInstallList", options);
		},
		isInstall: function(callback, option) {
			option = option || {};
			
			var packageName = platform_cordova.getValue(option.packageName, '');
			
			var options = [packageName];
			exec(callback.success, callback.error, "PackageUtilsModule", "isInstall", options);
		},
		openApplicationSettings: function(callback) {
			var options = [];
			exec(callback.success, callback.error, "PackageUtilsModule", "openApplicationSettings", options);
		},
		openManageApplicationsSettings: function(callback) {
			var options = [];
			exec(callback.success, callback.error, "PackageUtilsModule", "openManageApplicationsSettings", options);
		},
		openAppSetting: function(callback, option) {
			option = option || {};
			
			var packageName = platform_cordova.getValue(option.packageName, '');
			
			var options = [packageName];
			exec(callback.success, callback.error, "PackageUtilsModule", "openAppSetting", options);
		},
		openAllApplicationsSettings: function(callback) {
			var options = [];
			exec(callback.success, callback.error, "PackageUtilsModule", "openAllApplicationsSettings", options);
		},
	};
});