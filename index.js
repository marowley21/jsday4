import { getUser } from './api/apiBasicAuth.js'
import { CancelToken } from 'apisauce'
import apiCat from './api/apiCategory.js'
const source = CancelToken.source()
//source.token return the cancel token

const login = async (cancelToken) => {
    const { user, error} = await getUser('kevinb@codingtemple.com', '1234', cancelToken)
    console.log(error?error:"it works")
    console.log(user?user:"bad login")
}

//login(source.token)

const cat_get = (cancelToken) => {
    const {error, categories} = await apiCat.get(cancelToken)
    console.log(error)
    console.log(categories)
}
//cat_get(source.token)

const cat_post = async (cancelToken) =>{
    const {error} = await apiCat.post(token,"Calming" source.token)
    console.log(error)
}
cat_post(source.token)