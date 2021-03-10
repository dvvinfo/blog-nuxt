import Vue from 'vue'

import Message from '@/components/UI/Message.vue'
import Intro from '@/components/UI/Intro.vue'
import PostList from '@/components/Blog/PostList.vue'
import AppButton from '@/components/UI/Controls/Button.vue'
import AppInput from '@/components/UI/Controls/Input.vue'
import AppTextArea from '@/components/UI/Controls/TextArea.vue'

Vue.component('AppButton', AppButton)
Vue.component('AppInput', AppInput)
Vue.component('AppTextArea', AppTextArea)
Vue.component('Message', Message)
Vue.component('Intro', Intro)
Vue.component('PostList', PostList)