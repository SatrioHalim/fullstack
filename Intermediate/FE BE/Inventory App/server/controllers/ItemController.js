const {item} = require("../models");


class ItemController {
    static getItems(req, res) {
        item.findAll()
        .then(items => {
            res.json(items);
        })
        .catch(err => {
            res.json(err);
        });
    }
    static add(req, res) {
        const {name, type, price, stock} = req.body;

        item.create({
            name, type, price, stock
        })
        .then(result => {
            res.json(result);
        })
        .catch(err => {
            res.json(err);
        });
    }
    static update(req, res) {
        const id = +req.params.id;
        const {name, type, price, stock} = req.body;

        item.update({
            name, type, price, stock
        }, {
            where: {
                id
            }
        })
        .then(result => {
            res.json(result);
        })
        .catch(err => {
            res.json(err);
        });
    }
    static delete(req, res) {
        const id = +req.params.id;

        item.destroy({
            where: {
                id
            }
        })
        .then(result => {
            res.json(result);
        })
        .catch(err => {
            res.json(err);
        });
    }
}

module.exports = ItemController;