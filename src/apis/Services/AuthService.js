import _axios from "../AxiosConfig";

export class AuthServices {
  static login(values) {
    return _axios.post("/TokenAuth/Authenticate", {
      ...values,
      isFromExternalApplication: true,
    });
  }

}
