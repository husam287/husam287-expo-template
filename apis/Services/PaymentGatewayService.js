// import { MFCurrencyISO, MFCustomerAddress, MFExecutePaymentRequest, MFInitiatePayment, MFLanguage, MFMobileCountryCodeISO, MFPaymentRequest, MFProduct } from "myfatoorah-reactnative";
// import i18n from "../../assets/i18n";

// export class PaymentGatewayService {
//     static initPayment(amount) {
//         let initiateRequest = new MFInitiatePayment(amount, MFCurrencyISO.SAUDIARABIA_SAR)
//         return new Promise((resolve, reject) => {
//             MFPaymentRequest.sharedInstance.initiatePayment(
//                 initiateRequest,
//                 i18n.t('lang') === 'en' ? MFLanguage.ENGLISH : MFLanguage.ARABIC,
//                 (response) => {
//                     if (response.getError()) {
//                         reject(response.getError())
//                     }
//                     else {
//                         let payMethods = response.getPaymentMethods()
//                         payMethods = payMethods?.map(item => {
//                             let isEnglish = i18n.t('lang') === 'en'
//                             return {
//                                 displayText: isEnglish ? item?.PaymentMethodEn : item?.PaymentMethodAr,
//                                 imageUrl: item?.ImageUrl,
//                                 totalAmount: item?.TotalAmount,
//                                 value: item?.PaymentMethodId
//                             }
//                         })
//                         resolve(payMethods)
//                     }
//                 })
//         });
//     }

//     static executeResquestJson(paymentMethodId, sdkConfigurations) {
//         console.log(sdkConfigurations)
//         let request = new MFExecutePaymentRequest(parseFloat(sdkConfigurations?.invoiceValue), paymentMethodId);
//         request.customerName = sdkConfigurations?.customerName
//         request.userDefinedField = sdkConfigurations?.userDefinedField;
//         request.customerEmail = sdkConfigurations?.customerEmail;
//         request.customerMobile = sdkConfigurations?.customerMobile;
//         request.customerCivilId = sdkConfigurations?.customerCivilId;
//         request.customerReference = sdkConfigurations?.customerReference;
//         request.mobileCountryCode = sdkConfigurations?.mobileCountryCode;
//         request.displayCurrencyIso = sdkConfigurations?.displayCurrencyIso;
//         request.language = sdkConfigurations?.language;
//         var productList = []
//         sdkConfigurations?.invoiceItems?.forEach(item => {
//             var product = new MFProduct(item?.itemName, item?.unitPrice, item?.quantity)
//             productList.push(product)
//         })
//         request.invoiceItems = productList

//         return request;
//     }

//     static executePayment(navigation, paymentMethodId, sdkConfigurations) {
//         return new Promise((resolve, reject) => {
//             let request = this.executeResquestJson(paymentMethodId, sdkConfigurations);
//             MFPaymentRequest.sharedInstance.executePayment(navigation, request, i18n.t('lang') === 'en' ? MFLanguage.ENGLISH : MFLanguage.ARABIC, (response) => {
//                 if (response.getError()) {
//                     if (response.getError().error === "User clicked cancel button") return
//                     reject({ message: response.getError().error });
//                 }
//                 else {
//                     var bodyString = response.getBodyString();
//                     var invoiceId = response.getInvoiceId();
//                     var paymentStatusResponse = response.getBodyJson().Data;
//                     resolve({ bodyString, invoiceId, paymentStatusResponse })
//                 }
//             });
//         })
//     }
// }
