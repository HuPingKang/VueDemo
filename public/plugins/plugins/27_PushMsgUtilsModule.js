/**
 * 复深蓝Cordova 模块定义
 */
cordova.define("plugin.PushMsgUtilsModule", function(require, exports, module) {

	var exec = require('cordova/exec');
	
	//JS全局方法导出，页面可以直接通过全局模块对象调用此方法
	module.exports = {
		msgBind: function(callback, option) {
			option = option || {};
			
			var userName = platform_cordova.getValue(option.userName, '');
			var agentinfostr = platform_cordova.getValue(option.agentinfostr, {});
			var tagArray = platform_cordova.getValue(option.tagArray, []);
			
			var options = [userName, agentinfostr, tagArray];
			exec(callback.success, callback.error, "PushMsgUtilsModule", "msgBind", options);
		},
		msgUnBind: function(callback) {
			var options = [];
			exec(callback.success, callback.error, "PushMsgUtilsModule", "msgUnBind", options);
		},
		setMsgTag: function(callback, option) {
            option = option || {};

            var tagArray = platform_cordova.getValue(option.tagArray, []);

            var options = [tagArray];
        	exec(callback.success, callback.error, "PushMsgUtilsModule", "setMsgTag", options);
        },
	};
});