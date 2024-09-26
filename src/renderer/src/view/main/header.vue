<template>
  <div class="header">
    <div class="title-bar">
      <img alt="logo" class="logo" src="../../assets/img/logo.svg" />
      <span class="title-text ztn-page-h800">StrongGate Agent Client</span>
      <div class="title-bar-buttons">
        <img
          alt="min"
          class="operator logo"
          style="padding: 0"
          src="../../assets/img/topMenu/Min.svg"
          @click="minimizeWindow"
        />
        <img
          alt="max"
          class="operator logo"
          src="../../assets/img/topMenu/Max.svg"
          @click="maximizeWindow"
        />
        <img
          alt="del"
          class="operator logo"
          src="../../assets/img/topMenu/Delete.svg"
          @click="exit"
        />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    minimizeWindow() {
      window.api.minimizeWindow()
    },
    maximizeWindow() {
      window.api.maximizeWindow()
    },
    exit() {
      window.api.quitApp()
    }
  }
}
</script>
<style scoped>
.header {
  display: flex;
  align-items: center;
  padding: 10px;
  background-color: #f2f2f2;
  -webkit-app-region: drag;
}

.title-bar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
}

.logo {
  margin-right: 10px;
}

.operator {
  width: 32px;
  height: 32px;
  padding-left: 2px;
}

.operator:hover {
  background-color: #e1e4e5;
  cursor: pointer;
}

.title-text {
  flex-grow: 1;
}

.title-bar-buttons {
  display: flex;
  -webkit-app-region: no-drag;
}
</style>
