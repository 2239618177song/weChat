export default {
  changeCity (state, city) {
    state.city = city
    try {
      localStorage.city = city // 将选择的城市存储到本地
    } catch (e) {
      console.log(e)
    }
  }
}
