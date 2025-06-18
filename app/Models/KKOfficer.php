<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class KKOfficer extends Model
{
    use HasFactory;

    protected $table = 'kk_officer_table';
    protected $primaryKey = 'officer_id';
    

    protected $fillable = [
        'officer_email',
        'officer_phone',
        'officer_role',
        'officer_status',
    ];

    public function member()
    {
        return $this->belongsTo(KKMember::class, 'member_id', 'member_id');
    }

   
}
