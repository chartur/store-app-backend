import Product from '../models/product.js'

export class ProductsController {
    static async getBestSellers(req, res) {
        try {
            const products = await Product.findAll();
            return res.json(products)
        } catch (err) {
            return res.status(400).json({
                message: 'Something was wrong!'
            })
        }
    }
}

