<template>
  <div class="oneaddn-layout">
    <!-- 顶部 -->
    <div class="header"></div>
    <!-- 中间内容 -->
    <div class="center">
      <a-row type="flex" class="flex-con">
        <!-- 左侧栏 -->
        <a-col class="left">
          <user-info></user-info>
          <left-menu></left-menu>
        </a-col>
        <!-- 右侧主体视图 -->
        <a-col class="right">
          <router-view class="vue-view" />
        </a-col>
      </a-row>
    </div>
    <!-- 底部 -->
    <div class="footer"></div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import UserInfo from "@/views/layout-left/UserInfo.vue";
import LeftMenu from "@/views/layout-left/LeftMenu.vue";
@Component({
  components: {
    UserInfo,
    LeftMenu
  }
})
export default class Layout extends Vue {}
</script>
<style lang="less" scoped>
.oneaddn-layout {
  width: 100%;
  height: 100%;
  background: #fff;
  .header {
    width: 100%;
    height: 60px;
    box-sizing: border-box;
    border-bottom: 1px solid #dedede;
  }
  .center {
    width: 100%;
    height: calc(100% - 120px);
    .flex-con {
      width: 100%;
      height: 100%;
      .left {
        width: 240px;
      }
      .right {
        flex: 1;
      }
    }
  }
  .footer {
    width: 100%;
    height: 60px;
    box-sizing: border-box;
    border-top: 1px solid #dedede;
  }
}
</style>
