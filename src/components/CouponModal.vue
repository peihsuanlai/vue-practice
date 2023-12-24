<template>
    <div class="modal fade" id="couponModal" tabindex="-1" role="dialog"
         aria-labelledby="exampleModalLabel" aria-hidden="true" ref="modal">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">{{ title ? "新增優惠券" : "編輯優惠券" }}</h5>
            <button type="button" class="btn-close"
                    data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <div class="mb-3">
              <label for="title">標題</label>
              <input type="text" class="form-control" id="title"
                     placeholder="請輸入標題" v-model="tempCoupon.title">
            </div>
            <div class="mb-3">
              <label for="coupon_code">優惠碼</label>
              <input type="text" class="form-control" id="coupon_code"
                     placeholder="請輸入優惠碼" v-model="tempCoupon.code">
            </div>
            <div class="mb-3">
              <label for="due_date">到期日</label>
              <input type="date" class="form-control" id="due_date" v-model="due_date">
            </div>
            <div class="mb-3">
              <label for="price">折扣百分比</label>
              <input type="number" class="form-control" id="price" placeholder="請輸入折扣百分比" v-model="tempCoupon.percent">
            </div>
            <div class="mb-3">
              <div class="form-check">
                <input class="form-check-input" type="checkbox"
                       :true-value="1"
                       :false-value="0"
                       id="is_enabled"
                       v-model="tempCoupon.is_enabled">
                <label class="form-check-label" for="is_enabled">
                  是否啟用
                </label>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            <button type="button" class="btn btn-primary" @click="$emit('update-coupon', tempCoupon)">{{ title ? "新增優惠券" : "編輯優惠券" }}
            </button>
          </div>
        </div>
      </div>
    </div>
  </template>
<script>
import modalMixin from '@/mixins/modalMixin'
export default {
  props: {
    // 外層 tempCoupon 傳進來的資料透過 props coupon 接收
    coupon: {
      // 預期傳進來是物件型別
      type: Object,
      // 如果沒有正確傳入，則給予預設值
      default () {
        return {}
      }
    },
    title: {
      type: Boolean
    }
  },
  data () {
    return {
      modal: {},
      // 作為外層資料的接收
      tempCoupon: {},
      due_date: ''
    }
  },
  emits: ['update-coupon'],
  watch: {
    coupon () {
      this.tempCoupon = this.coupon
      // 將時間格式改為 YYYY-MM-DD //將 due_date 轉成符合 Modal 的格式（yyyy-mm-dd)
      console.log(this.tempCoupon.due_date)
      // 要讓 input 的日期能正確顯示，需要將時間的格式轉成 YYYY-MM-DD 因此會乘以 1000
      const dateAndTime = new Date(this.tempCoupon.due_date * 1000).toISOString().split('T')
      console.log(dateAndTime)
      this.due_date = dateAndTime[0]
    },
    due_date () {
      // 將 due_date 轉成適合父元件儲存的格式（1695427200） 為了能夠保留原本的格式，所以要除 1000 回來
      this.tempCoupon.due_date = Math.floor(new Date(this.due_date) / 1000)
    }
  },
  mixins: [modalMixin]
}

</script>
