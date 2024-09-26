<script lang="ts" setup>
/*import { macdonaldItems, MacdonaldType } from '../../menu/menu'
import { ref } from 'vue'
import router from '../../router'

const isMacdonald = ref(true)

const toPage = (macdonaldItem) => {
  isMacdonald.value = false
  router.push(macdonaldItem.path)
}*/
</script>

<template>
  <div>dd</div>
  <!--  <div v-show="isMacdonald" class="macdonald-popup">
      <div class="popup-header">Welcome</div>
      <ul class="macdonald-list">
        <li v-for="macdonaldItem in macdonaldItems" :key="macdonaldItem.id">
          <div class="macdonald-item" @click="toPage(macdonaldItem)">
            <input
              v-show="macdonaldItem.id === MacdonaldType.LoggedOut"
              type="checkbox"
              class="prefix"
            />
            <img
              v-show="macdonaldItem.id === MacdonaldType.Connected"
              src="../../assets/img/svg/strong-gate-checked.svg"
              alt=""
              class="prefix"
            />
            <div class="label-container">
              {{ macdonaldItem.label }}
              <div
                v-show="
                  macdonaldItem.id === MacdonaldType.Login ||
                  macdonaldItem.id === MacdonaldType.Connect
                "
                class="manual-container"
              >
                Manual
              </div>
            </div>
          </div>
          <div v-show="macdonaldItem.id === MacdonaldType.Connected" class="bottom-border"></div>
        </li>
      </ul>
    </div>-->
</template>

<!--<style scoped>
ul {
  list-style-type: none;
  background-color: #f8f8f8;
  padding: 0;
}

.macdonald-popup {
  /*position: absolute;
  left: 31%;
  top: 11%;*/
  min-width: 360px;
  max-width: 360px;
}

.popup-header {
  background-color: #f8f8f8;
  height: 40px;
  display: flex;
  align-items: center;
  border-bottom: #ccc 1px solid;
  padding-left: 10px;
}

.macdonald-list {
  padding: 0;
  margin: 0;
}

.macdonald-item {
  padding-left: 10px;
  position: relative;
  display: flex;
  align-items: center;
  height: 100%;
  min-height: 40px;
  cursor: pointer;
}

.macdonald-item:hover {
  cursor: pointer;
  background-color: #eee;
}

.prefix {
  margin-right: 10px;
}

.label-container {
  display: flex;
  align-items: center;
  width: 100%;
}

.manual-container {
  border: #cccccc 1px solid;
  display: flex;
  width: 70px;
  max-height: 20px;
  text-align: center;
  align-items: center;
  justify-content: center;
  margin-left: auto;
  margin-right: 10px;
}

.bottom-border {
  border-bottom: #cccccc 1px solid;
}
</style>-->
