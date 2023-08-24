require 'rails_helper'

RSpec.describe "BasicPageSpec.rbs", type: :system do
  before do
    driven_by(:selenium_chrome_headless)
  end

  it 'renders react component on the page' do
    visit 'welcome/index'
    expect(page).to have_content('A working react component')
  end
end
