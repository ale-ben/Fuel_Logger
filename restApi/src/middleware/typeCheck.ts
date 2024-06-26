import {AnyZodObject, z} from "zod";
import {Request, Response, NextFunction} from "express";

export const validate = (schema: AnyZodObject) =>
    async (req: Request, res: Response, next: NextFunction) => {

        try {
            schema.parse({
                body: req.body,
                query: req.query,
                params: req.params,
            });

            return next();
        } catch (error) {
            return res.status(400).json(error);
        }
    };
