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
        Schema::create('players', function (Blueprint $table) {
            $table->id();
            $table->integer('bank_coins');
            $table->integer('coins');
            $table->integer('level');
            $table->integer('xp');
            $table->string('role');
            $table->string('area');
            $table->enum('loyalty_rank', ['silver', 'gold', 'platinum', 'scarlet']);
            $table->integer('weapon');
            $table->integer('armor');
            $table->integer('blessing');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('players');
    }
};
