import { createPinia } from 'pinia';
import { createApp } from 'vue';
import App from './AppComponent.vue';

const app = createApp(App);
app.use(createPinia());
app.mount('#app');
