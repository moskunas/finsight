import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AssetController } from './controllers/asset.controller';
import { configService } from './config/config.service';
import { AssetService } from './services/asset.service';
import { Asset } from './models/asset.entity';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot(configService.getTypeOrmConfig()),
    TypeOrmModule.forFeature([Asset]),
  ],
  controllers: [AppController, AssetController],
  providers: [AppService, AssetService],
})
export class AppModule {}
