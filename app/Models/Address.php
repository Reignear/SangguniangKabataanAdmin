<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
class Address extends Model
{
    use HasFactory;

    protected $table = 'address_table';
    protected $primaryKey = 'address_id';

    protected $fillable = [
        'address_region',
        'address_province',
        'address_city_munipality',
        'address_barangay',
        'address_purok',
        'address_street',
        'address_zipcode',
    ];

    /**
     * Get the officials associated with the address.
     */
    public function officials()
    {
        return $this->hasMany(SKOfficials::class, 'address_id');
    }
}
