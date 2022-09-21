<template>
  <div id="app-container" :style="{ backgroundColor: store.activeMenu.colorLight }">
    <div id="app-sidebar">
      <AppSidebar />
    </div>
    <div id="app-body" class="ml-24">
      <div id="app-header" >
        <AppHeader />
      </div>
      <div id="app-content" class="p-4">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta quod ratione harum ea consequuntur debitis necessitatibus eum natus eveniet! Soluta enim dolorem quidem. Doloremque repellat porro rerum ratione, aliquid aspernatur temporibus possimus minus maiores distinctio beatae accusamus esse pariatur nisi blanditiis et repudiandae dicta cumque vel? Saepe totam praesentium sit.</p>
      </div>
    </div>
  </div>
</template>


<script setup>
  
import AppHeader from './components/AppHeader.vue'
import AppSidebar from './components/AppSidebar.vue'
import { useMainStore } from './store/store'

const store = useMainStore()

</script>

<style>
#app-header {
  height: 70px;
}
#app-content {
  height: calc(100vh - 70px);
}

</style>
