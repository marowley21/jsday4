import { apiClientNoAuth } from "./client.js"

const endpoint =  '/api/category'

const get = (cancelToken) =>{
    let error
    let categories

    const response = apiClientNoAuth(cancelToken).get(endpoint)
    if (response.ok){
        categories = response.data.categories
    }else{
        error="An Unexpected error occured"
    }

    return {
        error,
        categories
    }
}

const post + (cancelToken) =>{
    let error
    
    const response = await apiClientTokenAuth(token, cancelToken).post(endpoint,{name: catName})
    if (!response.ok){
        error = "An Unexpected Error Occurred.  Please Try Again Later"  
    
    }

    return {
        error
    }
}

const apiCategory={
    get,
    post
}