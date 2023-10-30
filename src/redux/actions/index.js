import axios from "axios"

export const ElectronicProductAPi = (query) => async (dispatch) => {

    try {
        const response = await axios.get(`https://api.pujakaitem.com/api/products`);

        dispatch({
            type: 'PRODUCT_API_ELE',
            payload: response.data,
        })

    } catch (error) {
        console.log(error)
    }
}