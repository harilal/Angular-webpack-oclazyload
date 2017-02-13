'use strict';

class ApiService {
    constructor(Restangular) {
        this.Restangular = Restangular;
    }
    loginModule() {
        let vm = this;

        return {
            forgotPwd(userName) {
                vm.Restangular.all("forgotPassword").customGET("", {
                    "userName": userName
                });

            },
            resetPwd(oResetCollection) {

                vm.Restangular.one("resetPassword").customPUT(oResetCollection);


            },
            submit(loginData) {

                let date_encoded = $.param(loginData);


                return vm.Restangular.all("oauth2").all("token/").customPOST(date_encoded, undefined, undefined, { 'Content-Type': "application/x-www-form-urlencoded; charset=UTF-8" });

            },
            logout(logoutData) {
                let data_encoded = $.param(logoutData);
                return vm.Restangular.all("oauth2").all("revoke_token/").customPOST(data_encoded, undefined, undefined, { 'Content-Type': "application/x-www-form-urlencoded; charset=UTF-8" });

            }

        }

    }

    userModule() {
        let vm = this;

        return {
            getUserDetails(contactId) {
                return vm.Restangular.one("contacts", contactId).get();

            },
            saveUserDetails(userDetails, contactId) {
                return vm.Restangular.one('contacts', contactId).customPUT(userDetails);
            }

        }

    }


}

export default angular
    .module('common.api.service', [])
    .service('apiService', ['Restangular', ApiService]);
