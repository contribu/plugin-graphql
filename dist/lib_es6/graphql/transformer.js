import Model from "../orm/model";
import Context from "../common/context";
import { pluralize, singularize, clone, downcaseFirstLetter, isPlainObject } from "../support/utils";
/**
 * This class provides methods to transform incoming data from GraphQL in to a format Vuex-ORM understands and
 * vice versa.
 */
var Transformer = /** @class */ (function () {
    function Transformer() {
    }
    /**
     * Transforms outgoing data. Use for variables param.
     *
     * Omits relations and some other fields.
     *
     * @param model
     * @param {Data} data
     * @param {Array<String>} whitelist of fields
     * @returns {Data}
     */
    Transformer.transformOutgoingData = function (model, data, whitelist) {
        var _this = this;
        var context = Context.getInstance();
        var relations = model.getRelations();
        var returnValue = {};
        Object.keys(data).forEach(function (key) {
            var value = data[key];
            // Always add fields on the whitelist. Ignore hasMany/One connections, empty fields and internal fields ($)
            if ((whitelist && whitelist.includes(key)) ||
                ((!relations.has(key) || relations.get(key) instanceof context.components.BelongsTo) &&
                    !key.startsWith("$") &&
                    value !== null &&
                    value !== undefined)) {
                var relatedModel = relations.get(key) && relations.get(key).parent
                    ? context.getModel(singularize(relations.get(key).parent.entity), true)
                    : null;
                if (value instanceof Array) {
                    // Either this is a hasMany field or a .attr() field which contains an array.
                    var arrayModel_1 = context.getModel(singularize(key), true);
                    if (arrayModel_1) {
                        returnValue[key] = value.map(function (v) { return _this.transformOutgoingData(arrayModel_1 || model, v); });
                    }
                    else {
                        returnValue[key] = value;
                    }
                }
                else if (typeof value === "object" && value.$id !== undefined) {
                    if (!relatedModel) {
                        relatedModel = context.getModel(value.$self().entity);
                    }
                    // Value is a record, transform that too
                    returnValue[key] = _this.transformOutgoingData(relatedModel, value);
                }
                else {
                    // In any other case just let the value be what ever it is
                    returnValue[key] = value;
                }
            }
        });
        return returnValue;
    };
    /**
     * Transforms a set of incoming data to the format vuex-orm requires.
     *
     * @param {Data | Array<Data>} data
     * @param model
     * @param mutation required to transform something like `disableUserAddress` to the actual model name.
     * @param {boolean} recursiveCall
     * @returns {Data}
     */
    Transformer.transformIncomingData = function (data, model, mutation, recursiveCall) {
        var _this = this;
        if (mutation === void 0) { mutation = false; }
        if (recursiveCall === void 0) { recursiveCall = false; }
        var result = {};
        var context = Context.getInstance();
        if (!recursiveCall) {
            context.logger.group("Transforming incoming data");
            context.logger.log("Raw data:", data);
        }
        if (Array.isArray(data)) {
            result = data.map(function (d) { return _this.transformIncomingData(d, model, mutation, true); });
        }
        else {
            Object.keys(data).forEach(function (key) {
                if (key in data) {
                    if (isPlainObject(data[key])) {
                        var localModel = context.getModel(key, true) || model;
                        if (data[key].nodes && context.connectionQueryMode === "nodes") {
                            result[pluralize(key)] = _this.transformIncomingData(data[key].nodes, localModel, mutation, true);
                        }
                        else if (data[key].edges && context.connectionQueryMode === "edges") {
                            result[pluralize(key)] = _this.transformIncomingData(data[key].edges, localModel, mutation, true);
                        }
                        else if (data["node"] && context.connectionQueryMode === "edges") {
                            result = _this.transformIncomingData(data["node"], localModel, mutation, true);
                        }
                        else {
                            var newKey = key;
                            if (mutation && !recursiveCall) {
                                newKey = data[key].nodes ? localModel.pluralName : localModel.singularName;
                                newKey = downcaseFirstLetter(newKey);
                            }
                            result[newKey] = _this.transformIncomingData(data[key], localModel, mutation, true);
                        }
                    }
                    else if (Model.isFieldNumber(model.fields.get(key))) {
                        result[key] = parseFloat(data[key]);
                    }
                    else if (key.endsWith("Type") && model.isTypeFieldOfPolymorphicRelation(key)) {
                        result[key] = pluralize(downcaseFirstLetter(data[key]));
                    }
                    else {
                        result[key] = data[key];
                    }
                }
            });
        }
        if (!recursiveCall) {
            context.logger.log("Transformed data:", result);
            context.logger.groupEnd();
        }
        else {
            result["$isPersisted"] = true;
        }
        // Make sure this is really a plain JS object. We had some issues in testing here.
        return clone(result);
    };
    return Transformer;
}());
export default Transformer;
//# sourceMappingURL=transformer.js.map