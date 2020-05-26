
import VueI18n from 'vue-i18n'
let i18nConfig = new VueI18n({

    locale: 'zn', // 定义默认语言为中文 

    messages: {

        'zn': require('./i18n.zh.json'),

        'en': require('./i18n.english.json')

    }
});

export const i18n = i18nConfig