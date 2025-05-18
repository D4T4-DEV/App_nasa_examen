import { LinkingOptions } from '@react-navigation/native';
import { RootStackParamList } from './types';

export const linking: LinkingOptions<RootStackParamList> = {
    prefixes: ['myapp://', 'https://myapp.com', 'http://localhost:8081'],
    config: {
        screens: {
            Home: '',

            Apod: {
                path: 'apod',
                screens: {
                    TabsStack: {
                        path: 'tabs',
                        screens: {
                            ImgTheDay: 'image',
                            ExplImgTheDay: 'description',
                            SearchImgOtherDays: 'search',
                        }
                    }
                },
            },

            Earth: 'earth',

            Epic: {
                path: 'epic',
                screens: {
                    DrawerStack: {
                        path: 'drawer',
                        screens: {
                            ImgSunNew: 'sun-earth-image',
                            SearchSunImgEarth: 'sun-earth-search',
                        }
                    }
                },
            },

            Neows: 'neows',
            Rover: 'rover',
            ImageModalScreen: 'modal-image',
        },
    },
};

