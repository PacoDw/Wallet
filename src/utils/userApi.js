import Api from './api';

function UserApi(){}


UserApi.getUser = function() {

    return Promise.resolve (
        Api
            .get('/user/getUser')

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
            .post('/user/addUser', dataForm)

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
            .delete(`/user/deleteUser/${id}`)            
        )
}

export default UserApi;