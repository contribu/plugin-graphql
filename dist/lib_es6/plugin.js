import VuexORMGraphQL from './vuex-orm-graphql';
/**
 * Plugin class. This just provides a static install method for Vuex-ORM and stores the instance of the model
 * within this.instance.
 */
var VuexORMGraphQLPlugin = /** @class */ (function () {
    function VuexORMGraphQLPlugin() {
    }
    /**
     * This is called, when VuexORM.install(VuexOrmGraphQL, options) is called.
     *
     * @param {Components} components The Vuex-ORM Components collection
     * @param {Options} options The options passed to VuexORM.install
     * @returns {VuexORMGraphQL}
     */
    VuexORMGraphQLPlugin.install = function (components, options) {
        VuexORMGraphQLPlugin.instance = new VuexORMGraphQL(components, options);
        return VuexORMGraphQLPlugin.instance;
    };
    return VuexORMGraphQLPlugin;
}());
export default VuexORMGraphQLPlugin;
//# sourceMappingURL=plugin.js.map