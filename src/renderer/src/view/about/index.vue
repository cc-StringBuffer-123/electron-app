<template>
  <div class="container">
    <div class="header">
      <h1>StrongGate Agent Client</h1>
      <div class="version">
        <span>Version 3.1.125</span>
        <span>6212</span>
      </div>
    </div>
    <div class="content">
      <button class="hide-button">Hide Agent window in <span>5s</span></button>
      <p>Press any key to cancel</p>
    </div>
  </div>
  <footer class="footer">
    <div class="footer-content">
      Terms of use. Privacy Statement
      <p>Copyright © 2024 Stronggate Limited. All rights reserved.</p>
    </div>
  </footer>
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-family: Arial, sans-serif;
  margin-top: 10%;
}

.header {
  margin-bottom: 20px;
}

.version {
  display: flex;
  justify-content: center;
  gap: 10px;
  padding: 5px 10px;
  border-radius: 5px;
}

.content {
  margin-top: 20%;
}

.hide-button {
  border: #f0f0f0 1px solid;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  margin-bottom: 10px;
}

.footer {
  position: fixed;
  bottom: 0;
  left: 48%;
}

.footer-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
</style>
