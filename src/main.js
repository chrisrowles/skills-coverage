import 'alpinejs'
import './styles/main.css'

const url = "http://localhost:8080/api"
const api = {}

api.fetchUsers = async () => {
    const response = await fetch(url + '/users')
    return response.json()
}

api.fetchUser = async (id) => {
    const response = await fetch(url + '/users/' + id)
    return response.json()
}

api.createUser = async (name) => {
    try {
        const response = await fetch(url + '/users', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: {
                name: name
            }
        })

        return response.json()
    } catch(err) {
        return err
    }
}

api.updateUser = async (id, name) => {
    try {
        const response = await fetch(url + '/users/' + id, {
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: {
                name: name
            }
        })

        return response.json()
    } catch(err) {
        return err
    }
}

window._api = api