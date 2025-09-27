const ItemRoute = require("express").Router();
const ItemController = require("../controllers/ItemController");

ItemRoute.get('/', ItemController.getItems);
ItemRoute.post('/', ItemController.add);
ItemRoute.put('/:id', ItemController.update);
ItemRoute.delete('/:id', ItemController.delete);

module.exports = ItemRoute;