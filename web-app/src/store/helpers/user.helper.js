import { setUser } from "../actions/auth.action";

export const userHelper = (logged, dispatch)=>{
    if (logged) {
        dispatch(setUser())
    }
}