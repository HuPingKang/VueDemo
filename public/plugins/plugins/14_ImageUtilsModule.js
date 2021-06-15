/**
 * 复深蓝Cordova 模块定义
 */
cordova.define("plugin.ImageUtilsModule", function(require, exports, module) {

	var exec = require('cordova/exec');
	
	//JS全局方法导出，页面可以直接通过全局模块对象调用此方法
	module.exports = {
		chooseImage: function(callback, option) {
			option = option || {};

			var count = platform_cordova.getValue(option.count, '9');
			var quality = platform_cordova.getValue(option.quality, '50');
			var sourceType = platform_cordova.getValue(option.sourceType, 'all');
			var selected = platform_cordova.getValue(option.selected, []);
			var dirName = platform_cordova.getValue(option.dirName, '');
			var saveToPhotoAlbum = platform_cordova.getValue(option.saveToPhotoAlbum, '');
			var sensortype = platform_cordova.getValue(option.sensortype, '');
			var targetWidth = platform_cordova.getValue(option.targetWidth, '');
			var targetHeight = platform_cordova.getValue(option.targetHeight, '');
			var fileName = platform_cordova.getValue(option.fileName, '');
			var fileName_prefix = platform_cordova.getValue(option.fileName_prefix, '');
			var fileType = platform_cordova.getValue(option.fileType, '');
			var watermarkContent = platform_cordova.getValue(option.watermarkContent, '');
			var isNeedBase64 = platform_cordova.getValue(option.isNeedBase64, '0');
			var mediaType = platform_cordova.getValue(option.mediaType, '0');
			var correctOrientation = platform_cordova.getValue(option.correctOrientation, '0');
			var uploadUrl = platform_cordova.getValue(option.uploadUrl, '');

			var options = [count, quality,sourceType, selected, dirName, saveToPhotoAlbum,
			              sensortype,targetWidth,targetHeight,fileName,
			              fileName_prefix, fileType, watermarkContent, isNeedBase64,
			              mediaType, correctOrientation, uploadUrl];
			exec(callback.success, callback.error, "ImageUtilsModule", "chooseImage", options);
		},
		previewImage: function(callback, option) {
			option = option || {};
			
			var index = platform_cordova.getValue(option.index, '0');
			var urls = platform_cordova.getValue(option.urls, []);
			
			var options = [index, urls];
			exec(callback.success, callback.error, "ImageUtilsModule", "previewImage", options);
		},
		previewDirImage: function(callback, option) {
			option = option || {};

			var dirPath = platform_cordova.getValue(option.dirPath, '');

			var options = [dirPath];
			exec(callback.success, callback.error, "ImageUtilsModule", "previewDirImage", options);
		},
		getImageInfo: function(callback, option) {
			option = option || {};
			
			var path = platform_cordova.getValue(option.path, '');
			var isNeedBase64 = platform_cordova.getValue(option.isNeedBase64, '0');

			var options = [path,isNeedBase64];
			exec(callback.success, callback.error, "ImageUtilsModule", "getImageInfo", options);
		},
		saveImageToPhotosAlbum: function(callback, option) {
			option = option || {};
			
			var path = platform_cordova.getValue(option.path, '');
			
			var options = [path];
			exec(callback.success, callback.error, "ImageUtilsModule", "saveImageToPhotosAlbum", options);
		},
		editImage: function(callback, option) {
			option = option || {};
			
			var path = platform_cordova.getValue(option.path, '');
			var isNeedBase64 = platform_cordova.getValue(option.isNeedBase64, '0');
			var dirName = platform_cordova.getValue(option.dirName, '');
			var fileName = platform_cordova.getValue(option.fileName, '');

			var options = [path,isNeedBase64,dirName,fileName];
			exec(callback.success, callback.error, "ImageUtilsModule", "editImage", options);
		},
		addWatermark: function(callback, option) {
			option = option || {};
			
			var path = platform_cordova.getValue(option.path, '');
			var waterMarkPath = platform_cordova.getValue(option.waterMarkPath, '');
			var isShowTime = platform_cordova.getValue(option.isShowTime, '0');
			var isShowAddr = platform_cordova.getValue(option.isShowAddr, '0');
			var position = platform_cordova.getValue(option.position, '3');
			var watermarkContent = platform_cordova.getValue(option.watermarkContent, '');
			var isNeedBase64 = platform_cordova.getValue(option.isNeedBase64, '0');

			var options = [path, waterMarkPath, isShowTime, isShowAddr,
			                position,watermarkContent,isNeedBase64];
			exec(callback.success, callback.error, "ImageUtilsModule", "addWatermark", options);
		},
		saveBase64ToPhotosAlbum: function(callback, option) {
			option = option || {};

			var base64 = platform_cordova.getValue(option.base64, '');

			var options = [base64];
			exec(callback.success, callback.error, "ImageUtilsModule", "saveBase64ToPhotosAlbum", options);
		},
	};
});
