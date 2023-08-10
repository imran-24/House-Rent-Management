<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Listing extends Model
{
    use HasFactory;

    protected $fillable = [
        'category',
        'location' ,
        'guestCount',
        'roomCount',
        'bathroomCount',
        'imageSrc' ,
        'description',
        'price',
        'title',
    ];

    protected $casts = [
        'location' => 'object',
        'imageSrc' => 'array'
    ];
}
