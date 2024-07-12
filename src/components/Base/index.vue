<script setup>
import Navigation from "@/components/Base/Navigation/index.vue";
</script>

<template>
  <div class="main">
    <slot/>
  </div>
  <Navigation/>
</template>

<script>
export default {
  name: "Base"
}
</script>

<style scoped>
.main {
  background-color: #E5E5E5;
  width: 100vw;
  height: calc(100vh - 60px);
  display: grid;
  position: absolute;
  right: 0;
  top: 60px;
  //overflow-y: scroll;
}
</style>
