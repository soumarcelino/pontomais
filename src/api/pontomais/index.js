import config from '../../config'
import axios from 'axios'
import { Time } from '../../utils'

const pontomaisApi = axios.create({
    baseURL: 'https://api.pontomais.com.br/api/',
    timeout: 1000,
    headers: config.headers
    
});

async function getWorkDay( date = Time.getToday() ) {
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