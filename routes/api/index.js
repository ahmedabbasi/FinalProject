const router = require("express").Router();
const carsRoutes=require("./cars/carsRoutes");
const carqueryRoutes=require("./carquery/carqueryRoutes");

router.use("/cars", carsRoutes);
router.use("/carquery",carqueryRoutes);


module.exports = router;