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
  userName: 'userName',
  isSend: 0
})
</script>

<template>
  <div class="card">
    <div class="card-body">
      <div class="mb-3">
        Request to sign-up as New User to:
      </div>
      <el-form :model="user" label-position="top">
        <el-form-item prop="teamName" class="col-lg-6">
          <template #label>
            <ztn-label label="Team Name:" />
          </template>
          <template #default>
            <ztn-input v-model="user.teamName" />
          </template>
        </el-form-item>
        <el-form-item prop="loginId" class="col-lg-6">
          <template #label>
            <ztn-label label="Stronggate Login ID:" />
          </template>
          <template #default>
            <ztn-input v-model="user.loginId">
              <template #desc>
                No Stronggate account? &nbsp;
                <router-link to="/">Create one before this request!</router-link>
              </template>
            </ztn-input>
          </template>
        </el-form-item>
        <el-form-item prop="userName" class="col-lg-6">
          <template #label>
            <ztn-label label="User Name(optional):" />
          </template>
          <template #default>
            <ztn-input v-model="user.userName" />
          </template>
        </el-form-item>
        <el-form-item prop="isSend">
          <template #label>
            <ztn-checkbox
              v-model="user.isSend"
              label="Send notification email to user with instruction to complete user account creation"
              :true-value="1"
              :false-value="0"
              :src="information"
            />
          </template>
          <template #default>
            Note: Successful client login are subject ro applicable device requirements, policies or settings, please
            contact your team administrator for details.
          </template>
        </el-form-item>
      </el-form>
      <div class="text-right">
        <ztn-button label="Cancel" />
        <ztn-button label="Request to Create New User" :is-confirm="true" />
      </div>
    </div>
  </div>
</template>
