class UserSerializer < ActiveModel::Serializer
  attributes :id, :first_name, :last_name, :user_name, :age, :email
  has_many :relationships, serializer: RelationshipSerializer
end
