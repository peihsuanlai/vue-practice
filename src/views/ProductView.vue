<template>
  <div class="text-end">
    <button type="button" class="btn btn-primary" @click="openModal">
      增加一個產品
    </button>
  </div>
    <table class="table mt-4">
  <thead>
    <tr>
      <th width="120">分類</th>
      <th>產品名稱</th>
      <th width="120">原價</th>
      <th width="120">售價</th>
      <th width="100">是否啟用</th>
      <th width="200">編輯</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="item in products" :key="item.key">
      <td>{{item.price}}</td>
      <td>{{item.title}}</td>
      <td class="text-right">
        {{item.origin_price}}
      </td>
      <td class="text-right">
        {{item.price}}
      </td>
      <td>
        <span class="text-success" v-if="item.is_enabled">啟用</span>
        <span class="text-muted" v-else>啟用</span>
      </td>
      <td>
        <div class="btn-group">
          <button class="btn btn-outline-primary btn-sm">編輯</button>
          <button class="btn btn-outline-danger btn-sm">刪除</button>
        </div>
      </td>
    </tr>
  </tbody>
</table>
<ProductModal ref="productModal" :product="tempProduct" @update-product="updateProduct"></ProductModal>
</template>
<script>
import ProductModal from '../components/ProductModal.vue'
export default {
  data () {
    return {
      products: [],
      pagination: {},
      tempProduct: {}
      // 透過 props 傳到內層，內層透過 product 來接收
    }
  },
  // 將 modal 元件透過區域註冊加到 product 元件
  components: {
    ProductModal
  },
  methods: {
    getProducts () {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/products`
      // $http就是axios；使用axios調用post方法(api路徑,夾帶要送的資料)
      this.$http.get(api).then((res) => {
        this.products = res.data.products
        this.pagination = res.data.pagination
      })
    },
    // 清空資料後再把 modal 打開
    openModal () {
      this.tempProduct = {}
      const productComponent = this.$refs.productModal
      productComponent.showModal()
    },
    // 把內層傳出來的資料儲存起來，並發送到遠端
    updateProduct (item) {
      this.tempProduct = item
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/product`
      const productComponent = this.$refs.productModal
      this.$http.post(api, { data: this.tempProduct }).then((response) => {
        console.log(response)
        productComponent.hideModal()
        this.getProducts()
      })
    }

  },
  created () {
    this.getProducts()
  }
}
</script>