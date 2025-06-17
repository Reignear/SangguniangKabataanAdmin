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
        $table->integer('program_participant')->default(0);
        $table->string('program_status');
        $table->timestamps();

        $table->foreignId('abyip_id')->constrained('abyip_table', 'abyip_id')->noActionOnUpdate()->noActionOnDelete();
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
