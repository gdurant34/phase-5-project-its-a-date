class DaytsController < ApplicationController
    rescue_from ActiveRecord::RecordInvalid, with: :render_uprocessable_entity_response
    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response
    
    def index
        dayts = Dayt.all
        render json: current_user.dayts, status: :ok
    end

    def show
        dayt = find_dayt
        render json: dayt, status: :ok
    end

    def create
        dayt = Dayt.create!(dayt_params)
        render json: dayt, status: :created
    end

    def update
        dayt = find_dayt
        dayt.update!(dayt_params)
        render json: dayt, status: :accepted
    end

    def destroy
        dayt = find_dayt
        dayt.destroy
        head :no_content
    end
    
    private

    def find_dayt
        Dayt.find(params[:id])
    end

    def dayt_params
        params[:dayt].permit(:time, :location, :confirmed, :category, :user_id, :relationship_id)
    end

    def find_dayt
        Dayt.find(params[:id])
    end
    
    def render_uprocessable_entity_response(exception)
        render json: { errors: exception.record.errors.full_messages }, status: :unprocessable_entity
    end
    
    def render_not_found_response
        render json: { errors: "Date not found" }, status: :not_found
    end
    
end
