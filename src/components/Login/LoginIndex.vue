<template>
  <el-form ref="signupformRef" :model="formLabelAlign" :rules="rules">
    <el-form-item prop="email">
      <el-input
        class="input"
        v-model="formLabelAlign.email"
        placeholder="Enter your email address"
      />
    </el-form-item>
    <el-form-item prop="password">
      <el-input
        class="input"
        showPassword
        type="password"
        v-model="formLabelAlign.password"
        placeholder="Enter your password"
      />
    </el-form-item>
    <el-form-item>
      <el-button class="sub" @click="submit">Login</el-button>
    </el-form-item>
  </el-form>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { ElMessage } from 'element-plus'

const props = defineProps<{
  signIn: any
}>()

const signupformRef = ref()
const formLabelAlign = ref({
  email: '',
  password: ''
})
const rules = ref({
  email: [
    { required: true, message: 'Enter your Email', trigger: 'blur' },
    { type: 'email', message: 'Invalid Email Format', trigger: ['blur', 'change'] }
  ],
  password: [
    { required: true, message: 'Enter your password', trigger: 'blur' },
    { min: 8, message: 'At Least 8 Characters', trigger: 'blur' }
  ]
})
const submit = () => {
  if (!signupformRef.value) return
  signupformRef.value.validate((valid: boolean) => {
    if (valid) {
      console.log('submit!', formLabelAlign.value)
      props.signIn(formLabelAlign.value.email, formLabelAlign.value.password)
    } else {
      ElMessage({
        showClose: true,
        message: 'Invalid Input',
        type: 'error'
      })
    }
  })
}
</script>

<style scoped></style>
