const API_KEY = "7G9PRCW-4HNMXW8-NY0JNP8-ACAW8RQ";


const api = (API_URL = 'https://web-bootcamp-exercise-beer-api-nijliozdcg.now.sh/api/v1') => {
    const showApiEndPoint = `${API_URL}/beers`;
    const searchAPIEndpoint = `${API_URL}/beers?search=`

    return{
        getBeer: async text => {
            try {
                const requestUrl = text ? `${searchAPIEndpoint}${text}` : showApiEndPoint;
                const beers = await axios({
					method: 'get',
					url: requestUrl,
					headers: {'X-API-KEY': API_KEY}
                });
                
				return beers.data.beers;
             
            } catch (err) {
                console.log(err.message);
                throw err;
            }
        },

        getBeerDetail: async id => {
            try {
                const beers = await axios({
					method: 'get',
					url: `https://web-bootcamp-exercise-beer-api-nijliozdcg.now.sh/api/v1/beers/${id}`,
					headers: {'X-API-KEY': API_KEY}
                });
                return beers.data.beer;
                
             
            } catch (error) {
                console.log(err.message);
                throw err;
            };
          
          },

        createLike: async id => {

            try {
                const like = await axios({
					method: 'POST',
					url: `https://web-bootcamp-exercise-beer-api-nijliozdcg.now.sh/api/v1/beers/${id}/like`,
					headers: {'X-API-KEY': API_KEY}
                });
                return like.data;

                
            } catch (error) {
                console.log(err.message)
                throw err;
            }



        }


    }
}

export default api;