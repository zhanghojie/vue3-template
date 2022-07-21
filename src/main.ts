import { createApp } from 'vue';
import App from './App.vue';
import store from './store';
import router from './router';
const app = createApp(App);
import vant from './plugins/vant';

app.use(store).use(router).use(vant).mount('#app');
