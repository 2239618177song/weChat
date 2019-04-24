<template>
  <div class="list">
    <div class="area">
      <div class="title">当前城市</div>
      <div>{{city}}</div>
    </div>
    <div class="area">
      <div class="title">热门城市</div>
      <ul>
        <li v-for="item in hotCities" :key="item.id" @click="handleCity(item.name)">{{item.name}}</li>
      </ul>
    </div>
  </div>
</template>
<script>
import axios from 'axios'
import { mapState, mapMutations } from 'vuex'
export default {
  name: 'CityHome',
  data () {
    return {
      hotCities: [],
      currentCity: '上海'
    }
  },
  computed: {
    ...mapState(['city'])
  },
  mounted () {
    this.getCity()
  },
  methods: {
    getCity () {
      var _this = this
      axios.get('city/city.json').then(res => {
        var data = res.data.data
        _this.hotCities = data.hotCities
      })
    },
    handleCity (name) {
      this.$router.push('/')
      // this.$store.commit('changeCity', name)
      this.changeCity(name)
    },
    ...mapMutations(['changeCity'])
  }
}
</script>
<style scoped>
.list{
  background:#eeeeee;
}
.area{
  margin-bottom:10px;
  background:#ffffff;
}
</style>
