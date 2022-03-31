import Vue from 'vue'
import CommentInput from '@/components/Comments/CommentInput.vue'
Vue.config.productionTip = false
export const bus = new Vue();
new Vue({
  render: h => h(CommentInput),
}).$mount('#button')