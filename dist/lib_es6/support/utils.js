import { parse } from "graphql/language/parser";
import { print } from "graphql/language/printer";
// @ts-ignore
import lodashIsEqual from "lodash.isequal";
// @ts-ignore
import lodashClone from "lodash.clone";
// @ts-ignore
import pluralizeLib from "pluralize";
export var pluralize = pluralizeLib.plural;
export var singularize = pluralizeLib.singular;
/**
 * Capitalizes the first letter of the given string.
 *
 * @param {string} input
 * @returns {string}
 */
export function upcaseFirstLetter(input) {
    return input.charAt(0).toUpperCase() + input.slice(1);
}
/**
 * Down cases the first letter of the given string.
 *
 * @param {string} input
 * @returns {string}
 */
export function downcaseFirstLetter(input) {
    return input.charAt(0).toLowerCase() + input.slice(1);
}
/**
 * Takes a string with a graphql query and formats it. Useful for debug output and the tests.
 * @param {string} query
 * @returns {string}
 */
export function prettify(query) {
    return print(parseQuery(query));
}
/**
 * Returns a parsed query as GraphQL AST DocumentNode.
 *
 * @param {string | DocumentNode} query - Query as string or GraphQL AST DocumentNode.
 *
 * @returns {DocumentNode} Query as GraphQL AST DocumentNode.
 */
export function parseQuery(query) {
    return typeof query === "string" ? parse(query) : query;
}
/**
 * @param {DocumentNode} query - The GraphQL AST DocumentNode.
 *
 * @returns {string} the GraphQL query within a DocumentNode as a plain string.
 */
export function graphQlDocumentToString(query) {
    return query.loc.source.body;
}
/**
 * Tells if a object is just a simple object.
 *
 * @param {any} obj - Value to check.
 */
export function isPlainObject(obj) {
    // Basic check for Type object that's not null
    return obj !== null && typeof obj === "object";
}
/**
 * Creates an object composed of the picked `object` properties.
 * @param {object} object - Object.
 * @param {array} props - Properties to pick.
 */
export function pick(object, props) {
    if (!object) {
        return {};
    }
    var index = -1;
    var length = props.length;
    var result = {};
    while (++index < length) {
        var prop = props[index];
        result[prop] = object[prop];
    }
    return result;
}
export function isEqual(a, b) {
    // Couldn' find a simpler working implementation yet.
    return lodashIsEqual(a, b);
}
export function clone(input) {
    // Couldn' find a simpler working implementation yet.
    return lodashClone(input);
}
export function takeWhile(array, predicate) {
    var index = -1;
    while (++index < array.length && predicate(array[index], index, array)) {
        // just increase index
    }
    return array.slice(0, index);
}
export function matches(source) {
    source = clone(source);
    return function (object) { return isEqual(object, source); };
}
export function removeSymbols(input) {
    return JSON.parse(JSON.stringify(input));
}
//# sourceMappingURL=utils.js.map