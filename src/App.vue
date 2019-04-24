<template>
  <div id="app">
    <img src="./assets/logo.png">
    <router-view/>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'App',
  mounted () {
    this.getToken()
  },
  methods: {
    getToken () {
      let grantType = 'client_credential'
      let appid = 'wx572cd97544c5dfea'
      let secret = '3bca7c37af5e40c073807026d7bedac5'
      let url = '/api/cgi-bin/token?grant_type=' + grantType + '&appid=' + appid + '&secret=' + secret
      axios.get(url).then(res => {
        console.log(res)
      }).catch(err => {
        console.log(err)
      })
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
