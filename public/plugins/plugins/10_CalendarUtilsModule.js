/**
 * 复深蓝Cordova 模块定义
 */
cordova.define("plugin.CalendarUtilsModule", function(require, exports, module) {

	var exec = require('cordova/exec');

	//JS全局方法导出，页面可以直接通过全局模块对象调用此方法
	module.exports = {
		queryCalendar: function(callback, option) {
		    option = option || {};

        	var start = platform_cordova.getValue(option.start, '');
            var end = platform_cordova.getValue(option.end, '');

			var options = [start, end];
			exec(callback.success, callback.error, "CalendarUtilsModule", "queryCalendar", options);
		},
		addCalendar: function(callback, option) {
			option = option || {};

            var id = platform_cordova.getValue(option.id, '0');
            var title = platform_cordova.getValue(option.title, '');
            var eventAddr = platform_cordova.getValue(option.eventAddr, '');
            var description = platform_cordova.getValue(option.description, '');
            var start = platform_cordova.getValue(option.start, '');
            var end = platform_cordova.getValue(option.end, '');
            var reminderMinute = platform_cordova.getValue(option.reminderMinute, "");

            var options = [id, title, eventAddr, description, start, end, reminderMinute];
			exec(callback.success, callback.error, "CalendarUtilsModule", "addCalendar", options);
		},
		deleteCalendar: function(callback, option) {
		    option = option || {};

        	var eventId = platform_cordova.getValue(option.eventId, '');

			var options = [eventId];
			exec(callback.success, callback.error, "CalendarUtilsModule", "deleteCalendar", options);
		},
		
	};
});