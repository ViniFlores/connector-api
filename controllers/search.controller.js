const models = require ('../models');
const Search = models.search;

const create = async (req, res) => {
  const data = req.body;
  Search.create(data).then(() => res.send(200)).catch(() => res.send(500))
}

module.exports = {
  create
}