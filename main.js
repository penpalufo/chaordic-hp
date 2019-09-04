import 'babel-polyfill'
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'
import vuetify from './plugins/vuetify'

Vue.config.productionTip = false

<<<<<<< HEAD
console.log('eee');
=======
console.log('ddd');
>>>>>>> b1

new Vue({
	router,
	store,
	vuetify,
	render: h => h(App)
}).$mount('#app')
