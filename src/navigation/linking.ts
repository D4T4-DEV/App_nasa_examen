import { LinkingOptions } from '@react-navigation/native';
import { RootStackParamList } from './types';

export const linking: LinkingOptions<RootStackParamList> = {
    prefixes: ['myapp://', 'https://myapp.com'],
    config: {
        screens: {
            Home: '',
            APOD: {
                path: 'APOD',
                screens: {
                    ImgTheDay: 'image',
                    ExplImgTheDay: 'description',
                    SearchImgOtherDays: 'search',
                },
            },
            EPIC: {
                path: 'EPIC',
                screens: {
                    ImgSunNew: 'sun-earth-image',
                    SearchSunImgEarth: 'sun-earth-search',
                },
            },
        },
    },
};
