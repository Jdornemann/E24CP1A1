Rails.application.routes.draw do
  resources :accounts
  get 'pages/index'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: 'accounts#index'
end
