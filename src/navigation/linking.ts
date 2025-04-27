import { LinkingOptions } from '@react-navigation/native';
import { RootStackParamList } from './types';

export const linking: LinkingOptions<RootStackParamList> = {
    prefixes: ['myapp://', 'https://myapp.com'],
    config: {
        screens: {
            Home: '',
            Apod: {
                path: 'Apod',
                screens: {
                    ImgTheDay: 'image',
                    ExplImgTheDay: 'description',
                    SearchImgOtherDays: 'search',
                },
            },
            Epic: {
                path: 'Epic',
                screens: {
                    ImgSunNew: 'sun-earth-image',
                    SearchSunImgEarth: 'sun-earth-search',
                },
            },
        },
    },
};
