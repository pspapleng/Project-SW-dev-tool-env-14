import request from '../request'

const auth = {
    getUser: async (id) => {
        try {
            const response = request.get(`/getUser?id=${id}`)
            return response
        }
        catch (e) {
            console.log(e)
        }
    },
    getAllServiceCenter: async (id) => {
        try {
            const response = request.get(`/getUser?id=${id}`)
            return response
        }
        catch (e) {
            console.log(e)
        }
    },
    getServiceCenterByLocation: async (lat, lon) => {
        try{
            const response = request.get(`/service_center/location?lat=${lat}&lon=${lon}`)
            return response
        }
        catch(e) {
            console.log(e)
        }
    },

    getServiceCenterById: async (id) => {
        try{
            const response = request.get(`/service_center/${id}`)
            return response
        }
        catch(e) {
            console.log(e)
        }
    }
}

export default auth