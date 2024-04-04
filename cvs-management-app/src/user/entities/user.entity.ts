import { cv } from "src/cv/entities/cv.entity";
import {Entity, Column, PrimaryGeneratedColumn, OneToMany} from "typeorm";

@Entity()
export class User {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    username: string;

    @Column()
    email: string;

    @Column()
    password: string;
    
    @OneToMany(() => cv, (cv) => cv.user)
    cvs: cv[]
}