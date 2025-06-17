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
        Schema::create('kk_officer_table', function(Blueprint $table){
            $table->id('officer_id');
            $table->string('officer_email')->unique()->nullable();
            $table->string('officer_phone')->unique()->nullable();
            $table->string('officer_role');
            $table->string('officer_status');
            $table->timestamps();

            $table->foreignId('member_id')->constrained('kk_member_table', 'member_id')->cascadeOnUpdate();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('kk_officer_table');
    }
};
