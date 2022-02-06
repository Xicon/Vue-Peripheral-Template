import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path' // 引入Node,配置别名

export default defineConfig(( { command } ) => {
	// 开发环境配置
	if ( command === 'serve' ) {
		return {

			plugins: [vue()],
			resolve: {
				// 别名
				alias: [
					{ find: '@', replacement: resolve(__dirname, 'src') + '/' }, // src 目录下
					{ find: 'images', replacement: resolve(__dirname, 'public/images') + '/' }, // 图片文件夹
				],
				extensions: ['.js', '.ts', '.json'], // 引入时忽略的文件扩展名列表
			},

		}
	}

	// 生产环境配置
	else {
		return {

			base: './', // 路径
			plugins: [vue(),
				// element-plus	start
				styleImport({
					libs: [{
						libraryName: 'element-plus',
						esModule: true,
						ensureStyleFile: true,
						resolveStyle: ( name ) => {
							name = name.slice(3)
							return `element-plus/packages/theme-chalk/src/${ name }.scss`
						},
						resolveComponent: ( name ) => {
							return `element-plus/lib/${ name }`
						},
					}],
				}),
				// element-plus end
			],
			resolve: {
				alias: [
					{ find: '@', replacement: resolve(__dirname, 'src') + '/' },
					{ find: 'images', replacement: resolve(__dirname, 'public/images') + '/' },
				],
			},

			// 服务
			server: {
				// 代理, 解决前端跨域
				proxy: {
					'/api': {
						target: 'https://localhost:8080',
						changeOrigin: true,
						rewrite: path => path.replace(/^\/api/, ''),
					},
				},
			},

			build: {

				sourcemap: false, // 是否构建source map 文件
				output: 'dist', // 打包输出目录
				assetsDir: 'assets', // 静态文件存放路径
				cssCodeSplit: true, //css代码拆分, 禁用则存放在一个css
				minify: 'terser',
				terserOptions: {
					// 生产环境输出
					compress: {
						drop_debugger: true, // 移除生产环境的Debug
						drop_console: true, // 移除生产环境的控制台输出
					},
				},

				server: {
					https: true,
					proxy: {
						'/api': {
							target: 'https://localhost:8080',
							changeOrigin: true,
							rewrite: path => path.replace(/^\/api/, ''),
						},
					},
				},
			},

			rollupOptions: {
				// 输出目录
				output: {
					chunkFileNames: 'js/[name]-[hash].js', // 出口文件
					entryFileNames: 'js/[name]-[hash].js', // 入口文件
					assetFileNames: '[ext]/[name]/[hash].[ext]', // 静态文件

					manualChunks: {
						'element-plus': ['element-plus'],
						echarts: ['echarts'],
					},
				},
			},

			chunkSizeWarningLimit: 600, //chunk 大小警告的限制（以 kbs 为单位）
		}
	}
})