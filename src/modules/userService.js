export class UserService {
    getUsers() {
        return fetch (`http://localhost:4545/users`).then(response => response.json());
    }

    addUser(user) {
        return fetch (`http://localhost:4545/users`, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(user)
        }).then(response => response.json());
    }

    removeUser(id) {
        return fetch (`http://localhost:4545/users/${id}`, {
            method: 'DELETE'
        }).then(response => response.json());
    }

    changeUser(id, data) {
        return fetch (`http://localhost:4545/users/${id}`, {
            method: 'PATCH',
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json"
            }
        }).then(response => response.json());
    }

    getUser(id) {
        return fetch (`http://localhost:4545/users/${id}`).then(response => response.json());
    }

    editUser(id, user) {
        return fetch (`http://localhost:4545/users/${id}`, {
            method: 'PUT',
            body: JSON.stringify(user),
            headers: {
                "Content-Type": "application/json"
            }
        }).then(response => response.json());
    }

    filterUsers(filterOption) {
        return fetch (`http://localhost:4545/users?${filterOption}=true`).then(response => response.json());
    }

    getSortUsers(sortOptions) {
        return fetch (`http://localhost:4545/users?_sort=${sortOptions.name}&_order=${sortOptions.value}`).then(response => response.json());
    }

    getSearchUsers(str) {
        return fetch (`http://localhost:4545/users?name_like=${str}`).then(response => response.json());
    }


}