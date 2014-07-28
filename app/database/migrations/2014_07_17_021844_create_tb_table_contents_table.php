<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateTbTableContentsTable extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::create('tb_table_contents', function($table){

			$table->increments('id');
			$table->string('content', 250);
			$table->integer('level');
			$table->integer('order');
			$table->integer('id_book')->unsigned();
			$table->foreign('id_book')->references('id')->on('tb_book');

		});
	}

	/**
	 * Reverse the migrations.
	 *
	 * @return void
	 */
	public function down()
	{
		Schema::drop('tb_table_contents');
	}

}
