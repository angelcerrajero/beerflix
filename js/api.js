const API_KEY = "7G9PRCW-4HNMXW8-NY0JNP8-ACAW8RQ"

const api = (API_URL = 'https://web-bootcamp-exercise-beer-api-nijliozdcg.now.sh/api/v1/') => {
    const showApiEndPoint = `${API_URL}/beers`;

    return{
        getBeer: async text => {
            try {
                
                const response = await fetch(showApiEndPoint, {
                    method: 'GET',
                    headers: {
                        'Content-type': 'application/json',
                        'X-API-KEY': API_KEY,
                      },
                });
                if (!response.ok){
                    throw new Error ('Error fetching beers');
                };
                const data = await response.json();
                // const formatData = data.map(item  => {
                //     if()
                // })
                
                return data;
            } catch (err) {
                console.log(err.message);
                throw err;
            }
        }
    }
}

export default api;