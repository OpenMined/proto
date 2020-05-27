# -*- coding: utf-8 -*-
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: syft_proto/execution/v1/role.proto

from google.protobuf import descriptor as _descriptor
from google.protobuf import message as _message
from google.protobuf import reflection as _reflection
from google.protobuf import symbol_database as _symbol_database
# @@protoc_insertion_point(imports)

_sym_db = _symbol_database.Default()


from syft_proto.execution.v1 import computation_action_pb2 as syft__proto_dot_execution_dot_v1_dot_computation__action__pb2
from syft_proto.execution.v1 import state_pb2 as syft__proto_dot_execution_dot_v1_dot_state__pb2
from syft_proto.execution.v1 import placeholder_pb2 as syft__proto_dot_execution_dot_v1_dot_placeholder__pb2
from syft_proto.types.syft.v1 import id_pb2 as syft__proto_dot_types_dot_syft_dot_v1_dot_id__pb2


DESCRIPTOR = _descriptor.FileDescriptor(
  name='syft_proto/execution/v1/role.proto',
  package='syft_proto.execution.v1',
  syntax='proto3',
  serialized_options=b'\n$org.openmined.syftproto.execution.v1',

  serialized_pb=b'\n\"syft_proto/execution/v1/role.proto\x12\x17syft_proto.execution.v1\x1a\x30syft_proto/execution/v1/computation_action.proto\x1a#syft_proto/execution/v1/state.proto\x1a)syft_proto/execution/v1/placeholder.proto\x1a!syft_proto/types/syft/v1/id.proto\"\xd6\x03\n\x04Role\x12,\n\x02id\x18\x01 \x01(\x0b\x32\x1c.syft_proto.types.syft.v1.IdR\x02id\x12\x44\n\x07\x61\x63tions\x18\x02 \x03(\x0b\x32*.syft_proto.execution.v1.ComputationActionR\x07\x61\x63tions\x12\x34\n\x05state\x18\x03 \x01(\x0b\x32\x1e.syft_proto.execution.v1.StateR\x05state\x12H\n\x0cplaceholders\x18\x04 \x03(\x0b\x32$.syft_proto.execution.v1.PlaceholderR\x0cplaceholders\x12P\n\x15input_placeholder_ids\x18\x05 \x03(\x0b\x32\x1c.syft_proto.types.syft.v1.IdR\x13inputPlaceholderIds\x12R\n\x16output_placeholder_ids\x18\x06 \x03(\x0b\x32\x1c.syft_proto.types.syft.v1.IdR\x14outputPlaceholderIds\x12\x12\n\x04tags\x18\x07 \x03(\tR\x04tags\x12 \n\x0b\x64\x65scription\x18\x08 \x01(\tR\x0b\x64\x65scriptionB&\n$org.openmined.syftproto.execution.v1b\x06proto3'
  ,
  dependencies=[syft__proto_dot_execution_dot_v1_dot_computation__action__pb2.DESCRIPTOR,syft__proto_dot_execution_dot_v1_dot_state__pb2.DESCRIPTOR,syft__proto_dot_execution_dot_v1_dot_placeholder__pb2.DESCRIPTOR,syft__proto_dot_types_dot_syft_dot_v1_dot_id__pb2.DESCRIPTOR,])




_ROLE = _descriptor.Descriptor(
  name='Role',
  full_name='syft_proto.execution.v1.Role',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,

  fields=[
    _descriptor.FieldDescriptor(
      name='id', full_name='syft_proto.execution.v1.Role.id', index=0,
      number=1, type=11, cpp_type=10, label=1,
      has_default_value=False, default_value=None,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='id', file=DESCRIPTOR,  ),
    _descriptor.FieldDescriptor(
      name='actions', full_name='syft_proto.execution.v1.Role.actions', index=1,
      number=2, type=11, cpp_type=10, label=3,
      has_default_value=False, default_value=[],
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='actions', file=DESCRIPTOR,  ),
    _descriptor.FieldDescriptor(
      name='state', full_name='syft_proto.execution.v1.Role.state', index=2,
      number=3, type=11, cpp_type=10, label=1,
      has_default_value=False, default_value=None,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='state', file=DESCRIPTOR,  ),
    _descriptor.FieldDescriptor(
      name='placeholders', full_name='syft_proto.execution.v1.Role.placeholders', index=3,
      number=4, type=11, cpp_type=10, label=3,
      has_default_value=False, default_value=[],
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='placeholders', file=DESCRIPTOR,  ),
    _descriptor.FieldDescriptor(
      name='input_placeholder_ids', full_name='syft_proto.execution.v1.Role.input_placeholder_ids', index=4,
      number=5, type=11, cpp_type=10, label=3,
      has_default_value=False, default_value=[],
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='inputPlaceholderIds', file=DESCRIPTOR,  ),
    _descriptor.FieldDescriptor(
      name='output_placeholder_ids', full_name='syft_proto.execution.v1.Role.output_placeholder_ids', index=5,
      number=6, type=11, cpp_type=10, label=3,
      has_default_value=False, default_value=[],
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='outputPlaceholderIds', file=DESCRIPTOR,  ),
    _descriptor.FieldDescriptor(
      name='tags', full_name='syft_proto.execution.v1.Role.tags', index=6,
      number=7, type=9, cpp_type=9, label=3,
      has_default_value=False, default_value=[],
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='tags', file=DESCRIPTOR,  ),
    _descriptor.FieldDescriptor(
      name='description', full_name='syft_proto.execution.v1.Role.description', index=7,
      number=8, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='description', file=DESCRIPTOR,  ),
  ],
  extensions=[
  ],
  nested_types=[],
  enum_types=[
  ],
  serialized_options=None,
  is_extendable=False,
  syntax='proto3',
  extension_ranges=[],
  oneofs=[
  ],
  serialized_start=229,
  serialized_end=699,
)

_ROLE.fields_by_name['id'].message_type = syft__proto_dot_types_dot_syft_dot_v1_dot_id__pb2._ID
_ROLE.fields_by_name['actions'].message_type = syft__proto_dot_execution_dot_v1_dot_computation__action__pb2._COMPUTATIONACTION
_ROLE.fields_by_name['state'].message_type = syft__proto_dot_execution_dot_v1_dot_state__pb2._STATE
_ROLE.fields_by_name['placeholders'].message_type = syft__proto_dot_execution_dot_v1_dot_placeholder__pb2._PLACEHOLDER
_ROLE.fields_by_name['input_placeholder_ids'].message_type = syft__proto_dot_types_dot_syft_dot_v1_dot_id__pb2._ID
_ROLE.fields_by_name['output_placeholder_ids'].message_type = syft__proto_dot_types_dot_syft_dot_v1_dot_id__pb2._ID
DESCRIPTOR.message_types_by_name['Role'] = _ROLE
_sym_db.RegisterFileDescriptor(DESCRIPTOR)

Role = _reflection.GeneratedProtocolMessageType('Role', (_message.Message,), {
  'DESCRIPTOR' : _ROLE,
  '__module__' : 'syft_proto.execution.v1.role_pb2'
  # @@protoc_insertion_point(class_scope:syft_proto.execution.v1.Role)
  })
_sym_db.RegisterMessage(Role)


DESCRIPTOR._options = None
# @@protoc_insertion_point(module_scope)
