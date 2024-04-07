import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";
import { Base } from "./base";

@Entity()
export class Student extends Base {
    @PrimaryGeneratedColumn()
    id?: number;

    @Column()
    name: string;

    @Column()
    age: number;
}