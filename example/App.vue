<template>
    <div><vue-fireworks v-model="value" bg="rgba(0,0,0,0.2)"/></div>
    
</template>

<script>
import vueFireworks from '../src/index'
export default {
    components:{
        vueFireworks
    },
    data(){
        return {
            value: true
        }
    },
    mounted(){
        window.xx = this;
    }
}
</script>