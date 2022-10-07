export const empty = (arg) => {
	return arg === "" || arg === null || arg == null || arg.length === 0 ? true : false;
};

export const emptyObject = (arg) => {
	if (Object.keys(arg).length === 0 && arg.constructor === Object) {
		return true;
	}
	return false;
};

export const isString = (arg) => {
	return typeof arg !== "string" ? true : false;
};

export const strlen = (arg) => {
	let i = typeof arg === "number" ? arg.toString() : arg;
	return i.length;
};

export const ucFirst = (arg) => {
	return arg.charAt(0).toUpperCase() + arg.slice(1);
};

export const substr = (str, position = 0, num = 1) => {
	return str.substring(position, num);
};

export const strToLower = (arg) => {
	return arg.toLowerCase();
};

export const ucWord = (str) => {
	let strArr = str.split(" ");
	let arr = "";

	for (let i = 0; i < strArr.length; i++) {
		if (i === strlen(strArr) - 1) {
			arr = arr.concat(ucFirst(strArr[i]));
		} else {
			arr = arr.concat(ucFirst(strArr[i])) + " ";
		}
	}
	return arr;
};

  

export const explode = (data, deliminator) => {
	return data.split(deliminator);
};

export const implode = (data, deliminator) => {
	return data.join(deliminator);
};

export const noZeroDivision = (arg1, arg2) => {
	return arg1 > 0 && arg2 > 0 ? arg1 / arg2 : 0;
};

export const isPercentage = (per) => {
	return noZeroDivision(per, 100);
};

export const percentValue = (per, amount) => {
	return amount * isPercentage(per);
};


export const numberRandomizer = (num) => {
	return Math.floor(Math.random() * num);
};

export const decimal = (value, num) => {
	return value.toFixed(num);
};

export const trims = (v) => {
	return v.trim();
};

export const removeApostrophe = (v) => {
	return v.replaceAll("'", "");
};

export const strShuffle = (string) => {
	let parts = string.split("");
	for (let i = parts.length; i > 0; ) {
		let random = parseInt(Math.random() * i);
		let temp = parts[--i];
		parts[i] = parts[random];
		parts[random] = temp;
	}
	return parts.join("");
};