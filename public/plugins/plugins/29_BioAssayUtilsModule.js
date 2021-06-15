/**
 * 复深蓝Cordova 模块定义
 */
cordova.define("plugin.BioAssayUtilsModule", function(require, exports, module) {

	var exec = require('cordova/exec');
	
	//JS全局方法导出，页面可以直接通过全局模块对象调用此方法
	module.exports = {
		bioAssay: function(callback,option) {
		option = option || {};
        var difficulty = platform_cordova.getValue(option.difficulty, '1');
        var isOpenVoice = platform_cordova.getValue(option.isOpenVoice, '0');
        var actionString = platform_cordova.getValue(option.actionString, 'BLINK,MOUTH,YAW,NOD');
       	var options = [difficulty,isOpenVoice,actionString];
		exec(callback.success, callback.error, "BioAssayUtilsModule", "bioAssay", options);
		},
	};
});