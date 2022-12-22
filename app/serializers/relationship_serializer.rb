class RelationshipSerializer < ActiveModel::Serializer
  attributes :id, :relationship_type, :name, :email
end
