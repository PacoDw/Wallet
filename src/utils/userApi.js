import Api from './api';

function UserApi(){}

UserApi.loginUser = function(dataForm) {
 
    return Promise.resolve (
        Api
            .post('/users/loginUser', dataForm)

            .then( response => {
                console.log('API RESPONSE: ', response);
                if (response.ok)
                    return response.json();
                else
                    return Promise.reject(response.json);
            })
    )
}

UserApi.getUser = function( id ) {

    return Promise.resolve (
        Api
            .get(`/users/user/${id}`)

            .then( response => {
                console.log('API RESPONSE GET USER: ', response);
                if (response.ok)
                    return response.json();
                else
                    return Promise.reject(response.json);
            })
    )
}

UserApi.addUser = function(dataForm) {

    return Promise.resolve (
        Api
            .post('/users/addUser', dataForm)

            .then( response => {
                console.log('API RESPONSE: ', response);
                if (response.ok)
                    return response.json();
                else
                    return Promise.reject(response.json);
            })
    )
}

UserApi.deleteUser = function( id ) {

    return Promise.resolve( 
        Api
            .delete(`/users/deleteUser/${id}`)

            .then( response => {
                console.log('API RESPONSE DELETE: ', response);
                if (response.ok)
                    return response.json();
                else
                    return Promise.reject(response.json);
            })
        )
}

export default UserApi;