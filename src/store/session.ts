import { defineStore } from "pinia";
import type { User } from "./user";

export interface SessionState {
    user: User | null,
    isLogin: boolean
}

export interface SessionActions {
    login: (payload: {user: User}) => void,
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
        login: function(payload: {user: User}) {
            this.user = payload.user
            this.isLogin = true
        },
        logout: function() {
            this.user = null
            this.isLogin = false
        }
    }
})