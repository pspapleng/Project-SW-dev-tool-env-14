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
    }
}

export default auth