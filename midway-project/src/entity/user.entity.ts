import { Entity, Column, PrimaryGeneratedColumn,CreateDateColumn} from 'typeorm';

@Entity('mgr_user')  // 和数据表名对应
export class User {
  @PrimaryGeneratedColumn() // 自增主键列
  id: number;

  @Column()
  name: string;

  @Column()
  telephone: string;

  @Column()
  platform: string;

  @Column()
  org_id: number;
  
  @Column()
  email: string;

  @CreateDateColumn({
      type: 'timestamp',
  })
  create_time:Date;
}
