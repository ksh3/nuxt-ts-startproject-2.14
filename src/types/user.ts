import firebase from '~/plugins/firebase'

export interface User extends firebase.UserInfo {
  isAdmin: boolean
}
