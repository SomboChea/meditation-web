<?php

use Illuminate\Database\Seeder;

class ReviewsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //
        \Illuminate\Support\Facades\DB::table('reviews')
            ->select('
INSERT INTO reviews(comments,avatar,name,position) VALUES
("We move at fast pace. I\'m always working on something I am excited about.","/assets/images/mz.jpg","Mark Zurckerberg","Founder\, Facebook"),
("We move at fast pace. I\'m always working on something I am excited about.","/assets/images/mz.jpg","Mark Zurckerberg","Founder\, Facebook"),
("We move at fast pace. I\'m always working on something I am excited about.","/assets/images/mz.jpg","Mark Zurckerberg","Founder\, Facebook"),
("We move at fast pace. I\'m always working on something I am excited about.","/assets/images/mz.jpg","Mark Zurckerberg","Founder\, Facebook"),
("We move at fast pace. I\'m always working on something I am excited about.","/assets/images/mz.jpg","Mark Zurckerberg","Founder\, Facebook"),
("We move at fast pace. I\'m always working on something I am excited about.","/assets/images/mz.jpg","Mark Zurckerberg","Founder\, Facebook");
');
    }
}
