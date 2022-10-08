
const url = "http://localhost:8080/";

export const getApi=(page)=>{

	fetch(url+page).then(response=> response.json()).then(data=> console.log(data));
}

