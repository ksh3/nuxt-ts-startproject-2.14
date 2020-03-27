import { ActionTree, MutationTree, Store } from 'vuex'
import { ActionContext } from 'vuex/types'
import { Context } from '@nuxt/types'
import { vuexfireMutations } from 'vuexfire'
import jwtDecode from 'jwt-decode'
import Cookies from 'universal-cookie'

import { initialiseStores } from '~/utils/store-accessor'

const initializer = (store: Store<any>) => initialiseStores(store)
export const plugins = [initializer]

export const state = () => ({})
export type RootState = ReturnType<typeof state>

export const mutations: MutationTree<RootState> = {
  ...vuexfireMutations
}

export * from '~/utils/store-accessor'

export const actions: ActionTree<any, any> = {
  nuxtServerInit: async (
    context: ActionContext<RootState, RootState>,
    server: Context
  ) => {
    initialiseStores(server.store)
    const cookie = new Cookies(server.req.headers.cookie)
    const token = cookie.get('access_token')
    if (token != undefined) {
      try {
        const decodedToken: any = jwtDecode(token)
        if (decodedToken) {
          await server.store.dispatch('auth/bindRef', decodedToken.user_id)
        }
      } catch (error) {
        console.log(error)
      }
    }
  }
}
