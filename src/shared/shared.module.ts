import { Module, DynamicModule } from '@nestjs/common';
import { ConfigService } from './config/config.service';
import { BalanceController } from './balance/ballance.controller';

@Module({
  controllers: [BalanceController],
})
export class SharedModule {

  static forRoot(config: any): DynamicModule {
    return {
      module: SharedModule,
      providers: [{
        provide: ConfigService,
        useClass: config,
      }],
      exports: [ConfigService],
    };
  }
}
