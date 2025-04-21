import { LinkingOptions } from '@react-navigation/native';
import { RootStackParamList } from './types';

export const linking: LinkingOptions<RootStackParamList> = {
    prefixes: ['myapp://', 'https://myapp.com'],
    config:{
        screens:{
            Home: '/',
            APOD: '/APOD/'
        }
    }
}