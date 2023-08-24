class WelcomeController < ApplicationController
  def csr
    @props = {
      title: 'A working react component',
      body: 'Simple but effective'
    }
  end

  def ssr
    @props = {
      title: 'A working react component with SSR',
      body: 'Simple but effective'
    }
  end
end
