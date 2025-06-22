"use strict";
/**
 * @typedef {'login'|'logout'|'accountInfo'|'promotions'|'promotion'|'gameUrl'
 * |'selections'|'domainInfo'|'breakpoint'|'leaderboard'
 * |'realityCheckPopup'|'showModalDialogResult'|'iFrameResize'
 * |'callbackFormConfig'|'saveCallbackFormResult'|'cancelCallbackFormResult'
 * |'setPromotionOptInStatusResult'|'promotionOptInStatus'|'promotionsOptInStatuses'
 * |'eventMapChanges','eventsChanges'|'marketsChanges'|'betPlaced'|'listOfSports'|'competitionsChanges'|'document'|'lobby'|'popularBets'} BespokeEvents
 */
/**
 * @typedef {undefined} BespokeLoginEvent
 * @typedef {undefined} BespokeLogoutEvent
 */
/**
 * @typedef {('live' | 'upcoming' | 'outright' | 'today' | 'tomorrow')} BespokeEventMapType
 */
/**
 * @typedef {Object} BespokeUserDataResponse
 * @property {string} value
 */
/**
 * @typedef {Object} BespokeApiError
 * @property {string} errorCode
 * @property {string} errorMessage
 * @property {string} localisedErrorMessage
 */
/**
 * @typedef {Object} BespokeApiCompositeError
 * @property {BespokeApiError[]} innerErrors
 */
/**
 * @typedef {Object} BespokeAccountInfoEvent
 * @property {boolean} [emailVerified]
 * @property {string} [subType]
 * @property {string} [errorText]
 * @property {string} [captchaPublicKey]
 * @property {string} [customerTier]
 * @property {string} [currencyId]
 * @property [error]
 * @property [pendingLimitsToConfirm]
 * @property [freeBets]
 * @property {string} [SBPin]
 * @property {string|null} [lastTCAcceptanceDate]
 * @property [sessionLimitValue]
 * @property {number} [vipMarketing]
 */
/**
 * @typedef {Object} BespokePromotionEvent
 * @property {Object} [assets]
 * @property {Object} [assets.promotionImage]
 * @property {string} [assets.promotionImage.value]
 * @property {Object} [assets.casinoBanner]
 * @property {string} [assets.casinoBanner.value]
 * @property {Object} [assets.sportBanner]
 * @property {string} [assets.sportBanner.value]
 * @property {Object} [assets.thumbnail]
 * @property {string} [assets.thumbnail.value]
 * @property {string[]} [acquisition]
 * @property {string} [tiers]
 * @property {string} [briefDescription]
 * @property {string[]} [labels]
 * @property {string} promotionId
 * @property {string} name
 * @property {string} type
 * @property {string} fullDescription
 * @property {string} [expirationDate]
 * @property {string} [expirationPeriod]
 * @property {string} [fullDescription]
 * @property {string} [termsAndConditions]
 * @property {string} [termsAndConditionsTitle]
 * @property {string} [termsAndConditionsUrl]
 * @property {string} callToActionType
 * @property {string} callToActionText
 * @property {string} callToAction
 */
/**
 * @typedef {BespokePromotionEvent[]} BespokePromotionsEvent
 */
/**
 * @typedef {string} BespokeGameUrlEvent
 */
/**
 * @typedef {Object} GatewayTextContent
 * @property {string} title
 * @property {string} body
 * @property {string} abstractText
 * */
/**
 * @typedef {Object} GatewaySeoChildUrl
 * @property {string} id
 * @property {string} localisedPath
 * @property {string} [localisedEntityId]
 * @property {GatewayTextContent} textContent
 */
/**
 * @typedef {Object} Gateway
 * @property {string} id
 * @property {'Bespoke'} type
 * @property {string} typeValue
 * @property {string} name
 * @property {string} icon
 * @property {string} [description]
 * @property {boolean} [hideInMainNavigation]
 * @property {boolean} [includeInSitemap]
 * @property {GatewayTextContent} [textContent]
 * @property {GatewaySeoChildUrl[]} [seoChildUrls]
 */
/**
 * @typedef {Object} BespokeDomainInfoEvent
 * @property {string} domainId
 * @property {string} domainLanguage
 * @property {string} domainName
 * @property {string} gatewayPath
 * @property {Gateway} gateway
 */
/**
 * @typedef {(string|number)[]} BespokeSelectionsEvent
 */
/**
 * @typedef {[string, string]} BespokeBreakpointEvent
 */
/**
 * @typedef {Object} BespokeLeaderboardEvent
 * @property {Array<{
 *   sbpin: string,
 *   points: number,
 *   position: number,
 * }>} entries
 * @property {Object} [currentUser]
 * @property {string} [currentUser.sbpin]
 * @property {number} [currentUser.points]
 * @property {number} [currentUser.position]
 */
/**
 * @typedef {Object} BespokeShowModalDialogResult
 * @property {'OK'|'Cancel'|'Yes'|'No'|'Retry'|'Abort'|'Ignore'} action
 */
/**
 * @typedef {Object} BespokeErrorEvent
 * @property {string} method - name of the method the client invoked
 * @property {string} error - error code
 */
/**
 * @typedef {Object} BespokeIFrameResizeEvent
 * @property {number|string} width
 * @property {number|string} height
 * @property {'init'|'resizeParent'|'resetPage'|'mutationObserver'} type - reason for resizing
 */
/**
 * @typedef {Object} BespokeGetCallbackFormResult
 * @property {Array<{
 *   countryId: string,
 *   countryCode: string,
 * }>} [areaCodes]
 * @property {Object} [callback]
 * @property {Array<{
 *   startTime: string,
 *   endTime: string,
 * }>} [callback.timeSlots]
 * @property {Object} [callback.callBack]
 * @property {string} callback.callBack.caseId
 * @property {string} callback.callBack.timeSlot
 * @property {string} callback.callBack.phoneNumber
 * @property {string} callback.callBack.dateOfCallback
 * @property {string} callback.callBack.caseStatus
 * @property {string} callback.callBack.displayDate
 * @property {boolean} callback.isCallBackAvailable
 * @property {boolean} callback.isActiveCallBack
 * @property {boolean} [callback.isOutOfHours]
 * @property {boolean} [callback.isLimitReached]
 * @property {boolean} [callback.isThreeAttempts]
 * @property {boolean} [callback.isLastRequestInvalid]
 * @property {boolean} [callback.isNoAnswer]
 * @property {string} [callback.dateOfCallback]
 * @property {string} [callback.displayDate]
 * @property {boolean} callback.isNextDay
 */
/**
 * @typedef {Object} BespokeSaveCallbackFormResult
 * @property {string} [caseId]
 * @property {string} [dateOfCallback]
 * @property [callbackError]
 */
/**
 * @typedef {undefined} BespokeSetPromotionOptInStatusResult
 */
/**
 * @typedef {Object} BespokePromotionOptInStatus
 * @property {boolean} optedIn
 * @property {string} optedDate
 */
/**
 * @typedef {Object} BespokePromotionsOptInStatuses
 * @property {string} promotionId
 * @property {string} optedDate
 */
/**
 * @typedef {Object} FeatureEvent
 * @property {string} eventId
 * @property {string} [marketId]
 * @property {string} [uniqueId]
 * @property {string} [marketSelectionId]
 * @property {number} [eventLiveOnListTimer]
 * @property {string} [eventImage]
 * @property {EventDetails} [eventDetails]
 * @property {E3SelectionViewModel[] | E3SelectionViewModel} [marketsDetails]
 * @property {IMiniCouponFeauredMarkets} [miniCouponMarkets]
 * @property {IMiniCouponMarketsDetails} [miniCouponMarketsDetails]
 * @property {string} periodLengthInMin;
 * @property {string} periodNumber;
 * @property {boolean} [isOutright]
 * @property {boolean} [sportPageOnly]
 */
/**
 * @typedef {FeatureEvent[]} BespokeFeatureEventsEvent
 */
/**
 * @typedef {BespokeApiCompositeError|BespokeApiError|BespokeUserDataResponse|BespokeLoginEvent|BespokeLogoutEvent|BespokeAccountInfoEvent|BespokePromotionsEvent
 * |BespokeGameUrlEvent|BespokeSelectionsEvent|BespokeDomainInfoEvent|BespokeBreakpointEvent
 * |BespokeLeaderboardEvent|BespokeShowModalDialogResult|BespokeIFrameResizeEvent
 * |BespokeGetCallbackFormResult|BespokeSaveCallbackFormResult
 * |BespokeSetPromotionOptInStatusResult|BespokePromotionOptInStatus|BespokePromotionsOptInStatuses} BespokeIncomingEvents
 */
/**
 * @param {Object} [options]
 * @param {boolean} [options.useIFrameResizer=true]
 * @param {Object} [options.iFrameResizerOptions]
 * @param {boolean} [options.log=false] -
 * Setting the log option to true will make the scripts in both the host page and the iFrame output everything they do to the JavaScript console, so you can see the communication between the two scripts.
 * @param {boolean} [options.autoResize=true] -
 * When enabled changes to the Window size or the DOM will cause the iFrame to resize to the new content size. Disable if using size method with custom dimensions.
 * Note: When set to false the iFrame will still inititally size to the contained content, only additional resizing events are disabled.
 * @param {'bodyOffset'|'bodyScroll'|'documentElementOffset'|'documentElementScroll'|
 *          'max'|'min'|'grow'|'lowestElement'|'taggedElement'} [options.heightCalculationMethod='bodyScroll'] -
 * see https://github.com/davidjbradshaw/iframe-resizer/blob/master/docs/parent_page/options.md#heightcalculationmethod
 * @param {'bodyOffset'|'bodyScroll'|'documentElementOffset'|'documentElementScroll'|
 *          'max'|'min'|'scroll'|'rightMostElement'|'taggedElement'} [options.widthCalculationMethod] -
 * see https://github.com/davidjbradshaw/iframe-resizer/blob/master/docs/parent_page/options.md#widthcalculationmethod
 * @param {number} [options.minHeight=0] - Set minimum height of iFrame
 * @param {number} [options.minWidth=0] - Set minimum height/width of iFrame
 * @param {boolean} [options.sizeHeight=true] - Resize iFrame to content height
 * @param {boolean} [options.sizeWidth=false] - Resize iFrame to content width
 * @param {boolean} [options.scrolling=false] - Enable scroll bars in iFrame
 * @param {number} [options.tolerance] - Set the number of pixels the iFrame content size has to change by, before triggering a resize of the iFrame
 * @return {{subscribeToBetPlacedEvent: subscribeToBetPlacedEvent, unsubscribeFromBetPlacedEvent: unsubscribeFromBetPlacedEvent, requestBonus: requestBonus, subscribeToEventMap: subscribeToEventMap, unsubscribeFromEventMap: unsubscribeFromEventMap, subscribeToCompetitions: subscribeToCompetitions, unsubscribeFromCompetitions: unsubscribeFromCompetitions, subscribeToListOfSports: subscribeToListOfSports, unsubscribeFromListOfSports: unsubscribeFromListOfSports, setStats: setStats, getUserData: getUserData, setUserData: setUserData, openLoginForm: openLoginForm, navigate: navigate, openRegistrationForm: openRegistrationForm, setWidgetVisibility: setWidgetVisibility, getDocument: getDocument, getLobby: getLobby, getPopularBets: getPopularBets, toPromise: toPromise, removeBet: removeBet, postMessageToParent: postMessageToParent, postMessageTo: postMessageTo, postMessageToAll: postMessageToAll, postMessageToMe: postMessageToMe, getLeaderboard: getLeaderboard, openDepositForm: openDepositForm, getGameUrl: getGameUrl, navigateToURL: navigateToURL, navigateToCTA: navigateToCTA, addBet: addBet, getPromotions: getPromotions, showModalDialog: showModalDialog, getSelections: getSelections, launchGame: launchGame, scrollTo: scrollTo, logout: logout, getAccountInfo: getAccountInfo, openRealityCheckPopup: openRealityCheckPopup, openContactUs: openContactUs, scrollToAnchor: scrollToAnchor, getBreakpoint: getBreakpoint, onIframeResizerReady: onIframeResizerReady, on: (function(BespokeEvents, function(BespokeIncomingEvents)): function(): void), getDomainInfo: getDomainInfo}}
 */
function BespokeApiClient(options) {
    var callbacks = {};
    var sendEvents = {
        init: 'bespokeApiClientInit',
        postMessageToAll: 'postMessageToAll',
        postMessageTo: 'postMessageTo',
        login: 'openLogin',
        logout: 'logoutUser',
        registration: 'openRegistration',
        setStats: 'setStats',
        getUserData: 'getUserData',
        setUserData: 'setUserData',
        accountInfo: 'getAccountInfo',
        // iframeHeight: 'iframeHeight',
        navigate: 'navigate',
        navigateToCTA: 'navigateToCTA',
        navigateToURL: 'navigateToURL',
        promotions: 'getPromotions',
        promotion: 'getPromotion',
        launchGame: 'launchGame',
        gameUrl: 'getGameUrl',
        deposit: 'openDeposit',
        getDocument: 'getDocument',
        setWidgetVisibility: 'setWidgetVisibility',
        getPopularBets: 'getPopularBets',
        addBet: 'addBet',
        removeBet: 'removeBet',
        selections: 'getSelections',
        domainInfo: 'getDomainInfo',
        breakpoint: 'getBreakpoint',
        leaderboard: 'getLeaderboard',
        contactUs: 'openContactUs',
        realityCheckPopup: 'openRealityCheckPopup',
        showModalDialog: 'showModalDialog',
        scrollTo: 'scrollTo',
        getCallbackFormConfig: 'getCallbackFormConfig',
        saveCallbackForm: 'saveCallbackForm',
        cancelCallbackForm: 'cancelCallbackForm',
        getBlogPosts: 'getBlogPosts',
        getBlogPost: 'getBlogPost',
        setPromotionOptInStatus: 'setPromotionOptInStatus',
        getPromotionOptInStatus: 'getPromotionOptInStatus',
        getPromotionsOptInStatuses: 'getPromotionsOptInStatuses',
        subscribeToEventsChanges: 'subscribeToEventsChanges',
        unsubscribeFromEventsChanges: 'unsubscribeFromEventsChanges',
        subscribeToMarketsChanges: 'subscribeToMarketsChanges',
        unsubscribeFromMarketsChanges: 'unsubscribeFromMarketsChanges',
        subscribeToListOfSports: 'subscribeToListOfSports',
        unsubscribeFromListOfSports: 'unsubscribeFromListOfSports',
        subscribeToCompetitions: 'subscribeToCompetitions',
        unsubscribeFromCompetitions: 'unsubscribeFromCompetitions',
        subscribeToEventMap: 'subscribeToEventMap',
        unsubscribeFromEventMap: 'unsubscribeFromEventMap',
        requestBonus: 'requestBonus',
        subscribeToBetPlacedEvent: 'subscribeToBetPlacedEvent',
        unsubscribeFromBetPlacedEvent: 'unsubscribeFromBetPlacedEvent',
    };
    /**
     *
     * @param {any} item
     * @return {boolean}
     */
    /**
     * @param item
     * @return {boolean}
     */
    function isObject(item) {
        return item && typeof item === 'object' && !Array.isArray(item);
    }
    /**
     * Immutable shallow merge
     *
     * @param {any} target
     * @param {any} source
     * @return {Object}
     */
    function shallowMerge(target, source) {
        var output = {};
        if (isObject(target) && isObject(source)) {
            for (var targetKey in target) {
                output[targetKey] = target[targetKey];
            }
            for (var sourceKey in source) {
                output[sourceKey] = source[sourceKey];
            }
        }
        return output;
    }
    /**
     * Immutable deep merge
     *
     * @param {any} target
     * @param {any} source
     * @return {Object}
     */
    function deepMerge(target, source) {
        var output = shallowMerge({}, target);
        if (isObject(target) && isObject(source)) {
            for (var key in source) {
                if (isObject(source[key])) {
                    if (!(key in target)) {
                        var obj = {};
                        obj[key] = source[key];
                        output = shallowMerge(output, obj);
                    }
                    else {
                        output[key] = deepMerge(target[key], source[key]);
                    }
                }
                else {
                    var obj = {};
                    obj[key] = source[key];
                    output = shallowMerge(output, obj);
                }
            }
        }
        return output;
    }
    var defaultOptions = {
        useIFrameResizer: true,
        iFrameResizerOptions: {
            log: false,
            autoResize: true,
            heightCalculationMethod: 'bodyScroll',
            widthCalculationMethod: 'scroll',
            minHeight: 0,
            minWidth: 0,
            sizeHeight: true,
            sizeWidth: false,
            scrolling: false,
            tolerance: 0,
        },
    };
    /**
     * @param {string} type
     * @param [data]
     */
    function postMessage(type, data) {
        postCommonMessage(parent || window, JSON.stringify({ type: type, data: data }));
    }
    /**
     * @param {Window} target
     * @param {any} message
     */
    function postCommonMessage(target, message) {
        if (target) {
            target.postMessage(message, '*');
        }
    }
    function bespokeApiClientInit(options) {
        if (isObject(window.parentIFrame) &&
            typeof window.parentIFrame.reset === 'function' &&
            typeof window.parentIFrame.setHeightCalculationMethod === 'function') {
            window.parentIFrame.reset();
            if (isObject(options) && isObject(options.iFrameResizerOptions)) {
                window.parentIFrame.setHeightCalculationMethod(options.iFrameResizerOptions.heightCalculationMethod);
            }
        }
        postMessage(sendEvents.init, options);
    }
    bespokeApiClientInit(deepMerge(defaultOptions, options));
    /**
     * @param {MessageEvent} event
     */
    function messageEventHandler(event) {
        var data = event.data || {};
        try {
            data = JSON.parse(event.data);
        }
        catch (e) { }
        if (options && options.testPage) {
            handleCommonMessage(data);
        }
        if (data.type && callbacks[data.type]) {
            callbacks[data.type].forEach(function (cb) {
                cb(data.data);
            });
        }
        if (data.error && callbacks.error) {
            callbacks.error.forEach(function (cb) {
                cb(data);
            });
        }
    }
    function handleCommonMessage(data) {
        var commonMessageCallbacks = callbacks['message'];
        var isValidMessage = data && !!data.type;
        if (!isValidMessage || data.type === 'message' || !commonMessageCallbacks) {
            return;
        }
        commonMessageCallbacks.forEach(function (cb) {
            cb(data);
        });
    }
    window.addEventListener('message', messageEventHandler);
    return {
        /**
         * @param {string} requestEventName
         * @param {string} responseEventName
         * @param [data]
         */
        toPromise: function (requestEventName, responseEventName, data) {
            var self = this;
            var successUnsubscribe, errorUnsubscribe;
            function unsubscribe() {
                if (typeof successUnsubscribe === 'function') {
                    successUnsubscribe();
                }
                if (typeof errorUnsubscribe === 'function') {
                    errorUnsubscribe();
                }
            }
            return new Promise(function (resolve, reject) {
                successUnsubscribe = self.on(responseEventName, function (data) {
                    unsubscribe();
                    resolve(data);
                });
                errorUnsubscribe = self.on('error', function (data) {
                    if (data.method === requestEventName) {
                        unsubscribe();
                        reject(data.error);
                    }
                });
                postMessage(requestEventName, data);
            });
        },
        /**
         * @param {BespokeEvents} eventName
         * @param {function(BespokeIncomingEvents)} callback
         * @returns {function} - unsubscriber
         */
        on: function (eventName, callback) {
            if (!callbacks[eventName]) {
                callbacks[eventName] = [];
            }
            callbacks[eventName].push(callback);
            return function () {
                callbacks[eventName] = callbacks[eventName].filter(function (cb) {
                    return cb !== callback;
                });
            };
        },
        /**
         * The function accepts a callback that will run when the iFrameResizer is fully initialized
         * @param {function} callback
         */
        onIframeResizerReady: function (callback) {
            function onReadyIframeResizer(event) {
                if (typeof event.data === 'string' &&
                    /^\[iFrameSizer\]/.test(event.data)) {
                    callback();
                    window.removeEventListener('message', onReadyIframeResizer);
                }
            }
            window.addEventListener('message', onReadyIframeResizer);
        },
        openRegistrationForm: function () {
            postMessage(sendEvents.registration);
        },
        openLoginForm: function () {
            postMessage(sendEvents.login);
        },
        logout: function () {
            postMessage(sendEvents.logout);
        },
        /**
         * @param {Object} [params]
         * @param {string} [params.selectedPaymentMethodId]
         */
        openDepositForm: function (params) {
            postMessage(sendEvents.deposit, params);
        },
        /**
         * Set stats
         * @param {string} key
         * @param {string} value
         * @returns {object} - if operation success
         * @throws {Promise<BespokeApiCompositeError>} - if something go wrong.
         */
        setStats: function (key, value) {
            return this.toPromise(sendEvents.setStats, 'statsResponse', {
                key: key,
                value: value,
            });
        },
        /**
         * Get user data by key
         * The operation is allowed only for authorized users.
         * @param {string} key
         * @returns {Promise<BespokeUserDataResponse>} - value by incoming key
         * @throws {Promise<BespokeApiCompositeError>} - if something go wrong.
         */
        getUserData: function (key) {
            return this.toPromise(sendEvents.getUserData, 'userData', { key: key });
        },
        /**
         * Set user data
         * The operation is allowed only for authorized users.
         * @param {string} key
         * @param {string} value
         * @returns {object} - if operation success
         * @throws {Promise<BespokeApiCompositeError>} - if something go wrong.
         */
        setUserData: function (key, value) {
            return this.toPromise(sendEvents.setUserData, 'setUserDataResponse', {
                key: key,
                value: value,
            });
        },
        getAccountInfo: function () {
            postMessage(sendEvents.accountInfo);
        },
        getPopularBets: function () {
            return this.toPromise(sendEvents.getPopularBets, 'popularBets');
        },
        /**
         * Requests a bonus of the specified type. This asynchronous operation initiates a bonus request process.
         * Validates the type of bonus before making the request, and handles potential API request errors.
         *
         * @param {string} bonusType - The type of bonus being requested. This must be a non-empty string.
         * @returns {Promise<void>} A promise that resolves when the bonus request process is successfully completed.
         * @throws {BespokeApiError | BespokeApiCompositeError} Throws an error if the `bonusType` is invalid (not a non-empty string)
         * or if there are errors during the API request.
         */
        requestBonus: function (bonusType) {
            return this.toPromise(sendEvents.requestBonus, 'bonus', bonusType);
        },
        /**
         * @param {string} id - DocumentId
         * @returns {string} - The document with the specified ID from dotCMS.
         * Throws error if document not found.
         */
        getDocument: function (id) {
            return this.toPromise(sendEvents.getDocument, 'document', id);
        },
        /**
         * Get lobby by specified parameters
         * @param {string} group - gateway casino id
         * @param {Array<string> | string} categoryIds - categories provided like array or string through comma. Ex: 'category1,category2,..'
         * @returns {string} - The lobby.
         * Throws error if something go wrong.
         */
        getLobby: function (group, categoryIds) {
            return this.toPromise('getLobby', 'lobby', {
                group: group,
                categoryIds: categoryIds,
            });
        },
        /**
         * @param {Object} data
         * @param {string} [data.eventName]
         * @param {string} [data.bookName]
         * @param {string} [data.selectionName]
         * @param {number} [data.eventId]
         * @param {number} [data.bookId]
         * @param {number} data.marketId
         * @param {string} [data.name]
         * @param {number} data.selectionId
         * @param {boolean} [data.isSPSelection]
         * @param {string} data.fractionalOdds
         * @param {number} data.decimalOdds
         * @param {number} [data.americanOdds]
         * @param {string} [data.displayOdds]
         * @param {string} [data.handicap]
         * @param {string} [data.initHandicap]
         * @param {number} [data.handicapId]
         * @param {number} [data.eachWayPlaceTerm]
         * @param {number} [data.eachWayReduction]
         * @param {number} [data.line]
         * @param {string} [data.sportId]
         * @param {number} [data.id]
         */
        addBet: function (data) {
            postMessage(sendEvents.addBet, data);
        },
        /**
         * @param {number|string} selectionId - id of selection
         */
        removeBet: function (selectionId) {
            postMessage(sendEvents.removeBet, selectionId);
        },
        getSelections: function () {
            postMessage(sendEvents.selections);
        },
        /**
         * One of group or orderingList is mandatory
         * if both parameters specified the error will be thrown
         * if no parameters specified group='promotions' will be used by default
         * @param {Object} [params]
         * @param {string} [params.group]
         * @param {string} [params.orderingList]
         */
        getPromotions: function (params) {
            postMessage(sendEvents.promotions, params || {});
        },
        /**
         * @param {string} promotionId
         * @returns {Promise<BespokePromotionEvent>}
         * @throws {Promise<BespokeApiCompositeError | BespokeApiError>} - if something go wrong.
         */
        getPromotion: function (promotionId) {
            return this.toPromise(sendEvents.promotion, 'promotion', {
                promotionId: promotionId,
            });
        },
        /**
         * @param {Object} data
         * @param {string} data.gameId
         * @param {Array.<'REAL' | 'FREE'>} [data.playOptions] - you can specify only REAL so that there is no play for free
         */
        launchGame: function (data) {
            postMessage(sendEvents.launchGame, data);
        },
        /**
         * @param {Object} data
         * @param {string} data.gameId
         * @param {['REAL', 'FREE']} [data.playOptions] - you can specify only REAL so that there is no play for free
         */
        getGameUrl: function (data) {
            postMessage(sendEvents.gameUrl, data);
        },
        /**
         * Navigates to a given relative path or configuration object with navigation details.
         *
         * @param {(string|{path: string, addToHistory: boolean})} data - The relative path to navigate to as a string,
         *        or an object containing the 'path' as a string and an optional 'addToHistory' boolean which defaults to true.
         * @example
         * // Navigate using a simple path string
         * navigate('/path');
         *
         * // Navigate using an object with path and addToHistory
         * navigate({ path: '/path', addToHistory: false });
         */
        navigate: function (data) {
            postMessage(sendEvents.navigate, data);
        },
        /**
         * @param {string} url
         * @param {'_self' | '_blank' | '_parent' | '_top'} [target] - default value is '_self'
         */
        navigateToURL: function (url, target) {
            if (!target) {
                target = '_self';
            }
            postMessage(sendEvents.navigateToURL, {
                url: url,
                target: target,
            });
        },
        /**
         * @param {'REGISTER' | 'SPORTSBOOK' | 'SPORTSBOOKHOME' | 'GAME' | 'DEPOSIT'
         *   | 'BESPOKE' | 'WEBLINK' | 'PROMOTIONS' | 'CASINOLOBBY' | 'CASINOCATEGORY'
         *   | 'SPORTSBOOKINPLAYHOME' | 'SPORTSBOOKINPLAY'} type
         * @param [value]
         * @param {string} [promotionId]
         * @param {string} [promotionType]
         */
        navigateToCTA: function (type, value, promotionId, promotionType) {
            postMessage(sendEvents.navigateToCTA, {
                callToActionType: type,
                callToAction: value,
                promotionId: promotionId,
                promotionType: promotionType,
            });
        },
        getDomainInfo: function () {
            postMessage(sendEvents.domainInfo);
        },
        getBreakpoint: function () {
            postMessage(sendEvents.breakpoint);
        },
        /**
         * @param {string} id
         * @param {string|number} limit
         */
        getLeaderboard: function (id, limit) {
            postMessage(sendEvents.leaderboard, {
                id: id,
                limit: limit,
            });
        },
        openContactUs: function () {
            postMessage(sendEvents.contactUs);
        },
        /**
         * Send a message to the widget that called the method.
         * @param {string} message - Check the target widget for supported messages. I.e. use this to send a login message {"type":"openLogin"}
         */
        postMessageToMe: function (message) {
            postCommonMessage(window, message);
        },
        /**
         * Send a message to all widgets registered with Bespoke API.
         * @param {string} message - Check the target widget for supported messages. I.e. use this to send a game url message {"type":"gameUrl", data: "some_url"}
         */
        postMessageToAll: function (message) {
            postMessage(sendEvents.postMessageToAll, message);
        },
        /**
         * Send a message to the widget with the specified Id.
         * @param {string} widgetId - is set in the hosting iframe's id attribute
         * @param {string} message - Check the target widget for supported messages. I.e. use this to send a popularBets message {"type":"popularBets", data: "{}"}
         */
        postMessageTo: function (widgetId, message) {
            postMessage(sendEvents.postMessageTo, {
                widgetId: widgetId,
                message: message,
            });
        },
        /**
         * Send a message to the widget's parent window or iframe.
         * @param {any} message - Check the target widget for supported messages. I.e. use this to send a accountInfo message {"type":"accountInfo", data: "{}"}
         */
        postMessageToParent: function (message) {
            postCommonMessage(parent, message);
        },
        /**
         *
         * @param {boolean} isShow - Show or hide widget
         */
        setWidgetVisibility: function (isShow) {
            postMessage(sendEvents.setWidgetVisibility, isShow);
        },
        openRealityCheckPopup: function () {
            postMessage(sendEvents.realityCheckPopup);
        },
        /**
         * @param {Object} params
         * @param {string} [params.dialogId] - optional. If dialogId is provided it will replace default dialog id.
         * @param {string} [params.title] - string or HTML
         * @param {string} [params.content] - string or HTML
         * @param {string} [params.url]
         * @param {Array.<'OK'|'Cancel'|'Yes'|'No'|'Retry'|'Abort'|'Ignore'>} [params.buttons]
         * @param {boolean} [params.showContactUsButton]
         * @param {Object} [params.size]
         * @param {string} [params.size.width] - size units: px, %, em, rem, vh, vw, vmin, vmax
         * @param {string} [params.size.height] - size units: px, %, em, rem, vh, vw, vmin, vmax
         * @param {string|number} [params.size.minWidth] - size units: px, %, em, vh, vw, vmin, vmax
         * @param {string|number} [params.size.minHeight] - size units: px, %, em, vh, vw, vmin, vmax
         * @param {string|number} [params.size.maxWidth] - size units: px, %, em, vh, vw, vmin, vmax
         * @param {string|number} [params.size.maxHeight] - size units: px, %, em, vh, vw, vmin, vmax
         * @param {boolean} [params.size.auto]
         *
         * @throws Error
         */
        showModalDialog: function (params) {
            if (typeof params !== 'object') {
                throw Error('params object is missing');
            }
            if (!params.content && !params.url) {
                throw Error('content or url parameters is missing. Either content either url parameter has to be set but both are missing');
            }
            postMessage(sendEvents.showModalDialog, params);
        },
        getCallbackFormConfig: function () {
            postMessage(sendEvents.getCallbackFormConfig);
        },
        /**
         * @param {string} phoneNumber
         * @param {Object} timeSlot
         * @param {string} timeSlot.startTime
         * @param {string} timeSlot.endTime
         *
         * @throws Error
         */
        saveCallbackForm: function (phoneNumber, timeSlot) {
            if (typeof phoneNumber !== 'string' || phoneNumber.trim() === '') {
                throw Error('phoneNumber is missing or empty');
            }
            if (typeof timeSlot !== 'object') {
                throw Error('timeSlot param must be a object');
            }
            if (typeof timeSlot.startTime !== 'string' ||
                typeof timeSlot.endTime !== 'string' ||
                timeSlot.startTime.trim() === '' ||
                timeSlot.endTime.trim() === '') {
                throw Error('timeSlot.startTime and timeSlot.endTime are required and must be a non-empty string');
            }
            postMessage(sendEvents.saveCallbackForm, {
                phoneNumber: phoneNumber,
                timeSlot: timeSlot,
            });
        },
        /**
         * @param {string} caseId
         */
        cancelCallbackForm: function (caseId) {
            postMessage(sendEvents.cancelCallbackForm, {
                caseId: caseId,
            });
        },
        /**
         * @param {Object} [params]
         * @param {Object} [params.category]
         */
        getBlogPosts: function (params) {
            postMessage(sendEvents.getBlogPosts, params || {});
        },
        /**
         * @param postId
         *
         * @throws Error
         */
        getBlogPost: function (postId) {
            if (typeof postId !== 'string' || postId.trim() === '') {
                throw Error('postId must be a non-empty string');
            }
            postMessage(sendEvents.getBlogPost, { postId: postId });
        },
        /**
         * @param {Object} data
         * @param {string} data.promotionId
         * @param {boolean} data.optedIn
         */
        setPromotionOptInStatus: function (data) {
            if (typeof data !== 'object') {
                throw Error('data object is missing');
            }
            if (typeof data.promotionId !== 'string' ||
                data.promotionId.trim() === '') {
                throw Error('data.promotionId must be a non-empty string');
            }
            if (typeof data.optedIn !== 'boolean') {
                throw Error('data.optedIn must be a boolean');
            }
            postMessage(sendEvents.setPromotionOptInStatus, data);
        },
        /**
         * @param {string} promotionId
         *
         * @throws Error
         */
        getPromotionOptInStatus: function (promotionId) {
            if (typeof promotionId !== 'string' || promotionId.trim() === '') {
                throw Error('promotionId must be a non-empty string');
            }
            postMessage(sendEvents.getPromotionOptInStatus, {
                promotionId: promotionId,
            });
        },
        getPromotionsOptInStatuses: function () {
            postMessage(sendEvents.getPromotionsOptInStatuses);
        },
        /**
         * @param {string[]} ids
         */
        subscribeToEventsChanges: function (ids) {
            postMessage(sendEvents.subscribeToEventsChanges, {
                ids: ids,
            });
        },
        /**
         * @param {string[]} ids
         */
        unsubscribeFromEventsChanges: function (ids) {
            postMessage(sendEvents.unsubscribeFromEventsChanges, {
                ids: ids,
            });
        },
        /**
         * Subscribe to bet placed event
         */
        subscribeToBetPlacedEvent: function () {
            postMessage(sendEvents.subscribeToBetPlacedEvent);
        },
        /**
         * Unsubscribe from bet placed event
         */
        unsubscribeFromBetPlacedEvent: function () {
            postMessage(sendEvents.unsubscribeFromBetPlacedEvent);
        },
        /**
         * Subscribe to list of sports
         */
        subscribeToListOfSports: function () {
            postMessage(sendEvents.subscribeToListOfSports);
        },
        /**
         * Unsubscribe from list of sports
         */
        unsubscribeFromListOfSports: function () {
            postMessage(sendEvents.unsubscribeFromListOfSports);
        },
        /**
         * Subscribe to competitions by ids
         * @param {string[]} ids
         */
        subscribeToCompetitions: function (ids) {
            postMessage(sendEvents.subscribeToCompetitions, {
                ids: ids,
            });
        },
        /**
         * Unsubscribe from competitions by ids
         * @param {string[]} ids
         */
        unsubscribeFromCompetitions: function (ids) {
            postMessage(sendEvents.unsubscribeFromCompetitions, {
                ids: ids,
            });
        },
        /**
         * Subscribe to eventMap
         * @param {Object} params
         * @param {BespokeEventMapType} params.type
         * @param {string} params.sportId
         */
        subscribeToEventMap: function (params) {
            var inputParams = params || {};
            postMessage(sendEvents.subscribeToEventMap, {
                type: inputParams.type,
                sportId: inputParams.sportId,
            });
        },
        /**
         * Unsubscribe from eventMap
         * @param {string[]} params
         * @param {BespokeEventMapType} params.type
         * @param {string} params.sportId
         */
        unsubscribeFromEventMap: function (params) {
            var inputParams = params || {};
            postMessage(sendEvents.unsubscribeFromEventMap, {
                type: inputParams.type,
                sportId: inputParams.sportId,
            });
        },
        /**
         * @param {string[]} ids
         */
        subscribeToMarketsChanges: function (ids) {
            postMessage(sendEvents.subscribeToMarketsChanges, {
                ids: ids,
            });
        },
        /**
         * @param {string[]} ids
         */
        unsubscribeFromMarketsChanges: function (ids) {
            postMessage(sendEvents.unsubscribeFromMarketsChanges, {
                ids: ids,
            });
        },
        /**
         * @return {Promise<BespokeFeatureEventsEvent>}
         */
        getFeaturedEvents: function () {
            return this.toPromise('getFeaturedEvents', 'featuredEvents');
        },
        /**
         * @param {number} x
         * @param {number} y
         * @param {Object} [options]
         * @param {boolean} [options.useHeaderOffset=true] - subtracts the height of the header for proper scrolling
         * @param {string} [options.updateParentHashTo] - push to history a new state with a new hash
         * @param {boolean} [options.useHistoryReplaceState] - updateParentHashTo will use replaceState instead of pushState
         */
        scrollTo: function (x, y, options) {
            var defaultOptions = {
                x: x,
                y: y,
                useHeaderOffset: true,
            };
            postMessage(sendEvents.scrollTo, deepMerge(defaultOptions, options));
        },
        /**
         * @param {string} anchor
         * @param {Object} [options]
         * @param {boolean} [options.useHeaderOffset=true] - subtracts the height of the header for proper scrolling
         * @param {string} [options.updateParentHashTo] - push to history a new state with a new hash
         * @param {boolean} [options.useHistoryReplaceState] - updateParentHashTo will use replaceState instead of pushState
         */
        scrollToAnchor: function (anchor, options) {
            var anchorElement = document.getElementById(anchor.replace(/^#/, ''));
            if (anchorElement) {
                this.scrollTo(0, anchorElement.getBoundingClientRect().top, options);
            }
        },
    };
}
