class ActivitySerializer < ActiveModel::Serializer
  attributes :id, :title, :category, :location, :description, :image, :est_price
end
