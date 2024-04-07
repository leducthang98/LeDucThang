import { MoreThan } from "typeorm";
import { datasource } from "../../data-source";
import { Student } from "../../entity/student";

export const createStudentService = async (name: string, age: number) => {
    const student = await datasource.getRepository(Student).save({
        age,
        name
    });

    return student;
};

export const getStudentDetailByIdService = async (id: number) => {
    const student = await datasource.getRepository(Student).findOne({
        where: {
            id
        }
    });

    return student;
};

export const deleteStudentByIdService = async (id: number) => {
    const student = await datasource.getRepository(Student).delete(id);

    return student;
};

export const updateStudentByIdService = async (id: number, name: string, age: number) => {
    const student = await datasource.getRepository(Student).update(id, {
        age,
        name
    });

    return student;
};

export const getStudentListService = async (ageGte?: number, ageLte?: number) => {
    let sql = `select * from student where 1 = 1`;
    const params = [];
    if (ageGte) {
        sql += ` and age >= ?`;
        params.push(ageGte);
    }

    if (ageLte) {
        sql += ` and age <= ?`;
        params.push(ageLte);
    }

    const students = await datasource.query(sql, params);

    return students;
};