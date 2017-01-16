(function () {
  const user = 'sahiljain112'
  const endPoint = `https://api.github.com/users/${user}`,
        followersEndpoint = `https://api.github.com/users/${user}/followers`,
        followingEndpoint = `https://api.github.com/users/${user}/following`

  fetch(endPoint)
  .then(resp => resp.json())
  .then((data) => {
    console.log(data)
    const followers = [],
          following = []

    const followersPromise = fetch(followersEndpoint)
    const followingPromise = fetch(followingEndpoint)

    Promise.all([followersPromise, followingPromise])
    .then((response) => {
      return response.map(resp => resp.json())
    })
    .then((githubNetworkData) => {
      console.log('Network data', githubNetworkData)
      githubNetworkData[0].then(data => followers.push(...data))
      githubNetworkData[1].then(data => following.push(...data))
      console.log('FOLLOW', followers, following)
    })


    const followerList = followers.forEach((follower) => {
      return (
        `<li>${follower.name}<li>`
        `<li>${follower.email}<li>`
      )
    })

    followers.forEach((following) => {
      return (
        `<li>${following.name}<li>`
        `<li>${following.email}<li>`
      )
    })

  //  console.log(followerList)
    document.querySelector('.followers').innerHTML = followerList
    document.querySelector('.following').innerHTML = followerList
    // document.querySelector('img').src = data.avatar_url
  })
  .catch(error => console.log(error))


})()
