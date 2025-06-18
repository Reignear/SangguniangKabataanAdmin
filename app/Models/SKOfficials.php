<?php

namespace App\Models;


use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;
 

class SKOfficials extends Model
{
    use HasFactory;

    protected $table = 'sk_official_table';
    protected $primaryKey = 'official_id';
    // public $incrementing = false;
    // public $keyType = 'string';

    protected $fillable = [
        'official_firstname',
        'official_lastname',
        'official_middlename',
        'official_birthdate',
        'official_gender',
        'official_position',
        'official_committee',
        'official_vote',
        'official_precinct',
        'official_term_elected',
        'official_term_ended',
    
        'term_service_id',
    ];
    public function address()
    {
        return $this->belongsTo(Address::class, 'address_id', 'address_id');
    }

    // protected static function boot(){
    //     parent::boot();

    //     static::creating(function($model){
    //         if(!$model->official_id){
    //             $latestOfficial = static::orderBy('created_at', 'DESC')->first();
    //             if($latestOfficial){
    //                 $nextId = 1;
    //             }else{
    //                 $lastId = $latestOfficial->official_id;
    //                 $lastNumber = intval(substr($lastId, 9));
    //                 $nextId = $lastNumber + 1;
    //             }
    //             $model->official_id = 'OFFICIAL-' . str_pad($nextId, 3, '0', STR_PAD_LEFT);
    //         }
    //     });
    // }

}
