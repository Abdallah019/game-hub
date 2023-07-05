import axios from "axios";

export default axios.create({
    baseURL:"https://api.rawg.io/api",
    params:{
        key:"7aadd21f6f5343acad8ad0d2010e10ccz"
    }
})