<template>
  <div class="main-content">
    <div style="margin-top: 128px">
      <div class="mb-4" style="text-align: center">
        Macdonald US Operation Team
        Macdonald.us
      </div>
      <button class="button-idp" onclick="$('#identity').submit()">
        <img src="@assets/img/logo.svg" alt="" class="button-img" />
        <!--        <img src="../../assets/img/idp/stronggate.png" alt="" class="form-img" />-->
        <div class="ztn-page-t600" style="width: 100%;text-align: center">
          Sign in with StrongGate
        </div>
      </button>
      <button class="button-idp" onclick="$('#microsoft').submit()">
        <img src="../../assets/img/idp/microsoft.png" alt="" class="button-img" />
        <div class="ztn-page-t600" style="width: 100%;text-align: center">
          Sign in with Microsoft
        </div>
      </button>
      <button class="button-idp" onclick="$('#github').submit()">
        <img src="../../assets/img/idp/github.png" alt="" class="button-img" />
        <div class="ztn-page-t600" style="width: 100%;text-align: center">
          Sign in with GitHub
        </div>
      </button>
    </div>
  </div>
</template>
<script setup lang="ts">
// const logoSrc = new URL('@renderer/assets/img/logo.svg', import.meta.url).href

</script>
<style scoped>
.main-content {
  justify-content: center;
  width: 100%;
  align-items: center;
  display: flex;
  padding-top: 64px;
}

.button-idp {
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 10px 20px;
  background: #E7E7E8;
  border-radius: 10px;
  width: 360px;
  height: 48px;
  border: none;
  cursor: pointer;
  margin: 0 auto 20px;
}

.button-content {
  border: none;
  background-color: #E7E7E8;
  font-family: 'Inter', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  color: #495057;
  width: 100%;
  cursor: pointer;
  text-align: center;
}

.button-img {
  width: 28px;
  height: 28px;
}

.other-login {
  display: flex;
  align-items: center;
  margin: 4% 20%;
}

.other-login-img {
  cursor: pointer;
  margin-right: 2%;
}
</style>
