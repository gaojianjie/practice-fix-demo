<template>
    <div :class="['header', store.theme]">
        <Header class="header" :theme="store.theam">
            <div class="left-content">
                <img class="logo" src="../../../assets/img/v2-fce4f8a778fe3f24bca2cafc709b6847_hd.jpg" alt="">
                <span>{{ $t('header.h1') }}</span>
            </div>
            <div>
                <Dropdown @on-click="checkLanguage" style="margin-right:20px">
                    <a href="javascript:void(0)">
                        {{$t('header.lang')}}
                        <Icon type="ios-arrow-down"></Icon>
                    </a>
                    <DropdownMenu slot="list">
                        <DropdownItem name="zn">中文</DropdownItem>
                        <DropdownItem name="en">English</DropdownItem>
                    </DropdownMenu>
                </Dropdown>
                <Dropdown @on-click="onClick">
                    <a href="javascript:void(0)">
                        {{ store.theme == 'light' ? $t('theame.light') : $t('theame.dark') }}
                        <Icon type="ios-arrow-down"></Icon>
                    </a>
                    <DropdownMenu slot="list">
                        <DropdownItem name="light">{{ $t('theame.light') }}</DropdownItem>
                        <DropdownItem name="dark">{{ $t('theame.dark') }}</DropdownItem>
                    </DropdownMenu>
                </Dropdown>
            </div>
        </Header>
    </div>
</template>

<script lang="ts">
    import { Component, Prop, Vue } from 'vue-property-decorator';

    @Component
    export default class routerHeader extends Vue {
        @Prop({
            type: String,
            default: '你猜我是谁',
        }) private msg: string | undefined;

        private theme:string = 'light'

        private created() {
            this.$Log(this.msg, '+++')
        }
        private mounted() {
            window.console.log(456);
        }
        /**
         * 切换语言
         * @params { String } data 切换的种类
         */
        public checkLanguage(data:string): void {
            console.log(this)
            this.$i18n.locale = data;
        }

        /**
         * 切换主题
         * @params { String } data 切换的种类
         */
        public onClick(data:string): void {
            this.$store.commit('SET_THEAM', data)
        }

        /**
         * 获取store实例
        */
        private get store() {
            return this.$store.state
        }
    }
</script>
<style lang="less" scopedSlots>
    .header{
        background: white;
        /deep/ .ivu-layout-header{
            // background: white;
            position: fixed;
            top: 0;
            left: 0;
            z-index: 50;
            width: 100vw;
            box-shadow: 0 1px 1px rgba(0,0,0,.08);
            display: flex;
            justify-content: space-between;
            background: transparent
        }
    }

    .left-content{
        display: flex;
        align-items: center;
        .logo{
            width: 40px;
            height: 40px;
            margin-right: 10px;
        }
    }
</style>