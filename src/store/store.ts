import { reactive } from "vue";
import { user, type User } from "./user";

const state = reactive(user)

export const store = {
    get: <K extends keyof User>(prop: K) => {
        return state[prop]
    },
    set:  <K extends keyof User>(prop: K, value: User[K]) => {
        state[prop] = value
    }
}