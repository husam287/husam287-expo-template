import AsyncStorage from "@react-native-async-storage/async-storage";
import { store } from "../redux";
import { logout } from "../redux/authReducer";


export const logoutHandler = async () => {
    AsyncStorage.removeItem("token");
    store.dispatch(logout())
}