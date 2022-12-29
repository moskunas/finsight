import { Controller, Get } from '@nestjs/common';
import { AssetService } from '../services/asset.service';

@Controller('asset')
export class AssetController {
  constructor(private serv: AssetService) {}

  @Get('data')
  public async retrieveAssetSymbolData() {
    return await this.serv.retrieveAssetSymbolData();
  }
}
