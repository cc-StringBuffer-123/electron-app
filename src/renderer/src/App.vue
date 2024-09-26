<script setup lang="ts">
import { ref } from 'vue'
import Main from './view/main/main.vue'
import Menu from './view/main/menu.vue'
import Header from './view/main/header.vue'
import MenuMacdonald from './view/macdonald/menu-macdonald.vue'
import router from './router'
// import Footer from './view/main/footer.vue'

// const isCollapse = ref(true)
// provide('isCollapse', isCollapse)

const isMacdonald = ref(false)

const changeMacdonald = (val) => {
  if (val === 'Other') {
    isMacdonald.value = false
    return
  }
  isMacdonald.value = !isMacdonald.value
}

const toPage = (macdonaldItem) => {
  isMacdonald.value = false
  console.log(macdonaldItem)
  router.push(macdonaldItem.path)
}
</script>

<template>
  <el-container id="container">
    <el-header>
      <Header />
    </el-header>
    <el-container>
      <el-aside>
        <!--        v-show="isCollapse"-->
        <Menu @is-macdonald="changeMacdonald" />
      </el-aside>
      <menu-macdonald
        :is-macdonald="isMacdonald"
        style="position: absolute; left: 304px; top: 104px"
        @change-macdonald="toPage"
      />
      <el-main @click="isMacdonald = false">
        <Main />
      </el-main>
    </el-container>
    <!--    <el-footer>
          <Footer />
        </el-footer>-->
  </el-container>
</template>

<style scoped>
#container {
  height: 100vh;
  margin: 0;
  overflow: hidden;
}

.el-header {
  padding: 0;
  background-color: #f2f2f2;
}

.el-aside {
  margin-top: 0;
  background-color: #f8f8f8;
}

.el-container {
  height: 100%;
}
</style>
