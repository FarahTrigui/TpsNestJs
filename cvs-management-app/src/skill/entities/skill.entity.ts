import { cv } from "src/cv/entities/cv.entity";
import {Entity, Column, PrimaryGeneratedColumn, ManyToMany} from "typeorm";

@Entity()
export class Skill {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    designation: string;

    @ManyToMany((type) => cv, (cv) => cv.skills)
    cvs: cv[]
}