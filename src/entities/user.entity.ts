import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  OneToMany,
} from "typeorm";
import Contact from "./contact.entity";
import { Exclude } from "class-transformer";

@Entity("users")
class User {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ length: 50 })
  name: string;

  @Column({ length: 127 })
  email: string;

  @Column({ length: 20 })
  number: string;

  @Column({ length: 120 })
  @Exclude()
  password: string;

  @Column({ default: false })
  isAdm: boolean;

  @CreateDateColumn()
  createdAt: Date;

  @OneToMany(() => Contact, (contact) => contact.user)
  contacts: Contact[];
}

export default User;
