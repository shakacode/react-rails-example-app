require 'rails_helper'

RSpec.describe "BasicPageSpec.rbs", type: :system do
  before do
    driven_by(:selenium_chrome_headless)
  end

  it 'renders react component on the page' do
    visit 'welcome/csr'
    expect(page).to have_content('A working react component')
  end

  it 'renders react component on the page with SSR' do
    visit 'welcome/ssr'
    expect(page).to have_content('A working react component with SSR')
  end
end
