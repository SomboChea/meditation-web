<?php

use Illuminate\Database\Seeder;

class TableReasonsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //
        \Illuminate\Support\Facades\DB::select('INSERT INTO reasons(description,title,icon,summary,user_id) VALUES
("","High Quality Hardware","/storage/icons/hardware.png","We use top-notch hardware to develop the most efficient apps for our customers",1),
("","Dedicated Support","/storage/icons/Support.png","You can rely on our tech support that will gladly solve any app issue you may have",1),
("","We Take Security Seriously","/storage/icons/security.png","The Security of Your money and personal data is our utmost priority",1),
("","Agile and Fast Working Style","/storage/icons/speed.png","This type of approach to our work helps our specialists to quickly develop better apps",1),
("","High Level of Usability","/storage/icons/like.png","All our products have high usability allowing users to easily operate the apps",1),
("","Scalable","/storage/icons/store.png","Meeting the demands of a growing business\, We can quickly deployed in one store as easily as it can be in thousands",1);');
    }
}
