cordova.define('cordova/plugin_list', function(require, exports, module) {
  module.exports = [
    {
      "id": "cordova-plugin-splashscreen-greetgo.SplashScreen",
      "file": "plugins/cordova-plugin-splashscreen-greetgo/www/splashscreen.js",
      "pluginId": "cordova-plugin-splashscreen-greetgo",
      "clobbers": [
        "navigator.splashscreen"
      ]
    }
  ];
  module.exports.metadata = {
    "cordova-plugin-whitelist": "1.3.3",
    "cordova-plugin-splashscreen-greetgo": "1.0.2"
  };
});