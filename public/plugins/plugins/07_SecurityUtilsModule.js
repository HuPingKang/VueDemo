/**
 * 复深蓝Cordova 模块定义
 */
cordova.define("plugin.SecurityUtilsModule", function(require, exports, module) {

	var exec = require('cordova/exec');
	
	//JS全局方法导出，页面可以直接通过全局模块对象调用此方法
	module.exports = {
		encryptPBE: function(callback, option) {
			option = option || {};
			
			var content = platform_cordova.getValue(option.content, '');
			var pwd = platform_cordova.getValue(option.pwd, '');
			
			var options = [content, pwd];
			exec(callback.success, callback.error, "SecurityUtilsModule", "encryptPBE", options);
		},
		decryptPBE: function(callback, option) {
			option = option || {};
			
			var content = platform_cordova.getValue(option.content, '');
			var pwd = platform_cordova.getValue(option.pwd, '');
			
			var options = [content, pwd];
			exec(callback.success, callback.error, "SecurityUtilsModule", "decryptPBE", options);
		},
		
		encryptAES: function(callback, option) {
			option = option || {};
			
			var content = platform_cordova.getValue(option.content, '');
			var pwd = platform_cordova.getValue(option.pwd, '');
			
			var options = [content, pwd];
			exec(callback.success, callback.error, "SecurityUtilsModule", "encryptAES", options);
		},
		decryptAES: function(callback, option) {
			option = option || {};
			
			var content = platform_cordova.getValue(option.content, '');
			var pwd = platform_cordova.getValue(option.pwd, '');
			
			var options = [content, pwd];
			exec(callback.success, callback.error, "SecurityUtilsModule", "decryptAES", options);
		},
		encryptNational: function(callback, option) {
			option = option || {};
			
			var content = platform_cordova.getValue(option.content, '中国123abc复深蓝软件股份有限公司1111');
			var pwd = platform_cordova.getValue(option.pwd, '123456');
			
			var options = [content, pwd];
			exec(callback.success, callback.error, "SecurityUtilsModule", "encryptNational", options);
		},
		decryptNational: function(callback, option) {
			option = option || {};
			
			var content = platform_cordova.getValue(option.content, '91463AC6495B7E3D707E104B006BF9400C36CF76816223B34B936306FA1A07B846760E06F0CDF01B7E7F29031F50E5EC61F994C86F1AB67069CCEF12927C517F9626E3D5C5AABE39363DA004422A0BD2FE9B93E4E8AC4CE91D8BB37C224B585CCE7787C6C7CE12E5ECE6167A1ABB37CC1747644481714679F9D71630AE1A482AA32E91EEE31DD4391C62ED5D1859A864CC');
			var pwd = platform_cordova.getValue(option.pwd, '123456');
			
			var options = [content, pwd];
			exec(callback.success, callback.error, "SecurityUtilsModule", "decryptNational", options);
		},
		encryptDES: function(callback, option) {
			option = option || {};
			
			var content = platform_cordova.getValue(option.content, '');
			var pwd = platform_cordova.getValue(option.pwd, '');
			
			var options = [content, pwd];
			exec(callback.success, callback.error, "SecurityUtilsModule", "encryptDES", options);
		},
		decryptDES: function(callback, option) {
			option = option || {};
			
			var content = platform_cordova.getValue(option.content, '');
			var pwd = platform_cordova.getValue(option.pwd, '');
			
			var options = [content, pwd];
			exec(callback.success, callback.error, "SecurityUtilsModule", "decryptDES", options);
		},
		encryptBase64: function(callback, option) {
			option = option || {};
			
			var content = platform_cordova.getValue(option.content, '');
			
			var options = [content];
			exec(callback.success, callback.error, "SecurityUtilsModule", "encryptBase64", options);
		},
		decryptBase64: function(callback, option) {
			option = option || {};
			
			var content = platform_cordova.getValue(option.content, '');
			
			var options = [content];
			exec(callback.success, callback.error, "SecurityUtilsModule", "decryptBase64", options);
		},
		encryptMD5: function(callback, option) {
			option = option || {};
			
			var content = platform_cordova.getValue(option.content, '');
			
			var options = [content];
			exec(callback.success, callback.error, "SecurityUtilsModule", "encryptMD5", options);
		},
		encryptSHA: function(callback, option) {
			option = option || {};
			
			var content = platform_cordova.getValue(option.content, '');
			
			var options = [content];
			exec(callback.success, callback.error, "SecurityUtilsModule", "encryptSHA", options);
		},
		checkFingerprintPwd: function(callback) {
			var options = [];
			exec(callback.success, callback.error, "SecurityUtilsModule", "checkFingerprintPwd", options);
		},
		setGesturePattern: function(callback, option) {
			option = option || {};
			
			var name = platform_cordova.getValue(option.name, '');
			
			var options = [name];
			exec(callback.success, callback.error, "SecurityUtilsModule", "setGesturePattern", options);
		},
		validateGesturePattern: function(callback, option) {
			option = option || {};
			
			var name = platform_cordova.getValue(option.name, '');
			
			var options = [name];
			exec(callback.success, callback.error, "SecurityUtilsModule", "validateGesturePattern", options);
		},
		cleanGesturePattern: function(callback, option) {
			option = option || {};
			
			var name = platform_cordova.getValue(option.name, '');
			
			var options = [name];
			exec(callback.success, callback.error, "SecurityUtilsModule", "cleanGesturePattern", options);
		},
		hasGesturePattern: function(callback, option) {
			option = option || {};
			
			var name = platform_cordova.getValue(option.name, '');
			
			var options = [name];
			exec(callback.success, callback.error, "SecurityUtilsModule", "hasGesturePattern", options);
		},
		getAuthInfo: function(callback) {
			var options = [];
			exec(callback.success, callback.error, "SecurityUtilsModule", "getAuthInfo", options);
		},
	};
});
