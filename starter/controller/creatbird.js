exports.createbird = (req, res) => {
  let birddata = {
    species: req.body.species,
    nickname: req.body.nickname,
    status: req.body.status,
  };

  res.render('confirmation', { birddata: birddata });
};
