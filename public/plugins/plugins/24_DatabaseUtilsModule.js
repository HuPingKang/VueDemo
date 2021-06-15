/**
 * 复深蓝Cordova 模块定义
 */
cordova.define("plugin.DatabaseUtilsModule", function(require, exports, module) {

	var exec = require('cordova/exec');
	
	//JS全局方法导出，页面可以直接通过全局模块对象调用此方法
	module.exports = {
		initOpenDatabase: function(callback, option) {
			option = option || {};
			
			var name = platform_cordova.getValue(option.name, 'db.db');
			var version = platform_cordova.getValue(option.version, '1');
			
			var options = [name, version];
			exec(callback.success, callback.error, "DatabaseUtilsModule", "initOpenDatabase", options);
		},
		closeDatabase: function(callback, option) {
		    option = option || {};
        	var name = platform_cordova.getValue(option.name, 'db.db');
        	var version = platform_cordova.getValue(option.version, '1');

			var options = [name, version];
			exec(callback.success, callback.error, "DatabaseUtilsModule", "closeDatabase", options);
		},
		executeSql: function(callback, option) {
			option = option || {};

			var name = platform_cordova.getValue(option.name, 'db.db');
            var version = platform_cordova.getValue(option.version, '1');
			var sql = platform_cordova.getValue(option.sql, '');
			var params = platform_cordova.getValue(option.params, 'default');
			
			var options = [name, version, sql, params];
			exec(callback.success, callback.error, "DatabaseUtilsModule", "executeSql", options);
		},
	};
});
