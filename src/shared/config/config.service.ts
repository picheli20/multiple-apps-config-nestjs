import { Injectable } from '@nestjs/common';

@Injectable()
export class ConfigService {
    currentBalance: string = 'No one!';
}
