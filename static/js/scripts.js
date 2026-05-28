const { isProduction, isStaging } = window.SITE_CONFIG;

const PROD_HOSTNAME = 'mesh37.ru';

if (isProduction && window.location.hostname === PROD_HOSTNAME) {
    console.log('Production mode');
}