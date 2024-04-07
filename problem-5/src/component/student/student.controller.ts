import { NextFunction, Request, Response } from "express";
import { createStudentService, deleteStudentByIdService, getStudentDetailByIdService, getStudentListService, updateStudentByIdService } from "./student.service";
import { CreateStudentRequestDto } from "./dto/create-student-request.dto";
import { GetListStudentRequestDto } from "./dto/get-list-student-request.dto";
import { UpdateStudentRequestDto } from "./dto/update-student-request.dto";

export const createStudentController = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const body: CreateStudentRequestDto = req.body;
        const createdStudent = await createStudentService(body.name, body.age);
        res.send(createdStudent);
    } catch (error) {
        next(error);
    }
};

export const getStudentDetailByIdController = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const id = req.params.id;

        const student = await getStudentDetailByIdService(Number(id));
        res.send(student);
    } catch (error) {
        next(error);
    }
};

export const deleteStudentByIdController = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const id = req.params.id;

        const student = await deleteStudentByIdService(Number(id));
        res.send(student);
    } catch (error) {
        next(error);
    }
};

export const updateStudentByIdController = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const id = req.params.id;
        const body: UpdateStudentRequestDto = req.body;
        const student = await updateStudentByIdService(Number(id), body.name, body.age);
        res.send(student);
    } catch (error) {
        next(error);
    }
};

export const getStudentListController = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const query: GetListStudentRequestDto = {
            ageGte: Number(req.query.ageGte),
            ageLte: Number(req.query.ageLte),

        };
        const student = await getStudentListService(query.ageGte, query.ageLte);
        res.send(student);
    } catch (error) {
        next(error);
    }
};