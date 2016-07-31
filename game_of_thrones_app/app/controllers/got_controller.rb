class GotController < ApplicationController
  def index
    g_thrones = Got.all

    g_thrones.each do |got|
    end

    render :json => g_thrones
  end

  def show
    g_thrones = Got.all
    g_thrones.each do |got|
    end

    render :json => g_thrones
  end

  def create
    character = {name:params[:name], gender: params[:gender], born: params[:born], titles: params[:titles], allegiances: params[:allegiances], aliases: params[:aliases], father: params[:father], mother: params[:mother], spouse: params[:spouse] }
    Got.create character
    render :json=>Got.last
  end

  def destroy
    character = Got.find(params[:id])
    character.destroy
    render :json => true
  end


end
