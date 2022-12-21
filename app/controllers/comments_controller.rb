class CommentsController < ApplicationController
    rescue_from ActiveRecord::RecordInvalid, with: :render_uprocessable_entity_response
    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response
    
    def index
        comments = Comment.all
        render json: comments, status: :ok
    end

    def show
        comment = find_comment
        render json: comment, status: :ok
    end

    def create
        comment = Comment.create!(comment_params)
        render json: comment, status: :created
    end

    def update
        comment = find_comment
        comment.update!(comment_params)
        render json: comment, status: :accepted
    end

    def destroy
        comment = find_comment
        comment.destroy
        head :no_content
    end
    
    private

    def find_comment
        Comment.find(params[:id])
    end

    def comment_params
        params.permit(:dayt_id, :user_id, :comment_field)
    end
    
    def render_uprocessable_entity_response(exception)
        render json: { errors: exception.record.errors.full_messages }, status: :unprocessable_entity
    end
    
    def render_not_found_response
        render json: { errors: "Comment not found" }, status: :not_found
    end
end
