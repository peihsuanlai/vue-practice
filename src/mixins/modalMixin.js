import Modal from 'bootstrap/js/dist/modal'

export default {
  methods: {
    showModal () {
      this.modal.show() // BS 本身已經訂好的方法
    },
    hideModal () {
      this.modal.hide()
    }
  },
  mounted () {
    // 元件載入後對它進行建立實體 (建立modal實體)
    // 透過 ref 方式直接存取 dom 元素
    // 指向 modal 元素
    this.modal = new Modal(this.$refs.modal)
  }
}
