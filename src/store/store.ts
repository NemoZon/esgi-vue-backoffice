import { reactive } from "vue";
import { user, type UserDTO } from "./user";

const state = reactive(user)

export const store = {
    get: <K extends keyof UserDTO>(prop: K) => {
        return state[prop]
    },
    set:  <K extends keyof UserDTO>(prop: K, value: UserDTO[K]) => {
        state[prop] = value
    }
}