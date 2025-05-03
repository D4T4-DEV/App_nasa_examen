import { CardActions } from "./interfaces/others/CardActions";

export const cardActionsConfig: CardActions[] = [
    {
        title: 'APOD',
        subtitle: 'Explora APOD',
        textExpl: 'La Imagen Astronómica del Día',
        textExpl2: 'Empezó en 1995 y desde entonces ha ofrecido un servicio ininterrumpido con fotografías astronómicas de calidad.',
        routeName: 'Apod',
    },
    {
        title: 'Earth',
        subtitle: 'Explora Earth',
        textExpl: 'Unlock the significant public investment in earth observation data',
        textExpl2: 'Las imágenes Landsat se ofrecen al público como un proyecto conjunto entre la NASA y el USGS.',
        routeName: 'Earth',
    },
    {
        title: 'EPIC',
        subtitle: 'Explora EPIC',
        textExpl: 'Earth Polychromatic Imaging Camera',
        textExpl2: 'Es una cámara CCD de cuatro megapíxeles y un telescopio a bordo del satélite DSCOVR de NOAA que toma imágenes espectrales de 10 bandas de toda la superficie iluminada por el Sol entre 317 a 780 nanómetros.',
        routeName: 'Epic',
    },
    {
        title: 'NeoWs',
        subtitle: 'Explora NeoWs',
        textExpl: 'Near Earth Object Web Service',
        textExpl2: 'NeoWs es una herramienta para acceder y consultar información sobre los NEO (Objetos Próximos a la Tierra), especialmente asteroides.',
        routeName: 'Neows',
    },
    {
        title: 'Rover',
        subtitle: 'Explora Rover',
        textExpl: 'Rover fotos',
        textExpl2: 'Datos de imágenes recopilados por los rovers Curiosity, Opportunity y Spirit de la NASA en Marte',
        routeName: 'Rover',
    },
];
