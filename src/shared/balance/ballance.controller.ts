import { Controller, Get } from '@nestjs/common';
import { ConfigService } from '../config/config.service';

@Controller('balance')
export class BalanceController {
    constructor(private configService: ConfigService) {}

    @Get()
    main() {
        return this.configService;
    }
}
