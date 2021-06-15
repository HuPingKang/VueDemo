/**
 * 复深蓝Cordova 模块定义
 */
cordova.define("plugin.VideoCallUtilsModule", function(require, exports, module) {

	var exec = require('cordova/exec');
	
	//JS全局方法导出，页面可以直接通过全局模块对象调用此方法
	module.exports = {
		scheduleApplication: function(callback, option) {
			option = option || {};
			
			var caseNo = platform_cordova.getValue(option.caseNo, '123456');
			var account = platform_cordova.getValue(option.account, 'xujin-007');
            var password = platform_cordova.getValue(option.password, '202cb962ac59075b964b07152d234b70');
			var caseType = platform_cordova.getValue(option.caseType, '1');
            var branchCode = platform_cordova.getValue(option.branchCode, '3010100');
            var surveyunitCode = platform_cordova.getValue(option.surveyunitCode, '3010100');
            var versionUrl = platform_cordova.getValue(option.versionUrl, '101.204.252.12:3005');
            var taskSerialNo = platform_cordova.getValue(option.taskSerialNo, '123');
			
			var options = [caseNo, account,password, caseType, branchCode, surveyunitCode, versionUrl, taskSerialNo];
			exec(callback.success, callback.error, "VideoCallUtilsModule", "scheduleApplication", options);
		},
	};
});
