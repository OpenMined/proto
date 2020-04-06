import * as $protobuf from "protobufjs";
/** Namespace syft_proto. */
export namespace syft_proto {

    /** Namespace execution. */
    namespace execution {

        /** Namespace v1. */
        namespace v1 {

            /** Properties of a CommunicationAction. */
            interface ICommunicationAction {

                /** CommunicationAction obj_id */
                obj_id?: (syft_proto.types.syft.v1.IId|null);

                /** CommunicationAction source */
                source?: (syft_proto.types.syft.v1.IId|null);

                /** CommunicationAction destinations */
                destinations?: (syft_proto.types.syft.v1.IId[]|null);

                /** CommunicationAction kwargs */
                kwargs?: ({ [k: string]: syft_proto.types.syft.v1.IArg }|null);
            }

            /** Represents a CommunicationAction. */
            class CommunicationAction implements ICommunicationAction {

                /**
                 * Constructs a new CommunicationAction.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: syft_proto.execution.v1.ICommunicationAction);

                /** CommunicationAction obj_id. */
                public obj_id?: (syft_proto.types.syft.v1.IId|null);

                /** CommunicationAction source. */
                public source?: (syft_proto.types.syft.v1.IId|null);

                /** CommunicationAction destinations. */
                public destinations: syft_proto.types.syft.v1.IId[];

                /** CommunicationAction kwargs. */
                public kwargs: { [k: string]: syft_proto.types.syft.v1.IArg };

                /**
                 * Creates a new CommunicationAction instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns CommunicationAction instance
                 */
                public static create(properties?: syft_proto.execution.v1.ICommunicationAction): syft_proto.execution.v1.CommunicationAction;

                /**
                 * Encodes the specified CommunicationAction message. Does not implicitly {@link syft_proto.execution.v1.CommunicationAction.verify|verify} messages.
                 * @param message CommunicationAction message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: syft_proto.execution.v1.ICommunicationAction, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified CommunicationAction message, length delimited. Does not implicitly {@link syft_proto.execution.v1.CommunicationAction.verify|verify} messages.
                 * @param message CommunicationAction message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: syft_proto.execution.v1.ICommunicationAction, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a CommunicationAction message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns CommunicationAction
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): syft_proto.execution.v1.CommunicationAction;

                /**
                 * Decodes a CommunicationAction message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns CommunicationAction
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): syft_proto.execution.v1.CommunicationAction;

                /**
                 * Verifies a CommunicationAction message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a CommunicationAction message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns CommunicationAction
                 */
                public static fromObject(object: { [k: string]: any }): syft_proto.execution.v1.CommunicationAction;

                /**
                 * Creates a plain object from a CommunicationAction message. Also converts values to other types if specified.
                 * @param message CommunicationAction
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: syft_proto.execution.v1.CommunicationAction, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this CommunicationAction to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a Placeholder. */
            interface IPlaceholder {

                /** Placeholder id */
                id?: (syft_proto.types.syft.v1.IId|null);

                /** Placeholder tags */
                tags?: (string[]|null);

                /** Placeholder description */
                description?: (string|null);

                /** Placeholder expected_shape */
                expected_shape?: (syft_proto.types.syft.v1.IShape|null);
            }

            /** Represents a Placeholder. */
            class Placeholder implements IPlaceholder {

                /**
                 * Constructs a new Placeholder.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: syft_proto.execution.v1.IPlaceholder);

                /** Placeholder id. */
                public id?: (syft_proto.types.syft.v1.IId|null);

                /** Placeholder tags. */
                public tags: string[];

                /** Placeholder description. */
                public description: string;

                /** Placeholder expected_shape. */
                public expected_shape?: (syft_proto.types.syft.v1.IShape|null);

                /**
                 * Creates a new Placeholder instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Placeholder instance
                 */
                public static create(properties?: syft_proto.execution.v1.IPlaceholder): syft_proto.execution.v1.Placeholder;

                /**
                 * Encodes the specified Placeholder message. Does not implicitly {@link syft_proto.execution.v1.Placeholder.verify|verify} messages.
                 * @param message Placeholder message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: syft_proto.execution.v1.IPlaceholder, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Placeholder message, length delimited. Does not implicitly {@link syft_proto.execution.v1.Placeholder.verify|verify} messages.
                 * @param message Placeholder message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: syft_proto.execution.v1.IPlaceholder, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Placeholder message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Placeholder
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): syft_proto.execution.v1.Placeholder;

                /**
                 * Decodes a Placeholder message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Placeholder
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): syft_proto.execution.v1.Placeholder;

                /**
                 * Verifies a Placeholder message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a Placeholder message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns Placeholder
                 */
                public static fromObject(object: { [k: string]: any }): syft_proto.execution.v1.Placeholder;

                /**
                 * Creates a plain object from a Placeholder message. Also converts values to other types if specified.
                 * @param message Placeholder
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: syft_proto.execution.v1.Placeholder, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Placeholder to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a PlaceholderId. */
            interface IPlaceholderId {

                /** PlaceholderId id */
                id?: (syft_proto.types.syft.v1.IId|null);
            }

            /** Represents a PlaceholderId. */
            class PlaceholderId implements IPlaceholderId {

                /**
                 * Constructs a new PlaceholderId.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: syft_proto.execution.v1.IPlaceholderId);

                /** PlaceholderId id. */
                public id?: (syft_proto.types.syft.v1.IId|null);

                /**
                 * Creates a new PlaceholderId instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns PlaceholderId instance
                 */
                public static create(properties?: syft_proto.execution.v1.IPlaceholderId): syft_proto.execution.v1.PlaceholderId;

                /**
                 * Encodes the specified PlaceholderId message. Does not implicitly {@link syft_proto.execution.v1.PlaceholderId.verify|verify} messages.
                 * @param message PlaceholderId message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: syft_proto.execution.v1.IPlaceholderId, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified PlaceholderId message, length delimited. Does not implicitly {@link syft_proto.execution.v1.PlaceholderId.verify|verify} messages.
                 * @param message PlaceholderId message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: syft_proto.execution.v1.IPlaceholderId, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a PlaceholderId message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns PlaceholderId
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): syft_proto.execution.v1.PlaceholderId;

                /**
                 * Decodes a PlaceholderId message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns PlaceholderId
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): syft_proto.execution.v1.PlaceholderId;

                /**
                 * Verifies a PlaceholderId message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a PlaceholderId message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns PlaceholderId
                 */
                public static fromObject(object: { [k: string]: any }): syft_proto.execution.v1.PlaceholderId;

                /**
                 * Creates a plain object from a PlaceholderId message. Also converts values to other types if specified.
                 * @param message PlaceholderId
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: syft_proto.execution.v1.PlaceholderId, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this PlaceholderId to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a ComputationAction. */
            interface IComputationAction {

                /** ComputationAction command */
                command?: (string|null);

                /** ComputationAction target_id */
                target_id?: (syft_proto.types.syft.v1.IId|null);

                /** ComputationAction target_pointer */
                target_pointer?: (syft_proto.generic.pointers.v1.IPointerTensor|null);

                /** ComputationAction target_placeholder_id */
                target_placeholder_id?: (syft_proto.execution.v1.IPlaceholderId|null);

                /** ComputationAction target_tensor */
                target_tensor?: (syft_proto.types.torch.v1.ITorchTensor|null);

                /** ComputationAction args */
                args?: (syft_proto.types.syft.v1.IArg[]|null);

                /** ComputationAction kwargs */
                kwargs?: ({ [k: string]: syft_proto.types.syft.v1.IArg }|null);

                /** ComputationAction return_ids */
                return_ids?: (syft_proto.types.syft.v1.IId[]|null);

                /** ComputationAction return_placeholder_ids */
                return_placeholder_ids?: (syft_proto.execution.v1.IPlaceholderId[]|null);
            }

            /** Represents a ComputationAction. */
            class ComputationAction implements IComputationAction {

                /**
                 * Constructs a new ComputationAction.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: syft_proto.execution.v1.IComputationAction);

                /** ComputationAction command. */
                public command: string;

                /** ComputationAction target_id. */
                public target_id?: (syft_proto.types.syft.v1.IId|null);

                /** ComputationAction target_pointer. */
                public target_pointer?: (syft_proto.generic.pointers.v1.IPointerTensor|null);

                /** ComputationAction target_placeholder_id. */
                public target_placeholder_id?: (syft_proto.execution.v1.IPlaceholderId|null);

                /** ComputationAction target_tensor. */
                public target_tensor?: (syft_proto.types.torch.v1.ITorchTensor|null);

                /** ComputationAction args. */
                public args: syft_proto.types.syft.v1.IArg[];

                /** ComputationAction kwargs. */
                public kwargs: { [k: string]: syft_proto.types.syft.v1.IArg };

                /** ComputationAction return_ids. */
                public return_ids: syft_proto.types.syft.v1.IId[];

                /** ComputationAction return_placeholder_ids. */
                public return_placeholder_ids: syft_proto.execution.v1.IPlaceholderId[];

                /** ComputationAction target. */
                public target?: ("target_id"|"target_pointer"|"target_placeholder_id"|"target_tensor");

                /**
                 * Creates a new ComputationAction instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns ComputationAction instance
                 */
                public static create(properties?: syft_proto.execution.v1.IComputationAction): syft_proto.execution.v1.ComputationAction;

                /**
                 * Encodes the specified ComputationAction message. Does not implicitly {@link syft_proto.execution.v1.ComputationAction.verify|verify} messages.
                 * @param message ComputationAction message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: syft_proto.execution.v1.IComputationAction, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified ComputationAction message, length delimited. Does not implicitly {@link syft_proto.execution.v1.ComputationAction.verify|verify} messages.
                 * @param message ComputationAction message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: syft_proto.execution.v1.IComputationAction, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a ComputationAction message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns ComputationAction
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): syft_proto.execution.v1.ComputationAction;

                /**
                 * Decodes a ComputationAction message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns ComputationAction
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): syft_proto.execution.v1.ComputationAction;

                /**
                 * Verifies a ComputationAction message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a ComputationAction message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns ComputationAction
                 */
                public static fromObject(object: { [k: string]: any }): syft_proto.execution.v1.ComputationAction;

                /**
                 * Creates a plain object from a ComputationAction message. Also converts values to other types if specified.
                 * @param message ComputationAction
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: syft_proto.execution.v1.ComputationAction, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this ComputationAction to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a Plan. */
            interface IPlan {

                /** Plan id */
                id?: (syft_proto.types.syft.v1.IId|null);

                /** Plan role */
                role?: (syft_proto.execution.v1.IRole|null);

                /** Plan include_state */
                include_state?: (boolean|null);

                /** Plan is_built */
                is_built?: (boolean|null);

                /** Plan name */
                name?: (string|null);

                /** Plan tags */
                tags?: (string[]|null);

                /** Plan description */
                description?: (string|null);

                /** Plan torchscript */
                torchscript?: (Uint8Array|null);
            }

            /** Represents a Plan. */
            class Plan implements IPlan {

                /**
                 * Constructs a new Plan.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: syft_proto.execution.v1.IPlan);

                /** Plan id. */
                public id?: (syft_proto.types.syft.v1.IId|null);

                /** Plan role. */
                public role?: (syft_proto.execution.v1.IRole|null);

                /** Plan include_state. */
                public include_state: boolean;

                /** Plan is_built. */
                public is_built: boolean;

                /** Plan name. */
                public name: string;

                /** Plan tags. */
                public tags: string[];

                /** Plan description. */
                public description: string;

                /** Plan torchscript. */
                public torchscript: Uint8Array;

                /**
                 * Creates a new Plan instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Plan instance
                 */
                public static create(properties?: syft_proto.execution.v1.IPlan): syft_proto.execution.v1.Plan;

                /**
                 * Encodes the specified Plan message. Does not implicitly {@link syft_proto.execution.v1.Plan.verify|verify} messages.
                 * @param message Plan message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: syft_proto.execution.v1.IPlan, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Plan message, length delimited. Does not implicitly {@link syft_proto.execution.v1.Plan.verify|verify} messages.
                 * @param message Plan message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: syft_proto.execution.v1.IPlan, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Plan message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Plan
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): syft_proto.execution.v1.Plan;

                /**
                 * Decodes a Plan message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Plan
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): syft_proto.execution.v1.Plan;

                /**
                 * Verifies a Plan message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a Plan message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns Plan
                 */
                public static fromObject(object: { [k: string]: any }): syft_proto.execution.v1.Plan;

                /**
                 * Creates a plain object from a Plan message. Also converts values to other types if specified.
                 * @param message Plan
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: syft_proto.execution.v1.Plan, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Plan to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a Role. */
            interface IRole {

                /** Role id */
                id?: (syft_proto.types.syft.v1.IId|null);

                /** Role actions */
                actions?: (syft_proto.execution.v1.IComputationAction[]|null);

                /** Role state */
                state?: (syft_proto.execution.v1.IState|null);

                /** Role placeholders */
                placeholders?: (syft_proto.execution.v1.IPlaceholder[]|null);

                /** Role input_placeholder_ids */
                input_placeholder_ids?: (syft_proto.types.syft.v1.IId[]|null);

                /** Role output_placeholder_ids */
                output_placeholder_ids?: (syft_proto.types.syft.v1.IId[]|null);

                /** Role tags */
                tags?: (string[]|null);

                /** Role description */
                description?: (string|null);
            }

            /** Represents a Role. */
            class Role implements IRole {

                /**
                 * Constructs a new Role.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: syft_proto.execution.v1.IRole);

                /** Role id. */
                public id?: (syft_proto.types.syft.v1.IId|null);

                /** Role actions. */
                public actions: syft_proto.execution.v1.IComputationAction[];

                /** Role state. */
                public state?: (syft_proto.execution.v1.IState|null);

                /** Role placeholders. */
                public placeholders: syft_proto.execution.v1.IPlaceholder[];

                /** Role input_placeholder_ids. */
                public input_placeholder_ids: syft_proto.types.syft.v1.IId[];

                /** Role output_placeholder_ids. */
                public output_placeholder_ids: syft_proto.types.syft.v1.IId[];

                /** Role tags. */
                public tags: string[];

                /** Role description. */
                public description: string;

                /**
                 * Creates a new Role instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Role instance
                 */
                public static create(properties?: syft_proto.execution.v1.IRole): syft_proto.execution.v1.Role;

                /**
                 * Encodes the specified Role message. Does not implicitly {@link syft_proto.execution.v1.Role.verify|verify} messages.
                 * @param message Role message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: syft_proto.execution.v1.IRole, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Role message, length delimited. Does not implicitly {@link syft_proto.execution.v1.Role.verify|verify} messages.
                 * @param message Role message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: syft_proto.execution.v1.IRole, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Role message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Role
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): syft_proto.execution.v1.Role;

                /**
                 * Decodes a Role message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Role
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): syft_proto.execution.v1.Role;

                /**
                 * Verifies a Role message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a Role message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns Role
                 */
                public static fromObject(object: { [k: string]: any }): syft_proto.execution.v1.Role;

                /**
                 * Creates a plain object from a Role message. Also converts values to other types if specified.
                 * @param message Role
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: syft_proto.execution.v1.Role, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Role to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a State. */
            interface IState {

                /** State placeholders */
                placeholders?: (syft_proto.execution.v1.IPlaceholder[]|null);

                /** State tensors */
                tensors?: (syft_proto.execution.v1.IStateTensor[]|null);
            }

            /** Represents a State. */
            class State implements IState {

                /**
                 * Constructs a new State.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: syft_proto.execution.v1.IState);

                /** State placeholders. */
                public placeholders: syft_proto.execution.v1.IPlaceholder[];

                /** State tensors. */
                public tensors: syft_proto.execution.v1.IStateTensor[];

                /**
                 * Creates a new State instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns State instance
                 */
                public static create(properties?: syft_proto.execution.v1.IState): syft_proto.execution.v1.State;

                /**
                 * Encodes the specified State message. Does not implicitly {@link syft_proto.execution.v1.State.verify|verify} messages.
                 * @param message State message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: syft_proto.execution.v1.IState, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified State message, length delimited. Does not implicitly {@link syft_proto.execution.v1.State.verify|verify} messages.
                 * @param message State message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: syft_proto.execution.v1.IState, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a State message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns State
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): syft_proto.execution.v1.State;

                /**
                 * Decodes a State message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns State
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): syft_proto.execution.v1.State;

                /**
                 * Verifies a State message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a State message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns State
                 */
                public static fromObject(object: { [k: string]: any }): syft_proto.execution.v1.State;

                /**
                 * Creates a plain object from a State message. Also converts values to other types if specified.
                 * @param message State
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: syft_proto.execution.v1.State, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this State to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a StateTensor. */
            interface IStateTensor {

                /** StateTensor torch_tensor */
                torch_tensor?: (syft_proto.types.torch.v1.ITorchTensor|null);

                /** StateTensor torch_param */
                torch_param?: (syft_proto.types.torch.v1.IParameter|null);
            }

            /** Represents a StateTensor. */
            class StateTensor implements IStateTensor {

                /**
                 * Constructs a new StateTensor.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: syft_proto.execution.v1.IStateTensor);

                /** StateTensor torch_tensor. */
                public torch_tensor?: (syft_proto.types.torch.v1.ITorchTensor|null);

                /** StateTensor torch_param. */
                public torch_param?: (syft_proto.types.torch.v1.IParameter|null);

                /** StateTensor tensor. */
                public tensor?: ("torch_tensor"|"torch_param");

                /**
                 * Creates a new StateTensor instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns StateTensor instance
                 */
                public static create(properties?: syft_proto.execution.v1.IStateTensor): syft_proto.execution.v1.StateTensor;

                /**
                 * Encodes the specified StateTensor message. Does not implicitly {@link syft_proto.execution.v1.StateTensor.verify|verify} messages.
                 * @param message StateTensor message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: syft_proto.execution.v1.IStateTensor, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified StateTensor message, length delimited. Does not implicitly {@link syft_proto.execution.v1.StateTensor.verify|verify} messages.
                 * @param message StateTensor message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: syft_proto.execution.v1.IStateTensor, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a StateTensor message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns StateTensor
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): syft_proto.execution.v1.StateTensor;

                /**
                 * Decodes a StateTensor message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns StateTensor
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): syft_proto.execution.v1.StateTensor;

                /**
                 * Verifies a StateTensor message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a StateTensor message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns StateTensor
                 */
                public static fromObject(object: { [k: string]: any }): syft_proto.execution.v1.StateTensor;

                /**
                 * Creates a plain object from a StateTensor message. Also converts values to other types if specified.
                 * @param message StateTensor
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: syft_proto.execution.v1.StateTensor, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this StateTensor to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a Protocol. */
            interface IProtocol {

                /** Protocol id */
                id?: (syft_proto.types.syft.v1.IId|null);

                /** Protocol tags */
                tags?: (string[]|null);

                /** Protocol description */
                description?: (string|null);

                /** Protocol workers_resolved */
                workers_resolved?: (boolean|null);

                /** Protocol plan_assignments */
                plan_assignments?: (syft_proto.execution.v1.IPlanAssignment[]|null);
            }

            /** Represents a Protocol. */
            class Protocol implements IProtocol {

                /**
                 * Constructs a new Protocol.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: syft_proto.execution.v1.IProtocol);

                /** Protocol id. */
                public id?: (syft_proto.types.syft.v1.IId|null);

                /** Protocol tags. */
                public tags: string[];

                /** Protocol description. */
                public description: string;

                /** Protocol workers_resolved. */
                public workers_resolved: boolean;

                /** Protocol plan_assignments. */
                public plan_assignments: syft_proto.execution.v1.IPlanAssignment[];

                /**
                 * Creates a new Protocol instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Protocol instance
                 */
                public static create(properties?: syft_proto.execution.v1.IProtocol): syft_proto.execution.v1.Protocol;

                /**
                 * Encodes the specified Protocol message. Does not implicitly {@link syft_proto.execution.v1.Protocol.verify|verify} messages.
                 * @param message Protocol message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: syft_proto.execution.v1.IProtocol, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Protocol message, length delimited. Does not implicitly {@link syft_proto.execution.v1.Protocol.verify|verify} messages.
                 * @param message Protocol message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: syft_proto.execution.v1.IProtocol, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Protocol message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Protocol
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): syft_proto.execution.v1.Protocol;

                /**
                 * Decodes a Protocol message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Protocol
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): syft_proto.execution.v1.Protocol;

                /**
                 * Verifies a Protocol message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a Protocol message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns Protocol
                 */
                public static fromObject(object: { [k: string]: any }): syft_proto.execution.v1.Protocol;

                /**
                 * Creates a plain object from a Protocol message. Also converts values to other types if specified.
                 * @param message Protocol
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: syft_proto.execution.v1.Protocol, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Protocol to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a PlanAssignment. */
            interface IPlanAssignment {

                /** PlanAssignment plan_id */
                plan_id?: (syft_proto.types.syft.v1.IId|null);

                /** PlanAssignment worker_id */
                worker_id?: (syft_proto.types.syft.v1.IId|null);
            }

            /** Represents a PlanAssignment. */
            class PlanAssignment implements IPlanAssignment {

                /**
                 * Constructs a new PlanAssignment.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: syft_proto.execution.v1.IPlanAssignment);

                /** PlanAssignment plan_id. */
                public plan_id?: (syft_proto.types.syft.v1.IId|null);

                /** PlanAssignment worker_id. */
                public worker_id?: (syft_proto.types.syft.v1.IId|null);

                /**
                 * Creates a new PlanAssignment instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns PlanAssignment instance
                 */
                public static create(properties?: syft_proto.execution.v1.IPlanAssignment): syft_proto.execution.v1.PlanAssignment;

                /**
                 * Encodes the specified PlanAssignment message. Does not implicitly {@link syft_proto.execution.v1.PlanAssignment.verify|verify} messages.
                 * @param message PlanAssignment message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: syft_proto.execution.v1.IPlanAssignment, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified PlanAssignment message, length delimited. Does not implicitly {@link syft_proto.execution.v1.PlanAssignment.verify|verify} messages.
                 * @param message PlanAssignment message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: syft_proto.execution.v1.IPlanAssignment, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a PlanAssignment message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns PlanAssignment
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): syft_proto.execution.v1.PlanAssignment;

                /**
                 * Decodes a PlanAssignment message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns PlanAssignment
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): syft_proto.execution.v1.PlanAssignment;

                /**
                 * Verifies a PlanAssignment message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a PlanAssignment message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns PlanAssignment
                 */
                public static fromObject(object: { [k: string]: any }): syft_proto.execution.v1.PlanAssignment;

                /**
                 * Creates a plain object from a PlanAssignment message. Also converts values to other types if specified.
                 * @param message PlanAssignment
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: syft_proto.execution.v1.PlanAssignment, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this PlanAssignment to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }
        }
    }

    /** Namespace types. */
    namespace types {

        /** Namespace syft. */
        namespace syft {

            /** Namespace v1. */
            namespace v1 {

                /** Properties of an Arg. */
                interface IArg {

                    /** Arg arg_bool */
                    arg_bool?: (boolean|null);

                    /** Arg arg_int */
                    arg_int?: (number|null);

                    /** Arg arg_float */
                    arg_float?: (number|null);

                    /** Arg arg_string */
                    arg_string?: (string|null);

                    /** Arg arg_shape */
                    arg_shape?: (syft_proto.types.syft.v1.IShape|null);

                    /** Arg arg_tensor */
                    arg_tensor?: (syft_proto.types.torch.v1.ITorchTensor|null);

                    /** Arg arg_torch_param */
                    arg_torch_param?: (syft_proto.types.torch.v1.IParameter|null);

                    /** Arg arg_pointer_tensor */
                    arg_pointer_tensor?: (syft_proto.generic.pointers.v1.IPointerTensor|null);

                    /** Arg arg_placeholder */
                    arg_placeholder?: (syft_proto.execution.v1.IPlaceholder|null);

                    /** Arg arg_placeholder_id */
                    arg_placeholder_id?: (syft_proto.execution.v1.IPlaceholderId|null);
                }

                /** Represents an Arg. */
                class Arg implements IArg {

                    /**
                     * Constructs a new Arg.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: syft_proto.types.syft.v1.IArg);

                    /** Arg arg_bool. */
                    public arg_bool: boolean;

                    /** Arg arg_int. */
                    public arg_int: number;

                    /** Arg arg_float. */
                    public arg_float: number;

                    /** Arg arg_string. */
                    public arg_string: string;

                    /** Arg arg_shape. */
                    public arg_shape?: (syft_proto.types.syft.v1.IShape|null);

                    /** Arg arg_tensor. */
                    public arg_tensor?: (syft_proto.types.torch.v1.ITorchTensor|null);

                    /** Arg arg_torch_param. */
                    public arg_torch_param?: (syft_proto.types.torch.v1.IParameter|null);

                    /** Arg arg_pointer_tensor. */
                    public arg_pointer_tensor?: (syft_proto.generic.pointers.v1.IPointerTensor|null);

                    /** Arg arg_placeholder. */
                    public arg_placeholder?: (syft_proto.execution.v1.IPlaceholder|null);

                    /** Arg arg_placeholder_id. */
                    public arg_placeholder_id?: (syft_proto.execution.v1.IPlaceholderId|null);

                    /** Arg arg. */
                    public arg?: ("arg_bool"|"arg_int"|"arg_float"|"arg_string"|"arg_shape"|"arg_tensor"|"arg_torch_param"|"arg_pointer_tensor"|"arg_placeholder"|"arg_placeholder_id");

                    /**
                     * Creates a new Arg instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Arg instance
                     */
                    public static create(properties?: syft_proto.types.syft.v1.IArg): syft_proto.types.syft.v1.Arg;

                    /**
                     * Encodes the specified Arg message. Does not implicitly {@link syft_proto.types.syft.v1.Arg.verify|verify} messages.
                     * @param message Arg message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: syft_proto.types.syft.v1.IArg, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Arg message, length delimited. Does not implicitly {@link syft_proto.types.syft.v1.Arg.verify|verify} messages.
                     * @param message Arg message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: syft_proto.types.syft.v1.IArg, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an Arg message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Arg
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): syft_proto.types.syft.v1.Arg;

                    /**
                     * Decodes an Arg message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Arg
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): syft_proto.types.syft.v1.Arg;

                    /**
                     * Verifies an Arg message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an Arg message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Arg
                     */
                    public static fromObject(object: { [k: string]: any }): syft_proto.types.syft.v1.Arg;

                    /**
                     * Creates a plain object from an Arg message. Also converts values to other types if specified.
                     * @param message Arg
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: syft_proto.types.syft.v1.Arg, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Arg to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of an Id. */
                interface IId {

                    /** Id id_int */
                    id_int?: (number|Long|null);

                    /** Id id_str */
                    id_str?: (string|null);
                }

                /** Represents an Id. */
                class Id implements IId {

                    /**
                     * Constructs a new Id.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: syft_proto.types.syft.v1.IId);

                    /** Id id_int. */
                    public id_int: (number|Long);

                    /** Id id_str. */
                    public id_str: string;

                    /** Id id. */
                    public id?: ("id_int"|"id_str");

                    /**
                     * Creates a new Id instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Id instance
                     */
                    public static create(properties?: syft_proto.types.syft.v1.IId): syft_proto.types.syft.v1.Id;

                    /**
                     * Encodes the specified Id message. Does not implicitly {@link syft_proto.types.syft.v1.Id.verify|verify} messages.
                     * @param message Id message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: syft_proto.types.syft.v1.IId, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Id message, length delimited. Does not implicitly {@link syft_proto.types.syft.v1.Id.verify|verify} messages.
                     * @param message Id message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: syft_proto.types.syft.v1.IId, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an Id message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Id
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): syft_proto.types.syft.v1.Id;

                    /**
                     * Decodes an Id message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Id
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): syft_proto.types.syft.v1.Id;

                    /**
                     * Verifies an Id message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an Id message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Id
                     */
                    public static fromObject(object: { [k: string]: any }): syft_proto.types.syft.v1.Id;

                    /**
                     * Creates a plain object from an Id message. Also converts values to other types if specified.
                     * @param message Id
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: syft_proto.types.syft.v1.Id, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Id to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a Shape. */
                interface IShape {

                    /** Shape dims */
                    dims?: (number[]|null);
                }

                /** Represents a Shape. */
                class Shape implements IShape {

                    /**
                     * Constructs a new Shape.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: syft_proto.types.syft.v1.IShape);

                    /** Shape dims. */
                    public dims: number[];

                    /**
                     * Creates a new Shape instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Shape instance
                     */
                    public static create(properties?: syft_proto.types.syft.v1.IShape): syft_proto.types.syft.v1.Shape;

                    /**
                     * Encodes the specified Shape message. Does not implicitly {@link syft_proto.types.syft.v1.Shape.verify|verify} messages.
                     * @param message Shape message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: syft_proto.types.syft.v1.IShape, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Shape message, length delimited. Does not implicitly {@link syft_proto.types.syft.v1.Shape.verify|verify} messages.
                     * @param message Shape message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: syft_proto.types.syft.v1.IShape, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a Shape message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Shape
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): syft_proto.types.syft.v1.Shape;

                    /**
                     * Decodes a Shape message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Shape
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): syft_proto.types.syft.v1.Shape;

                    /**
                     * Verifies a Shape message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a Shape message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Shape
                     */
                    public static fromObject(object: { [k: string]: any }): syft_proto.types.syft.v1.Shape;

                    /**
                     * Creates a plain object from a Shape message. Also converts values to other types if specified.
                     * @param message Shape
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: syft_proto.types.syft.v1.Shape, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Shape to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }
            }
        }

        /** Namespace torch. */
        namespace torch {

            /** Namespace v1. */
            namespace v1 {

                /** Properties of a TorchTensor. */
                interface ITorchTensor {

                    /** TorchTensor id */
                    id?: (syft_proto.types.syft.v1.IId|null);

                    /** TorchTensor contents_data */
                    contents_data?: (syft_proto.types.torch.v1.ITensorData|null);

                    /** TorchTensor contents_bin */
                    contents_bin?: (Uint8Array|null);

                    /** TorchTensor chain */
                    chain?: (syft_proto.types.torch.v1.ITorchTensor|null);

                    /** TorchTensor grad_chain */
                    grad_chain?: (syft_proto.types.torch.v1.ITorchTensor|null);

                    /** TorchTensor tags */
                    tags?: (string[]|null);

                    /** TorchTensor description */
                    description?: (string|null);

                    /** TorchTensor serializer */
                    serializer?: (syft_proto.types.torch.v1.TorchTensor.Serializer|null);
                }

                /** Represents a TorchTensor. */
                class TorchTensor implements ITorchTensor {

                    /**
                     * Constructs a new TorchTensor.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: syft_proto.types.torch.v1.ITorchTensor);

                    /** TorchTensor id. */
                    public id?: (syft_proto.types.syft.v1.IId|null);

                    /** TorchTensor contents_data. */
                    public contents_data?: (syft_proto.types.torch.v1.ITensorData|null);

                    /** TorchTensor contents_bin. */
                    public contents_bin: Uint8Array;

                    /** TorchTensor chain. */
                    public chain?: (syft_proto.types.torch.v1.ITorchTensor|null);

                    /** TorchTensor grad_chain. */
                    public grad_chain?: (syft_proto.types.torch.v1.ITorchTensor|null);

                    /** TorchTensor tags. */
                    public tags: string[];

                    /** TorchTensor description. */
                    public description: string;

                    /** TorchTensor serializer. */
                    public serializer: syft_proto.types.torch.v1.TorchTensor.Serializer;

                    /** TorchTensor contents. */
                    public contents?: ("contents_data"|"contents_bin");

                    /**
                     * Creates a new TorchTensor instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns TorchTensor instance
                     */
                    public static create(properties?: syft_proto.types.torch.v1.ITorchTensor): syft_proto.types.torch.v1.TorchTensor;

                    /**
                     * Encodes the specified TorchTensor message. Does not implicitly {@link syft_proto.types.torch.v1.TorchTensor.verify|verify} messages.
                     * @param message TorchTensor message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: syft_proto.types.torch.v1.ITorchTensor, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified TorchTensor message, length delimited. Does not implicitly {@link syft_proto.types.torch.v1.TorchTensor.verify|verify} messages.
                     * @param message TorchTensor message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: syft_proto.types.torch.v1.ITorchTensor, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a TorchTensor message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns TorchTensor
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): syft_proto.types.torch.v1.TorchTensor;

                    /**
                     * Decodes a TorchTensor message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns TorchTensor
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): syft_proto.types.torch.v1.TorchTensor;

                    /**
                     * Verifies a TorchTensor message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a TorchTensor message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns TorchTensor
                     */
                    public static fromObject(object: { [k: string]: any }): syft_proto.types.torch.v1.TorchTensor;

                    /**
                     * Creates a plain object from a TorchTensor message. Also converts values to other types if specified.
                     * @param message TorchTensor
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: syft_proto.types.torch.v1.TorchTensor, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this TorchTensor to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                namespace TorchTensor {

                    /** Serializer enum. */
                    enum Serializer {
                        SERIALIZER_UNSPECIFIED = 0,
                        SERIALIZER_TORCH = 1,
                        SERIALIZER_NUMPY = 2,
                        SERIALIZER_TF = 3,
                        SERIALIZER_ALL = 4
                    }
                }

                /** Properties of a TensorData. */
                interface ITensorData {

                    /** TensorData shape */
                    shape?: (syft_proto.types.torch.v1.ISize|null);

                    /** TensorData dtype */
                    dtype?: (string|null);

                    /** TensorData is_quantized */
                    is_quantized?: (boolean|null);

                    /** TensorData scale */
                    scale?: (number|null);

                    /** TensorData zero_point */
                    zero_point?: (number|null);

                    /** TensorData contents_uint8 */
                    contents_uint8?: (number[]|null);

                    /** TensorData contents_int8 */
                    contents_int8?: (number[]|null);

                    /** TensorData contents_int16 */
                    contents_int16?: (number[]|null);

                    /** TensorData contents_int32 */
                    contents_int32?: (number[]|null);

                    /** TensorData contents_int64 */
                    contents_int64?: ((number|Long)[]|null);

                    /** TensorData contents_float16 */
                    contents_float16?: (number[]|null);

                    /** TensorData contents_float32 */
                    contents_float32?: (number[]|null);

                    /** TensorData contents_float64 */
                    contents_float64?: (number[]|null);

                    /** TensorData contents_bool */
                    contents_bool?: (boolean[]|null);

                    /** TensorData contents_qint8 */
                    contents_qint8?: (number[]|null);

                    /** TensorData contents_quint8 */
                    contents_quint8?: (number[]|null);

                    /** TensorData contents_qint32 */
                    contents_qint32?: (number[]|null);

                    /** TensorData contents_bfloat16 */
                    contents_bfloat16?: (number[]|null);
                }

                /** Represents a TensorData. */
                class TensorData implements ITensorData {

                    /**
                     * Constructs a new TensorData.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: syft_proto.types.torch.v1.ITensorData);

                    /** TensorData shape. */
                    public shape?: (syft_proto.types.torch.v1.ISize|null);

                    /** TensorData dtype. */
                    public dtype: string;

                    /** TensorData is_quantized. */
                    public is_quantized: boolean;

                    /** TensorData scale. */
                    public scale: number;

                    /** TensorData zero_point. */
                    public zero_point: number;

                    /** TensorData contents_uint8. */
                    public contents_uint8: number[];

                    /** TensorData contents_int8. */
                    public contents_int8: number[];

                    /** TensorData contents_int16. */
                    public contents_int16: number[];

                    /** TensorData contents_int32. */
                    public contents_int32: number[];

                    /** TensorData contents_int64. */
                    public contents_int64: (number|Long)[];

                    /** TensorData contents_float16. */
                    public contents_float16: number[];

                    /** TensorData contents_float32. */
                    public contents_float32: number[];

                    /** TensorData contents_float64. */
                    public contents_float64: number[];

                    /** TensorData contents_bool. */
                    public contents_bool: boolean[];

                    /** TensorData contents_qint8. */
                    public contents_qint8: number[];

                    /** TensorData contents_quint8. */
                    public contents_quint8: number[];

                    /** TensorData contents_qint32. */
                    public contents_qint32: number[];

                    /** TensorData contents_bfloat16. */
                    public contents_bfloat16: number[];

                    /**
                     * Creates a new TensorData instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns TensorData instance
                     */
                    public static create(properties?: syft_proto.types.torch.v1.ITensorData): syft_proto.types.torch.v1.TensorData;

                    /**
                     * Encodes the specified TensorData message. Does not implicitly {@link syft_proto.types.torch.v1.TensorData.verify|verify} messages.
                     * @param message TensorData message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: syft_proto.types.torch.v1.ITensorData, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified TensorData message, length delimited. Does not implicitly {@link syft_proto.types.torch.v1.TensorData.verify|verify} messages.
                     * @param message TensorData message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: syft_proto.types.torch.v1.ITensorData, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a TensorData message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns TensorData
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): syft_proto.types.torch.v1.TensorData;

                    /**
                     * Decodes a TensorData message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns TensorData
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): syft_proto.types.torch.v1.TensorData;

                    /**
                     * Verifies a TensorData message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a TensorData message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns TensorData
                     */
                    public static fromObject(object: { [k: string]: any }): syft_proto.types.torch.v1.TensorData;

                    /**
                     * Creates a plain object from a TensorData message. Also converts values to other types if specified.
                     * @param message TensorData
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: syft_proto.types.torch.v1.TensorData, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this TensorData to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a Size. */
                interface ISize {

                    /** Size dims */
                    dims?: (number[]|null);
                }

                /** Represents a Size. */
                class Size implements ISize {

                    /**
                     * Constructs a new Size.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: syft_proto.types.torch.v1.ISize);

                    /** Size dims. */
                    public dims: number[];

                    /**
                     * Creates a new Size instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Size instance
                     */
                    public static create(properties?: syft_proto.types.torch.v1.ISize): syft_proto.types.torch.v1.Size;

                    /**
                     * Encodes the specified Size message. Does not implicitly {@link syft_proto.types.torch.v1.Size.verify|verify} messages.
                     * @param message Size message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: syft_proto.types.torch.v1.ISize, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Size message, length delimited. Does not implicitly {@link syft_proto.types.torch.v1.Size.verify|verify} messages.
                     * @param message Size message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: syft_proto.types.torch.v1.ISize, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a Size message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Size
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): syft_proto.types.torch.v1.Size;

                    /**
                     * Decodes a Size message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Size
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): syft_proto.types.torch.v1.Size;

                    /**
                     * Verifies a Size message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a Size message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Size
                     */
                    public static fromObject(object: { [k: string]: any }): syft_proto.types.torch.v1.Size;

                    /**
                     * Creates a plain object from a Size message. Also converts values to other types if specified.
                     * @param message Size
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: syft_proto.types.torch.v1.Size, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Size to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a Parameter. */
                interface IParameter {

                    /** Parameter id */
                    id?: (syft_proto.types.syft.v1.IId|null);

                    /** Parameter tensor */
                    tensor?: (syft_proto.types.torch.v1.ITorchTensor|null);

                    /** Parameter requires_grad */
                    requires_grad?: (boolean|null);

                    /** Parameter grad */
                    grad?: (syft_proto.types.torch.v1.ITorchTensor|null);
                }

                /** Represents a Parameter. */
                class Parameter implements IParameter {

                    /**
                     * Constructs a new Parameter.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: syft_proto.types.torch.v1.IParameter);

                    /** Parameter id. */
                    public id?: (syft_proto.types.syft.v1.IId|null);

                    /** Parameter tensor. */
                    public tensor?: (syft_proto.types.torch.v1.ITorchTensor|null);

                    /** Parameter requires_grad. */
                    public requires_grad: boolean;

                    /** Parameter grad. */
                    public grad?: (syft_proto.types.torch.v1.ITorchTensor|null);

                    /**
                     * Creates a new Parameter instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Parameter instance
                     */
                    public static create(properties?: syft_proto.types.torch.v1.IParameter): syft_proto.types.torch.v1.Parameter;

                    /**
                     * Encodes the specified Parameter message. Does not implicitly {@link syft_proto.types.torch.v1.Parameter.verify|verify} messages.
                     * @param message Parameter message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: syft_proto.types.torch.v1.IParameter, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Parameter message, length delimited. Does not implicitly {@link syft_proto.types.torch.v1.Parameter.verify|verify} messages.
                     * @param message Parameter message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: syft_proto.types.torch.v1.IParameter, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a Parameter message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Parameter
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): syft_proto.types.torch.v1.Parameter;

                    /**
                     * Decodes a Parameter message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Parameter
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): syft_proto.types.torch.v1.Parameter;

                    /**
                     * Verifies a Parameter message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a Parameter message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Parameter
                     */
                    public static fromObject(object: { [k: string]: any }): syft_proto.types.torch.v1.Parameter;

                    /**
                     * Creates a plain object from a Parameter message. Also converts values to other types if specified.
                     * @param message Parameter
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: syft_proto.types.torch.v1.Parameter, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Parameter to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a CFunction. */
                interface ICFunction {

                    /** CFunction obj */
                    obj?: (Uint8Array|null);
                }

                /** Represents a CFunction. */
                class CFunction implements ICFunction {

                    /**
                     * Constructs a new CFunction.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: syft_proto.types.torch.v1.ICFunction);

                    /** CFunction obj. */
                    public obj: Uint8Array;

                    /**
                     * Creates a new CFunction instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns CFunction instance
                     */
                    public static create(properties?: syft_proto.types.torch.v1.ICFunction): syft_proto.types.torch.v1.CFunction;

                    /**
                     * Encodes the specified CFunction message. Does not implicitly {@link syft_proto.types.torch.v1.CFunction.verify|verify} messages.
                     * @param message CFunction message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: syft_proto.types.torch.v1.ICFunction, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified CFunction message, length delimited. Does not implicitly {@link syft_proto.types.torch.v1.CFunction.verify|verify} messages.
                     * @param message CFunction message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: syft_proto.types.torch.v1.ICFunction, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a CFunction message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns CFunction
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): syft_proto.types.torch.v1.CFunction;

                    /**
                     * Decodes a CFunction message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns CFunction
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): syft_proto.types.torch.v1.CFunction;

                    /**
                     * Verifies a CFunction message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a CFunction message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns CFunction
                     */
                    public static fromObject(object: { [k: string]: any }): syft_proto.types.torch.v1.CFunction;

                    /**
                     * Creates a plain object from a CFunction message. Also converts values to other types if specified.
                     * @param message CFunction
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: syft_proto.types.torch.v1.CFunction, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this CFunction to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a Device. */
                interface IDevice {

                    /** Device type */
                    type?: (string|null);
                }

                /** Represents a Device. */
                class Device implements IDevice {

                    /**
                     * Constructs a new Device.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: syft_proto.types.torch.v1.IDevice);

                    /** Device type. */
                    public type: string;

                    /**
                     * Creates a new Device instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Device instance
                     */
                    public static create(properties?: syft_proto.types.torch.v1.IDevice): syft_proto.types.torch.v1.Device;

                    /**
                     * Encodes the specified Device message. Does not implicitly {@link syft_proto.types.torch.v1.Device.verify|verify} messages.
                     * @param message Device message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: syft_proto.types.torch.v1.IDevice, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Device message, length delimited. Does not implicitly {@link syft_proto.types.torch.v1.Device.verify|verify} messages.
                     * @param message Device message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: syft_proto.types.torch.v1.IDevice, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a Device message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Device
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): syft_proto.types.torch.v1.Device;

                    /**
                     * Decodes a Device message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Device
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): syft_proto.types.torch.v1.Device;

                    /**
                     * Verifies a Device message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a Device message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Device
                     */
                    public static fromObject(object: { [k: string]: any }): syft_proto.types.torch.v1.Device;

                    /**
                     * Creates a plain object from a Device message. Also converts values to other types if specified.
                     * @param message Device
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: syft_proto.types.torch.v1.Device, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Device to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a ScriptFunction. */
                interface IScriptFunction {

                    /** ScriptFunction obj */
                    obj?: (Uint8Array|null);
                }

                /** Represents a ScriptFunction. */
                class ScriptFunction implements IScriptFunction {

                    /**
                     * Constructs a new ScriptFunction.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: syft_proto.types.torch.v1.IScriptFunction);

                    /** ScriptFunction obj. */
                    public obj: Uint8Array;

                    /**
                     * Creates a new ScriptFunction instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ScriptFunction instance
                     */
                    public static create(properties?: syft_proto.types.torch.v1.IScriptFunction): syft_proto.types.torch.v1.ScriptFunction;

                    /**
                     * Encodes the specified ScriptFunction message. Does not implicitly {@link syft_proto.types.torch.v1.ScriptFunction.verify|verify} messages.
                     * @param message ScriptFunction message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: syft_proto.types.torch.v1.IScriptFunction, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ScriptFunction message, length delimited. Does not implicitly {@link syft_proto.types.torch.v1.ScriptFunction.verify|verify} messages.
                     * @param message ScriptFunction message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: syft_proto.types.torch.v1.IScriptFunction, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ScriptFunction message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ScriptFunction
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): syft_proto.types.torch.v1.ScriptFunction;

                    /**
                     * Decodes a ScriptFunction message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ScriptFunction
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): syft_proto.types.torch.v1.ScriptFunction;

                    /**
                     * Verifies a ScriptFunction message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ScriptFunction message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ScriptFunction
                     */
                    public static fromObject(object: { [k: string]: any }): syft_proto.types.torch.v1.ScriptFunction;

                    /**
                     * Creates a plain object from a ScriptFunction message. Also converts values to other types if specified.
                     * @param message ScriptFunction
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: syft_proto.types.torch.v1.ScriptFunction, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ScriptFunction to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a ScriptModule. */
                interface IScriptModule {

                    /** ScriptModule obj */
                    obj?: (Uint8Array|null);
                }

                /** Represents a ScriptModule. */
                class ScriptModule implements IScriptModule {

                    /**
                     * Constructs a new ScriptModule.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: syft_proto.types.torch.v1.IScriptModule);

                    /** ScriptModule obj. */
                    public obj: Uint8Array;

                    /**
                     * Creates a new ScriptModule instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ScriptModule instance
                     */
                    public static create(properties?: syft_proto.types.torch.v1.IScriptModule): syft_proto.types.torch.v1.ScriptModule;

                    /**
                     * Encodes the specified ScriptModule message. Does not implicitly {@link syft_proto.types.torch.v1.ScriptModule.verify|verify} messages.
                     * @param message ScriptModule message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: syft_proto.types.torch.v1.IScriptModule, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ScriptModule message, length delimited. Does not implicitly {@link syft_proto.types.torch.v1.ScriptModule.verify|verify} messages.
                     * @param message ScriptModule message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: syft_proto.types.torch.v1.IScriptModule, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ScriptModule message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ScriptModule
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): syft_proto.types.torch.v1.ScriptModule;

                    /**
                     * Decodes a ScriptModule message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ScriptModule
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): syft_proto.types.torch.v1.ScriptModule;

                    /**
                     * Verifies a ScriptModule message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ScriptModule message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ScriptModule
                     */
                    public static fromObject(object: { [k: string]: any }): syft_proto.types.torch.v1.ScriptModule;

                    /**
                     * Creates a plain object from a ScriptModule message. Also converts values to other types if specified.
                     * @param message ScriptModule
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: syft_proto.types.torch.v1.ScriptModule, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ScriptModule to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a TracedModule. */
                interface ITracedModule {

                    /** TracedModule obj */
                    obj?: (Uint8Array|null);
                }

                /** Represents a TracedModule. */
                class TracedModule implements ITracedModule {

                    /**
                     * Constructs a new TracedModule.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: syft_proto.types.torch.v1.ITracedModule);

                    /** TracedModule obj. */
                    public obj: Uint8Array;

                    /**
                     * Creates a new TracedModule instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns TracedModule instance
                     */
                    public static create(properties?: syft_proto.types.torch.v1.ITracedModule): syft_proto.types.torch.v1.TracedModule;

                    /**
                     * Encodes the specified TracedModule message. Does not implicitly {@link syft_proto.types.torch.v1.TracedModule.verify|verify} messages.
                     * @param message TracedModule message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: syft_proto.types.torch.v1.ITracedModule, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified TracedModule message, length delimited. Does not implicitly {@link syft_proto.types.torch.v1.TracedModule.verify|verify} messages.
                     * @param message TracedModule message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: syft_proto.types.torch.v1.ITracedModule, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a TracedModule message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns TracedModule
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): syft_proto.types.torch.v1.TracedModule;

                    /**
                     * Decodes a TracedModule message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns TracedModule
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): syft_proto.types.torch.v1.TracedModule;

                    /**
                     * Verifies a TracedModule message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a TracedModule message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns TracedModule
                     */
                    public static fromObject(object: { [k: string]: any }): syft_proto.types.torch.v1.TracedModule;

                    /**
                     * Creates a plain object from a TracedModule message. Also converts values to other types if specified.
                     * @param message TracedModule
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: syft_proto.types.torch.v1.TracedModule, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this TracedModule to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }
            }
        }
    }

    /** Namespace generic. */
    namespace generic {

        /** Namespace pointers. */
        namespace pointers {

            /** Namespace v1. */
            namespace v1 {

                /** Properties of a PointerTensor. */
                interface IPointerTensor {

                    /** PointerTensor object_id */
                    object_id?: (syft_proto.types.syft.v1.IId|null);

                    /** PointerTensor location_id */
                    location_id?: (syft_proto.types.syft.v1.IId|null);

                    /** PointerTensor object_id_at_location */
                    object_id_at_location?: (syft_proto.types.syft.v1.IId|null);

                    /** PointerTensor shape */
                    shape?: (syft_proto.types.syft.v1.IShape|null);

                    /** PointerTensor point_to_attr */
                    point_to_attr?: (string|null);

                    /** PointerTensor garbage_collect_data */
                    garbage_collect_data?: (boolean|null);
                }

                /** Represents a PointerTensor. */
                class PointerTensor implements IPointerTensor {

                    /**
                     * Constructs a new PointerTensor.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: syft_proto.generic.pointers.v1.IPointerTensor);

                    /** PointerTensor object_id. */
                    public object_id?: (syft_proto.types.syft.v1.IId|null);

                    /** PointerTensor location_id. */
                    public location_id?: (syft_proto.types.syft.v1.IId|null);

                    /** PointerTensor object_id_at_location. */
                    public object_id_at_location?: (syft_proto.types.syft.v1.IId|null);

                    /** PointerTensor shape. */
                    public shape?: (syft_proto.types.syft.v1.IShape|null);

                    /** PointerTensor point_to_attr. */
                    public point_to_attr: string;

                    /** PointerTensor garbage_collect_data. */
                    public garbage_collect_data: boolean;

                    /**
                     * Creates a new PointerTensor instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns PointerTensor instance
                     */
                    public static create(properties?: syft_proto.generic.pointers.v1.IPointerTensor): syft_proto.generic.pointers.v1.PointerTensor;

                    /**
                     * Encodes the specified PointerTensor message. Does not implicitly {@link syft_proto.generic.pointers.v1.PointerTensor.verify|verify} messages.
                     * @param message PointerTensor message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: syft_proto.generic.pointers.v1.IPointerTensor, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified PointerTensor message, length delimited. Does not implicitly {@link syft_proto.generic.pointers.v1.PointerTensor.verify|verify} messages.
                     * @param message PointerTensor message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: syft_proto.generic.pointers.v1.IPointerTensor, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a PointerTensor message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns PointerTensor
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): syft_proto.generic.pointers.v1.PointerTensor;

                    /**
                     * Decodes a PointerTensor message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns PointerTensor
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): syft_proto.generic.pointers.v1.PointerTensor;

                    /**
                     * Verifies a PointerTensor message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a PointerTensor message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns PointerTensor
                     */
                    public static fromObject(object: { [k: string]: any }): syft_proto.generic.pointers.v1.PointerTensor;

                    /**
                     * Creates a plain object from a PointerTensor message. Also converts values to other types if specified.
                     * @param message PointerTensor
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: syft_proto.generic.pointers.v1.PointerTensor, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this PointerTensor to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }
            }
        }
    }

    /** Namespace frameworks. */
    namespace frameworks {

        /** Namespace torch. */
        namespace torch {

            /** Namespace tensors. */
            namespace tensors {

                /** Namespace interpreters. */
                namespace interpreters {

                    /** Namespace v1. */
                    namespace v1 {

                        /** Properties of an AdditiveSharingTensor. */
                        interface IAdditiveSharingTensor {

                            /** AdditiveSharingTensor id */
                            id?: (syft_proto.types.syft.v1.IId|null);

                            /** AdditiveSharingTensor field_int */
                            field_int?: (number|Long|null);

                            /** AdditiveSharingTensor field_str */
                            field_str?: (string|null);

                            /** AdditiveSharingTensor dtype */
                            dtype?: (string|null);

                            /** AdditiveSharingTensor crypto_provider_id */
                            crypto_provider_id?: (syft_proto.types.syft.v1.IId|null);

                            /** AdditiveSharingTensor location_ids */
                            location_ids?: (syft_proto.types.syft.v1.IId[]|null);

                            /** AdditiveSharingTensor shares */
                            shares?: (syft_proto.generic.pointers.v1.IPointerTensor[]|null);
                        }

                        /** Represents an AdditiveSharingTensor. */
                        class AdditiveSharingTensor implements IAdditiveSharingTensor {

                            /**
                             * Constructs a new AdditiveSharingTensor.
                             * @param [properties] Properties to set
                             */
                            constructor(properties?: syft_proto.frameworks.torch.tensors.interpreters.v1.IAdditiveSharingTensor);

                            /** AdditiveSharingTensor id. */
                            public id?: (syft_proto.types.syft.v1.IId|null);

                            /** AdditiveSharingTensor field_int. */
                            public field_int: (number|Long);

                            /** AdditiveSharingTensor field_str. */
                            public field_str: string;

                            /** AdditiveSharingTensor dtype. */
                            public dtype: string;

                            /** AdditiveSharingTensor crypto_provider_id. */
                            public crypto_provider_id?: (syft_proto.types.syft.v1.IId|null);

                            /** AdditiveSharingTensor location_ids. */
                            public location_ids: syft_proto.types.syft.v1.IId[];

                            /** AdditiveSharingTensor shares. */
                            public shares: syft_proto.generic.pointers.v1.IPointerTensor[];

                            /** AdditiveSharingTensor field_size. */
                            public field_size?: ("field_int"|"field_str");

                            /**
                             * Creates a new AdditiveSharingTensor instance using the specified properties.
                             * @param [properties] Properties to set
                             * @returns AdditiveSharingTensor instance
                             */
                            public static create(properties?: syft_proto.frameworks.torch.tensors.interpreters.v1.IAdditiveSharingTensor): syft_proto.frameworks.torch.tensors.interpreters.v1.AdditiveSharingTensor;

                            /**
                             * Encodes the specified AdditiveSharingTensor message. Does not implicitly {@link syft_proto.frameworks.torch.tensors.interpreters.v1.AdditiveSharingTensor.verify|verify} messages.
                             * @param message AdditiveSharingTensor message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encode(message: syft_proto.frameworks.torch.tensors.interpreters.v1.IAdditiveSharingTensor, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Encodes the specified AdditiveSharingTensor message, length delimited. Does not implicitly {@link syft_proto.frameworks.torch.tensors.interpreters.v1.AdditiveSharingTensor.verify|verify} messages.
                             * @param message AdditiveSharingTensor message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encodeDelimited(message: syft_proto.frameworks.torch.tensors.interpreters.v1.IAdditiveSharingTensor, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Decodes an AdditiveSharingTensor message from the specified reader or buffer.
                             * @param reader Reader or buffer to decode from
                             * @param [length] Message length if known beforehand
                             * @returns AdditiveSharingTensor
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): syft_proto.frameworks.torch.tensors.interpreters.v1.AdditiveSharingTensor;

                            /**
                             * Decodes an AdditiveSharingTensor message from the specified reader or buffer, length delimited.
                             * @param reader Reader or buffer to decode from
                             * @returns AdditiveSharingTensor
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): syft_proto.frameworks.torch.tensors.interpreters.v1.AdditiveSharingTensor;

                            /**
                             * Verifies an AdditiveSharingTensor message.
                             * @param message Plain object to verify
                             * @returns `null` if valid, otherwise the reason why it is not
                             */
                            public static verify(message: { [k: string]: any }): (string|null);

                            /**
                             * Creates an AdditiveSharingTensor message from a plain object. Also converts values to their respective internal types.
                             * @param object Plain object
                             * @returns AdditiveSharingTensor
                             */
                            public static fromObject(object: { [k: string]: any }): syft_proto.frameworks.torch.tensors.interpreters.v1.AdditiveSharingTensor;

                            /**
                             * Creates a plain object from an AdditiveSharingTensor message. Also converts values to other types if specified.
                             * @param message AdditiveSharingTensor
                             * @param [options] Conversion options
                             * @returns Plain object
                             */
                            public static toObject(message: syft_proto.frameworks.torch.tensors.interpreters.v1.AdditiveSharingTensor, options?: $protobuf.IConversionOptions): { [k: string]: any };

                            /**
                             * Converts this AdditiveSharingTensor to JSON.
                             * @returns JSON object
                             */
                            public toJSON(): { [k: string]: any };
                        }
                    }
                }
            }
        }
    }

    /** Namespace messaging. */
    namespace messaging {

        /** Namespace v1. */
        namespace v1 {

            /** Properties of a SyftMessage. */
            interface ISyftMessage {

                /** SyftMessage contents_empty_msg */
                contents_empty_msg?: (google.protobuf.IEmpty|null);

                /** SyftMessage contents_object_msg */
                contents_object_msg?: (syft_proto.messaging.v1.IObjectMessage|null);

                /** SyftMessage contents_tensor_cmd_msg */
                contents_tensor_cmd_msg?: (syft_proto.messaging.v1.ITensorCommandMessage|null);
            }

            /** Represents a SyftMessage. */
            class SyftMessage implements ISyftMessage {

                /**
                 * Constructs a new SyftMessage.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: syft_proto.messaging.v1.ISyftMessage);

                /** SyftMessage contents_empty_msg. */
                public contents_empty_msg?: (google.protobuf.IEmpty|null);

                /** SyftMessage contents_object_msg. */
                public contents_object_msg?: (syft_proto.messaging.v1.IObjectMessage|null);

                /** SyftMessage contents_tensor_cmd_msg. */
                public contents_tensor_cmd_msg?: (syft_proto.messaging.v1.ITensorCommandMessage|null);

                /** SyftMessage contents. */
                public contents?: ("contents_empty_msg"|"contents_object_msg"|"contents_tensor_cmd_msg");

                /**
                 * Creates a new SyftMessage instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns SyftMessage instance
                 */
                public static create(properties?: syft_proto.messaging.v1.ISyftMessage): syft_proto.messaging.v1.SyftMessage;

                /**
                 * Encodes the specified SyftMessage message. Does not implicitly {@link syft_proto.messaging.v1.SyftMessage.verify|verify} messages.
                 * @param message SyftMessage message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: syft_proto.messaging.v1.ISyftMessage, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified SyftMessage message, length delimited. Does not implicitly {@link syft_proto.messaging.v1.SyftMessage.verify|verify} messages.
                 * @param message SyftMessage message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: syft_proto.messaging.v1.ISyftMessage, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a SyftMessage message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns SyftMessage
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): syft_proto.messaging.v1.SyftMessage;

                /**
                 * Decodes a SyftMessage message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns SyftMessage
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): syft_proto.messaging.v1.SyftMessage;

                /**
                 * Verifies a SyftMessage message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a SyftMessage message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns SyftMessage
                 */
                public static fromObject(object: { [k: string]: any }): syft_proto.messaging.v1.SyftMessage;

                /**
                 * Creates a plain object from a SyftMessage message. Also converts values to other types if specified.
                 * @param message SyftMessage
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: syft_proto.messaging.v1.SyftMessage, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this SyftMessage to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of an ObjectMessage. */
            interface IObjectMessage {

                /** ObjectMessage tensor */
                tensor?: (syft_proto.types.torch.v1.ITorchTensor|null);
            }

            /** Represents an ObjectMessage. */
            class ObjectMessage implements IObjectMessage {

                /**
                 * Constructs a new ObjectMessage.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: syft_proto.messaging.v1.IObjectMessage);

                /** ObjectMessage tensor. */
                public tensor?: (syft_proto.types.torch.v1.ITorchTensor|null);

                /**
                 * Creates a new ObjectMessage instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns ObjectMessage instance
                 */
                public static create(properties?: syft_proto.messaging.v1.IObjectMessage): syft_proto.messaging.v1.ObjectMessage;

                /**
                 * Encodes the specified ObjectMessage message. Does not implicitly {@link syft_proto.messaging.v1.ObjectMessage.verify|verify} messages.
                 * @param message ObjectMessage message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: syft_proto.messaging.v1.IObjectMessage, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified ObjectMessage message, length delimited. Does not implicitly {@link syft_proto.messaging.v1.ObjectMessage.verify|verify} messages.
                 * @param message ObjectMessage message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: syft_proto.messaging.v1.IObjectMessage, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an ObjectMessage message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns ObjectMessage
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): syft_proto.messaging.v1.ObjectMessage;

                /**
                 * Decodes an ObjectMessage message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns ObjectMessage
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): syft_proto.messaging.v1.ObjectMessage;

                /**
                 * Verifies an ObjectMessage message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates an ObjectMessage message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns ObjectMessage
                 */
                public static fromObject(object: { [k: string]: any }): syft_proto.messaging.v1.ObjectMessage;

                /**
                 * Creates a plain object from an ObjectMessage message. Also converts values to other types if specified.
                 * @param message ObjectMessage
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: syft_proto.messaging.v1.ObjectMessage, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this ObjectMessage to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a TensorCommandMessage. */
            interface ITensorCommandMessage {

                /** TensorCommandMessage computation */
                computation?: (syft_proto.execution.v1.IComputationAction|null);

                /** TensorCommandMessage communication */
                communication?: (syft_proto.execution.v1.ICommunicationAction|null);
            }

            /** Represents a TensorCommandMessage. */
            class TensorCommandMessage implements ITensorCommandMessage {

                /**
                 * Constructs a new TensorCommandMessage.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: syft_proto.messaging.v1.ITensorCommandMessage);

                /** TensorCommandMessage computation. */
                public computation?: (syft_proto.execution.v1.IComputationAction|null);

                /** TensorCommandMessage communication. */
                public communication?: (syft_proto.execution.v1.ICommunicationAction|null);

                /** TensorCommandMessage action. */
                public action?: ("computation"|"communication");

                /**
                 * Creates a new TensorCommandMessage instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns TensorCommandMessage instance
                 */
                public static create(properties?: syft_proto.messaging.v1.ITensorCommandMessage): syft_proto.messaging.v1.TensorCommandMessage;

                /**
                 * Encodes the specified TensorCommandMessage message. Does not implicitly {@link syft_proto.messaging.v1.TensorCommandMessage.verify|verify} messages.
                 * @param message TensorCommandMessage message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: syft_proto.messaging.v1.ITensorCommandMessage, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified TensorCommandMessage message, length delimited. Does not implicitly {@link syft_proto.messaging.v1.TensorCommandMessage.verify|verify} messages.
                 * @param message TensorCommandMessage message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: syft_proto.messaging.v1.ITensorCommandMessage, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a TensorCommandMessage message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns TensorCommandMessage
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): syft_proto.messaging.v1.TensorCommandMessage;

                /**
                 * Decodes a TensorCommandMessage message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns TensorCommandMessage
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): syft_proto.messaging.v1.TensorCommandMessage;

                /**
                 * Verifies a TensorCommandMessage message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a TensorCommandMessage message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns TensorCommandMessage
                 */
                public static fromObject(object: { [k: string]: any }): syft_proto.messaging.v1.TensorCommandMessage;

                /**
                 * Creates a plain object from a TensorCommandMessage message. Also converts values to other types if specified.
                 * @param message TensorCommandMessage
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: syft_proto.messaging.v1.TensorCommandMessage, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this TensorCommandMessage to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }
        }
    }
}

/** Namespace google. */
export namespace google {

    /** Namespace protobuf. */
    namespace protobuf {

        /** Properties of an Empty. */
        interface IEmpty {
        }

        /** Represents an Empty. */
        class Empty implements IEmpty {

            /**
             * Constructs a new Empty.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IEmpty);

            /**
             * Creates a new Empty instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Empty instance
             */
            public static create(properties?: google.protobuf.IEmpty): google.protobuf.Empty;

            /**
             * Encodes the specified Empty message. Does not implicitly {@link google.protobuf.Empty.verify|verify} messages.
             * @param message Empty message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IEmpty, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Empty message, length delimited. Does not implicitly {@link google.protobuf.Empty.verify|verify} messages.
             * @param message Empty message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IEmpty, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an Empty message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Empty
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.Empty;

            /**
             * Decodes an Empty message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Empty
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.Empty;

            /**
             * Verifies an Empty message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an Empty message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Empty
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.Empty;

            /**
             * Creates a plain object from an Empty message. Also converts values to other types if specified.
             * @param message Empty
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.Empty, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Empty to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }
    }
}
