<template>
  <el-checkbox :true-value="trueValue" :false-value="falseValue" :label="label">
    <template #default>
      <div class="ztn-page-h300 check-font" id="checkBox_lab">
        <slot name="label">{{ label }}</slot>
        <img v-show="CheckUtil.isNotEmpty(src)" :src="src" alt="" class="img" />
      </div>
    </template>
  </el-checkbox>
  <slot name="desc">
    {{ desc }}
  </slot>
</template>

<script setup lang="ts">
import CheckUtil from '../../util/CheckUtil'

const props = defineProps({
  trueValue: Number || String,
  falseValue: Number || String,
  label: String,
  src: String,
  desc: String
})


console.log(props.src)
</script>

<style scoped>
.img {
  width: 16px;
  height: 16px;
}

.check-font {
  color: var(--body-color-1) !important;
}

:deep(.el-checkbox__inner) {
  border-color: var(--base-secondary-1);
}

:deep(.el-checkbox__label) {
  color: var(--base-secondary-1) !important;
  user-select: text !important;
  white-space: normal !important;
}

:deep(.el-checkbox__inner:hover) {
  border-color: var(--base-secondary-1);
}

:deep(.el-checkbox__input.is-focus .el-checkbox__inner) {
  border-color: var(--base-secondary-1);
}

:deep(.el-checkbox__input.is-checked .el-checkbox__inner) {
  background-color: var(--body-inv-1);
}

:deep(.el-checkbox__input.is-checked .el-checkbox__inner)::after {
  border-color: var(--base-secondary-1);
}

:deep(.el-checkbox__input .el-checkbox__inner) {
  border-radius: 4px !important;
  border-color: var(--base-secondary-1);
}
</style>
