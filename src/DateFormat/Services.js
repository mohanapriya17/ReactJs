const fetchDate = (callback) => {
    let usersObj = [];

    fetch("http://localhost:8090/swagger-ui.html").then(
            res => {
                console.log(res.json()
                    .then(endRes => { callback(endRes); return endRes }))

            })
        .catch(err => console.log(err))

}