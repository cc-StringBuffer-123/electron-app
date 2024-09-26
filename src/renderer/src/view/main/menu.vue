<template>
  <div class="ztn-page-h800 title">Home</div>
  <ul>
    <li v-for="menuItem in menuItems" :key="menuItem.id">
      <div
        class="link"
        :class="{ active: activeIndex === menuItem.path, enabled: menuItem.enabled }"
        @click="toPage(menuItem)"
      >
        <div v-if="menuItem.id === MenuItemType.Macdonald" class="menu-item"
             @click="toPage(menuItem)">
          {{ menuItem.label }}
        </div>
        <div v-else-if="menuItem.id === MenuItemType.UncleRay" class="menu-item">
          {{ menuItem.label }}
        </div>
        <div v-else class="menu-label default-label">{{ menuItem.label }}</div>
        <table style="margin-left: 0" v-if="menuItem.id === MenuItemType.Macdonald">
          <tbody>
          <tr>
            <td>
              <img src="../../assets/img/svg/bind.svg" alt="" />
            </td>
            <td>
              <input type="checkbox" class="mac-checkbox" />
            </td>
            <td>
              <img src="../../assets/img/svg/strong-gate-checked.svg" alt="" />
            </td>
            <td>
              <img src="../../assets/img/svg/right-arrow.svg" alt="" />
            </td>
          </tr>
          </tbody>
        </table>
        <table style="margin-left: 0" v-if="menuItem.id === MenuItemType.UncleRay">
          <tbody>
          <tr>
            <td>
              <img src="../../assets/img/svg/bind.svg" alt="" style="visibility: hidden" />
            </td>
            <td>
              <input type="checkbox" class="mac-checkbox" />
            </td>
            <td>
              <img src="../../assets/img/svg/strong-gate.svg" alt="" />
            </td>
            <td>
              <img src="../../assets/img/svg/right-arrow.svg" alt="" style="visibility: hidden;" />
            </td>
          </tr>
          </tbody>
        </table>
      </div>
    </li>
  </ul>
</template>

<script>
import { macdonaldItems, menuItems, MenuItemType } from '../../menu/menu'

export default {
  emits: ['isMacdonald'],
  data() {
    return {
      activeIndex: '/about',
      menuItems: menuItems,
      macdonaldItems: macdonaldItems,
      isMacdonald: false
    }
  },
  computed: {
    MenuItemType() {
      return MenuItemType
    }
  },
  methods: {
    toPage(item) {
      if (item.enabled) {
        return
      }
      if (item.id === MenuItemType.Macdonald) {
        this.$emit('isMacdonald')
        return
      }
      if (item.id === MenuItemType.Exit) {
        window.api.quitApp()
        return
      }
      // this.isMacdonald = item.id === MenuItemType.Macdonald
      this.activeIndex = item.path
      this.$emit('isMacdonald', 'Other')
      this.$router.push(item.path)
    }
  }
}
</script>
<style scoped>
.title {
  font-size: 16px;
  font-weight: bold;
  padding-top: 20px;
  padding-left: 15px;
  background-color: #f8f8f8;
  color: #333;
}

ul {
  list-style-type: none;
  background-color: #f8f8f8;
  padding: 0;
}

.link {
  position: relative;
  display: flex;
  align-items: center;
  padding: 0;
  height: 100%;
  width: 100%;
  min-height: 40px;
  justify-content: space-between;
}

.link:hover {
  cursor: pointer;
  background-color: #eee;
}

.menu-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-left: 25px;
}

.default-label {
  padding-left: 15px;
}

.active {
  background-color: #fdfdfe;
}

.enabled {
  color: #adadb0;
  background-color: #ffffff;
}

.enabled:hover {
  cursor: no-drop;
  background-color: #ffffff;
}

.mac-checkbox {
  vertical-align: middle;
  display: flex;
  align-self: center;
  align-items: center;
  justify-content: center;
  margin-right: 5px;
}
</style>
