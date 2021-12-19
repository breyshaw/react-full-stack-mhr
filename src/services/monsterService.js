import * as tokenService from '../services/tokenService'
const BASE_URL = '/api/monsters'

function createMonster(monsterData) {
  return fetch(BASE_URL, {
    method: 'POST',
    headers: {'Authorization': `Bearer ${tokenService.getToken()}`, 'Content-Type': 'application/json'
  }, body: JSON.stringify(monsterData)
  })
  .then(res => res.json())
}

function getMonsters() {
  //No need for method because the default for fetch is a GET request
  return fetch(BASE_URL, {
    headers: {'Authorization': `Bearer ${tokenService.getToken()}`, 'Content-Type': 'application/json'}, 
  })
  .then(res => res.json())
}

export {
  createMonster,
  getMonsters
}