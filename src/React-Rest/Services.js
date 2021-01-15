const fetchUsers = (callback) => {
    let usersObj = [];

    fetch("http://localhost:15000/SpringMVCHibernateCRUD/Employee/fetchEmployee").then(
            res => {
                console.log(res.json()
                    .then(endRes => { callback(endRes); return endRes }))

            })
        .catch(err => console.log(err))

}
const deleteUser = (empId) => {
    const apiUrl = `http://localhost:15000/SpringMVCHibernateCRUD/Employee/deleteEmployee/${empId}`;
    console.log(empId);
    try {
        fetch(apiUrl, {
            method: "DELETE"
        }).then(data => {
            if (data.status > 400) {
                alert("Data Cannot be deleted")
            } else {
                alert("Data Successfully deleted")

            }
            return data.json();
        }).then(data => alert("data not Successfully deleted"));
    } catch (err) {
        console.log(err);
    }
}
const deleteUserByName = (empName) => {
    const apiUrl = `http://localhost:15000/SpringMVCHibernateCRUD/deleteEmployeeByName/${empName}`;
    console.log(empName);
    try {
        fetch(apiUrl, {
            method: "DELETE"
        }).then(data => {
            alert("Data Successfully deleted")
            return data.json();
        }).then(data => alert("data Successfully deleted"));
    } catch (err) {
        console.log(err);
    }
}
const insertUser = (employeedetails) => {
    fetch("http://localhost:15000/SpringMVCHibernateCRUD/Employee/saveEmployee", {
        method: 'POST',
        body: JSON.stringify(employeedetails),
        headers: {
            'content-type': 'application/json'
        }
    }).then(result => result.json().then(data => console.log(data))).catch(err => console.log(err))
}

const updateUser = (employeedetails, callback) => {
    fetch("http://localhost:15000/SpringMVCHibernateCRUD/Employee/updateEmployee", {
        method: 'PUT',
        body: JSON.stringify(employeedetails),
        headers: {
            'content-type': 'application/json'
        }
    }).then(result => result.json().then(data => callback())).catch(err => console.log(err))
}
export { fetchUsers, deleteUser, deleteUserByName, insertUser, updateUser }