class UsersController < ApplicationController
    rescue_from ActiveRecord::RecordInvalid, with: :render_uprocessable_entity_response
    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response
    
    def index
        user = User.all
        render json: user, status: :ok
    end
    
    def show
        user = find_user
        render json: user, status: :ok
    end
    
    def create
        user = User.create!(user_params)
        render json: user, status: :created
    end

    def update
        user = find_user
         user.update!(user_params)
        render json: user, status: :accepted
    end
    
    private

    def find_user
        User.find(params[:id])
    end

    def user_params
        params.permit(:first_name, :last_name, :user_name, :age, :email)
    end
    
    def render_uprocessable_entity_response(exception)
        render json: { errors: exception.record.errors.full_messages }, status: :unprocessable_entity
    end
    
    def render_not_found_response
        render json: { errors: "User not found" }, status: :not_found
    end
end
