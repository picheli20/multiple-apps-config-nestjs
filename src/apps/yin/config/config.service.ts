import { Injectable } from '@nestjs/common';
import { ConfigService as BaseConfig } from '../../../shared/config/config.service';

@Injectable()
export class ConfigService extends BaseConfig {
    currentBalance = 'Yin is on comand now!';
}
