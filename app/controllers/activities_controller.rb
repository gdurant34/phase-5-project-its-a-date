class ActivitiesController < ApplicationController
    rescue_from ActiveRecord::RecordInvalid, with: :render_uprocessable_entity_response
    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response
    
    def index
        activities = Activity.all
        render json: activities, status: :ok
    end

    def show 
        activity = find_activity
        render json: activity, status: :ok
    end

    def create
        activity = Activity.create!(activity_params)
        render json: activity, status: :created
    end

    def update
        activity = find_activity
        activity.update!(activity_params)
        render json: activity, status: :accepted
    end

    def destroy
        activity = find_activity
        activity.destroy
        head :no_content
    end
    
    private

    def find_activity
        Activity.find(params[:id])
    end

    def activity_params
        params.permit(:title, :category, :location, :description, :image, :est_price, :user_id, :relationship_id)
    end
    
    def render_uprocessable_entity_response(exception)
        render json: { errors: exception.record.errors.full_messages }, status: :unprocessable_entity
    end
    
    def render_not_found_response
        render json: { errors: "Activity not found" }, status: :not_found
    end
    
end
