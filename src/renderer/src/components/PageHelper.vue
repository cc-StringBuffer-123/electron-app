<script setup lang="ts">
const emit = defineEmits(['clickMenu'])

const clickMenu = () => {
  emit('clickMenu')
}

defineProps({
  title: String
})
</script>

<template>
  <div class="menu-container mb-4">
    <img class="sub-menu" src="../assets/img/topMenu/SubMenu.svg" alt="" @click="clickMenu" />
    <span class="menu-title">{{ title }}</span>
  </div>
</template>

<style scoped>
.menu-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  position: relative;
}

.sub-menu {
  cursor: pointer;
  user-select: none;
}

.menu-title {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  text-align: center;
  flex-grow: 1;
  /* Light/Text/T2400 */
  font-family: Inter, sans-serif;
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}
</style>
