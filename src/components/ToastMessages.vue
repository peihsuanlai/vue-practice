<template>
    <div class="toast-container position-absolute pe-3 top-0 end-0">
        <ToastView v-for="(msg, key) in messages" :key="key" :msg="msg"></ToastView>
    </div>
</template>

<script>
import ToastView from '@/components/ToastView.vue'
export default {
  components: { ToastView },
  data () {
    return {
      // 定義一個空的訊息列表
      messages: []
    }
  },
  inject: ['emitter'],
  mounted () {
    // message參數為外部傳來的訊息，傳進來會觸發 push-message 事件
    this.emitter.on('push-message', (message) => {
      // 解構這個訊息
      const { style = 'success', title, content } = message
      // 將所需內容 push 到訊息列表
      this.messages.push({ style, title, content })
    })
  }

}
</script>
