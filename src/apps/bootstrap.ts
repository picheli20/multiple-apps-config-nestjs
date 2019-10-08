import { YangModule } from './yang/yang.module';
import { YinModule } from './yin/yin.module';

export const getModule = () => {
    switch (process.env.NANE) {
        case 'yin':
            return YinModule;
        default:
        case 'yang':
            return YangModule;
    }
};
