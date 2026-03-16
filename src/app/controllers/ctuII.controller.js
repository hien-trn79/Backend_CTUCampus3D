class CtuII {
  // [GET] /api/ctuII/
  findAll(req, res, next) {
    res.json({
      message: "ctuII findAll",
    });
  }

  // [POST] /api/ctuII/
  create(req, res, next) {
    res.json({
      message: "ctuII create",
    });
  }

  // [DELETE] /api/ctuII/
  deleteAll(req, res, next) {
    res.json({
      message: "ctuII deleteAll",
    });
  }

  // [GET] /api/ctuII/:id
  findOne(req, res, next) {
    res.json({
      message: "ctuII findOne",
    });
  }

  // [PUT] /api/ctuII/:id
  update(req, res, next) {
    res.json({
      message: "ctuII update",
    });
  }

  // [DELETE] /api/ctuII/:id
  deleteOne(req, res, next) {
    res.json({
      message: "ctuII deleteOne",
    });
  }
}

export default new CtuII();
