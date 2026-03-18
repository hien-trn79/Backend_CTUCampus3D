import ctuIIService from "../services/ctuII.service.js";

const tableMapService = {
  planet_osm_polygon: ctuIIService.getAllPolygonService,
  planet_osm_line: ctuIIService.getAllLineService,
  planet_osm_point: ctuIIService.getAllPointService,
  planet_osm_roads: ctuIIService.getAllRoadsService,
  planet_osm_ways: ctuIIService.getAllWaysService,
};

export default tableMapService;
