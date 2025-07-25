//import 'https://cdn.jsdelivr.net/gh/orestbida/cookieconsent@3.0.1/dist/cookieconsent.umd.js';

CookieConsent.run({
    guiOptions: {
        consentModal: {
            layout: "box wide",
            position: "bottom center",
            equalWeightButtons: true,
            flipButtons: true
        },
        preferencesModal: {
            layout: "box",
            position: "right",
            equalWeightButtons: true,
            flipButtons: true
        }
    },
    categories: {
        necessary: {
            readOnly: true
        },
        analytics: {}
    },
    language: {
        default: "es",
        autoDetect: "browser",
        translations: {
            en: {
                consentModal: {
                    title: "",
                    description: "We use our own and third-party cookies for analytical purposes and to show you personalised advertising based on a profile of your browsing habits (e.g. pages visited). You can obtain more information and configure your preferences at the following link:",
                    acceptAllBtn: "Accept all",
                    acceptNecessaryBtn: "Reject all",
                    showPreferencesBtn: "Manage preferences",
                    footer: "<a href=\"/legal\">Legal notice</a>\n<a href=\"/en/privacy\">Privacy</a>"
                },
                preferencesModal: {
                    title: "Consent Preferences Center",
                    acceptAllBtn: "Accept all",
                    acceptNecessaryBtn: "Reject all",
                    savePreferencesBtn: "Save preferences",
                    closeIconLabel: "Close modal",
                    serviceCounterLabel: "Service|Services",
                    sections: [
                        {
                            title: "Cookie Usage",
                            description: "This site uses cookies. We use cookies mainly to improve and analyze your experience on our websites and for marketing purposes. Because we respect your right to privacy, you can choose not to allow some types of cookies. Click on the different category headings to find out more and change your default settings. Blocking some types of cookies may negatively impact your experience on the site and limit the services we are able to provide."
                        },
                        {
                            title: "Strictly Necessary Cookies <span class=\"pm__badge\">Always Enabled</span>",
                            description: "These cookies are necessary for the website to function and cannot be switched off in our systems. They are usually only set in response to actions made by you which amount to a request for services, such as setting your privacy preferences, logging in, or filling in forms.",
                            linkedCategory: "necessary"
                        },
                        {
                            title: "Analytics Cookies",
                            description: "These cookies help us to understand how visitors engage with the website. We may use a set of cookies to collect information and report site usage statistics.",
                            linkedCategory: "analytics"
                        },
                        {
                            title: "More information",
                            description: "For any query in relation our policy on cookies and your choices, please <a class=\"cc__link\" href=\"/en/contacto\">contact us</a>."
                        }
                    ]
                }
            },
            es: {
                consentModal: {
                    title: "",
                    description: "Utilizamos cookies propias y de terceros para fines analíticos y para mostrarte publicidad personalizada en base a un perfil elaborado a partir de tus hábitos de navegación (por ejemplo, páginas visitadas). Puedes obtener más información y configurar tus preferencias en el siguiente enlace:",
                    acceptAllBtn: "Aceptar todo",
                    acceptNecessaryBtn: "Rechazar todo",
                    showPreferencesBtn: "Gestionar preferencias",
                    footer: "<a href=\"/legal\">Aviso legal</a>\n<a href=\"/privacy\">Política de privacidad</a>"
                },
                preferencesModal: {
                    title: "Preferencias de Consentimiento",
                    acceptAllBtn: "Aceptar todo",
                    acceptNecessaryBtn: "Rechazar todo",
                    savePreferencesBtn: "Guardar preferencias",
                    closeIconLabel: "Cerrar modal",
                    serviceCounterLabel: "Servicios",
                    sections: [
                        {
                            title: "Uso de Cookies",
                            description: "Este sitio utiliza cookies. Usamos cookies principalmente para mejorar y analizar su experiencia en nuestros sitios web y con fines de marketing. Como respetamos su derecho a la privacidad, puede optar por no permitir el uso de algunos tipos de cookies. Haga clic en los títulos de las diferentes categorías para obtener más información y cambiar la configuración predeterminada. El bloqueo de algunos tipos de cookies puede afectar negativamente a su experiencia en el sitio y limitar los servicios que podemos proporcionarle."
                        },
                        {
                            title: "Cookies Estrictamente Necesarias <span class=\"pm__badge\">Siempre Habilitado</span>",
                            description: "Estas cookies son necesarias para que el sitio web funcione y no se pueden desactivar en nuestros sistemas. Por lo general, solo se habilitan en respuesta a cualquier acción que realice y que represente una solicitud de servicios, como establecer sus preferencias de privacidad, iniciar sesión o rellenar formularios.",
                            linkedCategory: "necessary"
                        },
                        {
                            title: "Cookies Analíticas",
                            description: "Estas cookies nos ayudan a conocer cómo los visitantes interactúan con el sitio web. Podemos utilizar un conjunto de cookies para recopilar información e informar sobre las estadísticas de uso del sitio.",
                            linkedCategory: "analytics"
                        },
                        {
                            title: "Más información",
                            description: "Para cualquier consulta en relación a la política de privacidad y cookies, por favor, <a class=\"cc__link\" href=\"/contacto\">contacta con nosotros</a>."
                        }
                    ]
                }
            }
        }
    }
});