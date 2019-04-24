<template>
  <div id="app">
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
        // console.log(res)
      }).catch(err => {
        console.log(err)
      })
    }
  }
}
</script>

<style>
body{
  padding:0;
  margin:0;
}
</style>
