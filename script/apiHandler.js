export async function request(url, method, data) {
    switch (method) {
        case "POST":
            return postRequestHandler(url, data);
        case "GET":
            return getRequestHandler(url);
        default:
            break;           
    }
}

async function postRequestHandler(url, data) {
    let response = {};

    await fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"  
        },
        body: JSON.stringify(data)
    })
    .then(data => data.json())
    .then(result => {
        if (result.token) {
            response['success'] = true;
            response['data'] = result;
        } else {
            throw new Error(result.error || "Login failed");
        }
    })
    .catch(error => {
        response['error'] = true;
        response['message'] = error.message;
    });

    return response;
}

async function getRequestHandler(url) {
    let response = {};

    await fetch(url)
    .then(data => data.json())
    .then(result => {
        response['success'] = true;
        response['data'] = result;
    })
    .catch(error => {
        response['error'] = true;
        response['message'] = error.message;
    });

    return response;
}
