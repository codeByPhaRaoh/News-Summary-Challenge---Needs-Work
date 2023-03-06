import axios from "axios";

export const getArDataAsync = async () => {
    try {
        const responseData = await axios.get(process.env.REACT_APP_DATA_SERVICE_URL);
        if (process.env.REACT_APP_DATA_SERVICE_URL === 'http://localhost:3000/results') return responseData.data;
        if (process.env.REACT_APP_DATA_SERVICE_URL === 'https://content.guardianapis.com/search?order-by=newest&show-fields=headline%2Cthumbnail%2Cbyline%2CbodyText&api-key=910f84ee-616e-4e08-ace8-6e09a814d9d2') return responseData.data.response.results;
    }

    catch (e) {
        return { error: `Error` };
    }
};

export default getArDataAsync;