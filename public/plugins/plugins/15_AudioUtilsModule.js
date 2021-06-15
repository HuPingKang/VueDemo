/**
 * 复深蓝Cordova 模块定义
 */
cordova.define("plugin.AudioUtilsModule", function(require, exports, module) {

	var exec = require('cordova/exec');

	//JS全局方法导出，页面可以直接通过全局模块对象调用此方法
	module.exports = {
		startRecord: function(callback, option) {
            option = option || {};
            
            var duration = platform_cordova.getValue(option.duration, '10');
            var recordType = platform_cordova.getValue(option.recordType, '2');
            var isShowFloat = platform_cordova.getValue(option.isShowFloat, '0');
            var isHasPage = platform_cordova.getValue(option.isHasPage, '0');
            var dirName = platform_cordova.getValue(option.dirName, 'audio_wav');
            var fileName = platform_cordova.getValue(option.fileName, '20201022_audio');
            
            var options = [duration,recordType,isShowFloat,isHasPage,dirName,fileName];

			exec(callback.success, callback.error, "AudioUtilsModule", "startRecord", options);
		},
		pauseRecord: function(callback) {
			var options = [];
			exec(callback.success, callback.error, "AudioUtilsModule", "pauseRecord", options);
		},
		resumeRecord: function(callback) {
			var options = [];
			exec(callback.success, callback.error, "AudioUtilsModule", "resumeRecord", options);
		},
		stopRecord: function(callback) {
			var options = [];
			exec(callback.success, callback.error, "AudioUtilsModule", "stopRecord", options);
		},
		playVoice: function(callback, option) {
			option = option || {};
			
			var filePath = platform_cordova.getValue(option.filePath, '5678.caf');
			
			var options = [filePath];
			exec(callback.success, callback.error, "AudioUtilsModule", "playVoice", options);
		},
		pauseVoice: function(callback) {
			var options = [];
			exec(callback.success, callback.error, "AudioUtilsModule", "pauseVoice", options);
		},
		resumeVoice: function(callback) {
			var options = [];
			exec(callback.success, callback.error, "AudioUtilsModule", "resumeVoice", options);
		},
		stopVoice: function(callback) {
			var options = [];
			exec(callback.success, callback.error, "AudioUtilsModule", "stopVoice", options);
		},
        startStreamRecord: function(callback) {
            var options = [];
            exec(callback.success, callback.error, "AudioUtilsModule", "startStreamRecord", options);
        },
        stopStreamRecord: function(callback) {
            var options = [];
            exec(callback.success, callback.error, "AudioUtilsModule", "stopStreamRecord", options);
        },
	};
});
