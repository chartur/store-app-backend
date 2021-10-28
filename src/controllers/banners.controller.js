import Banner from '../models/banner.js';

export class BannersController{
    static async getAll(req, res) {
        try {
            const banners = await Banner.findAll();
            return res.json(banners)
        } catch (err) {
            return res.status(400).json({
                message: 'Something was wrong!'
            })
        }
    }
}

