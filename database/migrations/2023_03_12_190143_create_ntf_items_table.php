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
        Schema::create('nft_items', function (Blueprint $table) {
            $table->id();
            $table->string('name', 64);
            $table->string('description', 1024);
            $table->string('image', 128);
            $table->string('header_image', 128);
            $table->decimal('price', 18, 2, true);
            $table->foreignId('creator_id')->constrained()->onDelete('cascade');
            $table->foreignId('category_id')->constrained()->onDelete('cascade');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('nft_items');
    }
};
