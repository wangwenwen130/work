<template>
  <div class="account-con">
    <div>账户信息</div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
@Component({
  components: {}
})
export default class AccountCenter extends Vue {}
</script>
<style lang="less" scoped>
.account-con {
  width: 100%;
  height: 100%;
  background: rgba(0, 255, 255, 0.3);
}
</style>
