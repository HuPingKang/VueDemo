/**
 * 复深蓝Cordova 模块定义
 */
cordova.define("plugin.ModelUtisModule", function(require, exports, module) {

	var exec = require('cordova/exec');
	
	//JS全局方法导出，页面可以直接通过全局模块对象调用此方法
	module.exports = {
		getSIMInfo: function(callback) {
			var options = [];
			exec(callback.success, callback.error, "ModelUtisModule", "getSIMInfo", options);
		},
		screenOff: function(callback) {
			var options = [];
			exec(callback.success, callback.error, "ModelUtisModule", "screenOff", options);
		},
		setKeepScreenOn: function(callback, option) {
			option = option || {};
			
			var keepScreenOn = platform_cordova.getValue(option.keepScreenOn, '0');
			
			var options = [keepScreenOn];
			exec(callback.success, callback.error, "ModelUtisModule", "setKeepScreenOn", options);
		},
		isGpsOpen: function(callback) {
			var options = [];
			exec(callback.success, callback.error, "ModelUtisModule", "isGpsOpen", options);
		},
		openGpsSeting: function(callback) {
			var options = [];
			exec(callback.success, callback.error, "ModelUtisModule", "openGpsSeting", options);
		},
		isBluetoothOpen: function(callback) {
			var options = [];
			exec(callback.success, callback.error, "ModelUtisModule", "isBluetoothOpen", options);
		},
		openBluetoothSetting: function(callback) {
			var options = [];
			exec(callback.success, callback.error, "ModelUtisModule", "openBluetoothSetting", options);
		},
		isWIFIOpen: function(callback) {
			var options = [];
			exec(callback.success, callback.error, "ModelUtisModule", "isWIFIOpen", options);
		},
		openWIFISetting: function(callback) {
			var options = [];
			exec(callback.success, callback.error, "ModelUtisModule", "openWIFISetting", options);
		},
		isNotificationOpen: function(callback) {
			var options = [];
			exec(callback.success, callback.error, "ModelUtisModule", "isNotificationOpen", options);
		},
		setAirPlaneState: function(callback, option) {
			option = option || {};
			
			var airPlaneState = platform_cordova.getValue(option.airPlaneState, '0');
			
			var options = [airPlaneState];
			exec(callback.success, callback.error, "ModelUtisModule", "setAirPlaneState", options);
		},
		checkAirPlane: function(callback) {
			var options = [];
			exec(callback.success, callback.error, "ModelUtisModule", "checkAirPlane", options);
		},
		
	};
});