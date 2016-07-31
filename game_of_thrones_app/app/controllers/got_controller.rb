class GotController < ApplicationController
  def index
    g_thrones = Got.all

    g_thrones.each do |got|
    end

    render :json => g_thrones
  end

  # def show
  #   g_thrones = Got.all
  #   g_thrones.each do |got|
  #   end

  #   render :json => g_thrones
  # end
end
