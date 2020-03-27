import { firestore } from 'firebase'
import { ActionContext } from 'vuex'
import { FirestoreOptions } from '@posva/vuefire-core'
import { firestoreAction } from 'vuexfire'

// FirestoreActionContext wasn't exported, so forked it
// cf. https://github.com/vuejs/vuefire/blob/f90470babb2a10574a561c3d2924a6f8435c089d/packages/vuexfire/src/firestore.ts
export interface FirestoreActionContext<S, R> extends ActionContext<S, R> {
  bindFirestoreRef(
    key: string,
    ref: firestore.Query | firestore.CollectionReference,
    options?: FirestoreOptions
  ): Promise<firestore.DocumentData[]>
  bindFirestoreRef(
    key: string,
    ref: firestore.DocumentReference,
    options?: FirestoreOptions
  ): Promise<firestore.DocumentData>
  unbindFirestoreRef(key: string): void
}

export function FirestoreAction() {
  return function(_target: any, _key: string, descriptor: PropertyDescriptor) {
    const delegate: Function = descriptor.value
    descriptor.value = function(payload: any) {
      const action = firestoreAction(context => {
        const thisObj = { context }
        return delegate.call(thisObj, payload)
      }) as Function

      // @ts-ignore
      return action(this.context)
    }
  }
}
