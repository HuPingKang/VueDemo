/**
 * 用于判断当前访问的浏览器类型,以便引用不同的cordova.js文件
 * 请注意将该文件引入放置到html文件的末尾,否则无法正常工作
 */
// import platform_cordova from '../src/assets/js/platform_cordova'
(function () {
var device = cordova_checkApp().device;
//如果不是浏览器版本 需要添加cordova
if (device != 'Browser') {
    var pathPrefix = findCordovaPath();
    if (pathPrefix === null) {
        console.log('Could not find cordova.js script tag. Plugin loading may fail.');
        pathPrefix = '';
    }

    var scriptE = document.createElement('script');
    scriptE.setAttribute('type', 'text/javascript');

    if (device == 'Android') {
        scriptE.setAttribute('src', pathPrefix + 'cordova_android.js');
    } else {
        scriptE.setAttribute('src', pathPrefix + 'cordova_ios.js');
    }

    document.head.appendChild(scriptE);
} else {
    // alert('加载器检测设备:' + device);
}

function findCordovaPath() {
    var path = null;
    var scripts = document.getElementsByTagName('script');
    var term = '/cordova.js';
    for (var n = scripts.length - 1; n > -1; n--) {
        var src = scripts[n].src.replace(/\?.*$/, ''); // Strip any query param (CB-6007).
        if (src.indexOf(term) === (src.length - term.length)) {
            path = src.substring(0, src.length - term.length) + '/';
            break;
        }
    }
    return path;
}

function cordova_checkApp() {
    // 安卓APP 和 IOS APP中增加了自定义UA 用于识别当前的版本
    // 其中安卓UA为 SINO_ANDROID_APP/1.0 1.0为版本号
    // IOS UA为 SINO_IOS_APP/1.0
    var reData = {};

    if (platform_cordova.isAndroidApp()) {
        reData.device = 'Android';
    } else if (platform_cordova.isIphoneApp()) {
        reData.device = 'IOS';
    } else {
        reData.device = 'Browser';
    }

    return reData;
}
})();

// export default device;