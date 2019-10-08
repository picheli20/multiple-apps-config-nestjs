import { Module } from '@nestjs/common';
import { SharedModule } from '../../shared/shared.module';
import { ConfigService } from './config/config.service';

@Module({
    imports: [ SharedModule.forRoot(ConfigService) ],
})
export class YinModule {}
