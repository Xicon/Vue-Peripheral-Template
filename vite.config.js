"use strict";
exports.__esModule = true;
var vite_1 = require("vite");
var plugin_vue_1 = require("@vitejs/plugin-vue");
var path_1 = require("path"); // 引入Node,配置别名
exports["default"] = (0, vite_1.defineConfig)(function (_a) {
    var command = _a.command;
    // 开发环境配置
    if (command === 'serve') {
        return {
            plugins: [(0, plugin_vue_1["default"])()],
            resolve: {
                // 别名
                alias: [
                    { find: '@', replacement: (0, path_1.resolve)(__dirname, 'src') + '/' },
                    { find: 'images', replacement: (0, path_1.resolve)(__dirname, 'public/images') + '/' }, // 图片文件夹
                ],
                extensions: ['.js', '.ts', '.json']
            }
        };
    }
    // 生产环境配置
    else {
        return {
            base: './',
            plugins: [(0, plugin_vue_1["default"])(),
                // element-plus	start
                styleImport({
                    libs: [{
                            libraryName: 'element-plus',
                            esModule: true,
                            ensureStyleFile: true,
                            resolveStyle: function (name) {
                                name = name.slice(3);
                                return "element-plus/packages/theme-chalk/src/".concat(name, ".scss");
                            },
                            resolveComponent: function (name) {
                                return "element-plus/lib/".concat(name);
                            }
                        }]
                }),
                // element-plus end
            ],
            resolve: {
                alias: [
                    { find: '@', replacement: (0, path_1.resolve)(__dirname, 'src') + '/' },
                    { find: 'images', replacement: (0, path_1.resolve)(__dirname, 'public/images') + '/' },
                ]
            },
            // 服务
            server: {
                // 代理, 解决前端跨域
                proxy: {
                    '/api': {
                        target: 'https://localhost:8080',
                        changeOrigin: true,
                        rewrite: function (path) { return path.replace(/^\/api/, ''); }
                    }
                }
            },
            build: {
                sourcemap: false,
                output: 'dist',
                assetsDir: 'assets',
                cssCodeSplit: true,
                minify: 'terser',
                terserOptions: {
                    // 生产环境输出
                    compress: {
                        drop_debugger: true,
                        drop_console: true
                    }
                },
                server: {
                    https: true,
                    proxy: {
                        '/api': {
                            target: 'https://localhost:8080',
                            changeOrigin: true,
                            rewrite: function (path) { return path.replace(/^\/api/, ''); }
                        }
                    }
                }
            },
            rollupOptions: {
                // 输出目录
                output: {
                    chunkFileNames: 'js/[name]-[hash].js',
                    entryFileNames: 'js/[name]-[hash].js',
                    assetFileNames: '[ext]/[name]/[hash].[ext]',
                    manualChunks: {
                        'element-plus': ['element-plus'],
                        echarts: ['echarts']
                    }
                }
            },
            chunkSizeWarningLimit: 600
        };
    }
});
