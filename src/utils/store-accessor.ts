import { Store } from 'vuex'
import { getModule } from 'vuex-module-decorators'
import AuthModule from '~/store/auth'

// eslint-disable-next-line import/no-mutable-exports
let authStore: AuthModule

function initialiseStores(store: Store<any>): void {
  authStore = getModule(AuthModule, store)
}

export { initialiseStores, authStore, articleStore, contactStore }
