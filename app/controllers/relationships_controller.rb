class RelationshipsController < ApplicationController
    rescue_from ActiveRecord::RecordInvalid, with: :render_uprocessable_entity_response
    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response
    
    def index
        relationships = Relationship.all
        render json: current_user.relationships, status: :ok
    end

    def show 
        relationship = find_relationship
        render json: relationship, status: :ok
    end

    def create
        relationship = Relationship.create!(relationship_params)
        current_user.relationships << relationship
        render json: relationship, status: :created
    end

    def update
        relationship = find_relationship
        relationship.update!(relationship_params)
        render json: relationship, status: :accepted
    end
    
    def destroy
        relationship = find_relationship
        relationship.destroy
        head :no_content
    end

    private

    def find_relationship
        Relationship.find(params[:id])
    end

    def relationship_params
        params[:relationship].permit(:relationship_type, :name, :email)
    end
    
    def render_uprocessable_entity_response(exception)
        render json: { errors: exception.record.errors.full_messages }, status: :unprocessable_entity
    end
    
    def render_not_found_response
        render json: { errors: "Relationship not found" }, status: :not_found
    end
end
