class TasksController < ApplicationController
  skip_before_action :verify_authenticity_token
  respond_to :json


  def index
    respond_with Task.all
  end

  def show
    respond_with Task.find(params[:id])
  end

  def create
    respond_with Task.create(task_params)
  end

  def update
    respond_with Task.update(params[:id], params[:task])
  end

  def destroy
    respond_with Task.destroy(params[:id])
  end

private

  def task_params
    params.require(:task).permit(:owner,:description,:performer,:status)
  end

end
