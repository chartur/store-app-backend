import { check, oneOf, body } from "express-validator";
import Validator from '../helpers/validator.js';
import User from '../models/user.js';

export class AuthController {
    static async login(req, res) {
        try {
            const userData = req.body;
            console.log(userData);
            const user = await User.create(userData);
            return res.json({user})
        } catch (e) {
            return res.status(401).send({ message: e.message})
        }
    }
}

export class AuthValidator extends Validator {
    static login(req, res, next) {
        return super.validate([
            check('email').exists().isEmail(),
            check('password').exists().isLength({min: 6}),
            check('firstName').exists()
        ])(req, res, next)
    }
}
