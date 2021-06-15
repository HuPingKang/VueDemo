/**
 * 复深蓝Cordova 模块定义
 */
cordova.define("plugin.ContactsUtilsModule", function(require, exports, module) {

	var exec = require('cordova/exec');
	
	//JS全局方法导出，页面可以直接通过全局模块对象调用此方法
	module.exports = {
		selectContacts: function(callback) {
			var options = [];
			exec(callback.success, callback.error, "ContactsUtilsModule", "selectContacts", options);
		},
		addContacts: function(callback, option) {
			option = option || {};
			
			var name = platform_cordova.getValue(option.name, '');
			var phoneNum = platform_cordova.getValue(option.phoneNum, []);
			var orgName = platform_cordova.getValue(option.orgName, '');
			var email = platform_cordova.getValue(option.email, '');
			var address = platform_cordova.getValue(option.address, '');
			var notes = platform_cordova.getValue(option.notes, '');

			var options = [name, phoneNum, orgName, email, address, notes];
			exec(callback.success, callback.error, "ContactsUtilsModule", "addContacts", options);
		},
		deleteContacts: function(callback, option) {
			option = option || {};
			
			var name = platform_cordova.getValue(option.name, '');
			var phoneNum = platform_cordova.getValue(option.phoneNum, '');
			
			var options = [name, phoneNum];
			exec(callback.success, callback.error, "ContactsUtilsModule", "deleteContacts", options);
		},
		getAllContacts: function(callback, option) {
			option = option || {};

            var count = platform_cordova.getValue(option.count, '');

            var options = [count];
			exec(callback.success, callback.error, "ContactsUtilsModule", "getAllContacts", options);
		},
	};
});
