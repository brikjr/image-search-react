import axios from "axios";

//create a custome clients
export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID GbXCBGXcVANYFzbNy6myL4k1SosgbPAaSdEKZb2PASc'
    }
})