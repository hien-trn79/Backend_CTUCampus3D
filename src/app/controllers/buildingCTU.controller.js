import ctuIIService from "../services/ctuII.service.js";

class CTUBuidingController {
  // [GET] /api/ctu/building/:id
  async getBuildingById(req, res, next) {
    try {
      const way_id = req.params.id;
      const buildingData = await ctuIIService
        .getBuildingById(way_id)
        .then((data) => res.json(data))
        .catch((error) => {
          res
            .status(500)
            .json({ error: "An error occurred while fetching building data." });
        });
      if (!buildingData) {
        return res.status(404).json({ error: "Building not found." });
      }
    } catch (error) {
      console.error("Error fetching building data:", error);
      res
        .status(500)
        .json({ error: "An error occurred while fetching building data." });
    }
  }

  // [PUT] /api/ctu/building/:id
  async updateBuildingById(req, res, next) {
    try {
      const way_id = req.params.id;
      const updateData = req.body;
      const updatedBuilding = await ctuIIService
        .updateBuildingById(way_id, updateData)
        .then((data) => res.json(data))
        .catch((error) => {
          res
            .status(500)
            .json({ error: "An error occurred while updating building data." });
        });
      if (!updatedBuilding) {
        return res.status(404).json({ error: "Building not found." });
      }
    } catch (error) {
      console.error("Error updating building data:", error);
      res
        .status(500)
        .json({ error: "An error occurred while updating building data." });
    }
  }
}

export default new CTUBuidingController();
