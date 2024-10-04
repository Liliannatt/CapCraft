<template>
  <el-container class="container">
    <el-header class="header">
      <div class="content">
        <LogoIcon @click="pushPage('home')" />
        <div class="router">
          <div
            @click="pushPage('home')"
            :class="routerIcon.home === SELECTED_COLOR ? 'selected' : ''"
          >
            <HomeIcon :stroke="routerIcon.home" />
          </div>
          <div
            @click="pushPage('video')"
            :class="routerIcon.video === SELECTED_COLOR ? 'selected' : ''"
          >
            <VideoIcon :stroke="routerIcon.video" size="64" />
          </div>
          <div
            @click="pushPage('music')"
            :class="routerIcon.music === SELECTED_COLOR ? 'selected' : ''"
          >
            <MusicIcon :stroke="routerIcon.music" size="64" />
          </div>
          <div
            @click="pushPage('favorite')"
            :class="routerIcon.favorite === SELECTED_COLOR ? 'selected' : ''"
          >
            <FavoriteIcon :stroke="routerIcon.favorite" size="64" />
          </div>
        </div>
        <div class="avatar">
          <el-dropdown trigger="click" :teleported="false">
            <el-avatar
              :size="64"
              :src="user.userInfo.user?.photoURL || ''"
              style="position: relative; z-index: 2000; margin-right: 86px"
              @click="overlayChange(!isOverlay)"
            />
            <template #dropdown>
              {{ user.userInfo.user?.displayName }}
              <el-dropdown-menu>
                <el-dropdown-item @click="handleProfile"
                  ><ProfileIcon style="margin-right: 12px" />Profile</el-dropdown-item
                >
                <el-dropdown-item @click="handleExit"
                  ><ExitIcon style="margin-right: 12px" />Exit</el-dropdown-item
                >
              </el-dropdown-menu>
            </template>
          </el-dropdown>
        </div>
      </div>
    </el-header>
    <el-main class="main">
      <RouterView />
    </el-main>
  </el-container>
  <el-drawer
    v-model="drawer"
    :with-header="false"
    class="drawer"
    style="top: 100px; height: calc(100% - 100px); min-width: 45%"
  >
    <el-form
      class="form"
      ref="formLabelAlignRef"
      :label-position="'top'"
      label-width="auto"
      :model="formLabelAlign"
      :rules="rules"
    >
      <el-form-item label="">
        <div class="circle">
          <el-upload action="#" :show-file-list="false" :before-upload="beforeUpload">
            <img :src="user.userInfo.user?.photoURL || ''" title="Upload" class="img" />
          </el-upload>
        </div>
      </el-form-item>
      <el-form-item label="Name" prop="displayName">
        <el-input v-model="formLabelAlign.displayName" />
      </el-form-item>
      <el-form-item label="Email" prop="email">
        <el-input disabled v-model="formLabelAlign.email" />
      </el-form-item>
    </el-form>
    <div class="btn">
      <el-button class="exit" @click="exit">Cancel</el-button>
      <el-button class="save" type="primary" @click="save">Save</el-button>
    </div>
  </el-drawer>
  <div class="overlay" :style="isOverlay ? 'display:none;' : ''" @click="overlayChange(true)"></div>
</template>

<script lang="ts">
import layout from '../../presenter/layoutIndexpresenter'
export default layout
</script>

<style scoped lang="less">
@import 'src/styles/layoutIndexstyles.less';
</style>
