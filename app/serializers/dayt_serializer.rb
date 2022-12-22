class DaytSerializer < ActiveModel::Serializer
  attributes :id, :time, :location, :confirmed, :category, :comments
  belongs_to :user
  belongs_to :relationship
  has_many :activities
end
