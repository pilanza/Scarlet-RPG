<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class player extends Model
{
    use HasFactory;

    protected $fillable = [
        'bank_coins',
        'coins',
        'level',
        'xp',
        'role',
        'area',
        'loyalty_rank',
        'weapon',
        'armor',
        'blessing',
    ];
}
