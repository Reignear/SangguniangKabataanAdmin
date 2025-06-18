<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    
    public function up(): void
    {
      Schema::create('activity_table', function(Blueprint $table){
        $table->id('activity_id') ;
        $table->string('activity_title');
        $table->text('activity_description');
        $table->string('activity_participation');
        $table->integer('activity_participants');
        $table->unsignedBigInteger('activity_budget');
        $table->time('activity_from_time'); 
        $table->time('activity_to_time'); 
        $table->date('activity_date');
        $table->string('activity_location'); 
        $table->string('activity_status'); 
        $table->timestamps();

        $table->string('abyip_id');
        $table->foreign('abyip_id')->references('abyip_id')->on('abyip_table')->noActionOnDelete()->noActionOnUpdate();
        
        
        });  
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('activity_table');
    }
};
