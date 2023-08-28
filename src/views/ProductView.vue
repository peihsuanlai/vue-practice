<template>
  <LoadingView :active="isLoading"></LoadingView>
  <div class="text-end">
    <button type="button" class="btn btn-primary" @click="openModal(true)">
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
        <td>{{ item.category }}</td>
        <td>{{ item.title }}</td>
        <td class="text-right">
          {{ $filter.currency(item.origin_price )}}
        </td>
        <td class="text-right">
          {{ $filter.currency(item.price) }}
        </td>
        <td>
          <span class="text-success" v-if="item.is_enabled">啟用</span>
          <span class="text-muted" v-else>啟用</span>
        </td>
        <td>
          <div class="btn-group">
            <button
              class="btn btn-outline-primary btn-sm"
              @click="openModal(false, item)"
            >
              編輯
            </button>
            <button
              class="btn btn-outline-danger btn-sm"
              @click="openDeleteModal(item)"
            >
              刪除
            </button>
          </div>
        </td>
      </tr>
    </tbody>
  </table>
  <ProductModal
    ref="productModal"
    :product="tempProduct"
    @update-product="updateProduct"
  ></ProductModal>

  <DelModal
    ref="delModal"
    :item="tempProduct"
    @del-item="deleteProduct"
  ></DelModal>
  <PaginationView
    :pages="pagination"
    @emit-pages="getProducts"
  ></PaginationView>
</template>
<script>
import ProductModal from '../components/ProductModal.vue'
import DelModal from '@/components/DelModal.vue'
import PaginationView from '@/components/PaginationView.vue'

export default {
  data () {
    return {
      products: [],
      pagination: {},
      tempProduct: {},
      // 透過 props 傳到內層，內層透過 product 來接收
      isNew: false,
      isLoading: false
    }
  },
  // 將 modal 元件透過區域註冊加到 product 元件
  components: {
    ProductModal,
    DelModal,
    PaginationView
  },
  methods: {
    getProducts (page = 1) {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/products/?page=${page}`
      this.isLoading = true // 正在取得資料，顯示 loading 狀態
      // $http就是axios；使用axios調用post方法(api路徑,夾帶要送的資料)
      this.$http.get(api).then((res) => {
        this.isLoading = false // 取得資料了，關閉 loading 狀態，要顯示資料了
        this.products = res.data.products
        this.pagination = res.data.pagination
        console.log(res.data.pagination)
      })
    },
    // 清空資料後再把 modal 打開
    // 打開 modal 有兩種情況：新增商品 or 修改商品，必須設條件判斷
    openModal (isNew, item) {
      if (isNew) {
        this.tempProduct = {}
      } else {
        this.tempProduct = { ...item }
      }
      this.isNew = isNew // 把帶入的參數儲存回 isNew
      const productComponent = this.$refs.productModal
      productComponent.showModal()
    },
    openDeleteModal (item) {
      const deletItem = this.$refs.delModal
      this.tempProduct = { ...item }
      deletItem.showModal()
    },
    // 把內層傳出來的資料儲存起來，並發送到遠端；必須先判斷是新增還是修改，兩者用不同的 api
    updateProduct (item) {
      this.isLoading = true
      this.tempProduct = item
      // 新增
      let api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/product`
      let httpMethod = 'post'

      // 如果不是新增品項>>>編輯
      if (!this.isNew) {
        api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/product/${item.id}`
        httpMethod = 'put'
      }
      const productComponent = this.$refs.productModal
      // Bracket Notation 也就是 Object['attribute']，而中括號可以代入變數，它會自動轉成字串 mapping 到物件相應的屬性
      this.$http[httpMethod](api, { data: this.tempProduct }).then(
        (response) => {
          this.isLoading = false
          console.log(response)
          productComponent.hideModal() // 關閉 modal
          if (response.data.success) {
            this.getProducts() // 重新取得列表資料
          }
          this.$httpMessageState(response, '更新商品')
        }
      )
    },
    deleteProduct (item) {
      this.tempProduct = item
      this.isLoading = true
      const delApi = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/product/${item.id}`
      this.$http.delete(delApi, { data: this.tempProduct }).then((response) => {
        this.isLoading = false
        const deletItem = this.$refs.delModal
        deletItem.hideModal()
        this.getProducts()
      })
    }
  },
  created () {
    this.getProducts()
  }
}
</script>
