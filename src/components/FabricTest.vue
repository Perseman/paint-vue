<template>
  <div class="fabric">
      <canvas id="canvas"></canvas>
    <a-button type="primary" @click="addRect">添加一个矩形</a-button>
    <a-input-group compact>
      <a-row :gutter="8">
        <a-input type="text" placeholder="背景色" v-model="backgroundColor" />
        <a-button type="primary" @click="setBackgroundColor"
          >设置背景色</a-button
        >
      </a-row>
    </a-input-group>
    <a-input-group compact>
      <a-row :gutter="8">
        <a-input
          type="text"
          placeholder="背景图片地址"
          v-model="backgroundSrc"
        />
        <a-button type="primary" @click="setBackgroundImage"
          >设置背景图</a-button
        >
      </a-row>
    </a-input-group>
    <a-input-group compact>
      <a-row :gutter="8">
        <a-input type="text" placeholder="插入图片地址" v-model="imgSrc" />
        <a-button type="primary" @click="setImg">插入图片</a-button>
      </a-row>
    </a-input-group>
    <a-input-group compact>
      <a-row :gutter="8">
        <a-input type="text" placeholder="插入文字" v-model="text" />
        <a-button type="primary" @click="setText">插入文字</a-button>
      </a-row>
    </a-input-group>
    <a-input-group compact>
      <a-row :gutter="8">
        <a-input type="text" placeholder="旋转角度" v-model="angle" />
        <a-button type="primary" @click="rotateLayer">旋转图层</a-button>
      </a-row>
    </a-input-group>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import 'fabric'

@Component
export default class Fabric extends Vue {
 private canvas: any
  private backgroundSrc: string = ''
  private backgroundColor: string = ''
  private imgSrc: string = ''
  private text: string = ''
  private selectedObj: any
  private angle: number = 0
  mounted(): void {
    console.log(fabric)
    this.canvas = new fabric.Canvas('canvas', {
      backgroundColor: 'rgba(134, 131, 120, 0.3)',
    })
    this.canvas.setWidth(500)
    this.canvas.setHeight(500)
    this.canvas.on('object: created', (e: any) => {
      console.log('created:', e)
    })
    this.canvas.on('object:modified', (e: any) => {
      console.log('modified:', e)
    })
    // 从无到有的选中图层
    this.canvas.on('selection:created', (e: any) => {
      console.log('selection:created:', e)
      this.selectedObj = this.canvas.getActiveObject()
    })
    // 切换选中的图层
    this.canvas.on('selection:updated', (e: any) => {
      console.log('selection:updated:', e)
      this.selectedObj = this.canvas.getActiveObject()
    })
    // 从有到无取消选中图层
    this.canvas.on('selection:cleared', (e: any) => {
      console.log('selection:cleared:', e)
    })
  }
  // 添加矩形
  addRect(): void {
    var rect = new fabric.Rect({
      top: 100,
      left: 100,
      width: 60,
      height: 70,
      fill: 'red',
    })
    this.canvas.add(rect)
  }
  // 设置背景图
  setBackgroundImage(): void {
    fabric.Image.fromURL(this.backgroundSrc, (img: any) => {
      img.set({
        scaleX: this.canvas.width / img.width,
        scaleY: this.canvas.height / img.height,
      })
      this.canvas.setBackgroundImage(
        img,
        this.canvas.renderAll.bind(this.canvas)
      )
      this.canvas.renderAll()
    })
  }
  // 设置背景色
  setBackgroundColor(): void {
    this.canvas.setBackgroundColor(
      this.backgroundColor,
      this.canvas.renderAll.bind(this.canvas)
    )
  }
  // 设置图片
  setImg(): void {
    fabric.Image.fromURL(this.imgSrc, (img: any) => {
      img.set({
        borderColor: 'red',
      })
      this.canvas.add(img)
    })
  }
  // 设置文字
  setText(): void {
    const textInstance = new fabric.Textbox(this.text, {
      left: 50,
      top: 50,
      fontSize: 20,
      fontWeight: 500,
      borderColor: 'red',
      editingBorderColor: 'blue',
    })
    this.canvas.add(textInstance)
  }
  rotateLayer(): void {
    this.selectedObj.rotate(this.angle)
    // 如果是通过滑块的方式控制旋转
    // 所有图层的操作之后，都需要调用这个方法
    this.canvas.renderAll()
  }
}
</script>
<style scoped>
</style>
