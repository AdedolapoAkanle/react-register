import { BIO_DATA } from "./types"

export const BioDataAction = (param) => {
    return {
        type: BIO_DATA,
        payload: param
    }
}

