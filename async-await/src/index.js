import axios from 'axios'
import gitSerproService from './git-serpro.service'

async function main() {
  const issuesIds = [92, 113, 89];
  const issuesPromises = issuesIds.map(id => gitSerproService.getIssue(id))

  // Abordagem 1
  try {

    const issues = await axios.all(issuesPromises)
    issues.forEach(issue => console.log(`Issue ${issue.id}: ${issue.title}`))

  } catch (e) {
    console.error(e)
  }
}

main()
