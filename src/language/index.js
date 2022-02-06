import { createI18n } from 'vue-i18n';
import { zh } from '@/language/zh';
import { en } from '@/language/en';
const messages = {
    'zh-CN': zh,
    'en-UK': en,
};
export const i18n = createI18n({
    locale: 'zh-CN',
    messages,
});
//# sourceMappingURL=index.js.map