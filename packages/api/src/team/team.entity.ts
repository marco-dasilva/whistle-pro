import { Entity, ObjectID, ObjectIdColumn, Column } from "typeorm";

@Entity()
export class TeamEntity {
  @ObjectIdColumn()
  id: ObjectID;

  @Column()
  name: String;
}
