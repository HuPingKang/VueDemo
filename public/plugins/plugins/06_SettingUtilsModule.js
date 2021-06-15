/**
 * 复深蓝Cordova 模块定义
 */
cordova.define("plugin.SettingUtilsModule", function(require, exports, module) {

	var exec = require('cordova/exec');

	//JS全局方法导出，页面可以直接通过全局模块对象调用此方法
	module.exports = {
		openSettings: function(callback) {
			var options = [];
			exec(callback.success, callback.error, "SettingUtilsModule", "openSettings", options);
		},
		openAccessibilitySettings: function(callback) {
			var options = [];
			exec(callback.success, callback.error, "SettingUtilsModule", "openAccessibilitySettings", options);
		},
		openAddAccount: function(callback) {
			var options = [];
			exec(callback.success, callback.error, "SettingUtilsModule", "openAddAccount", options);
		},
		openApnSettings: function(callback) {
			var options = [];
			exec(callback.success, callback.error, "SettingUtilsModule", "openApnSettings", options);
		},
		openApplicationDevelopmentSettings: function(callback) {
			var options = [];
			exec(callback.success, callback.error, "SettingUtilsModule", "openApplicationDevelopmentSettings", options);
		},
		openDataRoamingSettings: function(callback) {
			var options = [];
			exec(callback.success, callback.error, "SettingUtilsModule", "openDataRoamingSettings", options);
		},
		openDateSettings: function(callback) {
			var options = [];
			exec(callback.success, callback.error, "SettingUtilsModule", "openDateSettings", options);
		},
		openDeviceInfoSettings: function(callback) {
			var options = [];
			exec(callback.success, callback.error, "SettingUtilsModule", "openDeviceInfoSettings", options);
		},
		openDisplaySettings: function(callback) {
			var options = [];
			exec(callback.success, callback.error, "SettingUtilsModule", "openDisplaySettings", options);
		},
		openInputMethodSettings: function(callback) {
			var options = [];
			exec(callback.success, callback.error, "SettingUtilsModule", "openInputMethodSettings", options);
		},
		openStorageSettings: function(callback) {
			var options = [];
			exec(callback.success, callback.error, "SettingUtilsModule", "openStorageSettings", options);
		},
		openLocaleSettings: function(callback) {
			var options = [];
			exec(callback.success, callback.error, "SettingUtilsModule", "openLocaleSettings", options);
		},
		openNetworkOperatorSettings: function(callback) {
			var options = [];
			exec(callback.success, callback.error, "SettingUtilsModule", "openNetworkOperatorSettings", options);
		},
		openPrivacySettings: function(callback) {
			var options = [];
			exec(callback.success, callback.error, "SettingUtilsModule", "openPrivacySettings", options);
		},
		openSecuritySettings: function(callback) {
			var options = [];
			exec(callback.success, callback.error, "SettingUtilsModule", "openSecuritySettings", options);
		},
		openSoundSettings: function(callback) {
			var options = [];
			exec(callback.success, callback.error, "SettingUtilsModule", "openSoundSettings", options);
		},
		openSyncSettings: function(callback) {
			var options = [];
			exec(callback.success, callback.error, "SettingUtilsModule", "openSyncSettings", options);
		},
		openUserDictionarySettings: function(callback) {
			var options = [];
			exec(callback.success, callback.error, "SettingUtilsModule", "openUserDictionarySettings", options);
		},
		openWifiIpSettings: function(callback) {
			var options = [];
			exec(callback.success, callback.error, "SettingUtilsModule", "openWifiIpSettings", options);
		},
		openSaveBatterySettings: function(callback) {
			var options = [];
			exec(callback.success, callback.error, "SettingUtilsModule", "openSaveBatterySettings", options);
		},
		
		
	};
});