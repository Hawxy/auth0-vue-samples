import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
// FontAwesome
import { library } from "@fortawesome/fontawesome-svg-core";
import { faLink, faUser, faPowerOff } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
//Highlight.js
import 'highlight.js/styles/stackoverflow-light.css'
import 'highlight.js/lib/common';
import hljsVuePlugin from "@highlightjs/vue-plugin";


library.add(faLink, faUser, faPowerOff);

createApp(App)
.component('font-awesome-icon', FontAwesomeIcon)
.use(router)
.use(hljsVuePlugin)
.mount('#app')
