# -*- coding: utf-8 -*-
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: pysyft/messaging/plan/v1/state.proto

import sys
_b=sys.version_info[0]<3 and (lambda x:x) or (lambda x:x.encode('latin1'))
from google.protobuf import descriptor as _descriptor
from google.protobuf import message as _message
from google.protobuf import reflection as _reflection
from google.protobuf import symbol_database as _symbol_database
# @@protoc_insertion_point(imports)

_sym_db = _symbol_database.Default()


from pysyft.types.syft.v1 import id_pb2 as pysyft_dot_types_dot_syft_dot_v1_dot_id__pb2
from pysyft.types.syft.v1 import tensor_pb2 as pysyft_dot_types_dot_syft_dot_v1_dot_tensor__pb2


DESCRIPTOR = _descriptor.FileDescriptor(
  name='pysyft/messaging/plan/v1/state.proto',
  package='pysyft.messaging.plan.v1',
  syntax='proto3',
  serialized_options=None,
  serialized_pb=_b('\n$pysyft/messaging/plan/v1/state.proto\x12\x18pysyft.messaging.plan.v1\x1a\x1dpysyft/types/syft/v1/id.proto\x1a!pysyft/types/syft/v1/tensor.proto\"k\n\x05State\x12*\n\x03ids\x18\x01 \x03(\x0b\x32\x18.pysyft.types.syft.v1.IdR\x03ids\x12\x36\n\x07tensors\x18\x02 \x03(\x0b\x32\x1c.pysyft.types.syft.v1.TensorR\x07tensorsb\x06proto3')
  ,
  dependencies=[pysyft_dot_types_dot_syft_dot_v1_dot_id__pb2.DESCRIPTOR,pysyft_dot_types_dot_syft_dot_v1_dot_tensor__pb2.DESCRIPTOR,])




_STATE = _descriptor.Descriptor(
  name='State',
  full_name='pysyft.messaging.plan.v1.State',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  fields=[
    _descriptor.FieldDescriptor(
      name='ids', full_name='pysyft.messaging.plan.v1.State.ids', index=0,
      number=1, type=11, cpp_type=10, label=3,
      has_default_value=False, default_value=[],
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='ids', file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='tensors', full_name='pysyft.messaging.plan.v1.State.tensors', index=1,
      number=2, type=11, cpp_type=10, label=3,
      has_default_value=False, default_value=[],
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='tensors', file=DESCRIPTOR),
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
  serialized_end=239,
)

_STATE.fields_by_name['ids'].message_type = pysyft_dot_types_dot_syft_dot_v1_dot_id__pb2._ID
_STATE.fields_by_name['tensors'].message_type = pysyft_dot_types_dot_syft_dot_v1_dot_tensor__pb2._TENSOR
DESCRIPTOR.message_types_by_name['State'] = _STATE
_sym_db.RegisterFileDescriptor(DESCRIPTOR)

State = _reflection.GeneratedProtocolMessageType('State', (_message.Message,), {
  'DESCRIPTOR' : _STATE,
  '__module__' : 'pysyft.messaging.plan.v1.state_pb2'
  # @@protoc_insertion_point(class_scope:pysyft.messaging.plan.v1.State)
  })
_sym_db.RegisterMessage(State)


# @@protoc_insertion_point(module_scope)
