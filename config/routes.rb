Rails.application.routes.draw do
  get 'welcome/csr'
  get 'welcome/ssr'

  root to: redirect('welcome/csr')
end
