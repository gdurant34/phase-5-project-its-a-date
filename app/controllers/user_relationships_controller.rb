class UserRelationshipsController < ApplicationController
    rescue_from ActiveRecord::RecordInvalid, with: :render_uprocessable_entity_response
    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response
    
    def index
        user_relationship = UserRelationship.all
        render json: user_relationship, status: :ok
    end
    
    private
    
    def render_uprocessable_entity_response(exception)
        render json: { errors: exception.record.errors.full_messages }, status: :unprocessable_entity
    end
    
    def render_not_found_response
        render json: { errors: "UserRelationship not found" }, status: :not_found
    end
end
