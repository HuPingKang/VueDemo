/**
 * 复深蓝Cordova 模块定义
 */
cordova.define("plugin.VoiceUtilsModule", function(require, exports, module) {

	var exec = require('cordova/exec');

	
	//JS全局方法导出，页面可以直接通过全局模块对象调用此方法
	module.exports = {
		speechRecognition: function(callback) {
			var options = [];
			exec(callback.success, callback.error, "VoiceUtilsModule", "speechRecognition", options);
		},
		speechSynthesis: function(callback, option) {
			option = option || {};
			
			var text = platform_cordova.getValue(option.text, '');
			var isNeedSpeak = platform_cordova.getValue(option.isNeedSpeak, '0');

			var options = [text,isNeedSpeak];
			exec(callback.success, callback.error, "VoiceUtilsModule", "speechSynthesis", options);
		},
	};
});
