class UsersController < ApplicationController
    wrap_parameters format: []
    skip_before_action :authorized, only: [:create]
    rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity
    
    def index
        user = User.all
        render json: user, status: :ok
    end
    
    def show
        render json: current_user
    end
    
    def create
        user = User.create!(user_params)
        render json: current_user
    end

    def update
        user = find_user
         user.update!(user_params)
        render json: user
    end
    
    private

    def find_user
        User.find(params[:id])
    end

    def user_params
        params.permit(:first_name, :last_name, :user_name, :age, :email, :password, :password_confirmation)
    end
    
    def render_uprocessable_entity_response(exception)
        render json: { errors: exception.record.errors.full_messages }, status: :unprocessable_entity
    end

end
