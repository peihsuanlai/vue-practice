<template>
    <div class="container mt-5">
        <form class="row justify-content-center" @submit.prevent="signIn">
            <div class="col-md-6">
                <h1 class="h3 mb-3 font-weight-normal">請先登入</h1>
                 <div class="mb-2">
                    <label for="inputEmail" class="sr-only">Email address</label>
                    <input
                    type="email"
                    id="inputEmail"
                    class="form-control"
                    placeholder="Email address"
                    required
                    autofocus
                    v-model="user.username"
                    />
                </div>
                <div class="mb-2">
                    <label for="inputPassword" class="sr-only">Password</label>
                    <input
                     type="password"
                     id="inputPassword"
                     class="form-control"
                     placeholder="Password"
                     required
                     v-model="user.password"
                      />
                    </div>
                    <div class="text-end mt-4">
                        <button class="btn btn-lg btn-primary btn-block" type="submit">登入</button>
                    </div>
                </div>
            </form>
            </div>
</template>
<script>
export default {
  data () {
    return {
      user: {
        username: '',
        password: ''
      }
    }
  },
  methods: {
    signIn () {
      console.log('login')
      const api = `${process.env.VUE_APP_API}admin/signin`
      this.isLoading = true
      // $http就是axios；使用axios調用post方法(api路徑,夾帶要送的資料)
      this.$http.post(api, this.user).then((res) => {
        this.isLoading = false
        // 如果登入成功，就轉到dashboard頁面
        if (res.data.success) {
          // 伺服器回傳的資料，取出必要元素製作cookie
          const { token, expired } = res.data
          // 在瀏覽器設置cookie(包含token和expired)；用new Date函式轉換成可讀的日期格式
          document.cookie = `siteToken = ${token}; expires = ${new Date(expired)}`
          this.$router.push('/dashboard/products')
        }
      })
    }
  }
}
</script>
