/**
 * 复深蓝Cordova 模块定义
 */
cordova.define("plugin.FileUtilsModule", function(require, exports, module) {

	var exec = require('cordova/exec');
	
	//JS全局方法导出，页面可以直接通过全局模块对象调用此方法
	module.exports = {
		getFileInfo: function(callback, option) {
			option = option || {};

			var path = platform_cordova.getValue(option.path, '');
			var digestAlgorithm = platform_cordova.getValue(option.digestAlgorithm, '1');
			
			var options = [path, digestAlgorithm];
			exec(callback.success, callback.error, "FileUtilsModule", "getFileInfo", options);
		},
		openFile: function(callback, option) {
			option = option || {};
			
			var path = platform_cordova.getValue(option.path, '');
			
			var options = [path];
			exec(callback.success, callback.error, "FileUtilsModule", "openFile", options);
		},
		getFileList: function(callback, option) {
			option = option || {};
			
			var path = platform_cordova.getValue(option.path, '');
			
			var options = [path];
			exec(callback.success, callback.error, "FileUtilsModule", "getFileList", options);
		},
		getFileCount: function(callback, option) {
			option = option || {};
			
			var path = platform_cordova.getValue(option.path, '');
			var fileType = platform_cordova.getValue(option.fileType, '0');
			
			var options = [path, fileType];
			exec(callback.success, callback.error, "FileUtilsModule", "getFileCount", options);
		},
		compressFile: function(callback, option) {
			option = option || {};
			
			var path = platform_cordova.getValue(option.path, '');
			var zipName = platform_cordova.getValue(option.zipName, '');
			
			var options = [path, zipName];
			exec(callback.success, callback.error, "FileUtilsModule", "compressFile", options);
		},
		unZipArchiveFile: function(callback, option) {
			option = option || {};
			
			var path = platform_cordova.getValue(option.path, '');
			var destinationDir = platform_cordova.getValue(option.destinationDir, '');
			
			var options = [path, destinationDir];
			exec(callback.success, callback.error, "FileUtilsModule", "unZipArchiveFile", options);
		},
		deleteFile: function(callback, option) {
			option = option || {};
			
			var path = platform_cordova.getValue(option.path, '');
			var isForce = platform_cordova.getValue(option.isForce, '0');
			
			var options = [path, isForce];
			exec(callback.success, callback.error, "FileUtilsModule", "deleteFile", options);
		},
		existFile: function(callback, option) {
			option = option || {};
			
			var path = platform_cordova.getValue(option.path, '');
			
			var options = [path];
			exec(callback.success, callback.error, "FileUtilsModule", "existFile", options);
		},
		openDownloadView: function(callback) {
			var options = [];
			exec(callback.success, callback.error, "FileUtilsModule", "openDownloadView", options);
		},
	};
});
