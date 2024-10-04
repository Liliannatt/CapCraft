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
        placeholder="Enter your password"
        type="password"
        v-model="formLabelAlign.password"
      />
    </el-form-item>
    <el-form-item>
      <el-button class="sub" @click="submit">Sign Up</el-button>
    </el-form-item>
  </el-form>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { ElMessage } from 'element-plus'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { auth } from '@/firebase/init'
import { useRouter } from 'vue-router'
const router = useRouter()
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
const signup = async (email: string, password: string) => {
  const res = await createUserWithEmailAndPassword(auth, email, password).catch((error) => {
    console.log('invalid!', error)
    ElMessage.error('Invalid email or password!')
  })
  if (!res) return
  console.log('success!', res)
  ElMessage.success('Sign up success!')
  router.push({ name: 'login' })
}
const submit = () => {
  if (!signupformRef.value) return
  signupformRef.value.validate((valid: boolean) => {
    if (valid) {
      signup(formLabelAlign.value.email, formLabelAlign.value.password)
      console.log('submit!', formLabelAlign.value)
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
