cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "file": "plugins/cordova-plugin-splashscreen-greetgo/www/splashscreen.js",
        "id": "cordova-plugin-splashscreen-greetgo.SplashScreen",
        "pluginId": "cordova-plugin-splashscreen-greetgo",
        "clobbers": [
            "navigator.splashscreen"
        ]
    },
    {
        "file": "plugins/cordova-plugin-splashscreen-greetgo/src/browser/SplashScreenProxy.js",
        "id": "cordova-plugin-splashscreen-greetgo.SplashScreenProxy",
        "pluginId": "cordova-plugin-splashscreen-greetgo",
        "runs": true
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "cordova-plugin-whitelist": "1.3.3",
    "cordova-plugin-splashscreen-greetgo": "1.0.2"
}
// BOTTOM OF METADATA
});