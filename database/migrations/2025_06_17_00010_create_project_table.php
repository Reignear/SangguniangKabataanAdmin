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
     schema::create('project_table', function(Blueprint $table){
            $table->id('project_id');
            $table->string('project_name');
            $table->text('project_description')->nullable();
            $table->string('project_participation');
            $table->unsignedBigInteger('project_budget');
            $table->date('project_finish_date');
            $table->string('project_status');
            $table->integer('project_completion_rate');
            
            $table->timestamps();

            $table->foreignId('abyip_id')->constrained('abyip_table', 'abyip_id')->noActionOnUpdate()->noActionOnDelete();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('project_table');
    }
};
