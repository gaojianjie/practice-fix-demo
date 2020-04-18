<template>
    <div :class="['header', store.theme]">
        <Header class="header" :theme="store.theam">
            <span>练习</span>
            <div>
                <Dropdown @on-click="onClick">
                    <a href="javascript:void(0)">
                        {{ store.theme == 'light' ? '浅色' : '深色' }}
                        <Icon type="ios-arrow-down"></Icon>
                    </a>
                    <DropdownMenu slot="list">
                        <DropdownItem name="light">浅色</DropdownItem>
                        <DropdownItem name="dark">深色</DropdownItem>
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