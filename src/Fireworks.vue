<template>
    <canvas v-show="value" class="fireworks"></canvas>
</template>

<script>
import {init, destroy} from './fireworks';
export default {
    name: 'VueFireworks',
    props: {
        /**是否展示 */
        value: {
            type: Boolean,
            default: false
        },

        /**背景颜色 */
        bg: {
            type: [Boolean, String],
            default: false
        }
    },
    data(){
        return{
            inited: false
        }
    },
    watch: {
        value(v){
            v && this.init();
        }
    },
    mounted(){
        this.value && this.init();
    },
    destroyed(){
        destroy();
    },
    methods: {
        init(){
            if(this.inited){
                return ;
            }
            this.$nextTick(()=>{
                this.inited = true;
                init(this.$el, this.bg);
            })
        }
    }
};
</script>
<style>
</style>