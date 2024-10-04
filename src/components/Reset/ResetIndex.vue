<template>
  <el-form ref="resetEmailformRef" :model="formLabelAlign" :rules="rules" v-if="model === 0">
    <el-form-item prop="email">
      <el-input
        class="input"
        v-model="formLabelAlign.email"
        placeholder="Enter your email address"
      />
    </el-form-item>
    <el-form-item>
      <el-button class="sub" @click="submit">Send Verified Code</el-button>
    </el-form-item>
  </el-form>
  <el-form ref="resetPasswordformRef" :model="passwordForm" :rules="resetRules" v-if="model === 1">
    <el-form-item prop="actionCode">
      <el-input class="input" v-model="passwordForm.actionCode" placeholder="VERIFIED CODE" />
    </el-form-item>
    <el-form-item prop="password">
      <el-input
        class="input"
        showPassword
        type="password"
        v-model="passwordForm.password"
        placeholder="NEW PASSSWORD"
      />
    </el-form-item>
    <el-form-item prop="newPassword">
      <el-input
        class="input"
        showPassword
        type="password"
        v-model="passwordForm.newPassword"
        placeholder="CONFIRM NEW PASSSWORD"
      />
    </el-form-item>
    <el-form-item>
      <el-button class="sub" @click="resetAuth">Reset</el-button>
    </el-form-item>
  </el-form>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { ElMessage } from 'element-plus'
import { sendPasswordResetEmail, confirmPasswordReset } from 'firebase/auth'
import { auth } from '@/firebase/init'
import { useRouter } from 'vue-router'

// const props = defineProps<{
// }>()

const router = useRouter()
const model = ref<0 | 1>(1)
const resetEmailformRef = ref()
const resetPasswordformRef = ref()
const formLabelAlign = ref({
  email: ''
})
const passwordForm = ref({
  actionCode: '',
  password: '',
  newPassword: ''
})
const rules = ref({
  email: [
    { required: true, message: 'Enter your Email', trigger: 'blur' },
    { type: 'email', message: 'Invalid Email Format', trigger: ['blur', 'change'] }
  ]
})
const resetRules = ref({
  actionCode: [{ required: true, message: 'Enter your action code', trigger: 'blur' }],
  password: [
    { required: true, message: 'Enter your password', trigger: 'blur' },
    { min: 8, message: 'At Least 8 Characters', trigger: 'blur' }
  ],
  newPassword: [
    { required: true, message: 'Enter your password', trigger: 'blur' },
    { min: 8, message: 'At Least 8 Characters', trigger: 'blur' }
  ]
})
const sendReset = async (email: string) => {
  sendPasswordResetEmail(auth, email)
    .then(() => {
      console.log('sendPasswordResetEmail success!')
      ElMessage.success('Reset email sent!')
      model.value = 1
    })
    .catch((error) => {
      console.log('invalid!', error)
      ElMessage.error('Invalid email!')
    })
}
const submit = () => {
  if (!resetEmailformRef.value) return
  resetEmailformRef.value.validate((valid: boolean) => {
    if (valid) {
      console.log('submit!', formLabelAlign.value)
      sendReset(formLabelAlign.value.email)
    } else {
      ElMessage({
        showClose: true,
        message: 'Invalid Input',
        type: 'error'
      })
    }
  })
}
const resetAuth = () => {
  if (!resetPasswordformRef.value) return
  resetPasswordformRef.value.validate((valid: boolean) => {
    if (passwordForm.value.password !== passwordForm.value.newPassword) {
      ElMessage({
        showClose: true,
        message: 'Password not match!',
        type: 'error'
      })
      return
    }
    if (!valid) {
      ElMessage({
        showClose: true,
        message: 'Invalid Input',
        type: 'error'
      })
      return
    }
    if (valid) {
      console.log('submit!', passwordForm.value)
      confirmPasswordReset(auth, passwordForm.value.actionCode, passwordForm.value.password)
        .then(() => {
          console.log('confirmPasswordReset success!')
          ElMessage.success('Reset password success!')
          router.push({ name: 'login' })
        })
        .catch((error) => {
          console.log('invalid!', error)
          ElMessage.error('Invalid action code!')
        })
    }
  })
}
</script>

<style scoped></style>
