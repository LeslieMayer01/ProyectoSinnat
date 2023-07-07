let db = require('../db/connection');
const repository = require("../db/guardian-repository");

let addGuardian = async(req, res) => {
  repository.addGuardian(req.body)
      .then(() => {
        return res.status(200).json({
          status: "register ok",
        });
      })
      .catch((err) => {
        console.log(err);
      })
};

let updateGuardian = async(req, res) => {
  repository.updateGuardian(req.params.guardianId, req.body)
      .then(() => {
        return res.status(200).json({
          guardianId: req.params.guardianId,
          updated: true
        });
      })
      .catch((err) => {
        console.log(err);
      })
};

let deleteGuardian = async(req, res) => {
  repository.deleteGuardian(req.params.guardianId)
      .then(() => {
        return res.status(200).json({
          guardianId: req.params.guardianId,
          deleted: true
        });
      })
      .catch((err) => {
        console.log(err);
      })
};

let getGuardian = async(req, res) => {
  repository.getGuardian(req.params.administratorId)
      .then((result) => {
        return res.status(200).json({
          guardians: result,
        });
      })
      .catch((err) => {
        console.log(err);
      })
};

let listGuardians = async(req, res) => {
  repository.listGuardians()
      .then((result) => {
        return res.status(200).json({
          guardians: result,
        });
      })
      .catch((err) => {
        console.log(err);
      })
};

module.exports = {
  addGuardian,
  updateGuardian,
  deleteGuardian,
  getGuardian,
  listGuardians
}