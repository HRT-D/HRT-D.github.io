<template>
  <el-dialog title="申请" v-model="dialogVisible" width="20%" :before-close="handleClose">
    <div v-if="status===0">
      <el-form :model="form">
        <el-form-item :label-width="labelWidth" :error="checkName()">
          <template #label>
            <span>姓名</span><span class="required-marker" v-if="form.name === ''">*</span>
          </template>
          <el-input v-model="form.name" placeholder="请填写姓名" class="input-border-style" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item :label-width="labelWidth" :error="checkEmail()">
          <template #label>
            <span>Github邮箱</span><span class="required-marker" v-if="form.email === ''">*</span>
          </template>
          <el-input v-model="form.email" placeholder="请填写Github帐号的邮箱" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item :label-width="labelWidth" :error="checkSchool()">
          <template #label>
            <span>学校</span><span class="required-marker" v-if="form.school === ''"> *</span>
          </template>
          <el-input v-model="form.school" placeholder="请填写学校名称" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item :label-width="labelWidth" :error="checkTeam()">
          <template #label>
            <span>所属车队</span><span class="required-marker" v-if="form.team === ''"> *</span>
          </template>
          <el-input v-model="form.team" placeholder="请填写车队名称" autocomplete="off"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer" style="text-align: center">
        <el-button @click="handleClose">取 消</el-button>
        {{"&nbsp&nbsp&nbsp&nbsp"}}
        <el-button type="primary" @click="apply()">确 定</el-button>
      </div>
    </div>
    <div v-else-if="status===1">
      <div style="text-align: center">
        <img src="@/static/Instructions/correct.png" width="256" height="331" alt=""/>
        <br>
        <span>您已成功提交申请，我们将在7日内处理，请留意您的邮件</span>
      </div>
      <br>
      <div slot="footer" class="dialog-footer">
        <el-button type="primary" @click="handleClose">OK</el-button>
      </div>
    </div>
    <div v-else>
      <div style="text-align: center">
        <img src="@/static/Instructions/warning.png" width="256" height="256" alt=""/>
        <br>
        <span>提交失败，请检查网络连接</span>
      </div>
      <br>
      <div slot="footer" class="dialog-footer">
        <el-button type="info" @click="handleClose">OK</el-button>
      </div>
    </div>
  </el-dialog>

</template>

<script>
import {apply} from "@/api/apply.js";

export default {
  name: 'ApplicationForm',
  data() {
    return {
      dialogVisible: false,
      labelWidth: 120,
      maxContentLength: 60,
      status: 0,
      form: {
        name: '',
        email: '',
        school: '',
        team: ''
      },

      activate: false

    }
  },

  methods: {
    isValidEmail(email) {
      return email.match(/^\w+@\w+\.\w+$/i)
    },

    isValidLength(str) {
      return str.length < this.maxContentLength;
    },

    checkName()
    {
      let message = '';
      if (this.activate)
      {
        if (this.form.name === '')
        {
          message = "姓名不能为空";
        }
        else if (!this.isValidLength(this.form.name))
        {
          message = "输入字符数超出限制";
        }
      }
      return message;
    },

    checkEmail()
    {
      let message = '';
      if (this.activate)
      {
        if (this.form.email === '')
        {
          message = "邮箱不能为空";
        }
        else if (!this.isValidLength(this.form.email))
        {
          message = "输入字符数超出限制";
        }
        else if (!this.isValidEmail(this.form.email))
        {
          message = "无效的邮箱格式";
        }
      }


      return message;
    },

    checkSchool()
    {
      let message = '';
      if (this.activate)
      {
        if (this.form.school === '')
        {
          message = "学校不能为空";
        }
        else if (!this.isValidLength(this.form.school))
        {
          message = "输入字符数超出限制";
        }
      }

      return message;
    },

    checkTeam()
    {
      let message = '';
      if (this.activate)
      {
        if (this.form.team === '')
        {
          message = "所属车队不能为空";
        }
        else if (!this.isValidLength(this.form.team))
        {

          message = "输入字符数超出限制";
        }
      }

      return message;
    },

    apply() {
      this.activate = true;
      let name = this.checkName();
      let email = this.checkEmail();
      let school = this.checkSchool();
      let team = this.checkTeam();
      if (name === '' && email === '' && school === '' && team === '') {
        apply(this.form).then((res) => {
          if (res.data.code === 1) {
            this.status = 1;
          }
          else {
            this.status = 2;
          }
        }).catch((res) => {
          this.status = 2;
        })
      }
    },

    handleClose() {
      this.activate = false;
      this.dialogVisible = false;
      this.clear();
    },

    clear() {
      this.activate = false;
      this.form.name = '';
      this.form.email = '';
      this.form.school = '';
      this.form.team = "";
      this.status = 0;
    }
  }
}
</script>

<style scoped>
.required-marker {
  color: red;
  margin-left: 5px;
}

.dialog-footer {
  text-align: center;
}

</style>



