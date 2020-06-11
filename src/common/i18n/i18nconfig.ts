// != should be !==
import VueI18n from "vue-i18n";
import Vue from "vue";
Vue.use(VueI18n);

const i18nConfig = new VueI18n({
    locale: "zn", // 定义默认语言为中文 s
    messages: {
        zn: require("./i18n.zh.json"),
        en: require("./i18n.english.json"),
    },
});

export const i18n = i18nConfig;
