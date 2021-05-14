const models = require('../models');
const fetch = require('node-fetch');
const Search = models.search;

const create = async (req, res) => {
  if (!req.query.location || !req.query.description) {
    res.send(500)
    return
  }
  let ip = req.header('x-forwarded-for') || req.connection.remoteAddress;
  const data = {
    ip: ip,
    location: req.query.location.replace('%20', ' '),
    description: req.query.description.replace('%20', ' ')
  }
  Search.create(data).then(async () => {
    // Solution with backend fetching github jobs data and just then sending it to client
    const githubResponse = await fetch(`https://jobs.github.com/positions.json?description=${data.description}&location=${data.location}`)
    res.send(await githubResponse.json())

    // Solution redirecting client to github jobs call
    //res.redirect(`https://jobs.github.com/positions.json?description=${data.description}&location=${data.location}`)
  }).catch(() => res.send(500))
}

const list = async (req, res) => {
  Search.findAll().then(r => res.send(r)).catch(() => res.send(500))
}

module.exports = {
  create,
  list
}