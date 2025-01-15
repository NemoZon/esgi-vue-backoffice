<script setup lang="ts">
  import NavBar from './components/NavBar.vue';
  import LayoutPage from './pages/LayoutPage.vue';
</script>

<template>
  <LayoutPage>
    <template #header>
      <NavBar></NavBar>
    </template>
    <RouterView />
  </LayoutPage>
</template>
