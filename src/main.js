import { createApp } from 'vue';
import App from './App.vue';
import { createPinia } from 'pinia'; // pinia@next
import { router } from '@/router'; // vue-router@next
import { i18n } from '@/language'; // vue-i18n@next
// element-plus start
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
// element-plus end
createApp(App)
    .use(createPinia())
    .use(router)
    .use(i18n)
    .use(ElementPlus)
    .mount('#app');
//# sourceMappingURL=main.js.map