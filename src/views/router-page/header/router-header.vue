<template>
    <div class="header">
        <Header class="header">练习</Header>
    </div>
</template>

<script>
export default {
    name:'routerheader'
}
</script>
<style lang="less" scopedSlots>
    .header{
        /deep/ .ivu-layout-header{
            background: white;
            position: fixed;
            top: 0;
            left: 0;
            z-index: 50;
            width: 100vw;
            box-shadow: 0 1px 1px rgba(0,0,0,.08);
        }
    }
</style>