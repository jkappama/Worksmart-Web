import axios from "axios"

//Source 1 and reference used: https://www.udemy.com/course/react-for-the-rest-of-us/
//Source 2 and reference used: https://www.javaguides.net/2020/08/reactjs-axios-get-post-put-and-delete-example-tutorial.html

//Simple API calls using axios for Logs

const LOGS_API_BASE_URL = "https://localhost:44349/api/Logs"

class LoggerService {
  getLogs() {
    return axios.get(LOGS_API_BASE_URL)
  }

  createLog(log) {
    return axios.post(LOGS_API_BASE_URL, log)
  }

  getLog(id) {
    return axios.get(LOGS_API_BASE_URL + "/" + id)
  }

  updateLog(log) {
    return axios.put(LOGS_API_BASE_URL + "/" + log)
  }

  deleteLog(logId) {
    return axios.delete(LOGS_API_BASE_URL + "/" + logId)
  }
}

export default new LoggerService()
