<?php

namespace Database\Seeders;

use Carbon\Carbon;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class ListingSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('listings')->insert([
                'images' => [
                  'https://img.freepik.com/free-photo/dining-area-comfortable-studio-flat-hotel-room_1262-12324.jpg?size=626&ext=jpg&ga=GA1.2.1275373934.1687177377&semt=sph',
                  'https://img.freepik.com/free-photo/living-room-with-blue-couch-white-wall-with-painting-it_1340-23237.jpg?size=626&ext=jpg&ga=GA1.2.1275373934.1687177377&semt=sph',
                  'https://img.freepik.com/free-photo/beautiful-shot-modern-house-kitchen-dining-room_181624-2870.jpg?size=626&ext=jpg&ga=GA1.2.1275373934.1687177377&semt=sph'
                ],
                'title' => 'Loft in Center City',
                'subtitle' => "Carolyn's Loft",
                'guestCount' => 2,
                'bedroomCount' => 1,
                'beds' => 2,
                'bathroomCount' => 1,
                'price' => 2000,
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now()
            ]);
    }
}
