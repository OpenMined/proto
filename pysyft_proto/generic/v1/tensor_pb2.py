# -*- coding: utf-8 -*-
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: pysyft_proto/generic/v1/tensor.proto

import sys
_b=sys.version_info[0]<3 and (lambda x:x) or (lambda x:x.encode('latin1'))
from google.protobuf import descriptor as _descriptor
from google.protobuf import message as _message
from google.protobuf import reflection as _reflection
from google.protobuf import symbol_database as _symbol_database
# @@protoc_insertion_point(imports)

_sym_db = _symbol_database.Default()


from pysyft_proto.types.syft.v1 import id_pb2 as pysyft__proto_dot_types_dot_syft_dot_v1_dot_id__pb2
from pysyft_proto.types.syft.v1 import shape_pb2 as pysyft__proto_dot_types_dot_syft_dot_v1_dot_shape__pb2


DESCRIPTOR = _descriptor.FileDescriptor(
  name='pysyft_proto/generic/v1/tensor.proto',
  package='pysyft_proto.generic.v1',
  syntax='proto3',
  serialized_options=None,
  serialized_pb=_b('\n$pysyft_proto/generic/v1/tensor.proto\x12\x17pysyft_proto.generic.v1\x1a#pysyft_proto/types/syft/v1/id.proto\x1a&pysyft_proto/types/syft/v1/shape.proto\"\xf9\x03\n\x06Tensor\x12.\n\x02id\x18\x01 \x01(\x0b\x32\x1e.pysyft_proto.types.syft.v1.IdR\x02id\x12\x37\n\x05shape\x18\x02 \x01(\x0b\x32!.pysyft_proto.types.syft.v1.ShapeR\x05shape\x12\x10\n\x03\x62in\x18\x03 \x01(\x0cR\x03\x62in\x12\x35\n\x05\x63hain\x18\x04 \x01(\x0b\x32\x1f.pysyft_proto.generic.v1.TensorR\x05\x63hain\x12>\n\ngrad_chain\x18\x05 \x01(\x0b\x32\x1f.pysyft_proto.generic.v1.TensorR\tgradChain\x12\x12\n\x04tags\x18\x06 \x03(\tR\x04tags\x12 \n\x0b\x64\x65scription\x18\x07 \x01(\tR\x0b\x64\x65scription\x12J\n\nserializer\x18\x08 \x01(\x0e\x32*.pysyft_proto.generic.v1.Tensor.SerializerR\nserializer\"{\n\nSerializer\x12\x1a\n\x16SERIALIZER_UNSPECIFIED\x10\x00\x12\x14\n\x10SERIALIZER_TORCH\x10\x01\x12\x14\n\x10SERIALIZER_NUMPY\x10\x02\x12\x11\n\rSERIALIZER_TF\x10\x03\x12\x12\n\x0eSERIALIZER_ALL\x10\x04\x62\x06proto3')
  ,
  dependencies=[pysyft__proto_dot_types_dot_syft_dot_v1_dot_id__pb2.DESCRIPTOR,pysyft__proto_dot_types_dot_syft_dot_v1_dot_shape__pb2.DESCRIPTOR,])



_TENSOR_SERIALIZER = _descriptor.EnumDescriptor(
  name='Serializer',
  full_name='pysyft_proto.generic.v1.Tensor.Serializer',
  filename=None,
  file=DESCRIPTOR,
  values=[
    _descriptor.EnumValueDescriptor(
      name='SERIALIZER_UNSPECIFIED', index=0, number=0,
      serialized_options=None,
      type=None),
    _descriptor.EnumValueDescriptor(
      name='SERIALIZER_TORCH', index=1, number=1,
      serialized_options=None,
      type=None),
    _descriptor.EnumValueDescriptor(
      name='SERIALIZER_NUMPY', index=2, number=2,
      serialized_options=None,
      type=None),
    _descriptor.EnumValueDescriptor(
      name='SERIALIZER_TF', index=3, number=3,
      serialized_options=None,
      type=None),
    _descriptor.EnumValueDescriptor(
      name='SERIALIZER_ALL', index=4, number=4,
      serialized_options=None,
      type=None),
  ],
  containing_type=None,
  serialized_options=None,
  serialized_start=525,
  serialized_end=648,
)
_sym_db.RegisterEnumDescriptor(_TENSOR_SERIALIZER)


_TENSOR = _descriptor.Descriptor(
  name='Tensor',
  full_name='pysyft_proto.generic.v1.Tensor',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  fields=[
    _descriptor.FieldDescriptor(
      name='id', full_name='pysyft_proto.generic.v1.Tensor.id', index=0,
      number=1, type=11, cpp_type=10, label=1,
      has_default_value=False, default_value=None,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='id', file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='shape', full_name='pysyft_proto.generic.v1.Tensor.shape', index=1,
      number=2, type=11, cpp_type=10, label=1,
      has_default_value=False, default_value=None,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='shape', file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='bin', full_name='pysyft_proto.generic.v1.Tensor.bin', index=2,
      number=3, type=12, cpp_type=9, label=1,
      has_default_value=False, default_value=_b(""),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='bin', file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='chain', full_name='pysyft_proto.generic.v1.Tensor.chain', index=3,
      number=4, type=11, cpp_type=10, label=1,
      has_default_value=False, default_value=None,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='chain', file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='grad_chain', full_name='pysyft_proto.generic.v1.Tensor.grad_chain', index=4,
      number=5, type=11, cpp_type=10, label=1,
      has_default_value=False, default_value=None,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='gradChain', file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='tags', full_name='pysyft_proto.generic.v1.Tensor.tags', index=5,
      number=6, type=9, cpp_type=9, label=3,
      has_default_value=False, default_value=[],
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='tags', file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='description', full_name='pysyft_proto.generic.v1.Tensor.description', index=6,
      number=7, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=_b("").decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='description', file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='serializer', full_name='pysyft_proto.generic.v1.Tensor.serializer', index=7,
      number=8, type=14, cpp_type=8, label=1,
      has_default_value=False, default_value=0,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='serializer', file=DESCRIPTOR),
  ],
  extensions=[
  ],
  nested_types=[],
  enum_types=[
    _TENSOR_SERIALIZER,
  ],
  serialized_options=None,
  is_extendable=False,
  syntax='proto3',
  extension_ranges=[],
  oneofs=[
  ],
  serialized_start=143,
  serialized_end=648,
)

_TENSOR.fields_by_name['id'].message_type = pysyft__proto_dot_types_dot_syft_dot_v1_dot_id__pb2._ID
_TENSOR.fields_by_name['shape'].message_type = pysyft__proto_dot_types_dot_syft_dot_v1_dot_shape__pb2._SHAPE
_TENSOR.fields_by_name['chain'].message_type = _TENSOR
_TENSOR.fields_by_name['grad_chain'].message_type = _TENSOR
_TENSOR.fields_by_name['serializer'].enum_type = _TENSOR_SERIALIZER
_TENSOR_SERIALIZER.containing_type = _TENSOR
DESCRIPTOR.message_types_by_name['Tensor'] = _TENSOR
_sym_db.RegisterFileDescriptor(DESCRIPTOR)

Tensor = _reflection.GeneratedProtocolMessageType('Tensor', (_message.Message,), {
  'DESCRIPTOR' : _TENSOR,
  '__module__' : 'pysyft_proto.generic.v1.tensor_pb2'
  # @@protoc_insertion_point(class_scope:pysyft_proto.generic.v1.Tensor)
  })
_sym_db.RegisterMessage(Tensor)


# @@protoc_insertion_point(module_scope)