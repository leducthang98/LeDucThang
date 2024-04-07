import { NextFunction, Request, Response } from "express";

export const controllerHandler = f => async (req: Request, res: Response, next: NextFunction) => {
    try {
        await f(req, res, next);
    } catch (error) {
        next(error);
    }
};

export const errorHandler = (error: Error, req: Request, res: Response, next: NextFunction) => {
    res.status(400);
    res.send(error?.message || error);
};