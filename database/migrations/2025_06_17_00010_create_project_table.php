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

      
            $table->string('abyip_id');
            $table->foreign('abyip_id')->references('abyip_id')->on('abyip_table')->noActionOnDelete()->noActionOnUpdate();
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
