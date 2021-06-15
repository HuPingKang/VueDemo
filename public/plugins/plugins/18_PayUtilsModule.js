/**
 * 复深蓝Cordova 模块定义
 */
cordova.define("plugin.PayUtilsModule", function(require, exports, module) {

	var exec = require('cordova/exec');
	
	//JS全局方法导出，页面可以直接通过全局模块对象调用此方法
	module.exports = {
		requestWechatPayment: function(callback, option) {
			option = option || {};
			
			var timeStamp = platform_cordova.getValue(option.timeStamp, '');
			var nonceStr = platform_cordova.getValue(option.nonceStr, '');
			var package = platform_cordova.getValue(option.package, '');
			var signType = platform_cordova.getValue(option.signType, '');
			var paySign = platform_cordova.getValue(option.paySign, '');
			
			var options = [timeStamp, nonceStr, package, signType, paySign];
			exec(callback.success, callback.error, "PayUtilsModule", "requestWechatPayment", options);
		},
		requestAliPayment: function(callback, option) {
			option = option || {};
			
			var timeStamp = platform_cordova.getValue(option.timeStamp, '');
			var nonceStr = platform_cordova.getValue(option.nonceStr, '');
			var package = platform_cordova.getValue(option.package, '');
			var signType = platform_cordova.getValue(option.signType, '');
			var paySign = platform_cordova.getValue(option.paySign, '');
			
			var options = [timeStamp, nonceStr, package, signType, paySign];
			exec(callback.success, callback.error, "PayUtilsModule", "requestAliPayment", options);
		},
		
	};
});