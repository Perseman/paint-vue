<template>
  <div class="sprite">
    <div id="stage"></div>
    <div @click="paintCircle">画矩形</div>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import * as spritejs from 'spritejs'
@Component
export default class SpriteTest extends Vue {
  private stage: any
  mounted(): void {
    const { Scene, Rect } = spritejs
    const container = document.getElementById('stage')
    const scene = new Scene({
      container,
      width: 1200,
      height: 600,
      // contextType: '2d',
    })
    const layer = scene.layer()

    const rect = new Rect({
      normalize: true,
      pos: [600, 300],
      size: [300, 300],
      fillColor: 'red',
    })
    layer.append(rect)
  }
  paintCircle(): void {}
}
</script>


