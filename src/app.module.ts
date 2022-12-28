import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AssetController } from './controller/asset.controller';

@Module({
  imports: [],
  controllers: [AppController, AssetController],
  providers: [AppService],
})
export class AppModule {}
