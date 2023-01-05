class RelationshipSerializer < ActiveModel::Serializer
  attributes :id, :relationship_type, :name, :email
  has_many :users, serializer: UserSerializer
end
