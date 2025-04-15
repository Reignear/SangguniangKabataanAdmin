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
        Schema::create('task_table', function(Blueprint $table){
            $table -> id('task_id');
            $table -> string('task_title');
            $table -> text('task_description');
            $table ->date('tast_duedate');
            $table ->unsignedBigInteger('assigned_to');
            $table ->unsignedBigInteger('assigned_by');
            $table -> boolean('completed');
            $table -> timestamp('created_at');
            $table -> foreignId('assigned_to') ->references('user_id')->on('user_table')->onDelete('cascade');
            $table -> foreignId('assigned_by') ->references('user_id')->on('user_table')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('task_table');
    }
};
