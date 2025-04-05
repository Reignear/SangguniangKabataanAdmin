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
       Schema::create('official_table', function(Blueprint $table){
        $table ->id('official_id');
        $table ->string('official_name');
        $table ->string('official_gender');
        $table ->string('official_age');
        $table ->string('official_avatar');
        $table->foreignId('address_id')->constrained('address_table', 'address_id')->onDelete('cascade');
        $table ->foreignId('position_id')->constrained('position_table', 'position_id')->onDelete('cascade');
        $table -> timestamps();
       });
    }


    public function down(): void
    {
     Schema::dropIfExists('official_table');
    }
};
