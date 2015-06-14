class TaskSerializer < ActiveModel::Serializer
  attributes :id, :owner, :description, :status, :performer
end
