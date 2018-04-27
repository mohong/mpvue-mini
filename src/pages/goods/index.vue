<template>
  <div class="goods">
    <div class="item" v-for="item in goods" :key="item._id" @click="bindViewTap(item.productName, item.productImage)">
      <img class="cover" :src="item.productImage" alt="">
      <div class="info">
        <p>{{item.productName}}</p>
        <p>{{item.salePrice}}</p>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
// import { getGoodsList, baseUrl } from '../../api/api'
export default {
  data () {
    return {
      goods: ''
    }
  },
  created () {
    console.log('get goods list')
    // let that = this
    // getGoodsList().then(function (res) {
    //   that.goods = that.formatData(res.data.result.list)
    // })
  },
  onPullDownRefresh () {
    console.log('onPullDownRefresh')
  },
  onReachBottom () {
    console.log('onReachBottom')
  },
  methods: {
    formatData (list) {
      list.forEach(item => {
        // item.productImage = `${baseUrl}/static/${item.productImage}`
      })
      return list
    },
    bindViewTap (id, img) {
      const url = `../detail/main?id=${id}&img=${img}`
      wx.navigateTo({ url })
    }
  }
}
</script>

<style scoped>
  .goods {
    background-color: #f8f8f8
  }
  .item {
    background-color: #ffffff;
    padding: 20px 10px;
    display: flex;
    border-bottom: 1px solid #f8f8f8;
  }
  .item:last-child {
    border-bottom: none;
  }
  .cover {
    width: 60px;
    height: 60px;
  }
  .info {
    margin-left: 20px;
  }
</style>
