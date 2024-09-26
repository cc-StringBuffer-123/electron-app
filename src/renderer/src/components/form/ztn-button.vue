<template>
  <button
    :class="isConfirm?'confirm-button':'cancel-button'"
    type="button"
    v-loading="loading"
    :disabled="disabled"
  >
    <img :src="prefixIcon" v-show="prefixIcon" alt="prefix icon" />
    <span class="ztn-page-t400 text">
      {{ label }}
      <slot></slot>
    </span>
    <img :src="suffixIcon" v-show="suffixIcon" alt="suffix icon" />
  </button>
</template>

<script setup lang="ts">
defineProps({
  prefixIcon: String,
  suffixIcon: String,
  label: String,
  loading: Boolean,
  disabled: Boolean,
  isConfirm: {
    type: Boolean,
    default: false
  }
})
</script>
<style scoped>
.confirm-button {
  min-height: 36px;
  border-radius: 10px;
  border: 1px solid var(--line-box-border-1, #ADADB0);
  background: var(--base-primary-1, #556EE6);
  color: var(--body-inv-1);
  padding: 0 15px;
}

.confirm-button:hover {
  cursor: pointer;
  box-sizing: border-box;
  align-items: center;
  background: #4662E8;
  border: 1px solid #757886;
  border-radius: 10px;
}

.cancel-button {
  height: 30px;
  box-sizing: border-box;
  align-items: center;
  background: var(--base-bg-primary-8, #E9EDFF);
  border-radius: 6px;
  border: none;
  padding-right: 10px;
  margin-right: 10px;
}

.cancel-button:hover {
  cursor: pointer;
  box-sizing: border-box;
  align-items: center;
  border: 1px solid var(--base-bg-primary-7, #D4DBF9);
  background: var(--base-bg-primary-7, #D4DBF9);
}

img {
  width: 16px;
  height: 16px;
}

.text {
  margin-left: 5px;
  margin-right: 5px;
}

</style>
