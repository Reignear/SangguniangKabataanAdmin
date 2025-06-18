<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Concerns\HasUuids;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Ramsey\Uuid\Uuid; 

class TermYear extends Model
{
    use HasFactory;
    
    protected $table = 'term_year_service_table';
    protected $primaryKey ='term_service_id';
    public $incrementing = false;
    public $keyType = 'string';

    protected $fillable = [
        'term_year_start',
        'term_year_end',
    ];    
     
    public function abyip()
    {
        return $this->hasMany(Abyip::class, 'term_service_id', 'term_service_id');
    }
    
    protected static function boot()
    {
        parent::boot();
        
        static::creating(function($model){
            if(!$model->term_service_id){
                $model->term_service_id = 'YEAR-'.$model->term_year_start.$model->term_year_end;
            }
        });
    }

}
