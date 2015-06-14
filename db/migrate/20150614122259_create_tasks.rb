class CreateTasks < ActiveRecord::Migration
  def change
    create_table :tasks do |t|
      t.string :owner
      t.string :description
      t.boolean :status
      t.string :performer

      t.timestamps null: false
    end
  end
end
