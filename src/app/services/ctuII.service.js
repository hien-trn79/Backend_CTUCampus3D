import config from "../config/config.js";

const pool = config.db;

class CtuIIService {
  async getAllPolygonService() {
    const sql = `SELECT json_strip_nulls(jsonb_set(to_jsonb(t) - 'way','{way}',ST_AsGeoJSON(ST_Transform(way,4326))::jsonb)::json) AS data
                FROM planet_osm_polygon t`;
    const result = await pool.query(sql).then((res) => {
      const rows = res.rows.map((rowItem) => {
        return rowItem;
      });
      return rows;
    });
    return result;
  }
  async getAllLineService() {
    const sql = `SELECT json_strip_nulls(jsonb_set(to_jsonb(t) - 'way','{way}',ST_AsGeoJSON(ST_Transform(way,4326))::jsonb)::json) AS data
                FROM planet_osm_line t`;
    const result = await pool.query(sql).then((res) => {
      const rows = res.rows.map((rowItem) => {
        return rowItem;
      });
      return rows;
    });
    return result;
  }
  async getAllPointService() {
    const sql = `SELECT json_strip_nulls(jsonb_set(to_jsonb(t) - 'way','{way}',ST_AsGeoJSON(ST_Transform(way,4326))::jsonb)::json) AS data
                FROM planet_osm_point t`;
    const result = await pool.query(sql).then((res) => {
      const rows = res.rows.map((rowItem) => {
        return rowItem;
      });
      return rows;
    });
    return result;
  }
  async getAllRoadsService() {
    const sql = `SELECT json_strip_nulls(jsonb_set(to_jsonb(t) - 'way','{way}',ST_AsGeoJSON(ST_Transform(way,4326))::jsonb)::json) AS data
                FROM planet_osm_roads t`;
    const result = await pool.query(sql).then((res) => {
      const rows = res.rows.map((rowItem) => {
        return rowItem;
      });
      return rows;
    });
    return result;
  }
  async getAllWaysService() {
    const sql = `SELECt * FROM planet_osm_ways `;
    const result = await pool.query(sql).then((res) => {
      const rows = res.rows.map((rowItem) => {
        return rowItem;
      });
      return rows;
    });
    return result;
  }

  async getBuildingById(way_id) {
    const sql = `select osm_id, building, name, way_area, way, src_bg from planet_osm_polygon where osm_id = $1`;
    const result = await pool.query(sql, [way_id]).then((res) => res.rows[0]);
    return result;
  }
  async updateBuildingById(way_id, updateData) {
    const { src_bg } = updateData;
    const sql = `UPDATE planet_osm_polygon SET src_bg = $1 WHERE osm_id = $2 RETURNING *`;
    const result = await pool
      .query(sql, [src_bg, way_id])
      .then((res) => res.rows[0]);
    return result;
  }
}

export default new CtuIIService();
