<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Clients extends Model
{
    //
    public function scopeActive($query)
    {
        return $query->where('status', 1);
    }
}
