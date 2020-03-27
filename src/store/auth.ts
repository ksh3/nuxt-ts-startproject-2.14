import { MutationTree, Store } from 'vuex'
import { Module, VuexModule, Action } from 'vuex-module-decorators'
import Cookies from 'universal-cookie'

import {
  FirestoreAction,
  FirestoreActionContext
} from '~/decorators/vuexfire-decorator'
import firebase from '~/plugins/firebase'
import { User } from '~/types'

const db = firebase.firestore()

export interface AuthState {
  user: User | null
}

@Module({ stateFactory: true, namespaced: true, name: 'auth' })
export default class AuthModule extends VuexModule implements AuthState {
  user: User | null = null

  @Action({ rawError: true })
  @FirestoreAction()
  async bindRef(uid: string) {
    const { bindFirestoreRef } = this.context as FirestoreActionContext<
      any,
      any
    >
    await bindFirestoreRef('user', db.doc(`users/${uid}`))
  }

  @Action({ rawError: true })
  @FirestoreAction()
  unbindRef() {
    const { unbindFirestoreRef } = this.context as FirestoreActionContext<
      any,
      any
    >
    unbindFirestoreRef('user')
  }
}
