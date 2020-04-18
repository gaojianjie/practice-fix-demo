<template>
  <div class="home">
     <Layout class="main-content">
        <router-header></router-header>
        <Layout class="main-right-content">
            <div class="home-slider" width="auto">
              <slider-list></slider-list>
            </div>
            <Content class="r-c-b">
              <Breadcrumb>
                <BreadcrumbItem to="/">首页</BreadcrumbItem>
                <BreadcrumbItem to="/components/breadcrumb">练习demo</BreadcrumbItem>
                <BreadcrumbItem>文章管理</BreadcrumbItem>
              </Breadcrumb>
              <router-view></router-view>
            </Content>
        </Layout>
        <router-footer></router-footer>
    </Layout>
  </div> 
</template>

<script>
  // @ is an alias to /src
  import sliderList from './router-page/slider-list/sliderList.vue'
  import routerHeader from './router-page/header/router-header.vue'
  import routerFooter from './router-page/router-footer/router-footer.vue'
  export default {
    name: 'Home',
    components:{
      sliderList,
      routerHeader,
      routerFooter
    },
  };
</script>

<style lang="less" scopedSlots>
  .home{
    width: 100%;
    height: 100%;
    /deep/ .ivu-layout{
      height: 100%;
    }

    .main-content{
      padding-top: 80px;
    }

    .home-slider{
      width: 300px;
      height: 100%;
      max-width: none;
      min-width: 0;
      flex:none;
      background: white;
      border-right:1px solid  #dcdee2;
    }

    .main-right-content{
      flex-direction: row;
    }
    .r-c-b{
      width: 200px;
      background: white;
      padding: 20px;

      /deep/ .ivu-breadcrumb{
        margin-bottom: 20px;
      }
    }
  }
</style>
