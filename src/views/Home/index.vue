<template>
  <div class="background">
    <div class="wave" ref="wave">
      <div class="horizon">
        <div class="text">
          <span style="font-size: 150px; color: #ff8400; font-weight: bold; font-family: 'Arial Black',serif">HRT</span>
          <br/>
          <span style="font-size: 80px; color: #0ac600; font-weight: bold; font-family: 'Microsoft YaHei',sans-serif">Keep Racing</span>
          <br>
          <br>
          <br>
          <br>
          <br>
          <span style="font-size: 30px; color: white">造辆好车，是我们一贯的目标</span>
          <br>
          <span style="font-size: 30px; color: white">助力智能制造，亦是我们的理想</span>
          <br>
          <br>
          <span style="font-size: 30px; color: white">为所有参赛车队提供全套解决方案</span>
        </div>
        <div class="video">
          <video autoplay loop width="100%" height="100%" ref="videoPlayer">
            <source src="@/static/Home/car.mp4" type="video/mp4">
          </video>
        </div>

      </div>
      <el-button round class="button" @click="toInstructions">了解更多开源信息 ></el-button>
    </div>
  </div>
</template>
<style scoped>

.background {
  width: 100%;
  height: auto;
  min-height: 100%;
  display: block;
  position: relative;
  align-items: center;
  right: 0;
  top: 0;
  background-color: black;
}

.wave {
  width: 100%;
  height: 100%;
  display: block;
  position: absolute;
  align-items: center;
  right: 0;
  top: 0;
}

.horizon {
  display: flex;
  justify-content: space-between;
  align-items: center;
  top: 5%;
  height: 900px;
  width: 100%;
}

.button {
  width: 200px;
  height: 30px;
  font-size: 18px;
  margin-left: 15%;
  font-family: "Arial Black",serif;
  font-weight: bold;
  transition: transform 0.3s ease;
}

.button:hover {
  background-color: #cccccc !important;
  color: #323232 !important;
  transform: scale(1.1);
}


.text {
  width: 45%;
  height: 80%;
  margin-left: 15%;
}

.video {
  border: #0e0e0e;
  align-items: center;
  width: 50%;
  height: 80%;
  margin-right: 10%;
}

</style>

<script>
import * as Three from "three"
import Waves from "vanta/src/vanta.waves.js";
import router from "@/router/index.js";

export default {
  name: "Home",

  mounted() {
    this.$refs.videoPlayer.disablePictureInPicture = true
    this.$refs.videoPlayer.muted = true

    this.vantaEffect = Waves({
      el: this.$refs.wave,
      THREE: Three
    })

    VANTA.WAVES({
      el: this.$refs.wave,
      mouseControls: true,
      touchControls: false,
      gyroControls: false,
      minHeight: 200.00,
      minWidth: 200.00,
      scale: 1.00,
      scaleMobile: 1.00,
      color: 0x0,
      shininess: 100,
      waveHeight: 11.50,
      waveSpeed: 0.70,
      zoom: 1.5
    })
  },

  methods: {
    toInstructions() {
      router.push({path: "/Instructions"})
    }
  },

  beforeDestroy() {
    if (this.vantaEffect)
      this.vantaEffect.destroy()
  }
}
</script>
