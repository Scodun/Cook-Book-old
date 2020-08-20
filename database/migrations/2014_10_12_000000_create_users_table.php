<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateUsersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('users', function (Blueprint $table) {
            $table->char('id',32)->primary();
            $table->string('forename');
            $table->string('surname');
            $table->string('email')->unique();
            $table->string('password');
            $table->boolean('verified')->default(0);
            $table->string('about')->nullable();
            $table->string('avatar')->nullable();
            $table->boolean('recipes_public')->default(true);
            $table->boolean('is_admin')->default(0);
            $table->rememberToken();
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
        Schema::dropIfExists('users');
    }
}
