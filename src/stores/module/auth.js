// @ts-check
import { defineStore } from 'pinia'

export default defineStore('auth', {
  state: () => {
    return {
      token: null, // 用户token数据
      routes: null // 用户授权的 router
    }
  },
  persist: true // 配置持久化
})
