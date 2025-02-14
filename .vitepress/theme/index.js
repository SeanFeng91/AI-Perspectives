import DefaultTheme from 'vitepress/theme'
import AIChatWidget from '../components/AIChatWidget.vue'
import Layout from './Layout.vue'
import './custom.css'

export default {
  ...DefaultTheme,
  Layout,
  enhanceApp({ app }) {
    app.component('AIChatWidget', AIChatWidget)
  }
} 