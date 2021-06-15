/**
 * 复深蓝Cordova 模块定义
 */
cordova.define("plugin.HandSignModule", function(require, exports, module) {

	var exec = require('cordova/exec');
	
	//JS全局方法导出，页面可以直接通过全局模块对象调用此方法
	module.exports = {
		initCA: function(callback, option) {
			option =[];
			exec(callback.success, callback.error, "HandSignModule", "initCA", option);
		},
		isInitCA: function(callback) {
			var option = [];
			exec(callback.success, callback.error, "HandSignModule", "isInitCA", option);
		},
		sign: function(callback, option) {
			option = option || {};

			var title = platform_cordova.getValue(option.title, '');
			var titleSpanFromOffset = platform_cordova.getValue(option.titleSpanFromOffset, '0');
			var titleSpanToOffset = platform_cordova.getValue(option.titleSpanToOffset, '0');
			var type = platform_cordova.getValue(option.type, '1');
			var tid = platform_cordova.getValue(option.tid, '1');
			var nessesary = platform_cordova.getValue(option.nessesary, '0');
			var ssid = platform_cordova.getValue(option.ssid, '');

			var options = [title, titleSpanFromOffset, titleSpanToOffset, type, tid, nessesary, ssid];
			exec(callback.success, callback.error, "HandSignModule", "sign", options);
		},
		getSign: function(callback, option) {
			option = option || {};
			var type = platform_cordova.getValue(option.type, '1');
			var options = [type];
			exec(callback.success, callback.error, "HandSignModule", "getSign", options);
		},
		getSignList: function(callback) {
			var options = [];
			exec(callback.success, callback.error, "HandSignModule", "getSignList", options);
		},
		getCAEncrypt: function(callback, option) {
			option = option || {};

            var formData = platform_cordova.getValue(option.formData, '');
            var signer = platform_cordova.getValue(option.signer, '0');
            var channelId = platform_cordova.getValue(option.channelId, '0');
            var tid = platform_cordova.getValue(option.tid, '1');

            var options = [formData, signer, channelId, tid];
			exec(callback.success, callback.error, "HandSignModule", "getCAEncrypt", options);
		},
		closeCA: function(callback) {
			var options = [];
			exec(callback.success, callback.error, "HandSignModule", "closeCA", options);
		},
		deleteSession: function(callback) {
			var options = [];
			exec(callback.success, callback.error, "HandSignModule", "deleteSession", options);
		},
		
	};
});
