import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  OneToMany,
} from "typeorm";
import { Contact } from "./contact.entity";

@Entity("clients")
class Client {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ length: 100 })
  fullName: string;

  @Column({ length: 62 })
  email: string;

  @Column()
  contact: string;

  @CreateDateColumn({ type: "date" })
  createdAt: Date;

  @OneToMany(() => Contact, (contacts) => contacts.client)
  contacts: Contact[];
}

export default Client;
