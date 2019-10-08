import { YangModule } from './yang/yang.module';
import { YinModule } from './yin/yin.module';

export const getModule = () => {
    switch (process.env.PROJECT_NAME) {
        case 'yin':
            return YinModule;
        case 'yang':
            return YangModule;
        default:
            throw new Error('PROJECT_NAME not defined or invalid');
    }
};
