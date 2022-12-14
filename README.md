# 烟花组件

## 安装

1. npm
  推荐使用`npm`，这样可以跟随你的`webpack`配置去选择怎样打包。

  ```
  npm i -S vue-fireworks
  ```

## 注册组件

1. 全局注册

   ```vue
   <template>
     <vue-fireworks />
   </template>
   <script>
    import Vue from 'vue'
    import vueFireworks from 'vue-fireworks'
    Vue.use(vueFireworks)
   </script>
   ```

2. 局部注册

   ```vue
   <template>
     <vue-fireworks />
   </template>
   <script>
     import vueFireworks from 'vue-fireworks'
     export default {
         name: '',
         components: {vueFireworks} //在组件内注册
     }
   </script>
   ```

## 属性

### bg

* 类型`String|Boolean`

* 默认值`false`

* 用法:

  ```html
    <vue-fireworks bg="rgba(0,0,0,0.2)"/>
  ```

  设置背景颜色

### value
* 类型`Boolean`

* 默认值`false`

* 用法:

  ```html
    <vue-fireworks v-model="value"/>
  ```

  控制是否显示

## 更新日志:

* [ 1.0.0 ]  