import axios from "axios"

//Source 1 and reference used: https://www.udemy.com/course/react-for-the-rest-of-us/
//Source 2 and reference used: https://www.javaguides.net/2020/08/reactjs-axios-get-post-put-and-delete-example-tutorial.html

//Simple API calls using axios for Messages

const MESSAGE_API_BASE_URL = "https://localhost:44349/api/Messages"

class MessageService {
  getMessages() {
    return axios.get(MESSAGE_API_BASE_URL)
  }

  createMessage(message) {
    return axios.post(MESSAGE_API_BASE_URL, message)
  }

  getMessage(id) {
    return axios.get(MESSAGE_API_BASE_URL + "/" + id)
  }

  updateMessage(message) {
    return axios.put(MESSAGE_API_BASE_URL + "/" + message)
  }

  deleteMessage(messageId) {
    return axios.delete(MESSAGE_API_BASE_URL + "/" + messageId)
  }
}

export default new MessageService()
