<template>
  <div class="box">
    <el-form
      class="form"
      ref="aboutForm"
      :rules="rules"
      :label-position="'top'"
      label-width="auto"
      :model="formLabelAlign"
    >
      <el-row>
        <el-col :span="10">
          <el-form-item label="First Name" prop="firstName">
            <el-input v-model="formLabelAlign.firstName" />
          </el-form-item>
        </el-col>
        <el-col :offset="4" :span="10">
          <el-form-item label="Last Name" prop="lastName">
            <el-input v-model="formLabelAlign.lastName" />
          </el-form-item>
        </el-col>
      </el-row>
      <el-form-item label="Email" prop="email">
        <el-input v-model="formLabelAlign.email" />
      </el-form-item>
      <el-form-item label="Write a message" prop="msg">
        <el-input v-model="formLabelAlign.msg" type="textarea" :rows="6" />
      </el-form-item>
      <el-form-item class="btn">
        <el-button class="sub" @click="submit">Submit</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script setup lang="ts">
import { ElMessage } from 'element-plus'
import { ref } from 'vue'
import { useUser } from '@/model/userModel'
const user = useUser()

const aboutForm = ref()
const formLabelAlign = ref({
  firstName: '',
  lastName: '',
  email: '',
  msg: ''
})
const rules = ref({
  firstName: [{ required: true, message: 'Enter firstName', trigger: 'blur' }],
  lastName: [{ required: true, message: 'Enter lastName', trigger: 'blur' }],
  email: [
    { required: true, message: 'Enter your Email', trigger: 'blur' },
    { type: 'email', message: 'Invalid Email Format', trigger: ['blur', 'change'] }
  ],
  msg: [{ required: true, message: 'Enter your message', trigger: 'blur' }]
})
const submit = () => {
  if (!aboutForm.value) return
  aboutForm.value.validate((valid: boolean) => {
    if (valid) {
      user.setMsg(JSON.stringify(formLabelAlign.value))
      ElMessage({
        showClose: true,
        message: 'submitted successfully',
        type: 'success'
      })
    }
  })
}
</script>

<style scoped lang="less">
.box {
  width: 100%;
  display: flex;
  justify-content: center;
  border-top: 1px solid #af96bc;
  padding-top: 50px;
}
.form {
  width: 700px;
  :deep(.el-form-item__label) {
    color: var(--white-100, #fff);
    font-family: 'Plus Jakarta Sans';
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: 20px; /* 83.333% */
    margin-top: 40px;
  }
  :deep(.el-input__wrapper) {
    background-color: #171e2a;
    height: 40px;
  }
  :deep(.el-textarea__inner) {
    background-color: #171e2a;
  }
}
.btn {
  margin: 40px;
  :deep(.el-form-item__content) {
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
.sub {
  width: 188px;
  height: 62px;
  border: 1px solid #f38bdc;
  border-radius: 40px;
  background-color: #2d323e;
  color: var(--white-100, #fff);

  font-family: 'Plus Jakarta Sans';
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  text-transform: capitalize;
}
</style>
