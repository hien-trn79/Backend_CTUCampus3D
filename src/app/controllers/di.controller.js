class Di {
  // [GET] /api/di/
  findAll(req, res, next) {
    res.json({
      message: "di findAll",
    });
  }

  // [POST]   /api/di/
  create(req, res, next) {
    res.json({
      message: "di create",
    });
  }

  // [DELETE] /api/di/
  deleteAll(req, res, next) {
    res.json({
      message: "di deleteAll",
    });
  }

  // [GET] /api/di/:id
  findOne(req, res, next) {
    res.json({
      message: "di findOne",
    });
  }

  // [PUT] /api/di/:id
  update(req, res, next) {
    res.json({
      message: "di update",
    });
  }

  // [DELETE] /api/di/:id
  deleteOne(req, res, next) {
    res.json({
      message: "di deleteOne",
    });
  }
}

export default new Di();
