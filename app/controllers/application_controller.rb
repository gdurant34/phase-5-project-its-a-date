class ApplicationController < ActionController::API
  include ActionController::Cookies
  before_action :authorized
  # skip_before_action :authorized, only: :index
  def authorized
      return render json: {error: "Not Authorized"}, status: :unauthorized unless session.include? :user_id
  end

  def current_user
      User.find(session[:user_id])
  end
  
end
