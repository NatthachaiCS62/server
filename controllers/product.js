const Product = require('../model/Product');

exports.create = async (req, res) => {
    try {
        const products = await new Product(req.body).save();

        res.status(201).json(products);
    } catch (err) {
        console.error(err);
        res.status(500).send("Server Error Create Product!!!");
    }
};

exports.list = async (req, res) => {
    try {
        const product = await Product.find()
        res.send(product);
    } catch (err) {
        res.status(500).send("Server Error list Product!!!");
    }
};

exports.update = async (req, res) => {
    try {
        const { id } = req.params;
        const product = await Product.findOneAndUpdate(
            { _id: id },
            req.body,
            { new: true }
        ).exec();
        res.send(product);
    } catch (err) {
        console.error(err);
        res.status(500).send("Server error Update Product");
    }
};

exports.remove = async (req, res) => {
    try {
        const deleted = await Product.findOneAndDelete(
            { _id: req.params.id } // ใช้ findOneAndDelete แทน findOneAndRemove
        ).exec();
        res.send(deleted);
    } catch (err) {
        console.error(err);
        res.status(500).send("Server error Remove Product");
    }
};


