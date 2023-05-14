const { Province } = require("../models");
const { Sequelize } = require("sequelize");
exports.search = async (req, res) => {
  try {
    const { lat, lng } = req.body;
    const point = `POINT(${lng} ${lat})`;
    const province = await Province.findOne({
      where: Sequelize.fn(
        "ST_Contains",
        Sequelize.col("geom"),
        Sequelize.fn("ST_GeomFromText", point, 4326)
      ),
    });
    if (province) {
      res.json({ province: province });
    } else {
      res.status(404).json({ error: "Province not found for given location" });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal server error"});
  }
};
