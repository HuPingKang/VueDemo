/**
 * 复深蓝Cordova 模块定义
 */
cordova.define("plugin.OCRUtilsModule", function(require, exports, module) {

	var exec = require('cordova/exec');
	
	//JS全局方法导出，页面可以直接通过全局模块对象调用此方法
	module.exports = {
		getDrivingOCR: function(callback, option) {
            option = option || {};

            var imagePath = platform_cordova.getValue(option.imagePath, '');
            var souceType = platform_cordova.getValue(option.souceType, 'all');
            var functionType = platform_cordova.getValue(option.functionType, '0');
            var ocrUrl = platform_cordova.getValue(option.ocrUrl, '');
            var isImageCrop = platform_cordova.getValue(option.isImageCrop, '');
            var imageCropUrl = platform_cordova.getValue(option.imageCropUrl, '');

            var options = [imagePath, souceType, functionType, ocrUrl, isImageCrop, imageCropUrl];
	        exec(callback.success, callback.error, "OCRUtilsModule", "getDrivingOCR", options);
		},
		getDrivingLicenceOCR: function(callback, option) {
			option = option || {};

            var imagePath = platform_cordova.getValue(option.imagePath, '');
            var souceType = platform_cordova.getValue(option.souceType, 'all');
            var functionType = platform_cordova.getValue(option.functionType, '0');
            var ocrUrl = platform_cordova.getValue(option.ocrUrl, '');
            var isImageCrop = platform_cordova.getValue(option.isImageCrop, '');
            var imageCropUrl = platform_cordova.getValue(option.imageCropUrl, '');
            var objectType = platform_cordova.getValue(option.objectType, '1');

            var options = [imagePath, souceType, functionType, ocrUrl, isImageCrop, imageCropUrl, objectType];
		    exec(callback.success, callback.error, "OCRUtilsModule", "getDrivingLicenceOCR", options);
		},
		getNewCarOCR: function(callback, option) {
			option = option || {};

            var imagePath = platform_cordova.getValue(option.imagePath, '');
            var souceType = platform_cordova.getValue(option.souceType, 'all');
            var functionType = platform_cordova.getValue(option.functionType, '0');
            var ocrUrl = platform_cordova.getValue(option.ocrUrl, '');
            var isImageCrop = platform_cordova.getValue(option.isImageCrop, '');
            var imageCropUrl = platform_cordova.getValue(option.imageCropUrl, '');

            var options = [imagePath, souceType, functionType, ocrUrl, isImageCrop, imageCropUrl];
		    exec(callback.success, callback.error, "OCRUtilsModule", "getNewCarOCR", options);
		},
		getIDOCR: function(callback, option) {
            option = option || {};

            var imagePath = platform_cordova.getValue(option.imagePath, '');
            var souceType = platform_cordova.getValue(option.souceType, 'all');
            var functionType = platform_cordova.getValue(option.functionType, '0');
            var ocrUrl = platform_cordova.getValue(option.ocrUrl, '');
            var faceType = platform_cordova.getValue(option.faceType, '1');//身份证   0反面   1正面
            var isImageCrop = platform_cordova.getValue(option.isImageCrop, '');
            var imageCropUrl = platform_cordova.getValue(option.imageCropUrl, '');

            var options = [imagePath, souceType, functionType, ocrUrl, faceType, isImageCrop, imageCropUrl];
			exec(callback.success, callback.error, "OCRUtilsModule", "getIDOCR", options);
		},
		getBankCardOCR: function(callback, option) {
			option = option || {};

            var imagePath = platform_cordova.getValue(option.imagePath, '');
            var souceType = platform_cordova.getValue(option.souceType, 'all');
            var functionType = platform_cordova.getValue(option.functionType, '0');
            var ocrUrl = platform_cordova.getValue(option.ocrUrl, '');
            var isImageCrop = platform_cordova.getValue(option.isImageCrop, '');
            var imageCropUrl = platform_cordova.getValue(option.imageCropUrl, '');

            var options = [imagePath, souceType, functionType, ocrUrl, isImageCrop, imageCropUrl];
			exec(callback.success, callback.error, "OCRUtilsModule", "getBankCardOCR", options);
		},
		getPassportOCR: function(callback, option) {
			option = option || {};

            var imagePath = platform_cordova.getValue(option.imagePath, '');
            var souceType = platform_cordova.getValue(option.souceType, 'all');
            var functionType = platform_cordova.getValue(option.functionType, '0');
            var ocrUrl = platform_cordova.getValue(option.ocrUrl, '');
            var isImageCrop = platform_cordova.getValue(option.isImageCrop, '');
            var imageCropUrl = platform_cordova.getValue(option.imageCropUrl, '');

            var options = [imagePath, souceType, functionType, ocrUrl, isImageCrop, imageCropUrl];
			exec(callback.success, callback.error, "OCRUtilsModule", "getPassportOCR", options);
		},
		getFamilyRegisOCR: function(callback, option) {
			option = option || {};

            var imagePath = platform_cordova.getValue(option.imagePath, '');
            var souceType = platform_cordova.getValue(option.souceType, 'all');
            var functionType = platform_cordova.getValue(option.functionType, '0');
            var ocrUrl = platform_cordova.getValue(option.ocrUrl, '');
            var isImageCrop = platform_cordova.getValue(option.isImageCrop, '');
            var imageCropUrl = platform_cordova.getValue(option.imageCropUrl, '');
            var owner = platform_cordova.getValue(option.owner, '0');

            var options = [imagePath, souceType, functionType, ocrUrl, isImageCrop, imageCropUrl, owner];
			exec(callback.success, callback.error, "OCRUtilsModule", "getFamilyRegisOCR", options);
		},
		cardClassify: function(callback, option) {
			option = option || {};

            var imagePath = platform_cordova.getValue(option.imagePath, '');
            var souceType = platform_cordova.getValue(option.souceType, 'all');
            var functionType = platform_cordova.getValue(option.functionType, '0');
            var ocrUrl = platform_cordova.getValue(option.ocrUrl, '');
            var isImageCrop = platform_cordova.getValue(option.isImageCrop, '');
            var imageCropUrl = platform_cordova.getValue(option.imageCropUrl, '');

            var options = [imagePath, souceType, functionType, ocrUrl, isImageCrop, imageCropUrl];
			exec(callback.success, callback.error, "OCRUtilsModule", "cardClassify", options);
		},
		getCarCardOCR: function(callback, option) {
        	option = option || {};

            var imagePath = platform_cordova.getValue(option.imagePath, '');
            var souceType = platform_cordova.getValue(option.souceType, 'all');
            var functionType = platform_cordova.getValue(option.functionType, '0');
            var ocrUrl = platform_cordova.getValue(option.ocrUrl, '');
            var isImageCrop = platform_cordova.getValue(option.isImageCrop, '');
            var imageCropUrl = platform_cordova.getValue(option.imageCropUrl, '');

            var options = [imagePath, souceType, functionType, ocrUrl, isImageCrop, imageCropUrl];
        	exec(callback.success, callback.error, "OCRUtilsModule", "getCarCardOCR", options);
        },
        getBusinessLicenceOCR: function(callback, option) {
            option = option || {};

            var imagePath = platform_cordova.getValue(option.imagePath, '');
            var souceType = platform_cordova.getValue(option.souceType, 'all');
            var functionType = platform_cordova.getValue(option.functionType, '0');
            var ocrUrl = platform_cordova.getValue(option.ocrUrl, '');
            var isImageCrop = platform_cordova.getValue(option.isImageCrop, '');
            var imageCropUrl = platform_cordova.getValue(option.imageCropUrl, '');

            var options = [imagePath, souceType, functionType, ocrUrl, isImageCrop, imageCropUrl];
            exec(callback.success, callback.error, "OCRUtilsModule", "getBusinessLicenceOCR", options);
        },
		getOCRInfo: function(callback, option) {
			option = option || {};

			//不能为空
			var ocrType = platform_cordova.getValue(option.ocrType, '');
			
			if(platform_cordova.isNull(ocrType)){
				alert('接口参数缺少ocrType字段，请参考接口文档传值!');
				return;
			}
			
			switch(ocrType){
				case '1':{
				    this.getIDOCR(callback, option);
					break;
				}
				case '2':{
				    this.getBankCardOCR(callback, option);
					break;
				}
				case '3':{
				    this.getDrivingLicenceOCR(callback, option);
					break;
				}
				case '4':{
                    this.getNewCarOCR(callback, option);
					break;
				}
				case '5':{
                    this.getPassportOCR(callback, option);
					break;
				}
				case '6':{
				    this.getDrivingOCR(callback, option);
					break;
				}
				case '7':{
					this.getFamilyRegisOCR(callback, option);
					break;
				}
				case '8':{
                	this.getBusinessLicenceOCR(callback, option);
                	break;
                }
                case '9':{
                    this.getCarCardOCR(callback, option);
                    break;
                }
			}
            
		},
	};
});
