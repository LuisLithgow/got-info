class InfoController < ApplicationController
  def index
    url = "http://www.anapioficeandfire.com/api/characters"
    response = HTTParty.get(url)
    parsed_body = JSON.parse(response.body)
    render json: parsed_body
  end

  def show
    g_thrones = Got.all

    g_thrones.each do |got|
    end
    render :json => g_thrones
  end


end
