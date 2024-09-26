<template>
  <label ref="label">
    <span class="ztn-page-h300"><slot>{{ label }}</slot></span>
    <img class="img" v-show="CheckUtil.isNotEmpty(src)" :src="src" alt="" />
    <span class="ztn-page-t300 span">{{ desc }}</span>
  </label>
</template>

<script setup lang="ts">
import CheckUtil from '../../util/CheckUtil'

defineProps({
  label: String,
  src: String,
  desc: String
})
</script>

<style scoped>
.span {
  margin-left: 0.5rem !important;
  color: var(--body-aux-1) !important;
}

label {
  color: var(--body-color-1) !important;
  margin-bottom: 0 !important;
}

.img {
  width: 16px;
  height: 16px;
}
</style>
