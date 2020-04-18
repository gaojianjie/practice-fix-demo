<template>
    <div class="router-footer">
        <Footer>{{ time_str }}</Footer>
    </div>
</template>

<script>
    import { useTimes } from '@/common/utils.js'
    export default {
        name:'routerfooter',
        data() {
            return {
                timer:null,
                time_str:'',
            }
        },

        created() {
            this.timer = setInterval(() => {
                this.time_str = useTimes.getDataTime(new Date().getTime())
            }, 1000)
        },

        destroyed() {
            clearInterval(this.timer)
        },
    }

</script>

<style lang="less" scoped>
    .router-footer{
        border-top: 1px solid #dcdee2;
        /deep/  .ivu-layout-footer{
            padding: 0;
            height: 30px;
            background: white;
            display: flex;
            justify-content: center;
            align-items: center;
        }
    }
</style>