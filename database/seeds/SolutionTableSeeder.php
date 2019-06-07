<?php

use Illuminate\Database\Seeder;

class SolutionTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //
        \Illuminate\Support\Facades\DB::select(
            'INSERT INTO solution(title,icon,user_id) VALUES
("Restaurant","/storage/icons/restaurant.png",1),
("CAFE","/storage/icons/cafe_1.png",1),
("Hotel","/storage/icons/hotel.png",1),
("Apartment & Condo","/storage/icons/Condo_1.png",1),
("School","/storage/icons/school.png",1),
("Clinic","/storage/icons/heart.png",1),
("Retail & Wholesale","/storage/icons/retail_1.png",1),
("Vehicles Dealerships","/storage/icons/car.png",1),
("Electronic Store","/storage/icons/electronic.png",1),
("Gym & Sports Club","/storage/icons/gym.png",1),
("Spa & Salon","/storage/icons/spa2.png",1),
("Pawn Shop","/storage/icons/pawnshop.png",1),
("Loan","/storage/icons/loan.png",1),
("Money Exchange","/storage/icons/money%20transfer_1.png",1),
("Production","/storage/icons/production_1.png",1);');
    }
}
