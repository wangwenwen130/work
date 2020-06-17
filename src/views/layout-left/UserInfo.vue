<template>
  <div class="userinfo-container">
    <div>用户名</div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
@Component({})
export default class UserInfo extends Vue {}
</script>
<style lang="less" scoped>
.userinfo-container {
  width: 100%;
  height: 40%;
}
</style>
