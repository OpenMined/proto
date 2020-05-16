// DO NOT EDIT.
//
// Generated by the Swift generator plugin for the protocol buffer compiler.
// Source: syft_proto/execution/v1/role.proto
//
// For information on using the generated types, please see the documentation:
//   https://github.com/apple/swift-protobuf/

import Foundation
import SwiftProtobuf

// If the compiler emits an error on this type, it is because this file
// was generated by a version of the `protoc` Swift plug-in that is
// incompatible with the version of SwiftProtobuf to which you are linking.
// Please ensure that your are building against the same version of the API
// that was used to generate this file.
fileprivate struct _GeneratedWithProtocGenSwiftVersion: SwiftProtobuf.ProtobufAPIVersionCheck {
  struct _2: SwiftProtobuf.ProtobufAPIVersion_2 {}
  typealias Version = _2
}

public struct SyftProto_Execution_V1_Role {
  // SwiftProtobuf.Message conformance is added in an extension below. See the
  // `Message` and `Message+*Additions` files in the SwiftProtobuf library for
  // methods supported on all messages.

  public var id: SyftProto_Types_Syft_V1_Id {
    get {return _storage._id ?? SyftProto_Types_Syft_V1_Id()}
    set {_uniqueStorage()._id = newValue}
  }
  /// Returns true if `id` has been explicitly set.
  public var hasID: Bool {return _storage._id != nil}
  /// Clears the value of `id`. Subsequent reads from it will return its default value.
  public mutating func clearID() {_uniqueStorage()._id = nil}

  public var actions: [SyftProto_Execution_V1_ComputationAction] {
    get {return _storage._actions}
    set {_uniqueStorage()._actions = newValue}
  }

  public var state: SyftProto_Execution_V1_State {
    get {return _storage._state ?? SyftProto_Execution_V1_State()}
    set {_uniqueStorage()._state = newValue}
  }
  /// Returns true if `state` has been explicitly set.
  public var hasState: Bool {return _storage._state != nil}
  /// Clears the value of `state`. Subsequent reads from it will return its default value.
  public mutating func clearState() {_uniqueStorage()._state = nil}

  public var placeholders: [SyftProto_Execution_V1_Placeholder] {
    get {return _storage._placeholders}
    set {_uniqueStorage()._placeholders = newValue}
  }

  public var inputPlaceholderIds: [SyftProto_Types_Syft_V1_Id] {
    get {return _storage._inputPlaceholderIds}
    set {_uniqueStorage()._inputPlaceholderIds = newValue}
  }

  public var outputPlaceholderIds: [SyftProto_Types_Syft_V1_Id] {
    get {return _storage._outputPlaceholderIds}
    set {_uniqueStorage()._outputPlaceholderIds = newValue}
  }

  public var tags: [String] {
    get {return _storage._tags}
    set {_uniqueStorage()._tags = newValue}
  }

  public var description_p: String {
    get {return _storage._description_p}
    set {_uniqueStorage()._description_p = newValue}
  }

  public var unknownFields = SwiftProtobuf.UnknownStorage()

  public init() {}

  fileprivate var _storage = _StorageClass.defaultInstance
}

// MARK: - Code below here is support for the SwiftProtobuf runtime.

fileprivate let _protobuf_package = "syft_proto.execution.v1"

extension SyftProto_Execution_V1_Role: SwiftProtobuf.Message, SwiftProtobuf._MessageImplementationBase, SwiftProtobuf._ProtoNameProviding {
  public static let protoMessageName: String = _protobuf_package + ".Role"
  public static let _protobuf_nameMap: SwiftProtobuf._NameMap = [
    1: .same(proto: "id"),
    2: .same(proto: "actions"),
    3: .same(proto: "state"),
    4: .same(proto: "placeholders"),
    5: .standard(proto: "input_placeholder_ids"),
    6: .standard(proto: "output_placeholder_ids"),
    7: .same(proto: "tags"),
    8: .same(proto: "description"),
  ]

  fileprivate class _StorageClass {
    var _id: SyftProto_Types_Syft_V1_Id? = nil
    var _actions: [SyftProto_Execution_V1_ComputationAction] = []
    var _state: SyftProto_Execution_V1_State? = nil
    var _placeholders: [SyftProto_Execution_V1_Placeholder] = []
    var _inputPlaceholderIds: [SyftProto_Types_Syft_V1_Id] = []
    var _outputPlaceholderIds: [SyftProto_Types_Syft_V1_Id] = []
    var _tags: [String] = []
    var _description_p: String = String()

    static let defaultInstance = _StorageClass()

    private init() {}

    init(copying source: _StorageClass) {
      _id = source._id
      _actions = source._actions
      _state = source._state
      _placeholders = source._placeholders
      _inputPlaceholderIds = source._inputPlaceholderIds
      _outputPlaceholderIds = source._outputPlaceholderIds
      _tags = source._tags
      _description_p = source._description_p
    }
  }

  fileprivate mutating func _uniqueStorage() -> _StorageClass {
    if !isKnownUniquelyReferenced(&_storage) {
      _storage = _StorageClass(copying: _storage)
    }
    return _storage
  }

  public mutating func decodeMessage<D: SwiftProtobuf.Decoder>(decoder: inout D) throws {
    _ = _uniqueStorage()
    try withExtendedLifetime(_storage) { (_storage: _StorageClass) in
      while let fieldNumber = try decoder.nextFieldNumber() {
        switch fieldNumber {
        case 1: try decoder.decodeSingularMessageField(value: &_storage._id)
        case 2: try decoder.decodeRepeatedMessageField(value: &_storage._actions)
        case 3: try decoder.decodeSingularMessageField(value: &_storage._state)
        case 4: try decoder.decodeRepeatedMessageField(value: &_storage._placeholders)
        case 5: try decoder.decodeRepeatedMessageField(value: &_storage._inputPlaceholderIds)
        case 6: try decoder.decodeRepeatedMessageField(value: &_storage._outputPlaceholderIds)
        case 7: try decoder.decodeRepeatedStringField(value: &_storage._tags)
        case 8: try decoder.decodeSingularStringField(value: &_storage._description_p)
        default: break
        }
      }
    }
  }

  public func traverse<V: SwiftProtobuf.Visitor>(visitor: inout V) throws {
    try withExtendedLifetime(_storage) { (_storage: _StorageClass) in
      if let v = _storage._id {
        try visitor.visitSingularMessageField(value: v, fieldNumber: 1)
      }
      if !_storage._actions.isEmpty {
        try visitor.visitRepeatedMessageField(value: _storage._actions, fieldNumber: 2)
      }
      if let v = _storage._state {
        try visitor.visitSingularMessageField(value: v, fieldNumber: 3)
      }
      if !_storage._placeholders.isEmpty {
        try visitor.visitRepeatedMessageField(value: _storage._placeholders, fieldNumber: 4)
      }
      if !_storage._inputPlaceholderIds.isEmpty {
        try visitor.visitRepeatedMessageField(value: _storage._inputPlaceholderIds, fieldNumber: 5)
      }
      if !_storage._outputPlaceholderIds.isEmpty {
        try visitor.visitRepeatedMessageField(value: _storage._outputPlaceholderIds, fieldNumber: 6)
      }
      if !_storage._tags.isEmpty {
        try visitor.visitRepeatedStringField(value: _storage._tags, fieldNumber: 7)
      }
      if !_storage._description_p.isEmpty {
        try visitor.visitSingularStringField(value: _storage._description_p, fieldNumber: 8)
      }
    }
    try unknownFields.traverse(visitor: &visitor)
  }

  public static func ==(lhs: SyftProto_Execution_V1_Role, rhs: SyftProto_Execution_V1_Role) -> Bool {
    if lhs._storage !== rhs._storage {
      let storagesAreEqual: Bool = withExtendedLifetime((lhs._storage, rhs._storage)) { (_args: (_StorageClass, _StorageClass)) in
        let _storage = _args.0
        let rhs_storage = _args.1
        if _storage._id != rhs_storage._id {return false}
        if _storage._actions != rhs_storage._actions {return false}
        if _storage._state != rhs_storage._state {return false}
        if _storage._placeholders != rhs_storage._placeholders {return false}
        if _storage._inputPlaceholderIds != rhs_storage._inputPlaceholderIds {return false}
        if _storage._outputPlaceholderIds != rhs_storage._outputPlaceholderIds {return false}
        if _storage._tags != rhs_storage._tags {return false}
        if _storage._description_p != rhs_storage._description_p {return false}
        return true
      }
      if !storagesAreEqual {return false}
    }
    if lhs.unknownFields != rhs.unknownFields {return false}
    return true
  }
}
