class DaytActivitiesController < ApplicationController
    rescue_from ActiveRecord::RecordInvalid, with: :render_uprocessable_entity_response
    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response
    
    def index
        dayt_activities = DaytActivity.all
        render json: dayt_activities, status: :ok
    end

    def create
        dayt_activity = DaytActivity.create!(dayt_activity_params)
        render json: dayt_activities, status: :created
    end
    
    private

    def dayt_activity_params
        params[:dayt_activity].permit(:dayt_id, :activity_id)
    end
    
    def render_uprocessable_entity_response(exception)
        render json: { errors: exception.record.errors.full_messages }, status: :unprocessable_entity
    end
    
    def render_not_found_response
        render json: { errors: "DateActivity not found" }, status: :not_found
    end
end
