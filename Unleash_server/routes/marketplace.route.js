const router = require("express").Router();
const controller = require("../controller/marketplace.controller");

router.get("/ticket", controller.ticketInfo);
router.get("/market", controller.marketInfo);
router.get("/history", controller.priceHistory);
router.get("/signature", controller.signature);
router.post("/mint", controller.mint);
router.post("/sell", controller.sell);
router.put("/cancel", controller.cancel);
router.put("/buy", controller.buy);

module.exports = router;
