<template>
  <span>字数: {{ wordCount }}字</span>
</template>

<script setup>
import { computed, onMounted } from 'vue'
import { useData } from 'vitepress'

const { page } = useData()

const wordCount = computed(() => {
  // 调试信息
  console.log('Page data:', page.value)
  console.log('Reading time data:', page.value?.readingTime)
  
  // 尝试直接计算字数作为备选
  const text = page.value?.text || ''
  const directCount = text.replace(/\s+/g, '').length
  
  return page.value?.readingTime?.words || directCount || 0
})

onMounted(() => {
  console.log('Component mounted, page data:', page.value)
})
</script> 