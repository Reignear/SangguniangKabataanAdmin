<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{

    public function up(): void
    {
    Schema::create('user_table', function(Blueprint $table){
        $table -> id('user_id');
        $table -> string ('email')->unique();
        $table -> string ('password')->unique();
        $table -> foreignId('official_id')-> constrained('official_table', 'official_id')->onDelete('cascade');
        $table -> timestamp('account_created');
        $table ->rememberToken();
    });
    }

    public function down(): void
    {
    Schema::dropIfExists('user_table');
    }
};
