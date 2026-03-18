import ctuIIService from "../services/ctuII.service.js";
import tableMapService from "../enum/servermap.enum.js";

class CtuII {
  // [GET] /api/ctuII/
  async findAll(req, res, next) {
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

  // [GET] /api/ctuII/:tablename
  async findOne(req, res, next) {
    try {
      const tablename = req.params.tablename;
      const serviceFunction = tableMapService[tablename];
      if (!serviceFunction) {
        return res.status(400).json({ error: "Invalid table name." });
      }
      await serviceFunction()
        .then((data) => {
          res.json(data);
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
          res
            .status(500)
            .json({ error: "An error occurred while fetching data." });
        });
    } catch (error) {
      res
        .status(500)
        .json({ error: "An error occurred while processing the request." });
    }
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
