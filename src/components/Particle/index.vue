<script setup>
import {ParticlesComponent} from "vue3-particles";
</script>

<template>
  <div class="background">
    <particles-component id="tsparticles" :particlesInit="particlesInit" :particlesLoaded="particlesLoaded" :options="options"/>
  </div>
</template>

<script>
import { loadFull } from "tsparticles"
export default {
  name: "Particle",

  data() {
    return {
      options: {
        fpsLimit: 100,
        interactivity: {
          events: {
            onClick: {
              enable: false,
            },
            onHover: {
              enable: true,
              // mode: "repulse",
              mode: "repulse"
            },
            resize: true,
          },
          modes: {
            bubble: {
              distance: 400,
              duration: 2,
              opacity: 0.6,
              size: 10,
            },
            push: {
              quantity: 4,
            },
            repulse: {
              distance: 200,
              duration: 0.4,
            },
          },
        },
        particles: {
          color: {
            value: "#afafaf",
          },
          links: {
            color: "#8d8d8d",
            distance: 150,
            enable: true,
            opacity: 0.5,
            width: 1,
          },
          collisions: {
            enable: true,
          },
          move: {
            direction: "none",
            enable: true,
            outMode: "bounce",
            random: false,
            speed: 2,
            straight: false,
          },
          number: {
            density: {
              enable: true,
              value_area: 800,
            },
            value: 40,
          },
          opacity: {
            value: 0.5,
          },
          shape: {
            type: "circle",
          },
          size: {
            random: true,
            value: 3,
          },
        },
        detectRetina: true,
      },
      particlesInit: async (engine) => {
        await loadFull(engine)
      },
      particlesLoaded: async (container) => {
        // console.log("Particles container loaded", container)
      }
    }
  }
}
</script>
<style lang="less" scoped>
.background {
  width: 100%;
  height: 100%;
  background-color: transparent;
  background-size: cover;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  overflow: hidden;
  position: absolute;
}
</style>
