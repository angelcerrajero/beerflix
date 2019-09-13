const API_KEY = "7G9PRCW-4HNMXW8-NY0JNP8-ACAW8RQ";


const api = (API_URL = 'https://web-bootcamp-exercise-beer-api-nijliozdcg.now.sh/api/v1') => {
    const showApiEndPoint = `${API_URL}/beers`;

    return{
        getBeer: async text => {
            try {
                const beers = await axios({
					method: 'get',
					url: showApiEndPoint,
					headers: {'X-API-KEY': API_KEY}
				});
				return beers.data.beers;
             
            } catch (err) {
                console.log(err.message);
                throw err;
            }
        }
    }
}

export default api;