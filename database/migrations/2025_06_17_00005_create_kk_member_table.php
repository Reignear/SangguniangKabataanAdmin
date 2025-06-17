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
        Schema::create('kk_member_table', function(Blueprint $table){
            $table-> id('member_id');
            $table->string('member_firstname');
            $table->string('member_lastname');
            $table->string('member_middlename')->nullable();
            $table->date('member_birthdate');
            $table->string('member_gender');
            $table->string('member_civil_status');
            $table->timestamps();
            
            $table->foreignId('address_id')->constrained('address_table', 'address_id')->cascadeOnUpdate();
 
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        //
    }
};
