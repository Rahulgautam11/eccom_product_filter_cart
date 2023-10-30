import axios from "axios"

export const ElectronicProductAPi = (query) => async (dispatch) => {

    try {
        const response = await axios.get(`https://api.pujakaitem.com/api/products`);
        const result = response.data.filter((elm) => elm.company.toLowerCase().includes(query))

        dispatch({
            type: 'PRODUCT_API_ELE',
            payload: result,
        })

    } catch (error) {
        console.log(error)
    }
}