<template>
  <div class="container">
    <div class="mb-5">
      <h3 class="mb-4">Login to Join Team</h3>
      <div>
        <div style="display: flex">
          <div class="ztn-page-h300-strong label-left">Team Domain:</div>
          <!--          <div class="ztn-page-t200n label-right">
                      (Required)
                    </div>-->
        </div>
        <div class="input-container">
          <input placeholder="TeamDomain" v-model="teamDomain" @keydown.enter="loginTeam" />
          <span class="ztn-page-t400">.stronggate.com</span>
        </div>
      </div>
    </div>
    <!--    <form class="continue-form" @click="loginTeam">Continue to sign in</form>-->
    <button
      type="button" class="ztn-page-t400"
      :class="CheckUtil.isNotEmpty(teamDomain)?'button-enable':'button-disable'"
      @click="loginTeam"
    >
      Continue to sign in
    </button>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import CheckUtil from '../../util/CheckUtil'
import router from '../../router'

const teamDomain = ref('')

const loginTeam = () => {
  console.log('signing...')
  console.log(teamDomain.value)
  router.push('/login/idp')
}

</script>
<style scoped>
.input {
  box-sizing: border-box;
  flex-direction: column;
  align-items: flex-start;
  padding: 0 5px;
  width: 500px;
  height: 32px;
  border: 1px solid #ADADB0;
  border-radius: 5px;
}

.input::placeholder {
  font-family: 'Inter', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  display: flex;
  align-items: center;
  color: #ADADB0;
}

.label-left {
  text-align: left;
  width: 100%;
  color: #495057;
}

/*
.label-right {
  width: 100%;
  text-align: right;
  color: #757886;
}*/

.input-container {
  display: flex;
  align-items: center;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 8px;
  width: 360px;
}

.input-container input {
  border: none;
  outline: none;
  flex: 1;
}

.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-family: Arial, sans-serif;
  height: 50vh;
}

.continue-button {
  border: #f0f0f0 1px solid;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  margin-bottom: 10px;
}

.button-enable {
  cursor: pointer;
  box-sizing: border-box;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 360px;
  height: 37px;
  max-width: 100%;
  background: #556EE6;
  border: 0.5px solid #ADADB0;
  color: #FFFFFF;
  border-radius: 10px;
}

.button-enable:hover {
  background: #4662E8;
}

.button-disable {
  box-sizing: border-box;
  justify-content: center;
  align-items: center;
  width: 360px;
  height: 37px;
  background: #74788D;
  border: 1px solid #ADADB0;
  border-radius: 10px;
  cursor: pointer;
  flex-direction: row;
  color: #FFFFFF;
}
</style>
