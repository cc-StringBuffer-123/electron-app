<template>
  <el-skeleton :loading="loading" :rows="0" class="ztn-skeleton" animated>
    <el-input :type="type" :placeholder="placeholder" ref="input" :disabled="disabled"
              v-bind="$attrs" class="input-text" :class="{'disabled': disabled}"
              :show-word-limit="showWord" :maxlength="maxLength">
    </el-input>
    <div class="ztn-page-t200-condense" :class="{'mt-2': desc != null}">{{ desc }}</div>
  </el-skeleton>
</template>

<script setup lang="ts">
defineProps({
  placeholder: String,
  showWord: Boolean,
  maxLength: {
    type: String,
    default: '100%'
  },
  disabled: {
    type: Boolean,
    default: false
  },
  loading: Boolean,
  type: {
    type: String as () => 'text' | 'checkbox' | 'file' | 'number' | 'password' | 'radio' | 'textarea',
    default: 'text'
  },
  desc: String
})
</script>
<style>
.img {
  width: 16px;
  height: 16px;
}

.input-text {
  height: 31px !important;
  width: 100%
}

.disabled .el-input__wrapper {
  background-color: var(--bg-body-2) !important;
}
</style>
