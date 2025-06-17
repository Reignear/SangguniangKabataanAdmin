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
        Schema::create('sk_official_table', function(Blueprint $table){
            $table->id('official_id');
            $table->string('official_firstname');
            $table->string('official_lastname');
            $table->string('official_middlename')->nullable();
            $table->date('official_birthdate');
            $table->string('official_gender');
            $table->string('official_position');
            $table->string('official_committee')->nullable();
            $table->unsignedInteger('official_vote');
            $table->char('official_precinct', 10);
            $table->date('official_term_elected');
            $table->date('official_term_ended');
            $table->timestamps();

            $table->foreignId('address_id')->constrained('address_table', 'address_id')->cascadeOnUpdate();
            $table->foreignId('term_service_id')->constrained('term_year_service_table', 'term_service_id')->cascadeOnUpdate();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('sk_official_table');
        
        // Note: Foreign keys will be automatically dropped when the table is dropped.
    }
};
