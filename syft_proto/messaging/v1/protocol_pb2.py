# -*- coding: utf-8 -*-
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: syft_proto/messaging/v1/protocol.proto

import sys
_b=sys.version_info[0]<3 and (lambda x:x) or (lambda x:x.encode('latin1'))
from google.protobuf import descriptor as _descriptor
from google.protobuf import message as _message
from google.protobuf import reflection as _reflection
from google.protobuf import symbol_database as _symbol_database
# @@protoc_insertion_point(imports)

_sym_db = _symbol_database.Default()


from google.protobuf import empty_pb2 as google_dot_protobuf_dot_empty__pb2
from syft_proto.types.syft.v1 import id_pb2 as syft__proto_dot_types_dot_syft_dot_v1_dot_id__pb2


DESCRIPTOR = _descriptor.FileDescriptor(
  name='syft_proto/messaging/v1/protocol.proto',
  package='syft_proto.messaging.v1',
  syntax='proto3',
  serialized_options=None,
  serialized_pb=_b('\n&syft_proto/messaging/v1/protocol.proto\x12\x17syft_proto.messaging.v1\x1a\x1bgoogle/protobuf/empty.proto\x1a!syft_proto/types/syft/v1/id.proto\"\xed\x01\n\x08Protocol\x12,\n\x02id\x18\x01 \x01(\x0b\x32\x1c.syft_proto.types.syft.v1.IdR\x02id\x12\x12\n\x04tags\x18\x02 \x03(\tR\x04tags\x12 \n\x0b\x64\x65scription\x18\x03 \x01(\tR\x0b\x64\x65scription\x12)\n\x10workers_resolved\x18\x04 \x01(\x08R\x0fworkersResolved\x12R\n\x10plan_assignments\x18\x05 \x03(\x0b\x32\'.syft_proto.messaging.v1.PlanAssignmentR\x0fplanAssignments\"\x82\x01\n\x0ePlanAssignment\x12\x35\n\x07plan_id\x18\x01 \x01(\x0b\x32\x1c.syft_proto.types.syft.v1.IdR\x06planId\x12\x39\n\tworker_id\x18\x02 \x01(\x0b\x32\x1c.syft_proto.types.syft.v1.IdR\x08workerIdb\x06proto3')
  ,
  dependencies=[google_dot_protobuf_dot_empty__pb2.DESCRIPTOR,syft__proto_dot_types_dot_syft_dot_v1_dot_id__pb2.DESCRIPTOR,])




_PROTOCOL = _descriptor.Descriptor(
  name='Protocol',
  full_name='syft_proto.messaging.v1.Protocol',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  fields=[
    _descriptor.FieldDescriptor(
      name='id', full_name='syft_proto.messaging.v1.Protocol.id', index=0,
      number=1, type=11, cpp_type=10, label=1,
      has_default_value=False, default_value=None,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='id', file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='tags', full_name='syft_proto.messaging.v1.Protocol.tags', index=1,
      number=2, type=9, cpp_type=9, label=3,
      has_default_value=False, default_value=[],
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='tags', file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='description', full_name='syft_proto.messaging.v1.Protocol.description', index=2,
      number=3, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=_b("").decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='description', file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='workers_resolved', full_name='syft_proto.messaging.v1.Protocol.workers_resolved', index=3,
      number=4, type=8, cpp_type=7, label=1,
      has_default_value=False, default_value=False,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='workersResolved', file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='plan_assignments', full_name='syft_proto.messaging.v1.Protocol.plan_assignments', index=4,
      number=5, type=11, cpp_type=10, label=3,
      has_default_value=False, default_value=[],
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='planAssignments', file=DESCRIPTOR),
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
  serialized_start=132,
  serialized_end=369,
)


_PLANASSIGNMENT = _descriptor.Descriptor(
  name='PlanAssignment',
  full_name='syft_proto.messaging.v1.PlanAssignment',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  fields=[
    _descriptor.FieldDescriptor(
      name='plan_id', full_name='syft_proto.messaging.v1.PlanAssignment.plan_id', index=0,
      number=1, type=11, cpp_type=10, label=1,
      has_default_value=False, default_value=None,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='planId', file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='worker_id', full_name='syft_proto.messaging.v1.PlanAssignment.worker_id', index=1,
      number=2, type=11, cpp_type=10, label=1,
      has_default_value=False, default_value=None,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='workerId', file=DESCRIPTOR),
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
  serialized_start=372,
  serialized_end=502,
)

_PROTOCOL.fields_by_name['id'].message_type = syft__proto_dot_types_dot_syft_dot_v1_dot_id__pb2._ID
_PROTOCOL.fields_by_name['plan_assignments'].message_type = _PLANASSIGNMENT
_PLANASSIGNMENT.fields_by_name['plan_id'].message_type = syft__proto_dot_types_dot_syft_dot_v1_dot_id__pb2._ID
_PLANASSIGNMENT.fields_by_name['worker_id'].message_type = syft__proto_dot_types_dot_syft_dot_v1_dot_id__pb2._ID
DESCRIPTOR.message_types_by_name['Protocol'] = _PROTOCOL
DESCRIPTOR.message_types_by_name['PlanAssignment'] = _PLANASSIGNMENT
_sym_db.RegisterFileDescriptor(DESCRIPTOR)

Protocol = _reflection.GeneratedProtocolMessageType('Protocol', (_message.Message,), dict(
  DESCRIPTOR = _PROTOCOL,
  __module__ = 'syft_proto.messaging.v1.protocol_pb2'
  # @@protoc_insertion_point(class_scope:syft_proto.messaging.v1.Protocol)
  ))
_sym_db.RegisterMessage(Protocol)

PlanAssignment = _reflection.GeneratedProtocolMessageType('PlanAssignment', (_message.Message,), dict(
  DESCRIPTOR = _PLANASSIGNMENT,
  __module__ = 'syft_proto.messaging.v1.protocol_pb2'
  # @@protoc_insertion_point(class_scope:syft_proto.messaging.v1.PlanAssignment)
  ))
_sym_db.RegisterMessage(PlanAssignment)


# @@protoc_insertion_point(module_scope)