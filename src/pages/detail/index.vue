<template>
  <div v-if="movie.images" class="movie-wrapper">
    <div class="header">
      <img class="image" :src="movie.images.large" alt="">
      <div class="info">
        <div class="title">{{movie.title}}</div>
        <div class="rate">评分：{{movie.rating.average}}分</div>
        <div class="type">
            类型：<span v-for="type in movie.genres" :key="type.id">{{type}}、</span>
        </div>
        <div class="cast">
            主演：<span v-for="cast in movie.casts" :key="cast.id">{{cast.name}}&nbsp;</span>
        </div>
      </div>
      <div class="background">
        <img :src="movie.images.large">
      </div>
    </div>
    <div class="content-wrapper">
      <div class="summary">
        {{movie.summary}}
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import { getDetail } from '../../api/api'
export default {
  data () {
    return {
      movie: {}
    }
  },
  mounted () {
    const id = this.$root.$mp.query.id
    this._getDetail(id)
  },
  onUnload () {
    this.movie = {}
  },
  onShareAppMessage: function () {
    return {
      title: this.name,
      path: './main'
    }
  },
  methods: {
    _getDetail (id) {
      getDetail(id).then(res => {
        this.movie = res
      })
    }
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
    .movie-wrapper
        position relative
        background-color: #f8f8f8
        z-index: 0
        height: 100%
        .header
            position: relative
            display: flex
            padding: 45px 10px 20px 20px
            background-color: rgba(7, 17, 27, 0.1)
            color: #fff
            .image
                flex: 0 0 96px
                width 96px
                height 150px
                border: 2px solid #fff
            .info
                flex: 1
                margin-left: 10px
                height: 150px
                overflow: hidden
                text-overflow: ellipsis
                div
                    width: 100%
                    font-size: 12px
                    line-height: 20px
                .title
                    font-size: 18px
                    margin-bottom: 10px
            .background
                position: absolute
                left: 0
                top: 0
                width: 100%
                height: 100%
                overflow: hidden
                filter: blur(10px)
                z-index: -10
                img
                    width: 100%
                    height: 100%
        .summary
            margin: 10px
            padding: 10px
            font-size: 14px
            background-color: #ffffff
            color: block
</style>
