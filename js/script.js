import getHeader from './Header.js';
import getMain from './Main.js';
import getFooter from './Footer.js';

/**
 * Nuevo sitio para humaya
**/

let headerTag = getHeader();
let mainTag = getMain();
let footerTag = getFooter();
document.body.insertAdjacentElement('afterbegin', footerTag);
document.body.insertAdjacentElement('afterbegin', mainTag);
document.body.insertAdjacentElement('afterbegin', headerTag);
