<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;
 
class Program extends Model
{
    use HasFactory;

    protected $table = 'program_table';
    protected $primaryKey = 'program_id';
    // protected $keyType = 'string';
    // public $incrementing = false;

    protected $fillable = [
        'program_name',
        'program_description',
        'program_participation',
        'program_budget',
        'program_start_date',
        'program_duration_value',
        'program_duration_unit',
        'program_status',
    ];
    public function abyip()
    {
        return $this->belongsTo(Abyip::class, 'abyip_id', 'abyip_id');
    }
}
