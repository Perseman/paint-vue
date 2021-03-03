<template>
  <div class="create">
    <canvas id="canvas" width="800" height="600"></canvas>
    <div @click="paintCircle">画圆</div>
    <div @click="playWalk">行走动画</div>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import 'createjs-npm'
@Component
export default class CreateTest extends Vue {
  private stage: any
  mounted() {
    //创建一个舞台，得到一个参考的画布
    this.stage = new createjs.Stage('canvas')
  }
  paintCircle() {
    //创建一个形状的显示对象
    const circle = new createjs.Shape()
    circle.graphics.beginFill('red').drawCircle(0, 0, 40)
    //形状实例的设置位置
    circle.x = circle.y = 50
    //添加形状实例到舞台显示列表
    this.stage.addChild(circle)
    //更新舞台将呈现下一帧
    this.stage.update()
  }
  playWalk() {
    var spriteSheet = new createjs.SpriteSheet({
      images: [
        'https://img.alicdn.com/tfs/TB1vMy8EeuSBuNjy1XcXXcYjFXa-2048-512.png',
      ],
      frames: {
        height: 256,
        width: 128,
        regX: 0,
        regY: 0,
        count: 26,
      },
      animations: {
        walk: [0, 25],
      },
    })
    var sprite = new createjs.Sprite(spriteSheet)
    sprite.x = 0
    sprite.y = 20
    sprite.gotoAndPlay('walk')
    this.stage.addChild(sprite)
    createjs.Ticker.framerate = 24
    createjs.Ticker.timingMode = createjs.Ticker.RAF_SYNCHED
    createjs.Ticker.addEventListener('tick', this.stage)
    sprite.addEventListener('tick', this._tickEvent.bind(this, sprite))
  }
  _tickEvent(sprite: any) {
    if (sprite.x > this.stage.canvas.width) {
      sprite.x = 0
    }
    sprite.x += 5
  }
}
</script>