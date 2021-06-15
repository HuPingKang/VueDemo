cordova.define('cordova/plugin_list', function(require, exports, module) {
	module.exports = [
//      {
//      "id": "cordova-plugin-wkwebview-engine.ios-wkwebview-exec",
//      "file": "plugins/cordova-plugin-wkwebview-engine/src/www/ios/ios-wkwebview-exec.js",
//      "pluginId": "cordova-plugin-wkwebview-engine",
//      "clobbers": [
//                   "cordova.exec"
//                   ]
//      },
//      {
//      "id": "cordova-plugin-wkwebview-engine.ios-wkwebview",
//      "file": "plugins/cordova-plugin-wkwebview-engine/src/www/ios/ios-wkwebview.js",
//      "pluginId": "cordova-plugin-wkwebview-engine",
//      "clobbers": [
//                   "window.WkWebView"
//                   ]
//      },
        {
			"file": "plugins/01_BaseUtilsModule.js",
			"id": "plugin.BaseUtilsModule",
			"clobbers": [
				"BaseUtilsModule"
			]
		},
		{
			"file": "plugins/02_AppUtilsModule.js",
			"id": "plugin.AppUtilsModule",
			"clobbers": [
				"AppUtilsModule"
			]
		},
		{
			"file": "plugins/03_PackageUtilsModule.js",
			"id": "plugin.PackageUtilsModule",
			"clobbers": [
				"PackageUtilsModule"
			]
		},
		{
			"file": "plugins/04_DeviceUtilsModule.js",
			"id": "plugin.DeviceUtilsModule",
			"clobbers": [
				"DeviceUtilsModule"
			]
		},
		{
			"file": "plugins/05_ModelUtisModule.js",
			"id": "plugin.ModelUtisModule",
			"clobbers": [
				"ModelUtisModule"
			]
		},
		{
			"file": "plugins/06_SettingUtilsModule.js",
			"id": "plugin.SettingUtilsModule",
			"clobbers": [
				"SettingUtilsModule"
			]
		},
		{
			"file": "plugins/07_SecurityUtilsModule.js",
			"id": "plugin.SecurityUtilsModule",
			"clobbers": [
				"SecurityUtilsModule"
			]
		},
		{
			"file": "plugins/08_NetworkUtilsModule.js",
			"id": "plugin.NetworkUtilsModule",
			"clobbers": [
				"NetworkUtilsModule"
			]
		},
		{
			"file": "plugins/09_StorageUtilsModule.js",
			"id": "plugin.StorageUtilsModule",
			"clobbers": [
				"StorageUtilsModule"
			]
		},
		{
			"file": "plugins/10_CalendarUtilsModule.js",
			"id": "plugin.CalendarUtilsModule",
			"clobbers": [
				"CalendarUtilsModule"
			]
		},
		{
			"file": "plugins/11_ContactsUtilsModule.js",
			"id": "plugin.ContactsUtilsModule",
			"clobbers": [
				"ContactsUtilsModule"
			]
		},
		{
			"file": "plugins/12_FileUtilsModule.js",
			"id": "plugin.FileUtilsModule",
			"clobbers": [
				"FileUtilsModule"
			]
		},
		{
			"file": "plugins/13_OCRUtilsModule.js",
			"id": "plugin.OCRUtilsModule",
			"clobbers": [
				"OCRUtilsModule"
			]
		},
		{
			"file": "plugins/14_ImageUtilsModule.js",
			"id": "plugin.ImageUtilsModule",
			"clobbers": [
				"ImageUtilsModule"
			]
		},
		{
			"file": "plugins/15_AudioUtilsModule.js",
			"id": "plugin.AudioUtilsModule",
			"clobbers": [
				"AudioUtilsModule"
			]
		},
		{
			"file": "plugins/16_GraphicCodeModule.js",
			"id": "plugin.GraphicCodeModule",
			"clobbers": [
				"GraphicCodeModule"
			]
		},
		{
			"file": "plugins/17_ShareUtilsModule.js",
			"id": "plugin.ShareUtilsModule",
			"clobbers": [
				"ShareUtilsModule"
			]
		},
		{
			"file": "plugins/18_PayUtilsModule.js",
			"id": "plugin.PayUtilsModule",
			"clobbers": [
				"PayUtilsModule"
			]
		},
		{
			"file": "plugins/19_ThirdAuthModule.js",
			"id": "plugin.ThirdAuthModule",
			"clobbers": [
				"ThirdAuthModule"
			]
		},
		{
			"file": "plugins/20_MapUtilsModule.js",
			"id": "plugin.MapUtilsModule",
			"clobbers": [
				"MapUtilsModule"
			]
		},
		{
			"file": "plugins/22_HandSignModule.js",
			"id": "plugin.HandSignModule",
			"clobbers": [
				"HandSignModule"
			]
		},
		{
			"file": "plugins/23_VoiceUtilsModule.js",
			"id": "plugin.VoiceUtilsModule",
			"clobbers": [
				"VoiceUtilsModule"
			]
		},
		{
			"file": "plugins/24_DatabaseUtilsModule.js",
			"id": "plugin.DatabaseUtilsModule",
			"clobbers": [
				"DatabaseUtilsModule"
			]
		},
		{
			"file": "plugins/25_PhoneCommunicateModule.js",
			"id": "plugin.PhoneCommunicateModule",
			"clobbers": [
				"PhoneCommunicateModule"
			]
		},
		{
			"file": "plugins/26_VideoUtilsModule.js",
			"id": "plugin.VideoUtilsModule",
			"clobbers": [
				"VideoUtilsModule"
			]
		},
		{
		    "file": "plugins/27_PushMsgUtilsModule.js",
		    "id": "plugin.PushMsgUtilsModule",
		    "clobbers": [
		         "PushMsgUtilsModule"
		    ]
		},
		{
            "file": "plugins/28_VideoCallUtilsModule.js",
            "id": "plugin.VideoCallUtilsModule",
            "clobbers": [
                "VideoCallUtilsModule"
            ]
        },
		{
			"file": "plugins/29_BioAssayUtilsModule.js",
			"id": "plugin.BioAssayUtilsModule",
			"clobbers": [
				"BioAssayUtilsModule"
			]
		},
		{
			"file": "plugins/30_CPICJywebData.js",
			"id": "plugin.CPICJywebData",
			"clobbers": [
				"CPICJywebData"
			]
		},
		{
        	"file": "plugins/31_BackServiceUtilsModule.js",
        	"id": "plugin.BackServiceUtilsModule",
        	"clobbers": [
        		"BackServiceUtilsModule"
        	]
        },
      {
      "id": "cordova-plugin-inappbrowser.inappbrowser",
      "file": "plugins/inappbrowser.js",
      "pluginId": "cordova-plugin-inappbrowser",
      "clobbers": [
                   "cordova.InAppBrowser.open",
                   "window.open"
                   ]
      },
	];
	module.exports.metadata = {
		"cordova.plugin.photosAlbums": "1.0",
		"cordova.plugin.appInfo": "1.0",
		"cordova-plugin-whitelist": "1.3.3",
        "cordova-plugin-inappbrowser": "3.0.0"
//        "cordova-plugin-wkwebview-engine": "1.1.4"
	}
});
