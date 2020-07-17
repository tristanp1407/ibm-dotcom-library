/**
 * Copyright IBM Corp. 2020
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { settings as ddsSettings } from '@carbon/ibmdotcom-utilities';
import footerLegalItem from './footerLegalItem.template';
import footerNav from './footerNav.template';
import settings from 'carbon-components/es/globals/js/settings';

const { stablePrefix } = ddsSettings;
const { prefix } = settings;
/**
 * renders ibm logo and legal nav
 *
 * @param {object} props Property elements passing into the template
 * @param {string} props.type type of footer in use [tall|short]
 * @param {object} props.footerMenu Footer menu data
 * @param {object} props.footerThin Bottom footer menu items for full and short footer
 * @returns {object} JSX object
 */
const footerTemplate = ({ type, footerMenu, footerThin }) => {
  return `
  <footer data-autoid="${stablePrefix}--footer" class="${prefix}--footer ${_setFooterType(
    type
  )}">
    <section class="${prefix}--footer__main">
      <div class="${prefix}--footer__main-container">
        <div data-autoid="${stablePrefix}--footer-logo" class="${prefix}--footer-logo"><a data-autoid="${stablePrefix}--footer-logo__link" class="${prefix}--footer-logo__link" href="https://www.ibm.com/"><svg class="${prefix}--footer-logo__logo" viewBox="0 0 157 65" role="img"
              aria-labelledby="footer-logo">
              <title id="footer-logo">IBM Logo</title>
              <path
                d="M30.4436498,60.2076728 L30.4436498,64.2376746 L-2.91322522e-13,64.2376746 L-2.91322522e-13,60.2076728 L30.4436498,60.2076728 Z M108.735358,60.2067171 L108.735358,64.2376746 L86.9826603,64.2376746 L86.9826603,60.2067171 L108.735358,60.2067171 Z M156.592795,60.2067171 L156.592795,64.2376746 L134.840096,64.2376746 L134.840096,60.2067171 L156.592795,60.2067171 Z M123.176704,60.2067171 L121.779475,64.2376746 L120.398188,60.2067171 L123.176704,60.2067171 Z M34.7933454,60.2078639 L77.5682441,60.2078639 C74.7705526,62.6327259 71.1773563,64.1319583 67.2410591,64.2324704 L66.8180207,64.2378657 L34.7933454,64.2378657 L34.7933454,60.2078639 L77.5682441,60.2078639 Z M30.4436498,51.7462936 L30.4436498,55.7762954 L-2.91322522e-13,55.7762954 L-2.91322522e-13,51.7462936 L30.4436498,51.7462936 Z M82.8448933,51.7469625 C82.5134031,52.9954078 82.0440654,54.1860508 81.4563549,55.3022459 L81.1972884,55.7760087 L34.7933454,55.7760087 L34.7933454,51.7469625 L82.8448933,51.7469625 Z M156.592795,51.742471 L156.592795,55.7734284 L134.840096,55.7734284 L134.840096,51.742471 L156.592795,51.742471 Z M108.735358,51.742471 L108.735358,55.7734284 L86.9826603,55.7734284 L86.9826603,51.742471 L108.735358,51.742471 Z M126.109666,51.7420887 L124.712437,55.7730462 L118.86283,55.7730462 L117.466539,51.7420887 L126.109666,51.7420887 Z M21.7451962,43.2849144 L21.7451962,47.3149162 L8.69751584,47.3149162 L8.69751584,43.2849144 L21.7451962,43.2849144 Z M82.940355,43.2851055 C83.2119472,44.4164829 83.378718,45.588834 83.4161671,46.7957568 L83.4242276,47.3151073 L68.7955217,47.3151073 L68.7955217,43.2851055 L82.940355,43.2851055 Z M56.5390105,43.2849144 L56.5390105,47.3149162 L43.4913301,47.3149162 L43.4913301,43.2849144 L56.5390105,43.2849144 Z M129.041034,43.2784159 L127.644742,47.3084177 L115.930525,47.3084177 L114.534234,43.2784159 L129.041034,43.2784159 Z M147.891528,43.2782248 L147.891528,47.3082266 L134.840096,47.3082266 L134.840096,43.2782248 L147.891528,43.2782248 Z M108.735358,43.2782248 L108.735358,47.3082266 L95.6839271,47.3082266 L95.6839271,43.2782248 L108.735358,43.2782248 Z M21.7451962,34.8235352 L21.7451962,38.853537 L8.69751584,38.853537 L8.69751584,34.8235352 L21.7451962,34.8235352 Z M77.8615684,34.8232485 C78.9907919,35.873419 79.9779764,37.0776317 80.7882576,38.4059297 L81.0517515,38.8532503 L43.4916115,38.8532503 L43.4916115,34.8232485 L77.8615684,34.8232485 Z M108.735358,34.8139786 L108.735358,38.8449361 L95.6839271,38.8449361 L95.6839271,34.8139786 L108.735358,34.8139786 Z M147.891528,34.8139786 L147.891528,38.8449361 L134.840096,38.8449361 L134.840096,34.8139786 L147.891528,34.8139786 Z M131.973433,34.8136919 L130.577142,38.8446494 L112.998313,38.8446494 L111.602022,34.8136919 L131.973433,34.8136919 Z M81.1948503,26.3623471 C80.4234674,27.7178498 79.472067,28.9518216 78.3755133,30.0356991 L78.0046671,30.3913933 L43.4912364,30.3913933 L43.4912364,26.3623471 L81.1948503,26.3623471 Z M21.7451962,26.362156 L21.7451962,30.3912022 L8.69751584,30.3912022 L8.69751584,26.362156 L21.7451962,26.362156 Z M147.891528,26.3490635 L147.891528,30.380021 L134.840096,30.380021 L134.839345,26.5412738 L133.509447,30.380021 L122.054045,30.380021 L123.426893,26.3490635 L147.891528,26.3490635 Z M120.148562,26.3492547 L121.52141,30.3802121 L110.06507,30.3802121 L108.735358,26.5413415 L108.735358,30.3802121 L95.6839271,30.3802121 L95.6839271,26.3492547 L120.148562,26.3492547 Z M21.7451962,17.9007768 L21.7451962,21.9307786 L8.69751584,21.9307786 L8.69751584,17.9007768 L21.7451962,17.9007768 Z M83.4242276,17.900299 C83.4242276,19.1161325 83.2914058,20.2997723 83.0502626,21.4428957 L82.940355,21.9303008 L68.7955217,21.9303008 L68.7955217,17.900299 L83.4242276,17.900299 Z M56.5390105,17.8998212 L56.5390105,21.929823 L43.4913301,21.929823 L43.4913301,17.8998212 L56.5390105,17.8998212 Z M147.891434,17.8846262 L147.891434,21.9155837 L124.936556,21.9155837 L126.307529,17.8846262 L147.891434,17.8846262 Z M117.266988,17.8844351 L118.638898,21.9153926 L95.6840208,21.9153926 L95.6840208,17.8844351 L117.266988,17.8844351 Z M30.4436498,9.43844199 L30.4436498,13.4684438 L-2.91322522e-13,13.4684438 L-2.91322522e-13,9.43844199 L30.4436498,9.43844199 Z M81.197476,9.43844199 C81.8186099,10.5338628 82.324153,11.7053777 82.6946307,12.9369814 L82.8450809,13.4684438 L34.793533,13.4684438 L34.793533,9.43844199 L81.197476,9.43844199 Z M156.593451,9.41971113 L156.593451,13.4506686 L127.817099,13.4506686 L129.189946,9.41971113 L156.593451,9.41971113 Z M114.385696,9.41999783 L115.757606,13.4509553 L86.9821914,13.4509553 L86.9821914,9.41999783 L114.385696,9.41999783 Z M30.4436498,0.978018462 L30.4436498,5.00706462 L-2.91322522e-13,5.00706462 L-2.91322522e-13,0.978018462 L30.4436498,0.978018462 Z M66.818302,0.977540633 C70.7785294,0.977540633 74.4118131,2.3931571 77.2657493,4.75043913 L77.5685254,5.00658679 L34.7936268,5.00658679 L34.7936268,0.977540633 L66.818302,0.977540633 Z M156.592607,0.956229502 L156.592607,4.98718697 L130.69886,4.98718697 L132.07077,0.956229502 L156.592607,0.956229502 Z M111.495495,0.955273846 L112.867405,4.98527566 L86.9820976,4.98527566 L86.9820976,0.955273846 L111.495495,0.955273846 Z">
              </path>
            </svg></a></div>
            ${_optionalFooterNav(type, footerMenu)}
      </div>
    </section>
    <aside data-autoid="${stablePrefix}--footer-legal-nav" class="${prefix}--legal-nav__container">
      <nav class="${prefix}--legal-nav">
        <div class="${prefix}--legal-nav__list">
          ${_renderLegalItems(footerThin)}

          <ul class="${prefix}--legal-nav__holder">
            <li class="${prefix}--legal-nav__list-item" data-autoid="${stablePrefix}--privacy-cp"></li>
          </ul>
        </div>
      </nav>
    </aside>
  </footer>
  `;
};

const FOOTER_LEGAL_NAV_DIVIDE_CHUNKS = 3;

/**
 * Renders the list of legal navigation items
 *
 * @param {object} footerThin Legal items
 * @returns {string} HTML legal list items
 * @private
 */
function _renderLegalItems(footerThin) {
  if (footerThin && footerThin.length > 0) {
    const chunkLength = Math.ceil(
      footerThin.length / FOOTER_LEGAL_NAV_DIVIDE_CHUNKS
    );
    return Array.from({ length: FOOTER_LEGAL_NAV_DIVIDE_CHUNKS })
      .map((_, i) => footerThin.slice(i * chunkLength, (i + 1) * chunkLength))
      .map(
        chunk => `
        <ul class="${prefix}--legal-nav__holder">
          ${chunk
            .map(item => footerLegalItem({ url: item.url, label: item.title }))
            .join('')}
        </ul>
      `
      )
      .join('');
  }
}

/**
 * renders optional footer nav for tall
 *
 * @param {string} type type of footer in use [tall|short]
 * @param {object} footerMenu Nav items
 * @returns {object} JSX object
 * @private
 */
function _optionalFooterNav(type, footerMenu) {
  if (type !== 'short') {
    return footerNav(footerMenu);
  }
  return '';
}
/**
 * sets the footer type
 *
 * @param {string} type type of footer in use
 * @returns {object} JSX object
 * @private
 */
function _setFooterType(type) {
  let typeClassName = '';

  if (type === 'short') {
    typeClassName = `${prefix}--footer--short`;
  }
  return typeClassName;
}

export default footerTemplate;
