/**
 * 复深蓝Cordova 模块定义
 */
cordova.define("plugin.BackServiceUtilsModule", function(require, exports, module) {

	var exec = require('cordova/exec');
	
	//JS全局方法导出，页面可以直接通过全局模块对象调用此方法
	module.exports = {
		startLocationService: function(callback, option) {
			option = option || {};
			
			var scheduleStDttm = platform_cordova.getValue(option.scheduleStDttm, '');
			var scheduleEndDttm = platform_cordova.getValue(option.scheduleEndDttm, '');
			var startTime = platform_cordova.getValue(option.startTime, '');
            var endTime = platform_cordova.getValue(option.endTime, '');
            var pushFlag = platform_cordova.getValue(option.pushFlag, '1');
            var pushFreq = platform_cordova.getValue(option.pushFreq, '1');
            var url = platform_cordova.getValue(option.dirName, 'https://cxopcdsitcdn.8686c.com/umps/jylp/innerService');
			
			var options = [scheduleStDttm, scheduleEndDttm, startTime, endTime, pushFlag, pushFreq, url];
			exec(callback.success, callback.error, "BackServiceUtilsModule", "startLocationService", options);
		},
	};
});