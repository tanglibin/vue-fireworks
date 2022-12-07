import Fireworks from './Fireworks.vue'


// 如果vue是全局变量,使用自动全局安装。
if (typeof window !== 'undefined' && window.Vue) {
    Vue.component(Fireworks.name, Fireworks)
}

Fireworks.install = Vue => Vue.component(Fireworks.name, Fireworks);//注册组件
export default Fireworks