<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;
 
class KKMember extends Model
{
    use HasFactory;

    protected $table = 'kk_member_table';
    protected $primaryKey = 'member_id';

    protected $fillable = [
        'member_firstname',
        'member_lastname',
        'member_middlename',
        'member_birthdate',
        'member_gender',
        'member_civil_status',
    ];

    public function address()
    {
        return $this->belongsTo(Address::class, 'address_id', 'address_id');
    }

    
}
