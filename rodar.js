https://docs.github.com/rest/pages/pages#get-a-apiname-pages-site

// Octokit.js
// https://github.com/octokit/core.js#readme
const octokit = new Octokit({
  auth: 'YOUR-TOKEN'
})

await octokit.request('GET /repos/{owner}/{repo}/pages', {
  owner: 'OWNER',
  repo: 'REPO',
  headers: {
    'X-GitHub-Api-Version': '2022-11-28'
  }
})

{
  "url": "https://api.github.com/repos/github/developer.github.com/pages",
  "status": "built",
  "cname": "developer.github.com",
  "custom_404": false,
  "html_url": "https://developer.github.com",
  "source": {
    "branch": "master",
    "path": "/"
  },
  "public": true,
  "pending_domain_unverified_at": "2024-04-30T19:33:31Z",
  "protected_domain_state": "verified",
  "https_certificate": {
    "state": "approved",
    "description": "Certificate is approved",
    "domains": [
      "developer.github.com"
    ],
    "expires_at": "2021-05-22"
  },
  "https_enforced": true
}