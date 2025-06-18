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
      Schema::create('address_table', function(Blueprint $table){
        $table->id('address_id');
        $table->string('address_region');
        $table->string('address_province');
        $table->string('address_city_municipality');
        $table->string('address_barangay');
        $table->string('address_purok');
        $table->string('address_street');
        $table->string('address_zipcode');
        $table->timestamps();
      });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('address_table');
        
    }
};
