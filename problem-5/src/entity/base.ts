import { CreateDateColumn, UpdateDateColumn } from "typeorm";

export class Base {
    @CreateDateColumn()
    createdAt?: string;

    @UpdateDateColumn()
    updatedAt: string;
}