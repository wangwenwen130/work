<template>
  <div class="leftmenu-container">
    <keep-alive>
      <a-menu
        style="width: 240px"
        :default-selected-keys="['feature']"
        mode="inline"
        :selected-keys="[current]"
        :default-open-keys="['sub1']"
        @click="handleClick"
      >
        <a-menu-item key="feature">
          <a-icon type="mail" />功能列表
        </a-menu-item>
        <a-menu-item key="account">
          <a-icon type="calendar" />账户信息
        </a-menu-item>
        <a-menu-item key="advice">
          <a-icon type="calendar" />建议&意见
        </a-menu-item>
        <!-- <a-sub-menu key="sub1">
          <span slot="title">
            <a-icon type="setting" />
            <span>基本信息</span>
          </span>
          <a-menu-item key="account">account</a-menu-item>
          <a-menu-item key="advice">account</a-menu-item>
        </a-sub-menu>-->
      </a-menu>
    </keep-alive>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
@Component({})
export default class LeftMenu extends Vue {
  current: string = "feature";
  handleClick(e: any) {
    this.current = e.key;
    this.$router.push({ name: this.current });
  }
  getUrl() {
    let currentUrl: string = window.location.href;
    let routerLevel1: string = currentUrl.split("#")[1].split("/")[1];
    let routerLevel2: string = currentUrl.split("#")[1].split("/")[2];
    if (routerLevel2) {
      if (routerLevel2.indexOf("?")) {
        this.current = routerLevel2.split("?")[0];
      } else {
        this.current = routerLevel2;
      }
    }
    {
      if (routerLevel1.indexOf("?")) {
        this.current = routerLevel1.split("?")[0];
      }
      this.current = routerLevel1;
    }
  }
  mounted() {
    this.getUrl();
  }
}
</script>
<style lang="less" scoped>
.leftmenu-container {
  width: 100%;
  height: 60%;
}
</style>
