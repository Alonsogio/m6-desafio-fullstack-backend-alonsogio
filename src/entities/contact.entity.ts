import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  OneToMany,
  ManyToOne,
} from "typeorm";
import Client from "./client.entity";

@Entity("contacts")
export class Contact {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ length: 100 })
  fullName: string;

  @Column({ length: 62, unique: true })
  email: string;

  @Column()
  contact: string;

  @CreateDateColumn({ type: "date" })
  createdAt: Date;

  @ManyToOne(() => Client, (client) => client.contacts)
  client: Client;
}
