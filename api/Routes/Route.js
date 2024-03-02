

const router=require("express").Router();
const controls=require('../RouteController/RouteControl');

const validateAPIKey=require("../Authorization/Auth")

router.get("/",controls.product_all);
router.get("/:productName",controls.product_specific);
router.post("/product",validateAPIKey,controls.product_create);
router.put("/product/:productName",validateAPIKey,controls.product_update);
router.delete("/product/:productName",validateAPIKey,controls.product_delete);

module.exports=router;



// KFmnQfxpS6GEPOLDfOaHFSCTotiDBxyn8YWWB03LG5MGQIpQChBdIScZpaRIb4xj