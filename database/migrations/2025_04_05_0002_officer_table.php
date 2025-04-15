<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    
    public function up(): void
    {
        Schema::create('officer_table', function (Blueprint $table){
            $table->id('officer_id');
            $table->string('officer_name');
            $table->string('officer_gender');
            $table->string('officer_age');
            $table->string('officer_image');
            $table->foreignId('address_id')->constrained('address_table', 'address_id')->onDelete('cascade');
            $table->foreignId('position_id')->constrained('position_table', 'position_id')->onDelete('cascade');
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('officer_table');
    }
};
