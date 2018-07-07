let onGetForm = (formulario, callback) => {
    const dataForm = {};
    let key = '';
    let value = '';
    
    for (let i = 0; i < formulario.elements.length; i++) {
        
        if (formulario.elements[i].tagName === 'SELECT') {
            key = 'selected';
            value = {
                // 'id': formulario.elements[i].selectedOptions[0].attributes['id'].nodeValue,
                // 'value': formulario.elements[i].selectedOptions[0.nodeValue,
            };
        }
        else if (formulario.elements[i].tagName === 'INPUT') {
            key = formulario.elements[i].attributes['name'].nodeValue;
            value = formulario.elements[i].attributes['value'].nodeValue;
        }
        dataForm[key] = value;
    }
    return callback(dataForm);
}
export default onGetForm;