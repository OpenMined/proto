# -*- coding: utf-8 -*-
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: pysyft/frameworks/torch/tensors/interpreters/v1/crt_precision.proto

import sys
_b=sys.version_info[0]<3 and (lambda x:x) or (lambda x:x.encode('latin1'))
from google.protobuf import descriptor as _descriptor
from google.protobuf import message as _message
from google.protobuf import reflection as _reflection
from google.protobuf import symbol_database as _symbol_database
# @@protoc_insertion_point(imports)

_sym_db = _symbol_database.Default()


from pysyft.generic.v1 import tensor_pb2 as pysyft_dot_generic_dot_v1_dot_tensor__pb2
from pysyft.types.syft.v1 import id_pb2 as pysyft_dot_types_dot_syft_dot_v1_dot_id__pb2


DESCRIPTOR = _descriptor.FileDescriptor(
  name='pysyft/frameworks/torch/tensors/interpreters/v1/crt_precision.proto',
  package='pysyft.frameworks.torch.tensors.interpreters.v1',
  syntax='proto3',
  serialized_options=None,
  serialized_pb=_b('\nCpysyft/frameworks/torch/tensors/interpreters/v1/crt_precision.proto\x12/pysyft.frameworks.torch.tensors.interpreters.v1\x1a\x1epysyft/generic/v1/tensor.proto\x1a\x1dpysyft/types/syft/v1/id.proto\"\xb6\x01\n\x12\x43RTPrecisionTensor\x12(\n\x02id\x18\x01 \x01(\x0b\x32\x18.pysyft.types.syft.v1.IdR\x02id\x12\x12\n\x04\x62\x61se\x18\x02 \x01(\x05R\x04\x62\x61se\x12\x31\n\x14precision_fractional\x18\x03 \x01(\x05R\x13precisionFractional\x12/\n\x05\x63hain\x18\x04 \x01(\x0b\x32\x19.pysyft.generic.v1.TensorR\x05\x63hainb\x06proto3')
  ,
  dependencies=[pysyft_dot_generic_dot_v1_dot_tensor__pb2.DESCRIPTOR,pysyft_dot_types_dot_syft_dot_v1_dot_id__pb2.DESCRIPTOR,])




_CRTPRECISIONTENSOR = _descriptor.Descriptor(
  name='CRTPrecisionTensor',
  full_name='pysyft.frameworks.torch.tensors.interpreters.v1.CRTPrecisionTensor',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  fields=[
    _descriptor.FieldDescriptor(
      name='id', full_name='pysyft.frameworks.torch.tensors.interpreters.v1.CRTPrecisionTensor.id', index=0,
      number=1, type=11, cpp_type=10, label=1,
      has_default_value=False, default_value=None,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='id', file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='base', full_name='pysyft.frameworks.torch.tensors.interpreters.v1.CRTPrecisionTensor.base', index=1,
      number=2, type=5, cpp_type=1, label=1,
      has_default_value=False, default_value=0,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='base', file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='precision_fractional', full_name='pysyft.frameworks.torch.tensors.interpreters.v1.CRTPrecisionTensor.precision_fractional', index=2,
      number=3, type=5, cpp_type=1, label=1,
      has_default_value=False, default_value=0,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='precisionFractional', file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='chain', full_name='pysyft.frameworks.torch.tensors.interpreters.v1.CRTPrecisionTensor.chain', index=3,
      number=4, type=11, cpp_type=10, label=1,
      has_default_value=False, default_value=None,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='chain', file=DESCRIPTOR),
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
  serialized_start=184,
  serialized_end=366,
)

_CRTPRECISIONTENSOR.fields_by_name['id'].message_type = pysyft_dot_types_dot_syft_dot_v1_dot_id__pb2._ID
_CRTPRECISIONTENSOR.fields_by_name['chain'].message_type = pysyft_dot_generic_dot_v1_dot_tensor__pb2._TENSOR
DESCRIPTOR.message_types_by_name['CRTPrecisionTensor'] = _CRTPRECISIONTENSOR
_sym_db.RegisterFileDescriptor(DESCRIPTOR)

CRTPrecisionTensor = _reflection.GeneratedProtocolMessageType('CRTPrecisionTensor', (_message.Message,), {
  'DESCRIPTOR' : _CRTPRECISIONTENSOR,
  '__module__' : 'pysyft.frameworks.torch.tensors.interpreters.v1.crt_precision_pb2'
  # @@protoc_insertion_point(class_scope:pysyft.frameworks.torch.tensors.interpreters.v1.CRTPrecisionTensor)
  })
_sym_db.RegisterMessage(CRTPrecisionTensor)


# @@protoc_insertion_point(module_scope)
