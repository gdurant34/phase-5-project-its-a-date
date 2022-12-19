class DaytSerializer < ActiveModel::Serializer
  attributes :id, :time, :location, :confirmed, :category, :comments
end
