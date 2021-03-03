<template>
  <div class="pixi">
    官网给的示例都是图片（雪碧图等）制作而成的动画游戏。侧重点不同。
    <a href="https://filters.pixijs.download/main/demo/index.html"></a>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import * as PIXI from 'pixi.js'
@Component
export default class PixiTest extends Vue {
  private stage:any
  mounted(): void {
  }
}
</script>