<template>

  <div class="head">

    <div class="logo">
      <img src="@/static/HrtLoge/blackLogo.jpg" alt="logo">
    </div>
    <div class="navigation_menu">
      <div class="link">
        <router-link to="/home">主页</router-link>
      </div>
      <div class="link">
        <router-link to="/instructions">开源说明</router-link>
      </div>
      <div class="link">
        <router-link to="/aboutUs">关于我们</router-link>
      </div>
      <div class="link">
        <router-link to="/sponsor">赞助商</router-link>
      </div>
    </div>
  </div>

</template>

<script>

export default {
  name: "Navigation"
}
</script>

<style scoped>

.head {
  background-color: #111;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 60px;
  position: fixed;
  width: 100%;
  right: 0;
  top: 0;
  font-family: "Noto Sans CJK SC",monospace;
  font-size: 40px;
  z-index: 9999;
}

.logo {
  height: 120%;
  width: 1px;
  display: flex;
  align-items: center;
  /*z-index: 9999;*/
}

.logo img {
  width: calc(4.19625 * 60px);
  /*z-index: 9999;*/
}

.navigation_menu {
  list-style-type: none;
  margin: 0;
  padding: 0;
  display: flex;
  /*z-index: 9999;*/
}

.link {
  display: inline-block;
  position: relative;
  background-color: transparent;
}

.navigation_menu router-link {
  position: relative;
  color: #fff;
  text-decoration: none;
  padding: 10px;
  transition: all 0.3s ease;
}

/* router-link 会被渲染成a */

.link a {
  color: #fff;
  text-decoration: none;
  transition: all 0.3s ease;
  padding-left: 15px;
  padding-right: 15px;
}

.link a::before {
  content: "";
  position: absolute;
  width: 100%;
  height: 4px;
  background-color: #fff;
  bottom: 2px;
  left: 0;
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 0.3s ease;
}

.link a:hover {
  background-color: #4e4e4e !important;
}

.router-link-exact-active {
  pointer-events: none;
}

.router-link-exact-active::after {
  content: "";
  position: absolute;
  width: 100%;
  height: 4px;
  background-color: #fff;
  bottom: 2px;
  left: 0;
}


.link a:hover::before {
  transform: scaleX(1);
}
</style>
