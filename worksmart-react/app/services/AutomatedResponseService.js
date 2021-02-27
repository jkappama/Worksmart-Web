import axios from "axios"

//Source 1 and reference used: https://www.udemy.com/course/react-for-the-rest-of-us/
//Source 2 and reference used: https://www.javaguides.net/2020/08/reactjs-axios-get-post-put-and-delete-example-tutorial.html

//Simple API calls using axios for AutomatedResponses

const RESPONSE_API_BASE_URL = "https://localhost:44349/api/Responses"

class AutomatedResponseService {
  getResponses() {
    return axios.get(RESPONSE_API_BASE_URL)
  }

  generateResponse(response) {
    return axios.post(RESPONSE_API_BASE_URL, response)
  }

  getResponse(id) {
    return axios.get(RESPONSE_API_BASE_URL + "/" + id)
  }

  updateResponse(response) {
    return axios.put(RESPONSE_API_BASE_URL + "/" + response)
  }

  deleteResponse(responseId) {
    return axios.delete(RESPONSE_API_BASE_URL + "/" + responseId)
  }
}

export default new AutomatedResponseService()
