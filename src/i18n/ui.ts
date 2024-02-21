export const languages = {
    en: 'English',
    es: 'Español',
    fr: 'Français',
};
export const defaultLang = 'es';

export const ui = {
    en: {
        'index.title': 'EN: Un mundo de conexiones nunca fue tan facil',
        'index.subtitle': "EN: La distancia ya no es un problema!",
        'index.description': "EN: Disfruta de emocionantes videollamadas y animadas conversaciones en tiempo real con personas de todo el mundo.",
        'index.createMeetingButton': "EN: Crear reunion",
        'index.joinMeetingButton': "EN: Unirme",
        'meeting.title': "EN:dfsfef"

    },
    es: {
        'index.title': 'Un mundo de conexiones nunca fue tan facil',
        'index.subtitle': "La distancia ya no es un problema!",
        'index.description': "Disfruta de emocionantes videollamadas y animadas conversaciones en tiempo real con personas de todo el mundo.",
        'index.createMeetingButton': "Crear reunion",
        'index.joinMeetingButton': "Unirme",
        'meeting.title': "ES:dfsfef"
    },
    fr: {
        'index.title': 'FR: Un mundo de conexiones nunca fue tan facil',
        'index.subtitle': "FR: La distancia ya no es un problema!",
        'index.description': "FR: Disfruta de emocionantes videollamadas y animadas conversaciones en tiempo real con personas de todo el mundo.",
        'index.createMeetingButton': "FR: Crear reunion",
        'index.joinMeetingButton': "FR: Unirme",
        'meeting.title': "FR:dfsfef"
    },
} as const;

export const showDefaultLang = false;

export const routes = {
    es: {
        index: 'inicio',
        meetting: 'reunion'
    },
    en: {
        index: 'home',
        meetting: 'meetting'

    },
    fr: {
        index: 'fr:inicio',
        meetting: 'fr:meetting'
    }
};