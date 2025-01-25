import { defineStore } from "pinia";
import type { UserDTO } from "./user";

export interface SessionState {
    user: UserDTO | null,
    isLogin: boolean
}

export interface SessionActions {
    login: (payload: {user: UserDTO}) => void,
    logout: () => void
}


export const useSession = defineStore<'session', SessionState, {}, SessionActions>('session', {
    persist: [
        {
            key: 'session',
            storage: localStorage,
        }
    ],
    state: (): SessionState => ({ user: null, isLogin: false }),
    actions: {
        login: function(payload: {user: UserDTO}) {
            this.user = payload.user
            this.isLogin = true
        },
        logout: function() {
            this.user = null
            this.isLogin = false
        }
    }
})