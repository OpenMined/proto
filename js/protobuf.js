/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = require("protobufjs/minimal");

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.syft_proto = (function() {

    /**
     * Namespace syft_proto.
     * @exports syft_proto
     * @namespace
     */
    var syft_proto = {};

    syft_proto.execution = (function() {

        /**
         * Namespace execution.
         * @memberof syft_proto
         * @namespace
         */
        var execution = {};

        execution.v1 = (function() {

            /**
             * Namespace v1.
             * @memberof syft_proto.execution
             * @namespace
             */
            var v1 = {};

            v1.CommunicationAction = (function() {

                /**
                 * Properties of a CommunicationAction.
                 * @memberof syft_proto.execution.v1
                 * @interface ICommunicationAction
                 * @property {syft_proto.types.syft.v1.IId|null} [obj_id] CommunicationAction obj_id
                 * @property {syft_proto.types.syft.v1.IId|null} [source] CommunicationAction source
                 * @property {Array.<syft_proto.types.syft.v1.IId>|null} [destinations] CommunicationAction destinations
                 * @property {Object.<string,syft_proto.types.syft.v1.IArg>|null} [kwargs] CommunicationAction kwargs
                 */

                /**
                 * Constructs a new CommunicationAction.
                 * @memberof syft_proto.execution.v1
                 * @classdesc Represents a CommunicationAction.
                 * @implements ICommunicationAction
                 * @constructor
                 * @param {syft_proto.execution.v1.ICommunicationAction=} [properties] Properties to set
                 */
                function CommunicationAction(properties) {
                    this.destinations = [];
                    this.kwargs = {};
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * CommunicationAction obj_id.
                 * @member {syft_proto.types.syft.v1.IId|null|undefined} obj_id
                 * @memberof syft_proto.execution.v1.CommunicationAction
                 * @instance
                 */
                CommunicationAction.prototype.obj_id = null;

                /**
                 * CommunicationAction source.
                 * @member {syft_proto.types.syft.v1.IId|null|undefined} source
                 * @memberof syft_proto.execution.v1.CommunicationAction
                 * @instance
                 */
                CommunicationAction.prototype.source = null;

                /**
                 * CommunicationAction destinations.
                 * @member {Array.<syft_proto.types.syft.v1.IId>} destinations
                 * @memberof syft_proto.execution.v1.CommunicationAction
                 * @instance
                 */
                CommunicationAction.prototype.destinations = $util.emptyArray;

                /**
                 * CommunicationAction kwargs.
                 * @member {Object.<string,syft_proto.types.syft.v1.IArg>} kwargs
                 * @memberof syft_proto.execution.v1.CommunicationAction
                 * @instance
                 */
                CommunicationAction.prototype.kwargs = $util.emptyObject;

                /**
                 * Creates a new CommunicationAction instance using the specified properties.
                 * @function create
                 * @memberof syft_proto.execution.v1.CommunicationAction
                 * @static
                 * @param {syft_proto.execution.v1.ICommunicationAction=} [properties] Properties to set
                 * @returns {syft_proto.execution.v1.CommunicationAction} CommunicationAction instance
                 */
                CommunicationAction.create = function create(properties) {
                    return new CommunicationAction(properties);
                };

                /**
                 * Encodes the specified CommunicationAction message. Does not implicitly {@link syft_proto.execution.v1.CommunicationAction.verify|verify} messages.
                 * @function encode
                 * @memberof syft_proto.execution.v1.CommunicationAction
                 * @static
                 * @param {syft_proto.execution.v1.ICommunicationAction} message CommunicationAction message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                CommunicationAction.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.obj_id != null && message.hasOwnProperty("obj_id"))
                        $root.syft_proto.types.syft.v1.Id.encode(message.obj_id, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                    if (message.source != null && message.hasOwnProperty("source"))
                        $root.syft_proto.types.syft.v1.Id.encode(message.source, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                    if (message.destinations != null && message.destinations.length)
                        for (var i = 0; i < message.destinations.length; ++i)
                            $root.syft_proto.types.syft.v1.Id.encode(message.destinations[i], writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
                    if (message.kwargs != null && message.hasOwnProperty("kwargs"))
                        for (var keys = Object.keys(message.kwargs), i = 0; i < keys.length; ++i) {
                            writer.uint32(/* id 4, wireType 2 =*/34).fork().uint32(/* id 1, wireType 2 =*/10).string(keys[i]);
                            $root.syft_proto.types.syft.v1.Arg.encode(message.kwargs[keys[i]], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim().ldelim();
                        }
                    return writer;
                };

                /**
                 * Encodes the specified CommunicationAction message, length delimited. Does not implicitly {@link syft_proto.execution.v1.CommunicationAction.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof syft_proto.execution.v1.CommunicationAction
                 * @static
                 * @param {syft_proto.execution.v1.ICommunicationAction} message CommunicationAction message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                CommunicationAction.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a CommunicationAction message from the specified reader or buffer.
                 * @function decode
                 * @memberof syft_proto.execution.v1.CommunicationAction
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {syft_proto.execution.v1.CommunicationAction} CommunicationAction
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                CommunicationAction.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.syft_proto.execution.v1.CommunicationAction(), key;
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.obj_id = $root.syft_proto.types.syft.v1.Id.decode(reader, reader.uint32());
                            break;
                        case 2:
                            message.source = $root.syft_proto.types.syft.v1.Id.decode(reader, reader.uint32());
                            break;
                        case 3:
                            if (!(message.destinations && message.destinations.length))
                                message.destinations = [];
                            message.destinations.push($root.syft_proto.types.syft.v1.Id.decode(reader, reader.uint32()));
                            break;
                        case 4:
                            reader.skip().pos++;
                            if (message.kwargs === $util.emptyObject)
                                message.kwargs = {};
                            key = reader.string();
                            reader.pos++;
                            message.kwargs[key] = $root.syft_proto.types.syft.v1.Arg.decode(reader, reader.uint32());
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes a CommunicationAction message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof syft_proto.execution.v1.CommunicationAction
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {syft_proto.execution.v1.CommunicationAction} CommunicationAction
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                CommunicationAction.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a CommunicationAction message.
                 * @function verify
                 * @memberof syft_proto.execution.v1.CommunicationAction
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                CommunicationAction.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.obj_id != null && message.hasOwnProperty("obj_id")) {
                        var error = $root.syft_proto.types.syft.v1.Id.verify(message.obj_id);
                        if (error)
                            return "obj_id." + error;
                    }
                    if (message.source != null && message.hasOwnProperty("source")) {
                        var error = $root.syft_proto.types.syft.v1.Id.verify(message.source);
                        if (error)
                            return "source." + error;
                    }
                    if (message.destinations != null && message.hasOwnProperty("destinations")) {
                        if (!Array.isArray(message.destinations))
                            return "destinations: array expected";
                        for (var i = 0; i < message.destinations.length; ++i) {
                            var error = $root.syft_proto.types.syft.v1.Id.verify(message.destinations[i]);
                            if (error)
                                return "destinations." + error;
                        }
                    }
                    if (message.kwargs != null && message.hasOwnProperty("kwargs")) {
                        if (!$util.isObject(message.kwargs))
                            return "kwargs: object expected";
                        var key = Object.keys(message.kwargs);
                        for (var i = 0; i < key.length; ++i) {
                            var error = $root.syft_proto.types.syft.v1.Arg.verify(message.kwargs[key[i]]);
                            if (error)
                                return "kwargs." + error;
                        }
                    }
                    return null;
                };

                /**
                 * Creates a CommunicationAction message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof syft_proto.execution.v1.CommunicationAction
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {syft_proto.execution.v1.CommunicationAction} CommunicationAction
                 */
                CommunicationAction.fromObject = function fromObject(object) {
                    if (object instanceof $root.syft_proto.execution.v1.CommunicationAction)
                        return object;
                    var message = new $root.syft_proto.execution.v1.CommunicationAction();
                    if (object.obj_id != null) {
                        if (typeof object.obj_id !== "object")
                            throw TypeError(".syft_proto.execution.v1.CommunicationAction.obj_id: object expected");
                        message.obj_id = $root.syft_proto.types.syft.v1.Id.fromObject(object.obj_id);
                    }
                    if (object.source != null) {
                        if (typeof object.source !== "object")
                            throw TypeError(".syft_proto.execution.v1.CommunicationAction.source: object expected");
                        message.source = $root.syft_proto.types.syft.v1.Id.fromObject(object.source);
                    }
                    if (object.destinations) {
                        if (!Array.isArray(object.destinations))
                            throw TypeError(".syft_proto.execution.v1.CommunicationAction.destinations: array expected");
                        message.destinations = [];
                        for (var i = 0; i < object.destinations.length; ++i) {
                            if (typeof object.destinations[i] !== "object")
                                throw TypeError(".syft_proto.execution.v1.CommunicationAction.destinations: object expected");
                            message.destinations[i] = $root.syft_proto.types.syft.v1.Id.fromObject(object.destinations[i]);
                        }
                    }
                    if (object.kwargs) {
                        if (typeof object.kwargs !== "object")
                            throw TypeError(".syft_proto.execution.v1.CommunicationAction.kwargs: object expected");
                        message.kwargs = {};
                        for (var keys = Object.keys(object.kwargs), i = 0; i < keys.length; ++i) {
                            if (typeof object.kwargs[keys[i]] !== "object")
                                throw TypeError(".syft_proto.execution.v1.CommunicationAction.kwargs: object expected");
                            message.kwargs[keys[i]] = $root.syft_proto.types.syft.v1.Arg.fromObject(object.kwargs[keys[i]]);
                        }
                    }
                    return message;
                };

                /**
                 * Creates a plain object from a CommunicationAction message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof syft_proto.execution.v1.CommunicationAction
                 * @static
                 * @param {syft_proto.execution.v1.CommunicationAction} message CommunicationAction
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                CommunicationAction.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.arrays || options.defaults)
                        object.destinations = [];
                    if (options.objects || options.defaults)
                        object.kwargs = {};
                    if (options.defaults) {
                        object.obj_id = null;
                        object.source = null;
                    }
                    if (message.obj_id != null && message.hasOwnProperty("obj_id"))
                        object.obj_id = $root.syft_proto.types.syft.v1.Id.toObject(message.obj_id, options);
                    if (message.source != null && message.hasOwnProperty("source"))
                        object.source = $root.syft_proto.types.syft.v1.Id.toObject(message.source, options);
                    if (message.destinations && message.destinations.length) {
                        object.destinations = [];
                        for (var j = 0; j < message.destinations.length; ++j)
                            object.destinations[j] = $root.syft_proto.types.syft.v1.Id.toObject(message.destinations[j], options);
                    }
                    var keys2;
                    if (message.kwargs && (keys2 = Object.keys(message.kwargs)).length) {
                        object.kwargs = {};
                        for (var j = 0; j < keys2.length; ++j)
                            object.kwargs[keys2[j]] = $root.syft_proto.types.syft.v1.Arg.toObject(message.kwargs[keys2[j]], options);
                    }
                    return object;
                };

                /**
                 * Converts this CommunicationAction to JSON.
                 * @function toJSON
                 * @memberof syft_proto.execution.v1.CommunicationAction
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                CommunicationAction.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                return CommunicationAction;
            })();

            v1.Placeholder = (function() {

                /**
                 * Properties of a Placeholder.
                 * @memberof syft_proto.execution.v1
                 * @interface IPlaceholder
                 * @property {syft_proto.types.syft.v1.IId|null} [id] Placeholder id
                 * @property {Array.<string>|null} [tags] Placeholder tags
                 * @property {string|null} [description] Placeholder description
                 * @property {syft_proto.types.syft.v1.IShape|null} [expected_shape] Placeholder expected_shape
                 */

                /**
                 * Constructs a new Placeholder.
                 * @memberof syft_proto.execution.v1
                 * @classdesc Represents a Placeholder.
                 * @implements IPlaceholder
                 * @constructor
                 * @param {syft_proto.execution.v1.IPlaceholder=} [properties] Properties to set
                 */
                function Placeholder(properties) {
                    this.tags = [];
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * Placeholder id.
                 * @member {syft_proto.types.syft.v1.IId|null|undefined} id
                 * @memberof syft_proto.execution.v1.Placeholder
                 * @instance
                 */
                Placeholder.prototype.id = null;

                /**
                 * Placeholder tags.
                 * @member {Array.<string>} tags
                 * @memberof syft_proto.execution.v1.Placeholder
                 * @instance
                 */
                Placeholder.prototype.tags = $util.emptyArray;

                /**
                 * Placeholder description.
                 * @member {string} description
                 * @memberof syft_proto.execution.v1.Placeholder
                 * @instance
                 */
                Placeholder.prototype.description = "";

                /**
                 * Placeholder expected_shape.
                 * @member {syft_proto.types.syft.v1.IShape|null|undefined} expected_shape
                 * @memberof syft_proto.execution.v1.Placeholder
                 * @instance
                 */
                Placeholder.prototype.expected_shape = null;

                /**
                 * Creates a new Placeholder instance using the specified properties.
                 * @function create
                 * @memberof syft_proto.execution.v1.Placeholder
                 * @static
                 * @param {syft_proto.execution.v1.IPlaceholder=} [properties] Properties to set
                 * @returns {syft_proto.execution.v1.Placeholder} Placeholder instance
                 */
                Placeholder.create = function create(properties) {
                    return new Placeholder(properties);
                };

                /**
                 * Encodes the specified Placeholder message. Does not implicitly {@link syft_proto.execution.v1.Placeholder.verify|verify} messages.
                 * @function encode
                 * @memberof syft_proto.execution.v1.Placeholder
                 * @static
                 * @param {syft_proto.execution.v1.IPlaceholder} message Placeholder message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Placeholder.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.id != null && message.hasOwnProperty("id"))
                        $root.syft_proto.types.syft.v1.Id.encode(message.id, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                    if (message.tags != null && message.tags.length)
                        for (var i = 0; i < message.tags.length; ++i)
                            writer.uint32(/* id 2, wireType 2 =*/18).string(message.tags[i]);
                    if (message.description != null && message.hasOwnProperty("description"))
                        writer.uint32(/* id 3, wireType 2 =*/26).string(message.description);
                    if (message.expected_shape != null && message.hasOwnProperty("expected_shape"))
                        $root.syft_proto.types.syft.v1.Shape.encode(message.expected_shape, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
                    return writer;
                };

                /**
                 * Encodes the specified Placeholder message, length delimited. Does not implicitly {@link syft_proto.execution.v1.Placeholder.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof syft_proto.execution.v1.Placeholder
                 * @static
                 * @param {syft_proto.execution.v1.IPlaceholder} message Placeholder message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Placeholder.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a Placeholder message from the specified reader or buffer.
                 * @function decode
                 * @memberof syft_proto.execution.v1.Placeholder
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {syft_proto.execution.v1.Placeholder} Placeholder
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Placeholder.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.syft_proto.execution.v1.Placeholder();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.id = $root.syft_proto.types.syft.v1.Id.decode(reader, reader.uint32());
                            break;
                        case 2:
                            if (!(message.tags && message.tags.length))
                                message.tags = [];
                            message.tags.push(reader.string());
                            break;
                        case 3:
                            message.description = reader.string();
                            break;
                        case 4:
                            message.expected_shape = $root.syft_proto.types.syft.v1.Shape.decode(reader, reader.uint32());
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes a Placeholder message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof syft_proto.execution.v1.Placeholder
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {syft_proto.execution.v1.Placeholder} Placeholder
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Placeholder.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a Placeholder message.
                 * @function verify
                 * @memberof syft_proto.execution.v1.Placeholder
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                Placeholder.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.id != null && message.hasOwnProperty("id")) {
                        var error = $root.syft_proto.types.syft.v1.Id.verify(message.id);
                        if (error)
                            return "id." + error;
                    }
                    if (message.tags != null && message.hasOwnProperty("tags")) {
                        if (!Array.isArray(message.tags))
                            return "tags: array expected";
                        for (var i = 0; i < message.tags.length; ++i)
                            if (!$util.isString(message.tags[i]))
                                return "tags: string[] expected";
                    }
                    if (message.description != null && message.hasOwnProperty("description"))
                        if (!$util.isString(message.description))
                            return "description: string expected";
                    if (message.expected_shape != null && message.hasOwnProperty("expected_shape")) {
                        var error = $root.syft_proto.types.syft.v1.Shape.verify(message.expected_shape);
                        if (error)
                            return "expected_shape." + error;
                    }
                    return null;
                };

                /**
                 * Creates a Placeholder message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof syft_proto.execution.v1.Placeholder
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {syft_proto.execution.v1.Placeholder} Placeholder
                 */
                Placeholder.fromObject = function fromObject(object) {
                    if (object instanceof $root.syft_proto.execution.v1.Placeholder)
                        return object;
                    var message = new $root.syft_proto.execution.v1.Placeholder();
                    if (object.id != null) {
                        if (typeof object.id !== "object")
                            throw TypeError(".syft_proto.execution.v1.Placeholder.id: object expected");
                        message.id = $root.syft_proto.types.syft.v1.Id.fromObject(object.id);
                    }
                    if (object.tags) {
                        if (!Array.isArray(object.tags))
                            throw TypeError(".syft_proto.execution.v1.Placeholder.tags: array expected");
                        message.tags = [];
                        for (var i = 0; i < object.tags.length; ++i)
                            message.tags[i] = String(object.tags[i]);
                    }
                    if (object.description != null)
                        message.description = String(object.description);
                    if (object.expected_shape != null) {
                        if (typeof object.expected_shape !== "object")
                            throw TypeError(".syft_proto.execution.v1.Placeholder.expected_shape: object expected");
                        message.expected_shape = $root.syft_proto.types.syft.v1.Shape.fromObject(object.expected_shape);
                    }
                    return message;
                };

                /**
                 * Creates a plain object from a Placeholder message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof syft_proto.execution.v1.Placeholder
                 * @static
                 * @param {syft_proto.execution.v1.Placeholder} message Placeholder
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                Placeholder.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.arrays || options.defaults)
                        object.tags = [];
                    if (options.defaults) {
                        object.id = null;
                        object.description = "";
                        object.expected_shape = null;
                    }
                    if (message.id != null && message.hasOwnProperty("id"))
                        object.id = $root.syft_proto.types.syft.v1.Id.toObject(message.id, options);
                    if (message.tags && message.tags.length) {
                        object.tags = [];
                        for (var j = 0; j < message.tags.length; ++j)
                            object.tags[j] = message.tags[j];
                    }
                    if (message.description != null && message.hasOwnProperty("description"))
                        object.description = message.description;
                    if (message.expected_shape != null && message.hasOwnProperty("expected_shape"))
                        object.expected_shape = $root.syft_proto.types.syft.v1.Shape.toObject(message.expected_shape, options);
                    return object;
                };

                /**
                 * Converts this Placeholder to JSON.
                 * @function toJSON
                 * @memberof syft_proto.execution.v1.Placeholder
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                Placeholder.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                return Placeholder;
            })();

            v1.PlaceholderId = (function() {

                /**
                 * Properties of a PlaceholderId.
                 * @memberof syft_proto.execution.v1
                 * @interface IPlaceholderId
                 * @property {syft_proto.types.syft.v1.IId|null} [id] PlaceholderId id
                 */

                /**
                 * Constructs a new PlaceholderId.
                 * @memberof syft_proto.execution.v1
                 * @classdesc Represents a PlaceholderId.
                 * @implements IPlaceholderId
                 * @constructor
                 * @param {syft_proto.execution.v1.IPlaceholderId=} [properties] Properties to set
                 */
                function PlaceholderId(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * PlaceholderId id.
                 * @member {syft_proto.types.syft.v1.IId|null|undefined} id
                 * @memberof syft_proto.execution.v1.PlaceholderId
                 * @instance
                 */
                PlaceholderId.prototype.id = null;

                /**
                 * Creates a new PlaceholderId instance using the specified properties.
                 * @function create
                 * @memberof syft_proto.execution.v1.PlaceholderId
                 * @static
                 * @param {syft_proto.execution.v1.IPlaceholderId=} [properties] Properties to set
                 * @returns {syft_proto.execution.v1.PlaceholderId} PlaceholderId instance
                 */
                PlaceholderId.create = function create(properties) {
                    return new PlaceholderId(properties);
                };

                /**
                 * Encodes the specified PlaceholderId message. Does not implicitly {@link syft_proto.execution.v1.PlaceholderId.verify|verify} messages.
                 * @function encode
                 * @memberof syft_proto.execution.v1.PlaceholderId
                 * @static
                 * @param {syft_proto.execution.v1.IPlaceholderId} message PlaceholderId message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                PlaceholderId.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.id != null && message.hasOwnProperty("id"))
                        $root.syft_proto.types.syft.v1.Id.encode(message.id, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                    return writer;
                };

                /**
                 * Encodes the specified PlaceholderId message, length delimited. Does not implicitly {@link syft_proto.execution.v1.PlaceholderId.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof syft_proto.execution.v1.PlaceholderId
                 * @static
                 * @param {syft_proto.execution.v1.IPlaceholderId} message PlaceholderId message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                PlaceholderId.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a PlaceholderId message from the specified reader or buffer.
                 * @function decode
                 * @memberof syft_proto.execution.v1.PlaceholderId
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {syft_proto.execution.v1.PlaceholderId} PlaceholderId
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                PlaceholderId.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.syft_proto.execution.v1.PlaceholderId();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.id = $root.syft_proto.types.syft.v1.Id.decode(reader, reader.uint32());
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes a PlaceholderId message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof syft_proto.execution.v1.PlaceholderId
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {syft_proto.execution.v1.PlaceholderId} PlaceholderId
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                PlaceholderId.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a PlaceholderId message.
                 * @function verify
                 * @memberof syft_proto.execution.v1.PlaceholderId
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                PlaceholderId.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.id != null && message.hasOwnProperty("id")) {
                        var error = $root.syft_proto.types.syft.v1.Id.verify(message.id);
                        if (error)
                            return "id." + error;
                    }
                    return null;
                };

                /**
                 * Creates a PlaceholderId message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof syft_proto.execution.v1.PlaceholderId
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {syft_proto.execution.v1.PlaceholderId} PlaceholderId
                 */
                PlaceholderId.fromObject = function fromObject(object) {
                    if (object instanceof $root.syft_proto.execution.v1.PlaceholderId)
                        return object;
                    var message = new $root.syft_proto.execution.v1.PlaceholderId();
                    if (object.id != null) {
                        if (typeof object.id !== "object")
                            throw TypeError(".syft_proto.execution.v1.PlaceholderId.id: object expected");
                        message.id = $root.syft_proto.types.syft.v1.Id.fromObject(object.id);
                    }
                    return message;
                };

                /**
                 * Creates a plain object from a PlaceholderId message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof syft_proto.execution.v1.PlaceholderId
                 * @static
                 * @param {syft_proto.execution.v1.PlaceholderId} message PlaceholderId
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                PlaceholderId.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults)
                        object.id = null;
                    if (message.id != null && message.hasOwnProperty("id"))
                        object.id = $root.syft_proto.types.syft.v1.Id.toObject(message.id, options);
                    return object;
                };

                /**
                 * Converts this PlaceholderId to JSON.
                 * @function toJSON
                 * @memberof syft_proto.execution.v1.PlaceholderId
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                PlaceholderId.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                return PlaceholderId;
            })();

            v1.ComputationAction = (function() {

                /**
                 * Properties of a ComputationAction.
                 * @memberof syft_proto.execution.v1
                 * @interface IComputationAction
                 * @property {string|null} [command] ComputationAction command
                 * @property {syft_proto.types.syft.v1.IId|null} [target_id] ComputationAction target_id
                 * @property {syft_proto.generic.pointers.v1.IPointerTensor|null} [target_pointer] ComputationAction target_pointer
                 * @property {syft_proto.execution.v1.IPlaceholderId|null} [target_placeholder_id] ComputationAction target_placeholder_id
                 * @property {syft_proto.types.torch.v1.ITorchTensor|null} [target_tensor] ComputationAction target_tensor
                 * @property {Array.<syft_proto.types.syft.v1.IArg>|null} [args] ComputationAction args
                 * @property {Object.<string,syft_proto.types.syft.v1.IArg>|null} [kwargs] ComputationAction kwargs
                 * @property {Array.<syft_proto.types.syft.v1.IId>|null} [return_ids] ComputationAction return_ids
                 * @property {Array.<syft_proto.execution.v1.IPlaceholderId>|null} [return_placeholder_ids] ComputationAction return_placeholder_ids
                 */

                /**
                 * Constructs a new ComputationAction.
                 * @memberof syft_proto.execution.v1
                 * @classdesc Represents a ComputationAction.
                 * @implements IComputationAction
                 * @constructor
                 * @param {syft_proto.execution.v1.IComputationAction=} [properties] Properties to set
                 */
                function ComputationAction(properties) {
                    this.args = [];
                    this.kwargs = {};
                    this.return_ids = [];
                    this.return_placeholder_ids = [];
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * ComputationAction command.
                 * @member {string} command
                 * @memberof syft_proto.execution.v1.ComputationAction
                 * @instance
                 */
                ComputationAction.prototype.command = "";

                /**
                 * ComputationAction target_id.
                 * @member {syft_proto.types.syft.v1.IId|null|undefined} target_id
                 * @memberof syft_proto.execution.v1.ComputationAction
                 * @instance
                 */
                ComputationAction.prototype.target_id = null;

                /**
                 * ComputationAction target_pointer.
                 * @member {syft_proto.generic.pointers.v1.IPointerTensor|null|undefined} target_pointer
                 * @memberof syft_proto.execution.v1.ComputationAction
                 * @instance
                 */
                ComputationAction.prototype.target_pointer = null;

                /**
                 * ComputationAction target_placeholder_id.
                 * @member {syft_proto.execution.v1.IPlaceholderId|null|undefined} target_placeholder_id
                 * @memberof syft_proto.execution.v1.ComputationAction
                 * @instance
                 */
                ComputationAction.prototype.target_placeholder_id = null;

                /**
                 * ComputationAction target_tensor.
                 * @member {syft_proto.types.torch.v1.ITorchTensor|null|undefined} target_tensor
                 * @memberof syft_proto.execution.v1.ComputationAction
                 * @instance
                 */
                ComputationAction.prototype.target_tensor = null;

                /**
                 * ComputationAction args.
                 * @member {Array.<syft_proto.types.syft.v1.IArg>} args
                 * @memberof syft_proto.execution.v1.ComputationAction
                 * @instance
                 */
                ComputationAction.prototype.args = $util.emptyArray;

                /**
                 * ComputationAction kwargs.
                 * @member {Object.<string,syft_proto.types.syft.v1.IArg>} kwargs
                 * @memberof syft_proto.execution.v1.ComputationAction
                 * @instance
                 */
                ComputationAction.prototype.kwargs = $util.emptyObject;

                /**
                 * ComputationAction return_ids.
                 * @member {Array.<syft_proto.types.syft.v1.IId>} return_ids
                 * @memberof syft_proto.execution.v1.ComputationAction
                 * @instance
                 */
                ComputationAction.prototype.return_ids = $util.emptyArray;

                /**
                 * ComputationAction return_placeholder_ids.
                 * @member {Array.<syft_proto.execution.v1.IPlaceholderId>} return_placeholder_ids
                 * @memberof syft_proto.execution.v1.ComputationAction
                 * @instance
                 */
                ComputationAction.prototype.return_placeholder_ids = $util.emptyArray;

                // OneOf field names bound to virtual getters and setters
                var $oneOfFields;

                /**
                 * ComputationAction target.
                 * @member {"target_id"|"target_pointer"|"target_placeholder_id"|"target_tensor"|undefined} target
                 * @memberof syft_proto.execution.v1.ComputationAction
                 * @instance
                 */
                Object.defineProperty(ComputationAction.prototype, "target", {
                    get: $util.oneOfGetter($oneOfFields = ["target_id", "target_pointer", "target_placeholder_id", "target_tensor"]),
                    set: $util.oneOfSetter($oneOfFields)
                });

                /**
                 * Creates a new ComputationAction instance using the specified properties.
                 * @function create
                 * @memberof syft_proto.execution.v1.ComputationAction
                 * @static
                 * @param {syft_proto.execution.v1.IComputationAction=} [properties] Properties to set
                 * @returns {syft_proto.execution.v1.ComputationAction} ComputationAction instance
                 */
                ComputationAction.create = function create(properties) {
                    return new ComputationAction(properties);
                };

                /**
                 * Encodes the specified ComputationAction message. Does not implicitly {@link syft_proto.execution.v1.ComputationAction.verify|verify} messages.
                 * @function encode
                 * @memberof syft_proto.execution.v1.ComputationAction
                 * @static
                 * @param {syft_proto.execution.v1.IComputationAction} message ComputationAction message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                ComputationAction.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.command != null && message.hasOwnProperty("command"))
                        writer.uint32(/* id 1, wireType 2 =*/10).string(message.command);
                    if (message.target_pointer != null && message.hasOwnProperty("target_pointer"))
                        $root.syft_proto.generic.pointers.v1.PointerTensor.encode(message.target_pointer, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                    if (message.target_placeholder_id != null && message.hasOwnProperty("target_placeholder_id"))
                        $root.syft_proto.execution.v1.PlaceholderId.encode(message.target_placeholder_id, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
                    if (message.target_tensor != null && message.hasOwnProperty("target_tensor"))
                        $root.syft_proto.types.torch.v1.TorchTensor.encode(message.target_tensor, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
                    if (message.args != null && message.args.length)
                        for (var i = 0; i < message.args.length; ++i)
                            $root.syft_proto.types.syft.v1.Arg.encode(message.args[i], writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
                    if (message.kwargs != null && message.hasOwnProperty("kwargs"))
                        for (var keys = Object.keys(message.kwargs), i = 0; i < keys.length; ++i) {
                            writer.uint32(/* id 6, wireType 2 =*/50).fork().uint32(/* id 1, wireType 2 =*/10).string(keys[i]);
                            $root.syft_proto.types.syft.v1.Arg.encode(message.kwargs[keys[i]], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim().ldelim();
                        }
                    if (message.return_ids != null && message.return_ids.length)
                        for (var i = 0; i < message.return_ids.length; ++i)
                            $root.syft_proto.types.syft.v1.Id.encode(message.return_ids[i], writer.uint32(/* id 7, wireType 2 =*/58).fork()).ldelim();
                    if (message.return_placeholder_ids != null && message.return_placeholder_ids.length)
                        for (var i = 0; i < message.return_placeholder_ids.length; ++i)
                            $root.syft_proto.execution.v1.PlaceholderId.encode(message.return_placeholder_ids[i], writer.uint32(/* id 8, wireType 2 =*/66).fork()).ldelim();
                    if (message.target_id != null && message.hasOwnProperty("target_id"))
                        $root.syft_proto.types.syft.v1.Id.encode(message.target_id, writer.uint32(/* id 9, wireType 2 =*/74).fork()).ldelim();
                    return writer;
                };

                /**
                 * Encodes the specified ComputationAction message, length delimited. Does not implicitly {@link syft_proto.execution.v1.ComputationAction.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof syft_proto.execution.v1.ComputationAction
                 * @static
                 * @param {syft_proto.execution.v1.IComputationAction} message ComputationAction message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                ComputationAction.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a ComputationAction message from the specified reader or buffer.
                 * @function decode
                 * @memberof syft_proto.execution.v1.ComputationAction
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {syft_proto.execution.v1.ComputationAction} ComputationAction
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                ComputationAction.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.syft_proto.execution.v1.ComputationAction(), key;
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.command = reader.string();
                            break;
                        case 9:
                            message.target_id = $root.syft_proto.types.syft.v1.Id.decode(reader, reader.uint32());
                            break;
                        case 2:
                            message.target_pointer = $root.syft_proto.generic.pointers.v1.PointerTensor.decode(reader, reader.uint32());
                            break;
                        case 3:
                            message.target_placeholder_id = $root.syft_proto.execution.v1.PlaceholderId.decode(reader, reader.uint32());
                            break;
                        case 4:
                            message.target_tensor = $root.syft_proto.types.torch.v1.TorchTensor.decode(reader, reader.uint32());
                            break;
                        case 5:
                            if (!(message.args && message.args.length))
                                message.args = [];
                            message.args.push($root.syft_proto.types.syft.v1.Arg.decode(reader, reader.uint32()));
                            break;
                        case 6:
                            reader.skip().pos++;
                            if (message.kwargs === $util.emptyObject)
                                message.kwargs = {};
                            key = reader.string();
                            reader.pos++;
                            message.kwargs[key] = $root.syft_proto.types.syft.v1.Arg.decode(reader, reader.uint32());
                            break;
                        case 7:
                            if (!(message.return_ids && message.return_ids.length))
                                message.return_ids = [];
                            message.return_ids.push($root.syft_proto.types.syft.v1.Id.decode(reader, reader.uint32()));
                            break;
                        case 8:
                            if (!(message.return_placeholder_ids && message.return_placeholder_ids.length))
                                message.return_placeholder_ids = [];
                            message.return_placeholder_ids.push($root.syft_proto.execution.v1.PlaceholderId.decode(reader, reader.uint32()));
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes a ComputationAction message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof syft_proto.execution.v1.ComputationAction
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {syft_proto.execution.v1.ComputationAction} ComputationAction
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                ComputationAction.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a ComputationAction message.
                 * @function verify
                 * @memberof syft_proto.execution.v1.ComputationAction
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                ComputationAction.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    var properties = {};
                    if (message.command != null && message.hasOwnProperty("command"))
                        if (!$util.isString(message.command))
                            return "command: string expected";
                    if (message.target_id != null && message.hasOwnProperty("target_id")) {
                        properties.target = 1;
                        {
                            var error = $root.syft_proto.types.syft.v1.Id.verify(message.target_id);
                            if (error)
                                return "target_id." + error;
                        }
                    }
                    if (message.target_pointer != null && message.hasOwnProperty("target_pointer")) {
                        if (properties.target === 1)
                            return "target: multiple values";
                        properties.target = 1;
                        {
                            var error = $root.syft_proto.generic.pointers.v1.PointerTensor.verify(message.target_pointer);
                            if (error)
                                return "target_pointer." + error;
                        }
                    }
                    if (message.target_placeholder_id != null && message.hasOwnProperty("target_placeholder_id")) {
                        if (properties.target === 1)
                            return "target: multiple values";
                        properties.target = 1;
                        {
                            var error = $root.syft_proto.execution.v1.PlaceholderId.verify(message.target_placeholder_id);
                            if (error)
                                return "target_placeholder_id." + error;
                        }
                    }
                    if (message.target_tensor != null && message.hasOwnProperty("target_tensor")) {
                        if (properties.target === 1)
                            return "target: multiple values";
                        properties.target = 1;
                        {
                            var error = $root.syft_proto.types.torch.v1.TorchTensor.verify(message.target_tensor);
                            if (error)
                                return "target_tensor." + error;
                        }
                    }
                    if (message.args != null && message.hasOwnProperty("args")) {
                        if (!Array.isArray(message.args))
                            return "args: array expected";
                        for (var i = 0; i < message.args.length; ++i) {
                            var error = $root.syft_proto.types.syft.v1.Arg.verify(message.args[i]);
                            if (error)
                                return "args." + error;
                        }
                    }
                    if (message.kwargs != null && message.hasOwnProperty("kwargs")) {
                        if (!$util.isObject(message.kwargs))
                            return "kwargs: object expected";
                        var key = Object.keys(message.kwargs);
                        for (var i = 0; i < key.length; ++i) {
                            var error = $root.syft_proto.types.syft.v1.Arg.verify(message.kwargs[key[i]]);
                            if (error)
                                return "kwargs." + error;
                        }
                    }
                    if (message.return_ids != null && message.hasOwnProperty("return_ids")) {
                        if (!Array.isArray(message.return_ids))
                            return "return_ids: array expected";
                        for (var i = 0; i < message.return_ids.length; ++i) {
                            var error = $root.syft_proto.types.syft.v1.Id.verify(message.return_ids[i]);
                            if (error)
                                return "return_ids." + error;
                        }
                    }
                    if (message.return_placeholder_ids != null && message.hasOwnProperty("return_placeholder_ids")) {
                        if (!Array.isArray(message.return_placeholder_ids))
                            return "return_placeholder_ids: array expected";
                        for (var i = 0; i < message.return_placeholder_ids.length; ++i) {
                            var error = $root.syft_proto.execution.v1.PlaceholderId.verify(message.return_placeholder_ids[i]);
                            if (error)
                                return "return_placeholder_ids." + error;
                        }
                    }
                    return null;
                };

                /**
                 * Creates a ComputationAction message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof syft_proto.execution.v1.ComputationAction
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {syft_proto.execution.v1.ComputationAction} ComputationAction
                 */
                ComputationAction.fromObject = function fromObject(object) {
                    if (object instanceof $root.syft_proto.execution.v1.ComputationAction)
                        return object;
                    var message = new $root.syft_proto.execution.v1.ComputationAction();
                    if (object.command != null)
                        message.command = String(object.command);
                    if (object.target_id != null) {
                        if (typeof object.target_id !== "object")
                            throw TypeError(".syft_proto.execution.v1.ComputationAction.target_id: object expected");
                        message.target_id = $root.syft_proto.types.syft.v1.Id.fromObject(object.target_id);
                    }
                    if (object.target_pointer != null) {
                        if (typeof object.target_pointer !== "object")
                            throw TypeError(".syft_proto.execution.v1.ComputationAction.target_pointer: object expected");
                        message.target_pointer = $root.syft_proto.generic.pointers.v1.PointerTensor.fromObject(object.target_pointer);
                    }
                    if (object.target_placeholder_id != null) {
                        if (typeof object.target_placeholder_id !== "object")
                            throw TypeError(".syft_proto.execution.v1.ComputationAction.target_placeholder_id: object expected");
                        message.target_placeholder_id = $root.syft_proto.execution.v1.PlaceholderId.fromObject(object.target_placeholder_id);
                    }
                    if (object.target_tensor != null) {
                        if (typeof object.target_tensor !== "object")
                            throw TypeError(".syft_proto.execution.v1.ComputationAction.target_tensor: object expected");
                        message.target_tensor = $root.syft_proto.types.torch.v1.TorchTensor.fromObject(object.target_tensor);
                    }
                    if (object.args) {
                        if (!Array.isArray(object.args))
                            throw TypeError(".syft_proto.execution.v1.ComputationAction.args: array expected");
                        message.args = [];
                        for (var i = 0; i < object.args.length; ++i) {
                            if (typeof object.args[i] !== "object")
                                throw TypeError(".syft_proto.execution.v1.ComputationAction.args: object expected");
                            message.args[i] = $root.syft_proto.types.syft.v1.Arg.fromObject(object.args[i]);
                        }
                    }
                    if (object.kwargs) {
                        if (typeof object.kwargs !== "object")
                            throw TypeError(".syft_proto.execution.v1.ComputationAction.kwargs: object expected");
                        message.kwargs = {};
                        for (var keys = Object.keys(object.kwargs), i = 0; i < keys.length; ++i) {
                            if (typeof object.kwargs[keys[i]] !== "object")
                                throw TypeError(".syft_proto.execution.v1.ComputationAction.kwargs: object expected");
                            message.kwargs[keys[i]] = $root.syft_proto.types.syft.v1.Arg.fromObject(object.kwargs[keys[i]]);
                        }
                    }
                    if (object.return_ids) {
                        if (!Array.isArray(object.return_ids))
                            throw TypeError(".syft_proto.execution.v1.ComputationAction.return_ids: array expected");
                        message.return_ids = [];
                        for (var i = 0; i < object.return_ids.length; ++i) {
                            if (typeof object.return_ids[i] !== "object")
                                throw TypeError(".syft_proto.execution.v1.ComputationAction.return_ids: object expected");
                            message.return_ids[i] = $root.syft_proto.types.syft.v1.Id.fromObject(object.return_ids[i]);
                        }
                    }
                    if (object.return_placeholder_ids) {
                        if (!Array.isArray(object.return_placeholder_ids))
                            throw TypeError(".syft_proto.execution.v1.ComputationAction.return_placeholder_ids: array expected");
                        message.return_placeholder_ids = [];
                        for (var i = 0; i < object.return_placeholder_ids.length; ++i) {
                            if (typeof object.return_placeholder_ids[i] !== "object")
                                throw TypeError(".syft_proto.execution.v1.ComputationAction.return_placeholder_ids: object expected");
                            message.return_placeholder_ids[i] = $root.syft_proto.execution.v1.PlaceholderId.fromObject(object.return_placeholder_ids[i]);
                        }
                    }
                    return message;
                };

                /**
                 * Creates a plain object from a ComputationAction message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof syft_proto.execution.v1.ComputationAction
                 * @static
                 * @param {syft_proto.execution.v1.ComputationAction} message ComputationAction
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                ComputationAction.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.arrays || options.defaults) {
                        object.args = [];
                        object.return_ids = [];
                        object.return_placeholder_ids = [];
                    }
                    if (options.objects || options.defaults)
                        object.kwargs = {};
                    if (options.defaults)
                        object.command = "";
                    if (message.command != null && message.hasOwnProperty("command"))
                        object.command = message.command;
                    if (message.target_pointer != null && message.hasOwnProperty("target_pointer")) {
                        object.target_pointer = $root.syft_proto.generic.pointers.v1.PointerTensor.toObject(message.target_pointer, options);
                        if (options.oneofs)
                            object.target = "target_pointer";
                    }
                    if (message.target_placeholder_id != null && message.hasOwnProperty("target_placeholder_id")) {
                        object.target_placeholder_id = $root.syft_proto.execution.v1.PlaceholderId.toObject(message.target_placeholder_id, options);
                        if (options.oneofs)
                            object.target = "target_placeholder_id";
                    }
                    if (message.target_tensor != null && message.hasOwnProperty("target_tensor")) {
                        object.target_tensor = $root.syft_proto.types.torch.v1.TorchTensor.toObject(message.target_tensor, options);
                        if (options.oneofs)
                            object.target = "target_tensor";
                    }
                    if (message.args && message.args.length) {
                        object.args = [];
                        for (var j = 0; j < message.args.length; ++j)
                            object.args[j] = $root.syft_proto.types.syft.v1.Arg.toObject(message.args[j], options);
                    }
                    var keys2;
                    if (message.kwargs && (keys2 = Object.keys(message.kwargs)).length) {
                        object.kwargs = {};
                        for (var j = 0; j < keys2.length; ++j)
                            object.kwargs[keys2[j]] = $root.syft_proto.types.syft.v1.Arg.toObject(message.kwargs[keys2[j]], options);
                    }
                    if (message.return_ids && message.return_ids.length) {
                        object.return_ids = [];
                        for (var j = 0; j < message.return_ids.length; ++j)
                            object.return_ids[j] = $root.syft_proto.types.syft.v1.Id.toObject(message.return_ids[j], options);
                    }
                    if (message.return_placeholder_ids && message.return_placeholder_ids.length) {
                        object.return_placeholder_ids = [];
                        for (var j = 0; j < message.return_placeholder_ids.length; ++j)
                            object.return_placeholder_ids[j] = $root.syft_proto.execution.v1.PlaceholderId.toObject(message.return_placeholder_ids[j], options);
                    }
                    if (message.target_id != null && message.hasOwnProperty("target_id")) {
                        object.target_id = $root.syft_proto.types.syft.v1.Id.toObject(message.target_id, options);
                        if (options.oneofs)
                            object.target = "target_id";
                    }
                    return object;
                };

                /**
                 * Converts this ComputationAction to JSON.
                 * @function toJSON
                 * @memberof syft_proto.execution.v1.ComputationAction
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                ComputationAction.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                return ComputationAction;
            })();

            v1.Plan = (function() {

                /**
                 * Properties of a Plan.
                 * @memberof syft_proto.execution.v1
                 * @interface IPlan
                 * @property {syft_proto.types.syft.v1.IId|null} [id] Plan id
                 * @property {syft_proto.execution.v1.IRole|null} [role] Plan role
                 * @property {boolean|null} [include_state] Plan include_state
                 * @property {boolean|null} [is_built] Plan is_built
                 * @property {string|null} [name] Plan name
                 * @property {Array.<string>|null} [tags] Plan tags
                 * @property {string|null} [description] Plan description
                 * @property {Uint8Array|null} [torchscript] Plan torchscript
                 */

                /**
                 * Constructs a new Plan.
                 * @memberof syft_proto.execution.v1
                 * @classdesc Represents a Plan.
                 * @implements IPlan
                 * @constructor
                 * @param {syft_proto.execution.v1.IPlan=} [properties] Properties to set
                 */
                function Plan(properties) {
                    this.tags = [];
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * Plan id.
                 * @member {syft_proto.types.syft.v1.IId|null|undefined} id
                 * @memberof syft_proto.execution.v1.Plan
                 * @instance
                 */
                Plan.prototype.id = null;

                /**
                 * Plan role.
                 * @member {syft_proto.execution.v1.IRole|null|undefined} role
                 * @memberof syft_proto.execution.v1.Plan
                 * @instance
                 */
                Plan.prototype.role = null;

                /**
                 * Plan include_state.
                 * @member {boolean} include_state
                 * @memberof syft_proto.execution.v1.Plan
                 * @instance
                 */
                Plan.prototype.include_state = false;

                /**
                 * Plan is_built.
                 * @member {boolean} is_built
                 * @memberof syft_proto.execution.v1.Plan
                 * @instance
                 */
                Plan.prototype.is_built = false;

                /**
                 * Plan name.
                 * @member {string} name
                 * @memberof syft_proto.execution.v1.Plan
                 * @instance
                 */
                Plan.prototype.name = "";

                /**
                 * Plan tags.
                 * @member {Array.<string>} tags
                 * @memberof syft_proto.execution.v1.Plan
                 * @instance
                 */
                Plan.prototype.tags = $util.emptyArray;

                /**
                 * Plan description.
                 * @member {string} description
                 * @memberof syft_proto.execution.v1.Plan
                 * @instance
                 */
                Plan.prototype.description = "";

                /**
                 * Plan torchscript.
                 * @member {Uint8Array} torchscript
                 * @memberof syft_proto.execution.v1.Plan
                 * @instance
                 */
                Plan.prototype.torchscript = $util.newBuffer([]);

                /**
                 * Creates a new Plan instance using the specified properties.
                 * @function create
                 * @memberof syft_proto.execution.v1.Plan
                 * @static
                 * @param {syft_proto.execution.v1.IPlan=} [properties] Properties to set
                 * @returns {syft_proto.execution.v1.Plan} Plan instance
                 */
                Plan.create = function create(properties) {
                    return new Plan(properties);
                };

                /**
                 * Encodes the specified Plan message. Does not implicitly {@link syft_proto.execution.v1.Plan.verify|verify} messages.
                 * @function encode
                 * @memberof syft_proto.execution.v1.Plan
                 * @static
                 * @param {syft_proto.execution.v1.IPlan} message Plan message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Plan.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.id != null && message.hasOwnProperty("id"))
                        $root.syft_proto.types.syft.v1.Id.encode(message.id, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                    if (message.role != null && message.hasOwnProperty("role"))
                        $root.syft_proto.execution.v1.Role.encode(message.role, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                    if (message.include_state != null && message.hasOwnProperty("include_state"))
                        writer.uint32(/* id 3, wireType 0 =*/24).bool(message.include_state);
                    if (message.is_built != null && message.hasOwnProperty("is_built"))
                        writer.uint32(/* id 4, wireType 0 =*/32).bool(message.is_built);
                    if (message.name != null && message.hasOwnProperty("name"))
                        writer.uint32(/* id 5, wireType 2 =*/42).string(message.name);
                    if (message.tags != null && message.tags.length)
                        for (var i = 0; i < message.tags.length; ++i)
                            writer.uint32(/* id 6, wireType 2 =*/50).string(message.tags[i]);
                    if (message.description != null && message.hasOwnProperty("description"))
                        writer.uint32(/* id 7, wireType 2 =*/58).string(message.description);
                    if (message.torchscript != null && message.hasOwnProperty("torchscript"))
                        writer.uint32(/* id 8, wireType 2 =*/66).bytes(message.torchscript);
                    return writer;
                };

                /**
                 * Encodes the specified Plan message, length delimited. Does not implicitly {@link syft_proto.execution.v1.Plan.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof syft_proto.execution.v1.Plan
                 * @static
                 * @param {syft_proto.execution.v1.IPlan} message Plan message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Plan.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a Plan message from the specified reader or buffer.
                 * @function decode
                 * @memberof syft_proto.execution.v1.Plan
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {syft_proto.execution.v1.Plan} Plan
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Plan.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.syft_proto.execution.v1.Plan();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.id = $root.syft_proto.types.syft.v1.Id.decode(reader, reader.uint32());
                            break;
                        case 2:
                            message.role = $root.syft_proto.execution.v1.Role.decode(reader, reader.uint32());
                            break;
                        case 3:
                            message.include_state = reader.bool();
                            break;
                        case 4:
                            message.is_built = reader.bool();
                            break;
                        case 5:
                            message.name = reader.string();
                            break;
                        case 6:
                            if (!(message.tags && message.tags.length))
                                message.tags = [];
                            message.tags.push(reader.string());
                            break;
                        case 7:
                            message.description = reader.string();
                            break;
                        case 8:
                            message.torchscript = reader.bytes();
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes a Plan message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof syft_proto.execution.v1.Plan
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {syft_proto.execution.v1.Plan} Plan
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Plan.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a Plan message.
                 * @function verify
                 * @memberof syft_proto.execution.v1.Plan
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                Plan.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.id != null && message.hasOwnProperty("id")) {
                        var error = $root.syft_proto.types.syft.v1.Id.verify(message.id);
                        if (error)
                            return "id." + error;
                    }
                    if (message.role != null && message.hasOwnProperty("role")) {
                        var error = $root.syft_proto.execution.v1.Role.verify(message.role);
                        if (error)
                            return "role." + error;
                    }
                    if (message.include_state != null && message.hasOwnProperty("include_state"))
                        if (typeof message.include_state !== "boolean")
                            return "include_state: boolean expected";
                    if (message.is_built != null && message.hasOwnProperty("is_built"))
                        if (typeof message.is_built !== "boolean")
                            return "is_built: boolean expected";
                    if (message.name != null && message.hasOwnProperty("name"))
                        if (!$util.isString(message.name))
                            return "name: string expected";
                    if (message.tags != null && message.hasOwnProperty("tags")) {
                        if (!Array.isArray(message.tags))
                            return "tags: array expected";
                        for (var i = 0; i < message.tags.length; ++i)
                            if (!$util.isString(message.tags[i]))
                                return "tags: string[] expected";
                    }
                    if (message.description != null && message.hasOwnProperty("description"))
                        if (!$util.isString(message.description))
                            return "description: string expected";
                    if (message.torchscript != null && message.hasOwnProperty("torchscript"))
                        if (!(message.torchscript && typeof message.torchscript.length === "number" || $util.isString(message.torchscript)))
                            return "torchscript: buffer expected";
                    return null;
                };

                /**
                 * Creates a Plan message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof syft_proto.execution.v1.Plan
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {syft_proto.execution.v1.Plan} Plan
                 */
                Plan.fromObject = function fromObject(object) {
                    if (object instanceof $root.syft_proto.execution.v1.Plan)
                        return object;
                    var message = new $root.syft_proto.execution.v1.Plan();
                    if (object.id != null) {
                        if (typeof object.id !== "object")
                            throw TypeError(".syft_proto.execution.v1.Plan.id: object expected");
                        message.id = $root.syft_proto.types.syft.v1.Id.fromObject(object.id);
                    }
                    if (object.role != null) {
                        if (typeof object.role !== "object")
                            throw TypeError(".syft_proto.execution.v1.Plan.role: object expected");
                        message.role = $root.syft_proto.execution.v1.Role.fromObject(object.role);
                    }
                    if (object.include_state != null)
                        message.include_state = Boolean(object.include_state);
                    if (object.is_built != null)
                        message.is_built = Boolean(object.is_built);
                    if (object.name != null)
                        message.name = String(object.name);
                    if (object.tags) {
                        if (!Array.isArray(object.tags))
                            throw TypeError(".syft_proto.execution.v1.Plan.tags: array expected");
                        message.tags = [];
                        for (var i = 0; i < object.tags.length; ++i)
                            message.tags[i] = String(object.tags[i]);
                    }
                    if (object.description != null)
                        message.description = String(object.description);
                    if (object.torchscript != null)
                        if (typeof object.torchscript === "string")
                            $util.base64.decode(object.torchscript, message.torchscript = $util.newBuffer($util.base64.length(object.torchscript)), 0);
                        else if (object.torchscript.length)
                            message.torchscript = object.torchscript;
                    return message;
                };

                /**
                 * Creates a plain object from a Plan message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof syft_proto.execution.v1.Plan
                 * @static
                 * @param {syft_proto.execution.v1.Plan} message Plan
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                Plan.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.arrays || options.defaults)
                        object.tags = [];
                    if (options.defaults) {
                        object.id = null;
                        object.role = null;
                        object.include_state = false;
                        object.is_built = false;
                        object.name = "";
                        object.description = "";
                        if (options.bytes === String)
                            object.torchscript = "";
                        else {
                            object.torchscript = [];
                            if (options.bytes !== Array)
                                object.torchscript = $util.newBuffer(object.torchscript);
                        }
                    }
                    if (message.id != null && message.hasOwnProperty("id"))
                        object.id = $root.syft_proto.types.syft.v1.Id.toObject(message.id, options);
                    if (message.role != null && message.hasOwnProperty("role"))
                        object.role = $root.syft_proto.execution.v1.Role.toObject(message.role, options);
                    if (message.include_state != null && message.hasOwnProperty("include_state"))
                        object.include_state = message.include_state;
                    if (message.is_built != null && message.hasOwnProperty("is_built"))
                        object.is_built = message.is_built;
                    if (message.name != null && message.hasOwnProperty("name"))
                        object.name = message.name;
                    if (message.tags && message.tags.length) {
                        object.tags = [];
                        for (var j = 0; j < message.tags.length; ++j)
                            object.tags[j] = message.tags[j];
                    }
                    if (message.description != null && message.hasOwnProperty("description"))
                        object.description = message.description;
                    if (message.torchscript != null && message.hasOwnProperty("torchscript"))
                        object.torchscript = options.bytes === String ? $util.base64.encode(message.torchscript, 0, message.torchscript.length) : options.bytes === Array ? Array.prototype.slice.call(message.torchscript) : message.torchscript;
                    return object;
                };

                /**
                 * Converts this Plan to JSON.
                 * @function toJSON
                 * @memberof syft_proto.execution.v1.Plan
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                Plan.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                return Plan;
            })();

            v1.Role = (function() {

                /**
                 * Properties of a Role.
                 * @memberof syft_proto.execution.v1
                 * @interface IRole
                 * @property {syft_proto.types.syft.v1.IId|null} [id] Role id
                 * @property {Array.<syft_proto.execution.v1.IComputationAction>|null} [actions] Role actions
                 * @property {syft_proto.execution.v1.IState|null} [state] Role state
                 * @property {Array.<syft_proto.execution.v1.IPlaceholder>|null} [placeholders] Role placeholders
                 * @property {Array.<syft_proto.types.syft.v1.IId>|null} [input_placeholder_ids] Role input_placeholder_ids
                 * @property {Array.<syft_proto.types.syft.v1.IId>|null} [output_placeholder_ids] Role output_placeholder_ids
                 * @property {Array.<string>|null} [tags] Role tags
                 * @property {string|null} [description] Role description
                 */

                /**
                 * Constructs a new Role.
                 * @memberof syft_proto.execution.v1
                 * @classdesc Represents a Role.
                 * @implements IRole
                 * @constructor
                 * @param {syft_proto.execution.v1.IRole=} [properties] Properties to set
                 */
                function Role(properties) {
                    this.actions = [];
                    this.placeholders = [];
                    this.input_placeholder_ids = [];
                    this.output_placeholder_ids = [];
                    this.tags = [];
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * Role id.
                 * @member {syft_proto.types.syft.v1.IId|null|undefined} id
                 * @memberof syft_proto.execution.v1.Role
                 * @instance
                 */
                Role.prototype.id = null;

                /**
                 * Role actions.
                 * @member {Array.<syft_proto.execution.v1.IComputationAction>} actions
                 * @memberof syft_proto.execution.v1.Role
                 * @instance
                 */
                Role.prototype.actions = $util.emptyArray;

                /**
                 * Role state.
                 * @member {syft_proto.execution.v1.IState|null|undefined} state
                 * @memberof syft_proto.execution.v1.Role
                 * @instance
                 */
                Role.prototype.state = null;

                /**
                 * Role placeholders.
                 * @member {Array.<syft_proto.execution.v1.IPlaceholder>} placeholders
                 * @memberof syft_proto.execution.v1.Role
                 * @instance
                 */
                Role.prototype.placeholders = $util.emptyArray;

                /**
                 * Role input_placeholder_ids.
                 * @member {Array.<syft_proto.types.syft.v1.IId>} input_placeholder_ids
                 * @memberof syft_proto.execution.v1.Role
                 * @instance
                 */
                Role.prototype.input_placeholder_ids = $util.emptyArray;

                /**
                 * Role output_placeholder_ids.
                 * @member {Array.<syft_proto.types.syft.v1.IId>} output_placeholder_ids
                 * @memberof syft_proto.execution.v1.Role
                 * @instance
                 */
                Role.prototype.output_placeholder_ids = $util.emptyArray;

                /**
                 * Role tags.
                 * @member {Array.<string>} tags
                 * @memberof syft_proto.execution.v1.Role
                 * @instance
                 */
                Role.prototype.tags = $util.emptyArray;

                /**
                 * Role description.
                 * @member {string} description
                 * @memberof syft_proto.execution.v1.Role
                 * @instance
                 */
                Role.prototype.description = "";

                /**
                 * Creates a new Role instance using the specified properties.
                 * @function create
                 * @memberof syft_proto.execution.v1.Role
                 * @static
                 * @param {syft_proto.execution.v1.IRole=} [properties] Properties to set
                 * @returns {syft_proto.execution.v1.Role} Role instance
                 */
                Role.create = function create(properties) {
                    return new Role(properties);
                };

                /**
                 * Encodes the specified Role message. Does not implicitly {@link syft_proto.execution.v1.Role.verify|verify} messages.
                 * @function encode
                 * @memberof syft_proto.execution.v1.Role
                 * @static
                 * @param {syft_proto.execution.v1.IRole} message Role message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Role.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.id != null && message.hasOwnProperty("id"))
                        $root.syft_proto.types.syft.v1.Id.encode(message.id, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                    if (message.actions != null && message.actions.length)
                        for (var i = 0; i < message.actions.length; ++i)
                            $root.syft_proto.execution.v1.ComputationAction.encode(message.actions[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                    if (message.state != null && message.hasOwnProperty("state"))
                        $root.syft_proto.execution.v1.State.encode(message.state, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
                    if (message.placeholders != null && message.placeholders.length)
                        for (var i = 0; i < message.placeholders.length; ++i)
                            $root.syft_proto.execution.v1.Placeholder.encode(message.placeholders[i], writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
                    if (message.input_placeholder_ids != null && message.input_placeholder_ids.length)
                        for (var i = 0; i < message.input_placeholder_ids.length; ++i)
                            $root.syft_proto.types.syft.v1.Id.encode(message.input_placeholder_ids[i], writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
                    if (message.output_placeholder_ids != null && message.output_placeholder_ids.length)
                        for (var i = 0; i < message.output_placeholder_ids.length; ++i)
                            $root.syft_proto.types.syft.v1.Id.encode(message.output_placeholder_ids[i], writer.uint32(/* id 6, wireType 2 =*/50).fork()).ldelim();
                    if (message.tags != null && message.tags.length)
                        for (var i = 0; i < message.tags.length; ++i)
                            writer.uint32(/* id 7, wireType 2 =*/58).string(message.tags[i]);
                    if (message.description != null && message.hasOwnProperty("description"))
                        writer.uint32(/* id 8, wireType 2 =*/66).string(message.description);
                    return writer;
                };

                /**
                 * Encodes the specified Role message, length delimited. Does not implicitly {@link syft_proto.execution.v1.Role.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof syft_proto.execution.v1.Role
                 * @static
                 * @param {syft_proto.execution.v1.IRole} message Role message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Role.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a Role message from the specified reader or buffer.
                 * @function decode
                 * @memberof syft_proto.execution.v1.Role
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {syft_proto.execution.v1.Role} Role
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Role.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.syft_proto.execution.v1.Role();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.id = $root.syft_proto.types.syft.v1.Id.decode(reader, reader.uint32());
                            break;
                        case 2:
                            if (!(message.actions && message.actions.length))
                                message.actions = [];
                            message.actions.push($root.syft_proto.execution.v1.ComputationAction.decode(reader, reader.uint32()));
                            break;
                        case 3:
                            message.state = $root.syft_proto.execution.v1.State.decode(reader, reader.uint32());
                            break;
                        case 4:
                            if (!(message.placeholders && message.placeholders.length))
                                message.placeholders = [];
                            message.placeholders.push($root.syft_proto.execution.v1.Placeholder.decode(reader, reader.uint32()));
                            break;
                        case 5:
                            if (!(message.input_placeholder_ids && message.input_placeholder_ids.length))
                                message.input_placeholder_ids = [];
                            message.input_placeholder_ids.push($root.syft_proto.types.syft.v1.Id.decode(reader, reader.uint32()));
                            break;
                        case 6:
                            if (!(message.output_placeholder_ids && message.output_placeholder_ids.length))
                                message.output_placeholder_ids = [];
                            message.output_placeholder_ids.push($root.syft_proto.types.syft.v1.Id.decode(reader, reader.uint32()));
                            break;
                        case 7:
                            if (!(message.tags && message.tags.length))
                                message.tags = [];
                            message.tags.push(reader.string());
                            break;
                        case 8:
                            message.description = reader.string();
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes a Role message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof syft_proto.execution.v1.Role
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {syft_proto.execution.v1.Role} Role
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Role.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a Role message.
                 * @function verify
                 * @memberof syft_proto.execution.v1.Role
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                Role.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.id != null && message.hasOwnProperty("id")) {
                        var error = $root.syft_proto.types.syft.v1.Id.verify(message.id);
                        if (error)
                            return "id." + error;
                    }
                    if (message.actions != null && message.hasOwnProperty("actions")) {
                        if (!Array.isArray(message.actions))
                            return "actions: array expected";
                        for (var i = 0; i < message.actions.length; ++i) {
                            var error = $root.syft_proto.execution.v1.ComputationAction.verify(message.actions[i]);
                            if (error)
                                return "actions." + error;
                        }
                    }
                    if (message.state != null && message.hasOwnProperty("state")) {
                        var error = $root.syft_proto.execution.v1.State.verify(message.state);
                        if (error)
                            return "state." + error;
                    }
                    if (message.placeholders != null && message.hasOwnProperty("placeholders")) {
                        if (!Array.isArray(message.placeholders))
                            return "placeholders: array expected";
                        for (var i = 0; i < message.placeholders.length; ++i) {
                            var error = $root.syft_proto.execution.v1.Placeholder.verify(message.placeholders[i]);
                            if (error)
                                return "placeholders." + error;
                        }
                    }
                    if (message.input_placeholder_ids != null && message.hasOwnProperty("input_placeholder_ids")) {
                        if (!Array.isArray(message.input_placeholder_ids))
                            return "input_placeholder_ids: array expected";
                        for (var i = 0; i < message.input_placeholder_ids.length; ++i) {
                            var error = $root.syft_proto.types.syft.v1.Id.verify(message.input_placeholder_ids[i]);
                            if (error)
                                return "input_placeholder_ids." + error;
                        }
                    }
                    if (message.output_placeholder_ids != null && message.hasOwnProperty("output_placeholder_ids")) {
                        if (!Array.isArray(message.output_placeholder_ids))
                            return "output_placeholder_ids: array expected";
                        for (var i = 0; i < message.output_placeholder_ids.length; ++i) {
                            var error = $root.syft_proto.types.syft.v1.Id.verify(message.output_placeholder_ids[i]);
                            if (error)
                                return "output_placeholder_ids." + error;
                        }
                    }
                    if (message.tags != null && message.hasOwnProperty("tags")) {
                        if (!Array.isArray(message.tags))
                            return "tags: array expected";
                        for (var i = 0; i < message.tags.length; ++i)
                            if (!$util.isString(message.tags[i]))
                                return "tags: string[] expected";
                    }
                    if (message.description != null && message.hasOwnProperty("description"))
                        if (!$util.isString(message.description))
                            return "description: string expected";
                    return null;
                };

                /**
                 * Creates a Role message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof syft_proto.execution.v1.Role
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {syft_proto.execution.v1.Role} Role
                 */
                Role.fromObject = function fromObject(object) {
                    if (object instanceof $root.syft_proto.execution.v1.Role)
                        return object;
                    var message = new $root.syft_proto.execution.v1.Role();
                    if (object.id != null) {
                        if (typeof object.id !== "object")
                            throw TypeError(".syft_proto.execution.v1.Role.id: object expected");
                        message.id = $root.syft_proto.types.syft.v1.Id.fromObject(object.id);
                    }
                    if (object.actions) {
                        if (!Array.isArray(object.actions))
                            throw TypeError(".syft_proto.execution.v1.Role.actions: array expected");
                        message.actions = [];
                        for (var i = 0; i < object.actions.length; ++i) {
                            if (typeof object.actions[i] !== "object")
                                throw TypeError(".syft_proto.execution.v1.Role.actions: object expected");
                            message.actions[i] = $root.syft_proto.execution.v1.ComputationAction.fromObject(object.actions[i]);
                        }
                    }
                    if (object.state != null) {
                        if (typeof object.state !== "object")
                            throw TypeError(".syft_proto.execution.v1.Role.state: object expected");
                        message.state = $root.syft_proto.execution.v1.State.fromObject(object.state);
                    }
                    if (object.placeholders) {
                        if (!Array.isArray(object.placeholders))
                            throw TypeError(".syft_proto.execution.v1.Role.placeholders: array expected");
                        message.placeholders = [];
                        for (var i = 0; i < object.placeholders.length; ++i) {
                            if (typeof object.placeholders[i] !== "object")
                                throw TypeError(".syft_proto.execution.v1.Role.placeholders: object expected");
                            message.placeholders[i] = $root.syft_proto.execution.v1.Placeholder.fromObject(object.placeholders[i]);
                        }
                    }
                    if (object.input_placeholder_ids) {
                        if (!Array.isArray(object.input_placeholder_ids))
                            throw TypeError(".syft_proto.execution.v1.Role.input_placeholder_ids: array expected");
                        message.input_placeholder_ids = [];
                        for (var i = 0; i < object.input_placeholder_ids.length; ++i) {
                            if (typeof object.input_placeholder_ids[i] !== "object")
                                throw TypeError(".syft_proto.execution.v1.Role.input_placeholder_ids: object expected");
                            message.input_placeholder_ids[i] = $root.syft_proto.types.syft.v1.Id.fromObject(object.input_placeholder_ids[i]);
                        }
                    }
                    if (object.output_placeholder_ids) {
                        if (!Array.isArray(object.output_placeholder_ids))
                            throw TypeError(".syft_proto.execution.v1.Role.output_placeholder_ids: array expected");
                        message.output_placeholder_ids = [];
                        for (var i = 0; i < object.output_placeholder_ids.length; ++i) {
                            if (typeof object.output_placeholder_ids[i] !== "object")
                                throw TypeError(".syft_proto.execution.v1.Role.output_placeholder_ids: object expected");
                            message.output_placeholder_ids[i] = $root.syft_proto.types.syft.v1.Id.fromObject(object.output_placeholder_ids[i]);
                        }
                    }
                    if (object.tags) {
                        if (!Array.isArray(object.tags))
                            throw TypeError(".syft_proto.execution.v1.Role.tags: array expected");
                        message.tags = [];
                        for (var i = 0; i < object.tags.length; ++i)
                            message.tags[i] = String(object.tags[i]);
                    }
                    if (object.description != null)
                        message.description = String(object.description);
                    return message;
                };

                /**
                 * Creates a plain object from a Role message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof syft_proto.execution.v1.Role
                 * @static
                 * @param {syft_proto.execution.v1.Role} message Role
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                Role.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.arrays || options.defaults) {
                        object.actions = [];
                        object.placeholders = [];
                        object.input_placeholder_ids = [];
                        object.output_placeholder_ids = [];
                        object.tags = [];
                    }
                    if (options.defaults) {
                        object.id = null;
                        object.state = null;
                        object.description = "";
                    }
                    if (message.id != null && message.hasOwnProperty("id"))
                        object.id = $root.syft_proto.types.syft.v1.Id.toObject(message.id, options);
                    if (message.actions && message.actions.length) {
                        object.actions = [];
                        for (var j = 0; j < message.actions.length; ++j)
                            object.actions[j] = $root.syft_proto.execution.v1.ComputationAction.toObject(message.actions[j], options);
                    }
                    if (message.state != null && message.hasOwnProperty("state"))
                        object.state = $root.syft_proto.execution.v1.State.toObject(message.state, options);
                    if (message.placeholders && message.placeholders.length) {
                        object.placeholders = [];
                        for (var j = 0; j < message.placeholders.length; ++j)
                            object.placeholders[j] = $root.syft_proto.execution.v1.Placeholder.toObject(message.placeholders[j], options);
                    }
                    if (message.input_placeholder_ids && message.input_placeholder_ids.length) {
                        object.input_placeholder_ids = [];
                        for (var j = 0; j < message.input_placeholder_ids.length; ++j)
                            object.input_placeholder_ids[j] = $root.syft_proto.types.syft.v1.Id.toObject(message.input_placeholder_ids[j], options);
                    }
                    if (message.output_placeholder_ids && message.output_placeholder_ids.length) {
                        object.output_placeholder_ids = [];
                        for (var j = 0; j < message.output_placeholder_ids.length; ++j)
                            object.output_placeholder_ids[j] = $root.syft_proto.types.syft.v1.Id.toObject(message.output_placeholder_ids[j], options);
                    }
                    if (message.tags && message.tags.length) {
                        object.tags = [];
                        for (var j = 0; j < message.tags.length; ++j)
                            object.tags[j] = message.tags[j];
                    }
                    if (message.description != null && message.hasOwnProperty("description"))
                        object.description = message.description;
                    return object;
                };

                /**
                 * Converts this Role to JSON.
                 * @function toJSON
                 * @memberof syft_proto.execution.v1.Role
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                Role.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                return Role;
            })();

            v1.State = (function() {

                /**
                 * Properties of a State.
                 * @memberof syft_proto.execution.v1
                 * @interface IState
                 * @property {Array.<syft_proto.execution.v1.IPlaceholder>|null} [placeholders] State placeholders
                 * @property {Array.<syft_proto.execution.v1.IStateTensor>|null} [tensors] State tensors
                 */

                /**
                 * Constructs a new State.
                 * @memberof syft_proto.execution.v1
                 * @classdesc Represents a State.
                 * @implements IState
                 * @constructor
                 * @param {syft_proto.execution.v1.IState=} [properties] Properties to set
                 */
                function State(properties) {
                    this.placeholders = [];
                    this.tensors = [];
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * State placeholders.
                 * @member {Array.<syft_proto.execution.v1.IPlaceholder>} placeholders
                 * @memberof syft_proto.execution.v1.State
                 * @instance
                 */
                State.prototype.placeholders = $util.emptyArray;

                /**
                 * State tensors.
                 * @member {Array.<syft_proto.execution.v1.IStateTensor>} tensors
                 * @memberof syft_proto.execution.v1.State
                 * @instance
                 */
                State.prototype.tensors = $util.emptyArray;

                /**
                 * Creates a new State instance using the specified properties.
                 * @function create
                 * @memberof syft_proto.execution.v1.State
                 * @static
                 * @param {syft_proto.execution.v1.IState=} [properties] Properties to set
                 * @returns {syft_proto.execution.v1.State} State instance
                 */
                State.create = function create(properties) {
                    return new State(properties);
                };

                /**
                 * Encodes the specified State message. Does not implicitly {@link syft_proto.execution.v1.State.verify|verify} messages.
                 * @function encode
                 * @memberof syft_proto.execution.v1.State
                 * @static
                 * @param {syft_proto.execution.v1.IState} message State message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                State.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.placeholders != null && message.placeholders.length)
                        for (var i = 0; i < message.placeholders.length; ++i)
                            $root.syft_proto.execution.v1.Placeholder.encode(message.placeholders[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                    if (message.tensors != null && message.tensors.length)
                        for (var i = 0; i < message.tensors.length; ++i)
                            $root.syft_proto.execution.v1.StateTensor.encode(message.tensors[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                    return writer;
                };

                /**
                 * Encodes the specified State message, length delimited. Does not implicitly {@link syft_proto.execution.v1.State.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof syft_proto.execution.v1.State
                 * @static
                 * @param {syft_proto.execution.v1.IState} message State message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                State.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a State message from the specified reader or buffer.
                 * @function decode
                 * @memberof syft_proto.execution.v1.State
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {syft_proto.execution.v1.State} State
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                State.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.syft_proto.execution.v1.State();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            if (!(message.placeholders && message.placeholders.length))
                                message.placeholders = [];
                            message.placeholders.push($root.syft_proto.execution.v1.Placeholder.decode(reader, reader.uint32()));
                            break;
                        case 2:
                            if (!(message.tensors && message.tensors.length))
                                message.tensors = [];
                            message.tensors.push($root.syft_proto.execution.v1.StateTensor.decode(reader, reader.uint32()));
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes a State message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof syft_proto.execution.v1.State
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {syft_proto.execution.v1.State} State
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                State.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a State message.
                 * @function verify
                 * @memberof syft_proto.execution.v1.State
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                State.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.placeholders != null && message.hasOwnProperty("placeholders")) {
                        if (!Array.isArray(message.placeholders))
                            return "placeholders: array expected";
                        for (var i = 0; i < message.placeholders.length; ++i) {
                            var error = $root.syft_proto.execution.v1.Placeholder.verify(message.placeholders[i]);
                            if (error)
                                return "placeholders." + error;
                        }
                    }
                    if (message.tensors != null && message.hasOwnProperty("tensors")) {
                        if (!Array.isArray(message.tensors))
                            return "tensors: array expected";
                        for (var i = 0; i < message.tensors.length; ++i) {
                            var error = $root.syft_proto.execution.v1.StateTensor.verify(message.tensors[i]);
                            if (error)
                                return "tensors." + error;
                        }
                    }
                    return null;
                };

                /**
                 * Creates a State message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof syft_proto.execution.v1.State
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {syft_proto.execution.v1.State} State
                 */
                State.fromObject = function fromObject(object) {
                    if (object instanceof $root.syft_proto.execution.v1.State)
                        return object;
                    var message = new $root.syft_proto.execution.v1.State();
                    if (object.placeholders) {
                        if (!Array.isArray(object.placeholders))
                            throw TypeError(".syft_proto.execution.v1.State.placeholders: array expected");
                        message.placeholders = [];
                        for (var i = 0; i < object.placeholders.length; ++i) {
                            if (typeof object.placeholders[i] !== "object")
                                throw TypeError(".syft_proto.execution.v1.State.placeholders: object expected");
                            message.placeholders[i] = $root.syft_proto.execution.v1.Placeholder.fromObject(object.placeholders[i]);
                        }
                    }
                    if (object.tensors) {
                        if (!Array.isArray(object.tensors))
                            throw TypeError(".syft_proto.execution.v1.State.tensors: array expected");
                        message.tensors = [];
                        for (var i = 0; i < object.tensors.length; ++i) {
                            if (typeof object.tensors[i] !== "object")
                                throw TypeError(".syft_proto.execution.v1.State.tensors: object expected");
                            message.tensors[i] = $root.syft_proto.execution.v1.StateTensor.fromObject(object.tensors[i]);
                        }
                    }
                    return message;
                };

                /**
                 * Creates a plain object from a State message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof syft_proto.execution.v1.State
                 * @static
                 * @param {syft_proto.execution.v1.State} message State
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                State.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.arrays || options.defaults) {
                        object.placeholders = [];
                        object.tensors = [];
                    }
                    if (message.placeholders && message.placeholders.length) {
                        object.placeholders = [];
                        for (var j = 0; j < message.placeholders.length; ++j)
                            object.placeholders[j] = $root.syft_proto.execution.v1.Placeholder.toObject(message.placeholders[j], options);
                    }
                    if (message.tensors && message.tensors.length) {
                        object.tensors = [];
                        for (var j = 0; j < message.tensors.length; ++j)
                            object.tensors[j] = $root.syft_proto.execution.v1.StateTensor.toObject(message.tensors[j], options);
                    }
                    return object;
                };

                /**
                 * Converts this State to JSON.
                 * @function toJSON
                 * @memberof syft_proto.execution.v1.State
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                State.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                return State;
            })();

            v1.StateTensor = (function() {

                /**
                 * Properties of a StateTensor.
                 * @memberof syft_proto.execution.v1
                 * @interface IStateTensor
                 * @property {syft_proto.types.torch.v1.ITorchTensor|null} [torch_tensor] StateTensor torch_tensor
                 * @property {syft_proto.types.torch.v1.IParameter|null} [torch_param] StateTensor torch_param
                 */

                /**
                 * Constructs a new StateTensor.
                 * @memberof syft_proto.execution.v1
                 * @classdesc Represents a StateTensor.
                 * @implements IStateTensor
                 * @constructor
                 * @param {syft_proto.execution.v1.IStateTensor=} [properties] Properties to set
                 */
                function StateTensor(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * StateTensor torch_tensor.
                 * @member {syft_proto.types.torch.v1.ITorchTensor|null|undefined} torch_tensor
                 * @memberof syft_proto.execution.v1.StateTensor
                 * @instance
                 */
                StateTensor.prototype.torch_tensor = null;

                /**
                 * StateTensor torch_param.
                 * @member {syft_proto.types.torch.v1.IParameter|null|undefined} torch_param
                 * @memberof syft_proto.execution.v1.StateTensor
                 * @instance
                 */
                StateTensor.prototype.torch_param = null;

                // OneOf field names bound to virtual getters and setters
                var $oneOfFields;

                /**
                 * StateTensor tensor.
                 * @member {"torch_tensor"|"torch_param"|undefined} tensor
                 * @memberof syft_proto.execution.v1.StateTensor
                 * @instance
                 */
                Object.defineProperty(StateTensor.prototype, "tensor", {
                    get: $util.oneOfGetter($oneOfFields = ["torch_tensor", "torch_param"]),
                    set: $util.oneOfSetter($oneOfFields)
                });

                /**
                 * Creates a new StateTensor instance using the specified properties.
                 * @function create
                 * @memberof syft_proto.execution.v1.StateTensor
                 * @static
                 * @param {syft_proto.execution.v1.IStateTensor=} [properties] Properties to set
                 * @returns {syft_proto.execution.v1.StateTensor} StateTensor instance
                 */
                StateTensor.create = function create(properties) {
                    return new StateTensor(properties);
                };

                /**
                 * Encodes the specified StateTensor message. Does not implicitly {@link syft_proto.execution.v1.StateTensor.verify|verify} messages.
                 * @function encode
                 * @memberof syft_proto.execution.v1.StateTensor
                 * @static
                 * @param {syft_proto.execution.v1.IStateTensor} message StateTensor message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                StateTensor.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.torch_tensor != null && message.hasOwnProperty("torch_tensor"))
                        $root.syft_proto.types.torch.v1.TorchTensor.encode(message.torch_tensor, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                    if (message.torch_param != null && message.hasOwnProperty("torch_param"))
                        $root.syft_proto.types.torch.v1.Parameter.encode(message.torch_param, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                    return writer;
                };

                /**
                 * Encodes the specified StateTensor message, length delimited. Does not implicitly {@link syft_proto.execution.v1.StateTensor.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof syft_proto.execution.v1.StateTensor
                 * @static
                 * @param {syft_proto.execution.v1.IStateTensor} message StateTensor message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                StateTensor.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a StateTensor message from the specified reader or buffer.
                 * @function decode
                 * @memberof syft_proto.execution.v1.StateTensor
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {syft_proto.execution.v1.StateTensor} StateTensor
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                StateTensor.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.syft_proto.execution.v1.StateTensor();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.torch_tensor = $root.syft_proto.types.torch.v1.TorchTensor.decode(reader, reader.uint32());
                            break;
                        case 2:
                            message.torch_param = $root.syft_proto.types.torch.v1.Parameter.decode(reader, reader.uint32());
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes a StateTensor message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof syft_proto.execution.v1.StateTensor
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {syft_proto.execution.v1.StateTensor} StateTensor
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                StateTensor.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a StateTensor message.
                 * @function verify
                 * @memberof syft_proto.execution.v1.StateTensor
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                StateTensor.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    var properties = {};
                    if (message.torch_tensor != null && message.hasOwnProperty("torch_tensor")) {
                        properties.tensor = 1;
                        {
                            var error = $root.syft_proto.types.torch.v1.TorchTensor.verify(message.torch_tensor);
                            if (error)
                                return "torch_tensor." + error;
                        }
                    }
                    if (message.torch_param != null && message.hasOwnProperty("torch_param")) {
                        if (properties.tensor === 1)
                            return "tensor: multiple values";
                        properties.tensor = 1;
                        {
                            var error = $root.syft_proto.types.torch.v1.Parameter.verify(message.torch_param);
                            if (error)
                                return "torch_param." + error;
                        }
                    }
                    return null;
                };

                /**
                 * Creates a StateTensor message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof syft_proto.execution.v1.StateTensor
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {syft_proto.execution.v1.StateTensor} StateTensor
                 */
                StateTensor.fromObject = function fromObject(object) {
                    if (object instanceof $root.syft_proto.execution.v1.StateTensor)
                        return object;
                    var message = new $root.syft_proto.execution.v1.StateTensor();
                    if (object.torch_tensor != null) {
                        if (typeof object.torch_tensor !== "object")
                            throw TypeError(".syft_proto.execution.v1.StateTensor.torch_tensor: object expected");
                        message.torch_tensor = $root.syft_proto.types.torch.v1.TorchTensor.fromObject(object.torch_tensor);
                    }
                    if (object.torch_param != null) {
                        if (typeof object.torch_param !== "object")
                            throw TypeError(".syft_proto.execution.v1.StateTensor.torch_param: object expected");
                        message.torch_param = $root.syft_proto.types.torch.v1.Parameter.fromObject(object.torch_param);
                    }
                    return message;
                };

                /**
                 * Creates a plain object from a StateTensor message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof syft_proto.execution.v1.StateTensor
                 * @static
                 * @param {syft_proto.execution.v1.StateTensor} message StateTensor
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                StateTensor.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (message.torch_tensor != null && message.hasOwnProperty("torch_tensor")) {
                        object.torch_tensor = $root.syft_proto.types.torch.v1.TorchTensor.toObject(message.torch_tensor, options);
                        if (options.oneofs)
                            object.tensor = "torch_tensor";
                    }
                    if (message.torch_param != null && message.hasOwnProperty("torch_param")) {
                        object.torch_param = $root.syft_proto.types.torch.v1.Parameter.toObject(message.torch_param, options);
                        if (options.oneofs)
                            object.tensor = "torch_param";
                    }
                    return object;
                };

                /**
                 * Converts this StateTensor to JSON.
                 * @function toJSON
                 * @memberof syft_proto.execution.v1.StateTensor
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                StateTensor.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                return StateTensor;
            })();

            v1.Protocol = (function() {

                /**
                 * Properties of a Protocol.
                 * @memberof syft_proto.execution.v1
                 * @interface IProtocol
                 * @property {syft_proto.types.syft.v1.IId|null} [id] Protocol id
                 * @property {Array.<string>|null} [tags] Protocol tags
                 * @property {string|null} [description] Protocol description
                 * @property {boolean|null} [workers_resolved] Protocol workers_resolved
                 * @property {Array.<syft_proto.execution.v1.IPlanAssignment>|null} [plan_assignments] Protocol plan_assignments
                 */

                /**
                 * Constructs a new Protocol.
                 * @memberof syft_proto.execution.v1
                 * @classdesc Represents a Protocol.
                 * @implements IProtocol
                 * @constructor
                 * @param {syft_proto.execution.v1.IProtocol=} [properties] Properties to set
                 */
                function Protocol(properties) {
                    this.tags = [];
                    this.plan_assignments = [];
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * Protocol id.
                 * @member {syft_proto.types.syft.v1.IId|null|undefined} id
                 * @memberof syft_proto.execution.v1.Protocol
                 * @instance
                 */
                Protocol.prototype.id = null;

                /**
                 * Protocol tags.
                 * @member {Array.<string>} tags
                 * @memberof syft_proto.execution.v1.Protocol
                 * @instance
                 */
                Protocol.prototype.tags = $util.emptyArray;

                /**
                 * Protocol description.
                 * @member {string} description
                 * @memberof syft_proto.execution.v1.Protocol
                 * @instance
                 */
                Protocol.prototype.description = "";

                /**
                 * Protocol workers_resolved.
                 * @member {boolean} workers_resolved
                 * @memberof syft_proto.execution.v1.Protocol
                 * @instance
                 */
                Protocol.prototype.workers_resolved = false;

                /**
                 * Protocol plan_assignments.
                 * @member {Array.<syft_proto.execution.v1.IPlanAssignment>} plan_assignments
                 * @memberof syft_proto.execution.v1.Protocol
                 * @instance
                 */
                Protocol.prototype.plan_assignments = $util.emptyArray;

                /**
                 * Creates a new Protocol instance using the specified properties.
                 * @function create
                 * @memberof syft_proto.execution.v1.Protocol
                 * @static
                 * @param {syft_proto.execution.v1.IProtocol=} [properties] Properties to set
                 * @returns {syft_proto.execution.v1.Protocol} Protocol instance
                 */
                Protocol.create = function create(properties) {
                    return new Protocol(properties);
                };

                /**
                 * Encodes the specified Protocol message. Does not implicitly {@link syft_proto.execution.v1.Protocol.verify|verify} messages.
                 * @function encode
                 * @memberof syft_proto.execution.v1.Protocol
                 * @static
                 * @param {syft_proto.execution.v1.IProtocol} message Protocol message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Protocol.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.id != null && message.hasOwnProperty("id"))
                        $root.syft_proto.types.syft.v1.Id.encode(message.id, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                    if (message.tags != null && message.tags.length)
                        for (var i = 0; i < message.tags.length; ++i)
                            writer.uint32(/* id 2, wireType 2 =*/18).string(message.tags[i]);
                    if (message.description != null && message.hasOwnProperty("description"))
                        writer.uint32(/* id 3, wireType 2 =*/26).string(message.description);
                    if (message.workers_resolved != null && message.hasOwnProperty("workers_resolved"))
                        writer.uint32(/* id 4, wireType 0 =*/32).bool(message.workers_resolved);
                    if (message.plan_assignments != null && message.plan_assignments.length)
                        for (var i = 0; i < message.plan_assignments.length; ++i)
                            $root.syft_proto.execution.v1.PlanAssignment.encode(message.plan_assignments[i], writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
                    return writer;
                };

                /**
                 * Encodes the specified Protocol message, length delimited. Does not implicitly {@link syft_proto.execution.v1.Protocol.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof syft_proto.execution.v1.Protocol
                 * @static
                 * @param {syft_proto.execution.v1.IProtocol} message Protocol message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Protocol.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a Protocol message from the specified reader or buffer.
                 * @function decode
                 * @memberof syft_proto.execution.v1.Protocol
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {syft_proto.execution.v1.Protocol} Protocol
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Protocol.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.syft_proto.execution.v1.Protocol();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.id = $root.syft_proto.types.syft.v1.Id.decode(reader, reader.uint32());
                            break;
                        case 2:
                            if (!(message.tags && message.tags.length))
                                message.tags = [];
                            message.tags.push(reader.string());
                            break;
                        case 3:
                            message.description = reader.string();
                            break;
                        case 4:
                            message.workers_resolved = reader.bool();
                            break;
                        case 5:
                            if (!(message.plan_assignments && message.plan_assignments.length))
                                message.plan_assignments = [];
                            message.plan_assignments.push($root.syft_proto.execution.v1.PlanAssignment.decode(reader, reader.uint32()));
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes a Protocol message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof syft_proto.execution.v1.Protocol
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {syft_proto.execution.v1.Protocol} Protocol
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Protocol.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a Protocol message.
                 * @function verify
                 * @memberof syft_proto.execution.v1.Protocol
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                Protocol.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.id != null && message.hasOwnProperty("id")) {
                        var error = $root.syft_proto.types.syft.v1.Id.verify(message.id);
                        if (error)
                            return "id." + error;
                    }
                    if (message.tags != null && message.hasOwnProperty("tags")) {
                        if (!Array.isArray(message.tags))
                            return "tags: array expected";
                        for (var i = 0; i < message.tags.length; ++i)
                            if (!$util.isString(message.tags[i]))
                                return "tags: string[] expected";
                    }
                    if (message.description != null && message.hasOwnProperty("description"))
                        if (!$util.isString(message.description))
                            return "description: string expected";
                    if (message.workers_resolved != null && message.hasOwnProperty("workers_resolved"))
                        if (typeof message.workers_resolved !== "boolean")
                            return "workers_resolved: boolean expected";
                    if (message.plan_assignments != null && message.hasOwnProperty("plan_assignments")) {
                        if (!Array.isArray(message.plan_assignments))
                            return "plan_assignments: array expected";
                        for (var i = 0; i < message.plan_assignments.length; ++i) {
                            var error = $root.syft_proto.execution.v1.PlanAssignment.verify(message.plan_assignments[i]);
                            if (error)
                                return "plan_assignments." + error;
                        }
                    }
                    return null;
                };

                /**
                 * Creates a Protocol message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof syft_proto.execution.v1.Protocol
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {syft_proto.execution.v1.Protocol} Protocol
                 */
                Protocol.fromObject = function fromObject(object) {
                    if (object instanceof $root.syft_proto.execution.v1.Protocol)
                        return object;
                    var message = new $root.syft_proto.execution.v1.Protocol();
                    if (object.id != null) {
                        if (typeof object.id !== "object")
                            throw TypeError(".syft_proto.execution.v1.Protocol.id: object expected");
                        message.id = $root.syft_proto.types.syft.v1.Id.fromObject(object.id);
                    }
                    if (object.tags) {
                        if (!Array.isArray(object.tags))
                            throw TypeError(".syft_proto.execution.v1.Protocol.tags: array expected");
                        message.tags = [];
                        for (var i = 0; i < object.tags.length; ++i)
                            message.tags[i] = String(object.tags[i]);
                    }
                    if (object.description != null)
                        message.description = String(object.description);
                    if (object.workers_resolved != null)
                        message.workers_resolved = Boolean(object.workers_resolved);
                    if (object.plan_assignments) {
                        if (!Array.isArray(object.plan_assignments))
                            throw TypeError(".syft_proto.execution.v1.Protocol.plan_assignments: array expected");
                        message.plan_assignments = [];
                        for (var i = 0; i < object.plan_assignments.length; ++i) {
                            if (typeof object.plan_assignments[i] !== "object")
                                throw TypeError(".syft_proto.execution.v1.Protocol.plan_assignments: object expected");
                            message.plan_assignments[i] = $root.syft_proto.execution.v1.PlanAssignment.fromObject(object.plan_assignments[i]);
                        }
                    }
                    return message;
                };

                /**
                 * Creates a plain object from a Protocol message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof syft_proto.execution.v1.Protocol
                 * @static
                 * @param {syft_proto.execution.v1.Protocol} message Protocol
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                Protocol.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.arrays || options.defaults) {
                        object.tags = [];
                        object.plan_assignments = [];
                    }
                    if (options.defaults) {
                        object.id = null;
                        object.description = "";
                        object.workers_resolved = false;
                    }
                    if (message.id != null && message.hasOwnProperty("id"))
                        object.id = $root.syft_proto.types.syft.v1.Id.toObject(message.id, options);
                    if (message.tags && message.tags.length) {
                        object.tags = [];
                        for (var j = 0; j < message.tags.length; ++j)
                            object.tags[j] = message.tags[j];
                    }
                    if (message.description != null && message.hasOwnProperty("description"))
                        object.description = message.description;
                    if (message.workers_resolved != null && message.hasOwnProperty("workers_resolved"))
                        object.workers_resolved = message.workers_resolved;
                    if (message.plan_assignments && message.plan_assignments.length) {
                        object.plan_assignments = [];
                        for (var j = 0; j < message.plan_assignments.length; ++j)
                            object.plan_assignments[j] = $root.syft_proto.execution.v1.PlanAssignment.toObject(message.plan_assignments[j], options);
                    }
                    return object;
                };

                /**
                 * Converts this Protocol to JSON.
                 * @function toJSON
                 * @memberof syft_proto.execution.v1.Protocol
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                Protocol.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                return Protocol;
            })();

            v1.PlanAssignment = (function() {

                /**
                 * Properties of a PlanAssignment.
                 * @memberof syft_proto.execution.v1
                 * @interface IPlanAssignment
                 * @property {syft_proto.types.syft.v1.IId|null} [plan_id] PlanAssignment plan_id
                 * @property {syft_proto.types.syft.v1.IId|null} [worker_id] PlanAssignment worker_id
                 */

                /**
                 * Constructs a new PlanAssignment.
                 * @memberof syft_proto.execution.v1
                 * @classdesc Represents a PlanAssignment.
                 * @implements IPlanAssignment
                 * @constructor
                 * @param {syft_proto.execution.v1.IPlanAssignment=} [properties] Properties to set
                 */
                function PlanAssignment(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * PlanAssignment plan_id.
                 * @member {syft_proto.types.syft.v1.IId|null|undefined} plan_id
                 * @memberof syft_proto.execution.v1.PlanAssignment
                 * @instance
                 */
                PlanAssignment.prototype.plan_id = null;

                /**
                 * PlanAssignment worker_id.
                 * @member {syft_proto.types.syft.v1.IId|null|undefined} worker_id
                 * @memberof syft_proto.execution.v1.PlanAssignment
                 * @instance
                 */
                PlanAssignment.prototype.worker_id = null;

                /**
                 * Creates a new PlanAssignment instance using the specified properties.
                 * @function create
                 * @memberof syft_proto.execution.v1.PlanAssignment
                 * @static
                 * @param {syft_proto.execution.v1.IPlanAssignment=} [properties] Properties to set
                 * @returns {syft_proto.execution.v1.PlanAssignment} PlanAssignment instance
                 */
                PlanAssignment.create = function create(properties) {
                    return new PlanAssignment(properties);
                };

                /**
                 * Encodes the specified PlanAssignment message. Does not implicitly {@link syft_proto.execution.v1.PlanAssignment.verify|verify} messages.
                 * @function encode
                 * @memberof syft_proto.execution.v1.PlanAssignment
                 * @static
                 * @param {syft_proto.execution.v1.IPlanAssignment} message PlanAssignment message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                PlanAssignment.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.plan_id != null && message.hasOwnProperty("plan_id"))
                        $root.syft_proto.types.syft.v1.Id.encode(message.plan_id, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                    if (message.worker_id != null && message.hasOwnProperty("worker_id"))
                        $root.syft_proto.types.syft.v1.Id.encode(message.worker_id, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                    return writer;
                };

                /**
                 * Encodes the specified PlanAssignment message, length delimited. Does not implicitly {@link syft_proto.execution.v1.PlanAssignment.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof syft_proto.execution.v1.PlanAssignment
                 * @static
                 * @param {syft_proto.execution.v1.IPlanAssignment} message PlanAssignment message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                PlanAssignment.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a PlanAssignment message from the specified reader or buffer.
                 * @function decode
                 * @memberof syft_proto.execution.v1.PlanAssignment
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {syft_proto.execution.v1.PlanAssignment} PlanAssignment
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                PlanAssignment.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.syft_proto.execution.v1.PlanAssignment();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.plan_id = $root.syft_proto.types.syft.v1.Id.decode(reader, reader.uint32());
                            break;
                        case 2:
                            message.worker_id = $root.syft_proto.types.syft.v1.Id.decode(reader, reader.uint32());
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes a PlanAssignment message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof syft_proto.execution.v1.PlanAssignment
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {syft_proto.execution.v1.PlanAssignment} PlanAssignment
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                PlanAssignment.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a PlanAssignment message.
                 * @function verify
                 * @memberof syft_proto.execution.v1.PlanAssignment
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                PlanAssignment.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.plan_id != null && message.hasOwnProperty("plan_id")) {
                        var error = $root.syft_proto.types.syft.v1.Id.verify(message.plan_id);
                        if (error)
                            return "plan_id." + error;
                    }
                    if (message.worker_id != null && message.hasOwnProperty("worker_id")) {
                        var error = $root.syft_proto.types.syft.v1.Id.verify(message.worker_id);
                        if (error)
                            return "worker_id." + error;
                    }
                    return null;
                };

                /**
                 * Creates a PlanAssignment message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof syft_proto.execution.v1.PlanAssignment
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {syft_proto.execution.v1.PlanAssignment} PlanAssignment
                 */
                PlanAssignment.fromObject = function fromObject(object) {
                    if (object instanceof $root.syft_proto.execution.v1.PlanAssignment)
                        return object;
                    var message = new $root.syft_proto.execution.v1.PlanAssignment();
                    if (object.plan_id != null) {
                        if (typeof object.plan_id !== "object")
                            throw TypeError(".syft_proto.execution.v1.PlanAssignment.plan_id: object expected");
                        message.plan_id = $root.syft_proto.types.syft.v1.Id.fromObject(object.plan_id);
                    }
                    if (object.worker_id != null) {
                        if (typeof object.worker_id !== "object")
                            throw TypeError(".syft_proto.execution.v1.PlanAssignment.worker_id: object expected");
                        message.worker_id = $root.syft_proto.types.syft.v1.Id.fromObject(object.worker_id);
                    }
                    return message;
                };

                /**
                 * Creates a plain object from a PlanAssignment message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof syft_proto.execution.v1.PlanAssignment
                 * @static
                 * @param {syft_proto.execution.v1.PlanAssignment} message PlanAssignment
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                PlanAssignment.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults) {
                        object.plan_id = null;
                        object.worker_id = null;
                    }
                    if (message.plan_id != null && message.hasOwnProperty("plan_id"))
                        object.plan_id = $root.syft_proto.types.syft.v1.Id.toObject(message.plan_id, options);
                    if (message.worker_id != null && message.hasOwnProperty("worker_id"))
                        object.worker_id = $root.syft_proto.types.syft.v1.Id.toObject(message.worker_id, options);
                    return object;
                };

                /**
                 * Converts this PlanAssignment to JSON.
                 * @function toJSON
                 * @memberof syft_proto.execution.v1.PlanAssignment
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                PlanAssignment.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                return PlanAssignment;
            })();

            return v1;
        })();

        return execution;
    })();

    syft_proto.types = (function() {

        /**
         * Namespace types.
         * @memberof syft_proto
         * @namespace
         */
        var types = {};

        types.syft = (function() {

            /**
             * Namespace syft.
             * @memberof syft_proto.types
             * @namespace
             */
            var syft = {};

            syft.v1 = (function() {

                /**
                 * Namespace v1.
                 * @memberof syft_proto.types.syft
                 * @namespace
                 */
                var v1 = {};

                v1.Arg = (function() {

                    /**
                     * Properties of an Arg.
                     * @memberof syft_proto.types.syft.v1
                     * @interface IArg
                     * @property {boolean|null} [arg_bool] Arg arg_bool
                     * @property {number|null} [arg_int] Arg arg_int
                     * @property {number|null} [arg_float] Arg arg_float
                     * @property {string|null} [arg_string] Arg arg_string
                     * @property {syft_proto.types.syft.v1.IShape|null} [arg_shape] Arg arg_shape
                     * @property {syft_proto.types.torch.v1.ITorchTensor|null} [arg_tensor] Arg arg_tensor
                     * @property {syft_proto.types.torch.v1.IParameter|null} [arg_torch_param] Arg arg_torch_param
                     * @property {syft_proto.generic.pointers.v1.IPointerTensor|null} [arg_pointer_tensor] Arg arg_pointer_tensor
                     * @property {syft_proto.execution.v1.IPlaceholder|null} [arg_placeholder] Arg arg_placeholder
                     * @property {syft_proto.execution.v1.IPlaceholderId|null} [arg_placeholder_id] Arg arg_placeholder_id
                     */

                    /**
                     * Constructs a new Arg.
                     * @memberof syft_proto.types.syft.v1
                     * @classdesc Represents an Arg.
                     * @implements IArg
                     * @constructor
                     * @param {syft_proto.types.syft.v1.IArg=} [properties] Properties to set
                     */
                    function Arg(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * Arg arg_bool.
                     * @member {boolean} arg_bool
                     * @memberof syft_proto.types.syft.v1.Arg
                     * @instance
                     */
                    Arg.prototype.arg_bool = false;

                    /**
                     * Arg arg_int.
                     * @member {number} arg_int
                     * @memberof syft_proto.types.syft.v1.Arg
                     * @instance
                     */
                    Arg.prototype.arg_int = 0;

                    /**
                     * Arg arg_float.
                     * @member {number} arg_float
                     * @memberof syft_proto.types.syft.v1.Arg
                     * @instance
                     */
                    Arg.prototype.arg_float = 0;

                    /**
                     * Arg arg_string.
                     * @member {string} arg_string
                     * @memberof syft_proto.types.syft.v1.Arg
                     * @instance
                     */
                    Arg.prototype.arg_string = "";

                    /**
                     * Arg arg_shape.
                     * @member {syft_proto.types.syft.v1.IShape|null|undefined} arg_shape
                     * @memberof syft_proto.types.syft.v1.Arg
                     * @instance
                     */
                    Arg.prototype.arg_shape = null;

                    /**
                     * Arg arg_tensor.
                     * @member {syft_proto.types.torch.v1.ITorchTensor|null|undefined} arg_tensor
                     * @memberof syft_proto.types.syft.v1.Arg
                     * @instance
                     */
                    Arg.prototype.arg_tensor = null;

                    /**
                     * Arg arg_torch_param.
                     * @member {syft_proto.types.torch.v1.IParameter|null|undefined} arg_torch_param
                     * @memberof syft_proto.types.syft.v1.Arg
                     * @instance
                     */
                    Arg.prototype.arg_torch_param = null;

                    /**
                     * Arg arg_pointer_tensor.
                     * @member {syft_proto.generic.pointers.v1.IPointerTensor|null|undefined} arg_pointer_tensor
                     * @memberof syft_proto.types.syft.v1.Arg
                     * @instance
                     */
                    Arg.prototype.arg_pointer_tensor = null;

                    /**
                     * Arg arg_placeholder.
                     * @member {syft_proto.execution.v1.IPlaceholder|null|undefined} arg_placeholder
                     * @memberof syft_proto.types.syft.v1.Arg
                     * @instance
                     */
                    Arg.prototype.arg_placeholder = null;

                    /**
                     * Arg arg_placeholder_id.
                     * @member {syft_proto.execution.v1.IPlaceholderId|null|undefined} arg_placeholder_id
                     * @memberof syft_proto.types.syft.v1.Arg
                     * @instance
                     */
                    Arg.prototype.arg_placeholder_id = null;

                    // OneOf field names bound to virtual getters and setters
                    var $oneOfFields;

                    /**
                     * Arg arg.
                     * @member {"arg_bool"|"arg_int"|"arg_float"|"arg_string"|"arg_shape"|"arg_tensor"|"arg_torch_param"|"arg_pointer_tensor"|"arg_placeholder"|"arg_placeholder_id"|undefined} arg
                     * @memberof syft_proto.types.syft.v1.Arg
                     * @instance
                     */
                    Object.defineProperty(Arg.prototype, "arg", {
                        get: $util.oneOfGetter($oneOfFields = ["arg_bool", "arg_int", "arg_float", "arg_string", "arg_shape", "arg_tensor", "arg_torch_param", "arg_pointer_tensor", "arg_placeholder", "arg_placeholder_id"]),
                        set: $util.oneOfSetter($oneOfFields)
                    });

                    /**
                     * Creates a new Arg instance using the specified properties.
                     * @function create
                     * @memberof syft_proto.types.syft.v1.Arg
                     * @static
                     * @param {syft_proto.types.syft.v1.IArg=} [properties] Properties to set
                     * @returns {syft_proto.types.syft.v1.Arg} Arg instance
                     */
                    Arg.create = function create(properties) {
                        return new Arg(properties);
                    };

                    /**
                     * Encodes the specified Arg message. Does not implicitly {@link syft_proto.types.syft.v1.Arg.verify|verify} messages.
                     * @function encode
                     * @memberof syft_proto.types.syft.v1.Arg
                     * @static
                     * @param {syft_proto.types.syft.v1.IArg} message Arg message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    Arg.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.arg_bool != null && message.hasOwnProperty("arg_bool"))
                            writer.uint32(/* id 1, wireType 0 =*/8).bool(message.arg_bool);
                        if (message.arg_int != null && message.hasOwnProperty("arg_int"))
                            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.arg_int);
                        if (message.arg_float != null && message.hasOwnProperty("arg_float"))
                            writer.uint32(/* id 3, wireType 5 =*/29).float(message.arg_float);
                        if (message.arg_string != null && message.hasOwnProperty("arg_string"))
                            writer.uint32(/* id 4, wireType 2 =*/34).string(message.arg_string);
                        if (message.arg_shape != null && message.hasOwnProperty("arg_shape"))
                            $root.syft_proto.types.syft.v1.Shape.encode(message.arg_shape, writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
                        if (message.arg_tensor != null && message.hasOwnProperty("arg_tensor"))
                            $root.syft_proto.types.torch.v1.TorchTensor.encode(message.arg_tensor, writer.uint32(/* id 6, wireType 2 =*/50).fork()).ldelim();
                        if (message.arg_torch_param != null && message.hasOwnProperty("arg_torch_param"))
                            $root.syft_proto.types.torch.v1.Parameter.encode(message.arg_torch_param, writer.uint32(/* id 7, wireType 2 =*/58).fork()).ldelim();
                        if (message.arg_pointer_tensor != null && message.hasOwnProperty("arg_pointer_tensor"))
                            $root.syft_proto.generic.pointers.v1.PointerTensor.encode(message.arg_pointer_tensor, writer.uint32(/* id 8, wireType 2 =*/66).fork()).ldelim();
                        if (message.arg_placeholder != null && message.hasOwnProperty("arg_placeholder"))
                            $root.syft_proto.execution.v1.Placeholder.encode(message.arg_placeholder, writer.uint32(/* id 9, wireType 2 =*/74).fork()).ldelim();
                        if (message.arg_placeholder_id != null && message.hasOwnProperty("arg_placeholder_id"))
                            $root.syft_proto.execution.v1.PlaceholderId.encode(message.arg_placeholder_id, writer.uint32(/* id 10, wireType 2 =*/82).fork()).ldelim();
                        return writer;
                    };

                    /**
                     * Encodes the specified Arg message, length delimited. Does not implicitly {@link syft_proto.types.syft.v1.Arg.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof syft_proto.types.syft.v1.Arg
                     * @static
                     * @param {syft_proto.types.syft.v1.IArg} message Arg message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    Arg.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };

                    /**
                     * Decodes an Arg message from the specified reader or buffer.
                     * @function decode
                     * @memberof syft_proto.types.syft.v1.Arg
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {syft_proto.types.syft.v1.Arg} Arg
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    Arg.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.syft_proto.types.syft.v1.Arg();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                message.arg_bool = reader.bool();
                                break;
                            case 2:
                                message.arg_int = reader.int32();
                                break;
                            case 3:
                                message.arg_float = reader.float();
                                break;
                            case 4:
                                message.arg_string = reader.string();
                                break;
                            case 5:
                                message.arg_shape = $root.syft_proto.types.syft.v1.Shape.decode(reader, reader.uint32());
                                break;
                            case 6:
                                message.arg_tensor = $root.syft_proto.types.torch.v1.TorchTensor.decode(reader, reader.uint32());
                                break;
                            case 7:
                                message.arg_torch_param = $root.syft_proto.types.torch.v1.Parameter.decode(reader, reader.uint32());
                                break;
                            case 8:
                                message.arg_pointer_tensor = $root.syft_proto.generic.pointers.v1.PointerTensor.decode(reader, reader.uint32());
                                break;
                            case 9:
                                message.arg_placeholder = $root.syft_proto.execution.v1.Placeholder.decode(reader, reader.uint32());
                                break;
                            case 10:
                                message.arg_placeholder_id = $root.syft_proto.execution.v1.PlaceholderId.decode(reader, reader.uint32());
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    /**
                     * Decodes an Arg message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof syft_proto.types.syft.v1.Arg
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {syft_proto.types.syft.v1.Arg} Arg
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    Arg.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    /**
                     * Verifies an Arg message.
                     * @function verify
                     * @memberof syft_proto.types.syft.v1.Arg
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    Arg.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        var properties = {};
                        if (message.arg_bool != null && message.hasOwnProperty("arg_bool")) {
                            properties.arg = 1;
                            if (typeof message.arg_bool !== "boolean")
                                return "arg_bool: boolean expected";
                        }
                        if (message.arg_int != null && message.hasOwnProperty("arg_int")) {
                            if (properties.arg === 1)
                                return "arg: multiple values";
                            properties.arg = 1;
                            if (!$util.isInteger(message.arg_int))
                                return "arg_int: integer expected";
                        }
                        if (message.arg_float != null && message.hasOwnProperty("arg_float")) {
                            if (properties.arg === 1)
                                return "arg: multiple values";
                            properties.arg = 1;
                            if (typeof message.arg_float !== "number")
                                return "arg_float: number expected";
                        }
                        if (message.arg_string != null && message.hasOwnProperty("arg_string")) {
                            if (properties.arg === 1)
                                return "arg: multiple values";
                            properties.arg = 1;
                            if (!$util.isString(message.arg_string))
                                return "arg_string: string expected";
                        }
                        if (message.arg_shape != null && message.hasOwnProperty("arg_shape")) {
                            if (properties.arg === 1)
                                return "arg: multiple values";
                            properties.arg = 1;
                            {
                                var error = $root.syft_proto.types.syft.v1.Shape.verify(message.arg_shape);
                                if (error)
                                    return "arg_shape." + error;
                            }
                        }
                        if (message.arg_tensor != null && message.hasOwnProperty("arg_tensor")) {
                            if (properties.arg === 1)
                                return "arg: multiple values";
                            properties.arg = 1;
                            {
                                var error = $root.syft_proto.types.torch.v1.TorchTensor.verify(message.arg_tensor);
                                if (error)
                                    return "arg_tensor." + error;
                            }
                        }
                        if (message.arg_torch_param != null && message.hasOwnProperty("arg_torch_param")) {
                            if (properties.arg === 1)
                                return "arg: multiple values";
                            properties.arg = 1;
                            {
                                var error = $root.syft_proto.types.torch.v1.Parameter.verify(message.arg_torch_param);
                                if (error)
                                    return "arg_torch_param." + error;
                            }
                        }
                        if (message.arg_pointer_tensor != null && message.hasOwnProperty("arg_pointer_tensor")) {
                            if (properties.arg === 1)
                                return "arg: multiple values";
                            properties.arg = 1;
                            {
                                var error = $root.syft_proto.generic.pointers.v1.PointerTensor.verify(message.arg_pointer_tensor);
                                if (error)
                                    return "arg_pointer_tensor." + error;
                            }
                        }
                        if (message.arg_placeholder != null && message.hasOwnProperty("arg_placeholder")) {
                            if (properties.arg === 1)
                                return "arg: multiple values";
                            properties.arg = 1;
                            {
                                var error = $root.syft_proto.execution.v1.Placeholder.verify(message.arg_placeholder);
                                if (error)
                                    return "arg_placeholder." + error;
                            }
                        }
                        if (message.arg_placeholder_id != null && message.hasOwnProperty("arg_placeholder_id")) {
                            if (properties.arg === 1)
                                return "arg: multiple values";
                            properties.arg = 1;
                            {
                                var error = $root.syft_proto.execution.v1.PlaceholderId.verify(message.arg_placeholder_id);
                                if (error)
                                    return "arg_placeholder_id." + error;
                            }
                        }
                        return null;
                    };

                    /**
                     * Creates an Arg message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof syft_proto.types.syft.v1.Arg
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {syft_proto.types.syft.v1.Arg} Arg
                     */
                    Arg.fromObject = function fromObject(object) {
                        if (object instanceof $root.syft_proto.types.syft.v1.Arg)
                            return object;
                        var message = new $root.syft_proto.types.syft.v1.Arg();
                        if (object.arg_bool != null)
                            message.arg_bool = Boolean(object.arg_bool);
                        if (object.arg_int != null)
                            message.arg_int = object.arg_int | 0;
                        if (object.arg_float != null)
                            message.arg_float = Number(object.arg_float);
                        if (object.arg_string != null)
                            message.arg_string = String(object.arg_string);
                        if (object.arg_shape != null) {
                            if (typeof object.arg_shape !== "object")
                                throw TypeError(".syft_proto.types.syft.v1.Arg.arg_shape: object expected");
                            message.arg_shape = $root.syft_proto.types.syft.v1.Shape.fromObject(object.arg_shape);
                        }
                        if (object.arg_tensor != null) {
                            if (typeof object.arg_tensor !== "object")
                                throw TypeError(".syft_proto.types.syft.v1.Arg.arg_tensor: object expected");
                            message.arg_tensor = $root.syft_proto.types.torch.v1.TorchTensor.fromObject(object.arg_tensor);
                        }
                        if (object.arg_torch_param != null) {
                            if (typeof object.arg_torch_param !== "object")
                                throw TypeError(".syft_proto.types.syft.v1.Arg.arg_torch_param: object expected");
                            message.arg_torch_param = $root.syft_proto.types.torch.v1.Parameter.fromObject(object.arg_torch_param);
                        }
                        if (object.arg_pointer_tensor != null) {
                            if (typeof object.arg_pointer_tensor !== "object")
                                throw TypeError(".syft_proto.types.syft.v1.Arg.arg_pointer_tensor: object expected");
                            message.arg_pointer_tensor = $root.syft_proto.generic.pointers.v1.PointerTensor.fromObject(object.arg_pointer_tensor);
                        }
                        if (object.arg_placeholder != null) {
                            if (typeof object.arg_placeholder !== "object")
                                throw TypeError(".syft_proto.types.syft.v1.Arg.arg_placeholder: object expected");
                            message.arg_placeholder = $root.syft_proto.execution.v1.Placeholder.fromObject(object.arg_placeholder);
                        }
                        if (object.arg_placeholder_id != null) {
                            if (typeof object.arg_placeholder_id !== "object")
                                throw TypeError(".syft_proto.types.syft.v1.Arg.arg_placeholder_id: object expected");
                            message.arg_placeholder_id = $root.syft_proto.execution.v1.PlaceholderId.fromObject(object.arg_placeholder_id);
                        }
                        return message;
                    };

                    /**
                     * Creates a plain object from an Arg message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof syft_proto.types.syft.v1.Arg
                     * @static
                     * @param {syft_proto.types.syft.v1.Arg} message Arg
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    Arg.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (message.arg_bool != null && message.hasOwnProperty("arg_bool")) {
                            object.arg_bool = message.arg_bool;
                            if (options.oneofs)
                                object.arg = "arg_bool";
                        }
                        if (message.arg_int != null && message.hasOwnProperty("arg_int")) {
                            object.arg_int = message.arg_int;
                            if (options.oneofs)
                                object.arg = "arg_int";
                        }
                        if (message.arg_float != null && message.hasOwnProperty("arg_float")) {
                            object.arg_float = options.json && !isFinite(message.arg_float) ? String(message.arg_float) : message.arg_float;
                            if (options.oneofs)
                                object.arg = "arg_float";
                        }
                        if (message.arg_string != null && message.hasOwnProperty("arg_string")) {
                            object.arg_string = message.arg_string;
                            if (options.oneofs)
                                object.arg = "arg_string";
                        }
                        if (message.arg_shape != null && message.hasOwnProperty("arg_shape")) {
                            object.arg_shape = $root.syft_proto.types.syft.v1.Shape.toObject(message.arg_shape, options);
                            if (options.oneofs)
                                object.arg = "arg_shape";
                        }
                        if (message.arg_tensor != null && message.hasOwnProperty("arg_tensor")) {
                            object.arg_tensor = $root.syft_proto.types.torch.v1.TorchTensor.toObject(message.arg_tensor, options);
                            if (options.oneofs)
                                object.arg = "arg_tensor";
                        }
                        if (message.arg_torch_param != null && message.hasOwnProperty("arg_torch_param")) {
                            object.arg_torch_param = $root.syft_proto.types.torch.v1.Parameter.toObject(message.arg_torch_param, options);
                            if (options.oneofs)
                                object.arg = "arg_torch_param";
                        }
                        if (message.arg_pointer_tensor != null && message.hasOwnProperty("arg_pointer_tensor")) {
                            object.arg_pointer_tensor = $root.syft_proto.generic.pointers.v1.PointerTensor.toObject(message.arg_pointer_tensor, options);
                            if (options.oneofs)
                                object.arg = "arg_pointer_tensor";
                        }
                        if (message.arg_placeholder != null && message.hasOwnProperty("arg_placeholder")) {
                            object.arg_placeholder = $root.syft_proto.execution.v1.Placeholder.toObject(message.arg_placeholder, options);
                            if (options.oneofs)
                                object.arg = "arg_placeholder";
                        }
                        if (message.arg_placeholder_id != null && message.hasOwnProperty("arg_placeholder_id")) {
                            object.arg_placeholder_id = $root.syft_proto.execution.v1.PlaceholderId.toObject(message.arg_placeholder_id, options);
                            if (options.oneofs)
                                object.arg = "arg_placeholder_id";
                        }
                        return object;
                    };

                    /**
                     * Converts this Arg to JSON.
                     * @function toJSON
                     * @memberof syft_proto.types.syft.v1.Arg
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    Arg.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    return Arg;
                })();

                v1.Id = (function() {

                    /**
                     * Properties of an Id.
                     * @memberof syft_proto.types.syft.v1
                     * @interface IId
                     * @property {number|Long|null} [id_int] Id id_int
                     * @property {string|null} [id_str] Id id_str
                     */

                    /**
                     * Constructs a new Id.
                     * @memberof syft_proto.types.syft.v1
                     * @classdesc Represents an Id.
                     * @implements IId
                     * @constructor
                     * @param {syft_proto.types.syft.v1.IId=} [properties] Properties to set
                     */
                    function Id(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * Id id_int.
                     * @member {number|Long} id_int
                     * @memberof syft_proto.types.syft.v1.Id
                     * @instance
                     */
                    Id.prototype.id_int = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

                    /**
                     * Id id_str.
                     * @member {string} id_str
                     * @memberof syft_proto.types.syft.v1.Id
                     * @instance
                     */
                    Id.prototype.id_str = "";

                    // OneOf field names bound to virtual getters and setters
                    var $oneOfFields;

                    /**
                     * Id id.
                     * @member {"id_int"|"id_str"|undefined} id
                     * @memberof syft_proto.types.syft.v1.Id
                     * @instance
                     */
                    Object.defineProperty(Id.prototype, "id", {
                        get: $util.oneOfGetter($oneOfFields = ["id_int", "id_str"]),
                        set: $util.oneOfSetter($oneOfFields)
                    });

                    /**
                     * Creates a new Id instance using the specified properties.
                     * @function create
                     * @memberof syft_proto.types.syft.v1.Id
                     * @static
                     * @param {syft_proto.types.syft.v1.IId=} [properties] Properties to set
                     * @returns {syft_proto.types.syft.v1.Id} Id instance
                     */
                    Id.create = function create(properties) {
                        return new Id(properties);
                    };

                    /**
                     * Encodes the specified Id message. Does not implicitly {@link syft_proto.types.syft.v1.Id.verify|verify} messages.
                     * @function encode
                     * @memberof syft_proto.types.syft.v1.Id
                     * @static
                     * @param {syft_proto.types.syft.v1.IId} message Id message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    Id.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.id_int != null && message.hasOwnProperty("id_int"))
                            writer.uint32(/* id 1, wireType 0 =*/8).int64(message.id_int);
                        if (message.id_str != null && message.hasOwnProperty("id_str"))
                            writer.uint32(/* id 2, wireType 2 =*/18).string(message.id_str);
                        return writer;
                    };

                    /**
                     * Encodes the specified Id message, length delimited. Does not implicitly {@link syft_proto.types.syft.v1.Id.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof syft_proto.types.syft.v1.Id
                     * @static
                     * @param {syft_proto.types.syft.v1.IId} message Id message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    Id.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };

                    /**
                     * Decodes an Id message from the specified reader or buffer.
                     * @function decode
                     * @memberof syft_proto.types.syft.v1.Id
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {syft_proto.types.syft.v1.Id} Id
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    Id.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.syft_proto.types.syft.v1.Id();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                message.id_int = reader.int64();
                                break;
                            case 2:
                                message.id_str = reader.string();
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    /**
                     * Decodes an Id message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof syft_proto.types.syft.v1.Id
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {syft_proto.types.syft.v1.Id} Id
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    Id.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    /**
                     * Verifies an Id message.
                     * @function verify
                     * @memberof syft_proto.types.syft.v1.Id
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    Id.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        var properties = {};
                        if (message.id_int != null && message.hasOwnProperty("id_int")) {
                            properties.id = 1;
                            if (!$util.isInteger(message.id_int) && !(message.id_int && $util.isInteger(message.id_int.low) && $util.isInteger(message.id_int.high)))
                                return "id_int: integer|Long expected";
                        }
                        if (message.id_str != null && message.hasOwnProperty("id_str")) {
                            if (properties.id === 1)
                                return "id: multiple values";
                            properties.id = 1;
                            if (!$util.isString(message.id_str))
                                return "id_str: string expected";
                        }
                        return null;
                    };

                    /**
                     * Creates an Id message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof syft_proto.types.syft.v1.Id
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {syft_proto.types.syft.v1.Id} Id
                     */
                    Id.fromObject = function fromObject(object) {
                        if (object instanceof $root.syft_proto.types.syft.v1.Id)
                            return object;
                        var message = new $root.syft_proto.types.syft.v1.Id();
                        if (object.id_int != null)
                            if ($util.Long)
                                (message.id_int = $util.Long.fromValue(object.id_int)).unsigned = false;
                            else if (typeof object.id_int === "string")
                                message.id_int = parseInt(object.id_int, 10);
                            else if (typeof object.id_int === "number")
                                message.id_int = object.id_int;
                            else if (typeof object.id_int === "object")
                                message.id_int = new $util.LongBits(object.id_int.low >>> 0, object.id_int.high >>> 0).toNumber();
                        if (object.id_str != null)
                            message.id_str = String(object.id_str);
                        return message;
                    };

                    /**
                     * Creates a plain object from an Id message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof syft_proto.types.syft.v1.Id
                     * @static
                     * @param {syft_proto.types.syft.v1.Id} message Id
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    Id.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (message.id_int != null && message.hasOwnProperty("id_int")) {
                            if (typeof message.id_int === "number")
                                object.id_int = options.longs === String ? String(message.id_int) : message.id_int;
                            else
                                object.id_int = options.longs === String ? $util.Long.prototype.toString.call(message.id_int) : options.longs === Number ? new $util.LongBits(message.id_int.low >>> 0, message.id_int.high >>> 0).toNumber() : message.id_int;
                            if (options.oneofs)
                                object.id = "id_int";
                        }
                        if (message.id_str != null && message.hasOwnProperty("id_str")) {
                            object.id_str = message.id_str;
                            if (options.oneofs)
                                object.id = "id_str";
                        }
                        return object;
                    };

                    /**
                     * Converts this Id to JSON.
                     * @function toJSON
                     * @memberof syft_proto.types.syft.v1.Id
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    Id.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    return Id;
                })();

                v1.Shape = (function() {

                    /**
                     * Properties of a Shape.
                     * @memberof syft_proto.types.syft.v1
                     * @interface IShape
                     * @property {Array.<number>|null} [dims] Shape dims
                     */

                    /**
                     * Constructs a new Shape.
                     * @memberof syft_proto.types.syft.v1
                     * @classdesc Represents a Shape.
                     * @implements IShape
                     * @constructor
                     * @param {syft_proto.types.syft.v1.IShape=} [properties] Properties to set
                     */
                    function Shape(properties) {
                        this.dims = [];
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * Shape dims.
                     * @member {Array.<number>} dims
                     * @memberof syft_proto.types.syft.v1.Shape
                     * @instance
                     */
                    Shape.prototype.dims = $util.emptyArray;

                    /**
                     * Creates a new Shape instance using the specified properties.
                     * @function create
                     * @memberof syft_proto.types.syft.v1.Shape
                     * @static
                     * @param {syft_proto.types.syft.v1.IShape=} [properties] Properties to set
                     * @returns {syft_proto.types.syft.v1.Shape} Shape instance
                     */
                    Shape.create = function create(properties) {
                        return new Shape(properties);
                    };

                    /**
                     * Encodes the specified Shape message. Does not implicitly {@link syft_proto.types.syft.v1.Shape.verify|verify} messages.
                     * @function encode
                     * @memberof syft_proto.types.syft.v1.Shape
                     * @static
                     * @param {syft_proto.types.syft.v1.IShape} message Shape message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    Shape.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.dims != null && message.dims.length) {
                            writer.uint32(/* id 1, wireType 2 =*/10).fork();
                            for (var i = 0; i < message.dims.length; ++i)
                                writer.int32(message.dims[i]);
                            writer.ldelim();
                        }
                        return writer;
                    };

                    /**
                     * Encodes the specified Shape message, length delimited. Does not implicitly {@link syft_proto.types.syft.v1.Shape.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof syft_proto.types.syft.v1.Shape
                     * @static
                     * @param {syft_proto.types.syft.v1.IShape} message Shape message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    Shape.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };

                    /**
                     * Decodes a Shape message from the specified reader or buffer.
                     * @function decode
                     * @memberof syft_proto.types.syft.v1.Shape
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {syft_proto.types.syft.v1.Shape} Shape
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    Shape.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.syft_proto.types.syft.v1.Shape();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                if (!(message.dims && message.dims.length))
                                    message.dims = [];
                                if ((tag & 7) === 2) {
                                    var end2 = reader.uint32() + reader.pos;
                                    while (reader.pos < end2)
                                        message.dims.push(reader.int32());
                                } else
                                    message.dims.push(reader.int32());
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    /**
                     * Decodes a Shape message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof syft_proto.types.syft.v1.Shape
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {syft_proto.types.syft.v1.Shape} Shape
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    Shape.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    /**
                     * Verifies a Shape message.
                     * @function verify
                     * @memberof syft_proto.types.syft.v1.Shape
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    Shape.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.dims != null && message.hasOwnProperty("dims")) {
                            if (!Array.isArray(message.dims))
                                return "dims: array expected";
                            for (var i = 0; i < message.dims.length; ++i)
                                if (!$util.isInteger(message.dims[i]))
                                    return "dims: integer[] expected";
                        }
                        return null;
                    };

                    /**
                     * Creates a Shape message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof syft_proto.types.syft.v1.Shape
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {syft_proto.types.syft.v1.Shape} Shape
                     */
                    Shape.fromObject = function fromObject(object) {
                        if (object instanceof $root.syft_proto.types.syft.v1.Shape)
                            return object;
                        var message = new $root.syft_proto.types.syft.v1.Shape();
                        if (object.dims) {
                            if (!Array.isArray(object.dims))
                                throw TypeError(".syft_proto.types.syft.v1.Shape.dims: array expected");
                            message.dims = [];
                            for (var i = 0; i < object.dims.length; ++i)
                                message.dims[i] = object.dims[i] | 0;
                        }
                        return message;
                    };

                    /**
                     * Creates a plain object from a Shape message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof syft_proto.types.syft.v1.Shape
                     * @static
                     * @param {syft_proto.types.syft.v1.Shape} message Shape
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    Shape.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.arrays || options.defaults)
                            object.dims = [];
                        if (message.dims && message.dims.length) {
                            object.dims = [];
                            for (var j = 0; j < message.dims.length; ++j)
                                object.dims[j] = message.dims[j];
                        }
                        return object;
                    };

                    /**
                     * Converts this Shape to JSON.
                     * @function toJSON
                     * @memberof syft_proto.types.syft.v1.Shape
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    Shape.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    return Shape;
                })();

                return v1;
            })();

            return syft;
        })();

        types.torch = (function() {

            /**
             * Namespace torch.
             * @memberof syft_proto.types
             * @namespace
             */
            var torch = {};

            torch.v1 = (function() {

                /**
                 * Namespace v1.
                 * @memberof syft_proto.types.torch
                 * @namespace
                 */
                var v1 = {};

                v1.TorchTensor = (function() {

                    /**
                     * Properties of a TorchTensor.
                     * @memberof syft_proto.types.torch.v1
                     * @interface ITorchTensor
                     * @property {syft_proto.types.syft.v1.IId|null} [id] TorchTensor id
                     * @property {syft_proto.types.torch.v1.ITensorData|null} [contents_data] TorchTensor contents_data
                     * @property {Uint8Array|null} [contents_bin] TorchTensor contents_bin
                     * @property {syft_proto.types.torch.v1.ITorchTensor|null} [chain] TorchTensor chain
                     * @property {syft_proto.types.torch.v1.ITorchTensor|null} [grad_chain] TorchTensor grad_chain
                     * @property {Array.<string>|null} [tags] TorchTensor tags
                     * @property {string|null} [description] TorchTensor description
                     * @property {syft_proto.types.torch.v1.TorchTensor.Serializer|null} [serializer] TorchTensor serializer
                     */

                    /**
                     * Constructs a new TorchTensor.
                     * @memberof syft_proto.types.torch.v1
                     * @classdesc Represents a TorchTensor.
                     * @implements ITorchTensor
                     * @constructor
                     * @param {syft_proto.types.torch.v1.ITorchTensor=} [properties] Properties to set
                     */
                    function TorchTensor(properties) {
                        this.tags = [];
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * TorchTensor id.
                     * @member {syft_proto.types.syft.v1.IId|null|undefined} id
                     * @memberof syft_proto.types.torch.v1.TorchTensor
                     * @instance
                     */
                    TorchTensor.prototype.id = null;

                    /**
                     * TorchTensor contents_data.
                     * @member {syft_proto.types.torch.v1.ITensorData|null|undefined} contents_data
                     * @memberof syft_proto.types.torch.v1.TorchTensor
                     * @instance
                     */
                    TorchTensor.prototype.contents_data = null;

                    /**
                     * TorchTensor contents_bin.
                     * @member {Uint8Array} contents_bin
                     * @memberof syft_proto.types.torch.v1.TorchTensor
                     * @instance
                     */
                    TorchTensor.prototype.contents_bin = $util.newBuffer([]);

                    /**
                     * TorchTensor chain.
                     * @member {syft_proto.types.torch.v1.ITorchTensor|null|undefined} chain
                     * @memberof syft_proto.types.torch.v1.TorchTensor
                     * @instance
                     */
                    TorchTensor.prototype.chain = null;

                    /**
                     * TorchTensor grad_chain.
                     * @member {syft_proto.types.torch.v1.ITorchTensor|null|undefined} grad_chain
                     * @memberof syft_proto.types.torch.v1.TorchTensor
                     * @instance
                     */
                    TorchTensor.prototype.grad_chain = null;

                    /**
                     * TorchTensor tags.
                     * @member {Array.<string>} tags
                     * @memberof syft_proto.types.torch.v1.TorchTensor
                     * @instance
                     */
                    TorchTensor.prototype.tags = $util.emptyArray;

                    /**
                     * TorchTensor description.
                     * @member {string} description
                     * @memberof syft_proto.types.torch.v1.TorchTensor
                     * @instance
                     */
                    TorchTensor.prototype.description = "";

                    /**
                     * TorchTensor serializer.
                     * @member {syft_proto.types.torch.v1.TorchTensor.Serializer} serializer
                     * @memberof syft_proto.types.torch.v1.TorchTensor
                     * @instance
                     */
                    TorchTensor.prototype.serializer = 0;

                    // OneOf field names bound to virtual getters and setters
                    var $oneOfFields;

                    /**
                     * TorchTensor contents.
                     * @member {"contents_data"|"contents_bin"|undefined} contents
                     * @memberof syft_proto.types.torch.v1.TorchTensor
                     * @instance
                     */
                    Object.defineProperty(TorchTensor.prototype, "contents", {
                        get: $util.oneOfGetter($oneOfFields = ["contents_data", "contents_bin"]),
                        set: $util.oneOfSetter($oneOfFields)
                    });

                    /**
                     * Creates a new TorchTensor instance using the specified properties.
                     * @function create
                     * @memberof syft_proto.types.torch.v1.TorchTensor
                     * @static
                     * @param {syft_proto.types.torch.v1.ITorchTensor=} [properties] Properties to set
                     * @returns {syft_proto.types.torch.v1.TorchTensor} TorchTensor instance
                     */
                    TorchTensor.create = function create(properties) {
                        return new TorchTensor(properties);
                    };

                    /**
                     * Encodes the specified TorchTensor message. Does not implicitly {@link syft_proto.types.torch.v1.TorchTensor.verify|verify} messages.
                     * @function encode
                     * @memberof syft_proto.types.torch.v1.TorchTensor
                     * @static
                     * @param {syft_proto.types.torch.v1.ITorchTensor} message TorchTensor message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    TorchTensor.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.id != null && message.hasOwnProperty("id"))
                            $root.syft_proto.types.syft.v1.Id.encode(message.id, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                        if (message.contents_data != null && message.hasOwnProperty("contents_data"))
                            $root.syft_proto.types.torch.v1.TensorData.encode(message.contents_data, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                        if (message.contents_bin != null && message.hasOwnProperty("contents_bin"))
                            writer.uint32(/* id 3, wireType 2 =*/26).bytes(message.contents_bin);
                        if (message.chain != null && message.hasOwnProperty("chain"))
                            $root.syft_proto.types.torch.v1.TorchTensor.encode(message.chain, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
                        if (message.grad_chain != null && message.hasOwnProperty("grad_chain"))
                            $root.syft_proto.types.torch.v1.TorchTensor.encode(message.grad_chain, writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
                        if (message.tags != null && message.tags.length)
                            for (var i = 0; i < message.tags.length; ++i)
                                writer.uint32(/* id 6, wireType 2 =*/50).string(message.tags[i]);
                        if (message.description != null && message.hasOwnProperty("description"))
                            writer.uint32(/* id 7, wireType 2 =*/58).string(message.description);
                        if (message.serializer != null && message.hasOwnProperty("serializer"))
                            writer.uint32(/* id 8, wireType 0 =*/64).int32(message.serializer);
                        return writer;
                    };

                    /**
                     * Encodes the specified TorchTensor message, length delimited. Does not implicitly {@link syft_proto.types.torch.v1.TorchTensor.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof syft_proto.types.torch.v1.TorchTensor
                     * @static
                     * @param {syft_proto.types.torch.v1.ITorchTensor} message TorchTensor message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    TorchTensor.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };

                    /**
                     * Decodes a TorchTensor message from the specified reader or buffer.
                     * @function decode
                     * @memberof syft_proto.types.torch.v1.TorchTensor
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {syft_proto.types.torch.v1.TorchTensor} TorchTensor
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    TorchTensor.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.syft_proto.types.torch.v1.TorchTensor();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                message.id = $root.syft_proto.types.syft.v1.Id.decode(reader, reader.uint32());
                                break;
                            case 2:
                                message.contents_data = $root.syft_proto.types.torch.v1.TensorData.decode(reader, reader.uint32());
                                break;
                            case 3:
                                message.contents_bin = reader.bytes();
                                break;
                            case 4:
                                message.chain = $root.syft_proto.types.torch.v1.TorchTensor.decode(reader, reader.uint32());
                                break;
                            case 5:
                                message.grad_chain = $root.syft_proto.types.torch.v1.TorchTensor.decode(reader, reader.uint32());
                                break;
                            case 6:
                                if (!(message.tags && message.tags.length))
                                    message.tags = [];
                                message.tags.push(reader.string());
                                break;
                            case 7:
                                message.description = reader.string();
                                break;
                            case 8:
                                message.serializer = reader.int32();
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    /**
                     * Decodes a TorchTensor message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof syft_proto.types.torch.v1.TorchTensor
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {syft_proto.types.torch.v1.TorchTensor} TorchTensor
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    TorchTensor.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    /**
                     * Verifies a TorchTensor message.
                     * @function verify
                     * @memberof syft_proto.types.torch.v1.TorchTensor
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    TorchTensor.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        var properties = {};
                        if (message.id != null && message.hasOwnProperty("id")) {
                            var error = $root.syft_proto.types.syft.v1.Id.verify(message.id);
                            if (error)
                                return "id." + error;
                        }
                        if (message.contents_data != null && message.hasOwnProperty("contents_data")) {
                            properties.contents = 1;
                            {
                                var error = $root.syft_proto.types.torch.v1.TensorData.verify(message.contents_data);
                                if (error)
                                    return "contents_data." + error;
                            }
                        }
                        if (message.contents_bin != null && message.hasOwnProperty("contents_bin")) {
                            if (properties.contents === 1)
                                return "contents: multiple values";
                            properties.contents = 1;
                            if (!(message.contents_bin && typeof message.contents_bin.length === "number" || $util.isString(message.contents_bin)))
                                return "contents_bin: buffer expected";
                        }
                        if (message.chain != null && message.hasOwnProperty("chain")) {
                            var error = $root.syft_proto.types.torch.v1.TorchTensor.verify(message.chain);
                            if (error)
                                return "chain." + error;
                        }
                        if (message.grad_chain != null && message.hasOwnProperty("grad_chain")) {
                            var error = $root.syft_proto.types.torch.v1.TorchTensor.verify(message.grad_chain);
                            if (error)
                                return "grad_chain." + error;
                        }
                        if (message.tags != null && message.hasOwnProperty("tags")) {
                            if (!Array.isArray(message.tags))
                                return "tags: array expected";
                            for (var i = 0; i < message.tags.length; ++i)
                                if (!$util.isString(message.tags[i]))
                                    return "tags: string[] expected";
                        }
                        if (message.description != null && message.hasOwnProperty("description"))
                            if (!$util.isString(message.description))
                                return "description: string expected";
                        if (message.serializer != null && message.hasOwnProperty("serializer"))
                            switch (message.serializer) {
                            default:
                                return "serializer: enum value expected";
                            case 0:
                            case 1:
                            case 2:
                            case 3:
                            case 4:
                                break;
                            }
                        return null;
                    };

                    /**
                     * Creates a TorchTensor message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof syft_proto.types.torch.v1.TorchTensor
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {syft_proto.types.torch.v1.TorchTensor} TorchTensor
                     */
                    TorchTensor.fromObject = function fromObject(object) {
                        if (object instanceof $root.syft_proto.types.torch.v1.TorchTensor)
                            return object;
                        var message = new $root.syft_proto.types.torch.v1.TorchTensor();
                        if (object.id != null) {
                            if (typeof object.id !== "object")
                                throw TypeError(".syft_proto.types.torch.v1.TorchTensor.id: object expected");
                            message.id = $root.syft_proto.types.syft.v1.Id.fromObject(object.id);
                        }
                        if (object.contents_data != null) {
                            if (typeof object.contents_data !== "object")
                                throw TypeError(".syft_proto.types.torch.v1.TorchTensor.contents_data: object expected");
                            message.contents_data = $root.syft_proto.types.torch.v1.TensorData.fromObject(object.contents_data);
                        }
                        if (object.contents_bin != null)
                            if (typeof object.contents_bin === "string")
                                $util.base64.decode(object.contents_bin, message.contents_bin = $util.newBuffer($util.base64.length(object.contents_bin)), 0);
                            else if (object.contents_bin.length)
                                message.contents_bin = object.contents_bin;
                        if (object.chain != null) {
                            if (typeof object.chain !== "object")
                                throw TypeError(".syft_proto.types.torch.v1.TorchTensor.chain: object expected");
                            message.chain = $root.syft_proto.types.torch.v1.TorchTensor.fromObject(object.chain);
                        }
                        if (object.grad_chain != null) {
                            if (typeof object.grad_chain !== "object")
                                throw TypeError(".syft_proto.types.torch.v1.TorchTensor.grad_chain: object expected");
                            message.grad_chain = $root.syft_proto.types.torch.v1.TorchTensor.fromObject(object.grad_chain);
                        }
                        if (object.tags) {
                            if (!Array.isArray(object.tags))
                                throw TypeError(".syft_proto.types.torch.v1.TorchTensor.tags: array expected");
                            message.tags = [];
                            for (var i = 0; i < object.tags.length; ++i)
                                message.tags[i] = String(object.tags[i]);
                        }
                        if (object.description != null)
                            message.description = String(object.description);
                        switch (object.serializer) {
                        case "SERIALIZER_UNSPECIFIED":
                        case 0:
                            message.serializer = 0;
                            break;
                        case "SERIALIZER_TORCH":
                        case 1:
                            message.serializer = 1;
                            break;
                        case "SERIALIZER_NUMPY":
                        case 2:
                            message.serializer = 2;
                            break;
                        case "SERIALIZER_TF":
                        case 3:
                            message.serializer = 3;
                            break;
                        case "SERIALIZER_ALL":
                        case 4:
                            message.serializer = 4;
                            break;
                        }
                        return message;
                    };

                    /**
                     * Creates a plain object from a TorchTensor message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof syft_proto.types.torch.v1.TorchTensor
                     * @static
                     * @param {syft_proto.types.torch.v1.TorchTensor} message TorchTensor
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    TorchTensor.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.arrays || options.defaults)
                            object.tags = [];
                        if (options.defaults) {
                            object.id = null;
                            object.chain = null;
                            object.grad_chain = null;
                            object.description = "";
                            object.serializer = options.enums === String ? "SERIALIZER_UNSPECIFIED" : 0;
                        }
                        if (message.id != null && message.hasOwnProperty("id"))
                            object.id = $root.syft_proto.types.syft.v1.Id.toObject(message.id, options);
                        if (message.contents_data != null && message.hasOwnProperty("contents_data")) {
                            object.contents_data = $root.syft_proto.types.torch.v1.TensorData.toObject(message.contents_data, options);
                            if (options.oneofs)
                                object.contents = "contents_data";
                        }
                        if (message.contents_bin != null && message.hasOwnProperty("contents_bin")) {
                            object.contents_bin = options.bytes === String ? $util.base64.encode(message.contents_bin, 0, message.contents_bin.length) : options.bytes === Array ? Array.prototype.slice.call(message.contents_bin) : message.contents_bin;
                            if (options.oneofs)
                                object.contents = "contents_bin";
                        }
                        if (message.chain != null && message.hasOwnProperty("chain"))
                            object.chain = $root.syft_proto.types.torch.v1.TorchTensor.toObject(message.chain, options);
                        if (message.grad_chain != null && message.hasOwnProperty("grad_chain"))
                            object.grad_chain = $root.syft_proto.types.torch.v1.TorchTensor.toObject(message.grad_chain, options);
                        if (message.tags && message.tags.length) {
                            object.tags = [];
                            for (var j = 0; j < message.tags.length; ++j)
                                object.tags[j] = message.tags[j];
                        }
                        if (message.description != null && message.hasOwnProperty("description"))
                            object.description = message.description;
                        if (message.serializer != null && message.hasOwnProperty("serializer"))
                            object.serializer = options.enums === String ? $root.syft_proto.types.torch.v1.TorchTensor.Serializer[message.serializer] : message.serializer;
                        return object;
                    };

                    /**
                     * Converts this TorchTensor to JSON.
                     * @function toJSON
                     * @memberof syft_proto.types.torch.v1.TorchTensor
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    TorchTensor.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    /**
                     * Serializer enum.
                     * @name syft_proto.types.torch.v1.TorchTensor.Serializer
                     * @enum {string}
                     * @property {number} SERIALIZER_UNSPECIFIED=0 SERIALIZER_UNSPECIFIED value
                     * @property {number} SERIALIZER_TORCH=1 SERIALIZER_TORCH value
                     * @property {number} SERIALIZER_NUMPY=2 SERIALIZER_NUMPY value
                     * @property {number} SERIALIZER_TF=3 SERIALIZER_TF value
                     * @property {number} SERIALIZER_ALL=4 SERIALIZER_ALL value
                     */
                    TorchTensor.Serializer = (function() {
                        var valuesById = {}, values = Object.create(valuesById);
                        values[valuesById[0] = "SERIALIZER_UNSPECIFIED"] = 0;
                        values[valuesById[1] = "SERIALIZER_TORCH"] = 1;
                        values[valuesById[2] = "SERIALIZER_NUMPY"] = 2;
                        values[valuesById[3] = "SERIALIZER_TF"] = 3;
                        values[valuesById[4] = "SERIALIZER_ALL"] = 4;
                        return values;
                    })();

                    return TorchTensor;
                })();

                v1.TensorData = (function() {

                    /**
                     * Properties of a TensorData.
                     * @memberof syft_proto.types.torch.v1
                     * @interface ITensorData
                     * @property {syft_proto.types.torch.v1.ISize|null} [shape] TensorData shape
                     * @property {string|null} [dtype] TensorData dtype
                     * @property {boolean|null} [is_quantized] TensorData is_quantized
                     * @property {number|null} [scale] TensorData scale
                     * @property {number|null} [zero_point] TensorData zero_point
                     * @property {Array.<number>|null} [contents_uint8] TensorData contents_uint8
                     * @property {Array.<number>|null} [contents_int8] TensorData contents_int8
                     * @property {Array.<number>|null} [contents_int16] TensorData contents_int16
                     * @property {Array.<number>|null} [contents_int32] TensorData contents_int32
                     * @property {Array.<number|Long>|null} [contents_int64] TensorData contents_int64
                     * @property {Array.<number>|null} [contents_float16] TensorData contents_float16
                     * @property {Array.<number>|null} [contents_float32] TensorData contents_float32
                     * @property {Array.<number>|null} [contents_float64] TensorData contents_float64
                     * @property {Array.<boolean>|null} [contents_bool] TensorData contents_bool
                     * @property {Array.<number>|null} [contents_qint8] TensorData contents_qint8
                     * @property {Array.<number>|null} [contents_quint8] TensorData contents_quint8
                     * @property {Array.<number>|null} [contents_qint32] TensorData contents_qint32
                     * @property {Array.<number>|null} [contents_bfloat16] TensorData contents_bfloat16
                     */

                    /**
                     * Constructs a new TensorData.
                     * @memberof syft_proto.types.torch.v1
                     * @classdesc Represents a TensorData.
                     * @implements ITensorData
                     * @constructor
                     * @param {syft_proto.types.torch.v1.ITensorData=} [properties] Properties to set
                     */
                    function TensorData(properties) {
                        this.contents_uint8 = [];
                        this.contents_int8 = [];
                        this.contents_int16 = [];
                        this.contents_int32 = [];
                        this.contents_int64 = [];
                        this.contents_float16 = [];
                        this.contents_float32 = [];
                        this.contents_float64 = [];
                        this.contents_bool = [];
                        this.contents_qint8 = [];
                        this.contents_quint8 = [];
                        this.contents_qint32 = [];
                        this.contents_bfloat16 = [];
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * TensorData shape.
                     * @member {syft_proto.types.torch.v1.ISize|null|undefined} shape
                     * @memberof syft_proto.types.torch.v1.TensorData
                     * @instance
                     */
                    TensorData.prototype.shape = null;

                    /**
                     * TensorData dtype.
                     * @member {string} dtype
                     * @memberof syft_proto.types.torch.v1.TensorData
                     * @instance
                     */
                    TensorData.prototype.dtype = "";

                    /**
                     * TensorData is_quantized.
                     * @member {boolean} is_quantized
                     * @memberof syft_proto.types.torch.v1.TensorData
                     * @instance
                     */
                    TensorData.prototype.is_quantized = false;

                    /**
                     * TensorData scale.
                     * @member {number} scale
                     * @memberof syft_proto.types.torch.v1.TensorData
                     * @instance
                     */
                    TensorData.prototype.scale = 0;

                    /**
                     * TensorData zero_point.
                     * @member {number} zero_point
                     * @memberof syft_proto.types.torch.v1.TensorData
                     * @instance
                     */
                    TensorData.prototype.zero_point = 0;

                    /**
                     * TensorData contents_uint8.
                     * @member {Array.<number>} contents_uint8
                     * @memberof syft_proto.types.torch.v1.TensorData
                     * @instance
                     */
                    TensorData.prototype.contents_uint8 = $util.emptyArray;

                    /**
                     * TensorData contents_int8.
                     * @member {Array.<number>} contents_int8
                     * @memberof syft_proto.types.torch.v1.TensorData
                     * @instance
                     */
                    TensorData.prototype.contents_int8 = $util.emptyArray;

                    /**
                     * TensorData contents_int16.
                     * @member {Array.<number>} contents_int16
                     * @memberof syft_proto.types.torch.v1.TensorData
                     * @instance
                     */
                    TensorData.prototype.contents_int16 = $util.emptyArray;

                    /**
                     * TensorData contents_int32.
                     * @member {Array.<number>} contents_int32
                     * @memberof syft_proto.types.torch.v1.TensorData
                     * @instance
                     */
                    TensorData.prototype.contents_int32 = $util.emptyArray;

                    /**
                     * TensorData contents_int64.
                     * @member {Array.<number|Long>} contents_int64
                     * @memberof syft_proto.types.torch.v1.TensorData
                     * @instance
                     */
                    TensorData.prototype.contents_int64 = $util.emptyArray;

                    /**
                     * TensorData contents_float16.
                     * @member {Array.<number>} contents_float16
                     * @memberof syft_proto.types.torch.v1.TensorData
                     * @instance
                     */
                    TensorData.prototype.contents_float16 = $util.emptyArray;

                    /**
                     * TensorData contents_float32.
                     * @member {Array.<number>} contents_float32
                     * @memberof syft_proto.types.torch.v1.TensorData
                     * @instance
                     */
                    TensorData.prototype.contents_float32 = $util.emptyArray;

                    /**
                     * TensorData contents_float64.
                     * @member {Array.<number>} contents_float64
                     * @memberof syft_proto.types.torch.v1.TensorData
                     * @instance
                     */
                    TensorData.prototype.contents_float64 = $util.emptyArray;

                    /**
                     * TensorData contents_bool.
                     * @member {Array.<boolean>} contents_bool
                     * @memberof syft_proto.types.torch.v1.TensorData
                     * @instance
                     */
                    TensorData.prototype.contents_bool = $util.emptyArray;

                    /**
                     * TensorData contents_qint8.
                     * @member {Array.<number>} contents_qint8
                     * @memberof syft_proto.types.torch.v1.TensorData
                     * @instance
                     */
                    TensorData.prototype.contents_qint8 = $util.emptyArray;

                    /**
                     * TensorData contents_quint8.
                     * @member {Array.<number>} contents_quint8
                     * @memberof syft_proto.types.torch.v1.TensorData
                     * @instance
                     */
                    TensorData.prototype.contents_quint8 = $util.emptyArray;

                    /**
                     * TensorData contents_qint32.
                     * @member {Array.<number>} contents_qint32
                     * @memberof syft_proto.types.torch.v1.TensorData
                     * @instance
                     */
                    TensorData.prototype.contents_qint32 = $util.emptyArray;

                    /**
                     * TensorData contents_bfloat16.
                     * @member {Array.<number>} contents_bfloat16
                     * @memberof syft_proto.types.torch.v1.TensorData
                     * @instance
                     */
                    TensorData.prototype.contents_bfloat16 = $util.emptyArray;

                    /**
                     * Creates a new TensorData instance using the specified properties.
                     * @function create
                     * @memberof syft_proto.types.torch.v1.TensorData
                     * @static
                     * @param {syft_proto.types.torch.v1.ITensorData=} [properties] Properties to set
                     * @returns {syft_proto.types.torch.v1.TensorData} TensorData instance
                     */
                    TensorData.create = function create(properties) {
                        return new TensorData(properties);
                    };

                    /**
                     * Encodes the specified TensorData message. Does not implicitly {@link syft_proto.types.torch.v1.TensorData.verify|verify} messages.
                     * @function encode
                     * @memberof syft_proto.types.torch.v1.TensorData
                     * @static
                     * @param {syft_proto.types.torch.v1.ITensorData} message TensorData message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    TensorData.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.shape != null && message.hasOwnProperty("shape"))
                            $root.syft_proto.types.torch.v1.Size.encode(message.shape, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                        if (message.dtype != null && message.hasOwnProperty("dtype"))
                            writer.uint32(/* id 2, wireType 2 =*/18).string(message.dtype);
                        if (message.is_quantized != null && message.hasOwnProperty("is_quantized"))
                            writer.uint32(/* id 3, wireType 0 =*/24).bool(message.is_quantized);
                        if (message.scale != null && message.hasOwnProperty("scale"))
                            writer.uint32(/* id 4, wireType 5 =*/37).float(message.scale);
                        if (message.zero_point != null && message.hasOwnProperty("zero_point"))
                            writer.uint32(/* id 5, wireType 0 =*/40).int32(message.zero_point);
                        if (message.contents_uint8 != null && message.contents_uint8.length) {
                            writer.uint32(/* id 16, wireType 2 =*/130).fork();
                            for (var i = 0; i < message.contents_uint8.length; ++i)
                                writer.uint32(message.contents_uint8[i]);
                            writer.ldelim();
                        }
                        if (message.contents_int8 != null && message.contents_int8.length) {
                            writer.uint32(/* id 17, wireType 2 =*/138).fork();
                            for (var i = 0; i < message.contents_int8.length; ++i)
                                writer.int32(message.contents_int8[i]);
                            writer.ldelim();
                        }
                        if (message.contents_int16 != null && message.contents_int16.length) {
                            writer.uint32(/* id 18, wireType 2 =*/146).fork();
                            for (var i = 0; i < message.contents_int16.length; ++i)
                                writer.int32(message.contents_int16[i]);
                            writer.ldelim();
                        }
                        if (message.contents_int32 != null && message.contents_int32.length) {
                            writer.uint32(/* id 19, wireType 2 =*/154).fork();
                            for (var i = 0; i < message.contents_int32.length; ++i)
                                writer.int32(message.contents_int32[i]);
                            writer.ldelim();
                        }
                        if (message.contents_int64 != null && message.contents_int64.length) {
                            writer.uint32(/* id 20, wireType 2 =*/162).fork();
                            for (var i = 0; i < message.contents_int64.length; ++i)
                                writer.int64(message.contents_int64[i]);
                            writer.ldelim();
                        }
                        if (message.contents_float16 != null && message.contents_float16.length) {
                            writer.uint32(/* id 21, wireType 2 =*/170).fork();
                            for (var i = 0; i < message.contents_float16.length; ++i)
                                writer.float(message.contents_float16[i]);
                            writer.ldelim();
                        }
                        if (message.contents_float32 != null && message.contents_float32.length) {
                            writer.uint32(/* id 22, wireType 2 =*/178).fork();
                            for (var i = 0; i < message.contents_float32.length; ++i)
                                writer.float(message.contents_float32[i]);
                            writer.ldelim();
                        }
                        if (message.contents_float64 != null && message.contents_float64.length) {
                            writer.uint32(/* id 23, wireType 2 =*/186).fork();
                            for (var i = 0; i < message.contents_float64.length; ++i)
                                writer.double(message.contents_float64[i]);
                            writer.ldelim();
                        }
                        if (message.contents_bool != null && message.contents_bool.length) {
                            writer.uint32(/* id 24, wireType 2 =*/194).fork();
                            for (var i = 0; i < message.contents_bool.length; ++i)
                                writer.bool(message.contents_bool[i]);
                            writer.ldelim();
                        }
                        if (message.contents_qint8 != null && message.contents_qint8.length) {
                            writer.uint32(/* id 25, wireType 2 =*/202).fork();
                            for (var i = 0; i < message.contents_qint8.length; ++i)
                                writer.sint32(message.contents_qint8[i]);
                            writer.ldelim();
                        }
                        if (message.contents_quint8 != null && message.contents_quint8.length) {
                            writer.uint32(/* id 26, wireType 2 =*/210).fork();
                            for (var i = 0; i < message.contents_quint8.length; ++i)
                                writer.uint32(message.contents_quint8[i]);
                            writer.ldelim();
                        }
                        if (message.contents_qint32 != null && message.contents_qint32.length) {
                            writer.uint32(/* id 27, wireType 2 =*/218).fork();
                            for (var i = 0; i < message.contents_qint32.length; ++i)
                                writer.sint32(message.contents_qint32[i]);
                            writer.ldelim();
                        }
                        if (message.contents_bfloat16 != null && message.contents_bfloat16.length) {
                            writer.uint32(/* id 28, wireType 2 =*/226).fork();
                            for (var i = 0; i < message.contents_bfloat16.length; ++i)
                                writer.float(message.contents_bfloat16[i]);
                            writer.ldelim();
                        }
                        return writer;
                    };

                    /**
                     * Encodes the specified TensorData message, length delimited. Does not implicitly {@link syft_proto.types.torch.v1.TensorData.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof syft_proto.types.torch.v1.TensorData
                     * @static
                     * @param {syft_proto.types.torch.v1.ITensorData} message TensorData message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    TensorData.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };

                    /**
                     * Decodes a TensorData message from the specified reader or buffer.
                     * @function decode
                     * @memberof syft_proto.types.torch.v1.TensorData
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {syft_proto.types.torch.v1.TensorData} TensorData
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    TensorData.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.syft_proto.types.torch.v1.TensorData();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                message.shape = $root.syft_proto.types.torch.v1.Size.decode(reader, reader.uint32());
                                break;
                            case 2:
                                message.dtype = reader.string();
                                break;
                            case 3:
                                message.is_quantized = reader.bool();
                                break;
                            case 4:
                                message.scale = reader.float();
                                break;
                            case 5:
                                message.zero_point = reader.int32();
                                break;
                            case 16:
                                if (!(message.contents_uint8 && message.contents_uint8.length))
                                    message.contents_uint8 = [];
                                if ((tag & 7) === 2) {
                                    var end2 = reader.uint32() + reader.pos;
                                    while (reader.pos < end2)
                                        message.contents_uint8.push(reader.uint32());
                                } else
                                    message.contents_uint8.push(reader.uint32());
                                break;
                            case 17:
                                if (!(message.contents_int8 && message.contents_int8.length))
                                    message.contents_int8 = [];
                                if ((tag & 7) === 2) {
                                    var end2 = reader.uint32() + reader.pos;
                                    while (reader.pos < end2)
                                        message.contents_int8.push(reader.int32());
                                } else
                                    message.contents_int8.push(reader.int32());
                                break;
                            case 18:
                                if (!(message.contents_int16 && message.contents_int16.length))
                                    message.contents_int16 = [];
                                if ((tag & 7) === 2) {
                                    var end2 = reader.uint32() + reader.pos;
                                    while (reader.pos < end2)
                                        message.contents_int16.push(reader.int32());
                                } else
                                    message.contents_int16.push(reader.int32());
                                break;
                            case 19:
                                if (!(message.contents_int32 && message.contents_int32.length))
                                    message.contents_int32 = [];
                                if ((tag & 7) === 2) {
                                    var end2 = reader.uint32() + reader.pos;
                                    while (reader.pos < end2)
                                        message.contents_int32.push(reader.int32());
                                } else
                                    message.contents_int32.push(reader.int32());
                                break;
                            case 20:
                                if (!(message.contents_int64 && message.contents_int64.length))
                                    message.contents_int64 = [];
                                if ((tag & 7) === 2) {
                                    var end2 = reader.uint32() + reader.pos;
                                    while (reader.pos < end2)
                                        message.contents_int64.push(reader.int64());
                                } else
                                    message.contents_int64.push(reader.int64());
                                break;
                            case 21:
                                if (!(message.contents_float16 && message.contents_float16.length))
                                    message.contents_float16 = [];
                                if ((tag & 7) === 2) {
                                    var end2 = reader.uint32() + reader.pos;
                                    while (reader.pos < end2)
                                        message.contents_float16.push(reader.float());
                                } else
                                    message.contents_float16.push(reader.float());
                                break;
                            case 22:
                                if (!(message.contents_float32 && message.contents_float32.length))
                                    message.contents_float32 = [];
                                if ((tag & 7) === 2) {
                                    var end2 = reader.uint32() + reader.pos;
                                    while (reader.pos < end2)
                                        message.contents_float32.push(reader.float());
                                } else
                                    message.contents_float32.push(reader.float());
                                break;
                            case 23:
                                if (!(message.contents_float64 && message.contents_float64.length))
                                    message.contents_float64 = [];
                                if ((tag & 7) === 2) {
                                    var end2 = reader.uint32() + reader.pos;
                                    while (reader.pos < end2)
                                        message.contents_float64.push(reader.double());
                                } else
                                    message.contents_float64.push(reader.double());
                                break;
                            case 24:
                                if (!(message.contents_bool && message.contents_bool.length))
                                    message.contents_bool = [];
                                if ((tag & 7) === 2) {
                                    var end2 = reader.uint32() + reader.pos;
                                    while (reader.pos < end2)
                                        message.contents_bool.push(reader.bool());
                                } else
                                    message.contents_bool.push(reader.bool());
                                break;
                            case 25:
                                if (!(message.contents_qint8 && message.contents_qint8.length))
                                    message.contents_qint8 = [];
                                if ((tag & 7) === 2) {
                                    var end2 = reader.uint32() + reader.pos;
                                    while (reader.pos < end2)
                                        message.contents_qint8.push(reader.sint32());
                                } else
                                    message.contents_qint8.push(reader.sint32());
                                break;
                            case 26:
                                if (!(message.contents_quint8 && message.contents_quint8.length))
                                    message.contents_quint8 = [];
                                if ((tag & 7) === 2) {
                                    var end2 = reader.uint32() + reader.pos;
                                    while (reader.pos < end2)
                                        message.contents_quint8.push(reader.uint32());
                                } else
                                    message.contents_quint8.push(reader.uint32());
                                break;
                            case 27:
                                if (!(message.contents_qint32 && message.contents_qint32.length))
                                    message.contents_qint32 = [];
                                if ((tag & 7) === 2) {
                                    var end2 = reader.uint32() + reader.pos;
                                    while (reader.pos < end2)
                                        message.contents_qint32.push(reader.sint32());
                                } else
                                    message.contents_qint32.push(reader.sint32());
                                break;
                            case 28:
                                if (!(message.contents_bfloat16 && message.contents_bfloat16.length))
                                    message.contents_bfloat16 = [];
                                if ((tag & 7) === 2) {
                                    var end2 = reader.uint32() + reader.pos;
                                    while (reader.pos < end2)
                                        message.contents_bfloat16.push(reader.float());
                                } else
                                    message.contents_bfloat16.push(reader.float());
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    /**
                     * Decodes a TensorData message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof syft_proto.types.torch.v1.TensorData
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {syft_proto.types.torch.v1.TensorData} TensorData
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    TensorData.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    /**
                     * Verifies a TensorData message.
                     * @function verify
                     * @memberof syft_proto.types.torch.v1.TensorData
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    TensorData.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.shape != null && message.hasOwnProperty("shape")) {
                            var error = $root.syft_proto.types.torch.v1.Size.verify(message.shape);
                            if (error)
                                return "shape." + error;
                        }
                        if (message.dtype != null && message.hasOwnProperty("dtype"))
                            if (!$util.isString(message.dtype))
                                return "dtype: string expected";
                        if (message.is_quantized != null && message.hasOwnProperty("is_quantized"))
                            if (typeof message.is_quantized !== "boolean")
                                return "is_quantized: boolean expected";
                        if (message.scale != null && message.hasOwnProperty("scale"))
                            if (typeof message.scale !== "number")
                                return "scale: number expected";
                        if (message.zero_point != null && message.hasOwnProperty("zero_point"))
                            if (!$util.isInteger(message.zero_point))
                                return "zero_point: integer expected";
                        if (message.contents_uint8 != null && message.hasOwnProperty("contents_uint8")) {
                            if (!Array.isArray(message.contents_uint8))
                                return "contents_uint8: array expected";
                            for (var i = 0; i < message.contents_uint8.length; ++i)
                                if (!$util.isInteger(message.contents_uint8[i]))
                                    return "contents_uint8: integer[] expected";
                        }
                        if (message.contents_int8 != null && message.hasOwnProperty("contents_int8")) {
                            if (!Array.isArray(message.contents_int8))
                                return "contents_int8: array expected";
                            for (var i = 0; i < message.contents_int8.length; ++i)
                                if (!$util.isInteger(message.contents_int8[i]))
                                    return "contents_int8: integer[] expected";
                        }
                        if (message.contents_int16 != null && message.hasOwnProperty("contents_int16")) {
                            if (!Array.isArray(message.contents_int16))
                                return "contents_int16: array expected";
                            for (var i = 0; i < message.contents_int16.length; ++i)
                                if (!$util.isInteger(message.contents_int16[i]))
                                    return "contents_int16: integer[] expected";
                        }
                        if (message.contents_int32 != null && message.hasOwnProperty("contents_int32")) {
                            if (!Array.isArray(message.contents_int32))
                                return "contents_int32: array expected";
                            for (var i = 0; i < message.contents_int32.length; ++i)
                                if (!$util.isInteger(message.contents_int32[i]))
                                    return "contents_int32: integer[] expected";
                        }
                        if (message.contents_int64 != null && message.hasOwnProperty("contents_int64")) {
                            if (!Array.isArray(message.contents_int64))
                                return "contents_int64: array expected";
                            for (var i = 0; i < message.contents_int64.length; ++i)
                                if (!$util.isInteger(message.contents_int64[i]) && !(message.contents_int64[i] && $util.isInteger(message.contents_int64[i].low) && $util.isInteger(message.contents_int64[i].high)))
                                    return "contents_int64: integer|Long[] expected";
                        }
                        if (message.contents_float16 != null && message.hasOwnProperty("contents_float16")) {
                            if (!Array.isArray(message.contents_float16))
                                return "contents_float16: array expected";
                            for (var i = 0; i < message.contents_float16.length; ++i)
                                if (typeof message.contents_float16[i] !== "number")
                                    return "contents_float16: number[] expected";
                        }
                        if (message.contents_float32 != null && message.hasOwnProperty("contents_float32")) {
                            if (!Array.isArray(message.contents_float32))
                                return "contents_float32: array expected";
                            for (var i = 0; i < message.contents_float32.length; ++i)
                                if (typeof message.contents_float32[i] !== "number")
                                    return "contents_float32: number[] expected";
                        }
                        if (message.contents_float64 != null && message.hasOwnProperty("contents_float64")) {
                            if (!Array.isArray(message.contents_float64))
                                return "contents_float64: array expected";
                            for (var i = 0; i < message.contents_float64.length; ++i)
                                if (typeof message.contents_float64[i] !== "number")
                                    return "contents_float64: number[] expected";
                        }
                        if (message.contents_bool != null && message.hasOwnProperty("contents_bool")) {
                            if (!Array.isArray(message.contents_bool))
                                return "contents_bool: array expected";
                            for (var i = 0; i < message.contents_bool.length; ++i)
                                if (typeof message.contents_bool[i] !== "boolean")
                                    return "contents_bool: boolean[] expected";
                        }
                        if (message.contents_qint8 != null && message.hasOwnProperty("contents_qint8")) {
                            if (!Array.isArray(message.contents_qint8))
                                return "contents_qint8: array expected";
                            for (var i = 0; i < message.contents_qint8.length; ++i)
                                if (!$util.isInteger(message.contents_qint8[i]))
                                    return "contents_qint8: integer[] expected";
                        }
                        if (message.contents_quint8 != null && message.hasOwnProperty("contents_quint8")) {
                            if (!Array.isArray(message.contents_quint8))
                                return "contents_quint8: array expected";
                            for (var i = 0; i < message.contents_quint8.length; ++i)
                                if (!$util.isInteger(message.contents_quint8[i]))
                                    return "contents_quint8: integer[] expected";
                        }
                        if (message.contents_qint32 != null && message.hasOwnProperty("contents_qint32")) {
                            if (!Array.isArray(message.contents_qint32))
                                return "contents_qint32: array expected";
                            for (var i = 0; i < message.contents_qint32.length; ++i)
                                if (!$util.isInteger(message.contents_qint32[i]))
                                    return "contents_qint32: integer[] expected";
                        }
                        if (message.contents_bfloat16 != null && message.hasOwnProperty("contents_bfloat16")) {
                            if (!Array.isArray(message.contents_bfloat16))
                                return "contents_bfloat16: array expected";
                            for (var i = 0; i < message.contents_bfloat16.length; ++i)
                                if (typeof message.contents_bfloat16[i] !== "number")
                                    return "contents_bfloat16: number[] expected";
                        }
                        return null;
                    };

                    /**
                     * Creates a TensorData message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof syft_proto.types.torch.v1.TensorData
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {syft_proto.types.torch.v1.TensorData} TensorData
                     */
                    TensorData.fromObject = function fromObject(object) {
                        if (object instanceof $root.syft_proto.types.torch.v1.TensorData)
                            return object;
                        var message = new $root.syft_proto.types.torch.v1.TensorData();
                        if (object.shape != null) {
                            if (typeof object.shape !== "object")
                                throw TypeError(".syft_proto.types.torch.v1.TensorData.shape: object expected");
                            message.shape = $root.syft_proto.types.torch.v1.Size.fromObject(object.shape);
                        }
                        if (object.dtype != null)
                            message.dtype = String(object.dtype);
                        if (object.is_quantized != null)
                            message.is_quantized = Boolean(object.is_quantized);
                        if (object.scale != null)
                            message.scale = Number(object.scale);
                        if (object.zero_point != null)
                            message.zero_point = object.zero_point | 0;
                        if (object.contents_uint8) {
                            if (!Array.isArray(object.contents_uint8))
                                throw TypeError(".syft_proto.types.torch.v1.TensorData.contents_uint8: array expected");
                            message.contents_uint8 = [];
                            for (var i = 0; i < object.contents_uint8.length; ++i)
                                message.contents_uint8[i] = object.contents_uint8[i] >>> 0;
                        }
                        if (object.contents_int8) {
                            if (!Array.isArray(object.contents_int8))
                                throw TypeError(".syft_proto.types.torch.v1.TensorData.contents_int8: array expected");
                            message.contents_int8 = [];
                            for (var i = 0; i < object.contents_int8.length; ++i)
                                message.contents_int8[i] = object.contents_int8[i] | 0;
                        }
                        if (object.contents_int16) {
                            if (!Array.isArray(object.contents_int16))
                                throw TypeError(".syft_proto.types.torch.v1.TensorData.contents_int16: array expected");
                            message.contents_int16 = [];
                            for (var i = 0; i < object.contents_int16.length; ++i)
                                message.contents_int16[i] = object.contents_int16[i] | 0;
                        }
                        if (object.contents_int32) {
                            if (!Array.isArray(object.contents_int32))
                                throw TypeError(".syft_proto.types.torch.v1.TensorData.contents_int32: array expected");
                            message.contents_int32 = [];
                            for (var i = 0; i < object.contents_int32.length; ++i)
                                message.contents_int32[i] = object.contents_int32[i] | 0;
                        }
                        if (object.contents_int64) {
                            if (!Array.isArray(object.contents_int64))
                                throw TypeError(".syft_proto.types.torch.v1.TensorData.contents_int64: array expected");
                            message.contents_int64 = [];
                            for (var i = 0; i < object.contents_int64.length; ++i)
                                if ($util.Long)
                                    (message.contents_int64[i] = $util.Long.fromValue(object.contents_int64[i])).unsigned = false;
                                else if (typeof object.contents_int64[i] === "string")
                                    message.contents_int64[i] = parseInt(object.contents_int64[i], 10);
                                else if (typeof object.contents_int64[i] === "number")
                                    message.contents_int64[i] = object.contents_int64[i];
                                else if (typeof object.contents_int64[i] === "object")
                                    message.contents_int64[i] = new $util.LongBits(object.contents_int64[i].low >>> 0, object.contents_int64[i].high >>> 0).toNumber();
                        }
                        if (object.contents_float16) {
                            if (!Array.isArray(object.contents_float16))
                                throw TypeError(".syft_proto.types.torch.v1.TensorData.contents_float16: array expected");
                            message.contents_float16 = [];
                            for (var i = 0; i < object.contents_float16.length; ++i)
                                message.contents_float16[i] = Number(object.contents_float16[i]);
                        }
                        if (object.contents_float32) {
                            if (!Array.isArray(object.contents_float32))
                                throw TypeError(".syft_proto.types.torch.v1.TensorData.contents_float32: array expected");
                            message.contents_float32 = [];
                            for (var i = 0; i < object.contents_float32.length; ++i)
                                message.contents_float32[i] = Number(object.contents_float32[i]);
                        }
                        if (object.contents_float64) {
                            if (!Array.isArray(object.contents_float64))
                                throw TypeError(".syft_proto.types.torch.v1.TensorData.contents_float64: array expected");
                            message.contents_float64 = [];
                            for (var i = 0; i < object.contents_float64.length; ++i)
                                message.contents_float64[i] = Number(object.contents_float64[i]);
                        }
                        if (object.contents_bool) {
                            if (!Array.isArray(object.contents_bool))
                                throw TypeError(".syft_proto.types.torch.v1.TensorData.contents_bool: array expected");
                            message.contents_bool = [];
                            for (var i = 0; i < object.contents_bool.length; ++i)
                                message.contents_bool[i] = Boolean(object.contents_bool[i]);
                        }
                        if (object.contents_qint8) {
                            if (!Array.isArray(object.contents_qint8))
                                throw TypeError(".syft_proto.types.torch.v1.TensorData.contents_qint8: array expected");
                            message.contents_qint8 = [];
                            for (var i = 0; i < object.contents_qint8.length; ++i)
                                message.contents_qint8[i] = object.contents_qint8[i] | 0;
                        }
                        if (object.contents_quint8) {
                            if (!Array.isArray(object.contents_quint8))
                                throw TypeError(".syft_proto.types.torch.v1.TensorData.contents_quint8: array expected");
                            message.contents_quint8 = [];
                            for (var i = 0; i < object.contents_quint8.length; ++i)
                                message.contents_quint8[i] = object.contents_quint8[i] >>> 0;
                        }
                        if (object.contents_qint32) {
                            if (!Array.isArray(object.contents_qint32))
                                throw TypeError(".syft_proto.types.torch.v1.TensorData.contents_qint32: array expected");
                            message.contents_qint32 = [];
                            for (var i = 0; i < object.contents_qint32.length; ++i)
                                message.contents_qint32[i] = object.contents_qint32[i] | 0;
                        }
                        if (object.contents_bfloat16) {
                            if (!Array.isArray(object.contents_bfloat16))
                                throw TypeError(".syft_proto.types.torch.v1.TensorData.contents_bfloat16: array expected");
                            message.contents_bfloat16 = [];
                            for (var i = 0; i < object.contents_bfloat16.length; ++i)
                                message.contents_bfloat16[i] = Number(object.contents_bfloat16[i]);
                        }
                        return message;
                    };

                    /**
                     * Creates a plain object from a TensorData message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof syft_proto.types.torch.v1.TensorData
                     * @static
                     * @param {syft_proto.types.torch.v1.TensorData} message TensorData
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    TensorData.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.arrays || options.defaults) {
                            object.contents_uint8 = [];
                            object.contents_int8 = [];
                            object.contents_int16 = [];
                            object.contents_int32 = [];
                            object.contents_int64 = [];
                            object.contents_float16 = [];
                            object.contents_float32 = [];
                            object.contents_float64 = [];
                            object.contents_bool = [];
                            object.contents_qint8 = [];
                            object.contents_quint8 = [];
                            object.contents_qint32 = [];
                            object.contents_bfloat16 = [];
                        }
                        if (options.defaults) {
                            object.shape = null;
                            object.dtype = "";
                            object.is_quantized = false;
                            object.scale = 0;
                            object.zero_point = 0;
                        }
                        if (message.shape != null && message.hasOwnProperty("shape"))
                            object.shape = $root.syft_proto.types.torch.v1.Size.toObject(message.shape, options);
                        if (message.dtype != null && message.hasOwnProperty("dtype"))
                            object.dtype = message.dtype;
                        if (message.is_quantized != null && message.hasOwnProperty("is_quantized"))
                            object.is_quantized = message.is_quantized;
                        if (message.scale != null && message.hasOwnProperty("scale"))
                            object.scale = options.json && !isFinite(message.scale) ? String(message.scale) : message.scale;
                        if (message.zero_point != null && message.hasOwnProperty("zero_point"))
                            object.zero_point = message.zero_point;
                        if (message.contents_uint8 && message.contents_uint8.length) {
                            object.contents_uint8 = [];
                            for (var j = 0; j < message.contents_uint8.length; ++j)
                                object.contents_uint8[j] = message.contents_uint8[j];
                        }
                        if (message.contents_int8 && message.contents_int8.length) {
                            object.contents_int8 = [];
                            for (var j = 0; j < message.contents_int8.length; ++j)
                                object.contents_int8[j] = message.contents_int8[j];
                        }
                        if (message.contents_int16 && message.contents_int16.length) {
                            object.contents_int16 = [];
                            for (var j = 0; j < message.contents_int16.length; ++j)
                                object.contents_int16[j] = message.contents_int16[j];
                        }
                        if (message.contents_int32 && message.contents_int32.length) {
                            object.contents_int32 = [];
                            for (var j = 0; j < message.contents_int32.length; ++j)
                                object.contents_int32[j] = message.contents_int32[j];
                        }
                        if (message.contents_int64 && message.contents_int64.length) {
                            object.contents_int64 = [];
                            for (var j = 0; j < message.contents_int64.length; ++j)
                                if (typeof message.contents_int64[j] === "number")
                                    object.contents_int64[j] = options.longs === String ? String(message.contents_int64[j]) : message.contents_int64[j];
                                else
                                    object.contents_int64[j] = options.longs === String ? $util.Long.prototype.toString.call(message.contents_int64[j]) : options.longs === Number ? new $util.LongBits(message.contents_int64[j].low >>> 0, message.contents_int64[j].high >>> 0).toNumber() : message.contents_int64[j];
                        }
                        if (message.contents_float16 && message.contents_float16.length) {
                            object.contents_float16 = [];
                            for (var j = 0; j < message.contents_float16.length; ++j)
                                object.contents_float16[j] = options.json && !isFinite(message.contents_float16[j]) ? String(message.contents_float16[j]) : message.contents_float16[j];
                        }
                        if (message.contents_float32 && message.contents_float32.length) {
                            object.contents_float32 = [];
                            for (var j = 0; j < message.contents_float32.length; ++j)
                                object.contents_float32[j] = options.json && !isFinite(message.contents_float32[j]) ? String(message.contents_float32[j]) : message.contents_float32[j];
                        }
                        if (message.contents_float64 && message.contents_float64.length) {
                            object.contents_float64 = [];
                            for (var j = 0; j < message.contents_float64.length; ++j)
                                object.contents_float64[j] = options.json && !isFinite(message.contents_float64[j]) ? String(message.contents_float64[j]) : message.contents_float64[j];
                        }
                        if (message.contents_bool && message.contents_bool.length) {
                            object.contents_bool = [];
                            for (var j = 0; j < message.contents_bool.length; ++j)
                                object.contents_bool[j] = message.contents_bool[j];
                        }
                        if (message.contents_qint8 && message.contents_qint8.length) {
                            object.contents_qint8 = [];
                            for (var j = 0; j < message.contents_qint8.length; ++j)
                                object.contents_qint8[j] = message.contents_qint8[j];
                        }
                        if (message.contents_quint8 && message.contents_quint8.length) {
                            object.contents_quint8 = [];
                            for (var j = 0; j < message.contents_quint8.length; ++j)
                                object.contents_quint8[j] = message.contents_quint8[j];
                        }
                        if (message.contents_qint32 && message.contents_qint32.length) {
                            object.contents_qint32 = [];
                            for (var j = 0; j < message.contents_qint32.length; ++j)
                                object.contents_qint32[j] = message.contents_qint32[j];
                        }
                        if (message.contents_bfloat16 && message.contents_bfloat16.length) {
                            object.contents_bfloat16 = [];
                            for (var j = 0; j < message.contents_bfloat16.length; ++j)
                                object.contents_bfloat16[j] = options.json && !isFinite(message.contents_bfloat16[j]) ? String(message.contents_bfloat16[j]) : message.contents_bfloat16[j];
                        }
                        return object;
                    };

                    /**
                     * Converts this TensorData to JSON.
                     * @function toJSON
                     * @memberof syft_proto.types.torch.v1.TensorData
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    TensorData.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    return TensorData;
                })();

                v1.Size = (function() {

                    /**
                     * Properties of a Size.
                     * @memberof syft_proto.types.torch.v1
                     * @interface ISize
                     * @property {Array.<number>|null} [dims] Size dims
                     */

                    /**
                     * Constructs a new Size.
                     * @memberof syft_proto.types.torch.v1
                     * @classdesc Represents a Size.
                     * @implements ISize
                     * @constructor
                     * @param {syft_proto.types.torch.v1.ISize=} [properties] Properties to set
                     */
                    function Size(properties) {
                        this.dims = [];
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * Size dims.
                     * @member {Array.<number>} dims
                     * @memberof syft_proto.types.torch.v1.Size
                     * @instance
                     */
                    Size.prototype.dims = $util.emptyArray;

                    /**
                     * Creates a new Size instance using the specified properties.
                     * @function create
                     * @memberof syft_proto.types.torch.v1.Size
                     * @static
                     * @param {syft_proto.types.torch.v1.ISize=} [properties] Properties to set
                     * @returns {syft_proto.types.torch.v1.Size} Size instance
                     */
                    Size.create = function create(properties) {
                        return new Size(properties);
                    };

                    /**
                     * Encodes the specified Size message. Does not implicitly {@link syft_proto.types.torch.v1.Size.verify|verify} messages.
                     * @function encode
                     * @memberof syft_proto.types.torch.v1.Size
                     * @static
                     * @param {syft_proto.types.torch.v1.ISize} message Size message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    Size.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.dims != null && message.dims.length) {
                            writer.uint32(/* id 1, wireType 2 =*/10).fork();
                            for (var i = 0; i < message.dims.length; ++i)
                                writer.int32(message.dims[i]);
                            writer.ldelim();
                        }
                        return writer;
                    };

                    /**
                     * Encodes the specified Size message, length delimited. Does not implicitly {@link syft_proto.types.torch.v1.Size.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof syft_proto.types.torch.v1.Size
                     * @static
                     * @param {syft_proto.types.torch.v1.ISize} message Size message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    Size.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };

                    /**
                     * Decodes a Size message from the specified reader or buffer.
                     * @function decode
                     * @memberof syft_proto.types.torch.v1.Size
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {syft_proto.types.torch.v1.Size} Size
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    Size.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.syft_proto.types.torch.v1.Size();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                if (!(message.dims && message.dims.length))
                                    message.dims = [];
                                if ((tag & 7) === 2) {
                                    var end2 = reader.uint32() + reader.pos;
                                    while (reader.pos < end2)
                                        message.dims.push(reader.int32());
                                } else
                                    message.dims.push(reader.int32());
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    /**
                     * Decodes a Size message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof syft_proto.types.torch.v1.Size
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {syft_proto.types.torch.v1.Size} Size
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    Size.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    /**
                     * Verifies a Size message.
                     * @function verify
                     * @memberof syft_proto.types.torch.v1.Size
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    Size.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.dims != null && message.hasOwnProperty("dims")) {
                            if (!Array.isArray(message.dims))
                                return "dims: array expected";
                            for (var i = 0; i < message.dims.length; ++i)
                                if (!$util.isInteger(message.dims[i]))
                                    return "dims: integer[] expected";
                        }
                        return null;
                    };

                    /**
                     * Creates a Size message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof syft_proto.types.torch.v1.Size
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {syft_proto.types.torch.v1.Size} Size
                     */
                    Size.fromObject = function fromObject(object) {
                        if (object instanceof $root.syft_proto.types.torch.v1.Size)
                            return object;
                        var message = new $root.syft_proto.types.torch.v1.Size();
                        if (object.dims) {
                            if (!Array.isArray(object.dims))
                                throw TypeError(".syft_proto.types.torch.v1.Size.dims: array expected");
                            message.dims = [];
                            for (var i = 0; i < object.dims.length; ++i)
                                message.dims[i] = object.dims[i] | 0;
                        }
                        return message;
                    };

                    /**
                     * Creates a plain object from a Size message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof syft_proto.types.torch.v1.Size
                     * @static
                     * @param {syft_proto.types.torch.v1.Size} message Size
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    Size.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.arrays || options.defaults)
                            object.dims = [];
                        if (message.dims && message.dims.length) {
                            object.dims = [];
                            for (var j = 0; j < message.dims.length; ++j)
                                object.dims[j] = message.dims[j];
                        }
                        return object;
                    };

                    /**
                     * Converts this Size to JSON.
                     * @function toJSON
                     * @memberof syft_proto.types.torch.v1.Size
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    Size.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    return Size;
                })();

                v1.Parameter = (function() {

                    /**
                     * Properties of a Parameter.
                     * @memberof syft_proto.types.torch.v1
                     * @interface IParameter
                     * @property {syft_proto.types.syft.v1.IId|null} [id] Parameter id
                     * @property {syft_proto.types.torch.v1.ITorchTensor|null} [tensor] Parameter tensor
                     * @property {boolean|null} [requires_grad] Parameter requires_grad
                     * @property {syft_proto.types.torch.v1.ITorchTensor|null} [grad] Parameter grad
                     */

                    /**
                     * Constructs a new Parameter.
                     * @memberof syft_proto.types.torch.v1
                     * @classdesc Represents a Parameter.
                     * @implements IParameter
                     * @constructor
                     * @param {syft_proto.types.torch.v1.IParameter=} [properties] Properties to set
                     */
                    function Parameter(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * Parameter id.
                     * @member {syft_proto.types.syft.v1.IId|null|undefined} id
                     * @memberof syft_proto.types.torch.v1.Parameter
                     * @instance
                     */
                    Parameter.prototype.id = null;

                    /**
                     * Parameter tensor.
                     * @member {syft_proto.types.torch.v1.ITorchTensor|null|undefined} tensor
                     * @memberof syft_proto.types.torch.v1.Parameter
                     * @instance
                     */
                    Parameter.prototype.tensor = null;

                    /**
                     * Parameter requires_grad.
                     * @member {boolean} requires_grad
                     * @memberof syft_proto.types.torch.v1.Parameter
                     * @instance
                     */
                    Parameter.prototype.requires_grad = false;

                    /**
                     * Parameter grad.
                     * @member {syft_proto.types.torch.v1.ITorchTensor|null|undefined} grad
                     * @memberof syft_proto.types.torch.v1.Parameter
                     * @instance
                     */
                    Parameter.prototype.grad = null;

                    /**
                     * Creates a new Parameter instance using the specified properties.
                     * @function create
                     * @memberof syft_proto.types.torch.v1.Parameter
                     * @static
                     * @param {syft_proto.types.torch.v1.IParameter=} [properties] Properties to set
                     * @returns {syft_proto.types.torch.v1.Parameter} Parameter instance
                     */
                    Parameter.create = function create(properties) {
                        return new Parameter(properties);
                    };

                    /**
                     * Encodes the specified Parameter message. Does not implicitly {@link syft_proto.types.torch.v1.Parameter.verify|verify} messages.
                     * @function encode
                     * @memberof syft_proto.types.torch.v1.Parameter
                     * @static
                     * @param {syft_proto.types.torch.v1.IParameter} message Parameter message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    Parameter.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.id != null && message.hasOwnProperty("id"))
                            $root.syft_proto.types.syft.v1.Id.encode(message.id, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                        if (message.tensor != null && message.hasOwnProperty("tensor"))
                            $root.syft_proto.types.torch.v1.TorchTensor.encode(message.tensor, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                        if (message.requires_grad != null && message.hasOwnProperty("requires_grad"))
                            writer.uint32(/* id 3, wireType 0 =*/24).bool(message.requires_grad);
                        if (message.grad != null && message.hasOwnProperty("grad"))
                            $root.syft_proto.types.torch.v1.TorchTensor.encode(message.grad, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
                        return writer;
                    };

                    /**
                     * Encodes the specified Parameter message, length delimited. Does not implicitly {@link syft_proto.types.torch.v1.Parameter.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof syft_proto.types.torch.v1.Parameter
                     * @static
                     * @param {syft_proto.types.torch.v1.IParameter} message Parameter message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    Parameter.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };

                    /**
                     * Decodes a Parameter message from the specified reader or buffer.
                     * @function decode
                     * @memberof syft_proto.types.torch.v1.Parameter
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {syft_proto.types.torch.v1.Parameter} Parameter
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    Parameter.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.syft_proto.types.torch.v1.Parameter();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                message.id = $root.syft_proto.types.syft.v1.Id.decode(reader, reader.uint32());
                                break;
                            case 2:
                                message.tensor = $root.syft_proto.types.torch.v1.TorchTensor.decode(reader, reader.uint32());
                                break;
                            case 3:
                                message.requires_grad = reader.bool();
                                break;
                            case 4:
                                message.grad = $root.syft_proto.types.torch.v1.TorchTensor.decode(reader, reader.uint32());
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    /**
                     * Decodes a Parameter message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof syft_proto.types.torch.v1.Parameter
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {syft_proto.types.torch.v1.Parameter} Parameter
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    Parameter.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    /**
                     * Verifies a Parameter message.
                     * @function verify
                     * @memberof syft_proto.types.torch.v1.Parameter
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    Parameter.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.id != null && message.hasOwnProperty("id")) {
                            var error = $root.syft_proto.types.syft.v1.Id.verify(message.id);
                            if (error)
                                return "id." + error;
                        }
                        if (message.tensor != null && message.hasOwnProperty("tensor")) {
                            var error = $root.syft_proto.types.torch.v1.TorchTensor.verify(message.tensor);
                            if (error)
                                return "tensor." + error;
                        }
                        if (message.requires_grad != null && message.hasOwnProperty("requires_grad"))
                            if (typeof message.requires_grad !== "boolean")
                                return "requires_grad: boolean expected";
                        if (message.grad != null && message.hasOwnProperty("grad")) {
                            var error = $root.syft_proto.types.torch.v1.TorchTensor.verify(message.grad);
                            if (error)
                                return "grad." + error;
                        }
                        return null;
                    };

                    /**
                     * Creates a Parameter message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof syft_proto.types.torch.v1.Parameter
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {syft_proto.types.torch.v1.Parameter} Parameter
                     */
                    Parameter.fromObject = function fromObject(object) {
                        if (object instanceof $root.syft_proto.types.torch.v1.Parameter)
                            return object;
                        var message = new $root.syft_proto.types.torch.v1.Parameter();
                        if (object.id != null) {
                            if (typeof object.id !== "object")
                                throw TypeError(".syft_proto.types.torch.v1.Parameter.id: object expected");
                            message.id = $root.syft_proto.types.syft.v1.Id.fromObject(object.id);
                        }
                        if (object.tensor != null) {
                            if (typeof object.tensor !== "object")
                                throw TypeError(".syft_proto.types.torch.v1.Parameter.tensor: object expected");
                            message.tensor = $root.syft_proto.types.torch.v1.TorchTensor.fromObject(object.tensor);
                        }
                        if (object.requires_grad != null)
                            message.requires_grad = Boolean(object.requires_grad);
                        if (object.grad != null) {
                            if (typeof object.grad !== "object")
                                throw TypeError(".syft_proto.types.torch.v1.Parameter.grad: object expected");
                            message.grad = $root.syft_proto.types.torch.v1.TorchTensor.fromObject(object.grad);
                        }
                        return message;
                    };

                    /**
                     * Creates a plain object from a Parameter message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof syft_proto.types.torch.v1.Parameter
                     * @static
                     * @param {syft_proto.types.torch.v1.Parameter} message Parameter
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    Parameter.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.defaults) {
                            object.id = null;
                            object.tensor = null;
                            object.requires_grad = false;
                            object.grad = null;
                        }
                        if (message.id != null && message.hasOwnProperty("id"))
                            object.id = $root.syft_proto.types.syft.v1.Id.toObject(message.id, options);
                        if (message.tensor != null && message.hasOwnProperty("tensor"))
                            object.tensor = $root.syft_proto.types.torch.v1.TorchTensor.toObject(message.tensor, options);
                        if (message.requires_grad != null && message.hasOwnProperty("requires_grad"))
                            object.requires_grad = message.requires_grad;
                        if (message.grad != null && message.hasOwnProperty("grad"))
                            object.grad = $root.syft_proto.types.torch.v1.TorchTensor.toObject(message.grad, options);
                        return object;
                    };

                    /**
                     * Converts this Parameter to JSON.
                     * @function toJSON
                     * @memberof syft_proto.types.torch.v1.Parameter
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    Parameter.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    return Parameter;
                })();

                v1.CFunction = (function() {

                    /**
                     * Properties of a CFunction.
                     * @memberof syft_proto.types.torch.v1
                     * @interface ICFunction
                     * @property {Uint8Array|null} [obj] CFunction obj
                     */

                    /**
                     * Constructs a new CFunction.
                     * @memberof syft_proto.types.torch.v1
                     * @classdesc Represents a CFunction.
                     * @implements ICFunction
                     * @constructor
                     * @param {syft_proto.types.torch.v1.ICFunction=} [properties] Properties to set
                     */
                    function CFunction(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * CFunction obj.
                     * @member {Uint8Array} obj
                     * @memberof syft_proto.types.torch.v1.CFunction
                     * @instance
                     */
                    CFunction.prototype.obj = $util.newBuffer([]);

                    /**
                     * Creates a new CFunction instance using the specified properties.
                     * @function create
                     * @memberof syft_proto.types.torch.v1.CFunction
                     * @static
                     * @param {syft_proto.types.torch.v1.ICFunction=} [properties] Properties to set
                     * @returns {syft_proto.types.torch.v1.CFunction} CFunction instance
                     */
                    CFunction.create = function create(properties) {
                        return new CFunction(properties);
                    };

                    /**
                     * Encodes the specified CFunction message. Does not implicitly {@link syft_proto.types.torch.v1.CFunction.verify|verify} messages.
                     * @function encode
                     * @memberof syft_proto.types.torch.v1.CFunction
                     * @static
                     * @param {syft_proto.types.torch.v1.ICFunction} message CFunction message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    CFunction.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.obj != null && message.hasOwnProperty("obj"))
                            writer.uint32(/* id 1, wireType 2 =*/10).bytes(message.obj);
                        return writer;
                    };

                    /**
                     * Encodes the specified CFunction message, length delimited. Does not implicitly {@link syft_proto.types.torch.v1.CFunction.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof syft_proto.types.torch.v1.CFunction
                     * @static
                     * @param {syft_proto.types.torch.v1.ICFunction} message CFunction message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    CFunction.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };

                    /**
                     * Decodes a CFunction message from the specified reader or buffer.
                     * @function decode
                     * @memberof syft_proto.types.torch.v1.CFunction
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {syft_proto.types.torch.v1.CFunction} CFunction
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    CFunction.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.syft_proto.types.torch.v1.CFunction();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                message.obj = reader.bytes();
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    /**
                     * Decodes a CFunction message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof syft_proto.types.torch.v1.CFunction
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {syft_proto.types.torch.v1.CFunction} CFunction
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    CFunction.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    /**
                     * Verifies a CFunction message.
                     * @function verify
                     * @memberof syft_proto.types.torch.v1.CFunction
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    CFunction.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.obj != null && message.hasOwnProperty("obj"))
                            if (!(message.obj && typeof message.obj.length === "number" || $util.isString(message.obj)))
                                return "obj: buffer expected";
                        return null;
                    };

                    /**
                     * Creates a CFunction message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof syft_proto.types.torch.v1.CFunction
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {syft_proto.types.torch.v1.CFunction} CFunction
                     */
                    CFunction.fromObject = function fromObject(object) {
                        if (object instanceof $root.syft_proto.types.torch.v1.CFunction)
                            return object;
                        var message = new $root.syft_proto.types.torch.v1.CFunction();
                        if (object.obj != null)
                            if (typeof object.obj === "string")
                                $util.base64.decode(object.obj, message.obj = $util.newBuffer($util.base64.length(object.obj)), 0);
                            else if (object.obj.length)
                                message.obj = object.obj;
                        return message;
                    };

                    /**
                     * Creates a plain object from a CFunction message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof syft_proto.types.torch.v1.CFunction
                     * @static
                     * @param {syft_proto.types.torch.v1.CFunction} message CFunction
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    CFunction.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.defaults)
                            if (options.bytes === String)
                                object.obj = "";
                            else {
                                object.obj = [];
                                if (options.bytes !== Array)
                                    object.obj = $util.newBuffer(object.obj);
                            }
                        if (message.obj != null && message.hasOwnProperty("obj"))
                            object.obj = options.bytes === String ? $util.base64.encode(message.obj, 0, message.obj.length) : options.bytes === Array ? Array.prototype.slice.call(message.obj) : message.obj;
                        return object;
                    };

                    /**
                     * Converts this CFunction to JSON.
                     * @function toJSON
                     * @memberof syft_proto.types.torch.v1.CFunction
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    CFunction.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    return CFunction;
                })();

                v1.Device = (function() {

                    /**
                     * Properties of a Device.
                     * @memberof syft_proto.types.torch.v1
                     * @interface IDevice
                     * @property {string|null} [type] Device type
                     */

                    /**
                     * Constructs a new Device.
                     * @memberof syft_proto.types.torch.v1
                     * @classdesc Represents a Device.
                     * @implements IDevice
                     * @constructor
                     * @param {syft_proto.types.torch.v1.IDevice=} [properties] Properties to set
                     */
                    function Device(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * Device type.
                     * @member {string} type
                     * @memberof syft_proto.types.torch.v1.Device
                     * @instance
                     */
                    Device.prototype.type = "";

                    /**
                     * Creates a new Device instance using the specified properties.
                     * @function create
                     * @memberof syft_proto.types.torch.v1.Device
                     * @static
                     * @param {syft_proto.types.torch.v1.IDevice=} [properties] Properties to set
                     * @returns {syft_proto.types.torch.v1.Device} Device instance
                     */
                    Device.create = function create(properties) {
                        return new Device(properties);
                    };

                    /**
                     * Encodes the specified Device message. Does not implicitly {@link syft_proto.types.torch.v1.Device.verify|verify} messages.
                     * @function encode
                     * @memberof syft_proto.types.torch.v1.Device
                     * @static
                     * @param {syft_proto.types.torch.v1.IDevice} message Device message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    Device.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.type != null && message.hasOwnProperty("type"))
                            writer.uint32(/* id 1, wireType 2 =*/10).string(message.type);
                        return writer;
                    };

                    /**
                     * Encodes the specified Device message, length delimited. Does not implicitly {@link syft_proto.types.torch.v1.Device.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof syft_proto.types.torch.v1.Device
                     * @static
                     * @param {syft_proto.types.torch.v1.IDevice} message Device message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    Device.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };

                    /**
                     * Decodes a Device message from the specified reader or buffer.
                     * @function decode
                     * @memberof syft_proto.types.torch.v1.Device
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {syft_proto.types.torch.v1.Device} Device
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    Device.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.syft_proto.types.torch.v1.Device();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                message.type = reader.string();
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    /**
                     * Decodes a Device message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof syft_proto.types.torch.v1.Device
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {syft_proto.types.torch.v1.Device} Device
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    Device.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    /**
                     * Verifies a Device message.
                     * @function verify
                     * @memberof syft_proto.types.torch.v1.Device
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    Device.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.type != null && message.hasOwnProperty("type"))
                            if (!$util.isString(message.type))
                                return "type: string expected";
                        return null;
                    };

                    /**
                     * Creates a Device message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof syft_proto.types.torch.v1.Device
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {syft_proto.types.torch.v1.Device} Device
                     */
                    Device.fromObject = function fromObject(object) {
                        if (object instanceof $root.syft_proto.types.torch.v1.Device)
                            return object;
                        var message = new $root.syft_proto.types.torch.v1.Device();
                        if (object.type != null)
                            message.type = String(object.type);
                        return message;
                    };

                    /**
                     * Creates a plain object from a Device message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof syft_proto.types.torch.v1.Device
                     * @static
                     * @param {syft_proto.types.torch.v1.Device} message Device
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    Device.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.defaults)
                            object.type = "";
                        if (message.type != null && message.hasOwnProperty("type"))
                            object.type = message.type;
                        return object;
                    };

                    /**
                     * Converts this Device to JSON.
                     * @function toJSON
                     * @memberof syft_proto.types.torch.v1.Device
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    Device.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    return Device;
                })();

                v1.ScriptFunction = (function() {

                    /**
                     * Properties of a ScriptFunction.
                     * @memberof syft_proto.types.torch.v1
                     * @interface IScriptFunction
                     * @property {Uint8Array|null} [obj] ScriptFunction obj
                     */

                    /**
                     * Constructs a new ScriptFunction.
                     * @memberof syft_proto.types.torch.v1
                     * @classdesc Represents a ScriptFunction.
                     * @implements IScriptFunction
                     * @constructor
                     * @param {syft_proto.types.torch.v1.IScriptFunction=} [properties] Properties to set
                     */
                    function ScriptFunction(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * ScriptFunction obj.
                     * @member {Uint8Array} obj
                     * @memberof syft_proto.types.torch.v1.ScriptFunction
                     * @instance
                     */
                    ScriptFunction.prototype.obj = $util.newBuffer([]);

                    /**
                     * Creates a new ScriptFunction instance using the specified properties.
                     * @function create
                     * @memberof syft_proto.types.torch.v1.ScriptFunction
                     * @static
                     * @param {syft_proto.types.torch.v1.IScriptFunction=} [properties] Properties to set
                     * @returns {syft_proto.types.torch.v1.ScriptFunction} ScriptFunction instance
                     */
                    ScriptFunction.create = function create(properties) {
                        return new ScriptFunction(properties);
                    };

                    /**
                     * Encodes the specified ScriptFunction message. Does not implicitly {@link syft_proto.types.torch.v1.ScriptFunction.verify|verify} messages.
                     * @function encode
                     * @memberof syft_proto.types.torch.v1.ScriptFunction
                     * @static
                     * @param {syft_proto.types.torch.v1.IScriptFunction} message ScriptFunction message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    ScriptFunction.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.obj != null && message.hasOwnProperty("obj"))
                            writer.uint32(/* id 1, wireType 2 =*/10).bytes(message.obj);
                        return writer;
                    };

                    /**
                     * Encodes the specified ScriptFunction message, length delimited. Does not implicitly {@link syft_proto.types.torch.v1.ScriptFunction.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof syft_proto.types.torch.v1.ScriptFunction
                     * @static
                     * @param {syft_proto.types.torch.v1.IScriptFunction} message ScriptFunction message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    ScriptFunction.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };

                    /**
                     * Decodes a ScriptFunction message from the specified reader or buffer.
                     * @function decode
                     * @memberof syft_proto.types.torch.v1.ScriptFunction
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {syft_proto.types.torch.v1.ScriptFunction} ScriptFunction
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    ScriptFunction.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.syft_proto.types.torch.v1.ScriptFunction();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                message.obj = reader.bytes();
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    /**
                     * Decodes a ScriptFunction message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof syft_proto.types.torch.v1.ScriptFunction
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {syft_proto.types.torch.v1.ScriptFunction} ScriptFunction
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    ScriptFunction.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    /**
                     * Verifies a ScriptFunction message.
                     * @function verify
                     * @memberof syft_proto.types.torch.v1.ScriptFunction
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    ScriptFunction.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.obj != null && message.hasOwnProperty("obj"))
                            if (!(message.obj && typeof message.obj.length === "number" || $util.isString(message.obj)))
                                return "obj: buffer expected";
                        return null;
                    };

                    /**
                     * Creates a ScriptFunction message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof syft_proto.types.torch.v1.ScriptFunction
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {syft_proto.types.torch.v1.ScriptFunction} ScriptFunction
                     */
                    ScriptFunction.fromObject = function fromObject(object) {
                        if (object instanceof $root.syft_proto.types.torch.v1.ScriptFunction)
                            return object;
                        var message = new $root.syft_proto.types.torch.v1.ScriptFunction();
                        if (object.obj != null)
                            if (typeof object.obj === "string")
                                $util.base64.decode(object.obj, message.obj = $util.newBuffer($util.base64.length(object.obj)), 0);
                            else if (object.obj.length)
                                message.obj = object.obj;
                        return message;
                    };

                    /**
                     * Creates a plain object from a ScriptFunction message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof syft_proto.types.torch.v1.ScriptFunction
                     * @static
                     * @param {syft_proto.types.torch.v1.ScriptFunction} message ScriptFunction
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    ScriptFunction.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.defaults)
                            if (options.bytes === String)
                                object.obj = "";
                            else {
                                object.obj = [];
                                if (options.bytes !== Array)
                                    object.obj = $util.newBuffer(object.obj);
                            }
                        if (message.obj != null && message.hasOwnProperty("obj"))
                            object.obj = options.bytes === String ? $util.base64.encode(message.obj, 0, message.obj.length) : options.bytes === Array ? Array.prototype.slice.call(message.obj) : message.obj;
                        return object;
                    };

                    /**
                     * Converts this ScriptFunction to JSON.
                     * @function toJSON
                     * @memberof syft_proto.types.torch.v1.ScriptFunction
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    ScriptFunction.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    return ScriptFunction;
                })();

                v1.ScriptModule = (function() {

                    /**
                     * Properties of a ScriptModule.
                     * @memberof syft_proto.types.torch.v1
                     * @interface IScriptModule
                     * @property {Uint8Array|null} [obj] ScriptModule obj
                     */

                    /**
                     * Constructs a new ScriptModule.
                     * @memberof syft_proto.types.torch.v1
                     * @classdesc Represents a ScriptModule.
                     * @implements IScriptModule
                     * @constructor
                     * @param {syft_proto.types.torch.v1.IScriptModule=} [properties] Properties to set
                     */
                    function ScriptModule(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * ScriptModule obj.
                     * @member {Uint8Array} obj
                     * @memberof syft_proto.types.torch.v1.ScriptModule
                     * @instance
                     */
                    ScriptModule.prototype.obj = $util.newBuffer([]);

                    /**
                     * Creates a new ScriptModule instance using the specified properties.
                     * @function create
                     * @memberof syft_proto.types.torch.v1.ScriptModule
                     * @static
                     * @param {syft_proto.types.torch.v1.IScriptModule=} [properties] Properties to set
                     * @returns {syft_proto.types.torch.v1.ScriptModule} ScriptModule instance
                     */
                    ScriptModule.create = function create(properties) {
                        return new ScriptModule(properties);
                    };

                    /**
                     * Encodes the specified ScriptModule message. Does not implicitly {@link syft_proto.types.torch.v1.ScriptModule.verify|verify} messages.
                     * @function encode
                     * @memberof syft_proto.types.torch.v1.ScriptModule
                     * @static
                     * @param {syft_proto.types.torch.v1.IScriptModule} message ScriptModule message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    ScriptModule.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.obj != null && message.hasOwnProperty("obj"))
                            writer.uint32(/* id 1, wireType 2 =*/10).bytes(message.obj);
                        return writer;
                    };

                    /**
                     * Encodes the specified ScriptModule message, length delimited. Does not implicitly {@link syft_proto.types.torch.v1.ScriptModule.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof syft_proto.types.torch.v1.ScriptModule
                     * @static
                     * @param {syft_proto.types.torch.v1.IScriptModule} message ScriptModule message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    ScriptModule.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };

                    /**
                     * Decodes a ScriptModule message from the specified reader or buffer.
                     * @function decode
                     * @memberof syft_proto.types.torch.v1.ScriptModule
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {syft_proto.types.torch.v1.ScriptModule} ScriptModule
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    ScriptModule.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.syft_proto.types.torch.v1.ScriptModule();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                message.obj = reader.bytes();
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    /**
                     * Decodes a ScriptModule message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof syft_proto.types.torch.v1.ScriptModule
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {syft_proto.types.torch.v1.ScriptModule} ScriptModule
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    ScriptModule.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    /**
                     * Verifies a ScriptModule message.
                     * @function verify
                     * @memberof syft_proto.types.torch.v1.ScriptModule
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    ScriptModule.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.obj != null && message.hasOwnProperty("obj"))
                            if (!(message.obj && typeof message.obj.length === "number" || $util.isString(message.obj)))
                                return "obj: buffer expected";
                        return null;
                    };

                    /**
                     * Creates a ScriptModule message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof syft_proto.types.torch.v1.ScriptModule
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {syft_proto.types.torch.v1.ScriptModule} ScriptModule
                     */
                    ScriptModule.fromObject = function fromObject(object) {
                        if (object instanceof $root.syft_proto.types.torch.v1.ScriptModule)
                            return object;
                        var message = new $root.syft_proto.types.torch.v1.ScriptModule();
                        if (object.obj != null)
                            if (typeof object.obj === "string")
                                $util.base64.decode(object.obj, message.obj = $util.newBuffer($util.base64.length(object.obj)), 0);
                            else if (object.obj.length)
                                message.obj = object.obj;
                        return message;
                    };

                    /**
                     * Creates a plain object from a ScriptModule message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof syft_proto.types.torch.v1.ScriptModule
                     * @static
                     * @param {syft_proto.types.torch.v1.ScriptModule} message ScriptModule
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    ScriptModule.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.defaults)
                            if (options.bytes === String)
                                object.obj = "";
                            else {
                                object.obj = [];
                                if (options.bytes !== Array)
                                    object.obj = $util.newBuffer(object.obj);
                            }
                        if (message.obj != null && message.hasOwnProperty("obj"))
                            object.obj = options.bytes === String ? $util.base64.encode(message.obj, 0, message.obj.length) : options.bytes === Array ? Array.prototype.slice.call(message.obj) : message.obj;
                        return object;
                    };

                    /**
                     * Converts this ScriptModule to JSON.
                     * @function toJSON
                     * @memberof syft_proto.types.torch.v1.ScriptModule
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    ScriptModule.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    return ScriptModule;
                })();

                v1.TracedModule = (function() {

                    /**
                     * Properties of a TracedModule.
                     * @memberof syft_proto.types.torch.v1
                     * @interface ITracedModule
                     * @property {Uint8Array|null} [obj] TracedModule obj
                     */

                    /**
                     * Constructs a new TracedModule.
                     * @memberof syft_proto.types.torch.v1
                     * @classdesc Represents a TracedModule.
                     * @implements ITracedModule
                     * @constructor
                     * @param {syft_proto.types.torch.v1.ITracedModule=} [properties] Properties to set
                     */
                    function TracedModule(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * TracedModule obj.
                     * @member {Uint8Array} obj
                     * @memberof syft_proto.types.torch.v1.TracedModule
                     * @instance
                     */
                    TracedModule.prototype.obj = $util.newBuffer([]);

                    /**
                     * Creates a new TracedModule instance using the specified properties.
                     * @function create
                     * @memberof syft_proto.types.torch.v1.TracedModule
                     * @static
                     * @param {syft_proto.types.torch.v1.ITracedModule=} [properties] Properties to set
                     * @returns {syft_proto.types.torch.v1.TracedModule} TracedModule instance
                     */
                    TracedModule.create = function create(properties) {
                        return new TracedModule(properties);
                    };

                    /**
                     * Encodes the specified TracedModule message. Does not implicitly {@link syft_proto.types.torch.v1.TracedModule.verify|verify} messages.
                     * @function encode
                     * @memberof syft_proto.types.torch.v1.TracedModule
                     * @static
                     * @param {syft_proto.types.torch.v1.ITracedModule} message TracedModule message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    TracedModule.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.obj != null && message.hasOwnProperty("obj"))
                            writer.uint32(/* id 1, wireType 2 =*/10).bytes(message.obj);
                        return writer;
                    };

                    /**
                     * Encodes the specified TracedModule message, length delimited. Does not implicitly {@link syft_proto.types.torch.v1.TracedModule.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof syft_proto.types.torch.v1.TracedModule
                     * @static
                     * @param {syft_proto.types.torch.v1.ITracedModule} message TracedModule message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    TracedModule.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };

                    /**
                     * Decodes a TracedModule message from the specified reader or buffer.
                     * @function decode
                     * @memberof syft_proto.types.torch.v1.TracedModule
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {syft_proto.types.torch.v1.TracedModule} TracedModule
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    TracedModule.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.syft_proto.types.torch.v1.TracedModule();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                message.obj = reader.bytes();
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    /**
                     * Decodes a TracedModule message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof syft_proto.types.torch.v1.TracedModule
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {syft_proto.types.torch.v1.TracedModule} TracedModule
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    TracedModule.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    /**
                     * Verifies a TracedModule message.
                     * @function verify
                     * @memberof syft_proto.types.torch.v1.TracedModule
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    TracedModule.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.obj != null && message.hasOwnProperty("obj"))
                            if (!(message.obj && typeof message.obj.length === "number" || $util.isString(message.obj)))
                                return "obj: buffer expected";
                        return null;
                    };

                    /**
                     * Creates a TracedModule message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof syft_proto.types.torch.v1.TracedModule
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {syft_proto.types.torch.v1.TracedModule} TracedModule
                     */
                    TracedModule.fromObject = function fromObject(object) {
                        if (object instanceof $root.syft_proto.types.torch.v1.TracedModule)
                            return object;
                        var message = new $root.syft_proto.types.torch.v1.TracedModule();
                        if (object.obj != null)
                            if (typeof object.obj === "string")
                                $util.base64.decode(object.obj, message.obj = $util.newBuffer($util.base64.length(object.obj)), 0);
                            else if (object.obj.length)
                                message.obj = object.obj;
                        return message;
                    };

                    /**
                     * Creates a plain object from a TracedModule message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof syft_proto.types.torch.v1.TracedModule
                     * @static
                     * @param {syft_proto.types.torch.v1.TracedModule} message TracedModule
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    TracedModule.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.defaults)
                            if (options.bytes === String)
                                object.obj = "";
                            else {
                                object.obj = [];
                                if (options.bytes !== Array)
                                    object.obj = $util.newBuffer(object.obj);
                            }
                        if (message.obj != null && message.hasOwnProperty("obj"))
                            object.obj = options.bytes === String ? $util.base64.encode(message.obj, 0, message.obj.length) : options.bytes === Array ? Array.prototype.slice.call(message.obj) : message.obj;
                        return object;
                    };

                    /**
                     * Converts this TracedModule to JSON.
                     * @function toJSON
                     * @memberof syft_proto.types.torch.v1.TracedModule
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    TracedModule.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    return TracedModule;
                })();

                return v1;
            })();

            return torch;
        })();

        return types;
    })();

    syft_proto.generic = (function() {

        /**
         * Namespace generic.
         * @memberof syft_proto
         * @namespace
         */
        var generic = {};

        generic.pointers = (function() {

            /**
             * Namespace pointers.
             * @memberof syft_proto.generic
             * @namespace
             */
            var pointers = {};

            pointers.v1 = (function() {

                /**
                 * Namespace v1.
                 * @memberof syft_proto.generic.pointers
                 * @namespace
                 */
                var v1 = {};

                v1.PointerTensor = (function() {

                    /**
                     * Properties of a PointerTensor.
                     * @memberof syft_proto.generic.pointers.v1
                     * @interface IPointerTensor
                     * @property {syft_proto.types.syft.v1.IId|null} [object_id] PointerTensor object_id
                     * @property {syft_proto.types.syft.v1.IId|null} [location_id] PointerTensor location_id
                     * @property {syft_proto.types.syft.v1.IId|null} [object_id_at_location] PointerTensor object_id_at_location
                     * @property {syft_proto.types.syft.v1.IShape|null} [shape] PointerTensor shape
                     * @property {string|null} [point_to_attr] PointerTensor point_to_attr
                     * @property {boolean|null} [garbage_collect_data] PointerTensor garbage_collect_data
                     */

                    /**
                     * Constructs a new PointerTensor.
                     * @memberof syft_proto.generic.pointers.v1
                     * @classdesc Represents a PointerTensor.
                     * @implements IPointerTensor
                     * @constructor
                     * @param {syft_proto.generic.pointers.v1.IPointerTensor=} [properties] Properties to set
                     */
                    function PointerTensor(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * PointerTensor object_id.
                     * @member {syft_proto.types.syft.v1.IId|null|undefined} object_id
                     * @memberof syft_proto.generic.pointers.v1.PointerTensor
                     * @instance
                     */
                    PointerTensor.prototype.object_id = null;

                    /**
                     * PointerTensor location_id.
                     * @member {syft_proto.types.syft.v1.IId|null|undefined} location_id
                     * @memberof syft_proto.generic.pointers.v1.PointerTensor
                     * @instance
                     */
                    PointerTensor.prototype.location_id = null;

                    /**
                     * PointerTensor object_id_at_location.
                     * @member {syft_proto.types.syft.v1.IId|null|undefined} object_id_at_location
                     * @memberof syft_proto.generic.pointers.v1.PointerTensor
                     * @instance
                     */
                    PointerTensor.prototype.object_id_at_location = null;

                    /**
                     * PointerTensor shape.
                     * @member {syft_proto.types.syft.v1.IShape|null|undefined} shape
                     * @memberof syft_proto.generic.pointers.v1.PointerTensor
                     * @instance
                     */
                    PointerTensor.prototype.shape = null;

                    /**
                     * PointerTensor point_to_attr.
                     * @member {string} point_to_attr
                     * @memberof syft_proto.generic.pointers.v1.PointerTensor
                     * @instance
                     */
                    PointerTensor.prototype.point_to_attr = "";

                    /**
                     * PointerTensor garbage_collect_data.
                     * @member {boolean} garbage_collect_data
                     * @memberof syft_proto.generic.pointers.v1.PointerTensor
                     * @instance
                     */
                    PointerTensor.prototype.garbage_collect_data = false;

                    /**
                     * Creates a new PointerTensor instance using the specified properties.
                     * @function create
                     * @memberof syft_proto.generic.pointers.v1.PointerTensor
                     * @static
                     * @param {syft_proto.generic.pointers.v1.IPointerTensor=} [properties] Properties to set
                     * @returns {syft_proto.generic.pointers.v1.PointerTensor} PointerTensor instance
                     */
                    PointerTensor.create = function create(properties) {
                        return new PointerTensor(properties);
                    };

                    /**
                     * Encodes the specified PointerTensor message. Does not implicitly {@link syft_proto.generic.pointers.v1.PointerTensor.verify|verify} messages.
                     * @function encode
                     * @memberof syft_proto.generic.pointers.v1.PointerTensor
                     * @static
                     * @param {syft_proto.generic.pointers.v1.IPointerTensor} message PointerTensor message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    PointerTensor.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.object_id != null && message.hasOwnProperty("object_id"))
                            $root.syft_proto.types.syft.v1.Id.encode(message.object_id, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                        if (message.location_id != null && message.hasOwnProperty("location_id"))
                            $root.syft_proto.types.syft.v1.Id.encode(message.location_id, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                        if (message.object_id_at_location != null && message.hasOwnProperty("object_id_at_location"))
                            $root.syft_proto.types.syft.v1.Id.encode(message.object_id_at_location, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
                        if (message.shape != null && message.hasOwnProperty("shape"))
                            $root.syft_proto.types.syft.v1.Shape.encode(message.shape, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
                        if (message.point_to_attr != null && message.hasOwnProperty("point_to_attr"))
                            writer.uint32(/* id 5, wireType 2 =*/42).string(message.point_to_attr);
                        if (message.garbage_collect_data != null && message.hasOwnProperty("garbage_collect_data"))
                            writer.uint32(/* id 6, wireType 0 =*/48).bool(message.garbage_collect_data);
                        return writer;
                    };

                    /**
                     * Encodes the specified PointerTensor message, length delimited. Does not implicitly {@link syft_proto.generic.pointers.v1.PointerTensor.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof syft_proto.generic.pointers.v1.PointerTensor
                     * @static
                     * @param {syft_proto.generic.pointers.v1.IPointerTensor} message PointerTensor message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    PointerTensor.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };

                    /**
                     * Decodes a PointerTensor message from the specified reader or buffer.
                     * @function decode
                     * @memberof syft_proto.generic.pointers.v1.PointerTensor
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {syft_proto.generic.pointers.v1.PointerTensor} PointerTensor
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    PointerTensor.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.syft_proto.generic.pointers.v1.PointerTensor();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                message.object_id = $root.syft_proto.types.syft.v1.Id.decode(reader, reader.uint32());
                                break;
                            case 2:
                                message.location_id = $root.syft_proto.types.syft.v1.Id.decode(reader, reader.uint32());
                                break;
                            case 3:
                                message.object_id_at_location = $root.syft_proto.types.syft.v1.Id.decode(reader, reader.uint32());
                                break;
                            case 4:
                                message.shape = $root.syft_proto.types.syft.v1.Shape.decode(reader, reader.uint32());
                                break;
                            case 5:
                                message.point_to_attr = reader.string();
                                break;
                            case 6:
                                message.garbage_collect_data = reader.bool();
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    /**
                     * Decodes a PointerTensor message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof syft_proto.generic.pointers.v1.PointerTensor
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {syft_proto.generic.pointers.v1.PointerTensor} PointerTensor
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    PointerTensor.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    /**
                     * Verifies a PointerTensor message.
                     * @function verify
                     * @memberof syft_proto.generic.pointers.v1.PointerTensor
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    PointerTensor.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.object_id != null && message.hasOwnProperty("object_id")) {
                            var error = $root.syft_proto.types.syft.v1.Id.verify(message.object_id);
                            if (error)
                                return "object_id." + error;
                        }
                        if (message.location_id != null && message.hasOwnProperty("location_id")) {
                            var error = $root.syft_proto.types.syft.v1.Id.verify(message.location_id);
                            if (error)
                                return "location_id." + error;
                        }
                        if (message.object_id_at_location != null && message.hasOwnProperty("object_id_at_location")) {
                            var error = $root.syft_proto.types.syft.v1.Id.verify(message.object_id_at_location);
                            if (error)
                                return "object_id_at_location." + error;
                        }
                        if (message.shape != null && message.hasOwnProperty("shape")) {
                            var error = $root.syft_proto.types.syft.v1.Shape.verify(message.shape);
                            if (error)
                                return "shape." + error;
                        }
                        if (message.point_to_attr != null && message.hasOwnProperty("point_to_attr"))
                            if (!$util.isString(message.point_to_attr))
                                return "point_to_attr: string expected";
                        if (message.garbage_collect_data != null && message.hasOwnProperty("garbage_collect_data"))
                            if (typeof message.garbage_collect_data !== "boolean")
                                return "garbage_collect_data: boolean expected";
                        return null;
                    };

                    /**
                     * Creates a PointerTensor message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof syft_proto.generic.pointers.v1.PointerTensor
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {syft_proto.generic.pointers.v1.PointerTensor} PointerTensor
                     */
                    PointerTensor.fromObject = function fromObject(object) {
                        if (object instanceof $root.syft_proto.generic.pointers.v1.PointerTensor)
                            return object;
                        var message = new $root.syft_proto.generic.pointers.v1.PointerTensor();
                        if (object.object_id != null) {
                            if (typeof object.object_id !== "object")
                                throw TypeError(".syft_proto.generic.pointers.v1.PointerTensor.object_id: object expected");
                            message.object_id = $root.syft_proto.types.syft.v1.Id.fromObject(object.object_id);
                        }
                        if (object.location_id != null) {
                            if (typeof object.location_id !== "object")
                                throw TypeError(".syft_proto.generic.pointers.v1.PointerTensor.location_id: object expected");
                            message.location_id = $root.syft_proto.types.syft.v1.Id.fromObject(object.location_id);
                        }
                        if (object.object_id_at_location != null) {
                            if (typeof object.object_id_at_location !== "object")
                                throw TypeError(".syft_proto.generic.pointers.v1.PointerTensor.object_id_at_location: object expected");
                            message.object_id_at_location = $root.syft_proto.types.syft.v1.Id.fromObject(object.object_id_at_location);
                        }
                        if (object.shape != null) {
                            if (typeof object.shape !== "object")
                                throw TypeError(".syft_proto.generic.pointers.v1.PointerTensor.shape: object expected");
                            message.shape = $root.syft_proto.types.syft.v1.Shape.fromObject(object.shape);
                        }
                        if (object.point_to_attr != null)
                            message.point_to_attr = String(object.point_to_attr);
                        if (object.garbage_collect_data != null)
                            message.garbage_collect_data = Boolean(object.garbage_collect_data);
                        return message;
                    };

                    /**
                     * Creates a plain object from a PointerTensor message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof syft_proto.generic.pointers.v1.PointerTensor
                     * @static
                     * @param {syft_proto.generic.pointers.v1.PointerTensor} message PointerTensor
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    PointerTensor.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.defaults) {
                            object.object_id = null;
                            object.location_id = null;
                            object.object_id_at_location = null;
                            object.shape = null;
                            object.point_to_attr = "";
                            object.garbage_collect_data = false;
                        }
                        if (message.object_id != null && message.hasOwnProperty("object_id"))
                            object.object_id = $root.syft_proto.types.syft.v1.Id.toObject(message.object_id, options);
                        if (message.location_id != null && message.hasOwnProperty("location_id"))
                            object.location_id = $root.syft_proto.types.syft.v1.Id.toObject(message.location_id, options);
                        if (message.object_id_at_location != null && message.hasOwnProperty("object_id_at_location"))
                            object.object_id_at_location = $root.syft_proto.types.syft.v1.Id.toObject(message.object_id_at_location, options);
                        if (message.shape != null && message.hasOwnProperty("shape"))
                            object.shape = $root.syft_proto.types.syft.v1.Shape.toObject(message.shape, options);
                        if (message.point_to_attr != null && message.hasOwnProperty("point_to_attr"))
                            object.point_to_attr = message.point_to_attr;
                        if (message.garbage_collect_data != null && message.hasOwnProperty("garbage_collect_data"))
                            object.garbage_collect_data = message.garbage_collect_data;
                        return object;
                    };

                    /**
                     * Converts this PointerTensor to JSON.
                     * @function toJSON
                     * @memberof syft_proto.generic.pointers.v1.PointerTensor
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    PointerTensor.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    return PointerTensor;
                })();

                return v1;
            })();

            return pointers;
        })();

        return generic;
    })();

    syft_proto.frameworks = (function() {

        /**
         * Namespace frameworks.
         * @memberof syft_proto
         * @namespace
         */
        var frameworks = {};

        frameworks.torch = (function() {

            /**
             * Namespace torch.
             * @memberof syft_proto.frameworks
             * @namespace
             */
            var torch = {};

            torch.tensors = (function() {

                /**
                 * Namespace tensors.
                 * @memberof syft_proto.frameworks.torch
                 * @namespace
                 */
                var tensors = {};

                tensors.interpreters = (function() {

                    /**
                     * Namespace interpreters.
                     * @memberof syft_proto.frameworks.torch.tensors
                     * @namespace
                     */
                    var interpreters = {};

                    interpreters.v1 = (function() {

                        /**
                         * Namespace v1.
                         * @memberof syft_proto.frameworks.torch.tensors.interpreters
                         * @namespace
                         */
                        var v1 = {};

                        v1.AdditiveSharingTensor = (function() {

                            /**
                             * Properties of an AdditiveSharingTensor.
                             * @memberof syft_proto.frameworks.torch.tensors.interpreters.v1
                             * @interface IAdditiveSharingTensor
                             * @property {syft_proto.types.syft.v1.IId|null} [id] AdditiveSharingTensor id
                             * @property {number|Long|null} [field_int] AdditiveSharingTensor field_int
                             * @property {string|null} [field_str] AdditiveSharingTensor field_str
                             * @property {string|null} [dtype] AdditiveSharingTensor dtype
                             * @property {syft_proto.types.syft.v1.IId|null} [crypto_provider_id] AdditiveSharingTensor crypto_provider_id
                             * @property {Array.<syft_proto.types.syft.v1.IId>|null} [location_ids] AdditiveSharingTensor location_ids
                             * @property {Array.<syft_proto.generic.pointers.v1.IPointerTensor>|null} [shares] AdditiveSharingTensor shares
                             */

                            /**
                             * Constructs a new AdditiveSharingTensor.
                             * @memberof syft_proto.frameworks.torch.tensors.interpreters.v1
                             * @classdesc Represents an AdditiveSharingTensor.
                             * @implements IAdditiveSharingTensor
                             * @constructor
                             * @param {syft_proto.frameworks.torch.tensors.interpreters.v1.IAdditiveSharingTensor=} [properties] Properties to set
                             */
                            function AdditiveSharingTensor(properties) {
                                this.location_ids = [];
                                this.shares = [];
                                if (properties)
                                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                        if (properties[keys[i]] != null)
                                            this[keys[i]] = properties[keys[i]];
                            }

                            /**
                             * AdditiveSharingTensor id.
                             * @member {syft_proto.types.syft.v1.IId|null|undefined} id
                             * @memberof syft_proto.frameworks.torch.tensors.interpreters.v1.AdditiveSharingTensor
                             * @instance
                             */
                            AdditiveSharingTensor.prototype.id = null;

                            /**
                             * AdditiveSharingTensor field_int.
                             * @member {number|Long} field_int
                             * @memberof syft_proto.frameworks.torch.tensors.interpreters.v1.AdditiveSharingTensor
                             * @instance
                             */
                            AdditiveSharingTensor.prototype.field_int = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

                            /**
                             * AdditiveSharingTensor field_str.
                             * @member {string} field_str
                             * @memberof syft_proto.frameworks.torch.tensors.interpreters.v1.AdditiveSharingTensor
                             * @instance
                             */
                            AdditiveSharingTensor.prototype.field_str = "";

                            /**
                             * AdditiveSharingTensor dtype.
                             * @member {string} dtype
                             * @memberof syft_proto.frameworks.torch.tensors.interpreters.v1.AdditiveSharingTensor
                             * @instance
                             */
                            AdditiveSharingTensor.prototype.dtype = "";

                            /**
                             * AdditiveSharingTensor crypto_provider_id.
                             * @member {syft_proto.types.syft.v1.IId|null|undefined} crypto_provider_id
                             * @memberof syft_proto.frameworks.torch.tensors.interpreters.v1.AdditiveSharingTensor
                             * @instance
                             */
                            AdditiveSharingTensor.prototype.crypto_provider_id = null;

                            /**
                             * AdditiveSharingTensor location_ids.
                             * @member {Array.<syft_proto.types.syft.v1.IId>} location_ids
                             * @memberof syft_proto.frameworks.torch.tensors.interpreters.v1.AdditiveSharingTensor
                             * @instance
                             */
                            AdditiveSharingTensor.prototype.location_ids = $util.emptyArray;

                            /**
                             * AdditiveSharingTensor shares.
                             * @member {Array.<syft_proto.generic.pointers.v1.IPointerTensor>} shares
                             * @memberof syft_proto.frameworks.torch.tensors.interpreters.v1.AdditiveSharingTensor
                             * @instance
                             */
                            AdditiveSharingTensor.prototype.shares = $util.emptyArray;

                            // OneOf field names bound to virtual getters and setters
                            var $oneOfFields;

                            /**
                             * AdditiveSharingTensor field_size.
                             * @member {"field_int"|"field_str"|undefined} field_size
                             * @memberof syft_proto.frameworks.torch.tensors.interpreters.v1.AdditiveSharingTensor
                             * @instance
                             */
                            Object.defineProperty(AdditiveSharingTensor.prototype, "field_size", {
                                get: $util.oneOfGetter($oneOfFields = ["field_int", "field_str"]),
                                set: $util.oneOfSetter($oneOfFields)
                            });

                            /**
                             * Creates a new AdditiveSharingTensor instance using the specified properties.
                             * @function create
                             * @memberof syft_proto.frameworks.torch.tensors.interpreters.v1.AdditiveSharingTensor
                             * @static
                             * @param {syft_proto.frameworks.torch.tensors.interpreters.v1.IAdditiveSharingTensor=} [properties] Properties to set
                             * @returns {syft_proto.frameworks.torch.tensors.interpreters.v1.AdditiveSharingTensor} AdditiveSharingTensor instance
                             */
                            AdditiveSharingTensor.create = function create(properties) {
                                return new AdditiveSharingTensor(properties);
                            };

                            /**
                             * Encodes the specified AdditiveSharingTensor message. Does not implicitly {@link syft_proto.frameworks.torch.tensors.interpreters.v1.AdditiveSharingTensor.verify|verify} messages.
                             * @function encode
                             * @memberof syft_proto.frameworks.torch.tensors.interpreters.v1.AdditiveSharingTensor
                             * @static
                             * @param {syft_proto.frameworks.torch.tensors.interpreters.v1.IAdditiveSharingTensor} message AdditiveSharingTensor message or plain object to encode
                             * @param {$protobuf.Writer} [writer] Writer to encode to
                             * @returns {$protobuf.Writer} Writer
                             */
                            AdditiveSharingTensor.encode = function encode(message, writer) {
                                if (!writer)
                                    writer = $Writer.create();
                                if (message.id != null && message.hasOwnProperty("id"))
                                    $root.syft_proto.types.syft.v1.Id.encode(message.id, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                                if (message.field_int != null && message.hasOwnProperty("field_int"))
                                    writer.uint32(/* id 2, wireType 0 =*/16).int64(message.field_int);
                                if (message.field_str != null && message.hasOwnProperty("field_str"))
                                    writer.uint32(/* id 3, wireType 2 =*/26).string(message.field_str);
                                if (message.dtype != null && message.hasOwnProperty("dtype"))
                                    writer.uint32(/* id 4, wireType 2 =*/34).string(message.dtype);
                                if (message.crypto_provider_id != null && message.hasOwnProperty("crypto_provider_id"))
                                    $root.syft_proto.types.syft.v1.Id.encode(message.crypto_provider_id, writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
                                if (message.location_ids != null && message.location_ids.length)
                                    for (var i = 0; i < message.location_ids.length; ++i)
                                        $root.syft_proto.types.syft.v1.Id.encode(message.location_ids[i], writer.uint32(/* id 6, wireType 2 =*/50).fork()).ldelim();
                                if (message.shares != null && message.shares.length)
                                    for (var i = 0; i < message.shares.length; ++i)
                                        $root.syft_proto.generic.pointers.v1.PointerTensor.encode(message.shares[i], writer.uint32(/* id 7, wireType 2 =*/58).fork()).ldelim();
                                return writer;
                            };

                            /**
                             * Encodes the specified AdditiveSharingTensor message, length delimited. Does not implicitly {@link syft_proto.frameworks.torch.tensors.interpreters.v1.AdditiveSharingTensor.verify|verify} messages.
                             * @function encodeDelimited
                             * @memberof syft_proto.frameworks.torch.tensors.interpreters.v1.AdditiveSharingTensor
                             * @static
                             * @param {syft_proto.frameworks.torch.tensors.interpreters.v1.IAdditiveSharingTensor} message AdditiveSharingTensor message or plain object to encode
                             * @param {$protobuf.Writer} [writer] Writer to encode to
                             * @returns {$protobuf.Writer} Writer
                             */
                            AdditiveSharingTensor.encodeDelimited = function encodeDelimited(message, writer) {
                                return this.encode(message, writer).ldelim();
                            };

                            /**
                             * Decodes an AdditiveSharingTensor message from the specified reader or buffer.
                             * @function decode
                             * @memberof syft_proto.frameworks.torch.tensors.interpreters.v1.AdditiveSharingTensor
                             * @static
                             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                             * @param {number} [length] Message length if known beforehand
                             * @returns {syft_proto.frameworks.torch.tensors.interpreters.v1.AdditiveSharingTensor} AdditiveSharingTensor
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            AdditiveSharingTensor.decode = function decode(reader, length) {
                                if (!(reader instanceof $Reader))
                                    reader = $Reader.create(reader);
                                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.syft_proto.frameworks.torch.tensors.interpreters.v1.AdditiveSharingTensor();
                                while (reader.pos < end) {
                                    var tag = reader.uint32();
                                    switch (tag >>> 3) {
                                    case 1:
                                        message.id = $root.syft_proto.types.syft.v1.Id.decode(reader, reader.uint32());
                                        break;
                                    case 2:
                                        message.field_int = reader.int64();
                                        break;
                                    case 3:
                                        message.field_str = reader.string();
                                        break;
                                    case 4:
                                        message.dtype = reader.string();
                                        break;
                                    case 5:
                                        message.crypto_provider_id = $root.syft_proto.types.syft.v1.Id.decode(reader, reader.uint32());
                                        break;
                                    case 6:
                                        if (!(message.location_ids && message.location_ids.length))
                                            message.location_ids = [];
                                        message.location_ids.push($root.syft_proto.types.syft.v1.Id.decode(reader, reader.uint32()));
                                        break;
                                    case 7:
                                        if (!(message.shares && message.shares.length))
                                            message.shares = [];
                                        message.shares.push($root.syft_proto.generic.pointers.v1.PointerTensor.decode(reader, reader.uint32()));
                                        break;
                                    default:
                                        reader.skipType(tag & 7);
                                        break;
                                    }
                                }
                                return message;
                            };

                            /**
                             * Decodes an AdditiveSharingTensor message from the specified reader or buffer, length delimited.
                             * @function decodeDelimited
                             * @memberof syft_proto.frameworks.torch.tensors.interpreters.v1.AdditiveSharingTensor
                             * @static
                             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                             * @returns {syft_proto.frameworks.torch.tensors.interpreters.v1.AdditiveSharingTensor} AdditiveSharingTensor
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            AdditiveSharingTensor.decodeDelimited = function decodeDelimited(reader) {
                                if (!(reader instanceof $Reader))
                                    reader = new $Reader(reader);
                                return this.decode(reader, reader.uint32());
                            };

                            /**
                             * Verifies an AdditiveSharingTensor message.
                             * @function verify
                             * @memberof syft_proto.frameworks.torch.tensors.interpreters.v1.AdditiveSharingTensor
                             * @static
                             * @param {Object.<string,*>} message Plain object to verify
                             * @returns {string|null} `null` if valid, otherwise the reason why it is not
                             */
                            AdditiveSharingTensor.verify = function verify(message) {
                                if (typeof message !== "object" || message === null)
                                    return "object expected";
                                var properties = {};
                                if (message.id != null && message.hasOwnProperty("id")) {
                                    var error = $root.syft_proto.types.syft.v1.Id.verify(message.id);
                                    if (error)
                                        return "id." + error;
                                }
                                if (message.field_int != null && message.hasOwnProperty("field_int")) {
                                    properties.field_size = 1;
                                    if (!$util.isInteger(message.field_int) && !(message.field_int && $util.isInteger(message.field_int.low) && $util.isInteger(message.field_int.high)))
                                        return "field_int: integer|Long expected";
                                }
                                if (message.field_str != null && message.hasOwnProperty("field_str")) {
                                    if (properties.field_size === 1)
                                        return "field_size: multiple values";
                                    properties.field_size = 1;
                                    if (!$util.isString(message.field_str))
                                        return "field_str: string expected";
                                }
                                if (message.dtype != null && message.hasOwnProperty("dtype"))
                                    if (!$util.isString(message.dtype))
                                        return "dtype: string expected";
                                if (message.crypto_provider_id != null && message.hasOwnProperty("crypto_provider_id")) {
                                    var error = $root.syft_proto.types.syft.v1.Id.verify(message.crypto_provider_id);
                                    if (error)
                                        return "crypto_provider_id." + error;
                                }
                                if (message.location_ids != null && message.hasOwnProperty("location_ids")) {
                                    if (!Array.isArray(message.location_ids))
                                        return "location_ids: array expected";
                                    for (var i = 0; i < message.location_ids.length; ++i) {
                                        var error = $root.syft_proto.types.syft.v1.Id.verify(message.location_ids[i]);
                                        if (error)
                                            return "location_ids." + error;
                                    }
                                }
                                if (message.shares != null && message.hasOwnProperty("shares")) {
                                    if (!Array.isArray(message.shares))
                                        return "shares: array expected";
                                    for (var i = 0; i < message.shares.length; ++i) {
                                        var error = $root.syft_proto.generic.pointers.v1.PointerTensor.verify(message.shares[i]);
                                        if (error)
                                            return "shares." + error;
                                    }
                                }
                                return null;
                            };

                            /**
                             * Creates an AdditiveSharingTensor message from a plain object. Also converts values to their respective internal types.
                             * @function fromObject
                             * @memberof syft_proto.frameworks.torch.tensors.interpreters.v1.AdditiveSharingTensor
                             * @static
                             * @param {Object.<string,*>} object Plain object
                             * @returns {syft_proto.frameworks.torch.tensors.interpreters.v1.AdditiveSharingTensor} AdditiveSharingTensor
                             */
                            AdditiveSharingTensor.fromObject = function fromObject(object) {
                                if (object instanceof $root.syft_proto.frameworks.torch.tensors.interpreters.v1.AdditiveSharingTensor)
                                    return object;
                                var message = new $root.syft_proto.frameworks.torch.tensors.interpreters.v1.AdditiveSharingTensor();
                                if (object.id != null) {
                                    if (typeof object.id !== "object")
                                        throw TypeError(".syft_proto.frameworks.torch.tensors.interpreters.v1.AdditiveSharingTensor.id: object expected");
                                    message.id = $root.syft_proto.types.syft.v1.Id.fromObject(object.id);
                                }
                                if (object.field_int != null)
                                    if ($util.Long)
                                        (message.field_int = $util.Long.fromValue(object.field_int)).unsigned = false;
                                    else if (typeof object.field_int === "string")
                                        message.field_int = parseInt(object.field_int, 10);
                                    else if (typeof object.field_int === "number")
                                        message.field_int = object.field_int;
                                    else if (typeof object.field_int === "object")
                                        message.field_int = new $util.LongBits(object.field_int.low >>> 0, object.field_int.high >>> 0).toNumber();
                                if (object.field_str != null)
                                    message.field_str = String(object.field_str);
                                if (object.dtype != null)
                                    message.dtype = String(object.dtype);
                                if (object.crypto_provider_id != null) {
                                    if (typeof object.crypto_provider_id !== "object")
                                        throw TypeError(".syft_proto.frameworks.torch.tensors.interpreters.v1.AdditiveSharingTensor.crypto_provider_id: object expected");
                                    message.crypto_provider_id = $root.syft_proto.types.syft.v1.Id.fromObject(object.crypto_provider_id);
                                }
                                if (object.location_ids) {
                                    if (!Array.isArray(object.location_ids))
                                        throw TypeError(".syft_proto.frameworks.torch.tensors.interpreters.v1.AdditiveSharingTensor.location_ids: array expected");
                                    message.location_ids = [];
                                    for (var i = 0; i < object.location_ids.length; ++i) {
                                        if (typeof object.location_ids[i] !== "object")
                                            throw TypeError(".syft_proto.frameworks.torch.tensors.interpreters.v1.AdditiveSharingTensor.location_ids: object expected");
                                        message.location_ids[i] = $root.syft_proto.types.syft.v1.Id.fromObject(object.location_ids[i]);
                                    }
                                }
                                if (object.shares) {
                                    if (!Array.isArray(object.shares))
                                        throw TypeError(".syft_proto.frameworks.torch.tensors.interpreters.v1.AdditiveSharingTensor.shares: array expected");
                                    message.shares = [];
                                    for (var i = 0; i < object.shares.length; ++i) {
                                        if (typeof object.shares[i] !== "object")
                                            throw TypeError(".syft_proto.frameworks.torch.tensors.interpreters.v1.AdditiveSharingTensor.shares: object expected");
                                        message.shares[i] = $root.syft_proto.generic.pointers.v1.PointerTensor.fromObject(object.shares[i]);
                                    }
                                }
                                return message;
                            };

                            /**
                             * Creates a plain object from an AdditiveSharingTensor message. Also converts values to other types if specified.
                             * @function toObject
                             * @memberof syft_proto.frameworks.torch.tensors.interpreters.v1.AdditiveSharingTensor
                             * @static
                             * @param {syft_proto.frameworks.torch.tensors.interpreters.v1.AdditiveSharingTensor} message AdditiveSharingTensor
                             * @param {$protobuf.IConversionOptions} [options] Conversion options
                             * @returns {Object.<string,*>} Plain object
                             */
                            AdditiveSharingTensor.toObject = function toObject(message, options) {
                                if (!options)
                                    options = {};
                                var object = {};
                                if (options.arrays || options.defaults) {
                                    object.location_ids = [];
                                    object.shares = [];
                                }
                                if (options.defaults) {
                                    object.id = null;
                                    object.dtype = "";
                                    object.crypto_provider_id = null;
                                }
                                if (message.id != null && message.hasOwnProperty("id"))
                                    object.id = $root.syft_proto.types.syft.v1.Id.toObject(message.id, options);
                                if (message.field_int != null && message.hasOwnProperty("field_int")) {
                                    if (typeof message.field_int === "number")
                                        object.field_int = options.longs === String ? String(message.field_int) : message.field_int;
                                    else
                                        object.field_int = options.longs === String ? $util.Long.prototype.toString.call(message.field_int) : options.longs === Number ? new $util.LongBits(message.field_int.low >>> 0, message.field_int.high >>> 0).toNumber() : message.field_int;
                                    if (options.oneofs)
                                        object.field_size = "field_int";
                                }
                                if (message.field_str != null && message.hasOwnProperty("field_str")) {
                                    object.field_str = message.field_str;
                                    if (options.oneofs)
                                        object.field_size = "field_str";
                                }
                                if (message.dtype != null && message.hasOwnProperty("dtype"))
                                    object.dtype = message.dtype;
                                if (message.crypto_provider_id != null && message.hasOwnProperty("crypto_provider_id"))
                                    object.crypto_provider_id = $root.syft_proto.types.syft.v1.Id.toObject(message.crypto_provider_id, options);
                                if (message.location_ids && message.location_ids.length) {
                                    object.location_ids = [];
                                    for (var j = 0; j < message.location_ids.length; ++j)
                                        object.location_ids[j] = $root.syft_proto.types.syft.v1.Id.toObject(message.location_ids[j], options);
                                }
                                if (message.shares && message.shares.length) {
                                    object.shares = [];
                                    for (var j = 0; j < message.shares.length; ++j)
                                        object.shares[j] = $root.syft_proto.generic.pointers.v1.PointerTensor.toObject(message.shares[j], options);
                                }
                                return object;
                            };

                            /**
                             * Converts this AdditiveSharingTensor to JSON.
                             * @function toJSON
                             * @memberof syft_proto.frameworks.torch.tensors.interpreters.v1.AdditiveSharingTensor
                             * @instance
                             * @returns {Object.<string,*>} JSON object
                             */
                            AdditiveSharingTensor.prototype.toJSON = function toJSON() {
                                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                            };

                            return AdditiveSharingTensor;
                        })();

                        return v1;
                    })();

                    return interpreters;
                })();

                return tensors;
            })();

            return torch;
        })();

        return frameworks;
    })();

    syft_proto.messaging = (function() {

        /**
         * Namespace messaging.
         * @memberof syft_proto
         * @namespace
         */
        var messaging = {};

        messaging.v1 = (function() {

            /**
             * Namespace v1.
             * @memberof syft_proto.messaging
             * @namespace
             */
            var v1 = {};

            v1.SyftMessage = (function() {

                /**
                 * Properties of a SyftMessage.
                 * @memberof syft_proto.messaging.v1
                 * @interface ISyftMessage
                 * @property {google.protobuf.IEmpty|null} [contents_empty_msg] SyftMessage contents_empty_msg
                 * @property {syft_proto.messaging.v1.IObjectMessage|null} [contents_object_msg] SyftMessage contents_object_msg
                 * @property {syft_proto.messaging.v1.ITensorCommandMessage|null} [contents_tensor_cmd_msg] SyftMessage contents_tensor_cmd_msg
                 */

                /**
                 * Constructs a new SyftMessage.
                 * @memberof syft_proto.messaging.v1
                 * @classdesc Represents a SyftMessage.
                 * @implements ISyftMessage
                 * @constructor
                 * @param {syft_proto.messaging.v1.ISyftMessage=} [properties] Properties to set
                 */
                function SyftMessage(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * SyftMessage contents_empty_msg.
                 * @member {google.protobuf.IEmpty|null|undefined} contents_empty_msg
                 * @memberof syft_proto.messaging.v1.SyftMessage
                 * @instance
                 */
                SyftMessage.prototype.contents_empty_msg = null;

                /**
                 * SyftMessage contents_object_msg.
                 * @member {syft_proto.messaging.v1.IObjectMessage|null|undefined} contents_object_msg
                 * @memberof syft_proto.messaging.v1.SyftMessage
                 * @instance
                 */
                SyftMessage.prototype.contents_object_msg = null;

                /**
                 * SyftMessage contents_tensor_cmd_msg.
                 * @member {syft_proto.messaging.v1.ITensorCommandMessage|null|undefined} contents_tensor_cmd_msg
                 * @memberof syft_proto.messaging.v1.SyftMessage
                 * @instance
                 */
                SyftMessage.prototype.contents_tensor_cmd_msg = null;

                // OneOf field names bound to virtual getters and setters
                var $oneOfFields;

                /**
                 * SyftMessage contents.
                 * @member {"contents_empty_msg"|"contents_object_msg"|"contents_tensor_cmd_msg"|undefined} contents
                 * @memberof syft_proto.messaging.v1.SyftMessage
                 * @instance
                 */
                Object.defineProperty(SyftMessage.prototype, "contents", {
                    get: $util.oneOfGetter($oneOfFields = ["contents_empty_msg", "contents_object_msg", "contents_tensor_cmd_msg"]),
                    set: $util.oneOfSetter($oneOfFields)
                });

                /**
                 * Creates a new SyftMessage instance using the specified properties.
                 * @function create
                 * @memberof syft_proto.messaging.v1.SyftMessage
                 * @static
                 * @param {syft_proto.messaging.v1.ISyftMessage=} [properties] Properties to set
                 * @returns {syft_proto.messaging.v1.SyftMessage} SyftMessage instance
                 */
                SyftMessage.create = function create(properties) {
                    return new SyftMessage(properties);
                };

                /**
                 * Encodes the specified SyftMessage message. Does not implicitly {@link syft_proto.messaging.v1.SyftMessage.verify|verify} messages.
                 * @function encode
                 * @memberof syft_proto.messaging.v1.SyftMessage
                 * @static
                 * @param {syft_proto.messaging.v1.ISyftMessage} message SyftMessage message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                SyftMessage.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.contents_empty_msg != null && message.hasOwnProperty("contents_empty_msg"))
                        $root.google.protobuf.Empty.encode(message.contents_empty_msg, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                    if (message.contents_object_msg != null && message.hasOwnProperty("contents_object_msg"))
                        $root.syft_proto.messaging.v1.ObjectMessage.encode(message.contents_object_msg, writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
                    if (message.contents_tensor_cmd_msg != null && message.hasOwnProperty("contents_tensor_cmd_msg"))
                        $root.syft_proto.messaging.v1.TensorCommandMessage.encode(message.contents_tensor_cmd_msg, writer.uint32(/* id 7, wireType 2 =*/58).fork()).ldelim();
                    return writer;
                };

                /**
                 * Encodes the specified SyftMessage message, length delimited. Does not implicitly {@link syft_proto.messaging.v1.SyftMessage.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof syft_proto.messaging.v1.SyftMessage
                 * @static
                 * @param {syft_proto.messaging.v1.ISyftMessage} message SyftMessage message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                SyftMessage.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a SyftMessage message from the specified reader or buffer.
                 * @function decode
                 * @memberof syft_proto.messaging.v1.SyftMessage
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {syft_proto.messaging.v1.SyftMessage} SyftMessage
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                SyftMessage.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.syft_proto.messaging.v1.SyftMessage();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.contents_empty_msg = $root.google.protobuf.Empty.decode(reader, reader.uint32());
                            break;
                        case 5:
                            message.contents_object_msg = $root.syft_proto.messaging.v1.ObjectMessage.decode(reader, reader.uint32());
                            break;
                        case 7:
                            message.contents_tensor_cmd_msg = $root.syft_proto.messaging.v1.TensorCommandMessage.decode(reader, reader.uint32());
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes a SyftMessage message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof syft_proto.messaging.v1.SyftMessage
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {syft_proto.messaging.v1.SyftMessage} SyftMessage
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                SyftMessage.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a SyftMessage message.
                 * @function verify
                 * @memberof syft_proto.messaging.v1.SyftMessage
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                SyftMessage.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    var properties = {};
                    if (message.contents_empty_msg != null && message.hasOwnProperty("contents_empty_msg")) {
                        properties.contents = 1;
                        {
                            var error = $root.google.protobuf.Empty.verify(message.contents_empty_msg);
                            if (error)
                                return "contents_empty_msg." + error;
                        }
                    }
                    if (message.contents_object_msg != null && message.hasOwnProperty("contents_object_msg")) {
                        if (properties.contents === 1)
                            return "contents: multiple values";
                        properties.contents = 1;
                        {
                            var error = $root.syft_proto.messaging.v1.ObjectMessage.verify(message.contents_object_msg);
                            if (error)
                                return "contents_object_msg." + error;
                        }
                    }
                    if (message.contents_tensor_cmd_msg != null && message.hasOwnProperty("contents_tensor_cmd_msg")) {
                        if (properties.contents === 1)
                            return "contents: multiple values";
                        properties.contents = 1;
                        {
                            var error = $root.syft_proto.messaging.v1.TensorCommandMessage.verify(message.contents_tensor_cmd_msg);
                            if (error)
                                return "contents_tensor_cmd_msg." + error;
                        }
                    }
                    return null;
                };

                /**
                 * Creates a SyftMessage message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof syft_proto.messaging.v1.SyftMessage
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {syft_proto.messaging.v1.SyftMessage} SyftMessage
                 */
                SyftMessage.fromObject = function fromObject(object) {
                    if (object instanceof $root.syft_proto.messaging.v1.SyftMessage)
                        return object;
                    var message = new $root.syft_proto.messaging.v1.SyftMessage();
                    if (object.contents_empty_msg != null) {
                        if (typeof object.contents_empty_msg !== "object")
                            throw TypeError(".syft_proto.messaging.v1.SyftMessage.contents_empty_msg: object expected");
                        message.contents_empty_msg = $root.google.protobuf.Empty.fromObject(object.contents_empty_msg);
                    }
                    if (object.contents_object_msg != null) {
                        if (typeof object.contents_object_msg !== "object")
                            throw TypeError(".syft_proto.messaging.v1.SyftMessage.contents_object_msg: object expected");
                        message.contents_object_msg = $root.syft_proto.messaging.v1.ObjectMessage.fromObject(object.contents_object_msg);
                    }
                    if (object.contents_tensor_cmd_msg != null) {
                        if (typeof object.contents_tensor_cmd_msg !== "object")
                            throw TypeError(".syft_proto.messaging.v1.SyftMessage.contents_tensor_cmd_msg: object expected");
                        message.contents_tensor_cmd_msg = $root.syft_proto.messaging.v1.TensorCommandMessage.fromObject(object.contents_tensor_cmd_msg);
                    }
                    return message;
                };

                /**
                 * Creates a plain object from a SyftMessage message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof syft_proto.messaging.v1.SyftMessage
                 * @static
                 * @param {syft_proto.messaging.v1.SyftMessage} message SyftMessage
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                SyftMessage.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (message.contents_empty_msg != null && message.hasOwnProperty("contents_empty_msg")) {
                        object.contents_empty_msg = $root.google.protobuf.Empty.toObject(message.contents_empty_msg, options);
                        if (options.oneofs)
                            object.contents = "contents_empty_msg";
                    }
                    if (message.contents_object_msg != null && message.hasOwnProperty("contents_object_msg")) {
                        object.contents_object_msg = $root.syft_proto.messaging.v1.ObjectMessage.toObject(message.contents_object_msg, options);
                        if (options.oneofs)
                            object.contents = "contents_object_msg";
                    }
                    if (message.contents_tensor_cmd_msg != null && message.hasOwnProperty("contents_tensor_cmd_msg")) {
                        object.contents_tensor_cmd_msg = $root.syft_proto.messaging.v1.TensorCommandMessage.toObject(message.contents_tensor_cmd_msg, options);
                        if (options.oneofs)
                            object.contents = "contents_tensor_cmd_msg";
                    }
                    return object;
                };

                /**
                 * Converts this SyftMessage to JSON.
                 * @function toJSON
                 * @memberof syft_proto.messaging.v1.SyftMessage
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                SyftMessage.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                return SyftMessage;
            })();

            v1.ObjectMessage = (function() {

                /**
                 * Properties of an ObjectMessage.
                 * @memberof syft_proto.messaging.v1
                 * @interface IObjectMessage
                 * @property {syft_proto.types.torch.v1.ITorchTensor|null} [tensor] ObjectMessage tensor
                 */

                /**
                 * Constructs a new ObjectMessage.
                 * @memberof syft_proto.messaging.v1
                 * @classdesc Represents an ObjectMessage.
                 * @implements IObjectMessage
                 * @constructor
                 * @param {syft_proto.messaging.v1.IObjectMessage=} [properties] Properties to set
                 */
                function ObjectMessage(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * ObjectMessage tensor.
                 * @member {syft_proto.types.torch.v1.ITorchTensor|null|undefined} tensor
                 * @memberof syft_proto.messaging.v1.ObjectMessage
                 * @instance
                 */
                ObjectMessage.prototype.tensor = null;

                /**
                 * Creates a new ObjectMessage instance using the specified properties.
                 * @function create
                 * @memberof syft_proto.messaging.v1.ObjectMessage
                 * @static
                 * @param {syft_proto.messaging.v1.IObjectMessage=} [properties] Properties to set
                 * @returns {syft_proto.messaging.v1.ObjectMessage} ObjectMessage instance
                 */
                ObjectMessage.create = function create(properties) {
                    return new ObjectMessage(properties);
                };

                /**
                 * Encodes the specified ObjectMessage message. Does not implicitly {@link syft_proto.messaging.v1.ObjectMessage.verify|verify} messages.
                 * @function encode
                 * @memberof syft_proto.messaging.v1.ObjectMessage
                 * @static
                 * @param {syft_proto.messaging.v1.IObjectMessage} message ObjectMessage message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                ObjectMessage.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.tensor != null && message.hasOwnProperty("tensor"))
                        $root.syft_proto.types.torch.v1.TorchTensor.encode(message.tensor, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                    return writer;
                };

                /**
                 * Encodes the specified ObjectMessage message, length delimited. Does not implicitly {@link syft_proto.messaging.v1.ObjectMessage.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof syft_proto.messaging.v1.ObjectMessage
                 * @static
                 * @param {syft_proto.messaging.v1.IObjectMessage} message ObjectMessage message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                ObjectMessage.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes an ObjectMessage message from the specified reader or buffer.
                 * @function decode
                 * @memberof syft_proto.messaging.v1.ObjectMessage
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {syft_proto.messaging.v1.ObjectMessage} ObjectMessage
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                ObjectMessage.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.syft_proto.messaging.v1.ObjectMessage();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.tensor = $root.syft_proto.types.torch.v1.TorchTensor.decode(reader, reader.uint32());
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes an ObjectMessage message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof syft_proto.messaging.v1.ObjectMessage
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {syft_proto.messaging.v1.ObjectMessage} ObjectMessage
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                ObjectMessage.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies an ObjectMessage message.
                 * @function verify
                 * @memberof syft_proto.messaging.v1.ObjectMessage
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                ObjectMessage.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.tensor != null && message.hasOwnProperty("tensor")) {
                        var error = $root.syft_proto.types.torch.v1.TorchTensor.verify(message.tensor);
                        if (error)
                            return "tensor." + error;
                    }
                    return null;
                };

                /**
                 * Creates an ObjectMessage message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof syft_proto.messaging.v1.ObjectMessage
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {syft_proto.messaging.v1.ObjectMessage} ObjectMessage
                 */
                ObjectMessage.fromObject = function fromObject(object) {
                    if (object instanceof $root.syft_proto.messaging.v1.ObjectMessage)
                        return object;
                    var message = new $root.syft_proto.messaging.v1.ObjectMessage();
                    if (object.tensor != null) {
                        if (typeof object.tensor !== "object")
                            throw TypeError(".syft_proto.messaging.v1.ObjectMessage.tensor: object expected");
                        message.tensor = $root.syft_proto.types.torch.v1.TorchTensor.fromObject(object.tensor);
                    }
                    return message;
                };

                /**
                 * Creates a plain object from an ObjectMessage message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof syft_proto.messaging.v1.ObjectMessage
                 * @static
                 * @param {syft_proto.messaging.v1.ObjectMessage} message ObjectMessage
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                ObjectMessage.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults)
                        object.tensor = null;
                    if (message.tensor != null && message.hasOwnProperty("tensor"))
                        object.tensor = $root.syft_proto.types.torch.v1.TorchTensor.toObject(message.tensor, options);
                    return object;
                };

                /**
                 * Converts this ObjectMessage to JSON.
                 * @function toJSON
                 * @memberof syft_proto.messaging.v1.ObjectMessage
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                ObjectMessage.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                return ObjectMessage;
            })();

            v1.TensorCommandMessage = (function() {

                /**
                 * Properties of a TensorCommandMessage.
                 * @memberof syft_proto.messaging.v1
                 * @interface ITensorCommandMessage
                 * @property {syft_proto.execution.v1.IComputationAction|null} [computation] TensorCommandMessage computation
                 * @property {syft_proto.execution.v1.ICommunicationAction|null} [communication] TensorCommandMessage communication
                 */

                /**
                 * Constructs a new TensorCommandMessage.
                 * @memberof syft_proto.messaging.v1
                 * @classdesc Represents a TensorCommandMessage.
                 * @implements ITensorCommandMessage
                 * @constructor
                 * @param {syft_proto.messaging.v1.ITensorCommandMessage=} [properties] Properties to set
                 */
                function TensorCommandMessage(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * TensorCommandMessage computation.
                 * @member {syft_proto.execution.v1.IComputationAction|null|undefined} computation
                 * @memberof syft_proto.messaging.v1.TensorCommandMessage
                 * @instance
                 */
                TensorCommandMessage.prototype.computation = null;

                /**
                 * TensorCommandMessage communication.
                 * @member {syft_proto.execution.v1.ICommunicationAction|null|undefined} communication
                 * @memberof syft_proto.messaging.v1.TensorCommandMessage
                 * @instance
                 */
                TensorCommandMessage.prototype.communication = null;

                // OneOf field names bound to virtual getters and setters
                var $oneOfFields;

                /**
                 * TensorCommandMessage action.
                 * @member {"computation"|"communication"|undefined} action
                 * @memberof syft_proto.messaging.v1.TensorCommandMessage
                 * @instance
                 */
                Object.defineProperty(TensorCommandMessage.prototype, "action", {
                    get: $util.oneOfGetter($oneOfFields = ["computation", "communication"]),
                    set: $util.oneOfSetter($oneOfFields)
                });

                /**
                 * Creates a new TensorCommandMessage instance using the specified properties.
                 * @function create
                 * @memberof syft_proto.messaging.v1.TensorCommandMessage
                 * @static
                 * @param {syft_proto.messaging.v1.ITensorCommandMessage=} [properties] Properties to set
                 * @returns {syft_proto.messaging.v1.TensorCommandMessage} TensorCommandMessage instance
                 */
                TensorCommandMessage.create = function create(properties) {
                    return new TensorCommandMessage(properties);
                };

                /**
                 * Encodes the specified TensorCommandMessage message. Does not implicitly {@link syft_proto.messaging.v1.TensorCommandMessage.verify|verify} messages.
                 * @function encode
                 * @memberof syft_proto.messaging.v1.TensorCommandMessage
                 * @static
                 * @param {syft_proto.messaging.v1.ITensorCommandMessage} message TensorCommandMessage message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                TensorCommandMessage.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.computation != null && message.hasOwnProperty("computation"))
                        $root.syft_proto.execution.v1.ComputationAction.encode(message.computation, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                    if (message.communication != null && message.hasOwnProperty("communication"))
                        $root.syft_proto.execution.v1.CommunicationAction.encode(message.communication, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                    return writer;
                };

                /**
                 * Encodes the specified TensorCommandMessage message, length delimited. Does not implicitly {@link syft_proto.messaging.v1.TensorCommandMessage.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof syft_proto.messaging.v1.TensorCommandMessage
                 * @static
                 * @param {syft_proto.messaging.v1.ITensorCommandMessage} message TensorCommandMessage message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                TensorCommandMessage.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a TensorCommandMessage message from the specified reader or buffer.
                 * @function decode
                 * @memberof syft_proto.messaging.v1.TensorCommandMessage
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {syft_proto.messaging.v1.TensorCommandMessage} TensorCommandMessage
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                TensorCommandMessage.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.syft_proto.messaging.v1.TensorCommandMessage();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.computation = $root.syft_proto.execution.v1.ComputationAction.decode(reader, reader.uint32());
                            break;
                        case 2:
                            message.communication = $root.syft_proto.execution.v1.CommunicationAction.decode(reader, reader.uint32());
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes a TensorCommandMessage message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof syft_proto.messaging.v1.TensorCommandMessage
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {syft_proto.messaging.v1.TensorCommandMessage} TensorCommandMessage
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                TensorCommandMessage.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a TensorCommandMessage message.
                 * @function verify
                 * @memberof syft_proto.messaging.v1.TensorCommandMessage
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                TensorCommandMessage.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    var properties = {};
                    if (message.computation != null && message.hasOwnProperty("computation")) {
                        properties.action = 1;
                        {
                            var error = $root.syft_proto.execution.v1.ComputationAction.verify(message.computation);
                            if (error)
                                return "computation." + error;
                        }
                    }
                    if (message.communication != null && message.hasOwnProperty("communication")) {
                        if (properties.action === 1)
                            return "action: multiple values";
                        properties.action = 1;
                        {
                            var error = $root.syft_proto.execution.v1.CommunicationAction.verify(message.communication);
                            if (error)
                                return "communication." + error;
                        }
                    }
                    return null;
                };

                /**
                 * Creates a TensorCommandMessage message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof syft_proto.messaging.v1.TensorCommandMessage
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {syft_proto.messaging.v1.TensorCommandMessage} TensorCommandMessage
                 */
                TensorCommandMessage.fromObject = function fromObject(object) {
                    if (object instanceof $root.syft_proto.messaging.v1.TensorCommandMessage)
                        return object;
                    var message = new $root.syft_proto.messaging.v1.TensorCommandMessage();
                    if (object.computation != null) {
                        if (typeof object.computation !== "object")
                            throw TypeError(".syft_proto.messaging.v1.TensorCommandMessage.computation: object expected");
                        message.computation = $root.syft_proto.execution.v1.ComputationAction.fromObject(object.computation);
                    }
                    if (object.communication != null) {
                        if (typeof object.communication !== "object")
                            throw TypeError(".syft_proto.messaging.v1.TensorCommandMessage.communication: object expected");
                        message.communication = $root.syft_proto.execution.v1.CommunicationAction.fromObject(object.communication);
                    }
                    return message;
                };

                /**
                 * Creates a plain object from a TensorCommandMessage message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof syft_proto.messaging.v1.TensorCommandMessage
                 * @static
                 * @param {syft_proto.messaging.v1.TensorCommandMessage} message TensorCommandMessage
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                TensorCommandMessage.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (message.computation != null && message.hasOwnProperty("computation")) {
                        object.computation = $root.syft_proto.execution.v1.ComputationAction.toObject(message.computation, options);
                        if (options.oneofs)
                            object.action = "computation";
                    }
                    if (message.communication != null && message.hasOwnProperty("communication")) {
                        object.communication = $root.syft_proto.execution.v1.CommunicationAction.toObject(message.communication, options);
                        if (options.oneofs)
                            object.action = "communication";
                    }
                    return object;
                };

                /**
                 * Converts this TensorCommandMessage to JSON.
                 * @function toJSON
                 * @memberof syft_proto.messaging.v1.TensorCommandMessage
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                TensorCommandMessage.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                return TensorCommandMessage;
            })();

            return v1;
        })();

        return messaging;
    })();

    return syft_proto;
})();

$root.google = (function() {

    /**
     * Namespace google.
     * @exports google
     * @namespace
     */
    var google = {};

    google.protobuf = (function() {

        /**
         * Namespace protobuf.
         * @memberof google
         * @namespace
         */
        var protobuf = {};

        protobuf.Empty = (function() {

            /**
             * Properties of an Empty.
             * @memberof google.protobuf
             * @interface IEmpty
             */

            /**
             * Constructs a new Empty.
             * @memberof google.protobuf
             * @classdesc Represents an Empty.
             * @implements IEmpty
             * @constructor
             * @param {google.protobuf.IEmpty=} [properties] Properties to set
             */
            function Empty(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Creates a new Empty instance using the specified properties.
             * @function create
             * @memberof google.protobuf.Empty
             * @static
             * @param {google.protobuf.IEmpty=} [properties] Properties to set
             * @returns {google.protobuf.Empty} Empty instance
             */
            Empty.create = function create(properties) {
                return new Empty(properties);
            };

            /**
             * Encodes the specified Empty message. Does not implicitly {@link google.protobuf.Empty.verify|verify} messages.
             * @function encode
             * @memberof google.protobuf.Empty
             * @static
             * @param {google.protobuf.IEmpty} message Empty message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Empty.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                return writer;
            };

            /**
             * Encodes the specified Empty message, length delimited. Does not implicitly {@link google.protobuf.Empty.verify|verify} messages.
             * @function encodeDelimited
             * @memberof google.protobuf.Empty
             * @static
             * @param {google.protobuf.IEmpty} message Empty message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Empty.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes an Empty message from the specified reader or buffer.
             * @function decode
             * @memberof google.protobuf.Empty
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {google.protobuf.Empty} Empty
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Empty.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.Empty();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes an Empty message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof google.protobuf.Empty
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {google.protobuf.Empty} Empty
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Empty.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies an Empty message.
             * @function verify
             * @memberof google.protobuf.Empty
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Empty.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                return null;
            };

            /**
             * Creates an Empty message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof google.protobuf.Empty
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {google.protobuf.Empty} Empty
             */
            Empty.fromObject = function fromObject(object) {
                if (object instanceof $root.google.protobuf.Empty)
                    return object;
                return new $root.google.protobuf.Empty();
            };

            /**
             * Creates a plain object from an Empty message. Also converts values to other types if specified.
             * @function toObject
             * @memberof google.protobuf.Empty
             * @static
             * @param {google.protobuf.Empty} message Empty
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Empty.toObject = function toObject() {
                return {};
            };

            /**
             * Converts this Empty to JSON.
             * @function toJSON
             * @memberof google.protobuf.Empty
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Empty.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return Empty;
        })();

        return protobuf;
    })();

    return google;
})();

module.exports = $root;
