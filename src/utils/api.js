function Api(){}

Api.headers = async function (contentType) {
	return {
		'Content-Type': contentType || 'application/json'
	};
};

Api.xhr = async function (route, data, verb) {
	const url = `http://localhost:3000${route}`
	const headers = await this.headers();

	const options = {
		method: verb,
		headers: headers,
		body: data ? JSON.stringify(data) : null
	};
	return fetch(url, options);
};



Api.get = function (route) {
	return this.xhr(route, null, 'GET');
}

Api.post = function (route, data) {
	return this.xhr(route, data, 'POST');
}

Api.put = function (route, data) {
	return this.xhr(route, data, 'PUT');
}

Api.delete = function (route, data) {
	return this.xhr(route, data, 'DELETE');
}

Api.parseJSON = function (response) {
  return new Promise((resolve) => response.json()
    .then((json) => resolve({
      status: response.status,
      ok: response.ok,
      json,
    })));
}

export default Api;