<script setup>
import ApplicationForm from "@/views/Instructions/ApplicationForm/index.vue";
import Particle from "@/components/Particle/index.vue";
</script>

<template>
  <ApplicationForm ref="application" style="font-family: 'Noto Sans CJK SC',serif"/>
  <div class="background">
    <Particle/>
    <div style="height: 250px; position: relative">
      <span style="font-size: 80px; color: white; font-weight: bold; font-family: 'Arial Black',serif; margin: 10% 0 0 20%">开源说明</span>
      <br>
      <br>
      <el-button class="apply-button" @click="apply" round>提交申请 ></el-button>
<!--      <span style="color: red">系统维护中，申请功能暂时不可用</span>-->
    </div>
    <div class="main-container">
      <div class="button-container">
        <el-button class="button" type="text" @click="up">▲</el-button>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <el-button class="button" type="text" @click="down">▼</el-button>
      </div>
      <el-scrollbar ref="scrollbar" height="800px" class="scroll-container" native always @scroll="scroll">
        <div class="scroll-content" v-for="(ins, i) in instructions" :key="i">
          <div style="margin-left: 30px; font-family: 'Noto Sans CJK SC',serif">
            <span :class="{'active-title': (activeText >= i), title: (activeText < i)}">
              {{ ins.title }}
            </span>
            <br>
            <span :class="{'active-description': (activeText >= i), description: (activeText < i)}">
              {{ ins.description }}
            </span>
          </div>
        </div>
      </el-scrollbar>
      <el-image :src="images[activeText]" :fit="'contain'" style="width: 40%; height: 50%; margin-right: 13%; top: -15%;"/>
    </div>
  </div>
</template>

<script>
export default {
  name: "Instructions",

  data() {
    return {
      instructions: [
        {title: '欢迎', description: '我们采用类似于UE的开源方式，将源代码放入由我们管理的群组。您需要向我们提出申请，我们会将您拉入群组，使您有权限访问私有仓库。以下是操作流程'},
        {title: '填写申请表单', description: '点击上方的“提交申请”按钮，并根据您的信息如实填写申请表。填写完成后点击“确定”按钮，我们将在七日内完成审批，请注意查收邮件'},
        {title: '确认加入群组', description: '如果我们批准了您的申请，Github会向您发送一个验证邮件，点击加入，访问https://github.com/HRT-D，再次确认即可加入群组。' +
              '如果我们拒绝了您的申请，您也可以在邮箱中查看拒绝原因，修改好后重新提交申请'},
        {title: '关于开源', description: '仓库中可能会有GPL协议、MIT协议、Apache2.0等开源协议，请自觉遵守相关协议。' +
              '您没有修改或者新增仓库的权限，但如果您想要做出贡献，可以提交pull request。' +
              '如果申请迟迟未能通过也未被拒绝，可能是我们有疏忽，您可以发送邮件到2823581355@qq.com说明情况'}
      ],

      images: [
          new URL('@/static/Instructions/1.png', import.meta.url).href,
          new URL('@/static/Instructions/2.png', import.meta.url).href,
          new URL('@/static/Instructions/3.png', import.meta.url).href,
          new URL('@/static/Instructions/4.png', import.meta.url).href],

      activeText: 0,

      maxScroll: 1650,

      activeRanges: [
        {min: 0, max: 220},
        {min: 240, max: 700},
        {min: 840, max: 1200},
        {min: 1200, max: 1650}
      ],

      scrollValue: 0,

      biasValue: 0
    }
  },

  methods: {
    scroll(scroll) {
      this.scrollValue = scroll.scrollTop
      console.log(this.scrollValue)
      let target = 0;
      for (let i = 0; i < this.activeRanges.length; i++) {
        if (this.scrollValue >= this.activeRanges[i].min && this.scrollValue < this.activeRanges[i].max) {
          target = i;
          break;
        }
      }
      console.log(target)
      this.activeText = target
    },

    up() {
      if (this.activeText === 1){
        this.$refs.scrollbar.setScrollTop(0)
      }
      else{
        let value = (this.activeRanges[this.activeText - 1].max + this.activeRanges[this.activeText - 1].min) / 2
        this.$refs.scrollbar.setScrollTop(value)
      }
    },

    apply() {
      this.$refs.application.dialogVisible = true;
    },

    down() {
      if (this.activeText === 2) {
        this.$refs.scrollbar.setScrollTop(this.maxScroll)
      }
      else {
        let value = (this.activeRanges[this.activeText + 1].max + this.activeRanges[this.activeText + 1].min) / 2
        this.$refs.scrollbar.setScrollTop(value)
      }
    }
  }
}
</script>

<style scoped>

.scroll-container {
  direction: rtl;
  height: 800px;
  width: 500px;
  margin-right: 2%;
}

.scroll-content {
  height: 600px;
  width: 100%;
  //display: flex;
  text-align: left;
  color: white;
}

.background {
  width: 100%;
  height: auto;
  min-height: 100%;
  display: block;
  position: absolute;
  align-items: center;
  right: 0;
  background: #131313
}

.main-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  top: 5%;
  height: 70%;
  width: 100%;
  margin: 0 0 0 0;
}

.title {
  font-size: 40px;
  color: #696969;
}

.description {
  font-size: 20px;
  color: #696969;
}

.active-title {
  font-size: 40px;
  font-weight: bold;
}

.active-description {
  font-weight: bold;
  font-size: 20px;
}

.button-container {
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 10%;
  align-items: center;
  text-align: right;
  justify-content: center;
  margin-left: 13%;
}

.button {
  font-size: 60px;
  color: #9b9b9b;
  transition: transform 0.3s ease;
}

.apply-button {
  background-color: white;
  margin-left: 20%;
  font-size: 20px;
  color: #191919;
  height: 30px;
  width: 200px;
  transition: transform 0.3s ease;
}

.button:hover {
  color: #ffffff;
  transform: scale(1.1);
}

.apply-button:hover {
  color: #212121;
  transform: scale(1.1);
}

@keyframes gradientMove {
  0% {
    background-position: 0 50%;
  }
  100% {
    background-position: 100% 50%;
  }
}

</style>


