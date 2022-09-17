<template>
  <div id="app-container" class="bg-lightGray">
    <div id="app-sidebar">
      <AppSidebar />
    </div>
    <div id="app-body" class="ml-24">
      <div id="app-header" >
        <AppHeader />
      </div>
      <div id="app-content">

      </div>
    </div>
  </div>
</template>

<script>
import AppHeader from './components/AppHeader.vue'
import AppSidebar from './components/AppSidebar.vue'

export default {
  name: 'App',
  components: {
    AppHeader,
    AppSidebar,
}
}

</script>

<style>
#app-header {
  height: 70px;
}


</style>
