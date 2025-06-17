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
        Schema::create('abyip_table',function(Blueprint $table){
            $table->id('abyip_id');
            $table->unsignedInteger('abyip_year');
            $table->unsignedBigInteger('abyip_total_budget');
            $table->unsignedBigInteger('abyip_personal_expense');
            $table->unsignedBigInteger('abyip_mooe');
            $table->unsignedBigInteger('abyip_financial_expenses');
            $table->unsignedBigInteger('abyip_capital_outlay');
            $table->timestamps();

            $table->foreignId('term_service_id')->constrained('term_year_service_table', 'term_service_id')->cascadeOnUpdate()->cascadeOnDelete();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('abyip_table');
    }
};
