<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateIngredientsRecipeAmountsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('ingredients_recipe_amounts', function (Blueprint $table) {
            $table->uuid('recipe_id')->nullable(false);
            $table->foreign('recipe_id')->references('id')->on('recipes');
            $table->uuid('ingredient_id')->nullable(false);
            $table->foreign('ingredient_id')->references('id')->on('ingredients');
            $table->primary(["ingredient_id","recipe_id"]);

            $table->string("amount");
            $table->string("unit")->nullable();

            $table->timestamps();
            $table->softDeletes();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('ingredients_recipe_amounts');
    }
}
