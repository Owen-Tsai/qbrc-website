import { reactive } from 'vue'

export type UserInfo = {
  id?: number
  username?: string
  type?: number
  state: boolean
}

// eslint-disable-next-line
export const userInfo = reactive<UserInfo>({
  state: false,
})
