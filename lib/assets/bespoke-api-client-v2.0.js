"use strict";
/**
 * @typedef TraceParent
 * @property {Function} createTraceId - Function to create a trace ID
 */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
/**
 * @typedef IPromotionData
 * @property {string} group - The group identifier
 * @property {string} orderingList - The identifier for ordering list
 */
/**
 * @typedef IHideModalDialogParams
 * @property {string} [dialogId] - Optional identifier for the dialog to hide. If not provided, all existing dialogs will be hidden.
 */
/**
 * @typedef IReceiveMessage
 * @property {EventValues|ActionValues} event - The type of event or action received
 * @property {string} requestId - Identifier for the response
 * @property {boolean} isSuccess - Flag indicating if the operation was successful
 * @property {*} error - Any error information related to the message
 * @property {*} data - Data received in the message
 */
/**
 * @typedef ISendMessage
 * @property {EventValues|ActionValues} event - The type of event or action to send
 * @property {string} requestId - Unique identifier for the request
 * @property {*} data - Data to send in the message
 */
/**
 * @typedef ISubscribeMessage
 * @property {EventValues|ActionValues} event - The type of event or action to subscribe to
 * @property {string} [requestId] - Optional unique identifier for the request
 */
/**
 * @typedef ISubscribeEventMessage
 * @extends ISubscribeMessage
 * @property {EventValues} event - Specific event to subscribe to
 */
/**
 * @typedef ISubscribePromiseMessage
 * @extends ISubscribeMessage
 * @property {ActionValues} event - Specific action to expect a promise response from
 */
/**
 * @typedef {string} EventValues - String literal types combined into a union type derived from template literals of BespokeLibEvents enum
 * type EventValues = `${BespokeLibEvents}`;
 */
/**
 * @typedef {string} ActionValues - String literal types combined into a union type derived from template literals of BespokeLibActions enum
 * type ActionValues = `${BespokeLibActions}`;
 */
/**
 * Enumeration for events associated with the bespoke API client.
 * This enumeration includes both continuous subscribable events and one-time events.
 * - Subscribable events: These events allow clients to subscribe and continuously receive updates
 *   until they explicitly unsubscribe.
 * - One-time events: These are fire-and-forget type events where a message is sent once without
 *   establishing an ongoing subscription.
 */
var BespokeLibEvents;
(function (BespokeLibEvents) {
    BespokeLibEvents["BespokeApiClientInit"] = "bespokeApiClientInit";
    BespokeLibEvents["ListOfSports"] = "listOfSports";
})(BespokeLibEvents || (BespokeLibEvents = {}));
/**
 * Enumeration for actions tied to single-use behavior.
 * Subscribing to these actions involves a one-time request and response flow. After receiving
 * a response, the subscription is automatically terminated. This model is suitable for
 * direct queries expecting a single response rather than ongoing updates.
 */
var BespokeLibActions;
(function (BespokeLibActions) {
    BespokeLibActions["Promotion"] = "promotion";
    BespokeLibActions["Promotions"] = "promotions";
    BespokeLibActions["HideModalDialog"] = "hideModalDialog";
    BespokeLibActions["UserData"] = "userData";
    BespokeLibActions["BreakpointV2"] = "breakpoint";
})(BespokeLibActions || (BespokeLibActions = {}));
(function (global) {
    /**
     * Enum representing different actions related to event handling in a bespoke V2 system.
     */
    var EventAction;
    (function (EventAction) {
        /**
         * Represents an action to subscribe to a specific event.
         * This action is used to register interest in receiving notifications about an event whenever it occurs.
         */
        EventAction["Subscribe"] = "subscribe";
        /**
         * Represents an action to unsubscribe from a specific event.
         * This action is used to indicate that notifications for a previously subscribed event are no longer required.
         */
        EventAction["Unsubscribe"] = "unsubscribe";
        /**
         * Represents the action of sending a one-way event message.
         * This denotes that an event has been dispatched, and no response or acknowledgment is expected in return.
         * It's a unidirectional transmission of a message.
         */
        EventAction["Event"] = "event";
        /**
         * Represents handling an event in a promise-based manner.
         * This method involves sending a request, receiving a one-time response, and immediately unsubscribing upon the response.
         * Typically, it returns a promise which resolves or rejects based on the outcome of the response.
         */
        EventAction["Promise"] = "promise";
    })(EventAction || (EventAction = {}));
    function BespokeApiV2Client(options) {
        var bespokeApiEventManager = new BespokeApiEventManager(options);
        return __assign({ 
            /**
             * Sets up a callback to execute when an IframeResizer instance is fully initialized.
             *
             * @param {Function} callback - The function to execute when the IframeResizer is ready.
             */
            onIframeResizerReady: function (callback) {
                var onReadyIframeResizer = function (event) {
                    if (typeof event.data === 'string' &&
                        /^\[iFrameSizer\]/.test(event.data)) {
                        callback();
                        global.removeEventListener('message', onReadyIframeResizer);
                    }
                };
                global.addEventListener('message', onReadyIframeResizer);
            }, 
            /**
             * Requests details of a specific promotion based on promotion ID.
             *
             * @param {string} promotionId - Identifier for the specific promotion.
             * @param {string} [requestId] - Optional unique identifier for the request.
             * @returns {Promise<IReceiveMessage>} Promise that resolves with promotion data or error.
             * @throws May throw error if subscription process failed
             */
            getPromotion: function (promotionId, requestId) {
                return bespokeApiEventManager.subscribeToPromise({
                    event: BespokeLibActions.Promotion,
                    data: { promotionId: promotionId },
                    requestId: requestId,
                });
            }, 
            /**
             * Hides a modal dialog based on provided parameters. If dialogId is not provided, all existing dialogs will be hidden.
             * For now showModalDialog method is implemented in v1 bespoke lib
             *
             * @param {IHideModalDialogParams} data - Parameters to identify and manage the modal dialog to be closed.
             * @param {string} [requestId] - Optional unique identifier for the request.
             * @returns {Promise<IReceiveMessage>} Promise that resolves with the result of the hide action or an error.
             * @throws May throw an error if the hiding process fails.
             */
            hideModalDialog: function (data, requestId) {
                return bespokeApiEventManager.subscribeToPromise({
                    event: BespokeLibActions.HideModalDialog,
                    data: data,
                    requestId: requestId,
                });
            }, 
            /**
             * Requests promotion details with the required data.
             *
             * @param {IPromotionData} data - Data related to the promotions.
             * @param {string} [requestId] - Optional unique identifier for the subscription.
             * @returns {Promise<IReceiveMessage>} Promise that resolves with the requested promotion data or error.
             * @throws May throw error if subscription process failed
             */
            getPromotions: function (data, requestId) {
                return bespokeApiEventManager.subscribeToPromise({
                    event: BespokeLibActions.Promotions,
                    data: data,
                    requestId: requestId,
                });
            }, 
            /**
             * Get user data by string keys or array of keys.
             * The operation is allowed only for authorized users.
             *
             * @param {string | string[]} keys - A comma-separated string of keys or an array of keys used to identify the user data.
             *                                   Accepts a single key or multiple keys in two formats: a comma-separated string
             *                                   or as an array of strings
             *                                   Example: "key1,key2,key3" or ["key1", "key2", "key3"].
             * @param {string} [requestId] - An optional unique identifier for the subscription.
             * @returns {Promise<IReceiveMessage>} A promise that resolves with the requested user data
             *   in the format [{ "key": string, "value": string } ...].
             * @throws {Promise<BespokeApiCompositeError>} Throws an error if the subscription process fails.
             */
            getUserData: function (keys, requestId) {
                return bespokeApiEventManager.subscribeToPromise({
                    event: BespokeLibActions.UserData,
                    data: { keys: keys },
                    requestId: requestId,
                });
            }, 
            /**
             * Retrieves the current breakpoint information for the specified page.
             *
             * This method subscribes to a promise event and fetches the breakpoint data
             * for the given `pageId`. If `requestId` is provided, it will be included in the request.
             *
             * @param {string} [pageId] - Optional identifier of the page for which the breakpoint data is requested.
             * @param {string} [requestId] - An optional unique identifier for the subscription.
             * @returns {Promise<IReceiveMessage>} Promise resolving with the breakpoint event data.
             */
            getBreakpoint: function (pageId, requestId) {
                return bespokeApiEventManager.subscribeToPromise({
                    event: BespokeLibActions.BreakpointV2,
                    data: { pageId: pageId },
                    requestId: requestId,
                });
            }, 
            /**
             * Subscribes to the list of sports events.
             * The provided callback function will be invoked when an event is received.
             *
             * @param {CallbackFn} callback - The function to call when a new message is received.
             * @param {string} [requestId] - An optional string identifier that can be used to uniquely identify
             *                               this particular subscription request.
             * @returns {string | null} Returns a string request ID if the subscription is successfully registered, otherwise returns null.
             */
            subscribeToListOfSports: function (callback, requestId) {
                return bespokeApiEventManager.subscribeToEvent({
                    event: BespokeLibEvents.ListOfSports,
                    requestId: requestId,
                }, callback);
            }, 
            /**
             * Unsubscribes from the list of sports events. If a callback is provided, it removes only that specific callback.
             * If no callback is provided, it removes all callbacks associated with the requestId.
             *
             * @param {string} requestId - The string identifier used to uniquely identify the subscription request.
             *                             This should be the same requestId that was provided at the time of subscription.
             * @param {CallbackFn} [callback] - Optional. The function that was originally passed to subscribeToListOfSports.
             *                                  If not provided, all callbacks for this requestId will be removed.
             * @returns {boolean} - Returns true if the unsubscription was successful, false otherwise.
             */
            unsubscribeFromListOfSports: function (requestId, callback) {
                return bespokeApiEventManager.unsubscribeFromEvent(BespokeLibEvents.ListOfSports, requestId, callback);
            } }, (bespokeApiEventManager.isTestPage && {
            getIncomeData: function () {
                return TestMessageTransportManager.getIncomeData();
            },
            getOutcomeData: function () {
                return TestMessageTransportManager.getOutcomeData();
            },
        }));
    }
    var BespokeApiEventManager = /** @class */ (function () {
        /**
         * Constructs an instance of BespokeApiEventManager and initializes with default or provided options.
         *
         * @param {any} options - Configuration options for the client.
         */
        function BespokeApiEventManager(options) {
            /**
             * Default configurations for the IFrameResizer.
             *
             * @private
             * @readonly
             */
            this.defaultOptions = {
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
            this.isTestPage = !!(options === null || options === void 0 ? void 0 : options.isTestPage);
            this.messageTransportManager = !this.isTestPage
                ? new MessageTransportManager()
                : new TestMessageTransportManager();
            this.listenerManager = new ListenerManager(this.messageTransportManager);
            this.initIframeSettings(Util.deepMerge(this.defaultOptions, options));
        }
        /**
         * Subscribes to an event using a message descriptor and a callback function.
         *
         * @public
         * @param {ISubscribeEventMessage} message - Information about the event to subscribe to.
         * @param {CallbackFn} callback - Function to be called when the event occurs.
         * @returns {string | null} Returns the request ID as a string if the subscription is successful, otherwise returns null.
         */
        BespokeApiEventManager.prototype.subscribeToEvent = function (message, callback) {
            this.throwErrorIfEventInvalid(message === null || message === void 0 ? void 0 : message.event, BespokeLibEvents);
            return this.subscribe(message, callback);
        };
        /**
         * Unsubscribes from a specific event using event details. If the callback is provided, it removes only that specific callback.
         * If no callback is provided, it removes all callbacks associated with the requestId.
         *
         * @public
         * @param {EventValues} event - The event type to unsubscribe from.
         * @param {string} requestId - The unique identifier for the subscription.
         * @param {CallbackFn} [callback] - Optional. The callback function associated with the subscription.
         *                                  If not provided, all callbacks for the requestId will be removed.
         * @returns {boolean} Returns true if unsubscription is successful, false otherwise.
         */
        BespokeApiEventManager.prototype.unsubscribeFromEvent = function (event, requestId, callback) {
            this.throwErrorIfEventInvalid(event, BespokeLibEvents);
            this.throwErrorIfRequestIdInvalid(requestId);
            return this.listenerManager.unsubscribe(event, requestId, callback);
        };
        /**
         * Subscribes to an event with a promise that resolves with appropriate message.
         * The promise resolves on receiving message that matches the specified requestId,
         * or it rejects if any errors are thrown during the subscription process.
         *
         * @public
         * @param {ISubscribePromiseMessage} message - Contains information about the event to subscribe to,
         *                                             including the unique requestId that must match in the
         *                                             received message for the promise to resolve.
         * @returns {Promise<IReceiveMessage>} A promise that:
         *                                     - Resolves with the received message data if the subscription process succeeds and the responseId matches the requestId.
         *                                     - Rejects with an error if any errors will be thrown during the subscription process or the event is invalid.
         */
        BespokeApiEventManager.prototype.subscribeToPromise = function (message) {
            var _this = this;
            try {
                this.throwErrorIfEventInvalid(message === null || message === void 0 ? void 0 : message.event, BespokeLibActions);
            }
            catch (error) {
                return Promise.reject(error);
            }
            return new Promise(function (resolve) {
                var promiseCallback = function (data) {
                    var _a = data || {}, event = _a.event, responseId = _a.requestId;
                    if (responseId !== currentRequestId) {
                        return;
                    }
                    _this.listenerManager.unsubscribe(event, responseId, promiseCallback, EventAction.Promise);
                    resolve(data);
                };
                var currentRequestId = _this.subscribe(message, promiseCallback, EventAction.Promise);
            });
        };
        /**
         * Sends a one-way message without expecting a response.
         *
         * @public
         * @param {ISubscribeMessage} message - The message to be sent.
         */
        BespokeApiEventManager.prototype.sendEvent = function (message) {
            this.messageTransportManager.sendMessage(message, EventAction.Event);
        };
        /**
         * Throws an error if the event specified in the message is not valid per the provided enum.
         *
         * @private
         * @param {ISubscribeMessage} message - The message containing the event.
         * @param {{ [s: string]: string }} enumObj - Enumeration object that lists all valid events or actions.
         * @throws Will throw an custom error if the event in the message is not recognized in the provided enum.
         */
        BespokeApiEventManager.prototype.throwErrorIfEventInvalid = function (event, enumObj) {
            if (!Util.isEventInEnum(event, enumObj)) {
                throw Util.createBespokeCustomError("Wrong event type. Possible events: ".concat(Util.enumToString(enumObj), ", actions: ").concat(Util.enumToString(enumObj)));
            }
        };
        /**
         * Validates if a given requestId is a non-empty string. Throws a bespoke custom error if the validation fails.
         * This method is designed to ensure that the requestId passed to it adheres to the expected format and is not empty,
         * which is crucial for further processing that depends on a valid requestId.
         *
         * @private
         * @param {string} requestId - The requestId to validate. It should be a non-empty string representing a unique identifier for a request.
         * @throws {BespokeApiCustomError} - Throws a `BespokeApiCustomError` with an informative message if the requestId is invalid
         *                                   (either not a string or an empty string).
         */
        BespokeApiEventManager.prototype.throwErrorIfRequestIdInvalid = function (requestId) {
            if (!requestId || typeof requestId !== 'string') {
                throw Util.createBespokeCustomError("Request Id should be non-empty string. Current requestId: ".concat(requestId));
            }
        };
        /**
         * Manages subscription for messages and registers callbacks for received events.
         * It generates or uses an existing request ID for the subscription.
         *
         * @private
         * @param {ISubscribeMessage} message - The message details for the subscription which includes event details and an optional request ID.
         * @param {CallbackFn} callback - The callback function to be invoked when a message is received.
         * @param {EventAction} eventAction - The action associated with the event subscription,
         *                                    typically used to control how messages are handled or routed
         *                                    by the message transport system.
         * @returns {string | null} Returns a string request ID if the subscription is successfully registered, otherwise returns null.
         */
        BespokeApiEventManager.prototype.subscribe = function (message, callback, eventAction) {
            this.throwErrorIfEventInvalid(message === null || message === void 0 ? void 0 : message.event, __assign(__assign({}, BespokeLibEvents), BespokeLibActions));
            var currentRequestId = Util.getRequestId(message === null || message === void 0 ? void 0 : message.requestId);
            this.throwErrorIfRequestIdInvalid(currentRequestId);
            var isSubscribed = this.listenerManager.subscribe(__assign(__assign({}, message), { requestId: currentRequestId }), callback, eventAction);
            return isSubscribed ? currentRequestId : null;
        };
        /**
         * Initialize the Iframe settings with specific options for communication.
         *
         * @private
         * @param {any} options - Options to initialize the Iframe settings.
         */
        BespokeApiEventManager.prototype.initIframeSettings = function (options) {
            var iframeResizer = window.parentIFrame;
            if (typeof (iframeResizer === null || iframeResizer === void 0 ? void 0 : iframeResizer.reset) === 'function' &&
                typeof iframeResizer.setHeightCalculationMethod === 'function') {
                iframeResizer.reset();
                if (Util.isObject(options === null || options === void 0 ? void 0 : options.iFrameResizerOptions)) {
                    iframeResizer.setHeightCalculationMethod(options.iFrameResizerOptions.heightCalculationMethod);
                }
            }
            this.sendEvent({
                event: BespokeLibEvents.BespokeApiClientInit,
                data: options,
            });
        };
        return BespokeApiEventManager;
    }());
    /**
     * The ListenerManager class is responsible for managing event subscriptions and handling messages.
     * It maintains a map of events to their respective callbacks, organized by request IDs, allowing
     * multiple subscriptions per event and ensuring the correct callbacks are triggered in response
     * to incoming messages.
     */
    var ListenerManager = /** @class */ (function () {
        /**
         * Initializes a new instance of ListenerManager, setting up a map to hold event bindings
         * and registers a message event listener to handle incoming messages.
         */
        function ListenerManager(messageTransportManager) {
            this.messageTransportManager = messageTransportManager;
            this.eventMap = new Map();
            messageTransportManager.init(this.handleMessage.bind(this));
        }
        /**
         * Subscribes a callback function to an event identified by a message, which includes the event
         * and requestId. Callbacks for the same event and requestId are grouped together.
         *
         * @param {ISendMessage} message - The message containing the event and a requestId.
         * @param {CallbackFn} callback - The callback function to execute when the event occurs.
         * @param {EventAction} eventAction - The action associated with the event subscription,
         *                                    typically used to control how messages are handled or routed
         *                                    by the message transport system.
         * @returns {boolean} Always returns true indicating the callback was successfully added.
         * @throws {Error} Throws an error if the provided callback is not a function.
         */
        ListenerManager.prototype.subscribe = function (message, callback, eventAction) {
            if (eventAction === void 0) { eventAction = EventAction.Subscribe; }
            if (typeof callback !== 'function') {
                throw new Error('Callback must be a function');
            }
            var event = message.event, requestId = message.requestId;
            var requestCallbacks = this.eventMap.get(event);
            if (!requestCallbacks) {
                requestCallbacks = new Map();
                this.eventMap.set(event, requestCallbacks);
            }
            var isSubscribeFirstTime = false;
            var callbacks = requestCallbacks.get(requestId);
            if (!callbacks) {
                isSubscribeFirstTime = true;
                callbacks = new Set();
                requestCallbacks.set(requestId, callbacks);
            }
            callbacks.add(callback);
            if (isSubscribeFirstTime) {
                this.messageTransportManager.sendMessage(message, eventAction);
            }
            return true;
        };
        /**
         * Unsubscribes a callback from a specific event and requestId. If the callback parameter is provided,
         * it removes that specific callback. If no callback is provided, it removes all callbacks associated
         * with the requestId. Additionally, if no other callbacks remain for the given requestId after removal,
         * it also cleans up the associated requestId from the map.
         *
         * @param {string} event - The event from which to unsubscribe.
         * @param {string} requestId - The identifier of the subscription to remove the callback from.
         * @param {CallbackFn} [callback] - The optional callback function to remove. If not provided, all callbacks
         *                                  for the requestId are removed.
         * @param {EventAction} eventAction - The action associated with the event subscription,
         *                                    typically used to control how messages are handled or routed
         *                                    by the message transport system. Defaults to EventAction.Unsubscribe.
         * @returns {boolean} True if the callback or callbacks were successfully removed, false otherwise.
         */
        ListenerManager.prototype.unsubscribe = function (event, requestId, callback, eventAction) {
            if (eventAction === void 0) { eventAction = EventAction.Unsubscribe; }
            var requestCallbacks = this.eventMap.get(event);
            if (!requestCallbacks) {
                return false;
            }
            var callbacks = requestCallbacks.get(requestId);
            if (!callbacks) {
                return false;
            }
            var wasDeleted = false;
            var shouldSendUnsubscribe = false;
            if (callback) {
                wasDeleted = callbacks.delete(callback);
                if (!callbacks.size) {
                    requestCallbacks.delete(requestId);
                    shouldSendUnsubscribe = true;
                }
            }
            else {
                requestCallbacks.delete(requestId);
                shouldSendUnsubscribe = true;
                wasDeleted = true;
            }
            if (!requestCallbacks.size) {
                this.eventMap.delete(event);
            }
            if (shouldSendUnsubscribe && eventAction !== EventAction.Promise) {
                this.messageTransportManager.sendMessage({ event: event, requestId: requestId }, eventAction);
            }
            return wasDeleted;
        };
        /**
         * Handles incoming message events. It attempts to parse the message data and trigger
         * the appropriate callbacks based on the event and requestId contained within the message.
         *
         * @param {MessageEvent<IReceiveMessage & string>} messageEvent - The event object containing the message data.
         * @private
         */
        ListenerManager.prototype.handleMessage = function (messageEvent) {
            var messageData = messageEvent.data;
            try {
                messageData = JSON.parse(messageEvent.data);
            }
            catch (_a) { }
            var _b = messageData || {}, event = _b.event, responseId = _b.requestId;
            if (!event || !responseId || !this.eventMap.has(event)) {
                return;
            }
            var requestCallbacks = this.eventMap.get(event);
            var callbacks = requestCallbacks === null || requestCallbacks === void 0 ? void 0 : requestCallbacks.get(responseId);
            callbacks === null || callbacks === void 0 ? void 0 : callbacks.forEach(function (callback) {
                callback(messageData);
            });
        };
        return ListenerManager;
    }());
    /**
     * Manages the transportation of messages across different window iframes via the Window's messaging system.
     * This class abstracts the details of message posting and handling, providing a simple interface for other components
     * to use for communicating messages.
     */
    var MessageTransportManager = /** @class */ (function () {
        /**
         * Initializes a new instance of MessageTransportManager by adding a listener to the global Window object for message events.
         */
        function MessageTransportManager() {
            var _this = this;
            global.addEventListener('message', function (messageEvent) {
                var _a;
                (_a = _this.eventHandler) === null || _a === void 0 ? void 0 : _a.call(_this, messageEvent);
            });
        }
        /**
         * Initializes the MessageTransportManager with a specific event handler.
         *
         * @param {function} eventHandler - A function that will be called when a message event occurs.
         *                                  This handler is responsible for further processing of the message event.
         */
        MessageTransportManager.prototype.init = function (eventHandlerCallback) {
            this.eventHandler = eventHandlerCallback;
        };
        /**
         * Posts a message to the Window using the standardized window.postMessage method.
         * This is typically used to communicate across different origins or between different parts of the same application.
         *
         * @param {ISendMessage} message - An object containing the message data, structured according to ISendMessage interface.
         * @param {EventAction} action - The action associated with the event subscription,
         *                                    typically used to control how messages are handled or routed
         *                                    by the message transport system.
         */
        MessageTransportManager.prototype.sendMessage = function (message, action) {
            Util.postCurrentMessage(__assign(__assign({}, message), { action: action }));
        };
        return MessageTransportManager;
    }());
    /**
     * The TestMessageTransportManager class extends MessageTransportManager with overrides to include debugging and testing capabilities.
     * In the overridden methods, it captures and logs additional data about message transport events for inspection and debugging purposes.
     */
    var TestMessageTransportManager = /** @class */ (function (_super) {
        __extends(TestMessageTransportManager, _super);
        function TestMessageTransportManager() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        /**
         * Retrieves the last received message data that was captured during message event handling.
         * This function is intended for testing and debugging purposes.
         *
         * @returns {unknown} The data from the most recent message event.
         */
        TestMessageTransportManager.getIncomeData = function () {
            return this.incomeData;
        };
        /**
         * Retrieves the last sent message data that was captured just before sending it out.
         * This function is intended for testing and debugging purposes.
         *
         * @returns {unknown} The data from the most recently dispatched message.
         */
        TestMessageTransportManager.getOutcomeData = function () {
            return this.outcomeData;
        };
        /**
         * Overrides the init method to intercept message events and add hooks for capturing incoming data for testing before passing events to the original handler.
         *
         * @param {function} eventHandlerCallback - A function that will be executed with the received MessageEvent.
         */
        TestMessageTransportManager.prototype.init = function (eventHandlerCallback) {
            _super.prototype.init.call(this, function (messageEvent) {
                var messageEventData = messageEvent === null || messageEvent === void 0 ? void 0 : messageEvent.data;
                var responseData = messageEventData;
                try {
                    responseData = JSON.parse(messageEventData);
                }
                catch (_a) { }
                console.log('[bespoke response data]', responseData);
                TestMessageTransportManager.incomeData = messageEventData;
                eventHandlerCallback(messageEvent);
            });
        };
        /**
         * Overrides the sendMessage method to log the message and action details being sent, allowing inspection of outgoing data for testing.
         *
         * @param {ISendMessage} message - The message object with data to send.
         * @param {EventAction} action - The action related to the message event, influencing how the message is managed or routed.
         */
        TestMessageTransportManager.prototype.sendMessage = function (message, action) {
            var requestData = __assign(__assign({}, message), { action: action });
            console.log('[bespoke request message]', requestData);
            TestMessageTransportManager.outcomeData = requestData;
            _super.prototype.sendMessage.call(this, message, action);
        };
        return TestMessageTransportManager;
    }(MessageTransportManager));
    /**
     * Utility class providing static methods for various helper functionalities such as
     * object handling, message posting, and UUID generation. This class enhances the cohesion and
     * maintainability of utility functions used across the application.
     */
    var Util = /** @class */ (function () {
        function Util() {
        }
        /**
         * Checks if the provided parameter is an object and not an array.
         *
         * @param {unknown} obj - The item to be checked.
         * @return {boolean} Returns true if 'obj' is an object (not including arrays), otherwise false.
         */
        Util.isObject = function (obj) {
            return !!obj && typeof obj === 'object' && !Array.isArray(obj);
        };
        /**
         * Performs a shallow merge of two objects. It creates a new object with properties from both
         * the target and the source objects. If both objects contain the same key, the value from the
         * source object will overwrite the value from the target object.
         *
         * @param {any} target - The target object.
         * @param {any} source - The source object.
         * @return {Object} The result of merging the target and source objects together.
         *                  Returns an empty object if either target or source is not an object.
         */
        Util.shallowMerge = function (target, source) {
            return Util.isObject(target) && Util.isObject(source)
                ? __assign(__assign({}, target), { source: source }) : {};
        };
        /**
         * Performs a deep merge of two objects recursively merging any nested objects using their keys.
         * It does not modify the original objects but instead returns a new object.
         *
         * @param {any} target - The initial object to merge into.
         * @param {any} source - The object to merge from, overriding properties in 'target'.
         * @return {Object} A new object with the properties of both the target and the source objects merged together.
         */
        Util.deepMerge = function (target, source) {
            var output = Util.shallowMerge({}, target);
            if (Util.isObject(target) && Util.isObject(source)) {
                Object.keys(source).forEach(function (key) {
                    var _a, _b;
                    if (Util.isObject(source[key])) {
                        if (!(key in target)) {
                            output = Util.shallowMerge(output, (_a = {}, _a[key] = source[key], _a));
                        }
                        else {
                            output[key] = Util.deepMerge(target[key], source[key]);
                        }
                    }
                    else {
                        output = Util.shallowMerge(output, (_b = {}, _b[key] = source[key], _b));
                    }
                });
            }
            return output;
        };
        /**
         * Uses the postMessage API to send a message to a specified iframe window.
         *
         * @param {Window} target - The target window to which the message is sent.
         * @param {string} message - The message to send, expected to be a string.
         */
        Util.postMessage = function (target, message) {
            target === null || target === void 0 ? void 0 : target.postMessage(message, '*');
        };
        /**
         * Stringifies the given message and posts it to the specified window.
         *
         * @param {any} message - The message to be stringified and sent. This can be of any type,
         *                        but should be JSON-serializable.
         */
        Util.postCurrentMessage = function (message) {
            this.postMessage(parent || window, JSON.stringify(message));
        };
        /**
         * Generates and returns a UUID according to the W3C Trace Context specification.
         *
         * @param {string} [requestId] - Optional. If provided, this requestId will be returned
         *                               directly without generating a new one.
         *                               Otherwise, a new requestId will be generated using the
         *                               TraceParent library.
         * @returns {string} The specified UUID if provided, or a newly generated UUID.
         */
        Util.getRequestId = function (requestId) {
            return requestId || TraceParent.createTraceId();
        };
        /**
         * Checks if a given event is a value inside the specified enum.
         *
         * @typeparam T - The enum type.
         * @param event - The event value to check.
         * @param enumObj - The enum against which to check the event.
         * @returns {boolean} - True if the event is in the enum, else false.
         */
        Util.isEventInEnum = function (event, enumObj) {
            return Object.values(enumObj).includes(event);
        };
        /**
         * Converts an enum object to a string listing all the key-value pairs within the enum.
         *
         * @param {any} enumObj - The enum object to convert into a string.
         * @returns {string} A string representation of the enum object.
         */
        Util.enumToString = function (enumObj) {
            return Object.entries(enumObj)
                .map(function (_a) {
                var key = _a[0], value = _a[1];
                return "".concat(key, ": ").concat(value);
            })
                .join(', ');
        };
        /**
         * Creates and returns a custom Bespoke API error object. This method is intended for generating standardized error objects that can be used throughout an application to maintain consistency in error handling.
         *
         * @param {string} errorText - The message text describing the error. This text is used both for the standard error message and the localized error message.
         * @returns {BespokeApiCustomError} An error object containing the error code (which is set as an empty string), the standard error message, and the localized error message based on the provided error text.
         */
        Util.createBespokeCustomError = function (errorText) {
            return {
                errorCode: '',
                errorMessage: errorText,
                localisedErrorMessage: errorText,
            };
        };
        return Util;
    }());
    global.BespokeApiV2Client = BespokeApiV2Client;
})(window);
