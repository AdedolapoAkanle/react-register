
const url = "";

export const setAPI = async (page, data = {}) => { 
	const contentType = "application/json";
	const body = JSON.stringify(data);

	const result = await fetch(url("index.php", page), {
		method: "POST",
		headers: {
			Accept: "application/json",
			"Content-type": contentType, 
		},
		body: body,
	});

	const res = await result.json();

	return res;
};