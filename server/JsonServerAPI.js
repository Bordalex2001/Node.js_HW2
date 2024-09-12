const url = 'http://localhost:3000';

export default class JsonServerAPI {
    get(endpoint) {
        try {
            console.log("All products:");
            fetch(`${url}/${endpoint}`, {
                method: 'GET'
            }).then((response) => {
                if (!response.ok) {
                    throw new Error(`GET request failed with status ${response.status}`);
                }
                return response.json();
            }).then((data) => console.table(data));
        }
        catch (error) {
            console.error(`Fetching data error: ${error}`);
        }
    }

    post(endpoint, bodyData) {
        try {
            fetch(`${url}/${endpoint}`, {
                method: 'POST',
                body: JSON.stringify(bodyData)
            })
            .then((response) => {
                if (!response.ok) {
                    throw new Error(`POST request failed with status ${response.status}`);
                }
                return response.json();
            });
            
            return `Resource added successfully at ${endpoint}`;
        }
        catch (error) {
            console.error(`Posting data error: ${error}`);
        }
    }

    put(endpoint, bodyData) {
        try {
            fetch(`${url}/${endpoint}`, {
                method: 'PUT',
                body: JSON.stringify(bodyData)
            })
            .then((response) => {
                if (!response.ok) {
                    throw new Error(`PUT request failed with status ${response.status}`);
                }
                return response.json();
            });
            
            return `Resource updated successfully at ${endpoint}`;
        }
        catch (error) {
            console.error(`Updating data error: ${error}`);
        }
    }

    delete(endpoint) {
        try {
            fetch(`${url}/${endpoint}`, {
                method: 'DELETE'
            })
            .then((response) => {
                if (!response.ok) {
                    throw new Error(`DELETE request failed with status ${response.status}`);
                }
                return response.json();
            });
            
            return `Resource deleted successfully at ${endpoint}`;
        }
        catch (error) {
            console.error(`Deleting data error: ${error}`);
        }
    }
}