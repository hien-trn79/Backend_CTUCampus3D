import { pool } from "../database/database.js";

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
}

export default new CtuIIService();
