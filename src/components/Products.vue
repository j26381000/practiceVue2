<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div>
    <div class="text-right mt-4">
      <button class="btn btn-primary" @click="openModal">建立新的產品</button>
    </div>
    <table class="table mt-4 ">
      <thead>
        <tr>
          <th width="120">分類</th>
          <th>產品名稱</th>
          <th width="120">原價</th>
          <th width="120">售價</th>
          <th width="80">是否啟用</th>
          <th width="80">編輯</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item) in products" :key="item.id">
          <td>{{ item.category }}</td>
          <td>{{ item.title }}</td>
          <td class="text-right">
            {{ item.origin_price }}
          </td>
          <td class="text-right">
            {{ item.price }}
          </td>
          <td>
            <span v-if="item.is_enabled" class="text-success">啟用</span>
            <span v-else>未啟用</span>
          </td>
          <td>
            <button class="btn btn-outline-primary btn-sm">編輯</button>
          </td>
        </tr>
      </tbody>
    </table>
    <!-- Modal -->
    <div class="modal fade" id="productModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog modal-lg " role="document">
            <div class="modal-content border-0">
              <div class="modal-header bg-dark text-white">
                <h5 class="modal-title" id="exampleModalLabel">
                  <span>新增產品</span>
                </h5>
                <button type="button" class="close" data-bs-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="row">
                <div class="col-sm-4">
                  <div class="form-group">
                    <label for="image">輸入圖片網址</label>
                    <input type="text" class="form-control" id="image" v-model="tempProduct.imageUrl" placeholder="請輸入圖片連結">
                  </div>
                  <div class="form-group">
                    <label for="customFile">或 上傳圖片
                      <i class="fas fa-spinner fa-spin"></i>
                    </label>
                    <input type="file" id="customFile" class="form-control" ref="files">
                  </div>
                  <img
                    img="https://images.unsplash.com/photo-1483985988355-763728e1935b?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=828346ed697837ce808cae68d3ddc3cf&auto=format&fit=crop&w=1350&q=80"
                    class="img-fluid"
                    :src="tempProduct.imageUrl"
                    alt=""
                  >
                </div>
                <div class="col-sm-8">
                  <div class="form-group">
                    <label for="title">標題</label>
                    <input type="text" class="form-control" id="title" v-model="tempProduct.title" placeholder="請輸入標題">
                  </div>
                  <div class="form-row">
                    <div class="form-group col-md-6">
                      <label for="category">分類</label>
                      <input type="text" class="form-control" id="category" v-model="tempProduct.category" placeholder="請輸入分類">
                    </div>
                    <div class="form-group col-md-6">
                      <label for="price">單位</label>
                      <input type="unit" class="form-control" id="unit" v-model="tempProduct.unit" placeholder="請輸入單位">
                    </div>
                  </div>
                  <div class="form-row">
                    <div class="form-group col-md-6">
                      <label for="origin_price">原價</label>
                      <input
                        type="number"
                        class="form-control"
                        id="origin_price"
                        v-model="tempProduct.origin_price"
                        placeholder="請輸入原價"
                      >

                    </div>
                    <div class="form-group col-md-6">
                      <label for="price">售價</label>
                      <input
                        type="number"
                        class="form-control"
                        id="price"
                        v-model="tempProduct.price"
                        placeholder="請輸入售價"
                      >

                    </div>
                  </div>
                  <hr>

                  <div class="form-group">
                    <label for="description">產品描述</label>
                    <textarea
                      type="text"
                      class="form-control"
                      id="description"
                      v-model="tempProduct.description"
                      placeholder="請輸入產品描述"
                    ></textarea>

                  </div>
                  <div class="form-group">
                    <label for="content">說明內容</label>
                    <textarea
                      type="text"
                      class="form-control"
                      id="content"
                      v-model="tempProduct.content"
                      placeholder="請輸入產品說明內容"
                    ></textarea>

                  </div>
                  <div class="form-group">
                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        v-model="tempProduct.is_enabled"
                        :true-value="1"
                        :false-value="0"
                        id="is_enabled"
                      >

                      <label
                        class="form-check-label"
                        for="is_enabled"
                      >
                        是否啟用
                      </label>
                    </div>
                  </div>
                </div>
                <div class="modal-footer"><button
                    type="button"
                    class="btn btn-secondary"
                    data-bs-dismiss="modal"
                  >取消</button>
                  <button
                    type="button"
                    class="btn btn-primary"
                    data-bs-dismiss="modal"
                    @click="updateProduct"
                  >確認</button>
                </div>
              </div>
            </div>
          </div>
    </div>
  </div>
</template>

<script>
import Modal from 'bootstrap/js/dist/modal'
export default {
  data () {
    return {
      products: [],
      tempProduct: {},
      isNew: false
    }
  },
  methods: {
    getProducts () {
      const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/products`
      const vm = this
      console.log(process.env.VUE_APP_APIPATH, process.env.VUE_APP_CUSTOMPATH)
      this.$http.get(api).then((response) => {
        console.log(response.data)
        vm.products = response.data.products
      })
    },
    openModal () {
      const myModal = new Modal(document.getElementById('productModal'), {
        keyboard: false
      })
      myModal.show()
    },
    updateProduct () {
      const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/admin/product`
      const vm = this
      console.log(process.env.VUE_APP_APIPATH, process.env.VUE_APP_CUSTOMPATH)
      this.$http.post(api, { data: vm.tempProduct }).then((response) => {
        console.log(response.data)
      })
    }
  },
  created () {
    this.getProducts()
  }
}
</script>
