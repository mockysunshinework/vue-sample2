// node_moduleのVue(本体)をインポートしています。
import Vue from 'vue'
// コンポーネントの「App.vue」をインポートしています。
import App from './App.vue'

import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
Vue.use(BootstrapVue)

// 開発者向けのメッセージをコンソールに出力する機能
Vue.config.productionTip = false



// Vueアプリケーションを起動する処理
new Vue({
  // templateレンダリングの変わった書き方
  render: h => h(App),
  
  // id=appにマウント（使える状態にすること）します。
}).$mount('#app')

