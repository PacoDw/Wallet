import Api from './api';

function OutcomeApi(){}

OutcomeApi.getOutcomeFixed = function( id ) {

    return Promise.resolve (
        Api
            .get(`/outcome/getOutcomeFixed/${id}`)

            .then( response => {
                console.log('API RESPONSE: ', response);
                if (response.ok)
                    return response.json();
                else
                    return Promise.reject(response.json);
            })
    )
}

OutcomeApi.getOutcomeIncidental = function( id ) {

    return Promise.resolve (
        Api
            .get(`/outcome/getOutcomeIncidental/${id}`)

            .then( response => {
                console.log('API RESPONSE: ', response);
                if (response.ok)
                    return response.json();
                else
                    return Promise.reject(response.json);
            })
    )
}

OutcomeApi.addOutcome = function( dataForm, id  ) {

    return Promise.resolve (
        Api
            .post(`/outcome/addOutcome/${id}`, dataForm)

            .then( response => {
                if (response.ok)
                    return response.json();
                else
                    return Promise.reject(response.json);
            })
    )
}

OutcomeApi.getEditOutcome = function( id ) {

    return Promise.resolve (
        Api
            .get(`/outcome/getOutcome/${id}`)

            .then( response => {
                console.log('API RESPONSE: ', response);
                if (response.ok)
                    return response.json();
                else
                    return Promise.reject(response.json);
            })
    )
}

export default OutcomeApi;