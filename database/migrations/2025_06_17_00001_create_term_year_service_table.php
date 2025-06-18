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
        Schema::create('term_year_service_table', function (Blueprint $table) {
            $table->string('term_service_id', 20)->primary();
            $table->string('term_year_start', 5);
            $table->string('term_year_end', 5);
            $table->boolean('active')->default(false);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('term_year_service_table');
    }
};
