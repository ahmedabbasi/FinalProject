const router = require("express").Router();
const articleRoutes = require("./articles/articleRoutes");
const cnnRoutes = require("./cnn/cnnRoutes");
const foxRoutes = require("./fox/foxRoutes");
const msnbcRoutes = require("./msnbc/msnbcRoutes");
const newsweekRoutes = require("./newsweek/newsweekRoutes");
const bbcsportsRoutes=require("./bbc-sports/bbc-sportsRoutes");
const cricinfoRoutes=require("./cricinfo/cricinfoRoutes");
const espnRoutes=require("./espn/espnRoutes");
const foxsportsRoutes=require("./fox-sports/fox-sportsRoutes");
const bloombergRoutes=require("./bloomberg/bloombergRoutes");
const businessinsiderRoutes=require("./business-insider/business-insiderRoutes");
const economistRoutes= require("./economist/economistRoute");
const financialtimesRoutes=require("./financial-times/financial-timesRoutes");
const buzzfeedRoutes=require("./buzzfeed/buzzfeedRoutes");
const dailymailRoutes=require("./dailymail/dailymailRoutes");
const mtvRoutes=require("./mtv/mtvRoutes");
const polygonRoutes=require("./polygon/polygonRoutes");







router.use("/articles", articleRoutes);
router.use("/cnn", cnnRoutes);
router.use("/fox", foxRoutes);
router.use("/msnbc", msnbcRoutes);
router.use("/newsweek", newsweekRoutes);
router.use("/sports/bbc-sports", bbcsportsRoutes);
router.use("/sports/cricinfo", cricinfoRoutes);
router.use("/sports/fox-sports", foxsportsRoutes);
router.use("/sports/espn", espnRoutes);
router.use("/business/bloomberg",bloombergRoutes);
router.use("/business/business-insider",businessinsiderRoutes);
router.use("/business/economist",economistRoutes);
router.use("/business/financial-times", financialtimesRoutes);
router.use("/entertainment/buzzfeed", buzzfeedRoutes);
router.use("/entertainment/dailymail", dailymailRoutes);
router.use("/entertainment/mtv", mtvRoutes);
router.use("/entertainment/polygon", polygonRoutes);

module.exports = router;