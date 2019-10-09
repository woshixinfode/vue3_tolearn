import { getAppName } from '@/api/app'

const actions = {
  // updateAppName ({ commit }) {
  //   getAppName().then(res => {
  //     commit('SET_APP_NAME', res.info.appName)
  //     console.log(res)
  //   }).catch(err => {
  //     console.log(err)
  //   })
  // }
  // es8 处理方式
  async updateAppName ({ commit }) {
    // await
    try {
      const { info: { appName } } = await getAppName()
      commit('SET_APP_NAME', appName)
    } catch (err) {
      console.log(err)
    }
  }
}
export default actions
