<script setup lang="ts">
import ZtnLabel from '../../components/form/ztn-label.vue'
import ZtnButton from '../../components/form/ztn-button.vue'
import ZtnCheckbox from '../../components/form/ztn-checkbox.vue'
import information from '../../assets/img/svg/information-outline.svg'
import ZtnInput from '../../components/form/ztn-input.vue'
import { reactive } from 'vue'

const user = reactive({
  teamName: 'teamName',
  loginId: 'loginId',
  userName: 'userName'
})
</script>

<template>
  <div class="card">
    <div style="margin: 10px">
      Request to sign-up as New User to:
    </div>
    <div class="card-body">
      <el-form :model="user">
        <el-form-item prop="teamName">
          <ztn-label label="Team Name:" />
          <ztn-input v-model="user.teamName" />
        </el-form-item>
        <el-form-item prop="loginId">
          <ztn-label label="Stronggate Login ID:" />
          <ztn-input v-model="user.loginId" />
        </el-form-item>
        <el-form-item prop="userName">
          <ztn-label label="User Name(optional):" />
          <ztn-input v-model="user.userName" />
        </el-form-item>
        <el-form-item>
          <ztn-checkbox
            label="Send notification email to user with instruction to complete user account creation"
            :true-value="1"
            :false-value="0"
            :src="information"
          />
          Note: Successful client login are subject ro applicable device requirements, policies or settings, please
          contact your team administrator for details.
        </el-form-item>
      </el-form>
      <div style="text-align: right;">
        <ztn-button label="Cancel" />
        <ztn-button label="Request to Create New User" :is-confirm="true" />
      </div>
    </div>
  </div>
</template>
