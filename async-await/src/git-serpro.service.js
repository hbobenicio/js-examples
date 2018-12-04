import gitSerpro from './git-serpro.axios'

export async function getIssue(id) {
  return gitSerpro.get(`/projects/dedat%2Fdeat3%2Fngx-suite-rfb/issues/${id}`)
    .then(resp => resp.data)
    .catch(error => console.error(error))
}

export default {
  getIssue
}
