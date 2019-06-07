<?php

use Illuminate\Database\Seeder;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //
        \App\User::create([
            "password"=>'123456',
            'email'=>'admin@cubetiq.com',
            "name"=>'cubetiq'
        ]);
    }
}
