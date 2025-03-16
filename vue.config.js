"use strict";
exports.__esModule = true;
var path = require("path");
var vueConfig = {
    pwa: {
        name: 'AnalyseMe',
        themeColor: '',
        appleMobileWebAppCapable: '',
        workboxPluginMode: ''
    },
    configureWebpack: {
        devServer: {
            historyApiFallback: true
        },
        resolve: {
            alias: {
                '@': path.resolve(__dirname, 'src/'),
                '>>': path.resolve(__dirname, 'public/')
            }
        }
    },
    devServer: {
        port: 7400,
        host: ''
    },
    pluginOptions: {
        i18n: {
            locale: 'en',
            fallbackLocale: 'en',
            localeDir: 'locales',
            enableLegacy: false,
            runtimeOnly: false,
            compositionOnly: false,
            fullInstall: true
        }
    }
};
module.exports = vueConfig;
