// object socialNames
const socialNames = {
  github: 'rodrigodev6',
  youtube: 'channel/UCVVGtt-Xf1xrohSIZMtvIHg/about',
  instagram: 'rodrigodev6',
  facebook: 'profile.php?id=100005056321629',
  linkedin: 'in/rodrigo-lima1'
}

function changeMediaSocialLinks() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')

    li.children[0].href = `https://${social}.com/${socialNames[social]}`
  }
}

function getGitHubProfileInfos() {
  const url = `https://api.github.com/users/${socialNames.github}`

  fetch(url)
    .then(response => response.json())
    .then(data => {
      userName.textContent = data.name
      userBio.textContent = data.bio
      userLink.href = data.html_url
      userLogin.textContent = data.login
    })
}

getGitHubProfileInfos()
changeMediaSocialLinks()
