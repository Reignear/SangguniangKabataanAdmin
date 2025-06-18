<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
      Schema::create('program_table', function(Blueprint $table){
        $table->id('program_id');
        $table->string('program_name');
        $table->text('program_description');
        $table->string('program_participation');
        $table->unsignedBigInteger('program_budget');
        $table->date('program_start_date');
        $table->integer('program_duration_value');
        $table->string('program_duration_unit');
        $table->string('program_status');
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
        Schema::dropIfExists('program_table');
    }
};
