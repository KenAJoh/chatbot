const cookieDomain =
    window.location.hostname === 'localhost' ? undefined : '.nav.no';

let internalClientLanguage = 'no';

if (window.location.href.includes('/en/')) {
    internalClientLanguage = 'en';
}

const clientLanguage = internalClientLanguage;
const boostApiUrlBase = 'https://navtest.boost.ai/api/chat/v2';
const conversationIdCookieName = 'nav-chatbot:conversation';
const languageCookieName = 'nav-chatbot:language';
const openCookieName = 'nav-chatbot:open';
const consentCookieName = 'nav-chatbot:consent';
const unreadCookieName = 'nav-chatbot:unread';
const cacheSessionName = 'nav-chatbot:cache';
const containerWidthNumber = 400;
const containerWidth = `${containerWidthNumber}px`;
const containerHeightNumber = 568;
const containerHeight = `${containerHeightNumber}px`;
const linkDisableTimeout = 1000 * 10;
const botResponseRevealDelay = 1250;
const botResponseRevealDelayBuffer = botResponseRevealDelay / 2;
const minimumPollTimeout = 1000;
const agentMaximumPollTimeout = 4000;
const botMaximumPollTimeout = 30000;
const authenticationPrefix = 'Init:Auth:';
const englishButtonText = 'For English, click here';
const englishButtonResponse = 'English, please';

const fullscreenMediaQuery = `(max-width: ${containerWidthNumber + 100}px)`;

export {
    cookieDomain,
    clientLanguage,
    boostApiUrlBase,
    conversationIdCookieName,
    languageCookieName,
    openCookieName,
    consentCookieName,
    unreadCookieName,
    cacheSessionName,
    containerWidthNumber,
    containerWidth,
    containerHeightNumber,
    containerHeight,
    linkDisableTimeout,
    botResponseRevealDelay,
    botResponseRevealDelayBuffer,
    minimumPollTimeout,
    agentMaximumPollTimeout,
    botMaximumPollTimeout,
    authenticationPrefix,
    englishButtonText,
    englishButtonResponse,
    fullscreenMediaQuery
};
