/**
 * 复深蓝Cordova 模块定义
 */
cordova.define("plugin.DeviceUtilsModule", function(require, exports, module) {

	var exec = require('cordova/exec');
	
	//JS全局方法导出，页面可以直接通过全局模块对象调用此方法
	module.exports = {
		getDeviceNo: function(callback) {
			var options = [];
			exec(callback.success, callback.error, "DeviceUtilsModule", "getDeviceNo", options);
		},
		makePhoneCall: function(callback, option) {
			option = option || {};
			
			var phoneNumber = platform_cordova.getValue(option.phoneNumber, '');
			var isRecord = platform_cordova.getValue(option.isRecord, '0');

			var options = [phoneNumber,isRecord];
			exec(callback.success, callback.error, "DeviceUtilsModule", "makePhoneCall", options);
		},
		sendSMS: function(callback, option) {
			option = option || {};

			var phoneNumber = platform_cordova.getValue(option.phoneNumber, '');
			var content = platform_cordova.getValue(option.content, '');

			var options = [phoneNumber,content];
			exec(callback.success, callback.error, "DeviceUtilsModule", "sendSMS", options);
		},
		getDeviceInfo: function(callback) {
			var options = [];
			exec(callback.success, callback.error, "DeviceUtilsModule", "getDeviceInfo", options);
		},
		getSIMInfo: function(callback) {
			var options = [];
			exec(callback.success, callback.error, "DeviceUtilsModule", "getSIMInfo", options);
		},
		getDeviceStorageInfo: function(callback) {
			var options = [];
			exec(callback.success, callback.error, "DeviceUtilsModule", "getDeviceStorageInfo", options);
		},
		getMemoryInfo: function(callback) {
			var options = [];
			exec(callback.success, callback.error, "DeviceUtilsModule", "getMemoryInfo", options);
		},
		getFileTotalSize: function(callback, option) {
			option = option || {};
			
			var path = platform_cordova.getValue(option.path, '');
			
			var options = [path];
			exec(callback.success, callback.error, "DeviceUtilsModule", "getFileTotalSize", options);
		},
		setScreenBrightness: function(callback, option) {
			option = option || {};
			
			var value = platform_cordova.getValue(option.value, '1');
			
			var options = [value];
			exec(callback.success, callback.error, "DeviceUtilsModule", "setScreenBrightness", options);
		},
		getScreenBrightness: function(callback) {
			var options = [];
			exec(callback.success, callback.error, "DeviceUtilsModule", "getScreenBrightness", options);
		},
		isAutoBrightness: function(callback) {
			var options = [];
			exec(callback.success, callback.error, "DeviceUtilsModule", "isAutoBrightness", options);
		},
		setAutoBrightness: function(callback, option) {
			option = option || {};
			
			var isAuto = platform_cordova.getValue(option.isAuto, '1');
			
			var options = [isAuto];
			exec(callback.success, callback.error, "DeviceUtilsModule", "setAutoBrightness", options);
		},
		vibrateLong: function(callback) {
			var options = [];
			exec(callback.success, callback.error, "DeviceUtilsModule", "vibrateLong", options);
		},
		vibrateShort: function(callback) {
			var options = [];
			exec(callback.success, callback.error, "DeviceUtilsModule", "vibrateShort", options);
		},
		setVolume: function(callback, option) {
			option = option || {};
			
			var volume = platform_cordova.getValue(option.volume, '1');
			
			var options = [volume];
			exec(callback.success, callback.error, "DeviceUtilsModule", "setVolume", options);
		},
		getVolume: function(callback) {
			var options = [];
			exec(callback.success, callback.error, "DeviceUtilsModule", "getVolume", options);
		},
		openFlash: function(callback) {
			var options = [];
			exec(callback.success, callback.error, "DeviceUtilsModule", "openFlash", options);
		},
		checkFlash: function(callback) {
			var options = [];
			exec(callback.success, callback.error, "DeviceUtilsModule", "checkFlash", options);
		},
		getDeviceGPS: function(callback) {
			var options = [];
			exec(callback.success, callback.error, "DeviceUtilsModule", "getDeviceGPS", options);
		},
		checkExternalStorageEnable: function(callback) {
			var options = [];
			exec(callback.success, callback.error, "DeviceUtilsModule", "checkExternalStorageEnable", options);
		},
		openLowPower: function(callback) {
			var options = [];
			exec(callback.success, callback.error, "DeviceUtilsModule", "openLowPower", options);
		},
		checkLowPower: function(callback) {
			var options = [];
			exec(callback.success, callback.error, "DeviceUtilsModule", "checkLowPower", options);
		},
	};
});
