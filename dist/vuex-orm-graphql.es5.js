var extendStatics=function(e,t){return(extendStatics=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)};function __extends(e,t){function n(){this.constructor=e}extendStatics(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}var __assign=function(){return(__assign=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)};function __awaiter(e,t,n,r){return new(n||(n=Promise))(function(o,i){function a(e){try{u(r.next(e))}catch(e){i(e)}}function s(e){try{u(r.throw(e))}catch(e){i(e)}}function u(e){e.done?o(e.value):new n(function(t){t(e.value)}).then(a,s)}u((r=r.apply(e,t||[])).next())})}function __generator(e,t){var n,r,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function s(i){return function(s){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;a;)try{if(n=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,r=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(!(o=(o=a.trys).length>0&&o[o.length-1])&&(6===i[0]||2===i[0])){a=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){a.label=i[1];break}if(6===i[0]&&a.label<o[1]){a.label=o[1],o=i;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(i);break}o[2]&&a.ops.pop(),a.trys.pop();continue}i=t.call(e,a)}catch(e){i=[6,e],r=0}finally{n=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,s])}}}var commonjsGlobal="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function commonjsRequire(){throw new Error("Dynamic requires are not currently supported by rollup-plugin-commonjs")}function createCommonjsModule(e,t){return e(t={exports:{}},t.exports),t.exports}var pluralize=createCommonjsModule(function(e,t){var n,r;n=commonjsGlobal,r=function(){var e=[],t=[],n={},r={},o={};function i(e){return"string"==typeof e?new RegExp("^"+e+"$","i"):e}function a(e,t){return e===t?t:e===e.toUpperCase()?t.toUpperCase():e[0]===e[0].toUpperCase()?t.charAt(0).toUpperCase()+t.substr(1).toLowerCase():t.toLowerCase()}function s(e,t){return e.replace(t[0],function(n,r){var o,i,s=(o=t[1],i=arguments,o.replace(/\$(\d{1,2})/g,function(e,t){return i[t]||""}));return a(""===n?e[r-1]:n,s)})}function u(e,t,r){if(!e.length||n.hasOwnProperty(e))return t;for(var o=r.length;o--;){var i=r[o];if(i[0].test(t))return s(t,i)}return t}function c(e,t,n){return function(r){var o=r.toLowerCase();return t.hasOwnProperty(o)?a(r,o):e.hasOwnProperty(o)?a(r,e[o]):u(o,r,n)}}function l(e,t,n,r){return function(r){var o=r.toLowerCase();return!!t.hasOwnProperty(o)||!e.hasOwnProperty(o)&&u(o,o,n)===o}}function d(e,t,n){var r=1===t?d.singular(e):d.plural(e);return(n?t+" ":"")+r}return d.plural=c(o,r,e),d.isPlural=l(o,r,e),d.singular=c(r,o,t),d.isSingular=l(r,o,t),d.addPluralRule=function(t,n){e.push([i(t),n])},d.addSingularRule=function(e,n){t.push([i(e),n])},d.addUncountableRule=function(e){"string"!=typeof e?(d.addPluralRule(e,"$0"),d.addSingularRule(e,"$0")):n[e.toLowerCase()]=!0},d.addIrregularRule=function(e,t){t=t.toLowerCase(),e=e.toLowerCase(),o[e]=t,r[t]=e},[["I","we"],["me","us"],["he","they"],["she","they"],["them","them"],["myself","ourselves"],["yourself","yourselves"],["itself","themselves"],["herself","themselves"],["himself","themselves"],["themself","themselves"],["is","are"],["was","were"],["has","have"],["this","these"],["that","those"],["echo","echoes"],["dingo","dingoes"],["volcano","volcanoes"],["tornado","tornadoes"],["torpedo","torpedoes"],["genus","genera"],["viscus","viscera"],["stigma","stigmata"],["stoma","stomata"],["dogma","dogmata"],["lemma","lemmata"],["schema","schemata"],["anathema","anathemata"],["ox","oxen"],["axe","axes"],["die","dice"],["yes","yeses"],["foot","feet"],["eave","eaves"],["goose","geese"],["tooth","teeth"],["quiz","quizzes"],["human","humans"],["proof","proofs"],["carve","carves"],["valve","valves"],["looey","looies"],["thief","thieves"],["groove","grooves"],["pickaxe","pickaxes"],["whiskey","whiskies"]].forEach(function(e){return d.addIrregularRule(e[0],e[1])}),[[/s?$/i,"s"],[/[^\u0000-\u007F]$/i,"$0"],[/([^aeiou]ese)$/i,"$1"],[/(ax|test)is$/i,"$1es"],[/(alias|[^aou]us|tlas|gas|ris)$/i,"$1es"],[/(e[mn]u)s?$/i,"$1s"],[/([^l]ias|[aeiou]las|[emjzr]as|[iu]am)$/i,"$1"],[/(alumn|syllab|octop|vir|radi|nucle|fung|cact|stimul|termin|bacill|foc|uter|loc|strat)(?:us|i)$/i,"$1i"],[/(alumn|alg|vertebr)(?:a|ae)$/i,"$1ae"],[/(seraph|cherub)(?:im)?$/i,"$1im"],[/(her|at|gr)o$/i,"$1oes"],[/(agend|addend|millenni|dat|extrem|bacteri|desiderat|strat|candelabr|errat|ov|symposi|curricul|automat|quor)(?:a|um)$/i,"$1a"],[/(apheli|hyperbat|periheli|asyndet|noumen|phenomen|criteri|organ|prolegomen|hedr|automat)(?:a|on)$/i,"$1a"],[/sis$/i,"ses"],[/(?:(kni|wi|li)fe|(ar|l|ea|eo|oa|hoo)f)$/i,"$1$2ves"],[/([^aeiouy]|qu)y$/i,"$1ies"],[/([^ch][ieo][ln])ey$/i,"$1ies"],[/(x|ch|ss|sh|zz)$/i,"$1es"],[/(matr|cod|mur|sil|vert|ind|append)(?:ix|ex)$/i,"$1ices"],[/(m|l)(?:ice|ouse)$/i,"$1ice"],[/(pe)(?:rson|ople)$/i,"$1ople"],[/(child)(?:ren)?$/i,"$1ren"],[/eaux$/i,"$0"],[/m[ae]n$/i,"men"],["thou","you"]].forEach(function(e){return d.addPluralRule(e[0],e[1])}),[[/s$/i,""],[/(ss)$/i,"$1"],[/(wi|kni|(?:after|half|high|low|mid|non|night|[^\w]|^)li)ves$/i,"$1fe"],[/(ar|(?:wo|[ae])l|[eo][ao])ves$/i,"$1f"],[/ies$/i,"y"],[/\b([pl]|zomb|(?:neck|cross)?t|coll|faer|food|gen|goon|group|lass|talk|goal|cut)ies$/i,"$1ie"],[/\b(mon|smil)ies$/i,"$1ey"],[/(m|l)ice$/i,"$1ouse"],[/(seraph|cherub)im$/i,"$1"],[/(x|ch|ss|sh|zz|tto|go|cho|alias|[^aou]us|tlas|gas|(?:her|at|gr)o|ris)(?:es)?$/i,"$1"],[/(analy|ba|diagno|parenthe|progno|synop|the|empha|cri)(?:sis|ses)$/i,"$1sis"],[/(movie|twelve|abuse|e[mn]u)s$/i,"$1"],[/(test)(?:is|es)$/i,"$1is"],[/(alumn|syllab|octop|vir|radi|nucle|fung|cact|stimul|termin|bacill|foc|uter|loc|strat)(?:us|i)$/i,"$1us"],[/(agend|addend|millenni|dat|extrem|bacteri|desiderat|strat|candelabr|errat|ov|symposi|curricul|quor)a$/i,"$1um"],[/(apheli|hyperbat|periheli|asyndet|noumen|phenomen|criteri|organ|prolegomen|hedr|automat)a$/i,"$1on"],[/(alumn|alg|vertebr)ae$/i,"$1a"],[/(cod|mur|sil|vert|ind)ices$/i,"$1ex"],[/(matr|append)ices$/i,"$1ix"],[/(pe)(rson|ople)$/i,"$1rson"],[/(child)ren$/i,"$1"],[/(eau)x?$/i,"$1"],[/men$/i,"man"]].forEach(function(e){return d.addSingularRule(e[0],e[1])}),["adulthood","advice","agenda","aid","alcohol","ammo","anime","athletics","audio","bison","blood","bream","buffalo","butter","carp","cash","chassis","chess","clothing","cod","commerce","cooperation","corps","debris","diabetes","digestion","elk","energy","equipment","excretion","expertise","flounder","fun","gallows","garbage","graffiti","headquarters","health","herpes","highjinks","homework","housework","information","jeans","justice","kudos","labour","literature","machinery","mackerel","mail","media","mews","moose","music","manga","news","pike","plankton","pliers","pollution","premises","rain","research","rice","salmon","scissors","series","sewage","shambles","shrimp","species","staff","swine","tennis","traffic","transporation","trout","tuna","wealth","welfare","whiting","wildebeest","wildlife","you",/[^aeiou]ese$/i,/deer$/i,/fish$/i,/measles$/i,/o[iu]s$/i,/pox$/i,/sheep$/i].forEach(d.addUncountableRule),d},"function"==typeof commonjsRequire?e.exports=r():n.pluralize=r()}),_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},pluralize$1=pluralize.plural,singularize=pluralize.singular;function upcaseFirstLetter(e){return e.charAt(0).toUpperCase()+e.slice(1)}function downcaseFirstLetter(e){return e.charAt(0).toLowerCase()+e.slice(1)}function prettify(e){return e}function parseQuery(e){return e}function graphQlDocumentToString(e){return e}function isPlainObject(e){return null!==e&&"object"===(void 0===e?"undefined":_typeof(e))}function takeWhile(e,t){for(var n=-1;++n<e.length&&t(e[n],n,e););return e.slice(0,n)}function removeSymbols(e){return JSON.parse(JSON.stringify(e))}var Logger=function(){function e(e){this.PREFIX=["%c Vuex-ORM: GraphQL Plugin %c","background: #35495e; padding: 1px 0; border-radius: 3px; color: #eee;","background: transparent;"],this.enabled=e,this.log("Logging is enabled.")}return e.prototype.group=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];this.enabled&&(console.groupCollapsed?console.groupCollapsed.apply(console,this.PREFIX.concat(e)):console.log.apply(console,this.PREFIX.concat(e)))},e.prototype.groupEnd=function(){this.enabled&&console.groupEnd&&console.groupEnd()},e.prototype.log=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];this.enabled&&console.log.apply(console,this.PREFIX.concat(e))},e.prototype.warn=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];this.enabled&&console.warn.apply(console,this.PREFIX.concat(e))},e.prototype.logQuery=function(e,t,n){if(this.enabled)try{var r=prettify(e);this.group("Sending query:",r.split("\n")[1].replace("{","").trim()),console.log(r),t&&console.log("VARIABLES:",t),n&&console.log("FETCH POLICY:",n),this.groupEnd()}catch(t){console.error("[Vuex-ORM-Apollo] There is a syntax error in the query!",t,e)}},e}(),Model=function(){function e(e){var t=this;this.fields=new Map,this.mocks={},this.baseModel=e,this.singularName=singularize(this.baseModel.entity),this.pluralName=pluralize$1(this.baseModel.entity);var n=this.baseModel.fields();Object.keys(n).forEach(function(e){t.fields.set(e,n[e])})}return e.isFieldNumber=function(e){if(!e)return!1;var t=Context.getInstance();return e instanceof t.components.Number||e instanceof t.components.Increment},e.isFieldAttribute=function(e){var t=Context.getInstance();return e instanceof t.components.Increment||e instanceof t.components.Attr||e instanceof t.components.String||e instanceof t.components.Number||e instanceof t.components.Boolean},e.isConnection=function(e){var t=Context.getInstance();return!(e instanceof t.components.BelongsTo||e instanceof t.components.HasOne||e instanceof t.components.MorphTo||e instanceof t.components.MorphOne)},e.augment=function(e){var t=e.baseModel.fields.bind(e.baseModel);e.baseModel.fields=function(){var n=t();return n.$isPersisted=e.baseModel.boolean(!1),n}},e.prototype.getQueryFields=function(){var t=this,n=[];return this.fields.forEach(function(r,o){e.isFieldAttribute(r)&&!t.skipField(o)&&n.push(o)}),n},e.prototype.skipField=function(e){if(e.startsWith("$"))return!0;if(this.baseModel.skipFields&&this.baseModel.skipFields.indexOf(e)>=0)return!0;var t=Context.getInstance(),n=!1;return this.getRelations().forEach(function(r){return!(r instanceof t.components.BelongsTo||r instanceof t.components.HasOne)||r.foreignKey!==e||(n=!0,!1)}),n},e.prototype.getRelations=function(){var t=new Map;return this.fields.forEach(function(n,r){e.isFieldAttribute(n)||t.set(r,n)}),t},e.prototype.isTypeFieldOfPolymorphicRelation=function(e){var t=this,n=Context.getInstance(),r=!1;return n.models.forEach(function(o){return!r&&(o.getRelations().forEach(function(o){return!(o instanceof n.components.MorphMany||o instanceof n.components.MorphedByMany||o instanceof n.components.MorphOne||o instanceof n.components.MorphTo||o instanceof n.components.MorphToMany)||o.type!==e||!o.related||o.related.entity!==t.baseModel.entity||(r=!0,!1)}),!0)}),r},e.prototype.getRecordWithId=function(e){return this.baseModel.query().withAllRecursive().where("id",e).first()},e.prototype.shouldEagerLoadRelation=function(e,t,n){var r=Context.getInstance();return t instanceof r.components.HasOne||t instanceof r.components.BelongsTo||t instanceof r.components.MorphOne||void 0!==(this.baseModel.eagerLoad||[]).find(function(t){return t===n.singularName||t===n.pluralName||t===e})},e}(),Transformer=function(){function e(){}return e.transformOutgoingData=function(e,t,n){var r=this,o=Context.getInstance(),i=e.getRelations(),a={};return Object.keys(t).forEach(function(s){var u=t[s];if(n&&n.includes(s)||(!i.has(s)||i.get(s)instanceof o.components.BelongsTo)&&!s.startsWith("$")&&null!==u&&void 0!==u){var c=i.get(s)&&i.get(s).parent?o.getModel(singularize(i.get(s).parent.entity),!0):null;if(u instanceof Array){var l=o.getModel(singularize(s),!0);a[s]=l?u.map(function(t){return r.transformOutgoingData(l||e,t)}):u}else"object"===(void 0===u?"undefined":_typeof(u))&&void 0!==u.$id?(c||(c=o.getModel(u.$self().entity)),a[s]=r.transformOutgoingData(c,u)):a[s]=u}}),a},e.transformIncomingData=function(e,t,n,r){var o=this;void 0===n&&(n=!1),void 0===r&&(r=!1);var i={},a=Context.getInstance();return r||(a.logger.group("Transforming incoming data"),a.logger.log("Raw data:",e)),Array.isArray(e)?i=e.map(function(e){return o.transformIncomingData(e,t,n,!0)}):Object.keys(e).forEach(function(s){if(s in e)if(isPlainObject(e[s])){var u=a.getModel(s,!0)||t;if(e[s].nodes&&"nodes"===a.connectionQueryMode)i[pluralize$1(s)]=o.transformIncomingData(e[s].nodes,u,n,!0);else if(e[s].edges&&"edges"===a.connectionQueryMode)i[pluralize$1(s)]=o.transformIncomingData(e[s].edges,u,n,!0);else if(e.node&&"edges"===a.connectionQueryMode)i=o.transformIncomingData(e.node,u,n,!0);else{var c=s;n&&!r&&(c=downcaseFirstLetter(c=e[s].nodes?u.pluralName:u.singularName)),i[c]=o.transformIncomingData(e[s],u,n,!0)}}else Model.isFieldNumber(t.fields.get(s))?i[s]=parseFloat(e[s]):s.endsWith("Type")&&t.isTypeFieldOfPolymorphicRelation(s)?i[s]=pluralize$1(downcaseFirstLetter(e[s])):i[s]=e[s]}),r?i.$isPersisted=!0:(a.logger.log("Transformed data:",i),a.logger.groupEnd()),__assign({},i)},e}(),Apollo=function(){function e(){var e=Context.getInstance();this.apolloClient=e.options.apolloClient,this.apolloClient.prettify=prettify}return e.prototype.request=function(t,n,r,o,i){return void 0===o&&(o=!1),void 0===i&&(i=!1),__awaiter(this,void 0,void 0,function(){var a,s,u;return __generator(this,function(c){switch(c.label){case 0:return a=i?"network-only":"cache-first",Context.getInstance().logger.logQuery(n,r,a),s={headers:e.getHeaders()},o?[4,this.apolloClient.mutate({mutation:n,variables:r,context:s})]:[3,2];case 1:return u=c.sent(),[3,4];case 2:return[4,this.apolloClient.query({query:n,variables:r,fetchPolicy:a,context:s})];case 3:u=c.sent(),c.label=4;case 4:return[2,Transformer.transformIncomingData(u.data,t,o)]}})})},e.prototype.simpleQuery=function(t,n,r,o){return void 0===r&&(r=!1),__awaiter(this,void 0,void 0,function(){var o;return __generator(this,function(i){return o=r?"network-only":"cache-first",[2,this.apolloClient.query({query:t,variables:n,fetchPolicy:o,context:{headers:e.getHeaders()}})]})})},e.prototype.simpleMutation=function(t,n,r){return __awaiter(this,void 0,void 0,function(){return __generator(this,function(r){return[2,this.apolloClient.mutate({mutation:t,variables:n,context:{headers:e.getHeaders()}})]})})},e.getHeaders=function(){var e=Context.getInstance(),t=e.options.headers?e.options.headers:{};return"function"==typeof t&&(t=t(e)),t},e}(),Schema=function(){function e(e){var t=this;this.schema=e,this.types=new Map,this.mutations=new Map,this.queries=new Map,this.schema.types.forEach(function(e){return t.types.set(e.name,e)}),this.getType("Query").fields.forEach(function(e){return t.queries.set(e.name,e)}),this.getType("Mutation").fields.forEach(function(e){return t.mutations.set(e.name,e)})}return e.prototype.determineQueryMode=function(){var t=this,n=null;if(this.queries.forEach(function(r){var o=e.getTypeNameOfField(r);return!o.endsWith("TypeConnection")||(n=t.getType(o),!1)}),!n)throw new Error("Can't determine the connection mode due to the fact that here are no connection types in the schema. Please set the connectionQueryMode via Vuex-ORM-GraphQL options!");return n.fields.find(function(e){return"nodes"===e.name})?"nodes":n.fields.find(function(e){return"edges"===e.name})?"edges":"plain"},e.prototype.getType=function(e,t){void 0===t&&(t=!1),e=upcaseFirstLetter(e);var n=this.types.get(e);if(!t&&!n)throw new Error("Couldn't find Type of name "+e+" in the GraphQL Schema.");return n||null},e.prototype.getMutation=function(e,t){void 0===t&&(t=!1);var n=this.mutations.get(e);if(!t&&!n)throw new Error("Couldn't find Mutation of name "+e+" in the GraphQL Schema.");return n||null},e.prototype.getQuery=function(e,t){void 0===t&&(t=!1);var n=this.queries.get(e);if(!t&&!n)throw new Error("Couldn't find Query of name "+e+" in the GraphQL Schema.");return n||null},e.returnsConnection=function(t){return e.getTypeNameOfField(t).endsWith("TypeConnection")},e.getRealType=function(e){return"NON_NULL"===e.kind?this.getRealType(e.ofType):e},e.getTypeNameOfField=function(e){var t=this.getRealType(e.type);if("LIST"===t.kind)return"["+t.ofType.name+"]";var n=t.name||t.ofType.name||t.ofType.ofType.name;if(!n)throw new Error("Can't find type name for field "+e.name);return n},e}(),introspectionQuery="\nquery Introspection {\n  __schema {\n    types {\n      name\n      fields(includeDeprecated: true) {\n        name\n        args {\n          name\n          type {\n            name\n            kind\n\n            ofType {\n              kind\n\n              name\n              ofType {\n                kind\n                name\n\n                ofType {\n                  kind\n                  name\n                }\n              }\n            }\n          }\n        }\n\n        type {\n          name\n          kind\n\n          ofType {\n            kind\n\n            name\n            ofType {\n              kind\n              name\n\n              ofType {\n                kind\n                name\n              }\n            }\n          }\n        }\n      }\n\n      inputFields {\n        name\n        type {\n          name\n          kind\n\n          ofType {\n            kind\n\n            name\n            ofType {\n              kind\n              name\n\n              ofType {\n                kind\n                name\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n}\n",Context=function(){function e(e,t){if(this.models=new Map,this.debugMode=!1,this.connectionQueryMode="auto",this.globalMocks={},this.components=e,this.options=t,this.database=t.database,this.debugMode=Boolean(t.debug),this.logger=new Logger(this.debugMode),!t.database)throw new Error("database param is required to initialize vuex-orm-graphql!")}return e.getInstance=function(){return this.instance},e.setup=function(t,n){return this.instance=new e(t,n),this.instance.apollo=new Apollo,this.instance.collectModels(),this.instance.logger.group("Context setup"),this.instance.logger.log("components",this.instance.components),this.instance.logger.log("options",this.instance.options),this.instance.logger.log("database",this.instance.database),this.instance.logger.log("models",this.instance.models),this.instance.logger.groupEnd(),this.instance},e.prototype.loadSchema=function(){return __awaiter(this,void 0,void 0,function(){var e=this;return __generator(this,function(t){return this.schemaWillBeLoaded||(this.schemaWillBeLoaded=new Promise(function(t,n){return __awaiter(e,void 0,void 0,function(){var e,n;return __generator(this,function(r){switch(r.label){case 0:return this.logger.log("Fetching GraphQL Schema initially ..."),this.options.connectionQueryMode?this.connectionQueryMode=this.options.connectionQueryMode:this.connectionQueryMode="auto",e={headers:{"X-GraphQL-Introspection-Query":"true"}},[4,this.apollo.simpleQuery(introspectionQuery,{},!0,e)];case 1:return n=r.sent(),this.schema=new Schema(n.data.__schema),this.logger.log("GraphQL Schema successful fetched",n),this.logger.log("Starting to process the schema ..."),this.processSchema(),this.logger.log("Schema procession done!"),t(this.schema),[2]}})})})),[2,this.schemaWillBeLoaded]})})},e.prototype.loadSchemaSync=function(e){this.logger.log("loadSchemaSync"),this.options.connectionQueryMode?this.connectionQueryMode=this.options.connectionQueryMode:this.connectionQueryMode="auto",this.schema=new Schema(e.data.__schema),this.logger.log("GraphQL Schema successful fetched",e),this.logger.log("Starting to process the schema ..."),this.processSchema(),this.logger.log("Schema procession done!"),this.schemaWillBeLoaded=Promise.resolve(this.schema)},e.prototype.processSchema=function(){var e=this;this.models.forEach(function(t){var n;try{n=e.schema.getType(t.singularName)}catch(n){return void e.logger.warn("Ignoring entity "+t.singularName+" because it's not in the schema.")}t.fields.forEach(function(r,o){n.fields.find(function(e){return e.name===o})||(e.logger.warn("Ignoring field "+t.singularName+"."+o+" because it's not in the schema."),t.baseModel.skipFields=t.baseModel.skipFields?t.baseModel.skipFields:[],t.baseModel.skipFields.includes(o)||t.baseModel.skipFields.push(o))})}),"auto"===this.connectionQueryMode?(this.connectionQueryMode=this.schema.determineQueryMode(),this.logger.log("Connection Query Mode is "+this.connectionQueryMode+" by automatic detection")):this.logger.log("Connection Query Mode is "+this.connectionQueryMode+" by config")},e.prototype.getModel=function(e,t){if(void 0===t&&(t=!1),"string"==typeof e){var n=singularize(downcaseFirstLetter(e));if(e=this.models.get(n),!t&&!e)throw new Error("No such model "+n+"!")}return e},e.prototype.collectModels=function(){var e=this;this.database.entities.forEach(function(t){var n=new Model(t.model);e.models.set(n.singularName,n),Model.augment(n)})},e}(),QueryBuilder=function(){function e(){}return e.buildField=function(e,t,n,r,o,i,a){void 0===t&&(t=!0),void 0===r&&(r=[]),void 0===i&&(i=!1),void 0===a&&(a=!1);var s=Context.getInstance();e=s.getModel(e),o=o||e.pluralName;var u=s.schema.getMutation(o,!0)||s.schema.getQuery(o,!0),c=this.buildArguments(e,n,!1,i,a,u);r=0===r.length?[e.singularName]:r;var l="\n      "+e.getQueryFields().join(" ")+"\n      "+this.buildRelationsQuery(e,r)+"\n    ";if(t){var d=""+o+c;return"nodes"===s.connectionQueryMode?"\n          "+d+" {\n            nodes {\n              "+l+"\n            }\n          }\n        ":"edges"===s.connectionQueryMode?"\n          "+d+" {\n            edges {\n              node {\n                "+l+"\n              }\n            }\n          }\n        ":"\n          "+d+" {\n            "+l+"\n          }\n        "}return"\n        "+(o||e.singularName)+c+" {\n          "+l+"\n        }\n      "},e.buildQuery=function(e,t,n,r,o,i){var a=Context.getInstance();t=a.getModel(t),r=r?__assign({},r):{},Object.keys(r).forEach(function(e){r&&r[e]&&isPlainObject(r[e])&&(r[e]={__type:upcaseFirstLetter(e)})}),o=void 0===o?!r.id:o,n||(n=o?t.pluralName:t.singularName);var s=a.schema.getMutation(n,!0)||a.schema.getQuery(n,!0);return e+" "+upcaseFirstLetter(n)+this.buildArguments(t,r,!0,i,!0,s)+" {\n  "+this.buildField(t,o,r,[],n,i,!0)+"\n}"},e.buildArguments=function(t,n,r,o,i,a){var s=this;if(void 0===r&&(r=!1),void 0===o&&(o=!1),void 0===i&&(i=!0),void 0===a&&(a=null),void 0===n)return"";var u="",c=!0;return n&&(Object.keys(n).forEach(function(l){var d=n[l],h=t.skipField(l),f=("id"===l||h)&&!i,p=s.findSchemaFieldForArgument(l,a,t,o),m=p&&Schema.getTypeNameOfField(p).endsWith("TypeConnection");if(d&&!f&&!m){var g="";if(r)if(isPlainObject(d)&&d.__type)g=d.__type+"Input!";else if(Array.isArray(d)&&a){var y=e.findSchemaFieldForArgument(l,a,t,o);if(!y)throw new Error("The argument "+l+" is of type array but it's not possible to determine the type, because it's not in the field "+a.name);g=Schema.getTypeNameOfField(y)+"!"}else p&&Schema.getTypeNameOfField(p)?g=Schema.getTypeNameOfField(p)+"!":"id"===l||h?g="ID!":(g=s.determineAttributeType(t,l,d,a||void 0),g+="!");else g="$"+l;u=u+(c?"":", ")+(r?"$":"")+l+": "+g,c=!1}}),c||(!r&&o&&(u="filter: { "+u+" }"),u="("+u+")")),u},e.determineAttributeType=function(e,t,n,r){var o,i=Context.getInstance(),a=e.fields.get(t);r?(o=r.args.find(function(e){return e.name===t}))||r.args.find(function(e){return"filter"===e.name})&&(o=this.findSchemaFieldForArgument(t,null,e,!0)):o=i.schema.getType(e.singularName).fields.find(function(e){return e.name===t});if(o&&Schema.getTypeNameOfField(o))return Schema.getTypeNameOfField(o);if(a instanceof i.components.String)return"String";if(a&&a instanceof i.components.Number)return"Int";if(a&&a instanceof i.components.Boolean)return"Boolean";if("number"==typeof n)return"Int";if("string"==typeof n)return"String";if("boolean"==typeof n)return"Boolean";throw new Error("Can't find suitable graphql type for field '"+e.singularName+"."+t+"'.")},e.findSchemaFieldForArgument=function(e,t,n,r){var o,i=Context.getInstance().schema;if(t&&(o=t.args.find(function(t){return t.name===e})))return o;var a=i.getType(n.singularName+(r?"Filter":""),!0);return(o=a?(r?a.inputFields:a.fields).find(function(t){return t.name===e}):void 0)||Context.getInstance().logger.warn("Couldn't find the argument with name "+e+" for the mutation/query "+(t?t.name:"(?)")),o},e.buildRelationsQuery=function(e,t){var n=this;if(void 0===t&&(t=[]),null===e)return"";var r=Context.getInstance(),o=[];return e.getRelations().forEach(function(i,a){var s,u=i;u instanceof r.components.BelongsToMany||u instanceof r.components.HasMany||u instanceof r.components.HasManyThrough||u instanceof r.components.MorphedByMany||u instanceof r.components.MorphMany||u instanceof r.components.MorphOne||u instanceof r.components.MorphToMany||u instanceof r.components.HasOne?s=r.getModel(u.related.entity):u instanceof r.components.BelongsTo||u instanceof r.components.HasManyBy?s=r.getModel(u.parent.entity):u instanceof r.components.MorphTo?s=r.getModel(u.type):(s=r.getModel(a),r.logger.log("WARNING: unknown field type. Fallback to attribute name",u));var c=takeWhile(t.slice(0).reverse(),function(e){return e===s.singularName}).length,l=c?c>5:t.includes(s.singularName);if(e.shouldEagerLoadRelation(a,i,s)&&!l){var d=t.slice(0);d.push(s.singularName),o.push(n.buildField(s,Model.isConnection(i),void 0,d,a,!1))}}),o.join("\n")},e}(),Store=function(){function e(){}return e.insertData=function(e,t){return __awaiter(this,void 0,void 0,function(){var n,r=this;return __generator(this,function(o){switch(o.label){case 0:return n={},[4,Promise.all(Object.keys(e).map(function(o){return __awaiter(r,void 0,void 0,function(){var r,i;return __generator(this,function(a){switch(a.label){case 0:return r=e[o],Context.getInstance().logger.log("Inserting records",r),[4,t("insertOrUpdate",{data:r})];case 1:return i=a.sent(),Object.keys(i).forEach(function(e){n[e]||(n[e]=[]),n[e]=n[e].concat(i[e])}),[2]}})})}))];case 1:return o.sent(),[2,n]}})})},e}(),NameGenerator=function(){function e(){}return e.getNameForPersist=function(e){return this.getCRUDName("create",e)},e.getNameForPush=function(e){return this.getCRUDName("update",e)},e.getNameForDestroy=function(e){return this.getCRUDName("delete",e)},e.getNameForFetch=function(e,t){return void 0===t&&(t=!1),t?e.pluralName:e.singularName},e.getCRUDName=function(e,t){return""+e+upcaseFirstLetter(t.singularName)},e}(),Action=function(){function e(){}return e.mutation=function(e,t,n,r){return __awaiter(this,void 0,void 0,function(){var o,i,a,s,u,c,l,d,h,f;return __generator(this,function(p){switch(p.label){case 0:return t?(i=Context.getInstance(),(s=i.schema)?[3,2]:[4,i.loadSchema()]):[3,6];case 1:s=p.sent(),p.label=2;case 2:return a=s,u=Schema.returnsConnection(a.getMutation(e)),c=QueryBuilder.buildQuery("mutation",r,e,t,u),[4,Context.getInstance().apollo.request(r,c,t,!0)];case 3:return l=p.sent(),e===NameGenerator.getNameForDestroy(r)?[3,5]:((l=l[Object.keys(l)[0]]).id=parseInt(l.id,10),[4,Store.insertData((o={},o[r.pluralName]=l,o),n)]);case 4:return d=p.sent(),h=d[r.pluralName],(f=h[h.length-1])?[2,f]:(Context.getInstance().logger.log("Couldn't find the record of type '",r.pluralName,"' within",d,". Falling back to find()"),[2,r.baseModel.query().last()]);case 5:return[2,!0];case 6:return[2]}})})},e.getModelFromState=function(e){return Context.getInstance().getModel(e.$name)},e.prepareArgs=function(e,t){return e=e||{},t&&(e.id=t),e},e.addRecordToArgs=function(e,t,n){return e[t.singularName]=Transformer.transformOutgoingData(t,n),e},e.transformArgs=function(e){var t=Context.getInstance();return Object.keys(e).forEach(function(n){var r=e[n];if(r instanceof t.components.Model){var o=t.getModel(singularize(r.$self().entity)),i=Transformer.transformOutgoingData(o,r);t.logger.log("A",n,"model was found within the variables and will be transformed from",r,"to",i),e[n]=i}}),e},e}(),Destroy=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return __extends(t,e),t.call=function(e,t){var n=e.state,r=e.dispatch,o=t.id,i=t.args;return __awaiter(this,void 0,void 0,function(){var e,t;return __generator(this,function(a){switch(a.label){case 0:return o?(e=this.getModelFromState(n),t=NameGenerator.getNameForDestroy(e),i=this.prepareArgs(i,o),[4,Action.mutation(t,i,r,e)]):[3,2];case 1:return a.sent(),[2,!0];case 2:throw new Error("The destroy action requires the 'id' to be set")}})})},t}(Action),Fetch=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return __extends(t,e),t.call=function(e,t){var n=e.state,r=e.dispatch;return __awaiter(this,void 0,void 0,function(){var e,o,i,a,s,u,c,l;return __generator(this,function(d){switch(d.label){case 0:return e=Context.getInstance(),o=this.getModelFromState(n),e.schema?[3,2]:[4,e.loadSchema()];case 1:d.sent(),d.label=2;case 2:return i=t&&t.filter?Transformer.transformOutgoingData(o,t.filter,Object.keys(t.filter)):{},a=t&&t.bypassCache,s=!i.id,u=NameGenerator.getNameForFetch(o,s),t&&t.beforeBuildQuery&&t.beforeBuildQuery(),c=QueryBuilder.buildQuery("query",o,u,i,s,s),t&&t.afterBuildQuery&&t.afterBuildQuery(),[4,e.apollo.request(o,c,i,!1,a)];case 3:return l=d.sent(),[2,Store.insertData(l,r)]}})})},t}(Action),Mutate=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return __extends(t,e),t.call=function(e,t){var n=e.state,r=e.dispatch,o=t.args,i=t.name;return __awaiter(this,void 0,void 0,function(){var e,t;return __generator(this,function(a){switch(a.label){case 0:return i?(e=Context.getInstance(),t=this.getModelFromState(n),e.schema?[3,2]:[4,e.loadSchema()]):[3,3];case 1:a.sent(),a.label=2;case 2:return o=this.prepareArgs(o),this.transformArgs(o),[2,Action.mutation(i,o,r,t)];case 3:throw new Error("The mutate action requires the mutation name ('mutation') to be set")}})})},t}(Action),Persist=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return __extends(t,e),t.call=function(e,t){var n=e.state,r=e.dispatch,o=t.id,i=t.args;return __awaiter(this,void 0,void 0,function(){var e,t,a,s;return __generator(this,function(u){switch(u.label){case 0:return o?(e=this.getModelFromState(n),t=NameGenerator.getNameForPersist(e),a=e.getRecordWithId(o),i=this.prepareArgs(i),this.addRecordToArgs(i,e,a),[4,Action.mutation(t,i,r,e)]):[3,3];case 1:return s=u.sent(),[4,this.deleteObsoleteRecord(e,s,a)];case 2:return u.sent(),[2,s];case 3:throw new Error("The persist action requires the 'id' to be set")}})})},t.deleteObsoleteRecord=function(e,t,n){return __awaiter(this,void 0,void 0,function(){return __generator(this,function(e){return t&&n&&t.id!==n.id?(Context.getInstance().logger.log("Dropping deprecated record",n),[2,n.$delete()]):[2]})})},t}(Action),Push=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return __extends(t,e),t.call=function(e,t){var n=e.state,r=e.dispatch,o=t.data,i=t.args;return __awaiter(this,void 0,void 0,function(){var e,t;return __generator(this,function(a){if(o)return e=this.getModelFromState(n),t=NameGenerator.getNameForPush(e),i=this.prepareArgs(i,o.id),this.addRecordToArgs(i,e,o),[2,Action.mutation(t,i,r,e)];throw new Error("The persist action requires the 'data' to be set")})})},t}(Action),Query=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return __extends(t,e),t.call=function(e,t){var n=e.state,r=e.dispatch,o=t.name,i=t.filter,a=t.bypassCache;return __awaiter(this,void 0,void 0,function(){var e,t,s,u,c,l,d;return __generator(this,function(h){switch(h.label){case 0:return o?(e=Context.getInstance(),t=this.getModelFromState(n),(u=e.schema)?[3,2]:[4,e.loadSchema()]):[3,4];case 1:u=h.sent(),h.label=2;case 2:return s=u,i=i?Transformer.transformOutgoingData(t,i):{},c=Schema.returnsConnection(s.getQuery(o)),l=QueryBuilder.buildQuery("query",t,o,i,c,!1),[4,e.apollo.request(t,l,i,!1,a)];case 3:return d=h.sent(),[2,Store.insertData(d,r)];case 4:throw new Error("The customQuery action requires the query name ('name') to be set")}})})},t}(Action),SimpleQuery=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return __extends(t,e),t.call=function(e,t){e.dispatch;var n=t.query,r=t.bypassCache,o=t.variables;return __awaiter(this,void 0,void 0,function(){var e,t;return __generator(this,function(i){switch(i.label){case 0:return e=Context.getInstance(),n?(t=parseQuery(n),o=this.prepareArgs(o),[4,e.apollo.simpleQuery(graphQlDocumentToString(t),o,r)]):[3,2];case 1:return[2,removeSymbols(i.sent().data)];case 2:throw new Error("The simpleQuery action requires the 'query' to be set")}})})},t}(Action),SimpleMutation=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return __extends(t,e),t.call=function(e,t){e.dispatch;var n=t.query,r=t.variables;return __awaiter(this,void 0,void 0,function(){var e,t;return __generator(this,function(o){switch(o.label){case 0:return e=Context.getInstance(),n?(t=parseQuery(n),r=this.prepareArgs(r),[4,e.apollo.simpleMutation(graphQlDocumentToString(t),r)]):[3,2];case 1:return[2,o.sent().data];case 2:throw new Error("The simpleMutation action requires the 'query' to be set")}})})},t}(Action),VuexORMGraphQL=function(){function e(t,n){Context.setup(t,n),e.setupActions(),e.setupModelMethods()}return e.prototype.getContext=function(){return Context.getInstance()},e.setupActions=function(){var e=Context.getInstance();e.components.RootActions.simpleQuery=SimpleQuery.call.bind(SimpleQuery),e.components.RootActions.simpleMutation=SimpleMutation.call.bind(SimpleMutation),e.components.Actions.fetch=Fetch.call.bind(Fetch),e.components.Actions.persist=Persist.call.bind(Persist),e.components.Actions.push=Push.call.bind(Push),e.components.Actions.destroy=Destroy.call.bind(Destroy),e.components.Actions.mutate=Mutate.call.bind(Mutate),e.components.Actions.query=Query.call.bind(Query)},e.setupModelMethods=function(){var e=Context.getInstance();e.components.Model.fetch=function(e,t){return void 0===t&&(t=!1),__awaiter(this,void 0,void 0,function(){var n;return __generator(this,function(r){return isPlainObject(n=e)||(n={id:e}),[2,this.dispatch("fetch",{filter:n,bypassCache:t})]})})},e.components.Model.mutate=function(e){return __awaiter(this,void 0,void 0,function(){return __generator(this,function(t){return[2,this.dispatch("mutate",e)]})})},e.components.Model.customQuery=function(e){var t=e.name,n=e.filter,r=e.multiple,o=e.bypassCache;return __awaiter(this,void 0,void 0,function(){return __generator(this,function(e){return[2,this.dispatch("query",{name:t,filter:n,multiple:r,bypassCache:o})]})})};var t=e.components.Model.prototype;t.$mutate=function(e){var t=e.name,n=e.args,r=e.multiple;return __awaiter(this,void 0,void 0,function(){return __generator(this,function(e){return(n=n||{}).id||(n.id=this.id),[2,this.$dispatch("mutate",{name:t,args:n,multiple:r})]})})},t.$customQuery=function(e){var t=e.name,n=e.filter,r=e.multiple,o=e.bypassCache;return __awaiter(this,void 0,void 0,function(){return __generator(this,function(e){return(n=n||{}).id||(n.id=this.id),[2,this.$dispatch("query",{name:t,filter:n,multiple:r,bypassCache:o})]})})},t.$persist=function(e){return __awaiter(this,void 0,void 0,function(){return __generator(this,function(t){return[2,this.$dispatch("persist",{id:this.id,args:e})]})})},t.$push=function(e){return __awaiter(this,void 0,void 0,function(){return __generator(this,function(t){return[2,this.$dispatch("push",{data:this,args:e})]})})},t.$destroy=function(){return __awaiter(this,void 0,void 0,function(){return __generator(this,function(e){return[2,this.$dispatch("destroy",{id:this.id})]})})},t.$deleteAndDestroy=function(){return __awaiter(this,void 0,void 0,function(){return __generator(this,function(e){switch(e.label){case 0:return[4,this.$delete()];case 1:return e.sent(),[2,this.$destroy()]}})})}},e}(),VuexORMGraphQLPlugin=function(){function e(){}return e.install=function(t,n){return e.instance=new VuexORMGraphQL(t,n),e.instance},e}();export default VuexORMGraphQLPlugin;
//# sourceMappingURL=vuex-orm-graphql.es5.js.map
