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
        Schema::create('users_table', function (Blueprint $table) {
            $table->id('user_id');
            $table->string('user_name');
            $table->string('user_avatar')->nullable();
            $table->string('user_email');
            $table->string('user_password');
            $table->timestamps();

            $table->foreignId('official_id')->nullable('sk_official_table', 'official_id');
        });
         
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('users_table');
       
        
        // Note: Foreign keys will be automatically dropped when the table is dropped.
    }
};
