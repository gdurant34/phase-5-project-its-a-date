Rails.application.routes.draw do
  
  resources :comments
  resources :dayt_activities
  resources :user_relationships
  resources :activities
  resources :dayts
  resources :relationships
  resources :users
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
