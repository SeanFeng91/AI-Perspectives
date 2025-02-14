<template>
  <div class="ai-chat-widget" :class="{ 'is-open': isOpen }">
    <!-- 聊天图标按钮 -->
    <button class="chat-toggle" @click="toggleChat">
      <div class="icon">🤖</div>
    </button>

    <!-- 聊天窗口 -->
    <div class="chat-window" v-show="isOpen">
      <div class="chat-header">
        <h3>AI 助手</h3>
        <button class="close-btn" @click="toggleChat">×</button>
      </div>
      
      <div class="chat-messages" ref="messagesContainer">
        <div v-for="(message, index) in messages" 
             :key="index" 
             :class="['message', message.role]">
          <div class="message-content markdown-body" v-if="message.role === 'assistant'" v-html="renderMarkdown(message.content)"></div>
          <div class="message-content" v-else>{{ message.content }}</div>
        </div>
      </div>

      <div class="chat-input">
        <textarea 
          v-model="userInput" 
          @keydown.enter.prevent="sendMessage"
          placeholder="输入您的问题..."
          rows="1"
          ref="inputArea"
          @input="adjustTextareaHeight"
        ></textarea>
        <button @click="sendMessage" :disabled="isLoading">
          {{ isLoading ? '发送中...' : '发送' }}
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, nextTick } from 'vue'
import MarkdownIt from 'markdown-it'
import 'markdown-it/dist/markdown-it.min.js'
import hljs from 'highlight.js'
import 'highlight.js/styles/github-dark.css'

const md = new MarkdownIt({
  html: true,
  linkify: true,
  typographer: true,
  highlight: function (str, lang) {
    if (lang && hljs.getLanguage(lang)) {
      try {
        return hljs.highlight(str, { language: lang }).value
      } catch (__) {}
    }
    return '' // 使用默认的转义
  }
})

const renderMarkdown = (content) => {
  return md.render(content)
}

const isOpen = ref(false)
const messages = ref([
  { role: 'assistant', content: '你好！我是你的 AI 助手，有什么我可以帮你的吗？' }
])
const userInput = ref('')
const isLoading = ref(false)
const messagesContainer = ref(null)
const inputArea = ref(null)

const isDev = import.meta.env.DEV
const WORKER_URL = isDev 
  ? import.meta.env.VITE_WORKER_URL 
  : import.meta.env.VITE_WORKER_PROD_URL

const toggleChat = () => {
  isOpen.value = !isOpen.value
  if (isOpen.value) {
    nextTick(() => {
      inputArea.value?.focus()
    })
  }
}

const adjustTextareaHeight = () => {
  const textarea = inputArea.value
  if (textarea) {
    textarea.style.height = 'auto'
    textarea.style.height = textarea.scrollHeight + 'px'
  }
}

const scrollToBottom = async () => {
  await nextTick()
  if (messagesContainer.value) {
    messagesContainer.value.scrollTop = messagesContainer.value.scrollHeight
  }
}

const sendMessage = async () => {
  if (!userInput.value.trim() || isLoading.value) return

  const userMessage = userInput.value.trim()
  messages.value.push({ role: 'user', content: userMessage })
  userInput.value = ''
  adjustTextareaHeight()
  await scrollToBottom()

  isLoading.value = true
  try {
    console.log('Sending message to worker:', userMessage);
    const response = await fetch(`${WORKER_URL}/api/chat`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        messages: messages.value
      })
    })

    console.log('Worker response status:', response.status);
    const data = await response.json()
    console.log('Worker response data:', data);
    
    if (!response.ok) {
      console.error('Worker error:', data);
      throw new Error(`HTTP error! status: ${response.status}, message: ${data.error || '未知错误'}`)
    }
    
    if (data.error) {
      console.error('API error:', data.error);
      throw new Error(data.error)
    }

    if (!data.candidates?.[0]?.content?.parts?.[0]?.text) {
      console.error('Invalid response format:', data);
      throw new Error('API 返回了无效的响应格式')
    }

    const assistantMessage = data.candidates[0].content.parts[0].text
    console.log('Received assistant message:', assistantMessage);
    messages.value.push({ role: 'assistant', content: assistantMessage })
    await scrollToBottom()
  } catch (error) {
    console.error('Chat error:', error);
    messages.value.push({
      role: 'assistant',
      content: `抱歉，发生了错误：${error.message}`
    })
  } finally {
    isLoading.value = false
  }
}
</script>

<style scoped>
.ai-chat-widget {
  position: fixed;
  right: 20px;
  bottom: 20px;
  z-index: 100000;
  pointer-events: none;
}

.chat-toggle,
.chat-window {
  pointer-events: auto;
}

.chat-toggle {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: var(--vp-c-brand);
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.chat-toggle .icon {
  font-size: 24px;
}

.chat-window {
  position: absolute;
  bottom: 70px;
  right: 0;
  width: 380px;
  height: 600px;
  background: var(--vp-c-bg);
  border: 1px solid var(--vp-c-divider);
  border-radius: 10px;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
}

.chat-header {
  padding: 15px;
  background: var(--vp-c-brand);
  color: white;
  border-radius: 10px 10px 0 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.chat-header h3 {
  margin: 0;
}

.close-btn {
  background: none;
  border: none;
  color: white;
  font-size: 24px;
  cursor: pointer;
}

.chat-messages {
  flex: 1;
  overflow-y: auto;
  padding: 15px;
  scroll-behavior: smooth;
}

.message {
  margin-bottom: 20px;
  max-width: 85%;
  display: flex;
  flex-direction: column;
}

.message.user {
  margin-left: auto;
  align-items: flex-end;
}

.message-content {
  padding: 12px 16px;
  border-radius: 15px;
  background: var(--vp-c-bg-soft);
  color: var(--vp-c-text-1);
  line-height: 1.5;
  overflow-wrap: break-word;
}

.message.user .message-content {
  background: var(--vp-c-brand);
  color: white;
}

.message-content.markdown-body {
  padding: 12px 16px;
  background: var(--vp-c-bg-soft);
  border-radius: 15px;
}

.message-content.markdown-body :deep(pre) {
  margin: 8px 0;
  padding: 12px;
  border-radius: 6px;
  background: var(--vp-c-bg-alt) !important;
}

.message-content.markdown-body :deep(code) {
  font-family: var(--vp-font-family-mono);
  font-size: 0.9em;
  background: var(--vp-c-bg-alt);
  padding: 2px 4px;
  border-radius: 4px;
}

.message-content.markdown-body :deep(p) {
  margin: 8px 0;
}

.message-content.markdown-body :deep(ul),
.message-content.markdown-body :deep(ol) {
  margin: 8px 0;
  padding-left: 20px;
}

.chat-input {
  padding: 15px;
  border-top: 1px solid var(--vp-c-divider);
  display: flex;
  gap: 10px;
  align-items: flex-start;
}

.chat-input textarea {
  flex: 1;
  padding: 8px 12px;
  border: 1px solid var(--vp-c-divider);
  border-radius: 8px;
  resize: none;
  background: var(--vp-c-bg);
  color: var(--vp-c-text-1);
  font-size: 14px;
  line-height: 1.5;
  max-height: 150px;
  min-height: 36px;
}

.chat-input button {
  padding: 8px 16px;
  background: var(--vp-c-brand);
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-size: 14px;
  height: 36px;
  white-space: nowrap;
}

.chat-input button:disabled {
  opacity: 0.7;
  cursor: not-allowed;
}

@media (max-width: 768px) {
  .chat-window {
    width: calc(100vw - 40px);
    height: calc(100vh - 100px);
    position: fixed;
    left: 20px;
    right: 20px;
    bottom: 80px;
  }
}
</style> 