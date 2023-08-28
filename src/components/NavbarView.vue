<template>
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">後台系統</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarText">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link" :class="{'active':$route.fullPath=='/dashboard/products'}" aria-current="page" href="#">產品</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" :class="{'active':$route.fullPath=='/dashboard/orders'}" href="#">訂單</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" :class="{'active':$route.fullPath=='/dashboard/coupons'}" href="#">優惠券</a>
        </li>
      </ul>
      <a class="nav-link" href="#" @click.prevent="logout">登出</a>
    </div>
  </div>
</nav>
</template>

<script>
export default {
  methods: {
    logout () {
      const api = `${process.env.VUE_APP_API}logout`
      this.$http.post(api, this.user).then((res) => {
        if (res.data.success) {
          this.$router.push('/login')
        }
      })
    }
  }
}
</script>
