import Api from './api';

function IncomeApi(){}

IncomeApi.getIncomeFixed = function( id ) {

    return Promise.resolve (
        Api
            .get(`/income/getIncomeFixed/${id}`)

            .then( response => {
                console.log('API RESPONSE: ', response);
                if (response.ok)
                    return response.json();
                else
                    return Promise.reject(response.json);
            })
    )
}

IncomeApi.getIncomeIncidental = function( id ) {

    return Promise.resolve (
        Api
            .get(`/income/getIncomeIncidental/${id}`)

            .then( response => {
                console.log('API RESPONSE: ', response);
                if (response.ok)
                    return response.json();
                else
                    return Promise.reject(response.json);
            })
    )
}

IncomeApi.addIncome = function(dataForm) {

    return Promise.resolve (
        Api
            .post('/income/addIncome', dataForm)

            .then( response => {
                console.log('API RESPONSE: ', response);
                if (response.ok)
                    return response.json();
                else
                    return Promise.reject(response.json);
            })
    )
}


export default IncomeApi;