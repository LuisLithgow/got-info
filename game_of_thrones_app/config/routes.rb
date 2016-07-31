Rails.application.routes.draw do

  # get 'welcome/index'

  # get 'info/index'
  # get 'got/index'
  # get 'got/show'
  root 'welcome#index'
  resources :info,:got  #only: [:index, :show]

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
