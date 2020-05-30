# -*- coding: utf-8 -*-
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: syft_proto/frameworks/torch/fl/v1/dataset.proto

from google.protobuf import descriptor as _descriptor
from google.protobuf import message as _message
from google.protobuf import reflection as _reflection
from google.protobuf import symbol_database as _symbol_database
# @@protoc_insertion_point(imports)

_sym_db = _symbol_database.Default()


from syft_proto.types.torch.v1 import tensor_pb2 as syft__proto_dot_types_dot_torch_dot_v1_dot_tensor__pb2
from syft_proto.types.syft.v1 import id_pb2 as syft__proto_dot_types_dot_syft_dot_v1_dot_id__pb2


DESCRIPTOR = _descriptor.FileDescriptor(
  name='syft_proto/frameworks/torch/fl/v1/dataset.proto',
  package='syft_proto.frameworks.torch.fl.v1',
  syntax='proto3',
  serialized_options=b'\n.org.openmined.syftproto.frameworks.torch.fl.v1',
  serialized_pb=b'\n/syft_proto/frameworks/torch/fl/v1/dataset.proto\x12!syft_proto.frameworks.torch.fl.v1\x1a&syft_proto/types/torch/v1/tensor.proto\x1a!syft_proto/types/syft/v1/id.proto\"\xad\x02\n\x0b\x42\x61seDataset\x12:\n\x04\x64\x61ta\x18\x01 \x01(\x0b\x32&.syft_proto.types.torch.v1.TorchTensorR\x04\x64\x61ta\x12@\n\x07targets\x18\x02 \x01(\x0b\x32&.syft_proto.types.torch.v1.TorchTensorR\x07targets\x12,\n\x02id\x18\x03 \x01(\x0b\x32\x1c.syft_proto.types.syft.v1.IdR\x02id\x12\x12\n\x04tags\x18\x04 \x03(\tR\x04tags\x12 \n\x0b\x64\x65scription\x18\x05 \x01(\tR\x0b\x64\x65scription\x12<\n\x05\x63hild\x18\x06 \x01(\x0b\x32&.syft_proto.types.torch.v1.TorchTensorR\x05\x63hildB0\n.org.openmined.syftproto.frameworks.torch.fl.v1b\x06proto3'
  ,
  dependencies=[syft__proto_dot_types_dot_torch_dot_v1_dot_tensor__pb2.DESCRIPTOR,syft__proto_dot_types_dot_syft_dot_v1_dot_id__pb2.DESCRIPTOR,])




_BASEDATASET = _descriptor.Descriptor(
  name='BaseDataset',
  full_name='syft_proto.frameworks.torch.fl.v1.BaseDataset',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  fields=[
    _descriptor.FieldDescriptor(
      name='data', full_name='syft_proto.frameworks.torch.fl.v1.BaseDataset.data', index=0,
      number=1, type=11, cpp_type=10, label=1,
      has_default_value=False, default_value=None,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='data', file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='targets', full_name='syft_proto.frameworks.torch.fl.v1.BaseDataset.targets', index=1,
      number=2, type=11, cpp_type=10, label=1,
      has_default_value=False, default_value=None,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='targets', file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='id', full_name='syft_proto.frameworks.torch.fl.v1.BaseDataset.id', index=2,
      number=3, type=11, cpp_type=10, label=1,
      has_default_value=False, default_value=None,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='id', file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='tags', full_name='syft_proto.frameworks.torch.fl.v1.BaseDataset.tags', index=3,
      number=4, type=9, cpp_type=9, label=3,
      has_default_value=False, default_value=[],
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='tags', file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='description', full_name='syft_proto.frameworks.torch.fl.v1.BaseDataset.description', index=4,
      number=5, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='description', file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='child', full_name='syft_proto.frameworks.torch.fl.v1.BaseDataset.child', index=5,
      number=6, type=11, cpp_type=10, label=1,
      has_default_value=False, default_value=None,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, json_name='child', file=DESCRIPTOR),
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
  serialized_start=162,
  serialized_end=463,
)

_BASEDATASET.fields_by_name['data'].message_type = syft__proto_dot_types_dot_torch_dot_v1_dot_tensor__pb2._TORCHTENSOR
_BASEDATASET.fields_by_name['targets'].message_type = syft__proto_dot_types_dot_torch_dot_v1_dot_tensor__pb2._TORCHTENSOR
_BASEDATASET.fields_by_name['id'].message_type = syft__proto_dot_types_dot_syft_dot_v1_dot_id__pb2._ID
_BASEDATASET.fields_by_name['child'].message_type = syft__proto_dot_types_dot_torch_dot_v1_dot_tensor__pb2._TORCHTENSOR
DESCRIPTOR.message_types_by_name['BaseDataset'] = _BASEDATASET
_sym_db.RegisterFileDescriptor(DESCRIPTOR)

BaseDataset = _reflection.GeneratedProtocolMessageType('BaseDataset', (_message.Message,), {
  'DESCRIPTOR' : _BASEDATASET,
  '__module__' : 'syft_proto.frameworks.torch.fl.v1.dataset_pb2'
  # @@protoc_insertion_point(class_scope:syft_proto.frameworks.torch.fl.v1.BaseDataset)
  })
_sym_db.RegisterMessage(BaseDataset)


DESCRIPTOR._options = None
# @@protoc_insertion_point(module_scope)
