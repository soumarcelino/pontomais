import config from '../../config'
import axios from 'axios'

const pontomaisApi = axios.create({
    baseURL: 'https://api.pontomais.com.br/api/',
    timeout: 1000,
    headers: config.headers
    
});

async function getWorkDay() {
    try {
      const request = await pontomaisApi.get('/time_card_control/current/work_days/2019-01-30')
      return request.data
    } catch (error) {
      return error
    }
}

export default {
    getWorkDay
}