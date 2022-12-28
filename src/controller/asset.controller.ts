import { Controller, Get } from '@nestjs/common';

// goal here is to get all asset data and

@Controller('asset')
export class AssetController {
  @Get('data')
  retrieveAssetSymbolData() {
    return 'This will retrieve all US XCH asset symbol data';
  }
}
