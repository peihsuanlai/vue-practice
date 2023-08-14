<template>
<NavbarView></NavbarView>
<div class="container-fluid"><router-view/></div>

</template>
<script>
import NavbarView from '../components/NavbarView.vue'
export default {
  components: {
    NavbarView
  },
  created () {
    // 把已經存在瀏覽器 cookie 的 token 取出
    const token = document.cookie.replace(
      /(?:(?:^|.*;\s*)siteToken\s*=\s*([^;]*).*$)|^.*$/,
      '$1'
    )
    // 把 token 加到 headers；在 axios 設置預設發送 request 時，headers 有 token(發送requet時夾帶token)
    this.$http.defaults.headers.common.Authorization = token
    // 該 api 用來檢查用戶是否已登入，透過 token 知道跟先前用戶是否為同一個，影響是否能正確登入
    const api = `${process.env.VUE_APP_API}api/user/check`
    // $http 就是 axios；使用 axios 調用 post 方法(api路徑,夾帶要送的資料)
    this.$http.post(api, this.user).then((res) => {
      // 如果未登入，轉到登入頁面
      if (!res.data.success) {
        this.$router.push('/login')
      }
    })
  }
}
</script>
