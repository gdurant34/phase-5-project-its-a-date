const fetchDayts = () => {
    fetch('/dayts')
      .then(r => r.json())
      .then(console.log)
}

const fetchActivities = () => {
    fetch('/activities')
      .then(r => r.json())
      .then(console.log)
}

const fetchComments = () => {
    fetch('/comments')
      .then(r => r.json())
      .then(console.log)
}

const fetchDaytActivities = () => {
    fetch('/dayt_activities')
      .then(r => r.json())
      .then(console.log)
}

const fetchUserRelationships = () => {
    fetch('/user_relationships')
      .then(r => r.json())
      .then(console.log)
}

const fetchUsers = () => {
    fetch('/users')
      .then(r => r.json())
      .then(console.log)
}