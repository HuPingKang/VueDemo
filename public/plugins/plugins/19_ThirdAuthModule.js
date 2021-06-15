/**
 * 复深蓝Cordova 模块定义
 */
cordova.define("plugin.ThirdAuthModule", function(require, exports, module) {

	var exec = require('cordova/exec');

	//JS全局方法导出，页面可以直接通过全局模块对象调用此方法
	module.exports = {
		wechatAuth: function(callback) {
			var options = [];
			exec(callback.success, callback.error, "ThirdAuthModule", "wechatAuth", options);
		},
		wechatLogin: function(callback) {
			var options = [];
			exec(callback.success, callback.error, "ThirdAuthModule", "wechatLogin", options);
		},
		qqAuth: function(callback) {
			var options = [];
			exec(callback.success, callback.error, "ThirdAuthModule", "qqAuth", options);
		},
		qqLogin: function(callback) {
			var options = [];
			exec(callback.success, callback.error, "ThirdAuthModule", "qqLogin", options);
		},
		weiboAuth: function(callback) {
			var options = [];
			exec(callback.success, callback.error, "ThirdAuthModule", "weiboAuth", options);
		},
		weiboLogin: function(callback) {
			var options = [];
			exec(callback.success, callback.error, "ThirdAuthModule", "weiboLogin", options);
		},
		alipayAuth: function(callback) {
			var options = [];
			exec(callback.success, callback.error, "ThirdAuthModule", "alipayAuth", options);
		},
		alipayLogin: function(callback) {
			var options = [];
			exec(callback.success, callback.error, "ThirdAuthModule", "alipayLogin", options);
		},
	};
});