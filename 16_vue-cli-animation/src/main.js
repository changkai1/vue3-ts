import { createApp } from 'vue'
/** 
 * 引入animate.css库
 * npm install animate.css
 *  */
import "animate.css"

// import App from './01_动画的基本使用/App.vue'
// import App from './02_结合第三方动画库/03_gsap实现数字递增动画.vue'
import App from './03_列表动画的使用/02_transition-group列表一次显示隐藏动画.vue'


createApp(App).mount('#app')
