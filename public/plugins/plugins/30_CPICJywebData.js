/**
 * 复深蓝Cordova 模块定义
 */
cordova.define("plugin.CPICJywebData", function(require, exports, module) {

	var exec = require('cordova/exec');
	
	//JS全局方法导出，页面可以直接通过全局模块对象调用此方法
	module.exports = {
		saveJywebData: function(successCallback, errorCallback,params) {
			if(platform_cordova.isNull(params) || platform_cordova.isNull(params[0])){
				alert('确实业务参数，请按照[key, value]方式传参数！');
				return;
			}
			
			params = params || [];
        	exec(successCallback, errorCallback, "JywebData", "saveJywebData", params);
		},
		getJywebData: function(successCallback, errorCallback,params) {		
			params = params || [];
        	exec(successCallback, errorCallback, "JywebData", "getJywebData", params);
		},
	};
});