<template>
    <LoadingView :active="isLoading"></LoadingView>
    <div>
      <div class="text-end mt-4">
        <button class="btn btn-primary" @click="openCouponModal(true)">
          建立新的優惠券
        </button>
      </div>
      <table class="table mt-4">
        <thead>
        <tr>
          <th>名稱</th>
          <th>折扣百分比</th>
          <th>到期日</th>
          <th>是否啟用</th>
          <th>編輯</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="coupon in coupons" :key="coupon.key">
          <td>{{coupon.title}}</td>
          <td>{{coupon.percent}}</td>
          <td>{{$filter.date(coupon.due_date)}}</td>
          <td>
            <span>啟用</span>
            <span>未啟用</span>
          </td>
          <td>
            <div class="btn-group">
              <button class="btn btn-outline-primary btn-sm" @click="openCouponModal(false,coupon)"
              >編輯</button>
              <button class="btn btn-outline-danger btn-sm" @click="openDeleteModal(coupon)"
              >刪除</button>
            </div>
          </td>
        </tr>
        </tbody>
      </table>
    </div>
    <DelModal ref="delModal" :item="tempCoupon"  @del-item="deleteCoupon"></DelModal>
    <CouponModal ref="couponModal" :coupon="tempCoupon" :title="isNew" @update-coupon="updateCoupon"></CouponModal>
  </template>
<script>
import DelModal from '@/components/DelModal.vue'
import CouponModal from '@/components/CouponModal.vue'
export default {
  data () {
    return {
      coupons: [],
      pagination: {},
      tempCoupon: {
        title: '',
        is_enabled: 0,
        percent: 100,
        code: ''
      },
      // 透過 props 傳到內層，內層透過 coupon 來接收
      isNew: false,
      isLoading: false
    }
  },
  components: {
    DelModal,
    CouponModal
  },
  methods: {
    getCoupons (page = 1) {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/coupons?page=${page}`
      this.isLoading = true // 正在取得資料，顯示 loading 狀態
      // $http就是axios；使用axios調用post方法(api路徑,夾帶要送的資料)
      this.$http.get(api).then((res) => {
        console.log(res)
        this.isLoading = false // 取得資料了，關閉 loading 狀態，要顯示資料了
        this.coupons = res.data.coupons
        this.pagination = res.data.pagination
      })
    },
    openDeleteModal (coupon) {
      const deletCoupon = this.$refs.delModal
      this.tempCoupon = { ...coupon }
      deletCoupon.showModal()
    },
    deleteCoupon (coupon) {
      this.tempCoupon = coupon
      this.isLoading = true
      const delApi = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/coupon/${coupon.id}`
      this.$http.delete(delApi).then(() => {
        this.isLoading = false
        const deleCoupon = this.$refs.delModal
        deleCoupon.hideModal()
        this.getCoupons()
      })
    },
    openCouponModal (isNew, coupon) {
      if (isNew) {
        this.tempCoupon = { due_date: new Date().getTime() / 1000 }
      } else {
        this.tempCoupon = { ...coupon }
      }
      this.isNew = isNew // 把帶入的參數儲存回 isNew
      this.$refs.couponModal.showModal()
    },
    updateCoupon (coupon) {
      console.log('test')
      this.isLoading = true
      this.tempCoupon = coupon
      let api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/coupon`
      let httpMethod = 'post'

      // 如果不是新增優惠券>>>編輯
      if (!this.isNew) {
        api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/coupon/${coupon.id}`
        httpMethod = 'put'
      }
      const couponComponent = this.$refs.couponModal
      // Bracket Notation 也就是 Object['attribute']，而中括號可以代入變數，它會自動轉成字串 mapping 到物件相應的屬性
      this.$http[httpMethod](api, { data: this.tempCoupon }).then(
        (response) => {
          this.isLoading = false
          console.log(response)
          couponComponent.hideModal() // 關閉 modal
          if (response.data.success) {
            this.getCoupons() // 重新取得列表資料
          }
          this.$httpMessageState(response, '更新優惠券')
        }
      )
    }

  },
  created () {
    this.getCoupons()
  }
}
</script>
