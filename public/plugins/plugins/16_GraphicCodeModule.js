/**
 * 复深蓝Cordova 模块定义
 */
cordova.define("plugin.GraphicCodeModule", function(require, exports, module) {

	var exec = require('cordova/exec');
	
	//JS全局方法导出，页面可以直接通过全局模块对象调用此方法
	module.exports = {
		createBarCode: function(callback, option) {
			option = option || {};
			
			var data = platform_cordova.getValue(option.data, '');
			
			var options = [data];
			exec(callback.success, callback.error, "GraphicCodeModule", "createBarCode", options);
		},
		recognitionBarCode: function(callback) {
			var options = [];
			exec(callback.success, callback.error, "GraphicCodeModule", "recognitionBarCode", options);
		},
		createQRCode: function(callback, option) {
			option = option || {};
			
			var data = platform_cordova.getValue(option.data, '');
			
			var options = [data];
			exec(callback.success, callback.error, "GraphicCodeModule", "createQRCode", options);
		},
		recognitionQRCode: function(callback) {
			var options = [];
			exec(callback.success, callback.error, "GraphicCodeModule", "recognitionQRCode", options);
		},
		recognitionQRCodeByImage: function(callback, option) {
			option = option || {};
			
			var path = platform_cordova.getValue(option.path, '');
			
			var options = [path];
			exec(callback.success, callback.error, "GraphicCodeModule", "recognitionQRCodeByImage", options);
		},
		saveQRCode: function(callback, option) {
			option = option || {};
			
			var info = platform_cordova.getValue(option.info, '');
			
			var options = [info];
			exec(callback.success, callback.error, "GraphicCodeModule", "saveQRCode", options);
		},
	};
});