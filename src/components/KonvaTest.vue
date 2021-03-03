<template>
  <div class="konva">
    <div id="canvas"></div>
    <div @click="paintCircle">画○</div>
    <div @click="paintDiy">自定义形状</div>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Konva from 'konva'
@Component
export default class KonvaTest extends Vue {
  private stage: any
  mounted(): void {
    // first we need to create a stage *首先我们需要创建一个舞台
    this.stage = new Konva.Stage({
      container: 'canvas', // id of container <div> *包裹舞台的DIV元素的ID
      width: 500,
      height: 500,
    })
  }
  paintCircle(): void {
    // then create layer *然后创建一个图层
    var layer = new Konva.Layer()
    // create our shape *创建我们的形状
    var circle = new Konva.Circle({
      x: this.stage.getWidth() / 2,
      y: this.stage.getHeight() / 2,
      radius: 70,
      fill: 'red',
      strokeWidth: 4,
    })
    circle.draggable(true)
    // add the shape to the layer *将形状添加到图层上
    layer.add(circle)
    // add the layer to the stage *将图层添加到舞台上
    this.stage.add(layer)
  }
  paintDiy(): void {
    var layer = new Konva.Layer()
    var pentagon = new Konva.RegularPolygon({
      x: this.stage.getWidth() / 2,
      y: this.stage.getHeight() / 2,
      sides: 5,
      radius: 70,
      fill: 'red',
      stroke: 'black',
      strokeWidth: 4,
      shadowOffsetX: 20,
      shadowOffsetY: 25,
      shadowBlur: 40,
      opacity: 0.5,
    })
    layer.add(pentagon)
    // add the layer to the stage *将图层添加到舞台上
    this.stage.add(layer)
  }
}
</script>


