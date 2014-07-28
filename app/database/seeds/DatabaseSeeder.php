<?php

class DatabaseSeeder extends Seeder {

	/**
	 * Run the database seeds.
	 *
	 * @return void
	 */
	public function run()
	{
		Eloquent::unguard();

		$this->call('TbBookTableSeeder');
		$this->call('TbTableContentTableSeeder');
	}

}

class TbBookTableSeeder extends Seeder {

    public function run()
    {
        DB::table('tb_book')->delete();

        TbBook::create(array('title' => 'Libro 1'));
    }

}

class TbTableContentTableSeeder extends Seeder {

		public function run()
		{
				DB::table('tb_table_contents')->delete();

				TbTableContents::create(array(
					'content' => 'Introduccion',
					'level' => 1,
					'order' => 1,
					'id_book' => 1,
					));

				TbTableContents::create(array(
					'content' => 'Motivacion',
					'level' => 2,
					'order' => 2,
					'id_book' => 1,
					));

				TbTableContents::create(array(
					'content' => 'Reseña Historica',
					'level' => 2,
					'order' => 3,
					'id_book' => 1,
					));

				TbTableContents::create(array(
					'content' => 'Origen',
					'level' => 3,
					'order' => 4,
					'id_book' => 1,
					));

				TbTableContents::create(array(
					'content' => 'Trabajos',
					'level' => 3,
					'order' => 5,
					'id_book' => 1,
					));

				TbTableContents::create(array(
					'content' => 'Soluciones Actuales',
					'level' => 2,
					'order' => 6,
					'id_book' => 1,
					));

				TbTableContents::create(array(
					'content' => 'Objetivos',
					'level' => 2,
					'order' => 7,
					'id_book' => 1,
					));

				TbTableContents::create(array(
					'content' => 'Requisitos',
					'level' => 1,
					'order' => 8,
					'id_book' => 1,
					));

				TbTableContents::create(array(
					'content' => 'Hardware',
					'level' => 2,
					'order' => 9,
					'id_book' => 1,
					));

				TbTableContents::create(array(
					'content' => 'Software',
					'level' => 2,
					'order' => 10,
					'id_book' => 1,
					));

		}

}
