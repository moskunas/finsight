import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Asset } from '../models/asset.entity';
import { Repository } from 'typeorm';

@Injectable()
export class AssetService {
  constructor(
    @InjectRepository(Asset) private readonly repo: Repository<Asset>,
  ) {}

  public async retrieveAssetSymbolData() {
    return await this.repo.find();
  }
}
