/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/@vue/compiler-core/dist/compiler-core.esm-bundler.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@vue/compiler-core/dist/compiler-core.esm-bundler.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "generateCodeFrame": () => (/* reexport safe */ _vue_shared__WEBPACK_IMPORTED_MODULE_0__.generateCodeFrame),
/* harmony export */   "BASE_TRANSITION": () => (/* binding */ BASE_TRANSITION),
/* harmony export */   "CAMELIZE": () => (/* binding */ CAMELIZE),
/* harmony export */   "CAPITALIZE": () => (/* binding */ CAPITALIZE),
/* harmony export */   "CREATE_BLOCK": () => (/* binding */ CREATE_BLOCK),
/* harmony export */   "CREATE_COMMENT": () => (/* binding */ CREATE_COMMENT),
/* harmony export */   "CREATE_SLOTS": () => (/* binding */ CREATE_SLOTS),
/* harmony export */   "CREATE_STATIC": () => (/* binding */ CREATE_STATIC),
/* harmony export */   "CREATE_TEXT": () => (/* binding */ CREATE_TEXT),
/* harmony export */   "CREATE_VNODE": () => (/* binding */ CREATE_VNODE),
/* harmony export */   "FRAGMENT": () => (/* binding */ FRAGMENT),
/* harmony export */   "IS_REF": () => (/* binding */ IS_REF),
/* harmony export */   "KEEP_ALIVE": () => (/* binding */ KEEP_ALIVE),
/* harmony export */   "MERGE_PROPS": () => (/* binding */ MERGE_PROPS),
/* harmony export */   "OPEN_BLOCK": () => (/* binding */ OPEN_BLOCK),
/* harmony export */   "POP_SCOPE_ID": () => (/* binding */ POP_SCOPE_ID),
/* harmony export */   "PUSH_SCOPE_ID": () => (/* binding */ PUSH_SCOPE_ID),
/* harmony export */   "RENDER_LIST": () => (/* binding */ RENDER_LIST),
/* harmony export */   "RENDER_SLOT": () => (/* binding */ RENDER_SLOT),
/* harmony export */   "RESOLVE_COMPONENT": () => (/* binding */ RESOLVE_COMPONENT),
/* harmony export */   "RESOLVE_DIRECTIVE": () => (/* binding */ RESOLVE_DIRECTIVE),
/* harmony export */   "RESOLVE_DYNAMIC_COMPONENT": () => (/* binding */ RESOLVE_DYNAMIC_COMPONENT),
/* harmony export */   "RESOLVE_FILTER": () => (/* binding */ RESOLVE_FILTER),
/* harmony export */   "SET_BLOCK_TRACKING": () => (/* binding */ SET_BLOCK_TRACKING),
/* harmony export */   "SUSPENSE": () => (/* binding */ SUSPENSE),
/* harmony export */   "TELEPORT": () => (/* binding */ TELEPORT),
/* harmony export */   "TO_DISPLAY_STRING": () => (/* binding */ TO_DISPLAY_STRING),
/* harmony export */   "TO_HANDLERS": () => (/* binding */ TO_HANDLERS),
/* harmony export */   "TO_HANDLER_KEY": () => (/* binding */ TO_HANDLER_KEY),
/* harmony export */   "UNREF": () => (/* binding */ UNREF),
/* harmony export */   "WITH_CTX": () => (/* binding */ WITH_CTX),
/* harmony export */   "WITH_DIRECTIVES": () => (/* binding */ WITH_DIRECTIVES),
/* harmony export */   "WITH_SCOPE_ID": () => (/* binding */ WITH_SCOPE_ID),
/* harmony export */   "advancePositionWithClone": () => (/* binding */ advancePositionWithClone),
/* harmony export */   "advancePositionWithMutation": () => (/* binding */ advancePositionWithMutation),
/* harmony export */   "assert": () => (/* binding */ assert),
/* harmony export */   "baseCompile": () => (/* binding */ baseCompile),
/* harmony export */   "baseParse": () => (/* binding */ baseParse),
/* harmony export */   "buildProps": () => (/* binding */ buildProps),
/* harmony export */   "buildSlots": () => (/* binding */ buildSlots),
/* harmony export */   "checkCompatEnabled": () => (/* binding */ checkCompatEnabled),
/* harmony export */   "createArrayExpression": () => (/* binding */ createArrayExpression),
/* harmony export */   "createAssignmentExpression": () => (/* binding */ createAssignmentExpression),
/* harmony export */   "createBlockStatement": () => (/* binding */ createBlockStatement),
/* harmony export */   "createCacheExpression": () => (/* binding */ createCacheExpression),
/* harmony export */   "createCallExpression": () => (/* binding */ createCallExpression),
/* harmony export */   "createCompilerError": () => (/* binding */ createCompilerError),
/* harmony export */   "createCompoundExpression": () => (/* binding */ createCompoundExpression),
/* harmony export */   "createConditionalExpression": () => (/* binding */ createConditionalExpression),
/* harmony export */   "createForLoopParams": () => (/* binding */ createForLoopParams),
/* harmony export */   "createFunctionExpression": () => (/* binding */ createFunctionExpression),
/* harmony export */   "createIfStatement": () => (/* binding */ createIfStatement),
/* harmony export */   "createInterpolation": () => (/* binding */ createInterpolation),
/* harmony export */   "createObjectExpression": () => (/* binding */ createObjectExpression),
/* harmony export */   "createObjectProperty": () => (/* binding */ createObjectProperty),
/* harmony export */   "createReturnStatement": () => (/* binding */ createReturnStatement),
/* harmony export */   "createRoot": () => (/* binding */ createRoot),
/* harmony export */   "createSequenceExpression": () => (/* binding */ createSequenceExpression),
/* harmony export */   "createSimpleExpression": () => (/* binding */ createSimpleExpression),
/* harmony export */   "createStructuralDirectiveTransform": () => (/* binding */ createStructuralDirectiveTransform),
/* harmony export */   "createTemplateLiteral": () => (/* binding */ createTemplateLiteral),
/* harmony export */   "createTransformContext": () => (/* binding */ createTransformContext),
/* harmony export */   "createVNodeCall": () => (/* binding */ createVNodeCall),
/* harmony export */   "findDir": () => (/* binding */ findDir),
/* harmony export */   "findProp": () => (/* binding */ findProp),
/* harmony export */   "generate": () => (/* binding */ generate),
/* harmony export */   "getBaseTransformPreset": () => (/* binding */ getBaseTransformPreset),
/* harmony export */   "getInnerRange": () => (/* binding */ getInnerRange),
/* harmony export */   "hasDynamicKeyVBind": () => (/* binding */ hasDynamicKeyVBind),
/* harmony export */   "hasScopeRef": () => (/* binding */ hasScopeRef),
/* harmony export */   "helperNameMap": () => (/* binding */ helperNameMap),
/* harmony export */   "injectProp": () => (/* binding */ injectProp),
/* harmony export */   "isBindKey": () => (/* binding */ isBindKey),
/* harmony export */   "isBuiltInType": () => (/* binding */ isBuiltInType),
/* harmony export */   "isCoreComponent": () => (/* binding */ isCoreComponent),
/* harmony export */   "isMemberExpression": () => (/* binding */ isMemberExpression),
/* harmony export */   "isSimpleIdentifier": () => (/* binding */ isSimpleIdentifier),
/* harmony export */   "isSlotOutlet": () => (/* binding */ isSlotOutlet),
/* harmony export */   "isStaticExp": () => (/* binding */ isStaticExp),
/* harmony export */   "isTemplateNode": () => (/* binding */ isTemplateNode),
/* harmony export */   "isText": () => (/* binding */ isText),
/* harmony export */   "isVSlot": () => (/* binding */ isVSlot),
/* harmony export */   "locStub": () => (/* binding */ locStub),
/* harmony export */   "noopDirectiveTransform": () => (/* binding */ noopDirectiveTransform),
/* harmony export */   "processExpression": () => (/* binding */ processExpression),
/* harmony export */   "processFor": () => (/* binding */ processFor),
/* harmony export */   "processIf": () => (/* binding */ processIf),
/* harmony export */   "processSlotOutlet": () => (/* binding */ processSlotOutlet),
/* harmony export */   "registerRuntimeHelpers": () => (/* binding */ registerRuntimeHelpers),
/* harmony export */   "resolveComponentType": () => (/* binding */ resolveComponentType),
/* harmony export */   "toValidAssetId": () => (/* binding */ toValidAssetId),
/* harmony export */   "trackSlotScopes": () => (/* binding */ trackSlotScopes),
/* harmony export */   "trackVForSlotScopes": () => (/* binding */ trackVForSlotScopes),
/* harmony export */   "transform": () => (/* binding */ transform),
/* harmony export */   "transformBind": () => (/* binding */ transformBind),
/* harmony export */   "transformElement": () => (/* binding */ transformElement),
/* harmony export */   "transformExpression": () => (/* binding */ transformExpression),
/* harmony export */   "transformModel": () => (/* binding */ transformModel),
/* harmony export */   "transformOn": () => (/* binding */ transformOn),
/* harmony export */   "traverseNode": () => (/* binding */ traverseNode),
/* harmony export */   "warnDeprecation": () => (/* binding */ warnDeprecation)
/* harmony export */ });
/* harmony import */ var _vue_shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @vue/shared */ "./node_modules/@vue/shared/dist/shared.esm-bundler.js");
var _errorMessages, _helperNameMap, _deprecationData;

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




function defaultOnError(error) {
  throw error;
}

function defaultOnWarn(msg) {
   true && console.warn("[Vue warn] ".concat(msg.message));
}

function createCompilerError(code, loc, messages, additionalMessage) {
  var msg =  true ? (messages || errorMessages)[code] + (additionalMessage || "") : 0;
  var error = new SyntaxError(String(msg));
  error.code = code;
  error.loc = loc;
  return error;
}

var errorMessages = (_errorMessages = {}, _defineProperty(_errorMessages, 0
/* ABRUPT_CLOSING_OF_EMPTY_COMMENT */
, 'Illegal comment.'), _defineProperty(_errorMessages, 1
/* CDATA_IN_HTML_CONTENT */
, 'CDATA section is allowed only in XML context.'), _defineProperty(_errorMessages, 2
/* DUPLICATE_ATTRIBUTE */
, 'Duplicate attribute.'), _defineProperty(_errorMessages, 3
/* END_TAG_WITH_ATTRIBUTES */
, 'End tag cannot have attributes.'), _defineProperty(_errorMessages, 4
/* END_TAG_WITH_TRAILING_SOLIDUS */
, "Illegal '/' in tags."), _defineProperty(_errorMessages, 5
/* EOF_BEFORE_TAG_NAME */
, 'Unexpected EOF in tag.'), _defineProperty(_errorMessages, 6
/* EOF_IN_CDATA */
, 'Unexpected EOF in CDATA section.'), _defineProperty(_errorMessages, 7
/* EOF_IN_COMMENT */
, 'Unexpected EOF in comment.'), _defineProperty(_errorMessages, 8
/* EOF_IN_SCRIPT_HTML_COMMENT_LIKE_TEXT */
, 'Unexpected EOF in script.'), _defineProperty(_errorMessages, 9
/* EOF_IN_TAG */
, 'Unexpected EOF in tag.'), _defineProperty(_errorMessages, 10
/* INCORRECTLY_CLOSED_COMMENT */
, 'Incorrectly closed comment.'), _defineProperty(_errorMessages, 11
/* INCORRECTLY_OPENED_COMMENT */
, 'Incorrectly opened comment.'), _defineProperty(_errorMessages, 12
/* INVALID_FIRST_CHARACTER_OF_TAG_NAME */
, "Illegal tag name. Use '&lt;' to print '<'."), _defineProperty(_errorMessages, 13
/* MISSING_ATTRIBUTE_VALUE */
, 'Attribute value was expected.'), _defineProperty(_errorMessages, 14
/* MISSING_END_TAG_NAME */
, 'End tag name was expected.'), _defineProperty(_errorMessages, 15
/* MISSING_WHITESPACE_BETWEEN_ATTRIBUTES */
, 'Whitespace was expected.'), _defineProperty(_errorMessages, 16
/* NESTED_COMMENT */
, "Unexpected '<!--' in comment."), _defineProperty(_errorMessages, 17
/* UNEXPECTED_CHARACTER_IN_ATTRIBUTE_NAME */
, 'Attribute name cannot contain U+0022 ("), U+0027 (\'), and U+003C (<).'), _defineProperty(_errorMessages, 18
/* UNEXPECTED_CHARACTER_IN_UNQUOTED_ATTRIBUTE_VALUE */
, 'Unquoted attribute value cannot contain U+0022 ("), U+0027 (\'), U+003C (<), U+003D (=), and U+0060 (`).'), _defineProperty(_errorMessages, 19
/* UNEXPECTED_EQUALS_SIGN_BEFORE_ATTRIBUTE_NAME */
, "Attribute name cannot start with '='."), _defineProperty(_errorMessages, 21
/* UNEXPECTED_QUESTION_MARK_INSTEAD_OF_TAG_NAME */
, "'<?' is allowed only in XML context."), _defineProperty(_errorMessages, 20
/* UNEXPECTED_NULL_CHARACTER */
, "Unexpected null cahracter."), _defineProperty(_errorMessages, 22
/* UNEXPECTED_SOLIDUS_IN_TAG */
, "Illegal '/' in tags."), _defineProperty(_errorMessages, 23
/* X_INVALID_END_TAG */
, 'Invalid end tag.'), _defineProperty(_errorMessages, 24
/* X_MISSING_END_TAG */
, 'Element is missing end tag.'), _defineProperty(_errorMessages, 25
/* X_MISSING_INTERPOLATION_END */
, 'Interpolation end sign was not found.'), _defineProperty(_errorMessages, 26
/* X_MISSING_DYNAMIC_DIRECTIVE_ARGUMENT_END */
, 'End bracket for dynamic directive argument was not found. ' + 'Note that dynamic directive argument cannot contain spaces.'), _defineProperty(_errorMessages, 27
/* X_V_IF_NO_EXPRESSION */
, "v-if/v-else-if is missing expression."), _defineProperty(_errorMessages, 28
/* X_V_IF_SAME_KEY */
, "v-if/else branches must use unique keys."), _defineProperty(_errorMessages, 29
/* X_V_ELSE_NO_ADJACENT_IF */
, "v-else/v-else-if has no adjacent v-if."), _defineProperty(_errorMessages, 30
/* X_V_FOR_NO_EXPRESSION */
, "v-for is missing expression."), _defineProperty(_errorMessages, 31
/* X_V_FOR_MALFORMED_EXPRESSION */
, "v-for has invalid expression."), _defineProperty(_errorMessages, 32
/* X_V_FOR_TEMPLATE_KEY_PLACEMENT */
, "<template v-for> key should be placed on the <template> tag."), _defineProperty(_errorMessages, 33
/* X_V_BIND_NO_EXPRESSION */
, "v-bind is missing expression."), _defineProperty(_errorMessages, 34
/* X_V_ON_NO_EXPRESSION */
, "v-on is missing expression."), _defineProperty(_errorMessages, 35
/* X_V_SLOT_UNEXPECTED_DIRECTIVE_ON_SLOT_OUTLET */
, "Unexpected custom directive on <slot> outlet."), _defineProperty(_errorMessages, 36
/* X_V_SLOT_MIXED_SLOT_USAGE */
, "Mixed v-slot usage on both the component and nested <template>." + "When there are multiple named slots, all slots should use <template> " + "syntax to avoid scope ambiguity."), _defineProperty(_errorMessages, 37
/* X_V_SLOT_DUPLICATE_SLOT_NAMES */
, "Duplicate slot names found. "), _defineProperty(_errorMessages, 38
/* X_V_SLOT_EXTRANEOUS_DEFAULT_SLOT_CHILDREN */
, "Extraneous children found when component already has explicitly named " + "default slot. These children will be ignored."), _defineProperty(_errorMessages, 39
/* X_V_SLOT_MISPLACED */
, "v-slot can only be used on components or <template> tags."), _defineProperty(_errorMessages, 40
/* X_V_MODEL_NO_EXPRESSION */
, "v-model is missing expression."), _defineProperty(_errorMessages, 41
/* X_V_MODEL_MALFORMED_EXPRESSION */
, "v-model value must be a valid JavaScript member expression."), _defineProperty(_errorMessages, 42
/* X_V_MODEL_ON_SCOPE_VARIABLE */
, "v-model cannot be used on v-for or v-slot scope variables because they are not writable."), _defineProperty(_errorMessages, 43
/* X_INVALID_EXPRESSION */
, "Error parsing JavaScript expression: "), _defineProperty(_errorMessages, 44
/* X_KEEP_ALIVE_INVALID_CHILDREN */
, "<KeepAlive> expects exactly one child component."), _defineProperty(_errorMessages, 45
/* X_PREFIX_ID_NOT_SUPPORTED */
, "\"prefixIdentifiers\" option is not supported in this build of compiler."), _defineProperty(_errorMessages, 46
/* X_MODULE_MODE_NOT_SUPPORTED */
, "ES module mode is not supported in this build of compiler."), _defineProperty(_errorMessages, 47
/* X_CACHE_HANDLER_NOT_SUPPORTED */
, "\"cacheHandlers\" option is only supported when the \"prefixIdentifiers\" option is enabled."), _defineProperty(_errorMessages, 48
/* X_SCOPE_ID_NOT_SUPPORTED */
, "\"scopeId\" option is only supported in module mode."), _defineProperty(_errorMessages, 49
/* __EXTEND_POINT__ */
, ""), _errorMessages);
var FRAGMENT = Symbol( true ? "Fragment" : 0);
var TELEPORT = Symbol( true ? "Teleport" : 0);
var SUSPENSE = Symbol( true ? "Suspense" : 0);
var KEEP_ALIVE = Symbol( true ? "KeepAlive" : 0);
var BASE_TRANSITION = Symbol( true ? "BaseTransition" : 0);
var OPEN_BLOCK = Symbol( true ? "openBlock" : 0);
var CREATE_BLOCK = Symbol( true ? "createBlock" : 0);
var CREATE_VNODE = Symbol( true ? "createVNode" : 0);
var CREATE_COMMENT = Symbol( true ? "createCommentVNode" : 0);
var CREATE_TEXT = Symbol( true ? "createTextVNode" : 0);
var CREATE_STATIC = Symbol( true ? "createStaticVNode" : 0);
var RESOLVE_COMPONENT = Symbol( true ? "resolveComponent" : 0);
var RESOLVE_DYNAMIC_COMPONENT = Symbol( true ? "resolveDynamicComponent" : 0);
var RESOLVE_DIRECTIVE = Symbol( true ? "resolveDirective" : 0);
var RESOLVE_FILTER = Symbol( true ? "resolveFilter" : 0);
var WITH_DIRECTIVES = Symbol( true ? "withDirectives" : 0);
var RENDER_LIST = Symbol( true ? "renderList" : 0);
var RENDER_SLOT = Symbol( true ? "renderSlot" : 0);
var CREATE_SLOTS = Symbol( true ? "createSlots" : 0);
var TO_DISPLAY_STRING = Symbol( true ? "toDisplayString" : 0);
var MERGE_PROPS = Symbol( true ? "mergeProps" : 0);
var TO_HANDLERS = Symbol( true ? "toHandlers" : 0);
var CAMELIZE = Symbol( true ? "camelize" : 0);
var CAPITALIZE = Symbol( true ? "capitalize" : 0);
var TO_HANDLER_KEY = Symbol( true ? "toHandlerKey" : 0);
var SET_BLOCK_TRACKING = Symbol( true ? "setBlockTracking" : 0);
var PUSH_SCOPE_ID = Symbol( true ? "pushScopeId" : 0);
var POP_SCOPE_ID = Symbol( true ? "popScopeId" : 0);
var WITH_SCOPE_ID = Symbol( true ? "withScopeId" : 0);
var WITH_CTX = Symbol( true ? "withCtx" : 0);
var UNREF = Symbol( true ? "unref" : 0);
var IS_REF = Symbol( true ? "isRef" : 0); // Name mapping for runtime helpers that need to be imported from 'vue' in
// generated code. Make sure these are correctly exported in the runtime!
// Using `any` here because TS doesn't allow symbols as index type.

var helperNameMap = (_helperNameMap = {}, _defineProperty(_helperNameMap, FRAGMENT, "Fragment"), _defineProperty(_helperNameMap, TELEPORT, "Teleport"), _defineProperty(_helperNameMap, SUSPENSE, "Suspense"), _defineProperty(_helperNameMap, KEEP_ALIVE, "KeepAlive"), _defineProperty(_helperNameMap, BASE_TRANSITION, "BaseTransition"), _defineProperty(_helperNameMap, OPEN_BLOCK, "openBlock"), _defineProperty(_helperNameMap, CREATE_BLOCK, "createBlock"), _defineProperty(_helperNameMap, CREATE_VNODE, "createVNode"), _defineProperty(_helperNameMap, CREATE_COMMENT, "createCommentVNode"), _defineProperty(_helperNameMap, CREATE_TEXT, "createTextVNode"), _defineProperty(_helperNameMap, CREATE_STATIC, "createStaticVNode"), _defineProperty(_helperNameMap, RESOLVE_COMPONENT, "resolveComponent"), _defineProperty(_helperNameMap, RESOLVE_DYNAMIC_COMPONENT, "resolveDynamicComponent"), _defineProperty(_helperNameMap, RESOLVE_DIRECTIVE, "resolveDirective"), _defineProperty(_helperNameMap, RESOLVE_FILTER, "resolveFilter"), _defineProperty(_helperNameMap, WITH_DIRECTIVES, "withDirectives"), _defineProperty(_helperNameMap, RENDER_LIST, "renderList"), _defineProperty(_helperNameMap, RENDER_SLOT, "renderSlot"), _defineProperty(_helperNameMap, CREATE_SLOTS, "createSlots"), _defineProperty(_helperNameMap, TO_DISPLAY_STRING, "toDisplayString"), _defineProperty(_helperNameMap, MERGE_PROPS, "mergeProps"), _defineProperty(_helperNameMap, TO_HANDLERS, "toHandlers"), _defineProperty(_helperNameMap, CAMELIZE, "camelize"), _defineProperty(_helperNameMap, CAPITALIZE, "capitalize"), _defineProperty(_helperNameMap, TO_HANDLER_KEY, "toHandlerKey"), _defineProperty(_helperNameMap, SET_BLOCK_TRACKING, "setBlockTracking"), _defineProperty(_helperNameMap, PUSH_SCOPE_ID, "pushScopeId"), _defineProperty(_helperNameMap, POP_SCOPE_ID, "popScopeId"), _defineProperty(_helperNameMap, WITH_SCOPE_ID, "withScopeId"), _defineProperty(_helperNameMap, WITH_CTX, "withCtx"), _defineProperty(_helperNameMap, UNREF, "unref"), _defineProperty(_helperNameMap, IS_REF, "isRef"), _helperNameMap);

function registerRuntimeHelpers(helpers) {
  Object.getOwnPropertySymbols(helpers).forEach(function (s) {
    helperNameMap[s] = helpers[s];
  });
} // AST Utilities ---------------------------------------------------------------
// Some expressions, e.g. sequence and conditional expressions, are never
// associated with template nodes, so their source locations are just a stub.
// Container types like CompoundExpression also don't need a real location.


var locStub = {
  source: '',
  start: {
    line: 1,
    column: 1,
    offset: 0
  },
  end: {
    line: 1,
    column: 1,
    offset: 0
  }
};

function createRoot(children) {
  var loc = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : locStub;
  return {
    type: 0
    /* ROOT */
    ,
    children: children,
    helpers: [],
    components: [],
    directives: [],
    hoists: [],
    imports: [],
    cached: 0,
    temps: 0,
    codegenNode: undefined,
    loc: loc
  };
}

function createVNodeCall(context, tag, props, children, patchFlag, dynamicProps, directives) {
  var isBlock = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : false;
  var disableTracking = arguments.length > 8 && arguments[8] !== undefined ? arguments[8] : false;
  var loc = arguments.length > 9 && arguments[9] !== undefined ? arguments[9] : locStub;

  if (context) {
    if (isBlock) {
      context.helper(OPEN_BLOCK);
      context.helper(CREATE_BLOCK);
    } else {
      context.helper(CREATE_VNODE);
    }

    if (directives) {
      context.helper(WITH_DIRECTIVES);
    }
  }

  return {
    type: 13
    /* VNODE_CALL */
    ,
    tag: tag,
    props: props,
    children: children,
    patchFlag: patchFlag,
    dynamicProps: dynamicProps,
    directives: directives,
    isBlock: isBlock,
    disableTracking: disableTracking,
    loc: loc
  };
}

function createArrayExpression(elements) {
  var loc = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : locStub;
  return {
    type: 17
    /* JS_ARRAY_EXPRESSION */
    ,
    loc: loc,
    elements: elements
  };
}

function createObjectExpression(properties) {
  var loc = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : locStub;
  return {
    type: 15
    /* JS_OBJECT_EXPRESSION */
    ,
    loc: loc,
    properties: properties
  };
}

function createObjectProperty(key, value) {
  return {
    type: 16
    /* JS_PROPERTY */
    ,
    loc: locStub,
    key: (0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.isString)(key) ? createSimpleExpression(key, true) : key,
    value: value
  };
}

function createSimpleExpression(content, isStatic)
/* NOT_CONSTANT */
{
  var loc = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : locStub;
  var constType = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
  return {
    type: 4
    /* SIMPLE_EXPRESSION */
    ,
    loc: loc,
    content: content,
    isStatic: isStatic,
    constType: isStatic ? 3
    /* CAN_STRINGIFY */
    : constType
  };
}

function createInterpolation(content, loc) {
  return {
    type: 5
    /* INTERPOLATION */
    ,
    loc: loc,
    content: (0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.isString)(content) ? createSimpleExpression(content, false, loc) : content
  };
}

function createCompoundExpression(children) {
  var loc = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : locStub;
  return {
    type: 8
    /* COMPOUND_EXPRESSION */
    ,
    loc: loc,
    children: children
  };
}

function createCallExpression(callee) {
  var args = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  var loc = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : locStub;
  return {
    type: 14
    /* JS_CALL_EXPRESSION */
    ,
    loc: loc,
    callee: callee,
    arguments: args
  };
}

function createFunctionExpression(params) {
  var returns = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;
  var newline = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  var isSlot = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
  var loc = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : locStub;
  return {
    type: 18
    /* JS_FUNCTION_EXPRESSION */
    ,
    params: params,
    returns: returns,
    newline: newline,
    isSlot: isSlot,
    loc: loc
  };
}

function createConditionalExpression(test, consequent, alternate) {
  var newline = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : true;
  return {
    type: 19
    /* JS_CONDITIONAL_EXPRESSION */
    ,
    test: test,
    consequent: consequent,
    alternate: alternate,
    newline: newline,
    loc: locStub
  };
}

function createCacheExpression(index, value) {
  var isVNode = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  return {
    type: 20
    /* JS_CACHE_EXPRESSION */
    ,
    index: index,
    value: value,
    isVNode: isVNode,
    loc: locStub
  };
}

function createBlockStatement(body) {
  return {
    type: 21
    /* JS_BLOCK_STATEMENT */
    ,
    body: body,
    loc: locStub
  };
}

function createTemplateLiteral(elements) {
  return {
    type: 22
    /* JS_TEMPLATE_LITERAL */
    ,
    elements: elements,
    loc: locStub
  };
}

function createIfStatement(test, consequent, alternate) {
  return {
    type: 23
    /* JS_IF_STATEMENT */
    ,
    test: test,
    consequent: consequent,
    alternate: alternate,
    loc: locStub
  };
}

function createAssignmentExpression(left, right) {
  return {
    type: 24
    /* JS_ASSIGNMENT_EXPRESSION */
    ,
    left: left,
    right: right,
    loc: locStub
  };
}

function createSequenceExpression(expressions) {
  return {
    type: 25
    /* JS_SEQUENCE_EXPRESSION */
    ,
    expressions: expressions,
    loc: locStub
  };
}

function createReturnStatement(returns) {
  return {
    type: 26
    /* JS_RETURN_STATEMENT */
    ,
    returns: returns,
    loc: locStub
  };
}

var isStaticExp = function isStaticExp(p) {
  return p.type === 4
  /* SIMPLE_EXPRESSION */
  && p.isStatic;
};

var isBuiltInType = function isBuiltInType(tag, expected) {
  return tag === expected || tag === (0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.hyphenate)(expected);
};

function isCoreComponent(tag) {
  if (isBuiltInType(tag, 'Teleport')) {
    return TELEPORT;
  } else if (isBuiltInType(tag, 'Suspense')) {
    return SUSPENSE;
  } else if (isBuiltInType(tag, 'KeepAlive')) {
    return KEEP_ALIVE;
  } else if (isBuiltInType(tag, 'BaseTransition')) {
    return BASE_TRANSITION;
  }
}

var nonIdentifierRE = /^\d|[^\$\w]/;

var isSimpleIdentifier = function isSimpleIdentifier(name) {
  return !nonIdentifierRE.test(name);
};

var validFirstIdentCharRE = /[A-Za-z_$\xA0-\uFFFF]/;
var validIdentCharRE = /[\.\w$\xA0-\uFFFF]/;
var whitespaceRE = /\s+[.[]\s*|\s*[.[]\s+/g;
/**
 * Simple lexer to check if an expression is a member expression. This is
 * lax and only checks validity at the root level (i.e. does not validate exps
 * inside square brackets), but it's ok since these are only used on template
 * expressions and false positives are invalid expressions in the first place.
 */

var isMemberExpression = function isMemberExpression(path) {
  // remove whitespaces around . or [ first
  path = path.trim().replace(whitespaceRE, function (s) {
    return s.trim();
  });
  var state = 0
  /* inMemberExp */
  ;
  var prevState = 0
  /* inMemberExp */
  ;
  var currentOpenBracketCount = 0;
  var currentStringType = null;

  for (var i = 0; i < path.length; i++) {
    var _char = path.charAt(i);

    switch (state) {
      case 0
      /* inMemberExp */
      :
        if (_char === '[') {
          prevState = state;
          state = 1
          /* inBrackets */
          ;
          currentOpenBracketCount++;
        } else if (!(i === 0 ? validFirstIdentCharRE : validIdentCharRE).test(_char)) {
          return false;
        }

        break;

      case 1
      /* inBrackets */
      :
        if (_char === "'" || _char === "\"" || _char === '`') {
          prevState = state;
          state = 2
          /* inString */
          ;
          currentStringType = _char;
        } else if (_char === "[") {
          currentOpenBracketCount++;
        } else if (_char === "]") {
          if (! --currentOpenBracketCount) {
            state = prevState;
          }
        }

        break;

      case 2
      /* inString */
      :
        if (_char === currentStringType) {
          state = prevState;
          currentStringType = null;
        }

        break;
    }
  }

  return !currentOpenBracketCount;
};

function getInnerRange(loc, offset, length) {
  var source = loc.source.substr(offset, length);
  var newLoc = {
    source: source,
    start: advancePositionWithClone(loc.start, loc.source, offset),
    end: loc.end
  };

  if (length != null) {
    newLoc.end = advancePositionWithClone(loc.start, loc.source, offset + length);
  }

  return newLoc;
}

function advancePositionWithClone(pos, source) {
  var numberOfCharacters = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : source.length;
  return advancePositionWithMutation((0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.extend)({}, pos), source, numberOfCharacters);
} // advance by mutation without cloning (for performance reasons), since this
// gets called a lot in the parser


function advancePositionWithMutation(pos, source) {
  var numberOfCharacters = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : source.length;
  var linesCount = 0;
  var lastNewLinePos = -1;

  for (var i = 0; i < numberOfCharacters; i++) {
    if (source.charCodeAt(i) === 10
    /* newline char code */
    ) {
        linesCount++;
        lastNewLinePos = i;
      }
  }

  pos.offset += numberOfCharacters;
  pos.line += linesCount;
  pos.column = lastNewLinePos === -1 ? pos.column + numberOfCharacters : numberOfCharacters - lastNewLinePos;
  return pos;
}

function assert(condition, msg) {
  /* istanbul ignore if */
  if (!condition) {
    throw new Error(msg || "unexpected compiler condition");
  }
}

function findDir(node, name) {
  var allowEmpty = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

  for (var i = 0; i < node.props.length; i++) {
    var p = node.props[i];

    if (p.type === 7
    /* DIRECTIVE */
    && (allowEmpty || p.exp) && ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.isString)(name) ? p.name === name : name.test(p.name))) {
      return p;
    }
  }
}

function findProp(node, name) {
  var dynamicOnly = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  var allowEmpty = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;

  for (var i = 0; i < node.props.length; i++) {
    var p = node.props[i];

    if (p.type === 6
    /* ATTRIBUTE */
    ) {
        if (dynamicOnly) continue;

        if (p.name === name && (p.value || allowEmpty)) {
          return p;
        }
      } else if (p.name === 'bind' && (p.exp || allowEmpty) && isBindKey(p.arg, name)) {
      return p;
    }
  }
}

function isBindKey(arg, name) {
  return !!(arg && isStaticExp(arg) && arg.content === name);
}

function hasDynamicKeyVBind(node) {
  return node.props.some(function (p) {
    return p.type === 7
    /* DIRECTIVE */
    && p.name === 'bind' && (!p.arg || // v-bind="obj"
    p.arg.type !== 4
    /* SIMPLE_EXPRESSION */
    || // v-bind:[_ctx.foo]
    !p.arg.isStatic);
  } // v-bind:[foo]
  );
}

function isText(node) {
  return node.type === 5
  /* INTERPOLATION */
  || node.type === 2
  /* TEXT */
  ;
}

function isVSlot(p) {
  return p.type === 7
  /* DIRECTIVE */
  && p.name === 'slot';
}

function isTemplateNode(node) {
  return node.type === 1
  /* ELEMENT */
  && node.tagType === 3
  /* TEMPLATE */
  ;
}

function isSlotOutlet(node) {
  return node.type === 1
  /* ELEMENT */
  && node.tagType === 2
  /* SLOT */
  ;
}

function injectProp(node, prop, context) {
  var propsWithInjection;
  var props = node.type === 13
  /* VNODE_CALL */
  ? node.props : node.arguments[2];

  if (props == null || (0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.isString)(props)) {
    propsWithInjection = createObjectExpression([prop]);
  } else if (props.type === 14
  /* JS_CALL_EXPRESSION */
  ) {
      // merged props... add ours
      // only inject key to object literal if it's the first argument so that
      // if doesn't override user provided keys
      var first = props.arguments[0];

      if (!(0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.isString)(first) && first.type === 15
      /* JS_OBJECT_EXPRESSION */
      ) {
          first.properties.unshift(prop);
        } else {
        if (props.callee === TO_HANDLERS) {
          // #2366
          propsWithInjection = createCallExpression(context.helper(MERGE_PROPS), [createObjectExpression([prop]), props]);
        } else {
          props.arguments.unshift(createObjectExpression([prop]));
        }
      }

      !propsWithInjection && (propsWithInjection = props);
    } else if (props.type === 15
  /* JS_OBJECT_EXPRESSION */
  ) {
      var alreadyExists = false; // check existing key to avoid overriding user provided keys

      if (prop.key.type === 4
      /* SIMPLE_EXPRESSION */
      ) {
          var propKeyName = prop.key.content;
          alreadyExists = props.properties.some(function (p) {
            return p.key.type === 4
            /* SIMPLE_EXPRESSION */
            && p.key.content === propKeyName;
          });
        }

      if (!alreadyExists) {
        props.properties.unshift(prop);
      }

      propsWithInjection = props;
    } else {
    // single v-bind with expression, return a merged replacement
    propsWithInjection = createCallExpression(context.helper(MERGE_PROPS), [createObjectExpression([prop]), props]);
  }

  if (node.type === 13
  /* VNODE_CALL */
  ) {
      node.props = propsWithInjection;
    } else {
    node.arguments[2] = propsWithInjection;
  }
}

function toValidAssetId(name, type) {
  return "_".concat(type, "_").concat(name.replace(/[^\w]/g, '_'));
} // Check if a node contains expressions that reference current context scope ids


function hasScopeRef(node, ids) {
  if (!node || Object.keys(ids).length === 0) {
    return false;
  }

  switch (node.type) {
    case 1
    /* ELEMENT */
    :
      for (var i = 0; i < node.props.length; i++) {
        var p = node.props[i];

        if (p.type === 7
        /* DIRECTIVE */
        && (hasScopeRef(p.arg, ids) || hasScopeRef(p.exp, ids))) {
          return true;
        }
      }

      return node.children.some(function (c) {
        return hasScopeRef(c, ids);
      });

    case 11
    /* FOR */
    :
      if (hasScopeRef(node.source, ids)) {
        return true;
      }

      return node.children.some(function (c) {
        return hasScopeRef(c, ids);
      });

    case 9
    /* IF */
    :
      return node.branches.some(function (b) {
        return hasScopeRef(b, ids);
      });

    case 10
    /* IF_BRANCH */
    :
      if (hasScopeRef(node.condition, ids)) {
        return true;
      }

      return node.children.some(function (c) {
        return hasScopeRef(c, ids);
      });

    case 4
    /* SIMPLE_EXPRESSION */
    :
      return !node.isStatic && isSimpleIdentifier(node.content) && !!ids[node.content];

    case 8
    /* COMPOUND_EXPRESSION */
    :
      return node.children.some(function (c) {
        return (0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.isObject)(c) && hasScopeRef(c, ids);
      });

    case 5
    /* INTERPOLATION */
    :
    case 12
    /* TEXT_CALL */
    :
      return hasScopeRef(node.content, ids);

    case 2
    /* TEXT */
    :
    case 3
    /* COMMENT */
    :
      return false;

    default:
      if (true) ;
      return false;
  }
}

var deprecationData = (_deprecationData = {}, _defineProperty(_deprecationData, "COMPILER_IS_ON_ELEMENT"
/* COMPILER_IS_ON_ELEMENT */
, {
  message: "Platform-native elements with \"is\" prop will no longer be " + "treated as components in Vue 3 unless the \"is\" value is explicitly " + "prefixed with \"vue:\".",
  link: "https://v3.vuejs.org/guide/migration/custom-elements-interop.html"
}), _defineProperty(_deprecationData, "COMPILER_V_BIND_SYNC"
/* COMPILER_V_BIND_SYNC */
, {
  message: function message(key) {
    return ".sync modifier for v-bind has been removed. Use v-model with " + "argument instead. `v-bind:".concat(key, ".sync` should be changed to ") + "`v-model:".concat(key, "`.");
  },
  link: "https://v3.vuejs.org/guide/migration/v-model.html"
}), _defineProperty(_deprecationData, "COMPILER_V_BIND_PROP"
/* COMPILER_V_BIND_PROP */
, {
  message: ".prop modifier for v-bind has been removed and no longer necessary. " + "Vue 3 will automatically set a binding as DOM property when appropriate."
}), _defineProperty(_deprecationData, "COMPILER_V_BIND_OBJECT_ORDER"
/* COMPILER_V_BIND_OBJECT_ORDER */
, {
  message: "v-bind=\"obj\" usage is now order sensitive and behaves like JavaScript " + "object spread: it will now overwrite an existing non-mergeable attribute " + "that appears before v-bind in the case of conflict. " + "To retain 2.x behavior, move v-bind to make it the first attribute. " + "You can also suppress this warning if the usage is intended.",
  link: "https://v3.vuejs.org/guide/migration/v-bind.html"
}), _defineProperty(_deprecationData, "COMPILER_V_ON_NATIVE"
/* COMPILER_V_ON_NATIVE */
, {
  message: ".native modifier for v-on has been removed as is no longer necessary.",
  link: "https://v3.vuejs.org/guide/migration/v-on-native-modifier-removed.html"
}), _defineProperty(_deprecationData, "COMPILER_V_IF_V_FOR_PRECEDENCE"
/* COMPILER_V_IF_V_FOR_PRECEDENCE */
, {
  message: "v-if / v-for precedence when used on the same element has changed " + "in Vue 3: v-if now takes higher precedence and will no longer have " + "access to v-for scope variables. It is best to avoid the ambiguity " + "with <template> tags or use a computed property that filters v-for " + "data source.",
  link: "https://v3.vuejs.org/guide/migration/v-if-v-for.html"
}), _defineProperty(_deprecationData, "COMPILER_V_FOR_REF"
/* COMPILER_V_FOR_REF */
, {
  message: "Ref usage on v-for no longer creates array ref values in Vue 3. " + "Consider using function refs or refactor to avoid ref usage altogether.",
  link: "https://v3.vuejs.org/guide/migration/array-refs.html"
}), _defineProperty(_deprecationData, "COMPILER_NATIVE_TEMPLATE"
/* COMPILER_NATIVE_TEMPLATE */
, {
  message: "<template> with no special directives will render as a native template " + "element instead of its inner content in Vue 3."
}), _defineProperty(_deprecationData, "COMPILER_INLINE_TEMPLATE"
/* COMPILER_INLINE_TEMPLATE */
, {
  message: "\"inline-template\" has been removed in Vue 3.",
  link: "https://v3.vuejs.org/guide/migration/inline-template-attribute.html"
}), _defineProperty(_deprecationData, "COMPILER_FILTER"
/* COMPILER_FILTERS */
, {
  message: "filters have been removed in Vue 3. " + "The \"|\" symbol will be treated as native JavaScript bitwise OR operator. " + "Use method calls or computed properties instead.",
  link: "https://v3.vuejs.org/guide/migration/filters.html"
}), _deprecationData);

function getCompatValue(key, context) {
  var config = context.options ? context.options.compatConfig : context.compatConfig;
  var value = config && config[key];

  if (key === 'MODE') {
    return value || 3; // compiler defaults to v3 behavior
  } else {
    return value;
  }
}

function isCompatEnabled(key, context) {
  var mode = getCompatValue('MODE', context);
  var value = getCompatValue(key, context); // in v3 mode, only enable if explicitly set to true
  // otherwise enable for any non-false value

  return mode === 3 ? value === true : value !== false;
}

function checkCompatEnabled(key, context, loc) {
  var enabled = isCompatEnabled(key, context);

  if ( true && enabled) {
    for (var _len = arguments.length, args = new Array(_len > 3 ? _len - 3 : 0), _key = 3; _key < _len; _key++) {
      args[_key - 3] = arguments[_key];
    }

    warnDeprecation.apply(void 0, [key, context, loc].concat(args));
  }

  return enabled;
}

function warnDeprecation(key, context, loc) {
  var val = getCompatValue(key, context);

  if (val === 'suppress-warning') {
    return;
  }

  var _deprecationData$key = deprecationData[key],
      message = _deprecationData$key.message,
      link = _deprecationData$key.link;

  for (var _len2 = arguments.length, args = new Array(_len2 > 3 ? _len2 - 3 : 0), _key2 = 3; _key2 < _len2; _key2++) {
    args[_key2 - 3] = arguments[_key2];
  }

  var msg = "(deprecation ".concat(key, ") ").concat(typeof message === 'function' ? message.apply(void 0, args) : message).concat(link ? "\n  Details: ".concat(link) : "");
  var err = new SyntaxError(msg);
  err.code = key;
  if (loc) err.loc = loc;
  context.onWarn(err);
} // The default decoder only provides escapes for characters reserved as part of
// the template syntax, and is only used if the custom renderer did not provide
// a platform-specific decoder.


var decodeRE = /&(gt|lt|amp|apos|quot);/g;
var decodeMap = {
  gt: '>',
  lt: '<',
  amp: '&',
  apos: "'",
  quot: '"'
};
var defaultParserOptions = {
  delimiters: ["{{", "}}"],
  getNamespace: function getNamespace() {
    return 0;
  }
  /* HTML */
  ,
  getTextMode: function getTextMode() {
    return 0;
  }
  /* DATA */
  ,
  isVoidTag: _vue_shared__WEBPACK_IMPORTED_MODULE_0__.NO,
  isPreTag: _vue_shared__WEBPACK_IMPORTED_MODULE_0__.NO,
  isCustomElement: _vue_shared__WEBPACK_IMPORTED_MODULE_0__.NO,
  decodeEntities: function decodeEntities(rawText) {
    return rawText.replace(decodeRE, function (_, p1) {
      return decodeMap[p1];
    });
  },
  onError: defaultOnError,
  onWarn: defaultOnWarn,
  comments: false
};

function baseParse(content) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var context = createParserContext(content, options);
  var start = getCursor(context);
  return createRoot(parseChildren(context, 0
  /* DATA */
  , []), getSelection(context, start));
}

function createParserContext(content, rawOptions) {
  var options = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.extend)({}, defaultParserOptions);

  for (var key in rawOptions) {
    // @ts-ignore
    options[key] = rawOptions[key] || defaultParserOptions[key];
  }

  return {
    options: options,
    column: 1,
    line: 1,
    offset: 0,
    originalSource: content,
    source: content,
    inPre: false,
    inVPre: false,
    onWarn: options.onWarn
  };
}

function parseChildren(context, mode, ancestors) {
  var parent = last(ancestors);
  var ns = parent ? parent.ns : 0
  /* HTML */
  ;
  var nodes = [];

  while (!isEnd(context, mode, ancestors)) {
    var s = context.source;
    var node = undefined;

    if (mode === 0
    /* DATA */
    || mode === 1
    /* RCDATA */
    ) {
        if (!context.inVPre && startsWith(s, context.options.delimiters[0])) {
          // '{{'
          node = parseInterpolation(context, mode);
        } else if (mode === 0
        /* DATA */
        && s[0] === '<') {
          // https://html.spec.whatwg.org/multipage/parsing.html#tag-open-state
          if (s.length === 1) {
            emitError(context, 5
            /* EOF_BEFORE_TAG_NAME */
            , 1);
          } else if (s[1] === '!') {
            // https://html.spec.whatwg.org/multipage/parsing.html#markup-declaration-open-state
            if (startsWith(s, '<!--')) {
              node = parseComment(context);
            } else if (startsWith(s, '<!DOCTYPE')) {
              // Ignore DOCTYPE by a limitation.
              node = parseBogusComment(context);
            } else if (startsWith(s, '<![CDATA[')) {
              if (ns !== 0
              /* HTML */
              ) {
                  node = parseCDATA(context, ancestors);
                } else {
                emitError(context, 1
                /* CDATA_IN_HTML_CONTENT */
                );
                node = parseBogusComment(context);
              }
            } else {
              emitError(context, 11
              /* INCORRECTLY_OPENED_COMMENT */
              );
              node = parseBogusComment(context);
            }
          } else if (s[1] === '/') {
            // https://html.spec.whatwg.org/multipage/parsing.html#end-tag-open-state
            if (s.length === 2) {
              emitError(context, 5
              /* EOF_BEFORE_TAG_NAME */
              , 2);
            } else if (s[2] === '>') {
              emitError(context, 14
              /* MISSING_END_TAG_NAME */
              , 2);
              advanceBy(context, 3);
              continue;
            } else if (/[a-z]/i.test(s[2])) {
              emitError(context, 23
              /* X_INVALID_END_TAG */
              );
              parseTag(context, 1
              /* End */
              , parent);
              continue;
            } else {
              emitError(context, 12
              /* INVALID_FIRST_CHARACTER_OF_TAG_NAME */
              , 2);
              node = parseBogusComment(context);
            }
          } else if (/[a-z]/i.test(s[1])) {
            node = parseElement(context, ancestors); // 2.x <template> with no directive compat

            if (isCompatEnabled("COMPILER_NATIVE_TEMPLATE"
            /* COMPILER_NATIVE_TEMPLATE */
            , context) && node && node.tag === 'template' && !node.props.some(function (p) {
              return p.type === 7
              /* DIRECTIVE */
              && isSpecialTemplateDirective(p.name);
            })) {
               true && warnDeprecation("COMPILER_NATIVE_TEMPLATE"
              /* COMPILER_NATIVE_TEMPLATE */
              , context, node.loc);
              node = node.children;
            }
          } else if (s[1] === '?') {
            emitError(context, 21
            /* UNEXPECTED_QUESTION_MARK_INSTEAD_OF_TAG_NAME */
            , 1);
            node = parseBogusComment(context);
          } else {
            emitError(context, 12
            /* INVALID_FIRST_CHARACTER_OF_TAG_NAME */
            , 1);
          }
        }
      }

    if (!node) {
      node = parseText(context, mode);
    }

    if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.isArray)(node)) {
      for (var i = 0; i < node.length; i++) {
        pushNode(nodes, node[i]);
      }
    } else {
      pushNode(nodes, node);
    }
  } // Whitespace handling strategy like v2


  var removedWhitespace = false;

  if (mode !== 2
  /* RAWTEXT */
  && mode !== 1
  /* RCDATA */
  ) {
      var preserve = context.options.whitespace === 'preserve';

      for (var _i = 0; _i < nodes.length; _i++) {
        var _node2 = nodes[_i];

        if (!context.inPre && _node2.type === 2
        /* TEXT */
        ) {
            if (!/[^\t\r\n\f ]/.test(_node2.content)) {
              var prev = nodes[_i - 1];
              var next = nodes[_i + 1]; // Remove if:
              // - the whitespace is the first or last node, or:
              // - (condense mode) the whitespace is adjacent to a comment, or:
              // - (condense mode) the whitespace is between two elements AND contains newline

              if (!prev || !next || !preserve && (prev.type === 3
              /* COMMENT */
              || next.type === 3
              /* COMMENT */
              || prev.type === 1
              /* ELEMENT */
              && next.type === 1
              /* ELEMENT */
              && /[\r\n]/.test(_node2.content))) {
                removedWhitespace = true;
                nodes[_i] = null;
              } else {
                // Otherwise, the whitespace is condensed into a single space
                _node2.content = ' ';
              }
            } else if (!preserve) {
              // in condense mode, consecutive whitespaces in text are condensed
              // down to a single space.
              _node2.content = _node2.content.replace(/[\t\r\n\f ]+/g, ' ');
            }
          } // also remove comment nodes in prod by default


        if (false) {}
      }

      if (context.inPre && parent && context.options.isPreTag(parent.tag)) {
        // remove leading newline per html spec
        // https://html.spec.whatwg.org/multipage/grouping-content.html#the-pre-element
        var first = nodes[0];

        if (first && first.type === 2
        /* TEXT */
        ) {
            first.content = first.content.replace(/^\r?\n/, '');
          }
      }
    }

  return removedWhitespace ? nodes.filter(Boolean) : nodes;
}

function pushNode(nodes, node) {
  if (node.type === 2
  /* TEXT */
  ) {
      var prev = last(nodes); // Merge if both this and the previous node are text and those are
      // consecutive. This happens for cases like "a < b".

      if (prev && prev.type === 2
      /* TEXT */
      && prev.loc.end.offset === node.loc.start.offset) {
        prev.content += node.content;
        prev.loc.end = node.loc.end;
        prev.loc.source += node.loc.source;
        return;
      }
    }

  nodes.push(node);
}

function parseCDATA(context, ancestors) {
  advanceBy(context, 9);
  var nodes = parseChildren(context, 3
  /* CDATA */
  , ancestors);

  if (context.source.length === 0) {
    emitError(context, 6
    /* EOF_IN_CDATA */
    );
  } else {
    advanceBy(context, 3);
  }

  return nodes;
}

function parseComment(context) {
  var start = getCursor(context);
  var content; // Regular comment.

  var match = /--(\!)?>/.exec(context.source);

  if (!match) {
    content = context.source.slice(4);
    advanceBy(context, context.source.length);
    emitError(context, 7
    /* EOF_IN_COMMENT */
    );
  } else {
    if (match.index <= 3) {
      emitError(context, 0
      /* ABRUPT_CLOSING_OF_EMPTY_COMMENT */
      );
    }

    if (match[1]) {
      emitError(context, 10
      /* INCORRECTLY_CLOSED_COMMENT */
      );
    }

    content = context.source.slice(4, match.index); // Advancing with reporting nested comments.

    var s = context.source.slice(0, match.index);
    var prevIndex = 1,
        nestedIndex = 0;

    while ((nestedIndex = s.indexOf('<!--', prevIndex)) !== -1) {
      advanceBy(context, nestedIndex - prevIndex + 1);

      if (nestedIndex + 4 < s.length) {
        emitError(context, 16
        /* NESTED_COMMENT */
        );
      }

      prevIndex = nestedIndex + 1;
    }

    advanceBy(context, match.index + match[0].length - prevIndex + 1);
  }

  return {
    type: 3
    /* COMMENT */
    ,
    content: content,
    loc: getSelection(context, start)
  };
}

function parseBogusComment(context) {
  var start = getCursor(context);
  var contentStart = context.source[1] === '?' ? 1 : 2;
  var content;
  var closeIndex = context.source.indexOf('>');

  if (closeIndex === -1) {
    content = context.source.slice(contentStart);
    advanceBy(context, context.source.length);
  } else {
    content = context.source.slice(contentStart, closeIndex);
    advanceBy(context, closeIndex + 1);
  }

  return {
    type: 3
    /* COMMENT */
    ,
    content: content,
    loc: getSelection(context, start)
  };
}

function parseElement(context, ancestors) {
  // Start tag.
  var wasInPre = context.inPre;
  var wasInVPre = context.inVPre;
  var parent = last(ancestors);
  var element = parseTag(context, 0
  /* Start */
  , parent);
  var isPreBoundary = context.inPre && !wasInPre;
  var isVPreBoundary = context.inVPre && !wasInVPre;

  if (element.isSelfClosing || context.options.isVoidTag(element.tag)) {
    return element;
  } // Children.


  ancestors.push(element);
  var mode = context.options.getTextMode(element, parent);
  var children = parseChildren(context, mode, ancestors);
  ancestors.pop(); // 2.x inline-template compat

  {
    var inlineTemplateProp = element.props.find(function (p) {
      return p.type === 6
      /* ATTRIBUTE */
      && p.name === 'inline-template';
    });

    if (inlineTemplateProp && checkCompatEnabled("COMPILER_INLINE_TEMPLATE"
    /* COMPILER_INLINE_TEMPLATE */
    , context, inlineTemplateProp.loc)) {
      var loc = getSelection(context, element.loc.end);
      inlineTemplateProp.value = {
        type: 2
        /* TEXT */
        ,
        content: loc.source,
        loc: loc
      };
    }
  }
  element.children = children; // End tag.

  if (startsWithEndTagOpen(context.source, element.tag)) {
    parseTag(context, 1
    /* End */
    , parent);
  } else {
    emitError(context, 24
    /* X_MISSING_END_TAG */
    , 0, element.loc.start);

    if (context.source.length === 0 && element.tag.toLowerCase() === 'script') {
      var first = children[0];

      if (first && startsWith(first.loc.source, '<!--')) {
        emitError(context, 8
        /* EOF_IN_SCRIPT_HTML_COMMENT_LIKE_TEXT */
        );
      }
    }
  }

  element.loc = getSelection(context, element.loc.start);

  if (isPreBoundary) {
    context.inPre = false;
  }

  if (isVPreBoundary) {
    context.inVPre = false;
  }

  return element;
}

var isSpecialTemplateDirective = /*#__PURE__*/(0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.makeMap)("if,else,else-if,for,slot");

function parseTag(context, type, parent) {
  // Tag open.
  var start = getCursor(context);
  var match = /^<\/?([a-z][^\t\r\n\f />]*)/i.exec(context.source);
  var tag = match[1];
  var ns = context.options.getNamespace(tag, parent);
  advanceBy(context, match[0].length);
  advanceSpaces(context); // save current state in case we need to re-parse attributes with v-pre

  var cursor = getCursor(context);
  var currentSource = context.source; // Attributes.

  var props = parseAttributes(context, type); // check <pre> tag

  if (context.options.isPreTag(tag)) {
    context.inPre = true;
  } // check v-pre


  if (type === 0
  /* Start */
  && !context.inVPre && props.some(function (p) {
    return p.type === 7
    /* DIRECTIVE */
    && p.name === 'pre';
  })) {
    context.inVPre = true; // reset context

    (0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.extend)(context, cursor);
    context.source = currentSource; // re-parse attrs and filter out v-pre itself

    props = parseAttributes(context, type).filter(function (p) {
      return p.name !== 'v-pre';
    });
  } // Tag close.


  var isSelfClosing = false;

  if (context.source.length === 0) {
    emitError(context, 9
    /* EOF_IN_TAG */
    );
  } else {
    isSelfClosing = startsWith(context.source, '/>');

    if (type === 1
    /* End */
    && isSelfClosing) {
      emitError(context, 4
      /* END_TAG_WITH_TRAILING_SOLIDUS */
      );
    }

    advanceBy(context, isSelfClosing ? 2 : 1);
  }

  if (type === 1
  /* End */
  ) {
      return;
    } // 2.x deprecation checks


  if ( true && isCompatEnabled("COMPILER_V_IF_V_FOR_PRECEDENCE"
  /* COMPILER_V_IF_V_FOR_PRECEDENCE */
  , context)) {
    var hasIf = false;
    var hasFor = false;

    for (var i = 0; i < props.length; i++) {
      var p = props[i];

      if (p.type === 7
      /* DIRECTIVE */
      ) {
          if (p.name === 'if') {
            hasIf = true;
          } else if (p.name === 'for') {
            hasFor = true;
          }
        }

      if (hasIf && hasFor) {
        warnDeprecation("COMPILER_V_IF_V_FOR_PRECEDENCE"
        /* COMPILER_V_IF_V_FOR_PRECEDENCE */
        , context, getSelection(context, start));
      }
    }
  }

  var tagType = 0
  /* ELEMENT */
  ;

  if (!context.inVPre) {
    if (tag === 'slot') {
      tagType = 2
      /* SLOT */
      ;
    } else if (tag === 'template') {
      if (props.some(function (p) {
        return p.type === 7
        /* DIRECTIVE */
        && isSpecialTemplateDirective(p.name);
      })) {
        tagType = 3
        /* TEMPLATE */
        ;
      }
    } else if (isComponent(tag, props, context)) {
      tagType = 1
      /* COMPONENT */
      ;
    }
  }

  return {
    type: 1
    /* ELEMENT */
    ,
    ns: ns,
    tag: tag,
    tagType: tagType,
    props: props,
    isSelfClosing: isSelfClosing,
    children: [],
    loc: getSelection(context, start),
    codegenNode: undefined // to be created during transform phase

  };
}

function isComponent(tag, props, context) {
  var options = context.options;

  if (options.isCustomElement(tag)) {
    return false;
  }

  if (tag === 'component' || /^[A-Z]/.test(tag) || isCoreComponent(tag) || options.isBuiltInComponent && options.isBuiltInComponent(tag) || options.isNativeTag && !options.isNativeTag(tag)) {
    return true;
  } // at this point the tag should be a native tag, but check for potential "is"
  // casting


  for (var i = 0; i < props.length; i++) {
    var p = props[i];

    if (p.type === 6
    /* ATTRIBUTE */
    ) {
        if (p.name === 'is' && p.value) {
          if (p.value.content.startsWith('vue:')) {
            return true;
          } else if (checkCompatEnabled("COMPILER_IS_ON_ELEMENT"
          /* COMPILER_IS_ON_ELEMENT */
          , context, p.loc)) {
            return true;
          }
        }
      } else {
      // directive
      // v-is (TODO Deprecate)
      if (p.name === 'is') {
        return true;
      } else if ( // :is on plain element - only treat as component in compat mode
      p.name === 'bind' && isBindKey(p.arg, 'is') && true && checkCompatEnabled("COMPILER_IS_ON_ELEMENT"
      /* COMPILER_IS_ON_ELEMENT */
      , context, p.loc)) {
        return true;
      }
    }
  }
}

function parseAttributes(context, type) {
  var props = [];
  var attributeNames = new Set();

  while (context.source.length > 0 && !startsWith(context.source, '>') && !startsWith(context.source, '/>')) {
    if (startsWith(context.source, '/')) {
      emitError(context, 22
      /* UNEXPECTED_SOLIDUS_IN_TAG */
      );
      advanceBy(context, 1);
      advanceSpaces(context);
      continue;
    }

    if (type === 1
    /* End */
    ) {
        emitError(context, 3
        /* END_TAG_WITH_ATTRIBUTES */
        );
      }

    var attr = parseAttribute(context, attributeNames);

    if (type === 0
    /* Start */
    ) {
        props.push(attr);
      }

    if (/^[^\t\r\n\f />]/.test(context.source)) {
      emitError(context, 15
      /* MISSING_WHITESPACE_BETWEEN_ATTRIBUTES */
      );
    }

    advanceSpaces(context);
  }

  return props;
}

function parseAttribute(context, nameSet) {
  // Name.
  var start = getCursor(context);
  var match = /^[^\t\r\n\f />][^\t\r\n\f />=]*/.exec(context.source);
  var name = match[0];

  if (nameSet.has(name)) {
    emitError(context, 2
    /* DUPLICATE_ATTRIBUTE */
    );
  }

  nameSet.add(name);

  if (name[0] === '=') {
    emitError(context, 19
    /* UNEXPECTED_EQUALS_SIGN_BEFORE_ATTRIBUTE_NAME */
    );
  }

  {
    var pattern = /["'<]/g;
    var m;

    while (m = pattern.exec(name)) {
      emitError(context, 17
      /* UNEXPECTED_CHARACTER_IN_ATTRIBUTE_NAME */
      , m.index);
    }
  }
  advanceBy(context, name.length); // Value

  var value = undefined;

  if (/^[\t\r\n\f ]*=/.test(context.source)) {
    advanceSpaces(context);
    advanceBy(context, 1);
    advanceSpaces(context);
    value = parseAttributeValue(context);

    if (!value) {
      emitError(context, 13
      /* MISSING_ATTRIBUTE_VALUE */
      );
    }
  }

  var loc = getSelection(context, start);

  if (!context.inVPre && /^(v-|:|@|#)/.test(name)) {
    var _match = /(?:^v-([a-z0-9-]+))?(?:(?::|^@|^#)(\[[^\]]+\]|[^\.]+))?(.+)?$/i.exec(name);

    var dirName = _match[1] || (startsWith(name, ':') ? 'bind' : startsWith(name, '@') ? 'on' : 'slot');
    var arg;

    if (_match[2]) {
      var isSlot = dirName === 'slot';
      var startOffset = name.lastIndexOf(_match[2]);

      var _loc = getSelection(context, getNewPosition(context, start, startOffset), getNewPosition(context, start, startOffset + _match[2].length + (isSlot && _match[3] || '').length));

      var content = _match[2];
      var isStatic = true;

      if (content.startsWith('[')) {
        isStatic = false;

        if (!content.endsWith(']')) {
          emitError(context, 26
          /* X_MISSING_DYNAMIC_DIRECTIVE_ARGUMENT_END */
          );
        }

        content = content.substr(1, content.length - 2);
      } else if (isSlot) {
        // #1241 special case for v-slot: vuetify relies extensively on slot
        // names containing dots. v-slot doesn't have any modifiers and Vue 2.x
        // supports such usage so we are keeping it consistent with 2.x.
        content += _match[3] || '';
      }

      arg = {
        type: 4
        /* SIMPLE_EXPRESSION */
        ,
        content: content,
        isStatic: isStatic,
        constType: isStatic ? 3
        /* CAN_STRINGIFY */
        : 0
        /* NOT_CONSTANT */
        ,
        loc: _loc
      };
    }

    if (value && value.isQuoted) {
      var valueLoc = value.loc;
      valueLoc.start.offset++;
      valueLoc.start.column++;
      valueLoc.end = advancePositionWithClone(valueLoc.start, value.content);
      valueLoc.source = valueLoc.source.slice(1, -1);
    }

    var modifiers = _match[3] ? _match[3].substr(1).split('.') : []; // 2.x compat v-bind:foo.sync -> v-model:foo

    if (dirName === 'bind' && arg) {
      if (modifiers.includes('sync') && checkCompatEnabled("COMPILER_V_BIND_SYNC"
      /* COMPILER_V_BIND_SYNC */
      , context, loc, arg.loc.source)) {
        dirName = 'model';
        modifiers.splice(modifiers.indexOf('sync'), 1);
      }

      if ( true && modifiers.includes('prop')) {
        checkCompatEnabled("COMPILER_V_BIND_PROP"
        /* COMPILER_V_BIND_PROP */
        , context, loc);
      }
    }

    return {
      type: 7
      /* DIRECTIVE */
      ,
      name: dirName,
      exp: value && {
        type: 4
        /* SIMPLE_EXPRESSION */
        ,
        content: value.content,
        isStatic: false,
        // Treat as non-constant by default. This can be potentially set to
        // other values by `transformExpression` to make it eligible for hoisting.
        constType: 0
        /* NOT_CONSTANT */
        ,
        loc: value.loc
      },
      arg: arg,
      modifiers: modifiers,
      loc: loc
    };
  }

  return {
    type: 6
    /* ATTRIBUTE */
    ,
    name: name,
    value: value && {
      type: 2
      /* TEXT */
      ,
      content: value.content,
      loc: value.loc
    },
    loc: loc
  };
}

function parseAttributeValue(context) {
  var start = getCursor(context);
  var content;
  var quote = context.source[0];
  var isQuoted = quote === "\"" || quote === "'";

  if (isQuoted) {
    // Quoted value.
    advanceBy(context, 1);
    var endIndex = context.source.indexOf(quote);

    if (endIndex === -1) {
      content = parseTextData(context, context.source.length, 4
      /* ATTRIBUTE_VALUE */
      );
    } else {
      content = parseTextData(context, endIndex, 4
      /* ATTRIBUTE_VALUE */
      );
      advanceBy(context, 1);
    }
  } else {
    // Unquoted
    var match = /^[^\t\r\n\f >]+/.exec(context.source);

    if (!match) {
      return undefined;
    }

    var unexpectedChars = /["'<=`]/g;
    var m;

    while (m = unexpectedChars.exec(match[0])) {
      emitError(context, 18
      /* UNEXPECTED_CHARACTER_IN_UNQUOTED_ATTRIBUTE_VALUE */
      , m.index);
    }

    content = parseTextData(context, match[0].length, 4
    /* ATTRIBUTE_VALUE */
    );
  }

  return {
    content: content,
    isQuoted: isQuoted,
    loc: getSelection(context, start)
  };
}

function parseInterpolation(context, mode) {
  var _context$options$deli = _slicedToArray(context.options.delimiters, 2),
      open = _context$options$deli[0],
      close = _context$options$deli[1];

  var closeIndex = context.source.indexOf(close, open.length);

  if (closeIndex === -1) {
    emitError(context, 25
    /* X_MISSING_INTERPOLATION_END */
    );
    return undefined;
  }

  var start = getCursor(context);
  advanceBy(context, open.length);
  var innerStart = getCursor(context);
  var innerEnd = getCursor(context);
  var rawContentLength = closeIndex - open.length;
  var rawContent = context.source.slice(0, rawContentLength);
  var preTrimContent = parseTextData(context, rawContentLength, mode);
  var content = preTrimContent.trim();
  var startOffset = preTrimContent.indexOf(content);

  if (startOffset > 0) {
    advancePositionWithMutation(innerStart, rawContent, startOffset);
  }

  var endOffset = rawContentLength - (preTrimContent.length - content.length - startOffset);
  advancePositionWithMutation(innerEnd, rawContent, endOffset);
  advanceBy(context, close.length);
  return {
    type: 5
    /* INTERPOLATION */
    ,
    content: {
      type: 4
      /* SIMPLE_EXPRESSION */
      ,
      isStatic: false,
      // Set `isConstant` to false by default and will decide in transformExpression
      constType: 0
      /* NOT_CONSTANT */
      ,
      content: content,
      loc: getSelection(context, innerStart, innerEnd)
    },
    loc: getSelection(context, start)
  };
}

function parseText(context, mode) {
  var endTokens = ['<', context.options.delimiters[0]];

  if (mode === 3
  /* CDATA */
  ) {
      endTokens.push(']]>');
    }

  var endIndex = context.source.length;

  for (var i = 0; i < endTokens.length; i++) {
    var index = context.source.indexOf(endTokens[i], 1);

    if (index !== -1 && endIndex > index) {
      endIndex = index;
    }
  }

  var start = getCursor(context);
  var content = parseTextData(context, endIndex, mode);
  return {
    type: 2
    /* TEXT */
    ,
    content: content,
    loc: getSelection(context, start)
  };
}
/**
 * Get text data with a given length from the current location.
 * This translates HTML entities in the text data.
 */


function parseTextData(context, length, mode) {
  var rawText = context.source.slice(0, length);
  advanceBy(context, length);

  if (mode === 2
  /* RAWTEXT */
  || mode === 3
  /* CDATA */
  || rawText.indexOf('&') === -1) {
    return rawText;
  } else {
    // DATA or RCDATA containing "&"". Entity decoding required.
    return context.options.decodeEntities(rawText, mode === 4
    /* ATTRIBUTE_VALUE */
    );
  }
}

function getCursor(context) {
  var column = context.column,
      line = context.line,
      offset = context.offset;
  return {
    column: column,
    line: line,
    offset: offset
  };
}

function getSelection(context, start, end) {
  end = end || getCursor(context);
  return {
    start: start,
    end: end,
    source: context.originalSource.slice(start.offset, end.offset)
  };
}

function last(xs) {
  return xs[xs.length - 1];
}

function startsWith(source, searchString) {
  return source.startsWith(searchString);
}

function advanceBy(context, numberOfCharacters) {
  var source = context.source;
  advancePositionWithMutation(context, source, numberOfCharacters);
  context.source = source.slice(numberOfCharacters);
}

function advanceSpaces(context) {
  var match = /^[\t\r\n\f ]+/.exec(context.source);

  if (match) {
    advanceBy(context, match[0].length);
  }
}

function getNewPosition(context, start, numberOfCharacters) {
  return advancePositionWithClone(start, context.originalSource.slice(start.offset, numberOfCharacters), numberOfCharacters);
}

function emitError(context, code, offset) {
  var loc = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : getCursor(context);

  if (offset) {
    loc.offset += offset;
    loc.column += offset;
  }

  context.options.onError(createCompilerError(code, {
    start: loc,
    end: loc,
    source: ''
  }));
}

function isEnd(context, mode, ancestors) {
  var s = context.source;

  switch (mode) {
    case 0
    /* DATA */
    :
      if (startsWith(s, '</')) {
        // TODO: probably bad performance
        for (var i = ancestors.length - 1; i >= 0; --i) {
          if (startsWithEndTagOpen(s, ancestors[i].tag)) {
            return true;
          }
        }
      }

      break;

    case 1
    /* RCDATA */
    :
    case 2
    /* RAWTEXT */
    :
      {
        var parent = last(ancestors);

        if (parent && startsWithEndTagOpen(s, parent.tag)) {
          return true;
        }

        break;
      }

    case 3
    /* CDATA */
    :
      if (startsWith(s, ']]>')) {
        return true;
      }

      break;
  }

  return !s;
}

function startsWithEndTagOpen(source, tag) {
  return startsWith(source, '</') && source.substr(2, tag.length).toLowerCase() === tag.toLowerCase() && /[\t\r\n\f />]/.test(source[2 + tag.length] || '>');
}

function hoistStatic(root, context) {
  walk(root, context, // Root node is unfortunately non-hoistable due to potential parent
  // fallthrough attributes.
  isSingleElementRoot(root, root.children[0]));
}

function isSingleElementRoot(root, child) {
  var children = root.children;
  return children.length === 1 && child.type === 1
  /* ELEMENT */
  && !isSlotOutlet(child);
}

function walk(node, context) {
  var doNotHoistNode = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  var hasHoistedNode = false; // Some transforms, e.g. transformAssetUrls from @vue/compiler-sfc, replaces
  // static bindings with expressions. These expressions are guaranteed to be
  // constant so they are still eligible for hoisting, but they are only
  // available at runtime and therefore cannot be evaluated ahead of time.
  // This is only a concern for pre-stringification (via transformHoist by
  // @vue/compiler-dom), but doing it here allows us to perform only one full
  // walk of the AST and allow `stringifyStatic` to stop walking as soon as its
  // stringficiation threshold is met.

  var canStringify = true;
  var children = node.children;

  for (var i = 0; i < children.length; i++) {
    var child = children[i]; // only plain elements & text calls are eligible for hoisting.

    if (child.type === 1
    /* ELEMENT */
    && child.tagType === 0
    /* ELEMENT */
    ) {
        var constantType = doNotHoistNode ? 0
        /* NOT_CONSTANT */
        : getConstantType(child, context);

        if (constantType > 0
        /* NOT_CONSTANT */
        ) {
            if (constantType < 3
            /* CAN_STRINGIFY */
            ) {
                canStringify = false;
              }

            if (constantType >= 2
            /* CAN_HOIST */
            ) {
                child.codegenNode.patchFlag = -1
                /* HOISTED */
                + ( true ? " /* HOISTED */" : 0);
                child.codegenNode = context.hoist(child.codegenNode);
                hasHoistedNode = true;
                continue;
              }
          } else {
          // node may contain dynamic children, but its props may be eligible for
          // hoisting.
          var codegenNode = child.codegenNode;

          if (codegenNode.type === 13
          /* VNODE_CALL */
          ) {
              var flag = getPatchFlag(codegenNode);

              if ((!flag || flag === 512
              /* NEED_PATCH */
              || flag === 1
              /* TEXT */
              ) && getGeneratedPropsConstantType(child, context) >= 2
              /* CAN_HOIST */
              ) {
                  var props = getNodeProps(child);

                  if (props) {
                    codegenNode.props = context.hoist(props);
                  }
                }
            }
        }
      } else if (child.type === 12
    /* TEXT_CALL */
    ) {
        var contentType = getConstantType(child.content, context);

        if (contentType > 0) {
          if (contentType < 3
          /* CAN_STRINGIFY */
          ) {
              canStringify = false;
            }

          if (contentType >= 2
          /* CAN_HOIST */
          ) {
              child.codegenNode = context.hoist(child.codegenNode);
              hasHoistedNode = true;
            }
        }
      } // walk further


    if (child.type === 1
    /* ELEMENT */
    ) {
        var _isComponent = child.tagType === 1
        /* COMPONENT */
        ;

        if (_isComponent) {
          context.scopes.vSlot++;
        }

        walk(child, context);

        if (_isComponent) {
          context.scopes.vSlot--;
        }
      } else if (child.type === 11
    /* FOR */
    ) {
        // Do not hoist v-for single child because it has to be a block
        walk(child, context, child.children.length === 1);
      } else if (child.type === 9
    /* IF */
    ) {
        for (var _i2 = 0; _i2 < child.branches.length; _i2++) {
          // Do not hoist v-if single child because it has to be a block
          walk(child.branches[_i2], context, child.branches[_i2].children.length === 1);
        }
      }
  }

  if (canStringify && hasHoistedNode && context.transformHoist) {
    context.transformHoist(children, context, node);
  }
}

function getConstantType(node, context) {
  var constantCache = context.constantCache;

  switch (node.type) {
    case 1
    /* ELEMENT */
    :
      if (node.tagType !== 0
      /* ELEMENT */
      ) {
          return 0
          /* NOT_CONSTANT */
          ;
        }

      var cached = constantCache.get(node);

      if (cached !== undefined) {
        return cached;
      }

      var codegenNode = node.codegenNode;

      if (codegenNode.type !== 13
      /* VNODE_CALL */
      ) {
          return 0
          /* NOT_CONSTANT */
          ;
        }

      var flag = getPatchFlag(codegenNode);

      if (!flag) {
        var _returnType = 3
        /* CAN_STRINGIFY */
        ; // Element itself has no patch flag. However we still need to check:
        // 1. Even for a node with no patch flag, it is possible for it to contain
        // non-hoistable expressions that refers to scope variables, e.g. compiler
        // injected keys or cached event handlers. Therefore we need to always
        // check the codegenNode's props to be sure.

        var generatedPropsType = getGeneratedPropsConstantType(node, context);

        if (generatedPropsType === 0
        /* NOT_CONSTANT */
        ) {
            constantCache.set(node, 0
            /* NOT_CONSTANT */
            );
            return 0
            /* NOT_CONSTANT */
            ;
          }

        if (generatedPropsType < _returnType) {
          _returnType = generatedPropsType;
        } // 2. its children.


        for (var i = 0; i < node.children.length; i++) {
          var childType = getConstantType(node.children[i], context);

          if (childType === 0
          /* NOT_CONSTANT */
          ) {
              constantCache.set(node, 0
              /* NOT_CONSTANT */
              );
              return 0
              /* NOT_CONSTANT */
              ;
            }

          if (childType < _returnType) {
            _returnType = childType;
          }
        } // 3. if the type is not already CAN_SKIP_PATCH which is the lowest non-0
        // type, check if any of the props can cause the type to be lowered
        // we can skip can_patch because it's guaranteed by the absence of a
        // patchFlag.


        if (_returnType > 1
        /* CAN_SKIP_PATCH */
        ) {
            for (var _i3 = 0; _i3 < node.props.length; _i3++) {
              var p = node.props[_i3];

              if (p.type === 7
              /* DIRECTIVE */
              && p.name === 'bind' && p.exp) {
                var expType = getConstantType(p.exp, context);

                if (expType === 0
                /* NOT_CONSTANT */
                ) {
                    constantCache.set(node, 0
                    /* NOT_CONSTANT */
                    );
                    return 0
                    /* NOT_CONSTANT */
                    ;
                  }

                if (expType < _returnType) {
                  _returnType = expType;
                }
              }
            }
          } // only svg/foreignObject could be block here, however if they are
        // static then they don't need to be blocks since there will be no
        // nested updates.


        if (codegenNode.isBlock) {
          context.removeHelper(OPEN_BLOCK);
          context.removeHelper(CREATE_BLOCK);
          codegenNode.isBlock = false;
          context.helper(CREATE_VNODE);
        }

        constantCache.set(node, _returnType);
        return _returnType;
      } else {
        constantCache.set(node, 0
        /* NOT_CONSTANT */
        );
        return 0
        /* NOT_CONSTANT */
        ;
      }

    case 2
    /* TEXT */
    :
    case 3
    /* COMMENT */
    :
      return 3
      /* CAN_STRINGIFY */
      ;

    case 9
    /* IF */
    :
    case 11
    /* FOR */
    :
    case 10
    /* IF_BRANCH */
    :
      return 0
      /* NOT_CONSTANT */
      ;

    case 5
    /* INTERPOLATION */
    :
    case 12
    /* TEXT_CALL */
    :
      return getConstantType(node.content, context);

    case 4
    /* SIMPLE_EXPRESSION */
    :
      return node.constType;

    case 8
    /* COMPOUND_EXPRESSION */
    :
      var returnType = 3
      /* CAN_STRINGIFY */
      ;

      for (var _i4 = 0; _i4 < node.children.length; _i4++) {
        var child = node.children[_i4];

        if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.isString)(child) || (0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.isSymbol)(child)) {
          continue;
        }

        var _childType = getConstantType(child, context);

        if (_childType === 0
        /* NOT_CONSTANT */
        ) {
            return 0
            /* NOT_CONSTANT */
            ;
          } else if (_childType < returnType) {
          returnType = _childType;
        }
      }

      return returnType;

    default:
      if (true) ;
      return 0
      /* NOT_CONSTANT */
      ;
  }
}

function getGeneratedPropsConstantType(node, context) {
  var returnType = 3
  /* CAN_STRINGIFY */
  ;
  var props = getNodeProps(node);

  if (props && props.type === 15
  /* JS_OBJECT_EXPRESSION */
  ) {
      var properties = props.properties;

      for (var i = 0; i < properties.length; i++) {
        var _properties$i = properties[i],
            key = _properties$i.key,
            value = _properties$i.value;
        var keyType = getConstantType(key, context);

        if (keyType === 0
        /* NOT_CONSTANT */
        ) {
            return keyType;
          }

        if (keyType < returnType) {
          returnType = keyType;
        }

        if (value.type !== 4
        /* SIMPLE_EXPRESSION */
        ) {
            return 0
            /* NOT_CONSTANT */
            ;
          }

        var valueType = getConstantType(value, context);

        if (valueType === 0
        /* NOT_CONSTANT */
        ) {
            return valueType;
          }

        if (valueType < returnType) {
          returnType = valueType;
        }
      }
    }

  return returnType;
}

function getNodeProps(node) {
  var codegenNode = node.codegenNode;

  if (codegenNode.type === 13
  /* VNODE_CALL */
  ) {
      return codegenNode.props;
    }
}

function getPatchFlag(node) {
  var flag = node.patchFlag;
  return flag ? parseInt(flag, 10) : undefined;
}

function createTransformContext(root, _ref) {
  var _ref$filename = _ref.filename,
      filename = _ref$filename === void 0 ? '' : _ref$filename,
      _ref$prefixIdentifier = _ref.prefixIdentifiers,
      prefixIdentifiers = _ref$prefixIdentifier === void 0 ? false : _ref$prefixIdentifier,
      _ref$hoistStatic = _ref.hoistStatic,
      hoistStatic = _ref$hoistStatic === void 0 ? false : _ref$hoistStatic,
      _ref$cacheHandlers = _ref.cacheHandlers,
      cacheHandlers = _ref$cacheHandlers === void 0 ? false : _ref$cacheHandlers,
      _ref$nodeTransforms = _ref.nodeTransforms,
      nodeTransforms = _ref$nodeTransforms === void 0 ? [] : _ref$nodeTransforms,
      _ref$directiveTransfo = _ref.directiveTransforms,
      directiveTransforms = _ref$directiveTransfo === void 0 ? {} : _ref$directiveTransfo,
      _ref$transformHoist = _ref.transformHoist,
      transformHoist = _ref$transformHoist === void 0 ? null : _ref$transformHoist,
      _ref$isBuiltInCompone = _ref.isBuiltInComponent,
      isBuiltInComponent = _ref$isBuiltInCompone === void 0 ? _vue_shared__WEBPACK_IMPORTED_MODULE_0__.NOOP : _ref$isBuiltInCompone,
      _ref$isCustomElement = _ref.isCustomElement,
      isCustomElement = _ref$isCustomElement === void 0 ? _vue_shared__WEBPACK_IMPORTED_MODULE_0__.NOOP : _ref$isCustomElement,
      _ref$expressionPlugin = _ref.expressionPlugins,
      expressionPlugins = _ref$expressionPlugin === void 0 ? [] : _ref$expressionPlugin,
      _ref$scopeId = _ref.scopeId,
      scopeId = _ref$scopeId === void 0 ? null : _ref$scopeId,
      _ref$slotted = _ref.slotted,
      slotted = _ref$slotted === void 0 ? true : _ref$slotted,
      _ref$ssr = _ref.ssr,
      ssr = _ref$ssr === void 0 ? false : _ref$ssr,
      _ref$ssrCssVars = _ref.ssrCssVars,
      ssrCssVars = _ref$ssrCssVars === void 0 ? "" : _ref$ssrCssVars,
      _ref$bindingMetadata = _ref.bindingMetadata,
      bindingMetadata = _ref$bindingMetadata === void 0 ? _vue_shared__WEBPACK_IMPORTED_MODULE_0__.EMPTY_OBJ : _ref$bindingMetadata,
      _ref$inline = _ref.inline,
      inline = _ref$inline === void 0 ? false : _ref$inline,
      _ref$isTS = _ref.isTS,
      isTS = _ref$isTS === void 0 ? false : _ref$isTS,
      _ref$onError = _ref.onError,
      onError = _ref$onError === void 0 ? defaultOnError : _ref$onError,
      _ref$onWarn = _ref.onWarn,
      onWarn = _ref$onWarn === void 0 ? defaultOnWarn : _ref$onWarn,
      compatConfig = _ref.compatConfig;
  var nameMatch = filename.replace(/\?.*$/, '').match(/([^/\\]+)\.\w+$/);
  var context = {
    // options
    selfName: nameMatch && (0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.capitalize)((0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.camelize)(nameMatch[1])),
    prefixIdentifiers: prefixIdentifiers,
    hoistStatic: hoistStatic,
    cacheHandlers: cacheHandlers,
    nodeTransforms: nodeTransforms,
    directiveTransforms: directiveTransforms,
    transformHoist: transformHoist,
    isBuiltInComponent: isBuiltInComponent,
    isCustomElement: isCustomElement,
    expressionPlugins: expressionPlugins,
    scopeId: scopeId,
    slotted: slotted,
    ssr: ssr,
    ssrCssVars: ssrCssVars,
    bindingMetadata: bindingMetadata,
    inline: inline,
    isTS: isTS,
    onError: onError,
    onWarn: onWarn,
    compatConfig: compatConfig,
    // state
    root: root,
    helpers: new Map(),
    components: new Set(),
    directives: new Set(),
    hoists: [],
    imports: [],
    constantCache: new Map(),
    temps: 0,
    cached: 0,
    identifiers: Object.create(null),
    scopes: {
      vFor: 0,
      vSlot: 0,
      vPre: 0,
      vOnce: 0
    },
    parent: null,
    currentNode: root,
    childIndex: 0,
    // methods
    helper: function helper(name) {
      var count = context.helpers.get(name) || 0;
      context.helpers.set(name, count + 1);
      return name;
    },
    removeHelper: function removeHelper(name) {
      var count = context.helpers.get(name);

      if (count) {
        var currentCount = count - 1;

        if (!currentCount) {
          context.helpers["delete"](name);
        } else {
          context.helpers.set(name, currentCount);
        }
      }
    },
    helperString: function helperString(name) {
      return "_".concat(helperNameMap[context.helper(name)]);
    },
    replaceNode: function replaceNode(node) {
      /* istanbul ignore if */
      if (true) {
        if (!context.currentNode) {
          throw new Error("Node being replaced is already removed.");
        }

        if (!context.parent) {
          throw new Error("Cannot replace root node.");
        }
      }

      context.parent.children[context.childIndex] = context.currentNode = node;
    },
    removeNode: function removeNode(node) {
      if ( true && !context.parent) {
        throw new Error("Cannot remove root node.");
      }

      var list = context.parent.children;
      var removalIndex = node ? list.indexOf(node) : context.currentNode ? context.childIndex : -1;
      /* istanbul ignore if */

      if ( true && removalIndex < 0) {
        throw new Error("node being removed is not a child of current parent");
      }

      if (!node || node === context.currentNode) {
        // current node removed
        context.currentNode = null;
        context.onNodeRemoved();
      } else {
        // sibling node removed
        if (context.childIndex > removalIndex) {
          context.childIndex--;
          context.onNodeRemoved();
        }
      }

      context.parent.children.splice(removalIndex, 1);
    },
    onNodeRemoved: function onNodeRemoved() {},
    addIdentifiers: function addIdentifiers(exp) {},
    removeIdentifiers: function removeIdentifiers(exp) {},
    hoist: function hoist(exp) {
      context.hoists.push(exp);
      var identifier = createSimpleExpression("_hoisted_".concat(context.hoists.length), false, exp.loc, 2
      /* CAN_HOIST */
      );
      identifier.hoisted = exp;
      return identifier;
    },
    cache: function cache(exp) {
      var isVNode = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      return createCacheExpression(++context.cached, exp, isVNode);
    }
  };
  {
    context.filters = new Set();
  }
  return context;
}

function transform(root, options) {
  var context = createTransformContext(root, options);
  traverseNode(root, context);

  if (options.hoistStatic) {
    hoistStatic(root, context);
  }

  if (!options.ssr) {
    createRootCodegen(root, context);
  } // finalize meta information


  root.helpers = _toConsumableArray(context.helpers.keys());
  root.components = _toConsumableArray(context.components);
  root.directives = _toConsumableArray(context.directives);
  root.imports = context.imports;
  root.hoists = context.hoists;
  root.temps = context.temps;
  root.cached = context.cached;
  {
    root.filters = _toConsumableArray(context.filters);
  }
}

function createRootCodegen(root, context) {
  var helper = context.helper,
      removeHelper = context.removeHelper;
  var children = root.children;

  if (children.length === 1) {
    var child = children[0]; // if the single child is an element, turn it into a block.

    if (isSingleElementRoot(root, child) && child.codegenNode) {
      // single element root is never hoisted so codegenNode will never be
      // SimpleExpressionNode
      var codegenNode = child.codegenNode;

      if (codegenNode.type === 13
      /* VNODE_CALL */
      ) {
          if (!codegenNode.isBlock) {
            removeHelper(CREATE_VNODE);
            codegenNode.isBlock = true;
            helper(OPEN_BLOCK);
            helper(CREATE_BLOCK);
          }
        }

      root.codegenNode = codegenNode;
    } else {
      // - single <slot/>, IfNode, ForNode: already blocks.
      // - single text node: always patched.
      // root codegen falls through via genNode()
      root.codegenNode = child;
    }
  } else if (children.length > 1) {
    // root has multiple nodes - return a fragment block.
    var patchFlag = 64
    /* STABLE_FRAGMENT */
    ;
    var patchFlagText = _vue_shared__WEBPACK_IMPORTED_MODULE_0__.PatchFlagNames[64]; // check if the fragment actually contains a single valid child with
    // the rest being comments

    if ( true && children.filter(function (c) {
      return c.type !== 3;
    }
    /* COMMENT */
    ).length === 1) {
      patchFlag |= 2048
      /* DEV_ROOT_FRAGMENT */
      ;
      patchFlagText += ", ".concat(_vue_shared__WEBPACK_IMPORTED_MODULE_0__.PatchFlagNames[2048]);
    }

    root.codegenNode = createVNodeCall(context, helper(FRAGMENT), undefined, root.children, patchFlag + ( true ? " /* ".concat(patchFlagText, " */") : 0), undefined, undefined, true);
  } else ;
}

function traverseChildren(parent, context) {
  var i = 0;

  var nodeRemoved = function nodeRemoved() {
    i--;
  };

  for (; i < parent.children.length; i++) {
    var child = parent.children[i];
    if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.isString)(child)) continue;
    context.parent = parent;
    context.childIndex = i;
    context.onNodeRemoved = nodeRemoved;
    traverseNode(child, context);
  }
}

function traverseNode(node, context) {
  context.currentNode = node; // apply transform plugins

  var nodeTransforms = context.nodeTransforms;
  var exitFns = [];

  for (var _i5 = 0; _i5 < nodeTransforms.length; _i5++) {
    var onExit = nodeTransforms[_i5](node, context);

    if (onExit) {
      if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.isArray)(onExit)) {
        exitFns.push.apply(exitFns, _toConsumableArray(onExit));
      } else {
        exitFns.push(onExit);
      }
    }

    if (!context.currentNode) {
      // node was removed
      return;
    } else {
      // node may have been replaced
      node = context.currentNode;
    }
  }

  switch (node.type) {
    case 3
    /* COMMENT */
    :
      if (!context.ssr) {
        // inject import for the Comment symbol, which is needed for creating
        // comment nodes with `createVNode`
        context.helper(CREATE_COMMENT);
      }

      break;

    case 5
    /* INTERPOLATION */
    :
      // no need to traverse, but we need to inject toString helper
      if (!context.ssr) {
        context.helper(TO_DISPLAY_STRING);
      }

      break;
    // for container types, further traverse downwards

    case 9
    /* IF */
    :
      for (var _i6 = 0; _i6 < node.branches.length; _i6++) {
        traverseNode(node.branches[_i6], context);
      }

      break;

    case 10
    /* IF_BRANCH */
    :
    case 11
    /* FOR */
    :
    case 1
    /* ELEMENT */
    :
    case 0
    /* ROOT */
    :
      traverseChildren(node, context);
      break;
  } // exit transforms


  context.currentNode = node;
  var i = exitFns.length;

  while (i--) {
    exitFns[i]();
  }
}

function createStructuralDirectiveTransform(name, fn) {
  var matches = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.isString)(name) ? function (n) {
    return n === name;
  } : function (n) {
    return name.test(n);
  };
  return function (node, context) {
    if (node.type === 1
    /* ELEMENT */
    ) {
        var props = node.props; // structural directive transforms are not concerned with slots
        // as they are handled separately in vSlot.ts

        if (node.tagType === 3
        /* TEMPLATE */
        && props.some(isVSlot)) {
          return;
        }

        var exitFns = [];

        for (var i = 0; i < props.length; i++) {
          var prop = props[i];

          if (prop.type === 7
          /* DIRECTIVE */
          && matches(prop.name)) {
            // structural directives are removed to avoid infinite recursion
            // also we remove them *before* applying so that it can further
            // traverse itself in case it moves the node around
            props.splice(i, 1);
            i--;
            var onExit = fn(node, prop, context);
            if (onExit) exitFns.push(onExit);
          }
        }

        return exitFns;
      }
  };
}

var PURE_ANNOTATION = "/*#__PURE__*/";

function createCodegenContext(ast, _ref2) {
  var _ref2$mode = _ref2.mode,
      mode = _ref2$mode === void 0 ? 'function' : _ref2$mode,
      _ref2$prefixIdentifie = _ref2.prefixIdentifiers,
      prefixIdentifiers = _ref2$prefixIdentifie === void 0 ? mode === 'module' : _ref2$prefixIdentifie,
      _ref2$sourceMap = _ref2.sourceMap,
      sourceMap = _ref2$sourceMap === void 0 ? false : _ref2$sourceMap,
      _ref2$filename = _ref2.filename,
      filename = _ref2$filename === void 0 ? "template.vue.html" : _ref2$filename,
      _ref2$scopeId = _ref2.scopeId,
      scopeId = _ref2$scopeId === void 0 ? null : _ref2$scopeId,
      _ref2$optimizeImports = _ref2.optimizeImports,
      optimizeImports = _ref2$optimizeImports === void 0 ? false : _ref2$optimizeImports,
      _ref2$runtimeGlobalNa = _ref2.runtimeGlobalName,
      runtimeGlobalName = _ref2$runtimeGlobalNa === void 0 ? "Vue" : _ref2$runtimeGlobalNa,
      _ref2$runtimeModuleNa = _ref2.runtimeModuleName,
      runtimeModuleName = _ref2$runtimeModuleNa === void 0 ? "vue" : _ref2$runtimeModuleNa,
      _ref2$ssr = _ref2.ssr,
      ssr = _ref2$ssr === void 0 ? false : _ref2$ssr;
  var context = {
    mode: mode,
    prefixIdentifiers: prefixIdentifiers,
    sourceMap: sourceMap,
    filename: filename,
    scopeId: scopeId,
    optimizeImports: optimizeImports,
    runtimeGlobalName: runtimeGlobalName,
    runtimeModuleName: runtimeModuleName,
    ssr: ssr,
    source: ast.loc.source,
    code: "",
    column: 1,
    line: 1,
    offset: 0,
    indentLevel: 0,
    pure: false,
    map: undefined,
    helper: function helper(key) {
      return "_".concat(helperNameMap[key]);
    },
    push: function push(code, node) {
      context.code += code;
    },
    indent: function indent() {
      _newline(++context.indentLevel);
    },
    deindent: function deindent() {
      var withoutNewLine = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

      if (withoutNewLine) {
        --context.indentLevel;
      } else {
        _newline(--context.indentLevel);
      }
    },
    newline: function newline() {
      _newline(context.indentLevel);
    }
  };

  function _newline(n) {
    context.push('\n' + "  ".repeat(n));
  }

  return context;
}

function generate(ast) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var context = createCodegenContext(ast, options);
  if (options.onContextCreated) options.onContextCreated(context);
  var mode = context.mode,
      push = context.push,
      prefixIdentifiers = context.prefixIdentifiers,
      indent = context.indent,
      deindent = context.deindent,
      newline = context.newline,
      scopeId = context.scopeId,
      ssr = context.ssr;
  var hasHelpers = ast.helpers.length > 0;
  var useWithBlock = !prefixIdentifiers && mode !== 'module'; // preambles
  // in setup() inline mode, the preamble is generated in a sub context
  // and returned separately.

  var preambleContext = context;
  {
    genFunctionPreamble(ast, preambleContext);
  } // enter render function

  var functionName = ssr ? "ssrRender" : "render";
  var args = ssr ? ['_ctx', '_push', '_parent', '_attrs'] : ['_ctx', '_cache'];
  var signature = args.join(', ');
  {
    push("function ".concat(functionName, "(").concat(signature, ") {"));
  }
  indent();

  if (useWithBlock) {
    push("with (_ctx) {");
    indent(); // function mode const declarations should be inside with block
    // also they should be renamed to avoid collision with user properties

    if (hasHelpers) {
      push("const { ".concat(ast.helpers.map(function (s) {
        return "".concat(helperNameMap[s], ": _").concat(helperNameMap[s]);
      }).join(', '), " } = _Vue"));
      push("\n");
      newline();
    }
  } // generate asset resolution statements


  if (ast.components.length) {
    genAssets(ast.components, 'component', context);

    if (ast.directives.length || ast.temps > 0) {
      newline();
    }
  }

  if (ast.directives.length) {
    genAssets(ast.directives, 'directive', context);

    if (ast.temps > 0) {
      newline();
    }
  }

  if (ast.filters && ast.filters.length) {
    newline();
    genAssets(ast.filters, 'filter', context);
    newline();
  }

  if (ast.temps > 0) {
    push("let ");

    for (var i = 0; i < ast.temps; i++) {
      push("".concat(i > 0 ? ", " : "", "_temp").concat(i));
    }
  }

  if (ast.components.length || ast.directives.length || ast.temps) {
    push("\n");
    newline();
  } // generate the VNode tree expression


  if (!ssr) {
    push("return ");
  }

  if (ast.codegenNode) {
    genNode(ast.codegenNode, context);
  } else {
    push("null");
  }

  if (useWithBlock) {
    deindent();
    push("}");
  }

  deindent();
  push("}");
  return {
    ast: ast,
    code: context.code,
    preamble: "",
    // SourceMapGenerator does have toJSON() method but it's not in the types
    map: context.map ? context.map.toJSON() : undefined
  };
}

function genFunctionPreamble(ast, context) {
  var ssr = context.ssr,
      prefixIdentifiers = context.prefixIdentifiers,
      push = context.push,
      newline = context.newline,
      runtimeModuleName = context.runtimeModuleName,
      runtimeGlobalName = context.runtimeGlobalName;
  var VueBinding = runtimeGlobalName;

  var aliasHelper = function aliasHelper(s) {
    return "".concat(helperNameMap[s], ": _").concat(helperNameMap[s]);
  }; // Generate const declaration for helpers
  // In prefix mode, we place the const declaration at top so it's done
  // only once; But if we not prefixing, we place the declaration inside the
  // with block so it doesn't incur the `in` check cost for every helper access.


  if (ast.helpers.length > 0) {
    {
      // "with" mode.
      // save Vue in a separate variable to avoid collision
      push("const _Vue = ".concat(VueBinding, "\n")); // in "with" mode, helpers are declared inside the with block to avoid
      // has check cost, but hoists are lifted out of the function - we need
      // to provide the helper here.

      if (ast.hoists.length) {
        var staticHelpers = [CREATE_VNODE, CREATE_COMMENT, CREATE_TEXT, CREATE_STATIC].filter(function (helper) {
          return ast.helpers.includes(helper);
        }).map(aliasHelper).join(', ');
        push("const { ".concat(staticHelpers, " } = _Vue\n"));
      }
    }
  }

  genHoists(ast.hoists, context);
  newline();
  push("return ");
}

function genAssets(assets, type, _ref3) {
  var helper = _ref3.helper,
      push = _ref3.push,
      newline = _ref3.newline;
  var resolver = helper(type === 'filter' ? RESOLVE_FILTER : type === 'component' ? RESOLVE_COMPONENT : RESOLVE_DIRECTIVE);

  for (var i = 0; i < assets.length; i++) {
    var id = assets[i]; // potential component implicit self-reference inferred from SFC filename

    var maybeSelfReference = id.endsWith('__self');

    if (maybeSelfReference) {
      id = id.slice(0, -6);
    }

    push("const ".concat(toValidAssetId(id, type), " = ").concat(resolver, "(").concat(JSON.stringify(id)).concat(maybeSelfReference ? ", true" : "", ")"));

    if (i < assets.length - 1) {
      newline();
    }
  }
}

function genHoists(hoists, context) {
  if (!hoists.length) {
    return;
  }

  context.pure = true;
  var push = context.push,
      newline = context.newline,
      helper = context.helper,
      scopeId = context.scopeId,
      mode = context.mode;
  newline();
  hoists.forEach(function (exp, i) {
    if (exp) {
      push("const _hoisted_".concat(i + 1, " = "));
      genNode(exp, context);
      newline();
    }
  });
  context.pure = false;
}

function isText$1(n) {
  return (0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.isString)(n) || n.type === 4
  /* SIMPLE_EXPRESSION */
  || n.type === 2
  /* TEXT */
  || n.type === 5
  /* INTERPOLATION */
  || n.type === 8
  /* COMPOUND_EXPRESSION */
  ;
}

function genNodeListAsArray(nodes, context) {
  var multilines = nodes.length > 3 ||  true && nodes.some(function (n) {
    return (0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.isArray)(n) || !isText$1(n);
  });
  context.push("[");
  multilines && context.indent();
  genNodeList(nodes, context, multilines);
  multilines && context.deindent();
  context.push("]");
}

function genNodeList(nodes, context) {
  var multilines = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  var comma = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : true;
  var push = context.push,
      newline = context.newline;

  for (var i = 0; i < nodes.length; i++) {
    var node = nodes[i];

    if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.isString)(node)) {
      push(node);
    } else if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.isArray)(node)) {
      genNodeListAsArray(node, context);
    } else {
      genNode(node, context);
    }

    if (i < nodes.length - 1) {
      if (multilines) {
        comma && push(',');
        newline();
      } else {
        comma && push(', ');
      }
    }
  }
}

function genNode(node, context) {
  if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.isString)(node)) {
    context.push(node);
    return;
  }

  if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.isSymbol)(node)) {
    context.push(context.helper(node));
    return;
  }

  switch (node.type) {
    case 1
    /* ELEMENT */
    :
    case 9
    /* IF */
    :
    case 11
    /* FOR */
    :
       true && assert(node.codegenNode != null, "Codegen node is missing for element/if/for node. " + "Apply appropriate transforms first.");
      genNode(node.codegenNode, context);
      break;

    case 2
    /* TEXT */
    :
      genText(node, context);
      break;

    case 4
    /* SIMPLE_EXPRESSION */
    :
      genExpression(node, context);
      break;

    case 5
    /* INTERPOLATION */
    :
      genInterpolation(node, context);
      break;

    case 12
    /* TEXT_CALL */
    :
      genNode(node.codegenNode, context);
      break;

    case 8
    /* COMPOUND_EXPRESSION */
    :
      genCompoundExpression(node, context);
      break;

    case 3
    /* COMMENT */
    :
      genComment(node, context);
      break;

    case 13
    /* VNODE_CALL */
    :
      genVNodeCall(node, context);
      break;

    case 14
    /* JS_CALL_EXPRESSION */
    :
      genCallExpression(node, context);
      break;

    case 15
    /* JS_OBJECT_EXPRESSION */
    :
      genObjectExpression(node, context);
      break;

    case 17
    /* JS_ARRAY_EXPRESSION */
    :
      genArrayExpression(node, context);
      break;

    case 18
    /* JS_FUNCTION_EXPRESSION */
    :
      genFunctionExpression(node, context);
      break;

    case 19
    /* JS_CONDITIONAL_EXPRESSION */
    :
      genConditionalExpression(node, context);
      break;

    case 20
    /* JS_CACHE_EXPRESSION */
    :
      genCacheExpression(node, context);
      break;
    // SSR only types

    case 21
    /* JS_BLOCK_STATEMENT */
    :
      break;

    case 22
    /* JS_TEMPLATE_LITERAL */
    :
      break;

    case 23
    /* JS_IF_STATEMENT */
    :
      break;

    case 24
    /* JS_ASSIGNMENT_EXPRESSION */
    :
      break;

    case 25
    /* JS_SEQUENCE_EXPRESSION */
    :
      break;

    case 26
    /* JS_RETURN_STATEMENT */
    :
      break;

    /* istanbul ignore next */

    case 10
    /* IF_BRANCH */
    :
      // noop
      break;

    default:
      if (true) {
        assert(false, "unhandled codegen node type: ".concat(node.type)); // make sure we exhaust all possible types

        var exhaustiveCheck = node;
        return exhaustiveCheck;
      }

  }
}

function genText(node, context) {
  context.push(JSON.stringify(node.content), node);
}

function genExpression(node, context) {
  var content = node.content,
      isStatic = node.isStatic;
  context.push(isStatic ? JSON.stringify(content) : content, node);
}

function genInterpolation(node, context) {
  var push = context.push,
      helper = context.helper,
      pure = context.pure;
  if (pure) push(PURE_ANNOTATION);
  push("".concat(helper(TO_DISPLAY_STRING), "("));
  genNode(node.content, context);
  push(")");
}

function genCompoundExpression(node, context) {
  for (var i = 0; i < node.children.length; i++) {
    var child = node.children[i];

    if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.isString)(child)) {
      context.push(child);
    } else {
      genNode(child, context);
    }
  }
}

function genExpressionAsPropertyKey(node, context) {
  var push = context.push;

  if (node.type === 8
  /* COMPOUND_EXPRESSION */
  ) {
      push("[");
      genCompoundExpression(node, context);
      push("]");
    } else if (node.isStatic) {
    // only quote keys if necessary
    var text = isSimpleIdentifier(node.content) ? node.content : JSON.stringify(node.content);
    push(text, node);
  } else {
    push("[".concat(node.content, "]"), node);
  }
}

function genComment(node, context) {
  var push = context.push,
      helper = context.helper,
      pure = context.pure;

  if (pure) {
    push(PURE_ANNOTATION);
  }

  push("".concat(helper(CREATE_COMMENT), "(").concat(JSON.stringify(node.content), ")"), node);
}

function genVNodeCall(node, context) {
  var push = context.push,
      helper = context.helper,
      pure = context.pure;
  var tag = node.tag,
      props = node.props,
      children = node.children,
      patchFlag = node.patchFlag,
      dynamicProps = node.dynamicProps,
      directives = node.directives,
      isBlock = node.isBlock,
      disableTracking = node.disableTracking;

  if (directives) {
    push(helper(WITH_DIRECTIVES) + "(");
  }

  if (isBlock) {
    push("(".concat(helper(OPEN_BLOCK), "(").concat(disableTracking ? "true" : "", "), "));
  }

  if (pure) {
    push(PURE_ANNOTATION);
  }

  push(helper(isBlock ? CREATE_BLOCK : CREATE_VNODE) + "(", node);
  genNodeList(genNullableArgs([tag, props, children, patchFlag, dynamicProps]), context);
  push(")");

  if (isBlock) {
    push(")");
  }

  if (directives) {
    push(", ");
    genNode(directives, context);
    push(")");
  }
}

function genNullableArgs(args) {
  var i = args.length;

  while (i--) {
    if (args[i] != null) break;
  }

  return args.slice(0, i + 1).map(function (arg) {
    return arg || "null";
  });
} // JavaScript


function genCallExpression(node, context) {
  var push = context.push,
      helper = context.helper,
      pure = context.pure;
  var callee = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.isString)(node.callee) ? node.callee : helper(node.callee);

  if (pure) {
    push(PURE_ANNOTATION);
  }

  push(callee + "(", node);
  genNodeList(node.arguments, context);
  push(")");
}

function genObjectExpression(node, context) {
  var push = context.push,
      indent = context.indent,
      deindent = context.deindent,
      newline = context.newline;
  var properties = node.properties;

  if (!properties.length) {
    push("{}", node);
    return;
  }

  var multilines = properties.length > 1 ||  true && properties.some(function (p) {
    return p.value.type !== 4;
  }
  /* SIMPLE_EXPRESSION */
  );
  push(multilines ? "{" : "{ ");
  multilines && indent();

  for (var i = 0; i < properties.length; i++) {
    var _properties$i2 = properties[i],
        key = _properties$i2.key,
        value = _properties$i2.value; // key

    genExpressionAsPropertyKey(key, context);
    push(": "); // value

    genNode(value, context);

    if (i < properties.length - 1) {
      // will only reach this if it's multilines
      push(",");
      newline();
    }
  }

  multilines && deindent();
  push(multilines ? "}" : " }");
}

function genArrayExpression(node, context) {
  genNodeListAsArray(node.elements, context);
}

function genFunctionExpression(node, context) {
  var push = context.push,
      indent = context.indent,
      deindent = context.deindent,
      scopeId = context.scopeId,
      mode = context.mode;
  var params = node.params,
      returns = node.returns,
      body = node.body,
      newline = node.newline,
      isSlot = node.isSlot;

  if (isSlot) {
    // wrap slot functions with owner context
    push("_".concat(helperNameMap[WITH_CTX], "("));
  }

  push("(", node);

  if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.isArray)(params)) {
    genNodeList(params, context);
  } else if (params) {
    genNode(params, context);
  }

  push(") => ");

  if (newline || body) {
    push("{");
    indent();
  }

  if (returns) {
    if (newline) {
      push("return ");
    }

    if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.isArray)(returns)) {
      genNodeListAsArray(returns, context);
    } else {
      genNode(returns, context);
    }
  } else if (body) {
    genNode(body, context);
  }

  if (newline || body) {
    deindent();
    push("}");
  }

  if (isSlot) {
    if (node.isNonScopedSlot) {
      push(", undefined, true");
    }

    push(")");
  }
}

function genConditionalExpression(node, context) {
  var test = node.test,
      consequent = node.consequent,
      alternate = node.alternate,
      needNewline = node.newline;
  var push = context.push,
      indent = context.indent,
      deindent = context.deindent,
      newline = context.newline;

  if (test.type === 4
  /* SIMPLE_EXPRESSION */
  ) {
      var needsParens = !isSimpleIdentifier(test.content);
      needsParens && push("(");
      genExpression(test, context);
      needsParens && push(")");
    } else {
    push("(");
    genNode(test, context);
    push(")");
  }

  needNewline && indent();
  context.indentLevel++;
  needNewline || push(" ");
  push("? ");
  genNode(consequent, context);
  context.indentLevel--;
  needNewline && newline();
  needNewline || push(" ");
  push(": ");
  var isNested = alternate.type === 19
  /* JS_CONDITIONAL_EXPRESSION */
  ;

  if (!isNested) {
    context.indentLevel++;
  }

  genNode(alternate, context);

  if (!isNested) {
    context.indentLevel--;
  }

  needNewline && deindent(true
  /* without newline */
  );
}

function genCacheExpression(node, context) {
  var push = context.push,
      helper = context.helper,
      indent = context.indent,
      deindent = context.deindent,
      newline = context.newline;
  push("_cache[".concat(node.index, "] || ("));

  if (node.isVNode) {
    indent();
    push("".concat(helper(SET_BLOCK_TRACKING), "(-1),"));
    newline();
  }

  push("_cache[".concat(node.index, "] = "));
  genNode(node.value, context);

  if (node.isVNode) {
    push(",");
    newline();
    push("".concat(helper(SET_BLOCK_TRACKING), "(1),"));
    newline();
    push("_cache[".concat(node.index, "]"));
    deindent();
  }

  push(")");
} // these keywords should not appear inside expressions, but operators like
// typeof, instanceof and in are allowed


var prohibitedKeywordRE = new RegExp('\\b' + ('do,if,for,let,new,try,var,case,else,with,await,break,catch,class,const,' + 'super,throw,while,yield,delete,export,import,return,switch,default,' + 'extends,finally,continue,debugger,function,arguments,typeof,void').split(',').join('\\b|\\b') + '\\b'); // strip strings in expressions

var stripStringRE = /'(?:[^'\\]|\\.)*'|"(?:[^"\\]|\\.)*"|`(?:[^`\\]|\\.)*\$\{|\}(?:[^`\\]|\\.)*`|`(?:[^`\\]|\\.)*`/g;
/**
 * Validate a non-prefixed expression.
 * This is only called when using the in-browser runtime compiler since it
 * doesn't prefix expressions.
 */

function validateBrowserExpression(node, context) {
  var asParams = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  var asRawStatements = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
  var exp = node.content; // empty expressions are validated per-directive since some directives
  // do allow empty expressions.

  if (!exp.trim()) {
    return;
  }

  try {
    new Function(asRawStatements ? " ".concat(exp, " ") : "return ".concat(asParams ? "(".concat(exp, ") => {}") : "(".concat(exp, ")")));
  } catch (e) {
    var message = e.message;
    var keywordMatch = exp.replace(stripStringRE, '').match(prohibitedKeywordRE);

    if (keywordMatch) {
      message = "avoid using JavaScript keyword as property name: \"".concat(keywordMatch[0], "\"");
    }

    context.onError(createCompilerError(43
    /* X_INVALID_EXPRESSION */
    , node.loc, undefined, message));
  }
}

var transformExpression = function transformExpression(node, context) {
  if (node.type === 5
  /* INTERPOLATION */
  ) {
      node.content = processExpression(node.content, context);
    } else if (node.type === 1
  /* ELEMENT */
  ) {
      // handle directives on element
      for (var i = 0; i < node.props.length; i++) {
        var dir = node.props[i]; // do not process for v-on & v-for since they are special handled

        if (dir.type === 7
        /* DIRECTIVE */
        && dir.name !== 'for') {
          var exp = dir.exp;
          var arg = dir.arg; // do not process exp if this is v-on:arg - we need special handling
          // for wrapping inline statements.

          if (exp && exp.type === 4
          /* SIMPLE_EXPRESSION */
          && !(dir.name === 'on' && arg)) {
            dir.exp = processExpression(exp, context, // slot args must be processed as function params
            dir.name === 'slot');
          }

          if (arg && arg.type === 4
          /* SIMPLE_EXPRESSION */
          && !arg.isStatic) {
            dir.arg = processExpression(arg, context);
          }
        }
      }
    }
}; // Important: since this function uses Node.js only dependencies, it should
// always be used with a leading !true check so that it can be
// tree-shaken from the browser build.


function processExpression(node, context) {
  var asParams = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  var asRawStatements = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
  {
    if (true) {
      // simple in-browser validation (same logic in 2.x)
      validateBrowserExpression(node, context, asParams, asRawStatements);
    }

    return node;
  }
}

var transformIf = createStructuralDirectiveTransform(/^(if|else|else-if)$/, function (node, dir, context) {
  return processIf(node, dir, context, function (ifNode, branch, isRoot) {
    // #1587: We need to dynamically increment the key based on the current
    // node's sibling nodes, since chained v-if/else branches are
    // rendered at the same depth
    var siblings = context.parent.children;
    var i = siblings.indexOf(ifNode);
    var key = 0;

    while (i-- >= 0) {
      var sibling = siblings[i];

      if (sibling && sibling.type === 9
      /* IF */
      ) {
          key += sibling.branches.length;
        }
    } // Exit callback. Complete the codegenNode when all children have been
    // transformed.


    return function () {
      if (isRoot) {
        ifNode.codegenNode = createCodegenNodeForBranch(branch, key, context);
      } else {
        // attach this branch's codegen node to the v-if root.
        var parentCondition = getParentCondition(ifNode.codegenNode);
        parentCondition.alternate = createCodegenNodeForBranch(branch, key + ifNode.branches.length - 1, context);
      }
    };
  });
}); // target-agnostic transform used for both Client and SSR

function processIf(node, dir, context, processCodegen) {
  if (dir.name !== 'else' && (!dir.exp || !dir.exp.content.trim())) {
    var loc = dir.exp ? dir.exp.loc : node.loc;
    context.onError(createCompilerError(27
    /* X_V_IF_NO_EXPRESSION */
    , dir.loc));
    dir.exp = createSimpleExpression("true", false, loc);
  }

  if ( true && dir.exp) {
    validateBrowserExpression(dir.exp, context);
  }

  if (dir.name === 'if') {
    var branch = createIfBranch(node, dir);
    var ifNode = {
      type: 9
      /* IF */
      ,
      loc: node.loc,
      branches: [branch]
    };
    context.replaceNode(ifNode);

    if (processCodegen) {
      return processCodegen(ifNode, branch, true);
    }
  } else {
    // locate the adjacent v-if
    var siblings = context.parent.children;
    var comments = [];
    var i = siblings.indexOf(node);

    while (i-- >= -1) {
      var sibling = siblings[i];

      if ( true && sibling && sibling.type === 3
      /* COMMENT */
      ) {
          context.removeNode(sibling);
          comments.unshift(sibling);
          continue;
        }

      if (sibling && sibling.type === 2
      /* TEXT */
      && !sibling.content.trim().length) {
        context.removeNode(sibling);
        continue;
      }

      if (sibling && sibling.type === 9
      /* IF */
      ) {
          (function () {
            // move the node to the if node's branches
            context.removeNode();
            var branch = createIfBranch(node, dir);

            if ( true && comments.length && // #3619 ignore comments if the v-if is direct child of <transition>
            !(context.parent && context.parent.type === 1
            /* ELEMENT */
            && isBuiltInType(context.parent.tag, 'transition'))) {
              branch.children = [].concat(comments, _toConsumableArray(branch.children));
            } // check if user is forcing same key on different branches


            if (true) {
              var key = branch.userKey;

              if (key) {
                sibling.branches.forEach(function (_ref4) {
                  var userKey = _ref4.userKey;

                  if (isSameKey(userKey, key)) {
                    context.onError(createCompilerError(28
                    /* X_V_IF_SAME_KEY */
                    , branch.userKey.loc));
                  }
                });
              }
            }

            sibling.branches.push(branch);
            var onExit = processCodegen && processCodegen(sibling, branch, false); // since the branch was removed, it will not be traversed.
            // make sure to traverse here.

            traverseNode(branch, context); // call on exit

            if (onExit) onExit(); // make sure to reset currentNode after traversal to indicate this
            // node has been removed.

            context.currentNode = null;
          })();
        } else {
        context.onError(createCompilerError(29
        /* X_V_ELSE_NO_ADJACENT_IF */
        , node.loc));
      }

      break;
    }
  }
}

function createIfBranch(node, dir) {
  return {
    type: 10
    /* IF_BRANCH */
    ,
    loc: node.loc,
    condition: dir.name === 'else' ? undefined : dir.exp,
    children: node.tagType === 3
    /* TEMPLATE */
    && !findDir(node, 'for') ? node.children : [node],
    userKey: findProp(node, "key")
  };
}

function createCodegenNodeForBranch(branch, keyIndex, context) {
  if (branch.condition) {
    return createConditionalExpression(branch.condition, createChildrenCodegenNode(branch, keyIndex, context), // make sure to pass in asBlock: true so that the comment node call
    // closes the current block.
    createCallExpression(context.helper(CREATE_COMMENT), [ true ? '"v-if"' : 0, 'true']));
  } else {
    return createChildrenCodegenNode(branch, keyIndex, context);
  }
}

function createChildrenCodegenNode(branch, keyIndex, context) {
  var helper = context.helper,
      removeHelper = context.removeHelper;
  var keyProperty = createObjectProperty("key", createSimpleExpression("".concat(keyIndex), false, locStub, 2
  /* CAN_HOIST */
  ));
  var children = branch.children;
  var firstChild = children[0];
  var needFragmentWrapper = children.length !== 1 || firstChild.type !== 1
  /* ELEMENT */
  ;

  if (needFragmentWrapper) {
    if (children.length === 1 && firstChild.type === 11
    /* FOR */
    ) {
        // optimize away nested fragments when child is a ForNode
        var vnodeCall = firstChild.codegenNode;
        injectProp(vnodeCall, keyProperty, context);
        return vnodeCall;
      } else {
      var patchFlag = 64
      /* STABLE_FRAGMENT */
      ;
      var patchFlagText = _vue_shared__WEBPACK_IMPORTED_MODULE_0__.PatchFlagNames[64]; // check if the fragment actually contains a single valid child with
      // the rest being comments

      if ( true && children.filter(function (c) {
        return c.type !== 3;
      }
      /* COMMENT */
      ).length === 1) {
        patchFlag |= 2048
        /* DEV_ROOT_FRAGMENT */
        ;
        patchFlagText += ", ".concat(_vue_shared__WEBPACK_IMPORTED_MODULE_0__.PatchFlagNames[2048]);
      }

      return createVNodeCall(context, helper(FRAGMENT), createObjectExpression([keyProperty]), children, patchFlag + ( true ? " /* ".concat(patchFlagText, " */") : 0), undefined, undefined, true, false, branch.loc);
    }
  } else {
    var _vnodeCall = firstChild.codegenNode; // Change createVNode to createBlock.

    if (_vnodeCall.type === 13
    /* VNODE_CALL */
    && !_vnodeCall.isBlock) {
      removeHelper(CREATE_VNODE);
      _vnodeCall.isBlock = true;
      helper(OPEN_BLOCK);
      helper(CREATE_BLOCK);
    } // inject branch key


    injectProp(_vnodeCall, keyProperty, context);
    return _vnodeCall;
  }
}

function isSameKey(a, b) {
  if (!a || a.type !== b.type) {
    return false;
  }

  if (a.type === 6
  /* ATTRIBUTE */
  ) {
      if (a.value.content !== b.value.content) {
        return false;
      }
    } else {
    // directive
    var exp = a.exp;
    var branchExp = b.exp;

    if (exp.type !== branchExp.type) {
      return false;
    }

    if (exp.type !== 4
    /* SIMPLE_EXPRESSION */
    || exp.isStatic !== branchExp.isStatic || exp.content !== branchExp.content) {
      return false;
    }
  }

  return true;
}

function getParentCondition(node) {
  while (true) {
    if (node.type === 19
    /* JS_CONDITIONAL_EXPRESSION */
    ) {
        if (node.alternate.type === 19
        /* JS_CONDITIONAL_EXPRESSION */
        ) {
            node = node.alternate;
          } else {
          return node;
        }
      } else if (node.type === 20
    /* JS_CACHE_EXPRESSION */
    ) {
        node = node.value;
      }
  }
}

var transformFor = createStructuralDirectiveTransform('for', function (node, dir, context) {
  var helper = context.helper,
      removeHelper = context.removeHelper;
  return processFor(node, dir, context, function (forNode) {
    // create the loop render function expression now, and add the
    // iterator on exit after all children have been traversed
    var renderExp = createCallExpression(helper(RENDER_LIST), [forNode.source]);
    var keyProp = findProp(node, "key");
    var keyProperty = keyProp ? createObjectProperty("key", keyProp.type === 6
    /* ATTRIBUTE */
    ? createSimpleExpression(keyProp.value.content, true) : keyProp.exp) : null;
    var isStableFragment = forNode.source.type === 4
    /* SIMPLE_EXPRESSION */
    && forNode.source.constType > 0
    /* NOT_CONSTANT */
    ;
    var fragmentFlag = isStableFragment ? 64
    /* STABLE_FRAGMENT */
    : keyProp ? 128
    /* KEYED_FRAGMENT */
    : 256
    /* UNKEYED_FRAGMENT */
    ;
    forNode.codegenNode = createVNodeCall(context, helper(FRAGMENT), undefined, renderExp, fragmentFlag + ( true ? " /* ".concat(_vue_shared__WEBPACK_IMPORTED_MODULE_0__.PatchFlagNames[fragmentFlag], " */") : 0), undefined, undefined, true
    /* isBlock */
    , !isStableFragment
    /* disableTracking */
    , node.loc);
    return function () {
      // finish the codegen now that all children have been traversed
      var childBlock;
      var isTemplate = isTemplateNode(node);
      var children = forNode.children; // check <template v-for> key placement

      if (( true) && isTemplate) {
        node.children.some(function (c) {
          if (c.type === 1
          /* ELEMENT */
          ) {
              var key = findProp(c, 'key');

              if (key) {
                context.onError(createCompilerError(32
                /* X_V_FOR_TEMPLATE_KEY_PLACEMENT */
                , key.loc));
                return true;
              }
            }
        });
      }

      var needFragmentWrapper = children.length !== 1 || children[0].type !== 1
      /* ELEMENT */
      ;
      var slotOutlet = isSlotOutlet(node) ? node : isTemplate && node.children.length === 1 && isSlotOutlet(node.children[0]) ? node.children[0] // api-extractor somehow fails to infer this
      : null;

      if (slotOutlet) {
        // <slot v-for="..."> or <template v-for="..."><slot/></template>
        childBlock = slotOutlet.codegenNode;

        if (isTemplate && keyProperty) {
          // <template v-for="..." :key="..."><slot/></template>
          // we need to inject the key to the renderSlot() call.
          // the props for renderSlot is passed as the 3rd argument.
          injectProp(childBlock, keyProperty, context);
        }
      } else if (needFragmentWrapper) {
        // <template v-for="..."> with text or multi-elements
        // should generate a fragment block for each loop
        childBlock = createVNodeCall(context, helper(FRAGMENT), keyProperty ? createObjectExpression([keyProperty]) : undefined, node.children, 64
        /* STABLE_FRAGMENT */
        + ( true ? " /* ".concat(_vue_shared__WEBPACK_IMPORTED_MODULE_0__.PatchFlagNames[64], " */") : 0), undefined, undefined, true);
      } else {
        // Normal element v-for. Directly use the child's codegenNode
        // but mark it as a block.
        childBlock = children[0].codegenNode;

        if (isTemplate && keyProperty) {
          injectProp(childBlock, keyProperty, context);
        }

        if (childBlock.isBlock !== !isStableFragment) {
          if (childBlock.isBlock) {
            // switch from block to vnode
            removeHelper(OPEN_BLOCK);
            removeHelper(CREATE_BLOCK);
          } else {
            // switch from vnode to block
            removeHelper(CREATE_VNODE);
          }
        }

        childBlock.isBlock = !isStableFragment;

        if (childBlock.isBlock) {
          helper(OPEN_BLOCK);
          helper(CREATE_BLOCK);
        } else {
          helper(CREATE_VNODE);
        }
      }

      renderExp.arguments.push(createFunctionExpression(createForLoopParams(forNode.parseResult), childBlock, true
      /* force newline */
      ));
    };
  });
}); // target-agnostic transform used for both Client and SSR

function processFor(node, dir, context, processCodegen) {
  if (!dir.exp) {
    context.onError(createCompilerError(30
    /* X_V_FOR_NO_EXPRESSION */
    , dir.loc));
    return;
  }

  var parseResult = parseForExpression( // can only be simple expression because vFor transform is applied
  // before expression transform.
  dir.exp, context);

  if (!parseResult) {
    context.onError(createCompilerError(31
    /* X_V_FOR_MALFORMED_EXPRESSION */
    , dir.loc));
    return;
  }

  var addIdentifiers = context.addIdentifiers,
      removeIdentifiers = context.removeIdentifiers,
      scopes = context.scopes;
  var source = parseResult.source,
      value = parseResult.value,
      key = parseResult.key,
      index = parseResult.index;
  var forNode = {
    type: 11
    /* FOR */
    ,
    loc: dir.loc,
    source: source,
    valueAlias: value,
    keyAlias: key,
    objectIndexAlias: index,
    parseResult: parseResult,
    children: isTemplateNode(node) ? node.children : [node]
  };
  context.replaceNode(forNode); // bookkeeping

  scopes.vFor++;
  var onExit = processCodegen && processCodegen(forNode);
  return function () {
    scopes.vFor--;
    if (onExit) onExit();
  };
}

var forAliasRE = /([\s\S]*?)\s+(?:in|of)\s+([\s\S]*)/; // This regex doesn't cover the case if key or index aliases have destructuring,
// but those do not make sense in the first place, so this works in practice.

var forIteratorRE = /,([^,\}\]]*)(?:,([^,\}\]]*))?$/;
var stripParensRE = /^\(|\)$/g;

function parseForExpression(input, context) {
  var loc = input.loc;
  var exp = input.content;
  var inMatch = exp.match(forAliasRE);
  if (!inMatch) return;

  var _inMatch = _slicedToArray(inMatch, 3),
      LHS = _inMatch[1],
      RHS = _inMatch[2];

  var result = {
    source: createAliasExpression(loc, RHS.trim(), exp.indexOf(RHS, LHS.length)),
    value: undefined,
    key: undefined,
    index: undefined
  };

  if (true) {
    validateBrowserExpression(result.source, context);
  }

  var valueContent = LHS.trim().replace(stripParensRE, '').trim();
  var trimmedOffset = LHS.indexOf(valueContent);
  var iteratorMatch = valueContent.match(forIteratorRE);

  if (iteratorMatch) {
    valueContent = valueContent.replace(forIteratorRE, '').trim();
    var keyContent = iteratorMatch[1].trim();
    var keyOffset;

    if (keyContent) {
      keyOffset = exp.indexOf(keyContent, trimmedOffset + valueContent.length);
      result.key = createAliasExpression(loc, keyContent, keyOffset);

      if (true) {
        validateBrowserExpression(result.key, context, true);
      }
    }

    if (iteratorMatch[2]) {
      var indexContent = iteratorMatch[2].trim();

      if (indexContent) {
        result.index = createAliasExpression(loc, indexContent, exp.indexOf(indexContent, result.key ? keyOffset + keyContent.length : trimmedOffset + valueContent.length));

        if (true) {
          validateBrowserExpression(result.index, context, true);
        }
      }
    }
  }

  if (valueContent) {
    result.value = createAliasExpression(loc, valueContent, trimmedOffset);

    if (true) {
      validateBrowserExpression(result.value, context, true);
    }
  }

  return result;
}

function createAliasExpression(range, content, offset) {
  return createSimpleExpression(content, false, getInnerRange(range, offset, content.length));
}

function createForLoopParams(_ref5) {
  var value = _ref5.value,
      key = _ref5.key,
      index = _ref5.index;
  var params = [];

  if (value) {
    params.push(value);
  }

  if (key) {
    if (!value) {
      params.push(createSimpleExpression("_", false));
    }

    params.push(key);
  }

  if (index) {
    if (!key) {
      if (!value) {
        params.push(createSimpleExpression("_", false));
      }

      params.push(createSimpleExpression("__", false));
    }

    params.push(index);
  }

  return params;
}

var defaultFallback = createSimpleExpression("undefined", false); // A NodeTransform that:
// 1. Tracks scope identifiers for scoped slots so that they don't get prefixed
//    by transformExpression. This is only applied in non-browser builds with
//    { prefixIdentifiers: true }.
// 2. Track v-slot depths so that we know a slot is inside another slot.
//    Note the exit callback is executed before buildSlots() on the same node,
//    so only nested slots see positive numbers.

var trackSlotScopes = function trackSlotScopes(node, context) {
  if (node.type === 1
  /* ELEMENT */
  && (node.tagType === 1
  /* COMPONENT */
  || node.tagType === 3
  /* TEMPLATE */
  )) {
    // We are only checking non-empty v-slot here
    // since we only care about slots that introduce scope variables.
    var vSlot = findDir(node, 'slot');

    if (vSlot) {
      vSlot.exp;
      context.scopes.vSlot++;
      return function () {
        context.scopes.vSlot--;
      };
    }
  }
}; // A NodeTransform that tracks scope identifiers for scoped slots with v-for.
// This transform is only applied in non-browser builds with { prefixIdentifiers: true }


var trackVForSlotScopes = function trackVForSlotScopes(node, context) {
  var vFor;

  if (isTemplateNode(node) && node.props.some(isVSlot) && (vFor = findDir(node, 'for'))) {
    var result = vFor.parseResult = parseForExpression(vFor.exp, context);

    if (result) {
      var value = result.value,
          key = result.key,
          index = result.index;
      var addIdentifiers = context.addIdentifiers,
          removeIdentifiers = context.removeIdentifiers;
      value && addIdentifiers(value);
      key && addIdentifiers(key);
      index && addIdentifiers(index);
      return function () {
        value && removeIdentifiers(value);
        key && removeIdentifiers(key);
        index && removeIdentifiers(index);
      };
    }
  }
};

var buildClientSlotFn = function buildClientSlotFn(props, children, loc) {
  return createFunctionExpression(props, children, false
  /* newline */
  , true
  /* isSlot */
  , children.length ? children[0].loc : loc);
}; // Instead of being a DirectiveTransform, v-slot processing is called during
// transformElement to build the slots object for a component.


function buildSlots(node, context) {
  var buildSlotFn = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : buildClientSlotFn;
  context.helper(WITH_CTX);
  var children = node.children,
      loc = node.loc;
  var slotsProperties = [];
  var dynamicSlots = []; // If the slot is inside a v-for or another v-slot, force it to be dynamic
  // since it likely uses a scope variable.

  var hasDynamicSlots = context.scopes.vSlot > 0 || context.scopes.vFor > 0; // 1. Check for slot with slotProps on component itself.
  //    <Comp v-slot="{ prop }"/>

  var onComponentSlot = findDir(node, 'slot', true);

  if (onComponentSlot) {
    var arg = onComponentSlot.arg,
        exp = onComponentSlot.exp;

    if (arg && !isStaticExp(arg)) {
      hasDynamicSlots = true;
    }

    slotsProperties.push(createObjectProperty(arg || createSimpleExpression('default', true), buildSlotFn(exp, children, loc)));
  } // 2. Iterate through children and check for template slots
  //    <template v-slot:foo="{ prop }">


  var hasTemplateSlots = false;
  var hasNamedDefaultSlot = false;
  var implicitDefaultChildren = [];
  var seenSlotNames = new Set();

  for (var i = 0; i < children.length; i++) {
    var slotElement = children[i];
    var slotDir = void 0;

    if (!isTemplateNode(slotElement) || !(slotDir = findDir(slotElement, 'slot', true))) {
      // not a <template v-slot>, skip.
      if (slotElement.type !== 3
      /* COMMENT */
      ) {
          implicitDefaultChildren.push(slotElement);
        }

      continue;
    }

    if (onComponentSlot) {
      // already has on-component slot - this is incorrect usage.
      context.onError(createCompilerError(36
      /* X_V_SLOT_MIXED_SLOT_USAGE */
      , slotDir.loc));
      break;
    }

    hasTemplateSlots = true;
    var slotChildren = slotElement.children,
        slotLoc = slotElement.loc;
    var _slotDir = slotDir,
        _slotDir$arg = _slotDir.arg,
        slotName = _slotDir$arg === void 0 ? createSimpleExpression("default", true) : _slotDir$arg,
        slotProps = _slotDir.exp,
        dirLoc = _slotDir.loc; // check if name is dynamic.

    var staticSlotName = void 0;

    if (isStaticExp(slotName)) {
      staticSlotName = slotName ? slotName.content : "default";
    } else {
      hasDynamicSlots = true;
    }

    var slotFunction = buildSlotFn(slotProps, slotChildren, slotLoc); // check if this slot is conditional (v-if/v-for)

    var vIf = void 0;
    var vElse = void 0;
    var vFor = void 0;

    if (vIf = findDir(slotElement, 'if')) {
      hasDynamicSlots = true;
      dynamicSlots.push(createConditionalExpression(vIf.exp, buildDynamicSlot(slotName, slotFunction), defaultFallback));
    } else if (vElse = findDir(slotElement, /^else(-if)?$/, true
    /* allowEmpty */
    )) {
      // find adjacent v-if
      var j = i;
      var prev = void 0;

      while (j--) {
        prev = children[j];

        if (prev.type !== 3
        /* COMMENT */
        ) {
            break;
          }
      }

      if (prev && isTemplateNode(prev) && findDir(prev, 'if')) {
        // remove node
        children.splice(i, 1);
        i--; // attach this slot to previous conditional

        var conditional = dynamicSlots[dynamicSlots.length - 1];

        while (conditional.alternate.type === 19
        /* JS_CONDITIONAL_EXPRESSION */
        ) {
          conditional = conditional.alternate;
        }

        conditional.alternate = vElse.exp ? createConditionalExpression(vElse.exp, buildDynamicSlot(slotName, slotFunction), defaultFallback) : buildDynamicSlot(slotName, slotFunction);
      } else {
        context.onError(createCompilerError(29
        /* X_V_ELSE_NO_ADJACENT_IF */
        , vElse.loc));
      }
    } else if (vFor = findDir(slotElement, 'for')) {
      hasDynamicSlots = true;
      var parseResult = vFor.parseResult || parseForExpression(vFor.exp, context);

      if (parseResult) {
        // Render the dynamic slots as an array and add it to the createSlot()
        // args. The runtime knows how to handle it appropriately.
        dynamicSlots.push(createCallExpression(context.helper(RENDER_LIST), [parseResult.source, createFunctionExpression(createForLoopParams(parseResult), buildDynamicSlot(slotName, slotFunction), true
        /* force newline */
        )]));
      } else {
        context.onError(createCompilerError(31
        /* X_V_FOR_MALFORMED_EXPRESSION */
        , vFor.loc));
      }
    } else {
      // check duplicate static names
      if (staticSlotName) {
        if (seenSlotNames.has(staticSlotName)) {
          context.onError(createCompilerError(37
          /* X_V_SLOT_DUPLICATE_SLOT_NAMES */
          , dirLoc));
          continue;
        }

        seenSlotNames.add(staticSlotName);

        if (staticSlotName === 'default') {
          hasNamedDefaultSlot = true;
        }
      }

      slotsProperties.push(createObjectProperty(slotName, slotFunction));
    }
  }

  if (!onComponentSlot) {
    var buildDefaultSlotProperty = function buildDefaultSlotProperty(props, children) {
      var fn = buildSlotFn(props, children, loc);

      if (context.compatConfig) {
        fn.isNonScopedSlot = true;
      }

      return createObjectProperty("default", fn);
    };

    if (!hasTemplateSlots) {
      // implicit default slot (on component)
      slotsProperties.push(buildDefaultSlotProperty(undefined, children));
    } else if (implicitDefaultChildren.length && // #3766
    // with whitespace: 'preserve', whitespaces between slots will end up in
    // implicitDefaultChildren. Ignore if all implicit children are whitespaces.
    implicitDefaultChildren.some(function (node) {
      return isNonWhitespaceContent(node);
    })) {
      // implicit default slot (mixed with named slots)
      if (hasNamedDefaultSlot) {
        context.onError(createCompilerError(38
        /* X_V_SLOT_EXTRANEOUS_DEFAULT_SLOT_CHILDREN */
        , implicitDefaultChildren[0].loc));
      } else {
        slotsProperties.push(buildDefaultSlotProperty(undefined, implicitDefaultChildren));
      }
    }
  }

  var slotFlag = hasDynamicSlots ? 2
  /* DYNAMIC */
  : hasForwardedSlots(node.children) ? 3
  /* FORWARDED */
  : 1
  /* STABLE */
  ;
  var slots = createObjectExpression(slotsProperties.concat(createObjectProperty("_", // 2 = compiled but dynamic = can skip normalization, but must run diff
  // 1 = compiled and static = can skip normalization AND diff as optimized
  createSimpleExpression(slotFlag + ( true ? " /* ".concat(_vue_shared__WEBPACK_IMPORTED_MODULE_0__.slotFlagsText[slotFlag], " */") : 0), false))), loc);

  if (dynamicSlots.length) {
    slots = createCallExpression(context.helper(CREATE_SLOTS), [slots, createArrayExpression(dynamicSlots)]);
  }

  return {
    slots: slots,
    hasDynamicSlots: hasDynamicSlots
  };
}

function buildDynamicSlot(name, fn) {
  return createObjectExpression([createObjectProperty("name", name), createObjectProperty("fn", fn)]);
}

function hasForwardedSlots(children) {
  for (var i = 0; i < children.length; i++) {
    var child = children[i];

    switch (child.type) {
      case 1
      /* ELEMENT */
      :
        if (child.tagType === 2
        /* SLOT */
        || child.tagType === 0
        /* ELEMENT */
        && hasForwardedSlots(child.children)) {
          return true;
        }

        break;

      case 9
      /* IF */
      :
        if (hasForwardedSlots(child.branches)) return true;
        break;

      case 10
      /* IF_BRANCH */
      :
      case 11
      /* FOR */
      :
        if (hasForwardedSlots(child.children)) return true;
        break;
    }
  }

  return false;
}

function isNonWhitespaceContent(node) {
  if (node.type !== 2
  /* TEXT */
  && node.type !== 12
  /* TEXT_CALL */
  ) return true;
  return node.type === 2
  /* TEXT */
  ? !!node.content.trim() : isNonWhitespaceContent(node.content);
} // some directive transforms (e.g. v-model) may return a symbol for runtime
// import, which should be used instead of a resolveDirective call.


var directiveImportMap = new WeakMap(); // generate a JavaScript AST for this element's codegen

var transformElement = function transformElement(node, context) {
  // perform the work on exit, after all child expressions have been
  // processed and merged.
  return function postTransformElement() {
    node = context.currentNode;

    if (!(node.type === 1
    /* ELEMENT */
    && (node.tagType === 0
    /* ELEMENT */
    || node.tagType === 1
    /* COMPONENT */
    ))) {
      return;
    }

    var _node3 = node,
        tag = _node3.tag,
        props = _node3.props;
    var isComponent = node.tagType === 1
    /* COMPONENT */
    ; // The goal of the transform is to create a codegenNode implementing the
    // VNodeCall interface.

    var vnodeTag = isComponent ? resolveComponentType(node, context) : "\"".concat(tag, "\"");
    var isDynamicComponent = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.isObject)(vnodeTag) && vnodeTag.callee === RESOLVE_DYNAMIC_COMPONENT;
    var vnodeProps;
    var vnodeChildren;
    var vnodePatchFlag;
    var patchFlag = 0;
    var vnodeDynamicProps;
    var dynamicPropNames;
    var vnodeDirectives;
    var shouldUseBlock = // dynamic component may resolve to plain elements
    isDynamicComponent || vnodeTag === TELEPORT || vnodeTag === SUSPENSE || !isComponent && ( // <svg> and <foreignObject> must be forced into blocks so that block
    // updates inside get proper isSVG flag at runtime. (#639, #643)
    // This is technically web-specific, but splitting the logic out of core
    // leads to too much unnecessary complexity.
    tag === 'svg' || tag === 'foreignObject' || // #938: elements with dynamic keys should be forced into blocks
    findProp(node, 'key', true)); // props

    if (props.length > 0) {
      var propsBuildResult = buildProps(node, context);
      vnodeProps = propsBuildResult.props;
      patchFlag = propsBuildResult.patchFlag;
      dynamicPropNames = propsBuildResult.dynamicPropNames;
      var directives = propsBuildResult.directives;
      vnodeDirectives = directives && directives.length ? createArrayExpression(directives.map(function (dir) {
        return buildDirectiveArgs(dir, context);
      })) : undefined;
    } // children


    if (node.children.length > 0) {
      if (vnodeTag === KEEP_ALIVE) {
        // Although a built-in component, we compile KeepAlive with raw children
        // instead of slot functions so that it can be used inside Transition
        // or other Transition-wrapping HOCs.
        // To ensure correct updates with block optimizations, we need to:
        // 1. Force keep-alive into a block. This avoids its children being
        //    collected by a parent block.
        shouldUseBlock = true; // 2. Force keep-alive to always be updated, since it uses raw children.

        patchFlag |= 1024
        /* DYNAMIC_SLOTS */
        ;

        if ( true && node.children.length > 1) {
          context.onError(createCompilerError(44
          /* X_KEEP_ALIVE_INVALID_CHILDREN */
          , {
            start: node.children[0].loc.start,
            end: node.children[node.children.length - 1].loc.end,
            source: ''
          }));
        }
      }

      var shouldBuildAsSlots = isComponent && // Teleport is not a real component and has dedicated runtime handling
      vnodeTag !== TELEPORT && // explained above.
      vnodeTag !== KEEP_ALIVE;

      if (shouldBuildAsSlots) {
        var _buildSlots = buildSlots(node, context),
            slots = _buildSlots.slots,
            hasDynamicSlots = _buildSlots.hasDynamicSlots;

        vnodeChildren = slots;

        if (hasDynamicSlots) {
          patchFlag |= 1024
          /* DYNAMIC_SLOTS */
          ;
        }
      } else if (node.children.length === 1 && vnodeTag !== TELEPORT) {
        var child = node.children[0];
        var type = child.type; // check for dynamic text children

        var hasDynamicTextChild = type === 5
        /* INTERPOLATION */
        || type === 8
        /* COMPOUND_EXPRESSION */
        ;

        if (hasDynamicTextChild && getConstantType(child, context) === 0
        /* NOT_CONSTANT */
        ) {
            patchFlag |= 1
            /* TEXT */
            ;
          } // pass directly if the only child is a text node
        // (plain / interpolation / expression)


        if (hasDynamicTextChild || type === 2
        /* TEXT */
        ) {
            vnodeChildren = child;
          } else {
          vnodeChildren = node.children;
        }
      } else {
        vnodeChildren = node.children;
      }
    } // patchFlag & dynamicPropNames


    if (patchFlag !== 0) {
      if (true) {
        if (patchFlag < 0) {
          // special flags (negative and mutually exclusive)
          vnodePatchFlag = patchFlag + " /* ".concat(_vue_shared__WEBPACK_IMPORTED_MODULE_0__.PatchFlagNames[patchFlag], " */");
        } else {
          // bitwise flags
          var flagNames = Object.keys(_vue_shared__WEBPACK_IMPORTED_MODULE_0__.PatchFlagNames).map(Number).filter(function (n) {
            return n > 0 && patchFlag & n;
          }).map(function (n) {
            return _vue_shared__WEBPACK_IMPORTED_MODULE_0__.PatchFlagNames[n];
          }).join(", ");
          vnodePatchFlag = patchFlag + " /* ".concat(flagNames, " */");
        }
      } else {}

      if (dynamicPropNames && dynamicPropNames.length) {
        vnodeDynamicProps = stringifyDynamicPropNames(dynamicPropNames);
      }
    }

    node.codegenNode = createVNodeCall(context, vnodeTag, vnodeProps, vnodeChildren, vnodePatchFlag, vnodeDynamicProps, vnodeDirectives, !!shouldUseBlock, false
    /* disableTracking */
    , node.loc);
  };
};

function resolveComponentType(node, context) {
  var ssr = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  var tag = node.tag; // 1. dynamic component

  var isExplicitDynamic = isComponentTag(tag);
  var isProp = findProp(node, 'is');

  if (isProp) {
    if (isExplicitDynamic || isCompatEnabled("COMPILER_IS_ON_ELEMENT"
    /* COMPILER_IS_ON_ELEMENT */
    , context)) {
      var exp = isProp.type === 6
      /* ATTRIBUTE */
      ? isProp.value && createSimpleExpression(isProp.value.content, true) : isProp.exp;

      if (exp) {
        return createCallExpression(context.helper(RESOLVE_DYNAMIC_COMPONENT), [exp]);
      }
    } else if (isProp.type === 6
    /* ATTRIBUTE */
    && isProp.value.content.startsWith('vue:')) {
      // <button is="vue:xxx">
      // if not <component>, only is value that starts with "vue:" will be
      // treated as component by the parse phase and reach here, unless it's
      // compat mode where all is values are considered components
      tag = isProp.value.content.slice(4);
    }
  } // 1.5 v-is (TODO: Deprecate)


  var isDir = !isExplicitDynamic && findDir(node, 'is');

  if (isDir && isDir.exp) {
    return createCallExpression(context.helper(RESOLVE_DYNAMIC_COMPONENT), [isDir.exp]);
  } // 2. built-in components (Teleport, Transition, KeepAlive, Suspense...)


  var builtIn = isCoreComponent(tag) || context.isBuiltInComponent(tag);

  if (builtIn) {
    // built-ins are simply fallthroughs / have special handling during ssr
    // so we don't need to import their runtime equivalents
    if (!ssr) context.helper(builtIn);
    return builtIn;
  } // 5. user component (resolve)


  context.helper(RESOLVE_COMPONENT);
  context.components.add(tag);
  return toValidAssetId(tag, "component");
}

function buildProps(node, context) {
  var props = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : node.props;
  var ssr = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
  var tag = node.tag,
      elementLoc = node.loc;
  var isComponent = node.tagType === 1
  /* COMPONENT */
  ;
  var properties = [];
  var mergeArgs = [];
  var runtimeDirectives = []; // patchFlag analysis

  var patchFlag = 0;
  var hasRef = false;
  var hasClassBinding = false;
  var hasStyleBinding = false;
  var hasHydrationEventBinding = false;
  var hasDynamicKeys = false;
  var hasVnodeHook = false;
  var dynamicPropNames = [];

  var analyzePatchFlag = function analyzePatchFlag(_ref6) {
    var key = _ref6.key,
        value = _ref6.value;

    if (isStaticExp(key)) {
      var name = key.content;
      var isEventHandler = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.isOn)(name);

      if (!isComponent && isEventHandler && // omit the flag for click handlers because hydration gives click
      // dedicated fast path.
      name.toLowerCase() !== 'onclick' && // omit v-model handlers
      name !== 'onUpdate:modelValue' && // omit onVnodeXXX hooks
      !(0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.isReservedProp)(name)) {
        hasHydrationEventBinding = true;
      }

      if (isEventHandler && (0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.isReservedProp)(name)) {
        hasVnodeHook = true;
      }

      if (value.type === 20
      /* JS_CACHE_EXPRESSION */
      || (value.type === 4
      /* SIMPLE_EXPRESSION */
      || value.type === 8
      /* COMPOUND_EXPRESSION */
      ) && getConstantType(value, context) > 0) {
        // skip if the prop is a cached handler or has constant value
        return;
      }

      if (name === 'ref') {
        hasRef = true;
      } else if (name === 'class' && !isComponent) {
        hasClassBinding = true;
      } else if (name === 'style' && !isComponent) {
        hasStyleBinding = true;
      } else if (name !== 'key' && !dynamicPropNames.includes(name)) {
        dynamicPropNames.push(name);
      }
    } else {
      hasDynamicKeys = true;
    }
  };

  for (var i = 0; i < props.length; i++) {
    // static attribute
    var prop = props[i];

    if (prop.type === 6
    /* ATTRIBUTE */
    ) {
        var loc = prop.loc,
            name = prop.name,
            value = prop.value;
        var isStatic = true;

        if (name === 'ref') {
          hasRef = true;
        } // skip is on <component>, or is="vue:xxx"


        if (name === 'is' && (isComponentTag(tag) || value && value.content.startsWith('vue:') || isCompatEnabled("COMPILER_IS_ON_ELEMENT"
        /* COMPILER_IS_ON_ELEMENT */
        , context))) {
          continue;
        }

        properties.push(createObjectProperty(createSimpleExpression(name, true, getInnerRange(loc, 0, name.length)), createSimpleExpression(value ? value.content : '', isStatic, value ? value.loc : loc)));
      } else {
      // directives
      var _name = prop.name,
          arg = prop.arg,
          exp = prop.exp,
          _loc2 = prop.loc;
      var isVBind = _name === 'bind';
      var isVOn = _name === 'on'; // skip v-slot - it is handled by its dedicated transform.

      if (_name === 'slot') {
        if (!isComponent) {
          context.onError(createCompilerError(39
          /* X_V_SLOT_MISPLACED */
          , _loc2));
        }

        continue;
      } // skip v-once - it is handled by its dedicated transform.


      if (_name === 'once') {
        continue;
      } // skip v-is and :is on <component>


      if (_name === 'is' || isVBind && isBindKey(arg, 'is') && (isComponentTag(tag) || isCompatEnabled("COMPILER_IS_ON_ELEMENT"
      /* COMPILER_IS_ON_ELEMENT */
      , context))) {
        continue;
      } // skip v-on in SSR compilation


      if (isVOn && ssr) {
        continue;
      } // special case for v-bind and v-on with no argument


      if (!arg && (isVBind || isVOn)) {
        hasDynamicKeys = true;

        if (exp) {
          if (properties.length) {
            mergeArgs.push(createObjectExpression(dedupeProperties(properties), elementLoc));
            properties = [];
          }

          if (isVBind) {
            {
              // 2.x v-bind object order compat
              if (true) {
                var hasOverridableKeys = mergeArgs.some(function (arg) {
                  if (arg.type === 15
                  /* JS_OBJECT_EXPRESSION */
                  ) {
                      return arg.properties.some(function (_ref7) {
                        var key = _ref7.key;

                        if (key.type !== 4
                        /* SIMPLE_EXPRESSION */
                        || !key.isStatic) {
                          return true;
                        }

                        return key.content !== 'class' && key.content !== 'style' && !(0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.isOn)(key.content);
                      });
                    } else {
                    // dynamic expression
                    return true;
                  }
                });

                if (hasOverridableKeys) {
                  checkCompatEnabled("COMPILER_V_BIND_OBJECT_ORDER"
                  /* COMPILER_V_BIND_OBJECT_ORDER */
                  , context, _loc2);
                }
              }

              if (isCompatEnabled("COMPILER_V_BIND_OBJECT_ORDER"
              /* COMPILER_V_BIND_OBJECT_ORDER */
              , context)) {
                mergeArgs.unshift(exp);
                continue;
              }
            }
            mergeArgs.push(exp);
          } else {
            // v-on="obj" -> toHandlers(obj)
            mergeArgs.push({
              type: 14
              /* JS_CALL_EXPRESSION */
              ,
              loc: _loc2,
              callee: context.helper(TO_HANDLERS),
              arguments: [exp]
            });
          }
        } else {
          context.onError(createCompilerError(isVBind ? 33
          /* X_V_BIND_NO_EXPRESSION */
          : 34
          /* X_V_ON_NO_EXPRESSION */
          , _loc2));
        }

        continue;
      }

      var directiveTransform = context.directiveTransforms[_name];

      if (directiveTransform) {
        var _properties;

        // has built-in directive transform.
        var _directiveTransform = directiveTransform(prop, node, context),
            _props = _directiveTransform.props,
            needRuntime = _directiveTransform.needRuntime;

        !ssr && _props.forEach(analyzePatchFlag);

        (_properties = properties).push.apply(_properties, _toConsumableArray(_props));

        if (needRuntime) {
          runtimeDirectives.push(prop);

          if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.isSymbol)(needRuntime)) {
            directiveImportMap.set(prop, needRuntime);
          }
        }
      } else {
        // no built-in transform, this is a user custom directive.
        runtimeDirectives.push(prop);
      }
    }

    if (prop.type === 6
    /* ATTRIBUTE */
    && prop.name === 'ref' && context.scopes.vFor > 0 && checkCompatEnabled("COMPILER_V_FOR_REF"
    /* COMPILER_V_FOR_REF */
    , context, prop.loc)) {
      properties.push(createObjectProperty(createSimpleExpression('refInFor', true), createSimpleExpression('true', false)));
    }
  }

  var propsExpression = undefined; // has v-bind="object" or v-on="object", wrap with mergeProps

  if (mergeArgs.length) {
    if (properties.length) {
      mergeArgs.push(createObjectExpression(dedupeProperties(properties), elementLoc));
    }

    if (mergeArgs.length > 1) {
      propsExpression = createCallExpression(context.helper(MERGE_PROPS), mergeArgs, elementLoc);
    } else {
      // single v-bind with nothing else - no need for a mergeProps call
      propsExpression = mergeArgs[0];
    }
  } else if (properties.length) {
    propsExpression = createObjectExpression(dedupeProperties(properties), elementLoc);
  } // patchFlag analysis


  if (hasDynamicKeys) {
    patchFlag |= 16
    /* FULL_PROPS */
    ;
  } else {
    if (hasClassBinding) {
      patchFlag |= 2
      /* CLASS */
      ;
    }

    if (hasStyleBinding) {
      patchFlag |= 4
      /* STYLE */
      ;
    }

    if (dynamicPropNames.length) {
      patchFlag |= 8
      /* PROPS */
      ;
    }

    if (hasHydrationEventBinding) {
      patchFlag |= 32
      /* HYDRATE_EVENTS */
      ;
    }
  }

  if ((patchFlag === 0 || patchFlag === 32
  /* HYDRATE_EVENTS */
  ) && (hasRef || hasVnodeHook || runtimeDirectives.length > 0)) {
    patchFlag |= 512
    /* NEED_PATCH */
    ;
  }

  return {
    props: propsExpression,
    directives: runtimeDirectives,
    patchFlag: patchFlag,
    dynamicPropNames: dynamicPropNames
  };
} // Dedupe props in an object literal.
// Literal duplicated attributes would have been warned during the parse phase,
// however, it's possible to encounter duplicated `onXXX` handlers with different
// modifiers. We also need to merge static and dynamic class / style attributes.
// - onXXX handlers / style: merge into array
// - class: merge into single expression with concatenation


function dedupeProperties(properties) {
  var knownProps = new Map();
  var deduped = [];

  for (var i = 0; i < properties.length; i++) {
    var prop = properties[i]; // dynamic keys are always allowed

    if (prop.key.type === 8
    /* COMPOUND_EXPRESSION */
    || !prop.key.isStatic) {
      deduped.push(prop);
      continue;
    }

    var name = prop.key.content;
    var existing = knownProps.get(name);

    if (existing) {
      if (name === 'style' || name === 'class' || name.startsWith('on')) {
        mergeAsArray(existing, prop);
      } // unexpected duplicate, should have emitted error during parse

    } else {
      knownProps.set(name, prop);
      deduped.push(prop);
    }
  }

  return deduped;
}

function mergeAsArray(existing, incoming) {
  if (existing.value.type === 17
  /* JS_ARRAY_EXPRESSION */
  ) {
      existing.value.elements.push(incoming.value);
    } else {
    existing.value = createArrayExpression([existing.value, incoming.value], existing.loc);
  }
}

function buildDirectiveArgs(dir, context) {
  var dirArgs = [];
  var runtime = directiveImportMap.get(dir);

  if (runtime) {
    // built-in directive with runtime
    dirArgs.push(context.helperString(runtime));
  } else {
    {
      // inject statement for resolving directive
      context.helper(RESOLVE_DIRECTIVE);
      context.directives.add(dir.name);
      dirArgs.push(toValidAssetId(dir.name, "directive"));
    }
  }

  var loc = dir.loc;
  if (dir.exp) dirArgs.push(dir.exp);

  if (dir.arg) {
    if (!dir.exp) {
      dirArgs.push("void 0");
    }

    dirArgs.push(dir.arg);
  }

  if (Object.keys(dir.modifiers).length) {
    if (!dir.arg) {
      if (!dir.exp) {
        dirArgs.push("void 0");
      }

      dirArgs.push("void 0");
    }

    var trueExpression = createSimpleExpression("true", false, loc);
    dirArgs.push(createObjectExpression(dir.modifiers.map(function (modifier) {
      return createObjectProperty(modifier, trueExpression);
    }), loc));
  }

  return createArrayExpression(dirArgs, dir.loc);
}

function stringifyDynamicPropNames(props) {
  var propsNamesString = "[";

  for (var i = 0, l = props.length; i < l; i++) {
    propsNamesString += JSON.stringify(props[i]);
    if (i < l - 1) propsNamesString += ', ';
  }

  return propsNamesString + "]";
}

function isComponentTag(tag) {
  return tag[0].toLowerCase() + tag.slice(1) === 'component';
}

 true ? Object.freeze({}) : 0;
 true ? Object.freeze([]) : 0;

var cacheStringFunction = function cacheStringFunction(fn) {
  var cache = Object.create(null);
  return function (str) {
    var hit = cache[str];
    return hit || (cache[str] = fn(str));
  };
};

var camelizeRE = /-(\w)/g;
/**
 * @private
 */

var camelize = cacheStringFunction(function (str) {
  return str.replace(camelizeRE, function (_, c) {
    return c ? c.toUpperCase() : '';
  });
});

var transformSlotOutlet = function transformSlotOutlet(node, context) {
  if (isSlotOutlet(node)) {
    var children = node.children,
        loc = node.loc;

    var _processSlotOutlet = processSlotOutlet(node, context),
        slotName = _processSlotOutlet.slotName,
        slotProps = _processSlotOutlet.slotProps;

    var slotArgs = [context.prefixIdentifiers ? "_ctx.$slots" : "$slots", slotName];

    if (slotProps) {
      slotArgs.push(slotProps);
    }

    if (children.length) {
      if (!slotProps) {
        slotArgs.push("{}");
      }

      slotArgs.push(createFunctionExpression([], children, false, false, loc));
    }

    if (context.scopeId && !context.slotted) {
      if (!slotProps) {
        slotArgs.push("{}");
      }

      if (!children.length) {
        slotArgs.push("undefined");
      }

      slotArgs.push("true");
    }

    node.codegenNode = createCallExpression(context.helper(RENDER_SLOT), slotArgs, loc);
  }
};

function processSlotOutlet(node, context) {
  var slotName = "\"default\"";
  var slotProps = undefined;
  var nonNameProps = [];

  for (var i = 0; i < node.props.length; i++) {
    var p = node.props[i];

    if (p.type === 6
    /* ATTRIBUTE */
    ) {
        if (p.value) {
          if (p.name === 'name') {
            slotName = JSON.stringify(p.value.content);
          } else {
            p.name = camelize(p.name);
            nonNameProps.push(p);
          }
        }
      } else {
      if (p.name === 'bind' && isBindKey(p.arg, 'name')) {
        if (p.exp) slotName = p.exp;
      } else {
        if (p.name === 'bind' && p.arg && isStaticExp(p.arg)) {
          p.arg.content = camelize(p.arg.content);
        }

        nonNameProps.push(p);
      }
    }
  }

  if (nonNameProps.length > 0) {
    var _buildProps = buildProps(node, context, nonNameProps),
        props = _buildProps.props,
        directives = _buildProps.directives;

    slotProps = props;

    if (directives.length) {
      context.onError(createCompilerError(35
      /* X_V_SLOT_UNEXPECTED_DIRECTIVE_ON_SLOT_OUTLET */
      , directives[0].loc));
    }
  }

  return {
    slotName: slotName,
    slotProps: slotProps
  };
}

var fnExpRE = /^\s*([\w$_]+|\([^)]*?\))\s*=>|^\s*function(?:\s+[\w$]+)?\s*\(/;

var transformOn = function transformOn(dir, node, context, augmentor) {
  var loc = dir.loc,
      modifiers = dir.modifiers,
      arg = dir.arg;

  if (!dir.exp && !modifiers.length) {
    context.onError(createCompilerError(34
    /* X_V_ON_NO_EXPRESSION */
    , loc));
  }

  var eventName;

  if (arg.type === 4
  /* SIMPLE_EXPRESSION */
  ) {
      if (arg.isStatic) {
        var rawName = arg.content; // for all event listeners, auto convert it to camelCase. See issue #2249

        eventName = createSimpleExpression((0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.toHandlerKey)((0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.camelize)(rawName)), true, arg.loc);
      } else {
        // #2388
        eventName = createCompoundExpression(["".concat(context.helperString(TO_HANDLER_KEY), "("), arg, ")"]);
      }
    } else {
    // already a compound expression.
    eventName = arg;
    eventName.children.unshift("".concat(context.helperString(TO_HANDLER_KEY), "("));
    eventName.children.push(")");
  } // handler processing


  var exp = dir.exp;

  if (exp && !exp.content.trim()) {
    exp = undefined;
  }

  var shouldCache = context.cacheHandlers && !exp;

  if (exp) {
    var isMemberExp = isMemberExpression(exp.content);
    var isInlineStatement = !(isMemberExp || fnExpRE.test(exp.content));
    var hasMultipleStatements = exp.content.includes(";");

    if (true) {
      validateBrowserExpression(exp, context, false, hasMultipleStatements);
    }

    if (isInlineStatement || shouldCache && isMemberExp) {
      // wrap inline statement in a function expression
      exp = createCompoundExpression(["".concat(isInlineStatement ? "$event" : "".concat("", "(...args)"), " => ").concat(hasMultipleStatements ? "{" : "("), exp, hasMultipleStatements ? "}" : ")"]);
    }
  }

  var ret = {
    props: [createObjectProperty(eventName, exp || createSimpleExpression("() => {}", false, loc))]
  }; // apply extended compiler augmentor

  if (augmentor) {
    ret = augmentor(ret);
  }

  if (shouldCache) {
    // cache handlers so that it's always the same handler being passed down.
    // this avoids unnecessary re-renders when users use inline handlers on
    // components.
    ret.props[0].value = context.cache(ret.props[0].value);
  }

  return ret;
}; // v-bind without arg is handled directly in ./transformElements.ts due to it affecting
// codegen for the entire props object. This transform here is only for v-bind
// *with* args.


var transformBind = function transformBind(dir, _node, context) {
  var exp = dir.exp,
      modifiers = dir.modifiers,
      loc = dir.loc;
  var arg = dir.arg;

  if (arg.type !== 4
  /* SIMPLE_EXPRESSION */
  ) {
      arg.children.unshift("(");
      arg.children.push(") || \"\"");
    } else if (!arg.isStatic) {
    arg.content = "".concat(arg.content, " || \"\"");
  } // .prop is no longer necessary due to new patch behavior
  // .sync is replaced by v-model:arg


  if (modifiers.includes('camel')) {
    if (arg.type === 4
    /* SIMPLE_EXPRESSION */
    ) {
        if (arg.isStatic) {
          arg.content = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.camelize)(arg.content);
        } else {
          arg.content = "".concat(context.helperString(CAMELIZE), "(").concat(arg.content, ")");
        }
      } else {
      arg.children.unshift("".concat(context.helperString(CAMELIZE), "("));
      arg.children.push(")");
    }
  }

  if (!exp || exp.type === 4
  /* SIMPLE_EXPRESSION */
  && !exp.content.trim()) {
    context.onError(createCompilerError(33
    /* X_V_BIND_NO_EXPRESSION */
    , loc));
    return {
      props: [createObjectProperty(arg, createSimpleExpression('', true, loc))]
    };
  }

  return {
    props: [createObjectProperty(arg, exp)]
  };
}; // Merge adjacent text nodes and expressions into a single expression
// e.g. <div>abc {{ d }} {{ e }}</div> should have a single expression node as child.


var transformText = function transformText(node, context) {
  if (node.type === 0
  /* ROOT */
  || node.type === 1
  /* ELEMENT */
  || node.type === 11
  /* FOR */
  || node.type === 10
  /* IF_BRANCH */
  ) {
      // perform the transform on node exit so that all expressions have already
      // been processed.
      return function () {
        var children = node.children;
        var currentContainer = undefined;
        var hasText = false;

        for (var i = 0; i < children.length; i++) {
          var child = children[i];

          if (isText(child)) {
            hasText = true;

            for (var j = i + 1; j < children.length; j++) {
              var next = children[j];

              if (isText(next)) {
                if (!currentContainer) {
                  currentContainer = children[i] = {
                    type: 8
                    /* COMPOUND_EXPRESSION */
                    ,
                    loc: child.loc,
                    children: [child]
                  };
                } // merge adjacent text node into current


                currentContainer.children.push(" + ", next);
                children.splice(j, 1);
                j--;
              } else {
                currentContainer = undefined;
                break;
              }
            }
          }
        }

        if (!hasText || // if this is a plain element with a single text child, leave it
        // as-is since the runtime has dedicated fast path for this by directly
        // setting textContent of the element.
        // for component root it's always normalized anyway.
        children.length === 1 && (node.type === 0
        /* ROOT */
        || node.type === 1
        /* ELEMENT */
        && node.tagType === 0
        /* ELEMENT */
        && // #3756
        // custom directives can potentially add DOM elements arbitrarily,
        // we need to avoid setting textContent of the element at runtime
        // to avoid accidentally overwriting the DOM elements added
        // by the user through custom directives.
        !node.props.find(function (p) {
          return p.type === 7
          /* DIRECTIVE */
          && !context.directiveTransforms[p.name];
        }) && // in compat mode, <template> tags with no special directives
        // will be rendered as a fragment so its children must be
        // converted into vnodes.
        !(node.tag === 'template'))) {
          return;
        } // pre-convert text nodes into createTextVNode(text) calls to avoid
        // runtime normalization.


        for (var _i7 = 0; _i7 < children.length; _i7++) {
          var _child = children[_i7];

          if (isText(_child) || _child.type === 8
          /* COMPOUND_EXPRESSION */
          ) {
              var callArgs = []; // createTextVNode defaults to single whitespace, so if it is a
              // single space the code could be an empty call to save bytes.

              if (_child.type !== 2
              /* TEXT */
              || _child.content !== ' ') {
                callArgs.push(_child);
              } // mark dynamic text with flag so it gets patched inside a block


              if (!context.ssr && getConstantType(_child, context) === 0
              /* NOT_CONSTANT */
              ) {
                  callArgs.push(1
                  /* TEXT */
                  + ( true ? " /* ".concat(_vue_shared__WEBPACK_IMPORTED_MODULE_0__.PatchFlagNames[1], " */") : 0));
                }

              children[_i7] = {
                type: 12
                /* TEXT_CALL */
                ,
                content: _child,
                loc: _child.loc,
                codegenNode: createCallExpression(context.helper(CREATE_TEXT), callArgs)
              };
            }
        }
      };
    }
};

var seen = new WeakSet();

var transformOnce = function transformOnce(node, context) {
  if (node.type === 1
  /* ELEMENT */
  && findDir(node, 'once', true)) {
    if (seen.has(node)) {
      return;
    }

    seen.add(node);
    context.helper(SET_BLOCK_TRACKING);
    return function () {
      var cur = context.currentNode;

      if (cur.codegenNode) {
        cur.codegenNode = context.cache(cur.codegenNode, true
        /* isVNode */
        );
      }
    };
  }
};

var transformModel = function transformModel(dir, node, context) {
  var exp = dir.exp,
      arg = dir.arg;

  if (!exp) {
    context.onError(createCompilerError(40
    /* X_V_MODEL_NO_EXPRESSION */
    , dir.loc));
    return createTransformProps();
  }

  var rawExp = exp.loc.source;
  var expString = exp.type === 4
  /* SIMPLE_EXPRESSION */
  ? exp.content : rawExp; // im SFC <script setup> inline mode, the exp may have been transformed into
  // _unref(exp)

  context.bindingMetadata[rawExp];
  var maybeRef = !true
  /* SETUP_CONST */
  ;

  if (!expString.trim() || !isMemberExpression(expString) && !maybeRef) {
    context.onError(createCompilerError(41
    /* X_V_MODEL_MALFORMED_EXPRESSION */
    , exp.loc));
    return createTransformProps();
  }

  var propName = arg ? arg : createSimpleExpression('modelValue', true);
  var eventName = arg ? isStaticExp(arg) ? "onUpdate:".concat(arg.content) : createCompoundExpression(['"onUpdate:" + ', arg]) : "onUpdate:modelValue";
  var assignmentExp;
  var eventArg = context.isTS ? "($event: any)" : "$event";
  {
    assignmentExp = createCompoundExpression(["".concat(eventArg, " => ("), exp, " = $event)"]);
  }
  var props = [// modelValue: foo
  createObjectProperty(propName, dir.exp), // "onUpdate:modelValue": $event => (foo = $event)
  createObjectProperty(eventName, assignmentExp)]; // modelModifiers: { foo: true, "bar-baz": true }

  if (dir.modifiers.length && node.tagType === 1
  /* COMPONENT */
  ) {
      var modifiers = dir.modifiers.map(function (m) {
        return (isSimpleIdentifier(m) ? m : JSON.stringify(m)) + ": true";
      }).join(", ");
      var modifiersKey = arg ? isStaticExp(arg) ? "".concat(arg.content, "Modifiers") : createCompoundExpression([arg, ' + "Modifiers"']) : "modelModifiers";
      props.push(createObjectProperty(modifiersKey, createSimpleExpression("{ ".concat(modifiers, " }"), false, dir.loc, 2
      /* CAN_HOIST */
      )));
    }

  return createTransformProps(props);
};

function createTransformProps() {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  return {
    props: props
  };
}

var validDivisionCharRE = /[\w).+\-_$\]]/;

var transformFilter = function transformFilter(node, context) {
  if (!isCompatEnabled("COMPILER_FILTER"
  /* COMPILER_FILTERS */
  , context)) {
    return;
  }

  if (node.type === 5
  /* INTERPOLATION */
  ) {
      // filter rewrite is applied before expression transform so only
      // simple expressions are possible at this stage
      rewriteFilter(node.content, context);
    }

  if (node.type === 1
  /* ELEMENT */
  ) {
      node.props.forEach(function (prop) {
        if (prop.type === 7
        /* DIRECTIVE */
        && prop.name !== 'for' && prop.exp) {
          rewriteFilter(prop.exp, context);
        }
      });
    }
};

function rewriteFilter(node, context) {
  if (node.type === 4
  /* SIMPLE_EXPRESSION */
  ) {
      parseFilter(node, context);
    } else {
    for (var i = 0; i < node.children.length; i++) {
      var child = node.children[i];
      if (_typeof(child) !== 'object') continue;

      if (child.type === 4
      /* SIMPLE_EXPRESSION */
      ) {
          parseFilter(child, context);
        } else if (child.type === 8
      /* COMPOUND_EXPRESSION */
      ) {
          rewriteFilter(node, context);
        } else if (child.type === 5
      /* INTERPOLATION */
      ) {
          rewriteFilter(child.content, context);
        }
    }
  }
}

function parseFilter(node, context) {
  var exp = node.content;
  var inSingle = false;
  var inDouble = false;
  var inTemplateString = false;
  var inRegex = false;
  var curly = 0;
  var square = 0;
  var paren = 0;
  var lastFilterIndex = 0;
  var c,
      prev,
      i,
      expression,
      filters = [];

  for (i = 0; i < exp.length; i++) {
    prev = c;
    c = exp.charCodeAt(i);

    if (inSingle) {
      if (c === 0x27 && prev !== 0x5c) inSingle = false;
    } else if (inDouble) {
      if (c === 0x22 && prev !== 0x5c) inDouble = false;
    } else if (inTemplateString) {
      if (c === 0x60 && prev !== 0x5c) inTemplateString = false;
    } else if (inRegex) {
      if (c === 0x2f && prev !== 0x5c) inRegex = false;
    } else if (c === 0x7c && // pipe
    exp.charCodeAt(i + 1) !== 0x7c && exp.charCodeAt(i - 1) !== 0x7c && !curly && !square && !paren) {
      if (expression === undefined) {
        // first filter, end of expression
        lastFilterIndex = i + 1;
        expression = exp.slice(0, i).trim();
      } else {
        pushFilter();
      }
    } else {
      switch (c) {
        case 0x22:
          inDouble = true;
          break;
        // "

        case 0x27:
          inSingle = true;
          break;
        // '

        case 0x60:
          inTemplateString = true;
          break;
        // `

        case 0x28:
          paren++;
          break;
        // (

        case 0x29:
          paren--;
          break;
        // )

        case 0x5b:
          square++;
          break;
        // [

        case 0x5d:
          square--;
          break;
        // ]

        case 0x7b:
          curly++;
          break;
        // {

        case 0x7d:
          curly--;
          break;
        // }
      }

      if (c === 0x2f) {
        // /
        var j = i - 1;
        var p = void 0; // find first non-whitespace prev char

        for (; j >= 0; j--) {
          p = exp.charAt(j);
          if (p !== ' ') break;
        }

        if (!p || !validDivisionCharRE.test(p)) {
          inRegex = true;
        }
      }
    }
  }

  if (expression === undefined) {
    expression = exp.slice(0, i).trim();
  } else if (lastFilterIndex !== 0) {
    pushFilter();
  }

  function pushFilter() {
    filters.push(exp.slice(lastFilterIndex, i).trim());
    lastFilterIndex = i + 1;
  }

  if (filters.length) {
     true && warnDeprecation("COMPILER_FILTER"
    /* COMPILER_FILTERS */
    , context, node.loc);

    for (i = 0; i < filters.length; i++) {
      expression = wrapFilter(expression, filters[i], context);
    }

    node.content = expression;
  }
}

function wrapFilter(exp, filter, context) {
  context.helper(RESOLVE_FILTER);
  var i = filter.indexOf('(');

  if (i < 0) {
    context.filters.add(filter);
    return "".concat(toValidAssetId(filter, 'filter'), "(").concat(exp, ")");
  } else {
    var name = filter.slice(0, i);
    var args = filter.slice(i + 1);
    context.filters.add(name);
    return "".concat(toValidAssetId(name, 'filter'), "(").concat(exp).concat(args !== ')' ? ',' + args : args);
  }
}

function getBaseTransformPreset(prefixIdentifiers) {
  return [[transformOnce, transformIf, transformFor].concat([transformFilter], _toConsumableArray( true ? [transformExpression] : 0), [transformSlotOutlet, transformElement, trackSlotScopes, transformText]), {
    on: transformOn,
    bind: transformBind,
    model: transformModel
  }];
} // we name it `baseCompile` so that higher order compilers like
// @vue/compiler-dom can export `compile` while re-exporting everything else.


function baseCompile(template) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var onError = options.onError || defaultOnError;
  var isModuleMode = options.mode === 'module';
  /* istanbul ignore if */

  {
    if (options.prefixIdentifiers === true) {
      onError(createCompilerError(45
      /* X_PREFIX_ID_NOT_SUPPORTED */
      ));
    } else if (isModuleMode) {
      onError(createCompilerError(46
      /* X_MODULE_MODE_NOT_SUPPORTED */
      ));
    }
  }
  var prefixIdentifiers = !true;

  if (options.cacheHandlers) {
    onError(createCompilerError(47
    /* X_CACHE_HANDLER_NOT_SUPPORTED */
    ));
  }

  if (options.scopeId && !isModuleMode) {
    onError(createCompilerError(48
    /* X_SCOPE_ID_NOT_SUPPORTED */
    ));
  }

  var ast = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.isString)(template) ? baseParse(template, options) : template;

  var _getBaseTransformPres = getBaseTransformPreset(),
      _getBaseTransformPres2 = _slicedToArray(_getBaseTransformPres, 2),
      nodeTransforms = _getBaseTransformPres2[0],
      directiveTransforms = _getBaseTransformPres2[1];

  transform(ast, (0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.extend)({}, options, {
    prefixIdentifiers: prefixIdentifiers,
    nodeTransforms: [].concat(_toConsumableArray(nodeTransforms), _toConsumableArray(options.nodeTransforms || [])),
    directiveTransforms: (0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.extend)({}, directiveTransforms, options.directiveTransforms || {} // user transforms
    )
  }));
  return generate(ast, (0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.extend)({}, options, {
    prefixIdentifiers: prefixIdentifiers
  }));
}

var noopDirectiveTransform = function noopDirectiveTransform() {
  return {
    props: []
  };
};



/***/ }),

/***/ "./node_modules/@vue/compiler-dom/dist/compiler-dom.esm-bundler.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@vue/compiler-dom/dist/compiler-dom.esm-bundler.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BASE_TRANSITION": () => (/* reexport safe */ _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.BASE_TRANSITION),
/* harmony export */   "CAMELIZE": () => (/* reexport safe */ _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.CAMELIZE),
/* harmony export */   "CAPITALIZE": () => (/* reexport safe */ _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.CAPITALIZE),
/* harmony export */   "CREATE_BLOCK": () => (/* reexport safe */ _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.CREATE_BLOCK),
/* harmony export */   "CREATE_COMMENT": () => (/* reexport safe */ _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.CREATE_COMMENT),
/* harmony export */   "CREATE_SLOTS": () => (/* reexport safe */ _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.CREATE_SLOTS),
/* harmony export */   "CREATE_STATIC": () => (/* reexport safe */ _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.CREATE_STATIC),
/* harmony export */   "CREATE_TEXT": () => (/* reexport safe */ _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.CREATE_TEXT),
/* harmony export */   "CREATE_VNODE": () => (/* reexport safe */ _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.CREATE_VNODE),
/* harmony export */   "FRAGMENT": () => (/* reexport safe */ _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.FRAGMENT),
/* harmony export */   "IS_REF": () => (/* reexport safe */ _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.IS_REF),
/* harmony export */   "KEEP_ALIVE": () => (/* reexport safe */ _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.KEEP_ALIVE),
/* harmony export */   "MERGE_PROPS": () => (/* reexport safe */ _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.MERGE_PROPS),
/* harmony export */   "OPEN_BLOCK": () => (/* reexport safe */ _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.OPEN_BLOCK),
/* harmony export */   "POP_SCOPE_ID": () => (/* reexport safe */ _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.POP_SCOPE_ID),
/* harmony export */   "PUSH_SCOPE_ID": () => (/* reexport safe */ _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.PUSH_SCOPE_ID),
/* harmony export */   "RENDER_LIST": () => (/* reexport safe */ _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.RENDER_LIST),
/* harmony export */   "RENDER_SLOT": () => (/* reexport safe */ _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.RENDER_SLOT),
/* harmony export */   "RESOLVE_COMPONENT": () => (/* reexport safe */ _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.RESOLVE_COMPONENT),
/* harmony export */   "RESOLVE_DIRECTIVE": () => (/* reexport safe */ _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.RESOLVE_DIRECTIVE),
/* harmony export */   "RESOLVE_DYNAMIC_COMPONENT": () => (/* reexport safe */ _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.RESOLVE_DYNAMIC_COMPONENT),
/* harmony export */   "RESOLVE_FILTER": () => (/* reexport safe */ _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.RESOLVE_FILTER),
/* harmony export */   "SET_BLOCK_TRACKING": () => (/* reexport safe */ _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.SET_BLOCK_TRACKING),
/* harmony export */   "SUSPENSE": () => (/* reexport safe */ _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.SUSPENSE),
/* harmony export */   "TELEPORT": () => (/* reexport safe */ _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.TELEPORT),
/* harmony export */   "TO_DISPLAY_STRING": () => (/* reexport safe */ _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.TO_DISPLAY_STRING),
/* harmony export */   "TO_HANDLERS": () => (/* reexport safe */ _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.TO_HANDLERS),
/* harmony export */   "TO_HANDLER_KEY": () => (/* reexport safe */ _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.TO_HANDLER_KEY),
/* harmony export */   "UNREF": () => (/* reexport safe */ _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.UNREF),
/* harmony export */   "WITH_CTX": () => (/* reexport safe */ _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.WITH_CTX),
/* harmony export */   "WITH_DIRECTIVES": () => (/* reexport safe */ _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.WITH_DIRECTIVES),
/* harmony export */   "WITH_SCOPE_ID": () => (/* reexport safe */ _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.WITH_SCOPE_ID),
/* harmony export */   "advancePositionWithClone": () => (/* reexport safe */ _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.advancePositionWithClone),
/* harmony export */   "advancePositionWithMutation": () => (/* reexport safe */ _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.advancePositionWithMutation),
/* harmony export */   "assert": () => (/* reexport safe */ _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.assert),
/* harmony export */   "baseCompile": () => (/* reexport safe */ _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.baseCompile),
/* harmony export */   "baseParse": () => (/* reexport safe */ _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.baseParse),
/* harmony export */   "buildProps": () => (/* reexport safe */ _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.buildProps),
/* harmony export */   "buildSlots": () => (/* reexport safe */ _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.buildSlots),
/* harmony export */   "checkCompatEnabled": () => (/* reexport safe */ _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.checkCompatEnabled),
/* harmony export */   "createArrayExpression": () => (/* reexport safe */ _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.createArrayExpression),
/* harmony export */   "createAssignmentExpression": () => (/* reexport safe */ _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.createAssignmentExpression),
/* harmony export */   "createBlockStatement": () => (/* reexport safe */ _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.createBlockStatement),
/* harmony export */   "createCacheExpression": () => (/* reexport safe */ _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.createCacheExpression),
/* harmony export */   "createCallExpression": () => (/* reexport safe */ _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.createCallExpression),
/* harmony export */   "createCompilerError": () => (/* reexport safe */ _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.createCompilerError),
/* harmony export */   "createCompoundExpression": () => (/* reexport safe */ _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.createCompoundExpression),
/* harmony export */   "createConditionalExpression": () => (/* reexport safe */ _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.createConditionalExpression),
/* harmony export */   "createForLoopParams": () => (/* reexport safe */ _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.createForLoopParams),
/* harmony export */   "createFunctionExpression": () => (/* reexport safe */ _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.createFunctionExpression),
/* harmony export */   "createIfStatement": () => (/* reexport safe */ _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.createIfStatement),
/* harmony export */   "createInterpolation": () => (/* reexport safe */ _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.createInterpolation),
/* harmony export */   "createObjectExpression": () => (/* reexport safe */ _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.createObjectExpression),
/* harmony export */   "createObjectProperty": () => (/* reexport safe */ _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.createObjectProperty),
/* harmony export */   "createReturnStatement": () => (/* reexport safe */ _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.createReturnStatement),
/* harmony export */   "createRoot": () => (/* reexport safe */ _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.createRoot),
/* harmony export */   "createSequenceExpression": () => (/* reexport safe */ _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.createSequenceExpression),
/* harmony export */   "createSimpleExpression": () => (/* reexport safe */ _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.createSimpleExpression),
/* harmony export */   "createStructuralDirectiveTransform": () => (/* reexport safe */ _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.createStructuralDirectiveTransform),
/* harmony export */   "createTemplateLiteral": () => (/* reexport safe */ _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.createTemplateLiteral),
/* harmony export */   "createTransformContext": () => (/* reexport safe */ _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.createTransformContext),
/* harmony export */   "createVNodeCall": () => (/* reexport safe */ _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.createVNodeCall),
/* harmony export */   "findDir": () => (/* reexport safe */ _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.findDir),
/* harmony export */   "findProp": () => (/* reexport safe */ _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.findProp),
/* harmony export */   "generate": () => (/* reexport safe */ _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.generate),
/* harmony export */   "generateCodeFrame": () => (/* reexport safe */ _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.generateCodeFrame),
/* harmony export */   "getBaseTransformPreset": () => (/* reexport safe */ _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.getBaseTransformPreset),
/* harmony export */   "getInnerRange": () => (/* reexport safe */ _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.getInnerRange),
/* harmony export */   "hasDynamicKeyVBind": () => (/* reexport safe */ _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.hasDynamicKeyVBind),
/* harmony export */   "hasScopeRef": () => (/* reexport safe */ _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.hasScopeRef),
/* harmony export */   "helperNameMap": () => (/* reexport safe */ _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.helperNameMap),
/* harmony export */   "injectProp": () => (/* reexport safe */ _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.injectProp),
/* harmony export */   "isBindKey": () => (/* reexport safe */ _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.isBindKey),
/* harmony export */   "isBuiltInType": () => (/* reexport safe */ _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.isBuiltInType),
/* harmony export */   "isCoreComponent": () => (/* reexport safe */ _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.isCoreComponent),
/* harmony export */   "isMemberExpression": () => (/* reexport safe */ _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.isMemberExpression),
/* harmony export */   "isSimpleIdentifier": () => (/* reexport safe */ _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.isSimpleIdentifier),
/* harmony export */   "isSlotOutlet": () => (/* reexport safe */ _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.isSlotOutlet),
/* harmony export */   "isStaticExp": () => (/* reexport safe */ _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.isStaticExp),
/* harmony export */   "isTemplateNode": () => (/* reexport safe */ _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.isTemplateNode),
/* harmony export */   "isText": () => (/* reexport safe */ _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.isText),
/* harmony export */   "isVSlot": () => (/* reexport safe */ _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.isVSlot),
/* harmony export */   "locStub": () => (/* reexport safe */ _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.locStub),
/* harmony export */   "noopDirectiveTransform": () => (/* reexport safe */ _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.noopDirectiveTransform),
/* harmony export */   "processExpression": () => (/* reexport safe */ _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.processExpression),
/* harmony export */   "processFor": () => (/* reexport safe */ _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.processFor),
/* harmony export */   "processIf": () => (/* reexport safe */ _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.processIf),
/* harmony export */   "processSlotOutlet": () => (/* reexport safe */ _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.processSlotOutlet),
/* harmony export */   "registerRuntimeHelpers": () => (/* reexport safe */ _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.registerRuntimeHelpers),
/* harmony export */   "resolveComponentType": () => (/* reexport safe */ _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.resolveComponentType),
/* harmony export */   "toValidAssetId": () => (/* reexport safe */ _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.toValidAssetId),
/* harmony export */   "trackSlotScopes": () => (/* reexport safe */ _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.trackSlotScopes),
/* harmony export */   "trackVForSlotScopes": () => (/* reexport safe */ _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.trackVForSlotScopes),
/* harmony export */   "transform": () => (/* reexport safe */ _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.transform),
/* harmony export */   "transformBind": () => (/* reexport safe */ _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.transformBind),
/* harmony export */   "transformElement": () => (/* reexport safe */ _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.transformElement),
/* harmony export */   "transformExpression": () => (/* reexport safe */ _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.transformExpression),
/* harmony export */   "transformModel": () => (/* reexport safe */ _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.transformModel),
/* harmony export */   "transformOn": () => (/* reexport safe */ _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.transformOn),
/* harmony export */   "traverseNode": () => (/* reexport safe */ _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.traverseNode),
/* harmony export */   "warnDeprecation": () => (/* reexport safe */ _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.warnDeprecation),
/* harmony export */   "DOMDirectiveTransforms": () => (/* binding */ DOMDirectiveTransforms),
/* harmony export */   "DOMNodeTransforms": () => (/* binding */ DOMNodeTransforms),
/* harmony export */   "TRANSITION": () => (/* binding */ TRANSITION),
/* harmony export */   "TRANSITION_GROUP": () => (/* binding */ TRANSITION_GROUP),
/* harmony export */   "V_MODEL_CHECKBOX": () => (/* binding */ V_MODEL_CHECKBOX),
/* harmony export */   "V_MODEL_DYNAMIC": () => (/* binding */ V_MODEL_DYNAMIC),
/* harmony export */   "V_MODEL_RADIO": () => (/* binding */ V_MODEL_RADIO),
/* harmony export */   "V_MODEL_SELECT": () => (/* binding */ V_MODEL_SELECT),
/* harmony export */   "V_MODEL_TEXT": () => (/* binding */ V_MODEL_TEXT),
/* harmony export */   "V_ON_WITH_KEYS": () => (/* binding */ V_ON_WITH_KEYS),
/* harmony export */   "V_ON_WITH_MODIFIERS": () => (/* binding */ V_ON_WITH_MODIFIERS),
/* harmony export */   "V_SHOW": () => (/* binding */ V_SHOW),
/* harmony export */   "compile": () => (/* binding */ compile),
/* harmony export */   "createDOMCompilerError": () => (/* binding */ createDOMCompilerError),
/* harmony export */   "parse": () => (/* binding */ parse),
/* harmony export */   "parserOptions": () => (/* binding */ parserOptions),
/* harmony export */   "transformStyle": () => (/* binding */ transformStyle)
/* harmony export */ });
/* harmony import */ var _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @vue/compiler-core */ "./node_modules/@vue/compiler-core/dist/compiler-core.esm-bundler.js");
/* harmony import */ var _vue_shared__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @vue/shared */ "./node_modules/@vue/shared/dist/shared.esm-bundler.js");
var _registerRuntimeHelpe, _DOMErrorMessages;

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




var V_MODEL_RADIO = Symbol( true ? "vModelRadio" : 0);
var V_MODEL_CHECKBOX = Symbol( true ? "vModelCheckbox" : 0);
var V_MODEL_TEXT = Symbol( true ? "vModelText" : 0);
var V_MODEL_SELECT = Symbol( true ? "vModelSelect" : 0);
var V_MODEL_DYNAMIC = Symbol( true ? "vModelDynamic" : 0);
var V_ON_WITH_MODIFIERS = Symbol( true ? "vOnModifiersGuard" : 0);
var V_ON_WITH_KEYS = Symbol( true ? "vOnKeysGuard" : 0);
var V_SHOW = Symbol( true ? "vShow" : 0);
var TRANSITION = Symbol( true ? "Transition" : 0);
var TRANSITION_GROUP = Symbol( true ? "TransitionGroup" : 0);
(0,_vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.registerRuntimeHelpers)((_registerRuntimeHelpe = {}, _defineProperty(_registerRuntimeHelpe, V_MODEL_RADIO, "vModelRadio"), _defineProperty(_registerRuntimeHelpe, V_MODEL_CHECKBOX, "vModelCheckbox"), _defineProperty(_registerRuntimeHelpe, V_MODEL_TEXT, "vModelText"), _defineProperty(_registerRuntimeHelpe, V_MODEL_SELECT, "vModelSelect"), _defineProperty(_registerRuntimeHelpe, V_MODEL_DYNAMIC, "vModelDynamic"), _defineProperty(_registerRuntimeHelpe, V_ON_WITH_MODIFIERS, "withModifiers"), _defineProperty(_registerRuntimeHelpe, V_ON_WITH_KEYS, "withKeys"), _defineProperty(_registerRuntimeHelpe, V_SHOW, "vShow"), _defineProperty(_registerRuntimeHelpe, TRANSITION, "Transition"), _defineProperty(_registerRuntimeHelpe, TRANSITION_GROUP, "TransitionGroup"), _registerRuntimeHelpe));
/* eslint-disable no-restricted-globals */

var decoder;

function decodeHtmlBrowser(raw) {
  var asAttr = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

  if (!decoder) {
    decoder = document.createElement('div');
  }

  if (asAttr) {
    decoder.innerHTML = "<div foo=\"".concat(raw.replace(/"/g, '&quot;'), "\">");
    return decoder.children[0].getAttribute('foo');
  } else {
    decoder.innerHTML = raw;
    return decoder.textContent;
  }
}

var isRawTextContainer = /*#__PURE__*/(0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.makeMap)('style,iframe,script,noscript', true);
var parserOptions = {
  isVoidTag: _vue_shared__WEBPACK_IMPORTED_MODULE_1__.isVoidTag,
  isNativeTag: function isNativeTag(tag) {
    return (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isHTMLTag)(tag) || (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isSVGTag)(tag);
  },
  isPreTag: function isPreTag(tag) {
    return tag === 'pre';
  },
  decodeEntities: decodeHtmlBrowser,
  isBuiltInComponent: function isBuiltInComponent(tag) {
    if ((0,_vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.isBuiltInType)(tag, "Transition")) {
      return TRANSITION;
    } else if ((0,_vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.isBuiltInType)(tag, "TransitionGroup")) {
      return TRANSITION_GROUP;
    }
  },
  // https://html.spec.whatwg.org/multipage/parsing.html#tree-construction-dispatcher
  getNamespace: function getNamespace(tag, parent) {
    var ns = parent ? parent.ns : 0
    /* HTML */
    ;

    if (parent && ns === 2
    /* MATH_ML */
    ) {
        if (parent.tag === 'annotation-xml') {
          if (tag === 'svg') {
            return 1
            /* SVG */
            ;
          }

          if (parent.props.some(function (a) {
            return a.type === 6
            /* ATTRIBUTE */
            && a.name === 'encoding' && a.value != null && (a.value.content === 'text/html' || a.value.content === 'application/xhtml+xml');
          })) {
            ns = 0
            /* HTML */
            ;
          }
        } else if (/^m(?:[ions]|text)$/.test(parent.tag) && tag !== 'mglyph' && tag !== 'malignmark') {
          ns = 0
          /* HTML */
          ;
        }
      } else if (parent && ns === 1
    /* SVG */
    ) {
        if (parent.tag === 'foreignObject' || parent.tag === 'desc' || parent.tag === 'title') {
          ns = 0
          /* HTML */
          ;
        }
      }

    if (ns === 0
    /* HTML */
    ) {
        if (tag === 'svg') {
          return 1
          /* SVG */
          ;
        }

        if (tag === 'math') {
          return 2
          /* MATH_ML */
          ;
        }
      }

    return ns;
  },
  // https://html.spec.whatwg.org/multipage/parsing.html#parsing-html-fragments
  getTextMode: function getTextMode(_ref) {
    var tag = _ref.tag,
        ns = _ref.ns;

    if (ns === 0
    /* HTML */
    ) {
        if (tag === 'textarea' || tag === 'title') {
          return 1
          /* RCDATA */
          ;
        }

        if (isRawTextContainer(tag)) {
          return 2
          /* RAWTEXT */
          ;
        }
      }

    return 0
    /* DATA */
    ;
  }
}; // Parse inline CSS strings for static style attributes into an object.
// This is a NodeTransform since it works on the static `style` attribute and
// converts it into a dynamic equivalent:
// style="color: red" -> :style='{ "color": "red" }'
// It is then processed by `transformElement` and included in the generated
// props.

var transformStyle = function transformStyle(node) {
  if (node.type === 1
  /* ELEMENT */
  ) {
      node.props.forEach(function (p, i) {
        if (p.type === 6
        /* ATTRIBUTE */
        && p.name === 'style' && p.value) {
          // replace p with an expression node
          node.props[i] = {
            type: 7
            /* DIRECTIVE */
            ,
            name: "bind",
            arg: (0,_vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.createSimpleExpression)("style", true, p.loc),
            exp: parseInlineCSS(p.value.content, p.loc),
            modifiers: [],
            loc: p.loc
          };
        }
      });
    }
};

var parseInlineCSS = function parseInlineCSS(cssText, loc) {
  var normalized = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.parseStringStyle)(cssText);
  return (0,_vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.createSimpleExpression)(JSON.stringify(normalized), false, loc, 3
  /* CAN_STRINGIFY */
  );
};

function createDOMCompilerError(code, loc) {
  return (0,_vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.createCompilerError)(code, loc,  true ? DOMErrorMessages : 0);
}

var DOMErrorMessages = (_DOMErrorMessages = {}, _defineProperty(_DOMErrorMessages, 49
/* X_V_HTML_NO_EXPRESSION */
, "v-html is missing expression."), _defineProperty(_DOMErrorMessages, 50
/* X_V_HTML_WITH_CHILDREN */
, "v-html will override element children."), _defineProperty(_DOMErrorMessages, 51
/* X_V_TEXT_NO_EXPRESSION */
, "v-text is missing expression."), _defineProperty(_DOMErrorMessages, 52
/* X_V_TEXT_WITH_CHILDREN */
, "v-text will override element children."), _defineProperty(_DOMErrorMessages, 53
/* X_V_MODEL_ON_INVALID_ELEMENT */
, "v-model can only be used on <input>, <textarea> and <select> elements."), _defineProperty(_DOMErrorMessages, 54
/* X_V_MODEL_ARG_ON_ELEMENT */
, "v-model argument is not supported on plain elements."), _defineProperty(_DOMErrorMessages, 55
/* X_V_MODEL_ON_FILE_INPUT_ELEMENT */
, "v-model cannot be used on file inputs since they are read-only. Use a v-on:change listener instead."), _defineProperty(_DOMErrorMessages, 56
/* X_V_MODEL_UNNECESSARY_VALUE */
, "Unnecessary value binding used alongside v-model. It will interfere with v-model's behavior."), _defineProperty(_DOMErrorMessages, 57
/* X_V_SHOW_NO_EXPRESSION */
, "v-show is missing expression."), _defineProperty(_DOMErrorMessages, 58
/* X_TRANSITION_INVALID_CHILDREN */
, "<Transition> expects exactly one child element or component."), _defineProperty(_DOMErrorMessages, 59
/* X_IGNORED_SIDE_EFFECT_TAG */
, "Tags with side effect (<script> and <style>) are ignored in client component templates."), _DOMErrorMessages);

var transformVHtml = function transformVHtml(dir, node, context) {
  var exp = dir.exp,
      loc = dir.loc;

  if (!exp) {
    context.onError(createDOMCompilerError(49
    /* X_V_HTML_NO_EXPRESSION */
    , loc));
  }

  if (node.children.length) {
    context.onError(createDOMCompilerError(50
    /* X_V_HTML_WITH_CHILDREN */
    , loc));
    node.children.length = 0;
  }

  return {
    props: [(0,_vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.createObjectProperty)((0,_vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.createSimpleExpression)("innerHTML", true, loc), exp || (0,_vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.createSimpleExpression)('', true))]
  };
};

var transformVText = function transformVText(dir, node, context) {
  var exp = dir.exp,
      loc = dir.loc;

  if (!exp) {
    context.onError(createDOMCompilerError(51
    /* X_V_TEXT_NO_EXPRESSION */
    , loc));
  }

  if (node.children.length) {
    context.onError(createDOMCompilerError(52
    /* X_V_TEXT_WITH_CHILDREN */
    , loc));
    node.children.length = 0;
  }

  return {
    props: [(0,_vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.createObjectProperty)((0,_vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.createSimpleExpression)("textContent", true), exp ? (0,_vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.createCallExpression)(context.helperString(_vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.TO_DISPLAY_STRING), [exp], loc) : (0,_vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.createSimpleExpression)('', true))]
  };
};

var transformModel = function transformModel(dir, node, context) {
  var baseResult = (0,_vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.transformModel)(dir, node, context); // base transform has errors OR component v-model (only need props)

  if (!baseResult.props.length || node.tagType === 1
  /* COMPONENT */
  ) {
      return baseResult;
    }

  if (dir.arg) {
    context.onError(createDOMCompilerError(54
    /* X_V_MODEL_ARG_ON_ELEMENT */
    , dir.arg.loc));
  }

  function checkDuplicatedValue() {
    var value = (0,_vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.findProp)(node, 'value');

    if (value) {
      context.onError(createDOMCompilerError(56
      /* X_V_MODEL_UNNECESSARY_VALUE */
      , value.loc));
    }
  }

  var tag = node.tag;
  var isCustomElement = context.isCustomElement(tag);

  if (tag === 'input' || tag === 'textarea' || tag === 'select' || isCustomElement) {
    var directiveToUse = V_MODEL_TEXT;
    var isInvalidType = false;

    if (tag === 'input' || isCustomElement) {
      var type = (0,_vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.findProp)(node, "type");

      if (type) {
        if (type.type === 7
        /* DIRECTIVE */
        ) {
            // :type="foo"
            directiveToUse = V_MODEL_DYNAMIC;
          } else if (type.value) {
          switch (type.value.content) {
            case 'radio':
              directiveToUse = V_MODEL_RADIO;
              break;

            case 'checkbox':
              directiveToUse = V_MODEL_CHECKBOX;
              break;

            case 'file':
              isInvalidType = true;
              context.onError(createDOMCompilerError(55
              /* X_V_MODEL_ON_FILE_INPUT_ELEMENT */
              , dir.loc));
              break;

            default:
              // text type
               true && checkDuplicatedValue();
              break;
          }
        }
      } else if ((0,_vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.hasDynamicKeyVBind)(node)) {
        // element has bindings with dynamic keys, which can possibly contain
        // "type".
        directiveToUse = V_MODEL_DYNAMIC;
      } else {
        // text type
         true && checkDuplicatedValue();
      }
    } else if (tag === 'select') {
      directiveToUse = V_MODEL_SELECT;
    } else {
      // textarea
       true && checkDuplicatedValue();
    } // inject runtime directive
    // by returning the helper symbol via needRuntime
    // the import will replaced a resolveDirective call.


    if (!isInvalidType) {
      baseResult.needRuntime = context.helper(directiveToUse);
    }
  } else {
    context.onError(createDOMCompilerError(53
    /* X_V_MODEL_ON_INVALID_ELEMENT */
    , dir.loc));
  } // native vmodel doesn't need the `modelValue` props since they are also
  // passed to the runtime as `binding.value`. removing it reduces code size.


  baseResult.props = baseResult.props.filter(function (p) {
    return !(p.key.type === 4
    /* SIMPLE_EXPRESSION */
    && p.key.content === 'modelValue');
  });
  return baseResult;
};

var isEventOptionModifier = /*#__PURE__*/(0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.makeMap)("passive,once,capture");
var isNonKeyModifier = /*#__PURE__*/(0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.makeMap)( // event propagation management
"stop,prevent,self," + // system modifiers + exact
"ctrl,shift,alt,meta,exact," + // mouse
"middle"); // left & right could be mouse or key modifiers based on event type

var maybeKeyModifier = /*#__PURE__*/(0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.makeMap)('left,right');
var isKeyboardEvent = /*#__PURE__*/(0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.makeMap)("onkeyup,onkeydown,onkeypress", true);

var resolveModifiers = function resolveModifiers(key, modifiers, context, loc) {
  var keyModifiers = [];
  var nonKeyModifiers = [];
  var eventOptionModifiers = [];

  for (var i = 0; i < modifiers.length; i++) {
    var modifier = modifiers[i];

    if (modifier === 'native' && (0,_vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.checkCompatEnabled)("COMPILER_V_ON_NATIVE"
    /* COMPILER_V_ON_NATIVE */
    , context, loc)) {
      eventOptionModifiers.push(modifier);
    } else if (isEventOptionModifier(modifier)) {
      // eventOptionModifiers: modifiers for addEventListener() options,
      // e.g. .passive & .capture
      eventOptionModifiers.push(modifier);
    } else {
      // runtimeModifiers: modifiers that needs runtime guards
      if (maybeKeyModifier(modifier)) {
        if ((0,_vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.isStaticExp)(key)) {
          if (isKeyboardEvent(key.content)) {
            keyModifiers.push(modifier);
          } else {
            nonKeyModifiers.push(modifier);
          }
        } else {
          keyModifiers.push(modifier);
          nonKeyModifiers.push(modifier);
        }
      } else {
        if (isNonKeyModifier(modifier)) {
          nonKeyModifiers.push(modifier);
        } else {
          keyModifiers.push(modifier);
        }
      }
    }
  }

  return {
    keyModifiers: keyModifiers,
    nonKeyModifiers: nonKeyModifiers,
    eventOptionModifiers: eventOptionModifiers
  };
};

var transformClick = function transformClick(key, event) {
  var isStaticClick = (0,_vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.isStaticExp)(key) && key.content.toLowerCase() === 'onclick';
  return isStaticClick ? (0,_vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.createSimpleExpression)(event, true) : key.type !== 4
  /* SIMPLE_EXPRESSION */
  ? (0,_vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.createCompoundExpression)(["(", key, ") === \"onClick\" ? \"".concat(event, "\" : ("), key, ")"]) : key;
};

var transformOn = function transformOn(dir, node, context) {
  return (0,_vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.transformOn)(dir, node, context, function (baseResult) {
    var modifiers = dir.modifiers;
    if (!modifiers.length) return baseResult;
    var _baseResult$props$ = baseResult.props[0],
        key = _baseResult$props$.key,
        handlerExp = _baseResult$props$.value;

    var _resolveModifiers = resolveModifiers(key, modifiers, context, dir.loc),
        keyModifiers = _resolveModifiers.keyModifiers,
        nonKeyModifiers = _resolveModifiers.nonKeyModifiers,
        eventOptionModifiers = _resolveModifiers.eventOptionModifiers; // normalize click.right and click.middle since they don't actually fire


    if (nonKeyModifiers.includes('right')) {
      key = transformClick(key, "onContextmenu");
    }

    if (nonKeyModifiers.includes('middle')) {
      key = transformClick(key, "onMouseup");
    }

    if (nonKeyModifiers.length) {
      handlerExp = (0,_vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.createCallExpression)(context.helper(V_ON_WITH_MODIFIERS), [handlerExp, JSON.stringify(nonKeyModifiers)]);
    }

    if (keyModifiers.length && ( // if event name is dynamic, always wrap with keys guard
    !(0,_vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.isStaticExp)(key) || isKeyboardEvent(key.content))) {
      handlerExp = (0,_vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.createCallExpression)(context.helper(V_ON_WITH_KEYS), [handlerExp, JSON.stringify(keyModifiers)]);
    }

    if (eventOptionModifiers.length) {
      var modifierPostfix = eventOptionModifiers.map(_vue_shared__WEBPACK_IMPORTED_MODULE_1__.capitalize).join('');
      key = (0,_vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.isStaticExp)(key) ? (0,_vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.createSimpleExpression)("".concat(key.content).concat(modifierPostfix), true) : (0,_vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.createCompoundExpression)(["(", key, ") + \"".concat(modifierPostfix, "\"")]);
    }

    return {
      props: [(0,_vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.createObjectProperty)(key, handlerExp)]
    };
  });
};

var transformShow = function transformShow(dir, node, context) {
  var exp = dir.exp,
      loc = dir.loc;

  if (!exp) {
    context.onError(createDOMCompilerError(57
    /* X_V_SHOW_NO_EXPRESSION */
    , loc));
  }

  return {
    props: [],
    needRuntime: context.helper(V_SHOW)
  };
};

var warnTransitionChildren = function warnTransitionChildren(node, context) {
  if (node.type === 1
  /* ELEMENT */
  && node.tagType === 1
  /* COMPONENT */
  ) {
      var component = context.isBuiltInComponent(node.tag);

      if (component === TRANSITION) {
        return function () {
          if (node.children.length && hasMultipleChildren(node)) {
            context.onError(createDOMCompilerError(58
            /* X_TRANSITION_INVALID_CHILDREN */
            , {
              start: node.children[0].loc.start,
              end: node.children[node.children.length - 1].loc.end,
              source: ''
            }));
          }
        };
      }
    }
};

function hasMultipleChildren(node) {
  // #1352 filter out potential comment nodes.
  var children = node.children = node.children.filter(function (c) {
    return c.type !== 3;
  }
  /* COMMENT */
  );
  var child = children[0];
  return children.length !== 1 || child.type === 11
  /* FOR */
  || child.type === 9
  /* IF */
  && child.branches.some(hasMultipleChildren);
}

var ignoreSideEffectTags = function ignoreSideEffectTags(node, context) {
  if (node.type === 1
  /* ELEMENT */
  && node.tagType === 0
  /* ELEMENT */
  && (node.tag === 'script' || node.tag === 'style')) {
    context.onError(createDOMCompilerError(59
    /* X_IGNORED_SIDE_EFFECT_TAG */
    , node.loc));
    context.removeNode();
  }
};

var DOMNodeTransforms = [transformStyle].concat(_toConsumableArray( true ? [warnTransitionChildren] : 0));
var DOMDirectiveTransforms = {
  cloak: _vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.noopDirectiveTransform,
  html: transformVHtml,
  text: transformVText,
  model: transformModel,
  on: transformOn,
  show: transformShow
};

function compile(template) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  return (0,_vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.baseCompile)(template, (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.extend)({}, parserOptions, options, {
    nodeTransforms: [// ignore <script> and <tag>
    // this is not put inside DOMNodeTransforms because that list is used
    // by compiler-ssr to generate vnode fallback branches
    ignoreSideEffectTags].concat(_toConsumableArray(DOMNodeTransforms), _toConsumableArray(options.nodeTransforms || [])),
    directiveTransforms: (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.extend)({}, DOMDirectiveTransforms, options.directiveTransforms || {}),
    transformHoist: null
  }));
}

function parse(template) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  return (0,_vue_compiler_core__WEBPACK_IMPORTED_MODULE_0__.baseParse)(template, (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.extend)({}, parserOptions, options));
}



/***/ }),

/***/ "./node_modules/@vue/reactivity/dist/reactivity.esm-bundler.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@vue/reactivity/dist/reactivity.esm-bundler.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ITERATE_KEY": () => (/* binding */ ITERATE_KEY),
/* harmony export */   "computed": () => (/* binding */ computed),
/* harmony export */   "customRef": () => (/* binding */ customRef),
/* harmony export */   "effect": () => (/* binding */ effect),
/* harmony export */   "enableTracking": () => (/* binding */ enableTracking),
/* harmony export */   "isProxy": () => (/* binding */ isProxy),
/* harmony export */   "isReactive": () => (/* binding */ isReactive),
/* harmony export */   "isReadonly": () => (/* binding */ isReadonly),
/* harmony export */   "isRef": () => (/* binding */ isRef),
/* harmony export */   "markRaw": () => (/* binding */ markRaw),
/* harmony export */   "pauseTracking": () => (/* binding */ pauseTracking),
/* harmony export */   "proxyRefs": () => (/* binding */ proxyRefs),
/* harmony export */   "reactive": () => (/* binding */ reactive),
/* harmony export */   "readonly": () => (/* binding */ readonly),
/* harmony export */   "ref": () => (/* binding */ ref),
/* harmony export */   "resetTracking": () => (/* binding */ resetTracking),
/* harmony export */   "shallowReactive": () => (/* binding */ shallowReactive),
/* harmony export */   "shallowReadonly": () => (/* binding */ shallowReadonly),
/* harmony export */   "shallowRef": () => (/* binding */ shallowRef),
/* harmony export */   "stop": () => (/* binding */ stop),
/* harmony export */   "toRaw": () => (/* binding */ toRaw),
/* harmony export */   "toRef": () => (/* binding */ toRef),
/* harmony export */   "toRefs": () => (/* binding */ toRefs),
/* harmony export */   "track": () => (/* binding */ track),
/* harmony export */   "trigger": () => (/* binding */ trigger),
/* harmony export */   "triggerRef": () => (/* binding */ triggerRef),
/* harmony export */   "unref": () => (/* binding */ unref)
/* harmony export */ });
/* harmony import */ var _vue_shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @vue/shared */ "./node_modules/@vue/shared/dist/shared.esm-bundler.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


var targetMap = new WeakMap();
var effectStack = [];
var activeEffect;
var ITERATE_KEY = Symbol( true ? 'iterate' : 0);
var MAP_KEY_ITERATE_KEY = Symbol( true ? 'Map key iterate' : 0);

function isEffect(fn) {
  return fn && fn._isEffect === true;
}

function effect(fn) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _vue_shared__WEBPACK_IMPORTED_MODULE_0__.EMPTY_OBJ;

  if (isEffect(fn)) {
    fn = fn.raw;
  }

  var effect = createReactiveEffect(fn, options);

  if (!options.lazy) {
    effect();
  }

  return effect;
}

function stop(effect) {
  if (effect.active) {
    cleanup(effect);

    if (effect.options.onStop) {
      effect.options.onStop();
    }

    effect.active = false;
  }
}

var uid = 0;

function createReactiveEffect(fn, options) {
  var effect = function reactiveEffect() {
    if (!effect.active) {
      return fn();
    }

    if (!effectStack.includes(effect)) {
      cleanup(effect);

      try {
        enableTracking();
        effectStack.push(effect);
        activeEffect = effect;
        return fn();
      } finally {
        effectStack.pop();
        resetTracking();
        activeEffect = effectStack[effectStack.length - 1];
      }
    }
  };

  effect.id = uid++;
  effect.allowRecurse = !!options.allowRecurse;
  effect._isEffect = true;
  effect.active = true;
  effect.raw = fn;
  effect.deps = [];
  effect.options = options;
  return effect;
}

function cleanup(effect) {
  var deps = effect.deps;

  if (deps.length) {
    for (var i = 0; i < deps.length; i++) {
      deps[i]["delete"](effect);
    }

    deps.length = 0;
  }
}

var shouldTrack = true;
var trackStack = [];

function pauseTracking() {
  trackStack.push(shouldTrack);
  shouldTrack = false;
}

function enableTracking() {
  trackStack.push(shouldTrack);
  shouldTrack = true;
}

function resetTracking() {
  var last = trackStack.pop();
  shouldTrack = last === undefined ? true : last;
}

function track(target, type, key) {
  if (!shouldTrack || activeEffect === undefined) {
    return;
  }

  var depsMap = targetMap.get(target);

  if (!depsMap) {
    targetMap.set(target, depsMap = new Map());
  }

  var dep = depsMap.get(key);

  if (!dep) {
    depsMap.set(key, dep = new Set());
  }

  if (!dep.has(activeEffect)) {
    dep.add(activeEffect);
    activeEffect.deps.push(dep);

    if ( true && activeEffect.options.onTrack) {
      activeEffect.options.onTrack({
        effect: activeEffect,
        target: target,
        type: type,
        key: key
      });
    }
  }
}

function trigger(target, type, key, newValue, oldValue, oldTarget) {
  var depsMap = targetMap.get(target);

  if (!depsMap) {
    // never been tracked
    return;
  }

  var effects = new Set();

  var add = function add(effectsToAdd) {
    if (effectsToAdd) {
      effectsToAdd.forEach(function (effect) {
        if (effect !== activeEffect || effect.allowRecurse) {
          effects.add(effect);
        }
      });
    }
  };

  if (type === "clear"
  /* CLEAR */
  ) {
      // collection being cleared
      // trigger all effects for target
      depsMap.forEach(add);
    } else if (key === 'length' && (0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.isArray)(target)) {
    depsMap.forEach(function (dep, key) {
      if (key === 'length' || key >= newValue) {
        add(dep);
      }
    });
  } else {
    // schedule runs for SET | ADD | DELETE
    if (key !== void 0) {
      add(depsMap.get(key));
    } // also run for iteration key on ADD | DELETE | Map.SET


    switch (type) {
      case "add"
      /* ADD */
      :
        if (!(0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.isArray)(target)) {
          add(depsMap.get(ITERATE_KEY));

          if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.isMap)(target)) {
            add(depsMap.get(MAP_KEY_ITERATE_KEY));
          }
        } else if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.isIntegerKey)(key)) {
          // new index added to array -> length changes
          add(depsMap.get('length'));
        }

        break;

      case "delete"
      /* DELETE */
      :
        if (!(0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.isArray)(target)) {
          add(depsMap.get(ITERATE_KEY));

          if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.isMap)(target)) {
            add(depsMap.get(MAP_KEY_ITERATE_KEY));
          }
        }

        break;

      case "set"
      /* SET */
      :
        if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.isMap)(target)) {
          add(depsMap.get(ITERATE_KEY));
        }

        break;
    }
  }

  var run = function run(effect) {
    if ( true && effect.options.onTrigger) {
      effect.options.onTrigger({
        effect: effect,
        target: target,
        key: key,
        type: type,
        newValue: newValue,
        oldValue: oldValue,
        oldTarget: oldTarget
      });
    }

    if (effect.options.scheduler) {
      effect.options.scheduler(effect);
    } else {
      effect();
    }
  };

  effects.forEach(run);
}

var isNonTrackableKeys = /*#__PURE__*/(0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.makeMap)("__proto__,__v_isRef,__isVue");
var builtInSymbols = new Set(Object.getOwnPropertyNames(Symbol).map(function (key) {
  return Symbol[key];
}).filter(_vue_shared__WEBPACK_IMPORTED_MODULE_0__.isSymbol));
var get = /*#__PURE__*/createGetter();
var shallowGet = /*#__PURE__*/createGetter(false, true);
var readonlyGet = /*#__PURE__*/createGetter(true);
var shallowReadonlyGet = /*#__PURE__*/createGetter(true, true);
var arrayInstrumentations = {};
['includes', 'indexOf', 'lastIndexOf'].forEach(function (key) {
  var method = Array.prototype[key];

  arrayInstrumentations[key] = function () {
    var arr = toRaw(this);

    for (var i = 0, l = this.length; i < l; i++) {
      track(arr, "get"
      /* GET */
      , i + '');
    } // we run the method using the original args first (which may be reactive)


    for (var _len = arguments.length, args = new Array(_len), _key2 = 0; _key2 < _len; _key2++) {
      args[_key2] = arguments[_key2];
    }

    var res = method.apply(arr, args);

    if (res === -1 || res === false) {
      // if that didn't work, run it again using raw values.
      return method.apply(arr, args.map(toRaw));
    } else {
      return res;
    }
  };
});
['push', 'pop', 'shift', 'unshift', 'splice'].forEach(function (key) {
  var method = Array.prototype[key];

  arrayInstrumentations[key] = function () {
    pauseTracking();

    for (var _len2 = arguments.length, args = new Array(_len2), _key3 = 0; _key3 < _len2; _key3++) {
      args[_key3] = arguments[_key3];
    }

    var res = method.apply(this, args);
    resetTracking();
    return res;
  };
});

function createGetter() {
  var isReadonly = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
  var shallow = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  return function get(target, key, receiver) {
    if (key === "__v_isReactive"
    /* IS_REACTIVE */
    ) {
        return !isReadonly;
      } else if (key === "__v_isReadonly"
    /* IS_READONLY */
    ) {
        return isReadonly;
      } else if (key === "__v_raw"
    /* RAW */
    && receiver === (isReadonly ? shallow ? shallowReadonlyMap : readonlyMap : shallow ? shallowReactiveMap : reactiveMap).get(target)) {
      return target;
    }

    var targetIsArray = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.isArray)(target);

    if (!isReadonly && targetIsArray && (0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.hasOwn)(arrayInstrumentations, key)) {
      return Reflect.get(arrayInstrumentations, key, receiver);
    }

    var res = Reflect.get(target, key, receiver);

    if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.isSymbol)(key) ? builtInSymbols.has(key) : isNonTrackableKeys(key)) {
      return res;
    }

    if (!isReadonly) {
      track(target, "get"
      /* GET */
      , key);
    }

    if (shallow) {
      return res;
    }

    if (isRef(res)) {
      // ref unwrapping - does not apply for Array + integer key.
      var shouldUnwrap = !targetIsArray || !(0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.isIntegerKey)(key);
      return shouldUnwrap ? res.value : res;
    }

    if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.isObject)(res)) {
      // Convert returned value into a proxy as well. we do the isObject check
      // here to avoid invalid value warning. Also need to lazy access readonly
      // and reactive here to avoid circular dependency.
      return isReadonly ? readonly(res) : reactive(res);
    }

    return res;
  };
}

var set = /*#__PURE__*/createSetter();
var shallowSet = /*#__PURE__*/createSetter(true);

function createSetter() {
  var shallow = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
  return function set(target, key, value, receiver) {
    var oldValue = target[key];

    if (!shallow) {
      value = toRaw(value);
      oldValue = toRaw(oldValue);

      if (!(0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.isArray)(target) && isRef(oldValue) && !isRef(value)) {
        oldValue.value = value;
        return true;
      }
    }

    var hadKey = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.isArray)(target) && (0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.isIntegerKey)(key) ? Number(key) < target.length : (0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.hasOwn)(target, key);
    var result = Reflect.set(target, key, value, receiver); // don't trigger if target is something up in the prototype chain of original

    if (target === toRaw(receiver)) {
      if (!hadKey) {
        trigger(target, "add"
        /* ADD */
        , key, value);
      } else if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.hasChanged)(value, oldValue)) {
        trigger(target, "set"
        /* SET */
        , key, value, oldValue);
      }
    }

    return result;
  };
}

function deleteProperty(target, key) {
  var hadKey = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.hasOwn)(target, key);
  var oldValue = target[key];
  var result = Reflect.deleteProperty(target, key);

  if (result && hadKey) {
    trigger(target, "delete"
    /* DELETE */
    , key, undefined, oldValue);
  }

  return result;
}

function has(target, key) {
  var result = Reflect.has(target, key);

  if (!(0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.isSymbol)(key) || !builtInSymbols.has(key)) {
    track(target, "has"
    /* HAS */
    , key);
  }

  return result;
}

function ownKeys(target) {
  track(target, "iterate"
  /* ITERATE */
  , (0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.isArray)(target) ? 'length' : ITERATE_KEY);
  return Reflect.ownKeys(target);
}

var mutableHandlers = {
  get: get,
  set: set,
  deleteProperty: deleteProperty,
  has: has,
  ownKeys: ownKeys
};
var readonlyHandlers = {
  get: readonlyGet,
  set: function set(target, key) {
    if (true) {
      console.warn("Set operation on key \"".concat(String(key), "\" failed: target is readonly."), target);
    }

    return true;
  },
  deleteProperty: function deleteProperty(target, key) {
    if (true) {
      console.warn("Delete operation on key \"".concat(String(key), "\" failed: target is readonly."), target);
    }

    return true;
  }
};
var shallowReactiveHandlers = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.extend)({}, mutableHandlers, {
  get: shallowGet,
  set: shallowSet
}); // Props handlers are special in the sense that it should not unwrap top-level
// refs (in order to allow refs to be explicitly passed down), but should
// retain the reactivity of the normal readonly object.

var shallowReadonlyHandlers = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.extend)({}, readonlyHandlers, {
  get: shallowReadonlyGet
});

var toReactive = function toReactive(value) {
  return (0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.isObject)(value) ? reactive(value) : value;
};

var toReadonly = function toReadonly(value) {
  return (0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.isObject)(value) ? readonly(value) : value;
};

var toShallow = function toShallow(value) {
  return value;
};

var getProto = function getProto(v) {
  return Reflect.getPrototypeOf(v);
};

function get$1(target, key) {
  var isReadonly = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  var isShallow = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
  // #1772: readonly(reactive(Map)) should return readonly + reactive version
  // of the value
  target = target["__v_raw"
  /* RAW */
  ];
  var rawTarget = toRaw(target);
  var rawKey = toRaw(key);

  if (key !== rawKey) {
    !isReadonly && track(rawTarget, "get"
    /* GET */
    , key);
  }

  !isReadonly && track(rawTarget, "get"
  /* GET */
  , rawKey);

  var _getProto = getProto(rawTarget),
      has = _getProto.has;

  var wrap = isShallow ? toShallow : isReadonly ? toReadonly : toReactive;

  if (has.call(rawTarget, key)) {
    return wrap(target.get(key));
  } else if (has.call(rawTarget, rawKey)) {
    return wrap(target.get(rawKey));
  } else if (target !== rawTarget) {
    // #3602 readonly(reactive(Map))
    // ensure that the nested reactive `Map` can do tracking for itself
    target.get(key);
  }
}

function has$1(key) {
  var isReadonly = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  var target = this["__v_raw"
  /* RAW */
  ];
  var rawTarget = toRaw(target);
  var rawKey = toRaw(key);

  if (key !== rawKey) {
    !isReadonly && track(rawTarget, "has"
    /* HAS */
    , key);
  }

  !isReadonly && track(rawTarget, "has"
  /* HAS */
  , rawKey);
  return key === rawKey ? target.has(key) : target.has(key) || target.has(rawKey);
}

function size(target) {
  var isReadonly = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  target = target["__v_raw"
  /* RAW */
  ];
  !isReadonly && track(toRaw(target), "iterate"
  /* ITERATE */
  , ITERATE_KEY);
  return Reflect.get(target, 'size', target);
}

function add(value) {
  value = toRaw(value);
  var target = toRaw(this);
  var proto = getProto(target);
  var hadKey = proto.has.call(target, value);

  if (!hadKey) {
    target.add(value);
    trigger(target, "add"
    /* ADD */
    , value, value);
  }

  return this;
}

function set$1(key, value) {
  value = toRaw(value);
  var target = toRaw(this);

  var _getProto2 = getProto(target),
      has = _getProto2.has,
      get = _getProto2.get;

  var hadKey = has.call(target, key);

  if (!hadKey) {
    key = toRaw(key);
    hadKey = has.call(target, key);
  } else if (true) {
    checkIdentityKeys(target, has, key);
  }

  var oldValue = get.call(target, key);
  target.set(key, value);

  if (!hadKey) {
    trigger(target, "add"
    /* ADD */
    , key, value);
  } else if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.hasChanged)(value, oldValue)) {
    trigger(target, "set"
    /* SET */
    , key, value, oldValue);
  }

  return this;
}

function deleteEntry(key) {
  var target = toRaw(this);

  var _getProto3 = getProto(target),
      has = _getProto3.has,
      get = _getProto3.get;

  var hadKey = has.call(target, key);

  if (!hadKey) {
    key = toRaw(key);
    hadKey = has.call(target, key);
  } else if (true) {
    checkIdentityKeys(target, has, key);
  }

  var oldValue = get ? get.call(target, key) : undefined; // forward the operation before queueing reactions

  var result = target["delete"](key);

  if (hadKey) {
    trigger(target, "delete"
    /* DELETE */
    , key, undefined, oldValue);
  }

  return result;
}

function clear() {
  var target = toRaw(this);
  var hadItems = target.size !== 0;
  var oldTarget =  true ? (0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.isMap)(target) ? new Map(target) : new Set(target) : 0; // forward the operation before queueing reactions

  var result = target.clear();

  if (hadItems) {
    trigger(target, "clear"
    /* CLEAR */
    , undefined, undefined, oldTarget);
  }

  return result;
}

function createForEach(isReadonly, isShallow) {
  return function forEach(callback, thisArg) {
    var observed = this;
    var target = observed["__v_raw"
    /* RAW */
    ];
    var rawTarget = toRaw(target);
    var wrap = isShallow ? toShallow : isReadonly ? toReadonly : toReactive;
    !isReadonly && track(rawTarget, "iterate"
    /* ITERATE */
    , ITERATE_KEY);
    return target.forEach(function (value, key) {
      // important: make sure the callback is
      // 1. invoked with the reactive map as `this` and 3rd arg
      // 2. the value received should be a corresponding reactive/readonly.
      return callback.call(thisArg, wrap(value), wrap(key), observed);
    });
  };
}

function createIterableMethod(method, isReadonly, isShallow) {
  return function () {
    var target = this["__v_raw"
    /* RAW */
    ];
    var rawTarget = toRaw(target);
    var targetIsMap = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.isMap)(rawTarget);
    var isPair = method === 'entries' || method === Symbol.iterator && targetIsMap;
    var isKeyOnly = method === 'keys' && targetIsMap;
    var innerIterator = target[method].apply(target, arguments);
    var wrap = isShallow ? toShallow : isReadonly ? toReadonly : toReactive;
    !isReadonly && track(rawTarget, "iterate"
    /* ITERATE */
    , isKeyOnly ? MAP_KEY_ITERATE_KEY : ITERATE_KEY); // return a wrapped iterator which returns observed versions of the
    // values emitted from the real iterator

    return _defineProperty({
      // iterator protocol
      next: function next() {
        var _innerIterator$next = innerIterator.next(),
            value = _innerIterator$next.value,
            done = _innerIterator$next.done;

        return done ? {
          value: value,
          done: done
        } : {
          value: isPair ? [wrap(value[0]), wrap(value[1])] : wrap(value),
          done: done
        };
      }
    }, Symbol.iterator, function () {
      return this;
    });
  };
}

function createReadonlyMethod(type) {
  return function () {
    if (true) {
      var key = (arguments.length <= 0 ? undefined : arguments[0]) ? "on key \"".concat(arguments.length <= 0 ? undefined : arguments[0], "\" ") : "";
      console.warn("".concat((0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.capitalize)(type), " operation ").concat(key, "failed: target is readonly."), toRaw(this));
    }

    return type === "delete"
    /* DELETE */
    ? false : this;
  };
}

var mutableInstrumentations = {
  get: function get(key) {
    return get$1(this, key);
  },

  get size() {
    return size(this);
  },

  has: has$1,
  add: add,
  set: set$1,
  "delete": deleteEntry,
  clear: clear,
  forEach: createForEach(false, false)
};
var shallowInstrumentations = {
  get: function get(key) {
    return get$1(this, key, false, true);
  },

  get size() {
    return size(this);
  },

  has: has$1,
  add: add,
  set: set$1,
  "delete": deleteEntry,
  clear: clear,
  forEach: createForEach(false, true)
};
var readonlyInstrumentations = {
  get: function get(key) {
    return get$1(this, key, true);
  },

  get size() {
    return size(this, true);
  },

  has: function has(key) {
    return has$1.call(this, key, true);
  },
  add: createReadonlyMethod("add"
  /* ADD */
  ),
  set: createReadonlyMethod("set"
  /* SET */
  ),
  "delete": createReadonlyMethod("delete"
  /* DELETE */
  ),
  clear: createReadonlyMethod("clear"
  /* CLEAR */
  ),
  forEach: createForEach(true, false)
};
var shallowReadonlyInstrumentations = {
  get: function get(key) {
    return get$1(this, key, true, true);
  },

  get size() {
    return size(this, true);
  },

  has: function has(key) {
    return has$1.call(this, key, true);
  },
  add: createReadonlyMethod("add"
  /* ADD */
  ),
  set: createReadonlyMethod("set"
  /* SET */
  ),
  "delete": createReadonlyMethod("delete"
  /* DELETE */
  ),
  clear: createReadonlyMethod("clear"
  /* CLEAR */
  ),
  forEach: createForEach(true, true)
};
var iteratorMethods = ['keys', 'values', 'entries', Symbol.iterator];
iteratorMethods.forEach(function (method) {
  mutableInstrumentations[method] = createIterableMethod(method, false, false);
  readonlyInstrumentations[method] = createIterableMethod(method, true, false);
  shallowInstrumentations[method] = createIterableMethod(method, false, true);
  shallowReadonlyInstrumentations[method] = createIterableMethod(method, true, true);
});

function createInstrumentationGetter(isReadonly, shallow) {
  var instrumentations = shallow ? isReadonly ? shallowReadonlyInstrumentations : shallowInstrumentations : isReadonly ? readonlyInstrumentations : mutableInstrumentations;
  return function (target, key, receiver) {
    if (key === "__v_isReactive"
    /* IS_REACTIVE */
    ) {
        return !isReadonly;
      } else if (key === "__v_isReadonly"
    /* IS_READONLY */
    ) {
        return isReadonly;
      } else if (key === "__v_raw"
    /* RAW */
    ) {
        return target;
      }

    return Reflect.get((0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.hasOwn)(instrumentations, key) && key in target ? instrumentations : target, key, receiver);
  };
}

var mutableCollectionHandlers = {
  get: createInstrumentationGetter(false, false)
};
var shallowCollectionHandlers = {
  get: createInstrumentationGetter(false, true)
};
var readonlyCollectionHandlers = {
  get: createInstrumentationGetter(true, false)
};
var shallowReadonlyCollectionHandlers = {
  get: createInstrumentationGetter(true, true)
};

function checkIdentityKeys(target, has, key) {
  var rawKey = toRaw(key);

  if (rawKey !== key && has.call(target, rawKey)) {
    var type = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.toRawType)(target);
    console.warn("Reactive ".concat(type, " contains both the raw and reactive ") + "versions of the same object".concat(type === "Map" ? " as keys" : "", ", ") + "which can lead to inconsistencies. " + "Avoid differentiating between the raw and reactive versions " + "of an object and only use the reactive version if possible.");
  }
}

var reactiveMap = new WeakMap();
var shallowReactiveMap = new WeakMap();
var readonlyMap = new WeakMap();
var shallowReadonlyMap = new WeakMap();

function targetTypeMap(rawType) {
  switch (rawType) {
    case 'Object':
    case 'Array':
      return 1
      /* COMMON */
      ;

    case 'Map':
    case 'Set':
    case 'WeakMap':
    case 'WeakSet':
      return 2
      /* COLLECTION */
      ;

    default:
      return 0
      /* INVALID */
      ;
  }
}

function getTargetType(value) {
  return value["__v_skip"
  /* SKIP */
  ] || !Object.isExtensible(value) ? 0
  /* INVALID */
  : targetTypeMap((0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.toRawType)(value));
}

function reactive(target) {
  // if trying to observe a readonly proxy, return the readonly version.
  if (target && target["__v_isReadonly"
  /* IS_READONLY */
  ]) {
    return target;
  }

  return createReactiveObject(target, false, mutableHandlers, mutableCollectionHandlers, reactiveMap);
}
/**
 * Return a shallowly-reactive copy of the original object, where only the root
 * level properties are reactive. It also does not auto-unwrap refs (even at the
 * root level).
 */


function shallowReactive(target) {
  return createReactiveObject(target, false, shallowReactiveHandlers, shallowCollectionHandlers, shallowReactiveMap);
}
/**
 * Creates a readonly copy of the original object. Note the returned copy is not
 * made reactive, but `readonly` can be called on an already reactive object.
 */


function readonly(target) {
  return createReactiveObject(target, true, readonlyHandlers, readonlyCollectionHandlers, readonlyMap);
}
/**
 * Returns a reactive-copy of the original object, where only the root level
 * properties are readonly, and does NOT unwrap refs nor recursively convert
 * returned properties.
 * This is used for creating the props proxy object for stateful components.
 */


function shallowReadonly(target) {
  return createReactiveObject(target, true, shallowReadonlyHandlers, shallowReadonlyCollectionHandlers, shallowReadonlyMap);
}

function createReactiveObject(target, isReadonly, baseHandlers, collectionHandlers, proxyMap) {
  if (!(0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.isObject)(target)) {
    if (true) {
      console.warn("value cannot be made reactive: ".concat(String(target)));
    }

    return target;
  } // target is already a Proxy, return it.
  // exception: calling readonly() on a reactive object


  if (target["__v_raw"
  /* RAW */
  ] && !(isReadonly && target["__v_isReactive"
  /* IS_REACTIVE */
  ])) {
    return target;
  } // target already has corresponding Proxy


  var existingProxy = proxyMap.get(target);

  if (existingProxy) {
    return existingProxy;
  } // only a whitelist of value types can be observed.


  var targetType = getTargetType(target);

  if (targetType === 0
  /* INVALID */
  ) {
      return target;
    }

  var proxy = new Proxy(target, targetType === 2
  /* COLLECTION */
  ? collectionHandlers : baseHandlers);
  proxyMap.set(target, proxy);
  return proxy;
}

function isReactive(value) {
  if (isReadonly(value)) {
    return isReactive(value["__v_raw"
    /* RAW */
    ]);
  }

  return !!(value && value["__v_isReactive"
  /* IS_REACTIVE */
  ]);
}

function isReadonly(value) {
  return !!(value && value["__v_isReadonly"
  /* IS_READONLY */
  ]);
}

function isProxy(value) {
  return isReactive(value) || isReadonly(value);
}

function toRaw(observed) {
  return observed && toRaw(observed["__v_raw"
  /* RAW */
  ]) || observed;
}

function markRaw(value) {
  (0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.def)(value, "__v_skip"
  /* SKIP */
  , true);
  return value;
}

var convert = function convert(val) {
  return (0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.isObject)(val) ? reactive(val) : val;
};

function isRef(r) {
  return Boolean(r && r.__v_isRef === true);
}

function ref(value) {
  return createRef(value);
}

function shallowRef(value) {
  return createRef(value, true);
}

var RefImpl = /*#__PURE__*/function () {
  function RefImpl(_rawValue, _shallow) {
    _classCallCheck(this, RefImpl);

    this._rawValue = _rawValue;
    this._shallow = _shallow;
    this.__v_isRef = true;
    this._value = _shallow ? _rawValue : convert(_rawValue);
  }

  _createClass(RefImpl, [{
    key: "value",
    get: function get() {
      track(toRaw(this), "get"
      /* GET */
      , 'value');
      return this._value;
    },
    set: function set(newVal) {
      if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.hasChanged)(toRaw(newVal), this._rawValue)) {
        this._rawValue = newVal;
        this._value = this._shallow ? newVal : convert(newVal);
        trigger(toRaw(this), "set"
        /* SET */
        , 'value', newVal);
      }
    }
  }]);

  return RefImpl;
}();

function createRef(rawValue) {
  var shallow = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

  if (isRef(rawValue)) {
    return rawValue;
  }

  return new RefImpl(rawValue, shallow);
}

function triggerRef(ref) {
  trigger(toRaw(ref), "set"
  /* SET */
  , 'value',  true ? ref.value : 0);
}

function unref(ref) {
  return isRef(ref) ? ref.value : ref;
}

var shallowUnwrapHandlers = {
  get: function get(target, key, receiver) {
    return unref(Reflect.get(target, key, receiver));
  },
  set: function set(target, key, value, receiver) {
    var oldValue = target[key];

    if (isRef(oldValue) && !isRef(value)) {
      oldValue.value = value;
      return true;
    } else {
      return Reflect.set(target, key, value, receiver);
    }
  }
};

function proxyRefs(objectWithRefs) {
  return isReactive(objectWithRefs) ? objectWithRefs : new Proxy(objectWithRefs, shallowUnwrapHandlers);
}

var CustomRefImpl = /*#__PURE__*/function () {
  function CustomRefImpl(factory) {
    var _this = this;

    _classCallCheck(this, CustomRefImpl);

    this.__v_isRef = true;

    var _factory = factory(function () {
      return track(_this, "get"
      /* GET */
      ,
      /* GET */
      'value');
    }, function () {
      return trigger(_this, "set"
      /* SET */
      ,
      /* SET */
      'value');
    }),
        get = _factory.get,
        set = _factory.set;

    this._get = get;
    this._set = set;
  }

  _createClass(CustomRefImpl, [{
    key: "value",
    get: function get() {
      return this._get();
    },
    set: function set(newVal) {
      this._set(newVal);
    }
  }]);

  return CustomRefImpl;
}();

function customRef(factory) {
  return new CustomRefImpl(factory);
}

function toRefs(object) {
  if ( true && !isProxy(object)) {
    console.warn("toRefs() expects a reactive object but received a plain one.");
  }

  var ret = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.isArray)(object) ? new Array(object.length) : {};

  for (var key in object) {
    ret[key] = toRef(object, key);
  }

  return ret;
}

var ObjectRefImpl = /*#__PURE__*/function () {
  function ObjectRefImpl(_object, _key) {
    _classCallCheck(this, ObjectRefImpl);

    this._object = _object;
    this._key = _key;
    this.__v_isRef = true;
  }

  _createClass(ObjectRefImpl, [{
    key: "value",
    get: function get() {
      return this._object[this._key];
    },
    set: function set(newVal) {
      this._object[this._key] = newVal;
    }
  }]);

  return ObjectRefImpl;
}();

function toRef(object, key) {
  return isRef(object[key]) ? object[key] : new ObjectRefImpl(object, key);
}

var ComputedRefImpl = /*#__PURE__*/function () {
  function ComputedRefImpl(getter, _setter, isReadonly) {
    var _this2 = this;

    _classCallCheck(this, ComputedRefImpl);

    this._setter = _setter;
    this._dirty = true;
    this.__v_isRef = true;
    this.effect = effect(getter, {
      lazy: true,
      scheduler: function scheduler() {
        if (!_this2._dirty) {
          _this2._dirty = true;
          trigger(toRaw(_this2), "set"
          /* SET */
          , 'value');
        }
      }
    });
    this["__v_isReadonly"
    /* IS_READONLY */
    ] = isReadonly;
  }

  _createClass(ComputedRefImpl, [{
    key: "value",
    get: function get() {
      // the computed ref may get wrapped by other proxies e.g. readonly() #3376
      var self = toRaw(this);

      if (self._dirty) {
        self._value = this.effect();
        self._dirty = false;
      }

      track(self, "get"
      /* GET */
      , 'value');
      return self._value;
    },
    set: function set(newValue) {
      this._setter(newValue);
    }
  }]);

  return ComputedRefImpl;
}();

function computed(getterOrOptions) {
  var getter;
  var setter;

  if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.isFunction)(getterOrOptions)) {
    getter = getterOrOptions;
    setter =  true ? function () {
      console.warn('Write operation failed: computed value is readonly');
    } : 0;
  } else {
    getter = getterOrOptions.get;
    setter = getterOrOptions.set;
  }

  return new ComputedRefImpl(getter, setter, (0,_vue_shared__WEBPACK_IMPORTED_MODULE_0__.isFunction)(getterOrOptions) || !getterOrOptions.set);
}



/***/ }),

/***/ "./node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "customRef": () => (/* reexport safe */ _vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.customRef),
/* harmony export */   "isProxy": () => (/* reexport safe */ _vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.isProxy),
/* harmony export */   "isReactive": () => (/* reexport safe */ _vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.isReactive),
/* harmony export */   "isReadonly": () => (/* reexport safe */ _vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.isReadonly),
/* harmony export */   "isRef": () => (/* reexport safe */ _vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.isRef),
/* harmony export */   "markRaw": () => (/* reexport safe */ _vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.markRaw),
/* harmony export */   "proxyRefs": () => (/* reexport safe */ _vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.proxyRefs),
/* harmony export */   "reactive": () => (/* reexport safe */ _vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.reactive),
/* harmony export */   "readonly": () => (/* reexport safe */ _vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.readonly),
/* harmony export */   "ref": () => (/* reexport safe */ _vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.ref),
/* harmony export */   "shallowReactive": () => (/* reexport safe */ _vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.shallowReactive),
/* harmony export */   "shallowReadonly": () => (/* reexport safe */ _vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.shallowReadonly),
/* harmony export */   "shallowRef": () => (/* reexport safe */ _vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.shallowRef),
/* harmony export */   "toRaw": () => (/* reexport safe */ _vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.toRaw),
/* harmony export */   "toRef": () => (/* reexport safe */ _vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.toRef),
/* harmony export */   "toRefs": () => (/* reexport safe */ _vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.toRefs),
/* harmony export */   "triggerRef": () => (/* reexport safe */ _vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.triggerRef),
/* harmony export */   "unref": () => (/* reexport safe */ _vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.unref),
/* harmony export */   "camelize": () => (/* reexport safe */ _vue_shared__WEBPACK_IMPORTED_MODULE_1__.camelize),
/* harmony export */   "capitalize": () => (/* reexport safe */ _vue_shared__WEBPACK_IMPORTED_MODULE_1__.capitalize),
/* harmony export */   "toDisplayString": () => (/* reexport safe */ _vue_shared__WEBPACK_IMPORTED_MODULE_1__.toDisplayString),
/* harmony export */   "toHandlerKey": () => (/* reexport safe */ _vue_shared__WEBPACK_IMPORTED_MODULE_1__.toHandlerKey),
/* harmony export */   "BaseTransition": () => (/* binding */ BaseTransition),
/* harmony export */   "Comment": () => (/* binding */ Comment$1),
/* harmony export */   "Fragment": () => (/* binding */ Fragment),
/* harmony export */   "KeepAlive": () => (/* binding */ KeepAlive),
/* harmony export */   "Static": () => (/* binding */ Static),
/* harmony export */   "Suspense": () => (/* binding */ Suspense),
/* harmony export */   "Teleport": () => (/* binding */ Teleport),
/* harmony export */   "Text": () => (/* binding */ Text),
/* harmony export */   "callWithAsyncErrorHandling": () => (/* binding */ callWithAsyncErrorHandling),
/* harmony export */   "callWithErrorHandling": () => (/* binding */ callWithErrorHandling),
/* harmony export */   "cloneVNode": () => (/* binding */ cloneVNode),
/* harmony export */   "compatUtils": () => (/* binding */ compatUtils),
/* harmony export */   "computed": () => (/* binding */ computed),
/* harmony export */   "createBlock": () => (/* binding */ createBlock),
/* harmony export */   "createCommentVNode": () => (/* binding */ createCommentVNode),
/* harmony export */   "createHydrationRenderer": () => (/* binding */ createHydrationRenderer),
/* harmony export */   "createRenderer": () => (/* binding */ createRenderer),
/* harmony export */   "createSlots": () => (/* binding */ createSlots),
/* harmony export */   "createStaticVNode": () => (/* binding */ createStaticVNode),
/* harmony export */   "createTextVNode": () => (/* binding */ createTextVNode),
/* harmony export */   "createVNode": () => (/* binding */ createVNode),
/* harmony export */   "defineAsyncComponent": () => (/* binding */ defineAsyncComponent),
/* harmony export */   "defineComponent": () => (/* binding */ defineComponent),
/* harmony export */   "defineEmit": () => (/* binding */ defineEmit),
/* harmony export */   "defineProps": () => (/* binding */ defineProps),
/* harmony export */   "devtools": () => (/* binding */ devtools),
/* harmony export */   "getCurrentInstance": () => (/* binding */ getCurrentInstance),
/* harmony export */   "getTransitionRawChildren": () => (/* binding */ getTransitionRawChildren),
/* harmony export */   "h": () => (/* binding */ h),
/* harmony export */   "handleError": () => (/* binding */ handleError),
/* harmony export */   "initCustomFormatter": () => (/* binding */ initCustomFormatter),
/* harmony export */   "inject": () => (/* binding */ inject),
/* harmony export */   "isRuntimeOnly": () => (/* binding */ isRuntimeOnly),
/* harmony export */   "isVNode": () => (/* binding */ isVNode),
/* harmony export */   "mergeProps": () => (/* binding */ mergeProps),
/* harmony export */   "nextTick": () => (/* binding */ nextTick),
/* harmony export */   "onActivated": () => (/* binding */ onActivated),
/* harmony export */   "onBeforeMount": () => (/* binding */ onBeforeMount),
/* harmony export */   "onBeforeUnmount": () => (/* binding */ onBeforeUnmount),
/* harmony export */   "onBeforeUpdate": () => (/* binding */ onBeforeUpdate),
/* harmony export */   "onDeactivated": () => (/* binding */ onDeactivated),
/* harmony export */   "onErrorCaptured": () => (/* binding */ onErrorCaptured),
/* harmony export */   "onMounted": () => (/* binding */ onMounted),
/* harmony export */   "onRenderTracked": () => (/* binding */ onRenderTracked),
/* harmony export */   "onRenderTriggered": () => (/* binding */ onRenderTriggered),
/* harmony export */   "onServerPrefetch": () => (/* binding */ onServerPrefetch),
/* harmony export */   "onUnmounted": () => (/* binding */ onUnmounted),
/* harmony export */   "onUpdated": () => (/* binding */ onUpdated),
/* harmony export */   "openBlock": () => (/* binding */ openBlock),
/* harmony export */   "popScopeId": () => (/* binding */ popScopeId),
/* harmony export */   "provide": () => (/* binding */ provide),
/* harmony export */   "pushScopeId": () => (/* binding */ pushScopeId),
/* harmony export */   "queuePostFlushCb": () => (/* binding */ queuePostFlushCb),
/* harmony export */   "registerRuntimeCompiler": () => (/* binding */ registerRuntimeCompiler),
/* harmony export */   "renderList": () => (/* binding */ renderList),
/* harmony export */   "renderSlot": () => (/* binding */ renderSlot),
/* harmony export */   "resolveComponent": () => (/* binding */ resolveComponent),
/* harmony export */   "resolveDirective": () => (/* binding */ resolveDirective),
/* harmony export */   "resolveDynamicComponent": () => (/* binding */ resolveDynamicComponent),
/* harmony export */   "resolveFilter": () => (/* binding */ resolveFilter),
/* harmony export */   "resolveTransitionHooks": () => (/* binding */ resolveTransitionHooks),
/* harmony export */   "setBlockTracking": () => (/* binding */ setBlockTracking),
/* harmony export */   "setDevtoolsHook": () => (/* binding */ setDevtoolsHook),
/* harmony export */   "setTransitionHooks": () => (/* binding */ setTransitionHooks),
/* harmony export */   "ssrContextKey": () => (/* binding */ ssrContextKey),
/* harmony export */   "ssrUtils": () => (/* binding */ ssrUtils),
/* harmony export */   "toHandlers": () => (/* binding */ toHandlers),
/* harmony export */   "transformVNodeArgs": () => (/* binding */ transformVNodeArgs),
/* harmony export */   "useContext": () => (/* binding */ useContext),
/* harmony export */   "useSSRContext": () => (/* binding */ useSSRContext),
/* harmony export */   "useTransitionState": () => (/* binding */ useTransitionState),
/* harmony export */   "version": () => (/* binding */ version),
/* harmony export */   "warn": () => (/* binding */ warn),
/* harmony export */   "watch": () => (/* binding */ watch),
/* harmony export */   "watchEffect": () => (/* binding */ watchEffect),
/* harmony export */   "withCtx": () => (/* binding */ withCtx),
/* harmony export */   "withDirectives": () => (/* binding */ withDirectives),
/* harmony export */   "withScopeId": () => (/* binding */ withScopeId)
/* harmony export */ });
/* harmony import */ var _vue_reactivity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @vue/reactivity */ "./node_modules/@vue/reactivity/dist/reactivity.esm-bundler.js");
/* harmony import */ var _vue_shared__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @vue/shared */ "./node_modules/@vue/shared/dist/shared.esm-bundler.js");
var _ErrorTypeStrings, _deprecationData;

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }





var stack = [];

function pushWarningContext(vnode) {
  stack.push(vnode);
}

function popWarningContext() {
  stack.pop();
}

function warn(msg) {
  // avoid props formatting or warn handler tracking deps that might be mutated
  // during patch, leading to infinite recursion.
  (0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.pauseTracking)();
  var instance = stack.length ? stack[stack.length - 1].component : null;
  var appWarnHandler = instance && instance.appContext.config.warnHandler;
  var trace = getComponentTrace();

  for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key];
  }

  if (appWarnHandler) {
    callWithErrorHandling(appWarnHandler, instance, 11
    /* APP_WARN_HANDLER */
    , [msg + args.join(''), instance && instance.proxy, trace.map(function (_ref) {
      var vnode = _ref.vnode;
      return "at <".concat(formatComponentName(instance, vnode.type), ">");
    }).join('\n'), trace]);
  } else {
    var _console;

    var warnArgs = ["[Vue warn]: ".concat(msg)].concat(args);
    /* istanbul ignore if */

    if (trace.length && // avoid spamming console during tests
    !false) {
      warnArgs.push.apply(warnArgs, ["\n"].concat(_toConsumableArray(formatTrace(trace))));
    }

    (_console = console).warn.apply(_console, _toConsumableArray(warnArgs));
  }

  (0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.resetTracking)();
}

function getComponentTrace() {
  var currentVNode = stack[stack.length - 1];

  if (!currentVNode) {
    return [];
  } // we can't just use the stack because it will be incomplete during updates
  // that did not start from the root. Re-construct the parent chain using
  // instance parent pointers.


  var normalizedStack = [];

  while (currentVNode) {
    var last = normalizedStack[0];

    if (last && last.vnode === currentVNode) {
      last.recurseCount++;
    } else {
      normalizedStack.push({
        vnode: currentVNode,
        recurseCount: 0
      });
    }

    var parentInstance = currentVNode.component && currentVNode.component.parent;
    currentVNode = parentInstance && parentInstance.vnode;
  }

  return normalizedStack;
}
/* istanbul ignore next */


function formatTrace(trace) {
  var logs = [];
  trace.forEach(function (entry, i) {
    logs.push.apply(logs, _toConsumableArray(i === 0 ? [] : ["\n"]).concat(_toConsumableArray(formatTraceEntry(entry))));
  });
  return logs;
}

function formatTraceEntry(_ref2) {
  var vnode = _ref2.vnode,
      recurseCount = _ref2.recurseCount;
  var postfix = recurseCount > 0 ? "... (".concat(recurseCount, " recursive calls)") : "";
  var isRoot = vnode.component ? vnode.component.parent == null : false;
  var open = " at <".concat(formatComponentName(vnode.component, vnode.type, isRoot));
  var close = ">" + postfix;
  return vnode.props ? [open].concat(_toConsumableArray(formatProps(vnode.props)), [close]) : [open + close];
}
/* istanbul ignore next */


function formatProps(props) {
  var res = [];
  var keys = Object.keys(props);
  keys.slice(0, 3).forEach(function (key) {
    res.push.apply(res, _toConsumableArray(formatProp(key, props[key])));
  });

  if (keys.length > 3) {
    res.push(" ...");
  }

  return res;
}
/* istanbul ignore next */


function formatProp(key, value, raw) {
  if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isString)(value)) {
    value = JSON.stringify(value);
    return raw ? value : ["".concat(key, "=").concat(value)];
  } else if (typeof value === 'number' || typeof value === 'boolean' || value == null) {
    return raw ? value : ["".concat(key, "=").concat(value)];
  } else if ((0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.isRef)(value)) {
    value = formatProp(key, (0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.toRaw)(value.value), true);
    return raw ? value : ["".concat(key, "=Ref<"), value, ">"];
  } else if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isFunction)(value)) {
    return ["".concat(key, "=fn").concat(value.name ? "<".concat(value.name, ">") : "")];
  } else {
    value = (0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.toRaw)(value);
    return raw ? value : ["".concat(key, "="), value];
  }
}

var ErrorTypeStrings = (_ErrorTypeStrings = {}, _defineProperty(_ErrorTypeStrings, "bc"
/* BEFORE_CREATE */
, 'beforeCreate hook'), _defineProperty(_ErrorTypeStrings, "c"
/* CREATED */
, 'created hook'), _defineProperty(_ErrorTypeStrings, "bm"
/* BEFORE_MOUNT */
, 'beforeMount hook'), _defineProperty(_ErrorTypeStrings, "m"
/* MOUNTED */
, 'mounted hook'), _defineProperty(_ErrorTypeStrings, "bu"
/* BEFORE_UPDATE */
, 'beforeUpdate hook'), _defineProperty(_ErrorTypeStrings, "u"
/* UPDATED */
, 'updated'), _defineProperty(_ErrorTypeStrings, "bum"
/* BEFORE_UNMOUNT */
, 'beforeUnmount hook'), _defineProperty(_ErrorTypeStrings, "um"
/* UNMOUNTED */
, 'unmounted hook'), _defineProperty(_ErrorTypeStrings, "a"
/* ACTIVATED */
, 'activated hook'), _defineProperty(_ErrorTypeStrings, "da"
/* DEACTIVATED */
, 'deactivated hook'), _defineProperty(_ErrorTypeStrings, "ec"
/* ERROR_CAPTURED */
, 'errorCaptured hook'), _defineProperty(_ErrorTypeStrings, "rtc"
/* RENDER_TRACKED */
, 'renderTracked hook'), _defineProperty(_ErrorTypeStrings, "rtg"
/* RENDER_TRIGGERED */
, 'renderTriggered hook'), _defineProperty(_ErrorTypeStrings, 0
/* SETUP_FUNCTION */
, 'setup function'), _defineProperty(_ErrorTypeStrings, 1
/* RENDER_FUNCTION */
, 'render function'), _defineProperty(_ErrorTypeStrings, 2
/* WATCH_GETTER */
, 'watcher getter'), _defineProperty(_ErrorTypeStrings, 3
/* WATCH_CALLBACK */
, 'watcher callback'), _defineProperty(_ErrorTypeStrings, 4
/* WATCH_CLEANUP */
, 'watcher cleanup function'), _defineProperty(_ErrorTypeStrings, 5
/* NATIVE_EVENT_HANDLER */
, 'native event handler'), _defineProperty(_ErrorTypeStrings, 6
/* COMPONENT_EVENT_HANDLER */
, 'component event handler'), _defineProperty(_ErrorTypeStrings, 7
/* VNODE_HOOK */
, 'vnode hook'), _defineProperty(_ErrorTypeStrings, 8
/* DIRECTIVE_HOOK */
, 'directive hook'), _defineProperty(_ErrorTypeStrings, 9
/* TRANSITION_HOOK */
, 'transition hook'), _defineProperty(_ErrorTypeStrings, 10
/* APP_ERROR_HANDLER */
, 'app errorHandler'), _defineProperty(_ErrorTypeStrings, 11
/* APP_WARN_HANDLER */
, 'app warnHandler'), _defineProperty(_ErrorTypeStrings, 12
/* FUNCTION_REF */
, 'ref function'), _defineProperty(_ErrorTypeStrings, 13
/* ASYNC_COMPONENT_LOADER */
, 'async component loader'), _defineProperty(_ErrorTypeStrings, 14
/* SCHEDULER */
, 'scheduler flush. This is likely a Vue internals bug. ' + 'Please open an issue at https://new-issue.vuejs.org/?repo=vuejs/vue-next'), _ErrorTypeStrings);

function callWithErrorHandling(fn, instance, type, args) {
  var res;

  try {
    res = args ? fn.apply(void 0, _toConsumableArray(args)) : fn();
  } catch (err) {
    handleError(err, instance, type);
  }

  return res;
}

function callWithAsyncErrorHandling(fn, instance, type, args) {
  if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isFunction)(fn)) {
    var res = callWithErrorHandling(fn, instance, type, args);

    if (res && (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isPromise)(res)) {
      res["catch"](function (err) {
        handleError(err, instance, type);
      });
    }

    return res;
  }

  var values = [];

  for (var i = 0; i < fn.length; i++) {
    values.push(callWithAsyncErrorHandling(fn[i], instance, type, args));
  }

  return values;
}

function handleError(err, instance, type) {
  var throwInDev = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : true;
  var contextVNode = instance ? instance.vnode : null;

  if (instance) {
    var cur = instance.parent; // the exposed instance is the render proxy to keep it consistent with 2.x

    var exposedInstance = instance.proxy; // in production the hook receives only the error code

    var errorInfo =  true ? ErrorTypeStrings[type] : 0;

    while (cur) {
      var errorCapturedHooks = cur.ec;

      if (errorCapturedHooks) {
        for (var i = 0; i < errorCapturedHooks.length; i++) {
          if (errorCapturedHooks[i](err, exposedInstance, errorInfo) === false) {
            return;
          }
        }
      }

      cur = cur.parent;
    } // app-level handling


    var appErrorHandler = instance.appContext.config.errorHandler;

    if (appErrorHandler) {
      callWithErrorHandling(appErrorHandler, null, 10
      /* APP_ERROR_HANDLER */
      , [err, exposedInstance, errorInfo]);
      return;
    }
  }

  logError(err, type, contextVNode, throwInDev);
}

function logError(err, type, contextVNode) {
  var throwInDev = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : true;

  if (true) {
    var info = ErrorTypeStrings[type];

    if (contextVNode) {
      pushWarningContext(contextVNode);
    }

    warn("Unhandled error".concat(info ? " during execution of ".concat(info) : ""));

    if (contextVNode) {
      popWarningContext();
    } // crash in dev by default so it's more noticeable


    if (throwInDev) {
      throw err;
    } else {
      console.error(err);
    }
  } else {}
}

var isFlushing = false;
var isFlushPending = false;
var queue = [];
var flushIndex = 0;
var pendingPreFlushCbs = [];
var activePreFlushCbs = null;
var preFlushIndex = 0;
var pendingPostFlushCbs = [];
var activePostFlushCbs = null;
var postFlushIndex = 0;
var resolvedPromise = Promise.resolve();
var currentFlushPromise = null;
var currentPreFlushParentJob = null;
var RECURSION_LIMIT = 100;

function nextTick(fn) {
  var p = currentFlushPromise || resolvedPromise;
  return fn ? p.then(this ? fn.bind(this) : fn) : p;
} // #2768
// Use binary-search to find a suitable position in the queue,
// so that the queue maintains the increasing order of job's id,
// which can prevent the job from being skipped and also can avoid repeated patching.


function findInsertionIndex(job) {
  // the start index should be `flushIndex + 1`
  var start = flushIndex + 1;
  var end = queue.length;
  var jobId = getId(job);

  while (start < end) {
    var middle = start + end >>> 1;
    var middleJobId = getId(queue[middle]);
    middleJobId < jobId ? start = middle + 1 : end = middle;
  }

  return start;
}

function queueJob(job) {
  // the dedupe search uses the startIndex argument of Array.includes()
  // by default the search index includes the current job that is being run
  // so it cannot recursively trigger itself again.
  // if the job is a watch() callback, the search will start with a +1 index to
  // allow it recursively trigger itself - it is the user's responsibility to
  // ensure it doesn't end up in an infinite loop.
  if ((!queue.length || !queue.includes(job, isFlushing && job.allowRecurse ? flushIndex + 1 : flushIndex)) && job !== currentPreFlushParentJob) {
    var pos = findInsertionIndex(job);

    if (pos > -1) {
      queue.splice(pos, 0, job);
    } else {
      queue.push(job);
    }

    queueFlush();
  }
}

function queueFlush() {
  if (!isFlushing && !isFlushPending) {
    isFlushPending = true;
    currentFlushPromise = resolvedPromise.then(flushJobs);
  }
}

function invalidateJob(job) {
  var i = queue.indexOf(job);

  if (i > flushIndex) {
    queue.splice(i, 1);
  }
}

function queueCb(cb, activeQueue, pendingQueue, index) {
  if (!(0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isArray)(cb)) {
    if (!activeQueue || !activeQueue.includes(cb, cb.allowRecurse ? index + 1 : index)) {
      pendingQueue.push(cb);
    }
  } else {
    // if cb is an array, it is a component lifecycle hook which can only be
    // triggered by a job, which is already deduped in the main queue, so
    // we can skip duplicate check here to improve perf
    pendingQueue.push.apply(pendingQueue, _toConsumableArray(cb));
  }

  queueFlush();
}

function queuePreFlushCb(cb) {
  queueCb(cb, activePreFlushCbs, pendingPreFlushCbs, preFlushIndex);
}

function queuePostFlushCb(cb) {
  queueCb(cb, activePostFlushCbs, pendingPostFlushCbs, postFlushIndex);
}

function flushPreFlushCbs(seen) {
  var parentJob = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

  if (pendingPreFlushCbs.length) {
    currentPreFlushParentJob = parentJob;
    activePreFlushCbs = _toConsumableArray(new Set(pendingPreFlushCbs));
    pendingPreFlushCbs.length = 0;

    if (true) {
      seen = seen || new Map();
    }

    for (preFlushIndex = 0; preFlushIndex < activePreFlushCbs.length; preFlushIndex++) {
      if ( true && checkRecursiveUpdates(seen, activePreFlushCbs[preFlushIndex])) {
        continue;
      }

      activePreFlushCbs[preFlushIndex]();
    }

    activePreFlushCbs = null;
    preFlushIndex = 0;
    currentPreFlushParentJob = null; // recursively flush until it drains

    flushPreFlushCbs(seen, parentJob);
  }
}

function flushPostFlushCbs(seen) {
  if (pendingPostFlushCbs.length) {
    var deduped = _toConsumableArray(new Set(pendingPostFlushCbs));

    pendingPostFlushCbs.length = 0; // #1947 already has active queue, nested flushPostFlushCbs call

    if (activePostFlushCbs) {
      var _activePostFlushCbs;

      (_activePostFlushCbs = activePostFlushCbs).push.apply(_activePostFlushCbs, _toConsumableArray(deduped));

      return;
    }

    activePostFlushCbs = deduped;

    if (true) {
      seen = seen || new Map();
    }

    activePostFlushCbs.sort(function (a, b) {
      return getId(a) - getId(b);
    });

    for (postFlushIndex = 0; postFlushIndex < activePostFlushCbs.length; postFlushIndex++) {
      if ( true && checkRecursiveUpdates(seen, activePostFlushCbs[postFlushIndex])) {
        continue;
      }

      activePostFlushCbs[postFlushIndex]();
    }

    activePostFlushCbs = null;
    postFlushIndex = 0;
  }
}

var getId = function getId(job) {
  return job.id == null ? Infinity : job.id;
};

function flushJobs(seen) {
  isFlushPending = false;
  isFlushing = true;

  if (true) {
    seen = seen || new Map();
  }

  flushPreFlushCbs(seen); // Sort queue before flush.
  // This ensures that:
  // 1. Components are updated from parent to child. (because parent is always
  //    created before the child so its render effect will have smaller
  //    priority number)
  // 2. If a component is unmounted during a parent component's update,
  //    its update can be skipped.

  queue.sort(function (a, b) {
    return getId(a) - getId(b);
  });

  try {
    for (flushIndex = 0; flushIndex < queue.length; flushIndex++) {
      var job = queue[flushIndex];

      if (job && job.active !== false) {
        if ( true && checkRecursiveUpdates(seen, job)) {
          continue;
        }

        callWithErrorHandling(job, null, 14
        /* SCHEDULER */
        );
      }
    }
  } finally {
    flushIndex = 0;
    queue.length = 0;
    flushPostFlushCbs(seen);
    isFlushing = false;
    currentFlushPromise = null; // some postFlushCb queued jobs!
    // keep flushing until it drains.

    if (queue.length || pendingPreFlushCbs.length || pendingPostFlushCbs.length) {
      flushJobs(seen);
    }
  }
}

function checkRecursiveUpdates(seen, fn) {
  if (!seen.has(fn)) {
    seen.set(fn, 1);
  } else {
    var count = seen.get(fn);

    if (count > RECURSION_LIMIT) {
      var instance = fn.ownerInstance;
      var componentName = instance && getComponentName(instance.type);
      warn("Maximum recursive updates exceeded".concat(componentName ? " in component <".concat(componentName, ">") : "", ". ") + "This means you have a reactive effect that is mutating its own " + "dependencies and thus recursively triggering itself. Possible sources " + "include component template, render function, updated hook or " + "watcher source function.");
      return true;
    } else {
      seen.set(fn, count + 1);
    }
  }
}
/* eslint-disable no-restricted-globals */


var isHmrUpdating = false;
var hmrDirtyComponents = new Set(); // Expose the HMR runtime on the global object
// This makes it entirely tree-shakable without polluting the exports and makes
// it easier to be used in toolings like vue-loader
// Note: for a component to be eligible for HMR it also needs the __hmrId option
// to be set so that its instances can be registered / removed.

if (true) {
  var globalObject = typeof __webpack_require__.g !== 'undefined' ? __webpack_require__.g : typeof self !== 'undefined' ? self : typeof window !== 'undefined' ? window : {};
  globalObject.__VUE_HMR_RUNTIME__ = {
    createRecord: tryWrap(createRecord),
    rerender: tryWrap(rerender),
    reload: tryWrap(reload)
  };
}

var map = new Map();

function registerHMR(instance) {
  var id = instance.type.__hmrId;
  var record = map.get(id);

  if (!record) {
    createRecord(id, instance.type);
    record = map.get(id);
  }

  record.instances.add(instance);
}

function unregisterHMR(instance) {
  map.get(instance.type.__hmrId).instances["delete"](instance);
}

function createRecord(id, component) {
  if (!component) {
    warn("HMR API usage is out of date.\n" + "Please upgrade vue-loader/vite/rollup-plugin-vue or other relevant " + "dependency that handles Vue SFC compilation.");
    component = {};
  }

  if (map.has(id)) {
    return false;
  }

  map.set(id, {
    component: isClassComponent(component) ? component.__vccOpts : component,
    instances: new Set()
  });
  return true;
}

function rerender(id, newRender) {
  var record = map.get(id);
  if (!record) return;
  if (newRender) record.component.render = newRender; // Array.from creates a snapshot which avoids the set being mutated during
  // updates

  Array.from(record.instances).forEach(function (instance) {
    if (newRender) {
      instance.render = newRender;
    }

    instance.renderCache = []; // this flag forces child components with slot content to update

    isHmrUpdating = true;
    instance.update();
    isHmrUpdating = false;
  });
}

function reload(id, newComp) {
  var record = map.get(id);
  if (!record) return; // Array.from creates a snapshot which avoids the set being mutated during
  // updates

  var component = record.component,
      instances = record.instances;

  if (!hmrDirtyComponents.has(component)) {
    // 1. Update existing comp definition to match new one
    newComp = isClassComponent(newComp) ? newComp.__vccOpts : newComp;
    (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.extend)(component, newComp);

    for (var key in component) {
      if (key !== '__file' && !(key in newComp)) {
        delete component[key];
      }
    } // 2. Mark component dirty. This forces the renderer to replace the component
    // on patch.


    hmrDirtyComponents.add(component); // 3. Make sure to unmark the component after the reload.

    queuePostFlushCb(function () {
      hmrDirtyComponents["delete"](component);
    });
  }

  Array.from(instances).forEach(function (instance) {
    if (instance.parent) {
      // 4. Force the parent instance to re-render. This will cause all updated
      // components to be unmounted and re-mounted. Queue the update so that we
      // don't end up forcing the same parent to re-render multiple times.
      queueJob(instance.parent.update);
    } else if (instance.appContext.reload) {
      // root instance mounted via createApp() has a reload method
      instance.appContext.reload();
    } else if (typeof window !== 'undefined') {
      // root instance inside tree created via raw render(). Force reload.
      window.location.reload();
    } else {
      console.warn('[HMR] Root or manually mounted instance modified. Full reload required.');
    }
  });
}

function tryWrap(fn) {
  return function (id, arg) {
    try {
      return fn(id, arg);
    } catch (e) {
      console.error(e);
      console.warn("[HMR] Something went wrong during Vue component hot-reload. " + "Full reload required.");
    }
  };
}

var devtools;

function setDevtoolsHook(hook) {
  devtools = hook;
}

function devtoolsInitApp(app, version) {
  // TODO queue if devtools is undefined
  if (!devtools) return;
  devtools.emit("app:init"
  /* APP_INIT */
  , app, version, {
    Fragment: Fragment,
    Text: Text,
    Comment: Comment$1,
    Static: Static
  });
}

function devtoolsUnmountApp(app) {
  if (!devtools) return;
  devtools.emit("app:unmount"
  /* APP_UNMOUNT */
  , app);
}

var devtoolsComponentAdded = /*#__PURE__*/createDevtoolsComponentHook("component:added"
/* COMPONENT_ADDED */
);
var devtoolsComponentUpdated = /*#__PURE__*/createDevtoolsComponentHook("component:updated"
/* COMPONENT_UPDATED */
);
var devtoolsComponentRemoved = /*#__PURE__*/createDevtoolsComponentHook("component:removed"
/* COMPONENT_REMOVED */
);

function createDevtoolsComponentHook(hook) {
  return function (component) {
    if (!devtools) return;
    devtools.emit(hook, component.appContext.app, component.uid, component.parent ? component.parent.uid : undefined, component);
  };
}

var devtoolsPerfStart = /*#__PURE__*/createDevtoolsPerformanceHook("perf:start"
/* PERFORMANCE_START */
);
var devtoolsPerfEnd = /*#__PURE__*/createDevtoolsPerformanceHook("perf:end"
/* PERFORMANCE_END */
);

function createDevtoolsPerformanceHook(hook) {
  return function (component, type, time) {
    if (!devtools) return;
    devtools.emit(hook, component.appContext.app, component.uid, component, type, time);
  };
}

function devtoolsComponentEmit(component, event, params) {
  if (!devtools) return;
  devtools.emit("component:emit"
  /* COMPONENT_EMIT */
  , component.appContext.app, component, event, params);
}

var deprecationData = (_deprecationData = {}, _defineProperty(_deprecationData, "GLOBAL_MOUNT"
/* GLOBAL_MOUNT */
, {
  message: "The global app bootstrapping API has changed: vm.$mount() and the \"el\" " + "option have been removed. Use createApp(RootComponent).mount() instead.",
  link: "https://v3.vuejs.org/guide/migration/global-api.html#mounting-app-instance"
}), _defineProperty(_deprecationData, "GLOBAL_MOUNT_CONTAINER"
/* GLOBAL_MOUNT_CONTAINER */
, {
  message: "Vue detected directives on the mount container. " + "In Vue 3, the container is no longer considered part of the template " + "and will not be processed/replaced.",
  link: "https://v3.vuejs.org/guide/migration/mount-changes.html"
}), _defineProperty(_deprecationData, "GLOBAL_EXTEND"
/* GLOBAL_EXTEND */
, {
  message: "Vue.extend() has been removed in Vue 3. " + "Use defineComponent() instead.",
  link: "https://v3.vuejs.org/api/global-api.html#definecomponent"
}), _defineProperty(_deprecationData, "GLOBAL_PROTOTYPE"
/* GLOBAL_PROTOTYPE */
, {
  message: "Vue.prototype is no longer available in Vue 3. " + "Use app.config.globalProperties instead.",
  link: "https://v3.vuejs.org/guide/migration/global-api.html#vue-prototype-replaced-by-config-globalproperties"
}), _defineProperty(_deprecationData, "GLOBAL_SET"
/* GLOBAL_SET */
, {
  message: "Vue.set() has been removed as it is no longer needed in Vue 3. " + "Simply use native JavaScript mutations."
}), _defineProperty(_deprecationData, "GLOBAL_DELETE"
/* GLOBAL_DELETE */
, {
  message: "Vue.delete() has been removed as it is no longer needed in Vue 3. " + "Simply use native JavaScript mutations."
}), _defineProperty(_deprecationData, "GLOBAL_OBSERVABLE"
/* GLOBAL_OBSERVABLE */
, {
  message: "Vue.observable() has been removed. " + "Use `import { reactive } from \"vue\"` from Composition API instead.",
  link: "https://v3.vuejs.org/api/basic-reactivity.html"
}), _defineProperty(_deprecationData, "GLOBAL_PRIVATE_UTIL"
/* GLOBAL_PRIVATE_UTIL */
, {
  message: "Vue.util has been removed. Please refactor to avoid its usage " + "since it was an internal API even in Vue 2."
}), _defineProperty(_deprecationData, "CONFIG_SILENT"
/* CONFIG_SILENT */
, {
  message: "config.silent has been removed because it is not good practice to " + "intentionally suppress warnings. You can use your browser console's " + "filter features to focus on relevant messages."
}), _defineProperty(_deprecationData, "CONFIG_DEVTOOLS"
/* CONFIG_DEVTOOLS */
, {
  message: "config.devtools has been removed. To enable devtools for " + "production, configure the __VUE_PROD_DEVTOOLS__ compile-time flag.",
  link: "https://github.com/vuejs/vue-next/tree/master/packages/vue#bundler-build-feature-flags"
}), _defineProperty(_deprecationData, "CONFIG_KEY_CODES"
/* CONFIG_KEY_CODES */
, {
  message: "config.keyCodes has been removed. " + "In Vue 3, you can directly use the kebab-case key names as v-on modifiers.",
  link: "https://v3.vuejs.org/guide/migration/keycode-modifiers.html"
}), _defineProperty(_deprecationData, "CONFIG_PRODUCTION_TIP"
/* CONFIG_PRODUCTION_TIP */
, {
  message: "config.productionTip has been removed.",
  link: "https://v3.vuejs.org/guide/migration/global-api.html#config-productiontip-removed"
}), _defineProperty(_deprecationData, "CONFIG_IGNORED_ELEMENTS"
/* CONFIG_IGNORED_ELEMENTS */
, {
  message: function message() {
    var msg = "config.ignoredElements has been removed.";

    if (isRuntimeOnly()) {
      msg += " Pass the \"isCustomElement\" option to @vue/compiler-dom instead.";
    } else {
      msg += " Use config.isCustomElement instead.";
    }

    return msg;
  },
  link: "https://v3.vuejs.org/guide/migration/global-api.html#config-ignoredelements-is-now-config-iscustomelement"
}), _defineProperty(_deprecationData, "CONFIG_WHITESPACE"
/* CONFIG_WHITESPACE */
, {
  // this warning is only relevant in the full build when using runtime
  // compilation, so it's put in the runtime compatConfig list.
  message: "Vue 3 compiler's whitespace option will default to \"condense\" instead of " + "\"preserve\". To suppress this warning, provide an explicit value for " + "`config.compilerOptions.whitespace`."
}), _defineProperty(_deprecationData, "CONFIG_OPTION_MERGE_STRATS"
/* CONFIG_OPTION_MERGE_STRATS */
, {
  message: "config.optionMergeStrategies no longer exposes internal strategies. " + "Use custom merge functions instead."
}), _defineProperty(_deprecationData, "INSTANCE_SET"
/* INSTANCE_SET */
, {
  message: "vm.$set() has been removed as it is no longer needed in Vue 3. " + "Simply use native JavaScript mutations."
}), _defineProperty(_deprecationData, "INSTANCE_DELETE"
/* INSTANCE_DELETE */
, {
  message: "vm.$delete() has been removed as it is no longer needed in Vue 3. " + "Simply use native JavaScript mutations."
}), _defineProperty(_deprecationData, "INSTANCE_DESTROY"
/* INSTANCE_DESTROY */
, {
  message: "vm.$destroy() has been removed. Use app.unmount() instead.",
  link: "https://v3.vuejs.org/api/application-api.html#unmount"
}), _defineProperty(_deprecationData, "INSTANCE_EVENT_EMITTER"
/* INSTANCE_EVENT_EMITTER */
, {
  message: "vm.$on/$once/$off() have been removed. " + "Use an external event emitter library instead.",
  link: "https://v3.vuejs.org/guide/migration/events-api.html"
}), _defineProperty(_deprecationData, "INSTANCE_EVENT_HOOKS"
/* INSTANCE_EVENT_HOOKS */
, {
  message: function message(event) {
    return "\"".concat(event, "\" lifecycle events are no longer supported. From templates, ") + "use the \"vnode\" prefix instead of \"hook:\". For example, @".concat(event, " ") + "should be changed to @vnode-".concat(event.slice(5), ". ") + "From JavaScript, use Composition API to dynamically register lifecycle " + "hooks.";
  },
  link: "https://v3.vuejs.org/guide/migration/vnode-lifecycle-events.html"
}), _defineProperty(_deprecationData, "INSTANCE_CHILDREN"
/* INSTANCE_CHILDREN */
, {
  message: "vm.$children has been removed. Consider refactoring your logic " + "to avoid relying on direct access to child components.",
  link: "https://v3.vuejs.org/guide/migration/children.html"
}), _defineProperty(_deprecationData, "INSTANCE_LISTENERS"
/* INSTANCE_LISTENERS */
, {
  message: "vm.$listeners has been removed. In Vue 3, parent v-on listeners are " + "included in vm.$attrs and it is no longer necessary to separately use " + "v-on=\"$listeners\" if you are already using v-bind=\"$attrs\". " + "(Note: the Vue 3 behavior only applies if this compat config is disabled)",
  link: "https://v3.vuejs.org/guide/migration/listeners-removed.html"
}), _defineProperty(_deprecationData, "INSTANCE_SCOPED_SLOTS"
/* INSTANCE_SCOPED_SLOTS */
, {
  message: "vm.$scopedSlots has been removed. Use vm.$slots instead.",
  link: "https://v3.vuejs.org/guide/migration/slots-unification.html"
}), _defineProperty(_deprecationData, "INSTANCE_ATTRS_CLASS_STYLE"
/* INSTANCE_ATTRS_CLASS_STYLE */
, {
  message: function message(componentName) {
    return "Component <".concat(componentName || 'Anonymous', "> has `inheritAttrs: false` but is ") + "relying on class/style fallthrough from parent. In Vue 3, class/style " + "are now included in $attrs and will no longer fallthrough when " + "inheritAttrs is false. If you are already using v-bind=\"$attrs\" on " + "component root it should render the same end result. " + "If you are binding $attrs to a non-root element and expecting " + "class/style to fallthrough on root, you will need to now manually bind " + "them on root via :class=\"$attrs.class\".";
  },
  link: "https://v3.vuejs.org/guide/migration/attrs-includes-class-style.html"
}), _defineProperty(_deprecationData, "OPTIONS_DATA_FN"
/* OPTIONS_DATA_FN */
, {
  message: "The \"data\" option can no longer be a plain object. " + "Always use a function.",
  link: "https://v3.vuejs.org/guide/migration/data-option.html"
}), _defineProperty(_deprecationData, "OPTIONS_DATA_MERGE"
/* OPTIONS_DATA_MERGE */
, {
  message: function message(key) {
    return "Detected conflicting key \"".concat(key, "\" when merging data option values. ") + "In Vue 3, data keys are merged shallowly and will override one another.";
  },
  link: "https://v3.vuejs.org/guide/migration/data-option.html#mixin-merge-behavior-change"
}), _defineProperty(_deprecationData, "OPTIONS_BEFORE_DESTROY"
/* OPTIONS_BEFORE_DESTROY */
, {
  message: "`beforeDestroy` has been renamed to `beforeUnmount`."
}), _defineProperty(_deprecationData, "OPTIONS_DESTROYED"
/* OPTIONS_DESTROYED */
, {
  message: "`destroyed` has been renamed to `unmounted`."
}), _defineProperty(_deprecationData, "WATCH_ARRAY"
/* WATCH_ARRAY */
, {
  message: "\"watch\" option or vm.$watch on an array value will no longer " + "trigger on array mutation unless the \"deep\" option is specified. " + "If current usage is intended, you can disable the compat behavior and " + "suppress this warning with:" + "\n\n  configureCompat({ ".concat("WATCH_ARRAY"
  /* WATCH_ARRAY */
  , ": false })\n"),
  link: "https://v3.vuejs.org/guide/migration/watch.html"
}), _defineProperty(_deprecationData, "PROPS_DEFAULT_THIS"
/* PROPS_DEFAULT_THIS */
, {
  message: function message(key) {
    return "props default value function no longer has access to \"this\". The compat " + "build only offers access to this.$options." + "(found in prop \"".concat(key, "\")");
  },
  link: "https://v3.vuejs.org/guide/migration/props-default-this.html"
}), _defineProperty(_deprecationData, "CUSTOM_DIR"
/* CUSTOM_DIR */
, {
  message: function message(legacyHook, newHook) {
    return "Custom directive hook \"".concat(legacyHook, "\" has been removed. ") + "Use \"".concat(newHook, "\" instead.");
  },
  link: "https://v3.vuejs.org/guide/migration/custom-directives.html"
}), _defineProperty(_deprecationData, "V_FOR_REF"
/* V_FOR_REF */
, {
  message: "Ref usage on v-for no longer creates array ref values in Vue 3. " + "Consider using function refs or refactor to avoid ref usage altogether.",
  link: "https://v3.vuejs.org/guide/migration/array-refs.html"
}), _defineProperty(_deprecationData, "V_ON_KEYCODE_MODIFIER"
/* V_ON_KEYCODE_MODIFIER */
, {
  message: "Using keyCode as v-on modifier is no longer supported. " + "Use kebab-case key name modifiers instead.",
  link: "https://v3.vuejs.org/guide/migration/keycode-modifiers.html"
}), _defineProperty(_deprecationData, "ATTR_FALSE_VALUE"
/* ATTR_FALSE_VALUE */
, {
  message: function message(name) {
    return "Attribute \"".concat(name, "\" with v-bind value `false` will render ") + "".concat(name, "=\"false\" instead of removing it in Vue 3. To remove the attribute, ") + "use `null` or `undefined` instead. If the usage is intended, " + "you can disable the compat behavior and suppress this warning with:" + "\n\n  configureCompat({ ".concat("ATTR_FALSE_VALUE"
    /* ATTR_FALSE_VALUE */
    , ": false })\n");
  },
  link: "https://v3.vuejs.org/guide/migration/attribute-coercion.html"
}), _defineProperty(_deprecationData, "ATTR_ENUMERATED_COERCION"
/* ATTR_ENUMERATED_COERCION */
, {
  message: function message(name, value, coerced) {
    return "Enumerated attribute \"".concat(name, "\" with v-bind value `").concat(value, "` will ") + "".concat(value === null ? "be removed" : "render the value as-is", " instead of coercing the value to \"").concat(coerced, "\" in Vue 3. ") + "Always use explicit \"true\" or \"false\" values for enumerated attributes. " + "If the usage is intended, " + "you can disable the compat behavior and suppress this warning with:" + "\n\n  configureCompat({ ".concat("ATTR_ENUMERATED_COERCION"
    /* ATTR_ENUMERATED_COERCION */
    , ": false })\n");
  },
  link: "https://v3.vuejs.org/guide/migration/attribute-coercion.html"
}), _defineProperty(_deprecationData, "TRANSITION_CLASSES"
/* TRANSITION_CLASSES */
, {
  message: "" // this feature cannot be runtime-detected

}), _defineProperty(_deprecationData, "TRANSITION_GROUP_ROOT"
/* TRANSITION_GROUP_ROOT */
, {
  message: "<TransitionGroup> no longer renders a root <span> element by " + "default if no \"tag\" prop is specified. If you do not rely on the span " + "for styling, you can disable the compat behavior and suppress this " + "warning with:" + "\n\n  configureCompat({ ".concat("TRANSITION_GROUP_ROOT"
  /* TRANSITION_GROUP_ROOT */
  , ": false })\n"),
  link: "https://v3.vuejs.org/guide/migration/transition-group.html"
}), _defineProperty(_deprecationData, "COMPONENT_ASYNC"
/* COMPONENT_ASYNC */
, {
  message: function message(comp) {
    var name = getComponentName(comp);
    return "Async component".concat(name ? " <".concat(name, ">") : "s", " should be explicitly created via `defineAsyncComponent()` ") + "in Vue 3. Plain functions will be treated as functional components in " + "non-compat build. If you have already migrated all async component " + "usage and intend to use plain functions for functional components, " + "you can disable the compat behavior and suppress this " + "warning with:" + "\n\n  configureCompat({ ".concat("COMPONENT_ASYNC"
    /* COMPONENT_ASYNC */
    , ": false })\n");
  },
  link: "https://v3.vuejs.org/guide/migration/async-components.html"
}), _defineProperty(_deprecationData, "COMPONENT_FUNCTIONAL"
/* COMPONENT_FUNCTIONAL */
, {
  message: function message(comp) {
    var name = getComponentName(comp);
    return "Functional component".concat(name ? " <".concat(name, ">") : "s", " should be defined as a plain function in Vue 3. The \"functional\" ") + "option has been removed. NOTE: Before migrating to use plain " + "functions for functional components, first make sure that all async " + "components usage have been migrated and its compat behavior has " + "been disabled.";
  },
  link: "https://v3.vuejs.org/guide/migration/functional-components.html"
}), _defineProperty(_deprecationData, "COMPONENT_V_MODEL"
/* COMPONENT_V_MODEL */
, {
  message: function message(comp) {
    var configMsg = "opt-in to " + "Vue 3 behavior on a per-component basis with `compatConfig: { ".concat("COMPONENT_V_MODEL"
    /* COMPONENT_V_MODEL */
    , ": false }`.");

    if (comp.props && (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isArray)(comp.props) ? comp.props.includes('modelValue') : (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.hasOwn)(comp.props, 'modelValue')) {
      return "Component delcares \"modelValue\" prop, which is Vue 3 usage, but " + "is running under Vue 2 compat v-model behavior. You can ".concat(configMsg);
    }

    return "v-model usage on component has changed in Vue 3. Component that expects " + "to work with v-model should now use the \"modelValue\" prop and emit the " + "\"update:modelValue\" event. You can update the usage and then ".concat(configMsg);
  },
  link: "https://v3.vuejs.org/guide/migration/v-model.html"
}), _defineProperty(_deprecationData, "RENDER_FUNCTION"
/* RENDER_FUNCTION */
, {
  message: "Vue 3's render function API has changed. " + "You can opt-in to the new API with:" + "\n\n  configureCompat({ ".concat("RENDER_FUNCTION"
  /* RENDER_FUNCTION */
  , ": false })\n") + "\n  (This can also be done per-component via the \"compatConfig\" option.)",
  link: "https://v3.vuejs.org/guide/migration/render-function-api.html"
}), _defineProperty(_deprecationData, "FILTERS"
/* FILTERS */
, {
  message: "filters have been removed in Vue 3. " + "The \"|\" symbol will be treated as native JavaScript bitwise OR operator. " + "Use method calls or computed properties instead.",
  link: "https://v3.vuejs.org/guide/migration/filters.html"
}), _defineProperty(_deprecationData, "PRIVATE_APIS"
/* PRIVATE_APIS */
, {
  message: function message(name) {
    return "\"".concat(name, "\" is a Vue 2 private API that no longer exists in Vue 3. ") + "If you are seeing this warning only due to a dependency, you can " + "suppress this warning via { PRIVATE_APIS: 'supress-warning' }.";
  }
}), _deprecationData);
var instanceWarned = Object.create(null);
var warnCount = Object.create(null);

function warnDeprecation(key, instance) {
  if (false) {}

  instance = instance || getCurrentInstance(); // check user config

  var config = getCompatConfigForKey(key, instance);

  if (config === 'suppress-warning') {
    return;
  }

  for (var _len2 = arguments.length, args = new Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
    args[_key2 - 2] = arguments[_key2];
  }

  var dupKey = key + args.join('');
  var compId = instance && formatComponentName(instance, instance.type);

  if (compId === 'Anonymous' && instance) {
    compId = instance.uid;
  } // skip if the same warning is emitted for the same component type


  var componentDupKey = dupKey + compId;

  if (componentDupKey in instanceWarned) {
    return;
  }

  instanceWarned[componentDupKey] = true; // same warning, but different component. skip the long message and just
  // log the key and count.

  if (dupKey in warnCount) {
    warn("(deprecation ".concat(key, ") (").concat(++warnCount[dupKey] + 1, ")"));
    return;
  }

  warnCount[dupKey] = 0;
  var _deprecationData$key = deprecationData[key],
      message = _deprecationData$key.message,
      link = _deprecationData$key.link;
  warn("(deprecation ".concat(key, ") ").concat(typeof message === 'function' ? message.apply(void 0, args) : message).concat(link ? "\n  Details: ".concat(link) : ""));

  if (!isCompatEnabled(key, instance, true)) {
    console.error("^ The above deprecation's compat behavior is disabled and will likely " + "lead to runtime errors.");
  }
}

var globalCompatConfig = {
  MODE: 2
};

function getCompatConfigForKey(key, instance) {
  var instanceConfig = instance && instance.type.compatConfig;

  if (instanceConfig && key in instanceConfig) {
    return instanceConfig[key];
  }

  return globalCompatConfig[key];
}

function isCompatEnabled(key, instance) {
  var enableForBuiltIn = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

  // skip compat for built-in components
  if (!enableForBuiltIn && instance && instance.type.__isBuiltIn) {
    return false;
  }

  var rawMode = getCompatConfigForKey('MODE', instance) || 2;
  var val = getCompatConfigForKey(key, instance);
  var mode = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isFunction)(rawMode) ? rawMode(instance && instance.type) : rawMode;

  if (mode === 2) {
    return val !== false;
  } else {
    return val === true || val === 'suppress-warning';
  }
}

function emit(instance, event) {
  var props = instance.vnode.props || _vue_shared__WEBPACK_IMPORTED_MODULE_1__.EMPTY_OBJ;

  for (var _len3 = arguments.length, rawArgs = new Array(_len3 > 2 ? _len3 - 2 : 0), _key3 = 2; _key3 < _len3; _key3++) {
    rawArgs[_key3 - 2] = arguments[_key3];
  }

  if (true) {
    var emitsOptions = instance.emitsOptions,
        _instance$propsOption = _slicedToArray(instance.propsOptions, 1),
        propsOptions = _instance$propsOption[0];

    if (emitsOptions) {
      if (!(event in emitsOptions) && !false) {
        if (!propsOptions || !((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.toHandlerKey)(event) in propsOptions)) {
          warn("Component emitted event \"".concat(event, "\" but it is neither declared in ") + "the emits option nor as an \"".concat((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.toHandlerKey)(event), "\" prop."));
        }
      } else {
        var validator = emitsOptions[event];

        if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isFunction)(validator)) {
          var isValid = validator.apply(void 0, rawArgs);

          if (!isValid) {
            warn("Invalid event arguments: event validation failed for event \"".concat(event, "\"."));
          }
        }
      }
    }
  }

  var args = rawArgs;
  var isModelListener = event.startsWith('update:'); // for v-model update:xxx events, apply modifiers on args

  var modelArg = isModelListener && event.slice(7);

  if (modelArg && modelArg in props) {
    var modifiersKey = "".concat(modelArg === 'modelValue' ? 'model' : modelArg, "Modifiers");

    var _ref3 = props[modifiersKey] || _vue_shared__WEBPACK_IMPORTED_MODULE_1__.EMPTY_OBJ,
        number = _ref3.number,
        trim = _ref3.trim;

    if (trim) {
      args = rawArgs.map(function (a) {
        return a.trim();
      });
    } else if (number) {
      args = rawArgs.map(_vue_shared__WEBPACK_IMPORTED_MODULE_1__.toNumber);
    }
  }

  if (true) {
    devtoolsComponentEmit(instance, event, args);
  }

  if (true) {
    var lowerCaseEvent = event.toLowerCase();

    if (lowerCaseEvent !== event && props[(0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.toHandlerKey)(lowerCaseEvent)]) {
      warn("Event \"".concat(lowerCaseEvent, "\" is emitted in component ") + "".concat(formatComponentName(instance, instance.type), " but the handler is registered for \"").concat(event, "\". ") + "Note that HTML attributes are case-insensitive and you cannot use " + "v-on to listen to camelCase events when using in-DOM templates. " + "You should probably use \"".concat((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.hyphenate)(event), "\" instead of \"").concat(event, "\"."));
    }
  }

  var handlerName;
  var handler = props[handlerName = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.toHandlerKey)(event)] || // also try camelCase event handler (#2249)
  props[handlerName = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.toHandlerKey)((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.camelize)(event))]; // for v-model update:xxx events, also trigger kebab-case equivalent
  // for props passed via kebab-case

  if (!handler && isModelListener) {
    handler = props[handlerName = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.toHandlerKey)((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.hyphenate)(event))];
  }

  if (handler) {
    callWithAsyncErrorHandling(handler, instance, 6
    /* COMPONENT_EVENT_HANDLER */
    , args);
  }

  var onceHandler = props[handlerName + "Once"];

  if (onceHandler) {
    if (!instance.emitted) {
      instance.emitted = {};
    } else if (instance.emitted[handlerName]) {
      return;
    }

    instance.emitted[handlerName] = true;
    callWithAsyncErrorHandling(onceHandler, instance, 6
    /* COMPONENT_EVENT_HANDLER */
    , args);
  }
}

function normalizeEmitsOptions(comp, appContext) {
  var asMixin = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  var cache = appContext.emitsCache;
  var cached = cache.get(comp);

  if (cached !== undefined) {
    return cached;
  }

  var raw = comp.emits;
  var normalized = {}; // apply mixin/extends props

  var hasExtends = false;

  if (__VUE_OPTIONS_API__ && !(0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isFunction)(comp)) {
    var extendEmits = function extendEmits(raw) {
      var normalizedFromExtend = normalizeEmitsOptions(raw, appContext, true);

      if (normalizedFromExtend) {
        hasExtends = true;
        (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.extend)(normalized, normalizedFromExtend);
      }
    };

    if (!asMixin && appContext.mixins.length) {
      appContext.mixins.forEach(extendEmits);
    }

    if (comp["extends"]) {
      extendEmits(comp["extends"]);
    }

    if (comp.mixins) {
      comp.mixins.forEach(extendEmits);
    }
  }

  if (!raw && !hasExtends) {
    cache.set(comp, null);
    return null;
  }

  if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isArray)(raw)) {
    raw.forEach(function (key) {
      return normalized[key] = null;
    });
  } else {
    (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.extend)(normalized, raw);
  }

  cache.set(comp, normalized);
  return normalized;
} // Check if an incoming prop key is a declared emit event listener.
// e.g. With `emits: { click: null }`, props named `onClick` and `onclick` are
// both considered matched listeners.


function isEmitListener(options, key) {
  if (!options || !(0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isOn)(key)) {
    return false;
  }

  key = key.slice(2).replace(/Once$/, '');
  return (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.hasOwn)(options, key[0].toLowerCase() + key.slice(1)) || (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.hasOwn)(options, (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.hyphenate)(key)) || (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.hasOwn)(options, key);
}
/**
 * mark the current rendering instance for asset resolution (e.g.
 * resolveComponent, resolveDirective) during render
 */


var currentRenderingInstance = null;
var currentScopeId = null;
/**
 * Note: rendering calls maybe nested. The function returns the parent rendering
 * instance if present, which should be restored after the render is done:
 *
 * ```js
 * const prev = setCurrentRenderingInstance(i)
 * // ...render
 * setCurrentRenderingInstance(prev)
 * ```
 */

function setCurrentRenderingInstance(instance) {
  var prev = currentRenderingInstance;
  currentRenderingInstance = instance;
  currentScopeId = instance && instance.type.__scopeId || null;
  return prev;
}
/**
 * Set scope id when creating hoisted vnodes.
 * @private compiler helper
 */


function pushScopeId(id) {
  currentScopeId = id;
}
/**
 * Technically we no longer need this after 3.0.8 but we need to keep the same
 * API for backwards compat w/ code generated by compilers.
 * @private
 */


function popScopeId() {
  currentScopeId = null;
}
/**
 * Only for backwards compat
 * @private
 */


var withScopeId = function withScopeId(_id) {
  return withCtx;
};
/**
 * Wrap a slot function to memoize current rendering instance
 * @private compiler helper
 */


function withCtx(fn) // false only
{
  var ctx = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : currentRenderingInstance;
  var isNonScopedSlot = arguments.length > 2 ? arguments[2] : undefined;
  if (!ctx) return fn; // already normalized

  if (fn._n) {
    return fn;
  }

  var renderFnWithContext = function renderFnWithContext() {
    // If a user calls a compiled slot inside a template expression (#1745), it
    // can mess up block tracking, so by default we disable block tracking and
    // force bail out when invoking a compiled slot (indicated by the ._d flag).
    // This isn't necessary if rendering a compiled `<slot>`, so we flip the
    // ._d flag off when invoking the wrapped fn inside `renderSlot`.
    if (renderFnWithContext._d) {
      setBlockTracking(-1);
    }

    var prevInstance = setCurrentRenderingInstance(ctx);
    var res = fn.apply(void 0, arguments);
    setCurrentRenderingInstance(prevInstance);

    if (renderFnWithContext._d) {
      setBlockTracking(1);
    }

    if (true) {
      devtoolsComponentUpdated(ctx);
    }

    return res;
  }; // mark normalized to avoid duplicated wrapping


  renderFnWithContext._n = true; // mark this as compiled by default
  // this is used in vnode.ts -> normalizeChildren() to set the slot
  // rendering flag.

  renderFnWithContext._c = true; // disable block tracking by default

  renderFnWithContext._d = true;
  return renderFnWithContext;
}
/**
 * dev only flag to track whether $attrs was used during render.
 * If $attrs was used during render then the warning for failed attrs
 * fallthrough can be suppressed.
 */


var accessedAttrs = false;

function markAttrsAccessed() {
  accessedAttrs = true;
}

function renderComponentRoot(instance) {
  var Component = instance.type,
      vnode = instance.vnode,
      proxy = instance.proxy,
      withProxy = instance.withProxy,
      props = instance.props,
      _instance$propsOption2 = _slicedToArray(instance.propsOptions, 1),
      propsOptions = _instance$propsOption2[0],
      slots = instance.slots,
      attrs = instance.attrs,
      emit = instance.emit,
      render = instance.render,
      renderCache = instance.renderCache,
      data = instance.data,
      setupState = instance.setupState,
      ctx = instance.ctx,
      inheritAttrs = instance.inheritAttrs;

  var result;
  var prev = setCurrentRenderingInstance(instance);

  if (true) {
    accessedAttrs = false;
  }

  try {
    var fallthroughAttrs;

    if (vnode.shapeFlag & 4
    /* STATEFUL_COMPONENT */
    ) {
        // withProxy is a proxy with a different `has` trap only for
        // runtime-compiled render functions using `with` block.
        var proxyToUse = withProxy || proxy;
        result = normalizeVNode(render.call(proxyToUse, proxyToUse, renderCache, props, setupState, data, ctx));
        fallthroughAttrs = attrs;
      } else {
      // functional
      var _render = Component; // in dev, mark attrs accessed if optional props (attrs === props)

      if ( true && attrs === props) {
        markAttrsAccessed();
      }

      result = normalizeVNode(_render.length > 1 ? _render(props,  true ? {
        get attrs() {
          markAttrsAccessed();
          return attrs;
        },

        slots: slots,
        emit: emit
      } : 0) : _render(props, null
      /* we know it doesn't need it */
      ));
      fallthroughAttrs = Component.props ? attrs : getFunctionalFallthrough(attrs);
    } // attr merging
    // in dev mode, comments are preserved, and it's possible for a template
    // to have comments along side the root element which makes it a fragment


    var root = result;
    var setRoot = undefined;

    if ( true && result.patchFlag > 0 && result.patchFlag & 2048
    /* DEV_ROOT_FRAGMENT */
    ) {
        ;

        var _getChildRoot = getChildRoot(result);

        var _getChildRoot2 = _slicedToArray(_getChildRoot, 2);

        root = _getChildRoot2[0];
        setRoot = _getChildRoot2[1];
      }

    if (fallthroughAttrs && inheritAttrs !== false) {
      var keys = Object.keys(fallthroughAttrs);
      var _root = root,
          shapeFlag = _root.shapeFlag;

      if (keys.length) {
        if (shapeFlag & 1
        /* ELEMENT */
        || shapeFlag & 6
        /* COMPONENT */
        ) {
            if (propsOptions && keys.some(_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isModelListener)) {
              // If a v-model listener (onUpdate:xxx) has a corresponding declared
              // prop, it indicates this component expects to handle v-model and
              // it should not fallthrough.
              // related: #1543, #1643, #1989
              fallthroughAttrs = filterModelListeners(fallthroughAttrs, propsOptions);
            }

            root = cloneVNode(root, fallthroughAttrs);
          } else if ( true && !accessedAttrs && root.type !== Comment$1) {
          var allAttrs = Object.keys(attrs);
          var eventAttrs = [];
          var extraAttrs = [];

          for (var i = 0, l = allAttrs.length; i < l; i++) {
            var key = allAttrs[i];

            if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isOn)(key)) {
              // ignore v-model handlers when they fail to fallthrough
              if (!(0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isModelListener)(key)) {
                // remove `on`, lowercase first letter to reflect event casing
                // accurately
                eventAttrs.push(key[2].toLowerCase() + key.slice(3));
              }
            } else {
              extraAttrs.push(key);
            }
          }

          if (extraAttrs.length) {
            warn("Extraneous non-props attributes (" + "".concat(extraAttrs.join(', '), ") ") + "were passed to component but could not be automatically inherited " + "because component renders fragment or text root nodes.");
          }

          if (eventAttrs.length) {
            warn("Extraneous non-emits event listeners (" + "".concat(eventAttrs.join(', '), ") ") + "were passed to component but could not be automatically inherited " + "because component renders fragment or text root nodes. " + "If the listener is intended to be a component custom event listener only, " + "declare it using the \"emits\" option.");
          }
        }
      }
    }

    if (false) {} // inherit directives

    if (vnode.dirs) {
      if ( true && !isElementRoot(root)) {
        warn("Runtime directive used on component with non-element root node. " + "The directives will not function as intended.");
      }

      root.dirs = root.dirs ? root.dirs.concat(vnode.dirs) : vnode.dirs;
    } // inherit transition data


    if (vnode.transition) {
      if ( true && !isElementRoot(root)) {
        warn("Component inside <Transition> renders non-element root node " + "that cannot be animated.");
      }

      root.transition = vnode.transition;
    }

    if ( true && setRoot) {
      setRoot(root);
    } else {
      result = root;
    }
  } catch (err) {
    blockStack.length = 0;
    handleError(err, instance, 1
    /* RENDER_FUNCTION */
    );
    result = createVNode(Comment$1);
  }

  setCurrentRenderingInstance(prev);
  return result;
}
/**
 * dev only
 * In dev mode, template root level comments are rendered, which turns the
 * template into a fragment root, but we need to locate the single element
 * root for attrs and scope id processing.
 */


var getChildRoot = function getChildRoot(vnode) {
  var rawChildren = vnode.children;
  var dynamicChildren = vnode.dynamicChildren;
  var childRoot = filterSingleRoot(rawChildren);

  if (!childRoot) {
    return [vnode, undefined];
  }

  var index = rawChildren.indexOf(childRoot);
  var dynamicIndex = dynamicChildren ? dynamicChildren.indexOf(childRoot) : -1;

  var setRoot = function setRoot(updatedRoot) {
    rawChildren[index] = updatedRoot;

    if (dynamicChildren) {
      if (dynamicIndex > -1) {
        dynamicChildren[dynamicIndex] = updatedRoot;
      } else if (updatedRoot.patchFlag > 0) {
        vnode.dynamicChildren = [].concat(_toConsumableArray(dynamicChildren), [updatedRoot]);
      }
    }
  };

  return [normalizeVNode(childRoot), setRoot];
};

function filterSingleRoot(children) {
  var singleRoot;

  for (var i = 0; i < children.length; i++) {
    var child = children[i];

    if (isVNode(child)) {
      // ignore user comment
      if (child.type !== Comment$1 || child.children === 'v-if') {
        if (singleRoot) {
          // has more than 1 non-comment child, return now
          return;
        } else {
          singleRoot = child;
        }
      }
    } else {
      return;
    }
  }

  return singleRoot;
}

var getFunctionalFallthrough = function getFunctionalFallthrough(attrs) {
  var res;

  for (var key in attrs) {
    if (key === 'class' || key === 'style' || (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isOn)(key)) {
      (res || (res = {}))[key] = attrs[key];
    }
  }

  return res;
};

var filterModelListeners = function filterModelListeners(attrs, props) {
  var res = {};

  for (var key in attrs) {
    if (!(0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isModelListener)(key) || !(key.slice(9) in props)) {
      res[key] = attrs[key];
    }
  }

  return res;
};

var isElementRoot = function isElementRoot(vnode) {
  return vnode.shapeFlag & 6
  /* COMPONENT */
  || vnode.shapeFlag & 1
  /* ELEMENT */
  || vnode.type === Comment$1 // potential v-if branch switch
  ;
};

function shouldUpdateComponent(prevVNode, nextVNode, optimized) {
  var prevProps = prevVNode.props,
      prevChildren = prevVNode.children,
      component = prevVNode.component;
  var nextProps = nextVNode.props,
      nextChildren = nextVNode.children,
      patchFlag = nextVNode.patchFlag;
  var emits = component.emitsOptions; // Parent component's render function was hot-updated. Since this may have
  // caused the child component's slots content to have changed, we need to
  // force the child to update as well.

  if ( true && (prevChildren || nextChildren) && isHmrUpdating) {
    return true;
  } // force child update for runtime directive or transition on component vnode.


  if (nextVNode.dirs || nextVNode.transition) {
    return true;
  }

  if (optimized && patchFlag >= 0) {
    if (patchFlag & 1024
    /* DYNAMIC_SLOTS */
    ) {
        // slot content that references values that might have changed,
        // e.g. in a v-for
        return true;
      }

    if (patchFlag & 16
    /* FULL_PROPS */
    ) {
        if (!prevProps) {
          return !!nextProps;
        } // presence of this flag indicates props are always non-null


        return hasPropsChanged(prevProps, nextProps, emits);
      } else if (patchFlag & 8
    /* PROPS */
    ) {
        var dynamicProps = nextVNode.dynamicProps;

        for (var i = 0; i < dynamicProps.length; i++) {
          var key = dynamicProps[i];

          if (nextProps[key] !== prevProps[key] && !isEmitListener(emits, key)) {
            return true;
          }
        }
      }
  } else {
    // this path is only taken by manually written render functions
    // so presence of any children leads to a forced update
    if (prevChildren || nextChildren) {
      if (!nextChildren || !nextChildren.$stable) {
        return true;
      }
    }

    if (prevProps === nextProps) {
      return false;
    }

    if (!prevProps) {
      return !!nextProps;
    }

    if (!nextProps) {
      return true;
    }

    return hasPropsChanged(prevProps, nextProps, emits);
  }

  return false;
}

function hasPropsChanged(prevProps, nextProps, emitsOptions) {
  var nextKeys = Object.keys(nextProps);

  if (nextKeys.length !== Object.keys(prevProps).length) {
    return true;
  }

  for (var i = 0; i < nextKeys.length; i++) {
    var key = nextKeys[i];

    if (nextProps[key] !== prevProps[key] && !isEmitListener(emitsOptions, key)) {
      return true;
    }
  }

  return false;
}

function updateHOCHostEl(_ref4, el // HostNode
) {
  var vnode = _ref4.vnode,
      parent = _ref4.parent;

  while (parent && parent.subTree === vnode) {
    (vnode = parent.vnode).el = el;
    parent = parent.parent;
  }
}

var isSuspense = function isSuspense(type) {
  return type.__isSuspense;
}; // Suspense exposes a component-like API, and is treated like a component
// in the compiler, but internally it's a special built-in type that hooks
// directly into the renderer.


var SuspenseImpl = {
  name: 'Suspense',
  // In order to make Suspense tree-shakable, we need to avoid importing it
  // directly in the renderer. The renderer checks for the __isSuspense flag
  // on a vnode's type and calls the `process` method, passing in renderer
  // internals.
  __isSuspense: true,
  process: function process(n1, n2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized, // platform-specific impl passed from renderer
  rendererInternals) {
    if (n1 == null) {
      mountSuspense(n2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized, rendererInternals);
    } else {
      patchSuspense(n1, n2, container, anchor, parentComponent, isSVG, slotScopeIds, optimized, rendererInternals);
    }
  },
  hydrate: hydrateSuspense,
  create: createSuspenseBoundary,
  normalize: normalizeSuspenseChildren
}; // Force-casted public typing for h and TSX props inference

var Suspense = SuspenseImpl;

function triggerEvent(vnode, name) {
  var eventListener = vnode.props && vnode.props[name];

  if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isFunction)(eventListener)) {
    eventListener();
  }
}

function mountSuspense(vnode, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized, rendererInternals) {
  var patch = rendererInternals.p,
      createElement = rendererInternals.o.createElement;
  var hiddenContainer = createElement('div');
  var suspense = vnode.suspense = createSuspenseBoundary(vnode, parentSuspense, parentComponent, container, hiddenContainer, anchor, isSVG, slotScopeIds, optimized, rendererInternals); // start mounting the content subtree in an off-dom container

  patch(null, suspense.pendingBranch = vnode.ssContent, hiddenContainer, null, parentComponent, suspense, isSVG, slotScopeIds); // now check if we have encountered any async deps

  if (suspense.deps > 0) {
    // has async
    // invoke @fallback event
    triggerEvent(vnode, 'onPending');
    triggerEvent(vnode, 'onFallback'); // mount the fallback tree

    patch(null, vnode.ssFallback, container, anchor, parentComponent, null, // fallback tree will not have suspense context
    isSVG, slotScopeIds);
    setActiveBranch(suspense, vnode.ssFallback);
  } else {
    // Suspense has no async deps. Just resolve.
    suspense.resolve();
  }
}

function patchSuspense(n1, n2, container, anchor, parentComponent, isSVG, slotScopeIds, optimized, _ref5) {
  var patch = _ref5.p,
      unmount = _ref5.um,
      createElement = _ref5.o.createElement;
  var suspense = n2.suspense = n1.suspense;
  suspense.vnode = n2;
  n2.el = n1.el;
  var newBranch = n2.ssContent;
  var newFallback = n2.ssFallback;
  var activeBranch = suspense.activeBranch,
      pendingBranch = suspense.pendingBranch,
      isInFallback = suspense.isInFallback,
      isHydrating = suspense.isHydrating;

  if (pendingBranch) {
    suspense.pendingBranch = newBranch;

    if (isSameVNodeType(newBranch, pendingBranch)) {
      // same root type but content may have changed.
      patch(pendingBranch, newBranch, suspense.hiddenContainer, null, parentComponent, suspense, isSVG, slotScopeIds, optimized);

      if (suspense.deps <= 0) {
        suspense.resolve();
      } else if (isInFallback) {
        patch(activeBranch, newFallback, container, anchor, parentComponent, null, // fallback tree will not have suspense context
        isSVG, slotScopeIds, optimized);
        setActiveBranch(suspense, newFallback);
      }
    } else {
      // toggled before pending tree is resolved
      suspense.pendingId++;

      if (isHydrating) {
        // if toggled before hydration is finished, the current DOM tree is
        // no longer valid. set it as the active branch so it will be unmounted
        // when resolved
        suspense.isHydrating = false;
        suspense.activeBranch = pendingBranch;
      } else {
        unmount(pendingBranch, parentComponent, suspense);
      } // increment pending ID. this is used to invalidate async callbacks
      // reset suspense state


      suspense.deps = 0; // discard effects from pending branch

      suspense.effects.length = 0; // discard previous container

      suspense.hiddenContainer = createElement('div');

      if (isInFallback) {
        // already in fallback state
        patch(null, newBranch, suspense.hiddenContainer, null, parentComponent, suspense, isSVG, slotScopeIds, optimized);

        if (suspense.deps <= 0) {
          suspense.resolve();
        } else {
          patch(activeBranch, newFallback, container, anchor, parentComponent, null, // fallback tree will not have suspense context
          isSVG, slotScopeIds, optimized);
          setActiveBranch(suspense, newFallback);
        }
      } else if (activeBranch && isSameVNodeType(newBranch, activeBranch)) {
        // toggled "back" to current active branch
        patch(activeBranch, newBranch, container, anchor, parentComponent, suspense, isSVG, slotScopeIds, optimized); // force resolve

        suspense.resolve(true);
      } else {
        // switched to a 3rd branch
        patch(null, newBranch, suspense.hiddenContainer, null, parentComponent, suspense, isSVG, slotScopeIds, optimized);

        if (suspense.deps <= 0) {
          suspense.resolve();
        }
      }
    }
  } else {
    if (activeBranch && isSameVNodeType(newBranch, activeBranch)) {
      // root did not change, just normal patch
      patch(activeBranch, newBranch, container, anchor, parentComponent, suspense, isSVG, slotScopeIds, optimized);
      setActiveBranch(suspense, newBranch);
    } else {
      // root node toggled
      // invoke @pending event
      triggerEvent(n2, 'onPending'); // mount pending branch in off-dom container

      suspense.pendingBranch = newBranch;
      suspense.pendingId++;
      patch(null, newBranch, suspense.hiddenContainer, null, parentComponent, suspense, isSVG, slotScopeIds, optimized);

      if (suspense.deps <= 0) {
        // incoming branch has no async deps, resolve now.
        suspense.resolve();
      } else {
        var timeout = suspense.timeout,
            pendingId = suspense.pendingId;

        if (timeout > 0) {
          setTimeout(function () {
            if (suspense.pendingId === pendingId) {
              suspense.fallback(newFallback);
            }
          }, timeout);
        } else if (timeout === 0) {
          suspense.fallback(newFallback);
        }
      }
    }
  }
}

var hasWarned = false;

function createSuspenseBoundary(vnode, parent, parentComponent, container, hiddenContainer, anchor, isSVG, slotScopeIds, optimized, rendererInternals) {
  var isHydrating = arguments.length > 10 && arguments[10] !== undefined ? arguments[10] : false;

  /* istanbul ignore if */
  if ( true && !hasWarned) {
    hasWarned = true; // @ts-ignore `console.info` cannot be null error

    console[console.info ? 'info' : 'log']("<Suspense> is an experimental feature and its API will likely change.");
  }

  var patch = rendererInternals.p,
      _move = rendererInternals.m,
      _unmount2 = rendererInternals.um,
      _next = rendererInternals.n,
      _rendererInternals$o = rendererInternals.o,
      parentNode = _rendererInternals$o.parentNode,
      remove = _rendererInternals$o.remove;
  var timeout = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.toNumber)(vnode.props && vnode.props.timeout);
  var suspense = {
    vnode: vnode,
    parent: parent,
    parentComponent: parentComponent,
    isSVG: isSVG,
    container: container,
    hiddenContainer: hiddenContainer,
    anchor: anchor,
    deps: 0,
    pendingId: 0,
    timeout: typeof timeout === 'number' ? timeout : -1,
    activeBranch: null,
    pendingBranch: null,
    isInFallback: true,
    isHydrating: isHydrating,
    isUnmounted: false,
    effects: [],
    resolve: function resolve() {
      var resume = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

      if (true) {
        if (!resume && !suspense.pendingBranch) {
          throw new Error("suspense.resolve() is called without a pending branch.");
        }

        if (suspense.isUnmounted) {
          throw new Error("suspense.resolve() is called on an already unmounted suspense boundary.");
        }
      }

      var vnode = suspense.vnode,
          activeBranch = suspense.activeBranch,
          pendingBranch = suspense.pendingBranch,
          pendingId = suspense.pendingId,
          effects = suspense.effects,
          parentComponent = suspense.parentComponent,
          container = suspense.container;

      if (suspense.isHydrating) {
        suspense.isHydrating = false;
      } else if (!resume) {
        var delayEnter = activeBranch && pendingBranch.transition && pendingBranch.transition.mode === 'out-in';

        if (delayEnter) {
          activeBranch.transition.afterLeave = function () {
            if (pendingId === suspense.pendingId) {
              _move(pendingBranch, container, _anchor, 0
              /* ENTER */
              );
            }
          };
        } // this is initial anchor on mount


        var _anchor = suspense.anchor; // unmount current active tree

        if (activeBranch) {
          // if the fallback tree was mounted, it may have been moved
          // as part of a parent suspense. get the latest anchor for insertion
          _anchor = _next(activeBranch);

          _unmount2(activeBranch, parentComponent, suspense, true);
        }

        if (!delayEnter) {
          // move content from off-dom container to actual container
          _move(pendingBranch, container, _anchor, 0
          /* ENTER */
          );
        }
      }

      setActiveBranch(suspense, pendingBranch);
      suspense.pendingBranch = null;
      suspense.isInFallback = false; // flush buffered effects
      // check if there is a pending parent suspense

      var parent = suspense.parent;
      var hasUnresolvedAncestor = false;

      while (parent) {
        if (parent.pendingBranch) {
          var _parent$effects;

          // found a pending parent suspense, merge buffered post jobs
          // into that parent
          (_parent$effects = parent.effects).push.apply(_parent$effects, _toConsumableArray(effects));

          hasUnresolvedAncestor = true;
          break;
        }

        parent = parent.parent;
      } // no pending parent suspense, flush all jobs


      if (!hasUnresolvedAncestor) {
        queuePostFlushCb(effects);
      }

      suspense.effects = []; // invoke @resolve event

      triggerEvent(vnode, 'onResolve');
    },
    fallback: function fallback(fallbackVNode) {
      if (!suspense.pendingBranch) {
        return;
      }

      var vnode = suspense.vnode,
          activeBranch = suspense.activeBranch,
          parentComponent = suspense.parentComponent,
          container = suspense.container,
          isSVG = suspense.isSVG; // invoke @fallback event

      triggerEvent(vnode, 'onFallback');

      var anchor = _next(activeBranch);

      var mountFallback = function mountFallback() {
        if (!suspense.isInFallback) {
          return;
        } // mount the fallback tree


        patch(null, fallbackVNode, container, anchor, parentComponent, null, // fallback tree will not have suspense context
        isSVG, slotScopeIds, optimized);
        setActiveBranch(suspense, fallbackVNode);
      };

      var delayEnter = fallbackVNode.transition && fallbackVNode.transition.mode === 'out-in';

      if (delayEnter) {
        activeBranch.transition.afterLeave = mountFallback;
      }

      suspense.isInFallback = true; // unmount current active branch

      _unmount2(activeBranch, parentComponent, null, // no suspense so unmount hooks fire now
      true // shouldRemove
      );

      if (!delayEnter) {
        mountFallback();
      }
    },
    move: function move(container, anchor, type) {
      suspense.activeBranch && _move(suspense.activeBranch, container, anchor, type);
      suspense.container = container;
    },
    next: function next() {
      return suspense.activeBranch && _next(suspense.activeBranch);
    },
    registerDep: function registerDep(instance, setupRenderEffect) {
      var isInPendingSuspense = !!suspense.pendingBranch;

      if (isInPendingSuspense) {
        suspense.deps++;
      }

      var hydratedEl = instance.vnode.el;
      instance.asyncDep["catch"](function (err) {
        handleError(err, instance, 0
        /* SETUP_FUNCTION */
        );
      }).then(function (asyncSetupResult) {
        // retry when the setup() promise resolves.
        // component may have been unmounted before resolve.
        if (instance.isUnmounted || suspense.isUnmounted || suspense.pendingId !== instance.suspenseId) {
          return;
        } // retry from this component


        instance.asyncResolved = true;
        var vnode = instance.vnode;

        if (true) {
          pushWarningContext(vnode);
        }

        handleSetupResult(instance, asyncSetupResult, false);

        if (hydratedEl) {
          // vnode may have been replaced if an update happened before the
          // async dep is resolved.
          vnode.el = hydratedEl;
        }

        var placeholder = !hydratedEl && instance.subTree.el;
        setupRenderEffect(instance, vnode, // component may have been moved before resolve.
        // if this is not a hydration, instance.subTree will be the comment
        // placeholder.
        parentNode(hydratedEl || instance.subTree.el), // anchor will not be used if this is hydration, so only need to
        // consider the comment placeholder case.
        hydratedEl ? null : _next(instance.subTree), suspense, isSVG, optimized);

        if (placeholder) {
          remove(placeholder);
        }

        updateHOCHostEl(instance, vnode.el);

        if (true) {
          popWarningContext();
        } // only decrease deps count if suspense is not already resolved


        if (isInPendingSuspense && --suspense.deps === 0) {
          suspense.resolve();
        }
      });
    },
    unmount: function unmount(parentSuspense, doRemove) {
      suspense.isUnmounted = true;

      if (suspense.activeBranch) {
        _unmount2(suspense.activeBranch, parentComponent, parentSuspense, doRemove);
      }

      if (suspense.pendingBranch) {
        _unmount2(suspense.pendingBranch, parentComponent, parentSuspense, doRemove);
      }
    }
  };
  return suspense;
}

function hydrateSuspense(node, vnode, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized, rendererInternals, hydrateNode) {
  /* eslint-disable no-restricted-globals */
  var suspense = vnode.suspense = createSuspenseBoundary(vnode, parentSuspense, parentComponent, node.parentNode, document.createElement('div'), null, isSVG, slotScopeIds, optimized, rendererInternals, true
  /* hydrating */
  ); // there are two possible scenarios for server-rendered suspense:
  // - success: ssr content should be fully resolved
  // - failure: ssr content should be the fallback branch.
  // however, on the client we don't really know if it has failed or not
  // attempt to hydrate the DOM assuming it has succeeded, but we still
  // need to construct a suspense boundary first

  var result = hydrateNode(node, suspense.pendingBranch = vnode.ssContent, parentComponent, suspense, slotScopeIds, optimized);

  if (suspense.deps === 0) {
    suspense.resolve();
  }

  return result;
  /* eslint-enable no-restricted-globals */
}

function normalizeSuspenseChildren(vnode) {
  var shapeFlag = vnode.shapeFlag,
      children = vnode.children;
  var isSlotChildren = shapeFlag & 32
  /* SLOTS_CHILDREN */
  ;
  vnode.ssContent = normalizeSuspenseSlot(isSlotChildren ? children["default"] : children);
  vnode.ssFallback = isSlotChildren ? normalizeSuspenseSlot(children.fallback) : createVNode(Comment);
}

function normalizeSuspenseSlot(s) {
  var block;

  if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isFunction)(s)) {
    var isCompiledSlot = s._c;

    if (isCompiledSlot) {
      // disableTracking: false
      // allow block tracking for compiled slots
      // (see ./componentRenderContext.ts)
      s._d = false;
      openBlock();
    }

    s = s();

    if (isCompiledSlot) {
      s._d = true;
      block = currentBlock;
      closeBlock();
    }
  }

  if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isArray)(s)) {
    var singleChild = filterSingleRoot(s);

    if ( true && !singleChild) {
      warn("<Suspense> slots expect a single root node.");
    }

    s = singleChild;
  }

  s = normalizeVNode(s);

  if (block) {
    s.dynamicChildren = block.filter(function (c) {
      return c !== s;
    });
  }

  return s;
}

function queueEffectWithSuspense(fn, suspense) {
  if (suspense && suspense.pendingBranch) {
    if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isArray)(fn)) {
      var _suspense$effects;

      (_suspense$effects = suspense.effects).push.apply(_suspense$effects, _toConsumableArray(fn));
    } else {
      suspense.effects.push(fn);
    }
  } else {
    queuePostFlushCb(fn);
  }
}

function setActiveBranch(suspense, branch) {
  suspense.activeBranch = branch;
  var vnode = suspense.vnode,
      parentComponent = suspense.parentComponent;
  var el = vnode.el = branch.el; // in case suspense is the root node of a component,
  // recursively update the HOC el

  if (parentComponent && parentComponent.subTree === vnode) {
    parentComponent.vnode.el = el;
    updateHOCHostEl(parentComponent, el);
  }
}

function provide(key, value) {
  if (!currentInstance) {
    if (true) {
      warn("provide() can only be used inside setup().");
    }
  } else {
    var provides = currentInstance.provides; // by default an instance inherits its parent's provides object
    // but when it needs to provide values of its own, it creates its
    // own provides object using parent provides object as prototype.
    // this way in `inject` we can simply look up injections from direct
    // parent and let the prototype chain do the work.

    var parentProvides = currentInstance.parent && currentInstance.parent.provides;

    if (parentProvides === provides) {
      provides = currentInstance.provides = Object.create(parentProvides);
    } // TS doesn't allow symbol as index type


    provides[key] = value;
  }
}

function inject(key, defaultValue) {
  var treatDefaultAsFactory = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  // fallback to `currentRenderingInstance` so that this can be called in
  // a functional component
  var instance = currentInstance || currentRenderingInstance;

  if (instance) {
    // #2400
    // to support `app.use` plugins,
    // fallback to appContext's `provides` if the intance is at root
    var provides = instance.parent == null ? instance.vnode.appContext && instance.vnode.appContext.provides : instance.parent.provides;

    if (provides && key in provides) {
      // TS doesn't allow symbol as index type
      return provides[key];
    } else if (arguments.length > 1) {
      return treatDefaultAsFactory && (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isFunction)(defaultValue) ? defaultValue.call(instance.proxy) : defaultValue;
    } else if (true) {
      warn("injection \"".concat(String(key), "\" not found."));
    }
  } else if (true) {
    warn("inject() can only be used inside setup() or functional components.");
  }
} // Simple effect.


function watchEffect(effect, options) {
  return doWatch(effect, null, options);
} // initial value for watchers to trigger on undefined initial values


var INITIAL_WATCHER_VALUE = {}; // implementation

function watch(source, cb, options) {
  if ( true && !(0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isFunction)(cb)) {
    warn("`watch(fn, options?)` signature has been moved to a separate API. " + "Use `watchEffect(fn, options?)` instead. `watch` now only " + "supports `watch(source, cb, options?) signature.");
  }

  return doWatch(source, cb, options);
}

function doWatch(source, cb) {
  var _ref6 = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : _vue_shared__WEBPACK_IMPORTED_MODULE_1__.EMPTY_OBJ,
      immediate = _ref6.immediate,
      deep = _ref6.deep,
      flush = _ref6.flush,
      onTrack = _ref6.onTrack,
      onTrigger = _ref6.onTrigger;

  var instance = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : currentInstance;

  if ( true && !cb) {
    if (immediate !== undefined) {
      warn("watch() \"immediate\" option is only respected when using the " + "watch(source, callback, options?) signature.");
    }

    if (deep !== undefined) {
      warn("watch() \"deep\" option is only respected when using the " + "watch(source, callback, options?) signature.");
    }
  }

  var warnInvalidSource = function warnInvalidSource(s) {
    warn("Invalid watch source: ", s, "A watch source can only be a getter/effect function, a ref, " + "a reactive object, or an array of these types.");
  };

  var getter;
  var forceTrigger = false;
  var isMultiSource = false;

  if ((0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.isRef)(source)) {
    getter = function getter() {
      return source.value;
    };

    forceTrigger = !!source._shallow;
  } else if ((0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.isReactive)(source)) {
    getter = function getter() {
      return source;
    };

    deep = true;
  } else if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isArray)(source)) {
    isMultiSource = true;
    forceTrigger = source.some(_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.isReactive);

    getter = function getter() {
      return source.map(function (s) {
        if ((0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.isRef)(s)) {
          return s.value;
        } else if ((0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.isReactive)(s)) {
          return traverse(s);
        } else if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isFunction)(s)) {
          return callWithErrorHandling(s, instance, 2
          /* WATCH_GETTER */
          );
        } else {
           true && warnInvalidSource(s);
        }
      });
    };
  } else if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isFunction)(source)) {
    if (cb) {
      // getter with cb
      getter = function getter() {
        return callWithErrorHandling(source, instance, 2
        /* WATCH_GETTER */
        );
      };
    } else {
      // no cb -> simple effect
      getter = function getter() {
        if (instance && instance.isUnmounted) {
          return;
        }

        if (cleanup) {
          cleanup();
        }

        return callWithAsyncErrorHandling(source, instance, 3
        /* WATCH_CALLBACK */
        , [onInvalidate]);
      };
    }
  } else {
    getter = _vue_shared__WEBPACK_IMPORTED_MODULE_1__.NOOP;
     true && warnInvalidSource(source);
  }

  if (cb && deep) {
    var baseGetter = getter;

    getter = function getter() {
      return traverse(baseGetter());
    };
  }

  var cleanup;

  var onInvalidate = function onInvalidate(fn) {
    cleanup = runner.options.onStop = function () {
      callWithErrorHandling(fn, instance, 4
      /* WATCH_CLEANUP */
      );
    };
  };

  var oldValue = isMultiSource ? [] : INITIAL_WATCHER_VALUE;

  var job = function job() {
    if (!runner.active) {
      return;
    }

    if (cb) {
      // watch(source, cb)
      var newValue = runner();

      if (deep || forceTrigger || (isMultiSource ? newValue.some(function (v, i) {
        return (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.hasChanged)(v, oldValue[i]);
      }) : (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.hasChanged)(newValue, oldValue)) || false) {
        // cleanup before running cb again
        if (cleanup) {
          cleanup();
        }

        callWithAsyncErrorHandling(cb, instance, 3
        /* WATCH_CALLBACK */
        , [newValue, // pass undefined as the old value when it's changed for the first time
        oldValue === INITIAL_WATCHER_VALUE ? undefined : oldValue, onInvalidate]);
        oldValue = newValue;
      }
    } else {
      // watchEffect
      runner();
    }
  }; // important: mark the job as a watcher callback so that scheduler knows
  // it is allowed to self-trigger (#1727)


  job.allowRecurse = !!cb;
  var scheduler;

  if (flush === 'sync') {
    scheduler = job; // the scheduler function gets called directly
  } else if (flush === 'post') {
    scheduler = function scheduler() {
      return queuePostRenderEffect(job, instance && instance.suspense);
    };
  } else {
    // default: 'pre'
    scheduler = function scheduler() {
      if (!instance || instance.isMounted) {
        queuePreFlushCb(job);
      } else {
        // with 'pre' option, the first call must happen before
        // the component is mounted so it is called synchronously.
        job();
      }
    };
  }

  var runner = (0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.effect)(getter, {
    lazy: true,
    onTrack: onTrack,
    onTrigger: onTrigger,
    scheduler: scheduler
  });
  recordInstanceBoundEffect(runner, instance); // initial run

  if (cb) {
    if (immediate) {
      job();
    } else {
      oldValue = runner();
    }
  } else if (flush === 'post') {
    queuePostRenderEffect(runner, instance && instance.suspense);
  } else {
    runner();
  }

  return function () {
    (0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.stop)(runner);

    if (instance) {
      (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.remove)(instance.effects, runner);
    }
  };
} // this.$watch


function instanceWatch(source, value, options) {
  var publicThis = this.proxy;
  var getter = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isString)(source) ? source.includes('.') ? createPathGetter(publicThis, source) : function () {
    return publicThis[source];
  } : source.bind(publicThis, publicThis);
  var cb;

  if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isFunction)(value)) {
    cb = value;
  } else {
    cb = value.handler;
    options = value;
  }

  return doWatch(getter, cb.bind(publicThis), options, this);
}

function createPathGetter(ctx, path) {
  var segments = path.split('.');
  return function () {
    var cur = ctx;

    for (var i = 0; i < segments.length && cur; i++) {
      cur = cur[segments[i]];
    }

    return cur;
  };
}

function traverse(value) {
  var seen = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : new Set();

  if (!(0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isObject)(value) || seen.has(value) || value["__v_skip"
  /* SKIP */
  ]) {
    return value;
  }

  seen.add(value);

  if ((0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.isRef)(value)) {
    traverse(value.value, seen);
  } else if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isArray)(value)) {
    for (var i = 0; i < value.length; i++) {
      traverse(value[i], seen);
    }
  } else if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isSet)(value) || (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isMap)(value)) {
    value.forEach(function (v) {
      traverse(v, seen);
    });
  } else if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isPlainObject)(value)) {
    for (var key in value) {
      traverse(value[key], seen);
    }
  }

  return value;
}

function useTransitionState() {
  var state = {
    isMounted: false,
    isLeaving: false,
    isUnmounting: false,
    leavingVNodes: new Map()
  };
  onMounted(function () {
    state.isMounted = true;
  });
  onBeforeUnmount(function () {
    state.isUnmounting = true;
  });
  return state;
}

var TransitionHookValidator = [Function, Array];
var BaseTransitionImpl = {
  name: "BaseTransition",
  props: {
    mode: String,
    appear: Boolean,
    persisted: Boolean,
    // enter
    onBeforeEnter: TransitionHookValidator,
    onEnter: TransitionHookValidator,
    onAfterEnter: TransitionHookValidator,
    onEnterCancelled: TransitionHookValidator,
    // leave
    onBeforeLeave: TransitionHookValidator,
    onLeave: TransitionHookValidator,
    onAfterLeave: TransitionHookValidator,
    onLeaveCancelled: TransitionHookValidator,
    // appear
    onBeforeAppear: TransitionHookValidator,
    onAppear: TransitionHookValidator,
    onAfterAppear: TransitionHookValidator,
    onAppearCancelled: TransitionHookValidator
  },
  setup: function setup(props, _ref7) {
    var slots = _ref7.slots;
    var instance = getCurrentInstance();
    var state = useTransitionState();
    var prevTransitionKey;
    return function () {
      var children = slots["default"] && getTransitionRawChildren(slots["default"](), true);

      if (!children || !children.length) {
        return;
      } // warn multiple elements


      if ( true && children.length > 1) {
        warn('<transition> can only be used on a single element or component. Use ' + '<transition-group> for lists.');
      } // there's no need to track reactivity for these props so use the raw
      // props for a bit better perf


      var rawProps = (0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.toRaw)(props);
      var mode = rawProps.mode; // check mode

      if ( true && mode && !['in-out', 'out-in', 'default'].includes(mode)) {
        warn("invalid <transition> mode: ".concat(mode));
      } // at this point children has a guaranteed length of 1.


      var child = children[0];

      if (state.isLeaving) {
        return emptyPlaceholder(child);
      } // in the case of <transition><keep-alive/></transition>, we need to
      // compare the type of the kept-alive children.


      var innerChild = getKeepAliveChild(child);

      if (!innerChild) {
        return emptyPlaceholder(child);
      }

      var enterHooks = resolveTransitionHooks(innerChild, rawProps, state, instance);
      setTransitionHooks(innerChild, enterHooks);
      var oldChild = instance.subTree;
      var oldInnerChild = oldChild && getKeepAliveChild(oldChild);
      var transitionKeyChanged = false;
      var getTransitionKey = innerChild.type.getTransitionKey;

      if (getTransitionKey) {
        var key = getTransitionKey();

        if (prevTransitionKey === undefined) {
          prevTransitionKey = key;
        } else if (key !== prevTransitionKey) {
          prevTransitionKey = key;
          transitionKeyChanged = true;
        }
      } // handle mode


      if (oldInnerChild && oldInnerChild.type !== Comment$1 && (!isSameVNodeType(innerChild, oldInnerChild) || transitionKeyChanged)) {
        var leavingHooks = resolveTransitionHooks(oldInnerChild, rawProps, state, instance); // update old tree's hooks in case of dynamic transition

        setTransitionHooks(oldInnerChild, leavingHooks); // switching between different views

        if (mode === 'out-in') {
          state.isLeaving = true; // return placeholder node and queue update when leave finishes

          leavingHooks.afterLeave = function () {
            state.isLeaving = false;
            instance.update();
          };

          return emptyPlaceholder(child);
        } else if (mode === 'in-out' && innerChild.type !== Comment$1) {
          leavingHooks.delayLeave = function (el, earlyRemove, delayedLeave) {
            var leavingVNodesCache = getLeavingNodesForType(state, oldInnerChild);
            leavingVNodesCache[String(oldInnerChild.key)] = oldInnerChild; // early removal callback

            el._leaveCb = function () {
              earlyRemove();
              el._leaveCb = undefined;
              delete enterHooks.delayedLeave;
            };

            enterHooks.delayedLeave = delayedLeave;
          };
        }
      }

      return child;
    };
  }
}; // export the public type for h/tsx inference
// also to avoid inline import() in generated d.ts files

var BaseTransition = BaseTransitionImpl;

function getLeavingNodesForType(state, vnode) {
  var leavingVNodes = state.leavingVNodes;
  var leavingVNodesCache = leavingVNodes.get(vnode.type);

  if (!leavingVNodesCache) {
    leavingVNodesCache = Object.create(null);
    leavingVNodes.set(vnode.type, leavingVNodesCache);
  }

  return leavingVNodesCache;
} // The transition hooks are attached to the vnode as vnode.transition
// and will be called at appropriate timing in the renderer.


function resolveTransitionHooks(vnode, props, state, instance) {
  var appear = props.appear,
      mode = props.mode,
      _props$persisted = props.persisted,
      persisted = _props$persisted === void 0 ? false : _props$persisted,
      onBeforeEnter = props.onBeforeEnter,
      onEnter = props.onEnter,
      onAfterEnter = props.onAfterEnter,
      onEnterCancelled = props.onEnterCancelled,
      onBeforeLeave = props.onBeforeLeave,
      onLeave = props.onLeave,
      onAfterLeave = props.onAfterLeave,
      onLeaveCancelled = props.onLeaveCancelled,
      onBeforeAppear = props.onBeforeAppear,
      onAppear = props.onAppear,
      onAfterAppear = props.onAfterAppear,
      onAppearCancelled = props.onAppearCancelled;
  var key = String(vnode.key);
  var leavingVNodesCache = getLeavingNodesForType(state, vnode);

  var callHook = function callHook(hook, args) {
    hook && callWithAsyncErrorHandling(hook, instance, 9
    /* TRANSITION_HOOK */
    , args);
  };

  var hooks = {
    mode: mode,
    persisted: persisted,
    beforeEnter: function beforeEnter(el) {
      var hook = onBeforeEnter;

      if (!state.isMounted) {
        if (appear) {
          hook = onBeforeAppear || onBeforeEnter;
        } else {
          return;
        }
      } // for same element (v-show)


      if (el._leaveCb) {
        el._leaveCb(true
        /* cancelled */
        );
      } // for toggled element with same key (v-if)


      var leavingVNode = leavingVNodesCache[key];

      if (leavingVNode && isSameVNodeType(vnode, leavingVNode) && leavingVNode.el._leaveCb) {
        // force early removal (not cancelled)
        leavingVNode.el._leaveCb();
      }

      callHook(hook, [el]);
    },
    enter: function enter(el) {
      var hook = onEnter;
      var afterHook = onAfterEnter;
      var cancelHook = onEnterCancelled;

      if (!state.isMounted) {
        if (appear) {
          hook = onAppear || onEnter;
          afterHook = onAfterAppear || onAfterEnter;
          cancelHook = onAppearCancelled || onEnterCancelled;
        } else {
          return;
        }
      }

      var called = false;

      var done = el._enterCb = function (cancelled) {
        if (called) return;
        called = true;

        if (cancelled) {
          callHook(cancelHook, [el]);
        } else {
          callHook(afterHook, [el]);
        }

        if (hooks.delayedLeave) {
          hooks.delayedLeave();
        }

        el._enterCb = undefined;
      };

      if (hook) {
        hook(el, done);

        if (hook.length <= 1) {
          done();
        }
      } else {
        done();
      }
    },
    leave: function leave(el, remove) {
      var key = String(vnode.key);

      if (el._enterCb) {
        el._enterCb(true
        /* cancelled */
        );
      }

      if (state.isUnmounting) {
        return remove();
      }

      callHook(onBeforeLeave, [el]);
      var called = false;

      var done = el._leaveCb = function (cancelled) {
        if (called) return;
        called = true;
        remove();

        if (cancelled) {
          callHook(onLeaveCancelled, [el]);
        } else {
          callHook(onAfterLeave, [el]);
        }

        el._leaveCb = undefined;

        if (leavingVNodesCache[key] === vnode) {
          delete leavingVNodesCache[key];
        }
      };

      leavingVNodesCache[key] = vnode;

      if (onLeave) {
        onLeave(el, done);

        if (onLeave.length <= 1) {
          done();
        }
      } else {
        done();
      }
    },
    clone: function clone(vnode) {
      return resolveTransitionHooks(vnode, props, state, instance);
    }
  };
  return hooks;
} // the placeholder really only handles one special case: KeepAlive
// in the case of a KeepAlive in a leave phase we need to return a KeepAlive
// placeholder with empty content to avoid the KeepAlive instance from being
// unmounted.


function emptyPlaceholder(vnode) {
  if (isKeepAlive(vnode)) {
    vnode = cloneVNode(vnode);
    vnode.children = null;
    return vnode;
  }
}

function getKeepAliveChild(vnode) {
  return isKeepAlive(vnode) ? vnode.children ? vnode.children[0] : undefined : vnode;
}

function setTransitionHooks(vnode, hooks) {
  if (vnode.shapeFlag & 6
  /* COMPONENT */
  && vnode.component) {
    setTransitionHooks(vnode.component.subTree, hooks);
  } else if (vnode.shapeFlag & 128
  /* SUSPENSE */
  ) {
      vnode.ssContent.transition = hooks.clone(vnode.ssContent);
      vnode.ssFallback.transition = hooks.clone(vnode.ssFallback);
    } else {
    vnode.transition = hooks;
  }
}

function getTransitionRawChildren(children) {
  var keepComment = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  var ret = [];
  var keyedFragmentCount = 0;

  for (var i = 0; i < children.length; i++) {
    var child = children[i]; // handle fragment children case, e.g. v-for

    if (child.type === Fragment) {
      if (child.patchFlag & 128
      /* KEYED_FRAGMENT */
      ) keyedFragmentCount++;
      ret = ret.concat(getTransitionRawChildren(child.children, keepComment));
    } // comment placeholders should be skipped, e.g. v-if
    else if (keepComment || child.type !== Comment$1) {
        ret.push(child);
      }
  } // #1126 if a transition children list contains multiple sub fragments, these
  // fragments will be merged into a flat children array. Since each v-for
  // fragment may contain different static bindings inside, we need to de-op
  // these children to force full diffs to ensure correct behavior.


  if (keyedFragmentCount > 1) {
    for (var _i2 = 0; _i2 < ret.length; _i2++) {
      ret[_i2].patchFlag = -2
      /* BAIL */
      ;
    }
  }

  return ret;
} // implementation, close to no-op


function defineComponent(options) {
  return (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isFunction)(options) ? {
    setup: options,
    name: options.name
  } : options;
}

var isAsyncWrapper = function isAsyncWrapper(i) {
  return !!i.type.__asyncLoader;
};

function defineAsyncComponent(source) {
  if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isFunction)(source)) {
    source = {
      loader: source
    };
  }

  var _source = source,
      loader = _source.loader,
      loadingComponent = _source.loadingComponent,
      errorComponent = _source.errorComponent,
      _source$delay = _source.delay,
      delay = _source$delay === void 0 ? 200 : _source$delay,
      timeout = _source.timeout,
      _source$suspensible = _source.suspensible,
      suspensible = _source$suspensible === void 0 ? true : _source$suspensible,
      userOnError = _source.onError;
  var pendingRequest = null;
  var resolvedComp;
  var retries = 0;

  var retry = function retry() {
    retries++;
    pendingRequest = null;
    return load();
  };

  var load = function load() {
    var thisRequest;
    return pendingRequest || (thisRequest = pendingRequest = loader()["catch"](function (err) {
      err = err instanceof Error ? err : new Error(String(err));

      if (userOnError) {
        return new Promise(function (resolve, reject) {
          var userRetry = function userRetry() {
            return resolve(retry());
          };

          var userFail = function userFail() {
            return reject(err);
          };

          userOnError(err, userRetry, userFail, retries + 1);
        });
      } else {
        throw err;
      }
    }).then(function (comp) {
      if (thisRequest !== pendingRequest && pendingRequest) {
        return pendingRequest;
      }

      if ( true && !comp) {
        warn("Async component loader resolved to undefined. " + "If you are using retry(), make sure to return its return value.");
      } // interop module default


      if (comp && (comp.__esModule || comp[Symbol.toStringTag] === 'Module')) {
        comp = comp["default"];
      }

      if ( true && comp && !(0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isObject)(comp) && !(0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isFunction)(comp)) {
        throw new Error("Invalid async component load result: ".concat(comp));
      }

      resolvedComp = comp;
      return comp;
    }));
  };

  return defineComponent({
    name: 'AsyncComponentWrapper',
    __asyncLoader: load,

    get __asyncResolved() {
      return resolvedComp;
    },

    setup: function setup() {
      var instance = currentInstance; // already resolved

      if (resolvedComp) {
        return function () {
          return createInnerComp(resolvedComp, instance);
        };
      }

      var onError = function onError(err) {
        pendingRequest = null;
        handleError(err, instance, 13
        /* ASYNC_COMPONENT_LOADER */
        , !errorComponent
        /* do not throw in dev if user provided error component */
        );
      }; // suspense-controlled or SSR.


      if (suspensible && instance.suspense || false) {
        return load().then(function (comp) {
          return function () {
            return createInnerComp(comp, instance);
          };
        })["catch"](function (err) {
          onError(err);
          return function () {
            return errorComponent ? createVNode(errorComponent, {
              error: err
            }) : null;
          };
        });
      }

      var loaded = (0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.ref)(false);
      var error = (0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.ref)();
      var delayed = (0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.ref)(!!delay);

      if (delay) {
        setTimeout(function () {
          delayed.value = false;
        }, delay);
      }

      if (timeout != null) {
        setTimeout(function () {
          if (!loaded.value && !error.value) {
            var err = new Error("Async component timed out after ".concat(timeout, "ms."));
            onError(err);
            error.value = err;
          }
        }, timeout);
      }

      load().then(function () {
        loaded.value = true;

        if (instance.parent && isKeepAlive(instance.parent.vnode)) {
          // parent is keep-alive, force update so the loaded component's
          // name is taken into account
          queueJob(instance.parent.update);
        }
      })["catch"](function (err) {
        onError(err);
        error.value = err;
      });
      return function () {
        if (loaded.value && resolvedComp) {
          return createInnerComp(resolvedComp, instance);
        } else if (error.value && errorComponent) {
          return createVNode(errorComponent, {
            error: error.value
          });
        } else if (loadingComponent && !delayed.value) {
          return createVNode(loadingComponent);
        }
      };
    }
  });
}

function createInnerComp(comp, _ref8) {
  var _ref8$vnode = _ref8.vnode,
      ref = _ref8$vnode.ref,
      props = _ref8$vnode.props,
      children = _ref8$vnode.children;
  var vnode = createVNode(comp, props, children); // ensure inner component inherits the async wrapper's ref owner

  vnode.ref = ref;
  return vnode;
}

var isKeepAlive = function isKeepAlive(vnode) {
  return vnode.type.__isKeepAlive;
};

var KeepAliveImpl = {
  name: "KeepAlive",
  // Marker for special handling inside the renderer. We are not using a ===
  // check directly on KeepAlive in the renderer, because importing it directly
  // would prevent it from being tree-shaken.
  __isKeepAlive: true,
  props: {
    include: [String, RegExp, Array],
    exclude: [String, RegExp, Array],
    max: [String, Number]
  },
  setup: function setup(props, _ref9) {
    var slots = _ref9.slots;
    var instance = getCurrentInstance(); // KeepAlive communicates with the instantiated renderer via the
    // ctx where the renderer passes in its internals,
    // and the KeepAlive instance exposes activate/deactivate implementations.
    // The whole point of this is to avoid importing KeepAlive directly in the
    // renderer to facilitate tree-shaking.

    var sharedContext = instance.ctx; // if the internal renderer is not registered, it indicates that this is server-side rendering,
    // for KeepAlive, we just need to render its children

    if (!sharedContext.renderer) {
      return slots["default"];
    }

    var cache = new Map();
    var keys = new Set();
    var current = null;

    if (true) {
      instance.__v_cache = cache;
    }

    var parentSuspense = instance.suspense;
    var _sharedContext$render = sharedContext.renderer,
        patch = _sharedContext$render.p,
        move = _sharedContext$render.m,
        _unmount = _sharedContext$render.um,
        createElement = _sharedContext$render.o.createElement;
    var storageContainer = createElement('div');

    sharedContext.activate = function (vnode, container, anchor, isSVG, optimized) {
      var instance = vnode.component;
      move(vnode, container, anchor, 0
      /* ENTER */
      , parentSuspense); // in case props have changed

      patch(instance.vnode, vnode, container, anchor, instance, parentSuspense, isSVG, vnode.slotScopeIds, optimized);
      queuePostRenderEffect(function () {
        instance.isDeactivated = false;

        if (instance.a) {
          (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.invokeArrayFns)(instance.a);
        }

        var vnodeHook = vnode.props && vnode.props.onVnodeMounted;

        if (vnodeHook) {
          invokeVNodeHook(vnodeHook, instance.parent, vnode);
        }
      }, parentSuspense);

      if (true) {
        // Update components tree
        devtoolsComponentAdded(instance);
      }
    };

    sharedContext.deactivate = function (vnode) {
      var instance = vnode.component;
      move(vnode, storageContainer, null, 1
      /* LEAVE */
      , parentSuspense);
      queuePostRenderEffect(function () {
        if (instance.da) {
          (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.invokeArrayFns)(instance.da);
        }

        var vnodeHook = vnode.props && vnode.props.onVnodeUnmounted;

        if (vnodeHook) {
          invokeVNodeHook(vnodeHook, instance.parent, vnode);
        }

        instance.isDeactivated = true;
      }, parentSuspense);

      if (true) {
        // Update components tree
        devtoolsComponentAdded(instance);
      }
    };

    function unmount(vnode) {
      // reset the shapeFlag so it can be properly unmounted
      resetShapeFlag(vnode);

      _unmount(vnode, instance, parentSuspense);
    }

    function pruneCache(filter) {
      cache.forEach(function (vnode, key) {
        var name = getComponentName(vnode.type);

        if (name && (!filter || !filter(name))) {
          pruneCacheEntry(key);
        }
      });
    }

    function pruneCacheEntry(key) {
      var cached = cache.get(key);

      if (!current || cached.type !== current.type) {
        unmount(cached);
      } else if (current) {
        // current active instance should no longer be kept-alive.
        // we can't unmount it now but it might be later, so reset its flag now.
        resetShapeFlag(current);
      }

      cache["delete"](key);
      keys["delete"](key);
    } // prune cache on include/exclude prop change


    watch(function () {
      return [props.include, props.exclude];
    }, function (_ref10) {
      var _ref11 = _slicedToArray(_ref10, 2),
          include = _ref11[0],
          exclude = _ref11[1];

      include && pruneCache(function (name) {
        return matches(include, name);
      });
      exclude && pruneCache(function (name) {
        return !matches(exclude, name);
      });
    }, // prune post-render after `current` has been updated
    {
      flush: 'post',
      deep: true
    }); // cache sub tree after render

    var pendingCacheKey = null;

    var cacheSubtree = function cacheSubtree() {
      // fix #1621, the pendingCacheKey could be 0
      if (pendingCacheKey != null) {
        cache.set(pendingCacheKey, getInnerChild(instance.subTree));
      }
    };

    onMounted(cacheSubtree);
    onUpdated(cacheSubtree);
    onBeforeUnmount(function () {
      cache.forEach(function (cached) {
        var subTree = instance.subTree,
            suspense = instance.suspense;
        var vnode = getInnerChild(subTree);

        if (cached.type === vnode.type) {
          // current instance will be unmounted as part of keep-alive's unmount
          resetShapeFlag(vnode); // but invoke its deactivated hook here

          var da = vnode.component.da;
          da && queuePostRenderEffect(da, suspense);
          return;
        }

        unmount(cached);
      });
    });
    return function () {
      pendingCacheKey = null;

      if (!slots["default"]) {
        return null;
      }

      var children = slots["default"]();
      var rawVNode = children[0];

      if (children.length > 1) {
        if (true) {
          warn("KeepAlive should contain exactly one component child.");
        }

        current = null;
        return children;
      } else if (!isVNode(rawVNode) || !(rawVNode.shapeFlag & 4
      /* STATEFUL_COMPONENT */
      ) && !(rawVNode.shapeFlag & 128
      /* SUSPENSE */
      )) {
        current = null;
        return rawVNode;
      }

      var vnode = getInnerChild(rawVNode);
      var comp = vnode.type; // for async components, name check should be based in its loaded
      // inner component if available

      var name = getComponentName(isAsyncWrapper(vnode) ? vnode.type.__asyncResolved || {} : comp);
      var include = props.include,
          exclude = props.exclude,
          max = props.max;

      if (include && (!name || !matches(include, name)) || exclude && name && matches(exclude, name)) {
        current = vnode;
        return rawVNode;
      }

      var key = vnode.key == null ? comp : vnode.key;
      var cachedVNode = cache.get(key); // clone vnode if it's reused because we are going to mutate it

      if (vnode.el) {
        vnode = cloneVNode(vnode);

        if (rawVNode.shapeFlag & 128
        /* SUSPENSE */
        ) {
            rawVNode.ssContent = vnode;
          }
      } // #1513 it's possible for the returned vnode to be cloned due to attr
      // fallthrough or scopeId, so the vnode here may not be the final vnode
      // that is mounted. Instead of caching it directly, we store the pending
      // key and cache `instance.subTree` (the normalized vnode) in
      // beforeMount/beforeUpdate hooks.


      pendingCacheKey = key;

      if (cachedVNode) {
        // copy over mounted state
        vnode.el = cachedVNode.el;
        vnode.component = cachedVNode.component;

        if (vnode.transition) {
          // recursively update transition hooks on subTree
          setTransitionHooks(vnode, vnode.transition);
        } // avoid vnode being mounted as fresh


        vnode.shapeFlag |= 512
        /* COMPONENT_KEPT_ALIVE */
        ; // make this key the freshest

        keys["delete"](key);
        keys.add(key);
      } else {
        keys.add(key); // prune oldest entry

        if (max && keys.size > parseInt(max, 10)) {
          pruneCacheEntry(keys.values().next().value);
        }
      } // avoid vnode being unmounted


      vnode.shapeFlag |= 256
      /* COMPONENT_SHOULD_KEEP_ALIVE */
      ;
      current = vnode;
      return rawVNode;
    };
  }
}; // export the public type for h/tsx inference
// also to avoid inline import() in generated d.ts files

var KeepAlive = KeepAliveImpl;

function matches(pattern, name) {
  if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isArray)(pattern)) {
    return pattern.some(function (p) {
      return matches(p, name);
    });
  } else if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isString)(pattern)) {
    return pattern.split(',').indexOf(name) > -1;
  } else if (pattern.test) {
    return pattern.test(name);
  }
  /* istanbul ignore next */


  return false;
}

function onActivated(hook, target) {
  registerKeepAliveHook(hook, "a"
  /* ACTIVATED */
  , target);
}

function onDeactivated(hook, target) {
  registerKeepAliveHook(hook, "da"
  /* DEACTIVATED */
  , target);
}

function registerKeepAliveHook(hook, type) {
  var target = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : currentInstance;

  // cache the deactivate branch check wrapper for injected hooks so the same
  // hook can be properly deduped by the scheduler. "__wdc" stands for "with
  // deactivation check".
  var wrappedHook = hook.__wdc || (hook.__wdc = function () {
    // only fire the hook if the target instance is NOT in a deactivated branch.
    var current = target;

    while (current) {
      if (current.isDeactivated) {
        return;
      }

      current = current.parent;
    }

    hook();
  });

  injectHook(type, wrappedHook, target); // In addition to registering it on the target instance, we walk up the parent
  // chain and register it on all ancestor instances that are keep-alive roots.
  // This avoids the need to walk the entire component tree when invoking these
  // hooks, and more importantly, avoids the need to track child components in
  // arrays.

  if (target) {
    var current = target.parent;

    while (current && current.parent) {
      if (isKeepAlive(current.parent.vnode)) {
        injectToKeepAliveRoot(wrappedHook, type, target, current);
      }

      current = current.parent;
    }
  }
}

function injectToKeepAliveRoot(hook, type, target, keepAliveRoot) {
  // injectHook wraps the original for error handling, so make sure to remove
  // the wrapped version.
  var injected = injectHook(type, hook, keepAliveRoot, true
  /* prepend */
  );
  onUnmounted(function () {
    (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.remove)(keepAliveRoot[type], injected);
  }, target);
}

function resetShapeFlag(vnode) {
  var shapeFlag = vnode.shapeFlag;

  if (shapeFlag & 256
  /* COMPONENT_SHOULD_KEEP_ALIVE */
  ) {
      shapeFlag -= 256
      /* COMPONENT_SHOULD_KEEP_ALIVE */
      ;
    }

  if (shapeFlag & 512
  /* COMPONENT_KEPT_ALIVE */
  ) {
      shapeFlag -= 512
      /* COMPONENT_KEPT_ALIVE */
      ;
    }

  vnode.shapeFlag = shapeFlag;
}

function getInnerChild(vnode) {
  return vnode.shapeFlag & 128
  /* SUSPENSE */
  ? vnode.ssContent : vnode;
}

function injectHook(type, hook) {
  var target = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : currentInstance;
  var prepend = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;

  if (target) {
    var hooks = target[type] || (target[type] = []); // cache the error handling wrapper for injected hooks so the same hook
    // can be properly deduped by the scheduler. "__weh" stands for "with error
    // handling".

    var wrappedHook = hook.__weh || (hook.__weh = function () {
      if (target.isUnmounted) {
        return;
      } // disable tracking inside all lifecycle hooks
      // since they can potentially be called inside effects.


      (0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.pauseTracking)(); // Set currentInstance during hook invocation.
      // This assumes the hook does not synchronously trigger other hooks, which
      // can only be false when the user does something really funky.

      setCurrentInstance(target);

      for (var _len4 = arguments.length, args = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
        args[_key4] = arguments[_key4];
      }

      var res = callWithAsyncErrorHandling(hook, target, type, args);
      setCurrentInstance(null);
      (0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.resetTracking)();
      return res;
    });

    if (prepend) {
      hooks.unshift(wrappedHook);
    } else {
      hooks.push(wrappedHook);
    }

    return wrappedHook;
  } else if (true) {
    var apiName = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.toHandlerKey)(ErrorTypeStrings[type].replace(/ hook$/, ''));
    warn("".concat(apiName, " is called when there is no active component instance to be ") + "associated with. " + "Lifecycle injection APIs can only be used during execution of setup()." + (" If you are using async setup(), make sure to register lifecycle " + "hooks before the first await statement."));
  }
}

var createHook = function createHook(lifecycle) {
  return function (hook) {
    var target = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : currentInstance;
    return (// post-create lifecycle registrations are noops during SSR (except for serverPrefetch)
      (!isInSSRComponentSetup || lifecycle === "sp"
      /* SERVER_PREFETCH */
      ) && injectHook(lifecycle, hook, target)
    );
  };
};

var onBeforeMount = createHook("bm"
/* BEFORE_MOUNT */
);
var onMounted = createHook("m"
/* MOUNTED */
);
var onBeforeUpdate = createHook("bu"
/* BEFORE_UPDATE */
);
var onUpdated = createHook("u"
/* UPDATED */
);
var onBeforeUnmount = createHook("bum"
/* BEFORE_UNMOUNT */
);
var onUnmounted = createHook("um"
/* UNMOUNTED */
);
var onServerPrefetch = createHook("sp"
/* SERVER_PREFETCH */
);
var onRenderTriggered = createHook("rtg"
/* RENDER_TRIGGERED */
);
var onRenderTracked = createHook("rtc"
/* RENDER_TRACKED */
);

function onErrorCaptured(hook) {
  var target = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : currentInstance;
  injectHook("ec"
  /* ERROR_CAPTURED */
  , hook, target);
}

function createDuplicateChecker() {
  var cache = Object.create(null);
  return function (type, key) {
    if (cache[key]) {
      warn("".concat(type, " property \"").concat(key, "\" is already defined in ").concat(cache[key], "."));
    } else {
      cache[key] = type;
    }
  };
}

var shouldCacheAccess = true;

function applyOptions(instance) {
  var options = resolveMergedOptions(instance);
  var publicThis = instance.proxy;
  var ctx = instance.ctx; // do not cache property access on public proxy during state initialization

  shouldCacheAccess = false; // call beforeCreate first before accessing other options since
  // the hook may mutate resolved options (#2791)

  if (options.beforeCreate) {
    callHook(options.beforeCreate, instance, "bc"
    /* BEFORE_CREATE */
    );
  }

  var dataOptions = options.data,
      computedOptions = options.computed,
      methods = options.methods,
      watchOptions = options.watch,
      provideOptions = options.provide,
      injectOptions = options.inject,
      created = options.created,
      beforeMount = options.beforeMount,
      mounted = options.mounted,
      beforeUpdate = options.beforeUpdate,
      updated = options.updated,
      activated = options.activated,
      deactivated = options.deactivated,
      beforeDestroy = options.beforeDestroy,
      beforeUnmount = options.beforeUnmount,
      destroyed = options.destroyed,
      unmounted = options.unmounted,
      render = options.render,
      renderTracked = options.renderTracked,
      renderTriggered = options.renderTriggered,
      errorCaptured = options.errorCaptured,
      serverPrefetch = options.serverPrefetch,
      expose = options.expose,
      inheritAttrs = options.inheritAttrs,
      components = options.components,
      directives = options.directives,
      filters = options.filters;
  var checkDuplicateProperties =  true ? createDuplicateChecker() : 0;

  if (true) {
    var _instance$propsOption3 = _slicedToArray(instance.propsOptions, 1),
        propsOptions = _instance$propsOption3[0];

    if (propsOptions) {
      for (var key in propsOptions) {
        checkDuplicateProperties("Props"
        /* PROPS */
        , key);
      }
    }
  } // options initialization order (to be consistent with Vue 2):
  // - props (already done outside of this function)
  // - inject
  // - methods
  // - data (deferred since it relies on `this` access)
  // - computed
  // - watch (deferred since it relies on `this` access)


  if (injectOptions) {
    resolveInjections(injectOptions, ctx, checkDuplicateProperties);
  }

  if (methods) {
    for (var _key5 in methods) {
      var methodHandler = methods[_key5];

      if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isFunction)(methodHandler)) {
        // In dev mode, we use the `createRenderContext` function to define methods to the proxy target,
        // and those are read-only but reconfigurable, so it needs to be redefined here
        if (true) {
          Object.defineProperty(ctx, _key5, {
            value: methodHandler.bind(publicThis),
            configurable: true,
            enumerable: true,
            writable: true
          });
        } else {}

        if (true) {
          checkDuplicateProperties("Methods"
          /* METHODS */
          , _key5);
        }
      } else if (true) {
        warn("Method \"".concat(_key5, "\" has type \"").concat(_typeof(methodHandler), "\" in the component definition. ") + "Did you reference the function correctly?");
      }
    }
  }

  if (dataOptions) {
    (function () {
      if ( true && !(0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isFunction)(dataOptions)) {
        warn("The data option must be a function. " + "Plain object usage is no longer supported.");
      }

      var data = dataOptions.call(publicThis, publicThis);

      if ( true && (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isPromise)(data)) {
        warn("data() returned a Promise - note data() cannot be async; If you " + "intend to perform data fetching before component renders, use " + "async setup() + <Suspense>.");
      }

      if (!(0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isObject)(data)) {
         true && warn("data() should return an object.");
      } else {
        instance.data = (0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.reactive)(data);

        if (true) {
          var _loop = function _loop(_key6) {
            checkDuplicateProperties("Data"
            /* DATA */
            , _key6); // expose data on ctx during dev

            if (_key6[0] !== '$' && _key6[0] !== '_') {
              Object.defineProperty(ctx, _key6, {
                configurable: true,
                enumerable: true,
                get: function get() {
                  return data[_key6];
                },
                set: _vue_shared__WEBPACK_IMPORTED_MODULE_1__.NOOP
              });
            }
          };

          for (var _key6 in data) {
            _loop(_key6);
          }
        }
      }
    })();
  } // state initialization complete at this point - start caching access


  shouldCacheAccess = true;

  if (computedOptions) {
    var _loop2 = function _loop2(_key7) {
      var opt = computedOptions[_key7];
      var get = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isFunction)(opt) ? opt.bind(publicThis, publicThis) : (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isFunction)(opt.get) ? opt.get.bind(publicThis, publicThis) : _vue_shared__WEBPACK_IMPORTED_MODULE_1__.NOOP;

      if ( true && get === _vue_shared__WEBPACK_IMPORTED_MODULE_1__.NOOP) {
        warn("Computed property \"".concat(_key7, "\" has no getter."));
      }

      var set = !(0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isFunction)(opt) && (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isFunction)(opt.set) ? opt.set.bind(publicThis) :  true ? function () {
        warn("Write operation failed: computed property \"".concat(_key7, "\" is readonly."));
      } : 0;
      var c = computed({
        get: get,
        set: set
      });
      Object.defineProperty(ctx, _key7, {
        enumerable: true,
        configurable: true,
        get: function get() {
          return c.value;
        },
        set: function set(v) {
          return c.value = v;
        }
      });

      if (true) {
        checkDuplicateProperties("Computed"
        /* COMPUTED */
        , _key7);
      }
    };

    for (var _key7 in computedOptions) {
      _loop2(_key7);
    }
  }

  if (watchOptions) {
    for (var _key8 in watchOptions) {
      createWatcher(watchOptions[_key8], ctx, publicThis, _key8);
    }
  }

  if (provideOptions) {
    var provides = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isFunction)(provideOptions) ? provideOptions.call(publicThis) : provideOptions;
    Reflect.ownKeys(provides).forEach(function (key) {
      provide(key, provides[key]);
    });
  }

  if (created) {
    callHook(created, instance, "c"
    /* CREATED */
    );
  }

  function registerLifecycleHook(register, hook) {
    if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isArray)(hook)) {
      hook.forEach(function (_hook) {
        return register(_hook.bind(publicThis));
      });
    } else if (hook) {
      register(hook.bind(publicThis));
    }
  }

  registerLifecycleHook(onBeforeMount, beforeMount);
  registerLifecycleHook(onMounted, mounted);
  registerLifecycleHook(onBeforeUpdate, beforeUpdate);
  registerLifecycleHook(onUpdated, updated);
  registerLifecycleHook(onActivated, activated);
  registerLifecycleHook(onDeactivated, deactivated);
  registerLifecycleHook(onErrorCaptured, errorCaptured);
  registerLifecycleHook(onRenderTracked, renderTracked);
  registerLifecycleHook(onRenderTriggered, renderTriggered);
  registerLifecycleHook(onBeforeUnmount, beforeUnmount);
  registerLifecycleHook(onUnmounted, unmounted);
  registerLifecycleHook(onServerPrefetch, serverPrefetch);

  if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isArray)(expose)) {
    if (expose.length) {
      var exposed = instance.exposed || (instance.exposed = (0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.proxyRefs)({}));
      expose.forEach(function (key) {
        exposed[key] = (0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.toRef)(publicThis, key);
      });
    } else if (!instance.exposed) {
      instance.exposed = _vue_shared__WEBPACK_IMPORTED_MODULE_1__.EMPTY_OBJ;
    }
  } // options that are handled when creating the instance but also need to be
  // applied from mixins


  if (render && instance.render === _vue_shared__WEBPACK_IMPORTED_MODULE_1__.NOOP) {
    instance.render = render;
  }

  if (inheritAttrs != null) {
    instance.inheritAttrs = inheritAttrs;
  } // asset options.


  if (components) instance.components = components;
  if (directives) instance.directives = directives;
}

function resolveInjections(injectOptions, ctx) {
  var checkDuplicateProperties = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : _vue_shared__WEBPACK_IMPORTED_MODULE_1__.NOOP;

  if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isArray)(injectOptions)) {
    injectOptions = normalizeInject(injectOptions);
  }

  for (var key in injectOptions) {
    var opt = injectOptions[key];

    if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isObject)(opt)) {
      if ('default' in opt) {
        ctx[key] = inject(opt.from || key, opt["default"], true
        /* treat default function as factory */
        );
      } else {
        ctx[key] = inject(opt.from || key);
      }
    } else {
      ctx[key] = inject(opt);
    }

    if (true) {
      checkDuplicateProperties("Inject"
      /* INJECT */
      , key);
    }
  }
}

function callHook(hook, instance, type) {
  callWithAsyncErrorHandling((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isArray)(hook) ? hook.map(function (h) {
    return h.bind(instance.proxy);
  }) : hook.bind(instance.proxy), instance, type);
}

function createWatcher(raw, ctx, publicThis, key) {
  var getter = key.includes('.') ? createPathGetter(publicThis, key) : function () {
    return publicThis[key];
  };

  if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isString)(raw)) {
    var handler = ctx[raw];

    if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isFunction)(handler)) {
      watch(getter, handler);
    } else if (true) {
      warn("Invalid watch handler specified by key \"".concat(raw, "\""), handler);
    }
  } else if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isFunction)(raw)) {
    watch(getter, raw.bind(publicThis));
  } else if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isObject)(raw)) {
    if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isArray)(raw)) {
      raw.forEach(function (r) {
        return createWatcher(r, ctx, publicThis, key);
      });
    } else {
      var _handler = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isFunction)(raw.handler) ? raw.handler.bind(publicThis) : ctx[raw.handler];

      if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isFunction)(_handler)) {
        watch(getter, _handler, raw);
      } else if (true) {
        warn("Invalid watch handler specified by key \"".concat(raw.handler, "\""), _handler);
      }
    }
  } else if (true) {
    warn("Invalid watch option: \"".concat(key, "\""), raw);
  }
}
/**
 * Resolve merged options and cache it on the component.
 * This is done only once per-component since the merging does not involve
 * instances.
 */


function resolveMergedOptions(instance) {
  var base = instance.type;
  var mixins = base.mixins,
      extendsOptions = base["extends"];
  var _instance$appContext = instance.appContext,
      globalMixins = _instance$appContext.mixins,
      cache = _instance$appContext.optionsCache,
      optionMergeStrategies = _instance$appContext.config.optionMergeStrategies;
  var cached = cache.get(base);
  var resolved;

  if (cached) {
    resolved = cached;
  } else if (!globalMixins.length && !mixins && !extendsOptions) {
    {
      resolved = base;
    }
  } else {
    resolved = {};

    if (globalMixins.length) {
      globalMixins.forEach(function (m) {
        return mergeOptions(resolved, m, optionMergeStrategies, true);
      });
    }

    mergeOptions(resolved, base, optionMergeStrategies);
  }

  cache.set(base, resolved);
  return resolved;
}

function mergeOptions(to, from, strats) {
  var asMixin = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
  var mixins = from.mixins,
      extendsOptions = from["extends"];

  if (extendsOptions) {
    mergeOptions(to, extendsOptions, strats, true);
  }

  if (mixins) {
    mixins.forEach(function (m) {
      return mergeOptions(to, m, strats, true);
    });
  }

  for (var key in from) {
    if (asMixin && key === 'expose') {
       true && warn("\"expose\" option is ignored when declared in mixins or extends. " + "It should only be declared in the base component itself.");
    } else {
      var strat = internalOptionMergeStrats[key] || strats && strats[key];
      to[key] = strat ? strat(to[key], from[key]) : from[key];
    }
  }

  return to;
}

var internalOptionMergeStrats = {
  data: mergeDataFn,
  props: mergeObjectOptions,
  emits: mergeObjectOptions,
  // objects
  methods: mergeObjectOptions,
  computed: mergeObjectOptions,
  // lifecycle
  beforeCreate: mergeAsArray,
  created: mergeAsArray,
  beforeMount: mergeAsArray,
  mounted: mergeAsArray,
  beforeUpdate: mergeAsArray,
  updated: mergeAsArray,
  beforeDestroy: mergeAsArray,
  destroyed: mergeAsArray,
  activated: mergeAsArray,
  deactivated: mergeAsArray,
  errorCaptured: mergeAsArray,
  serverPrefetch: mergeAsArray,
  // assets
  components: mergeObjectOptions,
  directives: mergeObjectOptions,
  // watch
  watch: mergeWatchOptions,
  // provide / inject
  provide: mergeDataFn,
  inject: mergeInject
};

function mergeDataFn(to, from) {
  if (!from) {
    return to;
  }

  if (!to) {
    return from;
  }

  return function mergedDataFn() {
    return (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.extend)((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isFunction)(to) ? to.call(this, this) : to, (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isFunction)(from) ? from.call(this, this) : from);
  };
}

function mergeInject(to, from) {
  return mergeObjectOptions(normalizeInject(to), normalizeInject(from));
}

function normalizeInject(raw) {
  if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isArray)(raw)) {
    var res = {};

    for (var i = 0; i < raw.length; i++) {
      res[raw[i]] = raw[i];
    }

    return res;
  }

  return raw;
}

function mergeAsArray(to, from) {
  return to ? _toConsumableArray(new Set([].concat(to, from))) : from;
}

function mergeObjectOptions(to, from) {
  return to ? (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.extend)((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.extend)(Object.create(null), to), from) : from;
}

function mergeWatchOptions(to, from) {
  if (!to) return from;
  if (!from) return to;
  var merged = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.extend)(Object.create(null), to);

  for (var key in from) {
    merged[key] = mergeAsArray(to[key], from[key]);
  }

  return merged;
}

function initProps(instance, rawProps, isStateful) {
  var isSSR = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
  var props = {};
  var attrs = {};
  (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.def)(attrs, InternalObjectKey, 1);
  instance.propsDefaults = Object.create(null);
  setFullProps(instance, rawProps, props, attrs); // ensure all declared prop keys are present

  for (var key in instance.propsOptions[0]) {
    if (!(key in props)) {
      props[key] = undefined;
    }
  } // validation


  if (true) {
    validateProps(rawProps || {}, props, instance);
  }

  if (isStateful) {
    // stateful
    instance.props = isSSR ? props : (0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.shallowReactive)(props);
  } else {
    if (!instance.type.props) {
      // functional w/ optional props, props === attrs
      instance.props = attrs;
    } else {
      // functional w/ declared props
      instance.props = props;
    }
  }

  instance.attrs = attrs;
}

function updateProps(instance, rawProps, rawPrevProps, optimized) {
  var props = instance.props,
      attrs = instance.attrs,
      patchFlag = instance.vnode.patchFlag;
  var rawCurrentProps = (0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.toRaw)(props);

  var _instance$propsOption4 = _slicedToArray(instance.propsOptions, 1),
      options = _instance$propsOption4[0];

  var hasAttrsChanged = false;

  if ( // always force full diff in dev
  // - #1942 if hmr is enabled with sfc component
  // - vite#872 non-sfc component used by sfc component
  !( true && (instance.type.__hmrId || instance.parent && instance.parent.type.__hmrId)) && (optimized || patchFlag > 0) && !(patchFlag & 16
  /* FULL_PROPS */
  )) {
    if (patchFlag & 8
    /* PROPS */
    ) {
        // Compiler-generated props & no keys change, just set the updated
        // the props.
        var propsToUpdate = instance.vnode.dynamicProps;

        for (var i = 0; i < propsToUpdate.length; i++) {
          var key = propsToUpdate[i]; // PROPS flag guarantees rawProps to be non-null

          var value = rawProps[key];

          if (options) {
            // attr / props separation was done on init and will be consistent
            // in this code path, so just check if attrs have it.
            if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.hasOwn)(attrs, key)) {
              if (value !== attrs[key]) {
                attrs[key] = value;
                hasAttrsChanged = true;
              }
            } else {
              var camelizedKey = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.camelize)(key);
              props[camelizedKey] = resolvePropValue(options, rawCurrentProps, camelizedKey, value, instance, false
              /* isAbsent */
              );
            }
          } else {
            if (value !== attrs[key]) {
              attrs[key] = value;
              hasAttrsChanged = true;
            }
          }
        }
      }
  } else {
    // full props update.
    if (setFullProps(instance, rawProps, props, attrs)) {
      hasAttrsChanged = true;
    } // in case of dynamic props, check if we need to delete keys from
    // the props object


    var kebabKey;

    for (var _key9 in rawCurrentProps) {
      if (!rawProps || // for camelCase
      !(0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.hasOwn)(rawProps, _key9) && ( // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      (kebabKey = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.hyphenate)(_key9)) === _key9 || !(0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.hasOwn)(rawProps, kebabKey))) {
        if (options) {
          if (rawPrevProps && ( // for camelCase
          rawPrevProps[_key9] !== undefined || // for kebab-case
          rawPrevProps[kebabKey] !== undefined)) {
            props[_key9] = resolvePropValue(options, rawCurrentProps, _key9, undefined, instance, true
            /* isAbsent */
            );
          }
        } else {
          delete props[_key9];
        }
      }
    } // in the case of functional component w/o props declaration, props and
    // attrs point to the same object so it should already have been updated.


    if (attrs !== rawCurrentProps) {
      for (var _key10 in attrs) {
        if (!rawProps || !(0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.hasOwn)(rawProps, _key10)) {
          delete attrs[_key10];
          hasAttrsChanged = true;
        }
      }
    }
  } // trigger updates for $attrs in case it's used in component slots


  if (hasAttrsChanged) {
    (0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.trigger)(instance, "set"
    /* SET */
    , '$attrs');
  }

  if (true) {
    validateProps(rawProps || {}, props, instance);
  }
}

function setFullProps(instance, rawProps, props, attrs) {
  var _instance$propsOption5 = _slicedToArray(instance.propsOptions, 2),
      options = _instance$propsOption5[0],
      needCastKeys = _instance$propsOption5[1];

  var hasAttrsChanged = false;
  var rawCastValues;

  if (rawProps) {
    for (var key in rawProps) {
      // key, ref are reserved and never passed down
      if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isReservedProp)(key)) {
        continue;
      }

      var value = rawProps[key]; // prop option names are camelized during normalization, so to support
      // kebab -> camel conversion here we need to camelize the key.

      var camelKey = void 0;

      if (options && (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.hasOwn)(options, camelKey = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.camelize)(key))) {
        if (!needCastKeys || !needCastKeys.includes(camelKey)) {
          props[camelKey] = value;
        } else {
          (rawCastValues || (rawCastValues = {}))[camelKey] = value;
        }
      } else if (!isEmitListener(instance.emitsOptions, key)) {
        if (value !== attrs[key]) {
          attrs[key] = value;
          hasAttrsChanged = true;
        }
      }
    }
  }

  if (needCastKeys) {
    var rawCurrentProps = (0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.toRaw)(props);
    var castValues = rawCastValues || _vue_shared__WEBPACK_IMPORTED_MODULE_1__.EMPTY_OBJ;

    for (var i = 0; i < needCastKeys.length; i++) {
      var _key11 = needCastKeys[i];
      props[_key11] = resolvePropValue(options, rawCurrentProps, _key11, castValues[_key11], instance, !(0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.hasOwn)(castValues, _key11));
    }
  }

  return hasAttrsChanged;
}

function resolvePropValue(options, props, key, value, instance, isAbsent) {
  var opt = options[key];

  if (opt != null) {
    var hasDefault = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.hasOwn)(opt, 'default'); // default values

    if (hasDefault && value === undefined) {
      var defaultValue = opt["default"];

      if (opt.type !== Function && (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isFunction)(defaultValue)) {
        var propsDefaults = instance.propsDefaults;

        if (key in propsDefaults) {
          value = propsDefaults[key];
        } else {
          setCurrentInstance(instance);
          value = propsDefaults[key] = defaultValue.call(null, props);
          setCurrentInstance(null);
        }
      } else {
        value = defaultValue;
      }
    } // boolean casting


    if (opt[0
    /* shouldCast */
    ]) {
      if (isAbsent && !hasDefault) {
        value = false;
      } else if (opt[1
      /* shouldCastTrue */
      ] && (value === '' || value === (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.hyphenate)(key))) {
        value = true;
      }
    }
  }

  return value;
}

function normalizePropsOptions(comp, appContext) {
  var asMixin = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  var cache = appContext.propsCache;
  var cached = cache.get(comp);

  if (cached) {
    return cached;
  }

  var raw = comp.props;
  var normalized = {};
  var needCastKeys = []; // apply mixin/extends props

  var hasExtends = false;

  if (__VUE_OPTIONS_API__ && !(0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isFunction)(comp)) {
    var extendProps = function extendProps(raw) {
      hasExtends = true;

      var _normalizePropsOption = normalizePropsOptions(raw, appContext, true),
          _normalizePropsOption2 = _slicedToArray(_normalizePropsOption, 2),
          props = _normalizePropsOption2[0],
          keys = _normalizePropsOption2[1];

      (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.extend)(normalized, props);
      if (keys) needCastKeys.push.apply(needCastKeys, _toConsumableArray(keys));
    };

    if (!asMixin && appContext.mixins.length) {
      appContext.mixins.forEach(extendProps);
    }

    if (comp["extends"]) {
      extendProps(comp["extends"]);
    }

    if (comp.mixins) {
      comp.mixins.forEach(extendProps);
    }
  }

  if (!raw && !hasExtends) {
    cache.set(comp, _vue_shared__WEBPACK_IMPORTED_MODULE_1__.EMPTY_ARR);
    return _vue_shared__WEBPACK_IMPORTED_MODULE_1__.EMPTY_ARR;
  }

  if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isArray)(raw)) {
    for (var i = 0; i < raw.length; i++) {
      if ( true && !(0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isString)(raw[i])) {
        warn("props must be strings when using array syntax.", raw[i]);
      }

      var normalizedKey = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.camelize)(raw[i]);

      if (validatePropName(normalizedKey)) {
        normalized[normalizedKey] = _vue_shared__WEBPACK_IMPORTED_MODULE_1__.EMPTY_OBJ;
      }
    }
  } else if (raw) {
    if ( true && !(0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isObject)(raw)) {
      warn("invalid props options", raw);
    }

    for (var key in raw) {
      var _normalizedKey = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.camelize)(key);

      if (validatePropName(_normalizedKey)) {
        var opt = raw[key];
        var prop = normalized[_normalizedKey] = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isArray)(opt) || (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isFunction)(opt) ? {
          type: opt
        } : opt;

        if (prop) {
          var booleanIndex = getTypeIndex(Boolean, prop.type);
          var stringIndex = getTypeIndex(String, prop.type);
          prop[0
          /* shouldCast */
          ] = booleanIndex > -1;
          prop[1
          /* shouldCastTrue */
          ] = stringIndex < 0 || booleanIndex < stringIndex; // if the prop needs boolean casting or default value

          if (booleanIndex > -1 || (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.hasOwn)(prop, 'default')) {
            needCastKeys.push(_normalizedKey);
          }
        }
      }
    }
  }

  var res = [normalized, needCastKeys];
  cache.set(comp, res);
  return res;
}

function validatePropName(key) {
  if (key[0] !== '$') {
    return true;
  } else if (true) {
    warn("Invalid prop name: \"".concat(key, "\" is a reserved property."));
  }

  return false;
} // use function string name to check type constructors
// so that it works across vms / iframes.


function getType(ctor) {
  var match = ctor && ctor.toString().match(/^\s*function (\w+)/);
  return match ? match[1] : '';
}

function isSameType(a, b) {
  return getType(a) === getType(b);
}

function getTypeIndex(type, expectedTypes) {
  if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isArray)(expectedTypes)) {
    return expectedTypes.findIndex(function (t) {
      return isSameType(t, type);
    });
  } else if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isFunction)(expectedTypes)) {
    return isSameType(expectedTypes, type) ? 0 : -1;
  }

  return -1;
}
/**
 * dev only
 */


function validateProps(rawProps, props, instance) {
  var resolvedValues = (0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.toRaw)(props);
  var options = instance.propsOptions[0];

  for (var key in options) {
    var opt = options[key];
    if (opt == null) continue;
    validateProp(key, resolvedValues[key], opt, !(0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.hasOwn)(rawProps, key) && !(0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.hasOwn)(rawProps, (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.hyphenate)(key)));
  }
}
/**
 * dev only
 */


function validateProp(name, value, prop, isAbsent) {
  var type = prop.type,
      required = prop.required,
      validator = prop.validator; // required!

  if (required && isAbsent) {
    warn('Missing required prop: "' + name + '"');
    return;
  } // missing but optional


  if (value == null && !prop.required) {
    return;
  } // type check


  if (type != null && type !== true) {
    var isValid = false;
    var types = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isArray)(type) ? type : [type];
    var expectedTypes = []; // value is valid as long as one of the specified types match

    for (var i = 0; i < types.length && !isValid; i++) {
      var _assertType = assertType(value, types[i]),
          valid = _assertType.valid,
          expectedType = _assertType.expectedType;

      expectedTypes.push(expectedType || '');
      isValid = valid;
    }

    if (!isValid) {
      warn(getInvalidTypeMessage(name, value, expectedTypes));
      return;
    }
  } // custom validator


  if (validator && !validator(value)) {
    warn('Invalid prop: custom validator check failed for prop "' + name + '".');
  }
}

var isSimpleType = /*#__PURE__*/(0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.makeMap)('String,Number,Boolean,Function,Symbol,BigInt');
/**
 * dev only
 */

function assertType(value, type) {
  var valid;
  var expectedType = getType(type);

  if (isSimpleType(expectedType)) {
    var t = _typeof(value);

    valid = t === expectedType.toLowerCase(); // for primitive wrapper objects

    if (!valid && t === 'object') {
      valid = value instanceof type;
    }
  } else if (expectedType === 'Object') {
    valid = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isObject)(value);
  } else if (expectedType === 'Array') {
    valid = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isArray)(value);
  } else {
    valid = value instanceof type;
  }

  return {
    valid: valid,
    expectedType: expectedType
  };
}
/**
 * dev only
 */


function getInvalidTypeMessage(name, value, expectedTypes) {
  var message = "Invalid prop: type check failed for prop \"".concat(name, "\".") + " Expected ".concat(expectedTypes.map(_vue_shared__WEBPACK_IMPORTED_MODULE_1__.capitalize).join(', '));
  var expectedType = expectedTypes[0];
  var receivedType = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.toRawType)(value);
  var expectedValue = styleValue(value, expectedType);
  var receivedValue = styleValue(value, receivedType); // check if we need to specify expected value

  if (expectedTypes.length === 1 && isExplicable(expectedType) && !isBoolean(expectedType, receivedType)) {
    message += " with value ".concat(expectedValue);
  }

  message += ", got ".concat(receivedType, " "); // check if we need to specify received value

  if (isExplicable(receivedType)) {
    message += "with value ".concat(receivedValue, ".");
  }

  return message;
}
/**
 * dev only
 */


function styleValue(value, type) {
  if (type === 'String') {
    return "\"".concat(value, "\"");
  } else if (type === 'Number') {
    return "".concat(Number(value));
  } else {
    return "".concat(value);
  }
}
/**
 * dev only
 */


function isExplicable(type) {
  var explicitTypes = ['string', 'number', 'boolean'];
  return explicitTypes.some(function (elem) {
    return type.toLowerCase() === elem;
  });
}
/**
 * dev only
 */


function isBoolean() {
  for (var _len5 = arguments.length, args = new Array(_len5), _key12 = 0; _key12 < _len5; _key12++) {
    args[_key12] = arguments[_key12];
  }

  return args.some(function (elem) {
    return elem.toLowerCase() === 'boolean';
  });
}

var isInternalKey = function isInternalKey(key) {
  return key[0] === '_' || key === '$stable';
};

var normalizeSlotValue = function normalizeSlotValue(value) {
  return (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isArray)(value) ? value.map(normalizeVNode) : [normalizeVNode(value)];
};

var normalizeSlot = function normalizeSlot(key, rawSlot, ctx) {
  var normalized = withCtx(function (props) {
    if ( true && currentInstance) {
      warn("Slot \"".concat(key, "\" invoked outside of the render function: ") + "this will not track dependencies used in the slot. " + "Invoke the slot function inside the render function instead.");
    }

    return normalizeSlotValue(rawSlot(props));
  }, ctx);
  normalized._c = false;
  return normalized;
};

var normalizeObjectSlots = function normalizeObjectSlots(rawSlots, slots, instance) {
  var ctx = rawSlots._ctx;

  for (var key in rawSlots) {
    if (isInternalKey(key)) continue;
    var value = rawSlots[key];

    if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isFunction)(value)) {
      slots[key] = normalizeSlot(key, value, ctx);
    } else if (value != null) {
      (function () {
        if (true) {
          warn("Non-function value encountered for slot \"".concat(key, "\". ") + "Prefer function slots for better performance.");
        }

        var normalized = normalizeSlotValue(value);

        slots[key] = function () {
          return normalized;
        };
      })();
    }
  }
};

var normalizeVNodeSlots = function normalizeVNodeSlots(instance, children) {
  if ( true && !isKeepAlive(instance.vnode) && !false) {
    warn("Non-function value encountered for default slot. " + "Prefer function slots for better performance.");
  }

  var normalized = normalizeSlotValue(children);

  instance.slots["default"] = function () {
    return normalized;
  };
};

var initSlots = function initSlots(instance, children) {
  if (instance.vnode.shapeFlag & 32
  /* SLOTS_CHILDREN */
  ) {
      var type = children._;

      if (type) {
        // users can get the shallow readonly version of the slots object through `this.$slots`,
        // we should avoid the proxy object polluting the slots of the internal instance
        instance.slots = (0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.toRaw)(children); // make compiler marker non-enumerable

        (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.def)(children, '_', type);
      } else {
        normalizeObjectSlots(children, instance.slots = {});
      }
    } else {
    instance.slots = {};

    if (children) {
      normalizeVNodeSlots(instance, children);
    }
  }

  (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.def)(instance.slots, InternalObjectKey, 1);
};

var updateSlots = function updateSlots(instance, children, optimized) {
  var vnode = instance.vnode,
      slots = instance.slots;
  var needDeletionCheck = true;
  var deletionComparisonTarget = _vue_shared__WEBPACK_IMPORTED_MODULE_1__.EMPTY_OBJ;

  if (vnode.shapeFlag & 32
  /* SLOTS_CHILDREN */
  ) {
      var type = children._;

      if (type) {
        // compiled slots.
        if ( true && isHmrUpdating) {
          // Parent was HMR updated so slot content may have changed.
          // force update slots and mark instance for hmr as well
          (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.extend)(slots, children);
        } else if (optimized && type === 1
        /* STABLE */
        ) {
            // compiled AND stable.
            // no need to update, and skip stale slots removal.
            needDeletionCheck = false;
          } else {
          // compiled but dynamic (v-if/v-for on slots) - update slots, but skip
          // normalization.
          (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.extend)(slots, children); // #2893
          // when rendering the optimized slots by manually written render function,
          // we need to delete the `slots._` flag if necessary to make subsequent updates reliable,
          // i.e. let the `renderSlot` create the bailed Fragment

          if (!optimized && type === 1
          /* STABLE */
          ) {
              delete slots._;
            }
        }
      } else {
        needDeletionCheck = !children.$stable;
        normalizeObjectSlots(children, slots);
      }

      deletionComparisonTarget = children;
    } else if (children) {
    // non slot object children (direct value) passed to a component
    normalizeVNodeSlots(instance, children);
    deletionComparisonTarget = {
      "default": 1
    };
  } // delete stale slots


  if (needDeletionCheck) {
    for (var key in slots) {
      if (!isInternalKey(key) && !(key in deletionComparisonTarget)) {
        delete slots[key];
      }
    }
  }
};
/**
Runtime helper for applying directives to a vnode. Example usage:

const comp = resolveComponent('comp')
const foo = resolveDirective('foo')
const bar = resolveDirective('bar')

return withDirectives(h(comp), [
  [foo, this.x],
  [bar, this.y]
])
*/


var isBuiltInDirective = /*#__PURE__*/(0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.makeMap)('bind,cloak,else-if,else,for,html,if,model,on,once,pre,show,slot,text');

function validateDirectiveName(name) {
  if (isBuiltInDirective(name)) {
    warn('Do not use built-in directive ids as custom directive id: ' + name);
  }
}
/**
 * Adds directives to a VNode.
 */


function withDirectives(vnode, directives) {
  var internalInstance = currentRenderingInstance;

  if (internalInstance === null) {
     true && warn("withDirectives can only be used inside render functions.");
    return vnode;
  }

  var instance = internalInstance.proxy;
  var bindings = vnode.dirs || (vnode.dirs = []);

  for (var i = 0; i < directives.length; i++) {
    var _directives$i = _slicedToArray(directives[i], 4),
        dir = _directives$i[0],
        value = _directives$i[1],
        arg = _directives$i[2],
        _directives$i$ = _directives$i[3],
        modifiers = _directives$i$ === void 0 ? _vue_shared__WEBPACK_IMPORTED_MODULE_1__.EMPTY_OBJ : _directives$i$;

    if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isFunction)(dir)) {
      dir = {
        mounted: dir,
        updated: dir
      };
    }

    bindings.push({
      dir: dir,
      instance: instance,
      value: value,
      oldValue: void 0,
      arg: arg,
      modifiers: modifiers
    });
  }

  return vnode;
}

function invokeDirectiveHook(vnode, prevVNode, instance, name) {
  var bindings = vnode.dirs;
  var oldBindings = prevVNode && prevVNode.dirs;

  for (var i = 0; i < bindings.length; i++) {
    var binding = bindings[i];

    if (oldBindings) {
      binding.oldValue = oldBindings[i].value;
    }

    var hook = binding.dir[name];

    if (hook) {
      // disable tracking inside all lifecycle hooks
      // since they can potentially be called inside effects.
      (0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.pauseTracking)();
      callWithAsyncErrorHandling(hook, instance, 8
      /* DIRECTIVE_HOOK */
      , [vnode.el, binding, vnode, prevVNode]);
      (0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.resetTracking)();
    }
  }
}

function createAppContext() {
  return {
    app: null,
    config: {
      isNativeTag: _vue_shared__WEBPACK_IMPORTED_MODULE_1__.NO,
      performance: false,
      globalProperties: {},
      optionMergeStrategies: {},
      errorHandler: undefined,
      warnHandler: undefined,
      compilerOptions: {}
    },
    mixins: [],
    components: {},
    directives: {},
    provides: Object.create(null),
    optionsCache: new WeakMap(),
    propsCache: new WeakMap(),
    emitsCache: new WeakMap()
  };
}

var uid = 0;

function createAppAPI(render, hydrate) {
  return function createApp(rootComponent) {
    var rootProps = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

    if (rootProps != null && !(0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isObject)(rootProps)) {
       true && warn("root props passed to app.mount() must be an object.");
      rootProps = null;
    }

    var context = createAppContext();
    var installedPlugins = new Set();
    var isMounted = false;
    var app = context.app = {
      _uid: uid++,
      _component: rootComponent,
      _props: rootProps,
      _container: null,
      _context: context,
      _instance: null,
      version: version,

      get config() {
        return context.config;
      },

      set config(v) {
        if (true) {
          warn("app.config cannot be replaced. Modify individual options instead.");
        }
      },

      use: function use(plugin) {
        for (var _len6 = arguments.length, options = new Array(_len6 > 1 ? _len6 - 1 : 0), _key13 = 1; _key13 < _len6; _key13++) {
          options[_key13 - 1] = arguments[_key13];
        }

        if (installedPlugins.has(plugin)) {
           true && warn("Plugin has already been applied to target app.");
        } else if (plugin && (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isFunction)(plugin.install)) {
          installedPlugins.add(plugin);
          plugin.install.apply(plugin, [app].concat(options));
        } else if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isFunction)(plugin)) {
          installedPlugins.add(plugin);
          plugin.apply(void 0, [app].concat(options));
        } else if (true) {
          warn("A plugin must either be a function or an object with an \"install\" " + "function.");
        }

        return app;
      },
      mixin: function mixin(_mixin) {
        if (__VUE_OPTIONS_API__) {
          if (!context.mixins.includes(_mixin)) {
            context.mixins.push(_mixin);
          } else if (true) {
            warn('Mixin has already been applied to target app' + (_mixin.name ? ": ".concat(_mixin.name) : ''));
          }
        } else if (true) {
          warn('Mixins are only available in builds supporting Options API');
        }

        return app;
      },
      component: function component(name, _component) {
        if (true) {
          validateComponentName(name, context.config);
        }

        if (!_component) {
          return context.components[name];
        }

        if ( true && context.components[name]) {
          warn("Component \"".concat(name, "\" has already been registered in target app."));
        }

        context.components[name] = _component;
        return app;
      },
      directive: function directive(name, _directive) {
        if (true) {
          validateDirectiveName(name);
        }

        if (!_directive) {
          return context.directives[name];
        }

        if ( true && context.directives[name]) {
          warn("Directive \"".concat(name, "\" has already been registered in target app."));
        }

        context.directives[name] = _directive;
        return app;
      },
      mount: function mount(rootContainer, isHydrate, isSVG) {
        if (!isMounted) {
          var vnode = createVNode(rootComponent, rootProps); // store app context on the root VNode.
          // this will be set on the root instance on initial mount.

          vnode.appContext = context; // HMR root reload

          if (true) {
            context.reload = function () {
              render(cloneVNode(vnode), rootContainer, isSVG);
            };
          }

          if (isHydrate && hydrate) {
            hydrate(vnode, rootContainer);
          } else {
            render(vnode, rootContainer, isSVG);
          }

          isMounted = true;
          app._container = rootContainer;
          rootContainer.__vue_app__ = app;

          if (true) {
            app._instance = vnode.component;
            devtoolsInitApp(app, version);
          }

          return vnode.component.proxy;
        } else if (true) {
          warn("App has already been mounted.\n" + "If you want to remount the same app, move your app creation logic " + "into a factory function and create fresh app instances for each " + "mount - e.g. `const createMyApp = () => createApp(App)`");
        }
      },
      unmount: function unmount() {
        if (isMounted) {
          render(null, app._container);

          if (true) {
            app._instance = null;
            devtoolsUnmountApp(app);
          }

          delete app._container.__vue_app__;
        } else if (true) {
          warn("Cannot unmount an app that is not mounted.");
        }
      },
      provide: function provide(key, value) {
        if ( true && key in context.provides) {
          warn("App already provides property with key \"".concat(String(key), "\". ") + "It will be overwritten with the new value.");
        } // TypeScript doesn't allow symbols as index type
        // https://github.com/Microsoft/TypeScript/issues/24587


        context.provides[key] = value;
        return app;
      }
    };
    return app;
  };
}

var hasMismatch = false;

var isSVGContainer = function isSVGContainer(container) {
  return /svg/.test(container.namespaceURI) && container.tagName !== 'foreignObject';
};

var isComment = function isComment(node) {
  return node.nodeType === 8;
}
/* COMMENT */
; // Note: hydration is DOM-specific
// But we have to place it in core due to tight coupling with core - splitting
// it out creates a ton of unnecessary complexity.
// Hydration also depends on some renderer internal logic which needs to be
// passed in via arguments.


function createHydrationFunctions(rendererInternals) {
  var mountComponent = rendererInternals.mt,
      patch = rendererInternals.p,
      _rendererInternals$o2 = rendererInternals.o,
      patchProp = _rendererInternals$o2.patchProp,
      nextSibling = _rendererInternals$o2.nextSibling,
      parentNode = _rendererInternals$o2.parentNode,
      remove = _rendererInternals$o2.remove,
      insert = _rendererInternals$o2.insert,
      createComment = _rendererInternals$o2.createComment;

  var hydrate = function hydrate(vnode, container) {
    if ( true && !container.hasChildNodes()) {
      warn("Attempting to hydrate existing markup but container is empty. " + "Performing full mount instead.");
      patch(null, vnode, container);
      return;
    }

    hasMismatch = false;
    hydrateNode(container.firstChild, vnode, null, null, null);
    flushPostFlushCbs();

    if (hasMismatch && !false) {
      // this error should show up in production
      console.error("Hydration completed but contains mismatches.");
    }
  };

  var hydrateNode = function hydrateNode(node, vnode, parentComponent, parentSuspense, slotScopeIds) {
    var optimized = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : false;
    var isFragmentStart = isComment(node) && node.data === '[';

    var onMismatch = function onMismatch() {
      return handleMismatch(node, vnode, parentComponent, parentSuspense, slotScopeIds, isFragmentStart);
    };

    var type = vnode.type,
        ref = vnode.ref,
        shapeFlag = vnode.shapeFlag;
    var domType = node.nodeType;
    vnode.el = node;
    var nextNode = null;

    switch (type) {
      case Text:
        if (domType !== 3
        /* TEXT */
        ) {
            nextNode = onMismatch();
          } else {
          if (node.data !== vnode.children) {
            hasMismatch = true;
             true && warn("Hydration text mismatch:" + "\n- Client: ".concat(JSON.stringify(node.data)) + "\n- Server: ".concat(JSON.stringify(vnode.children)));
            node.data = vnode.children;
          }

          nextNode = nextSibling(node);
        }

        break;

      case Comment$1:
        if (domType !== 8
        /* COMMENT */
        || isFragmentStart) {
          nextNode = onMismatch();
        } else {
          nextNode = nextSibling(node);
        }

        break;

      case Static:
        if (domType !== 1
        /* ELEMENT */
        ) {
            nextNode = onMismatch();
          } else {
          // determine anchor, adopt content
          nextNode = node; // if the static vnode has its content stripped during build,
          // adopt it from the server-rendered HTML.

          var needToAdoptContent = !vnode.children.length;

          for (var i = 0; i < vnode.staticCount; i++) {
            if (needToAdoptContent) vnode.children += nextNode.outerHTML;

            if (i === vnode.staticCount - 1) {
              vnode.anchor = nextNode;
            }

            nextNode = nextSibling(nextNode);
          }

          return nextNode;
        }

        break;

      case Fragment:
        if (!isFragmentStart) {
          nextNode = onMismatch();
        } else {
          nextNode = hydrateFragment(node, vnode, parentComponent, parentSuspense, slotScopeIds, optimized);
        }

        break;

      default:
        if (shapeFlag & 1
        /* ELEMENT */
        ) {
            if (domType !== 1
            /* ELEMENT */
            || vnode.type.toLowerCase() !== node.tagName.toLowerCase()) {
              nextNode = onMismatch();
            } else {
              nextNode = hydrateElement(node, vnode, parentComponent, parentSuspense, slotScopeIds, optimized);
            }
          } else if (shapeFlag & 6
        /* COMPONENT */
        ) {
            // when setting up the render effect, if the initial vnode already
            // has .el set, the component will perform hydration instead of mount
            // on its sub-tree.
            vnode.slotScopeIds = slotScopeIds;
            var container = parentNode(node);
            mountComponent(vnode, container, null, parentComponent, parentSuspense, isSVGContainer(container), optimized); // component may be async, so in the case of fragments we cannot rely
            // on component's rendered output to determine the end of the fragment
            // instead, we do a lookahead to find the end anchor node.

            nextNode = isFragmentStart ? locateClosingAsyncAnchor(node) : nextSibling(node); // #3787
            // if component is async, it may get moved / unmounted before its
            // inner component is loaded, so we need to give it a placeholder
            // vnode that matches its adopted DOM.

            if (isAsyncWrapper(vnode)) {
              var subTree;

              if (isFragmentStart) {
                subTree = createVNode(Fragment);
                subTree.anchor = nextNode ? nextNode.previousSibling : container.lastChild;
              } else {
                subTree = node.nodeType === 3 ? createTextVNode('') : createVNode('div');
              }

              subTree.el = node;
              vnode.component.subTree = subTree;
            }
          } else if (shapeFlag & 64
        /* TELEPORT */
        ) {
            if (domType !== 8
            /* COMMENT */
            ) {
                nextNode = onMismatch();
              } else {
              nextNode = vnode.type.hydrate(node, vnode, parentComponent, parentSuspense, slotScopeIds, optimized, rendererInternals, hydrateChildren);
            }
          } else if (shapeFlag & 128
        /* SUSPENSE */
        ) {
            nextNode = vnode.type.hydrate(node, vnode, parentComponent, parentSuspense, isSVGContainer(parentNode(node)), slotScopeIds, optimized, rendererInternals, hydrateNode);
          } else if (true) {
          warn('Invalid HostVNode type:', type, "(".concat(_typeof(type), ")"));
        }

    }

    if (ref != null) {
      setRef(ref, null, parentSuspense, vnode);
    }

    return nextNode;
  };

  var hydrateElement = function hydrateElement(el, vnode, parentComponent, parentSuspense, slotScopeIds, optimized) {
    optimized = optimized || !!vnode.dynamicChildren;
    var props = vnode.props,
        patchFlag = vnode.patchFlag,
        shapeFlag = vnode.shapeFlag,
        dirs = vnode.dirs; // skip props & children if this is hoisted static nodes

    if (patchFlag !== -1
    /* HOISTED */
    ) {
        if (dirs) {
          invokeDirectiveHook(vnode, null, parentComponent, 'created');
        } // props


        if (props) {
          if (!optimized || patchFlag & 16
          /* FULL_PROPS */
          || patchFlag & 32
          /* HYDRATE_EVENTS */
          ) {
            for (var key in props) {
              if (!(0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isReservedProp)(key) && (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isOn)(key)) {
                patchProp(el, key, null, props[key]);
              }
            }
          } else if (props.onClick) {
            // Fast path for click listeners (which is most often) to avoid
            // iterating through props.
            patchProp(el, 'onClick', null, props.onClick);
          }
        } // vnode / directive hooks


        var vnodeHooks;

        if (vnodeHooks = props && props.onVnodeBeforeMount) {
          invokeVNodeHook(vnodeHooks, parentComponent, vnode);
        }

        if (dirs) {
          invokeDirectiveHook(vnode, null, parentComponent, 'beforeMount');
        }

        if ((vnodeHooks = props && props.onVnodeMounted) || dirs) {
          queueEffectWithSuspense(function () {
            vnodeHooks && invokeVNodeHook(vnodeHooks, parentComponent, vnode);
            dirs && invokeDirectiveHook(vnode, null, parentComponent, 'mounted');
          }, parentSuspense);
        } // children


        if (shapeFlag & 16
        /* ARRAY_CHILDREN */
        && // skip if element has innerHTML / textContent
        !(props && (props.innerHTML || props.textContent))) {
          var next = hydrateChildren(el.firstChild, vnode, el, parentComponent, parentSuspense, slotScopeIds, optimized);
          var _hasWarned = false;

          while (next) {
            hasMismatch = true;

            if ( true && !_hasWarned) {
              warn("Hydration children mismatch in <".concat(vnode.type, ">: ") + "server rendered element contains more child nodes than client vdom.");
              _hasWarned = true;
            } // The SSRed DOM contains more nodes than it should. Remove them.


            var cur = next;
            next = next.nextSibling;
            remove(cur);
          }
        } else if (shapeFlag & 8
        /* TEXT_CHILDREN */
        ) {
            if (el.textContent !== vnode.children) {
              hasMismatch = true;
               true && warn("Hydration text content mismatch in <".concat(vnode.type, ">:\n") + "- Client: ".concat(el.textContent, "\n") + "- Server: ".concat(vnode.children));
              el.textContent = vnode.children;
            }
          }
      }

    return el.nextSibling;
  };

  var hydrateChildren = function hydrateChildren(node, parentVNode, container, parentComponent, parentSuspense, slotScopeIds, optimized) {
    optimized = optimized || !!parentVNode.dynamicChildren;
    var children = parentVNode.children;
    var l = children.length;
    var hasWarned = false;

    for (var i = 0; i < l; i++) {
      var vnode = optimized ? children[i] : children[i] = normalizeVNode(children[i]);

      if (node) {
        node = hydrateNode(node, vnode, parentComponent, parentSuspense, slotScopeIds, optimized);
      } else if (vnode.type === Text && !vnode.children) {
        continue;
      } else {
        hasMismatch = true;

        if ( true && !hasWarned) {
          warn("Hydration children mismatch in <".concat(container.tagName.toLowerCase(), ">: ") + "server rendered element contains fewer child nodes than client vdom.");
          hasWarned = true;
        } // the SSRed DOM didn't contain enough nodes. Mount the missing ones.


        patch(null, vnode, container, null, parentComponent, parentSuspense, isSVGContainer(container), slotScopeIds);
      }
    }

    return node;
  };

  var hydrateFragment = function hydrateFragment(node, vnode, parentComponent, parentSuspense, slotScopeIds, optimized) {
    var fragmentSlotScopeIds = vnode.slotScopeIds;

    if (fragmentSlotScopeIds) {
      slotScopeIds = slotScopeIds ? slotScopeIds.concat(fragmentSlotScopeIds) : fragmentSlotScopeIds;
    }

    var container = parentNode(node);
    var next = hydrateChildren(nextSibling(node), vnode, container, parentComponent, parentSuspense, slotScopeIds, optimized);

    if (next && isComment(next) && next.data === ']') {
      return nextSibling(vnode.anchor = next);
    } else {
      // fragment didn't hydrate successfully, since we didn't get a end anchor
      // back. This should have led to node/children mismatch warnings.
      hasMismatch = true; // since the anchor is missing, we need to create one and insert it

      insert(vnode.anchor = createComment("]"), container, next);
      return next;
    }
  };

  var handleMismatch = function handleMismatch(node, vnode, parentComponent, parentSuspense, slotScopeIds, isFragment) {
    hasMismatch = true;
     true && warn("Hydration node mismatch:\n- Client vnode:", vnode.type, "\n- Server rendered DOM:", node, node.nodeType === 3
    /* TEXT */
    ? "(text)" : isComment(node) && node.data === '[' ? "(start of fragment)" : "");
    vnode.el = null;

    if (isFragment) {
      // remove excessive fragment nodes
      var end = locateClosingAsyncAnchor(node);

      while (true) {
        var _next2 = nextSibling(node);

        if (_next2 && _next2 !== end) {
          remove(_next2);
        } else {
          break;
        }
      }
    }

    var next = nextSibling(node);
    var container = parentNode(node);
    remove(node);
    patch(null, vnode, container, next, parentComponent, parentSuspense, isSVGContainer(container), slotScopeIds);
    return next;
  };

  var locateClosingAsyncAnchor = function locateClosingAsyncAnchor(node) {
    var match = 0;

    while (node) {
      node = nextSibling(node);

      if (node && isComment(node)) {
        if (node.data === '[') match++;

        if (node.data === ']') {
          if (match === 0) {
            return nextSibling(node);
          } else {
            match--;
          }
        }
      }
    }

    return node;
  };

  return [hydrate, hydrateNode];
}

var supported;
var perf;

function startMeasure(instance, type) {
  if (instance.appContext.config.performance && isSupported()) {
    perf.mark("vue-".concat(type, "-").concat(instance.uid));
  }

  if (true) {
    devtoolsPerfStart(instance, type, supported ? perf.now() : Date.now());
  }
}

function endMeasure(instance, type) {
  if (instance.appContext.config.performance && isSupported()) {
    var startTag = "vue-".concat(type, "-").concat(instance.uid);
    var endTag = startTag + ":end";
    perf.mark(endTag);
    perf.measure("<".concat(formatComponentName(instance, instance.type), "> ").concat(type), startTag, endTag);
    perf.clearMarks(startTag);
    perf.clearMarks(endTag);
  }

  if (true) {
    devtoolsPerfEnd(instance, type, supported ? perf.now() : Date.now());
  }
}

function isSupported() {
  if (supported !== undefined) {
    return supported;
  }
  /* eslint-disable no-restricted-globals */


  if (typeof window !== 'undefined' && window.performance) {
    supported = true;
    perf = window.performance;
  } else {
    supported = false;
  }
  /* eslint-enable no-restricted-globals */


  return supported;
}
/**
 * This is only called in esm-bundler builds.
 * It is called when a renderer is created, in `baseCreateRenderer` so that
 * importing runtime-core is side-effects free.
 *
 * istanbul-ignore-next
 */


function initFeatureFlags() {
  var needWarn = false;

  if (typeof __VUE_OPTIONS_API__ !== 'boolean') {
    needWarn = true;
    (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.getGlobalThis)().__VUE_OPTIONS_API__ = true;
  }

  if (typeof __VUE_PROD_DEVTOOLS__ !== 'boolean') {
    needWarn = true;
    (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.getGlobalThis)().__VUE_PROD_DEVTOOLS__ = false;
  }

  if ( true && needWarn) {
    console.warn("You are running the esm-bundler build of Vue. It is recommended to " + "configure your bundler to explicitly replace feature flag globals " + "with boolean literals to get proper tree-shaking in the final bundle. " + "See http://link.vuejs.org/feature-flags for more details.");
  }
}

var prodEffectOptions = {
  scheduler: queueJob,
  // #1801, #2043 component render effects should allow recursive updates
  allowRecurse: true
};

function createDevEffectOptions(instance) {
  return {
    scheduler: queueJob,
    allowRecurse: true,
    onTrack: instance.rtc ? function (e) {
      return (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.invokeArrayFns)(instance.rtc, e);
    } : void 0,
    onTrigger: instance.rtg ? function (e) {
      return (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.invokeArrayFns)(instance.rtg, e);
    } : void 0
  };
}

var queuePostRenderEffect = queueEffectWithSuspense;

var setRef = function setRef(rawRef, oldRawRef, parentSuspense, vnode) {
  var isUnmount = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;

  if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isArray)(rawRef)) {
    rawRef.forEach(function (r, i) {
      return setRef(r, oldRawRef && ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isArray)(oldRawRef) ? oldRawRef[i] : oldRawRef), parentSuspense, vnode, isUnmount);
    });
    return;
  }

  if (isAsyncWrapper(vnode) && !isUnmount) {
    // when mounting async components, nothing needs to be done,
    // because the template ref is forwarded to inner component
    return;
  }

  var refValue = vnode.shapeFlag & 4
  /* STATEFUL_COMPONENT */
  ? vnode.component.exposed || vnode.component.proxy : vnode.el;
  var value = isUnmount ? null : refValue;
  var owner = rawRef.i,
      ref = rawRef.r;

  if ( true && !owner) {
    warn("Missing ref owner context. ref cannot be used on hoisted vnodes. " + "A vnode with ref must be created inside the render function.");
    return;
  }

  var oldRef = oldRawRef && oldRawRef.r;
  var refs = owner.refs === _vue_shared__WEBPACK_IMPORTED_MODULE_1__.EMPTY_OBJ ? owner.refs = {} : owner.refs;
  var setupState = owner.setupState; // dynamic ref changed. unset old ref

  if (oldRef != null && oldRef !== ref) {
    if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isString)(oldRef)) {
      refs[oldRef] = null;

      if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.hasOwn)(setupState, oldRef)) {
        setupState[oldRef] = null;
      }
    } else if ((0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.isRef)(oldRef)) {
      oldRef.value = null;
    }
  }

  if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isString)(ref)) {
    var doSet = function doSet() {
      {
        refs[ref] = value;
      }

      if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.hasOwn)(setupState, ref)) {
        setupState[ref] = value;
      }
    }; // #1789: for non-null values, set them after render
    // null values means this is unmount and it should not overwrite another
    // ref with the same key


    if (value) {
      doSet.id = -1;
      queuePostRenderEffect(doSet, parentSuspense);
    } else {
      doSet();
    }
  } else if ((0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.isRef)(ref)) {
    var _doSet = function _doSet() {
      ref.value = value;
    };

    if (value) {
      _doSet.id = -1;
      queuePostRenderEffect(_doSet, parentSuspense);
    } else {
      _doSet();
    }
  } else if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isFunction)(ref)) {
    callWithErrorHandling(ref, owner, 12
    /* FUNCTION_REF */
    , [value, refs]);
  } else if (true) {
    warn('Invalid template ref type:', value, "(".concat(_typeof(value), ")"));
  }
};
/**
 * The createRenderer function accepts two generic arguments:
 * HostNode and HostElement, corresponding to Node and Element types in the
 * host environment. For example, for runtime-dom, HostNode would be the DOM
 * `Node` interface and HostElement would be the DOM `Element` interface.
 *
 * Custom renderers can pass in the platform specific types like this:
 *
 * ``` js
 * const { render, createApp } = createRenderer<Node, Element>({
 *   patchProp,
 *   ...nodeOps
 * })
 * ```
 */


function createRenderer(options) {
  return baseCreateRenderer(options);
} // Separate API for creating hydration-enabled renderer.
// Hydration logic is only used when calling this function, making it
// tree-shakable.


function createHydrationRenderer(options) {
  return baseCreateRenderer(options, createHydrationFunctions);
} // implementation


function baseCreateRenderer(options, createHydrationFns) {
  // compile-time feature flags check
  {
    initFeatureFlags();
  }

  if (true) {
    var target = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.getGlobalThis)();
    target.__VUE__ = true;
    setDevtoolsHook(target.__VUE_DEVTOOLS_GLOBAL_HOOK__);
  }

  var hostInsert = options.insert,
      hostRemove = options.remove,
      hostPatchProp = options.patchProp,
      hostForcePatchProp = options.forcePatchProp,
      hostCreateElement = options.createElement,
      hostCreateText = options.createText,
      hostCreateComment = options.createComment,
      hostSetText = options.setText,
      hostSetElementText = options.setElementText,
      hostParentNode = options.parentNode,
      hostNextSibling = options.nextSibling,
      _options$setScopeId = options.setScopeId,
      hostSetScopeId = _options$setScopeId === void 0 ? _vue_shared__WEBPACK_IMPORTED_MODULE_1__.NOOP : _options$setScopeId,
      hostCloneNode = options.cloneNode,
      hostInsertStaticContent = options.insertStaticContent; // Note: functions inside this closure should use `const xxx = () => {}`
  // style in order to prevent being inlined by minifiers.

  var patch = function patch(n1, n2, container) {
    var anchor = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
    var parentComponent = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : null;
    var parentSuspense = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : null;
    var isSVG = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : false;
    var slotScopeIds = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : null;
    var optimized = arguments.length > 8 && arguments[8] !== undefined ? arguments[8] : false;

    // patching & not same type, unmount old tree
    if (n1 && !isSameVNodeType(n1, n2)) {
      anchor = getNextHostNode(n1);
      unmount(n1, parentComponent, parentSuspense, true);
      n1 = null;
    }

    if (n2.patchFlag === -2
    /* BAIL */
    ) {
        optimized = false;
        n2.dynamicChildren = null;
      }

    var type = n2.type,
        ref = n2.ref,
        shapeFlag = n2.shapeFlag;

    switch (type) {
      case Text:
        processText(n1, n2, container, anchor);
        break;

      case Comment$1:
        processCommentNode(n1, n2, container, anchor);
        break;

      case Static:
        if (n1 == null) {
          mountStaticNode(n2, container, anchor, isSVG);
        } else if (true) {
          patchStaticNode(n1, n2, container, isSVG);
        }

        break;

      case Fragment:
        processFragment(n1, n2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
        break;

      default:
        if (shapeFlag & 1
        /* ELEMENT */
        ) {
            processElement(n1, n2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
          } else if (shapeFlag & 6
        /* COMPONENT */
        ) {
            processComponent(n1, n2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
          } else if (shapeFlag & 64
        /* TELEPORT */
        ) {
            type.process(n1, n2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized, internals);
          } else if (shapeFlag & 128
        /* SUSPENSE */
        ) {
            type.process(n1, n2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized, internals);
          } else if (true) {
          warn('Invalid VNode type:', type, "(".concat(_typeof(type), ")"));
        }

    } // set ref


    if (ref != null && parentComponent) {
      setRef(ref, n1 && n1.ref, parentSuspense, n2 || n1, !n2);
    }
  };

  var processText = function processText(n1, n2, container, anchor) {
    if (n1 == null) {
      hostInsert(n2.el = hostCreateText(n2.children), container, anchor);
    } else {
      var el = n2.el = n1.el;

      if (n2.children !== n1.children) {
        hostSetText(el, n2.children);
      }
    }
  };

  var processCommentNode = function processCommentNode(n1, n2, container, anchor) {
    if (n1 == null) {
      hostInsert(n2.el = hostCreateComment(n2.children || ''), container, anchor);
    } else {
      // there's no support for dynamic comments
      n2.el = n1.el;
    }
  };

  var mountStaticNode = function mountStaticNode(n2, container, anchor, isSVG) {
    var _hostInsertStaticCont = hostInsertStaticContent(n2.children, container, anchor, isSVG, // pass cached nodes if the static node is being mounted multiple times
    // so that runtime-dom can simply cloneNode() instead of inserting new
    // HTML
    n2.el && [n2.el, n2.anchor]);

    var _hostInsertStaticCont2 = _slicedToArray(_hostInsertStaticCont, 2);

    n2.el = _hostInsertStaticCont2[0];
    n2.anchor = _hostInsertStaticCont2[1];
  };
  /**
   * Dev / HMR only
   */


  var patchStaticNode = function patchStaticNode(n1, n2, container, isSVG) {
    // static nodes are only patched during dev for HMR
    if (n2.children !== n1.children) {
      var anchor = hostNextSibling(n1.anchor); // remove existing

      removeStaticNode(n1);

      var _hostInsertStaticCont3 = hostInsertStaticContent(n2.children, container, anchor, isSVG);

      var _hostInsertStaticCont4 = _slicedToArray(_hostInsertStaticCont3, 2);

      n2.el = _hostInsertStaticCont4[0];
      n2.anchor = _hostInsertStaticCont4[1];
    } else {
      n2.el = n1.el;
      n2.anchor = n1.anchor;
    }
  };

  var moveStaticNode = function moveStaticNode(_ref12, container, nextSibling) {
    var el = _ref12.el,
        anchor = _ref12.anchor;
    var next;

    while (el && el !== anchor) {
      next = hostNextSibling(el);
      hostInsert(el, container, nextSibling);
      el = next;
    }

    hostInsert(anchor, container, nextSibling);
  };

  var removeStaticNode = function removeStaticNode(_ref13) {
    var el = _ref13.el,
        anchor = _ref13.anchor;
    var next;

    while (el && el !== anchor) {
      next = hostNextSibling(el);
      hostRemove(el);
      el = next;
    }

    hostRemove(anchor);
  };

  var processElement = function processElement(n1, n2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized) {
    isSVG = isSVG || n2.type === 'svg';

    if (n1 == null) {
      mountElement(n2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
    } else {
      patchElement(n1, n2, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
    }
  };

  var mountElement = function mountElement(vnode, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized) {
    var el;
    var vnodeHook;
    var type = vnode.type,
        props = vnode.props,
        shapeFlag = vnode.shapeFlag,
        transition = vnode.transition,
        patchFlag = vnode.patchFlag,
        dirs = vnode.dirs;

    if (false
    /* HOISTED */
    ) {} else {
      el = vnode.el = hostCreateElement(vnode.type, isSVG, props && props.is, props); // mount children first, since some props may rely on child content
      // being already rendered, e.g. `<select value>`

      if (shapeFlag & 8
      /* TEXT_CHILDREN */
      ) {
          hostSetElementText(el, vnode.children);
        } else if (shapeFlag & 16
      /* ARRAY_CHILDREN */
      ) {
          mountChildren(vnode.children, el, null, parentComponent, parentSuspense, isSVG && type !== 'foreignObject', slotScopeIds, optimized || !!vnode.dynamicChildren);
        }

      if (dirs) {
        invokeDirectiveHook(vnode, null, parentComponent, 'created');
      } // props


      if (props) {
        for (var key in props) {
          if (!(0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isReservedProp)(key)) {
            hostPatchProp(el, key, null, props[key], isSVG, vnode.children, parentComponent, parentSuspense, unmountChildren);
          }
        }

        if (vnodeHook = props.onVnodeBeforeMount) {
          invokeVNodeHook(vnodeHook, parentComponent, vnode);
        }
      } // scopeId


      setScopeId(el, vnode, vnode.scopeId, slotScopeIds, parentComponent);
    }

    if (true) {
      Object.defineProperty(el, '__vnode', {
        value: vnode,
        enumerable: false
      });
      Object.defineProperty(el, '__vueParentComponent', {
        value: parentComponent,
        enumerable: false
      });
    }

    if (dirs) {
      invokeDirectiveHook(vnode, null, parentComponent, 'beforeMount');
    } // #1583 For inside suspense + suspense not resolved case, enter hook should call when suspense resolved
    // #1689 For inside suspense + suspense resolved case, just call it


    var needCallTransitionHooks = (!parentSuspense || parentSuspense && !parentSuspense.pendingBranch) && transition && !transition.persisted;

    if (needCallTransitionHooks) {
      transition.beforeEnter(el);
    }

    hostInsert(el, container, anchor);

    if ((vnodeHook = props && props.onVnodeMounted) || needCallTransitionHooks || dirs) {
      queuePostRenderEffect(function () {
        vnodeHook && invokeVNodeHook(vnodeHook, parentComponent, vnode);
        needCallTransitionHooks && transition.enter(el);
        dirs && invokeDirectiveHook(vnode, null, parentComponent, 'mounted');
      }, parentSuspense);
    }
  };

  var setScopeId = function setScopeId(el, vnode, scopeId, slotScopeIds, parentComponent) {
    if (scopeId) {
      hostSetScopeId(el, scopeId);
    }

    if (slotScopeIds) {
      for (var i = 0; i < slotScopeIds.length; i++) {
        hostSetScopeId(el, slotScopeIds[i]);
      }
    }

    if (parentComponent) {
      var subTree = parentComponent.subTree;

      if ( true && subTree.patchFlag > 0 && subTree.patchFlag & 2048
      /* DEV_ROOT_FRAGMENT */
      ) {
          subTree = filterSingleRoot(subTree.children) || subTree;
        }

      if (vnode === subTree) {
        var parentVNode = parentComponent.vnode;
        setScopeId(el, parentVNode, parentVNode.scopeId, parentVNode.slotScopeIds, parentComponent.parent);
      }
    }
  };

  var mountChildren = function mountChildren(children, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized) {
    var start = arguments.length > 8 && arguments[8] !== undefined ? arguments[8] : 0;

    for (var i = start; i < children.length; i++) {
      var child = children[i] = optimized ? cloneIfMounted(children[i]) : normalizeVNode(children[i]);
      patch(null, child, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
    }
  };

  var patchElement = function patchElement(n1, n2, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized) {
    var el = n2.el = n1.el;
    var patchFlag = n2.patchFlag,
        dynamicChildren = n2.dynamicChildren,
        dirs = n2.dirs; // #1426 take the old vnode's patch flag into account since user may clone a
    // compiler-generated vnode, which de-opts to FULL_PROPS

    patchFlag |= n1.patchFlag & 16
    /* FULL_PROPS */
    ;
    var oldProps = n1.props || _vue_shared__WEBPACK_IMPORTED_MODULE_1__.EMPTY_OBJ;
    var newProps = n2.props || _vue_shared__WEBPACK_IMPORTED_MODULE_1__.EMPTY_OBJ;
    var vnodeHook;

    if (vnodeHook = newProps.onVnodeBeforeUpdate) {
      invokeVNodeHook(vnodeHook, parentComponent, n2, n1);
    }

    if (dirs) {
      invokeDirectiveHook(n2, n1, parentComponent, 'beforeUpdate');
    }

    if ( true && isHmrUpdating) {
      // HMR updated, force full diff
      patchFlag = 0;
      optimized = false;
      dynamicChildren = null;
    }

    if (patchFlag > 0) {
      // the presence of a patchFlag means this element's render code was
      // generated by the compiler and can take the fast path.
      // in this path old node and new node are guaranteed to have the same shape
      // (i.e. at the exact same position in the source template)
      if (patchFlag & 16
      /* FULL_PROPS */
      ) {
          // element props contain dynamic keys, full diff needed
          patchProps(el, n2, oldProps, newProps, parentComponent, parentSuspense, isSVG);
        } else {
        // class
        // this flag is matched when the element has dynamic class bindings.
        if (patchFlag & 2
        /* CLASS */
        ) {
            if (oldProps["class"] !== newProps["class"]) {
              hostPatchProp(el, 'class', null, newProps["class"], isSVG);
            }
          } // style
        // this flag is matched when the element has dynamic style bindings


        if (patchFlag & 4
        /* STYLE */
        ) {
            hostPatchProp(el, 'style', oldProps.style, newProps.style, isSVG);
          } // props
        // This flag is matched when the element has dynamic prop/attr bindings
        // other than class and style. The keys of dynamic prop/attrs are saved for
        // faster iteration.
        // Note dynamic keys like :[foo]="bar" will cause this optimization to
        // bail out and go through a full diff because we need to unset the old key


        if (patchFlag & 8
        /* PROPS */
        ) {
            // if the flag is present then dynamicProps must be non-null
            var propsToUpdate = n2.dynamicProps;

            for (var i = 0; i < propsToUpdate.length; i++) {
              var key = propsToUpdate[i];
              var prev = oldProps[key];
              var next = newProps[key];

              if (next !== prev || hostForcePatchProp && hostForcePatchProp(el, key)) {
                hostPatchProp(el, key, prev, next, isSVG, n1.children, parentComponent, parentSuspense, unmountChildren);
              }
            }
          }
      } // text
      // This flag is matched when the element has only dynamic text children.


      if (patchFlag & 1
      /* TEXT */
      ) {
          if (n1.children !== n2.children) {
            hostSetElementText(el, n2.children);
          }
        }
    } else if (!optimized && dynamicChildren == null) {
      // unoptimized, full diff
      patchProps(el, n2, oldProps, newProps, parentComponent, parentSuspense, isSVG);
    }

    var areChildrenSVG = isSVG && n2.type !== 'foreignObject';

    if (dynamicChildren) {
      patchBlockChildren(n1.dynamicChildren, dynamicChildren, el, parentComponent, parentSuspense, areChildrenSVG, slotScopeIds);

      if ( true && parentComponent && parentComponent.type.__hmrId) {
        traverseStaticChildren(n1, n2);
      }
    } else if (!optimized) {
      // full diff
      patchChildren(n1, n2, el, null, parentComponent, parentSuspense, areChildrenSVG, slotScopeIds, false);
    }

    if ((vnodeHook = newProps.onVnodeUpdated) || dirs) {
      queuePostRenderEffect(function () {
        vnodeHook && invokeVNodeHook(vnodeHook, parentComponent, n2, n1);
        dirs && invokeDirectiveHook(n2, n1, parentComponent, 'updated');
      }, parentSuspense);
    }
  }; // The fast path for blocks.


  var patchBlockChildren = function patchBlockChildren(oldChildren, newChildren, fallbackContainer, parentComponent, parentSuspense, isSVG, slotScopeIds) {
    for (var i = 0; i < newChildren.length; i++) {
      var oldVNode = oldChildren[i];
      var newVNode = newChildren[i]; // Determine the container (parent element) for the patch.

      var container = // oldVNode may be an errored async setup() component inside Suspense
      // which will not have a mounted element
      oldVNode.el && ( // - In the case of a Fragment, we need to provide the actual parent
      // of the Fragment itself so it can move its children.
      oldVNode.type === Fragment || // - In the case of different nodes, there is going to be a replacement
      // which also requires the correct parent container
      !isSameVNodeType(oldVNode, newVNode) || // - In the case of a component, it could contain anything.
      oldVNode.shapeFlag & 6
      /* COMPONENT */
      || oldVNode.shapeFlag & 64
      /* TELEPORT */
      ) ? hostParentNode(oldVNode.el) : // In other cases, the parent container is not actually used so we
      // just pass the block element here to avoid a DOM parentNode call.
      fallbackContainer;
      patch(oldVNode, newVNode, container, null, parentComponent, parentSuspense, isSVG, slotScopeIds, true);
    }
  };

  var patchProps = function patchProps(el, vnode, oldProps, newProps, parentComponent, parentSuspense, isSVG) {
    if (oldProps !== newProps) {
      for (var key in newProps) {
        // empty string is not valid prop
        if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isReservedProp)(key)) continue;
        var next = newProps[key];
        var prev = oldProps[key];

        if (next !== prev || hostForcePatchProp && hostForcePatchProp(el, key)) {
          hostPatchProp(el, key, prev, next, isSVG, vnode.children, parentComponent, parentSuspense, unmountChildren);
        }
      }

      if (oldProps !== _vue_shared__WEBPACK_IMPORTED_MODULE_1__.EMPTY_OBJ) {
        for (var _key14 in oldProps) {
          if (!(0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isReservedProp)(_key14) && !(_key14 in newProps)) {
            hostPatchProp(el, _key14, oldProps[_key14], null, isSVG, vnode.children, parentComponent, parentSuspense, unmountChildren);
          }
        }
      }
    }
  };

  var processFragment = function processFragment(n1, n2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized) {
    var fragmentStartAnchor = n2.el = n1 ? n1.el : hostCreateText('');
    var fragmentEndAnchor = n2.anchor = n1 ? n1.anchor : hostCreateText('');
    var patchFlag = n2.patchFlag,
        dynamicChildren = n2.dynamicChildren,
        fragmentSlotScopeIds = n2.slotScopeIds;

    if (dynamicChildren) {
      optimized = true;
    } // check if this is a slot fragment with :slotted scope ids


    if (fragmentSlotScopeIds) {
      slotScopeIds = slotScopeIds ? slotScopeIds.concat(fragmentSlotScopeIds) : fragmentSlotScopeIds;
    }

    if ( true && isHmrUpdating) {
      // HMR updated, force full diff
      patchFlag = 0;
      optimized = false;
      dynamicChildren = null;
    }

    if (n1 == null) {
      hostInsert(fragmentStartAnchor, container, anchor);
      hostInsert(fragmentEndAnchor, container, anchor); // a fragment can only have array children
      // since they are either generated by the compiler, or implicitly created
      // from arrays.

      mountChildren(n2.children, container, fragmentEndAnchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
    } else {
      if (patchFlag > 0 && patchFlag & 64
      /* STABLE_FRAGMENT */
      && dynamicChildren && // #2715 the previous fragment could've been a BAILed one as a result
      // of renderSlot() with no valid children
      n1.dynamicChildren) {
        // a stable fragment (template root or <template v-for>) doesn't need to
        // patch children order, but it may contain dynamicChildren.
        patchBlockChildren(n1.dynamicChildren, dynamicChildren, container, parentComponent, parentSuspense, isSVG, slotScopeIds);

        if ( true && parentComponent && parentComponent.type.__hmrId) {
          traverseStaticChildren(n1, n2);
        } else if ( // #2080 if the stable fragment has a key, it's a <template v-for> that may
        //  get moved around. Make sure all root level vnodes inherit el.
        // #2134 or if it's a component root, it may also get moved around
        // as the component is being moved.
        n2.key != null || parentComponent && n2 === parentComponent.subTree) {
          traverseStaticChildren(n1, n2, true
          /* shallow */
          );
        }
      } else {
        // keyed / unkeyed, or manual fragments.
        // for keyed & unkeyed, since they are compiler generated from v-for,
        // each child is guaranteed to be a block so the fragment will never
        // have dynamicChildren.
        patchChildren(n1, n2, container, fragmentEndAnchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
      }
    }
  };

  var processComponent = function processComponent(n1, n2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized) {
    n2.slotScopeIds = slotScopeIds;

    if (n1 == null) {
      if (n2.shapeFlag & 512
      /* COMPONENT_KEPT_ALIVE */
      ) {
          parentComponent.ctx.activate(n2, container, anchor, isSVG, optimized);
        } else {
        mountComponent(n2, container, anchor, parentComponent, parentSuspense, isSVG, optimized);
      }
    } else {
      updateComponent(n1, n2, optimized);
    }
  };

  var mountComponent = function mountComponent(initialVNode, container, anchor, parentComponent, parentSuspense, isSVG, optimized) {
    var instance = initialVNode.component = createComponentInstance(initialVNode, parentComponent, parentSuspense);

    if ( true && instance.type.__hmrId) {
      registerHMR(instance);
    }

    if (true) {
      pushWarningContext(initialVNode);
      startMeasure(instance, "mount");
    } // inject renderer internals for keepAlive


    if (isKeepAlive(initialVNode)) {
      instance.ctx.renderer = internals;
    } // resolve props and slots for setup context


    {
      if (true) {
        startMeasure(instance, "init");
      }

      setupComponent(instance);

      if (true) {
        endMeasure(instance, "init");
      }
    } // setup() is async. This component relies on async logic to be resolved
    // before proceeding

    if (instance.asyncDep) {
      parentSuspense && parentSuspense.registerDep(instance, setupRenderEffect); // Give it a placeholder if this is not hydration
      // TODO handle self-defined fallback

      if (!initialVNode.el) {
        var placeholder = instance.subTree = createVNode(Comment$1);
        processCommentNode(null, placeholder, container, anchor);
      }

      return;
    }

    setupRenderEffect(instance, initialVNode, container, anchor, parentSuspense, isSVG, optimized);

    if (true) {
      popWarningContext();
      endMeasure(instance, "mount");
    }
  };

  var updateComponent = function updateComponent(n1, n2, optimized) {
    var instance = n2.component = n1.component;

    if (shouldUpdateComponent(n1, n2, optimized)) {
      if (instance.asyncDep && !instance.asyncResolved) {
        // async & still pending - just update props and slots
        // since the component's reactive effect for render isn't set-up yet
        if (true) {
          pushWarningContext(n2);
        }

        updateComponentPreRender(instance, n2, optimized);

        if (true) {
          popWarningContext();
        }

        return;
      } else {
        // normal update
        instance.next = n2; // in case the child component is also queued, remove it to avoid
        // double updating the same child component in the same flush.

        invalidateJob(instance.update); // instance.update is the reactive effect runner.

        instance.update();
      }
    } else {
      // no update needed. just copy over properties
      n2.component = n1.component;
      n2.el = n1.el;
      instance.vnode = n2;
    }
  };

  var setupRenderEffect = function setupRenderEffect(instance, initialVNode, container, anchor, parentSuspense, isSVG, optimized) {
    // create reactive effect for rendering
    instance.update = (0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.effect)(function componentEffect() {
      if (!instance.isMounted) {
        var vnodeHook;
        var _initialVNode = initialVNode,
            el = _initialVNode.el,
            props = _initialVNode.props;
        var bm = instance.bm,
            m = instance.m,
            parent = instance.parent; // beforeMount hook

        if (bm) {
          (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.invokeArrayFns)(bm);
        } // onVnodeBeforeMount


        if (vnodeHook = props && props.onVnodeBeforeMount) {
          invokeVNodeHook(vnodeHook, parent, initialVNode);
        }

        if (el && hydrateNode) {
          // vnode has adopted host node - perform hydration instead of mount.
          var hydrateSubTree = function hydrateSubTree() {
            if (true) {
              startMeasure(instance, "render");
            }

            instance.subTree = renderComponentRoot(instance);

            if (true) {
              endMeasure(instance, "render");
            }

            if (true) {
              startMeasure(instance, "hydrate");
            }

            hydrateNode(el, instance.subTree, instance, parentSuspense, null);

            if (true) {
              endMeasure(instance, "hydrate");
            }
          };

          if (isAsyncWrapper(initialVNode)) {
            initialVNode.type.__asyncLoader().then( // note: we are moving the render call into an async callback,
            // which means it won't track dependencies - but it's ok because
            // a server-rendered async wrapper is already in resolved state
            // and it will never need to change.
            function () {
              return !instance.isUnmounted && hydrateSubTree();
            });
          } else {
            hydrateSubTree();
          }
        } else {
          if (true) {
            startMeasure(instance, "render");
          }

          var subTree = instance.subTree = renderComponentRoot(instance);

          if (true) {
            endMeasure(instance, "render");
          }

          if (true) {
            startMeasure(instance, "patch");
          }

          patch(null, subTree, container, anchor, instance, parentSuspense, isSVG);

          if (true) {
            endMeasure(instance, "patch");
          }

          initialVNode.el = subTree.el;
        } // mounted hook


        if (m) {
          queuePostRenderEffect(m, parentSuspense);
        } // onVnodeMounted


        if (vnodeHook = props && props.onVnodeMounted) {
          var scopedInitialVNode = initialVNode;
          queuePostRenderEffect(function () {
            return invokeVNodeHook(vnodeHook, parent, scopedInitialVNode);
          }, parentSuspense);
        } // activated hook for keep-alive roots.
        // #1742 activated hook must be accessed after first render
        // since the hook may be injected by a child keep-alive


        if (initialVNode.shapeFlag & 256
        /* COMPONENT_SHOULD_KEEP_ALIVE */
        ) {
            instance.a && queuePostRenderEffect(instance.a, parentSuspense);
          }

        instance.isMounted = true;

        if (true) {
          devtoolsComponentAdded(instance);
        } // #2458: deference mount-only object parameters to prevent memleaks


        initialVNode = container = anchor = null;
      } else {
        // updateComponent
        // This is triggered by mutation of component's own state (next: null)
        // OR parent calling processComponent (next: VNode)
        var next = instance.next,
            bu = instance.bu,
            u = instance.u,
            _parent = instance.parent,
            vnode = instance.vnode;
        var originNext = next;

        var _vnodeHook;

        if (true) {
          pushWarningContext(next || instance.vnode);
        }

        if (next) {
          next.el = vnode.el;
          updateComponentPreRender(instance, next, optimized);
        } else {
          next = vnode;
        } // beforeUpdate hook


        if (bu) {
          (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.invokeArrayFns)(bu);
        } // onVnodeBeforeUpdate


        if (_vnodeHook = next.props && next.props.onVnodeBeforeUpdate) {
          invokeVNodeHook(_vnodeHook, _parent, next, vnode);
        } // render


        if (true) {
          startMeasure(instance, "render");
        }

        var nextTree = renderComponentRoot(instance);

        if (true) {
          endMeasure(instance, "render");
        }

        var prevTree = instance.subTree;
        instance.subTree = nextTree;

        if (true) {
          startMeasure(instance, "patch");
        }

        patch(prevTree, nextTree, // parent may have changed if it's in a teleport
        hostParentNode(prevTree.el), // anchor may have changed if it's in a fragment
        getNextHostNode(prevTree), instance, parentSuspense, isSVG);

        if (true) {
          endMeasure(instance, "patch");
        }

        next.el = nextTree.el;

        if (originNext === null) {
          // self-triggered update. In case of HOC, update parent component
          // vnode el. HOC is indicated by parent instance's subTree pointing
          // to child component's vnode
          updateHOCHostEl(instance, nextTree.el);
        } // updated hook


        if (u) {
          queuePostRenderEffect(u, parentSuspense);
        } // onVnodeUpdated


        if (_vnodeHook = next.props && next.props.onVnodeUpdated) {
          queuePostRenderEffect(function () {
            return invokeVNodeHook(_vnodeHook, _parent, next, vnode);
          }, parentSuspense);
        }

        if (true) {
          devtoolsComponentUpdated(instance);
        }

        if (true) {
          popWarningContext();
        }
      }
    },  true ? createDevEffectOptions(instance) : 0);

    if (true) {
      // @ts-ignore
      instance.update.ownerInstance = instance;
    }
  };

  var updateComponentPreRender = function updateComponentPreRender(instance, nextVNode, optimized) {
    nextVNode.component = instance;
    var prevProps = instance.vnode.props;
    instance.vnode = nextVNode;
    instance.next = null;
    updateProps(instance, nextVNode.props, prevProps, optimized);
    updateSlots(instance, nextVNode.children, optimized);
    (0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.pauseTracking)(); // props update may have triggered pre-flush watchers.
    // flush them before the render update.

    flushPreFlushCbs(undefined, instance.update);
    (0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.resetTracking)();
  };

  var patchChildren = function patchChildren(n1, n2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds) {
    var optimized = arguments.length > 8 && arguments[8] !== undefined ? arguments[8] : false;
    var c1 = n1 && n1.children;
    var prevShapeFlag = n1 ? n1.shapeFlag : 0;
    var c2 = n2.children;
    var patchFlag = n2.patchFlag,
        shapeFlag = n2.shapeFlag; // fast path

    if (patchFlag > 0) {
      if (patchFlag & 128
      /* KEYED_FRAGMENT */
      ) {
          // this could be either fully-keyed or mixed (some keyed some not)
          // presence of patchFlag means children are guaranteed to be arrays
          patchKeyedChildren(c1, c2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
          return;
        } else if (patchFlag & 256
      /* UNKEYED_FRAGMENT */
      ) {
          // unkeyed
          patchUnkeyedChildren(c1, c2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
          return;
        }
    } // children has 3 possibilities: text, array or no children.


    if (shapeFlag & 8
    /* TEXT_CHILDREN */
    ) {
        // text children fast path
        if (prevShapeFlag & 16
        /* ARRAY_CHILDREN */
        ) {
            unmountChildren(c1, parentComponent, parentSuspense);
          }

        if (c2 !== c1) {
          hostSetElementText(container, c2);
        }
      } else {
      if (prevShapeFlag & 16
      /* ARRAY_CHILDREN */
      ) {
          // prev children was array
          if (shapeFlag & 16
          /* ARRAY_CHILDREN */
          ) {
              // two arrays, cannot assume anything, do full diff
              patchKeyedChildren(c1, c2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
            } else {
            // no new children, just unmount old
            unmountChildren(c1, parentComponent, parentSuspense, true);
          }
        } else {
        // prev children was text OR null
        // new children is array OR null
        if (prevShapeFlag & 8
        /* TEXT_CHILDREN */
        ) {
            hostSetElementText(container, '');
          } // mount new if array


        if (shapeFlag & 16
        /* ARRAY_CHILDREN */
        ) {
            mountChildren(c2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
          }
      }
    }
  };

  var patchUnkeyedChildren = function patchUnkeyedChildren(c1, c2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized) {
    c1 = c1 || _vue_shared__WEBPACK_IMPORTED_MODULE_1__.EMPTY_ARR;
    c2 = c2 || _vue_shared__WEBPACK_IMPORTED_MODULE_1__.EMPTY_ARR;
    var oldLength = c1.length;
    var newLength = c2.length;
    var commonLength = Math.min(oldLength, newLength);
    var i;

    for (i = 0; i < commonLength; i++) {
      var nextChild = c2[i] = optimized ? cloneIfMounted(c2[i]) : normalizeVNode(c2[i]);
      patch(c1[i], nextChild, container, null, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
    }

    if (oldLength > newLength) {
      // remove old
      unmountChildren(c1, parentComponent, parentSuspense, true, false, commonLength);
    } else {
      // mount new
      mountChildren(c2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized, commonLength);
    }
  }; // can be all-keyed or mixed


  var patchKeyedChildren = function patchKeyedChildren(c1, c2, container, parentAnchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized) {
    var i = 0;
    var l2 = c2.length;
    var e1 = c1.length - 1; // prev ending index

    var e2 = l2 - 1; // next ending index
    // 1. sync from start
    // (a b) c
    // (a b) d e

    while (i <= e1 && i <= e2) {
      var n1 = c1[i];
      var n2 = c2[i] = optimized ? cloneIfMounted(c2[i]) : normalizeVNode(c2[i]);

      if (isSameVNodeType(n1, n2)) {
        patch(n1, n2, container, null, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
      } else {
        break;
      }

      i++;
    } // 2. sync from end
    // a (b c)
    // d e (b c)


    while (i <= e1 && i <= e2) {
      var _n2 = c1[e1];

      var _n3 = c2[e2] = optimized ? cloneIfMounted(c2[e2]) : normalizeVNode(c2[e2]);

      if (isSameVNodeType(_n2, _n3)) {
        patch(_n2, _n3, container, null, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
      } else {
        break;
      }

      e1--;
      e2--;
    } // 3. common sequence + mount
    // (a b)
    // (a b) c
    // i = 2, e1 = 1, e2 = 2
    // (a b)
    // c (a b)
    // i = 0, e1 = -1, e2 = 0


    if (i > e1) {
      if (i <= e2) {
        var nextPos = e2 + 1;
        var anchor = nextPos < l2 ? c2[nextPos].el : parentAnchor;

        while (i <= e2) {
          patch(null, c2[i] = optimized ? cloneIfMounted(c2[i]) : normalizeVNode(c2[i]), container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
          i++;
        }
      }
    } // 4. common sequence + unmount
    // (a b) c
    // (a b)
    // i = 2, e1 = 2, e2 = 1
    // a (b c)
    // (b c)
    // i = 0, e1 = 0, e2 = -1
    else if (i > e2) {
        while (i <= e1) {
          unmount(c1[i], parentComponent, parentSuspense, true);
          i++;
        }
      } // 5. unknown sequence
      // [i ... e1 + 1]: a b [c d e] f g
      // [i ... e2 + 1]: a b [e d c h] f g
      // i = 2, e1 = 4, e2 = 5
      else {
          var s1 = i; // prev starting index

          var s2 = i; // next starting index
          // 5.1 build key:index map for newChildren

          var keyToNewIndexMap = new Map();

          for (i = s2; i <= e2; i++) {
            var nextChild = c2[i] = optimized ? cloneIfMounted(c2[i]) : normalizeVNode(c2[i]);

            if (nextChild.key != null) {
              if ( true && keyToNewIndexMap.has(nextChild.key)) {
                warn("Duplicate keys found during update:", JSON.stringify(nextChild.key), "Make sure keys are unique.");
              }

              keyToNewIndexMap.set(nextChild.key, i);
            }
          } // 5.2 loop through old children left to be patched and try to patch
          // matching nodes & remove nodes that are no longer present


          var j;
          var patched = 0;
          var toBePatched = e2 - s2 + 1;
          var moved = false; // used to track whether any node has moved

          var maxNewIndexSoFar = 0; // works as Map<newIndex, oldIndex>
          // Note that oldIndex is offset by +1
          // and oldIndex = 0 is a special value indicating the new node has
          // no corresponding old node.
          // used for determining longest stable subsequence

          var newIndexToOldIndexMap = new Array(toBePatched);

          for (i = 0; i < toBePatched; i++) {
            newIndexToOldIndexMap[i] = 0;
          }

          for (i = s1; i <= e1; i++) {
            var prevChild = c1[i];

            if (patched >= toBePatched) {
              // all new children have been patched so this can only be a removal
              unmount(prevChild, parentComponent, parentSuspense, true);
              continue;
            }

            var newIndex = void 0;

            if (prevChild.key != null) {
              newIndex = keyToNewIndexMap.get(prevChild.key);
            } else {
              // key-less node, try to locate a key-less node of the same type
              for (j = s2; j <= e2; j++) {
                if (newIndexToOldIndexMap[j - s2] === 0 && isSameVNodeType(prevChild, c2[j])) {
                  newIndex = j;
                  break;
                }
              }
            }

            if (newIndex === undefined) {
              unmount(prevChild, parentComponent, parentSuspense, true);
            } else {
              newIndexToOldIndexMap[newIndex - s2] = i + 1;

              if (newIndex >= maxNewIndexSoFar) {
                maxNewIndexSoFar = newIndex;
              } else {
                moved = true;
              }

              patch(prevChild, c2[newIndex], container, null, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
              patched++;
            }
          } // 5.3 move and mount
          // generate longest stable subsequence only when nodes have moved


          var increasingNewIndexSequence = moved ? getSequence(newIndexToOldIndexMap) : _vue_shared__WEBPACK_IMPORTED_MODULE_1__.EMPTY_ARR;
          j = increasingNewIndexSequence.length - 1; // looping backwards so that we can use last patched node as anchor

          for (i = toBePatched - 1; i >= 0; i--) {
            var nextIndex = s2 + i;
            var _nextChild = c2[nextIndex];

            var _anchor2 = nextIndex + 1 < l2 ? c2[nextIndex + 1].el : parentAnchor;

            if (newIndexToOldIndexMap[i] === 0) {
              // mount new
              patch(null, _nextChild, container, _anchor2, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
            } else if (moved) {
              // move if:
              // There is no stable subsequence (e.g. a reverse)
              // OR current node is not among the stable sequence
              if (j < 0 || i !== increasingNewIndexSequence[j]) {
                move(_nextChild, container, _anchor2, 2
                /* REORDER */
                );
              } else {
                j--;
              }
            }
          }
        }
  };

  var move = function move(vnode, container, anchor, moveType) {
    var parentSuspense = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : null;
    var el = vnode.el,
        type = vnode.type,
        transition = vnode.transition,
        children = vnode.children,
        shapeFlag = vnode.shapeFlag;

    if (shapeFlag & 6
    /* COMPONENT */
    ) {
        move(vnode.component.subTree, container, anchor, moveType);
        return;
      }

    if (shapeFlag & 128
    /* SUSPENSE */
    ) {
        vnode.suspense.move(container, anchor, moveType);
        return;
      }

    if (shapeFlag & 64
    /* TELEPORT */
    ) {
        type.move(vnode, container, anchor, internals);
        return;
      }

    if (type === Fragment) {
      hostInsert(el, container, anchor);

      for (var i = 0; i < children.length; i++) {
        move(children[i], container, anchor, moveType);
      }

      hostInsert(vnode.anchor, container, anchor);
      return;
    }

    if (type === Static) {
      moveStaticNode(vnode, container, anchor);
      return;
    } // single nodes


    var needTransition = moveType !== 2
    /* REORDER */
    && shapeFlag & 1
    /* ELEMENT */
    && transition;

    if (needTransition) {
      if (moveType === 0
      /* ENTER */
      ) {
          transition.beforeEnter(el);
          hostInsert(el, container, anchor);
          queuePostRenderEffect(function () {
            return transition.enter(el);
          }, parentSuspense);
        } else {
        var leave = transition.leave,
            delayLeave = transition.delayLeave,
            afterLeave = transition.afterLeave;

        var _remove = function _remove() {
          return hostInsert(el, container, anchor);
        };

        var performLeave = function performLeave() {
          leave(el, function () {
            _remove();

            afterLeave && afterLeave();
          });
        };

        if (delayLeave) {
          delayLeave(el, _remove, performLeave);
        } else {
          performLeave();
        }
      }
    } else {
      hostInsert(el, container, anchor);
    }
  };

  var unmount = function unmount(vnode, parentComponent, parentSuspense) {
    var doRemove = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
    var optimized = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;
    var type = vnode.type,
        props = vnode.props,
        ref = vnode.ref,
        children = vnode.children,
        dynamicChildren = vnode.dynamicChildren,
        shapeFlag = vnode.shapeFlag,
        patchFlag = vnode.patchFlag,
        dirs = vnode.dirs; // unset ref

    if (ref != null) {
      setRef(ref, null, parentSuspense, vnode, true);
    }

    if (shapeFlag & 256
    /* COMPONENT_SHOULD_KEEP_ALIVE */
    ) {
        parentComponent.ctx.deactivate(vnode);
        return;
      }

    var shouldInvokeDirs = shapeFlag & 1
    /* ELEMENT */
    && dirs;
    var vnodeHook;

    if (vnodeHook = props && props.onVnodeBeforeUnmount) {
      invokeVNodeHook(vnodeHook, parentComponent, vnode);
    }

    if (shapeFlag & 6
    /* COMPONENT */
    ) {
        unmountComponent(vnode.component, parentSuspense, doRemove);
      } else {
      if (shapeFlag & 128
      /* SUSPENSE */
      ) {
          vnode.suspense.unmount(parentSuspense, doRemove);
          return;
        }

      if (shouldInvokeDirs) {
        invokeDirectiveHook(vnode, null, parentComponent, 'beforeUnmount');
      }

      if (shapeFlag & 64
      /* TELEPORT */
      ) {
          vnode.type.remove(vnode, parentComponent, parentSuspense, optimized, internals, doRemove);
        } else if (dynamicChildren && ( // #1153: fast path should not be taken for non-stable (v-for) fragments
      type !== Fragment || patchFlag > 0 && patchFlag & 64
      /* STABLE_FRAGMENT */
      )) {
        // fast path for block nodes: only need to unmount dynamic children.
        unmountChildren(dynamicChildren, parentComponent, parentSuspense, false, true);
      } else if (type === Fragment && (patchFlag & 128
      /* KEYED_FRAGMENT */
      || patchFlag & 256
      /* UNKEYED_FRAGMENT */
      ) || !optimized && shapeFlag & 16
      /* ARRAY_CHILDREN */
      ) {
        unmountChildren(children, parentComponent, parentSuspense);
      }

      if (doRemove) {
        remove(vnode);
      }
    }

    if ((vnodeHook = props && props.onVnodeUnmounted) || shouldInvokeDirs) {
      queuePostRenderEffect(function () {
        vnodeHook && invokeVNodeHook(vnodeHook, parentComponent, vnode);
        shouldInvokeDirs && invokeDirectiveHook(vnode, null, parentComponent, 'unmounted');
      }, parentSuspense);
    }
  };

  var remove = function remove(vnode) {
    var type = vnode.type,
        el = vnode.el,
        anchor = vnode.anchor,
        transition = vnode.transition;

    if (type === Fragment) {
      removeFragment(el, anchor);
      return;
    }

    if (type === Static) {
      removeStaticNode(vnode);
      return;
    }

    var performRemove = function performRemove() {
      hostRemove(el);

      if (transition && !transition.persisted && transition.afterLeave) {
        transition.afterLeave();
      }
    };

    if (vnode.shapeFlag & 1
    /* ELEMENT */
    && transition && !transition.persisted) {
      var leave = transition.leave,
          delayLeave = transition.delayLeave;

      var performLeave = function performLeave() {
        return leave(el, performRemove);
      };

      if (delayLeave) {
        delayLeave(vnode.el, performRemove, performLeave);
      } else {
        performLeave();
      }
    } else {
      performRemove();
    }
  };

  var removeFragment = function removeFragment(cur, end) {
    // For fragments, directly remove all contained DOM nodes.
    // (fragment child nodes cannot have transition)
    var next;

    while (cur !== end) {
      next = hostNextSibling(cur);
      hostRemove(cur);
      cur = next;
    }

    hostRemove(end);
  };

  var unmountComponent = function unmountComponent(instance, parentSuspense, doRemove) {
    if ( true && instance.type.__hmrId) {
      unregisterHMR(instance);
    }

    var bum = instance.bum,
        effects = instance.effects,
        update = instance.update,
        subTree = instance.subTree,
        um = instance.um; // beforeUnmount hook

    if (bum) {
      (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.invokeArrayFns)(bum);
    }

    if (effects) {
      for (var i = 0; i < effects.length; i++) {
        (0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.stop)(effects[i]);
      }
    } // update may be null if a component is unmounted before its async
    // setup has resolved.


    if (update) {
      (0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.stop)(update);
      unmount(subTree, instance, parentSuspense, doRemove);
    } // unmounted hook


    if (um) {
      queuePostRenderEffect(um, parentSuspense);
    }

    queuePostRenderEffect(function () {
      instance.isUnmounted = true;
    }, parentSuspense); // A component with async dep inside a pending suspense is unmounted before
    // its async dep resolves. This should remove the dep from the suspense, and
    // cause the suspense to resolve immediately if that was the last dep.

    if (parentSuspense && parentSuspense.pendingBranch && !parentSuspense.isUnmounted && instance.asyncDep && !instance.asyncResolved && instance.suspenseId === parentSuspense.pendingId) {
      parentSuspense.deps--;

      if (parentSuspense.deps === 0) {
        parentSuspense.resolve();
      }
    }

    if (true) {
      devtoolsComponentRemoved(instance);
    }
  };

  var unmountChildren = function unmountChildren(children, parentComponent, parentSuspense) {
    var doRemove = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
    var optimized = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;
    var start = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 0;

    for (var i = start; i < children.length; i++) {
      unmount(children[i], parentComponent, parentSuspense, doRemove, optimized);
    }
  };

  var getNextHostNode = function getNextHostNode(vnode) {
    if (vnode.shapeFlag & 6
    /* COMPONENT */
    ) {
        return getNextHostNode(vnode.component.subTree);
      }

    if (vnode.shapeFlag & 128
    /* SUSPENSE */
    ) {
        return vnode.suspense.next();
      }

    return hostNextSibling(vnode.anchor || vnode.el);
  };

  var render = function render(vnode, container, isSVG) {
    if (vnode == null) {
      if (container._vnode) {
        unmount(container._vnode, null, null, true);
      }
    } else {
      patch(container._vnode || null, vnode, container, null, null, null, isSVG);
    }

    flushPostFlushCbs();
    container._vnode = vnode;
  };

  var internals = {
    p: patch,
    um: unmount,
    m: move,
    r: remove,
    mt: mountComponent,
    mc: mountChildren,
    pc: patchChildren,
    pbc: patchBlockChildren,
    n: getNextHostNode,
    o: options
  };
  var hydrate;
  var hydrateNode;

  if (createHydrationFns) {
    var _createHydrationFns = createHydrationFns(internals);

    var _createHydrationFns2 = _slicedToArray(_createHydrationFns, 2);

    hydrate = _createHydrationFns2[0];
    hydrateNode = _createHydrationFns2[1];
  }

  return {
    render: render,
    hydrate: hydrate,
    createApp: createAppAPI(render, hydrate)
  };
}

function invokeVNodeHook(hook, instance, vnode) {
  var prevVNode = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
  callWithAsyncErrorHandling(hook, instance, 7
  /* VNODE_HOOK */
  , [vnode, prevVNode]);
}
/**
 * #1156
 * When a component is HMR-enabled, we need to make sure that all static nodes
 * inside a block also inherit the DOM element from the previous tree so that
 * HMR updates (which are full updates) can retrieve the element for patching.
 *
 * #2080
 * Inside keyed `template` fragment static children, if a fragment is moved,
 * the children will always moved so that need inherit el form previous nodes
 * to ensure correct moved position.
 */


function traverseStaticChildren(n1, n2) {
  var shallow = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  var ch1 = n1.children;
  var ch2 = n2.children;

  if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isArray)(ch1) && (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isArray)(ch2)) {
    for (var i = 0; i < ch1.length; i++) {
      // this is only called in the optimized path so array children are
      // guaranteed to be vnodes
      var c1 = ch1[i];
      var c2 = ch2[i];

      if (c2.shapeFlag & 1
      /* ELEMENT */
      && !c2.dynamicChildren) {
        if (c2.patchFlag <= 0 || c2.patchFlag === 32
        /* HYDRATE_EVENTS */
        ) {
            c2 = ch2[i] = cloneIfMounted(ch2[i]);
            c2.el = c1.el;
          }

        if (!shallow) traverseStaticChildren(c1, c2);
      } // also inherit for comment nodes, but not placeholders (e.g. v-if which
      // would have received .el during block patch)


      if ( true && c2.type === Comment$1 && !c2.el) {
        c2.el = c1.el;
      }
    }
  }
} // https://en.wikipedia.org/wiki/Longest_increasing_subsequence


function getSequence(arr) {
  var p = arr.slice();
  var result = [0];
  var i, j, u, v, c;
  var len = arr.length;

  for (i = 0; i < len; i++) {
    var arrI = arr[i];

    if (arrI !== 0) {
      j = result[result.length - 1];

      if (arr[j] < arrI) {
        p[i] = j;
        result.push(i);
        continue;
      }

      u = 0;
      v = result.length - 1;

      while (u < v) {
        c = (u + v) / 2 | 0;

        if (arr[result[c]] < arrI) {
          u = c + 1;
        } else {
          v = c;
        }
      }

      if (arrI < arr[result[u]]) {
        if (u > 0) {
          p[i] = result[u - 1];
        }

        result[u] = i;
      }
    }
  }

  u = result.length;
  v = result[u - 1];

  while (u-- > 0) {
    result[u] = v;
    v = p[v];
  }

  return result;
}

var isTeleport = function isTeleport(type) {
  return type.__isTeleport;
};

var isTeleportDisabled = function isTeleportDisabled(props) {
  return props && (props.disabled || props.disabled === '');
};

var isTargetSVG = function isTargetSVG(target) {
  return typeof SVGElement !== 'undefined' && target instanceof SVGElement;
};

var resolveTarget = function resolveTarget(props, select) {
  var targetSelector = props && props.to;

  if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isString)(targetSelector)) {
    if (!select) {
       true && warn("Current renderer does not support string target for Teleports. " + "(missing querySelector renderer option)");
      return null;
    } else {
      var target = select(targetSelector);

      if (!target) {
         true && warn("Failed to locate Teleport target with selector \"".concat(targetSelector, "\". ") + "Note the target element must exist before the component is mounted - " + "i.e. the target cannot be rendered by the component itself, and " + "ideally should be outside of the entire Vue component tree.");
      }

      return target;
    }
  } else {
    if ( true && !targetSelector && !isTeleportDisabled(props)) {
      warn("Invalid Teleport target: ".concat(targetSelector));
    }

    return targetSelector;
  }
};

var TeleportImpl = {
  __isTeleport: true,
  process: function (_process) {
    function process(_x, _x2, _x3, _x4, _x5, _x6, _x7, _x8, _x9, _x10) {
      return _process.apply(this, arguments);
    }

    process.toString = function () {
      return _process.toString();
    };

    return process;
  }(function (n1, n2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized, internals) {
    var mountChildren = internals.mc,
        patchChildren = internals.pc,
        patchBlockChildren = internals.pbc,
        _internals$o = internals.o,
        insert = _internals$o.insert,
        querySelector = _internals$o.querySelector,
        createText = _internals$o.createText,
        createComment = _internals$o.createComment;
    var disabled = isTeleportDisabled(n2.props);
    var shapeFlag = n2.shapeFlag,
        children = n2.children,
        dynamicChildren = n2.dynamicChildren; // #3302
    // HMR updated, force full diff

    if ( true && isHmrUpdating) {
      optimized = false;
      dynamicChildren = null;
    }

    if (n1 == null) {
      // insert anchors in the main view
      var placeholder = n2.el =  true ? createComment('teleport start') : 0;
      var mainAnchor = n2.anchor =  true ? createComment('teleport end') : 0;
      insert(placeholder, container, anchor);
      insert(mainAnchor, container, anchor);
      var target = n2.target = resolveTarget(n2.props, querySelector);
      var targetAnchor = n2.targetAnchor = createText('');

      if (target) {
        insert(targetAnchor, target); // #2652 we could be teleporting from a non-SVG tree into an SVG tree

        isSVG = isSVG || isTargetSVG(target);
      } else if ( true && !disabled) {
        warn('Invalid Teleport target on mount:', target, "(".concat(_typeof(target), ")"));
      }

      var mount = function mount(container, anchor) {
        // Teleport *always* has Array children. This is enforced in both the
        // compiler and vnode children normalization.
        if (shapeFlag & 16
        /* ARRAY_CHILDREN */
        ) {
            mountChildren(children, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
          }
      };

      if (disabled) {
        mount(container, mainAnchor);
      } else if (target) {
        mount(target, targetAnchor);
      }
    } else {
      // update content
      n2.el = n1.el;

      var _mainAnchor = n2.anchor = n1.anchor;

      var _target = n2.target = n1.target;

      var _targetAnchor = n2.targetAnchor = n1.targetAnchor;

      var wasDisabled = isTeleportDisabled(n1.props);
      var currentContainer = wasDisabled ? container : _target;
      var currentAnchor = wasDisabled ? _mainAnchor : _targetAnchor;
      isSVG = isSVG || isTargetSVG(_target);

      if (dynamicChildren) {
        // fast path when the teleport happens to be a block root
        patchBlockChildren(n1.dynamicChildren, dynamicChildren, currentContainer, parentComponent, parentSuspense, isSVG, slotScopeIds); // even in block tree mode we need to make sure all root-level nodes
        // in the teleport inherit previous DOM references so that they can
        // be moved in future patches.

        traverseStaticChildren(n1, n2, true);
      } else if (!optimized) {
        patchChildren(n1, n2, currentContainer, currentAnchor, parentComponent, parentSuspense, isSVG, slotScopeIds, false);
      }

      if (disabled) {
        if (!wasDisabled) {
          // enabled -> disabled
          // move into main container
          moveTeleport(n2, container, _mainAnchor, internals, 1
          /* TOGGLE */
          );
        }
      } else {
        // target changed
        if ((n2.props && n2.props.to) !== (n1.props && n1.props.to)) {
          var nextTarget = n2.target = resolveTarget(n2.props, querySelector);

          if (nextTarget) {
            moveTeleport(n2, nextTarget, null, internals, 0
            /* TARGET_CHANGE */
            );
          } else if (true) {
            warn('Invalid Teleport target on update:', _target, "(".concat(_typeof(_target), ")"));
          }
        } else if (wasDisabled) {
          // disabled -> enabled
          // move into teleport target
          moveTeleport(n2, _target, _targetAnchor, internals, 1
          /* TOGGLE */
          );
        }
      }
    }
  }),
  remove: function remove(vnode, parentComponent, parentSuspense, optimized, _ref14, doRemove) {
    var unmount = _ref14.um,
        hostRemove = _ref14.o.remove;
    var shapeFlag = vnode.shapeFlag,
        children = vnode.children,
        anchor = vnode.anchor,
        targetAnchor = vnode.targetAnchor,
        target = vnode.target,
        props = vnode.props;

    if (target) {
      hostRemove(targetAnchor);
    } // an unmounted teleport should always remove its children if not disabled


    if (doRemove || !isTeleportDisabled(props)) {
      hostRemove(anchor);

      if (shapeFlag & 16
      /* ARRAY_CHILDREN */
      ) {
          for (var i = 0; i < children.length; i++) {
            var child = children[i];
            unmount(child, parentComponent, parentSuspense, true, !!child.dynamicChildren);
          }
        }
    }
  },
  move: moveTeleport,
  hydrate: hydrateTeleport
};

function moveTeleport(vnode, container, parentAnchor, _ref15)
/* REORDER */
{
  var insert = _ref15.o.insert,
      move = _ref15.m;
  var moveType = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 2;

  // move target anchor if this is a target change.
  if (moveType === 0
  /* TARGET_CHANGE */
  ) {
      insert(vnode.targetAnchor, container, parentAnchor);
    }

  var el = vnode.el,
      anchor = vnode.anchor,
      shapeFlag = vnode.shapeFlag,
      children = vnode.children,
      props = vnode.props;
  var isReorder = moveType === 2
  /* REORDER */
  ; // move main view anchor if this is a re-order.

  if (isReorder) {
    insert(el, container, parentAnchor);
  } // if this is a re-order and teleport is enabled (content is in target)
  // do not move children. So the opposite is: only move children if this
  // is not a reorder, or the teleport is disabled


  if (!isReorder || isTeleportDisabled(props)) {
    // Teleport has either Array children or no children.
    if (shapeFlag & 16
    /* ARRAY_CHILDREN */
    ) {
        for (var i = 0; i < children.length; i++) {
          move(children[i], container, parentAnchor, 2
          /* REORDER */
          );
        }
      }
  } // move main view anchor if this is a re-order.


  if (isReorder) {
    insert(anchor, container, parentAnchor);
  }
}

function hydrateTeleport(node, vnode, parentComponent, parentSuspense, slotScopeIds, optimized, _ref16, hydrateChildren) {
  var _ref16$o = _ref16.o,
      nextSibling = _ref16$o.nextSibling,
      parentNode = _ref16$o.parentNode,
      querySelector = _ref16$o.querySelector;
  var target = vnode.target = resolveTarget(vnode.props, querySelector);

  if (target) {
    // if multiple teleports rendered to the same target element, we need to
    // pick up from where the last teleport finished instead of the first node
    var targetNode = target._lpa || target.firstChild;

    if (vnode.shapeFlag & 16
    /* ARRAY_CHILDREN */
    ) {
        if (isTeleportDisabled(vnode.props)) {
          vnode.anchor = hydrateChildren(nextSibling(node), vnode, parentNode(node), parentComponent, parentSuspense, slotScopeIds, optimized);
          vnode.targetAnchor = targetNode;
        } else {
          vnode.anchor = nextSibling(node);
          vnode.targetAnchor = hydrateChildren(targetNode, vnode, target, parentComponent, parentSuspense, slotScopeIds, optimized);
        }

        target._lpa = vnode.targetAnchor && nextSibling(vnode.targetAnchor);
      }
  }

  return vnode.anchor && nextSibling(vnode.anchor);
} // Force-casted public typing for h and TSX props inference


var Teleport = TeleportImpl;
var COMPONENTS = 'components';
var DIRECTIVES = 'directives';
/**
 * @private
 */

function resolveComponent(name, maybeSelfReference) {
  return resolveAsset(COMPONENTS, name, true, maybeSelfReference) || name;
}

var NULL_DYNAMIC_COMPONENT = Symbol();
/**
 * @private
 */

function resolveDynamicComponent(component) {
  if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isString)(component)) {
    return resolveAsset(COMPONENTS, component, false) || component;
  } else {
    // invalid types will fallthrough to createVNode and raise warning
    return component || NULL_DYNAMIC_COMPONENT;
  }
}
/**
 * @private
 */


function resolveDirective(name) {
  return resolveAsset(DIRECTIVES, name);
} // implementation


function resolveAsset(type, name) {
  var warnMissing = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
  var maybeSelfReference = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
  var instance = currentRenderingInstance || currentInstance;

  if (instance) {
    var Component = instance.type; // explicit self name has highest priority

    if (type === COMPONENTS) {
      var selfName = getComponentName(Component);

      if (selfName && (selfName === name || selfName === (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.camelize)(name) || selfName === (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.capitalize)((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.camelize)(name)))) {
        return Component;
      }
    }

    var res = // local registration
    // check instance[type] first which is resolved for options API
    resolve(instance[type] || Component[type], name) || // global registration
    resolve(instance.appContext[type], name);

    if (!res && maybeSelfReference) {
      // fallback to implicit self-reference
      return Component;
    }

    if ( true && warnMissing && !res) {
      warn("Failed to resolve ".concat(type.slice(0, -1), ": ").concat(name));
    }

    return res;
  } else if (true) {
    warn("resolve".concat((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.capitalize)(type.slice(0, -1)), " ") + "can only be used in render() or setup().");
  }
}

function resolve(registry, name) {
  return registry && (registry[name] || registry[(0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.camelize)(name)] || registry[(0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.capitalize)((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.camelize)(name))]);
}

var Fragment = Symbol( true ? 'Fragment' : 0);
var Text = Symbol( true ? 'Text' : 0);
var Comment$1 = Symbol( true ? 'Comment' : 0);
var Static = Symbol( true ? 'Static' : 0); // Since v-if and v-for are the two possible ways node structure can dynamically
// change, once we consider v-if branches and each v-for fragment a block, we
// can divide a template into nested blocks, and within each block the node
// structure would be stable. This allows us to skip most children diffing
// and only worry about the dynamic nodes (indicated by patch flags).

var blockStack = [];
var currentBlock = null;
/**
 * Open a block.
 * This must be called before `createBlock`. It cannot be part of `createBlock`
 * because the children of the block are evaluated before `createBlock` itself
 * is called. The generated code typically looks like this:
 *
 * ```js
 * function render() {
 *   return (openBlock(),createBlock('div', null, [...]))
 * }
 * ```
 * disableTracking is true when creating a v-for fragment block, since a v-for
 * fragment always diffs its children.
 *
 * @private
 */

function openBlock() {
  var disableTracking = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
  blockStack.push(currentBlock = disableTracking ? null : []);
}

function closeBlock() {
  blockStack.pop();
  currentBlock = blockStack[blockStack.length - 1] || null;
} // Whether we should be tracking dynamic child nodes inside a block.
// Only tracks when this value is > 0
// We are not using a simple boolean because this value may need to be
// incremented/decremented by nested usage of v-once (see below)


var isBlockTreeEnabled = 1;
/**
 * Block tracking sometimes needs to be disabled, for example during the
 * creation of a tree that needs to be cached by v-once. The compiler generates
 * code like this:
 *
 * ``` js
 * _cache[1] || (
 *   setBlockTracking(-1),
 *   _cache[1] = createVNode(...),
 *   setBlockTracking(1),
 *   _cache[1]
 * )
 * ```
 *
 * @private
 */

function setBlockTracking(value) {
  isBlockTreeEnabled += value;
}
/**
 * Create a block root vnode. Takes the same exact arguments as `createVNode`.
 * A block root keeps track of dynamic nodes within the block in the
 * `dynamicChildren` array.
 *
 * @private
 */


function createBlock(type, props, children, patchFlag, dynamicProps) {
  var vnode = createVNode(type, props, children, patchFlag, dynamicProps, true
  /* isBlock: prevent a block from tracking itself */
  ); // save current block children on the block vnode

  vnode.dynamicChildren = isBlockTreeEnabled > 0 ? currentBlock || _vue_shared__WEBPACK_IMPORTED_MODULE_1__.EMPTY_ARR : null; // close block

  closeBlock(); // a block is always going to be patched, so track it as a child of its
  // parent block

  if (isBlockTreeEnabled > 0 && currentBlock) {
    currentBlock.push(vnode);
  }

  return vnode;
}

function isVNode(value) {
  return value ? value.__v_isVNode === true : false;
}

function isSameVNodeType(n1, n2) {
  if ( true && n2.shapeFlag & 6
  /* COMPONENT */
  && hmrDirtyComponents.has(n2.type)) {
    // HMR only: if the component has been hot-updated, force a reload.
    return false;
  }

  return n1.type === n2.type && n1.key === n2.key;
}

var vnodeArgsTransformer;
/**
 * Internal API for registering an arguments transform for createVNode
 * used for creating stubs in the test-utils
 * It is *internal* but needs to be exposed for test-utils to pick up proper
 * typings
 */

function transformVNodeArgs(transformer) {
  vnodeArgsTransformer = transformer;
}

var createVNodeWithArgsTransform = function createVNodeWithArgsTransform() {
  for (var _len7 = arguments.length, args = new Array(_len7), _key15 = 0; _key15 < _len7; _key15++) {
    args[_key15] = arguments[_key15];
  }

  return _createVNode.apply(void 0, _toConsumableArray(vnodeArgsTransformer ? vnodeArgsTransformer(args, currentRenderingInstance) : args));
};

var InternalObjectKey = "__vInternal";

var normalizeKey = function normalizeKey(_ref17) {
  var key = _ref17.key;
  return key != null ? key : null;
};

var normalizeRef = function normalizeRef(_ref18) {
  var ref = _ref18.ref;
  return ref != null ? (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isString)(ref) || (0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.isRef)(ref) || (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isFunction)(ref) ? {
    i: currentRenderingInstance,
    r: ref
  } : ref : null;
};

var createVNode =  true ? createVNodeWithArgsTransform : 0;

function _createVNode(type) {
  var props = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
  var children = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
  var patchFlag = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
  var dynamicProps = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : null;
  var isBlockNode = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : false;

  if (!type || type === NULL_DYNAMIC_COMPONENT) {
    if ( true && !type) {
      warn("Invalid vnode type when creating vnode: ".concat(type, "."));
    }

    type = Comment$1;
  }

  if (isVNode(type)) {
    // createVNode receiving an existing vnode. This happens in cases like
    // <component :is="vnode"/>
    // #2078 make sure to merge refs during the clone instead of overwriting it
    var cloned = cloneVNode(type, props, true
    /* mergeRef: true */
    );

    if (children) {
      normalizeChildren(cloned, children);
    }

    return cloned;
  } // class component normalization.


  if (isClassComponent(type)) {
    type = type.__vccOpts;
  } // class & style normalization.


  if (props) {
    // for reactive or proxy objects, we need to clone it to enable mutation.
    if ((0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.isProxy)(props) || InternalObjectKey in props) {
      props = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.extend)({}, props);
    }

    var _props = props,
        klass = _props["class"],
        style = _props.style;

    if (klass && !(0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isString)(klass)) {
      props["class"] = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.normalizeClass)(klass);
    }

    if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isObject)(style)) {
      // reactive state objects need to be cloned since they are likely to be
      // mutated
      if ((0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.isProxy)(style) && !(0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isArray)(style)) {
        style = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.extend)({}, style);
      }

      props.style = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.normalizeStyle)(style);
    }
  } // encode the vnode type information into a bitmap


  var shapeFlag = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isString)(type) ? 1
  /* ELEMENT */
  : isSuspense(type) ? 128
  /* SUSPENSE */
  : isTeleport(type) ? 64
  /* TELEPORT */
  : (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isObject)(type) ? 4
  /* STATEFUL_COMPONENT */
  : (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isFunction)(type) ? 2
  /* FUNCTIONAL_COMPONENT */
  : 0;

  if ( true && shapeFlag & 4
  /* STATEFUL_COMPONENT */
  && (0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.isProxy)(type)) {
    type = (0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.toRaw)(type);
    warn("Vue received a Component which was made a reactive object. This can " + "lead to unnecessary performance overhead, and should be avoided by " + "marking the component with `markRaw` or using `shallowRef` " + "instead of `ref`.", "\nComponent that was made reactive: ", type);
  }

  var vnode = {
    __v_isVNode: true,
    __v_skip: true,
    type: type,
    props: props,
    key: props && normalizeKey(props),
    ref: props && normalizeRef(props),
    scopeId: currentScopeId,
    slotScopeIds: null,
    children: null,
    component: null,
    suspense: null,
    ssContent: null,
    ssFallback: null,
    dirs: null,
    transition: null,
    el: null,
    anchor: null,
    target: null,
    targetAnchor: null,
    staticCount: 0,
    shapeFlag: shapeFlag,
    patchFlag: patchFlag,
    dynamicProps: dynamicProps,
    dynamicChildren: null,
    appContext: null
  }; // validate key

  if ( true && vnode.key !== vnode.key) {
    warn("VNode created with invalid key (NaN). VNode type:", vnode.type);
  }

  normalizeChildren(vnode, children); // normalize suspense children

  if (shapeFlag & 128
  /* SUSPENSE */
  ) {
      type.normalize(vnode);
    }

  if (isBlockTreeEnabled > 0 && // avoid a block node from tracking itself
  !isBlockNode && // has current parent block
  currentBlock && ( // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  patchFlag > 0 || shapeFlag & 6
  /* COMPONENT */
  ) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  patchFlag !== 32
  /* HYDRATE_EVENTS */
  ) {
      currentBlock.push(vnode);
    }

  return vnode;
}

function cloneVNode(vnode, extraProps) {
  var mergeRef = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  // This is intentionally NOT using spread or extend to avoid the runtime
  // key enumeration cost.
  var props = vnode.props,
      ref = vnode.ref,
      patchFlag = vnode.patchFlag,
      children = vnode.children;
  var mergedProps = extraProps ? mergeProps(props || {}, extraProps) : props;
  var cloned = {
    __v_isVNode: true,
    __v_skip: true,
    type: vnode.type,
    props: mergedProps,
    key: mergedProps && normalizeKey(mergedProps),
    ref: extraProps && extraProps.ref ? // #2078 in the case of <component :is="vnode" ref="extra"/>
    // if the vnode itself already has a ref, cloneVNode will need to merge
    // the refs so the single vnode can be set on multiple refs
    mergeRef && ref ? (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isArray)(ref) ? ref.concat(normalizeRef(extraProps)) : [ref, normalizeRef(extraProps)] : normalizeRef(extraProps) : ref,
    scopeId: vnode.scopeId,
    slotScopeIds: vnode.slotScopeIds,
    children:  true && patchFlag === -1
    /* HOISTED */
    && (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isArray)(children) ? children.map(deepCloneVNode) : children,
    target: vnode.target,
    targetAnchor: vnode.targetAnchor,
    staticCount: vnode.staticCount,
    shapeFlag: vnode.shapeFlag,
    // if the vnode is cloned with extra props, we can no longer assume its
    // existing patch flag to be reliable and need to add the FULL_PROPS flag.
    // note: perserve flag for fragments since they use the flag for children
    // fast paths only.
    patchFlag: extraProps && vnode.type !== Fragment ? patchFlag === -1 // hoisted node
    ? 16
    /* FULL_PROPS */
    : patchFlag | 16
    /* FULL_PROPS */
    : patchFlag,
    dynamicProps: vnode.dynamicProps,
    dynamicChildren: vnode.dynamicChildren,
    appContext: vnode.appContext,
    dirs: vnode.dirs,
    transition: vnode.transition,
    // These should technically only be non-null on mounted VNodes. However,
    // they *should* be copied for kept-alive vnodes. So we just always copy
    // them since them being non-null during a mount doesn't affect the logic as
    // they will simply be overwritten.
    component: vnode.component,
    suspense: vnode.suspense,
    ssContent: vnode.ssContent && cloneVNode(vnode.ssContent),
    ssFallback: vnode.ssFallback && cloneVNode(vnode.ssFallback),
    el: vnode.el,
    anchor: vnode.anchor
  };
  return cloned;
}
/**
 * Dev only, for HMR of hoisted vnodes reused in v-for
 * https://github.com/vitejs/vite/issues/2022
 */


function deepCloneVNode(vnode) {
  var cloned = cloneVNode(vnode);

  if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isArray)(vnode.children)) {
    cloned.children = vnode.children.map(deepCloneVNode);
  }

  return cloned;
}
/**
 * @private
 */


function createTextVNode() {
  var text = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : ' ';
  var flag = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  return createVNode(Text, null, text, flag);
}
/**
 * @private
 */


function createStaticVNode(content, numberOfNodes) {
  // A static vnode can contain multiple stringified elements, and the number
  // of elements is necessary for hydration.
  var vnode = createVNode(Static, null, content);
  vnode.staticCount = numberOfNodes;
  return vnode;
}
/**
 * @private
 */


function createCommentVNode() {
  var text = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  var asBlock = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  return asBlock ? (openBlock(), createBlock(Comment$1, null, text)) : createVNode(Comment$1, null, text);
}

function normalizeVNode(child) {
  if (child == null || typeof child === 'boolean') {
    // empty placeholder
    return createVNode(Comment$1);
  } else if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isArray)(child)) {
    // fragment
    return createVNode(Fragment, null, // #3666, avoid reference pollution when reusing vnode
    child.slice());
  } else if (_typeof(child) === 'object') {
    // already vnode, this should be the most common since compiled templates
    // always produce all-vnode children arrays
    return cloneIfMounted(child);
  } else {
    // strings and numbers
    return createVNode(Text, null, String(child));
  }
} // optimized normalization for template-compiled render fns


function cloneIfMounted(child) {
  return child.el === null ? child : cloneVNode(child);
}

function normalizeChildren(vnode, children) {
  var type = 0;
  var shapeFlag = vnode.shapeFlag;

  if (children == null) {
    children = null;
  } else if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isArray)(children)) {
    type = 16
    /* ARRAY_CHILDREN */
    ;
  } else if (_typeof(children) === 'object') {
    if (shapeFlag & 1
    /* ELEMENT */
    || shapeFlag & 64
    /* TELEPORT */
    ) {
        // Normalize slot to plain children for plain element and Teleport
        var slot = children["default"];

        if (slot) {
          // _c marker is added by withCtx() indicating this is a compiled slot
          slot._c && (slot._d = false);
          normalizeChildren(vnode, slot());
          slot._c && (slot._d = true);
        }

        return;
      } else {
      type = 32
      /* SLOTS_CHILDREN */
      ;
      var slotFlag = children._;

      if (!slotFlag && !(InternalObjectKey in children)) {
        children._ctx = currentRenderingInstance;
      } else if (slotFlag === 3
      /* FORWARDED */
      && currentRenderingInstance) {
        // a child component receives forwarded slots from the parent.
        // its slot type is determined by its parent's slot type.
        if (currentRenderingInstance.slots._ === 1
        /* STABLE */
        ) {
            children._ = 1
            /* STABLE */
            ;
          } else {
          children._ = 2
          /* DYNAMIC */
          ;
          vnode.patchFlag |= 1024
          /* DYNAMIC_SLOTS */
          ;
        }
      }
    }
  } else if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isFunction)(children)) {
    children = {
      "default": children,
      _ctx: currentRenderingInstance
    };
    type = 32
    /* SLOTS_CHILDREN */
    ;
  } else {
    children = String(children); // force teleport children to array so it can be moved around

    if (shapeFlag & 64
    /* TELEPORT */
    ) {
        type = 16
        /* ARRAY_CHILDREN */
        ;
        children = [createTextVNode(children)];
      } else {
      type = 8
      /* TEXT_CHILDREN */
      ;
    }
  }

  vnode.children = children;
  vnode.shapeFlag |= type;
}

function mergeProps() {
  var ret = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.extend)({}, arguments.length <= 0 ? undefined : arguments[0]);

  for (var i = 1; i < arguments.length; i++) {
    var toMerge = i < 0 || arguments.length <= i ? undefined : arguments[i];

    for (var key in toMerge) {
      if (key === 'class') {
        if (ret["class"] !== toMerge["class"]) {
          ret["class"] = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.normalizeClass)([ret["class"], toMerge["class"]]);
        }
      } else if (key === 'style') {
        ret.style = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.normalizeStyle)([ret.style, toMerge.style]);
      } else if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isOn)(key)) {
        var existing = ret[key];
        var incoming = toMerge[key];

        if (existing !== incoming) {
          ret[key] = existing ? [].concat(existing, incoming) : incoming;
        }
      } else if (key !== '') {
        ret[key] = toMerge[key];
      }
    }
  }

  return ret;
}
/**
 * Actual implementation
 */


function renderList(source, renderItem) {
  var ret;

  if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isArray)(source) || (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isString)(source)) {
    ret = new Array(source.length);

    for (var i = 0, l = source.length; i < l; i++) {
      ret[i] = renderItem(source[i], i);
    }
  } else if (typeof source === 'number') {
    if ( true && !Number.isInteger(source)) {
      warn("The v-for range expect an integer value but got ".concat(source, "."));
      return [];
    }

    ret = new Array(source);

    for (var _i3 = 0; _i3 < source; _i3++) {
      ret[_i3] = renderItem(_i3 + 1, _i3);
    }
  } else if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isObject)(source)) {
    if (source[Symbol.iterator]) {
      ret = Array.from(source, renderItem);
    } else {
      var keys = Object.keys(source);
      ret = new Array(keys.length);

      for (var _i4 = 0, _l = keys.length; _i4 < _l; _i4++) {
        var key = keys[_i4];
        ret[_i4] = renderItem(source[key], key, _i4);
      }
    }
  } else {
    ret = [];
  }

  return ret;
}
/**
 * Compiler runtime helper for creating dynamic slots object
 * @private
 */


function createSlots(slots, dynamicSlots) {
  for (var i = 0; i < dynamicSlots.length; i++) {
    var slot = dynamicSlots[i]; // array of dynamic slot generated by <template v-for="..." #[...]>

    if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isArray)(slot)) {
      for (var j = 0; j < slot.length; j++) {
        slots[slot[j].name] = slot[j].fn;
      }
    } else if (slot) {
      // conditional single slot generated by <template v-if="..." #foo>
      slots[slot.name] = slot.fn;
    }
  }

  return slots;
}
/**
 * Compiler runtime helper for rendering `<slot/>`
 * @private
 */


function renderSlot(slots, name) {
  var props = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  var // this is not a user-facing function, so the fallback is always generated by
  // the compiler and guaranteed to be a function returning an array
  fallback = arguments.length > 3 ? arguments[3] : undefined;
  var noSlotted = arguments.length > 4 ? arguments[4] : undefined;
  var slot = slots[name];

  if ( true && slot && slot.length > 1) {
    warn("SSR-optimized slot function detected in a non-SSR-optimized render " + "function. You need to mark this component with $dynamic-slots in the " + "parent template.");

    slot = function slot() {
      return [];
    };
  } // a compiled slot disables block tracking by default to avoid manual
  // invocation interfering with template-based block tracking, but in
  // `renderSlot` we can be sure that it's template-based so we can force
  // enable it.


  if (slot && slot._c) {
    slot._d = false;
  }

  openBlock();
  var validSlotContent = slot && ensureValidVNode(slot(props));
  var rendered = createBlock(Fragment, {
    key: props.key || "_".concat(name)
  }, validSlotContent || (fallback ? fallback() : []), validSlotContent && slots._ === 1
  /* STABLE */
  ? 64
  /* STABLE_FRAGMENT */
  : -2
  /* BAIL */
  );

  if (!noSlotted && rendered.scopeId) {
    rendered.slotScopeIds = [rendered.scopeId + '-s'];
  }

  if (slot && slot._c) {
    slot._d = true;
  }

  return rendered;
}

function ensureValidVNode(vnodes) {
  return vnodes.some(function (child) {
    if (!isVNode(child)) return true;
    if (child.type === Comment$1) return false;
    if (child.type === Fragment && !ensureValidVNode(child.children)) return false;
    return true;
  }) ? vnodes : null;
}
/**
 * For prefixing keys in v-on="obj" with "on"
 * @private
 */


function toHandlers(obj) {
  var ret = {};

  if ( true && !(0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isObject)(obj)) {
    warn("v-on with no argument expects an object value.");
    return ret;
  }

  for (var key in obj) {
    ret[(0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.toHandlerKey)(key)] = obj[key];
  }

  return ret;
}
/**
 * #2437 In Vue 3, functional components do not have a public instance proxy but
 * they exist in the internal parent chain. For code that relies on traversing
 * public $parent chains, skip functional ones and go to the parent instead.
 */


var getPublicInstance = function getPublicInstance(i) {
  if (!i) return null;
  if (isStatefulComponent(i)) return i.exposed ? i.exposed : i.proxy;
  return getPublicInstance(i.parent);
};

var publicPropertiesMap = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.extend)(Object.create(null), {
  $: function $(i) {
    return i;
  },
  $el: function $el(i) {
    return i.vnode.el;
  },
  $data: function $data(i) {
    return i.data;
  },
  $props: function $props(i) {
    return  true ? (0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.shallowReadonly)(i.props) : 0;
  },
  $attrs: function $attrs(i) {
    return  true ? (0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.shallowReadonly)(i.attrs) : 0;
  },
  $slots: function $slots(i) {
    return  true ? (0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.shallowReadonly)(i.slots) : 0;
  },
  $refs: function $refs(i) {
    return  true ? (0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.shallowReadonly)(i.refs) : 0;
  },
  $parent: function $parent(i) {
    return getPublicInstance(i.parent);
  },
  $root: function $root(i) {
    return getPublicInstance(i.root);
  },
  $emit: function $emit(i) {
    return i.emit;
  },
  $options: function $options(i) {
    return __VUE_OPTIONS_API__ ? resolveMergedOptions(i) : i.type;
  },
  $forceUpdate: function $forceUpdate(i) {
    return function () {
      return queueJob(i.update);
    };
  },
  $nextTick: function $nextTick(i) {
    return nextTick.bind(i.proxy);
  },
  $watch: function $watch(i) {
    return __VUE_OPTIONS_API__ ? instanceWatch.bind(i) : _vue_shared__WEBPACK_IMPORTED_MODULE_1__.NOOP;
  }
});
var PublicInstanceProxyHandlers = {
  get: function get(_ref19, key) {
    var instance = _ref19._;
    var ctx = instance.ctx,
        setupState = instance.setupState,
        data = instance.data,
        props = instance.props,
        accessCache = instance.accessCache,
        type = instance.type,
        appContext = instance.appContext; // for internal formatters to know that this is a Vue instance

    if ( true && key === '__isVue') {
      return true;
    } // data / props / ctx
    // This getter gets called for every property access on the render context
    // during render and is a major hotspot. The most expensive part of this
    // is the multiple hasOwn() calls. It's much faster to do a simple property
    // access on a plain object, so we use an accessCache object (with null
    // prototype) to memoize what access type a key corresponds to.


    var normalizedProps;

    if (key[0] !== '$') {
      var n = accessCache[key];

      if (n !== undefined) {
        switch (n) {
          case 0
          /* SETUP */
          :
            return setupState[key];

          case 1
          /* DATA */
          :
            return data[key];

          case 3
          /* CONTEXT */
          :
            return ctx[key];

          case 2
          /* PROPS */
          :
            return props[key];
          // default: just fallthrough
        }
      } else if (setupState !== _vue_shared__WEBPACK_IMPORTED_MODULE_1__.EMPTY_OBJ && (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.hasOwn)(setupState, key)) {
        accessCache[key] = 0
        /* SETUP */
        ;
        return setupState[key];
      } else if (data !== _vue_shared__WEBPACK_IMPORTED_MODULE_1__.EMPTY_OBJ && (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.hasOwn)(data, key)) {
        accessCache[key] = 1
        /* DATA */
        ;
        return data[key];
      } else if ( // only cache other properties when instance has declared (thus stable)
      // props
      (normalizedProps = instance.propsOptions[0]) && (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.hasOwn)(normalizedProps, key)) {
        accessCache[key] = 2
        /* PROPS */
        ;
        return props[key];
      } else if (ctx !== _vue_shared__WEBPACK_IMPORTED_MODULE_1__.EMPTY_OBJ && (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.hasOwn)(ctx, key)) {
        accessCache[key] = 3
        /* CONTEXT */
        ;
        return ctx[key];
      } else if (!__VUE_OPTIONS_API__ || shouldCacheAccess) {
        accessCache[key] = 4
        /* OTHER */
        ;
      }
    }

    var publicGetter = publicPropertiesMap[key];
    var cssModule, globalProperties; // public $xxx properties

    if (publicGetter) {
      if (key === '$attrs') {
        (0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.track)(instance, "get"
        /* GET */
        , key);
         true && markAttrsAccessed();
      }

      return publicGetter(instance);
    } else if ( // css module (injected by vue-loader)
    (cssModule = type.__cssModules) && (cssModule = cssModule[key])) {
      return cssModule;
    } else if (ctx !== _vue_shared__WEBPACK_IMPORTED_MODULE_1__.EMPTY_OBJ && (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.hasOwn)(ctx, key)) {
      // user may set custom properties to `this` that start with `$`
      accessCache[key] = 3
      /* CONTEXT */
      ;
      return ctx[key];
    } else if ( // global properties
    globalProperties = appContext.config.globalProperties, (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.hasOwn)(globalProperties, key)) {
      {
        return globalProperties[key];
      }
    } else if ( true && currentRenderingInstance && (!(0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isString)(key) || // #1091 avoid internal isRef/isVNode checks on component instance leading
    // to infinite warning loop
    key.indexOf('__v') !== 0)) {
      if (data !== _vue_shared__WEBPACK_IMPORTED_MODULE_1__.EMPTY_OBJ && (key[0] === '$' || key[0] === '_') && (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.hasOwn)(data, key)) {
        warn("Property ".concat(JSON.stringify(key), " must be accessed via $data because it starts with a reserved ") + "character (\"$\" or \"_\") and is not proxied on the render context.");
      } else if (instance === currentRenderingInstance) {
        warn("Property ".concat(JSON.stringify(key), " was accessed during render ") + "but is not defined on instance.");
      }
    }
  },
  set: function set(_ref20, key, value) {
    var instance = _ref20._;
    var data = instance.data,
        setupState = instance.setupState,
        ctx = instance.ctx;

    if (setupState !== _vue_shared__WEBPACK_IMPORTED_MODULE_1__.EMPTY_OBJ && (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.hasOwn)(setupState, key)) {
      setupState[key] = value;
    } else if (data !== _vue_shared__WEBPACK_IMPORTED_MODULE_1__.EMPTY_OBJ && (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.hasOwn)(data, key)) {
      data[key] = value;
    } else if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.hasOwn)(instance.props, key)) {
       true && warn("Attempting to mutate prop \"".concat(key, "\". Props are readonly."), instance);
      return false;
    }

    if (key[0] === '$' && key.slice(1) in instance) {
       true && warn("Attempting to mutate public property \"".concat(key, "\". ") + "Properties starting with $ are reserved and readonly.", instance);
      return false;
    } else {
      if ( true && key in instance.appContext.config.globalProperties) {
        Object.defineProperty(ctx, key, {
          enumerable: true,
          configurable: true,
          value: value
        });
      } else {
        ctx[key] = value;
      }
    }

    return true;
  },
  has: function has(_ref21, key) {
    var _ref21$_ = _ref21._,
        data = _ref21$_.data,
        setupState = _ref21$_.setupState,
        accessCache = _ref21$_.accessCache,
        ctx = _ref21$_.ctx,
        appContext = _ref21$_.appContext,
        propsOptions = _ref21$_.propsOptions;
    var normalizedProps;
    return accessCache[key] !== undefined || data !== _vue_shared__WEBPACK_IMPORTED_MODULE_1__.EMPTY_OBJ && (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.hasOwn)(data, key) || setupState !== _vue_shared__WEBPACK_IMPORTED_MODULE_1__.EMPTY_OBJ && (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.hasOwn)(setupState, key) || (normalizedProps = propsOptions[0]) && (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.hasOwn)(normalizedProps, key) || (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.hasOwn)(ctx, key) || (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.hasOwn)(publicPropertiesMap, key) || (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.hasOwn)(appContext.config.globalProperties, key);
  }
};

if (true) {
  PublicInstanceProxyHandlers.ownKeys = function (target) {
    warn("Avoid app logic that relies on enumerating keys on a component instance. " + "The keys will be empty in production mode to avoid performance overhead.");
    return Reflect.ownKeys(target);
  };
}

var RuntimeCompiledPublicInstanceProxyHandlers = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.extend)({}, PublicInstanceProxyHandlers, {
  get: function get(target, key) {
    // fast path for unscopables when using `with` block
    if (key === Symbol.unscopables) {
      return;
    }

    return PublicInstanceProxyHandlers.get(target, key, target);
  },
  has: function has(_, key) {
    var has = key[0] !== '_' && !(0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isGloballyWhitelisted)(key);

    if ( true && !has && PublicInstanceProxyHandlers.has(_, key)) {
      warn("Property ".concat(JSON.stringify(key), " should not start with _ which is a reserved prefix for Vue internals."));
    }

    return has;
  }
}); // In dev mode, the proxy target exposes the same properties as seen on `this`
// for easier console inspection. In prod mode it will be an empty object so
// these properties definitions can be skipped.

function createRenderContext(instance) {
  var target = {}; // expose internal instance for proxy handlers

  Object.defineProperty(target, "_", {
    configurable: true,
    enumerable: false,
    get: function get() {
      return instance;
    }
  }); // expose public properties

  Object.keys(publicPropertiesMap).forEach(function (key) {
    Object.defineProperty(target, key, {
      configurable: true,
      enumerable: false,
      get: function get() {
        return publicPropertiesMap[key](instance);
      },
      // intercepted by the proxy so no need for implementation,
      // but needed to prevent set errors
      set: _vue_shared__WEBPACK_IMPORTED_MODULE_1__.NOOP
    });
  });
  return target;
} // dev only


function exposePropsOnRenderContext(instance) {
  var ctx = instance.ctx,
      _instance$propsOption6 = _slicedToArray(instance.propsOptions, 1),
      propsOptions = _instance$propsOption6[0];

  if (propsOptions) {
    Object.keys(propsOptions).forEach(function (key) {
      Object.defineProperty(ctx, key, {
        enumerable: true,
        configurable: true,
        get: function get() {
          return instance.props[key];
        },
        set: _vue_shared__WEBPACK_IMPORTED_MODULE_1__.NOOP
      });
    });
  }
} // dev only


function exposeSetupStateOnRenderContext(instance) {
  var ctx = instance.ctx,
      setupState = instance.setupState;
  Object.keys((0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.toRaw)(setupState)).forEach(function (key) {
    if (key[0] === '$' || key[0] === '_') {
      warn("setup() return property ".concat(JSON.stringify(key), " should not start with \"$\" or \"_\" ") + "which are reserved prefixes for Vue internals.");
      return;
    }

    Object.defineProperty(ctx, key, {
      enumerable: true,
      configurable: true,
      get: function get() {
        return setupState[key];
      },
      set: _vue_shared__WEBPACK_IMPORTED_MODULE_1__.NOOP
    });
  });
}

var emptyAppContext = createAppContext();
var uid$1 = 0;

function createComponentInstance(vnode, parent, suspense) {
  var type = vnode.type; // inherit parent app context - or - if root, adopt from root vnode

  var appContext = (parent ? parent.appContext : vnode.appContext) || emptyAppContext;
  var instance = {
    uid: uid$1++,
    vnode: vnode,
    type: type,
    parent: parent,
    appContext: appContext,
    root: null,
    next: null,
    subTree: null,
    update: null,
    render: null,
    proxy: null,
    exposed: null,
    withProxy: null,
    effects: null,
    provides: parent ? parent.provides : Object.create(appContext.provides),
    accessCache: null,
    renderCache: [],
    // local resovled assets
    components: null,
    directives: null,
    // resolved props and emits options
    propsOptions: normalizePropsOptions(type, appContext),
    emitsOptions: normalizeEmitsOptions(type, appContext),
    // emit
    emit: null,
    emitted: null,
    // props default value
    propsDefaults: _vue_shared__WEBPACK_IMPORTED_MODULE_1__.EMPTY_OBJ,
    // inheritAttrs
    inheritAttrs: type.inheritAttrs,
    // state
    ctx: _vue_shared__WEBPACK_IMPORTED_MODULE_1__.EMPTY_OBJ,
    data: _vue_shared__WEBPACK_IMPORTED_MODULE_1__.EMPTY_OBJ,
    props: _vue_shared__WEBPACK_IMPORTED_MODULE_1__.EMPTY_OBJ,
    attrs: _vue_shared__WEBPACK_IMPORTED_MODULE_1__.EMPTY_OBJ,
    slots: _vue_shared__WEBPACK_IMPORTED_MODULE_1__.EMPTY_OBJ,
    refs: _vue_shared__WEBPACK_IMPORTED_MODULE_1__.EMPTY_OBJ,
    setupState: _vue_shared__WEBPACK_IMPORTED_MODULE_1__.EMPTY_OBJ,
    setupContext: null,
    // suspense related
    suspense: suspense,
    suspenseId: suspense ? suspense.pendingId : 0,
    asyncDep: null,
    asyncResolved: false,
    // lifecycle hooks
    // not using enums here because it results in computed properties
    isMounted: false,
    isUnmounted: false,
    isDeactivated: false,
    bc: null,
    c: null,
    bm: null,
    m: null,
    bu: null,
    u: null,
    um: null,
    bum: null,
    da: null,
    a: null,
    rtg: null,
    rtc: null,
    ec: null,
    sp: null
  };

  if (true) {
    instance.ctx = createRenderContext(instance);
  } else {}

  instance.root = parent ? parent.root : instance;
  instance.emit = emit.bind(null, instance);
  return instance;
}

var currentInstance = null;

var getCurrentInstance = function getCurrentInstance() {
  return currentInstance || currentRenderingInstance;
};

var setCurrentInstance = function setCurrentInstance(instance) {
  currentInstance = instance;
};

var isBuiltInTag = /*#__PURE__*/(0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.makeMap)('slot,component');

function validateComponentName(name, config) {
  var appIsNativeTag = config.isNativeTag || _vue_shared__WEBPACK_IMPORTED_MODULE_1__.NO;

  if (isBuiltInTag(name) || appIsNativeTag(name)) {
    warn('Do not use built-in or reserved HTML elements as component id: ' + name);
  }
}

function isStatefulComponent(instance) {
  return instance.vnode.shapeFlag & 4
  /* STATEFUL_COMPONENT */
  ;
}

var isInSSRComponentSetup = false;

function setupComponent(instance) {
  var isSSR = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  isInSSRComponentSetup = isSSR;
  var _instance$vnode = instance.vnode,
      props = _instance$vnode.props,
      children = _instance$vnode.children;
  var isStateful = isStatefulComponent(instance);
  initProps(instance, props, isStateful, isSSR);
  initSlots(instance, children);
  var setupResult = isStateful ? setupStatefulComponent(instance, isSSR) : undefined;
  isInSSRComponentSetup = false;
  return setupResult;
}

function setupStatefulComponent(instance, isSSR) {
  var Component = instance.type;

  if (true) {
    if (Component.name) {
      validateComponentName(Component.name, instance.appContext.config);
    }

    if (Component.components) {
      var names = Object.keys(Component.components);

      for (var i = 0; i < names.length; i++) {
        validateComponentName(names[i], instance.appContext.config);
      }
    }

    if (Component.directives) {
      var _names = Object.keys(Component.directives);

      for (var _i5 = 0; _i5 < _names.length; _i5++) {
        validateDirectiveName(_names[_i5]);
      }
    }

    if (Component.compilerOptions && isRuntimeOnly()) {
      warn("\"compilerOptions\" is only supported when using a build of Vue that " + "includes the runtime compiler. Since you are using a runtime-only " + "build, the options should be passed via your build tool config instead.");
    }
  } // 0. create render proxy property access cache


  instance.accessCache = Object.create(null); // 1. create public instance / render proxy
  // also mark it raw so it's never observed

  instance.proxy = (0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.markRaw)(new Proxy(instance.ctx, PublicInstanceProxyHandlers));

  if (true) {
    exposePropsOnRenderContext(instance);
  } // 2. call setup()


  var setup = Component.setup;

  if (setup) {
    var setupContext = instance.setupContext = setup.length > 1 ? createSetupContext(instance) : null;
    currentInstance = instance;
    (0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.pauseTracking)();
    var setupResult = callWithErrorHandling(setup, instance, 0
    /* SETUP_FUNCTION */
    , [ true ? (0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.shallowReadonly)(instance.props) : 0, setupContext]);
    (0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.resetTracking)();
    currentInstance = null;

    if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isPromise)(setupResult)) {
      if (isSSR) {
        // return the promise so server-renderer can wait on it
        return setupResult.then(function (resolvedResult) {
          handleSetupResult(instance, resolvedResult, isSSR);
        })["catch"](function (e) {
          handleError(e, instance, 0
          /* SETUP_FUNCTION */
          );
        });
      } else {
        // async setup returned Promise.
        // bail here and wait for re-entry.
        instance.asyncDep = setupResult;
      }
    } else {
      handleSetupResult(instance, setupResult, isSSR);
    }
  } else {
    finishComponentSetup(instance, isSSR);
  }
}

function handleSetupResult(instance, setupResult, isSSR) {
  if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isFunction)(setupResult)) {
    // setup returned an inline render function
    {
      instance.render = setupResult;
    }
  } else if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isObject)(setupResult)) {
    if ( true && isVNode(setupResult)) {
      warn("setup() should not return VNodes directly - " + "return a render function instead.");
    } // setup returned bindings.
    // assuming a render function compiled from template is present.


    if (true) {
      instance.devtoolsRawSetupState = setupResult;
    }

    instance.setupState = (0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.proxyRefs)(setupResult);

    if (true) {
      exposeSetupStateOnRenderContext(instance);
    }
  } else if ( true && setupResult !== undefined) {
    warn("setup() should return an object. Received: ".concat(setupResult === null ? 'null' : _typeof(setupResult)));
  }

  finishComponentSetup(instance, isSSR);
}

var compile; // dev only

var isRuntimeOnly = function isRuntimeOnly() {
  return !compile;
};
/**
 * For runtime-dom to register the compiler.
 * Note the exported method uses any to avoid d.ts relying on the compiler types.
 */


function registerRuntimeCompiler(_compile) {
  compile = _compile;
}

function finishComponentSetup(instance, isSSR, skipOptions) {
  var Component = instance.type; // template / render function normalization

  if (!instance.render) {
    // could be set from setup()
    if (compile && !Component.render) {
      var template = Component.template;

      if (template) {
        if (true) {
          startMeasure(instance, "compile");
        }

        var _instance$appContext$ = instance.appContext.config,
            isCustomElement = _instance$appContext$.isCustomElement,
            compilerOptions = _instance$appContext$.compilerOptions;
        var delimiters = Component.delimiters,
            componentCompilerOptions = Component.compilerOptions;
        var finalCompilerOptions = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.extend)((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.extend)({
          isCustomElement: isCustomElement,
          delimiters: delimiters
        }, compilerOptions), componentCompilerOptions);
        Component.render = compile(template, finalCompilerOptions);

        if (true) {
          endMeasure(instance, "compile");
        }
      }
    }

    instance.render = Component.render || _vue_shared__WEBPACK_IMPORTED_MODULE_1__.NOOP; // for runtime-compiled render functions using `with` blocks, the render
    // proxy used needs a different `has` handler which is more performant and
    // also only allows a whitelist of globals to fallthrough.

    if (instance.render._rc) {
      instance.withProxy = new Proxy(instance.ctx, RuntimeCompiledPublicInstanceProxyHandlers);
    }
  } // support for 2.x options


  if (__VUE_OPTIONS_API__ && !false) {
    currentInstance = instance;
    (0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.pauseTracking)();
    applyOptions(instance);
    (0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.resetTracking)();
    currentInstance = null;
  } // warn missing template/render
  // the runtime compilation of template in SSR is done by server-render


  if ( true && !Component.render && instance.render === _vue_shared__WEBPACK_IMPORTED_MODULE_1__.NOOP && !isSSR) {
    /* istanbul ignore if */
    if (!compile && Component.template) {
      warn("Component provided template option but " + "runtime compilation is not supported in this build of Vue." + " Configure your bundler to alias \"vue\" to \"vue/dist/vue.esm-bundler.js\"."
      /* should not happen */
      );
    } else {
      warn("Component is missing template or render function.");
    }
  }
}

var attrHandlers = {
  get: function get(target, key) {
    if (true) {
      markAttrsAccessed();
    }

    return target[key];
  },
  set: function set() {
    warn("setupContext.attrs is readonly.");
    return false;
  },
  deleteProperty: function deleteProperty() {
    warn("setupContext.attrs is readonly.");
    return false;
  }
};

function createSetupContext(instance) {
  var expose = function expose(exposed) {
    if ( true && instance.exposed) {
      warn("expose() should be called only once per setup().");
    }

    instance.exposed = (0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.proxyRefs)(exposed);
  };

  if (true) {
    // We use getters in dev in case libs like test-utils overwrite instance
    // properties (overwrites should not be done in prod)
    return Object.freeze({
      get attrs() {
        return new Proxy(instance.attrs, attrHandlers);
      },

      get slots() {
        return (0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.shallowReadonly)(instance.slots);
      },

      get emit() {
        return function (event) {
          for (var _len8 = arguments.length, args = new Array(_len8 > 1 ? _len8 - 1 : 0), _key16 = 1; _key16 < _len8; _key16++) {
            args[_key16 - 1] = arguments[_key16];
          }

          return instance.emit.apply(instance, [event].concat(args));
        };
      },

      expose: expose
    });
  } else {}
} // record effects created during a component's setup() so that they can be
// stopped when the component unmounts


function recordInstanceBoundEffect(effect) {
  var instance = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : currentInstance;

  if (instance) {
    (instance.effects || (instance.effects = [])).push(effect);
  }
}

var classifyRE = /(?:^|[-_])(\w)/g;

var classify = function classify(str) {
  return str.replace(classifyRE, function (c) {
    return c.toUpperCase();
  }).replace(/[-_]/g, '');
};

function getComponentName(Component) {
  return (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isFunction)(Component) ? Component.displayName || Component.name : Component.name;
}
/* istanbul ignore next */


function formatComponentName(instance, Component) {
  var isRoot = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  var name = getComponentName(Component);

  if (!name && Component.__file) {
    var match = Component.__file.match(/([^/\\]+)\.\w+$/);

    if (match) {
      name = match[1];
    }
  }

  if (!name && instance && instance.parent) {
    // try to infer the name based on reverse resolution
    var inferFromRegistry = function inferFromRegistry(registry) {
      for (var key in registry) {
        if (registry[key] === Component) {
          return key;
        }
      }
    };

    name = inferFromRegistry(instance.components || instance.parent.type.components) || inferFromRegistry(instance.appContext.components);
  }

  return name ? classify(name) : isRoot ? "App" : "Anonymous";
}

function isClassComponent(value) {
  return (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isFunction)(value) && '__vccOpts' in value;
}

function computed(getterOrOptions) {
  var c = (0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.computed)(getterOrOptions);
  recordInstanceBoundEffect(c.effect);
  return c;
} // implementation


function defineProps() {
  if (true) {
    warn("defineProps() is a compiler-hint helper that is only usable inside " + "<script setup> of a single file component. Its arguments should be " + "compiled away and passing it at runtime has no effect.");
  }

  return null;
} // implementation


function defineEmit() {
  if (true) {
    warn("defineEmit() is a compiler-hint helper that is only usable inside " + "<script setup> of a single file component. Its arguments should be " + "compiled away and passing it at runtime has no effect.");
  }

  return null;
}

function useContext() {
  var i = getCurrentInstance();

  if ( true && !i) {
    warn("useContext() called without active instance.");
  }

  return i.setupContext || (i.setupContext = createSetupContext(i));
} // Actual implementation


function h(type, propsOrChildren, children) {
  var l = arguments.length;

  if (l === 2) {
    if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isObject)(propsOrChildren) && !(0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isArray)(propsOrChildren)) {
      // single vnode without props
      if (isVNode(propsOrChildren)) {
        return createVNode(type, null, [propsOrChildren]);
      } // props without children


      return createVNode(type, propsOrChildren);
    } else {
      // omit props
      return createVNode(type, null, propsOrChildren);
    }
  } else {
    if (l > 3) {
      children = Array.prototype.slice.call(arguments, 2);
    } else if (l === 3 && isVNode(children)) {
      children = [children];
    }

    return createVNode(type, propsOrChildren, children);
  }
}

var ssrContextKey = Symbol( true ? "ssrContext" : 0);

var useSSRContext = function useSSRContext() {
  {
    var ctx = inject(ssrContextKey);

    if (!ctx) {
      warn("Server rendering context not provided. Make sure to only call " + "useSSRContext() conditionally in the server build.");
    }

    return ctx;
  }
};

function initCustomFormatter() {
  /* eslint-disable no-restricted-globals */
  if ( false || typeof window === 'undefined') {
    return;
  }

  var vueStyle = {
    style: 'color:#3ba776'
  };
  var numberStyle = {
    style: 'color:#0b1bc9'
  };
  var stringStyle = {
    style: 'color:#b62e24'
  };
  var keywordStyle = {
    style: 'color:#9d288c'
  }; // custom formatter for Chrome
  // https://www.mattzeunert.com/2016/02/19/custom-chrome-devtools-object-formatters.html

  var formatter = {
    header: function header(obj) {
      // TODO also format ComponentPublicInstance & ctx.slots/attrs in setup
      if (!(0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isObject)(obj)) {
        return null;
      }

      if (obj.__isVue) {
        return ['div', vueStyle, "VueInstance"];
      } else if ((0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.isRef)(obj)) {
        return ['div', {}, ['span', vueStyle, genRefFlag(obj)], '<', formatValue(obj.value), ">"];
      } else if ((0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.isReactive)(obj)) {
        return ['div', {}, ['span', vueStyle, 'Reactive'], '<', formatValue(obj), ">".concat((0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.isReadonly)(obj) ? " (readonly)" : "")];
      } else if ((0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.isReadonly)(obj)) {
        return ['div', {}, ['span', vueStyle, 'Readonly'], '<', formatValue(obj), '>'];
      }

      return null;
    },
    hasBody: function hasBody(obj) {
      return obj && obj.__isVue;
    },
    body: function body(obj) {
      if (obj && obj.__isVue) {
        return ['div', {}].concat(_toConsumableArray(formatInstance(obj.$)));
      }
    }
  };

  function formatInstance(instance) {
    var blocks = [];

    if (instance.type.props && instance.props) {
      blocks.push(createInstanceBlock('props', (0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.toRaw)(instance.props)));
    }

    if (instance.setupState !== _vue_shared__WEBPACK_IMPORTED_MODULE_1__.EMPTY_OBJ) {
      blocks.push(createInstanceBlock('setup', instance.setupState));
    }

    if (instance.data !== _vue_shared__WEBPACK_IMPORTED_MODULE_1__.EMPTY_OBJ) {
      blocks.push(createInstanceBlock('data', (0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.toRaw)(instance.data)));
    }

    var computed = extractKeys(instance, 'computed');

    if (computed) {
      blocks.push(createInstanceBlock('computed', computed));
    }

    var injected = extractKeys(instance, 'inject');

    if (injected) {
      blocks.push(createInstanceBlock('injected', injected));
    }

    blocks.push(['div', {}, ['span', {
      style: keywordStyle.style + ';opacity:0.66'
    }, '$ (internal): '], ['object', {
      object: instance
    }]]);
    return blocks;
  }

  function createInstanceBlock(type, target) {
    target = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.extend)({}, target);

    if (!Object.keys(target).length) {
      return ['span', {}];
    }

    return ['div', {
      style: 'line-height:1.25em;margin-bottom:0.6em'
    }, ['div', {
      style: 'color:#476582'
    }, type], ['div', {
      style: 'padding-left:1.25em'
    }].concat(_toConsumableArray(Object.keys(target).map(function (key) {
      return ['div', {}, ['span', keywordStyle, key + ': '], formatValue(target[key], false)];
    })))];
  }

  function formatValue(v) {
    var asRaw = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

    if (typeof v === 'number') {
      return ['span', numberStyle, v];
    } else if (typeof v === 'string') {
      return ['span', stringStyle, JSON.stringify(v)];
    } else if (typeof v === 'boolean') {
      return ['span', keywordStyle, v];
    } else if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isObject)(v)) {
      return ['object', {
        object: asRaw ? (0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.toRaw)(v) : v
      }];
    } else {
      return ['span', stringStyle, String(v)];
    }
  }

  function extractKeys(instance, type) {
    var Comp = instance.type;

    if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isFunction)(Comp)) {
      return;
    }

    var extracted = {};

    for (var key in instance.ctx) {
      if (isKeyOfType(Comp, key, type)) {
        extracted[key] = instance.ctx[key];
      }
    }

    return extracted;
  }

  function isKeyOfType(Comp, key, type) {
    var opts = Comp[type];

    if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isArray)(opts) && opts.includes(key) || (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isObject)(opts) && key in opts) {
      return true;
    }

    if (Comp["extends"] && isKeyOfType(Comp["extends"], key, type)) {
      return true;
    }

    if (Comp.mixins && Comp.mixins.some(function (m) {
      return isKeyOfType(m, key, type);
    })) {
      return true;
    }
  }

  function genRefFlag(v) {
    if (v._shallow) {
      return "ShallowRef";
    }

    if (v.effect) {
      return "ComputedRef";
    }

    return "Ref";
  }

  if (window.devtoolsFormatters) {
    window.devtoolsFormatters.push(formatter);
  } else {
    window.devtoolsFormatters = [formatter];
  }
} // Core API ------------------------------------------------------------------


var version = "3.1.2";
/**
 * SSR utils for \@vue/server-renderer. Only exposed in cjs builds.
 * @internal
 */

var ssrUtils = null;
/**
 * @internal only exposed in compat builds
 */

var resolveFilter = null;
/**
 * @internal only exposed in compat builds.
 */

var compatUtils = null;


/***/ }),

/***/ "./node_modules/@vue/runtime-dom/dist/runtime-dom.esm-bundler.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@vue/runtime-dom/dist/runtime-dom.esm-bundler.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BaseTransition": () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.BaseTransition),
/* harmony export */   "Comment": () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.Comment),
/* harmony export */   "Fragment": () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.Fragment),
/* harmony export */   "KeepAlive": () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.KeepAlive),
/* harmony export */   "Static": () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.Static),
/* harmony export */   "Suspense": () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.Suspense),
/* harmony export */   "Teleport": () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.Teleport),
/* harmony export */   "Text": () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.Text),
/* harmony export */   "callWithAsyncErrorHandling": () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.callWithAsyncErrorHandling),
/* harmony export */   "callWithErrorHandling": () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.callWithErrorHandling),
/* harmony export */   "camelize": () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.camelize),
/* harmony export */   "capitalize": () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.capitalize),
/* harmony export */   "cloneVNode": () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.cloneVNode),
/* harmony export */   "compatUtils": () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.compatUtils),
/* harmony export */   "computed": () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.computed),
/* harmony export */   "createBlock": () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.createBlock),
/* harmony export */   "createCommentVNode": () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode),
/* harmony export */   "createHydrationRenderer": () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.createHydrationRenderer),
/* harmony export */   "createRenderer": () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.createRenderer),
/* harmony export */   "createSlots": () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.createSlots),
/* harmony export */   "createStaticVNode": () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode),
/* harmony export */   "createTextVNode": () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.createTextVNode),
/* harmony export */   "createVNode": () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.createVNode),
/* harmony export */   "customRef": () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.customRef),
/* harmony export */   "defineAsyncComponent": () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.defineAsyncComponent),
/* harmony export */   "defineComponent": () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.defineComponent),
/* harmony export */   "defineEmit": () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.defineEmit),
/* harmony export */   "defineProps": () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.defineProps),
/* harmony export */   "devtools": () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.devtools),
/* harmony export */   "getCurrentInstance": () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.getCurrentInstance),
/* harmony export */   "getTransitionRawChildren": () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.getTransitionRawChildren),
/* harmony export */   "h": () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.h),
/* harmony export */   "handleError": () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.handleError),
/* harmony export */   "initCustomFormatter": () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.initCustomFormatter),
/* harmony export */   "inject": () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.inject),
/* harmony export */   "isProxy": () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.isProxy),
/* harmony export */   "isReactive": () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.isReactive),
/* harmony export */   "isReadonly": () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.isReadonly),
/* harmony export */   "isRef": () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.isRef),
/* harmony export */   "isRuntimeOnly": () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.isRuntimeOnly),
/* harmony export */   "isVNode": () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.isVNode),
/* harmony export */   "markRaw": () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.markRaw),
/* harmony export */   "mergeProps": () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.mergeProps),
/* harmony export */   "nextTick": () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.nextTick),
/* harmony export */   "onActivated": () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.onActivated),
/* harmony export */   "onBeforeMount": () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.onBeforeMount),
/* harmony export */   "onBeforeUnmount": () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.onBeforeUnmount),
/* harmony export */   "onBeforeUpdate": () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.onBeforeUpdate),
/* harmony export */   "onDeactivated": () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.onDeactivated),
/* harmony export */   "onErrorCaptured": () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.onErrorCaptured),
/* harmony export */   "onMounted": () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.onMounted),
/* harmony export */   "onRenderTracked": () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.onRenderTracked),
/* harmony export */   "onRenderTriggered": () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.onRenderTriggered),
/* harmony export */   "onServerPrefetch": () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.onServerPrefetch),
/* harmony export */   "onUnmounted": () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.onUnmounted),
/* harmony export */   "onUpdated": () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.onUpdated),
/* harmony export */   "openBlock": () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.openBlock),
/* harmony export */   "popScopeId": () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.popScopeId),
/* harmony export */   "provide": () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.provide),
/* harmony export */   "proxyRefs": () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.proxyRefs),
/* harmony export */   "pushScopeId": () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.pushScopeId),
/* harmony export */   "queuePostFlushCb": () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.queuePostFlushCb),
/* harmony export */   "reactive": () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.reactive),
/* harmony export */   "readonly": () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.readonly),
/* harmony export */   "ref": () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.ref),
/* harmony export */   "registerRuntimeCompiler": () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.registerRuntimeCompiler),
/* harmony export */   "renderList": () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.renderList),
/* harmony export */   "renderSlot": () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.renderSlot),
/* harmony export */   "resolveComponent": () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.resolveComponent),
/* harmony export */   "resolveDirective": () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.resolveDirective),
/* harmony export */   "resolveDynamicComponent": () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.resolveDynamicComponent),
/* harmony export */   "resolveFilter": () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.resolveFilter),
/* harmony export */   "resolveTransitionHooks": () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.resolveTransitionHooks),
/* harmony export */   "setBlockTracking": () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.setBlockTracking),
/* harmony export */   "setDevtoolsHook": () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.setDevtoolsHook),
/* harmony export */   "setTransitionHooks": () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.setTransitionHooks),
/* harmony export */   "shallowReactive": () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.shallowReactive),
/* harmony export */   "shallowReadonly": () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.shallowReadonly),
/* harmony export */   "shallowRef": () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.shallowRef),
/* harmony export */   "ssrContextKey": () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.ssrContextKey),
/* harmony export */   "ssrUtils": () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.ssrUtils),
/* harmony export */   "toDisplayString": () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.toDisplayString),
/* harmony export */   "toHandlerKey": () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.toHandlerKey),
/* harmony export */   "toHandlers": () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.toHandlers),
/* harmony export */   "toRaw": () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.toRaw),
/* harmony export */   "toRef": () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.toRef),
/* harmony export */   "toRefs": () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.toRefs),
/* harmony export */   "transformVNodeArgs": () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.transformVNodeArgs),
/* harmony export */   "triggerRef": () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.triggerRef),
/* harmony export */   "unref": () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.unref),
/* harmony export */   "useContext": () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.useContext),
/* harmony export */   "useSSRContext": () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.useSSRContext),
/* harmony export */   "useTransitionState": () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.useTransitionState),
/* harmony export */   "version": () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.version),
/* harmony export */   "warn": () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.warn),
/* harmony export */   "watch": () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.watch),
/* harmony export */   "watchEffect": () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.watchEffect),
/* harmony export */   "withCtx": () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.withCtx),
/* harmony export */   "withDirectives": () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.withDirectives),
/* harmony export */   "withScopeId": () => (/* reexport safe */ _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.withScopeId),
/* harmony export */   "Transition": () => (/* binding */ Transition),
/* harmony export */   "TransitionGroup": () => (/* binding */ TransitionGroup),
/* harmony export */   "createApp": () => (/* binding */ createApp),
/* harmony export */   "createSSRApp": () => (/* binding */ createSSRApp),
/* harmony export */   "hydrate": () => (/* binding */ hydrate),
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "useCssModule": () => (/* binding */ useCssModule),
/* harmony export */   "useCssVars": () => (/* binding */ useCssVars),
/* harmony export */   "vModelCheckbox": () => (/* binding */ vModelCheckbox),
/* harmony export */   "vModelDynamic": () => (/* binding */ vModelDynamic),
/* harmony export */   "vModelRadio": () => (/* binding */ vModelRadio),
/* harmony export */   "vModelSelect": () => (/* binding */ vModelSelect),
/* harmony export */   "vModelText": () => (/* binding */ vModelText),
/* harmony export */   "vShow": () => (/* binding */ vShow),
/* harmony export */   "withKeys": () => (/* binding */ withKeys),
/* harmony export */   "withModifiers": () => (/* binding */ withModifiers)
/* harmony export */ });
/* harmony import */ var _vue_shared__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @vue/shared */ "./node_modules/@vue/shared/dist/shared.esm-bundler.js");
/* harmony import */ var _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @vue/runtime-core */ "./node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.js");
/* harmony import */ var _vue_runtime_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @vue/runtime-core */ "./node_modules/@vue/reactivity/dist/reactivity.esm-bundler.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }




var svgNS = 'http://www.w3.org/2000/svg';
var doc = typeof document !== 'undefined' ? document : null;
var nodeOps = {
  insert: function insert(child, parent, anchor) {
    parent.insertBefore(child, anchor || null);
  },
  remove: function remove(child) {
    var parent = child.parentNode;

    if (parent) {
      parent.removeChild(child);
    }
  },
  createElement: function createElement(tag, isSVG, is, props) {
    var el = isSVG ? doc.createElementNS(svgNS, tag) : doc.createElement(tag, is ? {
      is: is
    } : undefined);

    if (tag === 'select' && props && props.multiple != null) {
      el.setAttribute('multiple', props.multiple);
    }

    return el;
  },
  createText: function createText(text) {
    return doc.createTextNode(text);
  },
  createComment: function createComment(text) {
    return doc.createComment(text);
  },
  setText: function setText(node, text) {
    node.nodeValue = text;
  },
  setElementText: function setElementText(el, text) {
    el.textContent = text;
  },
  parentNode: function parentNode(node) {
    return node.parentNode;
  },
  nextSibling: function nextSibling(node) {
    return node.nextSibling;
  },
  querySelector: function querySelector(selector) {
    return doc.querySelector(selector);
  },
  setScopeId: function setScopeId(el, id) {
    el.setAttribute(id, '');
  },
  cloneNode: function cloneNode(el) {
    var cloned = el.cloneNode(true); // #3072
    // - in `patchDOMProp`, we store the actual value in the `el._value` property.
    // - normally, elements using `:value` bindings will not be hoisted, but if
    //   the bound value is a constant, e.g. `:value="true"` - they do get
    //   hoisted.
    // - in production, hoisted nodes are cloned when subsequent inserts, but
    //   cloneNode() does not copy the custom property we attached.
    // - This may need to account for other custom DOM properties we attach to
    //   elements in addition to `_value` in the future.

    if ("_value" in el) {
      cloned._value = el._value;
    }

    return cloned;
  },
  // __UNSAFE__
  // Reason: insertAdjacentHTML.
  // Static content here can only come from compiled templates.
  // As long as the user only uses trusted templates, this is safe.
  insertStaticContent: function insertStaticContent(content, parent, anchor, isSVG, cached) {
    if (cached) {
      var _cached = _slicedToArray(cached, 2),
          cachedFirst = _cached[0],
          cachedLast = _cached[1];

      var first, last;

      while (true) {
        var node = cachedFirst.cloneNode(true);
        if (!first) first = node;
        parent.insertBefore(node, anchor);

        if (cachedFirst === cachedLast) {
          last = node;
          break;
        }

        cachedFirst = cachedFirst.nextSibling;
      }

      return [first, last];
    } // <parent> before | first ... last | anchor </parent>


    var before = anchor ? anchor.previousSibling : parent.lastChild;

    if (anchor) {
      var insertionPoint;
      var usingTempInsertionPoint = false;

      if (anchor instanceof Element) {
        insertionPoint = anchor;
      } else {
        // insertAdjacentHTML only works for elements but the anchor is not an
        // element...
        usingTempInsertionPoint = true;
        insertionPoint = isSVG ? doc.createElementNS(svgNS, 'g') : doc.createElement('div');
        parent.insertBefore(insertionPoint, anchor);
      }

      insertionPoint.insertAdjacentHTML('beforebegin', content);

      if (usingTempInsertionPoint) {
        parent.removeChild(insertionPoint);
      }
    } else {
      parent.insertAdjacentHTML('beforeend', content);
    }

    return [// first
    before ? before.nextSibling : parent.firstChild, // last
    anchor ? anchor.previousSibling : parent.lastChild];
  }
}; // compiler should normalize class + :class bindings on the same element
// into a single binding ['staticClass', dynamic]

function patchClass(el, value, isSVG) {
  if (value == null) {
    value = '';
  }

  if (isSVG) {
    el.setAttribute('class', value);
  } else {
    // directly setting className should be faster than setAttribute in theory
    // if this is an element during a transition, take the temporary transition
    // classes into account.
    var transitionClasses = el._vtc;

    if (transitionClasses) {
      value = (value ? [value].concat(_toConsumableArray(transitionClasses)) : _toConsumableArray(transitionClasses)).join(' ');
    }

    el.className = value;
  }
}

function patchStyle(el, prev, next) {
  var style = el.style;

  if (!next) {
    el.removeAttribute('style');
  } else if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isString)(next)) {
    if (prev !== next) {
      var current = style.display;
      style.cssText = next; // indicates that the `display` of the element is controlled by `v-show`,
      // so we always keep the current `display` value regardless of the `style` value,
      // thus handing over control to `v-show`.

      if ('_vod' in el) {
        style.display = current;
      }
    }
  } else {
    for (var key in next) {
      setStyle(style, key, next[key]);
    }

    if (prev && !(0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isString)(prev)) {
      for (var _key in prev) {
        if (next[_key] == null) {
          setStyle(style, _key, '');
        }
      }
    }
  }
}

var importantRE = /\s*!important$/;

function setStyle(style, name, val) {
  if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isArray)(val)) {
    val.forEach(function (v) {
      return setStyle(style, name, v);
    });
  } else {
    if (name.startsWith('--')) {
      // custom property definition
      style.setProperty(name, val);
    } else {
      var prefixed = autoPrefix(style, name);

      if (importantRE.test(val)) {
        // !important
        style.setProperty((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.hyphenate)(prefixed), val.replace(importantRE, ''), 'important');
      } else {
        style[prefixed] = val;
      }
    }
  }
}

var prefixes = ['Webkit', 'Moz', 'ms'];
var prefixCache = {};

function autoPrefix(style, rawName) {
  var cached = prefixCache[rawName];

  if (cached) {
    return cached;
  }

  var name = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.camelize)(rawName);

  if (name !== 'filter' && name in style) {
    return prefixCache[rawName] = name;
  }

  name = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.capitalize)(name);

  for (var i = 0; i < prefixes.length; i++) {
    var prefixed = prefixes[i] + name;

    if (prefixed in style) {
      return prefixCache[rawName] = prefixed;
    }
  }

  return rawName;
}

var xlinkNS = 'http://www.w3.org/1999/xlink';

function patchAttr(el, key, value, isSVG, instance) {
  if (isSVG && key.startsWith('xlink:')) {
    if (value == null) {
      el.removeAttributeNS(xlinkNS, key.slice(6, key.length));
    } else {
      el.setAttributeNS(xlinkNS, key, value);
    }
  } else {
    // note we are only checking boolean attributes that don't have a
    // corresponding dom prop of the same name here.
    var isBoolean = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isSpecialBooleanAttr)(key);

    if (value == null || isBoolean && value === false) {
      el.removeAttribute(key);
    } else {
      el.setAttribute(key, isBoolean ? '' : value);
    }
  }
} // __UNSAFE__
// functions. The user is responsible for using them with only trusted content.


function patchDOMProp(el, key, value, // the following args are passed only due to potential innerHTML/textContent
// overriding existing VNodes, in which case the old tree must be properly
// unmounted.
prevChildren, parentComponent, parentSuspense, unmountChildren) {
  if (key === 'innerHTML' || key === 'textContent') {
    if (prevChildren) {
      unmountChildren(prevChildren, parentComponent, parentSuspense);
    }

    el[key] = value == null ? '' : value;
    return;
  }

  if (key === 'value' && el.tagName !== 'PROGRESS') {
    // store value as _value as well since
    // non-string values will be stringified.
    el._value = value;
    var newValue = value == null ? '' : value;

    if (el.value !== newValue) {
      el.value = newValue;
    }

    if (value == null) {
      el.removeAttribute(key);
    }

    return;
  }

  if (value === '' || value == null) {
    var type = _typeof(el[key]);

    if (value === '' && type === 'boolean') {
      // e.g. <select multiple> compiles to { multiple: '' }
      el[key] = true;
      return;
    } else if (value == null && type === 'string') {
      // e.g. <div :id="null">
      el[key] = '';
      el.removeAttribute(key);
      return;
    } else if (type === 'number') {
      // e.g. <img :width="null">
      el[key] = 0;
      el.removeAttribute(key);
      return;
    }
  } // some properties perform value validation and throw


  try {
    el[key] = value;
  } catch (e) {
    if (true) {
      (0,_vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.warn)("Failed setting prop \"".concat(key, "\" on <").concat(el.tagName.toLowerCase(), ">: ") + "value ".concat(value, " is invalid."), e);
    }
  }
} // Async edge case fix requires storing an event listener's attach timestamp.


var _getNow = Date.now;
var skipTimestampCheck = false;

if (typeof window !== 'undefined') {
  // Determine what event timestamp the browser is using. Annoyingly, the
  // timestamp can either be hi-res (relative to page load) or low-res
  // (relative to UNIX epoch), so in order to compare time we have to use the
  // same timestamp type when saving the flush timestamp.
  if (_getNow() > document.createEvent('Event').timeStamp) {
    // if the low-res timestamp which is bigger than the event timestamp
    // (which is evaluated AFTER) it means the event is using a hi-res timestamp,
    // and we need to use the hi-res version for event listeners as well.
    _getNow = function _getNow() {
      return performance.now();
    };
  } // #3485: Firefox <= 53 has incorrect Event.timeStamp implementation
  // and does not fire microtasks in between event propagation, so safe to exclude.


  var ffMatch = navigator.userAgent.match(/firefox\/(\d+)/i);
  skipTimestampCheck = !!(ffMatch && Number(ffMatch[1]) <= 53);
} // To avoid the overhead of repeatedly calling performance.now(), we cache
// and use the same timestamp for all event listeners attached in the same tick.


var cachedNow = 0;
var p = Promise.resolve();

var reset = function reset() {
  cachedNow = 0;
};

var getNow = function getNow() {
  return cachedNow || (p.then(reset), cachedNow = _getNow());
};

function addEventListener(el, event, handler, options) {
  el.addEventListener(event, handler, options);
}

function removeEventListener(el, event, handler, options) {
  el.removeEventListener(event, handler, options);
}

function patchEvent(el, rawName, prevValue, nextValue) {
  var instance = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : null;
  // vei = vue event invokers
  var invokers = el._vei || (el._vei = {});
  var existingInvoker = invokers[rawName];

  if (nextValue && existingInvoker) {
    // patch
    existingInvoker.value = nextValue;
  } else {
    var _parseName = parseName(rawName),
        _parseName2 = _slicedToArray(_parseName, 2),
        name = _parseName2[0],
        options = _parseName2[1];

    if (nextValue) {
      // add
      var invoker = invokers[rawName] = createInvoker(nextValue, instance);
      addEventListener(el, name, invoker, options);
    } else if (existingInvoker) {
      // remove
      removeEventListener(el, name, existingInvoker, options);
      invokers[rawName] = undefined;
    }
  }
}

var optionsModifierRE = /(?:Once|Passive|Capture)$/;

function parseName(name) {
  var options;

  if (optionsModifierRE.test(name)) {
    options = {};
    var m;

    while (m = name.match(optionsModifierRE)) {
      name = name.slice(0, name.length - m[0].length);
      options[m[0].toLowerCase()] = true;
    }
  }

  return [(0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.hyphenate)(name.slice(2)), options];
}

function createInvoker(initialValue, instance) {
  var invoker = function invoker(e) {
    // async edge case #6566: inner click event triggers patch, event handler
    // attached to outer element during patch, and triggered again. This
    // happens because browsers fire microtask ticks between event propagation.
    // the solution is simple: we save the timestamp when a handler is attached,
    // and the handler would only fire if the event passed to it was fired
    // AFTER it was attached.
    var timeStamp = e.timeStamp || _getNow();

    if (skipTimestampCheck || timeStamp >= invoker.attached - 1) {
      (0,_vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.callWithAsyncErrorHandling)(patchStopImmediatePropagation(e, invoker.value), instance, 5
      /* NATIVE_EVENT_HANDLER */
      , [e]);
    }
  };

  invoker.value = initialValue;
  invoker.attached = getNow();
  return invoker;
}

function patchStopImmediatePropagation(e, value) {
  if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isArray)(value)) {
    var originalStop = e.stopImmediatePropagation;

    e.stopImmediatePropagation = function () {
      originalStop.call(e);
      e._stopped = true;
    };

    return value.map(function (fn) {
      return function (e) {
        return !e._stopped && fn(e);
      };
    });
  } else {
    return value;
  }
}

var nativeOnRE = /^on[a-z]/;

var forcePatchProp = function forcePatchProp(_, key) {
  return key === 'value';
};

var patchProp = function patchProp(el, key, prevValue, nextValue) {
  var isSVG = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;
  var prevChildren = arguments.length > 5 ? arguments[5] : undefined;
  var parentComponent = arguments.length > 6 ? arguments[6] : undefined;
  var parentSuspense = arguments.length > 7 ? arguments[7] : undefined;
  var unmountChildren = arguments.length > 8 ? arguments[8] : undefined;

  switch (key) {
    // special
    case 'class':
      patchClass(el, nextValue, isSVG);
      break;

    case 'style':
      patchStyle(el, prevValue, nextValue);
      break;

    default:
      if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isOn)(key)) {
        // ignore v-model listeners
        if (!(0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isModelListener)(key)) {
          patchEvent(el, key, prevValue, nextValue, parentComponent);
        }
      } else if (shouldSetAsProp(el, key, nextValue, isSVG)) {
        patchDOMProp(el, key, nextValue, prevChildren, parentComponent, parentSuspense, unmountChildren);
      } else {
        // special case for <input v-model type="checkbox"> with
        // :true-value & :false-value
        // store value as dom properties since non-string values will be
        // stringified.
        if (key === 'true-value') {
          el._trueValue = nextValue;
        } else if (key === 'false-value') {
          el._falseValue = nextValue;
        }

        patchAttr(el, key, nextValue, isSVG);
      }

      break;
  }
};

function shouldSetAsProp(el, key, value, isSVG) {
  if (isSVG) {
    // most keys must be set as attribute on svg elements to work
    // ...except innerHTML
    if (key === 'innerHTML') {
      return true;
    } // or native onclick with function values


    if (key in el && nativeOnRE.test(key) && (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isFunction)(value)) {
      return true;
    }

    return false;
  } // spellcheck and draggable are numerated attrs, however their
  // corresponding DOM properties are actually booleans - this leads to
  // setting it with a string "false" value leading it to be coerced to
  // `true`, so we need to always treat them as attributes.
  // Note that `contentEditable` doesn't have this problem: its DOM
  // property is also enumerated string values.


  if (key === 'spellcheck' || key === 'draggable') {
    return false;
  } // #1787, #2840 form property on form elements is readonly and must be set as
  // attribute.


  if (key === 'form') {
    return false;
  } // #1526 <input list> must be set as attribute


  if (key === 'list' && el.tagName === 'INPUT') {
    return false;
  } // #2766 <textarea type> must be set as attribute


  if (key === 'type' && el.tagName === 'TEXTAREA') {
    return false;
  } // native onclick with string value, must be set as attribute


  if (nativeOnRE.test(key) && (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isString)(value)) {
    return false;
  }

  return key in el;
}

function useCssModule() {
  var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '$style';

  /* istanbul ignore else */
  {
    var instance = (0,_vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.getCurrentInstance)();

    if (!instance) {
       true && (0,_vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.warn)("useCssModule must be called inside setup()");
      return _vue_shared__WEBPACK_IMPORTED_MODULE_1__.EMPTY_OBJ;
    }

    var modules = instance.type.__cssModules;

    if (!modules) {
       true && (0,_vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.warn)("Current instance does not have CSS modules injected.");
      return _vue_shared__WEBPACK_IMPORTED_MODULE_1__.EMPTY_OBJ;
    }

    var mod = modules[name];

    if (!mod) {
       true && (0,_vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.warn)("Current instance does not have CSS module named \"".concat(name, "\"."));
      return _vue_shared__WEBPACK_IMPORTED_MODULE_1__.EMPTY_OBJ;
    }

    return mod;
  }
}
/**
 * Runtime helper for SFC's CSS variable injection feature.
 * @private
 */


function useCssVars(getter) {
  var instance = (0,_vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.getCurrentInstance)();
  /* istanbul ignore next */

  if (!instance) {
     true && (0,_vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.warn)("useCssVars is called without current active component instance.");
    return;
  }

  var setVars = function setVars() {
    return setVarsOnVNode(instance.subTree, getter(instance.proxy));
  };

  (0,_vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.onMounted)(function () {
    return (0,_vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.watchEffect)(setVars, {
      flush: 'post'
    });
  });
  (0,_vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.onUpdated)(setVars);
}

function setVarsOnVNode(vnode, vars) {
  if (vnode.shapeFlag & 128
  /* SUSPENSE */
  ) {
      var suspense = vnode.suspense;
      vnode = suspense.activeBranch;

      if (suspense.pendingBranch && !suspense.isHydrating) {
        suspense.effects.push(function () {
          setVarsOnVNode(suspense.activeBranch, vars);
        });
      }
    } // drill down HOCs until it's a non-component vnode


  while (vnode.component) {
    vnode = vnode.component.subTree;
  }

  if (vnode.shapeFlag & 1
  /* ELEMENT */
  && vnode.el) {
    var style = vnode.el.style;

    for (var key in vars) {
      style.setProperty("--".concat(key), vars[key]);
    }
  } else if (vnode.type === _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.Fragment) {
    vnode.children.forEach(function (c) {
      return setVarsOnVNode(c, vars);
    });
  }
}

var TRANSITION = 'transition';
var ANIMATION = 'animation'; // DOM Transition is a higher-order-component based on the platform-agnostic
// base Transition component, with DOM-specific logic.

var Transition = function Transition(props, _ref) {
  var slots = _ref.slots;
  return (0,_vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.h)(_vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.BaseTransition, resolveTransitionProps(props), slots);
};

Transition.displayName = 'Transition';
var DOMTransitionPropsValidators = {
  name: String,
  type: String,
  css: {
    type: Boolean,
    "default": true
  },
  duration: [String, Number, Object],
  enterFromClass: String,
  enterActiveClass: String,
  enterToClass: String,
  appearFromClass: String,
  appearActiveClass: String,
  appearToClass: String,
  leaveFromClass: String,
  leaveActiveClass: String,
  leaveToClass: String
};
var TransitionPropsValidators = Transition.props = /*#__PURE__*/(0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.extend)({}, _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.BaseTransition.props, DOMTransitionPropsValidators);
/**
 * #3227 Incoming hooks may be merged into arrays when wrapping Transition
 * with custom HOCs.
 */

var callHook = function callHook(hook) {
  var args = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];

  if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isArray)(hook)) {
    hook.forEach(function (h) {
      return h.apply(void 0, _toConsumableArray(args));
    });
  } else if (hook) {
    hook.apply(void 0, _toConsumableArray(args));
  }
};
/**
 * Check if a hook expects a callback (2nd arg), which means the user
 * intends to explicitly control the end of the transition.
 */


var hasExplicitCallback = function hasExplicitCallback(hook) {
  return hook ? (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isArray)(hook) ? hook.some(function (h) {
    return h.length > 1;
  }) : hook.length > 1 : false;
};

function resolveTransitionProps(rawProps) {
  var baseProps = {};

  for (var key in rawProps) {
    if (!(key in DOMTransitionPropsValidators)) {
      baseProps[key] = rawProps[key];
    }
  }

  if (rawProps.css === false) {
    return baseProps;
  }

  var _rawProps$name = rawProps.name,
      name = _rawProps$name === void 0 ? 'v' : _rawProps$name,
      type = rawProps.type,
      duration = rawProps.duration,
      _rawProps$enterFromCl = rawProps.enterFromClass,
      enterFromClass = _rawProps$enterFromCl === void 0 ? "".concat(name, "-enter-from") : _rawProps$enterFromCl,
      _rawProps$enterActive = rawProps.enterActiveClass,
      enterActiveClass = _rawProps$enterActive === void 0 ? "".concat(name, "-enter-active") : _rawProps$enterActive,
      _rawProps$enterToClas = rawProps.enterToClass,
      enterToClass = _rawProps$enterToClas === void 0 ? "".concat(name, "-enter-to") : _rawProps$enterToClas,
      _rawProps$appearFromC = rawProps.appearFromClass,
      appearFromClass = _rawProps$appearFromC === void 0 ? enterFromClass : _rawProps$appearFromC,
      _rawProps$appearActiv = rawProps.appearActiveClass,
      appearActiveClass = _rawProps$appearActiv === void 0 ? enterActiveClass : _rawProps$appearActiv,
      _rawProps$appearToCla = rawProps.appearToClass,
      appearToClass = _rawProps$appearToCla === void 0 ? enterToClass : _rawProps$appearToCla,
      _rawProps$leaveFromCl = rawProps.leaveFromClass,
      leaveFromClass = _rawProps$leaveFromCl === void 0 ? "".concat(name, "-leave-from") : _rawProps$leaveFromCl,
      _rawProps$leaveActive = rawProps.leaveActiveClass,
      leaveActiveClass = _rawProps$leaveActive === void 0 ? "".concat(name, "-leave-active") : _rawProps$leaveActive,
      _rawProps$leaveToClas = rawProps.leaveToClass,
      leaveToClass = _rawProps$leaveToClas === void 0 ? "".concat(name, "-leave-to") : _rawProps$leaveToClas;
  var durations = normalizeDuration(duration);
  var enterDuration = durations && durations[0];
  var leaveDuration = durations && durations[1];

  var _onBeforeEnter = baseProps.onBeforeEnter,
      onEnter = baseProps.onEnter,
      _onEnterCancelled = baseProps.onEnterCancelled,
      _onLeave = baseProps.onLeave,
      _onLeaveCancelled = baseProps.onLeaveCancelled,
      _baseProps$onBeforeAp = baseProps.onBeforeAppear,
      _onBeforeAppear = _baseProps$onBeforeAp === void 0 ? _onBeforeEnter : _baseProps$onBeforeAp,
      _baseProps$onAppear = baseProps.onAppear,
      onAppear = _baseProps$onAppear === void 0 ? onEnter : _baseProps$onAppear,
      _baseProps$onAppearCa = baseProps.onAppearCancelled,
      _onAppearCancelled = _baseProps$onAppearCa === void 0 ? _onEnterCancelled : _baseProps$onAppearCa;

  var finishEnter = function finishEnter(el, isAppear, done) {
    removeTransitionClass(el, isAppear ? appearToClass : enterToClass);
    removeTransitionClass(el, isAppear ? appearActiveClass : enterActiveClass);
    done && done();
  };

  var finishLeave = function finishLeave(el, done) {
    removeTransitionClass(el, leaveToClass);
    removeTransitionClass(el, leaveActiveClass);
    done && done();
  };

  var makeEnterHook = function makeEnterHook(isAppear) {
    return function (el, done) {
      var hook = isAppear ? onAppear : onEnter;

      var resolve = function resolve() {
        return finishEnter(el, isAppear, done);
      };

      callHook(hook, [el, resolve]);
      nextFrame(function () {
        removeTransitionClass(el, isAppear ? appearFromClass : enterFromClass);
        addTransitionClass(el, isAppear ? appearToClass : enterToClass);

        if (!hasExplicitCallback(hook)) {
          whenTransitionEnds(el, type, enterDuration, resolve);
        }
      });
    };
  };

  return (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.extend)(baseProps, {
    onBeforeEnter: function onBeforeEnter(el) {
      callHook(_onBeforeEnter, [el]);
      addTransitionClass(el, enterFromClass);
      addTransitionClass(el, enterActiveClass);
    },
    onBeforeAppear: function onBeforeAppear(el) {
      callHook(_onBeforeAppear, [el]);
      addTransitionClass(el, appearFromClass);
      addTransitionClass(el, appearActiveClass);
    },
    onEnter: makeEnterHook(false),
    onAppear: makeEnterHook(true),
    onLeave: function onLeave(el, done) {
      var resolve = function resolve() {
        return finishLeave(el, done);
      };

      addTransitionClass(el, leaveFromClass); // force reflow so *-leave-from classes immediately take effect (#2593)

      forceReflow();
      addTransitionClass(el, leaveActiveClass);
      nextFrame(function () {
        removeTransitionClass(el, leaveFromClass);
        addTransitionClass(el, leaveToClass);

        if (!hasExplicitCallback(_onLeave)) {
          whenTransitionEnds(el, type, leaveDuration, resolve);
        }
      });
      callHook(_onLeave, [el, resolve]);
    },
    onEnterCancelled: function onEnterCancelled(el) {
      finishEnter(el, false);
      callHook(_onEnterCancelled, [el]);
    },
    onAppearCancelled: function onAppearCancelled(el) {
      finishEnter(el, true);
      callHook(_onAppearCancelled, [el]);
    },
    onLeaveCancelled: function onLeaveCancelled(el) {
      finishLeave(el);
      callHook(_onLeaveCancelled, [el]);
    }
  });
}

function normalizeDuration(duration) {
  if (duration == null) {
    return null;
  } else if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isObject)(duration)) {
    return [NumberOf(duration.enter), NumberOf(duration.leave)];
  } else {
    var n = NumberOf(duration);
    return [n, n];
  }
}

function NumberOf(val) {
  var res = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.toNumber)(val);
  if (true) validateDuration(res);
  return res;
}

function validateDuration(val) {
  if (typeof val !== 'number') {
    (0,_vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.warn)("<transition> explicit duration is not a valid number - " + "got ".concat(JSON.stringify(val), "."));
  } else if (isNaN(val)) {
    (0,_vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.warn)("<transition> explicit duration is NaN - " + 'the duration expression might be incorrect.');
  }
}

function addTransitionClass(el, cls) {
  cls.split(/\s+/).forEach(function (c) {
    return c && el.classList.add(c);
  });
  (el._vtc || (el._vtc = new Set())).add(cls);
}

function removeTransitionClass(el, cls) {
  cls.split(/\s+/).forEach(function (c) {
    return c && el.classList.remove(c);
  });
  var _vtc = el._vtc;

  if (_vtc) {
    _vtc["delete"](cls);

    if (!_vtc.size) {
      el._vtc = undefined;
    }
  }
}

function nextFrame(cb) {
  requestAnimationFrame(function () {
    requestAnimationFrame(cb);
  });
}

var endId = 0;

function whenTransitionEnds(el, expectedType, explicitTimeout, resolve) {
  var id = el._endId = ++endId;

  var resolveIfNotStale = function resolveIfNotStale() {
    if (id === el._endId) {
      resolve();
    }
  };

  if (explicitTimeout) {
    return setTimeout(resolveIfNotStale, explicitTimeout);
  }

  var _getTransitionInfo = getTransitionInfo(el, expectedType),
      type = _getTransitionInfo.type,
      timeout = _getTransitionInfo.timeout,
      propCount = _getTransitionInfo.propCount;

  if (!type) {
    return resolve();
  }

  var endEvent = type + 'end';
  var ended = 0;

  var end = function end() {
    el.removeEventListener(endEvent, onEnd);
    resolveIfNotStale();
  };

  var onEnd = function onEnd(e) {
    if (e.target === el && ++ended >= propCount) {
      end();
    }
  };

  setTimeout(function () {
    if (ended < propCount) {
      end();
    }
  }, timeout + 1);
  el.addEventListener(endEvent, onEnd);
}

function getTransitionInfo(el, expectedType) {
  var styles = window.getComputedStyle(el); // JSDOM may return undefined for transition properties

  var getStyleProperties = function getStyleProperties(key) {
    return (styles[key] || '').split(', ');
  };

  var transitionDelays = getStyleProperties(TRANSITION + 'Delay');
  var transitionDurations = getStyleProperties(TRANSITION + 'Duration');
  var transitionTimeout = getTimeout(transitionDelays, transitionDurations);
  var animationDelays = getStyleProperties(ANIMATION + 'Delay');
  var animationDurations = getStyleProperties(ANIMATION + 'Duration');
  var animationTimeout = getTimeout(animationDelays, animationDurations);
  var type = null;
  var timeout = 0;
  var propCount = 0;
  /* istanbul ignore if */

  if (expectedType === TRANSITION) {
    if (transitionTimeout > 0) {
      type = TRANSITION;
      timeout = transitionTimeout;
      propCount = transitionDurations.length;
    }
  } else if (expectedType === ANIMATION) {
    if (animationTimeout > 0) {
      type = ANIMATION;
      timeout = animationTimeout;
      propCount = animationDurations.length;
    }
  } else {
    timeout = Math.max(transitionTimeout, animationTimeout);
    type = timeout > 0 ? transitionTimeout > animationTimeout ? TRANSITION : ANIMATION : null;
    propCount = type ? type === TRANSITION ? transitionDurations.length : animationDurations.length : 0;
  }

  var hasTransform = type === TRANSITION && /\b(transform|all)(,|$)/.test(styles[TRANSITION + 'Property']);
  return {
    type: type,
    timeout: timeout,
    propCount: propCount,
    hasTransform: hasTransform
  };
}

function getTimeout(delays, durations) {
  while (delays.length < durations.length) {
    delays = delays.concat(delays);
  }

  return Math.max.apply(Math, _toConsumableArray(durations.map(function (d, i) {
    return toMs(d) + toMs(delays[i]);
  })));
} // Old versions of Chromium (below 61.0.3163.100) formats floating pointer
// numbers in a locale-dependent way, using a comma instead of a dot.
// If comma is not replaced with a dot, the input will be rounded down
// (i.e. acting as a floor function) causing unexpected behaviors


function toMs(s) {
  return Number(s.slice(0, -1).replace(',', '.')) * 1000;
} // synchronously force layout to put elements into a certain state


function forceReflow() {
  return document.body.offsetHeight;
}

var positionMap = new WeakMap();
var newPositionMap = new WeakMap();
var TransitionGroupImpl = {
  name: 'TransitionGroup',
  props: /*#__PURE__*/(0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.extend)({}, TransitionPropsValidators, {
    tag: String,
    moveClass: String
  }),
  setup: function setup(props, _ref2) {
    var slots = _ref2.slots;
    var instance = (0,_vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.getCurrentInstance)();
    var state = (0,_vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.useTransitionState)();
    var prevChildren;
    var children;
    (0,_vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.onUpdated)(function () {
      // children is guaranteed to exist after initial render
      if (!prevChildren.length) {
        return;
      }

      var moveClass = props.moveClass || "".concat(props.name || 'v', "-move");

      if (!hasCSSTransform(prevChildren[0].el, instance.vnode.el, moveClass)) {
        return;
      } // we divide the work into three loops to avoid mixing DOM reads and writes
      // in each iteration - which helps prevent layout thrashing.


      prevChildren.forEach(callPendingCbs);
      prevChildren.forEach(recordPosition);
      var movedChildren = prevChildren.filter(applyTranslation); // force reflow to put everything in position

      forceReflow();
      movedChildren.forEach(function (c) {
        var el = c.el;
        var style = el.style;
        addTransitionClass(el, moveClass);
        style.transform = style.webkitTransform = style.transitionDuration = '';

        var cb = el._moveCb = function (e) {
          if (e && e.target !== el) {
            return;
          }

          if (!e || /transform$/.test(e.propertyName)) {
            el.removeEventListener('transitionend', cb);
            el._moveCb = null;
            removeTransitionClass(el, moveClass);
          }
        };

        el.addEventListener('transitionend', cb);
      });
    });
    return function () {
      var rawProps = (0,_vue_runtime_core__WEBPACK_IMPORTED_MODULE_2__.toRaw)(props);
      var cssTransitionProps = resolveTransitionProps(rawProps);
      var tag = rawProps.tag || _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.Fragment;
      prevChildren = children;
      children = slots["default"] ? (0,_vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.getTransitionRawChildren)(slots["default"]()) : [];

      for (var i = 0; i < children.length; i++) {
        var child = children[i];

        if (child.key != null) {
          (0,_vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.setTransitionHooks)(child, (0,_vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.resolveTransitionHooks)(child, cssTransitionProps, state, instance));
        } else if (true) {
          (0,_vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.warn)("<TransitionGroup> children must be keyed.");
        }
      }

      if (prevChildren) {
        for (var _i2 = 0; _i2 < prevChildren.length; _i2++) {
          var _child = prevChildren[_i2];
          (0,_vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.setTransitionHooks)(_child, (0,_vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.resolveTransitionHooks)(_child, cssTransitionProps, state, instance));
          positionMap.set(_child, _child.el.getBoundingClientRect());
        }
      }

      return (0,_vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.createVNode)(tag, null, children);
    };
  }
};
var TransitionGroup = TransitionGroupImpl;

function callPendingCbs(c) {
  var el = c.el;

  if (el._moveCb) {
    el._moveCb();
  }

  if (el._enterCb) {
    el._enterCb();
  }
}

function recordPosition(c) {
  newPositionMap.set(c, c.el.getBoundingClientRect());
}

function applyTranslation(c) {
  var oldPos = positionMap.get(c);
  var newPos = newPositionMap.get(c);
  var dx = oldPos.left - newPos.left;
  var dy = oldPos.top - newPos.top;

  if (dx || dy) {
    var s = c.el.style;
    s.transform = s.webkitTransform = "translate(".concat(dx, "px,").concat(dy, "px)");
    s.transitionDuration = '0s';
    return c;
  }
}

function hasCSSTransform(el, root, moveClass) {
  // Detect whether an element with the move class applied has
  // CSS transitions. Since the element may be inside an entering
  // transition at this very moment, we make a clone of it and remove
  // all other transition classes applied to ensure only the move class
  // is applied.
  var clone = el.cloneNode();

  if (el._vtc) {
    el._vtc.forEach(function (cls) {
      cls.split(/\s+/).forEach(function (c) {
        return c && clone.classList.remove(c);
      });
    });
  }

  moveClass.split(/\s+/).forEach(function (c) {
    return c && clone.classList.add(c);
  });
  clone.style.display = 'none';
  var container = root.nodeType === 1 ? root : root.parentNode;
  container.appendChild(clone);

  var _getTransitionInfo2 = getTransitionInfo(clone),
      hasTransform = _getTransitionInfo2.hasTransform;

  container.removeChild(clone);
  return hasTransform;
}

var getModelAssigner = function getModelAssigner(vnode) {
  var fn = vnode.props['onUpdate:modelValue'];
  return (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isArray)(fn) ? function (value) {
    return (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.invokeArrayFns)(fn, value);
  } : fn;
};

function onCompositionStart(e) {
  e.target.composing = true;
}

function onCompositionEnd(e) {
  var target = e.target;

  if (target.composing) {
    target.composing = false;
    trigger(target, 'input');
  }
}

function trigger(el, type) {
  var e = document.createEvent('HTMLEvents');
  e.initEvent(type, true, true);
  el.dispatchEvent(e);
} // We are exporting the v-model runtime directly as vnode hooks so that it can
// be tree-shaken in case v-model is never used.


var vModelText = {
  created: function created(el, _ref3, vnode) {
    var _ref3$modifiers = _ref3.modifiers,
        lazy = _ref3$modifiers.lazy,
        trim = _ref3$modifiers.trim,
        number = _ref3$modifiers.number;
    el._assign = getModelAssigner(vnode);
    var castToNumber = number || el.type === 'number';
    addEventListener(el, lazy ? 'change' : 'input', function (e) {
      if (e.target.composing) return;
      var domValue = el.value;

      if (trim) {
        domValue = domValue.trim();
      } else if (castToNumber) {
        domValue = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.toNumber)(domValue);
      }

      el._assign(domValue);
    });

    if (trim) {
      addEventListener(el, 'change', function () {
        el.value = el.value.trim();
      });
    }

    if (!lazy) {
      addEventListener(el, 'compositionstart', onCompositionStart);
      addEventListener(el, 'compositionend', onCompositionEnd); // Safari < 10.2 & UIWebView doesn't fire compositionend when
      // switching focus before confirming composition choice
      // this also fixes the issue where some browsers e.g. iOS Chrome
      // fires "change" instead of "input" on autocomplete.

      addEventListener(el, 'change', onCompositionEnd);
    }
  },
  // set value on mounted so it's after min/max for type="range"
  mounted: function mounted(el, _ref4) {
    var value = _ref4.value;
    el.value = value == null ? '' : value;
  },
  beforeUpdate: function beforeUpdate(el, _ref5, vnode) {
    var value = _ref5.value,
        _ref5$modifiers = _ref5.modifiers,
        trim = _ref5$modifiers.trim,
        number = _ref5$modifiers.number;
    el._assign = getModelAssigner(vnode); // avoid clearing unresolved text. #2302

    if (el.composing) return;

    if (document.activeElement === el) {
      if (trim && el.value.trim() === value) {
        return;
      }

      if ((number || el.type === 'number') && (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.toNumber)(el.value) === value) {
        return;
      }
    }

    var newValue = value == null ? '' : value;

    if (el.value !== newValue) {
      el.value = newValue;
    }
  }
};
var vModelCheckbox = {
  created: function created(el, _, vnode) {
    el._assign = getModelAssigner(vnode);
    addEventListener(el, 'change', function () {
      var modelValue = el._modelValue;
      var elementValue = getValue(el);
      var checked = el.checked;
      var assign = el._assign;

      if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isArray)(modelValue)) {
        var index = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.looseIndexOf)(modelValue, elementValue);
        var found = index !== -1;

        if (checked && !found) {
          assign(modelValue.concat(elementValue));
        } else if (!checked && found) {
          var filtered = _toConsumableArray(modelValue);

          filtered.splice(index, 1);
          assign(filtered);
        }
      } else if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isSet)(modelValue)) {
        var cloned = new Set(modelValue);

        if (checked) {
          cloned.add(elementValue);
        } else {
          cloned["delete"](elementValue);
        }

        assign(cloned);
      } else {
        assign(getCheckboxValue(el, checked));
      }
    });
  },
  // set initial checked on mount to wait for true-value/false-value
  mounted: setChecked,
  beforeUpdate: function beforeUpdate(el, binding, vnode) {
    el._assign = getModelAssigner(vnode);
    setChecked(el, binding, vnode);
  }
};

function setChecked(el, _ref6, vnode) {
  var value = _ref6.value,
      oldValue = _ref6.oldValue;
  el._modelValue = value;

  if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isArray)(value)) {
    el.checked = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.looseIndexOf)(value, vnode.props.value) > -1;
  } else if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isSet)(value)) {
    el.checked = value.has(vnode.props.value);
  } else if (value !== oldValue) {
    el.checked = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.looseEqual)(value, getCheckboxValue(el, true));
  }
}

var vModelRadio = {
  created: function created(el, _ref7, vnode) {
    var value = _ref7.value;
    el.checked = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.looseEqual)(value, vnode.props.value);
    el._assign = getModelAssigner(vnode);
    addEventListener(el, 'change', function () {
      el._assign(getValue(el));
    });
  },
  beforeUpdate: function beforeUpdate(el, _ref8, vnode) {
    var value = _ref8.value,
        oldValue = _ref8.oldValue;
    el._assign = getModelAssigner(vnode);

    if (value !== oldValue) {
      el.checked = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.looseEqual)(value, vnode.props.value);
    }
  }
};
var vModelSelect = {
  created: function created(el, _ref9, vnode) {
    var value = _ref9.value,
        number = _ref9.modifiers.number;
    var isSetModel = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isSet)(value);
    addEventListener(el, 'change', function () {
      var selectedVal = Array.prototype.filter.call(el.options, function (o) {
        return o.selected;
      }).map(function (o) {
        return number ? (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.toNumber)(getValue(o)) : getValue(o);
      });

      el._assign(el.multiple ? isSetModel ? new Set(selectedVal) : selectedVal : selectedVal[0]);
    });
    el._assign = getModelAssigner(vnode);
  },
  // set value in mounted & updated because <select> relies on its children
  // <option>s.
  mounted: function mounted(el, _ref10) {
    var value = _ref10.value;
    setSelected(el, value);
  },
  beforeUpdate: function beforeUpdate(el, _binding, vnode) {
    el._assign = getModelAssigner(vnode);
  },
  updated: function updated(el, _ref11) {
    var value = _ref11.value;
    setSelected(el, value);
  }
};

function setSelected(el, value) {
  var isMultiple = el.multiple;

  if (isMultiple && !(0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isArray)(value) && !(0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isSet)(value)) {
     true && (0,_vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.warn)("<select multiple v-model> expects an Array or Set value for its binding, " + "but got ".concat(Object.prototype.toString.call(value).slice(8, -1), "."));
    return;
  }

  for (var i = 0, l = el.options.length; i < l; i++) {
    var option = el.options[i];
    var optionValue = getValue(option);

    if (isMultiple) {
      if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isArray)(value)) {
        option.selected = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.looseIndexOf)(value, optionValue) > -1;
      } else {
        option.selected = value.has(optionValue);
      }
    } else {
      if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.looseEqual)(getValue(option), value)) {
        if (el.selectedIndex !== i) el.selectedIndex = i;
        return;
      }
    }
  }

  if (!isMultiple && el.selectedIndex !== -1) {
    el.selectedIndex = -1;
  }
} // retrieve raw value set via :value bindings


function getValue(el) {
  return '_value' in el ? el._value : el.value;
} // retrieve raw value for true-value and false-value set via :true-value or :false-value bindings


function getCheckboxValue(el, checked) {
  var key = checked ? '_trueValue' : '_falseValue';
  return key in el ? el[key] : checked;
}

var vModelDynamic = {
  created: function created(el, binding, vnode) {
    callModelHook(el, binding, vnode, null, 'created');
  },
  mounted: function mounted(el, binding, vnode) {
    callModelHook(el, binding, vnode, null, 'mounted');
  },
  beforeUpdate: function beforeUpdate(el, binding, vnode, prevVNode) {
    callModelHook(el, binding, vnode, prevVNode, 'beforeUpdate');
  },
  updated: function updated(el, binding, vnode, prevVNode) {
    callModelHook(el, binding, vnode, prevVNode, 'updated');
  }
};

function callModelHook(el, binding, vnode, prevVNode, hook) {
  var modelToUse;

  switch (el.tagName) {
    case 'SELECT':
      modelToUse = vModelSelect;
      break;

    case 'TEXTAREA':
      modelToUse = vModelText;
      break;

    default:
      switch (vnode.props && vnode.props.type) {
        case 'checkbox':
          modelToUse = vModelCheckbox;
          break;

        case 'radio':
          modelToUse = vModelRadio;
          break;

        default:
          modelToUse = vModelText;
      }

  }

  var fn = modelToUse[hook];
  fn && fn(el, binding, vnode, prevVNode);
}

var systemModifiers = ['ctrl', 'shift', 'alt', 'meta'];
var modifierGuards = {
  stop: function stop(e) {
    return e.stopPropagation();
  },
  prevent: function prevent(e) {
    return e.preventDefault();
  },
  self: function self(e) {
    return e.target !== e.currentTarget;
  },
  ctrl: function ctrl(e) {
    return !e.ctrlKey;
  },
  shift: function shift(e) {
    return !e.shiftKey;
  },
  alt: function alt(e) {
    return !e.altKey;
  },
  meta: function meta(e) {
    return !e.metaKey;
  },
  left: function left(e) {
    return 'button' in e && e.button !== 0;
  },
  middle: function middle(e) {
    return 'button' in e && e.button !== 1;
  },
  right: function right(e) {
    return 'button' in e && e.button !== 2;
  },
  exact: function exact(e, modifiers) {
    return systemModifiers.some(function (m) {
      return e["".concat(m, "Key")] && !modifiers.includes(m);
    });
  }
};
/**
 * @private
 */

var withModifiers = function withModifiers(fn, modifiers) {
  return function (event) {
    for (var i = 0; i < modifiers.length; i++) {
      var guard = modifierGuards[modifiers[i]];
      if (guard && guard(event, modifiers)) return;
    }

    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key2 = 1; _key2 < _len; _key2++) {
      args[_key2 - 1] = arguments[_key2];
    }

    return fn.apply(void 0, [event].concat(args));
  };
}; // Kept for 2.x compat.
// Note: IE11 compat for `spacebar` and `del` is removed for now.


var keyNames = {
  esc: 'escape',
  space: ' ',
  up: 'arrow-up',
  left: 'arrow-left',
  right: 'arrow-right',
  down: 'arrow-down',
  "delete": 'backspace'
};
/**
 * @private
 */

var withKeys = function withKeys(fn, modifiers) {
  return function (event) {
    if (!('key' in event)) {
      return;
    }

    var eventKey = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.hyphenate)(event.key);

    if (modifiers.some(function (k) {
      return k === eventKey || keyNames[k] === eventKey;
    })) {
      return fn(event);
    }
  };
};

var vShow = {
  beforeMount: function beforeMount(el, _ref12, _ref13) {
    var value = _ref12.value;
    var transition = _ref13.transition;
    el._vod = el.style.display === 'none' ? '' : el.style.display;

    if (transition && value) {
      transition.beforeEnter(el);
    } else {
      setDisplay(el, value);
    }
  },
  mounted: function mounted(el, _ref14, _ref15) {
    var value = _ref14.value;
    var transition = _ref15.transition;

    if (transition && value) {
      transition.enter(el);
    }
  },
  updated: function updated(el, _ref16, _ref17) {
    var value = _ref16.value,
        oldValue = _ref16.oldValue;
    var transition = _ref17.transition;
    if (!value === !oldValue) return;

    if (transition) {
      if (value) {
        transition.beforeEnter(el);
        setDisplay(el, true);
        transition.enter(el);
      } else {
        transition.leave(el, function () {
          setDisplay(el, false);
        });
      }
    } else {
      setDisplay(el, value);
    }
  },
  beforeUnmount: function beforeUnmount(el, _ref18) {
    var value = _ref18.value;
    setDisplay(el, value);
  }
};

function setDisplay(el, value) {
  el.style.display = value ? el._vod : 'none';
}

var rendererOptions = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.extend)({
  patchProp: patchProp,
  forcePatchProp: forcePatchProp
}, nodeOps); // lazy create the renderer - this makes core renderer logic tree-shakable
// in case the user only imports reactivity utilities from Vue.

var renderer;
var enabledHydration = false;

function ensureRenderer() {
  return renderer || (renderer = (0,_vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.createRenderer)(rendererOptions));
}

function ensureHydrationRenderer() {
  renderer = enabledHydration ? renderer : (0,_vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.createHydrationRenderer)(rendererOptions);
  enabledHydration = true;
  return renderer;
} // use explicit type casts here to avoid import() calls in rolled-up d.ts


var render = function render() {
  var _ensureRenderer;

  (_ensureRenderer = ensureRenderer()).render.apply(_ensureRenderer, arguments);
};

var hydrate = function hydrate() {
  var _ensureHydrationRende;

  (_ensureHydrationRende = ensureHydrationRenderer()).hydrate.apply(_ensureHydrationRende, arguments);
};

var createApp = function createApp() {
  var _ensureRenderer2;

  var app = (_ensureRenderer2 = ensureRenderer()).createApp.apply(_ensureRenderer2, arguments);

  if (true) {
    injectNativeTagCheck(app);
    injectCompilerOptionsCheck(app);
  }

  var mount = app.mount;

  app.mount = function (containerOrSelector) {
    var container = normalizeContainer(containerOrSelector);
    if (!container) return;
    var component = app._component;

    if (!(0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isFunction)(component) && !component.render && !component.template) {
      // __UNSAFE__
      // Reason: potential execution of JS expressions in in-DOM template.
      // The user must make sure the in-DOM template is trusted. If it's
      // rendered by the server, the template should not contain any user data.
      component.template = container.innerHTML;
    } // clear content before mounting


    container.innerHTML = '';
    var proxy = mount(container, false, container instanceof SVGElement);

    if (container instanceof Element) {
      container.removeAttribute('v-cloak');
      container.setAttribute('data-v-app', '');
    }

    return proxy;
  };

  return app;
};

var createSSRApp = function createSSRApp() {
  var _ensureHydrationRende2;

  var app = (_ensureHydrationRende2 = ensureHydrationRenderer()).createApp.apply(_ensureHydrationRende2, arguments);

  if (true) {
    injectNativeTagCheck(app);
    injectCompilerOptionsCheck(app);
  }

  var mount = app.mount;

  app.mount = function (containerOrSelector) {
    var container = normalizeContainer(containerOrSelector);

    if (container) {
      return mount(container, true, container instanceof SVGElement);
    }
  };

  return app;
};

function injectNativeTagCheck(app) {
  // Inject `isNativeTag`
  // this is used for component name validation (dev only)
  Object.defineProperty(app.config, 'isNativeTag', {
    value: function value(tag) {
      return (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isHTMLTag)(tag) || (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isSVGTag)(tag);
    },
    writable: false
  });
} // dev only


function injectCompilerOptionsCheck(app) {
  if ((0,_vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.isRuntimeOnly)()) {
    var isCustomElement = app.config.isCustomElement;
    Object.defineProperty(app.config, 'isCustomElement', {
      get: function get() {
        return isCustomElement;
      },
      set: function set() {
        (0,_vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.warn)("The `isCustomElement` config option is deprecated. Use " + "`compilerOptions.isCustomElement` instead.");
      }
    });
    var compilerOptions = app.config.compilerOptions;
    var msg = "The `compilerOptions` config option is only respected when using " + "a build of Vue.js that includes the runtime compiler (aka \"full build\"). " + "Since you are using the runtime-only build, `compilerOptions` " + "must be passed to `@vue/compiler-dom` in the build setup instead.\n" + "- For vue-loader: pass it via vue-loader's `compilerOptions` loader option.\n" + "- For vue-cli: see https://cli.vuejs.org/guide/webpack.html#modifying-options-of-a-loader\n" + "- For vite: pass it via @vitejs/plugin-vue options. See https://github.com/vitejs/vite/tree/main/packages/plugin-vue#example-for-passing-options-to-vuecompiler-dom";
    Object.defineProperty(app.config, 'compilerOptions', {
      get: function get() {
        (0,_vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.warn)(msg);
        return compilerOptions;
      },
      set: function set() {
        (0,_vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.warn)(msg);
      }
    });
  }
}

function normalizeContainer(container) {
  if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isString)(container)) {
    var res = document.querySelector(container);

    if ( true && !res) {
      (0,_vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.warn)("Failed to mount app: mount target selector \"".concat(container, "\" returned null."));
    }

    return res;
  }

  if ( true && container instanceof window.ShadowRoot && container.mode === 'closed') {
    (0,_vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.warn)("mounting on a ShadowRoot with `{mode: \"closed\"}` may lead to unpredictable bugs");
  }

  return container;
}



/***/ }),

/***/ "./node_modules/@vue/shared/dist/shared.esm-bundler.js":
/*!*************************************************************!*\
  !*** ./node_modules/@vue/shared/dist/shared.esm-bundler.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EMPTY_ARR": () => (/* binding */ EMPTY_ARR),
/* harmony export */   "EMPTY_OBJ": () => (/* binding */ EMPTY_OBJ),
/* harmony export */   "NO": () => (/* binding */ NO),
/* harmony export */   "NOOP": () => (/* binding */ NOOP),
/* harmony export */   "PatchFlagNames": () => (/* binding */ PatchFlagNames),
/* harmony export */   "babelParserDefaultPlugins": () => (/* binding */ babelParserDefaultPlugins),
/* harmony export */   "camelize": () => (/* binding */ camelize),
/* harmony export */   "capitalize": () => (/* binding */ capitalize),
/* harmony export */   "def": () => (/* binding */ def),
/* harmony export */   "escapeHtml": () => (/* binding */ escapeHtml),
/* harmony export */   "escapeHtmlComment": () => (/* binding */ escapeHtmlComment),
/* harmony export */   "extend": () => (/* binding */ extend),
/* harmony export */   "generateCodeFrame": () => (/* binding */ generateCodeFrame),
/* harmony export */   "getGlobalThis": () => (/* binding */ getGlobalThis),
/* harmony export */   "hasChanged": () => (/* binding */ hasChanged),
/* harmony export */   "hasOwn": () => (/* binding */ hasOwn),
/* harmony export */   "hyphenate": () => (/* binding */ hyphenate),
/* harmony export */   "invokeArrayFns": () => (/* binding */ invokeArrayFns),
/* harmony export */   "isArray": () => (/* binding */ isArray),
/* harmony export */   "isBooleanAttr": () => (/* binding */ isBooleanAttr),
/* harmony export */   "isDate": () => (/* binding */ isDate),
/* harmony export */   "isFunction": () => (/* binding */ isFunction),
/* harmony export */   "isGloballyWhitelisted": () => (/* binding */ isGloballyWhitelisted),
/* harmony export */   "isHTMLTag": () => (/* binding */ isHTMLTag),
/* harmony export */   "isIntegerKey": () => (/* binding */ isIntegerKey),
/* harmony export */   "isKnownAttr": () => (/* binding */ isKnownAttr),
/* harmony export */   "isMap": () => (/* binding */ isMap),
/* harmony export */   "isModelListener": () => (/* binding */ isModelListener),
/* harmony export */   "isNoUnitNumericStyleProp": () => (/* binding */ isNoUnitNumericStyleProp),
/* harmony export */   "isObject": () => (/* binding */ isObject),
/* harmony export */   "isOn": () => (/* binding */ isOn),
/* harmony export */   "isPlainObject": () => (/* binding */ isPlainObject),
/* harmony export */   "isPromise": () => (/* binding */ isPromise),
/* harmony export */   "isReservedProp": () => (/* binding */ isReservedProp),
/* harmony export */   "isSSRSafeAttrName": () => (/* binding */ isSSRSafeAttrName),
/* harmony export */   "isSVGTag": () => (/* binding */ isSVGTag),
/* harmony export */   "isSet": () => (/* binding */ isSet),
/* harmony export */   "isSpecialBooleanAttr": () => (/* binding */ isSpecialBooleanAttr),
/* harmony export */   "isString": () => (/* binding */ isString),
/* harmony export */   "isSymbol": () => (/* binding */ isSymbol),
/* harmony export */   "isVoidTag": () => (/* binding */ isVoidTag),
/* harmony export */   "looseEqual": () => (/* binding */ looseEqual),
/* harmony export */   "looseIndexOf": () => (/* binding */ looseIndexOf),
/* harmony export */   "makeMap": () => (/* binding */ makeMap),
/* harmony export */   "normalizeClass": () => (/* binding */ normalizeClass),
/* harmony export */   "normalizeStyle": () => (/* binding */ normalizeStyle),
/* harmony export */   "objectToString": () => (/* binding */ objectToString),
/* harmony export */   "parseStringStyle": () => (/* binding */ parseStringStyle),
/* harmony export */   "propsToAttrMap": () => (/* binding */ propsToAttrMap),
/* harmony export */   "remove": () => (/* binding */ remove),
/* harmony export */   "slotFlagsText": () => (/* binding */ slotFlagsText),
/* harmony export */   "stringifyStyle": () => (/* binding */ stringifyStyle),
/* harmony export */   "toDisplayString": () => (/* binding */ toDisplayString),
/* harmony export */   "toHandlerKey": () => (/* binding */ toHandlerKey),
/* harmony export */   "toNumber": () => (/* binding */ toNumber),
/* harmony export */   "toRawType": () => (/* binding */ toRawType),
/* harmony export */   "toTypeString": () => (/* binding */ toTypeString)
/* harmony export */ });
var _PatchFlagNames, _slotFlagsText;

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * Make a map and return a function for checking if a key
 * is in that map.
 * IMPORTANT: all calls of this function must be prefixed with
 * \/\*#\_\_PURE\_\_\*\/
 * So that rollup can tree-shake them if necessary.
 */
function makeMap(str, expectsLowerCase) {
  var map = Object.create(null);
  var list = str.split(',');

  for (var i = 0; i < list.length; i++) {
    map[list[i]] = true;
  }

  return expectsLowerCase ? function (val) {
    return !!map[val.toLowerCase()];
  } : function (val) {
    return !!map[val];
  };
}
/**
 * dev only flag -> name mapping
 */


var PatchFlagNames = (_PatchFlagNames = {}, _defineProperty(_PatchFlagNames, 1
/* TEXT */
, "TEXT"), _defineProperty(_PatchFlagNames, 2
/* CLASS */
, "CLASS"), _defineProperty(_PatchFlagNames, 4
/* STYLE */
, "STYLE"), _defineProperty(_PatchFlagNames, 8
/* PROPS */
, "PROPS"), _defineProperty(_PatchFlagNames, 16
/* FULL_PROPS */
, "FULL_PROPS"), _defineProperty(_PatchFlagNames, 32
/* HYDRATE_EVENTS */
, "HYDRATE_EVENTS"), _defineProperty(_PatchFlagNames, 64
/* STABLE_FRAGMENT */
, "STABLE_FRAGMENT"), _defineProperty(_PatchFlagNames, 128
/* KEYED_FRAGMENT */
, "KEYED_FRAGMENT"), _defineProperty(_PatchFlagNames, 256
/* UNKEYED_FRAGMENT */
, "UNKEYED_FRAGMENT"), _defineProperty(_PatchFlagNames, 512
/* NEED_PATCH */
, "NEED_PATCH"), _defineProperty(_PatchFlagNames, 1024
/* DYNAMIC_SLOTS */
, "DYNAMIC_SLOTS"), _defineProperty(_PatchFlagNames, 2048
/* DEV_ROOT_FRAGMENT */
, "DEV_ROOT_FRAGMENT"), _defineProperty(_PatchFlagNames, -1
/* HOISTED */
, "HOISTED"), _defineProperty(_PatchFlagNames, -2
/* BAIL */
, "BAIL"), _PatchFlagNames);
/**
 * Dev only
 */

var slotFlagsText = (_slotFlagsText = {}, _defineProperty(_slotFlagsText, 1
/* STABLE */
, 'STABLE'), _defineProperty(_slotFlagsText, 2
/* DYNAMIC */
, 'DYNAMIC'), _defineProperty(_slotFlagsText, 3
/* FORWARDED */
, 'FORWARDED'), _slotFlagsText);
var GLOBALS_WHITE_LISTED = 'Infinity,undefined,NaN,isFinite,isNaN,parseFloat,parseInt,decodeURI,' + 'decodeURIComponent,encodeURI,encodeURIComponent,Math,Number,Date,Array,' + 'Object,Boolean,String,RegExp,Map,Set,JSON,Intl,BigInt';
var isGloballyWhitelisted = /*#__PURE__*/makeMap(GLOBALS_WHITE_LISTED);
var range = 2;

function generateCodeFrame(source) {
  var start = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  var end = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : source.length;
  var lines = source.split(/\r?\n/);
  var count = 0;
  var res = [];

  for (var i = 0; i < lines.length; i++) {
    count += lines[i].length + 1;

    if (count >= start) {
      for (var j = i - range; j <= i + range || end > count; j++) {
        if (j < 0 || j >= lines.length) continue;
        var line = j + 1;
        res.push("".concat(line).concat(' '.repeat(Math.max(3 - String(line).length, 0)), "|  ").concat(lines[j]));
        var lineLength = lines[j].length;

        if (j === i) {
          // push underline
          var pad = start - (count - lineLength) + 1;
          var length = Math.max(1, end > count ? lineLength - pad : end - start);
          res.push("   |  " + ' '.repeat(pad) + '^'.repeat(length));
        } else if (j > i) {
          if (end > count) {
            var _length = Math.max(Math.min(end - count, lineLength), 1);

            res.push("   |  " + '^'.repeat(_length));
          }

          count += lineLength + 1;
        }
      }

      break;
    }
  }

  return res.join('\n');
}
/**
 * On the client we only need to offer special cases for boolean attributes that
 * have different names from their corresponding dom properties:
 * - itemscope -> N/A
 * - allowfullscreen -> allowFullscreen
 * - formnovalidate -> formNoValidate
 * - ismap -> isMap
 * - nomodule -> noModule
 * - novalidate -> noValidate
 * - readonly -> readOnly
 */


var specialBooleanAttrs = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly";
var isSpecialBooleanAttr = /*#__PURE__*/makeMap(specialBooleanAttrs);
/**
 * The full list is needed during SSR to produce the correct initial markup.
 */

var isBooleanAttr = /*#__PURE__*/makeMap(specialBooleanAttrs + ",async,autofocus,autoplay,controls,default,defer,disabled,hidden," + "loop,open,required,reversed,scoped,seamless," + "checked,muted,multiple,selected");
var unsafeAttrCharRE = /[>/="'\u0009\u000a\u000c\u0020]/;
var attrValidationCache = {};

function isSSRSafeAttrName(name) {
  if (attrValidationCache.hasOwnProperty(name)) {
    return attrValidationCache[name];
  }

  var isUnsafe = unsafeAttrCharRE.test(name);

  if (isUnsafe) {
    console.error("unsafe attribute name: ".concat(name));
  }

  return attrValidationCache[name] = !isUnsafe;
}

var propsToAttrMap = {
  acceptCharset: 'accept-charset',
  className: 'class',
  htmlFor: 'for',
  httpEquiv: 'http-equiv'
};
/**
 * CSS properties that accept plain numbers
 */

var isNoUnitNumericStyleProp = /*#__PURE__*/makeMap("animation-iteration-count,border-image-outset,border-image-slice," + "border-image-width,box-flex,box-flex-group,box-ordinal-group,column-count," + "columns,flex,flex-grow,flex-positive,flex-shrink,flex-negative,flex-order," + "grid-row,grid-row-end,grid-row-span,grid-row-start,grid-column," + "grid-column-end,grid-column-span,grid-column-start,font-weight,line-clamp," + "line-height,opacity,order,orphans,tab-size,widows,z-index,zoom," + // SVG
"fill-opacity,flood-opacity,stop-opacity,stroke-dasharray,stroke-dashoffset," + "stroke-miterlimit,stroke-opacity,stroke-width");
/**
 * Known attributes, this is used for stringification of runtime static nodes
 * so that we don't stringify bindings that cannot be set from HTML.
 * Don't also forget to allow `data-*` and `aria-*`!
 * Generated from https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes
 */

var isKnownAttr = /*#__PURE__*/makeMap("accept,accept-charset,accesskey,action,align,allow,alt,async," + "autocapitalize,autocomplete,autofocus,autoplay,background,bgcolor," + "border,buffered,capture,challenge,charset,checked,cite,class,code," + "codebase,color,cols,colspan,content,contenteditable,contextmenu,controls," + "coords,crossorigin,csp,data,datetime,decoding,default,defer,dir,dirname," + "disabled,download,draggable,dropzone,enctype,enterkeyhint,for,form," + "formaction,formenctype,formmethod,formnovalidate,formtarget,headers," + "height,hidden,high,href,hreflang,http-equiv,icon,id,importance,integrity," + "ismap,itemprop,keytype,kind,label,lang,language,loading,list,loop,low," + "manifest,max,maxlength,minlength,media,min,multiple,muted,name,novalidate," + "open,optimum,pattern,ping,placeholder,poster,preload,radiogroup,readonly," + "referrerpolicy,rel,required,reversed,rows,rowspan,sandbox,scope,scoped," + "selected,shape,size,sizes,slot,span,spellcheck,src,srcdoc,srclang,srcset," + "start,step,style,summary,tabindex,target,title,translate,type,usemap," + "value,width,wrap");

function normalizeStyle(value) {
  if (isArray(value)) {
    var res = {};

    for (var i = 0; i < value.length; i++) {
      var item = value[i];
      var normalized = normalizeStyle(isString(item) ? parseStringStyle(item) : item);

      if (normalized) {
        for (var key in normalized) {
          res[key] = normalized[key];
        }
      }
    }

    return res;
  } else if (isObject(value)) {
    return value;
  }
}

var listDelimiterRE = /;(?![^(]*\))/g;
var propertyDelimiterRE = /:(.+)/;

function parseStringStyle(cssText) {
  var ret = {};
  cssText.split(listDelimiterRE).forEach(function (item) {
    if (item) {
      var tmp = item.split(propertyDelimiterRE);
      tmp.length > 1 && (ret[tmp[0].trim()] = tmp[1].trim());
    }
  });
  return ret;
}

function stringifyStyle(styles) {
  var ret = '';

  if (!styles) {
    return ret;
  }

  for (var key in styles) {
    var value = styles[key];
    var normalizedKey = key.startsWith("--") ? key : hyphenate(key);

    if (isString(value) || typeof value === 'number' && isNoUnitNumericStyleProp(normalizedKey)) {
      // only render valid values
      ret += "".concat(normalizedKey, ":").concat(value, ";");
    }
  }

  return ret;
}

function normalizeClass(value) {
  var res = '';

  if (isString(value)) {
    res = value;
  } else if (isArray(value)) {
    for (var i = 0; i < value.length; i++) {
      var normalized = normalizeClass(value[i]);

      if (normalized) {
        res += normalized + ' ';
      }
    }
  } else if (isObject(value)) {
    for (var name in value) {
      if (value[name]) {
        res += name + ' ';
      }
    }
  }

  return res.trim();
} // These tag configs are shared between compiler-dom and runtime-dom, so they
// https://developer.mozilla.org/en-US/docs/Web/HTML/Element


var HTML_TAGS = 'html,body,base,head,link,meta,style,title,address,article,aside,footer,' + 'header,h1,h2,h3,h4,h5,h6,hgroup,nav,section,div,dd,dl,dt,figcaption,' + 'figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,' + 'data,dfn,em,i,kbd,mark,q,rp,rt,rtc,ruby,s,samp,small,span,strong,sub,sup,' + 'time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,' + 'canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,' + 'th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,' + 'option,output,progress,select,textarea,details,dialog,menu,' + 'summary,template,blockquote,iframe,tfoot'; // https://developer.mozilla.org/en-US/docs/Web/SVG/Element

var SVG_TAGS = 'svg,animate,animateMotion,animateTransform,circle,clipPath,color-profile,' + 'defs,desc,discard,ellipse,feBlend,feColorMatrix,feComponentTransfer,' + 'feComposite,feConvolveMatrix,feDiffuseLighting,feDisplacementMap,' + 'feDistanceLight,feDropShadow,feFlood,feFuncA,feFuncB,feFuncG,feFuncR,' + 'feGaussianBlur,feImage,feMerge,feMergeNode,feMorphology,feOffset,' + 'fePointLight,feSpecularLighting,feSpotLight,feTile,feTurbulence,filter,' + 'foreignObject,g,hatch,hatchpath,image,line,linearGradient,marker,mask,' + 'mesh,meshgradient,meshpatch,meshrow,metadata,mpath,path,pattern,' + 'polygon,polyline,radialGradient,rect,set,solidcolor,stop,switch,symbol,' + 'text,textPath,title,tspan,unknown,use,view';
var VOID_TAGS = 'area,base,br,col,embed,hr,img,input,link,meta,param,source,track,wbr';
var isHTMLTag = /*#__PURE__*/makeMap(HTML_TAGS);
var isSVGTag = /*#__PURE__*/makeMap(SVG_TAGS);
var isVoidTag = /*#__PURE__*/makeMap(VOID_TAGS);
var escapeRE = /["'&<>]/;

function escapeHtml(string) {
  var str = '' + string;
  var match = escapeRE.exec(str);

  if (!match) {
    return str;
  }

  var html = '';
  var escaped;
  var index;
  var lastIndex = 0;

  for (index = match.index; index < str.length; index++) {
    switch (str.charCodeAt(index)) {
      case 34:
        // "
        escaped = '&quot;';
        break;

      case 38:
        // &
        escaped = '&amp;';
        break;

      case 39:
        // '
        escaped = '&#39;';
        break;

      case 60:
        // <
        escaped = '&lt;';
        break;

      case 62:
        // >
        escaped = '&gt;';
        break;

      default:
        continue;
    }

    if (lastIndex !== index) {
      html += str.substring(lastIndex, index);
    }

    lastIndex = index + 1;
    html += escaped;
  }

  return lastIndex !== index ? html + str.substring(lastIndex, index) : html;
} // https://www.w3.org/TR/html52/syntax.html#comments


var commentStripRE = /^-?>|<!--|-->|--!>|<!-$/g;

function escapeHtmlComment(src) {
  return src.replace(commentStripRE, '');
}

function looseCompareArrays(a, b) {
  if (a.length !== b.length) return false;
  var equal = true;

  for (var i = 0; equal && i < a.length; i++) {
    equal = looseEqual(a[i], b[i]);
  }

  return equal;
}

function looseEqual(a, b) {
  if (a === b) return true;
  var aValidType = isDate(a);
  var bValidType = isDate(b);

  if (aValidType || bValidType) {
    return aValidType && bValidType ? a.getTime() === b.getTime() : false;
  }

  aValidType = isArray(a);
  bValidType = isArray(b);

  if (aValidType || bValidType) {
    return aValidType && bValidType ? looseCompareArrays(a, b) : false;
  }

  aValidType = isObject(a);
  bValidType = isObject(b);

  if (aValidType || bValidType) {
    /* istanbul ignore if: this if will probably never be called */
    if (!aValidType || !bValidType) {
      return false;
    }

    var aKeysCount = Object.keys(a).length;
    var bKeysCount = Object.keys(b).length;

    if (aKeysCount !== bKeysCount) {
      return false;
    }

    for (var key in a) {
      var aHasKey = a.hasOwnProperty(key);
      var bHasKey = b.hasOwnProperty(key);

      if (aHasKey && !bHasKey || !aHasKey && bHasKey || !looseEqual(a[key], b[key])) {
        return false;
      }
    }
  }

  return String(a) === String(b);
}

function looseIndexOf(arr, val) {
  return arr.findIndex(function (item) {
    return looseEqual(item, val);
  });
}
/**
 * For converting {{ interpolation }} values to displayed strings.
 * @private
 */


var toDisplayString = function toDisplayString(val) {
  return val == null ? '' : isObject(val) ? JSON.stringify(val, replacer, 2) : String(val);
};

var replacer = function replacer(_key, val) {
  if (isMap(val)) {
    return _defineProperty({}, "Map(".concat(val.size, ")"), _toConsumableArray(val.entries()).reduce(function (entries, _ref) {
      var _ref2 = _slicedToArray(_ref, 2),
          key = _ref2[0],
          val = _ref2[1];

      entries["".concat(key, " =>")] = val;
      return entries;
    }, {}));
  } else if (isSet(val)) {
    return _defineProperty({}, "Set(".concat(val.size, ")"), _toConsumableArray(val.values()));
  } else if (isObject(val) && !isArray(val) && !isPlainObject(val)) {
    return String(val);
  }

  return val;
};
/**
 * List of @babel/parser plugins that are used for template expression
 * transforms and SFC script transforms. By default we enable proposals slated
 * for ES2020. This will need to be updated as the spec moves forward.
 * Full list at https://babeljs.io/docs/en/next/babel-parser#plugins
 */


var babelParserDefaultPlugins = ['bigInt', 'optionalChaining', 'nullishCoalescingOperator'];
var EMPTY_OBJ =  true ? Object.freeze({}) : 0;
var EMPTY_ARR =  true ? Object.freeze([]) : 0;

var NOOP = function NOOP() {};
/**
 * Always return false.
 */


var NO = function NO() {
  return false;
};

var onRE = /^on[^a-z]/;

var isOn = function isOn(key) {
  return onRE.test(key);
};

var isModelListener = function isModelListener(key) {
  return key.startsWith('onUpdate:');
};

var extend = Object.assign;

var remove = function remove(arr, el) {
  var i = arr.indexOf(el);

  if (i > -1) {
    arr.splice(i, 1);
  }
};

var hasOwnProperty = Object.prototype.hasOwnProperty;

var hasOwn = function hasOwn(val, key) {
  return hasOwnProperty.call(val, key);
};

var isArray = Array.isArray;

var isMap = function isMap(val) {
  return toTypeString(val) === '[object Map]';
};

var isSet = function isSet(val) {
  return toTypeString(val) === '[object Set]';
};

var isDate = function isDate(val) {
  return val instanceof Date;
};

var isFunction = function isFunction(val) {
  return typeof val === 'function';
};

var isString = function isString(val) {
  return typeof val === 'string';
};

var isSymbol = function isSymbol(val) {
  return _typeof(val) === 'symbol';
};

var isObject = function isObject(val) {
  return val !== null && _typeof(val) === 'object';
};

var isPromise = function isPromise(val) {
  return isObject(val) && isFunction(val.then) && isFunction(val["catch"]);
};

var objectToString = Object.prototype.toString;

var toTypeString = function toTypeString(value) {
  return objectToString.call(value);
};

var toRawType = function toRawType(value) {
  // extract "RawType" from strings like "[object RawType]"
  return toTypeString(value).slice(8, -1);
};

var isPlainObject = function isPlainObject(val) {
  return toTypeString(val) === '[object Object]';
};

var isIntegerKey = function isIntegerKey(key) {
  return isString(key) && key !== 'NaN' && key[0] !== '-' && '' + parseInt(key, 10) === key;
};

var isReservedProp = /*#__PURE__*/makeMap( // the leading comma is intentional so empty string "" is also included
',key,ref,' + 'onVnodeBeforeMount,onVnodeMounted,' + 'onVnodeBeforeUpdate,onVnodeUpdated,' + 'onVnodeBeforeUnmount,onVnodeUnmounted');

var cacheStringFunction = function cacheStringFunction(fn) {
  var cache = Object.create(null);
  return function (str) {
    var hit = cache[str];
    return hit || (cache[str] = fn(str));
  };
};

var camelizeRE = /-(\w)/g;
/**
 * @private
 */

var camelize = cacheStringFunction(function (str) {
  return str.replace(camelizeRE, function (_, c) {
    return c ? c.toUpperCase() : '';
  });
});
var hyphenateRE = /\B([A-Z])/g;
/**
 * @private
 */

var hyphenate = cacheStringFunction(function (str) {
  return str.replace(hyphenateRE, '-$1').toLowerCase();
});
/**
 * @private
 */

var capitalize = cacheStringFunction(function (str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
});
/**
 * @private
 */

var toHandlerKey = cacheStringFunction(function (str) {
  return str ? "on".concat(capitalize(str)) : "";
}); // compare whether a value has changed, accounting for NaN.

var hasChanged = function hasChanged(value, oldValue) {
  return value !== oldValue && (value === value || oldValue === oldValue);
};

var invokeArrayFns = function invokeArrayFns(fns, arg) {
  for (var i = 0; i < fns.length; i++) {
    fns[i](arg);
  }
};

var def = function def(obj, key, value) {
  Object.defineProperty(obj, key, {
    configurable: true,
    enumerable: false,
    value: value
  });
};

var toNumber = function toNumber(val) {
  var n = parseFloat(val);
  return isNaN(n) ? val : n;
};

var _globalThis;

var getGlobalThis = function getGlobalThis() {
  return _globalThis || (_globalThis = typeof globalThis !== 'undefined' ? globalThis : typeof self !== 'undefined' ? self : typeof window !== 'undefined' ? window : typeof __webpack_require__.g !== 'undefined' ? __webpack_require__.g : {});
};



/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";

/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names

module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join("");
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === "string") {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, ""]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js":
/*!************************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/cssWithMappingToString.js ***!
  \************************************************************************/
/***/ ((module) => {

"use strict";


function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

function _iterableToArrayLimit(arr, i) {
  var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]);

  if (_i == null) return;
  var _arr = [];
  var _n = true;
  var _d = false;

  var _s, _e;

  try {
    for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

module.exports = function cssWithMappingToString(item) {
  var _item = _slicedToArray(item, 4),
      content = _item[1],
      cssMapping = _item[3];

  if (typeof btoa === "function") {
    // eslint-disable-next-line no-undef
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (url, options) {
  if (!options) {
    // eslint-disable-next-line no-param-reassign
    options = {};
  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign


  url = url && url.__esModule ? url["default"] : url;

  if (typeof url !== "string") {
    return url;
  } // If url is already wrapped in quotes, remove them


  if (/^['"].*['"]$/.test(url)) {
    // eslint-disable-next-line no-param-reassign
    url = url.slice(1, -1);
  }

  if (options.hash) {
    // eslint-disable-next-line no-param-reassign
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }

  return url;
};

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[10].use[0]!./src/vue/app.vue?vue&type=script&lang=js":
/*!***************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[10].use[0]!./src/vue/app.vue?vue&type=script&lang=js ***!
  \***************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: '',
  data: function data() {},
  methods: {},
  created: function created() {}
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[10].use[0]!./src/vue/app.vue?vue&type=template&id=0a6dfb62&scoped=true":
/*!*******************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[10].use[0]!./src/vue/app.vue?vue&type=template&id=0a6dfb62&scoped=true ***!
  \*******************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm-bundler.js");


var _withId = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.withScopeId)("data-v-0a6dfb62");

(0,vue__WEBPACK_IMPORTED_MODULE_0__.pushScopeId)("data-v-0a6dfb62");

var _hoisted_1 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("h2", null, "vue2", -1
/* HOISTED */
);

(0,vue__WEBPACK_IMPORTED_MODULE_0__.popScopeId)();

var render = /*#__PURE__*/_withId(function (_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("div", null, [_hoisted_1]);
});

/***/ }),

/***/ "./node_modules/vue/dist/vue.esm-bundler.js":
/*!**************************************************!*\
  !*** ./node_modules/vue/dist/vue.esm-bundler.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BaseTransition": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.BaseTransition),
/* harmony export */   "Comment": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.Comment),
/* harmony export */   "Fragment": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.Fragment),
/* harmony export */   "KeepAlive": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.KeepAlive),
/* harmony export */   "Static": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.Static),
/* harmony export */   "Suspense": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.Suspense),
/* harmony export */   "Teleport": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.Teleport),
/* harmony export */   "Text": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.Text),
/* harmony export */   "Transition": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.Transition),
/* harmony export */   "TransitionGroup": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.TransitionGroup),
/* harmony export */   "callWithAsyncErrorHandling": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.callWithAsyncErrorHandling),
/* harmony export */   "callWithErrorHandling": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.callWithErrorHandling),
/* harmony export */   "camelize": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.camelize),
/* harmony export */   "capitalize": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.capitalize),
/* harmony export */   "cloneVNode": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.cloneVNode),
/* harmony export */   "compatUtils": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.compatUtils),
/* harmony export */   "computed": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.computed),
/* harmony export */   "createApp": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.createApp),
/* harmony export */   "createBlock": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.createBlock),
/* harmony export */   "createCommentVNode": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode),
/* harmony export */   "createHydrationRenderer": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.createHydrationRenderer),
/* harmony export */   "createRenderer": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.createRenderer),
/* harmony export */   "createSSRApp": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.createSSRApp),
/* harmony export */   "createSlots": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.createSlots),
/* harmony export */   "createStaticVNode": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode),
/* harmony export */   "createTextVNode": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.createTextVNode),
/* harmony export */   "createVNode": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.createVNode),
/* harmony export */   "customRef": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.customRef),
/* harmony export */   "defineAsyncComponent": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.defineAsyncComponent),
/* harmony export */   "defineComponent": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.defineComponent),
/* harmony export */   "defineEmit": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.defineEmit),
/* harmony export */   "defineProps": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.defineProps),
/* harmony export */   "devtools": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.devtools),
/* harmony export */   "getCurrentInstance": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.getCurrentInstance),
/* harmony export */   "getTransitionRawChildren": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.getTransitionRawChildren),
/* harmony export */   "h": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.h),
/* harmony export */   "handleError": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.handleError),
/* harmony export */   "hydrate": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.hydrate),
/* harmony export */   "initCustomFormatter": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.initCustomFormatter),
/* harmony export */   "inject": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.inject),
/* harmony export */   "isProxy": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.isProxy),
/* harmony export */   "isReactive": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.isReactive),
/* harmony export */   "isReadonly": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.isReadonly),
/* harmony export */   "isRef": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.isRef),
/* harmony export */   "isRuntimeOnly": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.isRuntimeOnly),
/* harmony export */   "isVNode": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.isVNode),
/* harmony export */   "markRaw": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.markRaw),
/* harmony export */   "mergeProps": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.mergeProps),
/* harmony export */   "nextTick": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.nextTick),
/* harmony export */   "onActivated": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.onActivated),
/* harmony export */   "onBeforeMount": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.onBeforeMount),
/* harmony export */   "onBeforeUnmount": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.onBeforeUnmount),
/* harmony export */   "onBeforeUpdate": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.onBeforeUpdate),
/* harmony export */   "onDeactivated": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.onDeactivated),
/* harmony export */   "onErrorCaptured": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.onErrorCaptured),
/* harmony export */   "onMounted": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.onMounted),
/* harmony export */   "onRenderTracked": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.onRenderTracked),
/* harmony export */   "onRenderTriggered": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.onRenderTriggered),
/* harmony export */   "onServerPrefetch": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.onServerPrefetch),
/* harmony export */   "onUnmounted": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.onUnmounted),
/* harmony export */   "onUpdated": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.onUpdated),
/* harmony export */   "openBlock": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.openBlock),
/* harmony export */   "popScopeId": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.popScopeId),
/* harmony export */   "provide": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.provide),
/* harmony export */   "proxyRefs": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.proxyRefs),
/* harmony export */   "pushScopeId": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.pushScopeId),
/* harmony export */   "queuePostFlushCb": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.queuePostFlushCb),
/* harmony export */   "reactive": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.reactive),
/* harmony export */   "readonly": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.readonly),
/* harmony export */   "ref": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.ref),
/* harmony export */   "registerRuntimeCompiler": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.registerRuntimeCompiler),
/* harmony export */   "render": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "renderList": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.renderList),
/* harmony export */   "renderSlot": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.renderSlot),
/* harmony export */   "resolveComponent": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.resolveComponent),
/* harmony export */   "resolveDirective": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.resolveDirective),
/* harmony export */   "resolveDynamicComponent": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.resolveDynamicComponent),
/* harmony export */   "resolveFilter": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.resolveFilter),
/* harmony export */   "resolveTransitionHooks": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.resolveTransitionHooks),
/* harmony export */   "setBlockTracking": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.setBlockTracking),
/* harmony export */   "setDevtoolsHook": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.setDevtoolsHook),
/* harmony export */   "setTransitionHooks": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.setTransitionHooks),
/* harmony export */   "shallowReactive": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.shallowReactive),
/* harmony export */   "shallowReadonly": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.shallowReadonly),
/* harmony export */   "shallowRef": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.shallowRef),
/* harmony export */   "ssrContextKey": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.ssrContextKey),
/* harmony export */   "ssrUtils": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.ssrUtils),
/* harmony export */   "toDisplayString": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.toDisplayString),
/* harmony export */   "toHandlerKey": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.toHandlerKey),
/* harmony export */   "toHandlers": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.toHandlers),
/* harmony export */   "toRaw": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.toRaw),
/* harmony export */   "toRef": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.toRef),
/* harmony export */   "toRefs": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.toRefs),
/* harmony export */   "transformVNodeArgs": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.transformVNodeArgs),
/* harmony export */   "triggerRef": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.triggerRef),
/* harmony export */   "unref": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.unref),
/* harmony export */   "useContext": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.useContext),
/* harmony export */   "useCssModule": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.useCssModule),
/* harmony export */   "useCssVars": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.useCssVars),
/* harmony export */   "useSSRContext": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.useSSRContext),
/* harmony export */   "useTransitionState": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.useTransitionState),
/* harmony export */   "vModelCheckbox": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.vModelCheckbox),
/* harmony export */   "vModelDynamic": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.vModelDynamic),
/* harmony export */   "vModelRadio": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.vModelRadio),
/* harmony export */   "vModelSelect": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.vModelSelect),
/* harmony export */   "vModelText": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.vModelText),
/* harmony export */   "vShow": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.vShow),
/* harmony export */   "version": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.version),
/* harmony export */   "warn": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.warn),
/* harmony export */   "watch": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.watch),
/* harmony export */   "watchEffect": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.watchEffect),
/* harmony export */   "withCtx": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.withCtx),
/* harmony export */   "withDirectives": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.withDirectives),
/* harmony export */   "withKeys": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.withKeys),
/* harmony export */   "withModifiers": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.withModifiers),
/* harmony export */   "withScopeId": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.withScopeId),
/* harmony export */   "compile": () => (/* binding */ compileToFunction)
/* harmony export */ });
/* harmony import */ var _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @vue/runtime-dom */ "./node_modules/@vue/runtime-dom/dist/runtime-dom.esm-bundler.js");
/* harmony import */ var _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @vue/runtime-dom */ "./node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.js");
/* harmony import */ var _vue_compiler_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @vue/compiler-dom */ "./node_modules/@vue/compiler-dom/dist/compiler-dom.esm-bundler.js");
/* harmony import */ var _vue_shared__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @vue/shared */ "./node_modules/@vue/shared/dist/shared.esm-bundler.js");






function initDev() {
  {
    (0,_vue_runtime_dom__WEBPACK_IMPORTED_MODULE_2__.initCustomFormatter)();
  }
} // This entry is the "full-build" that includes both the runtime


if (true) {
  initDev();
}

var compileCache = Object.create(null);

function compileToFunction(template, options) {
  if (!(0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.isString)(template)) {
    if (template.nodeType) {
      template = template.innerHTML;
    } else {
       true && (0,_vue_runtime_dom__WEBPACK_IMPORTED_MODULE_2__.warn)("invalid template option: ", template);
      return _vue_shared__WEBPACK_IMPORTED_MODULE_1__.NOOP;
    }
  }

  var key = template;
  var cached = compileCache[key];

  if (cached) {
    return cached;
  }

  if (template[0] === '#') {
    var el = document.querySelector(template);

    if ( true && !el) {
      (0,_vue_runtime_dom__WEBPACK_IMPORTED_MODULE_2__.warn)("Template element not found or is empty: ".concat(template));
    } // __UNSAFE__
    // Reason: potential execution of JS expressions in in-DOM template.
    // The user must make sure the in-DOM template is trusted. If it's rendered
    // by the server, the template should not contain any user data.


    template = el ? el.innerHTML : "";
  }

  var _compile = (0,_vue_compiler_dom__WEBPACK_IMPORTED_MODULE_3__.compile)(template, (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.extend)({
    hoistStatic: true,
    onError:  true ? onError : 0,
    onWarn:  true ? function (e) {
      return onError(e, true);
    } : 0
  }, options)),
      code = _compile.code;

  function onError(err) {
    var asWarning = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    var message = asWarning ? err.message : "Template compilation error: ".concat(err.message);
    var codeFrame = err.loc && (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__.generateCodeFrame)(template, err.loc.start.offset, err.loc.end.offset);
    (0,_vue_runtime_dom__WEBPACK_IMPORTED_MODULE_2__.warn)(codeFrame ? "".concat(message, "\n").concat(codeFrame) : message);
  } // The wildcard import results in a huge object with every export
  // with keys that cannot be mangled, and can be quite heavy size-wise.
  // In the global build we know `Vue` is available globally so we can avoid
  // the wildcard object.


  var render = new Function('Vue', code)(_vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__);
  render._rc = true;
  return compileCache[key] = render;
}

(0,_vue_runtime_dom__WEBPACK_IMPORTED_MODULE_2__.registerRuntimeCompiler)(compileToFunction);


/***/ }),

/***/ "./node_modules/vue/dist/vue.runtime.esm-bundler.js":
/*!**********************************************************!*\
  !*** ./node_modules/vue/dist/vue.runtime.esm-bundler.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BaseTransition": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.BaseTransition),
/* harmony export */   "Comment": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.Comment),
/* harmony export */   "Fragment": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.Fragment),
/* harmony export */   "KeepAlive": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.KeepAlive),
/* harmony export */   "Static": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.Static),
/* harmony export */   "Suspense": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.Suspense),
/* harmony export */   "Teleport": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.Teleport),
/* harmony export */   "Text": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.Text),
/* harmony export */   "Transition": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.Transition),
/* harmony export */   "TransitionGroup": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.TransitionGroup),
/* harmony export */   "callWithAsyncErrorHandling": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.callWithAsyncErrorHandling),
/* harmony export */   "callWithErrorHandling": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.callWithErrorHandling),
/* harmony export */   "camelize": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.camelize),
/* harmony export */   "capitalize": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.capitalize),
/* harmony export */   "cloneVNode": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.cloneVNode),
/* harmony export */   "compatUtils": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.compatUtils),
/* harmony export */   "computed": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.computed),
/* harmony export */   "createApp": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.createApp),
/* harmony export */   "createBlock": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.createBlock),
/* harmony export */   "createCommentVNode": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode),
/* harmony export */   "createHydrationRenderer": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.createHydrationRenderer),
/* harmony export */   "createRenderer": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.createRenderer),
/* harmony export */   "createSSRApp": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.createSSRApp),
/* harmony export */   "createSlots": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.createSlots),
/* harmony export */   "createStaticVNode": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode),
/* harmony export */   "createTextVNode": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.createTextVNode),
/* harmony export */   "createVNode": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.createVNode),
/* harmony export */   "customRef": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.customRef),
/* harmony export */   "defineAsyncComponent": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.defineAsyncComponent),
/* harmony export */   "defineComponent": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.defineComponent),
/* harmony export */   "defineEmit": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.defineEmit),
/* harmony export */   "defineProps": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.defineProps),
/* harmony export */   "devtools": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.devtools),
/* harmony export */   "getCurrentInstance": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.getCurrentInstance),
/* harmony export */   "getTransitionRawChildren": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.getTransitionRawChildren),
/* harmony export */   "h": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.h),
/* harmony export */   "handleError": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.handleError),
/* harmony export */   "hydrate": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.hydrate),
/* harmony export */   "initCustomFormatter": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.initCustomFormatter),
/* harmony export */   "inject": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.inject),
/* harmony export */   "isProxy": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.isProxy),
/* harmony export */   "isReactive": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.isReactive),
/* harmony export */   "isReadonly": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.isReadonly),
/* harmony export */   "isRef": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.isRef),
/* harmony export */   "isRuntimeOnly": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.isRuntimeOnly),
/* harmony export */   "isVNode": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.isVNode),
/* harmony export */   "markRaw": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.markRaw),
/* harmony export */   "mergeProps": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.mergeProps),
/* harmony export */   "nextTick": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.nextTick),
/* harmony export */   "onActivated": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.onActivated),
/* harmony export */   "onBeforeMount": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.onBeforeMount),
/* harmony export */   "onBeforeUnmount": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.onBeforeUnmount),
/* harmony export */   "onBeforeUpdate": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.onBeforeUpdate),
/* harmony export */   "onDeactivated": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.onDeactivated),
/* harmony export */   "onErrorCaptured": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.onErrorCaptured),
/* harmony export */   "onMounted": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.onMounted),
/* harmony export */   "onRenderTracked": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.onRenderTracked),
/* harmony export */   "onRenderTriggered": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.onRenderTriggered),
/* harmony export */   "onServerPrefetch": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.onServerPrefetch),
/* harmony export */   "onUnmounted": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.onUnmounted),
/* harmony export */   "onUpdated": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.onUpdated),
/* harmony export */   "openBlock": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.openBlock),
/* harmony export */   "popScopeId": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.popScopeId),
/* harmony export */   "provide": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.provide),
/* harmony export */   "proxyRefs": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.proxyRefs),
/* harmony export */   "pushScopeId": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.pushScopeId),
/* harmony export */   "queuePostFlushCb": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.queuePostFlushCb),
/* harmony export */   "reactive": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.reactive),
/* harmony export */   "readonly": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.readonly),
/* harmony export */   "ref": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.ref),
/* harmony export */   "registerRuntimeCompiler": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.registerRuntimeCompiler),
/* harmony export */   "render": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "renderList": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.renderList),
/* harmony export */   "renderSlot": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.renderSlot),
/* harmony export */   "resolveComponent": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.resolveComponent),
/* harmony export */   "resolveDirective": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.resolveDirective),
/* harmony export */   "resolveDynamicComponent": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.resolveDynamicComponent),
/* harmony export */   "resolveFilter": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.resolveFilter),
/* harmony export */   "resolveTransitionHooks": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.resolveTransitionHooks),
/* harmony export */   "setBlockTracking": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.setBlockTracking),
/* harmony export */   "setDevtoolsHook": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.setDevtoolsHook),
/* harmony export */   "setTransitionHooks": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.setTransitionHooks),
/* harmony export */   "shallowReactive": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.shallowReactive),
/* harmony export */   "shallowReadonly": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.shallowReadonly),
/* harmony export */   "shallowRef": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.shallowRef),
/* harmony export */   "ssrContextKey": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.ssrContextKey),
/* harmony export */   "ssrUtils": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.ssrUtils),
/* harmony export */   "toDisplayString": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.toDisplayString),
/* harmony export */   "toHandlerKey": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.toHandlerKey),
/* harmony export */   "toHandlers": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.toHandlers),
/* harmony export */   "toRaw": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.toRaw),
/* harmony export */   "toRef": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.toRef),
/* harmony export */   "toRefs": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.toRefs),
/* harmony export */   "transformVNodeArgs": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.transformVNodeArgs),
/* harmony export */   "triggerRef": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.triggerRef),
/* harmony export */   "unref": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.unref),
/* harmony export */   "useContext": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.useContext),
/* harmony export */   "useCssModule": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.useCssModule),
/* harmony export */   "useCssVars": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.useCssVars),
/* harmony export */   "useSSRContext": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.useSSRContext),
/* harmony export */   "useTransitionState": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.useTransitionState),
/* harmony export */   "vModelCheckbox": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.vModelCheckbox),
/* harmony export */   "vModelDynamic": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.vModelDynamic),
/* harmony export */   "vModelRadio": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.vModelRadio),
/* harmony export */   "vModelSelect": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.vModelSelect),
/* harmony export */   "vModelText": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.vModelText),
/* harmony export */   "vShow": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.vShow),
/* harmony export */   "version": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.version),
/* harmony export */   "warn": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.warn),
/* harmony export */   "watch": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.watch),
/* harmony export */   "watchEffect": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.watchEffect),
/* harmony export */   "withCtx": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.withCtx),
/* harmony export */   "withDirectives": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.withDirectives),
/* harmony export */   "withKeys": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.withKeys),
/* harmony export */   "withModifiers": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.withModifiers),
/* harmony export */   "withScopeId": () => (/* reexport safe */ _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__.withScopeId),
/* harmony export */   "compile": () => (/* binding */ compile)
/* harmony export */ });
/* harmony import */ var _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @vue/runtime-dom */ "./node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.js");
/* harmony import */ var _vue_runtime_dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @vue/runtime-dom */ "./node_modules/@vue/runtime-dom/dist/runtime-dom.esm-bundler.js");



function initDev() {
  {
    (0,_vue_runtime_dom__WEBPACK_IMPORTED_MODULE_1__.initCustomFormatter)();
  }
} // This entry exports the runtime only, and is built as


if (true) {
  initDev();
}

var compile = function compile() {
  if (true) {
    (0,_vue_runtime_dom__WEBPACK_IMPORTED_MODULE_1__.warn)("Runtime compilation is not supported in this build of Vue." + " Configure your bundler to alias \"vue\" to \"vue/dist/vue.esm-bundler.js\"."
    /* should not happen */
    );
  }
};



/***/ }),

/***/ "./src/js/element.js":
/*!***************************!*\
  !*** ./src/js/element.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _css_title_less__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../css/title.less */ "./src/css/title.less");
/* harmony import */ var _css_img_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../css/img.css */ "./src/css/img.css");
/* harmony import */ var _img_windows_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../img/windows.png */ "./src/img/windows.png");
// import "../css/style.css";



var oDiv = document.createElement("div");
oDiv.innerHTML = "你好，VueJs";
oDiv.className = "title";
document.body.append(oDiv); // 背景图

var div = document.createElement("div");
div.className = "img-bg";
document.body.appendChild(div); // src图片

var img = document.createElement("img"); // 图片src引入

img.src = _img_windows_png__WEBPACK_IMPORTED_MODULE_2__;
document.body.appendChild(img); // console.log(content.length)

/***/ }),

/***/ "./src/js/format.js":
/*!**************************!*\
  !*** ./src/js/format.js ***!
  \**************************/
/***/ ((module) => {

var priceFormat = function priceFormat() {
  return "¥99.99";
}; // commonJs导出


module.exports = {
  priceFormat: priceFormat
};

/***/ }),

/***/ "./src/js/math.js":
/*!************************!*\
  !*** ./src/js/math.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "sum": () => (/* binding */ sum)
/* harmony export */ });
var sum = function sum(num1, num2) {
  return num1 + num2;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/less-loader/dist/cjs.js!./src/css/title.less":
/*!***************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/less-loader/dist/cjs.js!./src/css/title.less ***!
  \***************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".title {\n  color: rgba(18,52,86,0.47059);\n  font-size: 40px;\n  font-weight: 700;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n}\n", "",{"version":3,"sources":["webpack://./src/css/title.less"],"names":[],"mappings":"AAIA;EACI,6BAAA;EACA,eAAA;EACA,gBAAA;EACA,yBAAA;KAAA,sBAAA;MAAA,qBAAA;UAAA,iBAAA;AAHJ","sourcesContent":["@color: #12345678;\n@fontSize: 40px;\n@fontWeight: 700;\n\n.title {\n    color: @color;\n    font-size: @fontSize;\n    font-weight: @fontWeight;\n    user-select: none;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/img.css":
/*!***************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/img.css ***!
  \***************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _img_6_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../img/6.jpg */ "./src/img/6.jpg");
// Imports




var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(_img_6_jpg__WEBPACK_IMPORTED_MODULE_3__);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".img-bg {\r\n    width: 200px;\r\n    height: 200px;\r\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\r\n    background-size: cover;\r\n}", "",{"version":3,"sources":["webpack://./src/css/img.css"],"names":[],"mappings":"AAAA;IACI,YAAY;IACZ,aAAa;IACb,yDAAqC;IACrC,sBAAsB;AAC1B","sourcesContent":[".img-bg {\r\n    width: 200px;\r\n    height: 200px;\r\n    background-image: url(\"../img/6.jpg\");\r\n    background-size: cover;\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./src/css/title.less":
/*!****************************!*\
  !*** ./src/css/title.less ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_less_loader_dist_cjs_js_title_less__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/postcss-loader/dist/cjs.js!../../node_modules/less-loader/dist/cjs.js!./title.less */ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/less-loader/dist/cjs.js!./src/css/title.less");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_less_loader_dist_cjs_js_title_less__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_less_loader_dist_cjs_js_title_less__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./src/css/img.css":
/*!*************************!*\
  !*** ./src/css/img.css ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_img_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./img.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/img.css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_img_css__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_img_css__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : 0;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && typeof btoa !== 'undefined') {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./src/vue/app.vue":
/*!*************************!*\
  !*** ./src/vue/app.vue ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _app_vue_vue_type_template_id_0a6dfb62_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.vue?vue&type=template&id=0a6dfb62&scoped=true */ "./src/vue/app.vue?vue&type=template&id=0a6dfb62&scoped=true");
/* harmony import */ var _app_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.vue?vue&type=script&lang=js */ "./src/vue/app.vue?vue&type=script&lang=js");



_app_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default.render = _app_vue_vue_type_template_id_0a6dfb62_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render
_app_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default.__scopeId = "data-v-0a6dfb62"
/* hot reload */
if (false) {}

_app_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default.__file = "src/vue/app.vue"

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_app_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default);

/***/ }),

/***/ "./src/vue/app.vue?vue&type=script&lang=js":
/*!*************************************************!*\
  !*** ./src/vue/app.vue?vue&type=script&lang=js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_10_use_0_app_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__.default)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_10_use_0_app_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib/index.js!../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[10].use[0]!./app.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[10].use[0]!./src/vue/app.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./src/vue/app.vue?vue&type=template&id=0a6dfb62&scoped=true":
/*!*******************************************************************!*\
  !*** ./src/vue/app.vue?vue&type=template&id=0a6dfb62&scoped=true ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_10_use_0_app_vue_vue_type_template_id_0a6dfb62_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_10_use_0_app_vue_vue_type_template_id_0a6dfb62_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib/index.js!../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[10].use[0]!./app.vue?vue&type=template&id=0a6dfb62&scoped=true */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[10].use[0]!./src/vue/app.vue?vue&type=template&id=0a6dfb62&scoped=true");


/***/ }),

/***/ "./src/img/6.jpg":
/*!***********************!*\
  !*** ./src/img/6.jpg ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = "data:image/jpeg;base64,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";

/***/ }),

/***/ "./src/img/windows.png":
/*!*****************************!*\
  !*** ./src/img/windows.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "img/windows_3b230a.png";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl + "../";
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_dist_vue_esm_bundler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue/dist/vue.esm-bundler */ "./node_modules/vue/dist/vue.esm-bundler.js");
/* harmony import */ var _js_math__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/math */ "./src/js/math.js");
/* harmony import */ var _js_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./js/element */ "./src/js/element.js");
/* harmony import */ var _vue_app_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./vue/app.vue */ "./src/vue/app.vue");





var _require = __webpack_require__(/*! ./js/format */ "./src/js/format.js"),
    priceFormat = _require.priceFormat;

console.log((0,_js_math__WEBPACK_IMPORTED_MODULE_1__.sum)(10, 20));
console.log(priceFormat());
var app = (0,vue_dist_vue_esm_bundler__WEBPACK_IMPORTED_MODULE_0__.createApp)(_vue_app_vue__WEBPACK_IMPORTED_MODULE_3__.default);
app.mount("#app");
})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map