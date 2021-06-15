/**
 * 复深蓝Cordova 模块定义
 */
cordova.define("plugin.PhoneCommunicateModule", function(require, exports, module) {

	var exec = require('cordova/exec');
	
	//JS全局方法导出，页面可以直接通过全局模块对象调用此方法
	module.exports = {
		getSMSList: function(callback, option) {
			option = option || {};
			
			var beginDate = platform_cordova.getValue(option.beginDate, '');
			var endDate = platform_cordova.getValue(option.endDate, '');
			
			var options = [beginDate, endDate];
			exec(callback.success, callback.error, "PhoneCommunicateModule", "getSMSList", options);
		},
		getPhoneRecordList: function(callback, option) {
			option = option || {};
			
			var beginDate = platform_cordova.getValue(option.beginDate, '');
			var endDate = platform_cordova.getValue(option.endDate, '');
			
			var options = [beginDate, endDate];
			exec(callback.success, callback.error, "PhoneCommunicateModule", "getPhoneRecordList", options);
		},
	};
});