import config from '../../config'
import axios from 'axios'

const getToday = () => {
    const today = new Date();
    const dd = today.getDate();
    const mm = today.getMonth() + 1;
    const yyyy = today.getFullYear();
    return `${yyyy}-${mm}-${dd}`
};

const pontomaisApi = axios.create({
    baseURL: 'https://api.pontomais.com.br/api/',
    timeout: 1000,
    headers: config.headers
    
});

async function getWorkDay( date = getToday() ) {
    try {
      const request = await pontomaisApi.get(`/time_card_control/current/work_days/${date}`)
      return request.data
    } catch (error) {
      return error
    }
}

export default {
    getWorkDay
}