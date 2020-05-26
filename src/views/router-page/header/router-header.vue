<template>
    <div :class="['header', store.theme]">
        <Header class="header" :theme="store.theam">
            <span>{{ $t('header.h1') }}</span>
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
                        {{ store.theme == 'light' ? $t('theame.light') : $t('theame.dart') }}
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

<script>
export default {
    name:'routerheader',
    data() {
        return {
            theme:'light',
        }
    },

    computed: {
        store() {
            return this.$store.state
        }
    },

    methods:{
        checkLanguage(data) {
            console.log(this.$i18n, data, '+++++')
            this.$i18n.locale = data;
        },
        onClick(data) {
            this.$store.commit('SET_THEAM', data)
            // this.theme = data;
        }
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

    .light{
        /deep/ .ivu-layout-header{
            background: white;
            color:#515a6e;
        }
    }

    .dark{
        /deep/ .ivu-layout-header{
            background: #515a6e;
            color: rgba(255,255,255,.7);
        }
    }
</style>