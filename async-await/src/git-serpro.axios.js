import https from 'https'
import axios from 'axios'
import token from './git-serpro.token'

const gitSerpro = axios.create({
  baseURL: 'https://git.serpro/api/v4',
  httpsAgent: new https.Agent({  
    rejectUnauthorized: false
  })
})

gitSerpro.defaults.headers.common['Private-Token'] = token;

export default gitSerpro;