const repository = require("../db/student-repository");

let addStudent = async(req, res) => {
  repository.addStudent(req.body)
      .then(() => {
        return res.status(200).json({
          status: "register ok",
        });
      })
      .catch((err) => {
        console.log(err);
      })
};

let updateStudent = async(req, res) => {
  repository.updateStudent(req.params.studentId, req.body)
      .then(() => {
        return res.status(200).json({
            studentId: req.params.studentId,
            updated: true
        });
      })
      .catch((err) => {
        console.log(err);
      })
};

let deleteStudent = async(req, res) => {
    repository.deleteStudent(req.params.studentId, req.body)
        .then(() => {
            return res.status(200).json({
                studentId: req.params.studentId,
                deleted: true
            });
        })
        .catch((err) => {
            console.log(err);
        })
};

let getStudent = async(req, res) => {
    repository.getStudent(req.params.studentId)
        .then((result) => {
            return res.status(200).json({
                students: result,
            });
        })
        .catch((err) => {
            console.log(err);
        })
};

let listStudents = async(req, res) => {
    repository.listStudents()
        .then((result) => {
            return res.status(200).json({
                students: result,
            });
        })
        .catch((err) => {
            console.log(err);
        })
};

module.exports = {
  addStudent,
  updateStudent,
  deleteStudent,
  getStudent,
  listStudents
}