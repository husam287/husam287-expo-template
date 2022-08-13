import { store } from '../redux'
import { setSuccessToast } from '../redux/appReducer'

export default function showSuccessMsg(msg) {
    store.dispatch(
        setSuccessToast({
            message: msg,
        })
    )
    return null
}