import { Skill } from "src/skill/entities/skill.entity";
import { User } from "src/user/entities/user.entity";
import {Column, Entity, JoinTable, ManyToMany, ManyToOne, PrimaryGeneratedColumn} from "typeorm";

@Entity()
export class cv {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    firstname: string;

    @Column()
    age: string;

    @Column()
    Cin: string;

    @Column()
    Job: string;

    @Column()
    path: string;

    @ManyToMany((type) => Skill, (skill) => skill.cvs, {
        cascade: true,
    })
    @JoinTable()
    skills: Skill[]
    
    @ManyToOne(() => User, (user) => user.cvs)
    user: User
}