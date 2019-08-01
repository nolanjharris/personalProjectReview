module.exports = {
    addToCart: (req, res) => {
        const { product } = req.body;
        req.session.cart = [product, ...req.session.cart];
        console.log(req.session.cart);
        res.status(200).json(req.session.cart);
    },
    getCart: (req, res) => {
        req.status(200).json(req.session.cart);
    }
}