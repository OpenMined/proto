# -*- coding: utf-8 -*-
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: syft_proto/types/torch/v1/dtype.proto

from google.protobuf import descriptor as _descriptor
from google.protobuf import message as _message
from google.protobuf import reflection as _reflection
from google.protobuf import symbol_database as _symbol_database
# @@protoc_insertion_point(imports)

_sym_db = _symbol_database.Default()




DESCRIPTOR = _descriptor.FileDescriptor(
  name='syft_proto/types/torch/v1/dtype.proto',
  package='syft_proto.types.torch.v1',
  syntax='proto3',
  serialized_options=b'\n&org.openmined.syftproto.types.torch.v1',

  serialized_pb=b'\n%syft_proto/types/torch/v1/dtype.proto\x12\x19syft_proto.types.torch.v1\"+\n\nTorchDType\x12\x1d\n\ntorch_type\x18\x01 \x01(\tR\ttorchTypeB(\n&org.openmined.syftproto.types.torch.v1b\x06proto3'
)




_TORCHDTYPE = _descriptor.Descriptor(
  name='TorchDType',
  full_name='syft_proto.types.torch.v1.TorchDType',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,

  fields=[
    _descriptor.FieldDescriptor(
      name='torch_type', full_name='syft_proto.types.torch.v1.TorchDType.torch_type', index=0,
      number=1, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='torchType', file=DESCRIPTOR,  ),
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
  serialized_start=68,
  serialized_end=111,
)

DESCRIPTOR.message_types_by_name['TorchDType'] = _TORCHDTYPE
_sym_db.RegisterFileDescriptor(DESCRIPTOR)

TorchDType = _reflection.GeneratedProtocolMessageType('TorchDType', (_message.Message,), {
  'DESCRIPTOR' : _TORCHDTYPE,
  '__module__' : 'syft_proto.types.torch.v1.dtype_pb2'
  # @@protoc_insertion_point(class_scope:syft_proto.types.torch.v1.TorchDType)
  })
_sym_db.RegisterMessage(TorchDType)


DESCRIPTOR._options = None
# @@protoc_insertion_point(module_scope)
