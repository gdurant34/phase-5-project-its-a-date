class ActivitySerializer < ActiveModel::Serializer
  attributes :id, :title, :category, :location, :description, :image, :est_price
  belongs_to :user
  belongs_to :relationship
end
