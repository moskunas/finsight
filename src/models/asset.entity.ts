import { Entity, Column } from 'typeorm';
import { BaseEntity } from './base.entity';

@Entity({ name: 'asset' })
export class Asset extends BaseEntity {
  @Column({ type: 'varchar', length: 4 })
  displaySymbol: string;

  @Column({ type: 'varchar', length: 300 })
  description: string;
}
