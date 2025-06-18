<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Activity extends Model
{
    use HasFactory;

    protected $table = 'activity_table';
    protected $primaryKey = 'activity_id';
    protected $keyType = 'string';
    public $incrementing = false;

    protected $fillable = [
        'activity_title',
        'activity_description',
        'activity_participation',
        'activity_participants',
        'activity_budget',
        'activity_from_time',
        'activity_to_time',
        'activity_location',
        'activity_status',
    ];

    public function abyip()
    {
        return $this->belongsTo(Abyip::class, 'abyip_id', 'abyip_id');
    }
}
