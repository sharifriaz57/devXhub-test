<template>
  <div id="app-container" :style="{ backgroundColor: store.activeMenu.colorLight }">
    <div id="app-sidebar">
      <AppSidebar />
    </div>
    <div id="app-body" class="ml-24">
      <div id="app-header">
        <AppHeader />
      </div>
      <div id="app-content" class="p-4">
        <router-view v-slot="{ Component, route }">
          <transition name="fade" mode="out-in">
            <div :key="route.path">
              <component :is="Component" />
            </div>
          </transition>
        </router-view>
      </div>
    </div>
  </div>
</template>


<script setup>

import { useMainStore } from '@/store/store'
import AppHeader from '@/components/Header/AppHeader.vue'
import AppSidebar from '@/components/Sidebar/AppSidebar.vue'

const store = useMainStore()

</script>
    
<style lang="scss">

#app {
  &-header {
    height: 70px;
  }
  &-content {
    height: calc(100vh - 70px);
  }
}

.fade {
  &-enter {
    &-active {
      transition: opacity 0.5s ease;
    }
    &-from {
      opacity: 0;
    }
  }
  &-leave {
    &-active {
      transition: opacity 0.5s ease;
    }
    &-to {
      opacity: 0;
    }
  }
}

</style>
    