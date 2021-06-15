/**
 * 复深蓝Cordova 模块定义
 */
cordova.define("plugin.MapUtilsModule", function(require, exports, module) {

	var exec = require('cordova/exec');
	
	//JS全局方法导出，页面可以直接通过全局模块对象调用此方法
	module.exports = {
		getLocation: function(callback) {
			var options = [];
			exec(callback.success, callback.error, "MapUtilsModule", "getLocation", options);
		},
		chooseLocation: function(callback, option) {
			option = option || {};
			
			var hasMap = platform_cordova.getValue(option.hasMap, '1');
			var isRoute = platform_cordova.getValue(option.isRoute, '0');
			
			var options = [hasMap,isRoute];
			exec(callback.success, callback.error, "MapUtilsModule", "chooseLocation", options);
		},
		mapNavigation: function(callback, option) {
			option = option || {};
			
               var startLat = platform_cordova.getValue(option.startLat, '');
               var startLon = platform_cordova.getValue(option.startLon, '');
               var endLat = platform_cordova.getValue(option.endLat, '');
               var endLon = platform_cordova.getValue(option.endLon, '');
               var routeType = platform_cordova.getValue(option.routeType, '');
               var routeCity = platform_cordova.getValue(option.routeCity, '');
               var titleBg = platform_cordova.getValue(option.titleBg, '');
               var titleString = platform_cordova.getValue(option.titleString, '');
               var options = [startLat, startLon, endLat, endLon, routeType,routeCity,titleBg,titleString];
			exec(callback.success, callback.error, "MapUtilsModule", "mapNavigation", options);
		},
		openLocation: function(callback, option) {
			option = option || {};
			
			var latitude = platform_cordova.getValue(option.latitude, '');
			var longitude = platform_cordova.getValue(option.longitude, '');
			var scale = platform_cordova.getValue(option.scale, '12');
			
			var options = [latitude, longitude, scale];
			exec(callback.success, callback.error, "MapUtilsModule", "openLocation", options);
		},
		getLatitudeAndLongitudeByAddress: function(callback, option) {
			option = option || {};
			
			var address = platform_cordova.getValue(option.address, '');
			var keyCity = platform_cordova.getValue(option.keyCity, '');
			var options = [address,keyCity];
			exec(callback.success, callback.error, "MapUtilsModule", "getLatitudeAndLongitudeByAddress", options);
		},
		getAddresByLatitudeAndLongitude: function(callback, option) {
			option = option || {};
			
			var latitude = platform_cordova.getValue(option.latitude, '');
			var longitude = platform_cordova.getValue(option.longitude, '');
			
			var options = [latitude, longitude];
			exec(callback.success, callback.error, "MapUtilsModule", "getAddresByLatitudeAndLongitude", options);
		},
		poiKeywordSearch: function(callback, option) {
			option = option || {};
			
               var keyWord = platform_cordova.getValue(option.keyWord, '');
               var keyCity = platform_cordova.getValue(option.keyCity, '');
               var keyType = platform_cordova.getValue(option.keyType, '');
               var titleBg = platform_cordova.getValue(option.titleBg, '');
               var titleString = platform_cordova.getValue(option.titleString, '');
               var hasMap = platform_cordova.getValue(option.hasMap, '1');
               
			var options = [keyWord,keyCity,keyType,titleBg,titleString,hasMap];
			exec(callback.success, callback.error, "MapUtilsModule", "poiKeywordSearch", options);
		},
		poiAroundSearch: function(callback, option) {
			option = option || {};
			
			var keyWord = platform_cordova.getValue(option.keyWord, '');
            var keyCity = platform_cordova.getValue(option.keyCity, '');
            var keyType = platform_cordova.getValue(option.keyType, '');
            var titleBg = platform_cordova.getValue(option.titleBg, '#0000FF');
            var titleString = platform_cordova.getValue(option.titleString, '');
            var hasMap = platform_cordova.getValue(option.hasMap, '1');

            var options = [keyWord, keyCity, keyType, titleBg, titleString, hasMap];
			
			exec(callback.success, callback.error, "MapUtilsModule", "poiAroundSearch", options);
		},
		routeKeyword: function(callback, option) {
			option = option || {};
			
			var startWord = platform_cordova.getValue(option.startWord, '');
            var startCity = platform_cordova.getValue(option.startCity, '');
            var startType = platform_cordova.getValue(option.startType, '');
            var endWord = platform_cordova.getValue(option.endWord, '');
            var endCity = platform_cordova.getValue(option.endCity, '');
            var endType = platform_cordova.getValue(option.endType, '');
            var routeType = platform_cordova.getValue(option.routeType, '1');
            var routeCity = platform_cordova.getValue(option.routeCity, '');

            var options = [startWord, startCity, startType, endWord, endCity, endType, routeType, routeCity];
			exec(callback.success, callback.error, "MapUtilsModule", "routeKeyword", options);
		},
		getDriverNaviPathByKeyword: function(callback, option) {
			option = option || {};

            var startWord = platform_cordova.getValue(option.startWord, '');
            var startCity = platform_cordova.getValue(option.startCity, '');
            var startType = platform_cordova.getValue(option.startType, '');
            var endWord = platform_cordova.getValue(option.endWord, '');
            var endCity = platform_cordova.getValue(option.endCity, '');
            var endType = platform_cordova.getValue(option.endType, '');
			var routeType = platform_cordova.getValue(option.routeType, '1');
			var routeCity = platform_cordova.getValue(option.routeCity, '');
			
			var options = [startWord, startCity, startType, endWord, endCity, endType, routeType, routeCity];
			exec(callback.success, callback.error, "MapUtilsModule", "getDriverNaviPathByKeyword", options);
		},
		getDriverNaviPathByPoint: function(callback, option) {
			option = option || {};

            var startLat = platform_cordova.getValue(option.startLat, '');
            var startLon = platform_cordova.getValue(option.startLon, '');
            var endLat = platform_cordova.getValue(option.endLat, '');
            var endLon = platform_cordova.getValue(option.endLon, '');
			var routeType = platform_cordova.getValue(option.routeType, '1');
			
			var options = [startLat, startLon, endLat, endLon, routeType];
			exec(callback.success, callback.error, "MapUtilsModule", "getDriverNaviPathByPoint", options);
		},
		getRouteTrack: function(callback, option) {
			option = option || {};
			
			var hasMap = platform_cordova.getValue(option.hasMap, '1');
			
			var options = [hasMap];
			exec(callback.success, callback.error, "MapUtilsModule", "getRouteTrack", options);
		},
		getRouteTrackQuery: function(callback, option) {
			option = option || {};
			
			var hasMap = platform_cordova.getValue(option.hasMap, '1');
			
			var options = [hasMap];
			exec(callback.success, callback.error, "MapUtilsModule", "getRouteTrackQuery", options);
		},
	};
});
