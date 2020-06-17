<template>
  <div class="feature-list-con">
    <div>功能列表</div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
@Component({
  components: {}
})
export default class FeatureList extends Vue {}
</script>
<style lang="less" scoped>
.feature-list-con {
  width: 100%;
  height: 100%;
  background: rgba(0, 255, 255, 0.2);
}
</style>
