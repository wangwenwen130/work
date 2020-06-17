<template>
  <p class="page-container">404 page not found</p>
</template>
<script lang="ts">
import { Component, Vue, Watch, Prop } from "vue-property-decorator";
@Component({
  components: {}
})
export default class extends Vue {}
</script>
<style lang="less" scoped>
.page-container {
  font-size: 20px;
  text-align: center;
  color: rgb(192, 204, 218);
}
</style>
