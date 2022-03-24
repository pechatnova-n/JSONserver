export class UserService {

    //--- main methods

    getData(url) {
        return fetch (url)
            .then(res => {
                return res.json()
            })
            .catch(error => {
                console.log(error)
                const table = document.querySelector('.table-responsive');
                const el = document.createElement('p');
                table.append(el);
                el.textContent = 'Произошла ошибка, данных нет!';
            })
    }


    sendData(url, obj) {
        return fetch (url, obj)
            .then(res => res.json())
            .catch(error => {
                console.log(error)
                const table = document.querySelector('.table-responsive');
                const el = document.createElement('p');
                table.append(el);
                el.textContent = 'Произошла ошибка, данных нет!';
            })
    }


    //---- methods for get data

    getUsers() {
            return userService.getData(`http://localhost:4545/users`).then(res =>  res)

    }

    getUser(id) {
        return userService.getData(`http://localhost:4545/users/${id}`).then(res => res)
    }

    filterUsers(filterOption) {
        return userService.getData(`http://localhost:4545/users?${filterOption}=true`).then(res => res)
    }

    getSortUsers(sortOptions) {
        return userService.getData(`http://localhost:4545/users?_sort=${sortOptions.name}&_order=${sortOptions.value}`).then(res => res)
       }

    getSearchUsers(str) {
        return userService.getData(`http://localhost:4545/users?name_like=${str}`).then(res => res)
    }


    //------ methods for send data

    addUser(user) {
        return userService.sendData(`http://localhost:4545/users`, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(user)
        }).then(res => res)
    }

    removeUser(id) {
        return userService.sendData(`http://localhost:4545/users/${id}`, {
            method: 'DELETE'
        }).then(res => res)
    }

    changeUser(id, data) {
        return userService.sendData(`http://localhost:4545/users/${id}`, {
            method: 'PATCH',
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json"
            }
        }).then(res => res)
    }

    editUser(id, user) {
        return userService.sendData(`http://localhost:4545/users/${id}`, {
            method: 'PUT',
            body: JSON.stringify(user),
            headers: {
                "Content-Type": "application/json"
            }
        }).then(res => res)
    }






    /*getUsers() {
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
    }*/


}