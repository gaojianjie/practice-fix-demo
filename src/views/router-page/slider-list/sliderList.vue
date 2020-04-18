<template>
    <div class="slider-list">
        <Menu :theme="theme2" :open-names="['1']" accordion width="auto">
            <Submenu name="1">
                <template slot="title">
                    <Icon type="lianxi" />
                    练习demo
                </template>
                <MenuItem name="1-1">文章管理</MenuItem>
                <MenuItem name="1-2">评论管理</MenuItem>
                <MenuItem name="1-3">举报管理</MenuItem>
            </Submenu>
            <Submenu name="2">
                <template slot="title">
                    <Icon type="ios-people" />
                    用户管理
                </template>
                <MenuItem name="2-1">新增用户</MenuItem>
                <MenuItem name="2-2">活跃用户</MenuItem>
            </Submenu>
            <Submenu name="3">
                <template slot="title">
                    <Icon type="ios-stats" />
                    统计分析
                </template>
                <MenuGroup title="使用">
                    <MenuItem name="3-1">新增和启动</MenuItem>
                    <MenuItem name="3-2">活跃分析</MenuItem>
                    <MenuItem name="3-3">时段分析</MenuItem>
                </MenuGroup>
                <MenuGroup title="留存">
                    <MenuItem name="3-4">用户留存</MenuItem>
                    <MenuItem name="3-5">流失用户</MenuItem>
                </MenuGroup>
            </Submenu>
        </Menu>
    </div>
</template>

<script lang="ts">
    import { Component, Prop, Vue } from 'vue-property-decorator';
    @Component
    export default class HelloWorld extends Vue {
        @Prop({
        type: String,
        default: '你猜我是谁',
        }) private msg: string | undefined;

        private created() {
        window.console.log(this.msg);
        }

        private mounted() {
        window.console.log(456);
        }

    }
</script>

<style lang="less" scopedSlots>
    .slider-list /deep/ .ivu-menu::after{
        width:0!important;
        background: white;
    }
</style>