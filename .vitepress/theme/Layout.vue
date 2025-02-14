<template>
  <div class="theme-container">
    <DefaultTheme.Layout />
    <AIChatWidget />
  </div>
</template>

<script setup>
import DefaultTheme from 'vitepress/theme'
import AIChatWidget from '../components/AIChatWidget.vue'
</script>

<style scoped>
.theme-container {
  position: relative;
}
</style> 