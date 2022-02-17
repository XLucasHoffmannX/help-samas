<?php

namespace Database\Seeders;

use Illuminate\Support\Str;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;
use Faker\Generator as Faker;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run(Faker $faker)
    {
        // SECTION create one user
        \App\Models\User::factory(1)->create([
            'name' => $faker->name,
            'user_name' => $faker->unique()->userName(),
            'link_url_image' => $faker->imageUrl($width= 200, $height = 200),
            'number_whatsapp' => $faker->phoneNumber(),
            'bio' => Str::random(20)." -> bio it's here",
            'date_begin' => $faker->date(),
            'district' => $faker->country(),

            'password' => Hash::make('123456'),
        ]);
    }
}
