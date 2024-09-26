<script setup lang="ts">
/*import { inject, Ref, ref } from 'vue'
import PageHelper from '../../components/PageHelper.vue'
import DateUtil from '../../util/DateUtil'

const isCollapse = inject<Ref<boolean>>('isCollapse', ref(true))

const changeCollapse = () => {
  if (isCollapse) {
    isCollapse.value = !isCollapse.value
  }
}*/
import { ref } from 'vue'
import PageHelper from '../../components/PageHelper.vue'
import DateUtil from '../../util/DateUtil'

const isMenu = ref(false)

const clickMenu = () => {
  isMenu.value = !isMenu.value
}

const clickLogin = () => {
  console.log('click login')
  confirm('click login')
}

const menuItems = [
  { id: 1, label: 'Login', click: clickLogin },
  { id: 2, label: 'Connect' },
  { id: 3, label: 'Open Team Dashboard' },
  { id: 4, label: 'Add User' },
  { id: 5, label: 'Local Team Preferences' },
  { id: 6, label: 'Remove cache of this Team' }
]

</script>

<template>
  <!--  <PageHelper @change-collapse="changeCollapse" title="Team Device Status" />-->
  <PageHelper @click-menu="clickMenu" title="Team Device Status" />
  <div v-show="isMenu" class="menu">
    <ul class="team-list">
      <li v-for="(item, index) in menuItems" :key="index">
        <div class="team-item" @click="item.click">
          <div class="label-container">
            {{ item.label }}
          </div>
        </div>
      </li>
    </ul>
  </div>
  <div style="margin-left: 10px;" @click="isMenu = false">
    <div class="row mb-3">
      <div class="col-md-6">
        <div class="row detail mb-2">
          <div class="col-md-1 mx-2">
            <input type="checkbox" class="checkbox" />
          </div>
          <div class="col-md-9">
            <div class="ztn-page-t600-strong">Logged-in : - Macdonald.co.uk</div>
            <div>ID: Chan@gmail.com</div>
            <div>Enforce-Auto-Login / Passcode to Logout</div>
            <div>Login time: {{ DateUtil.getCurrentFormattedDate() }}</div>
          </div>
          <div class="col-md-1">
            <img src="../../assets/img/svg/bind.svg" alt="" />
          </div>
        </div>
        <div class="mb-2">
          <table style="width: 100%">
            <tbody>
            <tr>
              <td class="td-start">Team name:</td>
              <td>Macdonald operation team</td>
            </tr>
            <tr>
              <td class="td-start">Account name:</td>
              <td>Chan</td>
            </tr>
            <tr>
              <td class="pb-4 td-start">Account status:</td>
              <td class="pb-4">Active</td>
            </tr>
            <tr>
              <td class="td-start">Device name:</td>
              <td>device-name</td>
            </tr>
            <tr>
              <td class="td-start">Device status:</td>
              <td>Registered</td>
            </tr>
            <tr>
              <td class="td-start">Device id:</td>
              <td>{{ DateUtil.generateRandomUID() }}</td>
            </tr>
            <tr>
              <td class="td-start">Mac addr:</td>
              <td>00-15-5d-bc-7b-87</td>
            </tr>
            <tr>
              <td class="td-start">IP address v4:</td>
              <td>172.16.0.56 / 255.255.255.0</td>
            </tr>
            <tr>
              <td class="td-start">IP address v6:</td>
              <td>fe80::902d:e7c:cca5:4506%27</td>
            </tr>
            <tr>
              <td class="td-start">Nearest uplink: v4</td>
            </tr>
            <tr>
              <td class="td-start">Nearest uplink: v6</td>
            </tr>
            <tr>
              <td class="td-start">DNS1:</td>
            </tr>
            <tr>
              <td class="td-start">DNS2:</td>
            </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div class="col-md-6 mb-2">
        <div class="row detail mb-2">
          <div class="col-md-1 mx-2">
            <img class="checkbox" src="../../assets/img/svg/strong-gate-checked.svg" alt="" />
          </div>
          <div class="col-md-9">
            <div class="ztn-page-t600-strong">Connected:- 7 resources</div>
            <div>Enforce-Auto-Login / Passcode to Disconnect</div>
            <div>Resources allowed: 7 out of 12</div>
            <div>Connect time: {{ DateUtil.getCurrentFormattedDate() }}</div>
          </div>
        </div>
        <div class="col-md-6 mb-2">
          <table style="width: 100%;margin-bottom: 15px">
            <tbody>
            <tr>
              <td class="td-start">Controllers:</td>
              <td>Online</td>
            </tr>
            <tr>
              <td class="pb-5 td-start">Accessible Res:</td>
              <td class="pb-5">12 resources</td>
            </tr>
            <tr>
              <td class="td-start">Device Req Plcy:</td>
              <td>[ALLOW]Main Office Devices Policy</td>
            </tr>
            <tr>
              <td class="td-start">Net Access Plcy:</td>
              <td>General staff @ office net profile</td>
            </tr>
            <tr>
              <td class="pb-4 td-start">Geo-proxy Plcy:</td>
              <td class="pb-4">General staff</td>
            </tr>
            <tr>
              <td class="td-start">Device Location:</td>
              <td>Main Office</td>
            </tr>
            <tr>
              <td class="td-start">Location Severs:</td>
              <td>LarryMoon / PeterMars</td>
            </tr>
            <tr>
              <td class="td-start">uGate local proxy:</td>
              <td>MarryMelon / PeterMars</td>
            </tr>
            <tr>
              <td class="td-start">Defined IP Range:</td>
              <td>202.18.0.0 - 202.18.0.255</td>
            </tr>
            <tr>
              <td class="td-start">Split Tunnel:</td>
              <td>202.18.0.0 - 202.18.0.255</td>
            </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
ul {
  list-style-type: none;
}

.menu {
  position: absolute;
  top: 88px;
  left: 356px;
  background: white;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
  z-index: 1000;
}

.team-item {
  padding-left: 10px;
  position: relative;
  display: flex;
  align-items: center;
  height: 100%;
  min-height: 40px;
  min-width: 200px;
  cursor: pointer;
}

.team-list {
  padding: 0;
  margin: 0;
}

.team-item:hover {
  cursor: pointer;
  background-color: #eee;
}

.label-container {
  display: flex;
  align-items: center;
  width: 100%;
}

.detail {
  border: 1px #cccccc solid;
  width: 100%;
  min-height: 113px;
  border-radius: 10px;
  padding: 5px 5px 5px 0;
}

.checkbox {
  width: 32px;
  height: 32px;
  margin: 5px 5px 5px 0;
  user-select: none;
  cursor: pointer;
}

td {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  text-align: left;
  max-width: 200px;
}

.td-start {
  text-align: right;
  padding-right: 10px;
  min-width: 120px;
}
</style>
