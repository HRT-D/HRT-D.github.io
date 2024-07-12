<template>
  <div class="background">
    <div class="slider">
      <div v-for="(image, index) in images" class="slide" :key="index" :style="{ opacity: activeIndex === index ? 1 : 0 }">
        <el-image :src="image.url" :fit="'contain'" alt="Slide Image" style="height: 100%; width: 100%"/>
      </div>
      <div class="slide-buttons">
        <button @click="prevSlide" class="slide-button">-</button>
        <button @click="nextSlide" class="slide-button">+</button>
      </div>
    </div>
    <div class="members-box">
      <div v-for="member in members" class="member-card" @click="ShowDetail(member.idx)" :key="member.name">
        <img :src="member.image" class="member-avatar" alt="Member Avatar" />
        <h3>{{ member.name }}</h3>
      </div>
    </div>
  </div>
  <div class="blur-box" :style="{ display: showbox ? 'block' : 'none' }">
    <div class="detail-box">
      <div class="detail-left">
        <img :src="members[showid].image" class="detail-avatar" alt="Member Avatar" />
      </div>
      <div class="detail-right">
        <div class="member-details">
          <h2>{{ members[showid].name }}</h2>
          <p>性别: {{ members[showid].gender === 0 ? '男' : '女' }}</p>
          <p>专业: {{ members[showid].major }}</p>
          <p>年级: {{ members[showid].grade }}</p>
          <p>介绍: {{ members[showid].description }}</p>
        </div>
      </div>
      <div class="detail-close-botton">
        <button @click="showbox = false" style="border:none;background: inherit;font-size: 33px;">×</button>
      </div>
    </div>
  </div>
  <Particle />
</template>

<script setup>
import Particle from "@/components/Particle/index.vue";
import {onMounted, reactive, ref} from "vue";
import {getImages, getMembers} from "@/api/aboutUs.js";

let images = reactive([
  { idx: 1, url: new URL("@/static/AboutUs/loading.gif", import.meta.url).href },
  { idx: 2, url: new URL("@/static/AboutUs/loading.gif", import.meta.url).href },
  { idx: 5, url: new URL("@/static/AboutUs/loading.gif", import.meta.url).href },
  // Add more images as needed
]);

let activeIndex = ref(0);
let showbox = ref(false);
let showid = ref(0);
let members = reactive([
  {
    idx: 0,
    name: "加载中",
    gender: 19,
    major: "计算机科学与技术",
    grade: "大一",
    description: "我是张三，我是一名大一的计算机科学与技术专业的学生。",
    image: new URL("@/static/AboutUs/loading.gif", import.meta.url).href,
  },
  {
    idx: 1,
    name: "加载中",
    gender: 19,
    major: "计算机科学与技术",
    grade: "大一",
    description: "我是李四，我是一名大一的计算机科学与技术专业的学生。",
    image: new URL("@/static/AboutUs/loading.gif", import.meta.url).href,
  },
  {
    idx: 2,
    name: "加载中",
    gender: 19,
    major: "计算机科学与技术",
    grade: "大一",
    description: "我是李四，我是一名大一的计算机科学与技术专业的学生。",
    image: new URL("@/static/AboutUs/loading.gif", import.meta.url).href,
  },
  {
    idx: 3,
    name: "加载中",
    gender: 19,
    major: "计算机科学与技术",
    grade: "大一",
    description: "我是李四，我是一名大一的计算机科学与技术专业的学生。",
    image: new URL("@/static/AboutUs/loading.gif", import.meta.url).href,
  },
  {
    idx: 1,
    name: "加载中",
    gender: 19,
    major: "计算机科学与技术",
    grade: "大一",
    description: "我是李四，我是一名大一的计算机科学与技术专业的学生。",
    image: new URL("@/static/AboutUs/loading.gif", import.meta.url).href,
  },
  {
    idx: 2,
    name: "加载中",
    gender: 19,
    major: "计算机科学与技术",
    grade: "大一",
    description: "我是李四，我是一名大一的计算机科学与技术专业的学生。",
    image: new URL("@/static/AboutUs/loading.gif", import.meta.url).href,
  },
  {
    idx: 3,
    name: "加载中",
    gender: 19,
    major: "计算机科学与技术",
    grade: "大一",
    description: "我是李四，我是一名大一的计算机科学与技术专业的学生。",
    image: new URL("@/static/AboutUs/loading.gif", import.meta.url).href,
  },
  {
    idx: 1,
    name: "加载中",
    gender: 19,
    major: "计算机科学与技术",
    grade: "大一",
    description: "我是李四，我是一名大一的计算机科学与技术专业的学生。",
    image: new URL("@/static/AboutUs/loading.gif", import.meta.url).href,
  },
  {
    idx: 2,
    name: "加载中",
    gender: 19,
    major: "计算机科学与技术",
    grade: "大一",
    description: "我是李四，我是一名大一的计算机科学与技术专业的学生。",
    image: new URL("@/static/AboutUs/loading.gif", import.meta.url).href,
  },
  {
    idx: 3,
    name: "加载中",
    gender: 19,
    major: "计算机科学与技术",
    grade: "大一",
    description: "我是李四，我是一名大一的计算机科学与技术专业的学生。",
    image: new URL("@/static/AboutUs/loading.gif", import.meta.url).href,
  },
  {
    idx: 1,
    name: "加载中",
    gender: 19,
    major: "计算机科学与技术",
    grade: "大一",
    description: "我是李四，我是一名大一的计算机科学与技术专业的学生。",
    image: new URL("@/static/AboutUs/loading.gif", import.meta.url).href,
  },
  {
    idx: 2,
    name: "加载中",
    gender: 19,
    major: "计算机科学与技术",
    grade: "大一",
    description: "我是李四，我是一名大一的计算机科学与技术专业的学生。",
    image: new URL("@/static/AboutUs/loading.gif", import.meta.url).href,
  },
  {
    idx: 3,
    name: "加载中",
    gender: 19,
    major: "计算机科学与技术",
    grade: "大一",
    description: "我是李四，我是一名大一的计算机科学与技术专业的学生。",
    image: new URL("@/static/AboutUs/loading.gif", import.meta.url).href,
  }
]);
/*
name: str,
gender: int (0:男, 1女),
major: str,
grade:str,
description: str
image: str 为头像图片路径
*/
onMounted(() => {
  setInterval(() => {
    activeIndex.value = (activeIndex.value + 1) % images.length;
  }, 5000);
  getImages().then((res) => {
    images = res.data.data
  });
  getMembers().then((res) => {
    members = res.data.data
    for (let i = 0; i < members.length; i++) {
      members[i].idx = i
    }
  });
});

function nextSlide() {
  activeIndex.value = (activeIndex.value + 1) % images.length;
}

function prevSlide() {
  activeIndex.value = (activeIndex.value - 1 + images.length) % images.length;
}

function ShowDetail(memberid) {
  showbox.value = true;
  showid.value = memberid;
  console.log("detail idx: ", showid.value);
}
</script>

<style>
.blur-box {
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 999;
}
.detail-box {
  position: fixed;
  display: flex;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 80vw;
  height: 80vh;
  padding: 30px;
  background-color: #fff;
  opacity: 1;
  border-radius: 20px;
  z-index: 1000;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: flex-start;
  align-items: center;
}
.detail-left {
  display: flex;
  width: 30%;
  height: 90%;
  border-right: 1px dashed #c1c2c3;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex-wrap: nowrap;
}
.detail-right {
  display: flex;
  width: 70%;
  height: 90%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex-wrap: nowrap;
}
.detail-close-botton {
  position: absolute;
  cursor: pointer;
  z-index: 10000;
  top: 6px;
  right: 8px;
}
.detail-avatar {
  width: 80%;
}
.background {
  display: flex;
  background-color: #27282c;
  height: auto;
  width: 100%;
  min-height: 100%;
  position: absolute;
  overflow-y: auto;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: center;
}

.slider {
  height: 50vh;
  width: 100%;
  margin-top: 40px;
  overflow: hidden;
  border-radius: 10px;
}

.slide {
  width: 100%;
  height: inherit;
  position: absolute;
  transition: opacity 1s;
}
.slide img {
  height: 50vh;
  width: 84%;
  z-index: 99;
  margin-left: 8vw;
  margin-right: 8vw;
  position: absolute;
  border-radius: 18px;
}
.slide-buttons {
  display: flex;
  z-index: 10;
  justify-content: space-between;
  text-align: center;
  margin: auto;
  width: 98%;
  height: 10vh;
  position: relative;
  bottom: 0;
}
.slide-button {
  position: relative;
  height: 6vh;
  width: 4vw;
  top: 25vh;
  transform: translateY(-50%);
  background-color: #ffffff;
  color: rgb(0, 0, 0);
  padding: 10px 20px;
  cursor: pointer;
  font-size: 1rem;
  border-radius: 16px;
  transition: background-color 0.5s;
}
:root {
  --grid-gap-const: 30px;
}
.members-box {
  display: grid;
  width: 80%;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: var(--grid-gap-const);
  padding: 20px;
  margin: 20px;
  border-radius: 10px;
}
.member-avatar {
  width: calc((95vw - 40px - 40px - 5 * var(--grid-gap-const)) / 6 * 0.8);
  border-radius: 20%;
}
.member-card {
  display: flex;
  width: 100%;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: center;
  border-radius: 26px;
  align-items: center;
  cursor: pointer;
  z-index: 10;
  color: #fff;
}
</style>
