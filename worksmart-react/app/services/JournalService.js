import axios from "axios"

//Source 1 and reference used: https://www.udemy.com/course/react-for-the-rest-of-us/
//Source 2 and reference used: https://www.javaguides.net/2020/08/reactjs-axios-get-post-put-and-delete-example-tutorial.html

//Simple API calls using axios for Journals

const JOURNAL_API_BASE_URL = "https://localhost:44349/api/Journals"

class JournalService {
  getJournals() {
    return axios.get(JOURNAL_API_BASE_URL)
  }

  createJournal(journal) {
    return axios.post(JOURNAL_API_BASE_URL, journal)
  }

  getJournal(id) {
    return axios.get(JOURNAL_API_BASE_URL + "/" + id)
  }

  updateJournal(journal) {
    return axios.put(JOURNAL_API_BASE_URL + "/" + journal)
  }

  deleteJournal(journalId) {
    return axios.delete(JOURNAL_API_BASE_URL + "/" + journalId)
  }
}

export default new JournalService()
