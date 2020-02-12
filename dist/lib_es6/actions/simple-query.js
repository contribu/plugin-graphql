var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
import Action from "./action";
import Context from "../common/context";
import { clone, graphQlDocumentToString, parseQuery, removeSymbols } from "../support/utils";
/**
 * SimpleQuery action for sending a model unrelated simple query.
 */
var SimpleQuery = /** @class */ (function (_super) {
    __extends(SimpleQuery, _super);
    function SimpleQuery() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * @param {DispatchFunction} dispatch Vuex Dispatch method for the model
     * @param {string} query The query to send
     * @param {Arguments} variables
     * @param {boolean} bypassCache Whether to bypass the cache
     * @returns {Promise<any>} The result
     */
    SimpleQuery.call = function (_a, _b) {
        var dispatch = _a.dispatch;
        var query = _b.query, bypassCache = _b.bypassCache, variables = _b.variables;
        return __awaiter(this, void 0, void 0, function () {
            var context, parsedQuery, mockReturnValue, result;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        context = Context.getInstance();
                        if (!query) return [3 /*break*/, 2];
                        parsedQuery = parseQuery(query);
                        mockReturnValue = context.globalMockHook("simpleQuery", {
                            name: parsedQuery.definitions[0]["name"].value,
                            variables: variables
                        });
                        if (mockReturnValue) {
                            return [2 /*return*/, mockReturnValue];
                        }
                        variables = this.prepareArgs(variables);
                        return [4 /*yield*/, context.apollo.simpleQuery(graphQlDocumentToString(parsedQuery), variables, bypassCache)];
                    case 1:
                        result = _c.sent();
                        // remove the symbols
                        return [2 /*return*/, removeSymbols(clone(result.data))];
                    case 2: 
                    /* istanbul ignore next */
                    throw new Error("The simpleQuery action requires the 'query' to be set");
                }
            });
        });
    };
    return SimpleQuery;
}(Action));
export default SimpleQuery;
//# sourceMappingURL=simple-query.js.map