import { Context } from '@nuxt/types'

export default function({ store, redirect }: Context) {
  if (store.state.auth.user != null) {
    if (!store.state.auth.user.isAdmin) {
      redirect('/')
    }
  } else {
    redirect('/')
  }
}
