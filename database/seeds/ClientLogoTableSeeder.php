<?php

use Illuminate\Database\Seeder;

class ClientLogoTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //
        \Illuminate\Support\Facades\DB::select('INSERT INTO clients(name,icon) VALUES
("POS Solutions","/assets/images/services-1.jpg"),
("Enterprise Software Development","/assets/images/services-2.jpg"),
("web development","/assets/images/services-3.jpg"),
("customization","/assets/images/services-4.jpg"),
("maintainance & support","/assets/images/services-5.jpg");');
    }
}
