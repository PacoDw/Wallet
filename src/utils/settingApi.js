import Api from './api';

function SettingApi(){}

SettingApi.emptyWallet = function( id ) {
 
    return Promise.resolve (
        Api
            .delete(`/settings/resetApp/${id}`)
            .then( response => {
                if (response.ok)
                    return response.json();
                else
                    return Promise.reject(response.json);
            })
    )
}

export default SettingApi;