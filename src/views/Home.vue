<template>
  <div class="home">
    <Fabric-test />
    <!-- <Create-test /> -->
    <!-- <Pixi-test /> -->
    <!-- <Konva-test /> -->
    <!-- <Sprite-test /> -->
    <!-- <Three-test /> -->
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import FabricTest from '@/components/FabricTest.vue'
import CreateTest from '@/components/CreateTest.vue'
import PixiTest from '@/components/PixiTest.vue'
import KonvaTest from '@/components/KonvaTest.vue'
import SpriteTest from '@/components/SpriteTest.vue'
import ThreeTest from '@/components/ThreeTest.vue'
@Component({
  components: {
    FabricTest,
    CreateTest,
    PixiTest,
    KonvaTest,
    SpriteTest,
    ThreeTest,
  },
})
export default class Home extends Vue {}
</script>