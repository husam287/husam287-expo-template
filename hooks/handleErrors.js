import { store } from '../redux'
import { setDangerToast } from '../redux/appReducer'

export default function HandleErrors(err) {
    const showErrorToast = (msg) => {
        store.dispatch(
            setDangerToast({
                message: msg,
            })
        )
    }

    console.log("Catched Error", err)
    if (err?.error?.details) {
        showErrorToast(err?.error?.details)
    } else if (err?.error?.message) {
        showErrorToast(err?.error?.message)
    } else if (err?.message) {
        showErrorToast(err?.message)
    } else {
        showErrorToast("UNEXPECTED_ERROR")
    }
}