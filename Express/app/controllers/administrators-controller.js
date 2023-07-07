let repository = require('../db/administrator-repository');

let addAdministrator = async(req, res) => {
  repository.addAdministrator(req.body)
      .then(() => {
        return res.status(200).json({
          status: "register ok",
        });
      })
      .catch((err) => {
        console.log(err);
      })
};

let updateAdministrator = async(req, res) => {
  repository.updateAdministrator(req.params.administratorId, req.body)
      .then(() => {
        return res.status(200).json({
          administratorId: req.params.administratorId,
          updated: true
        });
      })
      .catch((err) => {
        console.log(err);
      })
};

let deleteAdministrator = async(req, res) => {
  repository.deleteAdministrator(req.params.administratorId)
      .then(() => {
        return res.status(200).json({
          administratorId: req.params.administratorId,
          deleted: true
        });
      })
      .catch((err) => {
        console.log(err);
      })
};

let getAdministrator = async(req, res) => {
  repository.getAdministrator(req.params.administratorId)
      .then((result) => {
        return res.status(200).json({
          administrators: result,
        });
      })
      .catch((err) => {
        console.log(err);
      })
};

let listAdministrators = async(req, res) => {
  repository.listAdministrators()
      .then((result) => {
        return res.status(200).json({
          administrators: result,
        });
      })
      .catch((err) => {
        console.log(err);
      })
};


module.exports = {
  addAdministrator,
  updateAdministrator,
  deleteAdministrator,
  getAdministrator,
  listAdministrators
}
