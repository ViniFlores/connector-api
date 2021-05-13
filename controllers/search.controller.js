const models = require ('../models');
const Search = models.search;

const create = async (req, res) => {
  let ip = req.header('x-forwarded-for') || req.connection.remoteAddress;
  const data = {
    ip: ip,
    location: req.query.location,
    description: req.query.description
  }
  Search.create(data).then(() => res.redirect(`https://jobs.github.com/positions.json?description=${data.description}&location=${data.location}`)).catch(() => res.send(500))
}

module.exports = {
  create
}