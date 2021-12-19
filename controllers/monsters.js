import { Monster } from '../models/monster.js'

function create(req, res) {
req.body.createdBy = req.user.profile 
Monster.create(req.body)
.then(monster => {
  res.json(monster)
})
}

function index(req, res) {
  Monster.find({})
  .populate('createdBy')
  .then(monsters => {
    res.json(monsters)
  })
}

export {
  create,
  index
}