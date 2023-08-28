<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Listing extends Model
{
    use HasFactory;

    protected $fillable = [
        'user_id',
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

    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
