import axios from 'axios'

const api = axios.create({
    baseURL: '',
})

api.interceptors.request.use(
    async (config) => {
        config.headers['Content-Type'] = 'application/json'

        return config
    },
    (error) => {
        Promise.reject(error)
    }
)

api.interceptors.response.use(
    (response) => {
        return response.data
    },
    (error) => {
        return Promise.reject(error)
    }
)

export default api
// import {createFetch} from '@vueuse/core'
//
// const api = createFetch({
//     baseUrl: 'https://api.sportmonks.com',
//     options: {
//         async beforeFetch({options}) {
//             options.headers['Access-Control-Allow-Origin'] = '*';
//             options.headers['Content-Type'] = 'application/json';
//             options.headers['Authorization'] = 'Bearer ' + 'vagFpwbjKAA2BYaGPGoD9REo6d22TTltuGHd10N4wBXIzBfeNgf0HxhHW2Sb';
//
//             return {options}
//         },
//     },
//     fetchOptions: {
//         mode: 'cors',
//     },
// })
//
// export default api
