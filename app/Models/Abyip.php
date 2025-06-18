<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;
 
class Abyip extends Model
{
    use HasFactory;

    protected $table = 'abyip_table';
    protected $primaryKey = 'abyip_id';
    protected $keyType = 'string';
    public $incrementing = false;

    protected $fillable = [
        'abyip_year',
        'abyip_total_budget',
        'abyip_personal_expenses',
        'abyip_mooe',
        'abyip_financial_expenses',
        'abyip_capital_outlay',
        
    ];
    public function termService()
    {
        return $this->belongsTo(TermYear::class, 'term_service_id', 'term_service_id');
    }
    protected static function boot()
    {
        parent::boot();
        
        static::creating(function($model){
            if(!$model->abyip_id){
                $model->abyip_id = 'ABYIP-'.$model->abyip_year;
            }
        });
    }
}
