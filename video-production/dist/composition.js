var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __commonJS = (cb, mod) => function __require() {
  try {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  } catch (e) {
    throw mod = 0, e;
  }
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);

// node_modules/react/cjs/react.development.js
var require_react_development = __commonJS({
  "node_modules/react/cjs/react.development.js"(exports, module) {
    "use strict";
    (function() {
      function defineDeprecationWarning(methodName, info2) {
        Object.defineProperty(Component.prototype, methodName, {
          get: function() {
            console.warn(
              "%s(...) is deprecated in plain JavaScript React classes. %s",
              info2[0],
              info2[1]
            );
          }
        });
      }
      function getIteratorFn(maybeIterable) {
        if (null === maybeIterable || "object" !== typeof maybeIterable)
          return null;
        maybeIterable = MAYBE_ITERATOR_SYMBOL && maybeIterable[MAYBE_ITERATOR_SYMBOL] || maybeIterable["@@iterator"];
        return "function" === typeof maybeIterable ? maybeIterable : null;
      }
      function warnNoop(publicInstance, callerName) {
        publicInstance = (publicInstance = publicInstance.constructor) && (publicInstance.displayName || publicInstance.name) || "ReactClass";
        var warningKey = publicInstance + "." + callerName;
        didWarnStateUpdateForUnmountedComponent[warningKey] || (console.error(
          "Can't call %s on a component that is not yet mounted. This is a no-op, but it might indicate a bug in your application. Instead, assign to `this.state` directly or define a `state = {};` class property with the desired state in the %s component.",
          callerName,
          publicInstance
        ), didWarnStateUpdateForUnmountedComponent[warningKey] = true);
      }
      function Component(props, context, updater) {
        this.props = props;
        this.context = context;
        this.refs = emptyObject;
        this.updater = updater || ReactNoopUpdateQueue;
      }
      function ComponentDummy() {
      }
      function PureComponent(props, context, updater) {
        this.props = props;
        this.context = context;
        this.refs = emptyObject;
        this.updater = updater || ReactNoopUpdateQueue;
      }
      function noop() {
      }
      function testStringCoercion(value) {
        return "" + value;
      }
      function checkKeyStringCoercion(value) {
        try {
          testStringCoercion(value);
          var JSCompiler_inline_result = false;
        } catch (e) {
          JSCompiler_inline_result = true;
        }
        if (JSCompiler_inline_result) {
          JSCompiler_inline_result = console;
          var JSCompiler_temp_const = JSCompiler_inline_result.error;
          var JSCompiler_inline_result$jscomp$0 = "function" === typeof Symbol && Symbol.toStringTag && value[Symbol.toStringTag] || value.constructor.name || "Object";
          JSCompiler_temp_const.call(
            JSCompiler_inline_result,
            "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
            JSCompiler_inline_result$jscomp$0
          );
          return testStringCoercion(value);
        }
      }
      function getComponentNameFromType(type) {
        if (null == type) return null;
        if ("function" === typeof type)
          return type.$$typeof === REACT_CLIENT_REFERENCE ? null : type.displayName || type.name || null;
        if ("string" === typeof type) return type;
        switch (type) {
          case REACT_FRAGMENT_TYPE:
            return "Fragment";
          case REACT_PROFILER_TYPE:
            return "Profiler";
          case REACT_STRICT_MODE_TYPE:
            return "StrictMode";
          case REACT_SUSPENSE_TYPE:
            return "Suspense";
          case REACT_SUSPENSE_LIST_TYPE:
            return "SuspenseList";
          case REACT_ACTIVITY_TYPE:
            return "Activity";
          case REACT_VIEW_TRANSITION_TYPE:
            return "ViewTransition";
        }
        if ("object" === typeof type)
          switch ("number" === typeof type.tag && console.error(
            "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
          ), type.$$typeof) {
            case REACT_PORTAL_TYPE:
              return "Portal";
            case REACT_CONTEXT_TYPE:
              return type.displayName || "Context";
            case REACT_CONSUMER_TYPE:
              return (type._context.displayName || "Context") + ".Consumer";
            case REACT_FORWARD_REF_TYPE:
              var innerType = type.render;
              type = type.displayName;
              type || (type = innerType.displayName || innerType.name || "", type = "" !== type ? "ForwardRef(" + type + ")" : "ForwardRef");
              return type;
            case REACT_MEMO_TYPE:
              return innerType = type.displayName || null, null !== innerType ? innerType : getComponentNameFromType(type.type) || "Memo";
            case REACT_LAZY_TYPE:
              innerType = type._payload;
              type = type._init;
              try {
                return getComponentNameFromType(type(innerType));
              } catch (x) {
              }
          }
        return null;
      }
      function getTaskName(type) {
        if (type === REACT_FRAGMENT_TYPE) return "<>";
        if ("object" === typeof type && null !== type && type.$$typeof === REACT_LAZY_TYPE)
          return "<...>";
        try {
          var name = getComponentNameFromType(type);
          return name ? "<" + name + ">" : "<...>";
        } catch (x) {
          return "<...>";
        }
      }
      function getOwner() {
        var dispatcher = ReactSharedInternals.A;
        return null === dispatcher ? null : dispatcher.getOwner();
      }
      function UnknownOwner() {
        return Error("react-stack-top-frame");
      }
      function hasValidKey(config) {
        if (hasOwnProperty.call(config, "key")) {
          var getter = Object.getOwnPropertyDescriptor(config, "key").get;
          if (getter && getter.isReactWarning) return false;
        }
        return void 0 !== config.key;
      }
      function defineKeyPropWarningGetter(props, displayName) {
        function warnAboutAccessingKey() {
          specialPropKeyWarningShown || (specialPropKeyWarningShown = true, console.error(
            "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
            displayName
          ));
        }
        warnAboutAccessingKey.isReactWarning = true;
        Object.defineProperty(props, "key", {
          get: warnAboutAccessingKey,
          configurable: true
        });
      }
      function elementRefGetterWithDeprecationWarning() {
        var componentName = getComponentNameFromType(this.type);
        didWarnAboutElementRef[componentName] || (didWarnAboutElementRef[componentName] = true, console.error(
          "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
        ));
        componentName = this.props.ref;
        return void 0 !== componentName ? componentName : null;
      }
      function ReactElement(type, key, props, owner, debugStack, debugTask) {
        var refProp = props.ref;
        type = {
          $$typeof: REACT_ELEMENT_TYPE,
          type,
          key,
          props,
          _owner: owner
        };
        null !== (void 0 !== refProp ? refProp : null) ? Object.defineProperty(type, "ref", {
          enumerable: false,
          get: elementRefGetterWithDeprecationWarning
        }) : Object.defineProperty(type, "ref", { enumerable: false, value: null });
        type._store = {};
        Object.defineProperty(type._store, "validated", {
          configurable: false,
          enumerable: false,
          writable: true,
          value: 0
        });
        Object.defineProperty(type, "_debugInfo", {
          configurable: false,
          enumerable: false,
          writable: true,
          value: null
        });
        Object.defineProperty(type, "_debugStack", {
          configurable: false,
          enumerable: false,
          writable: true,
          value: debugStack
        });
        Object.defineProperty(type, "_debugTask", {
          configurable: false,
          enumerable: false,
          writable: true,
          value: debugTask
        });
        Object.freeze && (Object.freeze(type.props), Object.freeze(type));
        return type;
      }
      function cloneAndReplaceKey(oldElement, newKey) {
        newKey = ReactElement(
          oldElement.type,
          newKey,
          oldElement.props,
          oldElement._owner,
          oldElement._debugStack,
          oldElement._debugTask
        );
        oldElement._store && (newKey._store.validated = oldElement._store.validated);
        return newKey;
      }
      function validateChildKeys(node) {
        isValidElement2(node) ? node._store && (node._store.validated = 1) : "object" === typeof node && null !== node && node.$$typeof === REACT_LAZY_TYPE && ("fulfilled" === node._payload.status ? isValidElement2(node._payload.value) && node._payload.value._store && (node._payload.value._store.validated = 1) : node._store && (node._store.validated = 1));
      }
      function isValidElement2(object) {
        return "object" === typeof object && null !== object && object.$$typeof === REACT_ELEMENT_TYPE;
      }
      function escape(key) {
        var escaperLookup = { "=": "=0", ":": "=2" };
        return "$" + key.replace(/[=:]/g, function(match) {
          return escaperLookup[match];
        });
      }
      function getElementKey(element, index) {
        return "object" === typeof element && null !== element && null != element.key ? (checkKeyStringCoercion(element.key), escape("" + element.key)) : index.toString(36);
      }
      function resolveThenable(thenable) {
        switch (thenable.status) {
          case "fulfilled":
            return thenable.value;
          case "rejected":
            throw thenable.reason;
          default:
            switch ("string" === typeof thenable.status ? thenable.then(noop, noop) : (thenable.status = "pending", thenable.then(
              function(fulfilledValue) {
                "pending" === thenable.status && (thenable.status = "fulfilled", thenable.value = fulfilledValue);
              },
              function(error2) {
                "pending" === thenable.status && (thenable.status = "rejected", thenable.reason = error2);
              }
            )), thenable.status) {
              case "fulfilled":
                return thenable.value;
              case "rejected":
                throw thenable.reason;
            }
        }
        throw thenable;
      }
      function mapIntoArray(children, array, escapedPrefix, nameSoFar, callback) {
        var type = typeof children;
        if ("undefined" === type || "boolean" === type) children = null;
        var invokeCallback = false;
        if (null === children) invokeCallback = true;
        else
          switch (type) {
            case "bigint":
            case "string":
            case "number":
              invokeCallback = true;
              break;
            case "object":
              switch (children.$$typeof) {
                case REACT_ELEMENT_TYPE:
                case REACT_PORTAL_TYPE:
                  invokeCallback = true;
                  break;
                case REACT_LAZY_TYPE:
                  return invokeCallback = children._init, mapIntoArray(
                    invokeCallback(children._payload),
                    array,
                    escapedPrefix,
                    nameSoFar,
                    callback
                  );
              }
          }
        if (invokeCallback) {
          invokeCallback = children;
          callback = callback(invokeCallback);
          var childKey = "" === nameSoFar ? "." + getElementKey(invokeCallback, 0) : nameSoFar;
          isArrayImpl(callback) ? (escapedPrefix = "", null != childKey && (escapedPrefix = childKey.replace(userProvidedKeyEscapeRegex, "$&/") + "/"), mapIntoArray(callback, array, escapedPrefix, "", function(c2) {
            return c2;
          })) : null != callback && (isValidElement2(callback) && (null != callback.key && (invokeCallback && invokeCallback.key === callback.key || checkKeyStringCoercion(callback.key)), escapedPrefix = cloneAndReplaceKey(
            callback,
            escapedPrefix + (null == callback.key || invokeCallback && invokeCallback.key === callback.key ? "" : ("" + callback.key).replace(
              userProvidedKeyEscapeRegex,
              "$&/"
            ) + "/") + childKey
          ), "" !== nameSoFar && null != invokeCallback && isValidElement2(invokeCallback) && null == invokeCallback.key && invokeCallback._store && !invokeCallback._store.validated && (escapedPrefix._store.validated = 2), callback = escapedPrefix), array.push(callback));
          return 1;
        }
        invokeCallback = 0;
        childKey = "" === nameSoFar ? "." : nameSoFar + ":";
        if (isArrayImpl(children))
          for (var i = 0; i < children.length; i++)
            nameSoFar = children[i], type = childKey + getElementKey(nameSoFar, i), invokeCallback += mapIntoArray(
              nameSoFar,
              array,
              escapedPrefix,
              type,
              callback
            );
        else if (i = getIteratorFn(children), "function" === typeof i)
          for (i === children.entries && (didWarnAboutMaps || console.warn(
            "Using Maps as children is not supported. Use an array of keyed ReactElements instead."
          ), didWarnAboutMaps = true), children = i.call(children), i = 0; !(nameSoFar = children.next()).done; )
            nameSoFar = nameSoFar.value, type = childKey + getElementKey(nameSoFar, i++), invokeCallback += mapIntoArray(
              nameSoFar,
              array,
              escapedPrefix,
              type,
              callback
            );
        else if ("object" === type) {
          if ("function" === typeof children.then)
            return mapIntoArray(
              resolveThenable(children),
              array,
              escapedPrefix,
              nameSoFar,
              callback
            );
          array = String(children);
          throw Error(
            "Objects are not valid as a React child (found: " + ("[object Object]" === array ? "object with keys {" + Object.keys(children).join(", ") + "}" : array) + "). If you meant to render a collection of children, use an array instead."
          );
        }
        return invokeCallback;
      }
      function mapChildren(children, func, context) {
        if (null == children) return children;
        var result = [], count = 0;
        mapIntoArray(children, result, "", "", function(child) {
          return func.call(context, child, count++);
        });
        return result;
      }
      function lazyInitializer(payload) {
        if (-1 === payload._status) {
          var resolveDebugValue = null, rejectDebugValue = null, ioInfo = payload._ioInfo;
          null != ioInfo && (ioInfo.start = ioInfo.end = performance.now(), ioInfo.value = new Promise(function(resolve, reject) {
            resolveDebugValue = resolve;
            rejectDebugValue = reject;
          }));
          ioInfo = payload._result;
          var thenable = ioInfo();
          thenable.then(
            function(moduleObject) {
              if (0 === payload._status || -1 === payload._status) {
                payload._status = 1;
                payload._result = moduleObject;
                var _ioInfo = payload._ioInfo;
                if (null != _ioInfo) {
                  _ioInfo.end = performance.now();
                  var debugValue = null == moduleObject ? void 0 : moduleObject.default;
                  resolveDebugValue(debugValue);
                  _ioInfo.value.status = "fulfilled";
                  _ioInfo.value.value = debugValue;
                }
                void 0 === thenable.status && (thenable.status = "fulfilled", thenable.value = moduleObject);
              }
            },
            function(error2) {
              if (0 === payload._status || -1 === payload._status) {
                payload._status = 2;
                payload._result = error2;
                var _ioInfo2 = payload._ioInfo;
                null != _ioInfo2 && (_ioInfo2.end = performance.now(), _ioInfo2.value.then(noop, noop), rejectDebugValue(error2), _ioInfo2.value.status = "rejected", _ioInfo2.value.reason = error2);
                void 0 === thenable.status && (thenable.status = "rejected", thenable.reason = error2);
              }
            }
          );
          ioInfo = payload._ioInfo;
          if (null != ioInfo) {
            var displayName = thenable.displayName;
            "string" === typeof displayName && (ioInfo.name = displayName);
          }
          -1 === payload._status && (payload._status = 0, payload._result = thenable);
        }
        if (1 === payload._status)
          return ioInfo = payload._result, void 0 === ioInfo && console.error(
            "lazy: Expected the result of a dynamic import() call. Instead received: %s\n\nYour code should look like: \n  const MyComponent = lazy(() => import('./MyComponent'))\n\nDid you accidentally put curly braces around the import?",
            ioInfo
          ), "default" in ioInfo || console.error(
            "lazy: Expected the result of a dynamic import() call. Instead received: %s\n\nYour code should look like: \n  const MyComponent = lazy(() => import('./MyComponent'))",
            ioInfo
          ), ioInfo.default;
        throw payload._result;
      }
      function resolveDispatcher() {
        var dispatcher = ReactSharedInternals.H;
        null === dispatcher && console.error(
          "Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:\n1. You might have mismatching versions of React and the renderer (such as React DOM)\n2. You might be breaking the Rules of Hooks\n3. You might have more than one copy of React in the same app\nSee https://react.dev/link/invalid-hook-call for tips about how to debug and fix this problem."
        );
        return dispatcher;
      }
      function releaseAsyncTransition() {
        ReactSharedInternals.asyncTransitions--;
      }
      function startTransition(scope) {
        var prevTransition = ReactSharedInternals.T, currentTransition = {};
        currentTransition.types = null !== prevTransition ? prevTransition.types : null;
        currentTransition._updatedFibers = /* @__PURE__ */ new Set();
        ReactSharedInternals.T = currentTransition;
        try {
          var returnValue = scope(), onStartTransitionFinish = ReactSharedInternals.S;
          null !== onStartTransitionFinish && onStartTransitionFinish(currentTransition, returnValue);
          "object" === typeof returnValue && null !== returnValue && "function" === typeof returnValue.then && (ReactSharedInternals.asyncTransitions++, returnValue.then(releaseAsyncTransition, releaseAsyncTransition), returnValue.then(noop, reportGlobalError));
        } catch (error2) {
          reportGlobalError(error2);
        } finally {
          null === prevTransition && currentTransition._updatedFibers && (scope = currentTransition._updatedFibers.size, currentTransition._updatedFibers.clear(), 10 < scope && console.warn(
            "Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."
          )), null !== prevTransition && null !== currentTransition.types && (null !== prevTransition.types && prevTransition.types !== currentTransition.types && console.error(
            "We expected inner Transitions to have transferred the outer types set and that you cannot add to the outer Transition while inside the inner.This is a bug in React."
          ), prevTransition.types = currentTransition.types), ReactSharedInternals.T = prevTransition;
        }
      }
      function addTransitionType(type) {
        var transition = ReactSharedInternals.T;
        if (null !== transition) {
          var transitionTypes = transition.types;
          null === transitionTypes ? transition.types = [type] : -1 === transitionTypes.indexOf(type) && transitionTypes.push(type);
        } else
          0 === ReactSharedInternals.asyncTransitions && console.error(
            "addTransitionType can only be called inside a `startTransition()` callback. It must be associated with a specific Transition."
          ), startTransition(addTransitionType.bind(null, type));
      }
      function enqueueTask(task) {
        if (null === enqueueTaskImpl)
          try {
            var requireString = ("require" + Math.random()).slice(0, 7);
            enqueueTaskImpl = (module && module[requireString]).call(
              module,
              "timers"
            ).setImmediate;
          } catch (_err) {
            enqueueTaskImpl = function(callback) {
              false === didWarnAboutMessageChannel && (didWarnAboutMessageChannel = true, "undefined" === typeof MessageChannel && console.error(
                "This browser does not have a MessageChannel implementation, so enqueuing tasks via await act(async () => ...) will fail. Please file an issue at https://github.com/facebook/react/issues if you encounter this warning."
              ));
              var channel = new MessageChannel();
              channel.port1.onmessage = callback;
              channel.port2.postMessage(void 0);
            };
          }
        return enqueueTaskImpl(task);
      }
      function aggregateErrors(errors) {
        return 1 < errors.length && "function" === typeof AggregateError ? new AggregateError(errors) : errors[0];
      }
      function popActScope(prevActQueue, prevActScopeDepth) {
        prevActScopeDepth !== actScopeDepth - 1 && console.error(
          "You seem to have overlapping act() calls, this is not supported. Be sure to await previous act() calls before making a new one. "
        );
        actScopeDepth = prevActScopeDepth;
      }
      function recursivelyFlushAsyncActWork(returnValue, resolve, reject) {
        var queue = ReactSharedInternals.actQueue;
        if (null !== queue)
          if (0 !== queue.length)
            try {
              flushActQueue(queue);
              enqueueTask(function() {
                return recursivelyFlushAsyncActWork(returnValue, resolve, reject);
              });
              return;
            } catch (error2) {
              ReactSharedInternals.thrownErrors.push(error2);
            }
          else ReactSharedInternals.actQueue = null;
        0 < ReactSharedInternals.thrownErrors.length ? (queue = aggregateErrors(ReactSharedInternals.thrownErrors), ReactSharedInternals.thrownErrors.length = 0, reject(queue)) : resolve(returnValue);
      }
      function flushActQueue(queue) {
        if (!isFlushing) {
          isFlushing = true;
          var i = 0;
          try {
            for (; i < queue.length; i++) {
              var callback = queue[i];
              do {
                ReactSharedInternals.didUsePromise = false;
                var continuation = callback(false);
                if (null !== continuation) {
                  if (ReactSharedInternals.didUsePromise) {
                    queue[i] = callback;
                    queue.splice(0, i);
                    return;
                  }
                  callback = continuation;
                } else break;
              } while (1);
            }
            queue.length = 0;
          } catch (error2) {
            queue.splice(0, i + 1), ReactSharedInternals.thrownErrors.push(error2);
          } finally {
            isFlushing = false;
          }
        }
      }
      "undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ && "function" === typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());
      var REACT_ELEMENT_TYPE = /* @__PURE__ */ Symbol.for("react.transitional.element"), REACT_PORTAL_TYPE = /* @__PURE__ */ Symbol.for("react.portal"), REACT_FRAGMENT_TYPE = /* @__PURE__ */ Symbol.for("react.fragment"), REACT_STRICT_MODE_TYPE = /* @__PURE__ */ Symbol.for("react.strict_mode"), REACT_PROFILER_TYPE = /* @__PURE__ */ Symbol.for("react.profiler"), REACT_CONSUMER_TYPE = /* @__PURE__ */ Symbol.for("react.consumer"), REACT_CONTEXT_TYPE = /* @__PURE__ */ Symbol.for("react.context"), REACT_FORWARD_REF_TYPE = /* @__PURE__ */ Symbol.for("react.forward_ref"), REACT_SUSPENSE_TYPE = /* @__PURE__ */ Symbol.for("react.suspense"), REACT_SUSPENSE_LIST_TYPE = /* @__PURE__ */ Symbol.for("react.suspense_list"), REACT_MEMO_TYPE = /* @__PURE__ */ Symbol.for("react.memo"), REACT_LAZY_TYPE = /* @__PURE__ */ Symbol.for("react.lazy"), REACT_ACTIVITY_TYPE = /* @__PURE__ */ Symbol.for("react.activity"), REACT_VIEW_TRANSITION_TYPE = /* @__PURE__ */ Symbol.for("react.view_transition"), MAYBE_ITERATOR_SYMBOL = Symbol.iterator, didWarnStateUpdateForUnmountedComponent = {}, ReactNoopUpdateQueue = {
        isMounted: function() {
          return false;
        },
        enqueueForceUpdate: function(publicInstance) {
          warnNoop(publicInstance, "forceUpdate");
        },
        enqueueReplaceState: function(publicInstance) {
          warnNoop(publicInstance, "replaceState");
        },
        enqueueSetState: function(publicInstance) {
          warnNoop(publicInstance, "setState");
        }
      }, assign = Object.assign, emptyObject = {};
      Object.freeze(emptyObject);
      Component.prototype.isReactComponent = {};
      Component.prototype.setState = function(partialState, callback) {
        if ("object" !== typeof partialState && "function" !== typeof partialState && null != partialState)
          throw Error(
            "takes an object of state variables to update or a function which returns an object of state variables."
          );
        this.updater.enqueueSetState(this, partialState, callback, "setState");
      };
      Component.prototype.forceUpdate = function(callback) {
        this.updater.enqueueForceUpdate(this, callback, "forceUpdate");
      };
      var deprecatedAPIs = {
        isMounted: [
          "isMounted",
          "Instead, make sure to clean up subscriptions and pending requests in componentWillUnmount to prevent memory leaks."
        ],
        replaceState: [
          "replaceState",
          "Refactor your code to use setState instead (see https://github.com/facebook/react/issues/3236)."
        ]
      };
      for (fnName in deprecatedAPIs)
        deprecatedAPIs.hasOwnProperty(fnName) && defineDeprecationWarning(fnName, deprecatedAPIs[fnName]);
      ComponentDummy.prototype = Component.prototype;
      deprecatedAPIs = PureComponent.prototype = new ComponentDummy();
      deprecatedAPIs.constructor = PureComponent;
      assign(deprecatedAPIs, Component.prototype);
      deprecatedAPIs.isPureReactComponent = true;
      var isArrayImpl = Array.isArray, REACT_CLIENT_REFERENCE = /* @__PURE__ */ Symbol.for("react.client.reference"), ReactSharedInternals = {
        H: null,
        A: null,
        T: null,
        S: null,
        actQueue: null,
        asyncTransitions: 0,
        isBatchingLegacy: false,
        didScheduleLegacyUpdate: false,
        didUsePromise: false,
        thrownErrors: [],
        getCurrentStack: null,
        recentlyCreatedOwnerStacks: 0
      }, hasOwnProperty = Object.prototype.hasOwnProperty, createTask = console.createTask ? console.createTask : function() {
        return null;
      };
      deprecatedAPIs = {
        react_stack_bottom_frame: function(callStackForError) {
          return callStackForError();
        }
      };
      var specialPropKeyWarningShown, didWarnAboutOldJSXRuntime;
      var didWarnAboutElementRef = {};
      var unknownOwnerDebugStack = deprecatedAPIs.react_stack_bottom_frame.bind(
        deprecatedAPIs,
        UnknownOwner
      )();
      var unknownOwnerDebugTask = createTask(getTaskName(UnknownOwner));
      var didWarnAboutMaps = false, userProvidedKeyEscapeRegex = /\/+/g, reportGlobalError = "function" === typeof reportError ? reportError : function(error2) {
        if ("object" === typeof window && "function" === typeof window.ErrorEvent) {
          var event = new window.ErrorEvent("error", {
            bubbles: true,
            cancelable: true,
            message: "object" === typeof error2 && null !== error2 && "string" === typeof error2.message ? String(error2.message) : String(error2),
            error: error2
          });
          if (!window.dispatchEvent(event)) return;
        } else if ("object" === typeof process && "function" === typeof process.emit) {
          process.emit("uncaughtException", error2);
          return;
        }
        console.error(error2);
      }, didWarnAboutMessageChannel = false, enqueueTaskImpl = null, actScopeDepth = 0, didWarnNoAwaitAct = false, isFlushing = false, queueSeveralMicrotasks = "function" === typeof queueMicrotask ? function(callback) {
        queueMicrotask(function() {
          return queueMicrotask(callback);
        });
      } : enqueueTask;
      deprecatedAPIs = Object.freeze({
        __proto__: null,
        c: function(size) {
          return resolveDispatcher().useMemoCache(size);
        }
      });
      var fnName = {
        map: mapChildren,
        forEach: function(children, forEachFunc, forEachContext) {
          mapChildren(
            children,
            function() {
              forEachFunc.apply(this, arguments);
            },
            forEachContext
          );
        },
        count: function(children) {
          var n = 0;
          mapChildren(children, function() {
            n++;
          });
          return n;
        },
        toArray: function(children) {
          return mapChildren(children, function(child) {
            return child;
          }) || [];
        },
        only: function(children) {
          if (!isValidElement2(children))
            throw Error(
              "React.Children.only expected to receive a single React element child."
            );
          return children;
        }
      };
      exports.Activity = REACT_ACTIVITY_TYPE;
      exports.Children = fnName;
      exports.Component = Component;
      exports.Fragment = REACT_FRAGMENT_TYPE;
      exports.Profiler = REACT_PROFILER_TYPE;
      exports.PureComponent = PureComponent;
      exports.StrictMode = REACT_STRICT_MODE_TYPE;
      exports.Suspense = REACT_SUSPENSE_TYPE;
      exports.ViewTransition = REACT_VIEW_TRANSITION_TYPE;
      exports.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = ReactSharedInternals;
      exports.__COMPILER_RUNTIME = deprecatedAPIs;
      exports.act = function(callback) {
        var prevActQueue = ReactSharedInternals.actQueue, prevActScopeDepth = actScopeDepth;
        actScopeDepth++;
        var queue = ReactSharedInternals.actQueue = null !== prevActQueue ? prevActQueue : [], didAwaitActCall = false;
        try {
          var result = callback();
        } catch (error2) {
          ReactSharedInternals.thrownErrors.push(error2);
        }
        if (0 < ReactSharedInternals.thrownErrors.length)
          throw popActScope(prevActQueue, prevActScopeDepth), callback = aggregateErrors(ReactSharedInternals.thrownErrors), ReactSharedInternals.thrownErrors.length = 0, callback;
        if (null !== result && "object" === typeof result && "function" === typeof result.then) {
          var thenable = result;
          queueSeveralMicrotasks(function() {
            didAwaitActCall || didWarnNoAwaitAct || (didWarnNoAwaitAct = true, console.error(
              "You called act(async () => ...) without await. This could lead to unexpected testing behaviour, interleaving multiple act calls and mixing their scopes. You should - await act(async () => ...);"
            ));
          });
          return {
            then: function(resolve, reject) {
              didAwaitActCall = true;
              thenable.then(
                function(returnValue) {
                  popActScope(prevActQueue, prevActScopeDepth);
                  if (0 === prevActScopeDepth) {
                    try {
                      flushActQueue(queue), enqueueTask(function() {
                        return recursivelyFlushAsyncActWork(
                          returnValue,
                          resolve,
                          reject
                        );
                      });
                    } catch (error$0) {
                      ReactSharedInternals.thrownErrors.push(error$0);
                    }
                    if (0 < ReactSharedInternals.thrownErrors.length) {
                      var _thrownError = aggregateErrors(
                        ReactSharedInternals.thrownErrors
                      );
                      ReactSharedInternals.thrownErrors.length = 0;
                      reject(_thrownError);
                    }
                  } else resolve(returnValue);
                },
                function(error2) {
                  popActScope(prevActQueue, prevActScopeDepth);
                  0 < ReactSharedInternals.thrownErrors.length ? (error2 = aggregateErrors(
                    ReactSharedInternals.thrownErrors
                  ), ReactSharedInternals.thrownErrors.length = 0, reject(error2)) : reject(error2);
                }
              );
            }
          };
        }
        var returnValue$jscomp$0 = result;
        popActScope(prevActQueue, prevActScopeDepth);
        0 === prevActScopeDepth && (flushActQueue(queue), 0 !== queue.length && queueSeveralMicrotasks(function() {
          didAwaitActCall || didWarnNoAwaitAct || (didWarnNoAwaitAct = true, console.error(
            "A component suspended inside an `act` scope, but the `act` call was not awaited. When testing React components that depend on asynchronous data, you must await the result:\n\nawait act(() => ...)"
          ));
        }), ReactSharedInternals.actQueue = null);
        if (0 < ReactSharedInternals.thrownErrors.length)
          throw callback = aggregateErrors(ReactSharedInternals.thrownErrors), ReactSharedInternals.thrownErrors.length = 0, callback;
        return {
          then: function(resolve, reject) {
            didAwaitActCall = true;
            0 === prevActScopeDepth ? (ReactSharedInternals.actQueue = queue, enqueueTask(function() {
              return recursivelyFlushAsyncActWork(
                returnValue$jscomp$0,
                resolve,
                reject
              );
            })) : resolve(returnValue$jscomp$0);
          }
        };
      };
      exports.addTransitionType = addTransitionType;
      exports.cache = function(fn) {
        return function() {
          return fn.apply(null, arguments);
        };
      };
      exports.cacheSignal = function() {
        return null;
      };
      exports.captureOwnerStack = function() {
        var getCurrentStack = ReactSharedInternals.getCurrentStack;
        return null === getCurrentStack ? null : getCurrentStack();
      };
      exports.cloneElement = function(element, config, children) {
        if (null === element || void 0 === element)
          throw Error(
            "The argument must be a React element, but you passed " + element + "."
          );
        var props = assign({}, element.props), key = element.key, owner = element._owner;
        if (null != config) {
          var JSCompiler_inline_result;
          a: {
            if (hasOwnProperty.call(config, "ref") && (JSCompiler_inline_result = Object.getOwnPropertyDescriptor(
              config,
              "ref"
            ).get) && JSCompiler_inline_result.isReactWarning) {
              JSCompiler_inline_result = false;
              break a;
            }
            JSCompiler_inline_result = void 0 !== config.ref;
          }
          JSCompiler_inline_result && (owner = getOwner());
          hasValidKey(config) && (checkKeyStringCoercion(config.key), key = "" + config.key);
          for (propName in config)
            !hasOwnProperty.call(config, propName) || "key" === propName || "__self" === propName || "__source" === propName || "ref" === propName && void 0 === config.ref || (props[propName] = config[propName]);
        }
        var propName = arguments.length - 2;
        if (1 === propName) props.children = children;
        else if (1 < propName) {
          JSCompiler_inline_result = Array(propName);
          for (var i = 0; i < propName; i++)
            JSCompiler_inline_result[i] = arguments[i + 2];
          props.children = JSCompiler_inline_result;
        }
        props = ReactElement(
          element.type,
          key,
          props,
          owner,
          element._debugStack,
          element._debugTask
        );
        for (key = 2; key < arguments.length; key++)
          validateChildKeys(arguments[key]);
        return props;
      };
      exports.createContext = function(defaultValue) {
        defaultValue = {
          $$typeof: REACT_CONTEXT_TYPE,
          _currentValue: defaultValue,
          _currentValue2: defaultValue,
          _threadCount: 0,
          Provider: null,
          Consumer: null
        };
        defaultValue.Provider = defaultValue;
        defaultValue.Consumer = {
          $$typeof: REACT_CONSUMER_TYPE,
          _context: defaultValue
        };
        defaultValue._currentRenderer = null;
        defaultValue._currentRenderer2 = null;
        return defaultValue;
      };
      exports.createElement = function(type, config, children) {
        for (var i = 2; i < arguments.length; i++)
          validateChildKeys(arguments[i]);
        var propName;
        i = {};
        var key = null;
        if (null != config)
          for (propName in didWarnAboutOldJSXRuntime || !("__self" in config) || "key" in config || (didWarnAboutOldJSXRuntime = true, console.warn(
            "Your app (or one of its dependencies) is using an outdated JSX transform. Update to the modern JSX transform for faster performance: https://react.dev/link/new-jsx-transform"
          )), hasValidKey(config) && (checkKeyStringCoercion(config.key), key = "" + config.key), config)
            hasOwnProperty.call(config, propName) && "key" !== propName && "__self" !== propName && "__source" !== propName && (i[propName] = config[propName]);
        var childrenLength = arguments.length - 2;
        if (1 === childrenLength) i.children = children;
        else if (1 < childrenLength) {
          for (var childArray = Array(childrenLength), _i = 0; _i < childrenLength; _i++)
            childArray[_i] = arguments[_i + 2];
          Object.freeze && Object.freeze(childArray);
          i.children = childArray;
        }
        if (type && type.defaultProps)
          for (propName in childrenLength = type.defaultProps, childrenLength)
            void 0 === i[propName] && (i[propName] = childrenLength[propName]);
        key && defineKeyPropWarningGetter(
          i,
          "function" === typeof type ? type.displayName || type.name || "Unknown" : type
        );
        (propName = 1e4 > ReactSharedInternals.recentlyCreatedOwnerStacks++) ? (childArray = Error.stackTraceLimit, Error.stackTraceLimit = 10, childrenLength = Error("react-stack-top-frame"), Error.stackTraceLimit = childArray) : childrenLength = unknownOwnerDebugStack;
        return ReactElement(
          type,
          key,
          i,
          getOwner(),
          childrenLength,
          propName ? createTask(getTaskName(type)) : unknownOwnerDebugTask
        );
      };
      exports.createRef = function() {
        var refObject = { current: null };
        Object.seal(refObject);
        return refObject;
      };
      exports.forwardRef = function(render) {
        null != render && render.$$typeof === REACT_MEMO_TYPE ? console.error(
          "forwardRef requires a render function but received a `memo` component. Instead of forwardRef(memo(...)), use memo(forwardRef(...))."
        ) : "function" !== typeof render ? console.error(
          "forwardRef requires a render function but was given %s.",
          null === render ? "null" : typeof render
        ) : 0 !== render.length && 2 !== render.length && console.error(
          "forwardRef render functions accept exactly two parameters: props and ref. %s",
          1 === render.length ? "Did you forget to use the ref parameter?" : "Any additional parameter will be undefined."
        );
        null != render && null != render.defaultProps && console.error(
          "forwardRef render functions do not support defaultProps. Did you accidentally pass a React component?"
        );
        var elementType = { $$typeof: REACT_FORWARD_REF_TYPE, render }, ownName;
        Object.defineProperty(elementType, "displayName", {
          enumerable: false,
          configurable: true,
          get: function() {
            return ownName;
          },
          set: function(name) {
            ownName = name;
            render.name || render.displayName || (Object.defineProperty(render, "name", { value: name }), render.displayName = name);
          }
        });
        return elementType;
      };
      exports.isValidElement = isValidElement2;
      exports.lazy = function(ctor) {
        ctor = { _status: -1, _result: ctor };
        var lazyType = {
          $$typeof: REACT_LAZY_TYPE,
          _payload: ctor,
          _init: lazyInitializer
        }, ioInfo = {
          name: "lazy",
          start: -1,
          end: -1,
          value: null,
          owner: null,
          debugStack: Error("react-stack-top-frame"),
          debugTask: console.createTask ? console.createTask("lazy()") : null
        };
        ctor._ioInfo = ioInfo;
        lazyType._debugInfo = [{ awaited: ioInfo }];
        return lazyType;
      };
      exports.memo = function(type, compare) {
        null == type && console.error(
          "memo: The first argument must be a component. Instead received: %s",
          null === type ? "null" : typeof type
        );
        compare = {
          $$typeof: REACT_MEMO_TYPE,
          type,
          compare: void 0 === compare ? null : compare
        };
        var ownName;
        Object.defineProperty(compare, "displayName", {
          enumerable: false,
          configurable: true,
          get: function() {
            return ownName;
          },
          set: function(name) {
            ownName = name;
            type.name || type.displayName || (Object.defineProperty(type, "name", { value: name }), type.displayName = name);
          }
        });
        return compare;
      };
      exports.startTransition = startTransition;
      exports.unstable_useCacheRefresh = function() {
        return resolveDispatcher().useCacheRefresh();
      };
      exports.use = function(usable) {
        return resolveDispatcher().use(usable);
      };
      exports.useActionState = function(action, initialState, permalink) {
        return resolveDispatcher().useActionState(
          action,
          initialState,
          permalink
        );
      };
      exports.useCallback = function(callback, deps) {
        return resolveDispatcher().useCallback(callback, deps);
      };
      exports.useContext = function(Context) {
        var dispatcher = resolveDispatcher();
        Context.$$typeof === REACT_CONSUMER_TYPE && console.error(
          "Calling useContext(Context.Consumer) is not supported and will cause bugs. Did you mean to call useContext(Context) instead?"
        );
        return dispatcher.useContext(Context);
      };
      exports.useDebugValue = function(value, formatterFn) {
        return resolveDispatcher().useDebugValue(value, formatterFn);
      };
      exports.useDeferredValue = function(value, initialValue) {
        return resolveDispatcher().useDeferredValue(value, initialValue);
      };
      exports.useEffect = function(create2, deps) {
        null == create2 && console.warn(
          "React Hook useEffect requires an effect callback. Did you forget to pass a callback to the hook?"
        );
        return resolveDispatcher().useEffect(create2, deps);
      };
      exports.useEffectEvent = function(callback) {
        return resolveDispatcher().useEffectEvent(callback);
      };
      exports.useId = function() {
        return resolveDispatcher().useId();
      };
      exports.useImperativeHandle = function(ref, create2, deps) {
        return resolveDispatcher().useImperativeHandle(ref, create2, deps);
      };
      exports.useInsertionEffect = function(create2, deps) {
        null == create2 && console.warn(
          "React Hook useInsertionEffect requires an effect callback. Did you forget to pass a callback to the hook?"
        );
        return resolveDispatcher().useInsertionEffect(create2, deps);
      };
      exports.useLayoutEffect = function(create2, deps) {
        null == create2 && console.warn(
          "React Hook useLayoutEffect requires an effect callback. Did you forget to pass a callback to the hook?"
        );
        return resolveDispatcher().useLayoutEffect(create2, deps);
      };
      exports.useMemo = function(create2, deps) {
        return resolveDispatcher().useMemo(create2, deps);
      };
      exports.useOptimistic = function(passthrough, reducer) {
        return resolveDispatcher().useOptimistic(passthrough, reducer);
      };
      exports.useReducer = function(reducer, initialArg, init) {
        return resolveDispatcher().useReducer(reducer, initialArg, init);
      };
      exports.useRef = function(initialValue) {
        return resolveDispatcher().useRef(initialValue);
      };
      exports.useState = function(initialState) {
        return resolveDispatcher().useState(initialState);
      };
      exports.useSyncExternalStore = function(subscribe2, getSnapshot, getServerSnapshot) {
        return resolveDispatcher().useSyncExternalStore(
          subscribe2,
          getSnapshot,
          getServerSnapshot
        );
      };
      exports.useTransition = function() {
        return resolveDispatcher().useTransition();
      };
      exports.version = "19.3.1";
      "undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ && "function" === typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
    })();
  }
});

// node_modules/react/index.js
var require_react = __commonJS({
  "node_modules/react/index.js"(exports, module) {
    "use strict";
    if (false) {
      module.exports = null;
    } else {
      module.exports = require_react_development();
    }
  }
});

// node_modules/react-dom/cjs/react-dom.development.js
var require_react_dom_development = __commonJS({
  "node_modules/react-dom/cjs/react-dom.development.js"(exports) {
    "use strict";
    (function() {
      function noop() {
      }
      function testStringCoercion(value) {
        return "" + value;
      }
      function createPortal$1(children, containerInfo, implementation) {
        var key = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null;
        if (null == key) key = null;
        else if (key === REACT_OPTIMISTIC_KEY) key = REACT_OPTIMISTIC_KEY;
        else {
          try {
            testStringCoercion(key);
            var JSCompiler_inline_result = false;
          } catch (e) {
            JSCompiler_inline_result = true;
          }
          JSCompiler_inline_result && (console.error(
            "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
            "function" === typeof Symbol && Symbol.toStringTag && key[Symbol.toStringTag] || key.constructor.name || "Object"
          ), testStringCoercion(key));
          key = "" + key;
        }
        return {
          $$typeof: REACT_PORTAL_TYPE,
          key,
          children,
          containerInfo,
          implementation
        };
      }
      function getCrossOriginStringAs(as, input) {
        if ("font" === as) return "";
        if ("string" === typeof input)
          return "use-credentials" === input ? input : "";
      }
      function getValueDescriptorExpectingObjectForWarning(thing) {
        return null === thing ? "`null`" : void 0 === thing ? "`undefined`" : "" === thing ? "an empty string" : 'something with type "' + typeof thing + '"';
      }
      function getValueDescriptorExpectingEnumForWarning(thing) {
        return null === thing ? "`null`" : void 0 === thing ? "`undefined`" : "" === thing ? "an empty string" : "string" === typeof thing ? JSON.stringify(thing) : "number" === typeof thing ? "`" + thing + "`" : 'something with type "' + typeof thing + '"';
      }
      function resolveDispatcher() {
        var dispatcher = ReactSharedInternals.H;
        null === dispatcher && console.error(
          "Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:\n1. You might have mismatching versions of React and the renderer (such as React DOM)\n2. You might be breaking the Rules of Hooks\n3. You might have more than one copy of React in the same app\nSee https://react.dev/link/invalid-hook-call for tips about how to debug and fix this problem."
        );
        return dispatcher;
      }
      "undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ && "function" === typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());
      var React2 = require_react(), Internals2 = {
        d: {
          f: noop,
          r: function() {
            throw Error(
              "Invalid form element. requestFormReset must be passed a form that was rendered by React."
            );
          },
          D: noop,
          C: noop,
          L: noop,
          m: noop,
          X: noop,
          S: noop,
          M: noop
        },
        p: 0,
        findDOMNode: null
      }, REACT_PORTAL_TYPE = /* @__PURE__ */ Symbol.for("react.portal"), REACT_RECOVERABLE_TYPE = /* @__PURE__ */ Symbol.for("react.recoverable"), REACT_OPTIMISTIC_KEY = /* @__PURE__ */ Symbol.for("react.optimistic_key"), ReactSharedInternals = React2.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
      "function" === typeof Map && null != Map.prototype && "function" === typeof Map.prototype.forEach && "function" === typeof Set && null != Set.prototype && "function" === typeof Set.prototype.clear && "function" === typeof Set.prototype.forEach || console.error(
        "React depends on Map and Set built-in types. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills"
      );
      exports.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = Internals2;
      exports.browser = function(reason) {
        return { $$typeof: REACT_RECOVERABLE_TYPE, _reason: reason };
      };
      exports.createPortal = function(children, container2) {
        var key = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null;
        if (!container2 || 1 !== container2.nodeType && 9 !== container2.nodeType && 11 !== container2.nodeType)
          throw Error("Target container is not a DOM element.");
        return createPortal$1(children, container2, null, key);
      };
      exports.flushSync = function(fn) {
        var previousTransition = ReactSharedInternals.T, previousUpdatePriority = Internals2.p;
        try {
          if (ReactSharedInternals.T = null, Internals2.p = 2, fn)
            return fn();
        } finally {
          ReactSharedInternals.T = previousTransition, Internals2.p = previousUpdatePriority, Internals2.d.f() && console.error(
            "flushSync was called from inside a lifecycle method. React cannot flush when React is already rendering. Consider moving this call to a scheduler task or micro task."
          );
        }
      };
      exports.preconnect = function(href, options) {
        "string" === typeof href && href ? null != options && "object" !== typeof options ? console.error(
          "ReactDOM.preconnect(): Expected the `options` argument (second) to be an object but encountered %s instead. The only supported option at this time is `crossOrigin` which accepts a string.",
          getValueDescriptorExpectingEnumForWarning(options)
        ) : null != options && "string" !== typeof options.crossOrigin && console.error(
          "ReactDOM.preconnect(): Expected the `crossOrigin` option (second argument) to be a string but encountered %s instead. Try removing this option or passing a string value instead.",
          getValueDescriptorExpectingObjectForWarning(options.crossOrigin)
        ) : console.error(
          "ReactDOM.preconnect(): Expected the `href` argument (first) to be a non-empty string but encountered %s instead.",
          getValueDescriptorExpectingObjectForWarning(href)
        );
        "string" === typeof href && (options ? (options = options.crossOrigin, options = "string" === typeof options ? "use-credentials" === options ? options : "" : void 0) : options = null, Internals2.d.C(href, options));
      };
      exports.prefetchDNS = function(href) {
        if ("string" !== typeof href || !href)
          console.error(
            "ReactDOM.prefetchDNS(): Expected the `href` argument (first) to be a non-empty string but encountered %s instead.",
            getValueDescriptorExpectingObjectForWarning(href)
          );
        else if (1 < arguments.length) {
          var options = arguments[1];
          "object" === typeof options && options.hasOwnProperty("crossOrigin") ? console.error(
            "ReactDOM.prefetchDNS(): Expected only one argument, `href`, but encountered %s as a second argument instead. This argument is reserved for future options and is currently disallowed. It looks like the you are attempting to set a crossOrigin property for this DNS lookup hint. Browsers do not perform DNS queries using CORS and setting this attribute on the resource hint has no effect. Try calling ReactDOM.prefetchDNS() with just a single string argument, `href`.",
            getValueDescriptorExpectingEnumForWarning(options)
          ) : console.error(
            "ReactDOM.prefetchDNS(): Expected only one argument, `href`, but encountered %s as a second argument instead. This argument is reserved for future options and is currently disallowed. Try calling ReactDOM.prefetchDNS() with just a single string argument, `href`.",
            getValueDescriptorExpectingEnumForWarning(options)
          );
        }
        "string" === typeof href && Internals2.d.D(href);
      };
      exports.preinit = function(href, options) {
        "string" === typeof href && href ? null == options || "object" !== typeof options ? console.error(
          "ReactDOM.preinit(): Expected the `options` argument (second) to be an object with an `as` property describing the type of resource to be preinitialized but encountered %s instead.",
          getValueDescriptorExpectingEnumForWarning(options)
        ) : "style" !== options.as && "script" !== options.as && console.error(
          'ReactDOM.preinit(): Expected the `as` property in the `options` argument (second) to contain a valid value describing the type of resource to be preinitialized but encountered %s instead. Valid values for `as` are "style" and "script".',
          getValueDescriptorExpectingEnumForWarning(options.as)
        ) : console.error(
          "ReactDOM.preinit(): Expected the `href` argument (first) to be a non-empty string but encountered %s instead.",
          getValueDescriptorExpectingObjectForWarning(href)
        );
        if ("string" === typeof href && options && "string" === typeof options.as) {
          var as = options.as, crossOrigin = getCrossOriginStringAs(as, options.crossOrigin), integrity = "string" === typeof options.integrity ? options.integrity : void 0, fetchPriority = "string" === typeof options.fetchPriority ? options.fetchPriority : void 0;
          "style" === as ? Internals2.d.S(
            href,
            "string" === typeof options.precedence ? options.precedence : void 0,
            {
              crossOrigin,
              integrity,
              fetchPriority
            }
          ) : "script" === as && Internals2.d.X(href, {
            crossOrigin,
            integrity,
            fetchPriority,
            nonce: "string" === typeof options.nonce ? options.nonce : void 0
          });
        }
      };
      exports.preinitModule = function(href, options) {
        var encountered = "";
        "string" === typeof href && href || (encountered += " The `href` argument encountered was " + getValueDescriptorExpectingObjectForWarning(href) + ".");
        void 0 !== options && "object" !== typeof options ? encountered += " The `options` argument encountered was " + getValueDescriptorExpectingObjectForWarning(options) + "." : options && "as" in options && "script" !== options.as && (encountered += " The `as` option encountered was " + getValueDescriptorExpectingEnumForWarning(options.as) + ".");
        if (encountered)
          console.error(
            "ReactDOM.preinitModule(): Expected up to two arguments, a non-empty `href` string and, optionally, an `options` object with a valid `as` property.%s",
            encountered
          );
        else
          switch (encountered = options && "string" === typeof options.as ? options.as : "script", encountered) {
            case "script":
              break;
            default:
              encountered = getValueDescriptorExpectingEnumForWarning(encountered), console.error(
                'ReactDOM.preinitModule(): Currently the only supported "as" type for this function is "script" but received "%s" instead. This warning was generated for `href` "%s". In the future other module types will be supported, aligning with the import-attributes proposal. Learn more here: (https://github.com/tc39/proposal-import-attributes)',
                encountered,
                href
              );
          }
        if ("string" === typeof href)
          if ("object" === typeof options && null !== options) {
            if (null == options.as || "script" === options.as)
              encountered = getCrossOriginStringAs(
                options.as,
                options.crossOrigin
              ), Internals2.d.M(href, {
                crossOrigin: encountered,
                integrity: "string" === typeof options.integrity ? options.integrity : void 0,
                nonce: "string" === typeof options.nonce ? options.nonce : void 0,
                fetchPriority: "string" === typeof options.fetchPriority ? options.fetchPriority : void 0
              });
          } else null == options && Internals2.d.M(href);
      };
      exports.preload = function(href, options) {
        var encountered = "";
        "string" === typeof href && href || (encountered += " The `href` argument encountered was " + getValueDescriptorExpectingObjectForWarning(href) + ".");
        null == options || "object" !== typeof options ? encountered += " The `options` argument encountered was " + getValueDescriptorExpectingObjectForWarning(options) + "." : "string" === typeof options.as && options.as || (encountered += " The `as` option encountered was " + getValueDescriptorExpectingObjectForWarning(options.as) + ".");
        encountered && console.error(
          'ReactDOM.preload(): Expected two arguments, a non-empty `href` string and an `options` object with an `as` property valid for a `<link rel="preload" as="..." />` tag.%s',
          encountered
        );
        if ("string" === typeof href && "object" === typeof options && null !== options && "string" === typeof options.as) {
          encountered = options.as;
          var crossOrigin = getCrossOriginStringAs(
            encountered,
            options.crossOrigin
          );
          Internals2.d.L(href, encountered, {
            crossOrigin,
            integrity: "string" === typeof options.integrity ? options.integrity : void 0,
            nonce: "string" === typeof options.nonce ? options.nonce : void 0,
            type: "string" === typeof options.type ? options.type : void 0,
            fetchPriority: "string" === typeof options.fetchPriority ? options.fetchPriority : void 0,
            referrerPolicy: "string" === typeof options.referrerPolicy ? options.referrerPolicy : void 0,
            imageSrcSet: "string" === typeof options.imageSrcSet ? options.imageSrcSet : void 0,
            imageSizes: "string" === typeof options.imageSizes ? options.imageSizes : void 0,
            media: "string" === typeof options.media ? options.media : void 0
          });
        }
      };
      exports.preloadModule = function(href, options) {
        var encountered = "";
        "string" === typeof href && href || (encountered += " The `href` argument encountered was " + getValueDescriptorExpectingObjectForWarning(href) + ".");
        void 0 !== options && "object" !== typeof options ? encountered += " The `options` argument encountered was " + getValueDescriptorExpectingObjectForWarning(options) + "." : options && "as" in options && "string" !== typeof options.as && (encountered += " The `as` option encountered was " + getValueDescriptorExpectingObjectForWarning(options.as) + ".");
        encountered && console.error(
          'ReactDOM.preloadModule(): Expected two arguments, a non-empty `href` string and, optionally, an `options` object with an `as` property valid for a `<link rel="modulepreload" as="..." />` tag.%s',
          encountered
        );
        "string" === typeof href && (options ? (encountered = getCrossOriginStringAs(
          options.as,
          options.crossOrigin
        ), Internals2.d.m(href, {
          as: "string" === typeof options.as && "script" !== options.as ? options.as : void 0,
          crossOrigin: encountered,
          integrity: "string" === typeof options.integrity ? options.integrity : void 0,
          nonce: "string" === typeof options.nonce ? options.nonce : void 0,
          fetchPriority: "string" === typeof options.fetchPriority ? options.fetchPriority : void 0
        })) : Internals2.d.m(href));
      };
      exports.requestFormReset = function(form) {
        Internals2.d.r(form);
      };
      exports.unstable_batchedUpdates = function(fn, a2) {
        return fn(a2);
      };
      exports.useFormState = function(action, initialState, permalink) {
        return resolveDispatcher().useFormState(action, initialState, permalink);
      };
      exports.useFormStatus = function() {
        return resolveDispatcher().useHostTransitionStatus();
      };
      exports.version = "19.3.1";
      "undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ && "function" === typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
    })();
  }
});

// node_modules/react-dom/index.js
var require_react_dom = __commonJS({
  "node_modules/react-dom/index.js"(exports, module) {
    "use strict";
    if (false) {
      checkDCE();
      module.exports = null;
    } else {
      module.exports = require_react_dom_development();
    }
  }
});

// node_modules/react/cjs/react-jsx-runtime.development.js
var require_react_jsx_runtime_development = __commonJS({
  "node_modules/react/cjs/react-jsx-runtime.development.js"(exports) {
    "use strict";
    (function() {
      function getComponentNameFromType(type) {
        if (null == type) return null;
        if ("function" === typeof type)
          return type.$$typeof === REACT_CLIENT_REFERENCE ? null : type.displayName || type.name || null;
        if ("string" === typeof type) return type;
        switch (type) {
          case REACT_FRAGMENT_TYPE:
            return "Fragment";
          case REACT_PROFILER_TYPE:
            return "Profiler";
          case REACT_STRICT_MODE_TYPE:
            return "StrictMode";
          case REACT_SUSPENSE_TYPE:
            return "Suspense";
          case REACT_SUSPENSE_LIST_TYPE:
            return "SuspenseList";
          case REACT_ACTIVITY_TYPE:
            return "Activity";
          case REACT_VIEW_TRANSITION_TYPE:
            return "ViewTransition";
        }
        if ("object" === typeof type)
          switch ("number" === typeof type.tag && console.error(
            "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
          ), type.$$typeof) {
            case REACT_PORTAL_TYPE:
              return "Portal";
            case REACT_CONTEXT_TYPE:
              return type.displayName || "Context";
            case REACT_CONSUMER_TYPE:
              return (type._context.displayName || "Context") + ".Consumer";
            case REACT_FORWARD_REF_TYPE:
              var innerType = type.render;
              type = type.displayName;
              type || (type = innerType.displayName || innerType.name || "", type = "" !== type ? "ForwardRef(" + type + ")" : "ForwardRef");
              return type;
            case REACT_MEMO_TYPE:
              return innerType = type.displayName || null, null !== innerType ? innerType : getComponentNameFromType(type.type) || "Memo";
            case REACT_LAZY_TYPE:
              innerType = type._payload;
              type = type._init;
              try {
                return getComponentNameFromType(type(innerType));
              } catch (x) {
              }
          }
        return null;
      }
      function testStringCoercion(value) {
        return "" + value;
      }
      function checkKeyStringCoercion(value) {
        try {
          testStringCoercion(value);
          var JSCompiler_inline_result = false;
        } catch (e) {
          JSCompiler_inline_result = true;
        }
        if (JSCompiler_inline_result) {
          JSCompiler_inline_result = console;
          var JSCompiler_temp_const = JSCompiler_inline_result.error;
          var JSCompiler_inline_result$jscomp$0 = "function" === typeof Symbol && Symbol.toStringTag && value[Symbol.toStringTag] || value.constructor.name || "Object";
          JSCompiler_temp_const.call(
            JSCompiler_inline_result,
            "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
            JSCompiler_inline_result$jscomp$0
          );
          return testStringCoercion(value);
        }
      }
      function getTaskName(type) {
        if (type === REACT_FRAGMENT_TYPE) return "<>";
        if ("object" === typeof type && null !== type && type.$$typeof === REACT_LAZY_TYPE)
          return "<...>";
        try {
          var name = getComponentNameFromType(type);
          return name ? "<" + name + ">" : "<...>";
        } catch (x) {
          return "<...>";
        }
      }
      function getOwner() {
        var dispatcher = ReactSharedInternals.A;
        return null === dispatcher ? null : dispatcher.getOwner();
      }
      function UnknownOwner() {
        return Error("react-stack-top-frame");
      }
      function hasValidKey(config) {
        if (hasOwnProperty.call(config, "key")) {
          var getter = Object.getOwnPropertyDescriptor(config, "key").get;
          if (getter && getter.isReactWarning) return false;
        }
        return void 0 !== config.key;
      }
      function defineKeyPropWarningGetter(props, displayName) {
        function warnAboutAccessingKey() {
          specialPropKeyWarningShown || (specialPropKeyWarningShown = true, console.error(
            "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
            displayName
          ));
        }
        warnAboutAccessingKey.isReactWarning = true;
        Object.defineProperty(props, "key", {
          get: warnAboutAccessingKey,
          configurable: true
        });
      }
      function elementRefGetterWithDeprecationWarning() {
        var componentName = getComponentNameFromType(this.type);
        didWarnAboutElementRef[componentName] || (didWarnAboutElementRef[componentName] = true, console.error(
          "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
        ));
        componentName = this.props.ref;
        return void 0 !== componentName ? componentName : null;
      }
      function ReactElement(type, key, props, owner, debugStack, debugTask) {
        var refProp = props.ref;
        type = {
          $$typeof: REACT_ELEMENT_TYPE,
          type,
          key,
          props,
          _owner: owner
        };
        null !== (void 0 !== refProp ? refProp : null) ? Object.defineProperty(type, "ref", {
          enumerable: false,
          get: elementRefGetterWithDeprecationWarning
        }) : Object.defineProperty(type, "ref", { enumerable: false, value: null });
        type._store = {};
        Object.defineProperty(type._store, "validated", {
          configurable: false,
          enumerable: false,
          writable: true,
          value: 0
        });
        Object.defineProperty(type, "_debugInfo", {
          configurable: false,
          enumerable: false,
          writable: true,
          value: null
        });
        Object.defineProperty(type, "_debugStack", {
          configurable: false,
          enumerable: false,
          writable: true,
          value: debugStack
        });
        Object.defineProperty(type, "_debugTask", {
          configurable: false,
          enumerable: false,
          writable: true,
          value: debugTask
        });
        Object.freeze && (Object.freeze(type.props), Object.freeze(type));
        return type;
      }
      function jsxDEVImpl(type, config, maybeKey, isStaticChildren, debugStack, debugTask) {
        var children = config.children;
        if (void 0 !== children)
          if (isStaticChildren)
            if (isArrayImpl(children)) {
              for (isStaticChildren = 0; isStaticChildren < children.length; isStaticChildren++)
                validateChildKeys(children[isStaticChildren]);
              Object.freeze && Object.freeze(children);
            } else
              console.error(
                "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
              );
          else validateChildKeys(children);
        if (hasOwnProperty.call(config, "key")) {
          children = getComponentNameFromType(type);
          var keys = Object.keys(config).filter(function(k) {
            return "key" !== k;
          });
          isStaticChildren = 0 < keys.length ? "{key: someKey, " + keys.join(": ..., ") + ": ...}" : "{key: someKey}";
          didWarnAboutKeySpread[children + isStaticChildren] || (keys = 0 < keys.length ? "{" + keys.join(": ..., ") + ": ...}" : "{}", console.error(
            'A props object containing a "key" prop is being spread into JSX:\n  let props = %s;\n  <%s {...props} />\nReact keys must be passed directly to JSX without using spread:\n  let props = %s;\n  <%s key={someKey} {...props} />',
            isStaticChildren,
            children,
            keys,
            children
          ), didWarnAboutKeySpread[children + isStaticChildren] = true);
        }
        children = null;
        void 0 !== maybeKey && (checkKeyStringCoercion(maybeKey), children = "" + maybeKey);
        hasValidKey(config) && (checkKeyStringCoercion(config.key), children = "" + config.key);
        if ("key" in config) {
          maybeKey = {};
          for (var propName in config)
            "key" !== propName && (maybeKey[propName] = config[propName]);
        } else maybeKey = config;
        children && defineKeyPropWarningGetter(
          maybeKey,
          "function" === typeof type ? type.displayName || type.name || "Unknown" : type
        );
        return ReactElement(
          type,
          children,
          maybeKey,
          getOwner(),
          debugStack,
          debugTask
        );
      }
      function validateChildKeys(node) {
        isValidElement2(node) ? node._store && (node._store.validated = 1) : "object" === typeof node && null !== node && node.$$typeof === REACT_LAZY_TYPE && ("fulfilled" === node._payload.status ? isValidElement2(node._payload.value) && node._payload.value._store && (node._payload.value._store.validated = 1) : node._store && (node._store.validated = 1));
      }
      function isValidElement2(object) {
        return "object" === typeof object && null !== object && object.$$typeof === REACT_ELEMENT_TYPE;
      }
      var React2 = require_react(), REACT_ELEMENT_TYPE = /* @__PURE__ */ Symbol.for("react.transitional.element"), REACT_PORTAL_TYPE = /* @__PURE__ */ Symbol.for("react.portal"), REACT_FRAGMENT_TYPE = /* @__PURE__ */ Symbol.for("react.fragment"), REACT_STRICT_MODE_TYPE = /* @__PURE__ */ Symbol.for("react.strict_mode"), REACT_PROFILER_TYPE = /* @__PURE__ */ Symbol.for("react.profiler"), REACT_CONSUMER_TYPE = /* @__PURE__ */ Symbol.for("react.consumer"), REACT_CONTEXT_TYPE = /* @__PURE__ */ Symbol.for("react.context"), REACT_FORWARD_REF_TYPE = /* @__PURE__ */ Symbol.for("react.forward_ref"), REACT_SUSPENSE_TYPE = /* @__PURE__ */ Symbol.for("react.suspense"), REACT_SUSPENSE_LIST_TYPE = /* @__PURE__ */ Symbol.for("react.suspense_list"), REACT_MEMO_TYPE = /* @__PURE__ */ Symbol.for("react.memo"), REACT_LAZY_TYPE = /* @__PURE__ */ Symbol.for("react.lazy"), REACT_ACTIVITY_TYPE = /* @__PURE__ */ Symbol.for("react.activity"), REACT_VIEW_TRANSITION_TYPE = /* @__PURE__ */ Symbol.for("react.view_transition"), REACT_CLIENT_REFERENCE = /* @__PURE__ */ Symbol.for("react.client.reference"), ReactSharedInternals = React2.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, hasOwnProperty = Object.prototype.hasOwnProperty, isArrayImpl = Array.isArray, createTask = console.createTask ? console.createTask : function() {
        return null;
      };
      React2 = {
        react_stack_bottom_frame: function(callStackForError) {
          return callStackForError();
        }
      };
      var specialPropKeyWarningShown;
      var didWarnAboutElementRef = {};
      var unknownOwnerDebugStack = React2.react_stack_bottom_frame.bind(
        React2,
        UnknownOwner
      )();
      var unknownOwnerDebugTask = createTask(getTaskName(UnknownOwner));
      var didWarnAboutKeySpread = {};
      exports.Fragment = REACT_FRAGMENT_TYPE;
      exports.jsx = function(type, config, maybeKey) {
        var trackActualOwner = 1e4 > ReactSharedInternals.recentlyCreatedOwnerStacks++;
        if (trackActualOwner) {
          var previousStackTraceLimit = Error.stackTraceLimit;
          Error.stackTraceLimit = 10;
          var debugStackDEV = Error("react-stack-top-frame");
          Error.stackTraceLimit = previousStackTraceLimit;
        } else debugStackDEV = unknownOwnerDebugStack;
        return jsxDEVImpl(
          type,
          config,
          maybeKey,
          false,
          debugStackDEV,
          trackActualOwner ? createTask(getTaskName(type)) : unknownOwnerDebugTask
        );
      };
      exports.jsxs = function(type, config, maybeKey) {
        var trackActualOwner = 1e4 > ReactSharedInternals.recentlyCreatedOwnerStacks++;
        if (trackActualOwner) {
          var previousStackTraceLimit = Error.stackTraceLimit;
          Error.stackTraceLimit = 10;
          var debugStackDEV = Error("react-stack-top-frame");
          Error.stackTraceLimit = previousStackTraceLimit;
        } else debugStackDEV = unknownOwnerDebugStack;
        return jsxDEVImpl(
          type,
          config,
          maybeKey,
          true,
          debugStackDEV,
          trackActualOwner ? createTask(getTaskName(type)) : unknownOwnerDebugTask
        );
      };
    })();
  }
});

// node_modules/react/jsx-runtime.js
var require_jsx_runtime = __commonJS({
  "node_modules/react/jsx-runtime.js"(exports, module) {
    "use strict";
    if (false) {
      module.exports = null;
    } else {
      module.exports = require_react_jsx_runtime_development();
    }
  }
});

// node_modules/remotion/dist/esm/chunk-m38ydj0s.mjs
function truthy(value) {
  return Boolean(value);
}
function getNodeEnvString() {
  return ["NOD", "E_EN", "V"].join("");
}
var getEnvString = () => {
  return ["e", "nv"].join("");
};
var getRemotionEnvironment2 = () => {
  const isPlayer = typeof window !== "undefined" && window.remotion_isPlayer;
  const isRendering = typeof window !== "undefined" && typeof window.process !== "undefined" && typeof window.process.env !== "undefined" && (window.process[getEnvString()][getNodeEnvString()] === "test" || window.process[getEnvString()][getNodeEnvString()] === "production" && typeof window !== "undefined" && typeof window.remotion_puppeteerTimeout !== "undefined");
  const isStudio = typeof window !== "undefined" && window.remotion_isStudio;
  const isReadOnlyStudio = typeof window !== "undefined" && window.remotion_isReadOnlyStudio;
  return {
    isStudio,
    isRendering,
    isPlayer,
    isReadOnlyStudio,
    isClientSideRendering: false
  };
};
var DATE_TOKEN = "remotion-date:";
var FILE_TOKEN = "remotion-file:";
var serializeJSONWithSpecialTypes = ({
  data,
  indent,
  staticBase
}) => {
  let customDateUsed = false;
  let customFileUsed = false;
  let mapUsed = false;
  let setUsed = false;
  try {
    const serializedString = JSON.stringify(data, function(key, value) {
      const item = this[key];
      if (item instanceof Date) {
        customDateUsed = true;
        return `${DATE_TOKEN}${item.toISOString()}`;
      }
      if (item instanceof Map) {
        mapUsed = true;
        return value;
      }
      if (item instanceof Set) {
        setUsed = true;
        return value;
      }
      if (typeof item === "string" && staticBase !== null && staticBase !== "" && item.startsWith(staticBase)) {
        customFileUsed = true;
        return `${FILE_TOKEN}${item.replace(staticBase + "/", "")}`;
      }
      return value;
    }, indent);
    return { serializedString, customDateUsed, customFileUsed, mapUsed, setUsed };
  } catch (err) {
    throw new Error("Could not serialize the passed input props to JSON: " + err.message);
  }
};
var resolveFileTokenToUrl = (value) => {
  const encodedName = value.replace(FILE_TOKEN, "");
  let name = encodedName;
  try {
    name = encodedName.split("/").map(decodeURIComponent).join("/");
  } catch {
  }
  const matchingStaticFile = window.remotion_staticFiles?.find((file) => file.name === name);
  if (matchingStaticFile) {
    return matchingStaticFile.src;
  }
  return `${window.remotion_staticBase}/${encodedName}`;
};
var deserializeJSONWithSpecialTypes = (data) => {
  return JSON.parse(data, (_, value) => {
    if (typeof value === "string" && value.startsWith(DATE_TOKEN)) {
      return new Date(value.replace(DATE_TOKEN, ""));
    }
    if (typeof value === "string" && value.startsWith(FILE_TOKEN)) {
      return resolveFileTokenToUrl(value);
    }
    return value;
  });
};
var serializeThenDeserialize = (props) => {
  return deserializeJSONWithSpecialTypes(serializeJSONWithSpecialTypes({
    data: props,
    indent: 2,
    staticBase: window.remotion_staticBase
  }).serializedString);
};
var serializeThenDeserializeInStudio = (props) => {
  if (getRemotionEnvironment2().isStudio) {
    return serializeThenDeserialize(props);
  }
  return props;
};
function validateDimension(amount, nameOfProp, location) {
  if (typeof amount !== "number") {
    throw new Error(`The "${nameOfProp}" prop ${location} must be a number, but you passed a value of type ${typeof amount}`);
  }
  if (isNaN(amount)) {
    throw new TypeError(`The "${nameOfProp}" prop ${location} must not be NaN, but is NaN.`);
  }
  if (!Number.isFinite(amount)) {
    throw new TypeError(`The "${nameOfProp}" prop ${location} must be finite, but is ${amount}.`);
  }
  if (amount % 1 !== 0) {
    throw new TypeError(`The "${nameOfProp}" prop ${location} must be an integer, but is ${amount}.`);
  }
  if (amount <= 0) {
    throw new TypeError(`The "${nameOfProp}" prop ${location} must be positive, but got ${amount}.`);
  }
}
function validateDurationInFrames(durationInFrames, options) {
  const { allowFloats, component } = options;
  if (typeof durationInFrames === "undefined") {
    throw new Error(`The "durationInFrames" prop ${component} is missing.`);
  }
  if (typeof durationInFrames !== "number") {
    throw new Error(`The "durationInFrames" prop ${component} must be a number, but you passed a value of type ${typeof durationInFrames}`);
  }
  if (durationInFrames <= 0) {
    throw new TypeError(`The "durationInFrames" prop ${component} must be positive, but got ${durationInFrames}.`);
  }
  if (!Number.isFinite(durationInFrames)) {
    throw new TypeError(`The "durationInFrames" prop ${component} must be finite, but got ${durationInFrames}.`);
  }
  if (!allowFloats && durationInFrames % 1 !== 0) {
    throw new TypeError(`The "durationInFrames" prop ${component} must be an integer, but got ${durationInFrames}.`);
  }
}
function validateFps(fps, location, isGif) {
  if (typeof fps !== "number") {
    throw new Error(`"fps" must be a number, but you passed a value of type ${typeof fps} ${location}`);
  }
  if (!Number.isFinite(fps)) {
    throw new Error(`"fps" must be a finite, but you passed ${fps} ${location}`);
  }
  if (isNaN(fps)) {
    throw new Error(`"fps" must not be NaN, but got ${fps} ${location}`);
  }
  if (fps <= 0) {
    throw new TypeError(`"fps" must be positive, but got ${fps} ${location}`);
  }
  if (isGif && fps > 50) {
    throw new TypeError(`The FPS for a GIF cannot be higher than 50. Use the --every-nth-frame option to lower the FPS: https://remotion.dev/docs/render-as-gif`);
  }
}
var DELAY_RENDER_CALLSTACK_TOKEN = "The delayRender was called:";
var DELAY_RENDER_RETRIES_LEFT = "Retries left: ";
var DELAY_RENDER_RETRY_TOKEN = "- Rendering the frame will be retried.";
var DELAY_RENDER_CLEAR_TOKEN = "handle was cleared after";
var validateDefaultAndInputProps = (defaultProps, name, compositionId) => {
  if (!defaultProps) {
    return;
  }
  if (typeof defaultProps !== "object") {
    throw new Error(`"${name}" must be an object, but you passed a value of type ${typeof defaultProps}`);
  }
  if (Array.isArray(defaultProps)) {
    throw new Error(`"${name}" must be an object, an array was passed ${compositionId ? `for composition "${compositionId}"` : ""}`);
  }
};
var ENABLE_V5_BREAKING_CHANGES = false;
var resolveV5Default = (value) => {
  return value ?? ENABLE_V5_BREAKING_CHANGES;
};
var DEFAULT_PREMOUNT_IN_SECONDS = ENABLE_V5_BREAKING_CHANGES ? 2 : 0;
var DEFAULT_SEQUENCE_ACTIVITY_LIMIT = Infinity;
var captionsSchema = {
  captions: {
    type: "remotion-captions",
    default: void 0,
    description: "Captions",
    keyframable: false
  }
};
var transformSchema = {
  "style.transformOrigin": {
    type: "transform-origin",
    step: 1,
    default: "50% 50%",
    description: "Origin"
  },
  "style.translate": {
    type: "translate",
    step: 1,
    default: "0px 0px",
    description: "Offset"
  },
  "style.scale": {
    type: "scale",
    max: 100,
    step: 0.01,
    default: 1,
    description: "Scale",
    defaultKeyframeOutput: "perceptual-scale"
  },
  "style.rotate": {
    type: "rotation-css",
    step: 1,
    default: "0deg",
    description: "Rotation"
  },
  "style.opacity": {
    type: "number",
    min: 0,
    max: 1,
    step: 0.01,
    default: 1,
    description: "Opacity",
    hiddenFromList: false
  }
};
var sequenceVisualStyleSchema = transformSchema;
var textSchema = {
  "style.color": {
    type: "color",
    default: void 0,
    description: "Color"
  },
  "style.fontFamily": {
    type: "font-family",
    default: void 0,
    description: "Font family",
    keyframable: false
  },
  "style.fontSize": {
    type: "number",
    default: void 0,
    min: 0,
    step: 1,
    description: "Font size",
    hiddenFromList: false
  },
  "style.lineHeight": {
    type: "number",
    default: void 0,
    min: 0,
    step: 0.05,
    description: "Line height",
    hiddenFromList: false
  },
  "style.fontWeight": {
    type: "font-weight",
    default: 400,
    description: "Font weight"
  },
  "style.fontStyle": {
    type: "enum",
    default: "normal",
    description: "Font style",
    variants: {
      normal: {},
      italic: {},
      oblique: {}
    }
  },
  "style.textAlign": {
    type: "enum",
    default: "left",
    description: "Text align",
    variants: {
      left: {},
      center: {},
      right: {},
      justify: {},
      start: {},
      end: {}
    }
  },
  "style.letterSpacing": {
    type: "number",
    default: void 0,
    step: 0.1,
    description: "Letter spacing",
    hiddenFromList: false
  }
};
var borderSchema = {
  "style.borderWidth": {
    type: "number",
    default: void 0,
    min: 0,
    step: 1,
    description: "Border width",
    hiddenFromList: false
  },
  "style.borderStyle": {
    type: "enum",
    default: "none",
    description: "Border style",
    variants: {
      none: {},
      hidden: {},
      solid: {},
      dashed: {},
      dotted: {},
      double: {},
      groove: {},
      ridge: {},
      inset: {},
      outset: {}
    }
  },
  "style.borderColor": {
    type: "color",
    default: void 0,
    description: "Border color"
  }
};
var borderRadiusSchema = {
  "style.borderRadius": {
    type: "number",
    default: 0,
    min: 0,
    step: 1,
    description: "Border radius",
    hiddenFromList: false,
    keyframable: true
  },
  "style.borderTopLeftRadius": {
    type: "number",
    default: 0,
    min: 0,
    step: 1,
    description: "Top left radius",
    hiddenFromList: false
  },
  "style.borderTopRightRadius": {
    type: "number",
    default: 0,
    min: 0,
    step: 1,
    description: "Top right radius",
    hiddenFromList: false
  },
  "style.borderBottomRightRadius": {
    type: "number",
    default: 0,
    min: 0,
    step: 1,
    description: "Bottom right radius",
    hiddenFromList: false
  },
  "style.borderBottomLeftRadius": {
    type: "number",
    default: 0,
    min: 0,
    step: 1,
    description: "Bottom left radius",
    hiddenFromList: false
  }
};
var backgroundSchema = {
  "style.backgroundColor": {
    type: "color",
    default: "transparent",
    description: "Color"
  }
};
var svgColorSchema = {
  color: {
    type: "color",
    default: void 0,
    description: "Current color"
  }
};
var svgStrokeSchema = {
  ...svgColorSchema,
  stroke: {
    type: "color",
    default: "none",
    description: "Stroke"
  },
  strokeWidth: {
    type: "number",
    default: 1,
    description: "Stroke width",
    min: 0,
    step: 1,
    hiddenFromList: false
  }
};
var svgPaintSchema = {
  fill: {
    type: "color",
    default: void 0,
    description: "Fill"
  },
  ...svgStrokeSchema
};
var childrenSchema = {
  children: {
    type: "string",
    default: "",
    description: "Text",
    keyframable: false
  }
};
var premountSchema = {
  premountFor: {
    type: "number",
    default: void 0,
    description: "Premount For",
    min: 0,
    step: 1,
    hiddenFromList: false,
    keyframable: false
  },
  postmountFor: {
    type: "number",
    default: 0,
    min: 0,
    step: 1,
    hiddenFromList: true,
    keyframable: false
  }
};
var sequencePremountSchema = {
  ...premountSchema
};
var cropSchema = {
  cropLeft: {
    type: "number",
    default: 0,
    description: "Crop left",
    min: 0,
    max: 1,
    step: 0.01,
    hiddenFromList: false,
    keyframable: true
  },
  cropRight: {
    type: "number",
    default: 0,
    description: "Crop right",
    min: 0,
    max: 1,
    step: 0.01,
    hiddenFromList: false,
    keyframable: true
  },
  cropTop: {
    type: "number",
    default: 0,
    description: "Crop top",
    min: 0,
    max: 1,
    step: 0.01,
    hiddenFromList: false,
    keyframable: true
  },
  cropBottom: {
    type: "number",
    default: 0,
    description: "Crop bottom",
    min: 0,
    max: 1,
    step: 0.01,
    hiddenFromList: false,
    keyframable: true
  }
};
var sequenceCropSchema = cropSchema;
var sequenceStyleSchema = {
  ...sequenceCropSchema,
  ...transformSchema,
  ...backgroundSchema,
  ...borderSchema,
  ...borderRadiusSchema
};
var hiddenField = {
  type: "boolean",
  default: false,
  description: "Hidden"
};
var showInTimelineField = {
  type: "hidden"
};
var sequenceNameField = {
  type: "hidden"
};
var extendSchemaWithSequenceName = (schema) => {
  return {
    name: sequenceNameField,
    ...schema
  };
};
var durationInFramesField = {
  type: "number",
  default: void 0,
  min: 1,
  step: 1,
  hiddenFromList: true
};
var fromField = {
  type: "number",
  default: 0,
  step: 1,
  hiddenFromList: true
};
var trimBeforeField = {
  type: "number",
  default: 0,
  min: 0,
  step: 1,
  hiddenFromList: true
};
var sequenceTimingSchema = {
  from: {
    ...fromField,
    description: "From",
    hiddenFromList: false,
    keyframable: false
  },
  durationInFrames: {
    ...durationInFramesField,
    description: "Duration",
    hiddenFromList: false,
    keyframable: false
  },
  trimBefore: {
    ...trimBeforeField,
    description: "Trim before",
    hiddenFromList: false,
    keyframable: false
  }
};
var trimAfterField = {
  type: "number",
  default: void 0,
  min: 1,
  step: 1,
  hiddenFromList: true
};
var loopField = {
  type: "boolean",
  default: false,
  description: "Loop",
  keyframable: false
};
var freezeField = {
  type: "number",
  default: null,
  step: 1,
  hiddenFromList: true
};
var playbackRateField = {
  type: "number",
  default: 1,
  min: 0.01,
  step: 0.1,
  description: "Playback rate",
  hiddenFromList: false,
  keyframable: false
};
var baseSchema = {
  durationInFrames: durationInFramesField,
  from: fromField,
  trimBefore: trimBeforeField,
  playbackRate: playbackRateField,
  freeze: freezeField,
  hidden: hiddenField,
  name: sequenceNameField,
  showInTimeline: showInTimelineField
};
var baseSchemaWithoutPlaybackRate = {
  durationInFrames: durationInFramesField,
  from: fromField,
  trimBefore: trimBeforeField,
  freeze: freezeField,
  hidden: hiddenField,
  name: sequenceNameField,
  showInTimeline: showInTimelineField
};
var sequenceSchema = {
  ...baseSchema,
  layout: {
    type: "enum",
    default: "absolute-fill",
    description: "Layout",
    variants: {
      "absolute-fill": sequenceStyleSchema,
      none: {}
    }
  }
};
var baseSchemaWithoutFrom = {
  durationInFrames: durationInFramesField,
  trimBefore: trimBeforeField,
  playbackRate: playbackRateField,
  freeze: freezeField,
  hidden: hiddenField,
  name: sequenceNameField,
  showInTimeline: showInTimelineField
};
var sequenceSchemaWithoutFrom = {
  ...baseSchemaWithoutFrom,
  layout: sequenceSchema.layout
};
var sequenceSchemaDefaultLayoutNone = {
  ...sequenceSchema,
  layout: {
    ...sequenceSchema.layout,
    default: "none"
  }
};
var evaluateSourceNumericValue = (expression, config) => {
  if (typeof expression === "number") {
    return expression;
  }
  if (expression.type === "literal") {
    return expression.value;
  }
  if (expression.type === "binary") {
    const left = evaluateSourceNumericValue(expression.left, config);
    const right = evaluateSourceNumericValue(expression.right, config);
    switch (expression.operator) {
      case "+":
        return left + right;
      case "-":
        return left - right;
      case "*":
        return left * right;
      case "/":
        return left / right;
      default:
        throw new Error("Unknown source expression operator");
    }
  }
  const value = expression.binding.type === "constant" ? expression.binding.value : config?.[expression.binding.field] ?? NaN;
  if (expression.type === "video-config-multiplication") {
    return value * expression.multiplier;
  }
  if (expression.type === "video-config-subtraction") {
    return value - expression.subtrahend;
  }
  return value;
};
var evaluatedProps = /* @__PURE__ */ new WeakMap();
var evaluateSourcePropStatuses = (props, config) => {
  const configKey = config === null ? "" : `${config.durationInFrames}:${config.fps}:${config.width}:${config.height}`;
  const cached = evaluatedProps.get(props) ?? /* @__PURE__ */ new Map();
  const existing = cached.get(configKey);
  if (existing)
    return existing;
  const result = Object.fromEntries(Object.entries(props).map(([key, status]) => {
    if (status.status === "computed") {
      return [key, status];
    }
    const adjustment = status.keyframeDisplayOffsetAdjustment === null ? null : evaluateSourceNumericValue(status.keyframeDisplayOffsetAdjustment, config);
    const rate = evaluateSourceNumericValue(status.keyframePlaybackRateAdjustment ?? 1, config);
    if (adjustment !== null && !Number.isFinite(adjustment) || !Number.isFinite(rate) || rate <= 0) {
      return [key, { status: "computed" }];
    }
    const timing = {
      keyframeDisplayOffsetAdjustment: adjustment,
      ...status.keyframePlaybackRateAdjustment === void 0 ? {} : { keyframePlaybackRateAdjustment: rate }
    };
    if (status.status === "static") {
      const value = status.numericExpression === void 0 ? status.codeValue : evaluateSourceNumericValue(status.numericExpression, config);
      return [
        key,
        status.numericExpression !== void 0 && !Number.isFinite(value) ? { status: "computed" } : { ...status, ...timing, codeValue: value }
      ];
    }
    const keyframes = status.keyframes.map((keyframe) => ({
      ...keyframe,
      frame: evaluateSourceNumericValue(keyframe.frame, config)
    }));
    if (keyframes.some((keyframe, index) => !Number.isFinite(keyframe.frame) || index > 0 && keyframe.frame <= keyframes[index - 1].frame)) {
      return [key, { status: "computed" }];
    }
    return [key, { ...status, ...timing, keyframes }];
  }));
  cached.set(configKey, result);
  if (cached.size > 8)
    cached.delete(cached.keys().next().value);
  evaluatedProps.set(props, cached);
  return result;
};
var NEWTON_ITERATIONS = 4;
var NEWTON_MIN_SLOPE = 1e-3;
var SUBDIVISION_PRECISION = 1e-7;
var SUBDIVISION_MAX_ITERATIONS = 10;
var kSplineTableSize = 11;
var kSampleStepSize = 1 / (kSplineTableSize - 1);
var float32ArraySupported = typeof Float32Array === "function";
function a(aA1, aA2) {
  return 1 - 3 * aA2 + 3 * aA1;
}
function b(aA1, aA2) {
  return 3 * aA2 - 6 * aA1;
}
function c(aA1) {
  return 3 * aA1;
}
function calcBezier(aT, aA1, aA2) {
  return ((a(aA1, aA2) * aT + b(aA1, aA2)) * aT + c(aA1)) * aT;
}
function getSlope(aT, aA1, aA2) {
  return 3 * a(aA1, aA2) * aT * aT + 2 * b(aA1, aA2) * aT + c(aA1);
}
function binarySubdivide({
  aX,
  _aA,
  _aB,
  mX1,
  mX2
}) {
  let currentX;
  let currentT;
  let i = 0;
  let aA = _aA;
  let aB = _aB;
  do {
    currentT = aA + (aB - aA) / 2;
    currentX = calcBezier(currentT, mX1, mX2) - aX;
    if (currentX > 0) {
      aB = currentT;
    } else {
      aA = currentT;
    }
  } while (Math.abs(currentX) > SUBDIVISION_PRECISION && ++i < SUBDIVISION_MAX_ITERATIONS);
  return currentT;
}
function newtonRaphsonIterate(aX, _aGuessT, mX1, mX2) {
  let aGuessT = _aGuessT;
  for (let i = 0; i < NEWTON_ITERATIONS; ++i) {
    const currentSlope = getSlope(aGuessT, mX1, mX2);
    if (currentSlope === 0) {
      return aGuessT;
    }
    const currentX = calcBezier(aGuessT, mX1, mX2) - aX;
    aGuessT -= currentX / currentSlope;
  }
  return aGuessT;
}
function bezier(mX1, mY1, mX2, mY2) {
  if (!(mX1 >= 0 && mX1 <= 1 && mX2 >= 0 && mX2 <= 1)) {
    throw new Error("bezier x values must be in [0, 1] range");
  }
  const sampleValues = float32ArraySupported ? new Float32Array(kSplineTableSize) : new Array(kSplineTableSize);
  if (mX1 !== mY1 || mX2 !== mY2) {
    for (let i = 0; i < kSplineTableSize; ++i) {
      sampleValues[i] = calcBezier(i * kSampleStepSize, mX1, mX2);
    }
  }
  function getTForX(aX) {
    let intervalStart = 0;
    let currentSample = 1;
    const lastSample = kSplineTableSize - 1;
    for (; currentSample !== lastSample && sampleValues[currentSample] <= aX; ++currentSample) {
      intervalStart += kSampleStepSize;
    }
    --currentSample;
    const dist = (aX - sampleValues[currentSample]) / (sampleValues[currentSample + 1] - sampleValues[currentSample]);
    const guessForT = intervalStart + dist * kSampleStepSize;
    const initialSlope = getSlope(guessForT, mX1, mX2);
    if (initialSlope >= NEWTON_MIN_SLOPE) {
      return newtonRaphsonIterate(aX, guessForT, mX1, mX2);
    }
    if (initialSlope === 0) {
      return guessForT;
    }
    return binarySubdivide({
      aX,
      _aA: intervalStart,
      _aB: intervalStart + kSampleStepSize,
      mX1,
      mX2
    });
  }
  return function(x) {
    const clampedX = Math.min(1, Math.max(0, x));
    if (mX1 === mY1 && mX2 === mY2) {
      return clampedX;
    }
    if (clampedX === 0) {
      return 0;
    }
    if (clampedX === 1) {
      return 1;
    }
    return calcBezier(getTForX(clampedX), mY1, mY2);
  };
}
var normalizeNumber = (value) => {
  return Math.round(value * 1e6) / 1e6;
};
var angleUnits = /* @__PURE__ */ new Set(["deg", "rad", "grad", "turn"]);
var lengthUnits = /* @__PURE__ */ new Set([
  "%",
  "cap",
  "ch",
  "cm",
  "cqb",
  "cqh",
  "cqi",
  "cqmax",
  "cqmin",
  "cqw",
  "dvh",
  "dvw",
  "em",
  "ex",
  "ic",
  "in",
  "lh",
  "lvh",
  "lvw",
  "mm",
  "pc",
  "pt",
  "px",
  "q",
  "rem",
  "rlh",
  "svh",
  "svw",
  "vb",
  "vh",
  "vi",
  "vmax",
  "vmin",
  "vw"
]);
var cssNumberRegex = /^([+-]?(?:\d+\.?\d*|\.\d+))([a-zA-Z%]+)?$/;
var transformOriginKeywords = /* @__PURE__ */ new Set([
  "left",
  "center",
  "right",
  "top",
  "bottom"
]);
var transformOriginKeywordOptions = (keyword) => {
  if (keyword === "left") {
    return [{ axis: "x", value: { value: 0, unit: "%" } }];
  }
  if (keyword === "right") {
    return [{ axis: "x", value: { value: 100, unit: "%" } }];
  }
  if (keyword === "top") {
    return [{ axis: "y", value: { value: 0, unit: "%" } }];
  }
  if (keyword === "bottom") {
    return [{ axis: "y", value: { value: 100, unit: "%" } }];
  }
  return [
    { axis: "x", value: { value: 50, unit: "%" } },
    { axis: "y", value: { value: 50, unit: "%" } }
  ];
};
var transformOriginCenter = { value: 50, unit: "%" };
var stringifyNumber = (value) => {
  return String(normalizeNumber(value));
};
var UnsupportedStringInterpolationValueError = class extends TypeError {
};
var parseStringInterpolationComponent = (component, value) => {
  const match = cssNumberRegex.exec(component);
  if (match === null) {
    throw new UnsupportedStringInterpolationValueError(`Cannot interpolate "${value}" because "${component}" is not a supported scale, translate, or rotate value`);
  }
  const unit = match[2] ?? null;
  const numberValue = Number(match[1]);
  if (!Number.isFinite(numberValue)) {
    throw new TypeError(`Cannot interpolate "${value}" because "${component}" is not finite`);
  }
  if (unit === null) {
    return { kind: "scale", value: numberValue, unit: null };
  }
  if (angleUnits.has(unit)) {
    return { kind: "rotate", value: numberValue, unit };
  }
  if (lengthUnits.has(unit)) {
    return { kind: "translate", value: numberValue, unit };
  }
  throw new TypeError(`Cannot interpolate "${value}" because "${unit}" is not a supported translate or rotate unit`);
};
var parseTransformOriginLengthPercentage = ({
  component,
  value,
  allowPercentage
}) => {
  const match = cssNumberRegex.exec(component);
  if (match === null) {
    throw new TypeError(`Cannot interpolate "${value}" because "${component}" is not a supported transform-origin ${allowPercentage ? "length-percentage" : "z length"}`);
  }
  const unit = match[2] ?? null;
  const numberValue = Number(match[1]);
  if (!Number.isFinite(numberValue)) {
    throw new TypeError(`Cannot interpolate "${value}" because "${component}" is not finite`);
  }
  if (unit === null || !lengthUnits.has(unit) || !allowPercentage && unit === "%") {
    throw new TypeError(`Cannot interpolate "${value}" because "${component}" is not a supported transform-origin ${allowPercentage ? "length-percentage" : "z length"}`);
  }
  return { value: numberValue, unit };
};
var parseTransformOriginToken = (component, value) => {
  const lower = component.toLowerCase();
  if (transformOriginKeywords.has(lower)) {
    return { type: "keyword", keyword: lower };
  }
  return {
    type: "length-percentage",
    parsed: parseTransformOriginLengthPercentage({
      component,
      value,
      allowPercentage: true
    })
  };
};
var parseTwoTransformOriginKeywords = (first, second, value) => {
  const candidates = [];
  for (const firstOption of transformOriginKeywordOptions(first)) {
    for (const secondOption of transformOriginKeywordOptions(second)) {
      if (firstOption.axis === secondOption.axis) {
        continue;
      }
      candidates.push(firstOption.axis === "x" ? [firstOption.value, secondOption.value] : [secondOption.value, firstOption.value]);
    }
  }
  if (candidates.length === 0) {
    throw new TypeError(`Cannot interpolate "${value}" because "${first} ${second}" is not a valid transform-origin keyword pair`);
  }
  return candidates[0];
};
var parseTransformOriginXY = (parts, value) => {
  if (parts.length === 1) {
    const token = parseTransformOriginToken(parts[0], value);
    if (token.type === "length-percentage") {
      return [token.parsed, transformOriginCenter];
    }
    if (token.keyword === "top" || token.keyword === "bottom") {
      return [
        transformOriginCenter,
        transformOriginKeywordOptions(token.keyword)[0].value
      ];
    }
    return [
      transformOriginKeywordOptions(token.keyword)[0].value,
      transformOriginCenter
    ];
  }
  const first = parseTransformOriginToken(parts[0], value);
  const second = parseTransformOriginToken(parts[1], value);
  if (first.type === "length-percentage" && second.type === "length-percentage") {
    return [first.parsed, second.parsed];
  }
  if (first.type === "keyword" && second.type === "keyword") {
    return parseTwoTransformOriginKeywords(first.keyword, second.keyword, value);
  }
  const keyword = first.type === "keyword" ? first : second.type === "keyword" ? second : null;
  const length = first.type === "length-percentage" ? first.parsed : second.type === "length-percentage" ? second.parsed : null;
  if (keyword === null || length === null) {
    throw new Error("Expected a keyword and a length-percentage value");
  }
  const keywordIsFirst = first.type === "keyword";
  if (keyword.keyword === "left" || keyword.keyword === "right") {
    if (!keywordIsFirst) {
      throw new TypeError(`Cannot interpolate "${value}" because horizontal transform-origin keywords must come before a length-percentage value`);
    }
    return [transformOriginKeywordOptions(keyword.keyword)[0].value, length];
  }
  if (keyword.keyword === "top" || keyword.keyword === "bottom") {
    return [length, transformOriginKeywordOptions(keyword.keyword)[0].value];
  }
  return keywordIsFirst ? [transformOriginCenter, length] : [length, transformOriginCenter];
};
var parseTransformOriginValue = (output, parts) => {
  const [x, y] = parseTransformOriginXY(parts.slice(0, 2), output);
  const z = parts[2] === void 0 ? { value: 0, unit: null } : parseTransformOriginLengthPercentage({
    component: parts[2],
    value: output,
    allowPercentage: false
  });
  return {
    kind: "translate",
    values: [x.value, y.value, z.value, 0],
    units: [x.unit, y.unit, z.unit, null],
    dimensions: parts[2] === void 0 ? 2 : 3,
    axisRotation: false
  };
};
var parseAxisRotationValue = (output) => {
  const parts = output.trim().split(/\s+/);
  const keywordAxis = parts.length === 2 ? parts[0].toLowerCase() : null;
  if (keywordAxis === "x" || keywordAxis === "y" || keywordAxis === "z") {
    const keywordAngle = parseStringInterpolationComponent(parts[1], output);
    if (keywordAngle.kind !== "rotate") {
      return null;
    }
    return {
      kind: "rotate",
      values: keywordAxis === "x" ? [1, 0, 0, keywordAngle.value] : keywordAxis === "y" ? [0, 1, 0, keywordAngle.value] : [0, 0, 1, keywordAngle.value],
      units: [null, null, null, keywordAngle.unit],
      dimensions: 4,
      axisRotation: true
    };
  }
  if (parts.length !== 4) {
    return null;
  }
  const axis = parts.slice(0, 3).map(Number);
  if (!axis.every(Number.isFinite)) {
    return null;
  }
  const vectorAngle = parseStringInterpolationComponent(parts[3], output);
  if (vectorAngle.kind !== "rotate") {
    return null;
  }
  return {
    kind: "rotate",
    values: [axis[0], axis[1], axis[2], vectorAngle.value],
    units: [null, null, null, vectorAngle.unit],
    dimensions: 4,
    axisRotation: true
  };
};
var parseStringInterpolationValue = (output, outputType) => {
  if (typeof output === "number") {
    if (!Number.isFinite(output)) {
      throw new Error(`outputRange must contain only finite numbers, but got [${output}]`);
    }
    return {
      kind: "scale",
      values: [output, output, 1, 0],
      units: [null, null, null, null],
      dimensions: 1,
      axisRotation: false
    };
  }
  if (outputType === "transform-origin") {
    const transformOriginParts = output.trim().split(/\s+/);
    if (transformOriginParts.length < 1 || transformOriginParts.length > 3 || transformOriginParts[0] === "") {
      throw new TypeError(`String outputRange values must contain 1 to 3 components, but got "${output}"`);
    }
    return parseTransformOriginValue(output, transformOriginParts);
  }
  const axisRotation = parseAxisRotationValue(output);
  if (axisRotation !== null) {
    if (outputType !== void 0 && outputType !== "rotate") {
      throw new TypeError(`Cannot interpolate "${output}" as ${outputType} because it is a rotate value`);
    }
    return axisRotation;
  }
  const parts = output.trim().split(/\s+/);
  if (parts.length < 1 || parts.length > 3 || parts[0] === "") {
    const ErrorType = outputType === void 0 && parts.some((part) => !cssNumberRegex.test(part) && !transformOriginKeywords.has(part.toLowerCase())) ? UnsupportedStringInterpolationValueError : TypeError;
    throw new ErrorType(`String outputRange values must contain 1 to 3 components, but got "${output}"`);
  }
  if (parts.some((part) => transformOriginKeywords.has(part.toLowerCase()))) {
    if (outputType !== void 0) {
      throw new TypeError(`Cannot interpolate "${output}" as ${outputType} because it is a transform-origin value`);
    }
    return parseTransformOriginValue(output, parts);
  }
  const parsed = parts.map((part) => parseStringInterpolationComponent(part, output));
  const [{ kind }] = parsed;
  for (const part of parsed) {
    if (part.kind !== kind) {
      throw new TypeError(`Cannot interpolate "${output}" because it mixes ${kind} and ${part.kind} values`);
    }
  }
  if (outputType !== void 0 && outputType !== kind) {
    throw new TypeError(`Cannot interpolate "${output}" as ${outputType} because it is a ${kind} value`);
  }
  if (kind === "scale") {
    const x = parsed[0].value;
    const y = parsed[1]?.value ?? x;
    const z = parsed[2]?.value ?? 1;
    return {
      kind,
      values: [x, y, z, 0],
      units: [null, null, null, null],
      dimensions: parsed.length,
      axisRotation: false
    };
  }
  return {
    kind,
    values: [parsed[0].value, parsed[1]?.value ?? 0, parsed[2]?.value ?? 0, 0],
    units: [
      parsed[0].unit,
      parsed[1]?.unit ?? null,
      parsed[2]?.unit ?? null,
      null
    ],
    dimensions: parsed.length,
    axisRotation: false
  };
};
var serializeStringInterpolationValue = ({
  kind,
  values,
  units,
  dimensions,
  axisRotation
}) => {
  if (axisRotation) {
    return `${stringifyNumber(values[0])} ${stringifyNumber(values[1])} ${stringifyNumber(values[2])} ${stringifyNumber(values[3])}${units[3]}`;
  }
  if (kind === "scale") {
    return values.slice(0, dimensions).map((value) => stringifyNumber(value)).join(" ");
  }
  return values.slice(0, dimensions).map((value, index) => `${stringifyNumber(value)}${units[index]}`).join(" ");
};
var toSignedArea = (scale) => {
  if (scale === 0) {
    return 0;
  }
  return Math.sign(scale) * scale * scale;
};
var fromSignedArea = (area) => {
  if (area === 0) {
    return 0;
  }
  return Math.sign(area) * Math.sqrt(Math.abs(area));
};
function interpolateFunction(input, inputRange, outputRange, options) {
  const { extrapolateLeft, extrapolateRight, easing, output } = options;
  let result = input;
  const [inputMin, inputMax] = inputRange;
  const [outputMin, outputMax] = outputRange;
  if (result < inputMin) {
    if (extrapolateLeft === "identity") {
      return result;
    }
    if (extrapolateLeft === "clamp") {
      result = inputMin;
    } else if (extrapolateLeft === "wrap") {
      const range = inputMax - inputMin;
      result = ((result - inputMin) % range + range) % range + inputMin;
    } else if (extrapolateLeft === "extend") {
    }
  }
  if (result > inputMax) {
    if (extrapolateRight === "identity") {
      return result;
    }
    if (extrapolateRight === "clamp") {
      result = inputMax;
    } else if (extrapolateRight === "wrap") {
      const range = inputMax - inputMin;
      result = ((result - inputMin) % range + range) % range + inputMin;
    } else if (extrapolateRight === "extend") {
    }
  }
  if (outputMin === outputMax) {
    return outputMin;
  }
  result = (result - inputMin) / (inputMax - inputMin);
  result = easing(result);
  if (output === "perceptual-scale") {
    const signedAreaMin = toSignedArea(outputMin);
    const signedAreaMax = toSignedArea(outputMax);
    result = fromSignedArea(result * (signedAreaMax - signedAreaMin) + signedAreaMin);
  } else {
    result = result * (outputMax - outputMin) + outputMin;
  }
  return result;
}
function findRange(input, inputRange) {
  let i;
  for (i = 1; i < inputRange.length - 1; ++i) {
    if (inputRange[i] >= input) {
      break;
    }
  }
  return i - 1;
}
var defaultEasing = (num) => num;
var resolveOutputOption = (output) => {
  return output ?? "linear";
};
var shouldExtendRightForEasing = (easing) => {
  return easing.remotionShouldExtendRight === true;
};
var resolveEasingForSegment = ({
  easing,
  segmentIndex
}) => {
  if (easing === void 0) {
    return defaultEasing;
  }
  if (typeof easing === "function") {
    return easing;
  }
  return easing[segmentIndex];
};
var interpolateSegment = ({
  input,
  inputRange,
  outputRange,
  easing,
  extrapolateLeft,
  extrapolateRight,
  output
}) => {
  return interpolateFunction(input, inputRange, outputRange, {
    easing,
    extrapolateLeft,
    extrapolateRight: input > inputRange[1] && extrapolateRight === "clamp" && shouldExtendRightForEasing(easing) ? "extend" : extrapolateRight,
    output
  });
};
var getInputForInterpolation = ({
  input,
  inputRange,
  options
}) => {
  const posterizedInput = options?.posterize === void 0 ? input : Math.floor(input / options.posterize) * options.posterize;
  const inputMin = inputRange[0];
  const inputMax = inputRange[inputRange.length - 1];
  if (inputRange.length === 1 || !(posterizedInput < inputMin && options?.extrapolateLeft === "wrap" || posterizedInput > inputMax && options?.extrapolateRight === "wrap")) {
    return posterizedInput;
  }
  const range = inputMax - inputMin;
  return ((posterizedInput - inputMin) % range + range) % range + inputMin;
};
var interpolateNumber = ({
  input,
  inputRange,
  outputRange,
  options
}) => {
  const output = resolveOutputOption(options?.output);
  if (inputRange.length === 1) {
    return outputRange[0];
  }
  const easingOption = options?.easing;
  let extrapolateLeft = "extend";
  if (options?.extrapolateLeft !== void 0) {
    extrapolateLeft = options.extrapolateLeft;
  }
  let extrapolateRight = "extend";
  if (options?.extrapolateRight !== void 0) {
    extrapolateRight = options.extrapolateRight;
  }
  const resolvedInput = getInputForInterpolation({
    input,
    inputRange,
    options: options ?? null
  });
  const range = findRange(resolvedInput, inputRange);
  const easing = resolveEasingForSegment({
    easing: easingOption,
    segmentIndex: range
  });
  let result = interpolateSegment({
    input: resolvedInput,
    inputRange: [inputRange[range], inputRange[range + 1]],
    outputRange: [outputRange[range], outputRange[range + 1]],
    easing,
    extrapolateLeft,
    extrapolateRight,
    output
  });
  for (let segmentIndex = 0; segmentIndex < range; segmentIndex++) {
    const previousEasing = resolveEasingForSegment({
      easing: easingOption,
      segmentIndex
    });
    if (!shouldExtendRightForEasing(previousEasing)) {
      continue;
    }
    const previousSegmentEnd = inputRange[segmentIndex + 1];
    if (resolvedInput <= previousSegmentEnd) {
      continue;
    }
    const continuedSegmentValue = interpolateSegment({
      input: resolvedInput,
      inputRange: [inputRange[segmentIndex], previousSegmentEnd],
      outputRange: [outputRange[segmentIndex], outputRange[segmentIndex + 1]],
      easing: previousEasing,
      extrapolateLeft,
      extrapolateRight: "extend",
      output
    });
    result += continuedSegmentValue - outputRange[segmentIndex + 1];
  }
  return result;
};
var interpolateString = ({
  input,
  inputRange,
  outputRange,
  options,
  outputType
}) => {
  const initiallyParsedOutputRange = outputRange.map((output) => parseStringInterpolationValue(output, outputType));
  const hasAxisRotation = initiallyParsedOutputRange.some((parsed) => parsed.axisRotation);
  const resolvedInput = getInputForInterpolation({
    input,
    inputRange,
    options: options ?? null
  });
  const segmentIndex = inputRange.length === 1 ? 0 : findRange(resolvedInput, inputRange);
  const parsedOutputRange = hasAxisRotation ? initiallyParsedOutputRange.map((parsed, index) => {
    if (parsed.kind !== "rotate") {
      return parsed;
    }
    if (parsed.axisRotation) {
      return parsed;
    }
    if (parsed.dimensions !== 1) {
      throw new TypeError("Cannot interpolate a multi-angle rotate value with an axis rotation");
    }
    const adjacentAxisRotation = parsed.values[0] === 0 ? index === 0 ? initiallyParsedOutputRange.find((candidate) => candidate.axisRotation) : index === initiallyParsedOutputRange.length - 1 ? [...initiallyParsedOutputRange].reverse().find((candidate) => candidate.axisRotation) : index === segmentIndex ? initiallyParsedOutputRange[index + 1] : index === segmentIndex + 1 ? initiallyParsedOutputRange[index - 1] : void 0 : void 0;
    const axis = adjacentAxisRotation?.axisRotation ? adjacentAxisRotation.values : [0, 0, 1];
    return {
      kind: "rotate",
      values: [axis[0], axis[1], axis[2], parsed.values[0]],
      units: [null, null, null, parsed.units[0]],
      dimensions: 4,
      axisRotation: true
    };
  }) : initiallyParsedOutputRange;
  const kind = parsedOutputRange[0]?.kind;
  if (kind === void 0) {
    throw new Error("outputRange must have at least 1 element");
  }
  for (const parsed of parsedOutputRange) {
    if (parsed.kind !== kind) {
      throw new TypeError(`Cannot interpolate ${kind} values with ${parsed.kind} values`);
    }
  }
  const dimensions = Math.max(...parsedOutputRange.map((parsed) => parsed.dimensions));
  const units = [
    null,
    null,
    null,
    null
  ];
  if (kind !== "scale") {
    for (let axis = 0; axis < dimensions; axis++) {
      if (hasAxisRotation && axis < 3) {
        continue;
      }
      for (const parsed of parsedOutputRange) {
        const unit = parsed.units[axis];
        if (unit === null) {
          continue;
        }
        if (units[axis] === null) {
          units[axis] = unit;
          continue;
        }
        if (units[axis] !== unit) {
          throw new TypeError(`Cannot interpolate ${kind} values with different units on axis ${axis + 1}: ${units[axis]} and ${unit}`);
        }
      }
      if (units[axis] === null) {
        throw new TypeError(`Cannot interpolate ${kind} values because axis ${axis + 1} has no unit`);
      }
    }
  }
  const values = [0, 0, 0, 0];
  for (let axis = 0; axis < dimensions; axis++) {
    values[axis] = interpolateNumber({
      input,
      inputRange,
      outputRange: parsedOutputRange.map((parsed) => parsed.values[axis]),
      options
    });
  }
  return serializeStringInterpolationValue({
    kind,
    values,
    units,
    dimensions,
    axisRotation: hasAxisRotation
  });
};
var interpolateFontWeight = ({
  input,
  inputRange,
  outputRange,
  options
}) => {
  const normalizedOutputRange = outputRange.map((output) => {
    if (typeof output === "string") {
      const lowerCaseOutput = output.toLowerCase();
      if (lowerCaseOutput === "normal") {
        return 400;
      }
      if (lowerCaseOutput === "bold") {
        return 700;
      }
    }
    const match = typeof output === "string" ? cssNumberRegex.exec(output) : null;
    const value = typeof output === "number" ? output : match !== null && match[2] === void 0 ? Number(match[1]) : Number.NaN;
    if (!Number.isFinite(value) || value < 1 || value > 1e3) {
      throw new TypeError(`Cannot interpolate font weight "${output}". Expected "normal", "bold", or a number between 1 and 1000`);
    }
    return value;
  });
  return interpolateNumber({
    input,
    inputRange,
    outputRange: normalizedOutputRange,
    options
  });
};
var interpolateDiscreteValue = ({
  input,
  inputRange,
  outputRange,
  options
}) => {
  if (inputRange.length === 1) {
    return outputRange[0];
  }
  for (let segmentIndex = 0; segmentIndex < inputRange.length - 1; segmentIndex++) {
    if (resolveEasingForSegment({
      easing: options?.easing,
      segmentIndex
    }) !== Easing2.step1) {
      throw new TypeError(typeof outputRange[0] === "boolean" ? "Booleans can only be interpolated using Easing.step1" : "Non-numeric strings can only be interpolated using Easing.step1");
    }
  }
  const resolvedInput = getInputForInterpolation({
    input,
    inputRange,
    options: options ?? null
  });
  const inputMin = inputRange[0];
  const inputMax = inputRange[inputRange.length - 1];
  if (resolvedInput < inputMin) {
    if (options?.extrapolateLeft === "identity") {
      throw new TypeError(typeof outputRange[0] === "boolean" ? 'extrapolateLeft: "identity" is not supported for booleans' : 'extrapolateLeft: "identity" is not supported for non-numeric strings');
    }
    return outputRange[0];
  }
  if (resolvedInput > inputMax) {
    if (options?.extrapolateRight === "identity") {
      throw new TypeError(typeof outputRange[0] === "boolean" ? 'extrapolateRight: "identity" is not supported for booleans' : 'extrapolateRight: "identity" is not supported for non-numeric strings');
    }
    return outputRange[outputRange.length - 1];
  }
  const range = findRange(resolvedInput, inputRange);
  return resolvedInput >= inputRange[range + 1] ? outputRange[range + 1] : outputRange[range];
};
var validateTupleOutputRange = (outputRange) => {
  const dimensions = outputRange[0]?.length;
  if (dimensions === void 0) {
    throw new Error("outputRange must have at least 1 element");
  }
  if (dimensions === 0) {
    throw new TypeError("outputRange tuples must contain at least 1 number");
  }
  for (const output of outputRange) {
    if (output.length !== dimensions) {
      throw new TypeError(`outputRange tuples must all have the same length, but got ${dimensions} and ${output.length}`);
    }
    for (const value of output) {
      if (typeof value !== "number" || !Number.isFinite(value)) {
        throw new TypeError(`outputRange tuples must contain only finite numbers, but got [${output.join(",")}]`);
      }
    }
  }
  return dimensions;
};
var interpolateTuple = ({
  input,
  inputRange,
  outputRange,
  options
}) => {
  const dimensions = validateTupleOutputRange(outputRange);
  return new Array(dimensions).fill(true).map((_, axis) => interpolateNumber({
    input,
    inputRange,
    outputRange: outputRange.map((output) => output[axis]),
    options
  }));
};
function checkValidInputRange(arr) {
  for (let i = 1; i < arr.length; ++i) {
    if (!(arr[i] > arr[i - 1])) {
      throw new Error(`inputRange must be strictly monotonically increasing but got [${arr.join(",")}]`);
    }
  }
}
function checkInfiniteRange(name, arr) {
  if (arr.length < 1) {
    throw new Error(name + " must have at least 1 element");
  }
  for (const element of arr) {
    if (typeof element !== "number") {
      throw new Error(`${name} must contain only numbers`);
    }
    if (!Number.isFinite(element)) {
      throw new Error(`${name} must contain only finite numbers, but got [${arr.join(",")}]`);
    }
  }
}
function assertValidInterpolateEasingOption2(easing, inputRangeLength) {
  if (easing === void 0) {
    return;
  }
  if (typeof easing === "function") {
    return;
  }
  const expectedLength = inputRangeLength - 1;
  if (easing.length !== expectedLength) {
    throw new Error(`When easing is an array, it must have one entry per segment between keyframes (length inputRange.length - 1 = ${expectedLength}), but got length ${easing.length}`);
  }
  for (let i = 0; i < easing.length; i++) {
    if (typeof easing[i] !== "function") {
      throw new Error(`easing[${i}] must be a function`);
    }
  }
}
function assertValidInterpolatePosterizeOption2(posterize) {
  if (posterize === void 0) {
    return;
  }
  if (typeof posterize !== "number" || !Number.isFinite(posterize) || posterize <= 0) {
    throw new Error(`posterize must be a positive finite number, but got ${posterize}`);
  }
}
function assertValidInterpolateOutputOption(output) {
  if (output === void 0 || output === "linear" || output === "perceptual-scale") {
    return;
  }
  throw new Error(`output must be "linear" or "perceptual-scale", but got ${String(output)}`);
}
function assertValidInterpolateOutputType(outputType) {
  if (outputType === void 0 || outputType === "font-weight" || outputType === "scale" || outputType === "translate" || outputType === "rotate" || outputType === "transform-origin") {
    return;
  }
  throw new Error(`outputType must be "font-weight", "scale", "translate", "rotate", or "transform-origin", but got ${String(outputType)}`);
}
function interpolate2(input, inputRange, outputRange, options) {
  if (typeof input === "undefined") {
    throw new Error("input can not be undefined");
  }
  if (typeof inputRange === "undefined") {
    throw new Error("inputRange can not be undefined");
  }
  if (typeof outputRange === "undefined") {
    throw new Error("outputRange can not be undefined");
  }
  if (inputRange.length !== outputRange.length) {
    throw new Error("inputRange (" + inputRange.length + ") and outputRange (" + outputRange.length + ") must have the same length");
  }
  checkInfiniteRange("inputRange", inputRange);
  checkValidInputRange(inputRange);
  assertValidInterpolateEasingOption2(options?.easing, inputRange.length);
  assertValidInterpolatePosterizeOption2(options?.posterize);
  assertValidInterpolateOutputOption(options?.output);
  assertValidInterpolateOutputType(options?.outputType);
  if (typeof input !== "number") {
    throw new TypeError("Cannot interpolate an input which is not a number");
  }
  if (!Array.isArray(outputRange)) {
    throw new Error("outputRange must contain only numbers");
  }
  const outputType = options?.outputType;
  if (outputRange.some((output) => typeof output === "boolean")) {
    if (!outputRange.every((output) => typeof output === "boolean")) {
      throw new TypeError("Boolean outputRange must contain only booleans");
    }
    if (outputType !== void 0) {
      throw new TypeError("Boolean outputRange cannot use outputType");
    }
    return interpolateDiscreteValue({
      input,
      inputRange,
      outputRange,
      options
    });
  }
  if (outputType === "font-weight") {
    if (!outputRange.every((output) => typeof output === "number" || typeof output === "string")) {
      throw new TypeError("Font weight outputRange must contain only numbers or strings");
    }
    return interpolateFontWeight({
      input,
      inputRange,
      outputRange,
      options
    });
  }
  const hasStringOutput = outputRange.some((output) => typeof output === "string");
  if (outputType !== void 0 && outputType !== "scale" && !hasStringOutput) {
    throw new TypeError(`${outputType} outputRange must contain strings with the appropriate CSS units`);
  }
  if (hasStringOutput) {
    if (!outputRange.every((output) => typeof output === "string" || typeof output === "number")) {
      throw new TypeError("outputRange must contain only numbers, or supported scale, translate, and rotate strings");
    }
    try {
      return interpolateString({
        input,
        inputRange,
        outputRange,
        options,
        outputType
      });
    } catch (error2) {
      if (!outputRange.every((output) => typeof output === "string")) {
        throw error2;
      }
      const hasNonNumericString = outputRange.some((output) => {
        try {
          parseStringInterpolationValue(output, outputType);
          return false;
        } catch (parseError) {
          return parseError instanceof UnsupportedStringInterpolationValueError;
        }
      });
      if (!hasNonNumericString) {
        throw error2;
      }
      return interpolateDiscreteValue({
        input,
        inputRange,
        outputRange,
        options
      });
    }
  }
  if (outputRange.every((output) => Array.isArray(output))) {
    return interpolateTuple({ input, inputRange, outputRange, options });
  }
  if (!outputRange.every((output) => typeof output === "number")) {
    throw new TypeError("outputRange must contain only numbers, numeric tuples, or supported scale, translate, and rotate strings");
  }
  checkInfiniteRange("outputRange", outputRange);
  return interpolateNumber({ input, inputRange, outputRange, options });
}
var prepareNumericInterpolation = ({
  inputRange,
  outputRange,
  options
}) => {
  interpolate2(inputRange[0], inputRange, outputRange, options);
  return (input) => interpolateNumber({ input, inputRange, outputRange, options });
};
var validateFrame = ({
  allowFloats,
  durationInFrames,
  frame
}) => {
  if (typeof frame === "undefined") {
    throw new TypeError(`Argument missing for parameter "frame"`);
  }
  if (typeof frame !== "number") {
    throw new TypeError(`Argument passed for "frame" is not a number: ${frame}`);
  }
  if (!Number.isFinite(frame)) {
    throw new RangeError(`Frame ${frame} is not finite`);
  }
  if (frame % 1 !== 0 && !allowFloats) {
    throw new RangeError(`Argument for frame must be an integer, but got ${frame}`);
  }
  if (frame < 0 && frame < -durationInFrames) {
    throw new RangeError(`Cannot use frame ${frame}: Duration of composition is ${durationInFrames}, therefore the lowest frame that can be rendered is ${-durationInFrames}`);
  }
  if (frame > durationInFrames - 1) {
    throw new RangeError(`Cannot use frame ${frame}: Duration of composition is ${durationInFrames}, therefore the highest frame that can be rendered is ${durationInFrames - 1}`);
  }
};
var validateSpringDuration = (dur) => {
  if (typeof dur === "undefined") {
    return;
  }
  if (typeof dur !== "number") {
    throw new TypeError(`A "duration" of a spring must be a "number" but is "${typeof dur}"`);
  }
  if (Number.isNaN(dur)) {
    throw new TypeError('A "duration" of a spring is NaN, which it must not be');
  }
  if (!Number.isFinite(dur)) {
    throw new TypeError('A "duration" of a spring must be finite, but is ' + dur);
  }
  if (dur <= 0) {
    throw new TypeError('A "duration" of a spring must be positive, but is ' + dur);
  }
};
var defaultSpringConfig = {
  damping: 10,
  mass: 1,
  stiffness: 100,
  overshootClamping: false
};
var advanceCache = {};
function advance({
  animation,
  now,
  config
}) {
  const { toValue, lastTimestamp, current, velocity } = animation;
  const deltaTime = Math.min(now - lastTimestamp, 64);
  if (config.damping <= 0) {
    throw new Error("Spring damping must be greater than 0, otherwise the spring() animation will never end, causing an infinite loop.");
  }
  const c2 = config.damping;
  const m = config.mass;
  const k = config.stiffness;
  const cacheKey = [
    toValue,
    lastTimestamp,
    current,
    velocity,
    c2,
    m,
    k,
    now
  ].join("-");
  if (advanceCache[cacheKey]) {
    return advanceCache[cacheKey];
  }
  const v0 = -velocity;
  const x0 = toValue - current;
  const zeta = c2 / (2 * Math.sqrt(k * m));
  const omega0 = Math.sqrt(k / m);
  const omega1 = omega0 * Math.sqrt(1 - zeta ** 2);
  const t = deltaTime / 1e3;
  const sin1 = Math.sin(omega1 * t);
  const cos1 = Math.cos(omega1 * t);
  const underDampedEnvelope = Math.exp(-zeta * omega0 * t);
  const underDampedFrag1 = underDampedEnvelope * (sin1 * ((v0 + zeta * omega0 * x0) / omega1) + x0 * cos1);
  const underDampedPosition = toValue - underDampedFrag1;
  const underDampedVelocity = zeta * omega0 * underDampedFrag1 - underDampedEnvelope * (cos1 * (v0 + zeta * omega0 * x0) - omega1 * x0 * sin1);
  const criticallyDampedEnvelope = Math.exp(-omega0 * t);
  const criticallyDampedPosition = toValue - criticallyDampedEnvelope * (x0 + (v0 + omega0 * x0) * t);
  const criticallyDampedVelocity = criticallyDampedEnvelope * (v0 * (t * omega0 - 1) + t * x0 * omega0 * omega0);
  const animationNode = {
    toValue,
    prevPosition: current,
    lastTimestamp: now,
    current: zeta < 1 ? underDampedPosition : criticallyDampedPosition,
    velocity: zeta < 1 ? underDampedVelocity : criticallyDampedVelocity
  };
  advanceCache[cacheKey] = animationNode;
  return animationNode;
}
var calculationCache = {};
function springCalculation({
  frame,
  fps,
  config = {}
}) {
  const from = 0;
  const to = 1;
  const resolvedConfig = {
    damping: config.damping ?? defaultSpringConfig.damping,
    mass: config.mass ?? defaultSpringConfig.mass,
    stiffness: config.stiffness ?? defaultSpringConfig.stiffness,
    overshootClamping: config.overshootClamping ?? defaultSpringConfig.overshootClamping
  };
  const configKey = [
    fps,
    resolvedConfig.damping,
    resolvedConfig.mass,
    resolvedConfig.overshootClamping,
    resolvedConfig.stiffness
  ].join("-");
  const cacheKey = `${frame}-${configKey}`;
  if (calculationCache[cacheKey]) {
    return calculationCache[cacheKey];
  }
  const frameClamped = Math.max(0, frame);
  const previousFrame = Math.ceil(frameClamped) - 1;
  const previousAnimation = previousFrame >= 0 ? calculationCache[`${previousFrame}-${configKey}`] : void 0;
  let animation = previousAnimation ?? {
    lastTimestamp: 0,
    current: from,
    toValue: to,
    velocity: 0,
    prevPosition: 0
  };
  const unevenRest = frameClamped % 1;
  const startFrame = previousAnimation ? previousFrame + 1 : 0;
  for (let f = startFrame; f <= Math.floor(frameClamped); f++) {
    const time = f / fps * 1e3;
    animation = advance({
      animation,
      now: time,
      config: resolvedConfig
    });
  }
  if (unevenRest > 0) {
    animation = advance({
      animation,
      now: frameClamped / fps * 1e3,
      config: resolvedConfig
    });
  }
  calculationCache[cacheKey] = animation;
  return animation;
}
var cache = /* @__PURE__ */ new Map();
function measureSpring2({
  fps,
  config = {},
  threshold = 5e-3
}) {
  if (typeof threshold !== "number") {
    throw new TypeError(`threshold must be a number, got ${threshold} of type ${typeof threshold}`);
  }
  if (threshold === 0) {
    return Infinity;
  }
  if (threshold === 1) {
    return 0;
  }
  if (isNaN(threshold)) {
    throw new TypeError("Threshold is NaN");
  }
  if (!Number.isFinite(threshold)) {
    throw new TypeError("Threshold is not finite");
  }
  if (threshold < 0) {
    throw new TypeError("Threshold is below 0");
  }
  const cacheKey = [
    fps,
    config.damping,
    config.mass,
    config.overshootClamping,
    config.stiffness,
    threshold
  ].join("-");
  if (cache.has(cacheKey)) {
    return cache.get(cacheKey);
  }
  validateFps(fps, "to the measureSpring() function", false);
  let frame = 0;
  let finishedFrame = 0;
  const calc = () => {
    return springCalculation({
      fps,
      frame,
      config
    });
  };
  let animation = calc();
  const calcDifference = () => {
    return Math.abs(animation.current - animation.toValue);
  };
  let difference = calcDifference();
  while (difference >= threshold) {
    frame++;
    animation = calc();
    difference = calcDifference();
  }
  finishedFrame = frame;
  for (let i = 0; i < 20; i++) {
    frame++;
    animation = calc();
    difference = calcDifference();
    if (difference >= threshold) {
      i = 0;
      finishedFrame = frame + 1;
    }
  }
  cache.set(cacheKey, finishedFrame);
  return finishedFrame;
}
function spring2({
  frame: passedFrame,
  fps,
  config = {},
  from = 0,
  to = 1,
  durationInFrames: passedDurationInFrames,
  durationRestThreshold,
  delay = 0,
  reverse = false
}) {
  validateSpringDuration(passedDurationInFrames);
  validateFrame({
    frame: passedFrame,
    durationInFrames: Infinity,
    allowFloats: true
  });
  validateFps(fps, "to spring()", false);
  const needsToCalculateNaturalDuration = reverse || typeof passedDurationInFrames !== "undefined";
  const naturalDuration = needsToCalculateNaturalDuration ? measureSpring2({
    fps,
    config,
    threshold: durationRestThreshold
  }) : void 0;
  const naturalDurationGetter = needsToCalculateNaturalDuration ? {
    get: () => naturalDuration
  } : {
    get: () => {
      throw new Error("did not calculate natural duration, this is an error with Remotion. Please report");
    }
  };
  const reverseProcessed = reverse ? (passedDurationInFrames ?? naturalDurationGetter.get()) - passedFrame : passedFrame;
  const delayProcessed = reverseProcessed + (reverse ? delay : -delay);
  const durationProcessed = passedDurationInFrames === void 0 ? delayProcessed : delayProcessed / (passedDurationInFrames / naturalDurationGetter.get());
  if (passedDurationInFrames && delayProcessed > passedDurationInFrames) {
    return to;
  }
  const spr = springCalculation({
    fps,
    frame: durationProcessed,
    config
  });
  const inner = config.overshootClamping ? Math.min(spr.current, 1) : spr.current;
  const interpolated = from === 0 && to === 1 ? inner : interpolate2(inner, [0, 1], [from, to]);
  return interpolated;
}
var clampUnit = (t) => Math.min(1, Math.max(0, t));
var springEasingDurationInFrames = 30;
var easeBezier = null;
var Easing2 = class _Easing2 {
  static step0(n) {
    return n > 0 ? 1 : 0;
  }
  static step1(n) {
    return n >= 1 ? 1 : 0;
  }
  static linear(t) {
    return t;
  }
  static ease(t) {
    easeBezier ?? (easeBezier = _Easing2.bezier(0.42, 0, 1, 1));
    return easeBezier(t);
  }
  static quad(t) {
    return t * t;
  }
  static cubic(t) {
    return t * t * t;
  }
  static poly(n) {
    return (t) => t ** n;
  }
  static sin(t) {
    return 1 - Math.cos(t * Math.PI / 2);
  }
  static circle(t) {
    const u = clampUnit(t);
    return 1 - Math.sqrt(1 - u * u);
  }
  static exp(t) {
    return 2 ** (10 * (t - 1));
  }
  static elastic(bounciness = 1) {
    const p = bounciness * Math.PI;
    return (t) => 1 - Math.cos(t * Math.PI / 2) ** 3 * Math.cos(t * p);
  }
  static back(s = 1.70158) {
    return (t) => t * t * ((s + 1) * t - s);
  }
  static spring({
    allowTail = false,
    durationRestThreshold,
    ...config
  } = {}) {
    const easing = (t) => {
      if (t <= 0) {
        return 0;
      }
      if (!allowTail && t >= 1) {
        return 1;
      }
      if (allowTail) {
        return spring2({
          fps: springEasingDurationInFrames,
          frame: t * measureSpring2({
            fps: springEasingDurationInFrames,
            config,
            threshold: durationRestThreshold
          }),
          config
        });
      }
      return spring2({
        fps: springEasingDurationInFrames,
        frame: t * springEasingDurationInFrames,
        config,
        durationInFrames: springEasingDurationInFrames,
        durationRestThreshold
      });
    };
    return Object.assign(easing, {
      remotionShouldExtendRight: allowTail
    });
  }
  static bounce(t) {
    const u = clampUnit(t);
    if (u < 1 / 2.75) {
      return 7.5625 * u * u;
    }
    if (u < 2 / 2.75) {
      const t2_ = u - 1.5 / 2.75;
      return 7.5625 * t2_ * t2_ + 0.75;
    }
    if (u < 2.5 / 2.75) {
      const t2_ = u - 2.25 / 2.75;
      return 7.5625 * t2_ * t2_ + 0.9375;
    }
    const t2 = u - 2.625 / 2.75;
    return 7.5625 * t2 * t2 + 0.984375;
  }
  static bezier(x1, y1, x2, y2) {
    return bezier(x1, y1, x2, y2);
  }
  static in(easing) {
    return easing;
  }
  static out(easing) {
    return (t) => 1 - easing(1 - t);
  }
  static inOut(easing) {
    return (t) => {
      if (t < 0.5) {
        return easing(t * 2) / 2;
      }
      return 1 - easing((1 - t) * 2) / 2;
    };
  }
};
var NUMBER = "[-+]?\\d*\\.?\\d+";
var PERCENTAGE = NUMBER + "%";
function call(...args) {
  return "\\(\\s*(" + args.join(")\\s*,\\s*(") + ")\\s*\\)";
}
var MODERN_VALUE = "(?:none|[-+]?\\d*\\.?\\d+(?:%|deg|rad|grad|turn)?)";
function modernColorCall(name) {
  return new RegExp(name + "\\(\\s*(" + MODERN_VALUE + ")\\s+(" + MODERN_VALUE + ")\\s+(" + MODERN_VALUE + ")(?:\\s*\\/\\s*(" + MODERN_VALUE + "))?\\s*\\)");
}
var cachedMatchers = {
  rgb: void 0,
  rgba: void 0,
  hsl: void 0,
  hsla: void 0,
  hex3: void 0,
  hex4: void 0,
  hex5: void 0,
  hex6: void 0,
  hex8: void 0,
  oklch: void 0,
  oklab: void 0,
  lab: void 0,
  lch: void 0,
  hwb: void 0
};
function getMatchers() {
  if (cachedMatchers.rgb === void 0) {
    cachedMatchers.rgb = new RegExp("rgb" + call(NUMBER, NUMBER, NUMBER));
    cachedMatchers.rgba = new RegExp("rgba" + call(NUMBER, NUMBER, NUMBER, NUMBER));
    cachedMatchers.hsl = new RegExp("hsl" + call(NUMBER, PERCENTAGE, PERCENTAGE));
    cachedMatchers.hsla = new RegExp("hsla" + call(NUMBER, PERCENTAGE, PERCENTAGE, NUMBER));
    cachedMatchers.hex3 = /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/;
    cachedMatchers.hex4 = /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/;
    cachedMatchers.hex6 = /^#([0-9a-fA-F]{6})$/;
    cachedMatchers.hex8 = /^#([0-9a-fA-F]{8})$/;
    cachedMatchers.oklch = modernColorCall("oklch");
    cachedMatchers.oklab = modernColorCall("oklab");
    cachedMatchers.lab = modernColorCall("lab");
    cachedMatchers.lch = modernColorCall("lch");
    cachedMatchers.hwb = modernColorCall("hwb");
  }
  return cachedMatchers;
}
function hue2rgb(p, q, t) {
  if (t < 0) {
    t += 1;
  }
  if (t > 1) {
    t -= 1;
  }
  if (t < 1 / 6) {
    return p + (q - p) * 6 * t;
  }
  if (t < 1 / 2) {
    return q;
  }
  if (t < 2 / 3) {
    return p + (q - p) * (2 / 3 - t) * 6;
  }
  return p;
}
function hslToRgb(h, s, l) {
  const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
  const p = 2 * l - q;
  const r = hue2rgb(p, q, h + 1 / 3);
  const g = hue2rgb(p, q, h);
  const b2 = hue2rgb(p, q, h - 1 / 3);
  return Math.round(r * 255) << 24 | Math.round(g * 255) << 16 | Math.round(b2 * 255) << 8;
}
function parse255(str) {
  const int = Math.round(Number.parseFloat(str));
  if (int < 0) {
    return 0;
  }
  if (int > 255) {
    return 255;
  }
  return int;
}
function parse360(str) {
  const int = Number.parseFloat(str);
  return (int % 360 + 360) % 360 / 360;
}
function parse1(str) {
  const num = Number.parseFloat(str);
  if (num < 0) {
    return 0;
  }
  if (num > 1) {
    return 255;
  }
  return Math.round(num * 255);
}
function parsePercentage(str) {
  const int = Number.parseFloat(str);
  if (int < 0) {
    return 0;
  }
  if (int > 100) {
    return 1;
  }
  return int / 100;
}
function parseModernComponent(str, percentScale) {
  if (str === "none")
    return 0;
  if (str.endsWith("%")) {
    return Number.parseFloat(str) / 100 * percentScale;
  }
  return Number.parseFloat(str);
}
function parseHueAngle(str) {
  if (str === "none")
    return 0;
  let degrees = Number.parseFloat(str);
  if (str.endsWith("grad")) {
    degrees *= 0.9;
  } else if (str.endsWith("rad")) {
    degrees = degrees * 180 / Math.PI;
  } else if (str.endsWith("turn")) {
    degrees *= 360;
  }
  const normalized = degrees % 360;
  return normalized < 0 ? (normalized + 360) % 360 : normalized;
}
function parseModernAlpha(str) {
  if (str === void 0 || str === "none")
    return 1;
  if (str.endsWith("%")) {
    return Math.max(0, Math.min(1, Number.parseFloat(str) / 100));
  }
  return Math.max(0, Math.min(1, Number.parseFloat(str)));
}
function linearToSrgb(c2) {
  if (c2 <= 31308e-7)
    return 12.92 * c2;
  return 1.055 * c2 ** (1 / 2.4) - 0.055;
}
function clamp01(v) {
  return Math.max(0, Math.min(1, v));
}
function rgbFloatToInt(r, g, b2, alpha) {
  const ri = Math.round(clamp01(r) * 255);
  const gi = Math.round(clamp01(g) * 255);
  const bi = Math.round(clamp01(b2) * 255);
  const ai = Math.round(clamp01(alpha) * 255);
  return (ri << 24 | gi << 16 | bi << 8 | ai) >>> 0;
}
function oklabToSrgb(L, a2, b2) {
  const l_ = L + 0.3963377774 * a2 + 0.2158037573 * b2;
  const m_ = L - 0.1055613458 * a2 - 0.0638541728 * b2;
  const s_ = L - 0.0894841775 * a2 - 1.291485548 * b2;
  const l = l_ * l_ * l_;
  const m = m_ * m_ * m_;
  const s = s_ * s_ * s_;
  const rLin = 4.0767416621 * l - 3.3077115913 * m + 0.2309699292 * s;
  const gLin = -1.2684380046 * l + 2.6097574011 * m - 0.3413193965 * s;
  const bLin = -0.0041960863 * l - 0.7034186147 * m + 1.707614701 * s;
  return [linearToSrgb(rLin), linearToSrgb(gLin), linearToSrgb(bLin)];
}
function labToSrgb(L, a2, b2) {
  const epsilon = 216 / 24389;
  const kappa = 24389 / 27;
  const Xn = 0.95047;
  const Yn = 1;
  const Zn = 1.08883;
  const fy = (L + 16) / 116;
  const fx = a2 / 500 + fy;
  const fz = fy - b2 / 200;
  const fx3 = fx * fx * fx;
  const fz3 = fz * fz * fz;
  const xr = fx3 > epsilon ? fx3 : (116 * fx - 16) / kappa;
  const yr = L > kappa * epsilon ? ((L + 16) / 116) ** 3 : L / kappa;
  const zr = fz3 > epsilon ? fz3 : (116 * fz - 16) / kappa;
  const X = xr * Xn;
  const Y = yr * Yn;
  const Z = zr * Zn;
  const rLin = 3.2404542 * X - 1.5371385 * Y - 0.4985314 * Z;
  const gLin = -0.969266 * X + 1.8760108 * Y + 0.041556 * Z;
  const bLin = 0.0556434 * X - 0.2040259 * Y + 1.0572252 * Z;
  return [linearToSrgb(rLin), linearToSrgb(gLin), linearToSrgb(bLin)];
}
function hwbToSrgb(h, w, bk) {
  if (w + bk >= 1) {
    const gray = w / (w + bk);
    return [gray, gray, gray];
  }
  const q = 1;
  const p = 0;
  const r = hue2rgb(p, q, h + 1 / 3);
  const g = hue2rgb(p, q, h);
  const bl = hue2rgb(p, q, h - 1 / 3);
  const factor = 1 - w - bk;
  return [r * factor + w, g * factor + w, bl * factor + w];
}
var colorNames = {
  transparent: 0,
  aliceblue: 4042850303,
  antiquewhite: 4209760255,
  aqua: 16777215,
  aquamarine: 2147472639,
  azure: 4043309055,
  beige: 4126530815,
  bisque: 4293182719,
  black: 255,
  blanchedalmond: 4293643775,
  blue: 65535,
  blueviolet: 2318131967,
  brown: 2771004159,
  burlywood: 3736635391,
  burntsienna: 3934150143,
  cadetblue: 1604231423,
  chartreuse: 2147418367,
  chocolate: 3530104575,
  coral: 4286533887,
  cornflowerblue: 1687547391,
  cornsilk: 4294499583,
  crimson: 3692313855,
  cyan: 16777215,
  darkblue: 35839,
  darkcyan: 9145343,
  darkgoldenrod: 3095792639,
  darkgray: 2846468607,
  darkgreen: 6553855,
  darkgrey: 2846468607,
  darkkhaki: 3182914559,
  darkmagenta: 2332068863,
  darkolivegreen: 1433087999,
  darkorange: 4287365375,
  darkorchid: 2570243327,
  darkred: 2332033279,
  darksalmon: 3918953215,
  darkseagreen: 2411499519,
  darkslateblue: 1211993087,
  darkslategray: 793726975,
  darkslategrey: 793726975,
  darkturquoise: 13554175,
  darkviolet: 2483082239,
  deeppink: 4279538687,
  deepskyblue: 12582911,
  dimgray: 1768516095,
  dimgrey: 1768516095,
  dodgerblue: 512819199,
  firebrick: 2988581631,
  floralwhite: 4294635775,
  forestgreen: 579543807,
  fuchsia: 4278255615,
  gainsboro: 3705462015,
  ghostwhite: 4177068031,
  gold: 4292280575,
  goldenrod: 3668254975,
  gray: 2155905279,
  green: 8388863,
  greenyellow: 2919182335,
  grey: 2155905279,
  honeydew: 4043305215,
  hotpink: 4285117695,
  indianred: 3445382399,
  indigo: 1258324735,
  ivory: 4294963455,
  khaki: 4041641215,
  lavender: 3873897215,
  lavenderblush: 4293981695,
  lawngreen: 2096890111,
  lemonchiffon: 4294626815,
  lightblue: 2916673279,
  lightcoral: 4034953471,
  lightcyan: 3774873599,
  lightgoldenrodyellow: 4210742015,
  lightgray: 3553874943,
  lightgreen: 2431553791,
  lightgrey: 3553874943,
  lightpink: 4290167295,
  lightsalmon: 4288707327,
  lightseagreen: 548580095,
  lightskyblue: 2278488831,
  lightslategray: 2005441023,
  lightslategrey: 2005441023,
  lightsteelblue: 2965692159,
  lightyellow: 4294959359,
  lime: 16711935,
  limegreen: 852308735,
  linen: 4210091775,
  magenta: 4278255615,
  maroon: 2147483903,
  mediumaquamarine: 1724754687,
  mediumblue: 52735,
  mediumorchid: 3126187007,
  mediumpurple: 2473647103,
  mediumseagreen: 1018393087,
  mediumslateblue: 2070474495,
  mediumspringgreen: 16423679,
  mediumturquoise: 1221709055,
  mediumvioletred: 3340076543,
  midnightblue: 421097727,
  mintcream: 4127193855,
  mistyrose: 4293190143,
  moccasin: 4293178879,
  navajowhite: 4292783615,
  navy: 33023,
  oldlace: 4260751103,
  olive: 2155872511,
  olivedrab: 1804477439,
  orange: 4289003775,
  orangered: 4282712319,
  orchid: 3664828159,
  palegoldenrod: 4008225535,
  palegreen: 2566625535,
  paleturquoise: 2951671551,
  palevioletred: 3681588223,
  papayawhip: 4293907967,
  peachpuff: 4292524543,
  peru: 3448061951,
  pink: 4290825215,
  plum: 3718307327,
  powderblue: 2967529215,
  purple: 2147516671,
  rebeccapurple: 1714657791,
  red: 4278190335,
  rosybrown: 3163525119,
  royalblue: 1097458175,
  saddlebrown: 2336560127,
  salmon: 4202722047,
  sandybrown: 4104413439,
  seagreen: 780883967,
  seashell: 4294307583,
  sienna: 2689740287,
  silver: 3233857791,
  skyblue: 2278484991,
  slateblue: 1784335871,
  slategray: 1887473919,
  slategrey: 1887473919,
  snow: 4294638335,
  springgreen: 16744447,
  steelblue: 1182971135,
  tan: 3535047935,
  teal: 8421631,
  thistle: 3636451583,
  tomato: 4284696575,
  turquoise: 1088475391,
  violet: 4001558271,
  wheat: 4125012991,
  white: 4294967295,
  whitesmoke: 4126537215,
  yellow: 4294902015,
  yellowgreen: 2597139199
};
function normalizeColor(color) {
  const matchers = getMatchers();
  let match;
  if (matchers.hex6) {
    if (match = matchers.hex6.exec(color)) {
      return Number.parseInt(match[1] + "ff", 16) >>> 0;
    }
  }
  if (colorNames[color] !== void 0) {
    return colorNames[color];
  }
  if (matchers.rgb) {
    if (match = matchers.rgb.exec(color)) {
      return (parse255(match[1]) << 24 | parse255(match[2]) << 16 | parse255(match[3]) << 8 | 255) >>> 0;
    }
  }
  if (matchers.rgba) {
    if (match = matchers.rgba.exec(color)) {
      return (parse255(match[1]) << 24 | parse255(match[2]) << 16 | parse255(match[3]) << 8 | parse1(match[4])) >>> 0;
    }
  }
  if (matchers.hex3) {
    if (match = matchers.hex3.exec(color)) {
      return Number.parseInt(match[1] + match[1] + match[2] + match[2] + match[3] + match[3] + "ff", 16) >>> 0;
    }
  }
  if (matchers.hex8) {
    if (match = matchers.hex8.exec(color)) {
      return Number.parseInt(match[1], 16) >>> 0;
    }
  }
  if (matchers.hex4) {
    if (match = matchers.hex4.exec(color)) {
      return Number.parseInt(match[1] + match[1] + match[2] + match[2] + match[3] + match[3] + match[4] + match[4], 16) >>> 0;
    }
  }
  if (matchers.hsl) {
    if (match = matchers.hsl.exec(color)) {
      return (hslToRgb(parse360(match[1]), parsePercentage(match[2]), parsePercentage(match[3])) | 255) >>> 0;
    }
  }
  if (matchers.hsla) {
    if (match = matchers.hsla.exec(color)) {
      return (hslToRgb(parse360(match[1]), parsePercentage(match[2]), parsePercentage(match[3])) | parse1(match[4])) >>> 0;
    }
  }
  if (matchers.oklch) {
    if (match = matchers.oklch.exec(color)) {
      const L = parseModernComponent(match[1], 1);
      const C = parseModernComponent(match[2], 0.4);
      const H = parseHueAngle(match[3]);
      const alpha = parseModernAlpha(match[4]);
      const hRad = H * Math.PI / 180;
      const [r, g, b2] = oklabToSrgb(L, C * Math.cos(hRad), C * Math.sin(hRad));
      return rgbFloatToInt(r, g, b2, alpha);
    }
  }
  if (matchers.oklab) {
    if (match = matchers.oklab.exec(color)) {
      const L = parseModernComponent(match[1], 1);
      const a2 = parseModernComponent(match[2], 0.4);
      const b2 = parseModernComponent(match[3], 0.4);
      const alpha = parseModernAlpha(match[4]);
      const [r, g, bl] = oklabToSrgb(L, a2, b2);
      return rgbFloatToInt(r, g, bl, alpha);
    }
  }
  if (matchers.lab) {
    if (match = matchers.lab.exec(color)) {
      const L = parseModernComponent(match[1], 100);
      const a2 = parseModernComponent(match[2], 125);
      const b2 = parseModernComponent(match[3], 125);
      const alpha = parseModernAlpha(match[4]);
      const [r, g, bl] = labToSrgb(L, a2, b2);
      return rgbFloatToInt(r, g, bl, alpha);
    }
  }
  if (matchers.lch) {
    if (match = matchers.lch.exec(color)) {
      const L = parseModernComponent(match[1], 100);
      const C = parseModernComponent(match[2], 150);
      const H = parseHueAngle(match[3]);
      const alpha = parseModernAlpha(match[4]);
      const hRad = H * Math.PI / 180;
      const [r, g, bl] = labToSrgb(L, C * Math.cos(hRad), C * Math.sin(hRad));
      return rgbFloatToInt(r, g, bl, alpha);
    }
  }
  if (matchers.hwb) {
    if (match = matchers.hwb.exec(color)) {
      const H = parseHueAngle(match[1]);
      const W = parseModernComponent(match[2], 1);
      const B = parseModernComponent(match[3], 1);
      const alpha = parseModernAlpha(match[4]);
      const [r, g, bl] = hwbToSrgb(H / 360, W, B);
      return rgbFloatToInt(r, g, bl, alpha);
    }
  }
  throw new Error(`invalid color string ${color} provided`);
}
var opacity = (c2) => {
  return (c2 >> 24 & 255) / 255;
};
var red = (c2) => {
  return c2 >> 16 & 255;
};
var green = (c2) => {
  return c2 >> 8 & 255;
};
var blue = (c2) => {
  return c2 & 255;
};
var rgbaColor = (r, g, b2, alpha) => {
  return `rgba(${r}, ${g}, ${b2}, ${alpha})`;
};
function processColor(color) {
  const normalizedColor = normalizeColor(color);
  return (normalizedColor << 24 | normalizedColor >>> 8) >>> 0;
}
var interpolateColorsRGB = (value, inputRange, colors, options) => {
  const [r, g, b2, a2] = [red, green, blue, opacity].map((f) => {
    const unrounded = interpolate2(value, inputRange, colors.map((c2) => f(c2)), {
      easing: options?.easing,
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
      posterize: options?.posterize
    });
    if (f === opacity) {
      return Number(unrounded.toFixed(3));
    }
    return Math.round(unrounded);
  });
  return rgbaColor(r, g, b2, a2);
};
var interpolateColors2 = (input, inputRange, outputRange, options) => {
  if (typeof input === "undefined") {
    throw new TypeError("input can not be undefined");
  }
  if (typeof inputRange === "undefined") {
    throw new TypeError("inputRange can not be undefined");
  }
  if (typeof outputRange === "undefined") {
    throw new TypeError("outputRange can not be undefined");
  }
  if (inputRange.length !== outputRange.length) {
    throw new TypeError("inputRange (" + inputRange.length + " values provided) and outputRange (" + outputRange.length + " values provided) must have the same length");
  }
  const processedOutputRange = outputRange.map((c2) => processColor(c2));
  return interpolateColorsRGB(input, inputRange, processedOutputRange, options);
};
var findPropsToDelete = ({
  schema,
  key,
  value
}) => {
  const fieldSchema = schema[key];
  if (!fieldSchema) {
    throw new Error("Key " + JSON.stringify(key) + " not found in schema");
  }
  if (typeof value !== "string") {
    throw new Error("Value must be a string, but is " + JSON.stringify(value));
  }
  if (fieldSchema.type !== "enum") {
    throw new Error("Key " + JSON.stringify(key) + " is not an enum");
  }
  const currentVariant = fieldSchema.variants[value];
  if (!currentVariant) {
    throw new Error("Value for " + JSON.stringify(key) + " must be one of " + Object.keys(fieldSchema.variants).map((v) => JSON.stringify(v)).join(", ") + ", got " + JSON.stringify(value));
  }
  const otherVariants = Object.keys(fieldSchema.variants).filter((v) => v !== value);
  const otherKeys = /* @__PURE__ */ new Set();
  for (const variant of otherVariants) {
    const otherVariant = fieldSchema.variants[variant];
    const keys = Object.keys(otherVariant);
    for (const k of keys) {
      otherKeys.add(k);
    }
  }
  return [...otherKeys];
};
var validatePreferredEffectBackend = (value) => {
  if (value !== "auto" && value !== "webgpu" && value !== "webgl2" && value !== "2d") {
    throw new TypeError(`preferredEffectBackend must be "auto", "webgpu", "webgl2" or "2d", got ${String(value)}`);
  }
  return value;
};
var getAbsoluteSrc = (relativeSrc) => {
  if (typeof window === "undefined") {
    return relativeSrc;
  }
  if (relativeSrc.startsWith("http://") || relativeSrc.startsWith("https://") || relativeSrc.startsWith("file://") || relativeSrc.startsWith("blob:") || relativeSrc.startsWith("data:")) {
    return relativeSrc;
  }
  return new URL(relativeSrc, document.baseURI).href;
};
function mulberry32(a2) {
  let t = a2 + 1831565813;
  t = Math.imul(t ^ t >>> 15, t | 1);
  t ^= t + Math.imul(t ^ t >>> 7, t | 61);
  return ((t ^ t >>> 14) >>> 0) / 4294967296;
}
function hashCode(str) {
  let i = 0;
  let chr = 0;
  let hash = 0;
  for (i = 0; i < str.length; i++) {
    chr = str.charCodeAt(i);
    hash = (hash << 5) - hash + chr;
    hash |= 0;
  }
  return hash;
}
var random2 = (seed, dummy) => {
  if (dummy !== void 0) {
    throw new TypeError("random() takes only one argument");
  }
  if (seed === null) {
    return Math.random();
  }
  if (typeof seed === "string") {
    return mulberry32(hashCode(seed));
  }
  if (typeof seed === "number") {
    return mulberry32(seed * 1e10);
  }
  throw new Error("random() argument must be a number or a string");
};
var getExpectedMediaFrameUncorrected = ({
  frame,
  playbackRate,
  startFrom
}) => {
  return interpolate2(frame, [-1, startFrom, startFrom + 1], [-1, startFrom, startFrom + playbackRate]);
};
var getMediaTime = ({
  fps,
  frame,
  playbackRate,
  startFrom
}) => {
  const expectedFrame = getExpectedMediaFrameUncorrected({
    frame,
    playbackRate,
    startFrom
  });
  const msPerFrame = 1e3 / fps;
  return expectedFrame * msPerFrame / 1e3;
};
var validCodecs = [
  "h264",
  "h265",
  "vp8",
  "vp9",
  "av1",
  "mp3",
  "aac",
  "wav",
  "prores",
  "h264-mkv",
  "h264-ts",
  "gif"
];
function validateCodec(defaultCodec, location, name) {
  if (typeof defaultCodec === "undefined") {
    return;
  }
  if (typeof defaultCodec !== "string") {
    throw new TypeError(`The "${name}" prop ${location} must be a string, but you passed a value of type ${typeof defaultCodec}.`);
  }
  if (!validCodecs.includes(defaultCodec)) {
    throw new Error(`The "${name}" prop ${location} must be one of ${validCodecs.join(", ")}, but you passed ${defaultCodec}.`);
  }
}
var getOffthreadVideoSource = ({
  src,
  transparent,
  currentTime,
  toneMapped
}) => {
  return `http://localhost:${window.remotion_proxyPort}/proxy?src=${encodeURIComponent(getAbsoluteSrc(src))}&time=${encodeURIComponent(Math.max(0, currentTime))}&transparent=${String(transparent)}&toneMapped=${String(toneMapped)}`;
};

// node_modules/remotion/dist/esm/index.mjs
var import_react = __toESM(require_react(), 1);
var import_react2 = __toESM(require_react(), 1);
var import_react_dom = __toESM(require_react_dom(), 1);
var import_react3 = __toESM(require_react(), 1);
var import_jsx_runtime = __toESM(require_jsx_runtime(), 1);
var import_react4 = __toESM(require_react(), 1);
var import_react5 = __toESM(require_react(), 1);
var import_react6 = __toESM(require_react(), 1);
var import_jsx_runtime2 = __toESM(require_jsx_runtime(), 1);
var import_react7 = __toESM(require_react(), 1);
var import_react8 = __toESM(require_react(), 1);
var import_react9 = __toESM(require_react(), 1);
var import_react10 = __toESM(require_react(), 1);
var import_react11 = __toESM(require_react(), 1);
var import_jsx_runtime3 = __toESM(require_jsx_runtime(), 1);
var import_react12 = __toESM(require_react(), 1);
var import_jsx_runtime4 = __toESM(require_jsx_runtime(), 1);
var import_react13 = __toESM(require_react(), 1);
var import_jsx_runtime5 = __toESM(require_jsx_runtime(), 1);
var import_react14 = __toESM(require_react(), 1);
var import_react15 = __toESM(require_react(), 1);
var import_react16 = __toESM(require_react(), 1);
var import_react17 = __toESM(require_react(), 1);
var import_react18 = __toESM(require_react(), 1);
var import_react19 = __toESM(require_react(), 1);
var import_react20 = __toESM(require_react(), 1);
var import_react21 = __toESM(require_react(), 1);
var import_jsx_runtime6 = __toESM(require_jsx_runtime(), 1);
var import_jsx_runtime7 = __toESM(require_jsx_runtime(), 1);
var import_jsx_runtime8 = __toESM(require_jsx_runtime(), 1);
var import_react22 = __toESM(require_react(), 1);
var import_react23 = __toESM(require_react(), 1);
var React11 = __toESM(require_react(), 1);
var import_react24 = __toESM(require_react(), 1);
var React12 = __toESM(require_react(), 1);
var import_jsx_runtime9 = __toESM(require_jsx_runtime(), 1);
var import_react25 = __toESM(require_react(), 1);
var import_react26 = __toESM(require_react(), 1);
var import_react27 = __toESM(require_react(), 1);
var import_react28 = __toESM(require_react(), 1);
var import_react29 = __toESM(require_react(), 1);
var import_react30 = __toESM(require_react(), 1);
var import_react31 = __toESM(require_react(), 1);
var import_jsx_runtime10 = __toESM(require_jsx_runtime(), 1);
var import_react32 = __toESM(require_react(), 1);
var import_react33 = __toESM(require_react(), 1);
var import_react34 = __toESM(require_react(), 1);
var import_react35 = __toESM(require_react(), 1);
var import_jsx_runtime11 = __toESM(require_jsx_runtime(), 1);
var import_react36 = __toESM(require_react(), 1);
var import_react37 = __toESM(require_react(), 1);
var import_react38 = __toESM(require_react(), 1);
var import_jsx_runtime12 = __toESM(require_jsx_runtime(), 1);
var import_react39 = __toESM(require_react(), 1);
var import_jsx_runtime13 = __toESM(require_jsx_runtime(), 1);
var import_react40 = __toESM(require_react(), 1);
var import_react41 = __toESM(require_react(), 1);
var import_react42 = __toESM(require_react(), 1);
var import_jsx_runtime14 = __toESM(require_jsx_runtime(), 1);
var import_react43 = __toESM(require_react(), 1);
var import_jsx_runtime15 = __toESM(require_jsx_runtime(), 1);
var import_react44 = __toESM(require_react(), 1);
var import_jsx_runtime16 = __toESM(require_jsx_runtime(), 1);
var import_jsx_runtime17 = __toESM(require_jsx_runtime(), 1);
var import_react45 = __toESM(require_react(), 1);
var import_react46 = __toESM(require_react(), 1);
var import_react47 = __toESM(require_react(), 1);
var import_react48 = __toESM(require_react(), 1);
var import_react49 = __toESM(require_react(), 1);
var import_react50 = __toESM(require_react(), 1);
var import_react51 = __toESM(require_react(), 1);
var import_react52 = __toESM(require_react(), 1);
var import_react53 = __toESM(require_react(), 1);
var import_react54 = __toESM(require_react(), 1);
var import_jsx_runtime18 = __toESM(require_jsx_runtime(), 1);
var import_react55 = __toESM(require_react(), 1);
var import_jsx_runtime19 = __toESM(require_jsx_runtime(), 1);
var import_react56 = __toESM(require_react(), 1);
var import_react57 = __toESM(require_react(), 1);
var import_react58 = __toESM(require_react(), 1);
var import_jsx_runtime20 = __toESM(require_jsx_runtime(), 1);
var import_react59 = __toESM(require_react(), 1);
var import_react60 = __toESM(require_react(), 1);
var import_react61 = __toESM(require_react(), 1);
var import_jsx_runtime21 = __toESM(require_jsx_runtime(), 1);
var import_jsx_runtime22 = __toESM(require_jsx_runtime(), 1);
var import_react62 = __toESM(require_react(), 1);
var import_react63 = __toESM(require_react(), 1);
var import_react64 = __toESM(require_react(), 1);
var import_jsx_runtime23 = __toESM(require_jsx_runtime(), 1);
var import_react65 = __toESM(require_react(), 1);
var import_react66 = __toESM(require_react(), 1);
var import_jsx_runtime24 = __toESM(require_jsx_runtime(), 1);
var import_react67 = __toESM(require_react(), 1);
var import_react68 = __toESM(require_react(), 1);
var import_jsx_runtime25 = __toESM(require_jsx_runtime(), 1);
var import_react69 = __toESM(require_react(), 1);
var import_jsx_runtime26 = __toESM(require_jsx_runtime(), 1);
var import_react70 = __toESM(require_react(), 1);
var import_react71 = __toESM(require_react(), 1);
var import_react72 = __toESM(require_react(), 1);
var import_react73 = __toESM(require_react(), 1);
var import_react74 = __toESM(require_react(), 1);
var import_jsx_runtime27 = __toESM(require_jsx_runtime(), 1);
var import_react75 = __toESM(require_react(), 1);
var import_react76 = __toESM(require_react(), 1);
var import_react77 = __toESM(require_react(), 1);
var import_react78 = __toESM(require_react(), 1);
var import_react79 = __toESM(require_react(), 1);
var import_react80 = __toESM(require_react(), 1);
var import_react81 = __toESM(require_react(), 1);
var import_react82 = __toESM(require_react(), 1);
var import_jsx_runtime28 = __toESM(require_jsx_runtime(), 1);
var import_react83 = __toESM(require_react(), 1);
var import_react84 = __toESM(require_react(), 1);
var import_react85 = __toESM(require_react(), 1);
var import_react86 = __toESM(require_react(), 1);
var import_react87 = __toESM(require_react(), 1);
var import_react_dom2 = __toESM(require_react_dom(), 1);
var import_jsx_runtime29 = __toESM(require_jsx_runtime(), 1);
var import_react88 = __toESM(require_react(), 1);
var import_jsx_runtime30 = __toESM(require_jsx_runtime(), 1);
var import_jsx_runtime31 = __toESM(require_jsx_runtime(), 1);
var import_react89 = __toESM(require_react(), 1);
var import_jsx_runtime32 = __toESM(require_jsx_runtime(), 1);
var import_react90 = __toESM(require_react(), 1);
var import_react91 = __toESM(require_react(), 1);
var import_jsx_runtime33 = __toESM(require_jsx_runtime(), 1);
var import_jsx_runtime34 = __toESM(require_jsx_runtime(), 1);
var import_react92 = __toESM(require_react(), 1);
var import_jsx_runtime35 = __toESM(require_jsx_runtime(), 1);
var import_react93 = __toESM(require_react(), 1);
var import_jsx_runtime36 = __toESM(require_jsx_runtime(), 1);
var import_react94 = __toESM(require_react(), 1);
var import_jsx_runtime37 = __toESM(require_jsx_runtime(), 1);
var import_react95 = __toESM(require_react(), 1);
var import_jsx_runtime38 = __toESM(require_jsx_runtime(), 1);
var import_react96 = __toESM(require_react(), 1);
var import_react97 = __toESM(require_react(), 1);
var import_react98 = __toESM(require_react(), 1);
var import_react99 = __toESM(require_react(), 1);
var import_jsx_runtime39 = __toESM(require_jsx_runtime(), 1);
var import_jsx_runtime40 = __toESM(require_jsx_runtime(), 1);
var import_react100 = __toESM(require_react(), 1);
var import_react101 = __toESM(require_react(), 1);
var import_react102 = __toESM(require_react(), 1);
var import_jsx_runtime41 = __toESM(require_jsx_runtime(), 1);
var import_react103 = __toESM(require_react(), 1);
var import_react104 = __toESM(require_react(), 1);
var import_react105 = __toESM(require_react(), 1);
var import_jsx_runtime42 = __toESM(require_jsx_runtime(), 1);
var import_react106 = __toESM(require_react(), 1);
var import_react107 = __toESM(require_react(), 1);
var import_react108 = __toESM(require_react(), 1);
var import_jsx_runtime43 = __toESM(require_jsx_runtime(), 1);
var import_react109 = __toESM(require_react(), 1);
var import_react110 = __toESM(require_react(), 1);
var import_jsx_runtime44 = __toESM(require_jsx_runtime(), 1);
var import_jsx_runtime45 = __toESM(require_jsx_runtime(), 1);
var import_react111 = __toESM(require_react(), 1);
var import_jsx_runtime46 = __toESM(require_jsx_runtime(), 1);
var import_react112 = __toESM(require_react(), 1);
var import_react113 = __toESM(require_react(), 1);
var import_jsx_runtime47 = __toESM(require_jsx_runtime(), 1);
var import_react114 = __toESM(require_react(), 1);
var import_react115 = __toESM(require_react(), 1);
var import_react116 = __toESM(require_react(), 1);
var import_jsx_runtime48 = __toESM(require_jsx_runtime(), 1);
var import_jsx_runtime49 = __toESM(require_jsx_runtime(), 1);
var __defProp2 = Object.defineProperty;
var __returnValue = (v) => v;
function __exportSetter(name, newValue) {
  this[name] = __returnValue.bind(null, newValue);
}
var __export = (target, all) => {
  for (var name in all)
    __defProp2(target, name, {
      get: all[name],
      enumerable: true,
      configurable: true,
      set: __exportSetter.bind(all, name)
    });
};
var exports_timeline_position_state = {};
__export(exports_timeline_position_state, {
  clampFrameToCompositionRange: () => clampFrameToCompositionRange,
  getFrameForComposition: () => getFrameForComposition,
  getInitialFrameState: () => getInitialFrameState,
  persistCurrentFrame: () => persistCurrentFrame,
  useAbsoluteTimelinePosition: () => useAbsoluteTimelinePosition,
  useBuffering: () => useBuffering,
  useIsInsideFreeze: () => useIsInsideFreeze,
  usePlaybackRate: () => usePlaybackRate,
  usePlaying: () => usePlaying,
  useTimelineContext: () => useTimelineContext,
  useTimelinePosition: () => useTimelinePosition,
  useTimelinePositionWithOptionalSubscription: () => useTimelinePositionWithOptionalSubscription,
  useTimelineSeekFrame: () => useTimelineSeekFrame,
  useTimelineSetFrameWithoutSeek: () => useTimelineSetFrameWithoutSeek
});
var exports_default_css = {};
__export(exports_default_css, {
  OBJECTFIT_CONTAIN_CLASS_NAME: () => OBJECTFIT_CONTAIN_CLASS_NAME,
  injectCSS: () => injectCSS,
  makeDefaultPreviewCSS: () => makeDefaultPreviewCSS
});
if (typeof import_react.createContext !== "function") {
  const err = [
    'Remotion requires React.createContext, but it is "undefined".',
    'If you are in a React Server Component, turn it into a client component by adding "use client" at the top of the file.',
    "",
    "Before:",
    '  import {useCurrentFrame} from "remotion";',
    "",
    "After:",
    '  "use client";',
    '  import {useCurrentFrame} from "remotion";'
  ];
  throw new Error(err.join(`
`));
}
var CanUseRemotionHooks = (0, import_react3.createContext)(false);
var CanUseRemotionHooksProvider = ({ children }) => {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CanUseRemotionHooks.Provider, {
    value: true,
    children
  });
};
var COMMITTED_METADATA_PROP = "_remotionCommitMetadata";
var COMMIT_ORDER_EVENT = "remotion:commit-order";
var COMMIT_REGISTRATION_ERROR_EVENT = "remotion:commit-registration-error";
var COMMIT_OBSERVER_INSTALLATION_MARKER = /* @__PURE__ */ Symbol.for("remotion.commit-order-observer-installed");
var COMMIT_OBSERVER_FAILURE_MARKER = /* @__PURE__ */ Symbol.for("remotion.commit-registration-observer-failed");
var isCommitRegistrationObserverInstalled = () => {
  if (typeof window === "undefined") {
    return false;
  }
  const hook = Reflect.get(window, "__REACT_DEVTOOLS_GLOBAL_HOOK__");
  return typeof hook === "object" && hook !== null && Reflect.get(hook, "isDisabled") !== true && Reflect.get(hook, COMMIT_OBSERVER_INSTALLATION_MARKER) === true && Reflect.get(hook, COMMIT_OBSERVER_FAILURE_MARKER) !== true;
};
var getCompositionAndFolderOrderKey = (item) => `${item.type}:${item.id}`;
var getFolderOrderId = ({
  name,
  parent
}) => [parent, name].filter(Boolean).join("/");
var withCommittedMetadata = (provider) => provider;
var CommittedMetadataProvider = withCommittedMetadata((0, import_react4.createContext)(null).Provider);
var CommittedMetadataInternals = {
  metadataProp: COMMITTED_METADATA_PROP,
  eventName: COMMIT_ORDER_EVENT,
  installationMarker: COMMIT_OBSERVER_INSTALLATION_MARKER,
  failureMarker: COMMIT_OBSERVER_FAILURE_MARKER,
  registrationErrorEventName: COMMIT_REGISTRATION_ERROR_EVENT
};
var IsInsideSeriesContext = (0, import_react6.createContext)(false);
var IsInsideSeriesContainer = ({ children }) => {
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(IsInsideSeriesContext.Provider, {
    value: true,
    children
  });
};
var IsNotInsideSeriesProvider = ({ children }) => {
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(IsInsideSeriesContext.Provider, {
    value: false,
    children
  });
};
var useRequireToBeInsideSeries = () => {
  const isInsideSeries = import_react6.default.useContext(IsInsideSeriesContext);
  if (!isInsideSeries) {
    throw new Error("This component must be inside a <Series /> component.");
  }
};
var componentIdentityResolver = null;
var setComponentIdentityResolver = (resolver) => {
  componentIdentityResolver = resolver;
};
var resolveComponentIdentity = (component) => {
  return componentIdentityResolver?.(component) ?? component;
};
var getSingleChildElement = (children) => {
  const mountedChildren = import_react5.default.Children.toArray(children);
  if (mountedChildren.length !== 1) {
    return null;
  }
  const child = mountedChildren[0];
  if (!import_react5.default.isValidElement(child)) {
    return null;
  }
  if (child.type === IsNotInsideSeriesProvider) {
    return getSingleChildElement(child.props.children);
  }
  if (typeof child.type !== "function" && typeof child.type !== "object") {
    return null;
  }
  return child;
};
var getSingleChildComponent = (children) => {
  const child = getSingleChildElement(children);
  return child === null ? null : resolveComponentIdentity(child.type);
};
var getSingleChildProps = (children) => {
  return getSingleChildElement(children)?.props ?? null;
};
var CompositionRegistryFallbackContext = (0, import_react7.createContext)(null);
var useIsomorphicLayoutEffect = typeof window === "undefined" ? import_react7.useEffect : import_react7.useLayoutEffect;
var createEntryCleanup = (registry, identity) => {
  if (registry === null) {
    return;
  }
  return () => {
    registry.entries.delete(identity);
    registry.notifyCommit();
  };
};
var useCommittedCompositionEntry = (entry) => {
  const registry = (0, import_react7.useContext)(CompositionRegistryFallbackContext);
  const key = (0, import_react7.useRef)({});
  useIsomorphicLayoutEffect(() => {
    if (registry === null) {
      return;
    }
    if (entry === null) {
      registry.entries.delete(key.current);
    } else {
      registry.entries.set(key.current, entry);
    }
    registry.notifyCommit();
  }, [entry, registry]);
  useIsomorphicLayoutEffect(createEntryCleanup.bind(null, registry, key.current), [registry]);
};
var CompositionRenderErrorContext = (0, import_react8.createContext)({
  setError: () => {
  },
  clearError: () => {
  }
});
var getHot = () => {
  try {
    if (typeof __webpack_module__ === "undefined") {
      return null;
    }
    return __webpack_module__.hot ?? null;
  } catch {
    return null;
  }
};
var CompositionErrorBoundary = class extends import_react9.default.Component {
  constructor() {
    super(...arguments);
    __publicField(this, "state", { hasError: false });
    __publicField(this, "hmrStatusHandler", null);
  }
  static getDerivedStateFromError() {
    return { hasError: true };
  }
  componentDidCatch(error2) {
    this.props.onError(error2);
    this.subscribeToHmrReset();
  }
  componentDidMount() {
    if (!this.state.hasError) {
      this.props.onClear();
    }
  }
  componentDidUpdate(_prevProps, prevState) {
    if (prevState.hasError && !this.state.hasError) {
      this.props.onClear();
    }
  }
  componentWillUnmount() {
    this.unsubscribeFromHmrReset();
  }
  subscribeToHmrReset() {
    if (this.hmrStatusHandler) {
      return;
    }
    const hot = getHot();
    if (!hot) {
      return;
    }
    const handler = (status) => {
      if (status !== "idle") {
        return;
      }
      this.unsubscribeFromHmrReset();
      this.setState({ hasError: false });
    };
    this.hmrStatusHandler = handler;
    hot.addStatusHandler(handler);
  }
  unsubscribeFromHmrReset() {
    const handler = this.hmrStatusHandler;
    if (!handler) {
      return;
    }
    this.hmrStatusHandler = null;
    const hot = getHot();
    if (!hot) {
      return;
    }
    hot.removeStatusHandler(handler);
  }
  render() {
    if (this.state.hasError) {
      return null;
    }
    return this.props.children;
  }
};
var getAssetPreviewCompositionId = (asset) => `asset:${asset}`;
var defaultCompositionManagerContext = {
  compositions: [],
  folders: [],
  currentCompositionMetadata: null,
  currentAssetMetadata: null,
  canvasContent: null
};
var CompositionManager = (0, import_react10.createContext)(defaultCompositionManagerContext);
var CompositionManagerRefContext = (0, import_react10.createContext)({ current: defaultCompositionManagerContext });
var CompositionSetters = (0, import_react10.createContext)({
  setCanvasContent: () => {
    return;
  },
  setCurrentAssetMetadata: () => {
    return;
  },
  onlyRenderComposition: null
});
var getRegex = () => /^([a-zA-Z0-9-\u4E00-\u9FFF])+$/g;
var isFolderNameValid = (name) => name.match(getRegex());
var validateFolderName = (name) => {
  if (name === void 0 || name === null) {
    throw new TypeError("You must pass a name to a <Folder />.");
  }
  if (typeof name !== "string") {
    throw new TypeError(`The "name" you pass into <Folder /> must be a string. Got: ${typeof name}`);
  }
  if (!isFolderNameValid(name)) {
    throw new Error(`Folder name can only contain a-z, A-Z, 0-9 and -. You passed ${name}`);
  }
};
var invalidFolderNameErrorMessage = `Folder name must match ${String(getRegex())}`;
var FolderContext = (0, import_react11.createContext)({
  folderName: null,
  parentName: null
});
var FolderContextProvider = withCommittedMetadata(FolderContext.Provider);
var Folder = (props) => {
  const { name, children } = props;
  const parent = (0, import_react11.useContext)(FolderContext);
  const stack = props._remotionInternalStack ?? null;
  validateFolderName(name);
  const parentNameArr = [parent.parentName, parent.folderName].filter(truthy);
  const parentName = parentNameArr.length === 0 ? null : parentNameArr.join("/");
  const value = (0, import_react11.useMemo)(() => {
    return {
      folderName: name,
      parentName
    };
  }, [name, parentName]);
  const registration = (0, import_react11.useMemo)(() => ({ name, parent: parentName, order: null, stack }), [name, parentName, stack]);
  const metadata = (0, import_react11.useMemo)(() => ({
    type: "folder",
    id: getFolderOrderId({ name, parent: parentName }),
    value: registration
  }), [name, parentName, registration]);
  useCommittedCompositionEntry(metadata);
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(FolderContextProvider, {
    value,
    _remotionCommitMetadata: metadata,
    children
  });
};
var IsPlayerContext = (0, import_react12.createContext)(false);
var IsPlayerContextProvider = ({
  children
}) => {
  return /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(IsPlayerContext.Provider, {
    value: true,
    children
  });
};
var useIsPlayer = () => {
  return (0, import_react12.useContext)(IsPlayerContext);
};
var hasTailwindClassName = ({
  className,
  classPrefix,
  type
}) => {
  if (!className) {
    return false;
  }
  if (type === "exact") {
    const split = className.split(" ");
    return classPrefix.some((token) => {
      return split.some((part) => {
        return part.trim() === token || part.trim().endsWith(`:${token}`) || part.trim().endsWith(`!${token}`);
      });
    });
  }
  return classPrefix.some((prefix) => {
    return className.startsWith(prefix) || className.includes(` ${prefix}`) || className.includes(`!${prefix}`) || className.includes(`:${prefix}`);
  });
};
var AbsoluteFillElementRefForwarding = (props, ref) => {
  const { style, ...other } = props;
  const defaultStyle = (0, import_react13.useMemo)(() => {
    return {
      position: "absolute",
      top: hasTailwindClassName({
        className: other.className,
        classPrefix: ["top-", "inset-"],
        type: "prefix"
      }) ? void 0 : 0,
      left: hasTailwindClassName({
        className: other.className,
        classPrefix: ["left-", "inset-"],
        type: "prefix"
      }) ? void 0 : 0,
      right: hasTailwindClassName({
        className: other.className,
        classPrefix: ["right-", "inset-"],
        type: "prefix"
      }) ? void 0 : 0,
      bottom: hasTailwindClassName({
        className: other.className,
        classPrefix: ["bottom-", "inset-"],
        type: "prefix"
      }) ? void 0 : 0,
      width: hasTailwindClassName({
        className: other.className,
        classPrefix: ["w-"],
        type: "prefix"
      }) ? void 0 : "100%",
      height: hasTailwindClassName({
        className: other.className,
        classPrefix: ["h-"],
        type: "prefix"
      }) ? void 0 : "100%",
      display: hasTailwindClassName({
        className: other.className,
        classPrefix: [
          "block",
          "inline-block",
          "inline",
          "flex",
          "inline-flex",
          "flow-root",
          "grid",
          "inline-grid",
          "contents",
          "list-item",
          "hidden"
        ],
        type: "exact"
      }) ? void 0 : "flex",
      flexDirection: hasTailwindClassName({
        className: other.className,
        classPrefix: [
          "flex-row",
          "flex-col",
          "flex-row-reverse",
          "flex-col-reverse"
        ],
        type: "exact"
      }) ? void 0 : "column"
    };
  }, [other.className]);
  const actualStyle = (0, import_react13.useMemo)(() => {
    return {
      ...defaultStyle,
      ...style
    };
  }, [defaultStyle, style]);
  return /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("div", {
    ref,
    style: actualStyle,
    ...other
  });
};
var AbsoluteFillElement = import_react13.default.memo((0, import_react13.forwardRef)(AbsoluteFillElementRefForwarding));
var _portalNode = null;
var portalNodeCurrentScale = 1;
var portalNodeCurrentScaleListeners = [];
var getPortalNodeCurrentScale = () => portalNodeCurrentScale;
var subscribeToPortalNodeCurrentScale = (listener) => {
  portalNodeCurrentScaleListeners.push(listener);
  return () => {
    portalNodeCurrentScaleListeners = portalNodeCurrentScaleListeners.filter((currentListener) => currentListener !== listener);
  };
};
var setPortalNodeCurrentScale = (scale) => {
  if (portalNodeCurrentScale === scale) {
    return;
  }
  portalNodeCurrentScale = scale;
  for (const listener of portalNodeCurrentScaleListeners) {
    listener();
  }
};
var portalNode = () => {
  if (!_portalNode) {
    if (typeof document === "undefined") {
      throw new Error("Tried to call an API that only works in the browser from outside the browser");
    }
    _portalNode = document.createElement("div");
    _portalNode.style.position = "absolute";
    _portalNode.style.top = "0px";
    _portalNode.style.left = "0px";
    _portalNode.style.right = "0px";
    _portalNode.style.bottom = "0px";
    _portalNode.style.width = "100%";
    _portalNode.style.height = "100%";
    _portalNode.style.display = "flex";
    _portalNode.style.flexDirection = "column";
    const containerNode = document.createElement("div");
    containerNode.style.position = "fixed";
    containerNode.style.top = "-999999px";
    containerNode.appendChild(_portalNode);
    document.body.appendChild(containerNode);
  }
  return _portalNode;
};
var RemotionEnvironmentContext = import_react16.default.createContext(null);
var useRemotionEnvironment = () => {
  const context = (0, import_react15.useContext)(RemotionEnvironmentContext);
  const [env] = (0, import_react15.useState)(() => getRemotionEnvironment2());
  return context ?? env;
};
var SequenceContext = (0, import_react18.createContext)(null);
var getKey = () => {
  return `remotion_inputPropsOverride` + window.location.origin;
};
var getInputPropsOverride = () => {
  if (typeof localStorage === "undefined")
    return null;
  const override = localStorage.getItem(getKey());
  if (!override)
    return null;
  return JSON.parse(override);
};
var setInputPropsOverride = (override) => {
  if (typeof localStorage === "undefined")
    return;
  if (override === null) {
    localStorage.removeItem(getKey());
    return;
  }
  localStorage.setItem(getKey(), JSON.stringify(override));
};
var didWarnSSRImport = false;
var warnOnceSSRImport = () => {
  if (didWarnSSRImport) {
    return;
  }
  didWarnSSRImport = true;
  console.warn("Called `getInputProps()` on the server. This function is not available server-side and has returned an empty object.");
  console.warn("To hide this warning, don't call this function on the server:");
  console.warn("  typeof window === 'undefined' ? {} : getInputProps()");
};
var getInputProps = () => {
  if (typeof window === "undefined") {
    warnOnceSSRImport();
    return {};
  }
  if (getRemotionEnvironment2().isPlayer) {
    throw new Error("You cannot call `getInputProps()` from a <Player>. Instead, the props are available as React props from component that you passed as `component` prop.");
  }
  const override = getInputPropsOverride();
  if (override) {
    return override;
  }
  if (typeof window === "undefined" || typeof window.remotion_inputProps === "undefined") {
    throw new Error("Cannot call `getInputProps()` - window.remotion_inputProps is not set. This API is only available if you are in the Studio, or while you are rendering server-side.");
  }
  const param = window.remotion_inputProps;
  if (!param) {
    return {};
  }
  const parsed = deserializeJSONWithSpecialTypes(param);
  return parsed;
};
var EditorPropsContext = (0, import_react21.createContext)({
  props: {},
  updateProps: () => {
    throw new Error("Not implemented");
  }
});
var timeValueRef = import_react21.default.createRef();
var EditorPropsProvider = ({ children }) => {
  const [props, setProps] = import_react21.default.useState({});
  const updateProps = (0, import_react21.useCallback)(({
    defaultProps,
    id,
    newProps
  }) => {
    setProps((prev) => {
      return {
        ...prev,
        [id]: typeof newProps === "function" ? newProps(prev[id] ?? defaultProps) : newProps
      };
    });
  }, []);
  const ctx = (0, import_react21.useMemo)(() => {
    return { props, updateProps };
  }, [props, updateProps]);
  return /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(EditorPropsContext.Provider, {
    value: ctx,
    children
  });
};
var ResolveCompositionContext = (0, import_react20.createContext)(null);
var resolveCompositionsRef = (0, import_react20.createRef)();
var needsResolution = (composition) => {
  return Boolean(composition.calculateMetadata);
};
var useResolvedVideoConfig = (preferredCompositionId) => {
  const context = (0, import_react20.useContext)(ResolveCompositionContext);
  const { props: allEditorProps } = (0, import_react20.useContext)(EditorPropsContext);
  const {
    compositions,
    canvasContent,
    currentCompositionMetadata,
    currentAssetMetadata
  } = (0, import_react20.useContext)(CompositionManager);
  const currentComposition = canvasContent?.type === "composition" ? canvasContent.compositionId : null;
  const compositionId = preferredCompositionId ?? currentComposition;
  const composition = compositions.find((c2) => c2.id === compositionId);
  const selectedEditorProps = (0, import_react20.useMemo)(() => {
    return composition ? allEditorProps[composition.id] ?? {} : {};
  }, [allEditorProps, composition]);
  const env = useRemotionEnvironment();
  return (0, import_react20.useMemo)(() => {
    if (preferredCompositionId === null && canvasContent?.type === "asset" && currentAssetMetadata?.asset === canvasContent.asset) {
      return {
        type: "success",
        metadataSource: null,
        result: {
          ...currentAssetMetadata,
          id: getAssetPreviewCompositionId(canvasContent.asset),
          defaultProps: {}
        }
      };
    }
    if (!composition) {
      return null;
    }
    if (currentCompositionMetadata) {
      return {
        type: "success",
        metadataSource: null,
        result: {
          ...currentCompositionMetadata,
          id: composition.id,
          defaultProps: composition.defaultProps ?? {}
        }
      };
    }
    if (!needsResolution(composition)) {
      validateDurationInFrames(composition.durationInFrames, {
        allowFloats: false,
        component: `in <Composition id="${composition.id}">`
      });
      validateFps(composition.fps, `in <Composition id="${composition.id}">`, false);
      validateDimension(composition.width, "width", `in <Composition id="${composition.id}">`);
      validateDimension(composition.height, "height", `in <Composition id="${composition.id}">`);
      return {
        type: "success",
        metadataSource: null,
        result: {
          width: composition.width,
          height: composition.height,
          fps: composition.fps,
          id: composition.id,
          durationInFrames: composition.durationInFrames,
          defaultProps: composition.defaultProps ?? {},
          props: {
            ...composition.defaultProps ?? {},
            ...selectedEditorProps ?? {},
            ...typeof window === "undefined" || env.isPlayer || !window.remotion_inputProps ? {} : getInputProps() ?? {}
          },
          defaultCodec: null,
          defaultOutName: null,
          defaultVideoImageFormat: null,
          defaultPixelFormat: null,
          defaultProResProfile: null,
          defaultSampleRate: null
        }
      };
    }
    if (!context) {
      return null;
    }
    if (!context[composition.id]) {
      return null;
    }
    return context[composition.id];
  }, [
    composition,
    canvasContent,
    context,
    currentAssetMetadata,
    currentCompositionMetadata,
    preferredCompositionId,
    selectedEditorProps,
    env.isPlayer
  ]);
};
var AssetPreviewComposition = () => null;
var VideoContext = (0, import_react19.createContext)(null);
var VideoProvider = ({ children }) => {
  const {
    canvasContent,
    compositions,
    currentCompositionMetadata,
    currentAssetMetadata
  } = (0, import_react19.useContext)(CompositionManager);
  const selected = compositions.find((c2) => {
    return canvasContent?.type === "composition" && c2.id === canvasContent.compositionId;
  });
  const resolved = useResolvedVideoConfig(selected?.id ?? null);
  const video = (0, import_react19.useMemo)(() => {
    if (canvasContent?.type === "asset" && currentAssetMetadata?.asset === canvasContent.asset) {
      return {
        ...currentAssetMetadata,
        id: getAssetPreviewCompositionId(canvasContent.asset),
        defaultProps: {},
        component: AssetPreviewComposition
      };
    }
    if (!resolved) {
      return null;
    }
    if (resolved.type === "error") {
      return null;
    }
    if (resolved.type === "loading") {
      return null;
    }
    if (!selected) {
      return null;
    }
    return {
      ...resolved.result,
      defaultProps: selected.defaultProps ?? {},
      id: selected.id,
      ...currentCompositionMetadata ?? {},
      component: selected.component
    };
  }, [
    canvasContent,
    currentAssetMetadata,
    currentCompositionMetadata,
    resolved,
    selected
  ]);
  return /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(VideoContext.Provider, {
    value: video,
    children
  });
};
var useVideo = () => {
  return (0, import_react19.useContext)(VideoContext);
};
var useUnsafeVideoConfig = () => {
  const context = (0, import_react17.useContext)(SequenceContext);
  const ctxWidth = context?.width ?? null;
  const ctxHeight = context?.height ?? null;
  const ctxDuration = context?.durationInFrames ?? null;
  const video = useVideo();
  return (0, import_react17.useMemo)(() => {
    if (!video) {
      return null;
    }
    const {
      id,
      durationInFrames,
      fps,
      height,
      width,
      defaultProps,
      props,
      defaultCodec,
      defaultOutName,
      defaultVideoImageFormat,
      defaultPixelFormat,
      defaultProResProfile,
      defaultSampleRate
    } = video;
    return {
      id,
      width: ctxWidth ?? width,
      height: ctxHeight ?? height,
      fps,
      durationInFrames: ctxDuration ?? durationInFrames,
      defaultProps,
      props,
      defaultCodec,
      defaultOutName,
      defaultVideoImageFormat,
      defaultPixelFormat,
      defaultProResProfile,
      defaultSampleRate
    };
  }, [ctxDuration, ctxHeight, ctxWidth, video]);
};
var CurrentScaleContext = import_react14.default.createContext(null);
var PreviewSizeContext = (0, import_react14.createContext)({
  setSize: () => {
    return;
  },
  size: { size: "auto", translation: { x: 0, y: 0 } }
});
var calculateScale = ({
  canvasSize,
  compositionHeight,
  compositionWidth,
  previewSize
}) => {
  const heightRatio = canvasSize.height / compositionHeight;
  const widthRatio = canvasSize.width / compositionWidth;
  const ratio = Math.min(heightRatio, widthRatio);
  if (previewSize === "auto") {
    if (ratio === 0) {
      return 1;
    }
    return ratio;
  }
  return Number(previewSize);
};
var useCurrentScale = (options) => {
  const hasContext = import_react14.default.useContext(CurrentScaleContext);
  const zoomContext = import_react14.default.useContext(PreviewSizeContext);
  const config = useUnsafeVideoConfig();
  const env = useRemotionEnvironment();
  const [portalScale, setPortalScale] = import_react14.default.useState(getPortalNodeCurrentScale);
  import_react14.default.useEffect(() => {
    const update2 = () => setPortalScale(getPortalNodeCurrentScale());
    update2();
    return subscribeToPortalNodeCurrentScale(update2);
  }, []);
  if (hasContext === null || config === null || zoomContext === null) {
    if (options?.dontThrowIfOutsideOfRemotion) {
      return 1;
    }
    if (env.isRendering) {
      return 1;
    }
    throw new Error([
      "useCurrentScale() was called outside of a Remotion context.",
      "This hook can only be called in a component that is being rendered by Remotion.",
      "If you want to this hook to return 1 outside of Remotion, pass {dontThrowIfOutsideOfRemotion: true} as an option.",
      "If you think you called this hook in a Remotion component, make sure all versions of Remotion are aligned."
    ].join(`
`));
  }
  if (hasContext.type === "scale") {
    return hasContext.scale;
  }
  return portalScale;
};
var rotate = {
  transform: `rotate(90deg)`
};
var ICON_SIZE = 40;
var LABEL_SIZE = 14;
var label = {
  color: "rgba(255, 255, 255, 0.8)",
  fontFamily: "sans-serif"
};
var container = {
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: "#1f2428"
};
var content = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  animation: "anim 2s",
  animationFillMode: "forwards"
};
var Loading = () => {
  const scale = useCurrentScale({ dontThrowIfOutsideOfRemotion: true });
  return /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)(AbsoluteFillElement, {
    style: container,
    id: "remotion-comp-loading",
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("style", {
        type: "text/css",
        children: `
				@keyframes anim {
					from {
						opacity: 0
					}
					to {
						opacity: 1
					}
				}
			`
      }),
      /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)("div", {
        id: "remotion-comp-loading-content",
        style: content,
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("svg", {
            width: ICON_SIZE / scale,
            height: ICON_SIZE / scale,
            viewBox: "-100 -100 400 400",
            style: rotate,
            children: /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("path", {
              fill: "#555",
              stroke: "#555",
              strokeWidth: "100",
              strokeLinejoin: "round",
              d: "M 2 172 a 196 100 0 0 0 195 5 A 196 240 0 0 0 100 2.259 A 196 240 0 0 0 2 172 z"
            })
          }),
          /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)("p", {
            style: { ...label, fontSize: LABEL_SIZE / scale },
            children: [
              "Resolving ",
              "<Suspense>",
              "..."
            ]
          })
        ]
      })
    ]
  });
};
var getErrorStackWithMessage = (error2) => {
  const stack = error2.stack ?? "";
  return stack.startsWith("Error:") ? stack : `${error2.message}
${stack}`;
};
var isErrorLike = (err) => {
  if (err instanceof Error) {
    return true;
  }
  if (err === null) {
    return false;
  }
  if (typeof err !== "object") {
    return false;
  }
  if (!("stack" in err)) {
    return false;
  }
  if (typeof err.stack !== "string") {
    return false;
  }
  if (!("message" in err)) {
    return false;
  }
  if (typeof err.message !== "string") {
    return false;
  }
  return true;
};
function cancelRenderInternal(scope, err) {
  let error2;
  if (isErrorLike(err)) {
    error2 = err;
    if (!error2.stack) {
      error2.stack = new Error(error2.message).stack;
    }
  } else if (typeof err === "string") {
    error2 = Error(err);
  } else {
    error2 = Error("Rendering was cancelled");
  }
  if (scope) {
    scope.remotion_cancelledErrorObject = error2;
    scope.remotion_cancelledError = getErrorStackWithMessage(error2);
  }
  throw error2;
}
function cancelRender(err) {
  return cancelRenderInternal(typeof window !== "undefined" ? window : void 0, err);
}
var logLevels = ["trace", "verbose", "info", "warn", "error"];
var getNumberForLogLevel = (level) => {
  return logLevels.indexOf(level);
};
var isEqualOrBelowLogLevel = (currentLevel, level) => {
  return getNumberForLogLevel(currentLevel) <= getNumberForLogLevel(level);
};
var transformArgs = ({
  args,
  logLevel,
  tag
}) => {
  const arr = [...args];
  if (getRemotionEnvironment2().isRendering && !getRemotionEnvironment2().isClientSideRendering) {
    arr.unshift(/* @__PURE__ */ Symbol.for(`__remotion_level_${logLevel}`));
  }
  if (tag && getRemotionEnvironment2().isRendering && !getRemotionEnvironment2().isClientSideRendering) {
    arr.unshift(/* @__PURE__ */ Symbol.for(`__remotion_tag_${tag}`));
  }
  return arr;
};
var verbose = (options, ...args) => {
  if (isEqualOrBelowLogLevel(options.logLevel, "verbose")) {
    return console.debug(...transformArgs({ args, logLevel: "verbose", tag: options.tag }));
  }
};
var trace = (options, ...args) => {
  if (isEqualOrBelowLogLevel(options.logLevel, "trace")) {
    return console.debug(...transformArgs({ args, logLevel: "trace", tag: options.tag }));
  }
};
var info = (options, ...args) => {
  if (isEqualOrBelowLogLevel(options.logLevel, "info")) {
    return console.log(...transformArgs({ args, logLevel: "info", tag: options.tag }));
  }
};
var warn = (options, ...args) => {
  if (isEqualOrBelowLogLevel(options.logLevel, "warn")) {
    return console.warn(...transformArgs({ args, logLevel: "warn", tag: options.tag }));
  }
};
var error = (options, ...args) => {
  return console.error(...transformArgs({ args, logLevel: "error", tag: options.tag }));
};
var Log = {
  trace,
  verbose,
  info,
  warn,
  error
};
if (typeof window !== "undefined") {
  window.remotion_renderReady = false;
  if (!window.remotion_delayRenderTimeouts) {
    window.remotion_delayRenderTimeouts = {};
  }
  window.remotion_delayRenderHandles = [];
}
var timeoutSuspensions = /* @__PURE__ */ new WeakMap();
var getDelayRenderSuspendedTime = (scope) => {
  const state = timeoutSuspensions.get(scope);
  return state ? state.elapsed + (state.active > 0 ? Date.now() - state.startedAt : 0) : 0;
};
var suspendDelayRenderTimeout = (scope, handle) => {
  return timeoutSuspensions.get(scope)?.handles.get(handle)?.suspend() ?? (() => {
  });
};
var defaultTimeout = 3e4;
var delayRenderInternal = ({
  scope,
  environment,
  label: label2,
  options
}) => {
  if (typeof label2 !== "string" && label2 !== null) {
    throw new Error("The label parameter of delayRender() must be a string or undefined, got: " + JSON.stringify(label2));
  }
  const handle = Math.random();
  scope.remotion_delayRenderHandles.push(handle);
  const called = Error().stack?.replace(/^Error/g, "") ?? "";
  if (environment.isRendering) {
    const timeoutToUse = Math.max(0, (options?.timeoutInMilliseconds ?? scope.remotion_puppeteerTimeout ?? defaultTimeout) - 2e3);
    const retriesLeft = (options?.retries ?? 0) - (scope.remotion_attempt - 1);
    let remaining = timeoutToUse;
    let startedAt = Date.now();
    let suspensionDepth = 0;
    let registered = true;
    const state = timeoutSuspensions.get(scope) ?? {
      active: 0,
      startedAt: 0,
      elapsed: 0,
      handles: /* @__PURE__ */ new Map()
    };
    timeoutSuspensions.set(scope, state);
    const endSuspension = () => {
      state.active--;
      if (state.active === 0) {
        state.elapsed += Date.now() - state.startedAt;
      }
    };
    const cancel = () => {
      if (!registered) {
        return;
      }
      registered = false;
      if (suspensionDepth > 0) {
        endSuspension();
      }
      state.handles.delete(handle);
    };
    const onTimeout = () => {
      cancel();
      const message = [
        `A delayRender()`,
        label2 ? `"${label2}"` : null,
        `was called but not cleared after ${timeoutToUse}ms. See https://remotion.dev/docs/timeout for help.`,
        retriesLeft > 0 ? DELAY_RENDER_RETRIES_LEFT + retriesLeft : null,
        retriesLeft > 0 ? DELAY_RENDER_RETRY_TOKEN : null,
        DELAY_RENDER_CALLSTACK_TOKEN,
        called
      ].filter(truthy).join(" ");
      if (environment.isClientSideRendering) {
        const error2 = Error(message);
        scope.remotion_cancelledErrorObject = error2;
        scope.remotion_cancelledError = getErrorStackWithMessage(error2);
      } else {
        cancelRenderInternal(scope, Error(message));
      }
    };
    scope.remotion_delayRenderTimeouts[handle] = {
      label: label2 ?? null,
      startTime: Date.now(),
      timeout: setTimeout(onTimeout, remaining)
    };
    state.handles.set(handle, {
      cancel,
      suspend: () => {
        if (suspensionDepth++ === 0) {
          clearTimeout(scope.remotion_delayRenderTimeouts[handle].timeout);
          remaining = Math.max(0, remaining - (Date.now() - startedAt));
          if (state.active++ === 0) {
            state.startedAt = Date.now();
          }
        }
        let resumed = false;
        return () => {
          if (resumed || !registered) {
            return;
          }
          resumed = true;
          if (--suspensionDepth === 0) {
            endSuspension();
            startedAt = Date.now();
            scope.remotion_delayRenderTimeouts[handle].timeout = setTimeout(onTimeout, remaining);
          }
        };
      }
    });
  }
  scope.remotion_renderReady = false;
  return handle;
};
var continueRenderInternal = ({
  scope,
  handle,
  environment,
  logLevel
}) => {
  if (typeof handle === "undefined") {
    throw new TypeError("The continueRender() method must be called with a parameter that is the return value of delayRender(). No value was passed.");
  }
  if (typeof handle !== "number") {
    throw new TypeError("The parameter passed into continueRender() must be the return value of delayRender() which is a number. Got: " + JSON.stringify(handle));
  }
  const handleExists = scope.remotion_delayRenderHandles.includes(handle);
  const timeoutEntry = scope.remotion_delayRenderTimeouts[handle];
  if (handleExists && environment.isRendering && timeoutEntry) {
    const { label: label2, startTime, timeout } = timeoutEntry;
    timeoutSuspensions.get(scope)?.handles.get(handle)?.cancel();
    clearTimeout(timeout);
    const message = [
      label2 ? `"${label2}"` : "A handle",
      DELAY_RENDER_CLEAR_TOKEN,
      `${Date.now() - startTime}ms`
    ].filter(truthy).join(" ");
    Log.verbose({ logLevel, tag: "delayRender()" }, message);
    delete scope.remotion_delayRenderTimeouts[handle];
  }
  scope.remotion_delayRenderHandles = scope.remotion_delayRenderHandles.filter((h) => h !== handle);
  if (scope.remotion_delayRenderHandles.length === 0) {
    scope.remotion_renderReady = true;
  }
};
var LogLevelContext = (0, import_react23.createContext)({
  logLevel: "info",
  mountTime: 0
});
var useLogLevel = () => {
  const { logLevel } = React11.useContext(LogLevelContext);
  if (logLevel === null) {
    throw new Error("useLogLevel must be used within a LogLevelProvider");
  }
  return logLevel;
};
var useMountTime = () => {
  const { mountTime } = React11.useContext(LogLevelContext);
  if (mountTime === null) {
    throw new Error("useMountTime must be used within a LogLevelProvider");
  }
  return mountTime;
};
var DelayRenderContextType = (0, import_react22.createContext)(null);
var useDelayRender = () => {
  const environment = useRemotionEnvironment();
  const scope = (0, import_react22.useContext)(DelayRenderContextType) ?? (typeof window !== "undefined" ? window : void 0);
  const logLevel = useLogLevel();
  const delayRender = (0, import_react22.useCallback)((label2, options) => {
    if (!scope) {
      return Math.random();
    }
    return delayRenderInternal({
      scope,
      environment,
      label: label2 ?? null,
      options: options ?? {}
    });
  }, [environment, scope]);
  const continueRender = (0, import_react22.useCallback)((handle) => {
    if (!scope) {
      return;
    }
    continueRenderInternal({
      scope,
      handle,
      environment,
      logLevel
    });
  }, [environment, logLevel, scope]);
  const cancelRender2 = (0, import_react22.useCallback)((err) => {
    return cancelRenderInternal(scope ?? (typeof window !== "undefined" ? window : void 0), err);
  }, [scope]);
  return { delayRender, continueRender, cancelRender: cancelRender2 };
};
var areRegistryEntriesEqual = (previous, next) => {
  const keys = Object.keys(previous);
  return keys.length === Object.keys(next).length && keys.every((key) => Object.prototype.hasOwnProperty.call(next, key) && Object.is(Reflect.get(previous, key), Reflect.get(next, key)));
};
var reconcileRegistryEntries = ({
  current,
  entries: entries2,
  previousDescriptors,
  previousKeys,
  nextKeys,
  getKey: getKey2,
  order,
  orderProperty
}) => {
  const previousByKey = new Map(current.map((entry) => [getKey2(entry), entry]));
  const next = entries2.map((entry) => {
    const key = getKey2(entry);
    const previous = previousByKey.get(key);
    const nextOrder = order.get(key) ?? null;
    if (previous && previousDescriptors.get(key) === entry && previous[orderProperty] === nextOrder) {
      return previous;
    }
    const registered = { ...entry, [orderProperty]: nextOrder };
    return previous && areRegistryEntriesEqual(previous, registered) ? previous : registered;
  });
  for (const entry of current) {
    const key = getKey2(entry);
    if (!previousKeys.has(key) && !nextKeys.has(key)) {
      const nextOrder = order.get(key) ?? entry[orderProperty];
      next.push(entry[orderProperty] === nextOrder ? entry : { ...entry, [orderProperty]: nextOrder });
    }
  }
  return next.length === current.length && next.every((entry, index) => entry === current[index]) ? current : next;
};
var createRegistryStore = (initialSnapshot) => {
  let snapshot3 = initialSnapshot;
  const listeners6 = /* @__PURE__ */ new Set();
  return {
    getSnapshot: () => snapshot3,
    subscribe: (listener) => {
      listeners6.add(listener);
      return () => {
        listeners6.delete(listener);
      };
    },
    setSnapshot: (update2) => {
      const next = update2(snapshot3);
      if (next === snapshot3) {
        return;
      }
      snapshot3 = next;
      for (const listener of [...listeners6]) {
        listener();
      }
    }
  };
};
var objectIs = typeof Object.is === "function" ? Object.is : (first, second) => first === second && (first !== 0 || 1 / first === 1 / second) || Number.isNaN(first) && Number.isNaN(second);
var checkIfSnapshotChanged = (instance) => {
  try {
    return !objectIs(instance.value, instance.getSnapshot());
  } catch {
    return true;
  }
};
var useSyncExternalStoreShimClient = (subscribe2, getSnapshot) => {
  const value = getSnapshot();
  if (false) {
  }
  const [{ instance }, forceUpdate] = React12.useState({
    instance: { value, getSnapshot }
  });
  React12.useLayoutEffect(() => {
    instance.value = value;
    instance.getSnapshot = getSnapshot;
    if (checkIfSnapshotChanged(instance)) {
      forceUpdate({ instance });
    }
  }, [getSnapshot, instance, subscribe2, value]);
  React12.useEffect(() => {
    if (checkIfSnapshotChanged(instance)) {
      forceUpdate({ instance });
    }
    return subscribe2(() => {
      if (checkIfSnapshotChanged(instance)) {
        forceUpdate({ instance });
      }
    });
  }, [instance, subscribe2]);
  React12.useDebugValue(value);
  return value;
};
var useSyncExternalStoreShimServer = (_subscribe, getSnapshot) => getSnapshot();
var shim = typeof window === "undefined" || typeof window.document === "undefined" || typeof window.document.createElement === "undefined" ? useSyncExternalStoreShimServer : useSyncExternalStoreShimClient;
var useSyncExternalStore2 = React12.useSyncExternalStore ?? shim;
var useIsomorphicLayoutEffect2 = typeof window === "undefined" ? import_react24.useEffect : import_react24.useLayoutEffect;
var createComponentWrapper = (componentStore) => {
  const Wrapper = (props) => {
    const Comp = useSyncExternalStore2(componentStore.subscribe, componentStore.getSnapshot, componentStore.getSnapshot);
    return import_react24.default.createElement(Comp, props);
  };
  return Wrapper;
};
var useLazyComponent = ({
  compProps,
  componentName,
  noSuspense
}) => {
  const componentFromProps = "component" in compProps ? compProps.component : null;
  if (componentFromProps === void 0 && typeof document !== "undefined" && !noSuspense) {
    throw new Error(`A value of \`undefined\` was passed to the \`component\` prop. Check the value you are passing to the <${componentName}/> component.`);
  }
  const lazyComponentFromProps = "lazyComponent" in compProps ? compProps.lazyComponent : null;
  const componentStore = (0, import_react24.useMemo)(() => createRegistryStore(componentFromProps ?? null), [lazyComponentFromProps]);
  useIsomorphicLayoutEffect2(() => {
    if (componentFromProps !== null && componentFromProps !== void 0) {
      componentStore.setSnapshot(() => componentFromProps);
    }
  }, [componentFromProps, componentStore]);
  const createWrapper = createComponentWrapper;
  const Wrapper = (0, import_react24.useMemo)(createWrapper.bind(null, componentStore), [
    componentStore
  ]);
  const lazy = (0, import_react24.useMemo)(() => {
    if ("component" in compProps) {
      return Wrapper;
    }
    if ("lazyComponent" in compProps && typeof compProps.lazyComponent !== "undefined") {
      if (typeof compProps.lazyComponent === "undefined") {
        throw new Error(`A value of \`undefined\` was passed to the \`lazyComponent\` prop. Check the value you are passing to the <${componentName}/> component.`);
      }
      return import_react24.default.lazy(compProps.lazyComponent);
    }
    throw new Error("You must pass either 'component' or 'lazyComponent'");
  }, [lazyComponentFromProps, componentStore, Wrapper]);
  if ("component" in compProps && (typeof document === "undefined" || noSuspense)) {
    return compProps.component;
  }
  return lazy;
};
var getRegex2 = () => /^([a-zA-Z0-9-\u4E00-\u9FFF])+$/g;
var isCompositionIdValid = (id) => id.match(getRegex2());
var validateCompositionId = (id) => {
  if (!isCompositionIdValid(id)) {
    throw new Error(`Composition id can only contain a-z, A-Z, 0-9, CJK characters and -. You passed ${id}`);
  }
};
var invalidCompositionErrorMessage = `Composition ID must match ${String(getRegex2())}`;
var Fallback = () => {
  const { continueRender, delayRender } = useDelayRender();
  (0, import_react2.useEffect)(() => {
    const fallback = delayRender("Waiting for Root component to unsuspend");
    return () => continueRender(fallback);
  }, [continueRender, delayRender]);
  return null;
};
var InnerComposition = ({
  width,
  height,
  fps,
  durationInFrames,
  id,
  defaultProps,
  schema,
  ...compProps
}) => {
  const video = useVideo();
  const lazy = useLazyComponent({
    compProps,
    componentName: "Composition",
    noSuspense: false
  });
  const isPlayer = useIsPlayer();
  const environment = useRemotionEnvironment();
  const canUseComposition = (0, import_react2.useContext)(CanUseRemotionHooks);
  if (typeof window !== "undefined") {
    window.remotion_seenCompositionIds = Array.from(/* @__PURE__ */ new Set([...window.remotion_seenCompositionIds ?? [], id]));
  }
  if (canUseComposition) {
    if (isPlayer) {
      throw new Error("<Composition> was mounted inside the `component` that was passed to the <Player>. See https://remotion.dev/docs/wrong-composition-mount for help.");
    }
    throw new Error("<Composition> mounted inside another composition. See https://remotion.dev/docs/wrong-composition-mount for help.");
  }
  const { folderName, parentName } = (0, import_react2.useContext)(FolderContext);
  const stack = compProps._remotionInternalStack ?? null;
  const componentFromProps = "component" in compProps ? resolveComponentIdentity(compProps.component) : null;
  const registration = (0, import_react2.useMemo)(() => {
    if (!id) {
      throw new Error("No id for composition passed.");
    }
    validateCompositionId(id);
    validateDefaultAndInputProps(defaultProps, "defaultProps", id);
    return {
      durationInFrames: durationInFrames ?? void 0,
      fps: fps ?? void 0,
      height: height ?? void 0,
      width: width ?? void 0,
      id,
      folderName,
      component: lazy,
      defaultProps: serializeThenDeserializeInStudio(defaultProps ?? {}),
      order: null,
      parentFolderName: parentName,
      componentFromProps,
      schema: schema ?? null,
      calculateMetadata: compProps.calculateMetadata ?? null,
      stack
    };
  }, [
    durationInFrames,
    fps,
    height,
    lazy,
    id,
    folderName,
    defaultProps,
    width,
    parentName,
    componentFromProps,
    schema,
    compProps.calculateMetadata,
    stack
  ]);
  const metadata = (0, import_react2.useMemo)(() => ({ type: "composition", id, value: registration }), [id, registration]);
  useCommittedCompositionEntry(metadata);
  const resolved = useResolvedVideoConfig(id);
  const { setError: onError, clearError: onClear } = (0, import_react2.useContext)(CompositionRenderErrorContext);
  const wrapRegistration = (content2) => /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(CommittedMetadataProvider, {
    value: null,
    _remotionCommitMetadata: metadata,
    children: content2
  });
  if (environment.isStudio && video && video.component === lazy && video.id === id) {
    const Comp = lazy;
    if (resolved === null || resolved.type !== "success" && resolved.type !== "success-and-refreshing") {
      return wrapRegistration(null);
    }
    return wrapRegistration((0, import_react_dom.createPortal)(/* @__PURE__ */ (0, import_jsx_runtime9.jsx)(CanUseRemotionHooksProvider, {
      children: /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(CompositionErrorBoundary, {
        onError,
        onClear,
        children: /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(import_react2.Suspense, {
          fallback: /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(Loading, {}),
          children: /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(Comp, {
            ...resolved.result.props ?? {}
          })
        })
      })
    }), portalNode()));
  }
  if (environment.isRendering && video && video.component === lazy && video.id === id) {
    const Comp = lazy;
    if (resolved === null || resolved.type !== "success" && resolved.type !== "success-and-refreshing") {
      return wrapRegistration(null);
    }
    return wrapRegistration((0, import_react_dom.createPortal)(/* @__PURE__ */ (0, import_jsx_runtime9.jsx)(CanUseRemotionHooksProvider, {
      children: /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(import_react2.Suspense, {
        fallback: /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(Fallback, {}),
        children: /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(Comp, {
          ...resolved.result.props ?? {}
        })
      })
    }), portalNode()));
  }
  return wrapRegistration(null);
};
var Composition = (props) => {
  const { onlyRenderComposition } = (0, import_react2.useContext)(CompositionSetters);
  if (onlyRenderComposition && onlyRenderComposition !== props.id) {
    return null;
  }
  return /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(InnerComposition, {
    ...props
  });
};
var componentsToAddStacksTo = [];
var sequenceComponent = null;
var setSequenceComponent = (component) => {
  sequenceComponent = component;
};
var getSequenceComponent = () => sequenceComponent;
var stacksByControls = /* @__PURE__ */ new WeakMap();
var REMOTION_INTERNAL_STACK_PROP = "_remotionInternalStack";
var ORIGINAL_SOURCE_STACK_PREFIX = "studio-original://";
var originalSourceStackPattern = /\(studio-original:\/\/([^\r\n]+):(\d+):(\d+)\)/;
var makeOriginalSourceStack = ({
  fileName,
  lineNumber,
  columnNumber
}, compiledSourceHash = null) => {
  const location = `Error
    at remotionOriginalSource (${ORIGINAL_SOURCE_STACK_PREFIX}${encodeURIComponent(fileName)}:${lineNumber}:${columnNumber})`;
  return compiledSourceHash === null ? location : `${location}
    at remotionCompiledSource (remotion-source-sha256:${compiledSourceHash})`;
};
var parseOriginalSourceStack = (stack) => {
  if (!stack) {
    return null;
  }
  const match = stack.match(originalSourceStackPattern);
  if (!match) {
    return null;
  }
  return {
    fileName: decodeURIComponent(match[1]),
    line: Number(match[2]),
    column: Number(match[3])
  };
};
var getComponentsToAddStacksTo = () => componentsToAddStacksTo;
var addSequenceStackTraces = (component) => {
  componentsToAddStacksTo.push(component);
};
var setStackForControls = (controls, stack) => {
  if (stack === void 0) {
    stacksByControls.delete(controls);
    return;
  }
  stacksByControls.set(controls, stack);
};
var getStackForControls = (controls) => {
  return stacksByControls.get(controls) ?? null;
};
var VERSION = "4.0.543";
var checkMultipleRemotionVersions = () => {
  if (typeof globalThis === "undefined") {
    return;
  }
  const set = () => {
    globalThis.remotion_imported = VERSION;
    if (typeof window !== "undefined") {
      window.remotion_imported = VERSION;
    }
  };
  const alreadyImported = globalThis.remotion_imported || typeof window !== "undefined" && window.remotion_imported;
  if (alreadyImported) {
    if (alreadyImported === VERSION) {
      return;
    }
    if (typeof alreadyImported === "string" && alreadyImported.includes("webcodecs")) {
      set();
      return;
    }
    throw new TypeError(`\u{1F6A8} Multiple versions of Remotion detected: ${[
      VERSION,
      typeof alreadyImported === "string" ? alreadyImported : "an older version"
    ].filter(truthy).join(" and ")}. This will cause things to break in an unexpected way.
Check that all your Remotion packages are on the same version. If your dependencies depend on Remotion, make them peer dependencies. You can also run \`npx remotion versions\` from your terminal to see which versions are mismatching.`);
  }
  set();
};
var DefaultPremountContext = (0, import_react26.createContext)(DEFAULT_PREMOUNT_IN_SECONDS);
var SequenceActivityContext = (0, import_react28.createContext)(false);
var SequenceActivityDormantContext = (0, import_react28.createContext)(false);
var SequenceActivitySuspensionContext = (0, import_react28.createContext)(false);
var SequenceActivitySettingsContext = (0, import_react28.createContext)(null);
var SequenceActivityTimelineContext = (0, import_react28.createContext)(null);
var SequenceActivityAbsoluteTimeContext = (0, import_react28.createContext)(null);
var SequenceContent = ({ children }) => {
  return (0, import_react28.useContext)(SequenceActivityDormantContext) ? null : children;
};
var createRuntimeValueStore = (initialSnapshot) => {
  let snapshot3 = initialSnapshot;
  const listeners6 = /* @__PURE__ */ new Set();
  const store = {
    getSnapshot: () => snapshot3,
    subscribe: (listener) => {
      listeners6.add(listener);
      return () => {
        listeners6.delete(listener);
      };
    }
  };
  return {
    store,
    setSnapshot: (newSnapshot) => {
      if (snapshot3 === newSnapshot) {
        return;
      }
      snapshot3 = newSnapshot;
      for (const listener of listeners6) {
        listener(snapshot3);
      }
    }
  };
};
var useTimelineSeek = (setFrame) => {
  const revision = (0, import_react31.useRef)(0);
  const listeners6 = (0, import_react31.useRef)(/* @__PURE__ */ new Set());
  return (0, import_react31.useMemo)(() => ({
    revision,
    seekFrame: (frame) => {
      revision.current++;
      for (const listener of listeners6.current) {
        listener();
      }
      setFrame(frame);
    },
    subscribe: (listener) => {
      listeners6.current.add(listener);
      return () => {
        listeners6.current.delete(listener);
      };
    }
  }), [setFrame]);
};
var missingSetTimelineContext = () => {
  throw new Error("SetTimelineContext is missing. This is likely caused by a Remotion version mismatch.");
};
var SetTimelineContext = (0, import_react30.createContext)({
  seek: null,
  setFrameWithoutSeek: missingSetTimelineContext,
  setPlaying: missingSetTimelineContext,
  setBuffering: missingSetTimelineContext,
  subscribePlaying: () => () => {
    return;
  },
  subscribeBuffering: () => () => {
    return;
  },
  isPlaying: () => false,
  isBuffering: missingSetTimelineContext,
  frameRef: { current: {} },
  audioAndVideoTags: { current: [] }
});
var TimelineContext = (0, import_react30.createContext)(null);
var PlaybackRateContext = (0, import_react30.createContext)(null);
var AbsoluteTimeContext = (0, import_react30.createContext)(null);
var TimelineContextProvider = ({ children, frameState }) => {
  const playingStore = (0, import_react30.useMemo)(() => createRuntimeValueStore({ playing: false }), []);
  const bufferingStore = (0, import_react30.useMemo)(() => createRuntimeValueStore({ buffering: false }), []);
  const [playbackRate, setPlaybackRate] = (0, import_react30.useState)(1);
  const audioAndVideoTags = (0, import_react30.useRef)([]);
  const [_frame, setFrame] = (0, import_react30.useState)(() => getInitialFrameState());
  const timelineSeek = useTimelineSeek(setFrame);
  const { isStudio } = useRemotionEnvironment();
  const seek2 = isStudio ? timelineSeek : null;
  const frame = frameState ?? _frame;
  const frameRef = (0, import_react30.useRef)(frame);
  frameRef.current = frame;
  const readIsPlaying = (0, import_react30.useCallback)(() => playingStore.store.getSnapshot().playing, [playingStore]);
  const readIsBuffering = (0, import_react30.useCallback)(() => bufferingStore.store.getSnapshot().buffering, [bufferingStore]);
  const { delayRender, continueRender } = useDelayRender();
  if (typeof window !== "undefined") {
    (0, import_react30.useLayoutEffect)(() => {
      window.remotion_setFrame = (f, composition, attempt) => {
        window.remotion_attempt = attempt;
        const id = delayRender(`Setting the current frame to ${f}`);
        let asyncUpdate = true;
        setFrame((s) => {
          const currentFrame = s[composition] ?? window.remotion_initialFrame;
          if (currentFrame === f) {
            asyncUpdate = false;
            return s;
          }
          return {
            ...s,
            [composition]: f
          };
        });
        if (asyncUpdate) {
          requestAnimationFrame(() => continueRender(id));
        } else {
          continueRender(id);
        }
      };
      window.remotion_isPlayer = false;
    }, [continueRender, delayRender]);
  }
  const timelineContextValue = (0, import_react30.useMemo)(() => {
    return {
      frame,
      isPlaying: readIsPlaying,
      isInsideFreeze: false,
      audioAndVideoTags
    };
  }, [frame, readIsPlaying]);
  const playbackRateContextValue = (0, import_react30.useMemo)(() => {
    return {
      playbackRate,
      setPlaybackRate
    };
  }, [playbackRate]);
  const setTimelineContextValue = (0, import_react30.useMemo)(() => {
    return {
      setFrameWithoutSeek: setFrame,
      seek: seek2,
      setPlaying: (updater) => {
        const current = playingStore.store.getSnapshot().playing;
        const next = typeof updater === "function" ? updater(current) : updater;
        if (current !== next) {
          playingStore.setSnapshot({ playing: next });
        }
      },
      setBuffering: (buffering) => {
        if (readIsBuffering() !== buffering) {
          bufferingStore.setSnapshot({ buffering });
        }
      },
      subscribePlaying: playingStore.store.subscribe,
      subscribeBuffering: bufferingStore.store.subscribe,
      isPlaying: readIsPlaying,
      isBuffering: readIsBuffering,
      frameRef,
      audioAndVideoTags
    };
  }, [bufferingStore, playingStore, readIsBuffering, readIsPlaying, seek2]);
  return /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(AbsoluteTimeContext.Provider, {
    value: timelineContextValue,
    children: /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(PlaybackRateContext.Provider, {
      value: playbackRateContextValue,
      children: /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(TimelineContext.Provider, {
        value: timelineContextValue,
        children: /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(SetTimelineContext.Provider, {
          value: setTimelineContextValue,
          children
        })
      })
    })
  });
};
var usePlaying = () => {
  const { isPlaying } = useTimelineContext();
  const { subscribePlaying } = (0, import_react32.useContext)(SetTimelineContext);
  return useSyncExternalStore2(subscribePlaying, isPlaying, isPlaying);
};
var useBuffering = () => {
  const { isBuffering, subscribeBuffering } = (0, import_react33.useContext)(SetTimelineContext);
  return useSyncExternalStore2(subscribeBuffering, isBuffering, isBuffering);
};
var UnsubscribedTimelineContext = (0, import_react29.createContext)(null);
var makeKey = () => {
  return `remotion.time-all`;
};
var persistCurrentFrame = (time) => {
  localStorage.setItem(makeKey(), JSON.stringify(time));
};
var getInitialFrameState = () => {
  const item = localStorage.getItem(makeKey()) ?? "{}";
  const obj = JSON.parse(item);
  return obj;
};
var getFrameForComposition = (composition) => {
  const item = localStorage.getItem(makeKey()) ?? "{}";
  const obj = JSON.parse(item);
  if (obj[composition] !== void 0) {
    return Number(obj[composition]);
  }
  if (typeof window === "undefined") {
    return 0;
  }
  return window.remotion_initialFrame ?? 0;
};
var clampFrameToCompositionRange = (frame, durationInFrames) => {
  return Math.max(0, Math.min(Math.max(0, durationInFrames - 1), frame));
};
var useTimelinePositionFromContext = (state) => {
  const videoConfig = useVideo();
  const env = useRemotionEnvironment();
  const dormant = (0, import_react29.useContext)(SequenceActivityDormantContext);
  if (state === null) {
    return 0;
  }
  if (!videoConfig) {
    return typeof window === "undefined" ? 0 : window.remotion_initialFrame ?? 0;
  }
  const unclamped = state.frame[videoConfig.id] ?? (env.isPlayer ? 0 : getFrameForComposition(videoConfig.id));
  return dormant ? unclamped : clampFrameToCompositionRange(unclamped, videoConfig.durationInFrames);
};
var useTimelineContext = () => {
  const dormant = (0, import_react29.useContext)(SequenceActivityDormantContext);
  const state = (0, import_react29.useContext)(dormant ? SequenceActivityTimelineContext : TimelineContext);
  if (state === null) {
    throw new Error("TimelineContext is not available. This hook must be used inside a <Player> or the Remotion Studio.");
  }
  return state;
};
var usePlaybackRate = () => {
  const state = (0, import_react29.useContext)(PlaybackRateContext);
  if (state === null) {
    throw new Error("PlaybackRateContext is not available. This hook must be used inside a <Player> or the Remotion Studio.");
  }
  return state;
};
var useTimelinePosition = () => {
  const state = useTimelineContext();
  return useTimelinePositionFromContext(state);
};
var useTimelinePositionWithOptionalSubscription = (subscribe2) => {
  const dormant = (0, import_react29.useContext)(SequenceActivityDormantContext);
  const state = (0, import_react29.useContext)(subscribe2 ? dormant ? SequenceActivityTimelineContext : TimelineContext : UnsubscribedTimelineContext);
  const frame = useTimelinePositionFromContext(state);
  if (subscribe2 && state === null) {
    throw new Error("TimelineContext is not available. This hook must be used inside a <Player> or the Remotion Studio.");
  }
  return frame;
};
var useIsInsideFreeze = () => {
  return useTimelineContext().isInsideFreeze;
};
var useAbsoluteTimelinePosition = () => {
  const dormant = (0, import_react29.useContext)(SequenceActivityDormantContext);
  const state = (0, import_react29.useContext)(dormant ? SequenceActivityAbsoluteTimeContext : AbsoluteTimeContext);
  if (state === null) {
    throw new Error("AbsoluteTimeContext is not available. This hook must be used inside a <Player> or the Remotion Studio.");
  }
  return useTimelinePositionFromContext(state);
};
var useTimelineSetFrameWithoutSeek = () => {
  const { setFrameWithoutSeek } = (0, import_react29.useContext)(SetTimelineContext);
  return setFrameWithoutSeek;
};
var useTimelineSeekFrame = () => {
  const { seek: seek2, setFrameWithoutSeek } = (0, import_react29.useContext)(SetTimelineContext);
  return seek2?.seekFrame ?? setFrameWithoutSeek;
};
var useCurrentFrameWithOptionalSubscription = (subscribe2) => {
  const canUseRemotionHooks = (0, import_react34.useContext)(CanUseRemotionHooks);
  const env = useRemotionEnvironment();
  if (!canUseRemotionHooks) {
    if (env.isPlayer) {
      throw new Error(`useCurrentFrame can only be called inside a component that was passed to <Player>. See: https://www.remotion.dev/docs/player/examples`);
    }
    throw new Error(`useCurrentFrame() can only be called inside a component that was registered as a composition. See https://www.remotion.dev/docs/the-fundamentals#defining-compositions`);
  }
  const frame = useTimelinePositionWithOptionalSubscription(subscribe2);
  const context = (0, import_react34.useContext)(SequenceContext);
  if (!subscribe2) {
    return 0;
  }
  const contextOffset = context ? context.cumulatedFrom + context.relativeFrom : 0;
  return (frame - contextOffset) * (context?.playbackRate ?? 1);
};
var useCurrentFrame = () => {
  return useCurrentFrameWithOptionalSubscription(true);
};
var useVideoConfig = () => {
  const videoConfig = useUnsafeVideoConfig();
  const context = (0, import_react35.useContext)(CanUseRemotionHooks);
  const isPlayer = useIsPlayer();
  if (!videoConfig) {
    if (typeof window !== "undefined" && window.remotion_isPlayer || isPlayer) {
      throw new Error([
        "No video config found. Likely reasons:",
        "- You are probably calling useVideoConfig() from outside the component passed to <Player />. See https://www.remotion.dev/docs/player/examples for how to set up the Player correctly.",
        "- You have multiple versions of Remotion installed which causes the React context to get lost."
      ].join("-"));
    }
    throw new Error("No video config found. You are probably calling useVideoConfig() from a component which has not been registered as a <Composition />. See https://www.remotion.dev/docs/the-fundamentals#defining-compositions for more information.");
  }
  if (!context) {
    throw new Error("Called useVideoConfig() outside a Remotion composition.");
  }
  return videoConfig;
};
var NonPremountFreezeContext = (0, import_react27.createContext)(false);
var useIsInsideNonPremountFreeze = () => (0, import_react27.useContext)(NonPremountFreezeContext);
var Freeze = ({
  frame: frameToFreeze,
  children,
  active = true,
  _remotionInternalIsPremounting = false
}) => {
  const frame = useCurrentFrame();
  const videoConfig = useVideoConfig();
  if (typeof frameToFreeze === "undefined") {
    throw new Error(`The <Freeze /> component requires a 'frame' prop, but none was passed.`);
  }
  if (typeof frameToFreeze !== "number") {
    throw new Error(`The 'frame' prop of <Freeze /> must be a number, but is of type ${typeof frameToFreeze}`);
  }
  if (Number.isNaN(frameToFreeze)) {
    throw new Error(`The 'frame' prop of <Freeze /> must be a real number, but it is NaN.`);
  }
  if (!Number.isFinite(frameToFreeze)) {
    throw new Error(`The 'frame' prop of <Freeze /> must be a finite number, but it is ${frameToFreeze}.`);
  }
  const isActive = (0, import_react27.useMemo)(() => {
    if (typeof active === "boolean") {
      return active;
    }
    if (typeof active === "function") {
      return active(frame);
    }
  }, [active, frame]);
  const timelineContext = useTimelineContext();
  const activityDormant = (0, import_react27.useContext)(SequenceActivityDormantContext);
  const sequenceContext = (0, import_react27.useContext)(SequenceContext);
  const isInsideNonPremountFreeze = useIsInsideNonPremountFreeze();
  const relativeFrom = sequenceContext?.relativeFrom ?? 0;
  const playbackRate = sequenceContext?.playbackRate ?? 1;
  const { audioAndVideoTags } = timelineContext;
  const frozenTimelineValue = (0, import_react27.useMemo)(() => {
    return {
      audioAndVideoTags,
      isPlaying: () => false,
      isInsideFreeze: true,
      frame: {
        [videoConfig.id]: frameToFreeze / playbackRate + relativeFrom
      }
    };
  }, [
    audioAndVideoTags,
    videoConfig.id,
    frameToFreeze,
    relativeFrom,
    playbackRate
  ]);
  const newSequenceContext = (0, import_react27.useMemo)(() => {
    if (!sequenceContext) {
      return null;
    }
    if (!isActive) {
      return sequenceContext;
    }
    return {
      ...sequenceContext,
      cumulatedFrom: 0
    };
  }, [sequenceContext, isActive]);
  const providedTimeline = isActive ? frozenTimelineValue : timelineContext;
  return /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(NonPremountFreezeContext.Provider, {
    value: isInsideNonPremountFreeze || Boolean(isActive) && !_remotionInternalIsPremounting,
    children: /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(TimelineContext.Provider, {
      value: providedTimeline,
      children: /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(SequenceActivityTimelineContext.Provider, {
        value: activityDormant ? providedTimeline : null,
        children: /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(SequenceContext.Provider, {
          value: newSequenceContext,
          children
        })
      })
    })
  });
};
var getSequenceBoundaryTolerance = ({
  absoluteFrame,
  cumulatedFrom,
  from,
  parentPlaybackRate,
  durationInFrames
}) => {
  return Math.min(durationInFrames / 2, Number.EPSILON * Math.max(Math.abs(absoluteFrame * parentPlaybackRate), Math.abs(cumulatedFrom * parentPlaybackRate), Math.abs(from)) * 4);
};
var LoopContext = (0, import_react36.createContext)(null);
var resolveSequenceContentDuration = ({
  durationInFrames
}) => {
  return durationInFrames ?? Infinity;
};
var resolveSequenceDuration = ({
  durationInFrames,
  playbackRate,
  loop
}) => {
  if (loop) {
    return Infinity;
  }
  return resolveSequenceContentDuration({
    durationInFrames
  }) / (playbackRate ?? 1);
};
var clampCrop = (value) => {
  return Math.min(1, Math.max(0, value ?? 0));
};
var resolveAxis = (start, end) => {
  const resolvedStart = clampCrop(start);
  const resolvedEnd = clampCrop(end);
  if (resolvedStart + resolvedEnd > 1) {
    return [0.5, 0.5];
  }
  return [resolvedStart, resolvedEnd];
};
var resolveSequenceCrop = ({
  cropLeft,
  cropRight,
  cropTop,
  cropBottom
}) => {
  const [left, right] = resolveAxis(cropLeft, cropRight);
  const [top, bottom] = resolveAxis(cropTop, cropBottom);
  return { left, right, top, bottom };
};
var getSequenceCropClipPath = ({
  left,
  right,
  top,
  bottom,
  style
}) => {
  if (left === 0 && right === 0 && top === 0 && bottom === 0) {
    return null;
  }
  const serializeRadius = (radius) => typeof radius === "number" ? `${radius}px` : radius;
  const shorthand = serializeRadius(style?.borderRadius);
  const longhands = [
    style?.borderTopLeftRadius,
    style?.borderTopRightRadius,
    style?.borderBottomRightRadius,
    style?.borderBottomLeftRadius
  ];
  const serializedBorderRadius = shorthand || (longhands.some((radius) => radius !== void 0) ? longhands.map((radius) => serializeRadius(radius) ?? "0px").join(" ") : void 0);
  const rounded = serializedBorderRadius ? ` round ${serializedBorderRadius}` : "";
  return `inset(${top * 100}% ${right * 100}% ${bottom * 100}% ${left * 100}%${rounded})`;
};
var validateSequenceCrop = (crop, componentName = "<Sequence />") => {
  for (const [name, value] of Object.entries(crop)) {
    if (value === void 0) {
      continue;
    }
    if (typeof value !== "number" || !Number.isFinite(value)) {
      throw new TypeError(`The "${name}" prop of ${componentName} must be a finite number, but got ${String(value)}.`);
    }
    if (value > 100) {
      throw new RangeError(`The "${name}" prop of ${componentName} must be between 0 and 1, but got ${value}. The crop range is 0 to 1, not 0 to 100.`);
    }
  }
};
var SequenceOutlineContext = import_react37.default.createContext(false);
var nodesByRef = /* @__PURE__ */ new WeakMap();
var SequenceOutlineInternals = {
  createRef: () => {
    const ref = { current: null };
    nodesByRef.set(ref, []);
    return ref;
  },
  getNodes: (ref) => {
    return nodesByRef.get(ref) ?? null;
  },
  setNodes: (ref, nodes2) => {
    const previous = nodesByRef.get(ref);
    if (previous?.length === nodes2.length && previous.every((node, index) => node === nodes2[index])) {
      return;
    }
    ref.current = nodes2.length === 1 && nodes2[0].nodeType === 1 ? nodes2[0] : null;
    nodesByRef.set(ref, nodes2);
  }
};
var suspendedActivity = { then: () => {
  return;
} };
var SuspendSequenceActivity = ({ children, dormant }) => {
  const suspended = (0, import_react38.useContext)(SequenceActivitySuspensionContext);
  if (dormant && suspended) {
    throw suspendedActivity;
  }
  return children;
};
var areActivityChildrenEqual = (previous, next) => {
  if (Object.is(previous, next)) {
    return true;
  }
  if (Array.isArray(previous) && Array.isArray(next)) {
    return previous.length === next.length && previous.every((child, index) => areActivityChildrenEqual(child, next[index]));
  }
  if (!import_react38.default.isValidElement(previous) || !import_react38.default.isValidElement(next) || previous.type !== next.type || previous.key !== next.key) {
    return false;
  }
  const keys = Object.keys(previous.props);
  return keys.length === Object.keys(next.props).length && keys.every((key) => Object.prototype.hasOwnProperty.call(next.props, key) && (key === "children" ? areActivityChildrenEqual(previous.props.children, next.props.children) : Object.is(previous.props[key], next.props[key])));
};
var SequenceActivityContent = import_react38.default.memo(({ children }) => children, (previous, next) => previous.dormant && next.dormant && areActivityChildrenEqual(previous.children, next.children));
var SequenceActivityBoundary = ({ children, dormant, frame }) => {
  const parentDormant = (0, import_react38.useContext)(SequenceActivityDormantContext);
  const timeline = (0, import_react38.useContext)(parentDormant ? SequenceActivityTimelineContext : TimelineContext);
  const absoluteTime = (0, import_react38.useContext)(parentDormant ? SequenceActivityAbsoluteTimeContext : AbsoluteTimeContext);
  const { id } = useVideoConfig();
  if (timeline === null) {
    throw new Error("TimelineContext is missing");
  }
  const { audioAndVideoTags } = timeline;
  const dormantTimeline = (0, import_react38.useMemo)(() => ({
    frame: { [id]: frame },
    isPlaying: () => false,
    isInsideFreeze: true,
    audioAndVideoTags
  }), [audioAndVideoTags, frame, id]);
  return /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(SequenceActivityDormantContext.Provider, {
    value: dormant,
    children: /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(SequenceActivityTimelineContext.Provider, {
      value: dormant ? dormantTimeline : null,
      children: /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(SequenceActivityAbsoluteTimeContext.Provider, {
        value: dormant ? dormantTimeline : null,
        children: /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(TimelineContext.Provider, {
          value: dormant ? dormantTimeline : timeline,
          children: /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(AbsoluteTimeContext.Provider, {
            value: dormant ? dormantTimeline : absoluteTime,
            children: /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(import_react38.default.Activity, {
              mode: dormant && !parentDormant ? "hidden" : "visible",
              children: /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(SuspendSequenceActivity, {
                dormant,
                children
              })
            })
          })
        })
      })
    })
  });
};
var useCommitEffect = import_react39.default.useInsertionEffect ?? import_react39.default.useLayoutEffect;
var createActivityBudget = () => {
  const registry = createRegistryStore(/* @__PURE__ */ new Set());
  const candidates = /* @__PURE__ */ new Map();
  let frame = {};
  let limit = DEFAULT_SEQUENCE_ACTIVITY_LIMIT;
  let scheduled = false;
  let suspended = false;
  const schedule = () => {
    if (scheduled || suspended) {
      return;
    }
    scheduled = true;
    queueMicrotask(() => {
      scheduled = false;
      if (suspended) {
        return;
      }
      const ranked = [...candidates.values()].filter((candidate) => candidate.end > candidate.from).map((candidate) => {
        const currentFrame = frame[candidate.compositionId] ?? 0;
        return {
          candidate,
          distance: Math.max(0, candidate.from - currentFrame, currentFrame - candidate.end)
        };
      }).sort((a2, b2) => a2.distance - b2.distance);
      const selected = /* @__PURE__ */ new Set();
      for (const { candidate } of ranked) {
        const ancestors = [];
        let ancestor = candidate;
        while (ancestor && !selected.has(ancestor.id)) {
          ancestors.push(ancestor.id);
          if (selected.size + ancestors.length > limit) {
            break;
          }
          ancestor = ancestor.parent === null ? void 0 : candidates.get(ancestor.parent);
        }
        if (selected.size + ancestors.length > limit) {
          continue;
        }
        for (const id of ancestors) {
          selected.add(id);
        }
        if (selected.size === limit) {
          break;
        }
      }
      registry.setSnapshot((previous) => previous.size === selected.size && [...previous].every((id) => selected.has(id)) ? previous : selected);
    });
  };
  return {
    ...registry,
    setSuspended: (next) => {
      if (suspended !== next) {
        suspended = next;
        schedule();
      }
    },
    setLimit: (next) => {
      if (limit !== next) {
        limit = next;
        schedule();
      }
    },
    setFrame: (next) => {
      frame = next;
      schedule();
    },
    register: (candidate) => {
      candidates.set(candidate.id, candidate);
      schedule();
      return () => {
        candidates.delete(candidate.id);
        schedule();
      };
    }
  };
};
var ActivityBudgetContext = (0, import_react39.createContext)(null);
var InactiveTimelineContext = (0, import_react39.createContext)(null);
var emptySelection = /* @__PURE__ */ new Set();
var ActivitySelectionContext = (0, import_react39.createContext)(emptySelection);
var SequenceActivityBudgetProvider = ({ children }) => {
  const enabled = (0, import_react39.useContext)(SequenceActivityContext);
  const settings = (0, import_react39.useContext)(SequenceActivitySettingsContext);
  const suspended = (0, import_react39.useContext)(SequenceActivitySuspensionContext);
  const limit = settings?.limit ?? DEFAULT_SEQUENCE_ACTIVITY_LIMIT;
  const admitting = enabled && limit > 0 && limit !== Infinity;
  const [budget] = (0, import_react39.useState)(createActivityBudget);
  const timeline = (0, import_react39.useContext)(admitting && !suspended ? TimelineContext : InactiveTimelineContext);
  const selected = useSyncExternalStore2(budget.subscribe, budget.getSnapshot, budget.getSnapshot);
  const admitted = (0, import_react39.useMemo)(() => !admitting ? emptySelection : selected.size > limit ? new Set([...selected].slice(0, limit)) : selected, [admitting, limit, selected]);
  useCommitEffect(() => {
    budget.setSuspended(suspended);
    budget.setLimit(admitting ? limit : 0);
    if (admitting && timeline !== null) {
      budget.setFrame(timeline.frame);
    }
  }, [admitting, budget, limit, suspended, timeline]);
  return /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(ActivityBudgetContext.Provider, {
    value: admitting ? budget : null,
    children: /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(ActivitySelectionContext.Provider, {
      value: admitted,
      children
    })
  });
};
var useSequenceActivityAdmission = (candidate) => {
  const budget = (0, import_react39.useContext)(ActivityBudgetContext);
  const enabled = (0, import_react39.useContext)(SequenceActivityContext);
  const settings = (0, import_react39.useContext)(SequenceActivitySettingsContext);
  const unlimited = enabled && (settings?.limit ?? DEFAULT_SEQUENCE_ACTIVITY_LIMIT) === Infinity;
  const selected = (0, import_react39.useContext)(ActivitySelectionContext);
  const id = candidate?.id ?? null;
  const parent = candidate?.parent ?? null;
  const compositionId = candidate?.compositionId ?? null;
  const from = candidate?.from ?? null;
  const end = candidate?.end ?? null;
  const committedCandidate = (0, import_react39.useMemo)(() => id !== null && compositionId !== null && from !== null && end !== null ? { id, parent, compositionId, from, end } : null, [id, parent, compositionId, from, end]);
  useCommitEffect(() => {
    if (budget !== null && committedCandidate !== null) {
      return budget.register(committedCandidate);
    }
  }, [budget, committedCandidate]);
  return id !== null && (unlimited || selected.has(id));
};
var defaultSequenceManagerActions = {
  registerSequence: () => {
    throw new Error("SequenceManagerActionsContext not initialized");
  },
  updateSequence: () => {
    throw new Error("SequenceManagerActionsContext not initialized");
  },
  unregisterSequence: () => {
    throw new Error("SequenceManagerActionsContext not initialized");
  }
};
var SequenceManagerActionsContext = import_react41.default.createContext(defaultSequenceManagerActions);
var SequenceRegistryContext = import_react41.default.createContext(null);
var subscribeToNoRegistry = () => () => {
  return;
};
var emptySequences = [];
var getEmptySequences = () => emptySequences;
var SequenceCommitRegistrationContext = import_react41.default.createContext(false);
var SequenceRegistryScopeContext = import_react41.default.createContext(null);
var useSequenceManagerSequences = () => {
  const registry = (0, import_react41.useContext)(SequenceRegistryContext);
  return useSyncExternalStore2(registry?.subscribe ?? subscribeToNoRegistry, registry?.getSnapshot ?? getEmptySequences, registry?.getSnapshot ?? getEmptySequences);
};
var SequenceManagerRefContext = import_react41.default.createContext({
  current: []
});
var SequenceRegistrationContext = import_react41.default.createContext(false);
var DisableSequenceRegistrationContext = import_react41.default.createContext(false);
var DisableSequenceRegistrationProvider = ({ children }) => {
  return import_react41.default.createElement(DisableSequenceRegistrationContext.Provider, { value: true }, children);
};
var EffectPreviewContext = import_react42.default.createContext({
  setPreview: () => {
    return;
  },
  subscribe: () => () => {
    return;
  },
  getSnapshot: () => null
});
var EffectPreviewProvider = ({ children }) => {
  const [store] = (0, import_react42.useState)(() => {
    let preview = null;
    const listeners6 = /* @__PURE__ */ new Map();
    return {
      setPreview: (next) => {
        if (preview?.runtimeValues === next?.runtimeValues && preview?.effect === next?.effect) {
          return;
        }
        const previousTarget = preview?.runtimeValues;
        preview = next;
        const targets = /* @__PURE__ */ new Set([previousTarget, next?.runtimeValues]);
        for (const target of targets) {
          if (target === void 0) {
            continue;
          }
          for (const listener of listeners6.get(target) ?? []) {
            listener();
          }
        }
      },
      subscribe: (runtimeValues, listener) => {
        if (runtimeValues === null) {
          return () => {
            return;
          };
        }
        let targetListeners = listeners6.get(runtimeValues);
        if (targetListeners === void 0) {
          targetListeners = /* @__PURE__ */ new Set();
          listeners6.set(runtimeValues, targetListeners);
        }
        targetListeners.add(listener);
        return () => {
          targetListeners.delete(listener);
          if (targetListeners.size === 0) {
            listeners6.delete(runtimeValues);
          }
        };
      },
      getSnapshot: (runtimeValues) => preview?.runtimeValues === runtimeValues ? preview.effect : null
    };
  });
  return /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(EffectPreviewContext.Provider, {
    value: store,
    children
  });
};
var useEffectPreview = (runtimeValues) => {
  const store = (0, import_react42.useContext)(EffectPreviewContext);
  const subscribe2 = (0, import_react42.useCallback)((listener) => store.subscribe(runtimeValues, listener), [runtimeValues, store]);
  const getSnapshot = (0, import_react42.useCallback)(() => store.getSnapshot(runtimeValues), [runtimeValues, store]);
  return useSyncExternalStore2(subscribe2, getSnapshot, getSnapshot);
};
var SequenceActivitySuspensionProvider = ({ children }) => {
  const enabled = (0, import_react43.useContext)(SequenceActivityContext);
  const { isPlaying, subscribePlaying, seek: seek2 } = (0, import_react43.useContext)(SetTimelineContext);
  const [suspended, setSuspended] = (0, import_react43.useState)(false);
  (0, import_react43.useEffect)(() => {
    if (!enabled) {
      setSuspended(false);
      return;
    }
    let timeout = null;
    const update2 = () => {
      setSuspended(isPlaying() || timeout !== null);
    };
    const unsubscribePlaying = subscribePlaying(update2);
    const unsubscribeSeek = seek2?.subscribe(() => {
      setSuspended(true);
      if (timeout !== null) {
        clearTimeout(timeout);
      }
      timeout = setTimeout(() => {
        timeout = null;
        update2();
      }, 150);
    });
    update2();
    return () => {
      unsubscribePlaying();
      unsubscribeSeek?.();
      if (timeout !== null) {
        clearTimeout(timeout);
      }
    };
  }, [enabled, isPlaying, seek2, subscribePlaying]);
  return /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(SequenceActivitySuspensionContext.Provider, {
    value: suspended,
    children
  });
};
var useIsomorphicLayoutEffect3 = typeof window === "undefined" ? import_react44.default.useEffect : import_react44.default.useLayoutEffect;
var SequenceManagerRefProvider = withCommittedMetadata(SequenceManagerRefContext.Provider);
var SequenceRegistryProvider = ({ children }) => {
  const { isStudio } = useRemotionEnvironment();
  const logLevel = useLogLevel();
  const sequenceRegistrationEnabled = (0, import_react44.useContext)(SequenceRegistrationContext);
  const shouldObserveCommits = isStudio || sequenceRegistrationEnabled;
  const [sequenceManagerId] = (0, import_react44.useState)(() => String(Math.random()));
  const [commitRegistrationEnabled, setCommitRegistrationEnabled] = (0, import_react44.useState)(() => shouldObserveCommits && isCommitRegistrationObserverInstalled());
  const observedCommitRef = (0, import_react44.useRef)(false);
  const rootObservationFailedRef = (0, import_react44.useRef)(false);
  const committedRegistrationIdsRef = (0, import_react44.useRef)(/* @__PURE__ */ new Set());
  const committedDescriptorsRef = (0, import_react44.useRef)(/* @__PURE__ */ new Map());
  const pendingCommittedSequencesRef = (0, import_react44.useRef)(/* @__PURE__ */ new Map());
  const committedScopesRef = (0, import_react44.useRef)(/* @__PURE__ */ new Map([
    [sequenceManagerId, { sequences: [], sequenceIds: [] }]
  ]));
  const registrationObserverFailedRef = (0, import_react44.useRef)(false);
  const registrationUnmountedRef = (0, import_react44.useRef)(false);
  const committedOrderRef = (0, import_react44.useRef)(null);
  const committedOrderIdsRef = (0, import_react44.useRef)(null);
  const [registry] = (0, import_react44.useState)(() => createRegistryStore([]));
  const setSequences = registry.setSnapshot;
  const sequencesRef = (0, import_react44.useMemo)(() => ({
    get current() {
      return registry.getSnapshot();
    }
  }), [registry]);
  const onCommitSequences = (0, import_react44.useCallback)((scopeId, snapshot3, sequenceIds) => {
    if (registrationObserverFailedRef.current || registrationUnmountedRef.current) {
      return;
    }
    const previousSnapshot = pendingCommittedSequencesRef.current.get(scopeId) ?? committedScopesRef.current.get(scopeId);
    if (previousSnapshot?.sequences === snapshot3 && previousSnapshot.sequenceIds === sequenceIds) {
      return;
    }
    const alreadyPending = pendingCommittedSequencesRef.current.size > 0;
    pendingCommittedSequencesRef.current.set(scopeId, {
      sequences: snapshot3,
      sequenceIds
    });
    if (alreadyPending) {
      return;
    }
    queueMicrotask(() => {
      const pending = pendingCommittedSequencesRef.current;
      pendingCommittedSequencesRef.current = /* @__PURE__ */ new Map();
      if (pending.size === 0 || registrationObserverFailedRef.current || registrationUnmountedRef.current) {
        return;
      }
      const previousIds = committedRegistrationIdsRef.current;
      const previousDescriptors = committedDescriptorsRef.current;
      for (const [id, scope] of pending) {
        if (id !== sequenceManagerId && scope.sequenceIds.length === 0) {
          committedScopesRef.current.delete(id);
        } else {
          committedScopesRef.current.set(id, scope);
        }
      }
      const scopes = [...committedScopesRef.current.values()];
      const sequences = scopes.flatMap((scope) => scope.sequences);
      const ids = scopes.flatMap((scope) => scope.sequenceIds);
      committedDescriptorsRef.current = new Map(sequences.map((sequence) => [sequence.id, sequence]));
      const nextIds = new Set(sequences.map((sequence) => sequence.id));
      const order = new Map(ids.map((id, index) => [id, index]));
      committedOrderIdsRef.current = ids;
      committedOrderRef.current = order;
      committedRegistrationIdsRef.current = nextIds;
      if (isStudio && logLevel === "trace") {
        for (const sequence of sequences) {
          if (!previousIds.has(sequence.id)) {
            Log.trace({ logLevel, tag: null }, `[Sequence registration] Registered "${sequence.displayName}" (${sequence.id}) after commit`, sequence);
          }
        }
      }
      setSequences((current) => reconcileRegistryEntries({
        current,
        entries: sequences,
        previousDescriptors,
        previousKeys: previousIds,
        nextKeys: nextIds,
        getKey: (sequence) => sequence.id,
        order,
        orderProperty: "timelineOrder"
      }));
    });
  }, [isStudio, logLevel, sequenceManagerId, setSequences]);
  const onCommitRootSequences = (0, import_react44.useCallback)((sequences, sequenceIds) => {
    if (!rootObservationFailedRef.current) {
      observedCommitRef.current = true;
      onCommitSequences(sequenceManagerId, sequences, sequenceIds);
    }
  }, [onCommitSequences, sequenceManagerId]);
  const registryScope = (0, import_react44.useMemo)(() => ({
    onCommitSequences,
    commitRegistrationRequested: shouldObserveCommits
  }), [onCommitSequences, shouldObserveCommits]);
  useIsomorphicLayoutEffect3(() => {
    if (!shouldObserveCommits) {
      return;
    }
    let unmounted = false;
    registrationUnmountedRef.current = false;
    const onRegistrationError = () => {
      if (registrationObserverFailedRef.current) {
        return;
      }
      registrationObserverFailedRef.current = true;
      pendingCommittedSequencesRef.current.clear();
      queueMicrotask(() => {
        if (registrationUnmountedRef.current) {
          return;
        }
        const previousIds = committedRegistrationIdsRef.current;
        committedRegistrationIdsRef.current = /* @__PURE__ */ new Set();
        committedScopesRef.current.clear();
        setSequences((current) => current.filter((sequence) => !previousIds.has(sequence.id)));
        setCommitRegistrationEnabled(false);
      });
    };
    const onCommitOrder = (event) => {
      const { detail } = event;
      const managerOrder = detail.sequenceManagers.find((item) => item.managerId === sequenceManagerId);
      if (!managerOrder) {
        return;
      }
      if (commitRegistrationEnabled) {
        return;
      }
      const previousOrder = committedOrderIdsRef.current;
      if (previousOrder === managerOrder.sequenceIds || previousOrder !== null && previousOrder.length === managerOrder.sequenceIds.length && previousOrder.every((sequenceId, index) => sequenceId === managerOrder.sequenceIds[index])) {
        return;
      }
      const order = new Map(managerOrder.sequenceIds.map((sequenceId, index) => [
        sequenceId,
        index
      ]));
      committedOrderIdsRef.current = managerOrder.sequenceIds;
      committedOrderRef.current = order;
      queueMicrotask(() => {
        if (unmounted) {
          return;
        }
        setSequences((currentSequences) => {
          let changed = false;
          const nextSequences = currentSequences.map((sequence) => {
            const timelineOrder = order.get(sequence.id) ?? null;
            if (sequence.timelineOrder === timelineOrder) {
              return sequence;
            }
            changed = true;
            return { ...sequence, timelineOrder };
          });
          return changed ? nextSequences : currentSequences;
        });
      });
    };
    window.addEventListener(COMMIT_ORDER_EVENT, onCommitOrder);
    window.addEventListener(COMMIT_REGISTRATION_ERROR_EVENT, onRegistrationError);
    if (commitRegistrationEnabled) {
      queueMicrotask(() => {
        if (unmounted || observedCommitRef.current || registrationObserverFailedRef.current) {
          return;
        }
        rootObservationFailedRef.current = true;
        onCommitSequences(sequenceManagerId, [], []);
        setCommitRegistrationEnabled(false);
      });
    }
    return () => {
      unmounted = true;
      registrationUnmountedRef.current = true;
      window.removeEventListener(COMMIT_ORDER_EVENT, onCommitOrder);
      window.removeEventListener(COMMIT_REGISTRATION_ERROR_EVENT, onRegistrationError);
    };
  }, [
    shouldObserveCommits,
    sequenceManagerId,
    setSequences,
    commitRegistrationEnabled,
    onCommitSequences
  ]);
  const registerSequence = (0, import_react44.useCallback)((seq) => {
    if (isStudio) {
      Log.trace({ logLevel, tag: null }, `[Sequence registration] Registered "${seq.displayName}" (${seq.id}) after commit`, seq);
    }
    setSequences((seqs) => {
      return [
        ...seqs,
        {
          ...seq,
          timelineOrder: committedOrderRef.current?.get(seq.id) ?? null
        }
      ];
    });
  }, [isStudio, logLevel, setSequences]);
  const updateSequence = (0, import_react44.useCallback)((seq) => {
    setSequences((seqs) => {
      const index = seqs.findIndex((item) => item.id === seq.id);
      if (index === -1) {
        return seqs;
      }
      const updatedSequence = {
        ...seq,
        timelineOrder: committedOrderRef.current?.get(seq.id) ?? null
      };
      if (areRegistryEntriesEqual(seqs[index], updatedSequence)) {
        return seqs;
      }
      const next = [...seqs];
      next[index] = updatedSequence;
      return next;
    });
  }, [setSequences]);
  const unregisterSequence = (0, import_react44.useCallback)((seq) => {
    setSequences((seqs) => seqs.filter((s) => s.id !== seq));
  }, [setSequences]);
  const actions = (0, import_react44.useMemo)(() => {
    return {
      registerSequence,
      updateSequence,
      unregisterSequence
    };
  }, [registerSequence, unregisterSequence, updateSequence]);
  const metadata = (0, import_react44.useMemo)(() => shouldObserveCommits ? {
    type: "sequence-manager",
    id: sequenceManagerId,
    onCommit: commitRegistrationEnabled ? onCommitRootSequences : null
  } : null, [
    commitRegistrationEnabled,
    onCommitRootSequences,
    sequenceManagerId,
    shouldObserveCommits
  ]);
  return /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(SequenceManagerRefProvider, {
    value: sequencesRef,
    _remotionCommitMetadata: metadata,
    children: /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(SequenceRegistryScopeContext.Provider, {
      value: registryScope,
      children: /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(SequenceManagerActionsContext.Provider, {
        value: actions,
        children: /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(SequenceRegistryContext.Provider, {
          value: registry,
          children: /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(SequenceCommitRegistrationContext.Provider, {
            value: commitRegistrationEnabled,
            children
          })
        })
      })
    })
  });
};
var useIsomorphicLayoutEffect4 = typeof window === "undefined" ? import_react40.default.useEffect : import_react40.default.useLayoutEffect;
var useCommitEffect2 = import_react40.default.useInsertionEffect ?? useIsomorphicLayoutEffect4;
var VisualModeDragOverridesSubscriptionContext = import_react40.default.createContext(null);
var ActiveFromDragOverrideKeysContext = import_react40.default.createContext(null);
var SequenceManagerScopeProviders = ({ children, dragOverridesSubscription, fromKeys }) => {
  const { isStudio } = useRemotionEnvironment();
  const activitySettings = (0, import_react40.useContext)(SequenceActivitySettingsContext);
  const commitRegistrationEnabled = (0, import_react40.useContext)(SequenceCommitRegistrationContext);
  const manager = (0, import_react40.useContext)(SequenceManagerActionsContext);
  const scopedDragOverridesSubscription = (0, import_react40.useMemo)(() => ({ ...dragOverridesSubscription, manager }), [dragOverridesSubscription, manager]);
  const activeFromDragOverrideKeys = (0, import_react40.useMemo)(() => ({ manager, keys: fromKeys }), [fromKeys, manager]);
  return /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(ActiveFromDragOverrideKeysContext.Provider, {
    value: activeFromDragOverrideKeys,
    children: /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(VisualModeDragOverridesSubscriptionContext.Provider, {
      value: scopedDragOverridesSubscription,
      children: /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(SequenceActivityContext.Provider, {
        value: (activitySettings?.limit ?? DEFAULT_SEQUENCE_ACTIVITY_LIMIT) > 0 && isStudio && commitRegistrationEnabled && typeof import_react40.default.Activity !== "undefined",
        children: /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(SequenceActivitySuspensionProvider, {
          children: /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(SequenceActivityBudgetProvider, {
            children
          })
        })
      })
    })
  });
};
var emptyDragOverrides = {};
var emptyFromOverrideKeys = /* @__PURE__ */ new Set();
var emptyEffectDragOverrides = {};
var makeSequencePropsSubscriptionKey = (key) => {
  return `${key.absolutePath}\0${key.nodePath.join(".")}\0${key.sequenceKeys.join(".")}\0${key.effectKeys.map((keys) => keys.join(".")).join(".")}`;
};
var VisualModePropStatusesContext = import_react40.default.createContext({
  propStatuses: {}
});
var VisualModePropStatusesRefContext = import_react40.default.createContext({
  current: {}
});
var VisualModePropStatusesSubscriptionContext = import_react40.default.createContext({
  subscribe: () => () => {
    return;
  },
  getSnapshot: () => null
});
var defaultVisualModeDragOverrides = {
  getDragOverrides: () => {
    throw new Error("VisualModeDragOverridesContext not initialized");
  },
  getEffectDragOverrides: () => {
    throw new Error("VisualModeDragOverridesContext not initialized");
  }
};
var VisualModeDragOverridesContext = import_react40.default.createContext(defaultVisualModeDragOverrides);
var VisualModeDragOverridesRefContext = import_react40.default.createContext({ current: defaultVisualModeDragOverrides });
var useVisualModeSnapshot = (subscribe2, getSnapshot) => {
  const dormant = (0, import_react40.useContext)(SequenceActivityDormantContext);
  const [, forceUpdate] = (0, import_react40.useState)(0);
  const snapshot3 = useSyncExternalStore2(subscribe2, getSnapshot, getSnapshot);
  useCommitEffect2(() => {
    if (!dormant) {
      return;
    }
    return subscribe2(() => forceUpdate((current) => current + 1));
  }, [dormant, subscribe2]);
  return snapshot3;
};
var useDragOverridesForNodePath = (nodePath) => {
  const subscription = (0, import_react40.useContext)(VisualModeDragOverridesSubscriptionContext);
  const manager = (0, import_react40.useContext)(SequenceManagerActionsContext);
  const scopedSubscription = subscription?.manager === manager ? subscription : null;
  const key = nodePath === null ? null : makeSequencePropsSubscriptionKey(nodePath);
  const subscribe2 = (0, import_react40.useCallback)((listener) => scopedSubscription?.subscribe(key, listener) ?? (() => {
    return;
  }), [key, scopedSubscription]);
  const getSnapshot = (0, import_react40.useCallback)(() => scopedSubscription?.getSnapshot(key) ?? emptyDragOverrides, [key, scopedSubscription]);
  return useVisualModeSnapshot(subscribe2, getSnapshot);
};
var usePropStatusForNodePath = (nodePath) => {
  const subscription = (0, import_react40.useContext)(VisualModePropStatusesSubscriptionContext);
  const key = nodePath === null ? null : makeSequencePropsSubscriptionKey(nodePath);
  const subscribe2 = (0, import_react40.useCallback)((listener) => subscription.subscribe(key, listener), [key, subscription]);
  const getSnapshot = (0, import_react40.useCallback)(() => subscription.getSnapshot(key), [key, subscription]);
  return useVisualModeSnapshot(subscribe2, getSnapshot);
};
var useActiveFromDragOverrideKeys = () => {
  const snapshot3 = (0, import_react40.useContext)(ActiveFromDragOverrideKeysContext);
  const manager = (0, import_react40.useContext)(SequenceManagerActionsContext);
  return snapshot3?.manager === manager ? snapshot3.keys : emptyFromOverrideKeys;
};
var useEffectDragOverridesForNodePath = (nodePath) => {
  const subscription = (0, import_react40.useContext)(VisualModeDragOverridesSubscriptionContext);
  const manager = (0, import_react40.useContext)(SequenceManagerActionsContext);
  const scopedSubscription = subscription?.manager === manager ? subscription : null;
  const key = nodePath === null ? null : makeSequencePropsSubscriptionKey(nodePath);
  const subscribe2 = (0, import_react40.useCallback)((listener) => scopedSubscription?.subscribeEffects(key, listener) ?? (() => {
    return;
  }), [key, scopedSubscription]);
  const getSnapshot = (0, import_react40.useCallback)(() => scopedSubscription?.getEffectSnapshot(key) ?? emptyEffectDragOverrides, [key, scopedSubscription]);
  return useVisualModeSnapshot(subscribe2, getSnapshot);
};
var VisualModeSettersContext = import_react40.default.createContext({
  setDragOverrides: () => {
    throw new Error("VisualModeSettersContext not initialized");
  },
  updateDragOverrides: () => {
    throw new Error("VisualModeSettersContext not initialized");
  },
  updateDragOverridesBatch: () => {
    throw new Error("VisualModeSettersContext not initialized");
  },
  remapDragOverrideFields: () => {
    throw new Error("VisualModeSettersContext not initialized");
  },
  clearDragOverrides: () => {
    throw new Error("VisualModeSettersContext not initialized");
  },
  setEffectDragOverrides: () => {
    throw new Error("VisualModeSettersContext not initialized");
  },
  updateEffectDragOverridesBatch: () => {
    throw new Error("VisualModeSettersContext not initialized");
  },
  remapEffectDragOverrideFields: () => {
    throw new Error("VisualModeSettersContext not initialized");
  },
  clearEffectDragOverrides: () => {
    throw new Error("VisualModeSettersContext not initialized");
  },
  setPropStatuses: () => {
    throw new Error("VisualModeSettersContext not initialized");
  },
  setPropStatusesBatch: () => {
    throw new Error("VisualModeSettersContext not initialized");
  },
  remapPropStatuses: () => {
    throw new Error("VisualModeSettersContext not initialized");
  }
});
var VisualModeBatchSettersContext = import_react40.default.createContext(null);
var effectDragOverridesKey = (nodePath, effectIndex) => `${makeSequencePropsSubscriptionKey(nodePath)}.effects.${effectIndex}`;
var SequenceManagerProvider = ({ children }) => {
  const [dragOverrideState, setDragOverrideState] = (0, import_react40.useState)(() => ({
    overrides: {},
    fromKeys: /* @__PURE__ */ new Set()
  }));
  const dragOverrides = dragOverrideState.overrides;
  const dragOverridesStore = (0, import_react40.useRef)({
    snapshot: dragOverrides,
    listeners: /* @__PURE__ */ new Map()
  });
  const [effectDragOverridesState, setEffectDragOverridesState] = (0, import_react40.useState)({});
  const effectDragOverridesStore = (0, import_react40.useRef)({
    snapshot: effectDragOverridesState,
    byNode: /* @__PURE__ */ new Map(),
    listeners: /* @__PURE__ */ new Map()
  });
  const [propStatuses, setPropStatusesMapState] = (0, import_react40.useState)({});
  const propStatusesRef = (0, import_react40.useRef)(propStatuses);
  const requestedPropStatusesRef = (0, import_react40.useRef)(propStatuses);
  const propStatusListeners = (0, import_react40.useRef)(/* @__PURE__ */ new Map());
  useIsomorphicLayoutEffect4(() => {
    const previous = propStatusesRef.current;
    propStatusesRef.current = propStatuses;
    for (const [key, listeners6] of propStatusListeners.current) {
      if (previous[key] !== propStatuses[key]) {
        for (const listener of listeners6) {
          listener();
        }
      }
    }
  }, [propStatuses]);
  const setDragOverridesBatch = (0, import_react40.useCallback)((overrides) => {
    setDragOverrideState((prevState) => {
      const prev = prevState.overrides;
      let next = null;
      let nextFromKeys = prevState.fromKeys;
      for (const { nodePath, key, value } of overrides) {
        const mapKey = makeSequencePropsSubscriptionKey(nodePath);
        const existing = (next ?? prev)[mapKey]?.[key];
        if (existing === value || existing?.type === "static" && value.type === "static" && Object.is(existing.value, value.value)) {
          continue;
        }
        if (next === null) {
          next = { ...prev };
        }
        if (next[mapKey] === prev[mapKey]) {
          next[mapKey] = { ...prev[mapKey] };
        }
        next[mapKey][key] = value;
        if (key === "from" && !nextFromKeys.has(mapKey)) {
          nextFromKeys = new Set(nextFromKeys);
          nextFromKeys.add(mapKey);
        }
      }
      return next === null ? prevState : { overrides: next, fromKeys: nextFromKeys };
    });
  }, []);
  const setDragOverrides = (0, import_react40.useCallback)((nodePath, key, value) => setDragOverridesBatch([{ nodePath, key, value }]), [setDragOverridesBatch]);
  const updateDragOverridesBatch = (0, import_react40.useCallback)((updates) => {
    if (updates.length === 0)
      return;
    setDragOverrideState((previous) => {
      let { overrides, fromKeys } = previous;
      for (const { nodePath, update: update2 } of updates) {
        const key = makeSequencePropsSubscriptionKey(nodePath);
        const current = overrides[key] ?? emptyDragOverrides;
        const updated = update2(current);
        if (updated === current)
          continue;
        const hasOverrides = Object.keys(updated).length > 0;
        if (!hasOverrides && overrides[key] === void 0)
          continue;
        if (overrides === previous.overrides)
          overrides = { ...overrides };
        if (hasOverrides) {
          overrides[key] = updated;
        } else {
          delete overrides[key];
        }
        const hasFrom = updated.from !== void 0;
        if (fromKeys.has(key) !== hasFrom) {
          if (fromKeys === previous.fromKeys)
            fromKeys = new Set(fromKeys);
          if (hasFrom) {
            fromKeys.add(key);
          } else {
            fromKeys.delete(key);
          }
        }
      }
      return overrides === previous.overrides ? previous : { overrides, fromKeys };
    });
  }, []);
  const updateDragOverrides = (0, import_react40.useCallback)((nodePath, update2) => updateDragOverridesBatch([{ nodePath, update: update2 }]), [updateDragOverridesBatch]);
  const remapDragOverrideFields = (0, import_react40.useCallback)((remappings) => {
    setDragOverrideState((previous) => {
      const moves = remappings.flatMap((remapping) => {
        const previousKey = makeSequencePropsSubscriptionKey(remapping.previousNodePath);
        const key = remapping.nodePath ? makeSequencePropsSubscriptionKey(remapping.nodePath) : null;
        if (previousKey === key) {
          return [];
        }
        const fields = Object.entries(remapping.fields).filter(([field, expected]) => previous.overrides[previousKey]?.[field] === expected);
        return fields.length > 0 ? [{ previousKey, key, fields }] : [];
      });
      if (moves.length === 0) {
        return previous;
      }
      const overrides = { ...previous.overrides };
      const changedKeys = /* @__PURE__ */ new Set();
      const getMutableFields = (key) => {
        if (!changedKeys.has(key)) {
          changedKeys.add(key);
          overrides[key] = { ...overrides[key] };
        }
        return overrides[key];
      };
      for (const { previousKey, fields } of moves) {
        const source = getMutableFields(previousKey);
        for (const [field] of fields) {
          delete source[field];
        }
      }
      for (const { key, fields } of moves) {
        if (key === null) {
          continue;
        }
        for (const [field, value] of fields) {
          if (overrides[key]?.[field] !== void 0) {
            continue;
          }
          getMutableFields(key)[field] = value;
        }
      }
      let { fromKeys } = previous;
      for (const key of changedKeys) {
        const hasFrom = overrides[key].from !== void 0;
        if (Object.keys(overrides[key]).length === 0) {
          delete overrides[key];
        }
        if (fromKeys.has(key) === hasFrom) {
          continue;
        }
        if (fromKeys === previous.fromKeys) {
          fromKeys = new Set(fromKeys);
        }
        if (hasFrom) {
          fromKeys.add(key);
        } else {
          fromKeys.delete(key);
        }
      }
      return { overrides, fromKeys };
    });
  }, []);
  const subscribeDragOverrides = (0, import_react40.useCallback)((key, listener) => {
    if (key === null) {
      return () => {
        return;
      };
    }
    let listeners6 = dragOverridesStore.current.listeners.get(key);
    if (!listeners6) {
      listeners6 = /* @__PURE__ */ new Set();
      dragOverridesStore.current.listeners.set(key, listeners6);
    }
    listeners6.add(listener);
    return () => {
      listeners6.delete(listener);
      if (listeners6.size === 0) {
        dragOverridesStore.current.listeners.delete(key);
      }
    };
  }, []);
  const getDragOverridesSnapshot = (0, import_react40.useCallback)((key) => {
    return key === null ? emptyDragOverrides : dragOverridesStore.current.snapshot[key] ?? emptyDragOverrides;
  }, []);
  useIsomorphicLayoutEffect4(() => {
    const previous = dragOverridesStore.current.snapshot;
    dragOverridesStore.current.snapshot = dragOverrides;
    for (const key of /* @__PURE__ */ new Set([
      ...Object.keys(previous),
      ...Object.keys(dragOverrides)
    ])) {
      if (previous[key] !== dragOverrides[key]) {
        for (const listener of dragOverridesStore.current.listeners.get(key) ?? []) {
          listener();
        }
      }
    }
  }, [dragOverrides]);
  const subscribeEffectDragOverrides = (0, import_react40.useCallback)((key, listener) => {
    if (key === null) {
      return () => {
        return;
      };
    }
    let listeners6 = effectDragOverridesStore.current.listeners.get(key);
    if (!listeners6) {
      listeners6 = /* @__PURE__ */ new Set();
      effectDragOverridesStore.current.listeners.set(key, listeners6);
    }
    listeners6.add(listener);
    return () => {
      listeners6.delete(listener);
      if (listeners6.size === 0) {
        effectDragOverridesStore.current.listeners.delete(key);
      }
    };
  }, []);
  const getEffectDragOverridesSnapshot = (0, import_react40.useCallback)((key) => {
    return key === null ? emptyEffectDragOverrides : effectDragOverridesStore.current.byNode.get(key) ?? emptyEffectDragOverrides;
  }, []);
  useIsomorphicLayoutEffect4(() => {
    const previous = effectDragOverridesStore.current.snapshot;
    const byNode = new Map(effectDragOverridesStore.current.byNode);
    const changedNodes = /* @__PURE__ */ new Set();
    for (const flatKey of /* @__PURE__ */ new Set([
      ...Object.keys(previous),
      ...Object.keys(effectDragOverridesState)
    ])) {
      if (previous[flatKey] === effectDragOverridesState[flatKey]) {
        continue;
      }
      const separator = flatKey.lastIndexOf(".effects.");
      if (separator === -1) {
        throw new Error("Invalid effect drag override key");
      }
      const nodeKey = flatKey.slice(0, separator);
      const effectIndex = flatKey.slice(separator + ".effects.".length);
      if (!changedNodes.has(nodeKey)) {
        byNode.set(nodeKey, { ...byNode.get(nodeKey) });
        changedNodes.add(nodeKey);
      }
      const next = byNode.get(nodeKey);
      if (effectDragOverridesState[flatKey] === void 0) {
        delete next[effectIndex];
      } else {
        next[effectIndex] = effectDragOverridesState[flatKey];
      }
    }
    for (const nodeKey of changedNodes) {
      if (Object.keys(byNode.get(nodeKey)).length === 0) {
        byNode.delete(nodeKey);
      }
    }
    effectDragOverridesStore.current.snapshot = effectDragOverridesState;
    effectDragOverridesStore.current.byNode = byNode;
    for (const nodeKey of changedNodes) {
      for (const listener of effectDragOverridesStore.current.listeners.get(nodeKey) ?? []) {
        listener();
      }
    }
  }, [effectDragOverridesState]);
  const clearDragOverrides = (0, import_react40.useCallback)((nodePath) => {
    setDragOverrideState((prevState) => {
      const prev = prevState.overrides;
      const key = makeSequencePropsSubscriptionKey(nodePath);
      if (!prev[key]) {
        return prevState;
      }
      const next = { ...prev };
      delete next[key];
      const nextFromKeys = prevState.fromKeys.has(key) ? new Set(prevState.fromKeys) : prevState.fromKeys;
      nextFromKeys.delete(key);
      return { overrides: next, fromKeys: nextFromKeys };
    });
  }, []);
  const setEffectDragOverridesBatch = (0, import_react40.useCallback)((overrides) => {
    setEffectDragOverridesState((prev) => {
      let next = null;
      for (const { nodePath, effectIndex, key, value } of overrides) {
        const mapKey = effectDragOverridesKey(nodePath, effectIndex);
        const existing = (next ?? prev)[mapKey]?.[key];
        if (existing === value || existing?.type === "static" && value.type === "static" && Object.is(existing.value, value.value)) {
          continue;
        }
        if (next === null) {
          next = { ...prev };
        }
        if (next[mapKey] === prev[mapKey]) {
          next[mapKey] = { ...prev[mapKey] };
        }
        next[mapKey][key] = value;
      }
      return next ?? prev;
    });
  }, []);
  const setEffectDragOverrides = (0, import_react40.useCallback)((nodePath, effectIndex, key, value) => setEffectDragOverridesBatch([{ nodePath, effectIndex, key, value }]), [setEffectDragOverridesBatch]);
  const updateEffectDragOverridesBatch = (0, import_react40.useCallback)((updates) => {
    if (updates.length === 0)
      return;
    setEffectDragOverridesState((previous) => {
      let next = previous;
      for (const { nodePath, effectIndex, update: update2 } of updates) {
        const key = effectDragOverridesKey(nodePath, effectIndex);
        const current = next[key] ?? emptyDragOverrides;
        const updated = update2(current);
        if (updated === current)
          continue;
        const hasOverrides = Object.keys(updated).length > 0;
        if (!hasOverrides && next[key] === void 0)
          continue;
        if (next === previous)
          next = { ...previous };
        if (hasOverrides)
          next[key] = updated;
        else
          delete next[key];
      }
      return next;
    });
  }, []);
  const remapEffectDragOverrideFields = (0, import_react40.useCallback)((remappings) => {
    setEffectDragOverridesState((previous) => {
      const moves = remappings.flatMap((remapping) => {
        const previousKey = effectDragOverridesKey(remapping.previousNodePath, remapping.effectIndex);
        const key = remapping.nodePath ? effectDragOverridesKey(remapping.nodePath, remapping.effectIndex) : null;
        if (previousKey === key)
          return [];
        const fields = Object.entries(remapping.fields).filter(([field, expected]) => previous[previousKey]?.[field] === expected);
        return fields.length > 0 ? [{ previousKey, key, fields }] : [];
      });
      if (moves.length === 0)
        return previous;
      const next = { ...previous };
      const changedKeys = /* @__PURE__ */ new Set();
      const getMutableFields = (key) => {
        if (!changedKeys.has(key)) {
          changedKeys.add(key);
          next[key] = { ...next[key] };
        }
        return next[key];
      };
      for (const { previousKey, fields } of moves) {
        const source = getMutableFields(previousKey);
        for (const [field] of fields)
          delete source[field];
      }
      for (const { key, fields } of moves) {
        if (key === null)
          continue;
        for (const [field, value] of fields) {
          if (next[key]?.[field] !== void 0)
            continue;
          getMutableFields(key)[field] = value;
        }
      }
      for (const key of changedKeys) {
        if (Object.keys(next[key]).length === 0)
          delete next[key];
      }
      return next;
    });
  }, []);
  const clearEffectDragOverrides = (0, import_react40.useCallback)((nodePath, effectIndex) => {
    setEffectDragOverridesState((prev) => {
      const mapKey = effectDragOverridesKey(nodePath, effectIndex);
      if (!prev[mapKey]) {
        return prev;
      }
      const next = { ...prev };
      delete next[mapKey];
      return next;
    });
  }, []);
  const updatePropStatuses = (0, import_react40.useCallback)((update2) => {
    const previous = requestedPropStatusesRef.current;
    const next = update2(previous);
    if (next === previous) {
      return;
    }
    requestedPropStatusesRef.current = next;
    setPropStatusesMapState(next);
  }, []);
  const setPropStatusesBatch = (0, import_react40.useCallback)((updates) => {
    if (updates.length === 0)
      return;
    updatePropStatuses((previous) => {
      let next = previous;
      for (const { nodePath, update: update2 } of updates) {
        const key = makeSequencePropsSubscriptionKey(nodePath);
        const current = next[key];
        const updated = update2(current);
        if (updated === current)
          continue;
        if (next === previous)
          next = { ...previous };
        next[key] = updated;
      }
      return next;
    });
  }, [updatePropStatuses]);
  const setPropStatuses = (0, import_react40.useCallback)((nodePath, update2) => setPropStatusesBatch([{ nodePath, update: update2 }]), [setPropStatusesBatch]);
  const remapPropStatuses = (0, import_react40.useCallback)((remappings) => {
    updatePropStatuses((prev) => {
      const next = { ...prev };
      for (const remapping of remappings) {
        delete next[makeSequencePropsSubscriptionKey(remapping.previousNodePath)];
      }
      for (const remapping of remappings) {
        if (remapping.nodePath !== null && remapping.result !== null) {
          next[makeSequencePropsSubscriptionKey(remapping.nodePath)] = remapping.result;
        }
      }
      return next;
    });
  }, [updatePropStatuses]);
  const dragOverridesSubscription = (0, import_react40.useMemo)(() => ({
    subscribe: subscribeDragOverrides,
    getSnapshot: getDragOverridesSnapshot,
    subscribeEffects: subscribeEffectDragOverrides,
    getEffectSnapshot: getEffectDragOverridesSnapshot
  }), [
    getDragOverridesSnapshot,
    getEffectDragOverridesSnapshot,
    subscribeDragOverrides,
    subscribeEffectDragOverrides
  ]);
  const getDragOverrides = (0, import_react40.useCallback)((nodePath) => {
    return dragOverrides[makeSequencePropsSubscriptionKey(nodePath)] ?? {};
  }, [dragOverrides]);
  const getEffectDragOverrides = (0, import_react40.useCallback)((nodePath, effectIndex) => {
    return effectDragOverridesState[effectDragOverridesKey(nodePath, effectIndex)] ?? {};
  }, [effectDragOverridesState]);
  const propStatusesContext = (0, import_react40.useMemo)(() => {
    return {
      propStatuses
    };
  }, [propStatuses]);
  const propStatusesSubscription = (0, import_react40.useMemo)(() => ({
    subscribe: (key, listener) => {
      if (key === null) {
        return () => {
          return;
        };
      }
      let listeners6 = propStatusListeners.current.get(key);
      if (!listeners6) {
        listeners6 = /* @__PURE__ */ new Set();
        propStatusListeners.current.set(key, listeners6);
      }
      listeners6.add(listener);
      return () => {
        listeners6.delete(listener);
        if (listeners6.size === 0) {
          propStatusListeners.current.delete(key);
        }
      };
    },
    getSnapshot: (key) => key === null ? null : requestedPropStatusesRef.current[key] ?? null
  }), []);
  const dragOverridesContext = (0, import_react40.useMemo)(() => {
    return {
      getDragOverrides,
      getEffectDragOverrides
    };
  }, [getDragOverrides, getEffectDragOverrides]);
  const dragOverridesRef = (0, import_react40.useRef)(dragOverridesContext);
  useIsomorphicLayoutEffect4(() => {
    dragOverridesRef.current = dragOverridesContext;
  }, [dragOverridesContext]);
  const settersContext = (0, import_react40.useMemo)(() => {
    return {
      setDragOverrides,
      updateDragOverrides,
      updateDragOverridesBatch,
      remapDragOverrideFields,
      clearDragOverrides,
      setEffectDragOverrides,
      updateEffectDragOverridesBatch,
      remapEffectDragOverrideFields,
      clearEffectDragOverrides,
      setPropStatuses,
      setPropStatusesBatch,
      remapPropStatuses
    };
  }, [
    setDragOverrides,
    updateDragOverrides,
    updateDragOverridesBatch,
    remapDragOverrideFields,
    clearDragOverrides,
    setEffectDragOverrides,
    updateEffectDragOverridesBatch,
    remapEffectDragOverrideFields,
    clearEffectDragOverrides,
    setPropStatuses,
    setPropStatusesBatch,
    remapPropStatuses
  ]);
  const batchSettersContext = (0, import_react40.useMemo)(() => ({ setDragOverridesBatch, setEffectDragOverridesBatch }), [setDragOverridesBatch, setEffectDragOverridesBatch]);
  return /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(SequenceRegistryProvider, {
    children: /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(EffectPreviewProvider, {
      children: /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(VisualModePropStatusesRefContext.Provider, {
        value: propStatusesRef,
        children: /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(VisualModePropStatusesSubscriptionContext.Provider, {
          value: propStatusesSubscription,
          children: /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(VisualModePropStatusesContext.Provider, {
            value: propStatusesContext,
            children: /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(SequenceManagerScopeProviders, {
              dragOverridesSubscription,
              fromKeys: dragOverrideState.fromKeys,
              children: /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(VisualModeDragOverridesContext.Provider, {
                value: dragOverridesContext,
                children: /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(VisualModeDragOverridesRefContext.Provider, {
                  value: dragOverridesRef,
                  children: /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(VisualModeSettersContext.Provider, {
                    value: settersContext,
                    children: /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(VisualModeBatchSettersContext.Provider, {
                      value: batchSettersContext,
                      children
                    })
                  })
                })
              })
            })
          })
        })
      })
    })
  });
};
var TimelineTrackContext = (0, import_react45.createContext)(null);
var PremountContext = (0, import_react47.createContext)({
  premountFramesRemaining: 0
});
var usePremounting = ({
  from,
  durationInFrames,
  premountFor,
  postmountFor,
  style,
  styleWhilePremounted,
  styleWhilePostmounted,
  hideWhilePremounted
}) => {
  const parentPremountContext = (0, import_react46.useContext)(PremountContext);
  const environment = useRemotionEnvironment();
  const { fps } = useVideoConfig();
  const defaultPremountInSeconds = (0, import_react46.useContext)(DefaultPremountContext);
  const effectivePremountFor = premountFor ?? Math.round(defaultPremountInSeconds * fps);
  const effectivePostmountFor = postmountFor ?? 0;
  const needsFrame = !environment.isRendering && (effectivePremountFor !== 0 || effectivePostmountFor !== 0);
  const frame = useCurrentFrameWithOptionalSubscription(needsFrame) - parentPremountContext.premountFramesRemaining;
  const endExclusive = from + durationInFrames;
  const sequenceContext = (0, import_react46.useContext)(SequenceContext);
  const boundaryTolerance = getSequenceBoundaryTolerance({
    absoluteFrame: useTimelinePositionWithOptionalSubscription(needsFrame),
    cumulatedFrom: sequenceContext ? sequenceContext.cumulatedFrom + sequenceContext.relativeFrom : 0,
    from,
    parentPlaybackRate: sequenceContext?.playbackRate ?? 1,
    durationInFrames
  });
  const premountingActive = !environment.isRendering && frame - from < -boundaryTolerance && frame - (from - effectivePremountFor) >= -boundaryTolerance;
  const postmountingActive = !environment.isRendering && frame - endExclusive >= -boundaryTolerance && frame - (endExclusive + effectivePostmountFor) < -boundaryTolerance;
  const isPremountingOrPostmounting = premountingActive || postmountingActive;
  const freezeFrame = premountingActive ? from : postmountingActive ? from + durationInFrames - 1 : 0;
  const premountingStyle = (0, import_react46.useMemo)(() => {
    if (!isPremountingOrPostmounting) {
      return style;
    }
    return {
      ...style,
      ...hideWhilePremounted === "opacity" ? { opacity: 0 } : { display: "none" },
      pointerEvents: "none",
      ...premountingActive ? styleWhilePremounted : {},
      ...postmountingActive ? styleWhilePostmounted : {}
    };
  }, [
    isPremountingOrPostmounting,
    hideWhilePremounted,
    postmountingActive,
    premountingActive,
    style,
    styleWhilePostmounted,
    styleWhilePremounted
  ]);
  return {
    effectivePremountFor,
    effectivePostmountFor,
    premountingActive,
    postmountingActive,
    isPremountingOrPostmounting,
    freezeFrame,
    premountingStyle
  };
};
var useIsomorphicLayoutEffect5 = typeof window === "undefined" ? import_react48.useEffect : import_react48.useLayoutEffect;
var useSequenceRegistration = ({
  getSequence,
  id
}) => {
  const { registerSequence, unregisterSequence, updateSequence } = (0, import_react48.useContext)(SequenceManagerActionsContext);
  const registrationDisabled = (0, import_react48.useContext)(DisableSequenceRegistrationContext);
  const commitRegistrationEnabled = (0, import_react48.useContext)(SequenceCommitRegistrationContext);
  const getSequenceRef = (0, import_react48.useRef)(getSequence);
  useIsomorphicLayoutEffect5(() => {
    getSequenceRef.current = getSequence;
  }, [getSequence]);
  const lastRegisteredGetterRef = (0, import_react48.useRef)(null);
  const registrationEnabled = getSequence !== null && !registrationDisabled && !commitRegistrationEnabled;
  const registration = (0, import_react48.useMemo)(() => commitRegistrationEnabled && !registrationDisabled && getSequence !== null ? getSequence() : null, [commitRegistrationEnabled, getSequence, registrationDisabled]);
  (0, import_react48.useEffect)(() => {
    if (!registrationEnabled) {
      return;
    }
    const currentGetter = getSequenceRef.current;
    if (currentGetter === null) {
      throw new Error("Expected a sequence registration getter");
    }
    registerSequence(currentGetter());
    lastRegisteredGetterRef.current = currentGetter;
    return () => {
      lastRegisteredGetterRef.current = null;
      unregisterSequence(id);
    };
  }, [id, registerSequence, registrationEnabled, unregisterSequence]);
  useIsomorphicLayoutEffect5(() => {
    if (commitRegistrationEnabled || registrationDisabled || getSequence === null || lastRegisteredGetterRef.current === null || lastRegisteredGetterRef.current === getSequence) {
      return;
    }
    updateSequence(getSequence());
    lastRegisteredGetterRef.current = getSequence;
  }, [
    commitRegistrationEnabled,
    getSequence,
    registrationDisabled,
    updateSequence
  ]);
  return registration;
};
var deleteNestedKey = (obj, keysToRemove) => {
  for (const key of keysToRemove) {
    const parts = key.split(".");
    const parents = [obj];
    let current = obj;
    for (let i = 0; i < parts.length - 1; i++) {
      const part = parts[i];
      const next = current[part];
      if (next === void 0 || next === null) {
        current = null;
        break;
      }
      current = next;
      parents.push(current);
    }
    if (current === null) {
      continue;
    }
    delete current[parts[parts.length - 1]];
    for (let i = parents.length - 1; i > 0; i--) {
      const parent = parents[i];
      if (Object.keys(parent).length === 0) {
        const parentKey = parts[i - 1];
        delete parents[i - 1][parentKey];
      } else {
        break;
      }
    }
  }
  return obj;
};
var interpolatePaths = null;
var setInterpolatePaths = (interpolator) => {
  interpolatePaths = interpolator;
};
var easingToFn = ({
  easing,
  forceSpringAllowTail
}) => {
  switch (easing.type) {
    case "linear":
      return Easing2.linear;
    case "step1":
      return Easing2.step1;
    case "spring":
      return Easing2.spring({
        allowTail: forceSpringAllowTail ?? easing.allowTail ?? void 0,
        damping: easing.damping,
        durationRestThreshold: easing.durationRestThreshold ?? void 0,
        mass: easing.mass,
        overshootClamping: easing.overshootClamping,
        stiffness: easing.stiffness
      });
    case "bezier":
      return bezier(easing.x1, easing.y1, easing.x2, easing.y2);
    default:
      throw new TypeError(`Unsupported easing: ${JSON.stringify(easing)}`);
  }
};
var prepareNumericKeyframedStatus = ({
  forceSpringAllowTail,
  status
}) => {
  if (status.interpolationFunction !== "interpolate" || status.keyframes.length === 0) {
    return null;
  }
  const sortedKeyframes = [...status.keyframes].sort((a2, b2) => a2.frame - b2.frame);
  const inputRange = sortedKeyframes.map((keyframe) => keyframe.frame);
  const outputRange = sortedKeyframes.map((keyframe) => keyframe.value);
  if (!outputRange.every((value) => typeof value === "number")) {
    return null;
  }
  try {
    const evaluate = prepareNumericInterpolation({
      inputRange,
      outputRange,
      options: {
        easing: status.easing.map((easing) => easingToFn({ easing, forceSpringAllowTail })),
        extrapolateLeft: status.clamping.left,
        extrapolateRight: status.clamping.right,
        output: status.output,
        posterize: status.posterize
      }
    });
    return (frame) => {
      try {
        return evaluate(frame);
      } catch {
        return null;
      }
    };
  } catch {
    return null;
  }
};
var interpolateKeyframedStatus = ({
  frame,
  forceSpringAllowTail,
  status
}) => {
  const { keyframes, easing, clamping, interpolationFunction } = status;
  if (keyframes.length === 0) {
    return null;
  }
  const sortedKeyframes = [...keyframes].sort((a2, b2) => a2.frame - b2.frame);
  const inputRange = sortedKeyframes.map((k) => k.frame);
  const outputs = sortedKeyframes.map((k) => k.value);
  if (interpolationFunction === "interpolatePaths") {
    if (!outputs.every((v) => typeof v === "string")) {
      return null;
    }
    if (keyframes.length === 1) {
      return outputs[0];
    }
    if (!interpolatePaths || clamping.left === "identity" || clamping.right === "identity") {
      return null;
    }
    try {
      return interpolatePaths(frame, inputRange, outputs, {
        easing: easing.map((e) => easingToFn({ easing: e, forceSpringAllowTail })),
        extrapolateLeft: clamping.left,
        extrapolateRight: clamping.right,
        posterize: status.posterize
      });
    } catch {
      return null;
    }
  }
  if (interpolationFunction === "interpolateColors") {
    if (!outputs.every((v) => typeof v === "string")) {
      return null;
    }
    if (keyframes.length === 1) {
      return outputs[0];
    }
    try {
      return interpolateColors2(frame, inputRange, outputs, {
        easing: easing.map((e) => easingToFn({ easing: e, forceSpringAllowTail })),
        posterize: status.posterize
      });
    } catch {
      return null;
    }
  }
  if (interpolationFunction !== "interpolate") {
    return null;
  }
  try {
    return interpolate2(frame, inputRange, outputs, {
      easing: easing.map((e) => easingToFn({ easing: e, forceSpringAllowTail })),
      extrapolateLeft: clamping.left,
      extrapolateRight: clamping.right,
      output: status.output,
      posterize: status.posterize
    });
  } catch {
    return null;
  }
};
var getFrameInKeyframedStatusClock = ({
  frame,
  status
}) => frame * (status.keyframePlaybackRateAdjustment ?? 1) - (status.keyframeDisplayOffsetAdjustment ?? 0);
var resolveDragOverrideValue = ({
  dragOverrideValue,
  frame
}) => {
  if (dragOverrideValue === void 0) {
    return { type: "none" };
  }
  if (dragOverrideValue.type === "static") {
    return { type: "resolved", value: dragOverrideValue.value };
  }
  if (frame === null) {
    return { type: "none" };
  }
  const interpolated = interpolateKeyframedStatus({
    forceSpringAllowTail: null,
    frame: getFrameInKeyframedStatusClock({
      frame,
      status: dragOverrideValue.status
    }),
    status: dragOverrideValue.status
  });
  if (interpolated === null) {
    return { type: "none" };
  }
  return { type: "resolved", value: interpolated };
};
var getEffectiveVisualModeValue = ({
  propStatus,
  dragOverrideValue,
  defaultValue,
  frame = null,
  shouldResortToDefaultValueIfUndefined = false
}) => {
  const dragOverride = resolveDragOverrideValue({
    dragOverrideValue,
    frame
  });
  if (dragOverride.type === "resolved" && dragOverride.value !== void 0) {
    return dragOverride.value;
  }
  if (propStatus.status === "keyframed") {
    if (frame !== null) {
      return interpolateKeyframedStatus({
        forceSpringAllowTail: null,
        frame: getFrameInKeyframedStatusClock({ frame, status: propStatus }),
        status: propStatus
      });
    }
    return shouldResortToDefaultValueIfUndefined ? defaultValue : void 0;
  }
  if (propStatus.codeValue === void 0 && shouldResortToDefaultValueIfUndefined) {
    return defaultValue;
  }
  return propStatus.codeValue;
};
var nodes = /* @__PURE__ */ new Map();
var listeners = /* @__PURE__ */ new Set();
var keyForNode = (nodePath) => JSON.stringify([nodePath.absolutePath, nodePath.nodePath]);
var OptimisticEffectPropStatuses = {
  get: (nodePath, id) => nodes.get(keyForNode(nodePath))?.get(id) ?? null,
  set: (nodePath, id, props) => {
    const key = keyForNode(nodePath);
    const current = nodes.get(key);
    if ((current?.get(id) ?? null) === props)
      return;
    if (props === null) {
      current?.delete(id);
      if (current?.size === 0)
        nodes.delete(key);
    } else {
      const next = current ?? /* @__PURE__ */ new Map();
      next.set(id, props);
      nodes.set(key, next);
    }
    for (const listener of listeners)
      listener(nodePath);
  },
  copy: (nodePath, fromId, toId) => {
    const props = OptimisticEffectPropStatuses.get(nodePath, fromId);
    if (props === null)
      return;
    OptimisticEffectPropStatuses.set(nodePath, toId, props);
  },
  removeNode: (nodePath) => {
    if (!nodes.delete(keyForNode(nodePath)))
      return;
    for (const listener of listeners)
      listener(nodePath);
  },
  remap: (remappings) => {
    const moved = remappings.map(({ oldNodePath, nodePath }) => ({
      oldNodePath,
      nodePath,
      props: nodes.get(keyForNode(oldNodePath))
    }));
    for (const { oldNodePath } of moved)
      nodes.delete(keyForNode(oldNodePath));
    for (const { nodePath, props } of moved) {
      if (nodePath !== null && props)
        nodes.set(keyForNode(nodePath), props);
    }
    for (const { oldNodePath, nodePath } of moved) {
      for (const listener of listeners)
        listener(oldNodePath);
      if (nodePath !== null)
        for (const listener of listeners)
          listener(nodePath);
    }
  },
  clear: () => nodes.clear(),
  subscribe: (listener) => {
    listeners.add(listener);
    return () => {
      listeners.delete(listener);
    };
  }
};
var entries = /* @__PURE__ */ new Map();
var listeners2 = /* @__PURE__ */ new Set();
var nodeListeners = /* @__PURE__ */ new Map();
var installedMutations = /* @__PURE__ */ new Set();
var acknowledgedMutations = /* @__PURE__ */ new Set();
var activeSourceRevision = null;
var nextId = 0;
var nextOperation = 0;
var snapshot = [];
var emptyItems = [];
var keyForNode2 = (node) => JSON.stringify([node.absolutePath, node.nodePath]);
var apply = (entry, items, operation) => {
  const { action } = operation;
  if (action.type === "restore") {
    const fromIds = new Set(action.fromItems.map((item) => item.id));
    const targetIds = new Set(action.items.map((item) => item.id));
    const restored = items.filter((item) => !fromIds.has(item.id) || targetIds.has(item.id));
    for (let targetIndex = 0; targetIndex < action.items.length; targetIndex++) {
      const target = action.items[targetIndex];
      const existingIndex = restored.findIndex((item) => item.id === target.id);
      const isMove = action.movedIds.includes(target.id) && existingIndex !== -1;
      if (!isMove && (fromIds.has(target.id) || existingIndex !== -1))
        continue;
      const restoredItem = isMove ? restored.splice(existingIndex, 1)[0] : entry.recipes.get(target.id) ?? target;
      const following = action.items.slice(targetIndex + 1).find((item) => restored.some((current) => current.id === item.id));
      const preceding = action.items.slice(0, targetIndex).reverse().find((item) => restored.some((current) => current.id === item.id));
      const position = following ? restored.findIndex((item) => item.id === following.id) : preceding ? restored.findIndex((item) => item.id === preceding.id) + 1 : restored.length;
      restored.splice(position, 0, restoredItem);
    }
    return restored;
  }
  if (action.type === "delete") {
    if (action.ids.some((id) => !items.some((item) => item.id === id)))
      return null;
    return items.filter((item) => !action.ids.includes(item.id));
  }
  if (action.type === "duplicate") {
    if (action.ids.some((id) => !items.some((item) => item.id === id)))
      return null;
    return items.flatMap((item) => {
      const index = action.ids.indexOf(item.id);
      return index === -1 ? [item] : [item, entry.recipes.get(operation.addedIds[index])];
    });
  }
  if (action.beforeId !== null && !items.some((item) => item.id === action.beforeId))
    return null;
  if (action.type === "add") {
    const index = action.beforeId === null ? items.length : items.findIndex((item) => item.id === action.beforeId);
    return [
      ...items.slice(0, index),
      entry.recipes.get(operation.addedIds[0]),
      ...items.slice(index)
    ];
  }
  const moving = items.find((candidate) => candidate.id === action.id);
  if (!moving)
    return null;
  if (action.beforeId === action.id)
    return items;
  const remaining = items.filter((candidate) => candidate !== moving);
  const destination = action.beforeId === null ? remaining.length : remaining.findIndex((candidate) => candidate.id === action.beforeId);
  return [
    ...remaining.slice(0, destination),
    moving,
    ...remaining.slice(destination)
  ];
};
var update = (entry) => {
  let items = entry.compiled;
  let persisted = entry.compiled;
  for (const operation of entry.operations) {
    if (operation.status !== "queued" && operation.status !== "acknowledged")
      continue;
    const result = apply(entry, items, operation);
    if (result === null) {
      operation.status = "cancelled";
      continue;
    }
    items = result;
    if (operation.status === "acknowledged") {
      persisted = apply(entry, persisted, operation) ?? persisted;
    }
  }
  if (!entry.operations.some((operation) => operation.status === "queued" || operation.status === "acknowledged")) {
    entry.frozenRuntime = false;
    entry.refreshMutationIds.clear();
  }
  const compiledIndexes = new Map(entry.compiled.map((item, index) => [item.id, index]));
  const persistedIndexes = new Map(persisted.map((item, index) => [item.id, index]));
  const describe = (item) => {
    let origin = item;
    const visited = /* @__PURE__ */ new Set();
    while (!compiledIndexes.has(origin.id) && origin.originId !== null && !visited.has(origin.id)) {
      visited.add(origin.id);
      const previous = entry.recipes.get(origin.originId);
      if (!previous)
        break;
      origin = previous;
    }
    const sourceIndex = compiledIndexes.get(origin.id) ?? null;
    return {
      ...item,
      descriptor: sourceIndex === null ? origin.descriptor : null,
      sourceIndex,
      runtimeSourceIndex: sourceIndex,
      persistedIndex: persistedIndexes.get(item.id) ?? null,
      propStatuses: OptimisticEffectPropStatuses.get(entry.nodePath, item.id)
    };
  };
  entry.snapshot = {
    nodePath: entry.nodePath,
    compiledItems: entry.compiled.map(describe),
    persistedItems: persisted.map(describe),
    items: items.map(describe),
    operations: [...entry.operations]
  };
};
var publish = (keys) => {
  snapshot = [...entries.values()].map((entry) => entry.snapshot);
  for (const key of new Set(keys)) {
    for (const listener of nodeListeners.get(key) ?? [])
      listener();
  }
  for (const listener of listeners2)
    listener();
};
var settleEntry = (entry) => {
  let last = -1;
  for (let index = 0; index < entry.operations.length; index++) {
    const operation = entry.operations[index];
    if (operation.status === "queued")
      break;
    if (operation.status === "acknowledged" && operation.mutationId !== null && installedMutations.has(operation.mutationId))
      last = index;
  }
  if (last === -1)
    return false;
  let { compiled } = entry;
  for (const operation of entry.operations.splice(0, last + 1)) {
    if (operation.status !== "acknowledged")
      continue;
    compiled = apply(entry, compiled, operation) ?? compiled;
    operation.status = "settled";
  }
  entry.compiled = compiled.map((item) => ({
    ...item,
    originId: item.id,
    descriptor: null
  }));
  for (const item of entry.compiled)
    entry.recipes.set(item.id, item);
  update(entry);
  return true;
};
var subscribeToKey = (key, listener) => {
  if (key === null)
    return () => {
      return;
    };
  const current = nodeListeners.get(key) ?? /* @__PURE__ */ new Set();
  current.add(listener);
  nodeListeners.set(key, current);
  return () => {
    current.delete(listener);
    if (current.size === 0)
      nodeListeners.delete(key);
  };
};
var ensure = (nodePath, definitions) => {
  const key = keyForNode2(nodePath);
  const previous = entries.get(key);
  if (previous)
    return previous;
  const compiled = definitions.map((definition) => {
    const id = `effect-${++nextId}`;
    return { id, definition, originId: id, descriptor: null };
  });
  const entry = {
    nodePath,
    compiled,
    operations: [],
    recipes: new Map(compiled.map((item) => [item.id, item])),
    frozenRuntime: false,
    refreshPending: false,
    refreshMutationIds: /* @__PURE__ */ new Set(),
    refreshSourceRevision: null,
    snapshot: {
      nodePath,
      compiledItems: [],
      persistedItems: [],
      items: [],
      operations: []
    }
  };
  update(entry);
  entries.set(key, entry);
  snapshot = [...entries.values()].map((item) => item.snapshot);
  return entry;
};
OptimisticEffectPropStatuses.subscribe((nodePath) => {
  const entry = entries.get(keyForNode2(nodePath));
  if (!entry)
    return;
  update(entry);
  publish([keyForNode2(nodePath)]);
});
var entryForEffect = (nodePath, id) => {
  const entry = entries.get(keyForNode2(nodePath));
  if (entry?.recipes.has(id))
    return entry;
  return [...entries.values()].find((candidate) => candidate.recipes.has(id));
};
var releaseRefreshedRuntimes = () => {
  const changed = [];
  for (const [key, entry] of entries) {
    if (!entry.frozenRuntime || entry.refreshPending || entry.refreshSourceRevision !== null && entry.refreshSourceRevision === activeSourceRevision && [...entry.refreshMutationIds].some((id) => !acknowledgedMutations.has(id)))
      continue;
    entry.frozenRuntime = false;
    entry.refreshMutationIds.clear();
    update(entry);
    changed.push(key);
  }
  return changed;
};
var acknowledgeOperations = (operations, mutationId) => {
  const changedEntries = /* @__PURE__ */ new Set();
  for (const operation of operations) {
    const entry = entries.get(keyForNode2(operation.nodePath));
    if (!entry || operation.status !== "queued")
      continue;
    operation.status = "acknowledged";
    operation.mutationId = mutationId;
    changedEntries.add(entry);
  }
  acknowledgedMutations.add(mutationId);
  const changedKeys = [];
  for (const entry of changedEntries) {
    update(entry);
    settleEntry(entry);
    changedKeys.push(keyForNode2(entry.nodePath));
  }
  changedKeys.push(...releaseRefreshedRuntimes());
  if (changedKeys.length > 0)
    publish(changedKeys);
};
var OptimisticEffects = {
  get: (nodePath) => entries.get(keyForNode2(nodePath))?.snapshot ?? null,
  getItems: (nodePath, definitions) => {
    const entry = definitions === null ? entries.get(keyForNode2(nodePath)) : ensure(nodePath, definitions);
    return entry?.snapshot.items ?? emptyItems;
  },
  getSnapshot: () => snapshot,
  startSourceMutation: (revision) => {
    activeSourceRevision = revision;
  },
  finishSourceMutation: (revision) => {
    if (activeSourceRevision === revision)
      activeSourceRevision = null;
    const changed = releaseRefreshedRuntimes();
    if (changed.length > 0)
      publish(changed);
  },
  startRefresh: () => {
    for (const entry of entries.values()) {
      if (entry.operations.some((operation) => operation.status === "queued" || operation.status === "acknowledged")) {
        entry.frozenRuntime = true;
        entry.refreshPending = true;
        entry.refreshSourceRevision = activeSourceRevision;
      }
    }
  },
  acknowledgeMutation: (mutationId) => {
    acknowledgedMutations.add(mutationId);
    const changed = releaseRefreshedRuntimes();
    if (changed.length > 0)
      publish(changed);
  },
  getPropStatuses: (nodePath, id) => {
    const entry = entryForEffect(nodePath, id);
    return entry ? OptimisticEffectPropStatuses.get(entry.nodePath, id) : null;
  },
  setPropStatuses: (nodePath, id, props) => {
    const entry = entryForEffect(nodePath, id);
    if (entry)
      OptimisticEffectPropStatuses.set(entry.nodePath, id, props);
  },
  subscribe: (listener) => {
    listeners2.add(listener);
    return () => {
      listeners2.delete(listener);
    };
  },
  subscribeToNode: (nodePath, listener) => subscribeToKey(keyForNode2(nodePath), listener),
  begin: ({
    nodePath,
    definitions,
    action
  }) => {
    const entry = ensure(nodePath, definitions);
    if (action.type === "restore") {
      for (const item of action.items) {
        if (!entry.recipes.has(item.id))
          entry.recipes.set(item.id, item);
      }
    }
    const added = action.type === "add" ? [
      {
        id: `effect-${++nextId}`,
        definition: action.definition,
        originId: null,
        descriptor: action.descriptor
      }
    ] : action.type === "duplicate" ? action.ids.map((id) => {
      const item = entry.snapshot.items.find((candidate) => candidate.id === id);
      if (!item)
        throw new Error("The effect is no longer available.");
      return {
        id: `effect-${++nextId}`,
        definition: item.definition,
        originId: id,
        descriptor: null
      };
    }) : [];
    for (const item of added)
      entry.recipes.set(item.id, item);
    const operation = {
      id: ++nextOperation,
      get nodePath() {
        return entry.nodePath;
      },
      addedIds: added.map((item) => item.id),
      action: action.type === "add" ? {
        type: "add",
        beforeId: action.index === null ? null : entry.snapshot.items[action.index]?.id ?? null
      } : action,
      status: "queued",
      mutationId: null
    };
    entry.operations.push(operation);
    if (action.type === "duplicate") {
      action.ids.forEach((id, index) => OptimisticEffectPropStatuses.copy(entry.nodePath, id, added[index].id));
    }
    update(entry);
    publish([keyForNode2(entry.nodePath)]);
    return operation;
  },
  resolveIndex: (nodePath, id) => {
    const index = entries.get(keyForNode2(nodePath))?.snapshot.persistedItems.findIndex((item) => item.id === id) ?? -1;
    return index < 0 ? null : index;
  },
  getItemsAfterOperation: (operation) => {
    const entry = entries.get(keyForNode2(operation.nodePath));
    if (!entry)
      return null;
    let items = entry.compiled;
    for (const pending of entry.operations) {
      if (pending.status === "queued" || pending.status === "acknowledged") {
        const next = apply(entry, items, pending);
        if (next === null)
          return null;
        items = next;
      }
      if (pending === operation)
        return items;
    }
    return null;
  },
  getOperationStatus: (operation) => operation.status,
  setAddedDescriptor: (operation, descriptor) => {
    const entry = entries.get(keyForNode2(operation.nodePath));
    if (!entry || operation.action.type !== "add" || operation.status === "failed" || operation.status === "cancelled" || operation.status === "settled")
      return;
    const id = operation.addedIds[0];
    const item = entry.recipes.get(id);
    if (!item)
      return;
    for (const recipe of entry.recipes.values()) {
      let origin = recipe;
      const visited = /* @__PURE__ */ new Set();
      while (origin.id !== id && origin.originId !== null && !visited.has(origin.id)) {
        visited.add(origin.id);
        const previous = entry.recipes.get(origin.originId);
        if (!previous)
          break;
        origin = previous;
      }
      if (origin.id !== id)
        continue;
      entry.recipes.set(recipe.id, {
        ...recipe,
        definition: descriptor.definition,
        descriptor: recipe.id === id ? descriptor : recipe.descriptor
      });
    }
    update(entry);
    publish([keyForNode2(entry.nodePath)]);
  },
  acknowledge: (operation, mutationId) => acknowledgeOperations([operation], mutationId),
  acknowledgeOperations,
  settle: (mutationIds) => {
    for (const id of mutationIds)
      installedMutations.add(id);
    const keys = [];
    for (const [key, entry] of entries) {
      if (entry.frozenRuntime) {
        entry.refreshPending = false;
        for (const id of mutationIds)
          entry.refreshMutationIds.add(id);
      }
      if (settleEntry(entry))
        keys.push(key);
    }
    keys.push(...releaseRefreshedRuntimes());
    if (keys.length > 0)
      publish(keys);
  },
  rollback: (operation) => {
    const entry = entries.get(keyForNode2(operation.nodePath));
    if (!entry || operation.status === "settled" || operation.status === "failed" || operation.status === "cancelled")
      return;
    operation.status = "failed";
    update(entry);
    publish([keyForNode2(entry.nodePath)]);
  },
  remap: (remappings) => {
    const changes = remappings.map(({ oldNodePath, nodePath }) => ({
      oldKey: keyForNode2(oldNodePath),
      nodePath,
      entry: entries.get(keyForNode2(oldNodePath))
    }));
    for (const { oldKey } of changes)
      entries.delete(oldKey);
    OptimisticEffectPropStatuses.remap(remappings);
    const changedKeys = [];
    for (const { oldKey, nodePath, entry } of changes) {
      if (!entry)
        continue;
      changedKeys.push(oldKey);
      if (nodePath === null) {
        for (const operation of entry.operations)
          if (operation.status === "queued")
            operation.status = "cancelled";
        continue;
      }
      entry.nodePath = nodePath;
      const newKey = keyForNode2(nodePath);
      entries.set(newKey, entry);
      changedKeys.push(newKey);
      update(entry);
    }
    publish(changedKeys);
  },
  clear: () => {
    const keys = [...entries.keys()];
    for (const entry of entries.values())
      for (const operation of entry.operations)
        if (operation.status === "queued")
          operation.status = "cancelled";
    entries.clear();
    OptimisticEffectPropStatuses.clear();
    installedMutations.clear();
    acknowledgedMutations.clear();
    activeSourceRevision = null;
    publish(keys);
  },
  invalidateFile: (absolutePath) => {
    const keys = [];
    for (const [key, entry] of entries) {
      if (entry.nodePath.absolutePath !== absolutePath)
        continue;
      for (const operation of entry.operations) {
        if (operation.status === "queued" || operation.status === "acknowledged")
          operation.status = "cancelled";
      }
      entries.delete(key);
      OptimisticEffectPropStatuses.removeNode(entry.nodePath);
      keys.push(key);
    }
    if (keys.length > 0)
      publish(keys);
  },
  reconcile: (nodePath, definitions) => {
    const entry = entries.get(keyForNode2(nodePath));
    if (!entry || entry.operations.some((operation) => operation.status === "queued" || operation.status === "acknowledged"))
      return;
    if (entry.compiled.length === definitions.length && entry.compiled.every((item, index) => item.definition === definitions[index]))
      return;
    const available = [...entry.compiled];
    const sameOrder = entry.compiled.length === definitions.length && entry.compiled.every((item, index) => item.definition.type === definitions[index].type);
    entry.compiled = definitions.map((definition, position) => {
      if (sameOrder)
        return { ...entry.compiled[position], definition };
      const index = available.findIndex((item) => item.definition === definition);
      if (index !== -1)
        return available.splice(index, 1)[0];
      const sameTypeIndex = available.findIndex((item) => item.definition.type === definition.type);
      if (sameTypeIndex !== -1)
        return { ...available.splice(sameTypeIndex, 1)[0], definition };
      const id = `effect-${++nextId}`;
      return { id, definition, originId: id, descriptor: null };
    });
    entry.operations = [];
    entry.recipes = new Map(entry.compiled.map((item) => [item.id, item]));
    update(entry);
    publish([keyForNode2(entry.nodePath)]);
  },
  projectEffects: (nodePath, effects, history) => {
    const entry = nodePath === null ? null : entries.get(keyForNode2(nodePath));
    if (entry && history && !entry.frozenRuntime && entry.compiled.length === effects.length && entry.compiled.every((item, index) => item.definition === effects[index].definition)) {
      entry.compiled.forEach((item, index) => history.set(item.id, effects[index]));
    }
    if (!entry || !entry.operations.some((operation) => operation.status === "queued" || operation.status === "acknowledged"))
      return {
        effects,
        sourceIndices: null,
        itemIds: entry?.snapshot.items.map((item) => item.id) ?? null
      };
    const projected = [];
    const sourceIndices = [];
    const itemIds = [];
    for (const item of entry.snapshot.items) {
      const compiledId = item.sourceIndex === null ? null : entry.compiled[item.sourceIndex]?.id;
      const descriptor = compiledId !== null && entry.frozenRuntime ? history?.get(compiledId) : item.sourceIndex === null ? item.descriptor ?? history?.get(item.originId ?? item.id) ?? null : effects[item.sourceIndex];
      if (!descriptor)
        continue;
      history?.set(item.id, descriptor);
      projected.push(descriptor);
      sourceIndices.push(item.sourceIndex);
      itemIds.push(item.id);
    }
    return { effects: projected, sourceIndices, itemIds };
  }
};
var useOptimisticEffects = (nodePath) => {
  const key = nodePath === null ? null : keyForNode2(nodePath);
  const observer = (0, import_react51.useMemo)(() => ({
    subscribe: (listener) => subscribeToKey(key, listener),
    getSnapshot: () => key === null ? null : entries.get(key)?.snapshot ?? null
  }), [key]);
  return useSyncExternalStore2(observer.subscribe, observer.getSnapshot, () => null);
};
var OverrideIdsToNodePathsGettersContext = (0, import_react52.createContext)({
  overrideIdToNodePathMappings: {}
});
var OverrideIdsToNodePathsSettersContext = (0, import_react52.createContext)({
  setOverrideIdToNodePath: () => {
    throw new Error("OverrideIdsToNodePathsSettersContext not initialized");
  }
});
var observers = /* @__PURE__ */ new Map();
var redrawListeners = /* @__PURE__ */ new Map();
var identities = /* @__PURE__ */ new WeakMap();
var inspectedChains = /* @__PURE__ */ new WeakMap();
var sourceChainOwners = /* @__PURE__ */ new Map();
var useIdentityCommitEffect = import_react53.default.useInsertionEffect ?? import_react53.useLayoutEffect;
var subscribeToEffectSource = ({
  sequenceKey,
  effectIndex,
  onSource
}) => {
  let sequence = observers.get(sequenceKey);
  if (!sequence) {
    sequence = /* @__PURE__ */ new Map();
    observers.set(sequenceKey, sequence);
  }
  let listeners6 = sequence.get(effectIndex);
  if (!listeners6) {
    listeners6 = /* @__PURE__ */ new Set();
    sequence.set(effectIndex, listeners6);
  }
  listeners6.add(onSource);
  redrawListeners.get(sequenceKey)?.forEach((redraw) => redraw());
  return () => {
    listeners6.delete(onSource);
    if (listeners6.size === 0) {
      sequence.delete(effectIndex);
    }
    if (sequence.size === 0) {
      observers.delete(sequenceKey);
    }
  };
};
var publishEffectSource = (effect, source, chain) => {
  if (observers.size === 0) {
    return;
  }
  const identity = identities.get(effect);
  if (!identity) {
    return;
  }
  const listeners6 = observers.get(identity.sequenceKey)?.get(identity.effectIndex);
  if (!listeners6 || listeners6.size === 0) {
    return;
  }
  let inspected = inspectedChains.get(chain);
  if (!inspected) {
    inspected = /* @__PURE__ */ new Map();
    inspectedChains.set(chain, inspected);
  }
  const key = `${identity.sequenceKey}\0${identity.effectIndex}`;
  inspected.set(key, identity);
  sourceChainOwners.set(key, chain);
  listeners6.forEach((listener) => {
    try {
      listener(source);
    } catch {
    }
  });
};
var invalidateEffectChainSources = (chain) => {
  const inspected = inspectedChains.get(chain);
  inspectedChains.delete(chain);
  inspected?.forEach((identity, key) => {
    if (sourceChainOwners.get(key) !== chain) {
      return;
    }
    sourceChainOwners.delete(key);
    observers.get(identity.sequenceKey)?.get(identity.effectIndex)?.forEach((listener) => {
      try {
        listener(null);
      } catch {
      }
    });
  });
};
var useEffectSourceInspection = (effects, sequenceKey) => {
  const [revision, setRevision] = (0, import_react53.useState)(0);
  (0, import_react53.useLayoutEffect)(() => {
    if (sequenceKey === null) {
      return;
    }
    let listeners6 = redrawListeners.get(sequenceKey);
    if (!listeners6) {
      listeners6 = /* @__PURE__ */ new Set();
      redrawListeners.set(sequenceKey, listeners6);
    }
    const redraw = () => setRevision((previous) => previous + 1);
    listeners6.add(redraw);
    if (observers.has(sequenceKey)) {
      redraw();
    }
    return () => {
      listeners6.delete(redraw);
      if (listeners6.size === 0) {
        redrawListeners.delete(sequenceKey);
        observers.get(sequenceKey)?.forEach((sourceListeners) => {
          sourceListeners.forEach((listener) => {
            try {
              listener(null);
            } catch {
            }
          });
        });
      }
    };
  }, [sequenceKey]);
  useIdentityCommitEffect(() => {
    if (sequenceKey === null) {
      return;
    }
    effects.forEach((effect, effectIndex) => {
      identities.set(effect, { sequenceKey, effectIndex });
    });
    return () => {
      effects.forEach((effect) => identities.delete(effect));
    };
  }, [effects, sequenceKey]);
  return (0, import_react53.useMemo)(() => {
    return sequenceKey === null || revision === 0 ? effects : effects.slice();
  }, [effects, revision, sequenceKey]);
};
var emptyDragOverrides2 = {};
var useCacheCommitEffect = import_react50.default.useInsertionEffect ?? import_react50.useLayoutEffect;
var areEffectParamsEqual = (previous, next) => {
  if (Object.is(previous, next)) {
    return true;
  }
  if (previous === null || next === null || typeof previous !== "object" || typeof next !== "object" || Object.getPrototypeOf(previous) !== Object.prototype || Object.getPrototypeOf(next) !== Object.prototype) {
    return false;
  }
  return areRegistryEntriesEqual(previous, next);
};
var mergeOverrides = ({
  descriptor,
  propStatusOverrides,
  dragOverrides,
  frame
}) => {
  if (!propStatusOverrides && !dragOverrides) {
    return { params: descriptor.params, effectKey: descriptor.effectKey };
  }
  const merged = {
    ...descriptor.params
  };
  if (propStatusOverrides) {
    for (const [key, value] of Object.entries(propStatusOverrides)) {
      if (value !== void 0) {
        merged[key] = value;
      }
    }
  }
  if (dragOverrides) {
    for (const [key, value] of Object.entries(dragOverrides)) {
      const resolved = resolveDragOverrideValue({
        dragOverrideValue: value,
        frame
      });
      if (resolved.type === "resolved") {
        merged[key] = resolved.value;
      }
    }
  }
  return {
    params: merged,
    effectKey: descriptor.definition.calculateKey(merged)
  };
};
var resolvePropStatusOverrides = (propStatus, frame) => {
  if (!propStatus) {
    return null;
  }
  const out = {};
  let hasAny = false;
  for (const [key, status] of Object.entries(propStatus)) {
    if (status.status === "static") {
      out[key] = status.codeValue;
      hasAny = true;
      continue;
    }
    if (status.status === "keyframed") {
      const value = interpolateKeyframedStatus({
        forceSpringAllowTail: null,
        frame: getFrameInKeyframedStatusClock({ frame, status }),
        status
      });
      if (value !== null) {
        out[key] = value;
        hasAny = true;
      }
    }
  }
  return hasAny ? out : null;
};
var useMemoizedEffectDefinitions = (effects) => {
  const activityDormant = (0, import_react50.useContext)(SequenceActivityDormantContext);
  const previousRef = (0, import_react50.useRef)(null);
  const previous = previousRef.current;
  const isSame = previous !== null && previous.definitions.length === effects.length && previous.definitions.every((definition, i) => definition === effects[i].definition);
  const controllers = isSame ? previous.controllers : effects.map((effect) => createRuntimeValueStore(effect.params));
  const stableDefinitions = isSame ? previous.definitions : Object.assign(effects.map((descriptor) => descriptor.definition), {
    runtimeValues: controllers.map((controller) => controller.store)
  });
  useCacheCommitEffect(() => {
    previousRef.current = { definitions: stableDefinitions, controllers };
    if (!activityDormant || controllers.length === 0) {
      return;
    }
    if (controllers.every((controller, index) => areEffectParamsEqual(controller.store.getSnapshot(), effects[index]?.params))) {
      return;
    }
    let cancelled = false;
    queueMicrotask(() => {
      if (cancelled) {
        return;
      }
      controllers.forEach((controller, index) => {
        const snapshot3 = effects[index]?.params;
        const currentSnapshot = controller.store.getSnapshot();
        if (areEffectParamsEqual(snapshot3, currentSnapshot)) {
          return;
        }
        controller.setSnapshot(snapshot3);
      });
    });
    return () => {
      cancelled = true;
    };
  }, [activityDormant, controllers, effects, stableDefinitions]);
  (0, import_react50.useLayoutEffect)(() => {
    stableDefinitions.forEach((_definition, index) => {
      const snapshot3 = effects[index]?.params;
      if (!areEffectParamsEqual(controllers[index].store.getSnapshot(), snapshot3)) {
        controllers[index].setSnapshot(snapshot3);
      }
    });
  }, [controllers, effects, stableDefinitions]);
  return stableDefinitions;
};
var getEffectStatusForSequenceStatus = ({
  status,
  effectIndex,
  videoConfigValues
}) => {
  if (!status) {
    return { type: "cannot-update-sequence", reason: "not-found" };
  }
  if (!status.canUpdate) {
    return { type: "cannot-update-sequence", reason: status.reason };
  }
  const effect = status.effects.find((e) => e.effectIndex === effectIndex);
  if (!effect) {
    return { type: "cannot-update-effect", reason: "not-found" };
  }
  if (!effect.canUpdate) {
    return { type: "cannot-update-effect", reason: effect.reason };
  }
  return {
    type: "can-update-effect",
    props: evaluateSourcePropStatuses(effect.props, videoConfigValues)
  };
};
var getEffectPropStatusesCtx = ({
  propStatuses,
  nodePath,
  effectIndex
}) => {
  return getEffectStatusForSequenceStatus({
    status: propStatuses[makeSequencePropsSubscriptionKey(nodePath)] ?? null,
    effectIndex,
    videoConfigValues: nodePath.videoConfigValues
  });
};
var getPropStatusesForSequenceStatus = (status, videoConfigValues) => {
  if (!status) {
    return;
  }
  if (!status.canUpdate) {
    return;
  }
  return evaluateSourcePropStatuses(status.props, videoConfigValues);
};
var getPropStatusesCtx = (propStatuses, nodePath) => {
  return getPropStatusesForSequenceStatus(propStatuses[makeSequencePropsSubscriptionKey(nodePath)] ?? null, nodePath.videoConfigValues);
};
var useMemoizedEffects = ({
  effects: sourceEffects,
  runtimeValues,
  overrideId,
  videoConfigValues
}) => {
  const previousRef = (0, import_react50.useRef)(null);
  const preview = useEffectPreview(runtimeValues);
  const { isStudio, isRendering } = useRemotionEnvironment();
  const { overrideIdToNodePathMappings } = (0, import_react50.useContext)(OverrideIdsToNodePathsGettersContext);
  const previous = previousRef.current;
  const nodePath = overrideId ? overrideIdToNodePathMappings[overrideId] ?? null : null;
  const optimisticNodePath = isStudio && !isRendering ? nodePath : null;
  const optimistic = useOptimisticEffects(optimisticNodePath);
  const optimisticHistory = (0, import_react50.useRef)(/* @__PURE__ */ new Map());
  const projection = (0, import_react50.useMemo)(() => OptimisticEffects.projectEffects(optimistic?.nodePath ?? optimisticNodePath, sourceEffects, optimisticHistory.current), [optimistic, optimisticNodePath, sourceEffects]);
  const { effects } = projection;
  (0, import_react50.useLayoutEffect)(() => {
    if (optimisticNodePath !== null)
      OptimisticEffects.reconcile(optimisticNodePath, sourceEffects.map((effect) => effect.definition));
  }, [optimisticNodePath, optimistic, sourceEffects]);
  const effectDragOverrides = useEffectDragOverridesForNodePath(nodePath);
  const sequenceStatus = usePropStatusForNodePath(nodePath);
  const effectPropStatuses = (0, import_react50.useMemo)(() => Array.from({ length: effects.length }, (_, effectIndex) => {
    if (nodePath === null) {
      return null;
    }
    const sourceIndex = projection.sourceIndices === null ? effectIndex : projection.sourceIndices[effectIndex];
    const status = sourceIndex === null || sourceIndex === void 0 ? null : getEffectStatusForSequenceStatus({
      status: sequenceStatus,
      effectIndex: sourceIndex,
      videoConfigValues
    });
    const props = status?.type === "can-update-effect" ? status.props : null;
    const id = projection.itemIds?.[effectIndex];
    const overlay = id ? OptimisticEffects.getPropStatuses(nodePath, id) : null;
    return overlay === null ? props : {
      ...props,
      ...evaluateSourcePropStatuses(overlay, videoConfigValues)
    };
  }), [
    effects.length,
    nodePath,
    sequenceStatus,
    videoConfigValues,
    projection.sourceIndices,
    projection.itemIds
  ]);
  const animatedEffects = (0, import_react50.useMemo)(() => effectPropStatuses.map((status, index) => Object.values(status ?? {}).some((prop) => prop.status === "keyframed") || Object.values(effectDragOverrides[index] ?? emptyDragOverrides2).some((override) => override.type === "keyframed")), [effectDragOverrides, effectPropStatuses]);
  const frame = useCurrentFrameWithOptionalSubscription(animatedEffects.some(Boolean));
  const effectsWithPreview = preview === null ? effects : [...effects, preview];
  const prepared = effectsWithPreview.map((descriptor, index) => {
    const propStatus = effectPropStatuses[index] ?? null;
    const dragOverridesMap = index < effects.length ? effectDragOverrides[index] ?? emptyDragOverrides2 : emptyDragOverrides2;
    const dragOverrides = Object.keys(dragOverridesMap).length === 0 ? null : dragOverridesMap;
    const effectFrame = animatedEffects[index] ? frame : null;
    const cached = previous?.prepared[index];
    if (cached && cached.definition === descriptor.definition && cached.sourceKey === descriptor.effectKey && areEffectParamsEqual(cached.params, descriptor.params) && cached.propStatus === propStatus && cached.dragOverrides === dragOverrides && cached.frame === effectFrame) {
      return cached;
    }
    const propStatusOverrides = resolvePropStatusOverrides(propStatus ?? void 0, frame);
    const merged = mergeOverrides({
      descriptor,
      propStatusOverrides,
      dragOverrides,
      frame
    });
    const { params, effectKey } = merged;
    return {
      definition: descriptor.definition,
      sourceKey: descriptor.effectKey,
      params: descriptor.params !== null && typeof descriptor.params === "object" && Object.getPrototypeOf(descriptor.params) === Object.prototype ? { ...descriptor.params } : descriptor.params,
      propStatus,
      dragOverrides,
      frame: effectFrame,
      value: cached && cached.value.definition === descriptor.definition && cached.value.effectKey === effectKey ? cached.value : {
        definition: descriptor.definition,
        effectKey,
        params,
        memoized: true
      }
    };
  });
  const isSame = previous !== null && previous.effects.length === prepared.length && previous.effects.every((effect, i) => effect === prepared[i].value);
  const next = isSame ? previous.effects : prepared.map((effect) => effect.value);
  useCacheCommitEffect(() => {
    previousRef.current = { prepared, effects: next };
  }, [next, prepared]);
  const inspectionKey = (0, import_react50.useMemo)(() => isStudio && nodePath !== null ? makeSequencePropsSubscriptionKey(nodePath) : null, [isStudio, nodePath]);
  return useEffectSourceInspection(next, inspectionKey);
};
var flattenActiveSchema = (schema, resolve) => {
  const out = {};
  for (const key of Object.keys(schema)) {
    const field = schema[key];
    if (field.type === "hidden") {
      continue;
    } else if (field.type === "enum") {
      out[key] = field;
      const current = resolve(key) ?? field.default;
      const variant = field.variants[current];
      if (variant) {
        Object.assign(out, flattenActiveSchema(variant, resolve));
      }
    } else {
      out[key] = field;
    }
  }
  return out;
};
var getFlatSchemaWithAllKeys = (schema) => {
  const out = {};
  const addKey = (key, field) => {
    if (key in out) {
      return;
    }
    out[key] = field;
  };
  for (const key of Object.keys(schema)) {
    const field = schema[key];
    addKey(key, field);
    if (field.type === "enum") {
      for (const variant of Object.values(field.variants)) {
        const flatVariant = getFlatSchemaWithAllKeys(variant);
        for (const variantKey of Object.keys(flatVariant)) {
          addKey(variantKey, flatVariant[variantKey]);
        }
      }
    }
  }
  return out;
};
var deletions = /* @__PURE__ */ new Map();
var stackToNode = /* @__PURE__ */ new Map();
var listeners3 = /* @__PURE__ */ new Set();
var empty = /* @__PURE__ */ new Set();
var snapshot2 = empty;
var keyForNode3 = (node) => JSON.stringify([node.absolutePath, node.nodePath]);
var publish2 = (force = false) => {
  const next = new Set([...deletions].filter(([, value]) => value.deleted).map(([key]) => key));
  if (!force && next.size === snapshot2.size && [...next].every((key) => snapshot2.has(key))) {
    return;
  }
  snapshot2 = next.size === 0 ? empty : next;
  for (const listener of listeners3) {
    listener();
  }
};
var subscribe = (listener) => {
  listeners3.add(listener);
  return () => {
    listeners3.delete(listener);
  };
};
var usePendingSequenceDeletions = () => {
  const environment = useRemotionEnvironment();
  const value = useSyncExternalStore2(subscribe, () => snapshot2, () => empty);
  return environment.isStudio && !environment.isRendering ? value : empty;
};
var OptimisticSequenceDeletion = {
  register: (stack, node) => {
    if (stack === null || node === null) {
      return;
    }
    const key = keyForNode3(node);
    if (stackToNode.get(stack) === key) {
      return;
    }
    stackToNode.set(stack, key);
    if (snapshot2.size > 0) {
      publish2(true);
    }
  },
  isDeleted: (node, pending) => node !== null && pending.has(keyForNode3(node)),
  isElementDeleted: (element, pending) => {
    if (!(0, import_react54.isValidElement)(element)) {
      return false;
    }
    const stack = element.props._remotionInternalStack;
    const key = stack === void 0 ? void 0 : stackToNode.get(stack);
    return key !== void 0 && pending.has(key);
  },
  set: (nodes2, revision, deleted) => {
    for (const node of nodes2) {
      const key = keyForNode3(node);
      const previous = deletions.get(key);
      if (previous && previous.revision > revision) {
        continue;
      }
      deletions.set(key, { id: revision, revision, deleted });
    }
    publish2();
  },
  rollback: (nodes2, revision) => {
    for (const node of nodes2) {
      const key = keyForNode3(node);
      if (deletions.get(key)?.revision === revision) {
        deletions.delete(key);
      }
    }
    publish2();
  },
  rollbackRevision: (revision) => {
    for (const [key, deletion] of deletions) {
      if (deletion.revision === revision) {
        deletions.delete(key);
      }
    }
    publish2();
  },
  remap: (remappings) => {
    const moves = remappings.flatMap((remapping) => {
      const oldKey = keyForNode3(remapping.previousNodePath);
      const deletion = deletions.get(oldKey);
      if (deletion?.id !== remapping.revision) {
        return [];
      }
      const newKey = remapping.nodePath === null ? null : keyForNode3(remapping.nodePath);
      return oldKey === newKey ? [] : [{ oldKey, newKey, deletion }];
    });
    if (moves.length === 0) {
      return;
    }
    for (const { oldKey } of moves) {
      deletions.delete(oldKey);
    }
    for (const { newKey, deletion } of moves) {
      if (newKey === null) {
        continue;
      }
      const existing = deletions.get(newKey);
      if (existing && existing.revision > deletion.revision) {
        continue;
      }
      deletions.set(newKey, deletion);
    }
    publish2();
  },
  restore: (nodes2, revision, deleted) => {
    for (const node of nodes2) {
      const key = keyForNode3(node);
      const previous = deletions.get(key);
      if (previous && previous.revision <= revision) {
        deletions.set(key, { ...previous, revision, deleted });
      }
    }
    publish2();
  },
  prepareRetirement: (nodes2, dispatchedRevision) => {
    const keys = nodes2.map(keyForNode3);
    return () => {
      let changed = false;
      for (const key of keys) {
        const deletion = deletions.get(key);
        if (deletion !== void 0 && deletion.id <= dispatchedRevision) {
          changed = deletions.delete(key) || changed;
        }
      }
      if (changed) {
        publish2();
      }
    };
  }
};
var REACT_REFRESH_STARTED_EVENT = "remotion-react-refresh-started";
var REACT_REFRESH_FINISHED_EVENT = "remotion-react-refresh-finished";
var DEFAULT_LINEAR_EASING = {
  type: "linear"
};
var getEasingIndexToDuplicate = ({
  insertedKeyframeIndex,
  easingLength,
  keyframeCount
}) => {
  const isSplittingExistingSegment = insertedKeyframeIndex > 0 && insertedKeyframeIndex < keyframeCount - 1;
  if (!isSplittingExistingSegment || easingLength === 0) {
    return null;
  }
  return Math.min(insertedKeyframeIndex - 1, easingLength - 1);
};
var makeStaticDragOverride = (value) => {
  return { type: "static", value };
};
var makeKeyframedDragOverride = ({
  status,
  frame,
  value,
  defaultEasing: defaultEasing2 = DEFAULT_LINEAR_EASING
}) => {
  const existingIndex = status.keyframes.findIndex((keyframe) => keyframe.frame === frame);
  const keyframes = existingIndex === -1 ? [...status.keyframes, { frame, value }].sort((first, second) => first.frame - second.frame) : status.keyframes.map((keyframe, index) => index === existingIndex ? { frame, value } : keyframe);
  const easing = [...status.easing];
  if (existingIndex === -1) {
    const insertedKeyframeIndex = keyframes.findIndex((keyframe) => keyframe.frame === frame);
    const easingIndexToDuplicate = getEasingIndexToDuplicate({
      insertedKeyframeIndex,
      easingLength: easing.length,
      keyframeCount: keyframes.length
    });
    const easingToDuplicate = easingIndexToDuplicate === null ? defaultEasing2 : easing[easingIndexToDuplicate];
    easing.splice(insertedKeyframeIndex, 0, easingToDuplicate);
  }
  while (easing.length < keyframes.length - 1) {
    easing.push(defaultEasing2);
  }
  if (easing.length > keyframes.length - 1) {
    easing.length = keyframes.length - 1;
  }
  return {
    type: "keyframed",
    status: {
      ...status,
      keyframes,
      easing
    }
  };
};
var getStaticDragOverrideValue = (dragOverrideValue) => {
  if (dragOverrideValue?.type !== "static") {
    return;
  }
  return dragOverrideValue.value;
};
var isKeyframedStatus = (status) => {
  return status !== null && status.status === "keyframed";
};
var findFieldInSchema = (schema, key) => {
  if (key in schema) {
    return schema[key];
  }
  for (const field of Object.values(schema)) {
    if (field.type !== "enum") {
      continue;
    }
    for (const variant of Object.values(field.variants)) {
      const found = findFieldInSchema(variant, key);
      if (found) {
        return found;
      }
    }
  }
  return;
};
var computeEffectiveSchemaValuesDotNotation = ({
  schema,
  currentValue,
  overrideValues,
  propStatus,
  frame
}) => {
  const merged = {};
  const propsToDelete = /* @__PURE__ */ new Set();
  for (const key of Object.keys(currentValue)) {
    const status = propStatus?.[key] ?? null;
    const field = findFieldInSchema(schema, key);
    if (field?.type === "hidden") {
      continue;
    }
    let value;
    if (status === null) {
      const dragOverride = resolveDragOverrideValue({
        dragOverrideValue: overrideValues[key],
        frame
      });
      value = dragOverride.type === "resolved" ? dragOverride.value : currentValue[key];
    } else if (isKeyframedStatus(status)) {
      if (field?.type === "array") {
        value = currentValue[key];
      } else {
        const dragOverride = resolveDragOverrideValue({
          dragOverrideValue: overrideValues[key],
          frame
        });
        if (dragOverride.type === "resolved") {
          value = dragOverride.value;
        } else if (frame !== null) {
          const interpolated = interpolateKeyframedStatus({
            forceSpringAllowTail: null,
            frame: getFrameInKeyframedStatusClock({ frame, status }),
            status
          });
          value = interpolated ?? currentValue[key];
        } else {
          value = currentValue[key];
        }
      }
    } else if (status.status === "computed") {
      value = currentValue[key];
    } else {
      value = getEffectiveVisualModeValue({
        propStatus: status,
        dragOverrideValue: overrideValues[key],
        defaultValue: field?.default,
        frame,
        shouldResortToDefaultValueIfUndefined: false
      });
    }
    if (field?.type === "asset" && typeof value === "string" && value.startsWith(FILE_TOKEN)) {
      value = resolveFileTokenToUrl(value);
    }
    if (value === void 0) {
      propsToDelete.add(key);
    }
    merged[key] = value;
  }
  for (const key of Object.keys(overrideValues)) {
    if (schema[key]?.type === "enum") {
      const propsToDeleteForKey = findPropsToDelete({
        schema,
        key,
        value: merged[key]
      });
      for (const propToDelete of propsToDeleteForKey) {
        propsToDelete.add(propToDelete);
      }
    }
  }
  return { merged, propsToDelete };
};
var sourceRefreshGeneration = 0;
if (typeof window !== "undefined") {
  window.addEventListener(REACT_REFRESH_STARTED_EVENT, () => {
    sourceRefreshGeneration++;
  });
}
var getNestedValue = (obj, key) => {
  const parts = key.split(".");
  let current = obj;
  for (const part of parts) {
    if (current === null || current === void 0 || typeof current !== "object")
      return;
    current = current[part];
  }
  return current;
};
var getRuntimeValueForSchemaKey = ({
  flatSchema,
  key,
  props
}) => {
  const value = getNestedValue(props, key);
  if ((flatSchema[key]?.type === "string" || flatSchema[key]?.type === "text-content") && typeof value !== "string") {
    return;
  }
  return value;
};
var readValuesFromProps = (props, keys, flatSchema) => {
  const out = {};
  for (const key of keys) {
    out[key] = flatSchema ? getRuntimeValueForSchemaKey({ flatSchema, key, props }) : getNestedValue(props, key);
  }
  return out;
};
var selectActiveKeys = (schema, values) => {
  return Object.keys(flattenActiveSchema(schema, (key) => values[key]));
};
var mergeValues = ({
  flatSchema,
  props,
  valuesDotNotation,
  schemaKeys,
  propsToDelete
}) => {
  const merged = { ...props };
  for (const key of schemaKeys) {
    const value = valuesDotNotation[key];
    if ((flatSchema[key]?.type === "string" || flatSchema[key]?.type === "text-content") && value === void 0) {
      continue;
    }
    const parts = key.split(".");
    if (parts.length === 1) {
      merged[key] = value;
      continue;
    }
    let current = merged;
    for (let i = 0; i < parts.length - 1; i++) {
      const part = parts[i];
      if (typeof current[part] === "object" && current[part] !== null) {
        current[part] = { ...current[part] };
      } else {
        current[part] = {};
      }
      current = current[part];
    }
    current[parts[parts.length - 1]] = value;
  }
  const propsToDeleteWithoutTextContent = new Set([...propsToDelete].filter((key) => !((flatSchema[key]?.type === "string" || flatSchema[key]?.type === "text-content") && valuesDotNotation[key] === void 0)));
  deleteNestedKey(merged, propsToDeleteWithoutTextContent);
  return merged;
};
var DisableInteractivityContext = (0, import_react49.createContext)(false);
var DisableInteractivityProvider = ({ children }) => {
  return import_react49.default.createElement(DisableInteractivityContext.Provider, { value: true }, children);
};
var EnableInteractivityContext = (0, import_react49.createContext)(false);
var EnableInteractivityProvider = ({ children }) => {
  return import_react49.default.createElement(EnableInteractivityContext.Provider, { value: true }, children);
};
var withInteractivitySchema = ({
  Component,
  componentName,
  componentIdentity = null,
  schema,
  supportsEffects
}) => {
  const schemaWithSequenceName = extendSchemaWithSequenceName(schema);
  const flatSchema = getFlatSchemaWithAllKeys(schemaWithSequenceName);
  const flatKeys = Object.keys(flatSchema);
  let stackToOverrideMap = {};
  let overrideMapGeneration = sourceRefreshGeneration;
  const Wrapped = (0, import_react49.forwardRef)((props, ref) => {
    const {
      _remotionInternalStack: internalStack,
      ...propsWithoutInternalStack
    } = props;
    const cleanProps = propsWithoutInternalStack;
    const env = useRemotionEnvironment();
    const pendingDeletions = usePendingSequenceDeletions();
    const canUseRemotionHooks = (0, import_react49.useContext)(CanUseRemotionHooks);
    const disableInteractivity = (0, import_react49.useContext)(DisableInteractivityContext);
    const enableInteractivity = (0, import_react49.useContext)(EnableInteractivityContext);
    if (!env.isStudio && !enableInteractivity || env.isRendering || !canUseRemotionHooks || disableInteractivity) {
      return import_react49.default.createElement(Component, {
        ...cleanProps,
        controls: null,
        ref
      });
    }
    const nodePathMapping = (0, import_react49.useContext)(OverrideIdsToNodePathsGettersContext);
    const videoConfig = useUnsafeVideoConfig();
    const durationInFrames = videoConfig?.durationInFrames;
    const fps = videoConfig?.fps;
    const height = videoConfig?.height;
    const width = videoConfig?.width;
    const videoConfigValues = (0, import_react49.useMemo)(() => durationInFrames === void 0 || fps === void 0 || height === void 0 || width === void 0 ? null : {
      durationInFrames,
      fps,
      height,
      width
    }, [durationInFrames, fps, height, width]);
    const passedControls = cleanProps.controls;
    const resolvedPassedControls = (0, import_react49.useMemo)(() => {
      if (!passedControls || getStackForControls(passedControls) !== null || internalStack === void 0) {
        return passedControls;
      }
      const controlsWithStack = { ...passedControls };
      setStackForControls(controlsWithStack, internalStack);
      return controlsWithStack;
    }, [internalStack, passedControls]);
    if (resolvedPassedControls) {
      return import_react49.default.createElement(Component, {
        ...cleanProps,
        controls: resolvedPassedControls,
        ref
      });
    }
    const [overrideId] = (0, import_react49.useState)(() => {
      if (!internalStack) {
        return String(Math.random());
      }
      if (overrideMapGeneration !== sourceRefreshGeneration) {
        stackToOverrideMap = {};
        overrideMapGeneration = sourceRefreshGeneration;
      }
      const existingOverrideId = stackToOverrideMap[internalStack];
      if (existingOverrideId) {
        return existingOverrideId;
      }
      const newOverrideId = String(Math.random());
      stackToOverrideMap[internalStack] = newOverrideId;
      return newOverrideId;
    });
    const nodePath = env.isReadOnlyStudio ? null : nodePathMapping.overrideIdToNodePathMappings[overrideId] ?? null;
    const dragOverrides = useDragOverridesForNodePath(nodePath);
    const sequenceStatus = usePropStatusForNodePath(nodePath);
    const propStatus = (0, import_react49.useMemo)(() => getPropStatusesForSequenceStatus(sequenceStatus, videoConfigValues), [sequenceStatus, videoConfigValues]);
    const needsFrame = flatKeys.some((key) => propStatus?.[key]?.status === "keyframed" || dragOverrides[key]?.type === "keyframed");
    const frame = useCurrentFrameWithOptionalSubscription(needsFrame);
    const runtimeValues = flatKeys.map((key) => getRuntimeValueForSchemaKey({
      flatSchema,
      key,
      props: cleanProps
    }));
    const currentRuntimeValueDotNotation = (0, import_react49.useMemo)(() => readValuesFromProps(cleanProps, flatKeys, flatSchema), runtimeValues);
    const [runtimeValueStore] = (0, import_react49.useState)(() => createRuntimeValueStore(currentRuntimeValueDotNotation));
    (0, import_react49.useLayoutEffect)(() => {
      runtimeValueStore.setSnapshot(currentRuntimeValueDotNotation);
    }, [currentRuntimeValueDotNotation, runtimeValueStore]);
    const controls = (0, import_react49.useMemo)(() => {
      const controlsForRender = {
        schema: schemaWithSequenceName,
        currentRuntimeValueDotNotation,
        runtimeValues: runtimeValueStore.store,
        videoConfigValues,
        overrideId,
        supportsEffects,
        componentIdentity,
        componentName
      };
      setStackForControls(controlsForRender, internalStack);
      return controlsForRender;
    }, [
      currentRuntimeValueDotNotation,
      internalStack,
      overrideId,
      runtimeValueStore.store,
      videoConfigValues
    ]);
    (0, import_react49.useLayoutEffect)(() => {
      OptimisticSequenceDeletion.register(internalStack ?? null, nodePath);
    }, [internalStack, nodePath]);
    const { merged: valuesDotNotation, propsToDelete } = (0, import_react49.useMemo)(() => {
      return computeEffectiveSchemaValuesDotNotation({
        schema: schemaWithSequenceName,
        currentValue: currentRuntimeValueDotNotation,
        overrideValues: dragOverrides,
        propStatus,
        frame
      });
    }, [currentRuntimeValueDotNotation, dragOverrides, propStatus, frame]);
    const activeKeys = selectActiveKeys(schemaWithSequenceName, valuesDotNotation);
    const mergedProps = mergeValues({
      flatSchema,
      props: cleanProps,
      valuesDotNotation,
      schemaKeys: activeKeys,
      propsToDelete
    });
    const nameStatus = propStatus?.name;
    if (flatSchema.name?.type === "hidden" && nameStatus?.status === "static") {
      mergedProps.name = typeof nameStatus.codeValue === "string" ? nameStatus.codeValue : void 0;
    }
    if (OptimisticSequenceDeletion.isDeleted(nodePath, pendingDeletions)) {
      return null;
    }
    return import_react49.default.createElement(Component, {
      ...mergedProps,
      controls,
      ref
    });
  });
  Wrapped.displayName = `withInteractivitySchema(${Component.displayName || Component.name || "Component"})`;
  return Wrapped;
};
var SeriesContentVisibilityContext = (0, import_react25.createContext)(true);
var SequenceContextProvider = withCommittedMetadata(SequenceContext.Provider);
var EMPTY_EFFECTS = [];
var getSequenceRegistration = (sequence) => {
  return sequence;
};
var getSequenceStack = (stack) => {
  return stack;
};
var getSequenceCurrentFrame = (ref) => {
  return ref.current;
};
var setSequenceWrapperRef = (ref, wrapperRef, node) => {
  wrapperRef.current = node;
  if (typeof ref === "function") {
    ref(node);
  } else if (ref) {
    ref.current = node;
  }
};
var getSingleChildPropsFromRef = (childrenRef) => getSingleChildProps(childrenRef.current);
var RegularSequenceContentRefForwardingFunction = ({
  timing,
  from = 0,
  trimBefore = 0,
  playbackRate = 1,
  loop = false,
  freeze,
  durationInFrames,
  children,
  name,
  height,
  width,
  showInTimeline = true,
  hidden = false,
  controls,
  _remotionInternalEffects,
  _remotionInternalTimelineTrack: timelineTrackItem,
  _remotionInternalLoopDisplay: loopDisplay,
  _remotionInternalStack: stack,
  _remotionInternalSingleChildComponent: childComponentOverride,
  _remotionInternalSingleChildren: authoredChildrenOverride,
  _remotionInternalDocumentationLink: documentationLink,
  _remotionInternalPremountDisplay: premountDisplay,
  _remotionInternalPostmountDisplay: postmountDisplay,
  _remotionInternalIsMedia: isMedia,
  cropLeft,
  cropRight,
  cropTop,
  cropBottom,
  ...other
}, ref) => {
  const { layout = "absolute-fill" } = other;
  const [id] = (0, import_react25.useState)(() => String(Math.random()));
  const parentSequence = (0, import_react25.useContext)(SequenceContext);
  const activityRequested = (0, import_react25.useContext)(SequenceActivityContext);
  const parentDormant = (0, import_react25.useContext)(SequenceActivityDormantContext);
  const activitySuspended = (0, import_react25.useContext)(SequenceActivitySuspensionContext);
  const hadActivity = (0, import_react25.useRef)(false);
  const env = useRemotionEnvironment();
  const activityEnabled = activityRequested && env.isStudio && !env.isRendering;
  const timelineTrack = (0, import_react25.useContext)(TimelineTrackContext);
  const timelineTrackRole = timelineTrackItem?.role ?? "clip";
  const seriesOffset = timelineTrackItem?.seriesOffset ?? null;
  const parentPlaybackRate = parentSequence?.playbackRate ?? 1;
  const cumulativePlaybackRate = parentPlaybackRate * playbackRate;
  const cumulatedFrom = parentSequence ? parentSequence.cumulatedFrom + parentSequence.relativeFrom : 0;
  if (layout !== "absolute-fill" && layout !== "none") {
    throw new TypeError(`The layout prop of <Sequence /> expects either "absolute-fill" or "none", but you passed: ${layout}`);
  }
  const cropProps = { cropLeft, cropRight, cropTop, cropBottom };
  const hasCropProp = Object.values(cropProps).some((value) => value !== void 0);
  if (layout === "none" && hasCropProp) {
    throw new TypeError('The cropLeft, cropRight, cropTop and cropBottom props of <Sequence /> are only supported with layout="absolute-fill".');
  }
  validateSequenceCrop(cropProps);
  const {
    left: resolvedCropLeft,
    right: resolvedCropRight,
    top: resolvedCropTop,
    bottom: resolvedCropBottom
  } = resolveSequenceCrop(cropProps);
  if (layout === "none" && typeof other.style !== "undefined") {
    throw new TypeError('If layout="none", you may not pass a style. Passed: ' + JSON.stringify(other.style));
  }
  const {
    contentDurationInFrames,
    effectiveDurationInFrames,
    actualDurationInFrames,
    loopPeriod,
    loopIteration,
    contentVisible,
    inheritedFrozenFrame,
    currentFrameRef
  } = timing;
  if (typeof contentDurationInFrames !== "number") {
    throw new TypeError(`You passed to durationInFrames an argument of type ${typeof contentDurationInFrames}, but it must be a number.`);
  }
  if (contentDurationInFrames <= 0) {
    throw new TypeError(`durationInFrames must be positive, but got ${contentDurationInFrames}`);
  }
  if (typeof from !== "number") {
    throw new TypeError(`You passed to the "from" props of your <Sequence> an argument of type ${typeof from}, but it must be a number.`);
  }
  if (!Number.isFinite(from)) {
    throw new TypeError(`The "from" prop of a sequence must be finite, but got ${from}.`);
  }
  if (typeof trimBefore !== "number") {
    throw new TypeError(`You passed to the "trimBefore" prop of your <Sequence> an argument of type ${typeof trimBefore}, but it must be a number.`);
  }
  if (trimBefore < 0) {
    throw new TypeError(`The "trimBefore" prop of <Sequence /> must be greater than or equal to 0, but got ${trimBefore}.`);
  }
  if (Number.isNaN(trimBefore)) {
    throw new TypeError('The "trimBefore" prop of <Sequence /> must be a real number, but it is NaN.');
  }
  if (!Number.isFinite(trimBefore)) {
    throw new TypeError(`The "trimBefore" prop of <Sequence /> must be finite, but it is ${trimBefore}.`);
  }
  if (typeof loop !== "boolean") {
    throw new TypeError(`The "loop" prop of <Sequence /> must be a boolean, but is of type ${typeof loop}.`);
  }
  if (loop && !Number.isFinite(contentDurationInFrames)) {
    throw new Error('The "loop" prop of <Sequence /> requires a finite "durationInFrames" prop, because a <Sequence /> has no intrinsic duration.');
  }
  if (typeof freeze !== "undefined" && freeze !== null) {
    if (typeof freeze !== "number") {
      throw new TypeError(`The "freeze" prop of <Sequence /> must be a number, but is of type ${typeof freeze}.`);
    }
    if (Number.isNaN(freeze)) {
      throw new TypeError(`The "freeze" prop of <Sequence /> must be a real number, but it is NaN.`);
    }
    if (!Number.isFinite(freeze)) {
      throw new TypeError(`The "freeze" prop of <Sequence /> must be finite, but it is ${freeze}.`);
    }
  }
  const videoConfig = useVideoConfig();
  const loopOffset = loopPeriod === null ? 0 : loopIteration * loopPeriod;
  const clockFrom = from + loopOffset;
  const effectiveRelativeFrom = clockFrom - trimBefore / playbackRate;
  const relativeFrom = effectiveRelativeFrom / parentPlaybackRate;
  const absoluteFrom = (parentSequence?.absoluteFrom ?? 0) + relativeFrom;
  const localClockEnd = loopPeriod === null ? actualDurationInFrames * playbackRate + trimBefore : Math.min(loopPeriod, actualDurationInFrames - loopOffset) * playbackRate + trimBefore;
  const sequenceRegistrationEnabled = (0, import_react25.useContext)(SequenceRegistrationContext);
  const canvasOutlinesEnabled = (0, import_react25.useContext)(SequenceOutlineContext);
  const shouldDiscoverOutline = env.isStudio || canvasOutlinesEnabled;
  const automaticOutlineRef = (0, import_react25.useMemo)(() => shouldDiscoverOutline && layout === "none" ? SequenceOutlineInternals.createRef() : null, [shouldDiscoverOutline, layout]);
  const wrapperRefForOutline = (0, import_react25.useRef)(null);
  const refForOutline = layout === "none" ? automaticOutlineRef : wrapperRefForOutline;
  const premounting = (0, import_react25.useMemo)(() => {
    return parentSequence?.premounting || Boolean(other._remotionInternalIsPremounting);
  }, [other._remotionInternalIsPremounting, parentSequence?.premounting]);
  const postmounting = (0, import_react25.useMemo)(() => {
    return parentSequence?.postmounting || Boolean(other._remotionInternalIsPostmounting);
  }, [other._remotionInternalIsPostmounting, parentSequence?.postmounting]);
  const currentSequenceStart = cumulatedFrom + relativeFrom;
  const parentSequenceStart = parentSequence ? parentSequence.cumulatedFrom + parentSequence.relativeFrom : 0;
  const parentFirstFrame = parentSequence ? parentSequenceStart - parentSequence.cumulatedNegativeFrom / parentPlaybackRate : 0;
  const firstFrame = Math.max(0, parentFirstFrame, cumulatedFrom + clockFrom / parentPlaybackRate);
  const cumulatedNegativeFrom = (currentSequenceStart - firstFrame) * cumulativePlaybackRate;
  const contextValue = (0, import_react25.useMemo)(() => {
    return {
      playbackRate: cumulativePlaybackRate,
      absoluteFrom,
      cumulatedFrom,
      relativeFrom,
      cumulatedNegativeFrom,
      durationInFrames: localClockEnd,
      parentFrom: parentSequence?.relativeFrom ?? 0,
      id,
      height: height ?? parentSequence?.height ?? null,
      width: width ?? parentSequence?.width ?? null,
      premounting,
      postmounting,
      premountDisplay: premountDisplay ?? null,
      postmountDisplay: postmountDisplay ?? null
    };
  }, [
    cumulatedFrom,
    absoluteFrom,
    relativeFrom,
    cumulativePlaybackRate,
    localClockEnd,
    parentSequence,
    id,
    height,
    width,
    premounting,
    postmounting,
    premountDisplay,
    postmountDisplay,
    cumulatedNegativeFrom
  ]);
  const loopContextValue = (0, import_react25.useMemo)(() => {
    if (loopPeriod === null) {
      return null;
    }
    return {
      iteration: loopIteration,
      durationInFrames: contentDurationInFrames
    };
  }, [contentDurationInFrames, loopIteration, loopPeriod]);
  const resolvedLoopDisplay = (0, import_react25.useMemo)(() => {
    if (loopDisplay || loopPeriod === null) {
      return loopDisplay;
    }
    return {
      numberOfTimes: actualDurationInFrames / loopPeriod,
      startOffset: 0,
      durationInFrames: loopPeriod
    };
  }, [actualDurationInFrames, loopDisplay, loopPeriod]);
  const timelineClipName = (0, import_react25.useMemo)(() => {
    return name ?? "";
  }, [name]);
  const resolvedDocumentationLink = documentationLink ?? "https://www.remotion.dev/docs/sequence";
  const isInsideSeries = (0, import_react25.useContext)(IsInsideSeriesContext);
  const authoredChildren = authoredChildrenOverride === void 0 ? children : authoredChildrenOverride;
  const singleChildComponent = (0, import_react25.useMemo)(() => childComponentOverride === void 0 ? getSingleChildComponent(authoredChildren) : childComponentOverride, [authoredChildren, childComponentOverride]);
  const childrenRef = (0, import_react25.useRef)(authoredChildren);
  (0, import_react25.useLayoutEffect)(() => {
    childrenRef.current = authoredChildren;
  }, [authoredChildren]);
  const getRegisteredSingleChildProps = (0, import_react25.useMemo)(() => childComponentOverride === void 0 ? getSingleChildPropsFromRef.bind(null, childrenRef) : null, [childComponentOverride]);
  const registrationStack = controls ? getStackForControls(controls) ?? stack ?? null : stack ?? null;
  const getStack = (0, import_react25.useMemo)(() => getSequenceStack.bind(null, registrationStack), [registrationStack]);
  const registeredFrozenFrame = typeof freeze === "number" ? freeze : null;
  const getCurrentFrame = (0, import_react25.useMemo)(() => getSequenceCurrentFrame.bind(null, currentFrameRef), [currentFrameRef]);
  const registeredTrimBefore = trimBefore === 0 ? null : trimBefore;
  const parentCumulatedNegativeFrom = parentSequence?.cumulatedNegativeFrom ?? 0;
  const startMediaFrom = isMedia && isMedia.type !== "image" ? isMedia.data.startMediaFrom + parentCumulatedNegativeFrom - cumulatedNegativeFrom : null;
  const mediaFrameAtSequenceZero = isMedia && isMedia.type !== "image" ? isMedia.data.startMediaFrom + parentCumulatedNegativeFrom : null;
  const mediaFreezeFrame = registeredFrozenFrame ?? (contentVisible && !parentDormant && !premounting && !postmounting ? inheritedFrozenFrame : null);
  const frozenMediaFrame = isMedia && isMedia.type !== "image" && mediaFrameAtSequenceZero !== null && mediaFreezeFrame !== null ? mediaFrameAtSequenceZero + (resolvedLoopDisplay ? mediaFreezeFrame % resolvedLoopDisplay.durationInFrames : mediaFreezeFrame) * isMedia.data.playbackRate : null;
  const controlsSchema = controls?.schema;
  const controlsRuntimeValues = controls?.runtimeValues;
  const controlsOverrideId = controls?.overrideId;
  const controlsSupportsEffects = controls?.supportsEffects;
  const controlsComponentIdentity = controls?.componentIdentity;
  const controlsComponentName = controls?.componentName;
  const controlsVideoConfigValues = controls?.videoConfigValues;
  const canInferDuration = (controlsComponentIdentity === "dev.remotion.remotion.Series" || controlsComponentIdentity === "dev.remotion.transitions.TransitionSeries") && !loop && registeredFrozenFrame === null && inheritedFrozenFrame === null && !hidden;
  const autoDuration = canInferDuration && durationInFrames === void 0;
  const isSeriesChild = controlsComponentIdentity === "dev.remotion.remotion.Series.Sequence" || controlsComponentIdentity === "dev.remotion.transitions.TransitionSeries.Sequence" || controlsComponentIdentity === "dev.remotion.transitions.TransitionSeries.Transition" || controlsComponentIdentity === "dev.remotion.transitions.TransitionSeries.Overlay";
  const effectRuntimeValues = (0, import_react25.useMemo)(() => _remotionInternalEffects?.runtimeValues ?? null, [_remotionInternalEffects]);
  const registrationControls = (0, import_react25.useMemo)(() => {
    if (controlsSchema === void 0 || controlsRuntimeValues === void 0 || controlsOverrideId === void 0 || controlsSupportsEffects === void 0 || controlsComponentIdentity === void 0 || controlsComponentName === void 0 || controlsVideoConfigValues === void 0) {
      return null;
    }
    return {
      schema: controlsSchema,
      runtimeValues: controlsRuntimeValues,
      overrideId: controlsOverrideId,
      supportsEffects: controlsSupportsEffects,
      componentIdentity: controlsComponentIdentity,
      componentName: controlsComponentName,
      videoConfigValues: controlsVideoConfigValues
    };
  }, [
    controlsComponentIdentity,
    controlsComponentName,
    controlsVideoConfigValues,
    controlsOverrideId,
    controlsRuntimeValues,
    controlsSchema,
    controlsSupportsEffects
  ]);
  const sequenceForRegistration = (0, import_react25.useMemo)(() => {
    const trackRegistration = timelineTrack ? {
      timelineTrack: {
        ...timelineTrack,
        role: timelineTrackRole,
        seriesOffset
      }
    } : {};
    if (isMedia) {
      if (isMedia.type === "image") {
        return {
          ...trackRegistration,
          sequencePlaybackRate: playbackRate,
          type: "image",
          controls: registrationControls,
          effects: _remotionInternalEffects ?? EMPTY_EFFECTS,
          effectRuntimeValues,
          displayName: timelineClipName,
          documentationLink: resolvedDocumentationLink,
          duration: actualDurationInFrames,
          from,
          trimBefore: registeredTrimBefore,
          id,
          loopDisplay: resolvedLoopDisplay,
          parent: parentSequence?.id ?? null,
          postmountDisplay: postmountDisplay ?? null,
          premountDisplay: premountDisplay ?? null,
          showInTimeline,
          timelineOrder: null,
          src: isMedia.src,
          animated: isMedia.animated,
          getStack,
          getCurrentFrame,
          refForOutline: refForOutline ?? null,
          isInsideSeries,
          frozenFrame: registeredFrozenFrame,
          singleChildComponent: singleChildComponent ?? null,
          getSingleChildProps: getRegisteredSingleChildProps
        };
      }
      return {
        ...trackRegistration,
        type: isMedia.type,
        sequencePlaybackRate: playbackRate,
        controls: registrationControls,
        effects: _remotionInternalEffects ?? EMPTY_EFFECTS,
        effectRuntimeValues,
        displayName: timelineClipName,
        documentationLink: resolvedDocumentationLink,
        duration: actualDurationInFrames,
        from,
        trimBefore: registeredTrimBefore,
        id,
        loopDisplay: resolvedLoopDisplay,
        parent: parentSequence?.id ?? null,
        playbackRate: isMedia.data.playbackRate,
        postmountDisplay: postmountDisplay ?? null,
        premountDisplay: premountDisplay ?? null,
        showInTimeline,
        timelineOrder: null,
        src: isMedia.data.src,
        getStack,
        getCurrentFrame,
        startMediaFrom: startMediaFrom ?? isMedia.data.startMediaFrom,
        mediaFrameAtSequenceZero,
        muted: isMedia.data.muted,
        refForOutline: refForOutline ?? null,
        isInsideSeries,
        frozenFrame: registeredFrozenFrame,
        frozenMediaFrame,
        singleChildComponent: singleChildComponent ?? null,
        getSingleChildProps: getRegisteredSingleChildProps
      };
    }
    return {
      ...trackRegistration,
      from,
      sequencePlaybackRate: playbackRate,
      trimBefore: registeredTrimBefore,
      duration: actualDurationInFrames,
      ...autoDuration ? { autoDuration: true } : {},
      ...canInferDuration ? { canInferDuration: true } : {},
      ...isSeriesChild ? { unclippedDuration: effectiveDurationInFrames } : {},
      id,
      displayName: timelineClipName,
      documentationLink: resolvedDocumentationLink,
      parent: parentSequence?.id ?? null,
      type: "sequence",
      showInTimeline,
      timelineOrder: null,
      loopDisplay: resolvedLoopDisplay,
      getStack,
      getCurrentFrame,
      premountDisplay: premountDisplay ?? null,
      postmountDisplay: postmountDisplay ?? null,
      controls: registrationControls,
      effects: _remotionInternalEffects ?? EMPTY_EFFECTS,
      effectRuntimeValues,
      refForOutline: refForOutline ?? null,
      isInsideSeries,
      frozenFrame: registeredFrozenFrame,
      singleChildComponent: singleChildComponent ?? null,
      getSingleChildProps: getRegisteredSingleChildProps
    };
  }, [
    id,
    timelineTrack,
    timelineTrackRole,
    seriesOffset,
    getCurrentFrame,
    getStack,
    timelineClipName,
    playbackRate,
    parentSequence?.id,
    actualDurationInFrames,
    autoDuration,
    canInferDuration,
    isSeriesChild,
    effectiveDurationInFrames,
    from,
    registeredTrimBefore,
    showInTimeline,
    resolvedLoopDisplay,
    premountDisplay,
    postmountDisplay,
    registrationControls,
    _remotionInternalEffects,
    effectRuntimeValues,
    isMedia,
    resolvedDocumentationLink,
    refForOutline,
    isInsideSeries,
    registeredFrozenFrame,
    startMediaFrom,
    mediaFrameAtSequenceZero,
    frozenMediaFrame,
    singleChildComponent,
    getRegisteredSingleChildProps
  ]);
  const getSequenceForRegistration = (0, import_react25.useMemo)(() => getSequenceRegistration.bind(null, sequenceForRegistration), [sequenceForRegistration]);
  const registration = useSequenceRegistration({
    getSequence: env.isStudio || sequenceRegistrationEnabled ? getSequenceForRegistration : null,
    id
  });
  const activityDormant = parentDormant || !contentVisible;
  const admitted = useSequenceActivityAdmission(activityEnabled && !hidden ? {
    id,
    parent: parentSequence?.id ?? null,
    compositionId: videoConfig.id,
    from: firstFrame,
    end: cumulatedFrom + (from + actualDurationInFrames) / parentPlaybackRate
  } : null);
  const renderActivity = activityEnabled && (!activityDormant || admitted || activitySuspended && hadActivity.current);
  const useCommitEffect3 = import_react25.default.useInsertionEffect ?? import_react25.useLayoutEffect;
  useCommitEffect3(() => {
    hadActivity.current = renderActivity;
  }, [renderActivity]);
  const content2 = (activityEnabled ? renderActivity : contentVisible) ? children : null;
  const frozenContent = content2 === null || typeof freeze === "undefined" || freeze === null ? content2 : /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(Freeze, {
    frame: freeze,
    children: content2
  });
  const loopedContent = frozenContent === null || loopContextValue === null ? frozenContent : /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(LoopContext.Provider, {
    value: loopContextValue,
    children: frozenContent
  });
  const styleIfThere = other.layout === "none" ? void 0 : other.style;
  const cropClipPath = getSequenceCropClipPath({
    left: resolvedCropLeft,
    right: resolvedCropRight,
    top: resolvedCropTop,
    bottom: resolvedCropBottom,
    style: styleIfThere
  });
  const sequenceRef = (0, import_react25.useMemo)(() => setSequenceWrapperRef.bind(null, ref, wrapperRefForOutline), [ref, wrapperRefForOutline]);
  const defaultStyle = (0, import_react25.useMemo)(() => {
    return {
      flexDirection: void 0,
      ...width ? { width } : {},
      ...height ? { height } : {},
      ...styleIfThere ?? {},
      ...cropClipPath ? {
        clipPath: cropClipPath
      } : {}
    };
  }, [cropClipPath, height, styleIfThere, width]);
  if (ref !== null && layout === "none") {
    throw new TypeError('It is not supported to pass both a `ref` and `layout="none"` to <Sequence />.');
  }
  const metadata = (0, import_react25.useMemo)(() => shouldDiscoverOutline || registration !== null ? {
    type: "sequence",
    id,
    value: registration,
    outlineChildrenRef: automaticOutlineRef
  } : null, [automaticOutlineRef, id, registration, shouldDiscoverOutline]);
  if (hidden) {
    return shouldDiscoverOutline || registration !== null ? /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(SequenceContextProvider, {
      value: contextValue,
      _remotionCommitMetadata: metadata,
      children: null
    }) : null;
  }
  const retainSeriesRegistration = env.isStudio && canInferDuration;
  const contentForLayout = renderActivity ? /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(SequenceActivityContent, {
    dormant: activityDormant,
    children: loopedContent
  }) : loopedContent;
  const renderedContent = loopedContent === null ? retainSeriesRegistration ? children : null : other.layout === "none" ? contentForLayout : /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(AbsoluteFillElement, {
    ref: sequenceRef,
    style: defaultStyle,
    className: other.className,
    children: contentForLayout
  });
  const activityContent = renderActivity ? /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(SequenceActivityBoundary, {
    dormant: activityDormant,
    frame: firstFrame,
    children: renderedContent
  }) : renderedContent;
  const sequenceContent = /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(SequenceContextProvider, {
    value: contextValue,
    _remotionCommitMetadata: metadata,
    children: retainSeriesRegistration ? /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(SeriesContentVisibilityContext.Provider, {
      value: renderActivity || contentVisible,
      children: activityContent
    }) : activityContent
  });
  const sequence = /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(TimelineTrackContext.Provider, {
    value: timelineTrackRole === "track" || timelineTrackRole === "clip" && !showInTimeline ? timelineTrack : null,
    children: sequenceContent
  });
  return sequence;
};
var RegularSequenceContent = import_react25.default.memo((0, import_react25.forwardRef)(RegularSequenceContentRefForwardingFunction));
var SequenceFrameCommit = ({ currentFrame, currentFrameRef }) => {
  (0, import_react25.useLayoutEffect)(() => {
    currentFrameRef.current = currentFrame;
  }, [currentFrame, currentFrameRef]);
  return null;
};
var RegularSequenceRefForwardingFunction = (props, ref) => {
  const {
    from = 0,
    trimBefore = 0,
    playbackRate = 1,
    loop = false,
    durationInFrames,
    freeze
  } = props;
  const parentSequence = (0, import_react25.useContext)(SequenceContext);
  const parentPlaybackRate = parentSequence?.playbackRate ?? 1;
  const cumulatedFrom = parentSequence ? parentSequence.cumulatedFrom + parentSequence.relativeFrom : 0;
  const activityRequested = (0, import_react25.useContext)(SequenceActivityContext);
  const parentDormant = (0, import_react25.useContext)(SequenceActivityDormantContext);
  const env = useRemotionEnvironment();
  const activityEnabled = activityRequested && env.isStudio && !env.isRendering;
  const seriesContentVisible = (0, import_react25.useContext)(SeriesContentVisibilityContext);
  const videoConfig = useVideoConfig();
  const contentDurationInFrames = resolveSequenceContentDuration({
    durationInFrames
  });
  const absoluteFrame = useTimelinePosition();
  const lastPlaybackRate = (0, import_react25.useRef)({ playbackRate, frame: absoluteFrame });
  if (typeof playbackRate !== "number" || !Number.isFinite(playbackRate) || playbackRate <= 0) {
    throw new TypeError(`The "playbackRate" prop of <Sequence /> must be a positive finite number, but got ${playbackRate}.`);
  }
  if (lastPlaybackRate.current.frame !== absoluteFrame && lastPlaybackRate.current.playbackRate !== playbackRate) {
    throw new Error('The "playbackRate" prop of <Sequence /> must be constant. Animating playbackRate is not supported.');
  }
  (0, import_react25.useLayoutEffect)(() => {
    lastPlaybackRate.current = { playbackRate, frame: absoluteFrame };
  }, [absoluteFrame, playbackRate]);
  const effectiveDurationInFrames = resolveSequenceDuration({
    durationInFrames,
    playbackRate,
    loop
  });
  const windowRelativeFrom = from - trimBefore / playbackRate;
  const parentSequenceDuration = parentSequence ? Math.min(parentSequence.durationInFrames - windowRelativeFrom, effectiveDurationInFrames) : effectiveDurationInFrames;
  const actualDurationInFrames = Math.max(0, Math.min(videoConfig.durationInFrames - from, parentSequenceDuration));
  const frameInParent = (absoluteFrame - cumulatedFrom) * parentPlaybackRate;
  const loopPeriod = loop && Number.isFinite(contentDurationInFrames) ? contentDurationInFrames / playbackRate : null;
  let loopIteration = 0;
  if (loopPeriod !== null && (!activityEnabled || !parentDormant && frameInParent >= from && frameInParent < from + actualDurationInFrames)) {
    const loopsElapsed = (frameInParent - from) / loopPeriod;
    const nearestIteration = Math.round(loopsElapsed);
    const isAtBoundary = Math.abs(loopsElapsed - nearestIteration) <= Number.EPSILON * Math.max(1, Math.abs(loopsElapsed)) * 4;
    const lastIteration = Math.ceil(actualDurationInFrames / loopPeriod) - 1;
    loopIteration = Math.max(0, Math.min(lastIteration, isAtBoundary ? nearestIteration : Math.floor(loopsElapsed)));
  }
  const endThreshold = from + effectiveDurationInFrames;
  const boundaryTolerance = getSequenceBoundaryTolerance({
    absoluteFrame,
    cumulatedFrom,
    from,
    parentPlaybackRate,
    durationInFrames: effectiveDurationInFrames
  });
  const contentVisible = seriesContentVisible && frameInParent - from >= -boundaryTolerance && frameInParent - endThreshold < -boundaryTolerance;
  const loopOffset = loopPeriod === null ? 0 : loopIteration * loopPeriod;
  const currentSequenceStart = cumulatedFrom + (from + loopOffset - trimBefore / playbackRate) / parentPlaybackRate;
  const currentFrame = typeof freeze === "number" ? freeze : (absoluteFrame - currentSequenceStart) * (parentPlaybackRate * playbackRate);
  const inheritedFrozenFrame = useIsInsideNonPremountFreeze() ? currentFrame : null;
  const currentFrameRef = (0, import_react25.useRef)(currentFrame);
  const timing = (0, import_react25.useMemo)(() => ({
    contentDurationInFrames,
    effectiveDurationInFrames,
    actualDurationInFrames,
    loopPeriod,
    loopIteration,
    contentVisible,
    inheritedFrozenFrame,
    currentFrameRef
  }), [
    contentDurationInFrames,
    effectiveDurationInFrames,
    actualDurationInFrames,
    loopPeriod,
    loopIteration,
    contentVisible,
    inheritedFrozenFrame
  ]);
  return /* @__PURE__ */ (0, import_jsx_runtime18.jsxs)(import_react25.default.Fragment, {
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(SequenceFrameCommit, {
        currentFrame,
        currentFrameRef
      }),
      /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(RegularSequenceContent, {
        ...props,
        ref,
        timing
      })
    ]
  });
};
var RegularSequence = (0, import_react25.forwardRef)(RegularSequenceRefForwardingFunction);
var PremountedSequenceContentRefForwardingFunction = ({
  freezeFrame,
  isPremountingOrPostmounting,
  premountingActive,
  postmountingActive,
  premountingStyle,
  from = 0,
  durationInFrames,
  premountFor = 0,
  postmountFor = 0,
  style: _style,
  styleWhilePremounted: _styleWhilePremounted,
  styleWhilePostmounted: _styleWhilePostmounted,
  ...otherProps
}, ref) => {
  return /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(Freeze, {
    frame: freezeFrame,
    active: isPremountingOrPostmounting,
    _remotionInternalIsPremounting: premountingActive,
    children: /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(RegularSequence, {
      ref,
      from,
      durationInFrames,
      style: premountingStyle ?? void 0,
      _remotionInternalPremountDisplay: premountFor,
      _remotionInternalPostmountDisplay: postmountFor,
      _remotionInternalIsPremounting: premountingActive,
      _remotionInternalIsPostmounting: postmountingActive,
      ...otherProps
    })
  });
};
var PremountedSequenceContent = import_react25.default.memo((0, import_react25.forwardRef)(PremountedSequenceContentRefForwardingFunction));
var PremountedPostmountedSequenceRefForwardingFunction = (props, ref) => {
  if (props.layout === "none") {
    throw new Error('`<Sequence>` with `premountFor` and `postmountFor` props does not support layout="none"');
  }
  const {
    style: passedStyle,
    from = 0,
    durationInFrames,
    premountFor = 0,
    postmountFor = 0,
    styleWhilePremounted,
    styleWhilePostmounted,
    ...otherProps
  } = props;
  const {
    freezeFrame,
    isPremountingOrPostmounting,
    postmountingActive,
    premountingActive,
    premountingStyle
  } = usePremounting({
    from,
    durationInFrames: resolveSequenceDuration({
      durationInFrames,
      playbackRate: otherProps.playbackRate,
      loop: otherProps.loop
    }),
    premountFor,
    postmountFor,
    style: passedStyle ?? null,
    styleWhilePremounted: styleWhilePremounted ?? null,
    styleWhilePostmounted: styleWhilePostmounted ?? null,
    hideWhilePremounted: "opacity"
  });
  return /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(PremountedSequenceContent, {
    ...props,
    ref,
    freezeFrame,
    isPremountingOrPostmounting,
    postmountingActive,
    premountingActive,
    premountingStyle
  });
};
var PremountedPostmountedSequence = (0, import_react25.forwardRef)(PremountedPostmountedSequenceRefForwardingFunction);
var SequenceRefForwardingFunction = (props, ref) => {
  const env = useRemotionEnvironment();
  const { fps } = useVideoConfig();
  const defaultPremountInSeconds = (0, import_react25.useContext)(DefaultPremountContext);
  if (props.layout !== "none" && !env.isRendering) {
    const effectivePremountFor = props.premountFor ?? Math.round(defaultPremountInSeconds * fps);
    if (effectivePremountFor || props.postmountFor) {
      return /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(PremountedPostmountedSequence, {
        ref,
        ...props,
        premountFor: effectivePremountFor
      });
    }
  }
  return /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(RegularSequence, {
    ...props,
    ref
  });
};
var SequenceInner = (0, import_react25.forwardRef)(SequenceRefForwardingFunction);
var SequenceWithoutSchema = SequenceInner;
var Sequence = withInteractivitySchema({
  Component: SequenceInner,
  componentName: "<Sequence>",
  componentIdentity: "dev.remotion.remotion.Sequence",
  schema: sequenceSchema,
  supportsEffects: false
});
var SequenceWithoutFrom = withInteractivitySchema({
  Component: SequenceInner,
  componentName: "<Sequence>",
  componentIdentity: null,
  schema: sequenceSchemaWithoutFrom,
  supportsEffects: false
});
var absoluteFillSchema = {
  ...baseSchema,
  ...transformSchema,
  ...backgroundSchema,
  ...borderSchema,
  ...borderRadiusSchema,
  ...textSchema,
  ...childrenSchema
};
var setRef = (ref, value) => {
  if (typeof ref === "function") {
    ref(value);
  } else if (ref) {
    ref.current = value;
  }
};
var AbsoluteFillWithTiming = ({
  ref: callbackRef,
  from,
  premountFor,
  postmountFor,
  styleWhilePremounted,
  styleWhilePostmounted,
  trimBefore,
  playbackRate,
  loop,
  freeze,
  durationInFrames,
  hidden,
  name,
  showInTimeline,
  stack,
  controls,
  children,
  ...divProps
}) => {
  const {
    effectivePremountFor,
    effectivePostmountFor,
    freezeFrame,
    isPremountingOrPostmounting,
    premountingActive,
    postmountingActive,
    premountingStyle
  } = usePremounting({
    from: from ?? 0,
    durationInFrames: resolveSequenceDuration({
      durationInFrames,
      playbackRate,
      loop
    }),
    premountFor: premountFor ?? null,
    postmountFor: postmountFor ?? null,
    style: divProps.style ?? null,
    styleWhilePremounted: styleWhilePremounted ?? null,
    styleWhilePostmounted: styleWhilePostmounted ?? null,
    hideWhilePremounted: "opacity"
  });
  return /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(Freeze, {
    frame: freezeFrame,
    active: isPremountingOrPostmounting,
    _remotionInternalIsPremounting: premountingActive,
    children: /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(Sequence, {
      layout: "none",
      from: from ?? 0,
      trimBefore,
      playbackRate,
      loop,
      freeze,
      durationInFrames,
      hidden,
      name: name ?? "<AbsoluteFill>",
      showInTimeline: showInTimeline ?? true,
      controls,
      _remotionInternalStack: stack,
      _remotionInternalDocumentationLink: "https://www.remotion.dev/docs/absolute-fill",
      _remotionInternalPremountDisplay: effectivePremountFor || null,
      _remotionInternalPostmountDisplay: effectivePostmountFor || null,
      _remotionInternalIsPremounting: premountingActive,
      _remotionInternalIsPostmounting: postmountingActive,
      children: /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(AbsoluteFillElement, {
        ref: callbackRef,
        ...divProps,
        style: premountingStyle ?? void 0,
        children
      })
    })
  });
};
var AbsoluteFillInner = ({
  ref,
  from,
  premountFor,
  postmountFor,
  styleWhilePremounted,
  styleWhilePostmounted,
  trimBefore,
  playbackRate,
  loop,
  freeze,
  durationInFrames,
  hidden,
  name,
  showInTimeline,
  stack,
  controls,
  children,
  ...divProps
}) => {
  const videoConfig = useUnsafeVideoConfig();
  const callbackRef = (0, import_react55.useCallback)((element) => {
    setRef(ref, element);
  }, [ref]);
  if (videoConfig === null) {
    return hidden ? null : /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(AbsoluteFillElement, {
      ref: callbackRef,
      ...divProps,
      children
    });
  }
  return /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(AbsoluteFillWithTiming, {
    ...divProps,
    ref: callbackRef,
    from,
    premountFor,
    postmountFor,
    styleWhilePremounted,
    styleWhilePostmounted,
    trimBefore,
    playbackRate,
    loop,
    freeze,
    durationInFrames,
    hidden,
    name,
    showInTimeline,
    stack,
    controls,
    children
  });
};
var AbsoluteFill = withInteractivitySchema({
  Component: AbsoluteFillInner,
  componentName: "<AbsoluteFill>",
  componentIdentity: "dev.remotion.remotion.AbsoluteFill",
  schema: absoluteFillSchema,
  supportsEffects: false
});
addSequenceStackTraces(AbsoluteFill);
var getCanvasPropsFromSequenceProps = (props) => {
  const canvasProps = {};
  const mutableCanvasProps = canvasProps;
  for (const key in props) {
    if (Object.prototype.hasOwnProperty.call(props, key) && (key.startsWith("data-") || key.startsWith("aria-"))) {
      mutableCanvasProps[key] = props[key];
    }
  }
  return canvasProps;
};
var useCropStyle = ({
  cropLeft,
  cropRight,
  cropTop,
  cropBottom,
  style,
  componentName
}) => {
  validateSequenceCrop({ cropLeft, cropRight, cropTop, cropBottom }, componentName);
  return (0, import_react57.useMemo)(() => {
    const cropClipPath = getSequenceCropClipPath({
      ...resolveSequenceCrop({ cropLeft, cropRight, cropTop, cropBottom }),
      style
    });
    if (cropClipPath === null) {
      return style;
    }
    return { ...style, clipPath: cropClipPath };
  }, [cropBottom, cropLeft, cropRight, cropTop, style]);
};
var MediaEnabledContext = (0, import_react58.createContext)(null);
var useVideoEnabled = () => {
  const context = (0, import_react58.useContext)(MediaEnabledContext);
  if (context && context.videoEnabled !== null) {
    return context.videoEnabled;
  }
  return typeof window === "undefined" ? true : window.remotion_videoEnabled !== false;
};
var useAudioEnabled = () => {
  const context = (0, import_react58.useContext)(MediaEnabledContext);
  if (!context) {
    return typeof window === "undefined" ? true : window.remotion_audioEnabled;
  }
  if (context.audioEnabled === null) {
    return typeof window === "undefined" ? true : window.remotion_audioEnabled;
  }
  return context.audioEnabled;
};
var MediaEnabledProvider = ({
  children,
  videoEnabled,
  audioEnabled
}) => {
  const value = (0, import_react58.useMemo)(() => ({ videoEnabled, audioEnabled }), [videoEnabled, audioEnabled]);
  return /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(MediaEnabledContext.Provider, {
    value,
    children
  });
};
var calculateImageFit = (fit, imageSize, canvasSize) => {
  switch (fit) {
    case "fill": {
      return [
        0,
        0,
        imageSize.width,
        imageSize.height,
        0,
        0,
        canvasSize.width,
        canvasSize.height
      ];
    }
    case "contain": {
      const ratio = Math.min(canvasSize.width / imageSize.width, canvasSize.height / imageSize.height);
      const centerX = (canvasSize.width - imageSize.width * ratio) / 2;
      const centerY = (canvasSize.height - imageSize.height * ratio) / 2;
      return [
        0,
        0,
        imageSize.width,
        imageSize.height,
        centerX,
        centerY,
        imageSize.width * ratio,
        imageSize.height * ratio
      ];
    }
    case "cover": {
      const ratio = Math.max(canvasSize.width / imageSize.width, canvasSize.height / imageSize.height);
      const centerX = (canvasSize.width - imageSize.width * ratio) / 2;
      const centerY = (canvasSize.height - imageSize.height * ratio) / 2;
      return [
        0,
        0,
        imageSize.width,
        imageSize.height,
        centerX,
        centerY,
        imageSize.width * ratio,
        imageSize.height * ratio
      ];
    }
    default:
      throw new Error("Unknown fit: " + fit);
  }
};
var createWebGLStateReset = (gl, textureUnits) => {
  const drawBuffers = [gl.BACK];
  const capabilities = [
    gl.BLEND,
    gl.DEPTH_TEST,
    gl.STENCIL_TEST,
    gl.CULL_FACE,
    gl.SCISSOR_TEST,
    gl.RASTERIZER_DISCARD,
    gl.POLYGON_OFFSET_FILL,
    gl.SAMPLE_ALPHA_TO_COVERAGE,
    gl.SAMPLE_COVERAGE
  ];
  const pixelStoreParameters = [
    gl.PACK_ROW_LENGTH,
    gl.PACK_SKIP_PIXELS,
    gl.PACK_SKIP_ROWS,
    gl.UNPACK_ROW_LENGTH,
    gl.UNPACK_IMAGE_HEIGHT,
    gl.UNPACK_SKIP_PIXELS,
    gl.UNPACK_SKIP_ROWS,
    gl.UNPACK_SKIP_IMAGES
  ];
  return (width, height, flipSourceY) => {
    gl.bindFramebuffer(gl.FRAMEBUFFER, null);
    gl.drawBuffers(drawBuffers);
    gl.readBuffer(gl.BACK);
    gl.viewport(0, 0, width, height);
    gl.scissor(0, 0, width, height);
    for (const capability of capabilities) {
      gl.disable(capability);
    }
    gl.enable(gl.DITHER);
    gl.colorMask(true, true, true, true);
    gl.depthMask(true);
    gl.stencilMask(4294967295);
    gl.clearColor(0, 0, 0, 0);
    gl.clearDepth(1);
    gl.clearStencil(0);
    gl.useProgram(null);
    gl.bindVertexArray(null);
    gl.bindBuffer(gl.ARRAY_BUFFER, null);
    gl.bindBuffer(gl.PIXEL_PACK_BUFFER, null);
    gl.bindBuffer(gl.PIXEL_UNPACK_BUFFER, null);
    for (let unit = 0; unit < textureUnits; unit++) {
      gl.bindSampler(unit, null);
    }
    gl.activeTexture(gl.TEXTURE0);
    gl.pixelStorei(gl.PACK_ALIGNMENT, 4);
    gl.pixelStorei(gl.UNPACK_ALIGNMENT, 4);
    for (const parameter of pixelStoreParameters) {
      gl.pixelStorei(parameter, 0);
    }
    gl.pixelStorei(gl.UNPACK_PREMULTIPLY_ALPHA_WEBGL, true);
    gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, flipSourceY);
    gl.pixelStorei(gl.UNPACK_COLORSPACE_CONVERSION_WEBGL, gl.BROWSER_DEFAULT_WEBGL);
  };
};
var WebGLContextLostError = class extends Error {
  constructor(canvas) {
    super("WebGL context was lost while rendering effects");
    __publicField(this, "canvas");
    this.name = "WebGLContextLostError";
    this.canvas = canvas;
  }
};
var WEBGL_CONTEXT_DOCS_URL = "https://remotion.dev/docs/troubleshooting/webgl2-context";
var WebGL2ContextCreationError = class extends Error {
};
var webGlContextErrorMessage = (versionLabel, effectName) => `Failed to acquire ${versionLabel} context for ${effectName}. Pass --gl=angle when using the CLI, set chromiumOptions: { gl: "angle" } when using SSR APIs, or set "OpenGL render backend" to "angle" in the Advanced section when rendering in the Studio. See ${WEBGL_CONTEXT_DOCS_URL}`;
var createWebGLContextError = (effectName) => new Error(webGlContextErrorMessage("WebGL", effectName));
var createWebGL2ContextError = (effectName) => new WebGL2ContextCreationError(webGlContextErrorMessage("WebGL2", effectName));
var scheduleContextLoss = (gl) => {
  setTimeout(() => {
    gl.getExtension("WEBGL_lose_context")?.loseContext();
  }, 0);
};
var CanvasPool = class {
  constructor(width, height, onContextLost) {
    __publicField(this, "width");
    __publicField(this, "height");
    __publicField(this, "pairs", /* @__PURE__ */ new Map());
    __publicField(this, "allocated", /* @__PURE__ */ new Map());
    __publicField(this, "lostContexts", /* @__PURE__ */ new Set());
    __publicField(this, "onContextLost");
    __publicField(this, "disposed", false);
    this.width = width;
    this.height = height;
    this.onContextLost = onContextLost;
  }
  resize(width, height) {
    this.width = width;
    this.height = height;
    for (const canvas of this.allocated.keys()) {
      if (canvas.width !== width)
        canvas.width = width;
      if (canvas.height !== height)
        canvas.height = height;
    }
  }
  owns(canvas) {
    return this.allocated.has(canvas);
  }
  assertWebGLContextsNotLost() {
    for (const [canvas, entry] of this.allocated) {
      if (entry.gl)
        this.getCheckedEntry(canvas);
    }
  }
  getCanvas(backend, index) {
    if (this.disposed) {
      throw new Error("Effect chain state was used after it had been cleaned up");
    }
    let pair = this.pairs.get(backend);
    if (!pair) {
      pair = [null, null];
      this.pairs.set(backend, pair);
    }
    pair[index] ?? (pair[index] = this.allocateCanvas(backend));
    return pair[index];
  }
  getPair(backend) {
    this.getCanvas(backend, 0);
    this.getCanvas(backend, 1);
    return this.pairs.get(backend);
  }
  getCheckedEntry(canvas) {
    const entry = this.allocated.get(canvas);
    if (this.lostContexts.has(canvas) || entry?.gl?.isContextLost()) {
      throw new WebGLContextLostError(canvas);
    }
    return entry ?? null;
  }
  assertContextNotLost(canvas) {
    this.getCheckedEntry(canvas);
  }
  prepareWebGL(canvas, flipSourceY) {
    const entry = this.getCheckedEntry(canvas);
    if (!entry?.reset) {
      throw new Error("WebGL effect target is not owned by this pool");
    }
    entry.reset(canvas.width, canvas.height, flipSourceY);
  }
  retireWebGL(canvas) {
    const entry = this.allocated.get(canvas);
    if (!entry)
      return;
    const { gl } = entry;
    this.allocated.delete(canvas);
    const pair = this.pairs.get("webgl2");
    if (pair) {
      if (pair[0] === canvas)
        pair[0] = null;
      if (pair[1] === canvas)
        pair[1] = null;
    }
    try {
      if (gl)
        scheduleContextLoss(gl);
      this.onContextLost(canvas);
    } finally {
      canvas.width = 0;
      canvas.height = 0;
      this.lostContexts.delete(canvas);
    }
  }
  dispose() {
    if (this.disposed) {
      return;
    }
    this.disposed = true;
    for (const [canvas, { gl }] of this.allocated) {
      if (gl)
        scheduleContextLoss(gl);
      canvas.width = 0;
      canvas.height = 0;
    }
    this.allocated.clear();
    this.pairs.clear();
    this.lostContexts.clear();
  }
  allocateCanvas(backend) {
    const canvas = document.createElement("canvas");
    canvas.width = this.width;
    canvas.height = this.height;
    switch (backend) {
      case "2d": {
        const ctx = canvas.getContext("2d", {
          colorSpace: "srgb"
        });
        if (!ctx) {
          throw new Error("Failed to acquire 2D context for effects");
        }
        this.allocated.set(canvas, { gl: null, reset: null });
        return canvas;
      }
      case "webgl2": {
        const ctx = canvas.getContext("webgl2", {
          premultipliedAlpha: true,
          alpha: true,
          preserveDrawingBuffer: true
        });
        if (!ctx) {
          throw createWebGL2ContextError("effects");
        }
        canvas.addEventListener("webglcontextlost", () => {
          if (this.disposed || !this.allocated.has(canvas)) {
            return;
          }
          this.lostContexts.add(canvas);
          this.onContextLost(canvas);
        });
        canvas.addEventListener("webglcontextrestored", () => {
          if (this.disposed || !this.allocated.has(canvas)) {
            return;
          }
          ctx.pixelStorei(ctx.UNPACK_PREMULTIPLY_ALPHA_WEBGL, true);
          this.lostContexts.delete(canvas);
        });
        ctx.pixelStorei(ctx.UNPACK_PREMULTIPLY_ALPHA_WEBGL, true);
        this.allocated.set(canvas, {
          gl: ctx,
          reset: createWebGLStateReset(ctx, ctx.getParameter(ctx.MAX_COMBINED_TEXTURE_IMAGE_UNITS))
        });
        return canvas;
      }
      case "webgpu": {
        if (typeof navigator === "undefined" || !("gpu" in navigator) || !canvas.getContext("webgpu")) {
          throw new Error("WebGPU is not available in this environment for effects");
        }
        this.allocated.set(canvas, { gl: null, reset: null });
        return canvas;
      }
      default: {
        const exhaustive = backend;
        throw new Error(`Unknown effect backend: ${exhaustive}`);
      }
    }
  }
};
var groupByBackend = (effects) => {
  const runs = [];
  let current = [];
  let currentBackend = null;
  for (const eff of effects) {
    const { backend } = eff.definition;
    if (currentBackend === null || backend === currentBackend) {
      current.push(eff);
      currentBackend = backend;
    } else {
      runs.push({ backend: currentBackend, effects: current });
      current = [eff];
      currentBackend = backend;
    }
  }
  if (currentBackend !== null && current.length > 0) {
    runs.push({ backend: currentBackend, effects: current });
  }
  return runs;
};
var deviceLost = false;
var devicePromise = null;
var getGpuDevice = () => {
  if (deviceLost && typeof window !== "undefined" && window.remotion_puppeteerTimeout !== void 0) {
    throw new Error('WebGPU device was lost during rendering. Retry the render or use preferredEffectBackend: "webgl2".');
  }
  if (devicePromise) {
    return devicePromise;
  }
  devicePromise = (async () => {
    if (typeof navigator === "undefined" || !("gpu" in navigator)) {
      return null;
    }
    const { gpu } = navigator;
    const adapter = await gpu.requestAdapter();
    if (!adapter) {
      return null;
    }
    const device = await adapter.requestDevice();
    let supportsCanvasTargets = false;
    try {
      const canvas = document.createElement("canvas");
      canvas.width = 1;
      canvas.height = 1;
      const context = canvas.getContext("webgpu");
      if (!context)
        return null;
      let validationError = null;
      try {
        device.pushErrorScope("validation");
        try {
          context.configure({
            device,
            format: gpu.getPreferredCanvasFormat(),
            alphaMode: "premultiplied"
          });
          context.getCurrentTexture().createView();
        } finally {
          validationError = await device.popErrorScope();
        }
      } finally {
        context.unconfigure();
      }
      if (validationError)
        return null;
      supportsCanvasTargets = true;
    } finally {
      if (!supportsCanvasTargets)
        device.destroy();
    }
    device.lost?.then(() => {
      deviceLost = true;
      devicePromise = Promise.resolve(null);
    });
    return device;
  })().catch(() => null);
  return devicePromise;
};
var pools = [];
var leased = false;
var waiters = [];
var cleanups = [];
var listeners4 = /* @__PURE__ */ new Set();
var release = () => {
  const errors = [];
  try {
    while (cleanups.length > 0) {
      try {
        cleanups.shift()();
      } catch (error2) {
        errors.push(error2);
      }
    }
  } finally {
    const next = waiters.shift();
    if (next) {
      next();
    } else {
      leased = false;
    }
  }
  if (errors.length === 1)
    throw errors[0];
  if (errors.length > 1)
    throw new AggregateError(errors, "Shared WebGL cleanup failed");
};
var cleanupWithSharedWebGLPool = (cleanup) => {
  cleanups.push(cleanup);
  if (!leased) {
    leased = true;
    release();
  }
};
var subscribeToSharedWebGLContextLoss = (onContextLost) => {
  listeners4.add(onContextLost);
  return () => {
    listeners4.delete(onContextLost);
    if (listeners4.size === 0) {
      for (const entry of pools)
        entry.pool.dispose();
      pools.length = 0;
    }
  };
};
var acquireSharedWebGLPool = async (width, height) => {
  await new Promise((resolve) => {
    if (leased) {
      waiters.push(resolve);
    } else {
      leased = true;
      resolve();
    }
  });
  try {
    const index = pools.findIndex((candidate) => candidate.width === width && candidate.height === height);
    const cached = index === -1 ? null : pools.splice(index, 1)[0];
    const entry = cached ?? (pools.length === 2 ? pools.shift() : null);
    if (entry) {
      entry.pool.resize(width, height);
      entry.width = width;
      entry.height = height;
      pools.push(entry);
      return { pool: entry.pool, release };
    }
    const pool = new CanvasPool(width, height, (canvas) => {
      const errors = [];
      for (const listener of [...listeners4]) {
        try {
          listener(canvas);
        } catch (error2) {
          errors.push(error2);
        }
      }
      if (pool.owns(canvas)) {
        cleanupWithSharedWebGLPool(() => pool.retireWebGL(canvas));
      }
      if (errors.length === 1)
        throw errors[0];
      if (errors.length > 1)
        throw new AggregateError(errors, "Shared WebGL invalidation failed");
    });
    pools.push({ pool, width, height });
    return { pool, release };
  } catch (error2) {
    release();
    throw error2;
  }
};
var cleanupEntries = (entries2) => {
  const errors = [];
  for (const entry of entries2) {
    try {
      entry.definition.cleanup(entry.state);
    } catch (error2) {
      errors.push(error2);
    }
  }
  if (errors.length === 1)
    throw errors[0];
  if (errors.length > 1)
    throw new AggregateError(errors, "Effect cleanup failed");
};
var disposeEffectChainState = (state) => {
  const entries2 = state.cleanupRegistry;
  state.cleanupRegistry = [];
  state.setupCache = /* @__PURE__ */ new WeakMap();
  try {
    cleanupEntries(entries2);
  } finally {
    try {
      state.unsubscribeWebGL?.();
      state.unsubscribeWebGL = null;
      state.webglPool = null;
      state.requestRedraw = null;
    } finally {
      state.pool.dispose();
    }
  }
};
var createEffectChainState = (width, height) => {
  const state = {
    width,
    height,
    preferredEffectBackend: typeof window === "undefined" ? "auto" : window.remotion_preferredEffectBackend ?? "auto",
    gpuDevice: null,
    selections: /* @__PURE__ */ new WeakMap(),
    pool: new CanvasPool(width, height, () => {
      return;
    }),
    webglPool: null,
    releaseWebGL: null,
    unsubscribeWebGL: null,
    webglGeneration: 0,
    lastLostWebGLCanvas: null,
    requestRedraw: null,
    onWebGLContextLost: (canvas) => {
      const dead = state.cleanupRegistry.filter((entry) => entry.target === canvas);
      if (dead.length === 0 && !(state.releaseWebGL && state.webglPool?.owns(canvas)))
        return;
      state.webglGeneration++;
      state.lastLostWebGLCanvas = canvas;
      state.cleanupRegistry = state.cleanupRegistry.filter((entry) => entry.target !== canvas);
      for (const entry of dead) {
        state.setupCache.get(entry.definition)?.delete(canvas);
      }
      try {
        cleanupEntries(dead);
      } finally {
        if (!state.pendingRun && !state.cleanupRequested)
          state.requestRedraw?.();
      }
    },
    setupCache: /* @__PURE__ */ new WeakMap(),
    cleanupRegistry: [],
    currentRunId: 0,
    pendingRun: null,
    cleanupRequested: false
  };
  return state;
};
var cleanupEffectChainState = (state) => {
  if (state.cleanupRequested)
    return;
  state.cleanupRequested = true;
  state.currentRunId++;
  invalidateEffectChainSources(state);
  if (!state.pendingRun) {
    if (state.webglPool) {
      cleanupWithSharedWebGLPool(() => disposeEffectChainState(state));
    } else {
      disposeEffectChainState(state);
    }
  }
};
var ensureSetup = (state, def, target, backend) => {
  const widened = def;
  let cacheForDefinition = state.setupCache.get(widened);
  if (!cacheForDefinition) {
    cacheForDefinition = /* @__PURE__ */ new WeakMap();
    state.setupCache.set(widened, cacheForDefinition);
  }
  if (cacheForDefinition.has(target)) {
    return cacheForDefinition.get(target);
  }
  if (backend === "webgl2")
    state.webglPool.prepareWebGL(target, false);
  let setupState;
  try {
    setupState = def.setup(target);
  } catch (error2) {
    if (backend === "webgl2") {
      state.webglPool.assertContextNotLost(target);
      try {
        state.webglPool.retireWebGL(target);
      } catch (cleanupError) {
        throw new AggregateError([error2, cleanupError], "Effect setup and cleanup failed");
      }
    }
    throw error2;
  }
  cacheForDefinition.set(target, setupState);
  state.cleanupRegistry.push({
    backend,
    definition: widened,
    state: setupState,
    target
  });
  return setupState;
};
var runEffectChainWithoutResize = async ({ state, source, output, width, height }, initialFlipSourceY, runId, {
  resolved,
  gpuDevice
}) => {
  const isCancelled = () => state.currentRunId !== runId;
  const { webglGeneration } = state;
  const assertWebGLValid = () => {
    if (!state.releaseWebGL)
      return;
    if (state.webglGeneration !== webglGeneration && state.lastLostWebGLCanvas) {
      throw new WebGLContextLostError(state.lastLostWebGLCanvas);
    }
    state.webglPool.assertWebGLContextsNotLost();
  };
  const runs = groupByBackend(resolved);
  let currentImage = source;
  let lastTarget = null;
  if (runs.length === 0) {
    if (source === output) {
      return true;
    }
    const ctx = output.getContext("2d");
    if (!ctx) {
      throw new Error("Failed to acquire 2D context for output canvas");
    }
    ctx.clearRect(0, 0, width, height);
    ctx.drawImage(currentImage, 0, 0, width, height);
    return true;
  }
  let flipWebGLSourceY = initialFlipSourceY;
  let bridgeBitmap = null;
  try {
    for (let runIndex = 0; runIndex < runs.length; runIndex++) {
      const run = runs[runIndex];
      let canvasIndex = 0;
      for (const eff of run.effects) {
        if (isCancelled())
          return false;
        const canvasPool = run.backend === "webgl2" ? state.webglPool : state.pool;
        const dst = canvasPool.getCanvas(run.backend, canvasIndex);
        const def = eff.implementation;
        const setupState = ensureSetup(state, def, dst, run.backend);
        if (isCancelled())
          return false;
        assertWebGLValid();
        publishEffectSource(eff.original, currentImage, state);
        if (isCancelled())
          return false;
        if (run.backend === "webgl2")
          canvasPool.prepareWebGL(dst, flipWebGLSourceY);
        def.apply({
          source: currentImage,
          target: dst,
          state: setupState,
          params: eff.params,
          width: state.width,
          height: state.height,
          gpuDevice,
          flipSourceY: run.backend === "webgl2" ? flipWebGLSourceY : false
        });
        if (run.backend === "webgl2")
          canvasPool.assertContextNotLost(dst);
        if (isCancelled())
          return false;
        bridgeBitmap?.close();
        bridgeBitmap = null;
        if (run.backend === "webgl2") {
          flipWebGLSourceY = true;
        }
        currentImage = dst;
        canvasIndex = canvasIndex === 0 ? 1 : 0;
      }
      lastTarget = currentImage ?? lastTarget;
      const nextRun = runs[runIndex + 1];
      if (nextRun && nextRun.backend !== run.backend && lastTarget) {
        if (run.backend === "2d" && nextRun.backend === "webgl2") {
          currentImage = lastTarget;
          flipWebGLSourceY = true;
        } else {
          bridgeBitmap = await createImageBitmap(lastTarget, {
            imageOrientation: nextRun.backend === "webgl2" ? "flipY" : "none"
          });
          if (isCancelled()) {
            return false;
          }
          assertWebGLValid();
          currentImage = bridgeBitmap;
          if (nextRun.backend === "webgl2") {
            flipWebGLSourceY = false;
          }
        }
      }
    }
  } finally {
    bridgeBitmap?.close();
  }
  if (isCancelled())
    return false;
  assertWebGLValid();
  if (!lastTarget) {
    return true;
  }
  const outCtx = output.getContext("2d");
  if (!outCtx) {
    throw new Error("Failed to acquire 2D context for output canvas");
  }
  outCtx.clearRect(0, 0, width, height);
  outCtx.drawImage(lastTarget, 0, 0, width, height);
  return true;
};
var runEffectChainWithResize = async (options, runId, allowBackendFallback) => {
  const { state, source, width, height, effects } = options;
  const order = ["webgpu", "webgl2", "2d"];
  if (state.preferredEffectBackend !== "auto") {
    order.splice(order.indexOf(state.preferredEffectBackend), 1);
    order.unshift(state.preferredEffectBackend);
  }
  const resolved = [];
  let gpuDevice = null;
  for (const effect of effects) {
    if (effect.params.disabled)
      continue;
    const implementations = effect.definition.implementations ?? {
      [effect.definition.backend]: effect.definition
    };
    let selected = false;
    const cached = state.selections.get(effect.definition);
    const candidates = cached === void 0 ? order : [
      cached.backend,
      ...order.filter((backend) => backend !== cached.backend)
    ];
    for (const backend of candidates) {
      const implementation = implementations[backend];
      if (!implementation)
        continue;
      if (backend === "webgpu") {
        if (typeof window !== "undefined" && window.remotion_disableWebGpuEffects)
          continue;
        gpuDevice = await getGpuDevice();
        if (state.currentRunId !== runId)
          return false;
        if (!gpuDevice)
          continue;
        const { limits } = gpuDevice;
        if (limits && (state.width > limits.maxTextureDimension2D || state.height > limits.maxTextureDimension2D))
          continue;
      }
      if (backend === "webgl2" && !state.releaseWebGL) {
        state.unsubscribeWebGL ?? (state.unsubscribeWebGL = subscribeToSharedWebGLContextLoss(state.onWebGLContextLost));
        const lease = await acquireSharedWebGLPool(state.width, state.height);
        state.webglPool = lease.pool;
        state.releaseWebGL = lease.release;
        if (state.currentRunId !== runId)
          return false;
      }
      if (Object.keys(implementations).length > 1) {
        try {
          (backend === "webgl2" ? state.webglPool : state.pool).getCanvas(backend, 0);
        } catch (error2) {
          if (!allowBackendFallback)
            throw error2;
          continue;
        }
      }
      state.selections.set(effect.definition, { backend, implementation });
      resolved.push({
        definition: { backend },
        implementation,
        original: effect,
        params: effect.params
      });
      selected = true;
      break;
    }
    if (!selected)
      throw new Error(`No supported implementation for effect "${effect.definition.type}" (preferred backend: ${state.preferredEffectBackend})`);
  }
  const deviceChanged = gpuDevice !== state.gpuDevice;
  const activeImplementations = new Set(resolved.map((effect) => effect.implementation));
  let entries2 = state.cleanupRegistry.filter((entry) => deviceChanged || !activeImplementations.has(entry.definition));
  if (entries2.length > 0) {
    const retiredWebGpuTargets = new Set(entries2.filter((entry) => entry.backend === "webgpu").map((entry) => entry.target));
    if (retiredWebGpuTargets.size > 0) {
      entries2 = state.cleanupRegistry.filter((entry) => deviceChanged || !activeImplementations.has(entry.definition) || retiredWebGpuTargets.has(entry.target));
    }
    const retiredEntries = new Set(entries2);
    state.cleanupRegistry = state.cleanupRegistry.filter((entry) => !retiredEntries.has(entry));
    for (const entry of entries2) {
      state.setupCache.get(entry.definition)?.delete(entry.target);
    }
    if (state.webglPool && !state.releaseWebGL) {
      try {
        cleanupEntries(entries2.filter((entry) => entry.backend !== "webgl2"));
      } finally {
        const webglEntries = entries2.filter((entry) => entry.backend === "webgl2");
        if (webglEntries.length > 0) {
          cleanupWithSharedWebGLPool(() => cleanupEntries(webglEntries));
        }
      }
    } else {
      cleanupEntries(entries2);
    }
  }
  state.gpuDevice = gpuDevice;
  if (state.currentRunId !== runId)
    return false;
  if (state.width === width && state.height === height || !effects.some((effect) => !effect.params.disabled)) {
    return runEffectChainWithoutResize(options, true, runId, {
      resolved,
      gpuDevice
    });
  }
  const firstEnabledEffect = resolved[0];
  const resized = await createImageBitmap(source, {
    resizeWidth: state.width,
    resizeHeight: state.height,
    imageOrientation: firstEnabledEffect.definition.backend === "webgl2" ? "flipY" : "none"
  });
  try {
    if (state.currentRunId !== runId) {
      return false;
    }
    return await runEffectChainWithoutResize({ ...options, source: resized }, false, runId, { resolved, gpuDevice });
  } finally {
    resized.close();
  }
};
var runEffectChain = async (options) => {
  const { state } = options;
  if (state.cleanupRequested) {
    throw new Error("Effect chain state was used after it had been cleaned up");
  }
  const runId = ++state.currentRunId;
  const previousRun = state.pendingRun;
  let release2;
  const completion = new Promise((resolve) => {
    release2 = resolve;
  });
  state.pendingRun = completion;
  try {
    if (previousRun)
      await previousRun;
    if (state.currentRunId !== runId)
      return false;
    for (let attempt = 0; ; attempt++) {
      try {
        return await runEffectChainWithResize(options, runId, attempt === 0);
      } catch (error2) {
        if (state.currentRunId !== runId)
          return false;
        let failure = error2;
        if (state.releaseWebGL) {
          try {
            state.webglPool.assertWebGLContextsNotLost();
          } catch (contextError) {
            failure = contextError;
          }
        }
        if (!(failure instanceof WebGLContextLostError) && !(attempt > 0 && failure instanceof WebGL2ContextCreationError))
          throw failure;
        if (attempt === 2) {
          if (failure instanceof WebGLContextLostError) {
            state.webglPool.retireWebGL(failure.canvas);
          }
          throw new Error("WebGL context was lost repeatedly while rendering effects. Recovery failed after two retries. Try reducing rendering concurrency or GPU memory usage.", { cause: failure });
        }
        if (failure instanceof WebGLContextLostError) {
          state.webglPool.retireWebGL(failure.canvas);
        }
        await new Promise((resolve) => setTimeout(resolve, attempt * 50));
        if (state.currentRunId !== runId)
          return false;
      }
    }
  } finally {
    try {
      if (state.pendingRun === completion) {
        state.pendingRun = null;
        if (state.cleanupRequested)
          disposeEffectChainState(state);
      }
    } finally {
      try {
        const { releaseWebGL } = state;
        state.releaseWebGL = null;
        releaseWebGL?.();
      } finally {
        release2();
      }
    }
  }
};
var PreferredEffectBackendContext = (0, import_react61.createContext)(null);
var useEffectChainState = (effectsOutputSize = null) => {
  const preferredEffectBackend = validatePreferredEffectBackend((0, import_react60.useContext)(PreferredEffectBackendContext) ?? (typeof window === "undefined" ? "auto" : window.remotion_preferredEffectBackend ?? "auto"));
  const effectWidth = effectsOutputSize?.width;
  const effectHeight = effectsOutputSize?.height;
  if (effectsOutputSize) {
    validateDimension(effectWidth, "effectsOutputSize.width", "on an effect-capable component");
    validateDimension(effectHeight, "effectsOutputSize.height", "on an effect-capable component");
  }
  const chainStateRef = (0, import_react60.useRef)(null);
  const sizeRef = (0, import_react60.useRef)(null);
  const unmountedRef = (0, import_react60.useRef)(false);
  const [recoveryRevision, setRecoveryRevision] = (0, import_react60.useState)(0);
  (0, import_react60.useEffect)(() => {
    unmountedRef.current = false;
    return () => {
      unmountedRef.current = true;
      if (chainStateRef.current) {
        cleanupEffectChainState(chainStateRef.current);
        chainStateRef.current = null;
        sizeRef.current = null;
      }
    };
  }, []);
  return (0, import_react60.useMemo)(() => ({
    recoveryRevision,
    get: (width, height) => {
      width = effectWidth ?? width;
      height = effectHeight ?? height;
      if (unmountedRef.current) {
        return null;
      }
      if (!sizeRef.current || sizeRef.current.width !== width || sizeRef.current.height !== height || chainStateRef.current?.preferredEffectBackend !== preferredEffectBackend) {
        if (chainStateRef.current) {
          cleanupEffectChainState(chainStateRef.current);
        }
        chainStateRef.current = createEffectChainState(width, height);
        chainStateRef.current.requestRedraw = () => {
          if (!unmountedRef.current)
            setRecoveryRevision((revision) => revision + 1);
        };
        chainStateRef.current.preferredEffectBackend = preferredEffectBackend;
        sizeRef.current = { width, height };
      }
      return chainStateRef.current;
    }
  }), [effectWidth, effectHeight, preferredEffectBackend, recoveryRevision]);
};
var CanvasRefForwardingFunction = ({ width, height, fit, className, style, effects, effectsOutputSize, ...props }, ref) => {
  const canvasRef = (0, import_react59.useRef)(null);
  const chainState = useEffectChainState(effectsOutputSize);
  const lastDrawRef = (0, import_react59.useRef)(null);
  const drawCountRef = (0, import_react59.useRef)(0);
  const sourceCanvas = (0, import_react59.useMemo)(() => {
    if (typeof document === "undefined") {
      return null;
    }
    return document.createElement("canvas");
  }, []);
  const draw = (0, import_react59.useCallback)((imageData) => {
    const canvas = canvasRef.current;
    const canvasWidth = width ?? imageData.displayWidth;
    const canvasHeight = height ?? imageData.displayHeight;
    if (!canvas) {
      throw new Error("Canvas ref is not set");
    }
    if (!sourceCanvas) {
      throw new Error("Source canvas is not available");
    }
    const lastDraw = lastDrawRef.current;
    if (lastDraw && lastDraw.canvas === canvas && lastDraw.chainState === chainState && lastDraw.imageData === imageData && lastDraw.effects === effects && lastDraw.fit === fit && lastDraw.canvasWidth === canvasWidth && lastDraw.canvasHeight === canvasHeight) {
      return Promise.resolve(true);
    }
    lastDrawRef.current = null;
    const drawId = ++drawCountRef.current;
    sourceCanvas.width = canvasWidth;
    sourceCanvas.height = canvasHeight;
    const sourceCtx = sourceCanvas.getContext("2d");
    if (!sourceCtx) {
      throw new Error("Could not get 2d context for source canvas");
    }
    sourceCtx.drawImage(imageData, ...calculateImageFit(fit, {
      height: imageData.displayHeight,
      width: imageData.displayWidth
    }, {
      width: canvasWidth,
      height: canvasHeight
    }));
    canvas.width = canvasWidth;
    canvas.height = canvasHeight;
    return runEffectChain({
      state: chainState.get(canvasWidth, canvasHeight),
      source: sourceCanvas,
      effects,
      output: canvas,
      width: canvasWidth,
      height: canvasHeight
    }).then((completed) => {
      if (completed && drawCountRef.current === drawId) {
        lastDrawRef.current = {
          canvas,
          chainState,
          imageData,
          effects,
          fit,
          canvasWidth,
          canvasHeight
        };
      }
      return completed;
    });
  }, [chainState, effects, fit, height, sourceCanvas, width]);
  (0, import_react59.useEffect)(() => {
    const canvas = canvasRef.current;
    if (!canvas) {
      return;
    }
    const invalidate = () => {
      lastDrawRef.current = null;
      drawCountRef.current++;
    };
    canvas.addEventListener("contextrestored", invalidate);
    return () => {
      canvas.removeEventListener("contextrestored", invalidate);
    };
  }, []);
  (0, import_react59.useImperativeHandle)(ref, () => {
    return {
      draw,
      getCanvas: () => {
        if (!canvasRef.current) {
          throw new Error("Canvas ref is not set");
        }
        return canvasRef.current;
      },
      clear: () => {
        const ctx = canvasRef.current?.getContext("2d");
        if (!ctx) {
          throw new Error("Could not get 2d context");
        }
        lastDrawRef.current = null;
        drawCountRef.current++;
        ctx.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
      }
    };
  }, [draw]);
  return /* @__PURE__ */ (0, import_jsx_runtime21.jsx)("canvas", {
    ref: canvasRef,
    className,
    style,
    ...props
  });
};
var Canvas = import_react59.default.forwardRef(CanvasRefForwardingFunction);
var createImageDecoder = async ({
  resolvedSrc,
  signal,
  requestInit,
  contentType
}) => {
  if (typeof ImageDecoder === "undefined") {
    throw new Error("Your browser does not support the WebCodecs ImageDecoder API.");
  }
  const response = await fetch(resolvedSrc, { ...requestInit, signal });
  const { body } = response;
  if (!body) {
    throw new Error("Got no body");
  }
  const decoder = new ImageDecoder({
    data: body,
    type: contentType ?? response.headers.get("Content-Type") ?? "image/gif"
  });
  await Promise.all([decoder.completed, decoder.tracks.ready]);
  const { selectedTrack } = decoder.tracks;
  if (!selectedTrack) {
    decoder.close();
    throw new Error("No selected track");
  }
  return { decoder, selectedTrack };
};
var CACHE_SIZE = 5;
var getActualTime = ({
  loopBehavior,
  durationFound,
  timeInSec
}) => {
  return loopBehavior === "loop" ? durationFound ? timeInSec % durationFound : timeInSec : Math.min(timeInSec, durationFound || Infinity);
};
var decodeImage = async ({
  resolvedSrc,
  signal,
  requestInit,
  currentTime,
  initialLoopBehavior
}) => {
  const { decoder, selectedTrack } = await createImageDecoder({
    resolvedSrc,
    signal,
    requestInit,
    contentType: null
  });
  const cache2 = [];
  let durationFound = null;
  const getFrameByIndex = async (frameIndex) => {
    const foundInCache = cache2.find((c2) => c2.frameIndex === frameIndex);
    if (foundInCache && foundInCache.frame) {
      return foundInCache;
    }
    const frame = await decoder.decode({
      frameIndex,
      completeFramesOnly: true
    });
    if (foundInCache) {
      foundInCache.frame = frame.image;
    } else {
      cache2.push({
        frame: frame.image,
        frameIndex,
        timeInSeconds: frame.image.timestamp / 1e6
      });
    }
    return {
      frame: frame.image,
      frameIndex,
      timeInSeconds: frame.image.timestamp / 1e6
    };
  };
  const clearCache = (closeToTimeInSec) => {
    const itemsInCache = cache2.filter((c2) => c2.frame);
    const sortByClosestToCurrentTime = itemsInCache.sort((a2, b2) => {
      const aDiff = Math.abs(a2.timeInSeconds - closeToTimeInSec);
      const bDiff = Math.abs(b2.timeInSeconds - closeToTimeInSec);
      return aDiff - bDiff;
    });
    for (let i = 0; i < sortByClosestToCurrentTime.length; i++) {
      if (i < CACHE_SIZE) {
        continue;
      }
      const item = sortByClosestToCurrentTime[i];
      item.frame?.close();
      item.frame = null;
    }
  };
  const ensureFrameBeforeAndAfter = async ({
    timeInSec,
    loopBehavior
  }) => {
    const actualTimeInSec = getActualTime({
      durationFound,
      loopBehavior,
      timeInSec
    });
    const framesBefore = cache2.filter((c2) => c2.timeInSeconds <= actualTimeInSec);
    const biggestIndex = framesBefore.map((c2) => c2.frameIndex).reduce((a2, b2) => Math.max(a2, b2), 0);
    let i = biggestIndex;
    while (true) {
      const f = await getFrameByIndex(i);
      i++;
      if (!f.frame) {
        throw new Error("No frame found");
      }
      if (!f.frame.duration) {
        break;
      }
      if (i === selectedTrack.frameCount && durationFound === null) {
        const duration = (f.frame.timestamp + f.frame.duration) / 1e6;
        durationFound = duration;
      }
      if (f.timeInSeconds > actualTimeInSec || i === selectedTrack.frameCount) {
        break;
      }
    }
    if (selectedTrack.frameCount - biggestIndex < 3 && loopBehavior === "loop") {
      await getFrameByIndex(0);
    }
    clearCache(actualTimeInSec);
  };
  await ensureFrameBeforeAndAfter({
    timeInSec: currentTime,
    loopBehavior: initialLoopBehavior
  });
  await ensureFrameBeforeAndAfter({
    timeInSec: currentTime,
    loopBehavior: initialLoopBehavior
  });
  const getFrame = async (timeInSec, loopBehavior) => {
    if (durationFound !== null && timeInSec > durationFound && loopBehavior === "clear-after-finish") {
      return null;
    }
    const actualTimeInSec = getActualTime({
      loopBehavior,
      durationFound,
      timeInSec
    });
    await ensureFrameBeforeAndAfter({ timeInSec: actualTimeInSec, loopBehavior });
    const itemsInCache = cache2.filter((c2) => c2.frame);
    const closest = itemsInCache.reduce((a2, b2) => {
      const aDiff = Math.abs(a2.timeInSeconds - actualTimeInSec);
      const bDiff = Math.abs(b2.timeInSeconds - actualTimeInSec);
      return aDiff < bDiff ? a2 : b2;
    });
    if (!closest.frame) {
      throw new Error("No frame found");
    }
    return closest;
  };
  return {
    close: () => {
      for (const item of cache2) {
        item.frame?.close();
        item.frame = null;
      }
      decoder.close();
    },
    getFrame,
    frameCount: selectedTrack.frameCount
  };
};
var getCurrentTime = ({
  frame,
  playbackRate,
  fps
}) => {
  return frame * playbackRate / fps;
};
var getAnimatedImageDurationInSeconds = async ({
  resolvedSrc,
  signal,
  requestInit,
  contentType
}) => {
  const { decoder, selectedTrack } = await createImageDecoder({
    resolvedSrc,
    signal,
    requestInit,
    contentType
  });
  try {
    const { image } = await decoder.decode({
      frameIndex: selectedTrack.frameCount - 1,
      completeFramesOnly: true
    });
    try {
      if (image.duration === null) {
        throw new Error("Could not determine animated image duration");
      }
      return (image.timestamp + image.duration) / 1e6;
    } finally {
      image.close();
    }
  } finally {
    decoder.close();
  }
};
var serializeRequestInit = (requestInit) => {
  if (!requestInit) {
    return null;
  }
  const requestInitWithoutSignal = { ...requestInit };
  delete requestInitWithoutSignal.signal;
  const { headers, ...rest } = requestInitWithoutSignal;
  return JSON.stringify({
    ...rest,
    headers: headers ? Array.from(new Headers(headers).entries()) : null
  });
};
var resolveAnimatedImageSource = (src) => {
  if (typeof window === "undefined") {
    return src;
  }
  return new URL(src, document.baseURI).href;
};
var animatedImageSchema = {
  src: {
    type: "asset",
    assetType: "image",
    default: void 0,
    description: "Source",
    keyframable: false
  },
  ...baseSchema,
  loop: loopField,
  ...cropSchema,
  ...transformSchema,
  ...backgroundSchema,
  ...borderSchema,
  ...borderRadiusSchema
};
var AnimatedImageContent = (0, import_react56.forwardRef)(({
  src,
  width,
  height,
  onError,
  loopBehavior = "loop",
  playbackRate = 1,
  fit = "fill",
  requestInit,
  effects,
  effectsOutputSize,
  controls,
  ...props
}, canvasRef) => {
  const resolvedSrc = resolveAnimatedImageSource(src);
  const [decodedImage, setDecodedImage] = (0, import_react56.useState)(null);
  const imageDecoder = decodedImage?.decoder ?? null;
  const activeDecoderRef = (0, import_react56.useRef)(null);
  const { delayRender, continueRender, cancelRender: cancelRender2 } = useDelayRender();
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const currentTime = getCurrentTime({ frame, playbackRate, fps });
  const currentTimeRef = (0, import_react56.useRef)(currentTime);
  currentTimeRef.current = currentTime;
  const requestInitKey = serializeRequestInit(requestInit);
  const requestInitRef = (0, import_react56.useRef)(requestInit);
  requestInitRef.current = requestInit;
  const ref = (0, import_react56.useRef)(null);
  const memoizedEffects = useMemoizedEffects({
    effects,
    overrideId: controls?.overrideId ?? null,
    runtimeValues: controls?.runtimeValues ?? null,
    videoConfigValues: controls?.videoConfigValues ?? null
  });
  (0, import_react56.useImperativeHandle)(canvasRef, () => {
    const c2 = ref.current?.getCanvas();
    if (!c2) {
      throw new Error("Canvas ref is not set");
    }
    return c2;
  }, []);
  const [initialLoopBehavior] = (0, import_react56.useState)(() => loopBehavior);
  (0, import_react56.useLayoutEffect)(() => {
    const decodeHandle = delayRender(`Rendering <AnimatedImage/> with src="${resolvedSrc}"`);
    const controller = new AbortController();
    let cancelled = false;
    let continued = false;
    let decoder = null;
    const continueRenderOnce = () => {
      if (continued) {
        return;
      }
      continued = true;
      continueRender(decodeHandle);
    };
    decodeImage({
      resolvedSrc,
      signal: controller.signal,
      requestInit: requestInitRef.current,
      currentTime: currentTimeRef.current,
      initialLoopBehavior
    }).then((d) => {
      if (cancelled) {
        d.close();
        return;
      }
      decoder = d;
      activeDecoderRef.current = d;
      setDecodedImage({ decoder: d, handle: decodeHandle });
    }).catch((err) => {
      if (cancelled) {
        return;
      }
      if (err.name === "AbortError") {
        continueRenderOnce();
        return;
      }
      if (onError) {
        onError?.(err);
        continueRenderOnce();
      } else {
        cancelRender2(err);
      }
    });
    return () => {
      cancelled = true;
      activeDecoderRef.current = null;
      decoder?.close();
      controller.abort();
      continueRenderOnce();
    };
  }, [
    resolvedSrc,
    onError,
    requestInitKey,
    initialLoopBehavior,
    continueRender,
    delayRender,
    cancelRender2
  ]);
  (0, import_react56.useLayoutEffect)(() => {
    if (!imageDecoder || !decodedImage || activeDecoderRef.current !== imageDecoder) {
      return;
    }
    const delay = delayRender(`Rendering frame at ${currentTime} of <AnimatedImage src="${src}"/>`);
    continueRender(decodedImage.handle);
    let cancelled = false;
    imageDecoder.getFrame(currentTime, loopBehavior).then(async (videoFrame) => {
      if (cancelled) {
        return;
      }
      if (videoFrame === null) {
        ref.current?.clear();
        continueRender(delay);
        return;
      }
      const completed = await ref.current?.draw(videoFrame.frame);
      if (completed && !cancelled) {
        continueRender(delay);
      }
    }).catch((err) => {
      if (cancelled) {
        return;
      }
      if (onError) {
        onError(err);
        continueRender(delay);
      } else {
        cancelRender2(err);
      }
    });
    return () => {
      cancelled = true;
      continueRender(delay);
    };
  }, [
    currentTime,
    imageDecoder,
    decodedImage,
    loopBehavior,
    onError,
    src,
    continueRender,
    delayRender,
    memoizedEffects,
    fit,
    width,
    height,
    cancelRender2,
    effectsOutputSize?.width,
    effectsOutputSize?.height
  ]);
  return /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(Canvas, {
    ref,
    width,
    height,
    fit,
    effects: memoizedEffects,
    effectsOutputSize: effectsOutputSize ?? null,
    ...props
  });
});
AnimatedImageContent.displayName = "AnimatedImageContent";
var AnimatedImageInner = ({
  src,
  width,
  height,
  onError,
  fit,
  playbackRate,
  loopBehavior,
  id,
  className,
  style,
  durationInFrames,
  from,
  premountFor,
  postmountFor,
  styleWhilePremounted,
  styleWhilePostmounted,
  cropLeft,
  cropRight,
  cropTop,
  cropBottom,
  requestInit,
  effects = [],
  effectsOutputSize,
  controls,
  ref,
  ...sequenceProps
}) => {
  const actualRef = (0, import_react56.useRef)(null);
  const isMedia = (0, import_react56.useMemo)(() => ({
    type: "image",
    src: resolveAnimatedImageSource(src),
    animated: {
      loopBehavior: loopBehavior ?? "loop",
      requestInit: requestInit ?? null
    }
  }), [src, loopBehavior, requestInit]);
  const memoizedEffectDefinitions = useMemoizedEffectDefinitions(effects);
  (0, import_react56.useImperativeHandle)(ref, () => {
    return actualRef.current;
  }, []);
  const {
    effectivePostmountFor,
    effectivePremountFor,
    freezeFrame,
    isPremountingOrPostmounting,
    postmountingActive,
    premountingActive,
    premountingStyle
  } = usePremounting({
    from: from ?? 0,
    durationInFrames: resolveSequenceDuration({
      durationInFrames,
      playbackRate,
      loop: sequenceProps.loop
    }),
    premountFor: premountFor ?? null,
    postmountFor: postmountFor ?? null,
    style: style ?? null,
    styleWhilePremounted: styleWhilePremounted ?? null,
    styleWhilePostmounted: styleWhilePostmounted ?? null,
    hideWhilePremounted: "display-none"
  });
  const croppedStyle = useCropStyle({
    cropLeft,
    cropRight,
    cropTop,
    cropBottom,
    style: premountingStyle,
    componentName: "<AnimatedImage />"
  });
  const canvasProps = getCanvasPropsFromSequenceProps(sequenceProps);
  const animatedImageProps = {
    src,
    width,
    height,
    onError,
    fit,
    loopBehavior,
    id,
    className,
    style: croppedStyle ?? void 0,
    requestInit,
    ...canvasProps
  };
  return /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(Freeze, {
    frame: freezeFrame,
    active: isPremountingOrPostmounting,
    _remotionInternalIsPremounting: premountingActive,
    children: /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(Sequence, {
      layout: "none",
      from: from ?? 0,
      playbackRate,
      durationInFrames,
      name: "<AnimatedImage>",
      _remotionInternalDocumentationLink: "https://www.remotion.dev/docs/animatedimage",
      controls,
      _remotionInternalEffects: memoizedEffectDefinitions,
      _remotionInternalPremountDisplay: effectivePremountFor || null,
      _remotionInternalPostmountDisplay: effectivePostmountFor || null,
      _remotionInternalIsPremounting: premountingActive,
      _remotionInternalIsPostmounting: postmountingActive,
      _remotionInternalIsMedia: isMedia,
      ...sequenceProps,
      children: /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(SequenceContent, {
        children: /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(AnimatedImageContent, {
          ...animatedImageProps,
          ref: actualRef,
          effects,
          effectsOutputSize: effectsOutputSize ?? null,
          controls
        })
      })
    })
  });
};
var AnimatedImageWithIntrinsicDuration = (props) => {
  const { fps } = useVideoConfig();
  const { delayRender, continueRender, cancelRender: cancelRender2 } = useDelayRender();
  const { src, requestInit, trimBefore } = props;
  const requestInitRef = (0, import_react56.useRef)(requestInit);
  requestInitRef.current = requestInit;
  const onErrorRef = (0, import_react56.useRef)(props.onError);
  onErrorRef.current = props.onError;
  const [duration, setDuration] = (0, import_react56.useState)(null);
  const [failedHandle, setFailedHandle] = (0, import_react56.useState)(null);
  (0, import_react56.useLayoutEffect)(() => {
    const handle = delayRender(`Finding duration of <AnimatedImage src="${src}" />`);
    const controller = new AbortController();
    let cancelled = false;
    getAnimatedImageDurationInSeconds({
      resolvedSrc: resolveAnimatedImageSource(src),
      signal: controller.signal,
      requestInit: requestInitRef.current,
      contentType: null
    }).then((durationInSeconds) => {
      if (!cancelled) {
        setDuration({
          durationInFrames: Math.ceil(durationInSeconds * fps) - (trimBefore ?? 0),
          handle
        });
      }
    }).catch((error2) => {
      if (cancelled) {
        return;
      }
      if (onErrorRef.current) {
        onErrorRef.current(error2);
        setFailedHandle(handle);
      } else {
        cancelRender2(error2);
      }
    });
    return () => {
      cancelled = true;
      controller.abort();
      continueRender(handle);
    };
  }, [cancelRender2, continueRender, delayRender, fps, src, trimBefore]);
  (0, import_react56.useLayoutEffect)(() => {
    if (duration !== null) {
      continueRender(duration.handle);
    }
    if (failedHandle !== null) {
      continueRender(failedHandle);
    }
  }, [continueRender, duration, failedHandle]);
  if (duration === null || failedHandle !== null) {
    return null;
  }
  return /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(AnimatedImageInner, {
    ...props,
    durationInFrames: duration.durationInFrames
  });
};
var AnimatedImageComponent = (props) => {
  const videoEnabled = useVideoEnabled();
  if (videoEnabled === false) {
    return null;
  }
  if (props.loop && props.durationInFrames === void 0) {
    const resolvedSrc = resolveAnimatedImageSource(props.src);
    const requestInitKey = serializeRequestInit(props.requestInit);
    return /* @__PURE__ */ (0, import_react62.createElement)(AnimatedImageWithIntrinsicDuration, {
      ...props,
      key: `${resolvedSrc}-${requestInitKey}-${props.trimBefore ?? 0}`
    });
  }
  return /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(AnimatedImageInner, {
    ...props
  });
};
var AnimatedImage = withInteractivitySchema({
  Component: AnimatedImageComponent,
  componentName: "<AnimatedImage>",
  componentIdentity: "dev.remotion.remotion.AnimatedImage",
  schema: animatedImageSchema,
  supportsEffects: true
});
AnimatedImage.displayName = "AnimatedImage";
addSequenceStackTraces(AnimatedImage);
var disabledEffectField = {
  type: "boolean",
  default: false,
  description: "Disabled"
};
var createEffectImplementation = (implementation) => {
  return implementation;
};
var createEffect = (input) => {
  const backend = "backend" in input ? input.backend : ["webgpu", "webgl2", "2d"].find((b2) => input.implementations[b2]);
  if (!backend)
    throw new Error(`Effect "${input.type}" must provide at least one implementation`);
  const definition = "backend" in input ? input : {
    ...input,
    ...input.implementations[backend],
    backend
  };
  const { calculateKey: userCalculateKey, validateParams } = definition;
  const widened = {
    ...definition,
    documentationLink: definition.documentationLink ?? null,
    calculateKey: (params) => {
      const disabled = params.disabled ?? false;
      return `${userCalculateKey(params)}-disabled-${disabled}`;
    },
    schema: {
      disabled: disabledEffectField,
      ...definition.schema
    }
  };
  const factory = (params = {}) => {
    validateParams(params);
    return {
      definition: widened,
      params,
      effectKey: widened.calculateKey(params),
      memoized: false
    };
  };
  return factory;
};
var validateArtifactFilename = (filename) => {
  if (typeof filename !== "string") {
    throw new TypeError(`The "filename" must be a string, but you passed a value of type ${typeof filename}`);
  }
  if (filename.trim() === "") {
    throw new Error("The `filename` must not be empty");
  }
  if (!filename.match(/^([0-9a-zA-Z-!_.*'()/:&$@=;+,?]+)/g)) {
    throw new Error('The `filename` must match "/^([0-9a-zA-Z-!_.*\'()/:&$@=;+,?]+)/g". Use forward slashes only, even on Windows.');
  }
};
var validateContent = (content2) => {
  if (typeof content2 !== "string" && !(content2 instanceof Uint8Array)) {
    throw new TypeError(`The "content" must be a string or Uint8Array, but you passed a value of type ${typeof content2}`);
  }
  if (typeof content2 === "string" && content2.trim() === "") {
    throw new Error("The `content` must not be empty");
  }
};
var validateRenderAsset = (artifact) => {
  if (artifact.type !== "artifact") {
    return;
  }
  validateArtifactFilename(artifact.filename);
  if (artifact.contentType === "thumbnail") {
    return;
  }
  validateContent(artifact.content);
};
var RenderAssetManager = (0, import_react64.createContext)({
  registerRenderAsset: () => {
    return;
  },
  unregisterRenderAsset: () => {
    return;
  },
  renderAssets: []
});
var RenderAssetManagerProvider = ({ children, collectAssets }) => {
  const [renderAssets, setRenderAssets] = (0, import_react64.useState)([]);
  const renderAssetsRef = (0, import_react64.useRef)([]);
  const registerRenderAsset = (0, import_react64.useCallback)((renderAsset) => {
    validateRenderAsset(renderAsset);
    renderAssetsRef.current = [...renderAssetsRef.current, renderAsset];
    setRenderAssets(renderAssetsRef.current);
  }, []);
  if (collectAssets) {
    (0, import_react64.useImperativeHandle)(collectAssets, () => {
      return {
        collectAssets: () => {
          const assets = renderAssetsRef.current;
          renderAssetsRef.current = [];
          setRenderAssets([]);
          return assets;
        }
      };
    }, []);
  }
  const unregisterRenderAsset = (0, import_react64.useCallback)((id) => {
    renderAssetsRef.current = renderAssetsRef.current.filter((a2) => a2.id !== id);
    setRenderAssets(renderAssetsRef.current);
  }, []);
  (0, import_react64.useLayoutEffect)(() => {
    if (typeof window !== "undefined") {
      window.remotion_collectAssets = () => {
        const assets = renderAssetsRef.current;
        renderAssetsRef.current = [];
        setRenderAssets([]);
        return assets;
      };
    }
  }, []);
  const contextValue = (0, import_react64.useMemo)(() => {
    return {
      registerRenderAsset,
      unregisterRenderAsset,
      renderAssets
    };
  }, [renderAssets, registerRenderAsset, unregisterRenderAsset]);
  return /* @__PURE__ */ (0, import_jsx_runtime23.jsx)(RenderAssetManager.Provider, {
    value: contextValue,
    children
  });
};
var ArtifactThumbnail = /* @__PURE__ */ Symbol("Thumbnail");
var encodeBinaryArtifact = (bytes) => {
  if ("toBase64" in bytes && typeof bytes.toBase64 === "function") {
    return bytes.toBase64();
  }
  let binary = "";
  for (let offset = 0; offset < bytes.length; offset += 32768) {
    binary += String.fromCharCode(...bytes.subarray(offset, offset + 32768));
  }
  return btoa(binary);
};
var Artifact = ({ filename, content: content2, downloadBehavior }) => {
  const { registerRenderAsset, unregisterRenderAsset } = (0, import_react63.useContext)(RenderAssetManager);
  const env = useRemotionEnvironment();
  const frame = useCurrentFrame();
  const [id] = (0, import_react63.useState)(() => {
    return String(Math.random());
  });
  (0, import_react63.useLayoutEffect)(() => {
    if (!env.isRendering) {
      return;
    }
    if (content2 instanceof Uint8Array) {
      registerRenderAsset({
        type: "artifact",
        id,
        content: encodeBinaryArtifact(content2),
        filename,
        frame,
        contentType: "binary",
        downloadBehavior: downloadBehavior ?? null
      });
    } else if (content2 === ArtifactThumbnail) {
      registerRenderAsset({
        type: "artifact",
        id,
        filename,
        frame,
        contentType: "thumbnail",
        downloadBehavior: downloadBehavior ?? null
      });
    } else {
      registerRenderAsset({
        type: "artifact",
        id,
        content: content2,
        filename,
        frame,
        contentType: "text",
        downloadBehavior: downloadBehavior ?? null
      });
    }
    return () => {
      return unregisterRenderAsset(id);
    };
  }, [
    content2,
    env.isRendering,
    filename,
    frame,
    id,
    registerRenderAsset,
    unregisterRenderAsset,
    downloadBehavior
  ]);
  return null;
};
Artifact.Thumbnail = ArtifactThumbnail;
var calculateMediaDuration = ({
  trimAfter,
  mediaDurationInFrames,
  playbackRate,
  trimBefore
}) => {
  let duration = mediaDurationInFrames;
  if (typeof trimAfter !== "undefined") {
    duration = trimAfter;
  }
  if (typeof trimBefore !== "undefined") {
    duration -= trimBefore;
  }
  return duration / playbackRate;
};
var getMediaTrimAfter = ({
  durationInFrames,
  trimAfter,
  trimBefore
}) => {
  const durationAsTrimAfter = durationInFrames === void 0 ? void 0 : (trimBefore ?? 0) + durationInFrames;
  if (durationAsTrimAfter === void 0) {
    return trimAfter;
  }
  return trimAfter === void 0 ? durationAsTrimAfter : Math.min(trimAfter, durationAsTrimAfter);
};
var LoopTimelineContext = (0, import_react66.createContext)(null);
var useLoop = () => {
  return import_react66.default.useContext(LoopContext);
};
var Loop = ({
  durationInFrames,
  times = Infinity,
  children,
  name,
  showInTimeline,
  playbackRate,
  ...props
}) => {
  const currentFrame = useCurrentFrame();
  const { durationInFrames: compDuration } = useVideoConfig();
  const parentSequence = (0, import_react66.useContext)(SequenceContext);
  const parentPlaybackRate = parentSequence?.playbackRate ?? 1;
  const playbackRateValue = playbackRate ?? 1;
  const iterationDurationInFrames = durationInFrames / playbackRateValue;
  const loopStartFrame = parentSequence ? parentSequence.cumulatedFrom + parentSequence.relativeFrom : 0;
  const firstVisibleFrame = loopStartFrame - (parentSequence?.cumulatedNegativeFrom ?? 0) / parentPlaybackRate;
  const endFrame = loopStartFrame + Math.min(compDuration, iterationDurationInFrames * times) / parentPlaybackRate;
  validateDurationInFrames(durationInFrames, {
    component: "of the <Loop /> component",
    allowFloats: true
  });
  if (typeof times !== "number") {
    throw new TypeError(`You passed to "times" an argument of type ${typeof times}, but it must be a number.`);
  }
  if (times !== Infinity && times % 1 !== 0) {
    throw new TypeError(`The "times" prop of a loop must be an integer, but got ${times}.`);
  }
  if (times < 0) {
    throw new TypeError(`The "times" prop of a loop must be at least 0, but got ${times}`);
  }
  const maxTimes = Math.ceil(compDuration / iterationDurationInFrames);
  const actualTimes = Math.min(maxTimes, times);
  const maxFrame = iterationDurationInFrames * (actualTimes - 1);
  const loopsElapsed = currentFrame / iterationDurationInFrames;
  const nearestIteration = Math.round(loopsElapsed);
  const isAtBoundary = Math.abs(loopsElapsed - nearestIteration) <= Number.EPSILON * Math.max(1, Math.abs(loopsElapsed)) * 4;
  const iteration = Math.max(0, Math.min(actualTimes - 1, isAtBoundary ? nearestIteration : Math.floor(loopsElapsed)));
  const start = isAtBoundary ? currentFrame : iteration * iterationDurationInFrames;
  const from = Math.max(0, Math.min(start, maxFrame));
  const loopDisplay = (0, import_react66.useMemo)(() => {
    return {
      numberOfTimes: Math.min(compDuration / iterationDurationInFrames, times),
      startOffset: -from,
      durationInFrames: iterationDurationInFrames
    };
  }, [compDuration, from, iterationDurationInFrames, times]);
  const loopContext = (0, import_react66.useMemo)(() => {
    return {
      iteration,
      durationInFrames
    };
  }, [iteration, durationInFrames]);
  const timelineContext = (0, import_react66.useMemo)(() => ({
    startFrame: loopStartFrame,
    firstVisibleFrame,
    endFrame,
    playbackRate: parentPlaybackRate
  }), [loopStartFrame, firstVisibleFrame, endFrame, parentPlaybackRate]);
  if (actualTimes === 0) {
    return null;
  }
  return /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(LoopTimelineContext.Provider, {
    value: timelineContext,
    children: /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(LoopContext.Provider, {
      value: loopContext,
      children: /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(Sequence, {
        durationInFrames,
        from,
        name: name ?? "<Loop>",
        _remotionInternalDocumentationLink: "https://www.remotion.dev/docs/loop",
        _remotionInternalLoopDisplay: loopDisplay,
        ...props,
        showInTimeline,
        playbackRate,
        children
      })
    })
  });
};
Loop.useLoop = useLoop;
var playbackLogging = ({
  logLevel,
  tag,
  message,
  mountTime
}) => {
  const tags = [mountTime ? Date.now() - mountTime + "ms " : null, tag].filter(Boolean).join(" ");
  Log.trace({ logLevel, tag: null }, `[${tags}]`, message);
};
var PreloadContext = (0, import_react68.createContext)({});
var preloads = {};
var updaters = [];
var PrefetchProvider = ({ children }) => {
  const [_preloads, _setPreloads] = (0, import_react68.useState)(() => preloads);
  (0, import_react68.useEffect)(() => {
    const updaterFunction = () => {
      _setPreloads(preloads);
    };
    updaters.push(updaterFunction);
    return () => {
      updaters = updaters.filter((u) => u !== updaterFunction);
    };
  }, []);
  return /* @__PURE__ */ (0, import_jsx_runtime25.jsx)(PreloadContext.Provider, {
    value: _preloads,
    children
  });
};
var removeAndGetHashFragment = (src) => {
  const hashIndex = src.indexOf("#");
  if (hashIndex === -1) {
    return null;
  }
  return hashIndex;
};
var getSrcWithoutHash = (src) => {
  const hashIndex = removeAndGetHashFragment(src);
  if (hashIndex === null) {
    return src;
  }
  return src.slice(0, hashIndex);
};
var usePreload = (src) => {
  const preloads2 = (0, import_react67.useContext)(PreloadContext);
  const hashFragmentIndex = removeAndGetHashFragment(src);
  const withoutHashFragment = getSrcWithoutHash(src);
  if (!preloads2[withoutHashFragment]) {
    return src;
  }
  if (hashFragmentIndex !== null) {
    return preloads2[withoutHashFragment] + src.slice(hashFragmentIndex);
  }
  return preloads2[withoutHashFragment];
};
var validateMediaProps = (props, component) => {
  if (typeof props.volume !== "number" && typeof props.volume !== "function" && typeof props.volume !== "undefined") {
    throw new TypeError(`You have passed a volume of type ${typeof props.volume} to your <${component} /> component. Volume must be a number or a function with the signature '(frame: number) => number' undefined.`);
  }
  if (typeof props.volume === "number" && props.volume < 0) {
    throw new TypeError(`You have passed a volume below 0 to your <${component} /> component. Volume must be between 0 and 1`);
  }
  if (typeof props.playbackRate !== "number" && typeof props.playbackRate !== "undefined") {
    throw new TypeError(`You have passed a playbackRate of type ${typeof props.playbackRate} to your <${component} /> component. Playback rate must a real number or undefined.`);
  }
  if (typeof props.playbackRate === "number" && (isNaN(props.playbackRate) || !Number.isFinite(props.playbackRate) || props.playbackRate <= 0)) {
    throw new TypeError(`You have passed a playbackRate of ${props.playbackRate} to your <${component} /> component. Playback rate must be a real number above 0.`);
  }
  if (typeof props.preservePitch !== "boolean" && typeof props.preservePitch !== "undefined") {
    throw new TypeError(`'preservePitch' must be a boolean or undefined but got '${typeof props.preservePitch}' instead`);
  }
};
var validateStartFromProps = (startFrom, endAt) => {
  if (typeof startFrom !== "undefined") {
    if (typeof startFrom !== "number") {
      throw new TypeError(`type of startFrom prop must be a number, instead got type ${typeof startFrom}.`);
    }
    if (isNaN(startFrom) || startFrom === Infinity) {
      throw new TypeError("startFrom prop can not be NaN or Infinity.");
    }
    if (startFrom < 0) {
      throw new TypeError(`startFrom must be greater than equal to 0 instead got ${startFrom}.`);
    }
  }
  if (typeof endAt !== "undefined") {
    if (typeof endAt !== "number") {
      throw new TypeError(`type of endAt prop must be a number, instead got type ${typeof endAt}.`);
    }
    if (isNaN(endAt)) {
      throw new TypeError("endAt prop can not be NaN.");
    }
    if (endAt <= 0) {
      throw new TypeError(`endAt must be a positive number, instead got ${endAt}.`);
    }
  }
  if (endAt < startFrom) {
    throw new TypeError("endAt prop must be greater than startFrom prop.");
  }
};
var validateTrimProps = (trimBefore, trimAfter) => {
  if (typeof trimBefore !== "undefined") {
    if (typeof trimBefore !== "number") {
      throw new TypeError(`type of trimBefore prop must be a number, instead got type ${typeof trimBefore}.`);
    }
    if (isNaN(trimBefore) || trimBefore === Infinity) {
      throw new TypeError("trimBefore prop can not be NaN or Infinity.");
    }
    if (trimBefore < 0) {
      throw new TypeError(`trimBefore must be greater than equal to 0 instead got ${trimBefore}.`);
    }
  }
  if (typeof trimAfter !== "undefined") {
    if (typeof trimAfter !== "number") {
      throw new TypeError(`type of trimAfter prop must be a number, instead got type ${typeof trimAfter}.`);
    }
    if (isNaN(trimAfter)) {
      throw new TypeError("trimAfter prop can not be NaN.");
    }
    if (trimAfter <= 0) {
      throw new TypeError(`trimAfter must be a positive number, instead got ${trimAfter}.`);
    }
  }
  if (trimAfter <= trimBefore) {
    throw new TypeError("trimAfter prop must be greater than trimBefore prop.");
  }
};
var validateMediaTrimProps = ({
  startFrom,
  endAt,
  trimBefore,
  trimAfter
}) => {
  if (typeof startFrom !== "undefined" && typeof trimBefore !== "undefined") {
    throw new TypeError("Cannot use both startFrom and trimBefore props. Use trimBefore instead as startFrom is deprecated.");
  }
  if (typeof endAt !== "undefined" && typeof trimAfter !== "undefined") {
    throw new TypeError("Cannot use both endAt and trimAfter props. Use trimAfter instead as endAt is deprecated.");
  }
  const hasNewProps = typeof trimBefore !== "undefined" || typeof trimAfter !== "undefined";
  const hasOldProps = typeof startFrom !== "undefined" || typeof endAt !== "undefined";
  if (hasNewProps) {
    validateTrimProps(trimBefore, trimAfter);
  } else if (hasOldProps) {
    validateStartFromProps(startFrom, endAt);
  }
};
var resolveTrimProps = ({
  startFrom,
  endAt,
  trimBefore,
  trimAfter
}) => {
  const trimBeforeValue = trimBefore ?? startFrom ?? void 0;
  const trimAfterValue = trimAfter ?? endAt ?? void 0;
  return { trimBeforeValue, trimAfterValue };
};
var durationReducer = (state, action) => {
  switch (action.type) {
    case "got-duration": {
      const absoluteSrc = getAbsoluteSrc(action.src);
      if (state[absoluteSrc] === action.durationInSeconds) {
        return state;
      }
      return {
        ...state,
        [absoluteSrc]: action.durationInSeconds
      };
    }
    default:
      return state;
  }
};
var onMediaDuration = (setDurations, src, durationInSeconds) => {
  setDurations({ type: "got-duration", durationInSeconds, src });
};
var DurationsContext = (0, import_react69.createContext)({
  durations: {},
  setDurations: () => {
    throw new Error("context missing");
  }
});
var DurationsContextProvider = ({ children }) => {
  const [durations, setDurations] = (0, import_react69.useReducer)(durationReducer, {});
  const value = (0, import_react69.useMemo)(() => {
    return {
      durations,
      setDurations
    };
  }, [durations]);
  return /* @__PURE__ */ (0, import_jsx_runtime26.jsx)(DurationsContext.Provider, {
    value,
    children
  });
};
var getCrossOriginValue = ({
  crossOrigin,
  requestsVideoFrame,
  isClientSideRendering
}) => {
  if (crossOrigin !== void 0 && crossOrigin !== null) {
    return crossOrigin;
  }
  if (isClientSideRendering) {
    return "anonymous";
  }
  if (requestsVideoFrame) {
    return "anonymous";
  }
  return;
};
var playAndHandleNotAllowedError = ({
  mediaRef,
  mediaType,
  onAutoPlayError,
  logLevel,
  mountTime,
  reason,
  isPlayer
}) => {
  const { current } = mediaRef;
  if (!current) {
    return;
  }
  playbackLogging({
    logLevel,
    tag: "play",
    message: `Attempting to play ${current.src}. Reason: ${reason}`,
    mountTime
  });
  const prom = current.play();
  if (!prom.catch) {
    return;
  }
  prom.catch((err) => {
    if (!current) {
      return;
    }
    if (err.message.includes("request was interrupted by a call to pause")) {
      return;
    }
    if (err.message.includes("The operation was aborted.")) {
      return;
    }
    if (err.message.includes("The fetching process for the media resource was aborted by the user agent")) {
      return;
    }
    if (err.message.includes("request was interrupted by a new load request")) {
      return;
    }
    if (err.message.includes("because the media was removed from the document")) {
      return;
    }
    if (err.message.includes("user didn't interact with the document") && current.muted) {
      return;
    }
    console.log(`Could not play ${mediaType} due to following error: `, err);
    if (!current.muted) {
      if (onAutoPlayError) {
        onAutoPlayError();
        return;
      }
      if (mediaType === "video" && isPlayer) {
        Log.info({ logLevel, tag: "<" + mediaType + ">" }, `The video will be muted and we'll retry playing it.`);
        Log.info({ logLevel, tag: "<" + mediaType + ">" }, "Use onAutoPlayError() to handle this error yourself.");
        current.muted = true;
        current.play();
      }
    }
  });
};
var makeSharedElementSourceNode = ({
  audioContext,
  ref
}) => {
  let connected = null;
  let disposed = false;
  let currentAudioContext = audioContext;
  return {
    setAudioContext: (newAudioContext) => {
      currentAudioContext = newAudioContext;
    },
    attemptToConnect: () => {
      if (disposed) {
        throw new Error("SharedElementSourceNode has been disposed");
      }
      if (!connected && ref.current && currentAudioContext) {
        const mediaElementSourceNode = currentAudioContext.createMediaElementSource(ref.current);
        connected = mediaElementSourceNode;
      }
    },
    get: () => {
      if (!connected) {
        throw new Error("Audio element not connected");
      }
      return connected;
    },
    cleanup: () => {
      if (connected) {
        connected.disconnect();
        connected = null;
      }
      disposed = true;
    }
  };
};
var warned = false;
var warnOnce = (logLevel) => {
  if (warned) {
    return;
  }
  warned = true;
  if (typeof window !== "undefined") {
    Log.warn({ logLevel, tag: null }, "AudioContext is not supported in this browser");
  }
};
var useSingletonAudioContext = ({
  logLevel,
  latencyHint,
  audioEnabled,
  sampleRate
}) => {
  const env = useRemotionEnvironment();
  const initialSampleRate = (0, import_react74.useRef)(sampleRate);
  if (sampleRate !== initialSampleRate.current) {
    throw new Error(`Changing the AudioContext sample rate dynamically is not supported. The sample rate was initialized with ${initialSampleRate.current} Hz, but ${sampleRate} Hz was passed later.`);
  }
  const [context, setContext] = (0, import_react74.useState)(null);
  (0, import_react74.useEffect)(() => {
    if (env.isRendering) {
      setContext(null);
      return;
    }
    if (!audioEnabled) {
      setContext(null);
      return;
    }
    if (typeof AudioContext === "undefined") {
      warnOnce(logLevel);
      setContext(null);
      return;
    }
    const audioContext = new AudioContext({
      latencyHint,
      sampleRate
    });
    const gainNode = audioContext.createGain();
    gainNode.connect(audioContext.destination);
    Log.trace({ logLevel, tag: "audio" }, "Creating new audio context");
    audioContext.suspend();
    let transitionTarget = null;
    let transitionId = 0;
    let pendingResume = null;
    const getState = () => {
      const nativeState = audioContext.state;
      if (transitionTarget === "running" && nativeState !== "running") {
        return "suspended-to-running";
      }
      if (transitionTarget === "suspended" && nativeState !== "suspended") {
        return "running-to-suspended";
      }
      return nativeState;
    };
    const resume = () => {
      const id = ++transitionId;
      transitionTarget = "running";
      const promise = audioContext.resume();
      pendingResume = promise;
      return promise.finally(() => {
        if (pendingResume === promise) {
          pendingResume = null;
        }
        if (transitionId === id) {
          transitionTarget = null;
        }
      });
    };
    const suspend = () => {
      const id = ++transitionId;
      transitionTarget = "suspended";
      const promise = pendingResume ? pendingResume.catch(() => {
      }).then(() => {
        if (transitionId !== id) {
          return;
        }
        return audioContext.suspend();
      }) : audioContext.suspend();
      return promise.finally(() => {
        if (transitionId === id) {
          transitionTarget = null;
        }
      });
    };
    setContext({ audioContext, gainNode, getState, resume, suspend });
    return () => {
      transitionId++;
      transitionTarget = null;
      gainNode.disconnect(audioContext.destination);
      audioContext.close();
    };
  }, [logLevel, latencyHint, env.isRendering, audioEnabled, sampleRate]);
  return context;
};
var RESUME_WAIT_TIMEOUT = 1e3;
var waitUntilActuallyResumed = (audioContext, logLevel, signal, isAutoPlayAttempt) => {
  return new Promise((resolve) => {
    const startCurrentTime = audioContext.currentTime;
    const start = audioContext.getOutputTimestamp();
    const startOutputPerformanceTime = start.performanceTime;
    const startWallClock = performance.now();
    let animationFrame = null;
    let timeout = null;
    let settled = false;
    let onAbort = () => {
      return;
    };
    const finish = (result) => {
      if (settled) {
        return;
      }
      settled = true;
      if (animationFrame !== null) {
        cancelAnimationFrame(animationFrame);
      }
      if (timeout !== null) {
        clearTimeout(timeout);
      }
      signal.removeEventListener("abort", onAbort);
      resolve(result);
    };
    onAbort = () => finish("cancelled");
    const hasAudiblyStarted = (startPerformanceTime) => {
      const outputTimestamp = audioContext.getOutputTimestamp();
      return startPerformanceTime !== void 0 && outputTimestamp.performanceTime !== void 0 && outputTimestamp.performanceTime > startPerformanceTime && outputTimestamp.contextTime !== void 0 && outputTimestamp.contextTime > startCurrentTime;
    };
    const check = () => {
      animationFrame = null;
      const { currentTime } = audioContext;
      const outputTimestamp = audioContext.getOutputTimestamp();
      const elapsedWallClock = performance.now() - startWallClock;
      if (hasAudiblyStarted(startOutputPerformanceTime)) {
        Log.verbose({ logLevel, tag: "audio" }, `waitUntilActuallyResumed: getOutputTimestamp.performanceTime advanced from ${startOutputPerformanceTime.toFixed(6)} to ${outputTimestamp.performanceTime?.toFixed(6)} after ${elapsedWallClock.toFixed(1)}ms. currentTime=${currentTime.toFixed(6)} (advanced by ${(currentTime - startCurrentTime).toFixed(6)}), getOutputTimestamp.performanceTime=${outputTimestamp.performanceTime?.toFixed(1) ?? "undefined"}`);
        finish("resumed");
        return;
      }
      animationFrame = requestAnimationFrame(check);
    };
    if (signal.aborted) {
      finish("cancelled");
      return;
    }
    signal.addEventListener("abort", onAbort, { once: true });
    if (isAutoPlayAttempt) {
      timeout = setTimeout(() => {
        if (hasAudiblyStarted(startOutputPerformanceTime)) {
          finish("resumed");
          return;
        }
        Log.warn({ logLevel, tag: "audio" }, "WARNING: You enabled autoPlay on an unmuted <Player /> and the browser did not allow the video to be started. Remotion muted the <Player /> so it can play. To properly handle this, either set the `muted` prop or remove the `autoPlay` prop");
        finish("failed");
      }, RESUME_WAIT_TIMEOUT);
    }
    animationFrame = requestAnimationFrame(check);
  });
};
var EMPTY_AUDIO = "data:audio/mp3;base64,/+MYxAAJcAV8AAgAABn//////+/gQ5BAMA+D4Pg+BAQBAEAwD4Pg+D4EBAEAQDAPg++hYBH///hUFQVBUFREDQNHmf///////+MYxBUGkAGIMAAAAP/29Xt6lUxBTUUzLjEwMFVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV/+MYxDUAAANIAAAAAFVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV";
var useAudioContextLayoutEffect = typeof window === "undefined" ? import_react73.useEffect : import_react73.useLayoutEffect;
var compareProps = (obj1, obj2) => {
  const keysA = Object.keys(obj1).sort();
  const keysB = Object.keys(obj2).sort();
  if (keysA.length !== keysB.length) {
    return false;
  }
  for (let i = 0; i < keysA.length; i++) {
    if (keysA[i] !== keysB[i]) {
      return false;
    }
    if (obj1[keysA[i]] !== obj2[keysB[i]]) {
      return false;
    }
  }
  return true;
};
var didPropChange = (key, newProp, prevProp) => {
  if (key === "src" && !prevProp.startsWith("data:") && !newProp.startsWith("data:")) {
    return new URL(prevProp, document.baseURI).toString() !== new URL(newProp, document.baseURI).toString();
  }
  if (prevProp === newProp) {
    return false;
  }
  return true;
};
var SharedAudioContext = (0, import_react73.createContext)(null);
var SharedAudioTagsContext = (0, import_react73.createContext)(null);
var shouldSaveForLater = (state) => {
  if (state === "suspended" || state === "running-to-suspended" || state === "interrupted") {
    return true;
  }
  if (state === "running" || state === "suspended-to-running") {
    return false;
  }
  throw new Error(`Unexpected audio context state: ${state}`);
};
var SharedAudioContextProvider = ({
  children,
  audioLatencyHint,
  audioEnabled,
  previewSampleRate,
  _experimentalKeepAudioContextAlive
}) => {
  const logLevel = useLogLevel();
  const env = useRemotionEnvironment();
  const sampleRate = previewSampleRate ?? 48e3;
  const ctxAndGain = useSingletonAudioContext({
    logLevel,
    latencyHint: audioLatencyHint,
    audioEnabled,
    sampleRate
  });
  const audioContextIsPlayingEventually = (0, import_react73.useRef)(null);
  const playbackRequested = (0, import_react73.useRef)(false);
  const initialExperimentalKeepAudioContextAlive = (0, import_react73.useRef)(_experimentalKeepAudioContextAlive);
  if (initialExperimentalKeepAudioContextAlive.current !== _experimentalKeepAudioContextAlive) {
    throw new Error("`_experimentalKeepAudioContextAlive` cannot be changed dynamically.");
  }
  const isResuming = (0, import_react73.useRef)(null);
  const nextResumeAttemptId = (0, import_react73.useRef)(0);
  const nextResumeIsAutoPlayAttempt = (0, import_react73.useRef)(false);
  const audioSyncAnchor = (0, import_react73.useMemo)(() => ({ value: 0 }), []);
  const audioSyncAnchorListeners = (0, import_react73.useRef)([]);
  const audioSyncAnchorEmitter = (0, import_react73.useMemo)(() => {
    return {
      dispatch: (event) => {
        audioSyncAnchorListeners.current.forEach((l) => l(event));
      },
      subscribe: (listener) => {
        audioSyncAnchorListeners.current.push(listener);
        return {
          remove: () => {
            audioSyncAnchorListeners.current = audioSyncAnchorListeners.current.filter((l) => l !== listener);
          }
        };
      }
    };
  }, []);
  const prevEndTimes = (0, import_react73.useRef)({ scheduledEndTime: null, mediaEndTime: null });
  const nodesToResume = (0, import_react73.useRef)(/* @__PURE__ */ new Map());
  const unscheduleAudioNode = (0, import_react73.useCallback)((node) => {
    return nodesToResume.current.delete(node);
  }, []);
  const scheduleAudioNode = (0, import_react73.useMemo)(() => {
    return ({
      node,
      mediaTimestamp,
      sourceOffset,
      scheduledTime,
      duration,
      offset,
      originalUnloopedMediaTimestamp
    }) => {
      if (!ctxAndGain) {
        throw new Error("Audio context not found");
      }
      const currentState = ctxAndGain.getState();
      if (currentState === "closed") {
        return {
          type: "not-started",
          reason: "audio context is closed"
        };
      }
      const saveForLater = shouldSaveForLater(currentState) || _experimentalKeepAudioContextAlive && audioContextIsPlayingEventually.current !== ctxAndGain.audioContext;
      if (duration > 0) {
        if (saveForLater) {
          nodesToResume.current.set(node, {
            scheduledTime,
            offset,
            duration
          });
        } else {
          node.start(scheduledTime, offset, duration);
        }
      }
      const scheduledEndTime = scheduledTime + duration / node.playbackRate.value;
      const mediaTime = mediaTimestamp + offset - sourceOffset;
      const mediaEndTime = mediaTime + duration;
      const latency = ctxAndGain.audioContext.baseLatency + ctxAndGain.audioContext.outputLatency;
      const timeDiff = scheduledTime - ctxAndGain.audioContext.currentTime;
      const prev = prevEndTimes.current;
      const scheduledMismatch = prev.scheduledEndTime !== null && Math.abs(scheduledTime - prev.scheduledEndTime) > 1e-3;
      const mediaMismatch = prev.mediaEndTime !== null && Math.abs(mediaTime - prev.mediaEndTime) > 1e-3;
      Log.verbose({ logLevel, tag: "audio-scheduling" }, "scheduled %c%s%c %s %c%s%c %s %c%s%c %s %s %s %s %s", scheduledMismatch ? "color: red; font-weight: bold" : "", scheduledTime.toFixed(4), "", scheduledEndTime.toFixed(4), mediaMismatch ? "color: red; font-weight: bold" : "", mediaTime.toFixed(4), "", mediaEndTime.toFixed(4), duration < 0 ? "color: red; font-weight: bold" : timeDiff < 0 ? "color: red; font-weight: bold" : "color: blue; font-weight: bold", duration < 0 ? "missed " + Math.abs(offset).toFixed(2) + "s" : Math.abs(timeDiff).toFixed(2) + (timeDiff < 0 ? " delay" : " ahead"), "", "current=" + ctxAndGain.audioContext.currentTime.toFixed(4), "offset=" + offset.toFixed(4), "latency=" + latency.toFixed(4), "state=" + ctxAndGain.audioContext.state, originalUnloopedMediaTimestamp !== mediaTime ? "original_ts=" + originalUnloopedMediaTimestamp.toFixed(4) : "", "action=" + (saveForLater ? "schedule" : "start"), "");
      prev.scheduledEndTime = scheduledEndTime;
      prev.mediaEndTime = mediaEndTime;
      return duration > 0 ? {
        type: "started",
        scheduledTime
      } : {
        type: "not-started",
        reason: "missed " + Math.abs(offset).toFixed(2) + "s"
      };
    };
  }, [ctxAndGain, _experimentalKeepAudioContextAlive, logLevel]);
  const resume = (0, import_react73.useCallback)(() => {
    playbackRequested.current = true;
    if (!ctxAndGain) {
      return Promise.resolve();
    }
    const isAutoPlayAttempt = nextResumeIsAutoPlayAttempt.current;
    nextResumeIsAutoPlayAttempt.current = false;
    if (audioContextIsPlayingEventually.current === ctxAndGain.audioContext) {
      return Promise.resolve();
    }
    audioContextIsPlayingEventually.current = ctxAndGain.audioContext;
    ctxAndGain.gainNode.gain.cancelScheduledValues(ctxAndGain.audioContext.currentTime);
    ctxAndGain.gainNode.gain.setValueAtTime(0, ctxAndGain.audioContext.currentTime);
    ctxAndGain.gainNode.gain.linearRampToValueAtTime(1, ctxAndGain.audioContext.currentTime + 0.03);
    nodesToResume.current.forEach((r, node) => {
      node.start(r.scheduledTime, r.offset, r.duration);
    });
    nodesToResume.current.clear();
    if (_experimentalKeepAudioContextAlive && ctxAndGain.audioContext.state === "running") {
      return Promise.resolve();
    }
    const resumePromise = ctxAndGain.resume();
    const abortController = new AbortController();
    const resumeAttemptId = nextResumeAttemptId.current++;
    const waitPromise = new Promise((resolve) => {
      waitUntilActuallyResumed(ctxAndGain.audioContext, logLevel, abortController.signal, isAutoPlayAttempt).then(resolve);
      resumePromise.catch((err) => {
        Log.warn({ logLevel, tag: "audio" }, "AudioContext resume rejected, muting playback and continuing without audio", err);
        abortController.abort();
        resolve("failed");
      });
    }).finally(() => {
      if (isResuming.current?.id === resumeAttemptId) {
        isResuming.current = null;
      }
    });
    isResuming.current = {
      abortController,
      id: resumeAttemptId,
      promise: waitPromise
    };
    return resumePromise.catch(() => {
    });
  }, [ctxAndGain, _experimentalKeepAudioContextAlive, logLevel]);
  const resumeAsAutoPlay = (0, import_react73.useCallback)(() => {
    nextResumeIsAutoPlayAttempt.current = true;
    return resume();
  }, [resume]);
  const getIsResumingAudioContext = (0, import_react73.useCallback)(() => {
    return isResuming.current?.promise ?? null;
  }, []);
  const suspend = (0, import_react73.useCallback)(() => {
    playbackRequested.current = false;
    nextResumeIsAutoPlayAttempt.current = false;
    isResuming.current?.abortController.abort();
    if (!ctxAndGain) {
      return Promise.resolve();
    }
    if (audioContextIsPlayingEventually.current !== ctxAndGain.audioContext) {
      return Promise.resolve();
    }
    audioContextIsPlayingEventually.current = null;
    if (_experimentalKeepAudioContextAlive) {
      ctxAndGain.gainNode.gain.cancelScheduledValues(ctxAndGain.audioContext.currentTime);
      ctxAndGain.gainNode.gain.setValueAtTime(0, ctxAndGain.audioContext.currentTime);
      return Promise.resolve();
    }
    return ctxAndGain.suspend();
  }, [ctxAndGain, _experimentalKeepAudioContextAlive]);
  useAudioContextLayoutEffect(() => {
    if (!_experimentalKeepAudioContextAlive) {
      return;
    }
    if (!ctxAndGain) {
      return;
    }
    if (typeof window === "undefined") {
      return;
    }
    const wake = () => {
      if (ctxAndGain.audioContext.state === "running") {
        return;
      }
      ctxAndGain.resume().catch(() => {
      });
    };
    wake();
    window.addEventListener("pointerdown", wake, {
      capture: true,
      passive: true
    });
    window.addEventListener("keydown", wake, { capture: true, passive: true });
    return () => {
      window.removeEventListener("pointerdown", wake, { capture: true });
      window.removeEventListener("keydown", wake, { capture: true });
    };
  }, [ctxAndGain, _experimentalKeepAudioContextAlive]);
  const audioContextPending = audioEnabled && !env.isRendering && typeof AudioContext !== "undefined" && ctxAndGain === null;
  const audioContextValue = (0, import_react73.useMemo)(() => {
    return {
      sampleRate,
      audioContextPending,
      audioContext: ctxAndGain?.audioContext ?? null,
      getAudioContextState: () => ctxAndGain?.getState() ?? null,
      gainNode: ctxAndGain?.gainNode ?? null,
      audioSyncAnchor,
      audioSyncAnchorEmitter,
      scheduleAudioNode,
      resume,
      resumeAsAutoPlay,
      suspend,
      getIsResumingAudioContext,
      unscheduleAudioNode,
      _experimentalKeepAudioContextAlive
    };
  }, [
    sampleRate,
    audioContextPending,
    ctxAndGain,
    audioSyncAnchor,
    audioSyncAnchorEmitter,
    scheduleAudioNode,
    resume,
    resumeAsAutoPlay,
    suspend,
    getIsResumingAudioContext,
    unscheduleAudioNode,
    _experimentalKeepAudioContextAlive
  ]);
  useAudioContextLayoutEffect(() => {
    const queuedNodes = nodesToResume.current;
    if (playbackRequested.current) {
      resume();
    }
    return () => {
      isResuming.current?.abortController.abort();
      queuedNodes.clear();
    };
  }, [resume]);
  return /* @__PURE__ */ (0, import_jsx_runtime27.jsx)(SharedAudioContext.Provider, {
    value: audioContextValue,
    children
  });
};
var SharedAudioTagsContextProvider = ({ children, numberOfAudioTags }) => {
  const audios = (0, import_react73.useRef)([]);
  const [initialNumberOfAudioTags] = (0, import_react73.useState)(numberOfAudioTags);
  if (numberOfAudioTags !== initialNumberOfAudioTags) {
    throw new Error("The number of shared audio tags has changed dynamically. Once you have set this property, you cannot change it afterwards.");
  }
  const logLevel = useLogLevel();
  const mountTime = useMountTime();
  const env = useRemotionEnvironment();
  const audioCtx = (0, import_react73.useContext)(SharedAudioContext);
  const audioContext = audioCtx?.audioContext ?? null;
  const resume = audioCtx?.resume;
  const [refs] = (0, import_react73.useState)(() => {
    return new Array(numberOfAudioTags).fill(true).map(() => {
      const ref = (0, import_react73.createRef)();
      return {
        id: Math.random(),
        ref,
        mediaElementSourceNode: makeSharedElementSourceNode({
          audioContext,
          ref
        })
      };
    });
  });
  for (const { mediaElementSourceNode } of refs) {
    mediaElementSourceNode?.setAudioContext(audioContext);
  }
  const effectToUse = import_react73.default.useInsertionEffect ?? import_react73.default.useLayoutEffect;
  effectToUse(() => {
    return () => {
      requestAnimationFrame(() => {
        refs.forEach(({ mediaElementSourceNode }) => {
          mediaElementSourceNode?.cleanup();
        });
      });
    };
  }, [refs]);
  const takenAudios = (0, import_react73.useRef)(new Array(numberOfAudioTags).fill(false));
  const rerenderAudios = (0, import_react73.useCallback)(() => {
    refs.forEach(({ ref, id }) => {
      const data = audios.current?.find((a2) => a2.id === id);
      const { current } = ref;
      if (!current) {
        return;
      }
      if (data === void 0) {
        if (current.src !== EMPTY_AUDIO) {
          current.src = EMPTY_AUDIO;
        }
        return;
      }
      if (!data) {
        throw new TypeError("Expected audio data to be there");
      }
      Object.keys(data.props).forEach((key) => {
        if (didPropChange(key, data.props[key], current[key])) {
          current[key] = data.props[key];
        }
      });
    });
  }, [refs]);
  const registerAudio = (0, import_react73.useCallback)((options) => {
    const { aud, audioId, premounting, postmounting } = options;
    const found = audios.current?.find((a2) => a2.audioId === audioId);
    if (found) {
      return found;
    }
    const firstFreeAudio = takenAudios.current.findIndex((a2) => a2 === false);
    if (firstFreeAudio === -1) {
      throw new Error(`Tried to simultaneously mount ${numberOfAudioTags + 1} <Html5Audio /> tags at the same time. With the current settings, the maximum amount of <Html5Audio /> tags is limited to ${numberOfAudioTags} at the same time. Remotion pre-mounts silent audio tags to help avoid browser autoplay restrictions. See https://remotion.dev/docs/player/autoplay#using-the-numberofsharedaudiotags-prop for more information on how to increase this limit.`);
    }
    const { id, ref, mediaElementSourceNode } = refs[firstFreeAudio];
    const cloned = [...takenAudios.current];
    cloned[firstFreeAudio] = id;
    takenAudios.current = cloned;
    const newElem = {
      props: aud,
      id,
      el: ref,
      audioId,
      mediaElementSourceNode,
      premounting,
      audioMounted: Boolean(ref.current),
      postmounting,
      cleanupOnMediaTagUnmount: () => {
      }
    };
    audios.current?.push(newElem);
    rerenderAudios();
    return newElem;
  }, [numberOfAudioTags, refs, rerenderAudios]);
  const unregisterAudio = (0, import_react73.useCallback)((id) => {
    const cloned = [...takenAudios.current];
    const index = refs.findIndex((r) => r.id === id);
    if (index === -1) {
      throw new TypeError(`Unknown audio ref ${id}; refs: ${refs.map((r) => r.id).join(", ")}`);
    }
    cloned[index] = false;
    takenAudios.current = cloned;
    audios.current = audios.current?.filter((a2) => a2.id !== id);
    rerenderAudios();
  }, [refs, rerenderAudios]);
  const updateAudio = (0, import_react73.useCallback)(({
    aud,
    audioId,
    id,
    premounting,
    postmounting
  }) => {
    let changed = false;
    audios.current = audios.current?.map((prevA) => {
      const audioMounted = Boolean(prevA.el.current);
      if (prevA.audioMounted !== audioMounted) {
        changed = true;
      }
      if (prevA.id === id) {
        const isTheSame = compareProps(aud, prevA.props) && prevA.premounting === premounting && prevA.postmounting === postmounting;
        if (isTheSame) {
          return prevA.audioMounted === audioMounted ? prevA : { ...prevA, audioMounted };
        }
        changed = true;
        return {
          ...prevA,
          props: aud,
          premounting,
          postmounting,
          audioId,
          audioMounted
        };
      }
      return prevA.audioMounted === audioMounted ? prevA : { ...prevA, audioMounted };
    });
    if (changed) {
      rerenderAudios();
    }
  }, [rerenderAudios]);
  const playAllAudios = (0, import_react73.useCallback)(() => {
    refs.forEach((ref) => {
      const audio = audios.current.find((a2) => a2.el === ref.ref);
      if (audio?.premounting) {
        return;
      }
      playAndHandleNotAllowedError({
        mediaRef: ref.ref,
        mediaType: "audio",
        onAutoPlayError: null,
        logLevel,
        mountTime,
        reason: "playing all audios",
        isPlayer: env.isPlayer
      });
    });
    resume?.();
  }, [logLevel, mountTime, refs, env.isPlayer, resume]);
  const audioTagsValue = (0, import_react73.useMemo)(() => {
    return {
      registerAudio,
      unregisterAudio,
      updateAudio,
      playAllAudios,
      numberOfAudioTags
    };
  }, [
    numberOfAudioTags,
    playAllAudios,
    registerAudio,
    unregisterAudio,
    updateAudio
  ]);
  const sharedAudioTagElements = (0, import_react73.useMemo)(() => {
    return refs.map(({ id, ref }) => {
      return /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("audio", {
        ref,
        preload: "metadata",
        src: EMPTY_AUDIO
      }, id);
    });
  }, [refs]);
  return /* @__PURE__ */ (0, import_jsx_runtime27.jsxs)(SharedAudioTagsContext.Provider, {
    value: audioTagsValue,
    children: [
      sharedAudioTagElements,
      children
    ]
  });
};
var useSharedAudio = ({
  aud,
  audioId,
  premounting,
  postmounting
}) => {
  const audioCtx = (0, import_react73.useContext)(SharedAudioContext);
  const tagsCtx = (0, import_react73.useContext)(SharedAudioTagsContext);
  const unregisterAudio = tagsCtx && tagsCtx.numberOfAudioTags > 0 ? tagsCtx.unregisterAudio : null;
  const [elem] = (0, import_react73.useState)(() => {
    if (tagsCtx && tagsCtx.numberOfAudioTags > 0) {
      return tagsCtx.registerAudio({ aud, audioId, premounting, postmounting });
    }
    const el = import_react73.default.createRef();
    const mediaElementSourceNode = makeSharedElementSourceNode({
      audioContext: audioCtx?.audioContext ?? null,
      ref: el
    });
    return {
      el,
      id: Math.random(),
      props: aud,
      audioId,
      mediaElementSourceNode,
      premounting,
      audioMounted: Boolean(el.current),
      postmounting,
      cleanupOnMediaTagUnmount: () => {
        mediaElementSourceNode?.cleanup();
      }
    };
  });
  elem.mediaElementSourceNode?.setAudioContext(audioCtx?.audioContext ?? null);
  const effectToUse = import_react73.default.useInsertionEffect ?? import_react73.default.useLayoutEffect;
  if (typeof document !== "undefined") {
    effectToUse(() => {
      if (tagsCtx && tagsCtx.numberOfAudioTags > 0) {
        tagsCtx.updateAudio({
          id: elem.id,
          aud,
          audioId,
          premounting,
          postmounting
        });
      }
    }, [aud, tagsCtx, elem.id, audioId, premounting, postmounting]);
    effectToUse(() => {
      return () => unregisterAudio?.(elem.id);
    }, [unregisterAudio, elem.id]);
  }
  return elem;
};
var FLOATING_POINT_ERROR_THRESHOLD = 1e-5;
var isApproximatelyTheSame = (num1, num2) => {
  return Math.abs(num1 - num2) < FLOATING_POINT_ERROR_THRESHOLD;
};
var toSeconds = (time, fps) => {
  return Math.round(time / fps * 100) / 100;
};
var isSafari = () => {
  if (typeof window === "undefined") {
    return false;
  }
  const { userAgent } = window.navigator;
  return /AppleWebKit/.test(userAgent) && !/Chrome\/|Chromium\/|Android/.test(userAgent);
};
var isIosSafari = () => {
  if (typeof window === "undefined") {
    return false;
  }
  const { userAgent, platform, maxTouchPoints } = window.navigator;
  const isIpadIPodIPhone = /iP(ad|od|hone)/i.test(userAgent);
  const isIpadOsDesktopMode = platform === "MacIntel" && maxTouchPoints > 1;
  return (isIpadIPodIPhone || isIpadOsDesktopMode) && isSafari();
};
var isIOSSafariAndBlob = (actualSrc) => {
  return isIosSafari() && actualSrc.startsWith("blob:");
};
var getVideoFragmentStart = ({
  actualFrom,
  fps
}) => {
  return toSeconds(Math.max(0, -actualFrom), fps);
};
var getVideoFragmentEnd = ({
  duration,
  fps
}) => {
  return toSeconds(duration, fps);
};
var appendVideoFragment = ({
  actualSrc,
  actualFrom,
  duration,
  fps
}) => {
  if (isIOSSafariAndBlob(actualSrc)) {
    return actualSrc;
  }
  if (actualSrc.startsWith("data:")) {
    return actualSrc;
  }
  const existingHash = Boolean(new URL(actualSrc, (typeof window === "undefined" ? null : window.location.href) ?? "http://localhost:3000").hash);
  if (existingHash) {
    return actualSrc;
  }
  if (!Number.isFinite(actualFrom)) {
    return actualSrc;
  }
  const withStartHash = `${actualSrc}#t=${getVideoFragmentStart({ actualFrom, fps })}`;
  if (!Number.isFinite(duration)) {
    return withStartHash;
  }
  return `${withStartHash},${getVideoFragmentEnd({ duration, fps })}`;
};
var isSubsetOfDuration = ({
  prevStartFrom,
  newStartFrom,
  prevDuration,
  newDuration,
  fps
}) => {
  const previousFrom = getVideoFragmentStart({ actualFrom: prevStartFrom, fps });
  const newFrom = getVideoFragmentStart({ actualFrom: newStartFrom, fps });
  const previousEnd = getVideoFragmentEnd({ duration: prevDuration, fps });
  const newEnd = getVideoFragmentEnd({ duration: newDuration, fps });
  if (newFrom < previousFrom) {
    return false;
  }
  if (newEnd > previousEnd) {
    return false;
  }
  return true;
};
var useAppendVideoFragment = ({
  actualSrc: initialActualSrc,
  actualFrom: initialActualFrom,
  duration: initialDuration,
  fps
}) => {
  const actualFromRef = (0, import_react75.useRef)(initialActualFrom);
  const actualDuration = (0, import_react75.useRef)(initialDuration);
  const actualSrc = (0, import_react75.useRef)(initialActualSrc);
  if (!isSubsetOfDuration({
    prevStartFrom: actualFromRef.current,
    newStartFrom: initialActualFrom,
    prevDuration: actualDuration.current,
    newDuration: initialDuration,
    fps
  }) || initialActualSrc !== actualSrc.current) {
    actualFromRef.current = initialActualFrom;
    actualDuration.current = initialDuration;
    actualSrc.current = initialActualSrc;
  }
  const appended = appendVideoFragment({
    actualSrc: actualSrc.current,
    actualFrom: actualFromRef.current,
    duration: actualDuration.current,
    fps
  });
  return appended;
};
var warned2 = false;
var warnSafariOnce = (logLevel) => {
  if (warned2) {
    return;
  }
  warned2 = true;
  Log.warn({ logLevel, tag: null }, "In Safari, setting a volume and a playback rate at the same time is buggy.");
  Log.warn({ logLevel, tag: null }, "In Desktop Safari, only volumes <= 1 will be applied.");
  Log.warn({ logLevel, tag: null }, logLevel, "In Mobile Safari, the volume will be ignored and set to 1 if a playbackRate is set.");
};
var useVolume = ({
  mediaRef,
  volume,
  logLevel,
  source,
  shouldUseWebAudioApi
}) => {
  const audioStuffRef = (0, import_react72.useRef)(null);
  const currentVolumeRef = (0, import_react72.useRef)(volume);
  currentVolumeRef.current = volume;
  const sharedAudioContext = (0, import_react72.useContext)(SharedAudioContext);
  if (!sharedAudioContext) {
    throw new Error("useAmplification must be used within a SharedAudioContext");
  }
  const { audioContext, gainNode: masterGainNode } = sharedAudioContext;
  if (typeof window !== "undefined") {
    (0, import_react72.useLayoutEffect)(() => {
      if (!audioContext) {
        return;
      }
      if (!mediaRef.current) {
        return;
      }
      if (!shouldUseWebAudioApi) {
        return;
      }
      if (mediaRef.current.playbackRate !== 1 && isSafari()) {
        warnSafariOnce(logLevel);
        return;
      }
      if (!source) {
        return;
      }
      if (!masterGainNode) {
        return;
      }
      const gainNode = new GainNode(audioContext, {
        gain: currentVolumeRef.current
      });
      source.attemptToConnect();
      source.get().connect(gainNode);
      gainNode.connect(masterGainNode);
      audioStuffRef.current = {
        gainNode
      };
      Log.trace({ logLevel, tag: null }, `Starting to amplify ${mediaRef.current?.src}. Gain = ${currentVolumeRef.current}, playbackRate = ${mediaRef.current?.playbackRate}`);
      return () => {
        audioStuffRef.current = null;
        gainNode.disconnect();
        source.get().disconnect();
      };
    }, [
      logLevel,
      mediaRef,
      audioContext,
      source,
      shouldUseWebAudioApi,
      masterGainNode
    ]);
  }
  if (audioStuffRef.current) {
    const valueToSet = volume;
    if (!isApproximatelyTheSame(audioStuffRef.current.gainNode.gain.value, valueToSet)) {
      audioStuffRef.current.gainNode.gain.value = valueToSet;
      Log.trace({ logLevel, tag: null }, `Setting gain to ${valueToSet} for ${mediaRef.current?.src}`);
    }
  }
  if (typeof window !== "undefined") {
    (0, import_react72.useLayoutEffect)(() => {
      const media = mediaRef.current;
      if (!media) {
        return;
      }
      const safariCase = isSafari() && media.playbackRate !== 1;
      if ((safariCase || !shouldUseWebAudioApi) && !isApproximatelyTheSame(volume, media.volume)) {
        media.volume = Math.min(volume, 1);
      }
    });
  }
  return audioStuffRef;
};
var subscribeToMediaDuration = (mediaRef, onDurationRef, src) => {
  const { current } = mediaRef;
  if (!current) {
    return;
  }
  if (current.duration) {
    onDurationRef.current?.(src ?? current.src, current.duration);
    return;
  }
  const onLoadedMetadata = () => {
    onDurationRef.current?.(src ?? current.src, current.duration);
  };
  current.addEventListener("loadedmetadata", onLoadedMetadata);
  return () => {
    current.removeEventListener("loadedmetadata", onLoadedMetadata);
  };
};
var useMediaDuration = (mediaRef, onDuration, src, useCurrentSrc) => {
  const onDurationRef = (0, import_react76.useRef)(onDuration);
  onDurationRef.current = onDuration;
  (0, import_react76.useEffect)(subscribeToMediaDuration.bind(null, mediaRef, onDurationRef, useCurrentSrc ? null : src), [mediaRef, src, useCurrentSrc]);
};
var scheduleMediaSourceCleanup = (cleanup) => {
  requestAnimationFrame(() => cleanup?.());
};
var Html5MediaTrimContext = (0, import_react78.createContext)(0);
var useMediaStartsAt = () => {
  const parentSequence = (0, import_react78.useContext)(SequenceContext);
  return parentSequence?.cumulatedNegativeFrom ?? 0;
};
var useFrameForVolumeProp = (behavior) => {
  const loop = Loop.useLoop();
  const loopTimeline = (0, import_react78.useContext)(LoopTimelineContext);
  const sequenceContext = (0, import_react78.useContext)(SequenceContext);
  const frame = useCurrentFrame();
  const startsAt = useMediaStartsAt();
  if (behavior === "repeat" || loop === null) {
    return frame + startsAt;
  }
  return frame + startsAt + loop.durationInFrames * loop.iteration * (sequenceContext?.playbackRate ?? 1) / (loopTimeline?.playbackRate ?? 1);
};
var getAssetDisplayName = (filename) => {
  if (filename.startsWith("data:")) {
    return "Data URL";
  }
  if (filename.startsWith("blob:")) {
    const staticFile = typeof window === "undefined" ? void 0 : window.remotion_staticFiles?.find((file) => file.src === filename);
    return staticFile ? getAssetDisplayName(staticFile.name) : "Blob URL";
  }
  const splitted = filename.split("/").map((s) => s.split("\\")).flat(1);
  const name = splitted[splitted.length - 1];
  try {
    return decodeURIComponent(name);
  } catch {
    return name;
  }
};
var getTimelineDuration = ({
  compositionDurationInFrames,
  playbackRate,
  trimBefore,
  trimAfter,
  parentSequenceDurationInFrames,
  loop
}) => {
  if (loop) {
    return compositionDurationInFrames;
  }
  const mediaDuration = calculateMediaDuration({
    mediaDurationInFrames: compositionDurationInFrames * playbackRate + (trimBefore ?? 0),
    playbackRate,
    trimBefore,
    trimAfter
  });
  if (parentSequenceDurationInFrames !== null) {
    const cappedDuration = Math.min(parentSequenceDurationInFrames, mediaDuration);
    return Number(cappedDuration.toFixed(10));
  }
  return mediaDuration;
};
var EMPTY_EFFECTS2 = [];
var useBasicMediaInTimeline = ({
  src,
  displayName,
  trimBefore,
  trimAfter,
  playbackRate,
  sequenceDurationInFrames,
  mediaStartsAt,
  loop,
  muted
}) => {
  if (!src) {
    throw new Error("No src passed");
  }
  const parentSequence = (0, import_react77.useContext)(SequenceContext);
  const duration = getTimelineDuration({
    compositionDurationInFrames: sequenceDurationInFrames,
    playbackRate,
    trimBefore,
    trimAfter,
    parentSequenceDurationInFrames: parentSequence?.durationInFrames ?? null,
    loop
  });
  const startMediaFrom = 0 - mediaStartsAt + (trimBefore ?? 0);
  const memoizedResult = (0, import_react77.useMemo)(() => {
    return {
      duration,
      finalDisplayName: displayName ?? getAssetDisplayName(src),
      startMediaFrom,
      src,
      playbackRate,
      muted
    };
  }, [duration, displayName, src, startMediaFrom, playbackRate, muted]);
  return memoizedResult;
};
var useMediaInTimelineRegistration = ({
  src,
  mediaType,
  playbackRate,
  displayName,
  id,
  getStack,
  showInTimeline,
  premountDisplay,
  postmountDisplay,
  loopDisplay,
  documentationLink,
  muted
}) => {
  const parentSequence = (0, import_react77.useContext)(SequenceContext);
  const timelineTrack = (0, import_react77.useContext)(TimelineTrackContext);
  const mediaTrimBefore = (0, import_react77.useContext)(Html5MediaTrimContext);
  const sequenceRegistrationEnabled = (0, import_react77.useContext)(SequenceRegistrationContext);
  const { durationInFrames } = useVideoConfig();
  const mediaStartsAt = useMediaStartsAt();
  const canvasOutlinesEnabled = (0, import_react77.useContext)(SequenceOutlineContext);
  const { isStudio } = useRemotionEnvironment();
  const stack = getStack();
  const getStackForRegistration = (0, import_react77.useCallback)(() => stack, [stack]);
  const automaticOutlineRef = (0, import_react77.useMemo)(() => mediaType === "video" && (isStudio || canvasOutlinesEnabled) ? SequenceOutlineInternals.createRef() : null, [canvasOutlinesEnabled, isStudio, mediaType]);
  const { duration, finalDisplayName } = useBasicMediaInTimeline({
    src,
    displayName,
    trimAfter: void 0,
    trimBefore: void 0,
    playbackRate,
    sequenceDurationInFrames: durationInFrames,
    mediaStartsAt,
    loop: false,
    muted
  });
  const getSequenceForRegistration = (0, import_react77.useCallback)(() => {
    if (!src) {
      throw new Error("No src passed");
    }
    return {
      effectRuntimeValues: null,
      ...timelineTrack ? {
        timelineTrack: {
          ...timelineTrack,
          role: "clip",
          seriesOffset: null
        }
      } : {},
      type: mediaType,
      src,
      id,
      duration,
      from: 0,
      trimBefore: null,
      parent: parentSequence?.id ?? null,
      displayName: finalDisplayName,
      documentationLink,
      muted,
      showInTimeline: true,
      timelineOrder: null,
      startMediaFrom: mediaTrimBefore,
      mediaFrameAtSequenceZero: mediaTrimBefore * (1 - playbackRate),
      loopDisplay,
      playbackRate,
      sequencePlaybackRate: 1,
      getStack: getStackForRegistration,
      premountDisplay,
      postmountDisplay,
      controls: null,
      effects: EMPTY_EFFECTS2,
      refForOutline: automaticOutlineRef,
      isInsideSeries: false,
      frozenFrame: null,
      frozenMediaFrame: null
    };
  }, [
    duration,
    id,
    timelineTrack,
    parentSequence?.id,
    src,
    mediaType,
    mediaTrimBefore,
    playbackRate,
    getStackForRegistration,
    premountDisplay,
    postmountDisplay,
    loopDisplay,
    documentationLink,
    finalDisplayName,
    automaticOutlineRef,
    muted
  ]);
  const registrationEnabled = isStudio || sequenceRegistrationEnabled || typeof window !== "undefined" && window.process?.env?.NODE_ENV === "test";
  const registration = useSequenceRegistration({
    getSequence: registrationEnabled && showInTimeline ? getSequenceForRegistration : null,
    id
  });
  return { automaticOutlineRef, registration };
};
var playbackDiagnostics = {
  audioIteratorsCreated: 0,
  mediabunnySinksOpen: 0,
  bufferingHandlesCreated: 0,
  bufferingStatesTriggered: 0
};
var MAX_BUFFERING_EVENTS = 100;
var MAX_HANDLES_PER_EVENT = 50;
var bufferingEvents = [];
var traceSources = { panel: false, webmcp: false };
var nextHandleId = 1;
var nextEventId = 1;
var traceRevision = 0;
var droppedEvents = 0;
var bufferingDiagnostics = {
  isEnabled: () => traceSources.panel || traceSources.webmcp,
  setEnabled: (source, enabled) => {
    if (traceSources[source] !== enabled) {
      traceSources[source] = enabled;
      traceRevision++;
    }
  },
  createHandle: (getSource) => {
    if (!bufferingDiagnostics.isEnabled()) {
      return null;
    }
    const source = getSource?.() ?? {
      compositionId: null,
      frame: 0,
      stack: null,
      owners: []
    };
    return {
      ...source,
      id: nextHandleId++,
      createdAt: performance.now(),
      releasedAt: null,
      releasedFrame: null
    };
  },
  releaseHandle: (handle, frame) => {
    if (handle.releasedAt !== null) {
      return;
    }
    handle.releasedAt = performance.now();
    handle.releasedFrame = frame;
    traceRevision++;
  },
  startEvent: ({
    compositionId,
    frame,
    handles,
    untracedHandles
  }) => {
    if (!bufferingDiagnostics.isEnabled()) {
      return null;
    }
    const event = {
      id: nextEventId++,
      compositionId,
      frame,
      startedAt: performance.now(),
      endedAt: null,
      endReason: null,
      handles: handles.slice(0, MAX_HANDLES_PER_EVENT),
      omittedHandles: untracedHandles + Math.max(0, handles.length - MAX_HANDLES_PER_EVENT)
    };
    bufferingEvents.push(event);
    if (bufferingEvents.length > MAX_BUFFERING_EVENTS) {
      bufferingEvents.shift();
      droppedEvents++;
    }
    traceRevision++;
    return event;
  },
  addHandle: (event, handle) => {
    if (handle && event.handles.length < MAX_HANDLES_PER_EVENT) {
      event.handles.push(handle);
    } else {
      event.omittedHandles++;
    }
    traceRevision++;
  },
  endEvent: (event, reason) => {
    if (event.endedAt !== null) {
      return;
    }
    event.endedAt = performance.now();
    event.endReason = reason;
    traceRevision++;
  },
  clear: () => {
    for (let i = bufferingEvents.length - 1; i >= 0; i--) {
      if (bufferingEvents[i].endedAt !== null) {
        bufferingEvents.splice(i, 1);
      }
    }
    droppedEvents = 0;
    traceRevision++;
  },
  getSnapshot: () => ({
    enabled: bufferingDiagnostics.isEnabled(),
    panelEnabled: traceSources.panel,
    webmcpEnabled: traceSources.webmcp,
    revision: traceRevision,
    maxEvents: MAX_BUFFERING_EVENTS,
    maxHandlesPerEvent: MAX_HANDLES_PER_EVENT,
    droppedEvents,
    events: bufferingEvents.map((event) => ({
      ...event,
      handles: event.handles.map((handle) => ({
        ...handle,
        owners: handle.owners.map((owner) => ({ ...owner }))
      }))
    }))
  })
};
var registerMediabunnySink = (input) => {
  let released = input.disposed;
  if (!released) {
    playbackDiagnostics.mediabunnySinksOpen++;
  }
  return () => {
    if (released) {
      return;
    }
    released = true;
    playbackDiagnostics.mediabunnySinksOpen--;
  };
};
var useBufferManager = (logLevel, mountTime, setBuffering, isBuffering) => {
  const [{ blockCount, handles }, setBlocks] = (0, import_react82.useState)({ blockCount: 0, handles: [] });
  const event = (0, import_react82.useRef)(null);
  const composition = (0, import_react82.useContext)(CompositionManagerRefContext);
  const { frameRef } = (0, import_react82.useContext)(SetTimelineContext);
  const getPosition = (0, import_react82.useCallback)(() => {
    const content2 = composition.current.canvasContent;
    const compositionId = content2?.type === "composition" ? content2.compositionId : null;
    return {
      compositionId,
      frame: compositionId === null ? 0 : frameRef.current[compositionId] ?? 0
    };
  }, [composition, frameRef]);
  const env = useRemotionEnvironment();
  const rendering = env.isRendering;
  const addBlock = (0, import_react82.useCallback)((getSource) => {
    if (rendering) {
      return {
        unblock: () => {
          return;
        }
      };
    }
    playbackDiagnostics.bufferingHandlesCreated++;
    const tracedHandle = bufferingDiagnostics.createHandle(getSource);
    if (event.current && event.current.endedAt === null) {
      bufferingDiagnostics.addHandle(event.current, tracedHandle);
    }
    let unblocked = false;
    setBlocks((current) => ({
      blockCount: current.blockCount + 1,
      handles: tracedHandle ? [...current.handles, tracedHandle] : current.handles
    }));
    return {
      unblock: () => {
        if (unblocked) {
          return;
        }
        unblocked = true;
        if (tracedHandle) {
          bufferingDiagnostics.releaseHandle(tracedHandle, getPosition().frame);
        }
        setBlocks((current) => ({
          blockCount: current.blockCount - 1,
          handles: tracedHandle ? current.handles.filter((handle) => handle !== tracedHandle) : current.handles
        }));
      }
    };
  }, [getPosition, rendering]);
  (0, import_react82.useEffect)(() => {
    if (rendering) {
      return;
    }
    if (blockCount > 0 && !isBuffering()) {
      playbackDiagnostics.bufferingStatesTriggered++;
      event.current = bufferingDiagnostics.startEvent({
        ...getPosition(),
        handles,
        untracedHandles: blockCount - handles.length
      });
      setBuffering(true);
      playbackLogging({
        logLevel,
        message: "Player is entering buffer state",
        mountTime,
        tag: "player"
      });
    }
  }, [blockCount]);
  if (typeof window !== "undefined") {
    (0, import_react82.useLayoutEffect)(() => {
      if (rendering) {
        return;
      }
      if (blockCount === 0 && isBuffering()) {
        if (event.current) {
          bufferingDiagnostics.endEvent(event.current, "resumed");
          event.current = null;
        }
        setBuffering(false);
        playbackLogging({
          logLevel,
          message: "Player is exiting buffer state",
          mountTime,
          tag: "player"
        });
      }
    }, [blockCount]);
  }
  (0, import_react82.useEffect)(() => () => {
    if (event.current) {
      bufferingDiagnostics.endEvent(event.current, "unmounted");
      event.current = null;
    }
  }, []);
  return (0, import_react82.useMemo)(() => ({ addBlock }), [addBlock]);
};
var BufferingContextReact = import_react82.default.createContext(null);
var BufferingProvider = ({ children }) => {
  const { logLevel, mountTime } = (0, import_react82.useContext)(LogLevelContext);
  const { isBuffering, setBuffering } = (0, import_react82.useContext)(SetTimelineContext);
  const bufferManager = useBufferManager(logLevel ?? "info", mountTime, setBuffering, isBuffering);
  return /* @__PURE__ */ (0, import_jsx_runtime28.jsx)(BufferingContextReact.Provider, {
    value: bufferManager,
    children
  });
};
var useBufferState = () => {
  const buffer = (0, import_react81.useContext)(BufferingContextReact);
  const logLevel = useLogLevel();
  const sequenceId = (0, import_react81.useContext)(SequenceContext)?.id ?? null;
  const registry = (0, import_react81.useContext)(SequenceManagerRefContext);
  const composition = (0, import_react81.useContext)(CompositionManagerRefContext);
  const { frameRef } = (0, import_react81.useContext)(SetTimelineContext);
  const addBlock = buffer ? buffer.addBlock : null;
  return (0, import_react81.useMemo)(() => ({
    delayPlayback: () => {
      if (!addBlock) {
        throw new Error("Tried to enable the buffering state, but a Remotion context was not found. This API can only be called in a component that was passed to the Remotion Player or a <Composition>. Or you might have experienced a version mismatch - run `npx remotion versions` and ensure all packages have the same version. This error is thrown by the buffer state https://remotion.dev/docs/player/buffer-state");
      }
      const stack = bufferingDiagnostics.isEnabled() || logLevel === "trace" ? new Error().stack ?? null : null;
      Log.trace({ logLevel, tag: "[buffer-state]" }, "Adding buffer handle", stack);
      const { unblock } = addBlock(() => {
        const content2 = composition.current.canvasContent;
        const compositionId = content2?.type === "composition" ? content2.compositionId : null;
        const owners = [];
        let id = sequenceId;
        while (id !== null && owners.length < 16) {
          const owner = registry.current.find((item) => item.id === id);
          if (!owner)
            break;
          owners.push({
            sequenceId: owner.id,
            name: owner.displayName || owner.type,
            source: "src" in owner ? owner.src : null,
            stack: owner.getStack(),
            overrideId: owner.controls?.overrideId ?? null
          });
          id = owner.parent;
        }
        return {
          compositionId,
          frame: compositionId === null ? 0 : frameRef.current[compositionId] ?? 0,
          stack,
          owners
        };
      });
      let unblocked = false;
      return {
        unblock: () => {
          if (unblocked) {
            return;
          }
          unblocked = true;
          Log.trace({ logLevel, tag: "[buffer-state]" }, "Removing buffer handle");
          unblock();
        }
      };
    }
  }), [addBlock, logLevel, sequenceId, registry, composition, frameRef]);
};
var useBufferUntilFirstFrame = ({
  mediaRef,
  mediaType,
  onVariableFpsVideoDetected,
  pauseWhenBuffering,
  logLevel,
  mountTime
}) => {
  const bufferingRef = (0, import_react80.useRef)(false);
  const { delayPlayback } = useBufferState();
  const bufferUntilFirstFrame = (0, import_react80.useCallback)((requestedTime) => {
    if (mediaType !== "video") {
      return;
    }
    if (!pauseWhenBuffering) {
      return;
    }
    const current = mediaRef.current;
    if (!current) {
      return;
    }
    if (current.readyState >= current.HAVE_FUTURE_DATA && !isSafari()) {
      playbackLogging({
        logLevel,
        message: `Not using buffer until first frame, because readyState is ${current.readyState} and is not Safari or Desktop Chrome`,
        mountTime,
        tag: "buffer"
      });
      return;
    }
    if (!current.requestVideoFrameCallback) {
      playbackLogging({
        logLevel,
        message: `Not using buffer until first frame, because requestVideoFrameCallback is not supported`,
        mountTime,
        tag: "buffer"
      });
      return;
    }
    bufferingRef.current = true;
    playbackLogging({
      logLevel,
      message: `Buffering ${mediaRef.current?.src} until the first frame is received`,
      mountTime,
      tag: "buffer"
    });
    const playback = delayPlayback();
    const unblock = () => {
      playback.unblock();
      current.removeEventListener("ended", unblock, {
        once: true
      });
      current.removeEventListener("pause", unblock, {
        once: true
      });
      bufferingRef.current = false;
    };
    const onEndedOrPauseOrCanPlay = () => {
      unblock();
    };
    current.requestVideoFrameCallback((_, info2) => {
      const differenceFromRequested = Math.abs(info2.mediaTime - requestedTime);
      if (differenceFromRequested > 0.5) {
        onVariableFpsVideoDetected();
      }
      unblock();
    });
    current.addEventListener("ended", onEndedOrPauseOrCanPlay, { once: true });
    current.addEventListener("pause", onEndedOrPauseOrCanPlay, { once: true });
    current.addEventListener("canplay", onEndedOrPauseOrCanPlay, {
      once: true
    });
  }, [
    delayPlayback,
    logLevel,
    mediaRef,
    mediaType,
    mountTime,
    onVariableFpsVideoDetected,
    pauseWhenBuffering
  ]);
  return (0, import_react80.useMemo)(() => {
    return {
      isBuffering: () => bufferingRef.current,
      bufferUntilFirstFrame
    };
  }, [bufferUntilFirstFrame]);
};
var getMediaSyncAction = (input) => {
  const {
    duration,
    currentTime,
    paused,
    ended,
    desiredUnclampedTime,
    mediaTagTime,
    rvcTime,
    isVariableFpsVideo,
    acceptableTimeShift,
    lastSeekDueToShift,
    playing,
    playbackRate,
    mediaTagBufferingOrStalled,
    playerBuffering,
    absoluteFrame,
    onlyWarnForMediaSeekingError,
    isPremounting,
    isPostmounting,
    pauseWhenBuffering,
    mediaType
  } = input;
  const shouldBeTime = !Number.isNaN(duration) && Number.isFinite(duration) ? Math.min(duration, desiredUnclampedTime) : desiredUnclampedTime;
  const timeShift = Math.abs(shouldBeTime - mediaTagTime);
  if (timeShift > acceptableTimeShift && lastSeekDueToShift !== shouldBeTime) {
    return {
      type: "seek-due-to-shift",
      shouldBeTime,
      why: `because time shift is too big. shouldBeTime = ${shouldBeTime}, isTime = ${mediaTagTime}, requestVideoCallbackTime = ${rvcTime}, timeShift = ${timeShift}${isVariableFpsVideo ? ", isVariableFpsVideo = true" : ""}, isPremounting = ${isPremounting}, isPostmounting = ${isPostmounting}, pauseWhenBuffering = ${pauseWhenBuffering}`,
      bufferUntilFirstFrame: playing && playbackRate > 0,
      playReason: playing && paused ? "player is playing but media tag is paused, and just seeked" : null,
      warnAboutNonSeekable: !onlyWarnForMediaSeekingError
    };
  }
  const seekThreshold = playing ? 0.15 : 0.01;
  const makesSenseToSeek = Math.abs(currentTime - shouldBeTime) > seekThreshold;
  const audioLead = currentTime - shouldBeTime;
  const holdAudioUntilTimelineCatchesUp = mediaType === "audio" && playing && playbackRate > 0 && makesSenseToSeek && audioLead > 0 && audioLead <= acceptableTimeShift;
  const isSomethingElseBuffering = playerBuffering && !mediaTagBufferingOrStalled;
  if (!playing || isSomethingElseBuffering) {
    return {
      type: "seek-if-not-playing",
      shouldBeTime,
      why: makesSenseToSeek && !holdAudioUntilTimelineCatchesUp ? `not playing or something else is buffering. time offset is over seek threshold (${seekThreshold})` : null
    };
  }
  if (!playing || playerBuffering) {
    return { type: "none" };
  }
  const pausedCondition = paused && !ended;
  if (pausedCondition && holdAudioUntilTimelineCatchesUp) {
    return { type: "none" };
  }
  const firstFrameCondition = absoluteFrame === 0;
  if (pausedCondition || firstFrameCondition) {
    const reason = pausedCondition ? "media tag is paused" : "absolute frame is 0";
    return {
      type: "play-and-seek",
      shouldBeTime,
      why: makesSenseToSeek ? `is over timeshift threshold (threshold = ${seekThreshold}) and ${reason}` : null,
      playReason: `player is playing and ${reason}`,
      bufferUntilFirstFrame: !isVariableFpsVideo && playbackRate > 0
    };
  }
  return { type: "none" };
};
var useCurrentTimeOfMediaTag = (mediaRef) => {
  const currentTime = import_react83.default.useRef({
    time: mediaRef.current?.currentTime ?? 0
  });
  const nowCurrentTime = mediaRef.current?.currentTime ?? null;
  if (nowCurrentTime !== null) {
    currentTime.current.time = nowCurrentTime;
  }
  return currentTime;
};
var seek = ({
  mediaRef,
  time,
  logLevel,
  why,
  mountTime
}) => {
  const timeToSet = isIosSafari() ? Number(time.toFixed(1)) : time;
  playbackLogging({
    logLevel,
    tag: "seek",
    message: `Seeking from ${mediaRef.currentTime} to ${timeToSet}. src= ${mediaRef.src} Reason: ${why}`,
    mountTime
  });
  mediaRef.currentTime = timeToSet;
  return timeToSet;
};
var useMediaBuffering = ({
  element,
  shouldBuffer,
  isPremounting,
  isPostmounting,
  logLevel,
  mountTime,
  src
}) => {
  const buffer = useBufferState();
  const [isBuffering, setIsBuffering] = (0, import_react84.useState)(false);
  (0, import_react84.useEffect)(() => {
    let cleanupFns = [];
    const { current } = element;
    if (!current) {
      return;
    }
    if (!shouldBuffer) {
      return;
    }
    if (isPremounting || isPostmounting) {
      if ((isPremounting || isPostmounting) && current.readyState < current.HAVE_FUTURE_DATA) {
        if (!navigator.userAgent.includes("Firefox/")) {
          playbackLogging({
            logLevel,
            message: `Calling .load() on ${current.src} because readyState is ${current.readyState} and it is not Firefox. Element is premounted ${current.playbackRate}`,
            tag: "load",
            mountTime
          });
          const previousPlaybackRate = current.playbackRate;
          current.load();
          current.playbackRate = previousPlaybackRate;
        }
      }
      return;
    }
    const cleanup = (reason) => {
      let didDoSomething = false;
      cleanupFns.forEach((fn) => {
        fn(reason);
        didDoSomething = true;
      });
      cleanupFns = [];
      setIsBuffering((previous) => {
        if (previous) {
          didDoSomething = true;
        }
        return false;
      });
      if (didDoSomething) {
        playbackLogging({
          logLevel,
          message: `Unmarking as buffering: ${current.src}. Reason: ${reason}`,
          tag: "buffer",
          mountTime
        });
      }
    };
    const blockMedia = (reason) => {
      setIsBuffering(true);
      playbackLogging({
        logLevel,
        message: `Marking as buffering: ${current.src}. Reason: ${reason}`,
        tag: "buffer",
        mountTime
      });
      const { unblock } = buffer.delayPlayback();
      const onCanPlay = () => {
        cleanup('"canplay" was fired');
        init();
      };
      const onError = () => {
        cleanup('"error" event was occurred');
        init();
      };
      current.addEventListener("canplay", onCanPlay, {
        once: true
      });
      cleanupFns.push(() => {
        current.removeEventListener("canplay", onCanPlay);
      });
      current.addEventListener("error", onError, {
        once: true
      });
      cleanupFns.push(() => {
        current.removeEventListener("error", onError);
      });
      cleanupFns.push((cleanupReason) => {
        playbackLogging({
          logLevel,
          message: `Unblocking ${current.src} from buffer. Reason: ${cleanupReason}`,
          tag: "buffer",
          mountTime
        });
        unblock();
      });
    };
    const init = () => {
      if (current.readyState < current.HAVE_FUTURE_DATA) {
        blockMedia(`readyState is ${current.readyState}, which is less than HAVE_FUTURE_DATA`);
        if (!navigator.userAgent.includes("Firefox/")) {
          playbackLogging({
            logLevel,
            message: `Calling .load() on ${src} because readyState is ${current.readyState} and it is not Firefox. ${current.playbackRate}`,
            tag: "load",
            mountTime
          });
          const previousPlaybackRate = current.playbackRate;
          current.load();
          current.playbackRate = previousPlaybackRate;
        }
      } else {
        const onWaiting = () => {
          blockMedia('"waiting" event was fired');
        };
        current.addEventListener("waiting", onWaiting);
        cleanupFns.push(() => {
          current.removeEventListener("waiting", onWaiting);
        });
      }
    };
    init();
    return () => {
      cleanup("element was unmounted or prop changed");
    };
  }, [
    buffer,
    src,
    element,
    isPremounting,
    isPostmounting,
    logLevel,
    shouldBuffer,
    mountTime
  ]);
  return isBuffering;
};
var useRequestVideoCallbackTime = ({
  mediaRef,
  mediaType,
  lastSeek,
  onVariableFpsVideoDetected
}) => {
  const currentTime = (0, import_react85.useRef)(null);
  (0, import_react85.useEffect)(() => {
    const { current } = mediaRef;
    if (current) {
      currentTime.current = {
        time: current.currentTime
      };
    } else {
      currentTime.current = null;
      return;
    }
    if (mediaType !== "video") {
      currentTime.current = null;
      return;
    }
    const videoTag = current;
    if (!videoTag.requestVideoFrameCallback) {
      return;
    }
    let cancel = () => {
      return;
    };
    const request = () => {
      if (!videoTag) {
        return;
      }
      const cb = videoTag.requestVideoFrameCallback((_, info2) => {
        if (currentTime.current !== null) {
          const difference = Math.abs(currentTime.current.time - info2.mediaTime);
          const differenceToLastSeek = Math.abs(lastSeek.current === null ? Infinity : info2.mediaTime - lastSeek.current);
          if (difference > 0.5 && differenceToLastSeek > 0.5 && info2.mediaTime > currentTime.current.time) {
            onVariableFpsVideoDetected();
          }
        }
        currentTime.current = {
          time: info2.mediaTime
        };
        request();
      });
      cancel = () => {
        videoTag.cancelVideoFrameCallback(cb);
        cancel = () => {
          return;
        };
      };
    };
    request();
    return () => {
      cancel();
    };
  }, [lastSeek, mediaRef, mediaType, onVariableFpsVideoDetected]);
  return currentTime;
};
var alreadyWarned = {};
var warnAboutNonSeekableMedia = (ref, type) => {
  if (ref === null) {
    return;
  }
  if (ref.seekable.length === 0) {
    return;
  }
  if (ref.seekable.length > 1) {
    return;
  }
  if (alreadyWarned[ref.src]) {
    return;
  }
  const range = { start: ref.seekable.start(0), end: ref.seekable.end(0) };
  if (range.start === 0 && range.end === 0) {
    const msg = [
      `The media ${ref.src} cannot be seeked. This could be one of few reasons:`,
      "1) The media resource was replaced while the video is playing but it was not loaded yet.",
      "2) The media does not support seeking.",
      "3) The media was loaded with security headers prventing it from being included.",
      "Please see https://remotion.dev/docs/non-seekable-media for assistance."
    ].join(`
`);
    if (type === "console-error") {
      console.error(msg);
    } else if (type === "console-warning") {
      console.warn(`The media ${ref.src} does not support seeking. The video will render fine, but may not play correctly in the Remotion Studio and in the <Player>. See https://remotion.dev/docs/non-seekable-media for an explanation.`);
    } else {
      throw new Error(msg);
    }
    alreadyWarned[ref.src] = true;
  }
};
var DEFAULT_ACCEPTABLE_TIMESHIFT_WITH_AMPLIFICATION = 0.65;
var getPauseReason = ({
  reason,
  isPremounting,
  isPostmounting
}) => {
  if (reason === "buffering") {
    return "player is buffering but media tag is not";
  }
  if (isPremounting) {
    return "media is premounting";
  }
  if (isPostmounting) {
    return "media is postmounting";
  }
  return "Player is not playing";
};
var useMediaPlayback = ({
  mediaRef,
  src,
  mediaType,
  playbackRate: localPlaybackRate,
  preservePitch = true,
  onlyWarnForMediaSeekingError,
  acceptableTimeshift,
  pauseWhenBuffering,
  isPremounting,
  isPostmounting,
  onAutoPlayError
}) => {
  const { playbackRate: globalPlaybackRate } = usePlaybackRate();
  const frame = useCurrentFrame();
  const absoluteFrame = useTimelinePosition();
  const playing = usePlaying();
  const playerBuffering = useBuffering();
  const { fps } = useVideoConfig();
  const mediaTrimBefore = (0, import_react79.useContext)(Html5MediaTrimContext);
  const lastSeekDueToShift = (0, import_react79.useRef)(null);
  const lastSeek = (0, import_react79.useRef)(null);
  const logLevel = useLogLevel();
  const mountTime = useMountTime();
  const isVariableFpsVideoMap = (0, import_react79.useRef)({});
  const onVariableFpsVideoDetected = (0, import_react79.useCallback)(() => {
    if (!src) {
      return;
    }
    if (isVariableFpsVideoMap.current[src]) {
      return;
    }
    Log.verbose({ logLevel, tag: null }, `Detected ${src} as a variable FPS video. Disabling buffering while seeking.`);
    isVariableFpsVideoMap.current[src] = true;
  }, [logLevel, src]);
  const rvcCurrentTime = useRequestVideoCallbackTime({
    mediaRef,
    mediaType,
    lastSeek,
    onVariableFpsVideoDetected
  });
  const mediaTagCurrentTime = useCurrentTimeOfMediaTag(mediaRef);
  const desiredUnclampedTime = getMediaTime({
    frame,
    playbackRate: localPlaybackRate,
    startFrom: mediaTrimBefore,
    fps
  });
  const isMediaTagBuffering = useMediaBuffering({
    element: mediaRef,
    shouldBuffer: pauseWhenBuffering,
    isPremounting,
    isPostmounting,
    logLevel,
    mountTime,
    src: src ?? null
  });
  const { bufferUntilFirstFrame, isBuffering } = useBufferUntilFirstFrame({
    mediaRef,
    mediaType,
    onVariableFpsVideoDetected,
    pauseWhenBuffering,
    logLevel,
    mountTime
  });
  const sequenceContext = (0, import_react79.useContext)(SequenceContext);
  const playbackRate = localPlaybackRate * globalPlaybackRate * (sequenceContext?.playbackRate ?? 1);
  const acceptableTimeShiftButLessThanDuration = (() => {
    if (mediaRef.current?.duration) {
      return Math.min(mediaRef.current.duration, acceptableTimeshift ?? DEFAULT_ACCEPTABLE_TIMESHIFT_WITH_AMPLIFICATION);
    }
    return acceptableTimeshift ?? DEFAULT_ACCEPTABLE_TIMESHIFT_WITH_AMPLIFICATION;
  })();
  const env = useRemotionEnvironment();
  (0, import_react79.useLayoutEffect)(() => {
    const playbackRateToSet = Math.max(0, playbackRate);
    if (mediaRef.current && mediaRef.current.defaultPlaybackRate !== playbackRateToSet) {
      mediaRef.current.defaultPlaybackRate = playbackRateToSet;
    }
    if (mediaRef.current && mediaRef.current.playbackRate !== playbackRateToSet) {
      mediaRef.current.playbackRate = playbackRateToSet;
    }
    if (mediaRef.current && mediaRef.current.preservesPitch !== preservePitch) {
      mediaRef.current.preservesPitch = preservePitch;
    }
  }, [mediaRef, playbackRate, preservePitch]);
  (0, import_react79.useEffect)(() => {
    const tagName = mediaType === "audio" ? "<Html5Audio>" : "<Html5Video>";
    if (!mediaRef.current) {
      throw new Error(`No ${mediaType} ref found`);
    }
    if (!src) {
      throw new Error(`No 'src' attribute was passed to the ${tagName} element.`);
    }
    const { current } = mediaRef;
    const isMediaTagBufferingOrStalled = isMediaTagBuffering || isBuffering();
    let pauseReason = null;
    if (!playing) {
      pauseReason = "not-playing";
    } else if (playerBuffering && !isMediaTagBufferingOrStalled) {
      pauseReason = "buffering";
    }
    if (!current.paused && pauseReason !== null) {
      playbackLogging({
        logLevel,
        tag: "pause",
        message: `Pausing ${current.src} because ${getPauseReason({
          reason: pauseReason,
          isPremounting,
          isPostmounting
        })}`,
        mountTime
      });
      current.pause();
    }
    const action = getMediaSyncAction({
      duration: current.duration,
      currentTime: current.currentTime,
      paused: current.paused,
      ended: current.ended,
      desiredUnclampedTime,
      mediaTagTime: mediaTagCurrentTime.current.time,
      rvcTime: rvcCurrentTime.current?.time ?? null,
      isVariableFpsVideo: Boolean(isVariableFpsVideoMap.current[src]),
      acceptableTimeShift: acceptableTimeShiftButLessThanDuration,
      lastSeekDueToShift: lastSeekDueToShift.current,
      playing,
      playbackRate,
      mediaTagBufferingOrStalled: isMediaTagBufferingOrStalled,
      playerBuffering,
      absoluteFrame,
      onlyWarnForMediaSeekingError,
      isPremounting,
      isPostmounting,
      pauseWhenBuffering,
      mediaType
    });
    if (action.type === "none") {
      return;
    }
    if (action.type === "seek-due-to-shift") {
      lastSeek.current = seek({
        mediaRef: current,
        time: action.shouldBeTime,
        logLevel,
        why: action.why,
        mountTime
      });
      lastSeekDueToShift.current = lastSeek.current;
      if (action.bufferUntilFirstFrame) {
        bufferUntilFirstFrame(action.shouldBeTime);
      }
      if (action.playReason !== null) {
        playAndHandleNotAllowedError({
          mediaRef,
          mediaType,
          onAutoPlayError,
          logLevel,
          mountTime,
          reason: action.playReason,
          isPlayer: env.isPlayer
        });
      }
      if (action.warnAboutNonSeekable) {
        warnAboutNonSeekableMedia(current, "console-error");
      }
      return;
    }
    if (action.type === "seek-if-not-playing") {
      if (action.why !== null) {
        lastSeek.current = seek({
          mediaRef: current,
          time: action.shouldBeTime,
          logLevel,
          why: action.why,
          mountTime
        });
      }
      return;
    }
    if (action.why !== null) {
      lastSeek.current = seek({
        mediaRef: current,
        time: action.shouldBeTime,
        logLevel,
        why: action.why,
        mountTime
      });
    }
    playAndHandleNotAllowedError({
      mediaRef,
      mediaType,
      onAutoPlayError,
      logLevel,
      mountTime,
      reason: action.playReason,
      isPlayer: env.isPlayer
    });
    if (action.bufferUntilFirstFrame) {
      bufferUntilFirstFrame(action.shouldBeTime);
    }
  }, [
    absoluteFrame,
    acceptableTimeShiftButLessThanDuration,
    bufferUntilFirstFrame,
    rvcCurrentTime,
    logLevel,
    desiredUnclampedTime,
    isBuffering,
    isMediaTagBuffering,
    mediaRef,
    mediaType,
    onlyWarnForMediaSeekingError,
    playbackRate,
    playerBuffering,
    playing,
    src,
    onAutoPlayError,
    isPremounting,
    isPostmounting,
    pauseWhenBuffering,
    mountTime,
    mediaTagCurrentTime,
    env.isPlayer
  ]);
};
var useMediaTag = ({
  mediaRef,
  id,
  mediaType,
  onAutoPlayError,
  isPremounting,
  isPostmounting
}) => {
  const { audioAndVideoTags, isPlaying } = useTimelineContext();
  const { subscribePlaying } = (0, import_react86.useContext)(SetTimelineContext);
  const isPlayingRef = (0, import_react86.useRef)(isPlaying);
  isPlayingRef.current = isPlaying;
  const logLevel = useLogLevel();
  const mountTime = useMountTime();
  const env = useRemotionEnvironment();
  (0, import_react86.useEffect)(() => {
    const tag = {
      id,
      play: (reason) => {
        if (!isPlayingRef.current()) {
          return;
        }
        if (isPremounting || isPostmounting) {
          return;
        }
        return playAndHandleNotAllowedError({
          mediaRef,
          mediaType,
          onAutoPlayError,
          logLevel,
          mountTime,
          reason,
          isPlayer: env.isPlayer
        });
      }
    };
    audioAndVideoTags.current.push(tag);
    const unsubscribe = subscribePlaying((state) => {
      if (state.playing) {
        return;
      }
      const media = mediaRef.current;
      if (!media || media.paused) {
        return;
      }
      playbackLogging({
        logLevel,
        tag: "pause",
        message: `Pausing ${media.src} because Player is not playing`,
        mountTime
      });
      media.pause();
    });
    return () => {
      unsubscribe();
      audioAndVideoTags.current = audioAndVideoTags.current.filter((a2) => a2.id !== id);
    };
  }, [
    audioAndVideoTags,
    id,
    mediaRef,
    mediaType,
    onAutoPlayError,
    isPremounting,
    isPostmounting,
    logLevel,
    mountTime,
    env.isPlayer,
    subscribePlaying
  ]);
};
var MediaVolumeContext = (0, import_react87.createContext)({
  playerMuted: false,
  mediaVolume: 1
});
var SetMediaVolumeContext = (0, import_react87.createContext)({
  setPlayerMuted: () => {
    throw new Error("default");
  },
  setMediaVolume: () => {
    throw new Error("default");
  }
});
var useResumeAudioOnUnmute = () => {
  const volume = (0, import_react87.useContext)(MediaVolumeContext);
  const audioContext = (0, import_react87.useContext)(SharedAudioContext);
  const audioTags = (0, import_react87.useContext)(SharedAudioTagsContext);
  const { isPlaying } = (0, import_react87.useContext)(SetTimelineContext);
  const current = (0, import_react87.useRef)({ volume, audioContext, audioTags });
  current.current = { volume, audioContext, audioTags };
  return (0, import_react87.useCallback)((update2) => {
    const before = current.current.volume;
    if (!isPlaying() || !before.playerMuted && before.mediaVolume > 0) {
      update2();
      return;
    }
    (0, import_react_dom2.flushSync)(update2);
    const after = current.current;
    if (after.volume.playerMuted || after.volume.mediaVolume === 0) {
      return;
    }
    after.audioContext?.resume();
    after.audioTags?.playAllAudios();
  }, [isPlaying]);
};
var useMediaVolumeState = () => {
  const { mediaVolume } = (0, import_react87.useContext)(MediaVolumeContext);
  const { setMediaVolume } = (0, import_react87.useContext)(SetMediaVolumeContext);
  const updateAndResume = useResumeAudioOnUnmute();
  const setVolume = (0, import_react87.useCallback)((volume) => updateAndResume(() => setMediaVolume(volume)), [setMediaVolume, updateAndResume]);
  return (0, import_react87.useMemo)(() => {
    return [mediaVolume, setVolume];
  }, [mediaVolume, setVolume]);
};
var usePlayerMutedState = () => {
  const { playerMuted } = (0, import_react87.useContext)(MediaVolumeContext);
  const { setPlayerMuted } = (0, import_react87.useContext)(SetMediaVolumeContext);
  const updateAndResume = useResumeAudioOnUnmute();
  const setMuted = (0, import_react87.useCallback)((muted) => updateAndResume(() => setPlayerMuted(muted)), [setPlayerMuted, updateAndResume]);
  return (0, import_react87.useMemo)(() => {
    return [playerMuted, setMuted];
  }, [playerMuted, setMuted]);
};
var evaluateVolume = ({
  frame,
  volume,
  mediaVolume = 1
}) => {
  if (typeof volume === "number") {
    return volume * mediaVolume;
  }
  if (typeof volume === "undefined") {
    return Number(mediaVolume);
  }
  const evaluated = volume(frame) * mediaVolume;
  if (typeof evaluated !== "number") {
    throw new TypeError(`You passed in a a function to the volume prop but it did not return a number but a value of type ${typeof evaluated} for frame ${frame}`);
  }
  if (Number.isNaN(evaluated)) {
    throw new TypeError(`You passed in a function to the volume prop but it returned NaN for frame ${frame}.`);
  }
  if (!Number.isFinite(evaluated)) {
    throw new TypeError(`You passed in a function to the volume prop but it returned a non-finite number for frame ${frame}.`);
  }
  return Math.max(0, evaluated);
};
var warnAboutTooHighVolume = (volume) => {
  if (volume >= 100) {
    throw new Error(`Volume was set to ${volume}, but regular volume is 1, not 100. Did you forget to divide by 100? Set a volume of less than 100 to dismiss this error.`);
  }
};
var resolveMediaAudioState = ({
  muted,
  playerMuted,
  volume,
  isInsideFreeze,
  audioEnabled
}) => {
  const isMutedForTimeline = muted || isInsideFreeze;
  const isMutedForPlayback = isMutedForTimeline || playerMuted || volume !== null && volume <= 0;
  return {
    isMutedForTimeline,
    isMutedForPlayback,
    shouldUseAudio: audioEnabled && !isMutedForPlayback
  };
};
var useMediaAudioState = ({
  muted,
  volume,
  audioEnabled
}) => {
  const [playerMuted] = usePlayerMutedState();
  const isInsideFreeze = useIsInsideFreeze();
  return resolveMediaAudioState({
    muted,
    playerMuted,
    volume,
    isInsideFreeze,
    audioEnabled
  });
};
var AudioForDevelopmentForwardRefFunction = (props, ref) => {
  const [initialShouldPreMountAudioElements] = (0, import_react71.useState)(props.shouldPreMountAudioTags);
  if (props.shouldPreMountAudioTags !== initialShouldPreMountAudioElements) {
    throw new Error("Cannot change the behavior for pre-mounting audio tags dynamically.");
  }
  const logLevel = useLogLevel();
  const {
    timelineId,
    userPreferredVolume,
    isMutedForPlayback,
    volume,
    muted,
    playbackRate,
    preservePitch,
    shouldPreMountAudioTags,
    src,
    onDuration,
    acceptableTimeShiftInSeconds,
    _remotionInternalNeedsDurationCalculation,
    _remotionInternalNativeLoopPassed,
    _remotionInternalStack,
    allowAmplificationDuringRender,
    name,
    pauseWhenBuffering,
    showInTimeline,
    loopVolumeCurveBehavior,
    crossOrigin,
    delayRenderRetries,
    delayRenderTimeoutInMilliseconds,
    toneFrequency,
    useWebAudioApi,
    onError,
    onNativeError,
    audioStreamIndex,
    ...nativeProps
  } = props;
  const _propsValid = true;
  if (!_propsValid) {
    throw new Error("typecheck error");
  }
  if (!src) {
    throw new TypeError("No 'src' was passed to <Html5Audio>.");
  }
  const preloadedSrc = usePreload(src);
  const sequenceContext = (0, import_react71.useContext)(SequenceContext);
  warnAboutTooHighVolume(userPreferredVolume);
  const crossOriginValue = getCrossOriginValue({
    crossOrigin,
    requestsVideoFrame: false,
    isClientSideRendering: false
  });
  const propsToPass = (0, import_react71.useMemo)(() => {
    return {
      muted: isMutedForPlayback,
      src: preloadedSrc,
      loop: _remotionInternalNativeLoopPassed,
      crossOrigin: crossOriginValue,
      ...nativeProps
    };
  }, [
    _remotionInternalNativeLoopPassed,
    isMutedForPlayback,
    nativeProps,
    preloadedSrc,
    crossOriginValue
  ]);
  const id = (0, import_react71.useMemo)(() => `audio-${random2(src ?? "")}-${sequenceContext?.relativeFrom}-${sequenceContext?.cumulatedFrom}-${sequenceContext?.durationInFrames}-muted:${props.muted}-loop:${props.loop}`, [
    src,
    sequenceContext?.relativeFrom,
    sequenceContext?.cumulatedFrom,
    sequenceContext?.durationInFrames,
    props.muted,
    props.loop
  ]);
  const {
    el: audioRef,
    mediaElementSourceNode,
    cleanupOnMediaTagUnmount
  } = useSharedAudio({
    aud: propsToPass,
    audioId: id,
    premounting: Boolean(sequenceContext?.premounting),
    postmounting: Boolean(sequenceContext?.postmounting)
  });
  useMediaPlayback({
    mediaRef: audioRef,
    src,
    mediaType: "audio",
    playbackRate: playbackRate ?? 1,
    preservePitch,
    onlyWarnForMediaSeekingError: false,
    acceptableTimeshift: acceptableTimeShiftInSeconds ?? null,
    isPremounting: Boolean(sequenceContext?.premounting),
    isPostmounting: Boolean(sequenceContext?.postmounting),
    pauseWhenBuffering,
    onAutoPlayError: null
  });
  useMediaTag({
    id: timelineId,
    isPostmounting: Boolean(sequenceContext?.postmounting),
    isPremounting: Boolean(sequenceContext?.premounting),
    mediaRef: audioRef,
    mediaType: "audio",
    onAutoPlayError: null
  });
  useVolume({
    logLevel,
    mediaRef: audioRef,
    source: mediaElementSourceNode,
    volume: userPreferredVolume,
    shouldUseWebAudioApi: useWebAudioApi ?? false
  });
  const effectToUse = import_react71.default.useInsertionEffect ?? import_react71.default.useLayoutEffect;
  effectToUse(() => {
    return scheduleMediaSourceCleanup.bind(null, cleanupOnMediaTagUnmount);
  }, [cleanupOnMediaTagUnmount]);
  (0, import_react71.useImperativeHandle)(ref, () => {
    return audioRef.current;
  }, [audioRef]);
  useMediaDuration(audioRef, onDuration, src, true);
  if (initialShouldPreMountAudioElements) {
    return null;
  }
  const audio = /* @__PURE__ */ (0, import_jsx_runtime29.jsx)("audio", {
    ref: audioRef,
    preload: "metadata",
    crossOrigin: crossOriginValue,
    ...propsToPass
  });
  return audio;
};
var AudioForPreviewContent = (0, import_react71.forwardRef)(AudioForDevelopmentForwardRefFunction);
var AudioForPreviewRefForwardingFunction = (props, ref) => {
  const {
    volume,
    muted,
    playbackRate,
    src,
    name,
    _remotionInternalStack,
    showInTimeline,
    loopVolumeCurveBehavior
  } = props;
  const [timelineId] = (0, import_react71.useState)(() => String(Math.random()));
  const sequenceContext = (0, import_react71.useContext)(SequenceContext);
  const { isStudio } = useRemotionEnvironment();
  const [mediaVolume] = useMediaVolumeState();
  const volumePropFrame = useFrameForVolumeProp(loopVolumeCurveBehavior ?? "repeat");
  const userPreferredVolume = evaluateVolume({
    frame: volumePropFrame,
    volume,
    mediaVolume
  });
  const { isMutedForTimeline, isMutedForPlayback } = useMediaAudioState({
    muted: muted ?? false,
    volume: userPreferredVolume,
    audioEnabled: true
  });
  const getStack = (0, import_react70.useCallback)(() => {
    return _remotionInternalStack ?? null;
  }, [_remotionInternalStack]);
  const { registration } = useMediaInTimelineRegistration({
    src,
    mediaType: "audio",
    playbackRate: playbackRate ?? 1,
    displayName: name ?? null,
    id: timelineId,
    getStack,
    showInTimeline,
    premountDisplay: sequenceContext?.premountDisplay ?? null,
    postmountDisplay: sequenceContext?.postmountDisplay ?? null,
    loopDisplay: void 0,
    documentationLink: "https://www.remotion.dev/docs/html5-audio",
    muted: isMutedForTimeline
  });
  const metadata = (0, import_react71.useMemo)(() => isStudio || registration !== null ? {
    type: "sequence",
    id: timelineId,
    value: registration,
    outlineChildrenRef: null
  } : null, [isStudio, registration, timelineId]);
  return /* @__PURE__ */ (0, import_jsx_runtime29.jsx)(CommittedMetadataProvider, {
    value: null,
    _remotionCommitMetadata: metadata,
    children: /* @__PURE__ */ (0, import_jsx_runtime29.jsx)(SequenceContent, {
      children: /* @__PURE__ */ (0, import_jsx_runtime29.jsx)(AudioForPreviewContent, {
        ...props,
        ref,
        timelineId,
        userPreferredVolume,
        isMutedForPlayback
      })
    })
  });
};
var AudioForPreview = (0, import_react71.forwardRef)(AudioForPreviewRefForwardingFunction);
var AudioForRenderingRefForwardingFunction = (props, ref) => {
  const audioRef = (0, import_react88.useRef)(null);
  const {
    registerRenderAsset,
    unregisterRenderAsset,
    volume: volumeProp,
    playbackRate,
    allowAmplificationDuringRender,
    onDuration,
    toneFrequency,
    _remotionInternalNeedsDurationCalculation,
    _remotionInternalNativeLoopPassed,
    acceptableTimeShiftInSeconds,
    name,
    onNativeError,
    delayRenderRetries,
    delayRenderTimeoutInMilliseconds,
    loopVolumeCurveBehavior,
    pauseWhenBuffering,
    audioStreamIndex,
    preservePitch,
    ...nativeProps
  } = props;
  const absoluteFrame = useTimelinePosition();
  const volumePropFrame = useFrameForVolumeProp(loopVolumeCurveBehavior ?? "repeat");
  const frame = useCurrentFrame();
  const sequenceContext = (0, import_react88.useContext)(SequenceContext);
  const sequencePlaybackRate = sequenceContext?.playbackRate ?? 1;
  const audioStartFrame = (0, import_react88.useContext)(Html5MediaTrimContext);
  const { delayRender, continueRender } = useDelayRender();
  const id = (0, import_react88.useMemo)(() => `audio-${random2(props.src ?? "")}-${sequenceContext?.relativeFrom}-${sequenceContext?.cumulatedFrom}-${sequenceContext?.durationInFrames}`, [
    props.src,
    sequenceContext?.relativeFrom,
    sequenceContext?.cumulatedFrom,
    sequenceContext?.durationInFrames
  ]);
  const volume = evaluateVolume({
    volume: volumeProp,
    frame: volumePropFrame,
    mediaVolume: 1
  });
  warnAboutTooHighVolume(volume);
  const audioEnabled = useAudioEnabled();
  const { shouldUseAudio } = useMediaAudioState({
    muted: props.muted ?? false,
    volume,
    audioEnabled
  });
  (0, import_react88.useImperativeHandle)(ref, () => {
    return audioRef.current;
  }, []);
  (0, import_react88.useEffect)(() => {
    if (!props.src) {
      throw new Error("No src passed");
    }
    if (!shouldUseAudio) {
      return;
    }
    registerRenderAsset({
      type: "audio",
      src: getAbsoluteSrc(props.src),
      id,
      frame: absoluteFrame,
      volume,
      mediaFrame: audioStartFrame + (frame - audioStartFrame) / sequencePlaybackRate,
      playbackRate: (props.playbackRate ?? 1) * sequencePlaybackRate,
      toneFrequency: toneFrequency ?? 1,
      audioStartFrame,
      audioStreamIndex: audioStreamIndex ?? 0,
      preservePitch: preservePitch ?? true
    });
    return () => unregisterRenderAsset(id);
  }, [
    shouldUseAudio,
    props.src,
    registerRenderAsset,
    absoluteFrame,
    id,
    unregisterRenderAsset,
    volume,
    volumePropFrame,
    frame,
    playbackRate,
    props.playbackRate,
    toneFrequency,
    audioStartFrame,
    sequencePlaybackRate,
    audioStreamIndex,
    preservePitch
  ]);
  const { src } = props;
  const needsToRenderAudioTag = ref || _remotionInternalNeedsDurationCalculation;
  (0, import_react88.useLayoutEffect)(() => {
    if (window.process?.env?.NODE_ENV === "test") {
      return;
    }
    if (!needsToRenderAudioTag) {
      return;
    }
    const newHandle = delayRender("Loading <Html5Audio> duration with src=" + src, {
      retries: delayRenderRetries ?? void 0,
      timeoutInMilliseconds: delayRenderTimeoutInMilliseconds ?? void 0
    });
    const { current } = audioRef;
    const didLoad = () => {
      if (current?.duration) {
        onDuration(current.src, current.duration);
      }
      continueRender(newHandle);
    };
    if (current?.duration) {
      onDuration(current.src, current.duration);
      continueRender(newHandle);
    } else {
      current?.addEventListener("loadedmetadata", didLoad, { once: true });
    }
    return () => {
      current?.removeEventListener("loadedmetadata", didLoad);
      continueRender(newHandle);
    };
  }, [
    src,
    onDuration,
    needsToRenderAudioTag,
    delayRenderRetries,
    delayRenderTimeoutInMilliseconds,
    continueRender,
    delayRender
  ]);
  if (!needsToRenderAudioTag) {
    return null;
  }
  return /* @__PURE__ */ (0, import_jsx_runtime30.jsx)("audio", {
    ref: audioRef,
    ...nativeProps,
    onError: onNativeError
  });
};
var MemoAudioForRendering = import_react88.default.memo((0, import_react88.forwardRef)(AudioForRenderingRefForwardingFunction));
var AudioForRendering = (0, import_react88.forwardRef)((props, ref) => {
  const { registerRenderAsset, unregisterRenderAsset } = (0, import_react88.useContext)(RenderAssetManager);
  return /* @__PURE__ */ (0, import_jsx_runtime30.jsx)(MemoAudioForRendering, {
    ...props,
    ref,
    registerRenderAsset,
    unregisterRenderAsset
  });
});
var AudioRefForwardingFunction = (props, ref) => {
  const audioTagsContext = (0, import_react65.useContext)(SharedAudioTagsContext);
  const propsWithFreeze = props;
  const {
    startFrom,
    endAt,
    trimBefore,
    trimAfter,
    durationInFrames,
    name,
    _remotionInternalStack,
    pauseWhenBuffering,
    showInTimeline,
    onError: onRemotionError,
    freeze,
    ...otherProps
  } = propsWithFreeze;
  const { loop, freeze: _freeze2, ...propsOtherThanLoop } = propsWithFreeze;
  const { fps } = useVideoConfig();
  const environment = useRemotionEnvironment();
  const shouldPauseWhenBuffering = resolveV5Default(pauseWhenBuffering);
  if (environment.isClientSideRendering) {
    throw new Error("<Html5Audio> is not supported in @remotion/web-renderer. Use <Audio> from @remotion/media instead. See https://remotion.dev/docs/client-side-rendering/limitations");
  }
  if (typeof freeze !== "undefined") {
    throw new TypeError('The "freeze" prop is not supported on <Html5Audio />. Use <Sequence freeze={...}> to freeze media playback.');
  }
  const { durations, setDurations } = (0, import_react65.useContext)(DurationsContext);
  if (typeof props.src !== "string") {
    throw new TypeError(`The \`<Html5Audio>\` tag requires a string for \`src\`, but got ${JSON.stringify(props.src)} instead.`);
  }
  const preloadedSrc = usePreload(props.src);
  const onError = (0, import_react65.useCallback)((e) => {
    console.log(e.currentTarget.error);
    const errMessage = `Could not play audio with src ${preloadedSrc}: ${e.currentTarget.error}. See https://remotion.dev/docs/media-playback-error for help.`;
    if (loop) {
      if (onRemotionError) {
        onRemotionError(new Error(errMessage));
        return;
      }
      cancelRender(new Error(errMessage));
    } else {
      onRemotionError?.(new Error(errMessage));
      console.warn(errMessage);
    }
  }, [loop, onRemotionError, preloadedSrc]);
  const onDuration = (0, import_react65.useMemo)(() => onMediaDuration.bind(null, setDurations), [setDurations]);
  const durationFetched = durations[getAbsoluteSrc(preloadedSrc)] ?? durations[getAbsoluteSrc(props.src)];
  validateMediaTrimProps({ startFrom, endAt, trimBefore, trimAfter });
  if (durationInFrames !== void 0) {
    validateDurationInFrames(durationInFrames, {
      component: "of the <Html5Audio /> component",
      allowFloats: true
    });
  }
  const { trimBeforeValue, trimAfterValue } = resolveTrimProps({
    startFrom,
    endAt,
    trimBefore,
    trimAfter
  });
  const effectiveTrimAfter = getMediaTrimAfter({
    durationInFrames,
    trimAfter: trimAfterValue,
    trimBefore: trimBeforeValue
  });
  const loopDuration = effectiveTrimAfter ?? (durationFetched === void 0 ? void 0 : durationFetched * fps);
  if (loop && loopDuration !== void 0) {
    if (!Number.isFinite(loopDuration)) {
      return /* @__PURE__ */ (0, import_jsx_runtime31.jsx)(Html5Audio, {
        ...propsOtherThanLoop,
        ref,
        _remotionInternalNativeLoopPassed: true
      });
    }
    return /* @__PURE__ */ (0, import_jsx_runtime31.jsx)(Loop, {
      layout: "none",
      durationInFrames: calculateMediaDuration({
        trimAfter: effectiveTrimAfter,
        mediaDurationInFrames: loopDuration,
        playbackRate: props.playbackRate ?? 1,
        trimBefore: trimBeforeValue
      }),
      children: /* @__PURE__ */ (0, import_jsx_runtime31.jsx)(Html5Audio, {
        ...propsOtherThanLoop,
        ref,
        _remotionInternalNativeLoopPassed: true
      })
    });
  }
  if (typeof trimBeforeValue !== "undefined" || typeof effectiveTrimAfter !== "undefined") {
    return /* @__PURE__ */ (0, import_jsx_runtime31.jsx)(Html5MediaTrimContext.Provider, {
      value: trimBeforeValue ?? 0,
      children: /* @__PURE__ */ (0, import_jsx_runtime31.jsx)(Sequence, {
        layout: "none",
        from: 0 - (trimBeforeValue ?? 0),
        showInTimeline: false,
        durationInFrames: effectiveTrimAfter === void 0 ? void 0 : (trimBeforeValue ?? 0) + (effectiveTrimAfter - (trimBeforeValue ?? 0)) / (props.playbackRate ?? 1),
        name,
        children: /* @__PURE__ */ (0, import_jsx_runtime31.jsx)(Html5Audio, {
          _remotionInternalNeedsDurationCalculation: Boolean(loop),
          pauseWhenBuffering: shouldPauseWhenBuffering,
          ...otherProps,
          ref
        })
      })
    });
  }
  validateMediaProps({
    playbackRate: props.playbackRate,
    preservePitch: props.preservePitch,
    volume: props.volume
  }, "Html5Audio");
  if (environment.isRendering) {
    return /* @__PURE__ */ (0, import_jsx_runtime31.jsx)(AudioForRendering, {
      onDuration,
      ...props,
      ref,
      onNativeError: onError,
      _remotionInternalNeedsDurationCalculation: Boolean(loop)
    });
  }
  return /* @__PURE__ */ (0, import_jsx_runtime31.jsx)(AudioForPreview, {
    _remotionInternalNativeLoopPassed: props._remotionInternalNativeLoopPassed ?? false,
    _remotionInternalStack: _remotionInternalStack ?? null,
    shouldPreMountAudioTags: audioTagsContext !== null && audioTagsContext.numberOfAudioTags > 0,
    ...props,
    ref,
    onNativeError: onError,
    onDuration,
    pauseWhenBuffering: shouldPauseWhenBuffering,
    _remotionInternalNeedsDurationCalculation: Boolean(loop),
    showInTimeline: showInTimeline ?? true
  });
};
var Html5Audio = (0, import_react65.forwardRef)(AudioRefForwardingFunction);
addSequenceStackTraces(Html5Audio);
var resolveSolidPixelDensity = (pixelDensity) => {
  if (pixelDensity === void 0) {
    return 1;
  }
  if (typeof pixelDensity !== "number" || !Number.isFinite(pixelDensity) || pixelDensity <= 0) {
    throw new Error(`<Solid>: \`pixelDensity\` must be a positive finite number. Received: ${String(pixelDensity)}.`);
  }
  return pixelDensity;
};
var solidSchema = {
  ...baseSchema,
  color: {
    type: "color",
    default: "transparent",
    description: "Color"
  },
  width: {
    type: "number",
    min: 1,
    step: 1,
    default: 1920,
    description: "Width",
    hiddenFromList: false
  },
  height: {
    type: "number",
    min: 1,
    step: 1,
    default: 1080,
    description: "Height",
    hiddenFromList: false
  },
  pixelDensity: {
    type: "number",
    min: 1,
    max: 3,
    step: 0.1,
    default: 1,
    description: "Pixel density",
    hiddenFromList: false
  },
  ...transformSchema,
  ...backgroundSchema,
  ...borderSchema,
  ...borderRadiusSchema,
  ...cropSchema
};
var SolidInner = ({
  color,
  width,
  height,
  effects = [],
  effectsOutputSize = null,
  className,
  style,
  pixelDensity,
  overrideId,
  runtimeValues,
  videoConfigValues,
  reference,
  canvasProps
}) => {
  const { delayRender, continueRender, cancelRender: cancelRender2 } = useDelayRender();
  const resolvedPixelDensity = resolveSolidPixelDensity(pixelDensity);
  const canvasWidth = Math.ceil(width * resolvedPixelDensity);
  const canvasHeight = Math.ceil(height * resolvedPixelDensity);
  const [outputCanvas, setOutputCanvas] = (0, import_react89.useState)(null);
  const memoizedEffects = useMemoizedEffects({
    effects,
    overrideId: overrideId ?? null,
    runtimeValues,
    videoConfigValues
  });
  const sourceCanvas = (0, import_react89.useMemo)(() => {
    if (typeof document === "undefined") {
      return null;
    }
    const canvas = document.createElement("canvas");
    canvas.width = 1;
    canvas.height = 1;
    return canvas;
  }, []);
  const chainState = useEffectChainState(effectsOutputSize);
  const canvasRef = (0, import_react89.useCallback)((canvas) => {
    setOutputCanvas(canvas);
    if (typeof reference === "function") {
      reference(canvas);
    } else if (reference) {
      reference.current = canvas;
    }
  }, [reference]);
  (0, import_react89.useEffect)(() => {
    if (!outputCanvas || !sourceCanvas) {
      return;
    }
    const handle = delayRender("Solid effect chain");
    if (!chainState) {
      continueRender(handle);
      return () => {
        continueRender(handle);
      };
    }
    const ctx = sourceCanvas.getContext("2d", { colorSpace: "srgb" });
    if (!ctx) {
      cancelRender2(new Error("Failed to acquire 2D context for <Solid> source"));
      return;
    }
    ctx.clearRect(0, 0, 1, 1);
    if (color !== void 0) {
      ctx.fillStyle = color;
      ctx.fillRect(0, 0, 1, 1);
    }
    runEffectChain({
      state: chainState.get(canvasWidth, canvasHeight),
      source: sourceCanvas,
      effects: memoizedEffects,
      output: outputCanvas,
      width: canvasWidth,
      height: canvasHeight
    }).then((completed) => {
      if (completed) {
        continueRender(handle);
      }
    }).catch((err) => {
      cancelRender2(err);
    });
    return () => {
      continueRender(handle);
    };
  }, [
    color,
    outputCanvas,
    sourceCanvas,
    chainState,
    canvasWidth,
    canvasHeight,
    delayRender,
    continueRender,
    cancelRender2,
    memoizedEffects
  ]);
  const canvasStyle = (0, import_react89.useMemo)(() => {
    return {
      width,
      height,
      ...style ?? {}
    };
  }, [height, style, width]);
  return /* @__PURE__ */ (0, import_jsx_runtime32.jsx)("canvas", {
    ...canvasProps,
    ref: canvasRef,
    width: canvasWidth,
    height: canvasHeight,
    className,
    style: canvasStyle
  });
};
var SolidOuter = (0, import_react89.forwardRef)(({
  effects = [],
  effectsOutputSize = null,
  controls,
  color,
  height,
  width,
  className,
  durationInFrames,
  style,
  name,
  from,
  premountFor,
  postmountFor,
  styleWhilePremounted,
  styleWhilePostmounted,
  trimBefore,
  playbackRate,
  loop,
  freeze,
  hidden,
  showInTimeline,
  pixelDensity,
  cropLeft,
  cropRight,
  cropTop,
  cropBottom,
  ...props
}, ref) => {
  const memoizedEffectDefinitions = useMemoizedEffectDefinitions(effects);
  const actualRef = (0, import_react89.useRef)(null);
  const videoEnabled = useVideoEnabled();
  (0, import_react89.useImperativeHandle)(ref, () => {
    return videoEnabled ? actualRef.current : null;
  }, [videoEnabled]);
  const {
    effectivePremountFor,
    effectivePostmountFor,
    freezeFrame,
    isPremountingOrPostmounting,
    premountingActive,
    postmountingActive,
    premountingStyle
  } = usePremounting({
    from: from ?? 0,
    durationInFrames: resolveSequenceDuration({
      durationInFrames,
      playbackRate,
      loop
    }),
    premountFor: premountFor ?? null,
    postmountFor: postmountFor ?? null,
    style: style ?? null,
    styleWhilePremounted: styleWhilePremounted ?? null,
    styleWhilePostmounted: styleWhilePostmounted ?? null,
    hideWhilePremounted: "opacity"
  });
  const croppedStyle = useCropStyle({
    cropLeft,
    cropRight,
    cropTop,
    cropBottom,
    style: premountingStyle,
    componentName: "<Solid />"
  });
  if (!videoEnabled) {
    return null;
  }
  return /* @__PURE__ */ (0, import_jsx_runtime32.jsx)(Freeze, {
    frame: freezeFrame,
    active: isPremountingOrPostmounting,
    _remotionInternalIsPremounting: premountingActive,
    children: /* @__PURE__ */ (0, import_jsx_runtime32.jsx)(Sequence, {
      layout: "none",
      from,
      trimBefore,
      playbackRate,
      loop,
      freeze,
      hidden,
      showInTimeline,
      controls,
      _remotionInternalEffects: memoizedEffectDefinitions,
      durationInFrames,
      name: name ?? "<Solid>",
      _remotionInternalDocumentationLink: "https://www.remotion.dev/docs/solid",
      ...props,
      _remotionInternalPremountDisplay: effectivePremountFor || null,
      _remotionInternalPostmountDisplay: effectivePostmountFor || null,
      _remotionInternalIsPremounting: premountingActive,
      _remotionInternalIsPostmounting: postmountingActive,
      children: /* @__PURE__ */ (0, import_jsx_runtime32.jsx)(SequenceContent, {
        children: /* @__PURE__ */ (0, import_jsx_runtime32.jsx)(SolidInner, {
          canvasProps: getCanvasPropsFromSequenceProps(props),
          reference: actualRef,
          videoConfigValues: controls?.videoConfigValues ?? null,
          overrideId: controls?.overrideId ?? null,
          runtimeValues: controls?.runtimeValues ?? null,
          color,
          height,
          width,
          className,
          style: croppedStyle ?? void 0,
          effects,
          effectsOutputSize,
          pixelDensity
        })
      })
    })
  });
});
var Solid = withInteractivitySchema({
  Component: SolidOuter,
  componentName: "<Solid>",
  componentIdentity: "dev.remotion.remotion.Solid",
  schema: solidSchema,
  supportsEffects: true
});
Solid.displayName = "Solid";
addSequenceStackTraces(Solid);
var HtmlInCanvasAncestorContext = (0, import_react91.createContext)(null);
var HtmlInCanvasFallback = ({ children, style, label: label2, title = "HTML-in-canvas is not available" }) => {
  const currentScale = useCurrentScale({ dontThrowIfOutsideOfRemotion: true });
  const scale = currentScale > 0 ? currentScale : 1;
  return /* @__PURE__ */ (0, import_jsx_runtime33.jsxs)("div", {
    style: { position: "relative", ...style },
    children: [
      children,
      /* @__PURE__ */ (0, import_jsx_runtime33.jsxs)("div", {
        className: "css-reset",
        style: {
          position: "absolute",
          top: 8 / scale,
          right: 8 / scale,
          zIndex: 1e3,
          transform: `scale(${1 / scale})`,
          transformOrigin: "top right",
          maxWidth: `calc(${scale * 100}% - 16px)`,
          padding: "8px 10px",
          borderRadius: 6,
          border: "1px solid #7f3540",
          backgroundColor: "#2b171c",
          boxShadow: "0 2px 8px #0003",
          pointerEvents: "none",
          textAlign: "left"
        },
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime33.jsx)("div", {
            style: {
              fontFamily: "Arial, Helvetica, sans-serif",
              fontSize: 12,
              fontWeight: 600,
              lineHeight: 1.5,
              color: "#ffabb5"
            },
            children: title
          }),
          /* @__PURE__ */ (0, import_jsx_runtime33.jsx)("div", {
            style: {
              fontFamily: "Arial, Helvetica, sans-serif",
              fontSize: 11,
              fontWeight: 400,
              lineHeight: 1.5,
              color: "#e8bdc3"
            },
            children: label2
          })
        ]
      })
    ]
  });
};
var transferredOffscreenCanvases = /* @__PURE__ */ new WeakMap();
var getTransferredOffscreenCanvas = (canvas) => {
  const existing = transferredOffscreenCanvases.get(canvas);
  if (existing) {
    return existing;
  }
  const offscreen = canvas.transferControlToOffscreen();
  transferredOffscreenCanvases.set(canvas, offscreen);
  return offscreen;
};
var cachedSupport = null;
var isHtmlInCanvasSupported = () => {
  if (cachedSupport !== null) {
    return cachedSupport;
  }
  if (typeof document === "undefined") {
    return false;
  }
  const canvas = document.createElement("canvas");
  const ctx = canvas.getContext("2d");
  cachedSupport = typeof ctx?.drawElementImage === "function" && typeof canvas.requestPaint === "function" && typeof canvas.captureElementImage === "function" && "transferControlToOffscreen" in HTMLCanvasElement.prototype;
  return cachedSupport;
};
var MINIMUM_CHROME_VERSION_FOR_NESTED_HTML_IN_CANVAS = 157;
var isHtmlInCanvasNestingSupported = () => {
  if (!isHtmlInCanvasSupported() || typeof navigator === "undefined") {
    return false;
  }
  const chromeVersion = navigator.userAgent.match(/(?:Chrome|Chromium)\/(\d+)/)?.[1];
  return chromeVersion !== void 0 && Number(chromeVersion) >= MINIMUM_CHROME_VERSION_FOR_NESTED_HTML_IN_CANVAS;
};
var HTML_IN_CANVAS_UNSUPPORTED_MESSAGE = "HTML in Canvas requires Chrome 149 or newer with Canvas Draw Element enabled at chrome://flags/#canvas-draw-element.";
var getHtmlInCanvasUnsupportedMessage = () => {
  if (typeof document === "undefined") {
    return `HTML in Canvas is unavailable because there is no browser document. ${HTML_IN_CANVAS_UNSUPPORTED_MESSAGE}`;
  }
  const userAgent = typeof navigator === "undefined" ? "" : navigator.userAgent;
  const chromiumVersion = userAgent.match(/(?:Chrome|Chromium)\/(\d+)/)?.[1];
  let browser = "this browser";
  if (userAgent.includes("Edg/")) {
    browser = "Microsoft Edge";
  } else if (userAgent.includes("Chromium/")) {
    browser = "Chromium";
  } else if (chromiumVersion) {
    browser = "Chrome";
  } else if (userAgent.includes("Firefox/")) {
    browser = "Firefox";
  } else if (userAgent.includes("Safari/")) {
    browser = "Safari";
  }
  if (chromiumVersion && Number(chromiumVersion) >= 149) {
    const flagUrl = browser === "Microsoft Edge" ? "edge://flags/#canvas-draw-element" : "chrome://flags/#canvas-draw-element";
    return `HTML in Canvas is unavailable. Enable Canvas Draw Element at ${flagUrl} and fully restart ${browser}.`;
  }
  if (chromiumVersion) {
    return `HTML in Canvas is not supported in ${browser} ${chromiumVersion}. Use a Chromium-based browser running version 149 or newer.`;
  }
  return `HTML in Canvas is not supported in ${browser}. Use Chrome 149 or newer.`;
};
function assertHtmlInCanvasDimensions(width, height) {
  if (typeof width !== "number" || typeof height !== "number") {
    throw new Error(`HtmlInCanvas: \`width\` and \`height\` must be numbers. Received width=${String(width)}, height=${String(height)}.`);
  }
  if (!Number.isInteger(width) || width <= 0) {
    throw new Error(`HtmlInCanvas: \`width\` must be a positive integer. Received: ${String(width)}.`);
  }
  if (!Number.isInteger(height) || height <= 0) {
    throw new Error(`HtmlInCanvas: \`height\` must be a positive integer. Received: ${String(height)}.`);
  }
}
function resolveHtmlInCanvasPixelDensity(pixelDensity) {
  if (pixelDensity === void 0) {
    return 1;
  }
  if (typeof pixelDensity !== "number" || !Number.isFinite(pixelDensity) || pixelDensity <= 0) {
    throw new Error(`HtmlInCanvas: \`pixelDensity\` must be a positive finite number. Received: ${String(pixelDensity)}.`);
  }
  return pixelDensity;
}
var isMissingPaintRecordError = (error2) => {
  return error2 instanceof DOMException && error2.name === "InvalidStateError";
};
var missingPaintRecordMessage = "HtmlInCanvas: Expected the element to be inside the viewport during rendering, but Chrome had no cached paint record for it.";
var resizePaintTarget = ({
  target,
  width,
  height
}) => {
  if (target.width !== width) {
    target.width = width;
  }
  if (target.height !== height) {
    target.height = height;
  }
};
var defaultOnPaint = ({
  canvas,
  elementImage
}) => {
  const ctx = canvas.getContext("2d");
  if (!ctx) {
    throw new Error("Failed to acquire 2D context for <HtmlInCanvas> canvas");
  }
  ctx.reset();
  ctx.drawElementImage(elementImage, 0, 0);
};
var useHtmlInCanvasUnsupportedMessage = () => {
  const ancestorPaintState = (0, import_react90.useContext)(HtmlInCanvasAncestorContext);
  if (!isHtmlInCanvasSupported()) {
    return getHtmlInCanvasUnsupportedMessage();
  }
  if (ancestorPaintState && !isHtmlInCanvasNestingSupported()) {
    return `Nested <HtmlInCanvas> components require Chrome ${MINIMUM_CHROME_VERSION_FOR_NESTED_HTML_IN_CANVAS} or newer with HTML-in-canvas enabled.`;
  }
  return null;
};
var HtmlInCanvasContent = (0, import_react90.forwardRef)(({
  width,
  height,
  effects,
  effectsOutputSize,
  children,
  canvasSiblings,
  onPaint,
  onInit,
  pixelDensity,
  controls,
  style,
  renderFrame
}, ref) => {
  const ancestorPaintState = (0, import_react90.useContext)(HtmlInCanvasAncestorContext);
  assertHtmlInCanvasDimensions(width, height);
  if (ancestorPaintState && !isHtmlInCanvasNestingSupported()) {
    throw new Error(`Nested <HtmlInCanvas> components require Chrome ${MINIMUM_CHROME_VERSION_FOR_NESTED_HTML_IN_CANVAS} or newer with HTML-in-canvas enabled.`);
  }
  const resolvedPixelDensity = resolveHtmlInCanvasPixelDensity(pixelDensity);
  const canvasWidth = Math.ceil(width * resolvedPixelDensity);
  const canvasHeight = Math.ceil(height * resolvedPixelDensity);
  const canvasSizeKey = `${canvasWidth}x${canvasHeight}@${resolvedPixelDensity}`;
  const committedCanvasSizeRef = (0, import_react90.useRef)(canvasSizeKey);
  const { delayRender, continueRender, cancelRender: cancelRender2 } = useDelayRender();
  const { isClientSideRendering, isRendering } = useRemotionEnvironment();
  const canRetryMissingPaintRecord = !isRendering || isClientSideRendering;
  const usesDirectLayoutCanvas = onPaint === void 0 && onInit === void 0;
  const paintTargetMode = ancestorPaintState ? "copied" : usesDirectLayoutCanvas ? "direct" : isRendering ? "copied" : "transferred";
  if (!isHtmlInCanvasSupported()) {
    cancelRender2(new Error(getHtmlInCanvasUnsupportedMessage()));
  }
  const canvas2dRef = (0, import_react90.useRef)(null);
  const outputCanvasRef = (0, import_react90.useRef)(null);
  const paintTargetRef = (0, import_react90.useRef)(null);
  const divRef = (0, import_react90.useRef)(null);
  const paintState = (0, import_react90.useMemo)(() => {
    const state = {
      pendingChildren: 0,
      generation: 0,
      release: null,
      blockPaint: () => {
        state.pendingChildren++;
        state.generation++;
        if (state.release === null) {
          const handle = delayRender("waiting for nested HtmlInCanvas paint");
          const releaseAncestor = ancestorPaintState?.blockPaint();
          state.release = () => {
            continueRender(handle);
            releaseAncestor?.();
          };
        }
        let released = false;
        return () => {
          if (released) {
            return;
          }
          released = true;
          state.pendingChildren--;
          if (state.pendingChildren === 0) {
            canvas2dRef.current?.requestPaint?.();
          }
        };
      }
    };
    return state;
  }, [continueRender, delayRender, ancestorPaintState]);
  const setVisibleCanvasRef = (0, import_react90.useCallback)((node) => {
    if (paintTargetMode === "copied") {
      outputCanvasRef.current = node;
    } else {
      canvas2dRef.current = node;
    }
    if (typeof ref === "function") {
      ref(node);
    } else if (ref) {
      ref.current = node;
    }
  }, [ref, paintTargetMode]);
  const chainState = useEffectChainState(effectsOutputSize);
  const memoizedEffects = useMemoizedEffects({
    effects,
    overrideId: controls?.overrideId ?? null,
    runtimeValues: controls?.runtimeValues ?? null,
    videoConfigValues: controls?.videoConfigValues ?? null
  });
  const effectsRef = (0, import_react90.useRef)(memoizedEffects);
  effectsRef.current = memoizedEffects;
  const onPaintRef = (0, import_react90.useRef)(onPaint);
  onPaintRef.current = onPaint;
  const onInitRef = (0, import_react90.useRef)(onInit);
  onInitRef.current = onInit;
  const initializedSizeRef = (0, import_react90.useRef)(null);
  const onInitCleanupRef = (0, import_react90.useRef)(null);
  const unmountedRef = (0, import_react90.useRef)(false);
  const effectScratchCanvasesRef = (0, import_react90.useRef)(null);
  const resizeSnapshotRef = (0, import_react90.useRef)(null);
  const paintingTargets = (0, import_react90.useRef)(/* @__PURE__ */ new WeakMap());
  const onPaintCb = (0, import_react90.useCallback)(async () => {
    if (isRendering && paintState.pendingChildren > 0) {
      return;
    }
    const childrenGeneration = paintState.generation;
    const element = divRef.current;
    if (!element) {
      throw new Error("Canvas or scene element not found");
    }
    const paintTarget = paintTargetRef.current;
    if (!paintTarget) {
      throw new Error("HtmlInCanvas: paint target is not ready because the canvas is remounting");
    }
    const inProgress = paintingTargets.current.get(paintTarget);
    const serializePaint = isRendering || onInitRef.current !== void 0;
    if (serializePaint && inProgress) {
      inProgress.repaint = true;
      return;
    }
    const painting = { repaint: false };
    if (serializePaint) {
      paintingTargets.current.set(paintTarget, painting);
    }
    resizePaintTarget({
      target: paintTarget,
      width: canvasWidth,
      height: canvasHeight
    });
    const releaseAncestor = isRendering ? ancestorPaintState?.blockPaint() : null;
    let canReleasePaint = false;
    try {
      const placeholderCanvas = canvas2dRef.current;
      if (!placeholderCanvas) {
        throw new Error("Canvas not found");
      }
      const outputCanvas = outputCanvasRef.current;
      const handle = delayRender("onPaint");
      if (initializedSizeRef.current !== canvasSizeKey) {
        onInitCleanupRef.current?.();
        onInitCleanupRef.current = null;
        initializedSizeRef.current = null;
        const currentOnInit = onInitRef.current;
        if (!currentOnInit) {
          initializedSizeRef.current = canvasSizeKey;
        } else {
          let initImage;
          try {
            initImage = placeholderCanvas.captureElementImage(element);
          } catch (error2) {
            if (isMissingPaintRecordError(error2) && canRetryMissingPaintRecord) {
              canReleasePaint = true;
              continueRender(handle);
              return;
            }
            if (isMissingPaintRecordError(error2)) {
              throw new Error(missingPaintRecordMessage);
            }
            throw error2;
          }
          initializedSizeRef.current = canvasSizeKey;
          try {
            if (paintTarget instanceof HTMLCanvasElement) {
              throw new Error("HtmlInCanvas: onInit requires an OffscreenCanvas paint target");
            }
            const cleanup = await currentOnInit({
              canvas: paintTarget,
              element,
              elementImage: initImage,
              pixelDensity: resolvedPixelDensity
            });
            if (typeof cleanup !== "function") {
              throw new Error("HtmlInCanvas: when `onInit` is provided, it must return a cleanup function, or a Promise that resolves to one.");
            }
            if (unmountedRef.current || paintTargetRef.current !== paintTarget || committedCanvasSizeRef.current !== canvasSizeKey) {
              cleanup();
              if (paintTargetRef.current === paintTarget) {
                initializedSizeRef.current = null;
              }
              painting.repaint = true;
              continueRender(handle);
              return;
            }
            onInitCleanupRef.current = cleanup;
          } finally {
            initImage.close();
          }
        }
      }
      let elImage;
      try {
        elImage = placeholderCanvas.captureElementImage(element);
      } catch (error2) {
        if (isMissingPaintRecordError(error2) && canRetryMissingPaintRecord) {
          canReleasePaint = true;
          continueRender(handle);
          return;
        }
        if (isMissingPaintRecordError(error2)) {
          throw new Error(missingPaintRecordMessage);
        }
        throw error2;
      }
      let effectSourceCanvas = null;
      try {
        const currentOnPaint = onPaintRef.current;
        if (currentOnPaint) {
          if (paintTarget instanceof HTMLCanvasElement) {
            throw new Error("HtmlInCanvas: onPaint requires an OffscreenCanvas paint target");
          }
          const paintResult = currentOnPaint({
            canvas: paintTarget,
            element,
            elementImage: elImage,
            pixelDensity: resolvedPixelDensity
          });
          if (paintResult) {
            await paintResult;
          }
          if (committedCanvasSizeRef.current !== canvasSizeKey) {
            painting.repaint = true;
            continueRender(handle);
            return;
          }
        } else if (paintTarget instanceof HTMLCanvasElement && effectsRef.current.some((effect) => !effect.params.disabled)) {
          effectScratchCanvasesRef.current ?? (effectScratchCanvasesRef.current = {
            source: document.createElement("canvas"),
            previousOutput: document.createElement("canvas")
          });
          const { source: effectSource, previousOutput } = effectScratchCanvasesRef.current;
          resizePaintTarget({
            target: effectSource,
            width: canvasWidth,
            height: canvasHeight
          });
          resizePaintTarget({
            target: previousOutput,
            width: canvasWidth,
            height: canvasHeight
          });
          const effectSourceCtx = effectSource.getContext("2d");
          const previousOutputCtx = previousOutput.getContext("2d");
          const paintTargetCtx = paintTarget.getContext("2d");
          if (!effectSourceCtx || !previousOutputCtx || !paintTargetCtx) {
            throw new Error("Failed to acquire 2D context for <HtmlInCanvas> canvas");
          }
          previousOutputCtx.reset();
          previousOutputCtx.drawImage(paintTarget, 0, 0);
          defaultOnPaint({
            canvas: paintTarget,
            element,
            elementImage: elImage,
            pixelDensity: resolvedPixelDensity
          });
          effectSourceCtx.reset();
          effectSourceCtx.drawImage(paintTarget, 0, 0);
          paintTargetCtx.reset();
          paintTargetCtx.drawImage(previousOutput, 0, 0);
          effectSourceCanvas = effectSource;
        } else {
          defaultOnPaint({
            canvas: paintTarget,
            element,
            elementImage: elImage,
            pixelDensity: resolvedPixelDensity
          });
        }
        const state = chainState.get(canvasWidth, canvasHeight);
        if (state) {
          await runEffectChain({
            state,
            source: effectSourceCanvas ?? paintTarget,
            effects: effectsRef.current,
            output: paintTarget,
            width: canvasWidth,
            height: canvasHeight
          });
        }
      } finally {
        elImage.close();
      }
      if (paintTargetMode === "copied" && paintTargetRef.current === paintTarget && outputCanvas) {
        const ctx = outputCanvas.getContext("2d");
        if (!ctx) {
          throw new Error("HtmlInCanvas: could not get layout canvas context");
        }
        ctx.reset();
        ctx.drawImage(paintTarget, 0, 0);
      }
      canReleasePaint = true;
      continueRender(handle);
    } catch (error2) {
      cancelRender2(error2);
    } finally {
      if (canReleasePaint && paintState.pendingChildren === 0 && paintState.generation === childrenGeneration) {
        const { release: release2 } = paintState;
        paintState.release = null;
        release2?.();
      }
      releaseAncestor?.();
      paintingTargets.current.delete(paintTarget);
      if (painting.repaint && paintTargetRef.current === paintTarget) {
        canvas2dRef.current?.requestPaint?.();
      }
    }
  }, [
    canvasHeight,
    canvasWidth,
    canvasSizeKey,
    chainState,
    continueRender,
    cancelRender2,
    delayRender,
    resolvedPixelDensity,
    canRetryMissingPaintRecord,
    paintTargetMode,
    isRendering,
    paintState,
    ancestorPaintState
  ]);
  (0, import_react90.useLayoutEffect)(() => {
    return () => {
      paintState.release?.();
      paintState.release = null;
    };
  }, [paintState]);
  (0, import_react90.useLayoutEffect)(() => {
    const placeholder = canvas2dRef.current;
    if (!placeholder) {
      throw new Error("Canvas not found");
    }
    placeholder.setAttribute("content", "drawable");
    placeholder.layoutSubtree = true;
    divRef.current?.setAttribute("drawable", "");
    const paintTarget = paintTargetMode === "direct" ? placeholder : getTransferredOffscreenCanvas(placeholder);
    paintTargetRef.current = paintTarget;
    initializedSizeRef.current = null;
    unmountedRef.current = false;
    return () => {
      paintTargetRef.current = null;
      initializedSizeRef.current = null;
      unmountedRef.current = true;
      onInitCleanupRef.current?.();
      onInitCleanupRef.current = null;
    };
  }, [paintTargetMode]);
  (0, import_react90.useLayoutEffect)(() => {
    committedCanvasSizeRef.current = canvasSizeKey;
    const paintTarget = paintTargetRef.current;
    let snapshot3 = null;
    if (paintTargetMode === "direct" && (paintTarget.width !== canvasWidth || paintTarget.height !== canvasHeight)) {
      resizeSnapshotRef.current ?? (resizeSnapshotRef.current = document.createElement("canvas"));
      snapshot3 = resizeSnapshotRef.current;
      resizePaintTarget({
        target: snapshot3,
        width: paintTarget.width,
        height: paintTarget.height
      });
      const context = snapshot3.getContext("2d");
      if (!context) {
        throw new Error("Failed to acquire 2D context for canvas resize");
      }
      context.reset();
      context.drawImage(paintTarget, 0, 0);
    }
    resizePaintTarget({
      target: paintTarget,
      width: canvasWidth,
      height: canvasHeight
    });
    if (snapshot3) {
      const context = paintTarget.getContext("2d");
      if (!context) {
        throw new Error("Failed to acquire 2D context for canvas resize");
      }
      context.drawImage(snapshot3, 0, 0, canvasWidth, canvasHeight);
    }
  }, [canvasWidth, canvasHeight, canvasSizeKey, paintTargetMode]);
  (0, import_react90.useLayoutEffect)(() => {
    const placeholder = canvas2dRef.current;
    placeholder.addEventListener("paint", onPaintCb);
    return () => {
      placeholder.removeEventListener("paint", onPaintCb);
    };
  }, [onPaintCb, paintTargetMode]);
  const onPaintChangedRef = (0, import_react90.useRef)(false);
  (0, import_react90.useLayoutEffect)(() => {
    if (!onPaintChangedRef.current) {
      onPaintChangedRef.current = true;
      return;
    }
    const canvas = canvas2dRef.current;
    if (!canvas) {
      return;
    }
    canvas.requestPaint?.();
  }, [onPaint, memoizedEffects]);
  (0, import_react90.useLayoutEffect)(() => {
    const canvas = canvas2dRef.current;
    if (!canvas) {
      return;
    }
    const handle = delayRender("waiting for HtmlInCanvas paint");
    const releaseAncestor = isRendering ? ancestorPaintState?.blockPaint() : null;
    const onPainted = () => {
      continueRender(handle);
      releaseAncestor?.();
    };
    canvas.addEventListener("paint", onPainted, { once: true });
    canvas.requestPaint?.();
    return () => {
      canvas.removeEventListener("paint", onPainted);
      onPainted();
    };
  }, [
    width,
    height,
    continueRender,
    delayRender,
    canvasWidth,
    canvasHeight,
    canvasSizeKey,
    paintTargetMode,
    renderFrame,
    isRendering,
    ancestorPaintState
  ]);
  const innerStyle = (0, import_react90.useMemo)(() => {
    return {
      width,
      height
    };
  }, [width, height]);
  const canvasStyle = (0, import_react90.useMemo)(() => {
    return {
      width,
      height,
      ...style ?? {}
    };
  }, [height, style, width]);
  return /* @__PURE__ */ (0, import_jsx_runtime34.jsxs)(HtmlInCanvasAncestorContext.Provider, {
    value: paintState,
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime34.jsx)("canvas", {
        ref: paintTargetMode === "copied" ? canvas2dRef : setVisibleCanvasRef,
        style: paintTargetMode === "copied" ? {
          ...canvasStyle,
          position: "absolute",
          visibility: "hidden",
          pointerEvents: "none"
        } : canvasStyle,
        children: /* @__PURE__ */ (0, import_jsx_runtime34.jsxs)(DefaultPremountContext.Provider, {
          value: 0,
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime34.jsx)("div", {
              ref: divRef,
              style: paintTargetMode === "copied" ? { ...innerStyle, visibility: "visible" } : innerStyle,
              children
            }),
            canvasSiblings
          ]
        })
      }, paintTargetMode),
      paintTargetMode === "copied" ? /* @__PURE__ */ (0, import_jsx_runtime34.jsx)("canvas", {
        ref: setVisibleCanvasRef,
        width: canvasWidth,
        height: canvasHeight,
        style: canvasStyle
      }, "output") : null
    ]
  });
});
HtmlInCanvasContent.displayName = "HtmlInCanvasContent";
var HtmlInCanvasContentForRendering = (0, import_react90.forwardRef)((props, ref) => {
  const frame = useCurrentFrame();
  return /* @__PURE__ */ (0, import_jsx_runtime34.jsx)(HtmlInCanvasContent, {
    ...props,
    ref,
    renderFrame: frame
  });
});
HtmlInCanvasContentForRendering.displayName = "HtmlInCanvasContentForRendering";
var HtmlInCanvasInner = (0, import_react90.forwardRef)(({
  width,
  height,
  effects = [],
  effectsOutputSize,
  children,
  onPaint,
  onInit,
  pixelDensity,
  _remotionInternalCanvasSiblings,
  _remotionInternalFallbackLabel = "Effects are not visible",
  controls,
  style,
  cropLeft,
  cropRight,
  cropTop,
  cropBottom,
  durationInFrames,
  premountFor,
  postmountFor,
  styleWhilePremounted,
  styleWhilePostmounted,
  name,
  ...sequenceProps
}, ref) => {
  const { isRendering } = useRemotionEnvironment();
  const videoEnabled = useVideoEnabled();
  const unsupportedMessage = useHtmlInCanvasUnsupportedMessage();
  const ancestorPaintState = (0, import_react90.useContext)(HtmlInCanvasAncestorContext);
  const isNestedUnsupported = Boolean(ancestorPaintState && !isHtmlInCanvasNestingSupported());
  assertHtmlInCanvasDimensions(width, height);
  resolveHtmlInCanvasPixelDensity(pixelDensity);
  const Content = isRendering ? HtmlInCanvasContentForRendering : HtmlInCanvasContent;
  const memoizedEffectDefinitions = useMemoizedEffectDefinitions(effects);
  const actualRef = (0, import_react90.useRef)(null);
  const setCanvasRef2 = (0, import_react90.useCallback)((node) => {
    actualRef.current = node;
    if (typeof ref === "function") {
      ref(node);
    } else if (ref) {
      ref.current = node;
    }
  }, [ref]);
  const {
    effectivePremountFor,
    effectivePostmountFor,
    freezeFrame,
    isPremountingOrPostmounting,
    premountingActive,
    postmountingActive,
    premountingStyle
  } = usePremounting({
    from: sequenceProps.from ?? 0,
    durationInFrames: resolveSequenceDuration({
      durationInFrames,
      playbackRate: sequenceProps.playbackRate,
      loop: sequenceProps.loop
    }),
    premountFor: premountFor ?? null,
    postmountFor: postmountFor ?? null,
    style: style ?? null,
    styleWhilePremounted: styleWhilePremounted ?? null,
    styleWhilePostmounted: styleWhilePostmounted ?? null,
    hideWhilePremounted: "opacity"
  });
  const croppedStyle = useCropStyle({
    cropLeft,
    cropRight,
    cropTop,
    cropBottom,
    style: premountingStyle,
    componentName: "<HtmlInCanvas />"
  });
  return /* @__PURE__ */ (0, import_jsx_runtime34.jsx)(Freeze, {
    frame: freezeFrame,
    active: isPremountingOrPostmounting,
    _remotionInternalIsPremounting: premountingActive,
    children: /* @__PURE__ */ (0, import_jsx_runtime34.jsx)(Sequence, {
      layout: "none",
      durationInFrames,
      name: name ?? "<HtmlInCanvas>",
      _remotionInternalDocumentationLink: "https://www.remotion.dev/docs/remotion/html-in-canvas",
      controls,
      _remotionInternalEffects: memoizedEffectDefinitions,
      ...sequenceProps,
      _remotionInternalPremountDisplay: effectivePremountFor || null,
      _remotionInternalPostmountDisplay: effectivePostmountFor || null,
      _remotionInternalIsPremounting: premountingActive,
      _remotionInternalIsPostmounting: postmountingActive,
      children: !videoEnabled ? /* @__PURE__ */ (0, import_jsx_runtime34.jsx)(DefaultPremountContext.Provider, {
        value: 0,
        children
      }) : !isRendering && unsupportedMessage !== null ? /* @__PURE__ */ (0, import_jsx_runtime34.jsx)(HtmlInCanvasFallback, {
        style: { width, height, ...croppedStyle },
        title: isNestedUnsupported ? "Nested HTML-in-canvas is unavailable" : "HTML-in-canvas is not available",
        label: _remotionInternalFallbackLabel,
        children: /* @__PURE__ */ (0, import_jsx_runtime34.jsx)(DefaultPremountContext.Provider, {
          value: 0,
          children: /* @__PURE__ */ (0, import_jsx_runtime34.jsx)("div", {
            style: { width, height },
            children
          })
        })
      }) : /* @__PURE__ */ (0, import_jsx_runtime34.jsx)(Content, {
        ref: setCanvasRef2,
        renderFrame: null,
        width,
        height,
        effects,
        effectsOutputSize: effectsOutputSize ?? null,
        onPaint,
        onInit,
        pixelDensity,
        canvasSiblings: _remotionInternalCanvasSiblings ?? null,
        controls,
        style: croppedStyle ?? void 0,
        children
      })
    })
  });
});
HtmlInCanvasInner.displayName = "HtmlInCanvas";
var htmlInCanvasSchema = {
  ...baseSchema,
  pixelDensity: {
    type: "number",
    min: 1,
    max: 3,
    step: 0.1,
    default: 1,
    description: "Pixel density",
    hiddenFromList: false
  },
  ...transformSchema,
  ...backgroundSchema,
  ...borderSchema,
  ...borderRadiusSchema,
  ...cropSchema
};
var HtmlInCanvasWrapped = withInteractivitySchema({
  Component: HtmlInCanvasInner,
  componentName: "<HtmlInCanvas>",
  componentIdentity: "dev.remotion.remotion.HtmlInCanvas",
  schema: htmlInCanvasSchema,
  supportsEffects: true
});
var HtmlInCanvas = Object.assign(HtmlInCanvasWrapped, {
  isSupported: isHtmlInCanvasSupported,
  isNestingSupported: isHtmlInCanvasNestingSupported
});
HtmlInCanvas.displayName = "HtmlInCanvas";
addSequenceStackTraces(HtmlInCanvas);
function truncateSrcForLabel(src) {
  if (typeof src !== "string") {
    return String(src);
  }
  if (src.length > 100 && (src.startsWith("data:") || src.startsWith("blob:"))) {
    return src.slice(0, 60) + "...[" + src.length + " chars total]";
  }
  return src;
}
var canvasImageLoadReducer = (state, event) => {
  switch (event.type) {
    case "load-started":
      return state.type === "loading" ? state : { type: "loading" };
    case "image-decoded":
      return { type: "applying-effects", image: event.image };
    case "presented":
      return state.type === "applying-effects" ? { type: "ready", image: state.image } : state;
    case "load-failed":
      return state.type === "loading" ? { type: "load-failed" } : state;
    default:
      throw new Error("Unknown event " + JSON.stringify(event));
  }
};
var canvasImageSchema = {
  src: {
    type: "asset",
    assetType: "image",
    default: void 0,
    description: "Source",
    keyframable: false
  },
  ...baseSchemaWithoutPlaybackRate,
  ...cropSchema,
  fit: {
    type: "enum",
    default: "fill",
    description: "Fit",
    variants: {
      fill: {},
      contain: {},
      cover: {}
    }
  },
  ...transformSchema,
  ...backgroundSchema,
  ...borderSchema,
  ...borderRadiusSchema
};
var releaseLoadDelay = (pendingLoadHandleRef, continueRender) => {
  const handle = pendingLoadHandleRef.current;
  if (handle === null) {
    return;
  }
  pendingLoadHandleRef.current = null;
  continueRender(handle);
};
var setCanvasRef = (setOutputCanvas, ref, canvas) => {
  setOutputCanvas(canvas);
  if (typeof ref === "function") {
    ref(canvas);
  } else if (ref) {
    ref.current = canvas;
  }
};
var makeAbortError = () => {
  if (typeof DOMException !== "undefined") {
    return new DOMException("Image loading was aborted", "AbortError");
  }
  const error2 = new Error("Image loading was aborted");
  error2.name = "AbortError";
  return error2;
};
var loadImage = ({
  src,
  signal,
  crossOrigin
}) => {
  return new Promise((resolve, reject) => {
    const image = new Image();
    let settled = false;
    function cleanup() {
      image.onload = null;
      image.onerror = null;
    }
    function settle(callback) {
      if (settled) {
        return;
      }
      settled = true;
      cleanup();
      callback();
    }
    function onAbort() {
      settle(() => reject(makeAbortError()));
    }
    image.onload = () => {
      Promise.resolve(image.decode?.()).catch(() => {
        return;
      }).then(() => {
        const imageWidth = image.naturalWidth || image.width;
        const imageHeight = image.naturalHeight || image.height;
        if (imageWidth <= 0 || imageHeight <= 0) {
          settle(() => reject(new Error(`Could not determine dimensions for <CanvasImage> with src="${truncateSrcForLabel(src)}"`)));
          return;
        }
        settle(() => resolve({ element: image, width: imageWidth, height: imageHeight }));
      });
    };
    image.onerror = () => {
      settle(() => reject(new Error(`Could not load <CanvasImage> with src="${truncateSrcForLabel(src)}"`)));
    };
    signal.addEventListener("abort", onAbort, { once: true });
    if (signal.aborted) {
      onAbort();
      return;
    }
    image.crossOrigin = crossOrigin || "anonymous";
    image.src = src;
  });
};
function exponentialBackoff(errorCount) {
  return 1e3 * 2 ** (errorCount - 1);
}
var waitForNextFrame = ({
  onFrame
}) => {
  if (typeof requestAnimationFrame === "undefined") {
    onFrame();
    return () => {
      return;
    };
  }
  const frame = requestAnimationFrame(onFrame);
  return () => cancelAnimationFrame(frame);
};
var CanvasImageContent = (0, import_react92.forwardRef)(({
  src,
  crossOrigin,
  width,
  height,
  fit = "fill",
  effects,
  effectsOutputSize,
  controls,
  onError,
  className,
  style,
  id,
  pauseWhenLoading,
  maxRetries = 2,
  delayRenderRetries,
  delayRenderTimeoutInMilliseconds,
  ...canvasProps
}, ref) => {
  const { delayRender, continueRender, cancelRender: cancelRender2 } = useDelayRender();
  const { delayPlayback } = useBufferState();
  const [outputCanvas, setOutputCanvas] = (0, import_react92.useState)(null);
  const [loadState, dispatchLoad] = (0, import_react92.useReducer)(canvasImageLoadReducer, {
    type: "idle"
  });
  const loadedImage = loadState.type === "applying-effects" || loadState.type === "ready" ? loadState.image : null;
  const isLoadPending = loadState.type === "loading" || loadState.type === "applying-effects";
  const onErrorRef = (0, import_react92.useRef)(onError);
  onErrorRef.current = onError;
  const actualSrc = usePreload(src);
  const chainState = useEffectChainState(effectsOutputSize);
  const memoizedEffects = useMemoizedEffects({
    effects,
    overrideId: controls?.overrideId ?? null,
    runtimeValues: controls?.runtimeValues ?? null,
    videoConfigValues: controls?.videoConfigValues ?? null
  });
  const sequenceContext = (0, import_react92.useContext)(SequenceContext);
  const pendingLoadHandleRef = (0, import_react92.useRef)(null);
  const isPremounting = Boolean(sequenceContext?.premounting);
  const isPostmounting = Boolean(sequenceContext?.postmounting);
  const releasePendingLoadDelay = (0, import_react92.useMemo)(() => releaseLoadDelay.bind(null, pendingLoadHandleRef, continueRender), [continueRender]);
  const sourceCanvas = (0, import_react92.useMemo)(() => {
    if (typeof document === "undefined") {
      return null;
    }
    return document.createElement("canvas");
  }, []);
  const canvasRef = (0, import_react92.useMemo)(() => setCanvasRef.bind(null, setOutputCanvas, ref), [ref]);
  (0, import_react92.useLayoutEffect)(() => {
    if (!pauseWhenLoading || !isLoadPending || isPremounting || isPostmounting) {
      return;
    }
    return delayPlayback().unblock;
  }, [
    delayPlayback,
    isLoadPending,
    isPostmounting,
    isPremounting,
    pauseWhenLoading
  ]);
  (0, import_react92.useLayoutEffect)(() => {
    const handle = delayRender(`Rendering <CanvasImage> with src="${truncateSrcForLabel(actualSrc)}"`, {
      retries: delayRenderRetries ?? void 0,
      timeoutInMilliseconds: delayRenderTimeoutInMilliseconds ?? void 0
    });
    const controller = new AbortController();
    let cancelled = false;
    let errorCount = 0;
    let timeoutId = null;
    dispatchLoad({ type: "load-started" });
    pendingLoadHandleRef.current = handle;
    const attemptLoad = () => {
      loadImage({ src: actualSrc, signal: controller.signal, crossOrigin }).then((image) => {
        if (cancelled) {
          return;
        }
        dispatchLoad({ type: "image-decoded", image });
      }).catch((err) => {
        if (err.name === "AbortError") {
          return;
        }
        errorCount++;
        if (errorCount <= maxRetries) {
          const backoff = exponentialBackoff(errorCount);
          console.warn(`Could not load <CanvasImage> with src="${truncateSrcForLabel(actualSrc)}", retrying in ${backoff}ms`);
          timeoutId = setTimeout(() => {
            if (!cancelled) {
              attemptLoad();
            }
          }, backoff);
        } else if (onErrorRef.current) {
          onErrorRef.current(err);
          dispatchLoad({ type: "load-failed" });
          releasePendingLoadDelay();
        } else {
          cancelRender2(err);
        }
      });
    };
    attemptLoad();
    return () => {
      cancelled = true;
      if (timeoutId !== null) {
        clearTimeout(timeoutId);
      }
      controller.abort();
      releasePendingLoadDelay();
    };
  }, [
    actualSrc,
    cancelRender2,
    releasePendingLoadDelay,
    crossOrigin,
    delayRender,
    delayRenderRetries,
    delayRenderTimeoutInMilliseconds,
    maxRetries
  ]);
  (0, import_react92.useLayoutEffect)(() => {
    if (!loadedImage || !outputCanvas || !sourceCanvas) {
      return;
    }
    const handle = delayRender(`Applying effects to <CanvasImage> with src="${truncateSrcForLabel(actualSrc)}"`);
    let cancelled = false;
    let continued = false;
    let cancelWaitForNextFrame = () => {
      return;
    };
    const continueRenderOnce = () => {
      if (continued) {
        return;
      }
      continued = true;
      continueRender(handle);
    };
    const canvasWidth = width ?? loadedImage.width;
    const canvasHeight = height ?? loadedImage.height;
    const sourceContext = sourceCanvas.getContext("2d", {
      colorSpace: "srgb"
    });
    if (!sourceContext) {
      const error2 = new Error("Could not get 2D context for <CanvasImage> source canvas");
      if (onErrorRef.current) {
        onErrorRef.current(error2);
        dispatchLoad({ type: "presented" });
        releasePendingLoadDelay();
      } else {
        cancelRender2(error2);
      }
      continueRenderOnce();
      return () => {
        continueRenderOnce();
      };
    }
    sourceCanvas.width = canvasWidth;
    sourceCanvas.height = canvasHeight;
    outputCanvas.width = canvasWidth;
    outputCanvas.height = canvasHeight;
    sourceContext.clearRect(0, 0, canvasWidth, canvasHeight);
    sourceContext.drawImage(loadedImage.element, ...calculateImageFit(fit, { width: loadedImage.width, height: loadedImage.height }, { width: canvasWidth, height: canvasHeight }));
    runEffectChain({
      state: chainState.get(canvasWidth, canvasHeight),
      source: sourceCanvas,
      effects: memoizedEffects,
      output: outputCanvas,
      width: canvasWidth,
      height: canvasHeight
    }).then((completed) => {
      if (completed && !cancelled) {
        cancelWaitForNextFrame = waitForNextFrame({
          onFrame: () => {
            if (cancelled) {
              return;
            }
            continueRenderOnce();
            dispatchLoad({ type: "presented" });
            releasePendingLoadDelay();
          }
        });
      }
    }).catch((err) => {
      if (cancelled) {
        return;
      }
      if (onErrorRef.current) {
        onErrorRef.current(err);
        continueRenderOnce();
        dispatchLoad({ type: "presented" });
        releasePendingLoadDelay();
      } else {
        cancelRender2(err);
      }
    });
    return () => {
      cancelled = true;
      cancelWaitForNextFrame();
      continueRenderOnce();
    };
  }, [
    actualSrc,
    cancelRender2,
    chainState,
    continueRender,
    releasePendingLoadDelay,
    delayRender,
    fit,
    height,
    loadedImage,
    memoizedEffects,
    outputCanvas,
    sourceCanvas,
    width
  ]);
  return /* @__PURE__ */ (0, import_jsx_runtime35.jsx)("canvas", {
    ...canvasProps,
    ref: canvasRef,
    width,
    height,
    className,
    style,
    id
  });
});
CanvasImageContent.displayName = "CanvasImageContent";
var CanvasImageInner = (0, import_react92.forwardRef)(({
  src,
  crossOrigin,
  width,
  height,
  fit,
  effects = [],
  effectsOutputSize,
  className,
  style,
  id,
  onError,
  pauseWhenLoading,
  maxRetries,
  delayRenderRetries,
  delayRenderTimeoutInMilliseconds,
  durationInFrames,
  from,
  trimBefore,
  loop,
  freeze,
  premountFor,
  postmountFor,
  styleWhilePremounted,
  styleWhilePostmounted,
  hidden,
  name,
  showInTimeline,
  cropLeft,
  cropRight,
  cropTop,
  cropBottom,
  controls,
  _remotionInternalDocumentationLink,
  _remotionInternalCropComponentName,
  ...canvasProps
}, ref) => {
  if (!src) {
    throw new Error('No "src" prop was passed to <CanvasImage>.');
  }
  const isMedia = (0, import_react92.useMemo)(() => ({
    type: "image",
    src,
    animated: null
  }), [src]);
  const memoizedEffectDefinitions = useMemoizedEffectDefinitions(effects);
  const actualRef = (0, import_react92.useRef)(null);
  const videoEnabled = useVideoEnabled();
  (0, import_react92.useImperativeHandle)(ref, () => {
    return videoEnabled ? actualRef.current : null;
  }, [videoEnabled]);
  const {
    effectivePostmountFor,
    effectivePremountFor,
    freezeFrame,
    isPremountingOrPostmounting,
    postmountingActive,
    premountingActive,
    premountingStyle
  } = usePremounting({
    from: from ?? 0,
    durationInFrames: resolveSequenceDuration({
      durationInFrames,
      playbackRate: void 0,
      loop
    }),
    premountFor: premountFor ?? null,
    postmountFor: postmountFor ?? null,
    style: style ?? null,
    styleWhilePremounted: styleWhilePremounted ?? null,
    styleWhilePostmounted: styleWhilePostmounted ?? null,
    hideWhilePremounted: "display-none"
  });
  const croppedStyle = useCropStyle({
    cropLeft,
    cropRight,
    cropTop,
    cropBottom,
    style: premountingStyle,
    componentName: _remotionInternalCropComponentName ?? "<CanvasImage />"
  });
  if (videoEnabled === false) {
    return null;
  }
  return /* @__PURE__ */ (0, import_jsx_runtime35.jsx)(Freeze, {
    frame: freezeFrame,
    active: isPremountingOrPostmounting,
    _remotionInternalIsPremounting: premountingActive,
    children: /* @__PURE__ */ (0, import_jsx_runtime35.jsx)(Sequence, {
      layout: "none",
      from: from ?? 0,
      trimBefore,
      loop,
      durationInFrames,
      freeze,
      hidden,
      showInTimeline: showInTimeline ?? true,
      name: name ?? "<CanvasImage>",
      _remotionInternalDocumentationLink: _remotionInternalDocumentationLink ?? "https://www.remotion.dev/docs/canvasimage",
      controls,
      _remotionInternalEffects: memoizedEffectDefinitions,
      _remotionInternalIsMedia: isMedia,
      _remotionInternalPremountDisplay: effectivePremountFor || null,
      _remotionInternalPostmountDisplay: effectivePostmountFor || null,
      _remotionInternalIsPremounting: premountingActive,
      _remotionInternalIsPostmounting: postmountingActive,
      children: /* @__PURE__ */ (0, import_jsx_runtime35.jsx)(SequenceContent, {
        children: /* @__PURE__ */ (0, import_jsx_runtime35.jsx)(CanvasImageContent, {
          ref: actualRef,
          src,
          crossOrigin,
          width,
          height,
          fit,
          effects,
          effectsOutputSize: effectsOutputSize ?? null,
          controls,
          className,
          style: croppedStyle ?? void 0,
          id,
          onError,
          pauseWhenLoading,
          maxRetries,
          delayRenderRetries,
          delayRenderTimeoutInMilliseconds,
          ...canvasProps
        })
      })
    })
  });
});
var CanvasImage = withInteractivitySchema({
  Component: CanvasImageInner,
  componentName: "<CanvasImage>",
  componentIdentity: "dev.remotion.remotion.CanvasImage",
  schema: canvasImageSchema,
  supportsEffects: true
});
CanvasImage.displayName = "CanvasImage";
addSequenceStackTraces(CanvasImage);
var IFrameRefForwarding = ({
  onLoad,
  onError,
  delayRenderRetries,
  delayRenderTimeoutInMilliseconds,
  ...props
}, ref) => {
  const { delayRender, continueRender } = useDelayRender();
  const handle = (0, import_react93.useRef)(null);
  const loadedSource = (0, import_react93.useRef)(null);
  const { src, srcDoc } = props;
  const videoEnabled = useVideoEnabled();
  (0, import_react93.useLayoutEffect)(() => {
    if (!videoEnabled) {
      loadedSource.current = null;
      return;
    }
    if (loadedSource.current?.src === src && loadedSource.current?.srcDoc === srcDoc && loadedSource.current !== null) {
      return;
    }
    const newHandle = delayRender(`Loading <IFrame> with source ${src}`, {
      retries: delayRenderRetries ?? void 0,
      timeoutInMilliseconds: delayRenderTimeoutInMilliseconds ?? void 0
    });
    loadedSource.current = null;
    handle.current = newHandle;
    return () => {
      continueRender(newHandle);
      handle.current = null;
    };
  }, [
    continueRender,
    delayRender,
    delayRenderRetries,
    delayRenderTimeoutInMilliseconds,
    src,
    srcDoc,
    videoEnabled
  ]);
  const didLoad = (0, import_react93.useCallback)((e) => {
    loadedSource.current = { src, srcDoc };
    if (handle.current !== null) {
      continueRender(handle.current);
      handle.current = null;
    }
    onLoad?.(e);
  }, [onLoad, continueRender, src, srcDoc]);
  const didGetError = (0, import_react93.useCallback)((e) => {
    loadedSource.current = { src, srcDoc };
    if (handle.current !== null) {
      continueRender(handle.current);
      handle.current = null;
    }
    if (onError) {
      onError(e);
    } else {
      console.error("Error loading iframe:", e, "Handle the event using the onError() prop to make this message disappear.");
    }
  }, [onError, continueRender, src, srcDoc]);
  if (!videoEnabled) {
    return null;
  }
  return /* @__PURE__ */ (0, import_jsx_runtime36.jsx)("iframe", {
    referrerPolicy: "strict-origin-when-cross-origin",
    ...props,
    ref,
    onError: didGetError,
    onLoad: didLoad
  });
};
var IFrame = (0, import_react93.forwardRef)(IFrameRefForwarding);
var captureEffectPreviewSnapshot = (element) => {
  if (!element) {
    return null;
  }
  let canvas = null;
  try {
    const view = element.ownerDocument.defaultView;
    if (!view) {
      return null;
    }
    const directSource = ["CANVAS", "IMG", "VIDEO"].includes(element.tagName);
    const candidates = directSource ? [element] : Array.from(element.querySelectorAll("canvas, img, video")).filter((candidate) => {
      if (candidate.parentElement?.closest("canvas")) {
        return false;
      }
      for (let ancestor = candidate; ancestor && ancestor !== element; ancestor = ancestor.parentElement) {
        const candidateStyle = view.getComputedStyle(ancestor);
        if (candidateStyle.display === "none" || candidateStyle.visibility === "hidden" || candidateStyle.opacity === "0") {
          return false;
        }
      }
      return true;
    });
    if (candidates.length !== 1) {
      return null;
    }
    const source = candidates[0];
    let intrinsicWidth;
    let intrinsicHeight;
    if (source.tagName === "IMG") {
      const image = source;
      if (!image.complete) {
        return null;
      }
      intrinsicWidth = image.naturalWidth;
      intrinsicHeight = image.naturalHeight;
    } else if (source.tagName === "VIDEO") {
      const video = source;
      if (video.readyState < 2) {
        return null;
      }
      intrinsicWidth = video.videoWidth;
      intrinsicHeight = video.videoHeight;
    } else {
      intrinsicWidth = source.width;
      intrinsicHeight = source.height;
    }
    if (intrinsicWidth <= 0 || intrinsicHeight <= 0) {
      return null;
    }
    const style = view.getComputedStyle(source);
    const contentWidth = Number.parseFloat(style.width) - (style.boxSizing === "border-box" ? Number.parseFloat(style.paddingLeft) + Number.parseFloat(style.paddingRight) + Number.parseFloat(style.borderLeftWidth) + Number.parseFloat(style.borderRightWidth) : 0);
    const contentHeight = Number.parseFloat(style.height) - (style.boxSizing === "border-box" ? Number.parseFloat(style.paddingTop) + Number.parseFloat(style.paddingBottom) + Number.parseFloat(style.borderTopWidth) + Number.parseFloat(style.borderBottomWidth) : 0);
    const width = source.tagName === "CANVAS" ? intrinsicWidth : Number.isFinite(contentWidth) ? contentWidth : intrinsicWidth;
    const height = source.tagName === "CANVAS" ? intrinsicHeight : Number.isFinite(contentHeight) ? contentHeight : intrinsicHeight;
    if (!Number.isFinite(width) || !Number.isFinite(height) || width <= 0 || height <= 0) {
      return null;
    }
    canvas = element.ownerDocument.createElement("canvas");
    canvas.width = Math.max(1, Math.round(width));
    canvas.height = Math.max(1, Math.round(height));
    const context = canvas.getContext("2d");
    if (!context) {
      return null;
    }
    let drawWidth = canvas.width;
    let drawHeight = canvas.height;
    if (source.tagName !== "CANVAS" && style.objectFit !== "fill") {
      const containScale = Math.min(canvas.width / intrinsicWidth, canvas.height / intrinsicHeight);
      const scale = style.objectFit === "cover" ? Math.max(canvas.width / intrinsicWidth, canvas.height / intrinsicHeight) : style.objectFit === "contain" ? containScale : style.objectFit === "scale-down" ? Math.min(1, containScale) : style.objectFit === "none" ? 1 : null;
      if (scale !== null) {
        drawWidth = intrinsicWidth * scale;
        drawHeight = intrinsicHeight * scale;
      }
    }
    const position = source.tagName === "CANVAS" ? ["0px", "0px"] : style.objectPosition.split(" ");
    const offsets = [canvas.width - drawWidth, canvas.height - drawHeight].map((remaining, index) => {
      const value = position[index] ?? "50%";
      if (value.endsWith("%")) {
        return remaining * Number.parseFloat(value) / 100;
      }
      if (value.endsWith("px")) {
        return Number.parseFloat(value);
      }
      return remaining / 2;
    });
    context.drawImage(source, offsets[0], offsets[1], drawWidth, drawHeight);
    context.getImageData(0, 0, 1, 1);
    return canvas;
  } catch {
    if (canvas) {
      canvas.width = 0;
      canvas.height = 0;
    }
    return null;
  }
};
function exponentialBackoff2(errorCount) {
  return 1e3 * 2 ** (errorCount - 1);
}
var setImageRef = (imageRef, ref, img) => {
  imageRef.current = img;
  if (typeof ref === "function") {
    ref(img);
  } else if (ref) {
    ref.current = img;
  }
};
var retryImage = (imageRef, timeout) => {
  if (!imageRef.current) {
    return;
  }
  const currentSrc = imageRef.current.src;
  setTimeout(() => {
    if (!imageRef.current) {
      return;
    }
    const newSrc = imageRef.current?.src;
    if (newSrc !== currentSrc) {
      return;
    }
    imageRef.current.removeAttribute("src");
    imageRef.current.setAttribute("src", newSrc);
  }, timeout);
};
var handleImageError = ({
  errors,
  imageRef,
  onError,
  onImageError,
  maxRetries,
  cancelRender: cancelRender2,
  retryIn
}, e) => {
  if (!errors.current) {
    return;
  }
  errors.current[imageRef.current?.src] = (errors.current[imageRef.current?.src] ?? 0) + 1;
  if ((onError || onImageError) && (errors.current[imageRef.current?.src] ?? 0) > maxRetries) {
    onError?.(e);
    onImageError?.(new Error("Error loading image with src: " + truncateSrcForLabel(imageRef.current?.src)));
    return;
  }
  if ((errors.current[imageRef.current?.src] ?? 0) <= maxRetries) {
    const backoff = exponentialBackoff2(errors.current[imageRef.current?.src] ?? 0);
    console.warn(`Could not load image with source ${truncateSrcForLabel(imageRef.current?.src)}, retrying again in ${backoff}ms`);
    retryIn(backoff);
    return;
  }
  try {
    cancelRender2("Error loading image with src: " + truncateSrcForLabel(imageRef.current?.src));
  } catch {
  }
};
var loadImage2 = ({
  imageRef,
  errors,
  actualSrc,
  delayRenderRetries,
  delayRenderTimeoutInMilliseconds,
  onImageFrame,
  delayRender,
  continueRender,
  setIsLoading
}) => {
  if (window.process?.env?.NODE_ENV === "test") {
    if (imageRef.current) {
      imageRef.current.src = actualSrc;
    }
    return;
  }
  const { current } = imageRef;
  if (!current) {
    return;
  }
  setIsLoading(true);
  const newHandle = delayRender("Loading <Img> with src=" + truncateSrcForLabel(actualSrc), {
    retries: delayRenderRetries ?? void 0,
    timeoutInMilliseconds: delayRenderTimeoutInMilliseconds ?? void 0
  });
  let unmounted = false;
  const onComplete = () => {
    if (unmounted) {
      continueRender(newHandle);
      return;
    }
    if ((errors.current[imageRef.current?.src] ?? 0) > 0) {
      delete errors.current[imageRef.current?.src];
      console.info(`Retry successful - ${truncateSrcForLabel(imageRef.current?.src)} is now loaded`);
    }
    if (current) {
      onImageFrame?.(current);
    }
    setIsLoading(false);
    continueRender(newHandle);
  };
  if (!imageRef.current) {
    onComplete();
    return;
  }
  current.src = actualSrc;
  current.decode().then(onComplete).catch((err) => {
    console.warn(err);
    if (current.complete && current.naturalWidth > 0 && current.naturalHeight > 0) {
      onComplete();
    } else {
      current.addEventListener("load", onComplete);
    }
  });
  return () => {
    unmounted = true;
    current.removeEventListener("load", onComplete);
    continueRender(newHandle);
  };
};
var ImgContent = ({
  onError,
  onImageError,
  maxRetries = 2,
  src,
  pauseWhenLoading,
  delayRenderRetries,
  delayRenderTimeoutInMilliseconds,
  onImageFrame,
  crossOrigin,
  decoding,
  ref,
  ...props
}) => {
  const imageRef = (0, import_react94.useRef)(null);
  const errors = (0, import_react94.useRef)({});
  const { delayPlayback } = useBufferState();
  const sequenceContext = (0, import_react94.useContext)(SequenceContext);
  const htmlInCanvasContext = (0, import_react94.useContext)(HtmlInCanvasAncestorContext);
  const [isLoading, setIsLoading] = (0, import_react94.useState)(false);
  const { isClientSideRendering, isRendering } = useRemotionEnvironment();
  const crossOriginValue = getCrossOriginValue({
    crossOrigin: crossOrigin ?? (htmlInCanvasContext === null ? void 0 : "anonymous"),
    requestsVideoFrame: false,
    isClientSideRendering
  });
  const _propsValid = true;
  if (!_propsValid) {
    throw new Error("typecheck error");
  }
  const imageCallbackRef = (0, import_react94.useMemo)(() => setImageRef.bind(null, imageRef, ref ?? null), [ref]);
  const actualSrc = usePreload(src);
  const retryIn = (0, import_react94.useMemo)(() => retryImage.bind(null, imageRef), []);
  const { delayRender, continueRender, cancelRender: cancelRender2 } = useDelayRender();
  const isPremounting = Boolean(sequenceContext?.premounting);
  const isPostmounting = Boolean(sequenceContext?.postmounting);
  const didGetError = (0, import_react94.useMemo)(() => handleImageError.bind(null, {
    errors,
    imageRef,
    onError: onError ?? null,
    onImageError: onImageError ?? null,
    maxRetries,
    cancelRender: cancelRender2,
    retryIn
  }), [cancelRender2, maxRetries, onError, onImageError, retryIn]);
  if (typeof window !== "undefined") {
    (0, import_react94.useLayoutEffect)(() => {
      if (!pauseWhenLoading || !isLoading || isPremounting || isPostmounting) {
        return;
      }
      return delayPlayback().unblock;
    }, [
      delayPlayback,
      isLoading,
      isPostmounting,
      isPremounting,
      pauseWhenLoading
    ]);
    (0, import_react94.useLayoutEffect)(loadImage2.bind(null, {
      imageRef,
      errors,
      actualSrc,
      delayRenderRetries: delayRenderRetries ?? null,
      delayRenderTimeoutInMilliseconds: delayRenderTimeoutInMilliseconds ?? null,
      onImageFrame: onImageFrame ?? null,
      delayRender,
      continueRender,
      setIsLoading
    }), [
      actualSrc,
      crossOriginValue,
      delayRenderRetries,
      delayRenderTimeoutInMilliseconds,
      onImageFrame,
      continueRender,
      delayRender
    ]);
  }
  return /* @__PURE__ */ (0, import_jsx_runtime37.jsx)("img", {
    ...props,
    ref: imageCallbackRef,
    crossOrigin: crossOriginValue,
    onError: didGetError,
    decoding: isRendering ? "sync" : decoding
  });
};
var NativeImgInner = ({
  hidden,
  name,
  showInTimeline,
  src,
  from,
  trimBefore,
  loop,
  durationInFrames,
  freeze,
  premountFor,
  postmountFor,
  style,
  styleWhilePremounted,
  styleWhilePostmounted,
  cropLeft,
  cropRight,
  cropTop,
  cropBottom,
  controls,
  ...props
}) => {
  if (!src) {
    throw new Error('No "src" prop was passed to <Img>.');
  }
  const isMedia = (0, import_react94.useMemo)(() => ({
    type: "image",
    src,
    animated: null
  }), [src]);
  const {
    effectivePostmountFor,
    effectivePremountFor,
    freezeFrame,
    isPremountingOrPostmounting,
    postmountingActive,
    premountingActive,
    premountingStyle
  } = usePremounting({
    from: from ?? 0,
    durationInFrames: resolveSequenceDuration({
      durationInFrames,
      playbackRate: void 0,
      loop
    }),
    premountFor: premountFor ?? null,
    postmountFor: postmountFor ?? null,
    style: style ?? null,
    styleWhilePremounted: styleWhilePremounted ?? null,
    styleWhilePostmounted: styleWhilePostmounted ?? null,
    hideWhilePremounted: "display-none"
  });
  const croppedStyle = useCropStyle({
    cropLeft,
    cropRight,
    cropTop,
    cropBottom,
    style: premountingStyle,
    componentName: "<Img />"
  });
  return /* @__PURE__ */ (0, import_jsx_runtime37.jsx)(Freeze, {
    frame: freezeFrame,
    active: isPremountingOrPostmounting,
    _remotionInternalIsPremounting: premountingActive,
    children: /* @__PURE__ */ (0, import_jsx_runtime37.jsx)(Sequence, {
      layout: "none",
      from: from ?? 0,
      trimBefore,
      loop,
      durationInFrames,
      freeze,
      _remotionInternalDocumentationLink: "https://www.remotion.dev/docs/img",
      _remotionInternalIsMedia: isMedia,
      _remotionInternalPremountDisplay: effectivePremountFor || null,
      _remotionInternalPostmountDisplay: effectivePostmountFor || null,
      _remotionInternalIsPremounting: premountingActive,
      _remotionInternalIsPostmounting: postmountingActive,
      name: name ?? "<Img>",
      controls,
      showInTimeline: showInTimeline ?? true,
      hidden,
      children: /* @__PURE__ */ (0, import_jsx_runtime37.jsx)(SequenceContent, {
        children: /* @__PURE__ */ (0, import_jsx_runtime37.jsx)(ImgContent, {
          src,
          style: croppedStyle ?? void 0,
          ...props
        })
      })
    })
  });
};
var CanvasImageWithPrivateProps = CanvasImage;
var imgSchema = {
  src: {
    type: "asset",
    assetType: "image",
    default: void 0,
    description: "Source",
    keyframable: false
  },
  ...baseSchemaWithoutPlaybackRate,
  ...cropSchema,
  ...transformSchema,
  ...backgroundSchema,
  ...borderSchema,
  ...borderRadiusSchema
};
var imgCanvasFallbackIncompatibleProps = /* @__PURE__ */ new Set([
  "alt",
  "decoding",
  "fetchPriority",
  "loading",
  "onError",
  "onImageFrame",
  "onLoad",
  "sizes",
  "srcSet",
  "useMap"
]);
var getIncompatiblePropNames = (props) => Object.keys(props).filter((key) => props[key] !== void 0 && imgCanvasFallbackIncompatibleProps.has(key));
var formatPropList = (props) => {
  return props.map((prop) => `"${prop}"`).join(", ");
};
var validateCanvasImageFallbackProps = ({
  props,
  ref,
  width,
  height
}) => {
  if (typeof width === "string" || typeof height === "string") {
    throw new Error('The "width" and "height" props must be numbers on <Img> when effects are passed, because <Img> renders a <CanvasImage>. Use numeric props or CSS dimensions in "style".');
  }
  const conflictingProps = getIncompatiblePropNames(props);
  if (ref !== null && ref !== void 0) {
    conflictingProps.unshift("ref");
  }
  if (conflictingProps.length === 0) {
    return;
  }
  throw new Error(`The ${formatPropList(conflictingProps)} prop${conflictingProps.length === 1 ? "" : "s"} cannot be used on <Img> when effects are passed, because <Img> renders a <canvas> instead of a native <img>. Remove ${conflictingProps.length === 1 ? "this prop" : "these props"}.`);
};
var getFitFromObjectFit = (style) => {
  const objectFit = style?.objectFit;
  if (objectFit === "fill" || objectFit === "contain" || objectFit === "cover") {
    return objectFit;
  }
  return;
};
var ImgWithPreview = ({
  effects = [],
  effectsOutputSize,
  ref,
  hidden,
  name,
  showInTimeline,
  src,
  from,
  trimBefore,
  durationInFrames,
  freeze,
  premountFor,
  postmountFor,
  styleWhilePremounted,
  styleWhilePostmounted,
  controls,
  width,
  height,
  className,
  style,
  cropLeft,
  cropRight,
  cropTop,
  cropBottom,
  id,
  pauseWhenLoading,
  maxRetries,
  delayRenderRetries,
  delayRenderTimeoutInMilliseconds,
  onImageError,
  ...props
}) => {
  const shouldPauseWhenLoading = resolveV5Default(pauseWhenLoading);
  const nativeImageRef = (0, import_react94.useRef)(null);
  const nativeRef = (0, import_react94.useCallback)((image) => {
    nativeImageRef.current = image;
    if (typeof ref === "function") {
      ref(image);
    } else if (ref) {
      ref.current = image;
    }
  }, [ref]);
  const [nativePreview, setNativePreview] = (0, import_react94.useState)(null);
  const preview = useEffectPreview(controls?.runtimeValues ?? null);
  const previewStore = (0, import_react94.useContext)(EffectPreviewContext);
  const onPreviewError = (0, import_react94.useCallback)(() => {
    if (previewStore.getSnapshot(controls?.runtimeValues ?? null) !== null) {
      previewStore.setPreview(null);
    }
  }, [controls?.runtimeValues, previewStore]);
  (0, import_react94.useLayoutEffect)(() => {
    if (preview === null || effects.length > 0) {
      setNativePreview(null);
      return;
    }
    const image = nativeImageRef.current;
    if (image === null) {
      return;
    }
    const captureNativeImage = () => {
      const snapshot3 = captureEffectPreviewSnapshot(image);
      if (snapshot3 === null) {
        onPreviewError();
        return;
      }
      try {
        const computed = image.ownerDocument.defaultView.getComputedStyle(image);
        setNativePreview({
          source: src,
          srcSet: props.srcSet ?? null,
          sizes: props.sizes ?? null,
          snapshotSrc: snapshot3.toDataURL(),
          width: snapshot3.width,
          height: snapshot3.height,
          cssWidth: computed.width,
          cssHeight: computed.height
        });
      } catch {
        onPreviewError();
      } finally {
        snapshot3.width = 0;
        snapshot3.height = 0;
      }
    };
    if (image.complete && image.naturalWidth > 0) {
      captureNativeImage();
    } else {
      image.addEventListener("load", captureNativeImage);
    }
    return () => image.removeEventListener("load", captureNativeImage);
  }, [effects.length, onPreviewError, preview, props.sizes, props.srcSet, src]);
  const nativePreviewIsCurrent = nativePreview !== null && nativePreview.source === src && nativePreview.srcSet === (props.srcSet ?? null) && nativePreview.sizes === (props.sizes ?? null);
  const nativeSnapshot = effects.length === 0 && preview !== null && nativePreviewIsCurrent ? nativePreview : null;
  if (effects.length === 0 && nativeSnapshot === null) {
    return /* @__PURE__ */ (0, import_jsx_runtime37.jsx)(NativeImgInner, {
      ...props,
      ref: nativeRef,
      hidden,
      name,
      showInTimeline,
      src,
      from,
      trimBefore,
      durationInFrames,
      freeze,
      premountFor,
      postmountFor,
      styleWhilePremounted,
      styleWhilePostmounted,
      controls,
      width,
      height,
      className,
      style,
      cropLeft,
      cropRight,
      cropTop,
      cropBottom,
      id,
      pauseWhenLoading: shouldPauseWhenLoading,
      maxRetries,
      delayRenderRetries,
      delayRenderTimeoutInMilliseconds,
      onImageError
    });
  }
  if (!src) {
    throw new Error('No "src" prop was passed to <Img>.');
  }
  if (effects.length > 0) {
    validateCanvasImageFallbackProps({ props, ref, width, height });
  }
  const canvasWidth = nativeSnapshot?.width ?? (typeof width === "number" ? width : void 0);
  const canvasHeight = nativeSnapshot?.height ?? (typeof height === "number" ? height : void 0);
  const canvasProps = effects.length === 0 ? Object.fromEntries(Object.entries(props).filter(([key]) => !imgCanvasFallbackIncompatibleProps.has(key))) : props;
  const canvasFit = nativeSnapshot === null ? getFitFromObjectFit(style) ?? "fill" : "fill";
  const canvasStyle = nativeSnapshot === null ? style : {
    width: nativeSnapshot.cssWidth,
    height: nativeSnapshot.cssHeight,
    ...style
  };
  return /* @__PURE__ */ (0, import_jsx_runtime37.jsx)(CanvasImageWithPrivateProps, {
    src: nativeSnapshot?.snapshotSrc ?? src,
    width: canvasWidth,
    height: canvasHeight,
    fit: canvasFit,
    effects,
    effectsOutputSize,
    className,
    style: canvasStyle,
    cropLeft,
    cropRight,
    cropTop,
    cropBottom,
    id,
    onError: preview === null ? onImageError : onPreviewError,
    pauseWhenLoading: shouldPauseWhenLoading,
    maxRetries: preview === null ? maxRetries : 0,
    delayRenderRetries,
    delayRenderTimeoutInMilliseconds,
    from,
    trimBefore,
    durationInFrames,
    freeze,
    premountFor,
    postmountFor,
    styleWhilePremounted,
    styleWhilePostmounted,
    hidden,
    name: name ?? "<Img>",
    showInTimeline,
    _remotionInternalDocumentationLink: "https://www.remotion.dev/docs/img",
    _remotionInternalCropComponentName: "<Img />",
    controls,
    ...canvasProps
  });
};
var ImgInner = (props) => {
  const videoEnabled = useVideoEnabled();
  if (videoEnabled === false) {
    return null;
  }
  return /* @__PURE__ */ (0, import_jsx_runtime37.jsx)(ImgWithPreview, {
    ...props
  });
};
var Img = withInteractivitySchema({
  Component: ImgInner,
  componentName: "<Img>",
  componentIdentity: "dev.remotion.remotion.Img",
  schema: imgSchema,
  supportsEffects: true
});
addSequenceStackTraces(Img);
var sourcePathToIdentityPrefix = (packageName) => {
  if (packageName === "remotion") {
    return "dev.remotion.remotion";
  }
  if (packageName.startsWith("@remotion/")) {
    const normalizedPackageName = packageName.slice("@remotion/".length).replace(/-([a-z])/g, (_, char) => char.toUpperCase());
    return `dev.remotion.${normalizedPackageName}`;
  }
  throw new Error(`Unsupported Remotion package name: ${packageName}`);
};
var makeRemotionComponentIdentity = ({
  packageName,
  componentName
}) => {
  return `${sourcePathToIdentityPrefix(packageName)}.${componentName}`;
};
var interactiveElementSchema = {
  ...baseSchema,
  ...transformSchema,
  ...cropSchema
};
var interactiveBackgroundElementSchema = {
  ...interactiveElementSchema,
  ...backgroundSchema
};
var interactiveBorderElementSchema = {
  ...interactiveBackgroundElementSchema,
  ...borderSchema,
  ...borderRadiusSchema
};
var interactiveTextElementSchema = {
  ...interactiveBorderElementSchema,
  ...textSchema,
  ...childrenSchema
};
var interactiveSvgTextElementSchema = {
  ...interactiveElementSchema,
  ...svgPaintSchema,
  ...textSchema,
  ...childrenSchema
};
var interactiveSvgElementSchema = {
  ...interactiveElementSchema,
  ...svgPaintSchema
};
var interactiveSvgPathElementSchema = {
  ...interactiveSvgElementSchema,
  d: {
    type: "svg-path",
    default: void 0,
    description: "Path",
    keyframable: true
  }
};
var interactiveSvgStrokeElementSchema = {
  ...interactiveElementSchema,
  ...svgStrokeSchema
};
var interactiveSvgRootElementSchema = {
  ...interactiveBorderElementSchema,
  ...svgPaintSchema
};
var setRef2 = (ref, value) => {
  if (typeof ref === "function") {
    ref(value);
  } else if (ref) {
    ref.current = value;
  }
};
var withSchema = (untypedOptions) => {
  const options = untypedOptions;
  if (!options.wrapInSequence) {
    const LegacyWrapped = withInteractivitySchema(options);
    addSequenceStackTraces(LegacyWrapped);
    return LegacyWrapped;
  }
  const {
    Component,
    componentName,
    schema,
    wrapInSequence: _,
    layout = "none",
    ...rest
  } = options;
  const ComponentWrappedInSequence = (0, import_react95.forwardRef)((props, ref) => {
    const { canvasContent, compositions } = (0, import_react95.useContext)(CompositionManager);
    const componentIdentity = resolveComponentIdentity(Wrapped);
    const isCurrentComposition = compositions.some((composition) => canvasContent?.type === "composition" && composition.id === canvasContent.compositionId && composition.componentFromProps === componentIdentity);
    const { width, height, ...propsWithoutDimensions } = props;
    const {
      durationInFrames,
      from,
      trimBefore,
      playbackRate,
      loop,
      freeze,
      hidden,
      name,
      showInTimeline,
      controls,
      premountFor,
      postmountFor,
      styleWhilePremounted,
      styleWhilePostmounted,
      ...componentProps
    } = layout === "absolute-fill" ? propsWithoutDimensions : props;
    const {
      cropLeft,
      cropRight,
      cropTop,
      cropBottom,
      style,
      ...componentPropsWithoutCropping
    } = componentProps;
    const {
      effectivePremountFor,
      effectivePostmountFor,
      freezeFrame,
      isPremountingOrPostmounting,
      premountingActive,
      postmountingActive,
      premountingStyle
    } = usePremounting({
      from: from ?? 0,
      durationInFrames: resolveSequenceDuration({
        durationInFrames,
        playbackRate,
        loop
      }),
      premountFor: premountFor ?? null,
      postmountFor: postmountFor ?? null,
      style: style ?? null,
      styleWhilePremounted: styleWhilePremounted ?? null,
      styleWhilePostmounted: styleWhilePostmounted ?? null,
      hideWhilePremounted: "opacity"
    });
    const croppedStyle = useCropStyle({
      cropLeft,
      cropRight,
      cropTop,
      cropBottom,
      style: premountingStyle,
      componentName
    });
    return /* @__PURE__ */ (0, import_jsx_runtime38.jsx)(Freeze, {
      frame: freezeFrame,
      active: isPremountingOrPostmounting,
      children: /* @__PURE__ */ (0, import_jsx_runtime38.jsx)(SequenceWithoutSchema, {
        _remotionInternalSingleChildComponent: isCurrentComposition ? null : componentIdentity,
        layout,
        ...layout === "absolute-fill" ? {
          width,
          height,
          style: { overflow: "hidden", ...croppedStyle },
          ref
        } : {},
        durationInFrames,
        from,
        trimBefore,
        playbackRate,
        loop,
        freeze,
        hidden,
        name: name ?? componentName,
        _remotionInternalDocumentationLink: "https://www.remotion.dev/docs/interactive-create",
        showInTimeline: isCurrentComposition ? false : showInTimeline,
        controls,
        _remotionInternalPremountDisplay: effectivePremountFor || null,
        _remotionInternalPostmountDisplay: effectivePostmountFor || null,
        _remotionInternalIsPremounting: premountingActive,
        _remotionInternalIsPostmounting: postmountingActive,
        children: import_react95.default.createElement(Component, {
          ...componentPropsWithoutCropping,
          ...layout === "none" ? { style: croppedStyle ?? void 0, ref } : {}
        })
      })
    });
  });
  const Wrapped = withInteractivitySchema({
    ...rest,
    Component: ComponentWrappedInSequence,
    componentName,
    schema: {
      ...schema,
      ...transformSchema,
      ...baseSchema,
      ...cropSchema
    },
    supportsEffects: false
  });
  addSequenceStackTraces(Wrapped);
  return Wrapped;
};
var create = (untypedOptions) => {
  const options = untypedOptions;
  return withSchema({
    ...options,
    wrapInSequence: true,
    schema: options.schema ?? {},
    componentName: options.componentName ?? (options.Component.displayName || options.Component.name?.replace(/(.+)Inner$/, "$1") || "Component")
  });
};
var makeInteractiveElement = (tag, displayName, schema) => {
  const Inner = (0, import_react95.forwardRef)((propsWithControls, ref) => {
    const {
      durationInFrames,
      from,
      premountFor,
      postmountFor,
      styleWhilePremounted,
      styleWhilePostmounted,
      trimBefore,
      playbackRate,
      loop,
      freeze,
      hidden,
      name,
      showInTimeline,
      controls,
      cropLeft,
      cropRight,
      cropTop,
      cropBottom,
      style,
      ...props
    } = propsWithControls;
    const {
      effectivePremountFor,
      effectivePostmountFor,
      freezeFrame,
      isPremountingOrPostmounting,
      premountingActive,
      postmountingActive,
      premountingStyle
    } = usePremounting({
      from: from ?? 0,
      durationInFrames: resolveSequenceDuration({
        durationInFrames,
        playbackRate,
        loop
      }),
      premountFor: premountFor ?? null,
      postmountFor: postmountFor ?? null,
      style: style ?? null,
      styleWhilePremounted: styleWhilePremounted ?? null,
      styleWhilePostmounted: styleWhilePostmounted ?? null,
      hideWhilePremounted: "opacity"
    });
    const croppedStyle = useCropStyle({
      cropLeft,
      cropRight,
      cropTop,
      cropBottom,
      style: premountingStyle,
      componentName: displayName
    });
    const callbackRef = (0, import_react95.useCallback)((element) => {
      setRef2(ref, element);
    }, [ref]);
    return /* @__PURE__ */ (0, import_jsx_runtime38.jsx)(Freeze, {
      frame: freezeFrame,
      active: isPremountingOrPostmounting,
      _remotionInternalIsPremounting: premountingActive,
      children: /* @__PURE__ */ (0, import_jsx_runtime38.jsx)(Sequence, {
        layout: "none",
        from: from ?? 0,
        trimBefore,
        playbackRate,
        loop,
        durationInFrames,
        freeze,
        hidden,
        name: name ?? displayName,
        showInTimeline: showInTimeline ?? true,
        controls,
        _remotionInternalDocumentationLink: "https://www.remotion.dev/docs/interactive",
        _remotionInternalPremountDisplay: effectivePremountFor || null,
        _remotionInternalPostmountDisplay: effectivePostmountFor || null,
        _remotionInternalIsPremounting: premountingActive,
        _remotionInternalIsPostmounting: postmountingActive,
        children: import_react95.default.createElement(tag, {
          ...props,
          style: croppedStyle ?? void 0,
          ref: callbackRef
        })
      })
    });
  });
  Inner.displayName = displayName;
  const Wrapped = withSchema({
    Component: Inner,
    componentName: displayName,
    componentIdentity: makeRemotionComponentIdentity({
      packageName: "remotion",
      componentName: displayName.slice(1, -1)
    }),
    schema,
    supportsEffects: false
  });
  Wrapped.displayName = displayName;
  return Wrapped;
};
var makeInteractiveTextElement = (tag, displayName) => {
  return makeInteractiveElement(tag, displayName, interactiveTextElementSchema);
};
var makeInteractiveSvgElement = (tag, displayName) => {
  return makeInteractiveElement(tag, displayName, interactiveSvgElementSchema);
};
var makeInteractiveSvgStrokeElement = (tag, displayName) => {
  return makeInteractiveElement(tag, displayName, interactiveSvgStrokeElementSchema);
};
var Interactive = {
  baseSchema,
  captionsSchema,
  childrenSchema,
  transformSchema,
  textSchema,
  backgroundSchema,
  borderSchema,
  borderRadiusSchema,
  cropSchema,
  svgPaintSchema,
  svgStrokeSchema,
  premountSchema,
  sequenceSchema,
  withSchema,
  create,
  _internalMakeRemotionComponentIdentity: makeRemotionComponentIdentity,
  A: makeInteractiveTextElement("a", "<Interactive.A>"),
  Article: makeInteractiveTextElement("article", "<Interactive.Article>"),
  Aside: makeInteractiveTextElement("aside", "<Interactive.Aside>"),
  Button: makeInteractiveTextElement("button", "<Interactive.Button>"),
  Circle: makeInteractiveSvgElement("circle", "<Interactive.Circle>"),
  Code: makeInteractiveTextElement("code", "<Interactive.Code>"),
  Div: makeInteractiveTextElement("div", "<Interactive.Div>"),
  Ellipse: makeInteractiveSvgElement("ellipse", "<Interactive.Ellipse>"),
  Em: makeInteractiveTextElement("em", "<Interactive.Em>"),
  Footer: makeInteractiveTextElement("footer", "<Interactive.Footer>"),
  G: makeInteractiveSvgElement("g", "<Interactive.G>"),
  H1: makeInteractiveTextElement("h1", "<Interactive.H1>"),
  H2: makeInteractiveTextElement("h2", "<Interactive.H2>"),
  H3: makeInteractiveTextElement("h3", "<Interactive.H3>"),
  H4: makeInteractiveTextElement("h4", "<Interactive.H4>"),
  H5: makeInteractiveTextElement("h5", "<Interactive.H5>"),
  H6: makeInteractiveTextElement("h6", "<Interactive.H6>"),
  Header: makeInteractiveTextElement("header", "<Interactive.Header>"),
  Label: makeInteractiveTextElement("label", "<Interactive.Label>"),
  Li: makeInteractiveTextElement("li", "<Interactive.Li>"),
  Line: makeInteractiveSvgStrokeElement("line", "<Interactive.Line>"),
  Main: makeInteractiveTextElement("main", "<Interactive.Main>"),
  Nav: makeInteractiveTextElement("nav", "<Interactive.Nav>"),
  Ol: makeInteractiveTextElement("ol", "<Interactive.Ol>"),
  P: makeInteractiveTextElement("p", "<Interactive.P>"),
  Path: makeInteractiveElement("path", "<Interactive.Path>", interactiveSvgPathElementSchema),
  Pre: makeInteractiveTextElement("pre", "<Interactive.Pre>"),
  Rect: makeInteractiveSvgElement("rect", "<Interactive.Rect>"),
  Section: makeInteractiveTextElement("section", "<Interactive.Section>"),
  Small: makeInteractiveTextElement("small", "<Interactive.Small>"),
  Span: makeInteractiveTextElement("span", "<Interactive.Span>"),
  Strong: makeInteractiveTextElement("strong", "<Interactive.Strong>"),
  Svg: makeInteractiveElement("svg", "<Interactive.Svg>", interactiveSvgRootElementSchema),
  Text: makeInteractiveElement("text", "<Interactive.Text>", interactiveSvgTextElementSchema),
  Ul: makeInteractiveTextElement("ul", "<Interactive.Ul>")
};
var ALLOWED_GLOBAL_TIME_ANCHOR_SHIFT = 0.1;
var getAudioSyncAnchorTolerance = (audioContext) => {
  const { baseLatency, outputLatency } = audioContext;
  const safeOutputLatency = outputLatency === 0 ? 0.3 : outputLatency;
  return ALLOWED_GLOBAL_TIME_ANCHOR_SHIFT + baseLatency + safeOutputLatency;
};
var compositionsRef = import_react97.default.createRef();
var useIsomorphicLayoutEffect6 = typeof window === "undefined" ? import_react99.useEffect : import_react99.useLayoutEffect;
var CompositionRegistryFallbackProvider = withCommittedMetadata(CompositionRegistryFallbackContext.Provider);
var CompositionRegistryProvider = (0, import_react99.forwardRef)(({ children, onSnapshot }, flushSnapshotRef) => {
  const { isStudio } = useRemotionEnvironment();
  const [managerId] = (0, import_react99.useState)(() => String(Math.random()));
  const [useCommitObserver, setUseCommitObserver] = (0, import_react99.useState)(() => isStudio && isCommitRegistrationObserverInstalled());
  const observedCommitRef = (0, import_react99.useRef)(false);
  const observerFailedRef = (0, import_react99.useRef)(false);
  const unmountedRef = (0, import_react99.useRef)(false);
  const onSnapshotRef = (0, import_react99.useRef)(onSnapshot);
  const lastSnapshotRef = (0, import_react99.useRef)(null);
  const pendingSnapshotRef = (0, import_react99.useRef)(null);
  const flushSnapshot = (0, import_react99.useCallback)(() => {
    const pending = pendingSnapshotRef.current;
    pendingSnapshotRef.current = null;
    if (pending === null || unmountedRef.current) {
      return;
    }
    const committed = typeof pending === "function" ? pending() : pending;
    const previous = lastSnapshotRef.current;
    if (previous !== null && (previous.compositions === committed.compositions || previous.compositions.length === committed.compositions.length && previous.compositions.every((composition, index) => composition === committed.compositions[index])) && (previous.folders === committed.folders || previous.folders.length === committed.folders.length && previous.folders.every((folder, index) => folder === committed.folders[index])) && (previous.orderIds === committed.orderIds || previous.orderIds.length === committed.orderIds.length && previous.orderIds.every((id, index) => id === committed.orderIds[index]))) {
      return;
    }
    lastSnapshotRef.current = committed;
    onSnapshotRef.current(committed);
  }, []);
  (0, import_react99.useImperativeHandle)(flushSnapshotRef, () => flushSnapshot, [flushSnapshot]);
  const queueSnapshot = (0, import_react99.useCallback)((snapshot3) => {
    const alreadyPending = pendingSnapshotRef.current !== null;
    pendingSnapshotRef.current = snapshot3;
    if (alreadyPending) {
      return;
    }
    queueMicrotask(flushSnapshot);
  }, [flushSnapshot]);
  const onObservedSnapshot = (0, import_react99.useCallback)((snapshot3) => {
    if (observerFailedRef.current) {
      return;
    }
    observedCommitRef.current = true;
    queueSnapshot(snapshot3);
  }, [queueSnapshot]);
  const fallbackRegistry = (0, import_react99.useMemo)(() => {
    const entries2 = /* @__PURE__ */ new Map();
    const getSnapshot = () => {
      const compositions = [];
      const folders = [];
      const orderIds = [];
      for (const entry of entries2.values()) {
        if (entry.type === "composition") {
          compositions.push(entry.value);
          orderIds.push(getCompositionAndFolderOrderKey({
            type: "composition",
            id: entry.value.id
          }));
        } else {
          folders.push(entry.value);
          orderIds.push(getCompositionAndFolderOrderKey({
            type: "folder",
            id: getFolderOrderId(entry.value)
          }));
        }
      }
      return { compositions, folders, orderIds };
    };
    return { entries: entries2, notifyCommit: () => queueSnapshot(getSnapshot) };
  }, [queueSnapshot]);
  useIsomorphicLayoutEffect6(() => {
    if (onSnapshotRef.current !== onSnapshot) {
      const previous = lastSnapshotRef.current;
      lastSnapshotRef.current = null;
      if (useCommitObserver && previous !== null) {
        queueSnapshot(previous);
      }
    }
    onSnapshotRef.current = onSnapshot;
    if (!useCommitObserver) {
      fallbackRegistry.notifyCommit();
    }
  }, [fallbackRegistry, onSnapshot, queueSnapshot, useCommitObserver]);
  useIsomorphicLayoutEffect6(() => {
    unmountedRef.current = false;
    let unmounted = false;
    const onRegistrationError = () => {
      if (observerFailedRef.current) {
        return;
      }
      observerFailedRef.current = true;
      pendingSnapshotRef.current = null;
      queueMicrotask(() => {
        if (!unmountedRef.current) {
          setUseCommitObserver(false);
        }
      });
    };
    if (isStudio) {
      window.addEventListener(COMMIT_REGISTRATION_ERROR_EVENT, onRegistrationError);
      if (useCommitObserver) {
        queueMicrotask(() => {
          if (!unmounted && !observedCommitRef.current) {
            onRegistrationError();
          }
        });
      }
    }
    return () => {
      unmounted = true;
      unmountedRef.current = true;
      if (isStudio) {
        window.removeEventListener(COMMIT_REGISTRATION_ERROR_EVENT, onRegistrationError);
      }
    };
  }, [isStudio, useCommitObserver]);
  const metadata = (0, import_react99.useMemo)(() => isStudio ? {
    type: "composition-manager",
    id: managerId,
    onCommit: useCommitObserver ? onObservedSnapshot : null
  } : null, [isStudio, managerId, onObservedSnapshot, useCommitObserver]);
  return /* @__PURE__ */ (0, import_jsx_runtime39.jsx)(CompositionRegistryFallbackProvider, {
    value: useCommitObserver ? null : fallbackRegistry,
    _remotionCommitMetadata: metadata,
    children
  });
});
var CompositionManagerProvider = ({
  children,
  onlyRenderComposition,
  currentCompositionMetadata,
  initialCompositions,
  initialCanvasContent
}) => {
  const committedKeysRef = (0, import_react98.useRef)(/* @__PURE__ */ new Set());
  const flushSnapshotRef = (0, import_react98.useRef)(null);
  const committedDescriptorsRef = (0, import_react98.useRef)(/* @__PURE__ */ new Map());
  const [registrationError, setRegistrationError] = (0, import_react98.useState)(null);
  const [registry] = (0, import_react98.useState)(() => createRegistryStore({
    compositions: initialCompositions.map((composition, order) => ({
      ...composition,
      order
    })),
    folders: []
  }));
  const { compositions, folders } = useSyncExternalStore2(registry.subscribe, registry.getSnapshot, registry.getSnapshot);
  const [canvasContent, setCanvasContent] = (0, import_react98.useState)(initialCanvasContent);
  const [currentAssetMetadata, setCurrentAssetMetadata] = (0, import_react98.useState)(null);
  const onCommitRegistrations = (0, import_react98.useCallback)((pending) => {
    const previousKeys = committedKeysRef.current;
    const previousDescriptors = committedDescriptorsRef.current;
    const existingIds = new Set(registry.getSnapshot().compositions.map((composition) => composition.id));
    const descriptors = /* @__PURE__ */ new Map();
    for (const composition of pending.compositions) {
      const key = `composition:${composition.id}`;
      if (descriptors.has(key) || !previousKeys.has(key) && existingIds.has(composition.id)) {
        setRegistrationError(new Error(`Multiple composition with id ${composition.id} are registered.`));
        return;
      }
      descriptors.set(key, composition);
    }
    for (const folder of pending.folders) {
      descriptors.set(`folder:${getFolderOrderId(folder)}`, folder);
    }
    const nextKeys = new Set(descriptors.keys());
    const order = new Map(pending.orderIds.map((id, index) => [id, index]));
    committedKeysRef.current = nextKeys;
    committedDescriptorsRef.current = descriptors;
    registry.setSnapshot((current) => {
      const nextCompositions = reconcileRegistryEntries({
        current: current.compositions,
        entries: pending.compositions,
        previousDescriptors,
        previousKeys,
        nextKeys,
        getKey: (composition) => `composition:${composition.id}`,
        order,
        orderProperty: "order"
      });
      const nextFolders = reconcileRegistryEntries({
        current: current.folders,
        entries: pending.folders,
        previousDescriptors,
        previousKeys,
        nextKeys,
        getKey: (folder) => `folder:${getFolderOrderId(folder)}`,
        order,
        orderProperty: "order"
      });
      return nextCompositions === current.compositions && nextFolders === current.folders ? current : { compositions: nextCompositions, folders: nextFolders };
    });
  }, [registry]);
  (0, import_react98.useImperativeHandle)(compositionsRef, () => {
    return {
      getCompositions: () => {
        flushSnapshotRef.current?.();
        return registry.getSnapshot().compositions;
      }
    };
  }, [registry]);
  const compositionManagerSetters = (0, import_react98.useMemo)(() => ({
    setCanvasContent,
    setCurrentAssetMetadata,
    onlyRenderComposition
  }), [onlyRenderComposition]);
  const compositionManagerContextValue = (0, import_react98.useMemo)(() => {
    return {
      compositions,
      folders,
      currentCompositionMetadata,
      currentAssetMetadata,
      canvasContent
    };
  }, [
    compositions,
    folders,
    currentCompositionMetadata,
    currentAssetMetadata,
    canvasContent
  ]);
  const compositionManagerRef = (0, import_react98.useRef)(compositionManagerContextValue);
  compositionManagerRef.current = compositionManagerContextValue;
  if (registrationError !== null) {
    throw registrationError;
  }
  return /* @__PURE__ */ (0, import_jsx_runtime40.jsx)(CompositionRegistryProvider, {
    ref: flushSnapshotRef,
    onSnapshot: onCommitRegistrations,
    children: /* @__PURE__ */ (0, import_jsx_runtime40.jsx)(CompositionManager.Provider, {
      value: compositionManagerContextValue,
      children: /* @__PURE__ */ (0, import_jsx_runtime40.jsx)(CompositionManagerRefContext.Provider, {
        value: compositionManagerRef,
        children: /* @__PURE__ */ (0, import_jsx_runtime40.jsx)(CompositionSetters.Provider, {
          value: compositionManagerSetters,
          children
        })
      })
    })
  });
};
var componentsToAddStacksTo2 = getComponentsToAddStacksTo();
var internalStackProp = REMOTION_INTERNAL_STACK_PROP;
var createElementSourceProxy = (api, sourceArgumentIndex, getSourceFileName) => {
  return new Proxy(api, {
    apply(target, thisArg, argArray) {
      const component = argArray[0];
      if (componentsToAddStacksTo2.includes(component)) {
        const [first, props, ...rest] = argArray;
        const source = sourceArgumentIndex === null ? null : argArray[sourceArgumentIndex];
        const existingStack = props?.[internalStackProp];
        const controlsStack = !existingStack && component === getSequenceComponent() && props?.controls ? getStackForControls(props.controls) : null;
        let stack = existingStack || controlsStack;
        if (!stack) {
          if (source && typeof source.fileName === "string" && typeof source.lineNumber === "number" && typeof source.columnNumber === "number") {
            stack = makeOriginalSourceStack({
              fileName: getSourceFileName(source.fileName),
              lineNumber: source.lineNumber,
              columnNumber: source.columnNumber - 1
            }, typeof source.__remotionCompiledSourceHash === "string" ? source.__remotionCompiledSourceHash : null);
          } else {
            const { stackTraceLimit } = Error;
            const canLimitStack = typeof stackTraceLimit === "number" && stackTraceLimit > 2 && Object.getOwnPropertyDescriptor(Error, "stackTraceLimit")?.writable;
            let capturedError;
            try {
              if (canLimitStack) {
                Error.stackTraceLimit = 2;
              }
              capturedError = new Error();
            } finally {
              if (canLimitStack) {
                Error.stackTraceLimit = stackTraceLimit;
              }
            }
            const capturedStack = capturedError.stack;
            if (capturedStack) {
              const firstFrameEnd = capturedStack.indexOf(`
`, capturedStack.startsWith(`Error
`) ? 6 : 0);
              const callerEnd = firstFrameEnd === -1 ? -1 : capturedStack.indexOf(`
`, firstFrameEnd + 1);
              stack = callerEnd === -1 ? capturedStack : capturedStack.slice(0, callerEnd);
            } else {
              stack = capturedStack;
            }
          }
        }
        const newProps = existingStack ? { ...props } : {
          ...props ?? {},
          [internalStackProp]: stack
        };
        return Reflect.apply(target, thisArg, [first, newProps, ...rest]);
      }
      return Reflect.apply(target, thisArg, argArray);
    }
  });
};
var injected = {};
var injectCSS = (css) => {
  if (typeof document === "undefined") {
    return () => {
    };
  }
  if (injected[css]) {
    return () => {
    };
  }
  const head = document.head || document.getElementsByTagName("head")[0];
  const style = document.createElement("style");
  style.appendChild(document.createTextNode(css));
  head.prepend(style);
  injected[css] = style;
  return () => {
    const styleElement = injected[css];
    if (styleElement) {
      if (styleElement.parentNode) {
        styleElement.parentNode.removeChild(styleElement);
      }
      delete injected[css];
    }
  };
};
var OBJECTFIT_CONTAIN_CLASS_NAME = "__remotion_objectfitcontain";
var makeDefaultPreviewCSS = (scope, backgroundColor) => {
  if (!scope) {
    return `
    * {
      box-sizing: border-box;
    }
    body {
      margin: 0;
	    background-color: ${backgroundColor};
    }
    .${OBJECTFIT_CONTAIN_CLASS_NAME} {
      object-fit: contain;
    }
    `;
  }
  return `
    ${scope} * {
      box-sizing: border-box;
    }
    ${scope} *:-webkit-full-screen {
      width: 100%;
      height: 100%;
    }
    ${scope} .${OBJECTFIT_CONTAIN_CLASS_NAME} {
      object-fit: contain;
    }
  `;
};
var createCurveSampler = (points, interpolation) => {
  const distances = points.slice(1).map((point, index) => Math.hypot(point[0] - points[index][0], point[1] - points[index][1]));
  const tangents = points.map(() => [0, 0]);
  if (interpolation === "smooth" && points.length > 2) {
    for (let axis = 0; axis < 2; axis++) {
      const slopes = distances.map((distance, index) => (points[index + 1][axis] - points[index][axis]) / distance);
      const curvatures = new Array(points.length).fill(0);
      const upper = new Array(points.length).fill(0);
      for (let index = 1; index < points.length - 1; index++) {
        const diagonal = 2 * (distances[index - 1] + distances[index]) - distances[index - 1] * upper[index - 1];
        upper[index] = distances[index] / diagonal;
        curvatures[index] = (6 * (slopes[index] - slopes[index - 1]) - distances[index - 1] * curvatures[index - 1]) / diagonal;
      }
      for (let index = points.length - 2; index > 0; index--) {
        curvatures[index] -= upper[index] * curvatures[index + 1];
      }
      for (let index = 0; index < points.length; index++) {
        tangents[index][axis] = index === 0 ? slopes[0] - distances[0] * curvatures[1] / 6 : slopes[index - 1] + distances[index - 1] * (curvatures[index - 1] + 2 * curvatures[index]) / 6;
      }
    }
    for (let index = 0; index < points.length; index++) {
      const maxTangent = 3 * Math.min(index === 0 ? Infinity : (points[index][0] - points[index - 1][0]) / distances[index - 1], index === points.length - 1 ? Infinity : (points[index + 1][0] - points[index][0]) / distances[index]);
      if (tangents[index][0] > maxTangent) {
        tangents[index][1] *= maxTangent / tangents[index][0];
      }
      tangents[index][0] = Math.max(0, Math.min(maxTangent, tangents[index][0]));
    }
  }
  return (input) => {
    if (input <= points[0][0])
      return points[0][1];
    if (input >= points[points.length - 1][0]) {
      return points[points.length - 1][1];
    }
    const index = points.findIndex((point) => point[0] > input) - 1;
    const start = points[index];
    const end = points[index + 1];
    if (input === start[0])
      return start[1];
    if (interpolation === "linear" || points.length === 2) {
      return start[1] + (end[1] - start[1]) * ((input - start[0]) / (end[0] - start[0]));
    }
    const handleLength = distances[index] / 3;
    const firstX = start[0] + handleLength * tangents[index][0];
    const secondX = end[0] - handleLength * tangents[index + 1][0];
    let low = 0;
    let high = 1;
    for (let iteration = 0; iteration < 32; iteration++) {
      const candidate = (low + high) / 2;
      const inverse = 1 - candidate;
      const x = inverse ** 3 * start[0] + 3 * inverse ** 2 * candidate * firstX + 3 * inverse * candidate ** 2 * secondX + candidate ** 3 * end[0];
      if (x < input)
        low = candidate;
      else
        high = candidate;
    }
    const progress = (low + high) / 2;
    const remaining = 1 - progress;
    const firstY = start[1] + handleLength * tangents[index][1];
    const secondY = end[1] - handleLength * tangents[index + 1][1];
    const value = remaining ** 3 * start[1] + 3 * remaining ** 2 * progress * firstY + 3 * remaining * progress ** 2 * secondY + progress ** 3 * end[1];
    return Math.max(0, Math.min(1, value));
  };
};
var REMOTION_STUDIO_CONTAINER_ELEMENT = "__remotion-studio-container";
var getPreviewDomElement = () => {
  return document.getElementById(REMOTION_STUDIO_CONTAINER_ELEMENT);
};
var MaxMediaCacheSizeContext = import_react100.default.createContext(null);
var disposeResource = (resource) => {
  if (resource.disposed) {
    return;
  }
  resource.disposed = true;
  resource.values.clear();
  resource.dispose();
};
var makeMediaResourceManager = () => {
  const resources = /* @__PURE__ */ new Map();
  let disposed = false;
  return {
    acquire: ({
      key,
      create: create2
    }) => {
      if (disposed) {
        throw new Error("Media resource manager has already been disposed");
      }
      let entry = resources.get(key);
      if (!entry) {
        const created = create2();
        entry = {
          resource: created.resource,
          dispose: created.dispose,
          refCount: 0,
          disposeGeneration: 0,
          disposed: false,
          values: /* @__PURE__ */ new Map()
        };
        resources.set(key, entry);
      }
      entry.refCount++;
      entry.disposeGeneration++;
      let released = false;
      return {
        resource: entry.resource,
        getOrCreateValue: (valueKey, createValue) => {
          if (entry.values.has(valueKey)) {
            return entry.values.get(valueKey);
          }
          const value = createValue();
          entry.values.set(valueKey, value);
          return value;
        },
        release: () => {
          if (released) {
            return;
          }
          released = true;
          entry.refCount--;
          if (entry.refCount !== 0) {
            return;
          }
          const disposeGeneration = ++entry.disposeGeneration;
          queueMicrotask(() => {
            if (entry.refCount !== 0 || entry.disposeGeneration !== disposeGeneration) {
              return;
            }
            if (resources.get(key) === entry) {
              resources.delete(key);
            }
            disposeResource(entry);
          });
        }
      };
    },
    invalidate: (key) => {
      const entry = resources.get(key);
      if (!entry) {
        return;
      }
      resources.delete(key);
      entry.disposeGeneration++;
      if (entry.refCount === 0) {
        disposeResource(entry);
      }
    },
    dispose: () => {
      if (disposed) {
        return;
      }
      disposed = true;
      const entries2 = Array.from(resources.values());
      resources.clear();
      let firstError = null;
      for (const entry of entries2) {
        try {
          disposeResource(entry);
        } catch (error2) {
          firstError ?? (firstError = error2);
        }
      }
      if (firstError !== null) {
        throw firstError;
      }
    }
  };
};
var getMediabunnyInputResourceKey = ({
  src,
  credentials,
  requestInitFingerprint,
  revision
}) => JSON.stringify([
  "mediabunny-input",
  src,
  credentials,
  requestInitFingerprint,
  revision
]);
var MEDIABUNNY_DURATION_VALUE_KEY = "mediabunny-duration";
var globalMediaResourceManager = makeMediaResourceManager();
var PlaybackPitchContext = (0, import_react101.createContext)(false);
var Root = null;
var listeners5 = [];
var getRoot = () => {
  return Root;
};
var waitForRoot = (fn) => {
  if (Root) {
    fn(Root);
    return () => {
      return;
    };
  }
  listeners5.push(fn);
  return () => {
    listeners5 = listeners5.filter((l) => l !== fn);
  };
};
var RemotionRootContexts = ({
  children,
  numberOfAudioTags,
  logLevel,
  audioLatencyHint,
  previewSampleRate,
  videoEnabled,
  audioEnabled,
  frameState,
  _experimentalKeepAudioContextAlive
}) => {
  const logging = (0, import_react102.useMemo)(() => {
    return { logLevel, mountTime: Date.now() };
  }, [logLevel]);
  return /* @__PURE__ */ (0, import_jsx_runtime41.jsx)(LogLevelContext.Provider, {
    value: logging,
    children: /* @__PURE__ */ (0, import_jsx_runtime41.jsx)(TimelineContextProvider, {
      frameState,
      children: /* @__PURE__ */ (0, import_jsx_runtime41.jsx)(MediaEnabledProvider, {
        videoEnabled,
        audioEnabled,
        children: /* @__PURE__ */ (0, import_jsx_runtime41.jsx)(EditorPropsProvider, {
          children: /* @__PURE__ */ (0, import_jsx_runtime41.jsx)(PrefetchProvider, {
            children: /* @__PURE__ */ (0, import_jsx_runtime41.jsx)(SequenceManagerProvider, {
              children: /* @__PURE__ */ (0, import_jsx_runtime41.jsx)(DurationsContextProvider, {
                children: /* @__PURE__ */ (0, import_jsx_runtime41.jsx)(BufferingProvider, {
                  children: /* @__PURE__ */ (0, import_jsx_runtime41.jsx)(SharedAudioContextProvider, {
                    audioLatencyHint,
                    audioEnabled,
                    previewSampleRate,
                    _experimentalKeepAudioContextAlive,
                    children: /* @__PURE__ */ (0, import_jsx_runtime41.jsx)(SharedAudioTagsContextProvider, {
                      numberOfAudioTags,
                      children: /* @__PURE__ */ (0, import_jsx_runtime41.jsx)(VideoProvider, {
                        children
                      })
                    })
                  })
                })
              })
            })
          })
        })
      })
    })
  });
};
var makeRenderResourceManager = () => {
  const resources = /* @__PURE__ */ new Map();
  let disposed = false;
  return {
    getOrCreateResource: ({
      key,
      create: create2
    }) => {
      if (disposed) {
        throw new Error("Render resource manager has already been disposed");
      }
      const existing = resources.get(key);
      if (existing) {
        return existing.resource;
      }
      const created = create2();
      resources.set(key, created);
      return created.resource;
    },
    dispose: () => {
      if (disposed) {
        return;
      }
      disposed = true;
      const resourcesToDispose = Array.from(resources.values());
      resources.clear();
      let firstError = null;
      for (const resource of resourcesToDispose) {
        try {
          resource.dispose();
        } catch (error2) {
          firstError ?? (firstError = error2);
        }
      }
      if (firstError !== null) {
        throw firstError;
      }
    }
  };
};
var RenderResourceManagerContext = import_react103.default.createContext(null);
var validateCalculated = ({
  calculated,
  compositionId,
  compositionFps,
  compositionHeight,
  compositionWidth,
  compositionDurationInFrames
}) => {
  const calculateMetadataErrorLocation = `calculated by calculateMetadata() for the composition "${compositionId}"`;
  const defaultErrorLocation = `of the "<Composition />" component with the id "${compositionId}"`;
  const width = calculated?.width ?? compositionWidth ?? void 0;
  validateDimension(width, "width", calculated?.width ? calculateMetadataErrorLocation : defaultErrorLocation);
  const height = calculated?.height ?? compositionHeight ?? void 0;
  validateDimension(height, "height", calculated?.height ? calculateMetadataErrorLocation : defaultErrorLocation);
  const fps = calculated?.fps ?? compositionFps ?? null;
  validateFps(fps, calculated?.fps ? calculateMetadataErrorLocation : defaultErrorLocation, false);
  const durationInFrames = calculated?.durationInFrames ?? compositionDurationInFrames ?? null;
  validateDurationInFrames(durationInFrames, {
    allowFloats: false,
    component: `of the "<Composition />" component with the id "${compositionId}"`
  });
  const defaultCodec = calculated?.defaultCodec;
  validateCodec(defaultCodec, calculateMetadataErrorLocation, "defaultCodec");
  const defaultOutName = calculated?.defaultOutName;
  const defaultVideoImageFormat = calculated?.defaultVideoImageFormat;
  const defaultPixelFormat = calculated?.defaultPixelFormat;
  const defaultProResProfile = calculated?.defaultProResProfile;
  const defaultSampleRate = calculated?.defaultSampleRate;
  return {
    width,
    height,
    fps,
    durationInFrames,
    defaultCodec,
    defaultOutName,
    defaultVideoImageFormat,
    defaultPixelFormat,
    defaultProResProfile,
    defaultSampleRate
  };
};
var makeVideoConfigWithMetadata = ({
  calculated,
  compositionDurationInFrames,
  compositionFps,
  compositionHeight,
  compositionId,
  compositionWidth,
  defaultProps,
  originalProps
}) => {
  const data = validateCalculated({
    calculated,
    compositionDurationInFrames,
    compositionFps,
    compositionHeight,
    compositionWidth,
    compositionId
  });
  return {
    metadataSource: {
      durationInFrames: calculated?.durationInFrames === void 0 ? "composition" : "calculate-metadata",
      fps: calculated?.fps === void 0 ? "composition" : "calculate-metadata",
      height: calculated?.height === void 0 ? "composition" : "calculate-metadata",
      width: calculated?.width === void 0 ? "composition" : "calculate-metadata"
    },
    videoConfig: {
      ...data,
      id: compositionId,
      defaultProps: serializeThenDeserializeInStudio(defaultProps ?? {}),
      props: serializeThenDeserializeInStudio(calculated?.props ?? originalProps),
      defaultCodec: data.defaultCodec ?? null,
      defaultOutName: data.defaultOutName ?? null,
      defaultVideoImageFormat: data.defaultVideoImageFormat ?? null,
      defaultPixelFormat: data.defaultPixelFormat ?? null,
      defaultProResProfile: data.defaultProResProfile ?? null,
      defaultSampleRate: data.defaultSampleRate ?? null
    }
  };
};
var resolveVideoConfigWithMetadata = ({
  calculateMetadata,
  signal,
  defaultProps,
  inputProps: originalProps,
  compositionId,
  compositionDurationInFrames,
  compositionFps,
  compositionHeight,
  compositionWidth
}) => {
  const calculatedProm = calculateMetadata ? calculateMetadata({
    defaultProps,
    props: originalProps,
    abortSignal: signal,
    compositionId,
    isRendering: getRemotionEnvironment2().isRendering
  }) : null;
  if (calculatedProm !== null && typeof calculatedProm === "object" && "then" in calculatedProm) {
    return calculatedProm.then((c2) => {
      return makeVideoConfigWithMetadata({
        calculated: c2,
        compositionDurationInFrames,
        compositionFps,
        compositionHeight,
        compositionWidth,
        compositionId,
        defaultProps,
        originalProps
      });
    });
  }
  return makeVideoConfigWithMetadata({
    calculated: calculatedProm,
    compositionDurationInFrames,
    compositionFps,
    compositionHeight,
    compositionWidth,
    compositionId,
    defaultProps,
    originalProps
  });
};
var resolveVideoConfig = (params) => {
  const resolved = resolveVideoConfigWithMetadata(params);
  if (typeof resolved === "object" && "then" in resolved) {
    return resolved.then(({ videoConfig }) => videoConfig);
  }
  return resolved.videoConfig;
};
var resolveVideoConfigWithMetadataOrCatch = (params) => {
  try {
    return {
      type: "success",
      result: resolveVideoConfigWithMetadata(params)
    };
  } catch (err) {
    return {
      type: "error",
      error: err
    };
  }
};
var resolveVideoConfigOrCatch = (params) => {
  try {
    const promiseOrReturnValue = resolveVideoConfig(params);
    return {
      type: "success",
      result: promiseOrReturnValue
    };
  } catch (err) {
    return {
      type: "error",
      error: err
    };
  }
};
var SequenceStackTracesUpdateContext = import_react104.default.createContext(() => {
});
var getEnvVariables = () => {
  if (getRemotionEnvironment2().isRendering) {
    const param = window.remotion_envVariables;
    if (!param) {
      return {};
    }
    return { ...JSON.parse(param), NODE_ENV: "production" };
  }
  if (false) {
  }
  return {
    NODE_ENV: "production"
  };
};
var setupEnvVariables = () => {
  const env = getEnvVariables();
  if (!window.process) {
    window.process = {};
  }
  if (!window.process.env) {
    window.process.env = {};
  }
  Object.keys(env).forEach((key) => {
    window.process.env[key] = env[key];
  });
};
var {
  freeze: _freeze,
  layout: _layout,
  ...trackSequenceSchema
} = sequenceSchema;
var trackSchema = {
  ...trackSequenceSchema,
  ...sequenceTimingSchema
};
var TrackWithoutSchema = ({
  name = "Track",
  children,
  layout = "none",
  ...props
}) => {
  const [id] = (0, import_react105.useState)(() => String(Math.random()));
  const value = (0, import_react105.useMemo)(() => ({ id, name }), [id, name]);
  return /* @__PURE__ */ (0, import_jsx_runtime42.jsx)(TimelineTrackContext.Provider, {
    value,
    children: /* @__PURE__ */ (0, import_jsx_runtime42.jsx)(SequenceWithoutSchema, {
      _remotionInternalDocumentationLink: "https://www.remotion.dev/docs/track",
      ...props,
      name,
      layout,
      _remotionInternalTimelineTrack: { role: "track", seriesOffset: null },
      children
    })
  });
};
var Track = withInteractivitySchema({
  Component: (props) => /* @__PURE__ */ (0, import_jsx_runtime42.jsx)(TrackWithoutSchema, {
    ...props,
    layout: "none"
  }),
  componentName: "<Track>",
  componentIdentity: "dev.remotion.remotion.Track",
  schema: trackSchema,
  supportsEffects: false
});
addSequenceStackTraces(Track);
var PixelDensityContext = import_react106.default.createContext(null);
var OffthreadVideoForRendering = ({
  onError,
  volume: volumeProp,
  playbackRate,
  src,
  muted,
  allowAmplificationDuringRender,
  transparent,
  toneMapped,
  toneFrequency,
  name,
  loopVolumeCurveBehavior,
  delayRenderRetries,
  delayRenderTimeoutInMilliseconds,
  onVideoFrame,
  crossOrigin,
  audioStreamIndex,
  preservePitch,
  ...props
}) => {
  const absoluteFrame = useTimelinePosition();
  const frame = useCurrentFrame();
  const volumePropsFrame = useFrameForVolumeProp(loopVolumeCurveBehavior);
  const videoConfig = useUnsafeVideoConfig();
  const sequenceContext = (0, import_react108.useContext)(SequenceContext);
  const sequencePlaybackRate = sequenceContext?.playbackRate ?? 1;
  const audioStartFrame = (0, import_react108.useContext)(Html5MediaTrimContext);
  const { registerRenderAsset, unregisterRenderAsset } = (0, import_react108.useContext)(RenderAssetManager);
  if (!src) {
    throw new TypeError("No `src` was passed to <OffthreadVideo>.");
  }
  const id = (0, import_react108.useMemo)(() => `offthreadvideo-${random2(src)}-${sequenceContext?.cumulatedFrom}-${sequenceContext?.relativeFrom}-${sequenceContext?.durationInFrames}`, [
    src,
    sequenceContext?.cumulatedFrom,
    sequenceContext?.relativeFrom,
    sequenceContext?.durationInFrames
  ]);
  const volume = evaluateVolume({
    volume: volumeProp,
    frame: volumePropsFrame,
    mediaVolume: 1
  });
  warnAboutTooHighVolume(volume);
  const audioEnabled = useAudioEnabled();
  const videoEnabled = useVideoEnabled();
  const { shouldUseAudio } = useMediaAudioState({
    muted,
    volume,
    audioEnabled
  });
  if (!videoConfig) {
    throw new Error("No video config found");
  }
  (0, import_react108.useEffect)(() => {
    if (!src) {
      throw new Error("No src passed");
    }
    if (!shouldUseAudio) {
      return;
    }
    registerRenderAsset({
      type: "video",
      src: getAbsoluteSrc(src),
      id,
      frame: absoluteFrame,
      volume,
      mediaFrame: audioStartFrame + (frame - audioStartFrame) / sequencePlaybackRate,
      playbackRate: playbackRate * sequencePlaybackRate,
      toneFrequency,
      audioStartFrame,
      audioStreamIndex,
      preservePitch: preservePitch ?? true
    });
    return () => unregisterRenderAsset(id);
  }, [
    shouldUseAudio,
    src,
    registerRenderAsset,
    id,
    unregisterRenderAsset,
    volume,
    frame,
    absoluteFrame,
    playbackRate,
    toneFrequency,
    audioStartFrame,
    sequencePlaybackRate,
    audioStreamIndex,
    preservePitch
  ]);
  const currentTime = (0, import_react108.useMemo)(() => {
    return getExpectedMediaFrameUncorrected({
      frame,
      playbackRate: playbackRate || 1,
      startFrom: audioStartFrame
    }) / videoConfig.fps;
  }, [frame, audioStartFrame, playbackRate, videoConfig.fps]);
  const actualSrc = (0, import_react108.useMemo)(() => {
    return getOffthreadVideoSource({
      src,
      currentTime,
      transparent,
      toneMapped
    });
  }, [toneMapped, currentTime, src, transparent]);
  const [imageSrc, setImageSrc] = (0, import_react108.useState)(null);
  const { delayRender, continueRender, cancelRender: cancelRender2 } = useDelayRender();
  (0, import_react108.useLayoutEffect)(() => {
    setImageSrc(null);
    if (!videoEnabled) {
      return;
    }
    const cleanup = [];
    const controller = new AbortController();
    const newHandle = delayRender(`Fetching ${actualSrc} from server`, {
      retries: delayRenderRetries ?? void 0,
      timeoutInMilliseconds: delayRenderTimeoutInMilliseconds ?? void 0
    });
    const execute = async () => {
      try {
        const res = await fetch(actualSrc, {
          signal: controller.signal,
          cache: "no-store"
        });
        if (res.status !== 200) {
          if (res.status === 500) {
            const json = await res.json();
            if (json.error) {
              const cleanedUpErrorMessage = json.error.replace(/^Error: /, "");
              throw new Error(cleanedUpErrorMessage);
            }
          }
          throw new Error(`Server returned status ${res.status} while fetching ${actualSrc}`);
        }
        const blob = new Blob([await res.arrayBuffer()], {
          type: res.headers.get("Content-Type") ?? ""
        });
        const url = URL.createObjectURL(blob);
        cleanup.push(() => URL.revokeObjectURL(url));
        setImageSrc({
          src: url,
          handle: newHandle
        });
      } catch (err) {
        if (err.message.includes("aborted")) {
          continueRender(newHandle);
          return;
        }
        if (controller.signal.aborted) {
          continueRender(newHandle);
          return;
        }
        if (err.message.includes("Failed to fetch")) {
          err = new Error(`Failed to fetch ${actualSrc}. This could be caused by Chrome rejecting the request because the disk space is low. Consider increasing the disk size of your environment.`, { cause: err });
        }
        if (onError) {
          onError(err);
        } else {
          cancelRender2(err);
        }
      }
    };
    execute();
    cleanup.push(() => {
      if (controller.signal.aborted) {
        return;
      }
      controller.abort();
    });
    return () => {
      cleanup.forEach((c2) => c2());
    };
  }, [
    actualSrc,
    videoEnabled,
    delayRenderRetries,
    delayRenderTimeoutInMilliseconds,
    onError,
    continueRender,
    cancelRender2,
    delayRender
  ]);
  const onErr = (0, import_react108.useCallback)(() => {
    if (onError) {
      onError?.(new Error("Failed to load image with src " + imageSrc));
    } else {
      cancelRender2("Failed to load image with src " + imageSrc);
    }
  }, [imageSrc, onError, cancelRender2]);
  const className = (0, import_react108.useMemo)(() => {
    return [OBJECTFIT_CONTAIN_CLASS_NAME, props.className].filter(truthy).join(" ");
  }, [props.className]);
  const onImageFrame = (0, import_react108.useCallback)((img) => {
    if (onVideoFrame) {
      onVideoFrame(img);
    }
  }, [onVideoFrame]);
  if (!imageSrc || !videoEnabled) {
    return null;
  }
  continueRender(imageSrc.handle);
  return /* @__PURE__ */ (0, import_jsx_runtime43.jsx)(Img, {
    src: imageSrc.src,
    delayRenderRetries,
    delayRenderTimeoutInMilliseconds,
    onImageFrame,
    ...props,
    onError: onErr,
    className
  });
};
var useEmitVideoFrame = ({
  ref,
  onVideoFrame
}) => {
  (0, import_react110.useEffect)(() => {
    const { current } = ref;
    if (!current) {
      return;
    }
    if (!onVideoFrame) {
      return;
    }
    let handle = 0;
    const callback = (_now, metadata) => {
      if (!ref.current) {
        return;
      }
      onVideoFrame(ref.current, _now, metadata);
      handle = ref.current.requestVideoFrameCallback(callback);
    };
    onVideoFrame(current);
    if (!current.requestVideoFrameCallback) {
      return;
    }
    handle = current.requestVideoFrameCallback(callback);
    return () => {
      if (handle) {
        current.cancelVideoFrameCallback(handle);
      }
    };
  }, [onVideoFrame, ref]);
};
var MediaPlaybackError = class extends Error {
  constructor({ message, src }) {
    super(message);
    __publicField(this, "src");
    this.name = "MediaPlaybackError";
    this.src = src;
  }
};
var VideoForDevelopmentRefForwardingFunction = (props, ref) => {
  const context = (0, import_react109.useContext)(SharedAudioContext);
  if (!context) {
    throw new Error("SharedAudioContext not found");
  }
  const videoRef = (0, import_react109.useRef)(null);
  const sharedSource = (0, import_react109.useMemo)(() => {
    if (!context.audioContext) {
      return null;
    }
    return makeSharedElementSourceNode({
      audioContext: context.audioContext,
      ref: videoRef
    });
  }, [context.audioContext]);
  const effectToUse = import_react109.default.useInsertionEffect ?? import_react109.default.useLayoutEffect;
  effectToUse(() => {
    return scheduleMediaSourceCleanup.bind(null, sharedSource?.cleanup ?? null);
  }, [sharedSource]);
  const {
    timelineId,
    userPreferredVolume,
    isMutedForPlayback,
    volume,
    muted,
    playbackRate,
    preservePitch,
    onlyWarnForMediaSeekingError,
    src,
    onDuration,
    acceptableTimeShift,
    acceptableTimeShiftInSeconds,
    toneFrequency,
    name,
    _remotionInternalNativeLoopPassed,
    _remotionInternalStack,
    style,
    pauseWhenBuffering,
    showInTimeline,
    loopVolumeCurveBehavior,
    onError,
    onAutoPlayError,
    onVideoFrame,
    crossOrigin,
    delayRenderRetries,
    delayRenderTimeoutInMilliseconds,
    allowAmplificationDuringRender,
    useWebAudioApi,
    audioStreamIndex,
    ...nativeProps
  } = props;
  const _propsValid = true;
  if (!_propsValid) {
    throw new Error("typecheck error");
  }
  const { fps, durationInFrames } = useVideoConfig();
  const parentSequence = (0, import_react109.useContext)(SequenceContext);
  const htmlInCanvasContext = (0, import_react109.useContext)(HtmlInCanvasAncestorContext);
  const logLevel = useLogLevel();
  const mountTime = useMountTime();
  if (typeof acceptableTimeShift !== "undefined") {
    throw new Error("acceptableTimeShift has been removed. Use acceptableTimeShiftInSeconds instead.");
  }
  warnAboutTooHighVolume(userPreferredVolume);
  useMediaPlayback({
    mediaRef: videoRef,
    src,
    mediaType: "video",
    playbackRate: props.playbackRate ?? 1,
    preservePitch,
    onlyWarnForMediaSeekingError,
    acceptableTimeshift: acceptableTimeShiftInSeconds ?? null,
    isPremounting: Boolean(parentSequence?.premounting),
    isPostmounting: Boolean(parentSequence?.postmounting),
    pauseWhenBuffering,
    onAutoPlayError: onAutoPlayError ?? null
  });
  useMediaTag({
    id: timelineId,
    isPostmounting: Boolean(parentSequence?.postmounting),
    isPremounting: Boolean(parentSequence?.premounting),
    mediaRef: videoRef,
    mediaType: "video",
    onAutoPlayError: onAutoPlayError ?? null
  });
  useVolume({
    logLevel,
    mediaRef: videoRef,
    volume: userPreferredVolume,
    source: sharedSource,
    shouldUseWebAudioApi: useWebAudioApi ?? false
  });
  const actualFrom = parentSequence ? parentSequence.relativeFrom : 0;
  const duration = parentSequence ? Math.min(parentSequence.durationInFrames, durationInFrames) : durationInFrames;
  const preloadedSrc = usePreload(src);
  const actualSrc = useAppendVideoFragment({
    actualSrc: preloadedSrc,
    actualFrom,
    duration,
    fps
  });
  (0, import_react109.useImperativeHandle)(ref, () => {
    return videoRef.current;
  }, []);
  (0, import_react109.useState)(() => playbackLogging({
    logLevel,
    message: `Mounting video with source = ${actualSrc}, v=${VERSION}, user agent=${typeof navigator === "undefined" ? "server" : navigator.userAgent}`,
    tag: "video",
    mountTime
  }));
  (0, import_react109.useEffect)(() => {
    const { current } = videoRef;
    if (!current) {
      return;
    }
    const errorHandler = () => {
      if (current.error) {
        console.error("Error occurred in video", current?.error);
        if (onError) {
          const err = new MediaPlaybackError({
            message: `Code ${current.error.code}: ${current.error.message}`,
            src
          });
          onError(err);
          return;
        }
        throw new MediaPlaybackError({
          message: `The browser threw an error while playing the video ${src}: Code ${current.error.code} - ${current?.error?.message}. See https://remotion.dev/docs/media-playback-error for help. Pass an onError() prop to handle the error.`,
          src
        });
      } else {
        if (onError) {
          const err = new MediaPlaybackError({
            message: `The browser threw an error while playing the video ${src}`,
            src
          });
          onError(err);
          return;
        }
        throw new MediaPlaybackError({
          message: "The browser threw an error while playing the video",
          src
        });
      }
    };
    current.addEventListener("error", errorHandler, { once: true });
    return () => {
      current.removeEventListener("error", errorHandler);
    };
  }, [onError, src]);
  useEmitVideoFrame({ ref: videoRef, onVideoFrame });
  useMediaDuration(videoRef, onDuration, src, false);
  (0, import_react109.useEffect)(() => {
    const { current } = videoRef;
    if (!current) {
      return;
    }
    if (isIosSafari()) {
      current.preload = "metadata";
    } else {
      current.preload = "auto";
    }
  }, []);
  const actualStyle = (0, import_react109.useMemo)(() => {
    return {
      ...style
    };
  }, [style]);
  const crossOriginValue = getCrossOriginValue({
    crossOrigin: crossOrigin ?? (htmlInCanvasContext === null ? void 0 : "anonymous"),
    requestsVideoFrame: Boolean(onVideoFrame),
    isClientSideRendering: false
  });
  const video = /* @__PURE__ */ (0, import_jsx_runtime44.jsx)("video", {
    ...nativeProps,
    ref: videoRef,
    muted: isMutedForPlayback,
    playsInline: true,
    src: actualSrc,
    loop: _remotionInternalNativeLoopPassed,
    style: actualStyle,
    disableRemotePlayback: true,
    crossOrigin: crossOriginValue,
    controls: false
  });
  return video;
};
var VideoForPreviewContent = (0, import_react109.forwardRef)(VideoForDevelopmentRefForwardingFunction);
var VideoForPreviewRefForwardingFunction = (props, ref) => {
  const {
    volume,
    muted,
    playbackRate,
    src,
    name,
    _remotionInternalStack,
    showInTimeline,
    loopVolumeCurveBehavior,
    onlyWarnForMediaSeekingError
  } = props;
  const [timelineId] = (0, import_react109.useState)(() => String(Math.random()));
  const parentSequence = (0, import_react109.useContext)(SequenceContext);
  const { isStudio } = useRemotionEnvironment();
  const [mediaVolume] = useMediaVolumeState();
  const volumePropFrame = useFrameForVolumeProp(loopVolumeCurveBehavior ?? "repeat");
  const userPreferredVolume = evaluateVolume({
    frame: volumePropFrame,
    volume,
    mediaVolume
  });
  const { isMutedForTimeline, isMutedForPlayback } = useMediaAudioState({
    muted: muted ?? false,
    volume: userPreferredVolume,
    audioEnabled: true
  });
  const getStack = (0, import_react109.useCallback)(() => {
    return _remotionInternalStack ?? null;
  }, [_remotionInternalStack]);
  const { automaticOutlineRef, registration } = useMediaInTimelineRegistration({
    mediaType: "video",
    src,
    playbackRate: playbackRate ?? 1,
    displayName: name ?? null,
    id: timelineId,
    getStack,
    showInTimeline,
    premountDisplay: parentSequence?.premountDisplay ?? null,
    postmountDisplay: parentSequence?.postmountDisplay ?? null,
    loopDisplay: void 0,
    documentationLink: onlyWarnForMediaSeekingError ? "https://www.remotion.dev/docs/offthreadvideo" : "https://www.remotion.dev/docs/html5-video",
    muted: isMutedForTimeline
  });
  const metadata = (0, import_react109.useMemo)(() => isStudio || automaticOutlineRef || registration !== null ? {
    type: "sequence",
    id: timelineId,
    value: registration,
    outlineChildrenRef: automaticOutlineRef
  } : null, [automaticOutlineRef, isStudio, registration, timelineId]);
  return /* @__PURE__ */ (0, import_jsx_runtime44.jsx)(CommittedMetadataProvider, {
    value: null,
    _remotionCommitMetadata: metadata,
    children: /* @__PURE__ */ (0, import_jsx_runtime44.jsx)(SequenceContent, {
      children: /* @__PURE__ */ (0, import_jsx_runtime44.jsx)(VideoForPreviewContent, {
        ...props,
        ref,
        timelineId,
        userPreferredVolume,
        isMutedForPlayback
      })
    })
  });
};
var VideoForPreview = (0, import_react109.forwardRef)(VideoForPreviewRefForwardingFunction);
var InnerOffthreadVideo = (props) => {
  const {
    startFrom,
    endAt,
    trimBefore,
    trimAfter,
    durationInFrames,
    name,
    pauseWhenBuffering,
    _remotionInternalStack,
    showInTimeline,
    ...otherProps
  } = props;
  const environment = useRemotionEnvironment();
  const shouldPauseWhenBuffering = resolveV5Default(pauseWhenBuffering);
  if (environment.isClientSideRendering) {
    throw new Error("<OffthreadVideo> is not supported in @remotion/web-renderer. Use <Video> from @remotion/media instead. See https://remotion.dev/docs/client-side-rendering/limitations");
  }
  const onDuration = (0, import_react107.useCallback)(() => {
    return;
  }, []);
  if (typeof props.src !== "string") {
    throw new TypeError(`The \`<OffthreadVideo>\` tag requires a string for \`src\`, but got ${JSON.stringify(props.src)} instead.`);
  }
  validateMediaTrimProps({ startFrom, endAt, trimBefore, trimAfter });
  if (durationInFrames !== void 0) {
    validateDurationInFrames(durationInFrames, {
      component: "of the <OffthreadVideo /> component",
      allowFloats: true
    });
  }
  const { trimBeforeValue, trimAfterValue } = resolveTrimProps({
    startFrom,
    endAt,
    trimBefore,
    trimAfter
  });
  const effectiveTrimAfter = getMediaTrimAfter({
    durationInFrames,
    trimAfter: trimAfterValue,
    trimBefore: trimBeforeValue
  });
  if (typeof trimBeforeValue !== "undefined" || typeof effectiveTrimAfter !== "undefined") {
    return /* @__PURE__ */ (0, import_jsx_runtime45.jsx)(Html5MediaTrimContext.Provider, {
      value: trimBeforeValue ?? 0,
      children: /* @__PURE__ */ (0, import_jsx_runtime45.jsx)(Sequence, {
        layout: "none",
        from: 0 - (trimBeforeValue ?? 0),
        showInTimeline: false,
        durationInFrames: effectiveTrimAfter === void 0 ? void 0 : (trimBeforeValue ?? 0) + (effectiveTrimAfter - (trimBeforeValue ?? 0)) / (props.playbackRate ?? 1),
        name,
        children: /* @__PURE__ */ (0, import_jsx_runtime45.jsx)(InnerOffthreadVideo, {
          pauseWhenBuffering: shouldPauseWhenBuffering,
          ...otherProps,
          trimAfter: void 0,
          durationInFrames: void 0,
          name: void 0,
          showInTimeline,
          trimBefore: void 0,
          _remotionInternalStack: void 0,
          startFrom: void 0,
          endAt: void 0
        })
      })
    });
  }
  validateMediaProps(props, "Video");
  if (environment.isRendering) {
    return /* @__PURE__ */ (0, import_jsx_runtime45.jsx)(OffthreadVideoForRendering, {
      pauseWhenBuffering: shouldPauseWhenBuffering,
      ...otherProps,
      trimAfter: void 0,
      durationInFrames: void 0,
      name: void 0,
      showInTimeline,
      trimBefore: void 0,
      _remotionInternalStack: void 0,
      startFrom: void 0,
      endAt: void 0
    });
  }
  const {
    transparent,
    toneMapped,
    onAutoPlayError,
    onVideoFrame,
    crossOrigin,
    delayRenderRetries,
    delayRenderTimeoutInMilliseconds,
    ...propsForPreview
  } = otherProps;
  return /* @__PURE__ */ (0, import_jsx_runtime45.jsx)(VideoForPreview, {
    _remotionInternalStack: _remotionInternalStack ?? null,
    onDuration,
    onlyWarnForMediaSeekingError: true,
    pauseWhenBuffering: shouldPauseWhenBuffering,
    showInTimeline: showInTimeline ?? true,
    onAutoPlayError: onAutoPlayError ?? void 0,
    onVideoFrame: onVideoFrame ?? null,
    crossOrigin,
    ...propsForPreview,
    _remotionInternalNativeLoopPassed: false
  });
};
var OffthreadVideo = ({
  src,
  acceptableTimeShiftInSeconds,
  allowAmplificationDuringRender,
  audioStreamIndex,
  crossOrigin,
  delayRenderRetries,
  delayRenderTimeoutInMilliseconds,
  loopVolumeCurveBehavior,
  muted,
  name,
  onAutoPlayError,
  onError,
  onVideoFrame,
  pauseWhenBuffering,
  playbackRate,
  preservePitch,
  showInTimeline,
  style,
  toneFrequency,
  toneMapped,
  transparent,
  trimAfter,
  durationInFrames,
  trimBefore,
  useWebAudioApi,
  volume,
  _remotionInternalNativeLoopPassed,
  endAt,
  _remotionInternalStack,
  startFrom,
  imageFormat,
  ...props
}) => {
  if (imageFormat) {
    throw new TypeError(`The \`<OffthreadVideo>\` tag does no longer accept \`imageFormat\`. Use the \`transparent\` prop if you want to render a transparent video.`);
  }
  return /* @__PURE__ */ (0, import_jsx_runtime45.jsx)(InnerOffthreadVideo, {
    acceptableTimeShiftInSeconds,
    allowAmplificationDuringRender: allowAmplificationDuringRender ?? true,
    audioStreamIndex: audioStreamIndex ?? 0,
    crossOrigin,
    delayRenderRetries,
    delayRenderTimeoutInMilliseconds,
    loopVolumeCurveBehavior: loopVolumeCurveBehavior ?? "repeat",
    muted: muted ?? false,
    name,
    onAutoPlayError: onAutoPlayError ?? null,
    onError,
    onVideoFrame,
    pauseWhenBuffering: resolveV5Default(pauseWhenBuffering),
    playbackRate: playbackRate ?? 1,
    preservePitch,
    toneFrequency: toneFrequency ?? 1,
    showInTimeline: showInTimeline ?? true,
    src,
    _remotionInternalStack,
    startFrom,
    _remotionInternalNativeLoopPassed: _remotionInternalNativeLoopPassed ?? false,
    endAt,
    style,
    toneMapped: toneMapped ?? true,
    transparent: transparent ?? false,
    trimAfter,
    durationInFrames,
    trimBefore,
    useWebAudioApi: useWebAudioApi ?? false,
    volume,
    ...props
  });
};
addSequenceStackTraces(OffthreadVideo);
var WATCH_REMOTION_STATIC_FILES = "remotion_staticFilesChanged";
function useRemotionContexts() {
  const mediaEnabledContext = import_react111.default.useContext(MediaEnabledContext);
  const compositionManagerCtx = import_react111.default.useContext(CompositionManager);
  const videoContext = import_react111.default.useContext(VideoContext);
  const timelineContext = import_react111.default.useContext(TimelineContext);
  const setTimelineContext = import_react111.default.useContext(SetTimelineContext);
  const sequenceContext = import_react111.default.useContext(SequenceContext);
  const defaultPremountInSeconds = import_react111.default.useContext(DefaultPremountContext);
  const timelineTrackContext = import_react111.default.useContext(TimelineTrackContext);
  const canUseRemotionHooksContext = import_react111.default.useContext(CanUseRemotionHooks);
  const preloadContext = import_react111.default.useContext(PreloadContext);
  const resolveCompositionContext = import_react111.default.useContext(ResolveCompositionContext);
  const renderAssetManagerContext = import_react111.default.useContext(RenderAssetManager);
  const sequenceManagerActionsContext = import_react111.default.useContext(SequenceManagerActionsContext);
  const sequenceManagerRefContext = import_react111.default.useContext(SequenceManagerRefContext);
  const sequenceRegistryContext = import_react111.default.useContext(SequenceRegistryContext);
  const sequenceRegistryScopeContext = import_react111.default.useContext(SequenceRegistryScopeContext);
  const sequenceRegistrationContext = import_react111.default.useContext(SequenceRegistrationContext);
  const disableSequenceRegistrationContext = import_react111.default.useContext(DisableSequenceRegistrationContext);
  const remotionEnvironmentContext = import_react111.default.useContext(RemotionEnvironmentContext);
  const visualModePropStatusesRefContext = import_react111.default.useContext(VisualModePropStatusesRefContext);
  const bufferManagerContext = import_react111.default.useContext(BufferingContextReact);
  const logLevelContext = import_react111.default.useContext(LogLevelContext);
  const effectPreviewContext = import_react111.default.useContext(EffectPreviewContext);
  return (0, import_react111.useMemo)(() => ({
    mediaEnabledContext,
    compositionManagerCtx,
    videoContext,
    timelineContext,
    setTimelineContext,
    sequenceContext,
    defaultPremountInSeconds,
    timelineTrackContext,
    canUseRemotionHooksContext,
    preloadContext,
    resolveCompositionContext,
    renderAssetManagerContext,
    sequenceManagerActionsContext,
    sequenceManagerRefContext,
    sequenceRegistryContext,
    sequenceRegistryScopeContext,
    sequenceRegistrationContext,
    disableSequenceRegistrationContext,
    remotionEnvironmentContext,
    visualModePropStatusesRefContext,
    bufferManagerContext,
    logLevelContext,
    effectPreviewContext
  }), [
    mediaEnabledContext,
    compositionManagerCtx,
    videoContext,
    sequenceContext,
    defaultPremountInSeconds,
    timelineTrackContext,
    setTimelineContext,
    timelineContext,
    canUseRemotionHooksContext,
    preloadContext,
    resolveCompositionContext,
    renderAssetManagerContext,
    sequenceManagerActionsContext,
    sequenceManagerRefContext,
    sequenceRegistryContext,
    sequenceRegistryScopeContext,
    sequenceRegistrationContext,
    disableSequenceRegistrationContext,
    remotionEnvironmentContext,
    visualModePropStatusesRefContext,
    bufferManagerContext,
    logLevelContext,
    effectPreviewContext
  ]);
}
var SequenceRegistryScopeProvider = withCommittedMetadata(SequenceRegistryScopeContext.Provider);
var ForwardedSequenceRegistry = ({
  contexts,
  children
}) => {
  const [scopeId] = (0, import_react111.useState)(() => String(Math.random()));
  const [observerAvailable, setObserverAvailable] = (0, import_react111.useState)(isCommitRegistrationObserverInstalled);
  const observedCommitRef = (0, import_react111.useRef)(false);
  const observerFailedRef = (0, import_react111.useRef)(false);
  const unmountedRef = (0, import_react111.useRef)(false);
  const lifetimeRef = (0, import_react111.useRef)(0);
  const registry = contexts.sequenceRegistryContext;
  const scope = contexts.sequenceRegistryScopeContext;
  const activeRegistryRef = (0, import_react111.useRef)(registry);
  const commitRegistrationEnabled = scope?.commitRegistrationRequested === true && registry !== null && observerAvailable;
  const onCommitSequences = (0, import_react111.useCallback)((sequences, sequenceIds) => {
    if (observerFailedRef.current && sequenceIds.length > 0) {
      return;
    }
    observedCommitRef.current = true;
    scope?.onCommitSequences(scopeId, sequences, sequenceIds);
  }, [scope, scopeId]);
  const useIsomorphicLayoutEffect7 = typeof window === "undefined" ? import_react111.default.useEffect : import_react111.default.useLayoutEffect;
  useIsomorphicLayoutEffect7(() => {
    if (scope === null || typeof window === "undefined") {
      return;
    }
    const lifetime = ++lifetimeRef.current;
    unmountedRef.current = false;
    activeRegistryRef.current = registry;
    const onFailure = () => {
      if (observerFailedRef.current) {
        return;
      }
      observerFailedRef.current = true;
      queueMicrotask(() => {
        scope.onCommitSequences(scopeId, [], []);
        queueMicrotask(() => {
          if (!unmountedRef.current)
            setObserverAvailable(false);
        });
      });
    };
    window.addEventListener(COMMIT_REGISTRATION_ERROR_EVENT, onFailure);
    if (commitRegistrationEnabled) {
      queueMicrotask(() => {
        if (lifetimeRef.current === lifetime && !unmountedRef.current && !observedCommitRef.current) {
          onFailure();
        }
      });
    }
    return () => {
      unmountedRef.current = true;
      window.removeEventListener(COMMIT_REGISTRATION_ERROR_EVENT, onFailure);
      queueMicrotask(() => {
        if (activeRegistryRef.current !== registry || lifetimeRef.current === lifetime && unmountedRef.current) {
          scope.onCommitSequences(scopeId, [], []);
        }
      });
    };
  }, [scope, scopeId, registry, commitRegistrationEnabled]);
  const metadata = (0, import_react111.useMemo)(() => ({
    type: "sequence-manager",
    id: scopeId,
    onCommit: commitRegistrationEnabled ? onCommitSequences : null
  }), [commitRegistrationEnabled, onCommitSequences, scopeId]);
  return /* @__PURE__ */ (0, import_jsx_runtime46.jsx)(SequenceRegistryScopeProvider, {
    value: scope,
    _remotionCommitMetadata: metadata,
    children: /* @__PURE__ */ (0, import_jsx_runtime46.jsx)(SequenceManagerActionsContext.Provider, {
      value: contexts.sequenceManagerActionsContext,
      children: /* @__PURE__ */ (0, import_jsx_runtime46.jsx)(SequenceRegistryContext.Provider, {
        value: registry,
        children: /* @__PURE__ */ (0, import_jsx_runtime46.jsx)(SequenceCommitRegistrationContext.Provider, {
          value: commitRegistrationEnabled,
          children
        })
      })
    })
  });
};
var RemotionContextProvider = (props) => {
  const { children, contexts } = props;
  return /* @__PURE__ */ (0, import_jsx_runtime46.jsx)(LogLevelContext.Provider, {
    value: contexts.logLevelContext,
    children: /* @__PURE__ */ (0, import_jsx_runtime46.jsx)(CanUseRemotionHooks.Provider, {
      value: contexts.canUseRemotionHooksContext,
      children: /* @__PURE__ */ (0, import_jsx_runtime46.jsx)(PreloadContext.Provider, {
        value: contexts.preloadContext,
        children: /* @__PURE__ */ (0, import_jsx_runtime46.jsx)(CompositionManager.Provider, {
          value: contexts.compositionManagerCtx,
          children: /* @__PURE__ */ (0, import_jsx_runtime46.jsx)(SequenceManagerRefContext.Provider, {
            value: contexts.sequenceManagerRefContext,
            children: /* @__PURE__ */ (0, import_jsx_runtime46.jsx)(RemotionEnvironmentContext.Provider, {
              value: contexts.remotionEnvironmentContext,
              children: /* @__PURE__ */ (0, import_jsx_runtime46.jsx)(SequenceRegistrationContext.Provider, {
                value: contexts.sequenceRegistrationContext,
                children: /* @__PURE__ */ (0, import_jsx_runtime46.jsx)(DisableSequenceRegistrationContext.Provider, {
                  value: contexts.disableSequenceRegistrationContext,
                  children: /* @__PURE__ */ (0, import_jsx_runtime46.jsx)(ForwardedSequenceRegistry, {
                    contexts,
                    children: /* @__PURE__ */ (0, import_jsx_runtime46.jsx)(VisualModePropStatusesRefContext.Provider, {
                      value: contexts.visualModePropStatusesRefContext,
                      children: /* @__PURE__ */ (0, import_jsx_runtime46.jsx)(RenderAssetManager.Provider, {
                        value: contexts.renderAssetManagerContext,
                        children: /* @__PURE__ */ (0, import_jsx_runtime46.jsx)(ResolveCompositionContext.Provider, {
                          value: contexts.resolveCompositionContext,
                          children: /* @__PURE__ */ (0, import_jsx_runtime46.jsx)(TimelineContext.Provider, {
                            value: contexts.timelineContext,
                            children: /* @__PURE__ */ (0, import_jsx_runtime46.jsx)(SetTimelineContext.Provider, {
                              value: contexts.setTimelineContext,
                              children: /* @__PURE__ */ (0, import_jsx_runtime46.jsx)(SequenceContext.Provider, {
                                value: contexts.sequenceContext,
                                children: /* @__PURE__ */ (0, import_jsx_runtime46.jsx)(BufferingContextReact.Provider, {
                                  value: contexts.bufferManagerContext,
                                  children: /* @__PURE__ */ (0, import_jsx_runtime46.jsx)(TimelineTrackContext.Provider, {
                                    value: contexts.timelineTrackContext,
                                    children: /* @__PURE__ */ (0, import_jsx_runtime46.jsx)(DefaultPremountContext.Provider, {
                                      value: contexts.defaultPremountInSeconds,
                                      children: /* @__PURE__ */ (0, import_jsx_runtime46.jsx)(VideoContext.Provider, {
                                        value: contexts.videoContext,
                                        children: /* @__PURE__ */ (0, import_jsx_runtime46.jsx)(MediaEnabledContext.Provider, {
                                          value: contexts.mediaEnabledContext,
                                          children: /* @__PURE__ */ (0, import_jsx_runtime46.jsx)(EffectPreviewContext.Provider, {
                                            value: contexts.effectPreviewContext,
                                            children: /* @__PURE__ */ (0, import_jsx_runtime46.jsx)(SequenceActivityContext.Provider, {
                                              value: false,
                                              children
                                            })
                                          })
                                        })
                                      })
                                    })
                                  })
                                })
                              })
                            })
                          })
                        })
                      })
                    })
                  })
                })
              })
            })
          })
        })
      })
    })
  });
};
var compositionSelectorRef = (0, import_react96.createRef)();
var Internals = {
  getDelayRenderSuspendedTime,
  suspendDelayRenderTimeout,
  bufferingDiagnostics,
  playbackDiagnostics,
  registerMediabunnySink,
  HtmlInCanvasFallback,
  useHtmlInCanvasUnsupportedMessage,
  OptimisticEffects,
  useOptimisticEffects,
  OptimisticSequenceDeletion,
  usePendingSequenceDeletions,
  createElementSourceProxy,
  CommittedMetadataProvider,
  withCommittedMetadata,
  DefaultPremountContext,
  evaluateSourceNumericValue,
  evaluateSourcePropStatuses,
  AbsoluteFillElement,
  MaxMediaCacheSizeContext,
  getMediabunnyInputResourceKey,
  globalMediaResourceManager,
  makeMediaResourceManager,
  MEDIABUNNY_DURATION_VALUE_KEY,
  makeRenderResourceManager,
  RenderResourceManagerContext,
  createRuntimeValueStore,
  useUnsafeVideoConfig,
  useFrameForVolumeProp,
  useTimelinePosition,
  useAbsoluteTimelinePosition,
  useIsInsideFreeze,
  useIsInsideNonPremountFreeze,
  useMediaAudioState,
  evaluateVolume,
  getAbsoluteSrc,
  getAnimatedImageDurationInSeconds,
  getAssetDisplayName,
  Timeline: exports_timeline_position_state,
  validateMediaTrimProps,
  validateMediaProps,
  resolveTrimProps,
  VideoForPreview,
  CompositionManager,
  CompositionManagerRefContext,
  CompositionSetters,
  VisualModePropStatusesContext,
  VisualModePropStatusesRefContext,
  VisualModePropStatusesSubscriptionContext,
  VisualModeBatchSettersContext,
  VisualModeDragOverridesContext,
  VisualModeDragOverridesRefContext,
  VisualModeSettersContext,
  SequenceManagerProvider,
  SequenceManagerRefContext,
  SequenceRegistryContext,
  useActiveFromDragOverrideKeys,
  useDragOverridesForNodePath,
  useSequenceManagerSequences,
  SequenceRegistrationContext,
  DisableSequenceRegistrationProvider,
  CommittedMetadataInternals,
  SequenceOutlineInternals,
  SequenceOutlineContext,
  SequenceStackTracesUpdateContext,
  baseSchema,
  sequenceSchema,
  sequenceTimingSchema,
  SequenceContent,
  DEFAULT_SEQUENCE_ACTIVITY_LIMIT,
  SequenceActivitySettingsContext,
  SequenceWithoutSchema,
  sequenceStyleSchema,
  sequenceVisualStyleSchema,
  sequencePremountSchema,
  sequenceCropSchema,
  textSchema,
  transformSchema,
  premountSchema,
  flattenActiveSchema,
  getFlatSchemaWithAllKeys,
  RemotionRootContexts,
  CompositionManagerProvider,
  CompositionRegistryProvider,
  useVideo,
  VideoProvider,
  getRoot,
  useMediaVolumeState,
  usePlayerMutedState,
  useMediaInTimeline: useMediaInTimelineRegistration,
  useLazyComponent,
  truthy,
  SequenceContext,
  TimelineTrackContext,
  TrackWithoutSchema,
  PremountContext,
  usePremounting,
  resolveSequenceDuration,
  useRemotionContexts,
  RemotionContextProvider,
  CSSUtils: exports_default_css,
  setupEnvVariables,
  MediaVolumeContext,
  SetMediaVolumeContext,
  getRemotionEnvironment: getRemotionEnvironment2,
  SharedAudioContext,
  SharedAudioContextProvider,
  SharedAudioTagsContext,
  SharedAudioTagsContextProvider,
  getAudioSyncAnchorTolerance,
  invalidCompositionErrorMessage,
  invalidFolderNameErrorMessage,
  calculateMediaDuration,
  isCompositionIdValid,
  isFolderNameValid,
  getPreviewDomElement,
  compositionsRef,
  portalNode,
  setPortalNodeCurrentScale,
  waitForRoot,
  SetTimelineContext,
  CanUseRemotionHooksProvider,
  CanUseRemotionHooks,
  DisableInteractivityProvider,
  EnableInteractivityProvider,
  PrefetchProvider,
  DurationsContextProvider,
  IsPlayerContextProvider,
  useIsPlayer,
  EditorPropsProvider,
  EditorPropsContext,
  usePreload,
  resolveVideoConfig,
  resolveVideoConfigOrCatch,
  resolveVideoConfigWithMetadataOrCatch,
  ResolveCompositionContext,
  useResolvedVideoConfig,
  resolveCompositionsRef,
  REMOTION_STUDIO_CONTAINER_ELEMENT,
  RenderAssetManager,
  persistCurrentFrame,
  usePlaybackRate,
  useTimelineContext,
  useTimelineSetFrameWithoutSeek,
  isIosSafari,
  WATCH_REMOTION_STATIC_FILES,
  REACT_REFRESH_STARTED_EVENT,
  REACT_REFRESH_FINISHED_EVENT,
  addSequenceStackTraces,
  useMediaStartsAt,
  BufferingProvider,
  BufferingContextReact,
  getComponentsToAddStacksTo,
  getSingleChildComponent,
  getStackForControls,
  makeOriginalSourceStack,
  parseOriginalSourceStack,
  REMOTION_INTERNAL_STACK_PROP,
  setComponentIdentityResolver,
  CurrentScaleContext,
  PixelDensityContext,
  PreviewSizeContext,
  calculateScale,
  validateRenderAsset,
  Log,
  LogLevelContext,
  useLogLevel,
  playbackLogging,
  timeValueRef,
  compositionSelectorRef,
  RemotionEnvironmentContext,
  warnAboutTooHighVolume,
  AudioForPreview,
  OBJECTFIT_CONTAIN_CLASS_NAME,
  InnerOffthreadVideo,
  useBasicMediaInTimeline,
  getInputPropsOverride,
  setInputPropsOverride,
  useVideoEnabled,
  useAudioEnabled,
  useBuffering,
  TimelinePosition: exports_timeline_position_state,
  useTimelineSeek,
  DelayRenderContextType,
  TimelineContext,
  usePlaying,
  PlaybackPitchContext,
  PlaybackRateContext,
  AbsoluteTimeContext,
  RenderAssetManagerProvider,
  getEffectiveVisualModeValue,
  CompositionRenderErrorContext,
  useEffectChainState,
  createEffectChainState,
  cleanupEffectChainState,
  runEffectChain,
  useMemoizedEffects,
  subscribeToEffectSource,
  useMemoizedEffectDefinitions,
  PreferredEffectBackendContext,
  validatePreferredEffectBackend,
  createEffect,
  EffectPreviewContext,
  captureEffectPreviewSnapshot,
  createEffectImplementation,
  createCurveSampler,
  createWebGLContextError,
  createWebGL2ContextError,
  computeEffectiveSchemaValuesDotNotation,
  interpolateKeyframedStatus,
  prepareNumericKeyframedStatus,
  setInterpolatePaths,
  makeStaticDragOverride,
  makeKeyframedDragOverride,
  resolveDragOverrideValue,
  getStaticDragOverrideValue,
  OverrideIdsToNodePathsGettersContext,
  OverrideIdsToNodePathsSettersContext,
  findPropsToDelete,
  makeSequencePropsSubscriptionKey,
  getPropStatusesCtx,
  getEffectPropStatusesCtx,
  hiddenField,
  durationInFramesField,
  freezeField,
  fromField,
  trimAfterField,
  resolveSequenceCrop,
  useCropStyle
};
Object.assign(Internals, { useSyncExternalStore: useSyncExternalStore2 });
var flattenChildren = (children) => {
  const childrenArray = import_react113.default.Children.toArray(children);
  return childrenArray.reduce((flatChildren, child) => {
    if (child.type === import_react113.default.Fragment) {
      return flatChildren.concat(flattenChildren(child.props.children));
    }
    flatChildren.push(child);
    return flatChildren;
  }, []);
};
var seriesSequenceSchema = {
  durationInFrames: Interactive.baseSchema.durationInFrames,
  name: Interactive.sequenceSchema.name,
  hidden: Interactive.sequenceSchema.hidden,
  showInTimeline: Interactive.sequenceSchema.showInTimeline,
  freeze: Interactive.baseSchema.freeze,
  trimBefore: Interactive.sequenceSchema.trimBefore,
  playbackRate: Interactive.sequenceSchema.playbackRate,
  layout: Interactive.sequenceSchema.layout
};
var SeriesSequenceInner = (0, import_react112.forwardRef)(({ offset = 0, className = "", _remotionInternalRender = null, ...props }, ref) => {
  useRequireToBeInsideSeries();
  if (_remotionInternalRender) {
    return _remotionInternalRender({ ...props, offset, className: className || void 0 }, ref);
  }
  return /* @__PURE__ */ (0, import_jsx_runtime47.jsx)(IsNotInsideSeriesProvider, {
    children: props.children
  });
});
var SeriesSequence = Interactive.withSchema({
  Component: SeriesSequenceInner,
  componentName: "<Series.Sequence>",
  componentIdentity: "dev.remotion.remotion.Series.Sequence",
  schema: seriesSequenceSchema,
  supportsEffects: false
});
var SequenceWithoutSchemaWithRef = SequenceWithoutSchema;
var validateSeriesSequenceProps = ({
  durationInFrames,
  offset: offsetProp,
  index,
  childrenLength
}) => {
  const debugInfo = `index = ${index}, duration = ${durationInFrames}`;
  if (index !== childrenLength - 1 || durationInFrames !== Infinity) {
    validateDurationInFrames(durationInFrames, {
      component: `of a <Series.Sequence /> component`,
      allowFloats: true
    });
  }
  const offset = offsetProp ?? 0;
  if (Number.isNaN(offset)) {
    throw new TypeError(`The "offset" property of a <Series.Sequence /> must not be NaN, but got NaN (${debugInfo}).`);
  }
  if (!Number.isFinite(offset)) {
    throw new TypeError(`The "offset" property of a <Series.Sequence /> must be finite, but got ${offset} (${debugInfo}).`);
  }
  if (offset % 1 !== 0) {
    throw new TypeError(`The "offset" property of a <Series.Sequence /> must be finite, but got ${offset} (${debugInfo}).`);
  }
  return offset;
};
var SeriesInner = (props) => {
  const pendingDeletions = usePendingSequenceDeletions();
  const childrenValue = (0, import_react112.useMemo)(() => {
    const flattenedChildren = flattenChildren(props.children).filter((child) => !OptimisticSequenceDeletion.isElementDeleted(child, pendingDeletions));
    const renderChildren = (i, startFrame) => {
      if (i === flattenedChildren.length) {
        return null;
      }
      const child = flattenedChildren[i];
      const castedChild = child;
      if (typeof castedChild === "string") {
        if (castedChild.trim() === "") {
          return renderChildren(i + 1, startFrame);
        }
        throw new TypeError(`The <Series /> component only accepts a list of <Series.Sequence /> components as its children, but you passed a string "${castedChild}"`);
      }
      if (castedChild.type !== SeriesSequence) {
        throw new TypeError(`The <Series /> component only accepts a list of <Series.Sequence /> components as its children, but got ${castedChild} instead`);
      }
      const castedElement = castedChild;
      validateSeriesSequenceProps({
        durationInFrames: castedElement.props.durationInFrames,
        offset: castedElement.props.offset,
        index: i,
        childrenLength: flattenedChildren.length
      });
      return import_react112.default.cloneElement(castedElement, {
        _remotionInternalRender: (resolvedProps, ref) => {
          const durationInFramesProp = resolvedProps.durationInFrames;
          const timelineDurationInFrames = durationInFramesProp / (resolvedProps.playbackRate ?? 1);
          if (resolvedProps.loop) {
            throw new Error("<Series.Sequence> does not accept `loop`. Put a looping <Sequence> inside the <Series.Sequence> instead.");
          }
          const {
            durationInFrames: _durationInFrames,
            children: sequenceChildren,
            offset: offsetProp,
            controls,
            from: _from,
            name,
            ...passedProps
          } = resolvedProps;
          const offset = validateSeriesSequenceProps({
            durationInFrames: durationInFramesProp,
            offset: offsetProp,
            index: i,
            childrenLength: flattenedChildren.length
          });
          const currentStartFrame = startFrame + offset;
          const nextStartFrame = startFrame + timelineDurationInFrames + offset;
          return /* @__PURE__ */ (0, import_jsx_runtime47.jsxs)(import_jsx_runtime47.Fragment, {
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime47.jsx)(SequenceWithoutSchemaWithRef, {
                ref,
                name: name || "<Series.Sequence>",
                _remotionInternalDocumentationLink: "https://www.remotion.dev/docs/series",
                controls: controls ?? void 0,
                from: currentStartFrame,
                durationInFrames: durationInFramesProp,
                ...passedProps,
                _remotionInternalTimelineTrack: {
                  role: "clip",
                  seriesOffset: offset
                },
                children: /* @__PURE__ */ (0, import_jsx_runtime47.jsx)(IsNotInsideSeriesProvider, {
                  children: sequenceChildren
                })
              }),
              renderChildren(i + 1, nextStartFrame)
            ]
          });
        }
      });
    };
    return renderChildren(0, 0);
  }, [props.children, pendingDeletions]);
  return /* @__PURE__ */ (0, import_jsx_runtime47.jsx)(TrackWithoutSchema, {
    layout: "none",
    _remotionInternalDocumentationLink: "https://www.remotion.dev/docs/series",
    ...props,
    name: props.name ?? "<Series>",
    children: /* @__PURE__ */ (0, import_jsx_runtime47.jsx)(IsInsideSeriesContainer, {
      children: childrenValue
    })
  });
};
var Series = Object.assign(withInteractivitySchema({
  Component: SeriesInner,
  componentName: "<Series>",
  componentIdentity: "dev.remotion.remotion.Series",
  schema: {
    ...sequenceSchemaDefaultLayoutNone,
    ...sequenceTimingSchema
  },
  supportsEffects: false
}), {
  Sequence: SeriesSequence
});
addSequenceStackTraces(Series);
var Still = (props) => {
  const newProps = {
    ...props,
    durationInFrames: 1,
    fps: 1
  };
  return import_react114.default.createElement(Composition, newProps);
};
addSequenceStackTraces(Still);
var roundTo6Commas = (num) => {
  return Math.round(num * 1e5) / 1e5;
};
var seekToTime = ({
  element,
  desiredTime,
  logLevel,
  mountTime
}) => {
  if (isApproximatelyTheSame(element.currentTime, desiredTime)) {
    return {
      wait: Promise.resolve(desiredTime),
      cancel: () => {
      }
    };
  }
  let cancel;
  let cancelSeeked = null;
  const prom = new Promise((resolve) => {
    cancel = element.requestVideoFrameCallback((now, metadata) => {
      const displayIn = metadata.expectedDisplayTime - now;
      if (displayIn <= 0) {
        resolve(metadata.mediaTime);
        return;
      }
      setTimeout(() => {
        resolve(metadata.mediaTime);
      }, displayIn + 150);
    });
  });
  const waitForSeekedEvent = new Promise((resolve) => {
    const onDone = () => {
      resolve();
    };
    element.addEventListener("seeked", onDone, {
      once: true
    });
    cancelSeeked = () => {
      element.removeEventListener("seeked", onDone);
    };
  });
  seek({
    logLevel,
    mediaRef: element,
    time: desiredTime,
    why: "Seeking during rendering",
    mountTime
  });
  return {
    wait: Promise.all([prom, waitForSeekedEvent]).then(([time]) => time),
    cancel: () => {
      cancelSeeked?.();
      element.cancelVideoFrameCallback(cancel);
    }
  };
};
var seekToTimeMultipleUntilRight = ({
  element,
  desiredTime,
  fps,
  logLevel,
  mountTime
}) => {
  const threshold = 1 / fps / 2;
  let currentCancel = () => {
    return;
  };
  if (Number.isFinite(element.duration) && element.currentTime >= element.duration && desiredTime >= element.duration) {
    return {
      prom: Promise.resolve(),
      cancel: () => {
      }
    };
  }
  const prom = new Promise((resolve, reject) => {
    const firstSeek = seekToTime({
      element,
      desiredTime: desiredTime + threshold,
      logLevel,
      mountTime
    });
    firstSeek.wait.then((seekedTo) => {
      const difference = Math.abs(desiredTime - seekedTo);
      if (difference <= threshold) {
        return resolve();
      }
      const sign = desiredTime > seekedTo ? 1 : -1;
      const newSeek = seekToTime({
        element,
        desiredTime: seekedTo + threshold * sign,
        logLevel,
        mountTime
      });
      currentCancel = newSeek.cancel;
      newSeek.wait.then((newTime) => {
        const newDifference = Math.abs(desiredTime - newTime);
        if (roundTo6Commas(newDifference) <= roundTo6Commas(threshold)) {
          return resolve();
        }
        const thirdSeek = seekToTime({
          element,
          desiredTime: desiredTime + threshold,
          logLevel,
          mountTime
        });
        currentCancel = thirdSeek.cancel;
        return thirdSeek.wait.then(() => {
          resolve();
        }).catch((err) => {
          reject(err);
        });
      }).catch((err) => {
        reject(err);
      });
    });
    currentCancel = firstSeek.cancel;
  });
  return {
    prom,
    cancel: () => {
      currentCancel();
    }
  };
};
var VideoForRenderingForwardFunction = ({
  onError,
  volume: volumeProp,
  allowAmplificationDuringRender,
  playbackRate,
  onDuration,
  toneFrequency,
  name,
  acceptableTimeShiftInSeconds,
  delayRenderRetries,
  delayRenderTimeoutInMilliseconds,
  loopVolumeCurveBehavior,
  audioStreamIndex,
  onVideoFrame,
  preservePitch,
  crossOrigin,
  ...props
}, ref) => {
  const absoluteFrame = useTimelinePosition();
  const frame = useCurrentFrame();
  const volumePropsFrame = useFrameForVolumeProp(loopVolumeCurveBehavior ?? "repeat");
  const videoConfig = useUnsafeVideoConfig();
  const videoRef = (0, import_react116.useRef)(null);
  const sequenceContext = (0, import_react116.useContext)(SequenceContext);
  const htmlInCanvasContext = (0, import_react116.useContext)(HtmlInCanvasAncestorContext);
  const sequencePlaybackRate = sequenceContext?.playbackRate ?? 1;
  const audioStartFrame = (0, import_react116.useContext)(Html5MediaTrimContext);
  const environment = useRemotionEnvironment();
  const logLevel = useLogLevel();
  const mountTime = useMountTime();
  const { delayRender, continueRender } = useDelayRender();
  const { registerRenderAsset, unregisterRenderAsset } = (0, import_react116.useContext)(RenderAssetManager);
  const id = (0, import_react116.useMemo)(() => `video-${random2(props.src ?? "")}-${sequenceContext?.cumulatedFrom}-${sequenceContext?.relativeFrom}-${sequenceContext?.durationInFrames}`, [
    props.src,
    sequenceContext?.cumulatedFrom,
    sequenceContext?.relativeFrom,
    sequenceContext?.durationInFrames
  ]);
  const volume = evaluateVolume({
    volume: volumeProp,
    frame: volumePropsFrame,
    mediaVolume: 1
  });
  warnAboutTooHighVolume(volume);
  const audioEnabled = useAudioEnabled();
  const videoEnabled = useVideoEnabled();
  const { shouldUseAudio } = useMediaAudioState({
    muted: props.muted ?? false,
    volume,
    audioEnabled
  });
  if (!videoConfig) {
    throw new Error("No video config found");
  }
  (0, import_react116.useEffect)(() => {
    if (!props.src) {
      throw new Error("No src passed");
    }
    if (!shouldUseAudio) {
      return;
    }
    registerRenderAsset({
      type: "video",
      src: getAbsoluteSrc(props.src),
      id,
      frame: absoluteFrame,
      volume,
      mediaFrame: audioStartFrame + (frame - audioStartFrame) / sequencePlaybackRate,
      playbackRate: (playbackRate ?? 1) * sequencePlaybackRate,
      toneFrequency: toneFrequency ?? 1,
      audioStartFrame,
      audioStreamIndex: audioStreamIndex ?? 0,
      preservePitch: preservePitch ?? true
    });
    return () => unregisterRenderAsset(id);
  }, [
    shouldUseAudio,
    props.src,
    registerRenderAsset,
    id,
    unregisterRenderAsset,
    volume,
    frame,
    absoluteFrame,
    playbackRate,
    toneFrequency,
    audioStartFrame,
    sequencePlaybackRate,
    audioStreamIndex,
    preservePitch
  ]);
  (0, import_react116.useImperativeHandle)(ref, () => {
    return videoRef.current;
  }, []);
  useEmitVideoFrame({
    ref: videoRef,
    onVideoFrame: videoEnabled ? onVideoFrame : null
  });
  (0, import_react116.useEffect)(() => {
    if (!videoEnabled) {
      return;
    }
    const { current } = videoRef;
    if (!current) {
      return;
    }
    const currentTime = getMediaTime({
      frame,
      playbackRate: playbackRate || 1,
      startFrom: audioStartFrame,
      fps: videoConfig.fps
    });
    const handle = delayRender(`Rendering <Html5Video /> with src="${props.src}" at time ${currentTime}`, {
      retries: delayRenderRetries ?? void 0,
      timeoutInMilliseconds: delayRenderTimeoutInMilliseconds ?? void 0
    });
    if (window.process?.env?.NODE_ENV === "test") {
      continueRender(handle);
      return;
    }
    if (isApproximatelyTheSame(current.currentTime, currentTime)) {
      if (current.readyState >= 2) {
        continueRender(handle);
        return;
      }
      const loadedDataHandler = () => {
        continueRender(handle);
      };
      current.addEventListener("loadeddata", loadedDataHandler, { once: true });
      return () => {
        current.removeEventListener("loadeddata", loadedDataHandler);
      };
    }
    const endedHandler = () => {
      continueRender(handle);
    };
    const seek2 = seekToTimeMultipleUntilRight({
      element: current,
      desiredTime: currentTime,
      fps: videoConfig.fps,
      logLevel,
      mountTime
    });
    seek2.prom.then(() => {
      continueRender(handle);
    });
    current.addEventListener("ended", endedHandler, { once: true });
    const errorHandler = () => {
      if (current?.error) {
        console.error("Error occurred in video", current?.error);
        if (onError) {
          return;
        }
        throw new MediaPlaybackError({
          message: `The browser threw an error while playing the video ${props.src}: Code ${current.error.code} - ${current?.error?.message}. See https://remotion.dev/docs/media-playback-error for help. Pass an onError() prop to handle the error.`,
          src: props.src
        });
      } else {
        throw new MediaPlaybackError({
          message: "The browser threw an error",
          src: props.src
        });
      }
    };
    current.addEventListener("error", errorHandler, { once: true });
    return () => {
      seek2.cancel();
      current.removeEventListener("ended", endedHandler);
      current.removeEventListener("error", errorHandler);
      continueRender(handle);
    };
  }, [
    videoEnabled,
    volumePropsFrame,
    props.src,
    playbackRate,
    videoConfig.fps,
    frame,
    audioStartFrame,
    onError,
    delayRenderRetries,
    delayRenderTimeoutInMilliseconds,
    logLevel,
    mountTime,
    continueRender,
    delayRender
  ]);
  const { src } = props;
  if (environment.isRendering) {
    (0, import_react116.useLayoutEffect)(() => {
      if (window.process?.env?.NODE_ENV === "test") {
        return;
      }
      if (!videoEnabled && !shouldUseAudio) {
        return;
      }
      const newHandle = delayRender("Loading <Html5Video> duration with src=" + src, {
        retries: delayRenderRetries ?? void 0,
        timeoutInMilliseconds: delayRenderTimeoutInMilliseconds ?? void 0
      });
      const { current } = videoRef;
      const didLoad = () => {
        if (current?.duration) {
          onDuration(src, current.duration);
        }
        continueRender(newHandle);
      };
      if (current?.duration) {
        onDuration(src, current.duration);
        continueRender(newHandle);
      } else {
        current?.addEventListener("loadedmetadata", didLoad, { once: true });
      }
      return () => {
        current?.removeEventListener("loadedmetadata", didLoad);
        continueRender(newHandle);
      };
    }, [
      src,
      videoEnabled,
      shouldUseAudio,
      onDuration,
      delayRenderRetries,
      delayRenderTimeoutInMilliseconds,
      continueRender,
      delayRender
    ]);
  }
  return /* @__PURE__ */ (0, import_jsx_runtime48.jsx)("video", {
    ref: videoRef,
    disableRemotePlayback: true,
    ...props,
    crossOrigin: crossOrigin ?? (htmlInCanvasContext === null ? void 0 : "anonymous")
  });
};
var VideoForRendering = (0, import_react116.forwardRef)(VideoForRenderingForwardFunction);
var VideoForwardingFunction = (props, ref) => {
  const {
    startFrom,
    endAt,
    trimBefore,
    trimAfter,
    durationInFrames,
    name,
    pauseWhenBuffering,
    _remotionInternalStack,
    _remotionInternalNativeLoopPassed,
    showInTimeline,
    onAutoPlayError,
    onVideoFrame,
    ...otherProps
  } = props;
  const { loop, ...propsOtherThanLoop } = props;
  const { fps } = useVideoConfig();
  const environment = useRemotionEnvironment();
  const shouldPauseWhenBuffering = resolveV5Default(pauseWhenBuffering);
  if (environment.isClientSideRendering) {
    throw new Error("<Html5Video> is not supported in @remotion/web-renderer. Use <Video> from @remotion/media instead. See https://remotion.dev/docs/client-side-rendering/limitations");
  }
  const { durations, setDurations } = (0, import_react115.useContext)(DurationsContext);
  if (typeof ref === "string") {
    throw new Error("string refs are not supported");
  }
  if (typeof props.src !== "string") {
    throw new TypeError(`The \`<Html5Video>\` tag requires a string for \`src\`, but got ${JSON.stringify(props.src)} instead.`);
  }
  const preloadedSrc = usePreload(props.src);
  const onDuration = (0, import_react115.useMemo)(() => onMediaDuration.bind(null, setDurations), [setDurations]);
  const durationFetched = durations[getAbsoluteSrc(preloadedSrc)] ?? durations[getAbsoluteSrc(props.src)];
  validateMediaTrimProps({ startFrom, endAt, trimBefore, trimAfter });
  if (durationInFrames !== void 0) {
    validateDurationInFrames(durationInFrames, {
      component: "of the <Html5Video /> component",
      allowFloats: true
    });
  }
  const { trimBeforeValue, trimAfterValue } = resolveTrimProps({
    startFrom,
    endAt,
    trimBefore,
    trimAfter
  });
  const effectiveTrimAfter = getMediaTrimAfter({
    durationInFrames,
    trimAfter: trimAfterValue,
    trimBefore: trimBeforeValue
  });
  const loopDuration = effectiveTrimAfter ?? (durationFetched === void 0 ? void 0 : durationFetched * fps);
  if (loop && loopDuration !== void 0) {
    if (!Number.isFinite(loopDuration)) {
      return /* @__PURE__ */ (0, import_jsx_runtime49.jsx)(Html5Video, {
        ...propsOtherThanLoop,
        ref,
        _remotionInternalStack,
        _remotionInternalNativeLoopPassed: true
      });
    }
    return /* @__PURE__ */ (0, import_jsx_runtime49.jsx)(Loop, {
      durationInFrames: calculateMediaDuration({
        trimAfter: effectiveTrimAfter,
        mediaDurationInFrames: loopDuration,
        playbackRate: props.playbackRate ?? 1,
        trimBefore: trimBeforeValue
      }),
      layout: "none",
      name,
      showInTimeline: false,
      children: /* @__PURE__ */ (0, import_jsx_runtime49.jsx)(Html5Video, {
        ...propsOtherThanLoop,
        ref,
        _remotionInternalStack,
        _remotionInternalNativeLoopPassed: true
      })
    });
  }
  if (typeof trimBeforeValue !== "undefined" || typeof effectiveTrimAfter !== "undefined") {
    return /* @__PURE__ */ (0, import_jsx_runtime49.jsx)(Html5MediaTrimContext.Provider, {
      value: trimBeforeValue ?? 0,
      children: /* @__PURE__ */ (0, import_jsx_runtime49.jsx)(Sequence, {
        layout: "none",
        from: 0 - (trimBeforeValue ?? 0),
        showInTimeline: false,
        durationInFrames: effectiveTrimAfter === void 0 ? void 0 : (trimBeforeValue ?? 0) + (effectiveTrimAfter - (trimBeforeValue ?? 0)) / (props.playbackRate ?? 1),
        name,
        children: /* @__PURE__ */ (0, import_jsx_runtime49.jsx)(Html5Video, {
          pauseWhenBuffering: shouldPauseWhenBuffering,
          onVideoFrame,
          ...otherProps,
          ref,
          showInTimeline,
          _remotionInternalStack
        })
      })
    });
  }
  validateMediaProps({
    playbackRate: props.playbackRate,
    preservePitch: props.preservePitch,
    volume: props.volume
  }, "Html5Video");
  if (environment.isRendering) {
    return /* @__PURE__ */ (0, import_jsx_runtime49.jsx)(VideoForRendering, {
      onDuration,
      onVideoFrame: onVideoFrame ?? null,
      ...otherProps,
      ref
    });
  }
  return /* @__PURE__ */ (0, import_jsx_runtime49.jsx)(VideoForPreview, {
    onlyWarnForMediaSeekingError: false,
    ...otherProps,
    ref,
    onVideoFrame: onVideoFrame ?? null,
    pauseWhenBuffering: shouldPauseWhenBuffering,
    onDuration,
    _remotionInternalStack: _remotionInternalStack ?? null,
    _remotionInternalNativeLoopPassed: _remotionInternalNativeLoopPassed ?? false,
    showInTimeline: showInTimeline ?? true,
    onAutoPlayError: onAutoPlayError ?? void 0
  });
};
var Html5Video = (0, import_react115.forwardRef)(VideoForwardingFunction);
addSequenceStackTraces(Html5Video);
var Video = Html5Video;
checkMultipleRemotionVersions();
var proxyObj = {};
var Config = new Proxy(proxyObj, {
  get(_, prop) {
    if (prop === "Bundling" || prop === "Rendering" || prop === "Log" || prop === "Puppeteer" || prop === "Output") {
      return Config;
    }
    return () => {
      console.warn("\u26A0\uFE0F  The CLI configuration has been extracted from Remotion Core.");
      console.warn("Update the import from the config file:");
      console.warn();
      console.warn("- Delete:");
      console.warn('import {Config} from "remotion";');
      console.warn("+ Replace:");
      console.warn('import {Config} from "@remotion/cli/config";');
      console.warn();
      console.warn("For more information, see https://www.remotion.dev/docs/4-0-migration.");
      process.exit(1);
    };
  }
});
Sequence.displayName = "Sequence";
addSequenceStackTraces(Sequence);
setSequenceComponent(Sequence);
addSequenceStackTraces(Composition);
addSequenceStackTraces(Folder);

// src/composition.js
var TITLE_FONT = "Georgia, 'Times New Roman', serif";
var BODY_FONT = "Georgia, 'Times New Roman', serif";
var SCENE_DURATIONS = [7, 12, 17, 21, 15, 25, 16];
var SCENE_OFFSETS = SCENE_DURATIONS.reduce(
  (acc, d) => [...acc, acc[acc.length - 1] + d],
  [0]
);
var TOTAL_DURATION = SCENE_OFFSETS[SCENE_OFFSETS.length - 1];
var WIDTH = 1920;
var HEIGHT = 1080;
function getSceneIndex(frame, fps) {
  const time = frame / fps;
  for (let i = SCENE_OFFSETS.length - 1; i >= 0; i--) {
    if (time >= SCENE_OFFSETS[i]) return i;
  }
  return 0;
}
function getSceneTime(frame, fps, sceneIndex) {
  const time = frame / fps;
  return time - SCENE_OFFSETS[sceneIndex];
}
function Background({ opacity: opacity2 = 1 }) {
  return /* @__PURE__ */ React.createElement(
    "div",
    {
      style: {
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: "#05040a",
        opacity: opacity2
      }
    }
  );
}
function GameplayVideo({ src, opacity: opacity2 = 1 }) {
  const videoWidth = 1200 * 1.35;
  const videoHeight = 800 * 1.35;
  const left = (WIDTH - videoWidth) / 2;
  const top = (HEIGHT - videoHeight) / 2;
  return /* @__PURE__ */ React.createElement(
    Video,
    {
      src,
      style: {
        position: "absolute",
        left,
        top,
        width: videoWidth,
        height: videoHeight,
        opacity: opacity2
      }
    }
  );
}
function TitleText({ text, sub, frame, fps }) {
  const opacity2 = interpolate2(
    frame,
    [0, 30, fps * 3, fps * 6],
    [0, 1, 1, 0],
    { clamp: false }
  );
  return /* @__PURE__ */ React.createElement(
    "div",
    {
      style: {
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        opacity: opacity2
      }
    },
    /* @__PURE__ */ React.createElement(
      "div",
      {
        style: {
          fontFamily: TITLE_FONT,
          fontSize: 56,
          letterSpacing: "14px",
          color: "#fff",
          textShadow: "0 0 40px rgba(224,184,102,0.35)",
          fontWeight: "normal",
          textAlign: "center"
        }
      },
      text
    ),
    sub && /* @__PURE__ */ React.createElement(
      "div",
      {
        style: {
          fontFamily: BODY_FONT,
          fontSize: 16,
          letterSpacing: "5px",
          color: "#e0b866",
          textTransform: "uppercase",
          fontWeight: "normal",
          textAlign: "center",
          marginTop: 12
        }
      },
      sub
    )
  );
}
function BodyText({ text, frame, fps, startFrame, endFrame, y = HEIGHT / 2 + 120 }) {
  const opacity2 = interpolate2(
    frame,
    [startFrame, startFrame + 15, endFrame - 15, endFrame],
    [0, 1, 1, 0],
    { clamp: false }
  );
  return /* @__PURE__ */ React.createElement(
    "div",
    {
      style: {
        position: "absolute",
        top: y,
        left: 120,
        right: 120,
        opacity: opacity2,
        textAlign: "center"
      }
    },
    /* @__PURE__ */ React.createElement(
      "div",
      {
        style: {
          fontFamily: BODY_FONT,
          fontSize: 20,
          lineHeight: 1.6,
          color: "#c8c2dd",
          textAlign: "center"
        }
      },
      text
    )
  );
}
function HighlightText({ text, frame, fps, startFrame, endFrame, y = HEIGHT / 2 + 40 }) {
  const opacity2 = interpolate2(
    frame,
    [startFrame, startFrame + 15, endFrame - 15, endFrame],
    [0, 1, 1, 0],
    { clamp: false }
  );
  return /* @__PURE__ */ React.createElement(
    "div",
    {
      style: {
        position: "absolute",
        top: y,
        left: 0,
        right: 0,
        opacity: opacity2,
        textAlign: "center"
      }
    },
    /* @__PURE__ */ React.createElement(
      "div",
      {
        style: {
          fontFamily: TITLE_FONT,
          fontSize: 32,
          letterSpacing: "4px",
          color: "#e0b866",
          fontWeight: "normal",
          textAlign: "center"
        }
      },
      text
    )
  );
}
function LacunaTitle({ frame, fps }) {
  const opacity2 = interpolate2(
    frame,
    [0, 30, fps * 2, fps * 5],
    [0, 1, 1, 0],
    { clamp: false }
  );
  return /* @__PURE__ */ React.createElement(
    "div",
    {
      style: {
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        opacity: opacity2
      }
    },
    /* @__PURE__ */ React.createElement(
      "div",
      {
        style: {
          fontFamily: TITLE_FONT,
          fontSize: 64,
          letterSpacing: "16px",
          color: "#fff",
          textShadow: "0 0 50px rgba(224,184,102,0.4)",
          fontWeight: "normal",
          textAlign: "center"
        }
      },
      "LACUNA"
    ),
    /* @__PURE__ */ React.createElement(
      "div",
      {
        style: {
          fontFamily: BODY_FONT,
          fontSize: 16,
          letterSpacing: "6px",
          color: "#e0b866",
          textTransform: "uppercase",
          fontWeight: "normal",
          textAlign: "center",
          marginTop: 16
        }
      },
      "The price of remembering"
    )
  );
}
function MyComposition() {
  const frame = useCurrentFrame();
  const fps = 30;
  const sceneIndex = getSceneIndex(frame, fps);
  const sceneTime = getSceneTime(frame, fps, sceneIndex);
  return /* @__PURE__ */ React.createElement(
    Composition,
    {
      id: "LacunaDemo",
      width: WIDTH,
      height: HEIGHT,
      fps,
      durationInFrames: Math.floor(TOTAL_DURATION * fps)
    },
    /* @__PURE__ */ React.createElement(Background, null),
    sceneIndex === 0 && /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(GameplayVideo, { src: "/assets/scene1.mp4" }), /* @__PURE__ */ React.createElement(
      TitleText,
      {
        text: "A lender will give you \\u20ac400.",
        sub: "",
        frame,
        fps
      }
    ), /* @__PURE__ */ React.createElement(
      HighlightText,
      {
        text: "It wants one of your memories.",
        frame,
        fps,
        startFrame: Math.floor(fps * 2.5),
        endFrame: Math.floor(fps * 6.5)
      }
    )),
    sceneIndex === 1 && /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(GameplayVideo, { src: "/assets/scene2.mp4" }), /* @__PURE__ */ React.createElement(LacunaTitle, { frame, fps }), /* @__PURE__ */ React.createElement(
      BodyText,
      {
        text: "In this city, even your past has a price.",
        frame,
        fps,
        startFrame: Math.floor(fps * 9),
        endFrame: Math.floor(fps * 11.5),
        y: HEIGHT / 2 + 140
      }
    )),
    sceneIndex === 2 && /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(GameplayVideo, { src: "/assets/scene3.mp4" }), /* @__PURE__ */ React.createElement(
      HighlightText,
      {
        text: "The lender sees three assets.",
        frame,
        fps,
        startFrame: Math.floor(fps * 20.5),
        endFrame: Math.floor(fps * 23.5),
        y: HEIGHT / 2 - 60
      }
    ), /* @__PURE__ */ React.createElement(
      HighlightText,
      {
        text: "The player sees three ways to survive.",
        frame,
        fps,
        startFrame: Math.floor(fps * 24.5),
        endFrame: Math.floor(fps * 27.5),
        y: HEIGHT / 2 + 20
      }
    )),
    sceneIndex === 3 && /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(GameplayVideo, { src: "/assets/scene4.mp4" }), /* @__PURE__ */ React.createElement(
      HighlightText,
      {
        text: "Pledge the wrong memory,",
        frame,
        fps,
        startFrame: Math.floor(fps * 38),
        endFrame: Math.floor(fps * 41),
        y: HEIGHT / 2 - 60
      }
    ), /* @__PURE__ */ React.createElement(
      HighlightText,
      {
        text: "and you lose an opportunity that could have paid you.",
        frame,
        fps,
        startFrame: Math.floor(fps * 42),
        endFrame: Math.floor(fps * 47),
        y: HEIGHT / 2 + 20
      }
    )),
    sceneIndex === 4 && /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(GameplayVideo, { src: "/assets/scene5.mp4" }), /* @__PURE__ */ React.createElement(
      HighlightText,
      {
        text: "10% interest per cycle.",
        frame,
        fps,
        startFrame: Math.floor(fps * 59),
        endFrame: Math.floor(fps * 62),
        y: HEIGHT / 2 - 60
      }
    ), /* @__PURE__ */ React.createElement(
      HighlightText,
      {
        text: "Four cycles to settle.",
        frame,
        fps,
        startFrame: Math.floor(fps * 63),
        endFrame: Math.floor(fps * 66),
        y: HEIGHT / 2 + 20
      }
    )),
    sceneIndex === 5 && /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(GameplayVideo, { src: "/assets/scene6.mp4" }), /* @__PURE__ */ React.createElement(
      HighlightText,
      {
        text: "Borrowing gets you through the door.",
        frame,
        fps,
        startFrame: Math.floor(fps * 74),
        endFrame: Math.floor(fps * 77),
        y: HEIGHT / 2 - 60
      }
    ), /* @__PURE__ */ React.createElement(
      HighlightText,
      {
        text: "What you sacrifice determines what happens after.",
        frame,
        fps,
        startFrame: Math.floor(fps * 78),
        endFrame: Math.floor(fps * 83),
        y: HEIGHT / 2 + 20
      }
    )),
    sceneIndex === 6 && /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(GameplayVideo, { src: "/assets/scene7.mp4" }), /* @__PURE__ */ React.createElement(LacunaTitle, { frame, fps }), /* @__PURE__ */ React.createElement(
      BodyText,
      {
        text: "What would you sell to afford your future?",
        frame,
        fps,
        startFrame: Math.floor(fps * 101),
        endFrame: Math.floor(fps * 107),
        y: HEIGHT / 2 + 140
      }
    ))
  );
}
export {
  MyComposition as default
};
/*! Bundled license information:

react/cjs/react.development.js:
  (**
   * @license React
   * react.development.js
   *
   * Copyright (c) Meta Platforms, Inc. and affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

react-dom/cjs/react-dom.development.js:
  (**
   * @license React
   * react-dom.development.js
   *
   * Copyright (c) Meta Platforms, Inc. and affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

react/cjs/react-jsx-runtime.development.js:
  (**
   * @license React
   * react-jsx-runtime.development.js
   *
   * Copyright (c) Meta Platforms, Inc. and affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)
*/
