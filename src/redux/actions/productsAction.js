import axios from "axios";
import * as actionTypes from "../constants/productsConstant.js"

const URL="http://localhost:9000";
export const getProducts=()=>async(dispatch)=>{
    try{
    const{data}= await axios.get(`${URL}/products`)
   
    dispatch({type:actionTypes.GET_PRODUCTS_SUCCESS,payload:data})
    }
    catch(err){
        dispatch({type:actionTypes.GET_PRODUCTS_FAIL,payload:err.message})
       
    }
}

export const getProductDetails=(id)=>async(dispatch)=>{
    try{
        dispatch({type:actionTypes.GET_PRODUCT_DETAILS_REQUEST})
        const{data}= await axios.get(`${URL}/product/${id}`)
        dispatch({type:actionTypes.GET_PRODUCT_DETAILS_SUCCESS,payload:data})
    }
    catch(err){
        dispatch({type:actionTypes.GET_PRODUCT_DETAILS_FAIL,payload:err.message})
    }
}