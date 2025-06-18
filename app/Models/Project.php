<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Project extends Model
{
    use HasFactory;

    protected $table = 'project_table';
    protected $primaryKey = 'project_id';
    // protected $keyType = 'string';
    // public $incrementing = false;

    protected $fillable = [
        'project_name',
        'project_description',
        'project_participation',
        'project_budget',
        'project_finish_date',
        'project_status',
        'project_completion_rate',
    
    ];

    public function abyip()
    {
        return $this->belongsTo(Abyip::class, 'abyip_id', 'abyip_id');
    }

    // public static function boot()
    // {
    //     parent::boot();
    //     // Automatically generate project_id if not provided
    //     static::creating(function($model){
    //         if(!$model->project_id){
    //             $latestProject = static::orderBy('created_at', 'DESC')->first();
    //             if($latestProject){
    //                 $nextId = 1;
    //             }else{
    //                 $lastId = $latestProject->project_id;
    //                 $lastNumber = intval(substr($lastId, 9));
    //                 $nextId = $lastNumber + 1;
    //             }
    //             $model->project_id = 'PROJ-' . str_pad($nextId, 3, '0', STR_PAD_LEFT);

    //         }
    //     });
    // }
}
