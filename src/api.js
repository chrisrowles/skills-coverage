const url = "http://localhost:8080/api"
const api = {}

api.fetchUsers = async () => {
  const response = await fetch(url + '/users')
  return response.json()
}

api.fetchUser = async (id) => {
  console.log(id)
  const response = await fetch(url + '/users/' + id)
  return response.json()
}

api.createUser = async (name) => {
  try {
    const response = await fetch(url + '/users', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: name
      })
    })
    
    return response.json()
  } catch(err) {
    return err
  }
}

api.updateUser = async (id, name) => {
  try {
    const response = await fetch(url + '/users/' + id, {
      method: 'PUT',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: name
      })
    })
    
    return response.json()
  } catch(err) {
    return err
  }
}

api.fetchSkills = async () => {
  const response = await fetch(url + '/skills')
  return response.json()
}

api.fetchSkill = async (id) => {
  const response = await fetch(url + '/skills/' + id)
  return response.json()
}

api.createSkill = async (name) => {
  try {
    const response = await fetch(url + '/skills', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: name
      })
    })
    
    return response.json()
  } catch(err) {
    return err
  }
}

api.updateSkill = async (id, name) => {
  try {
    const response = await fetch(url + '/skills/' + id, {
      method: 'PUT',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: name
      })
    })
    
    return response.json()
  } catch(err) {
    return err
  }
}

api.setUserSkillLevel = async (user, skill, level) => {
  try {
    const response = await fetch(url + '/user/skills', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        user: user,
        skill: skill,
        level: level
      })
    })
    
    return response.json()
  } catch(err) {
    return err
  }
}

api.updateUserSkillLevel = async (user, skill, level) => {
  try {
    const response = await fetch(url + '/user/skills/' + user.id + '/' + skill.id, {
      method: 'PUT',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        level: level
      })
    })
    
    return response.json()
  } catch(err) {
    return err
  }
}

export default api