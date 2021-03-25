<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateMediasTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        if(!Schema::hasTable('medias')){
            Schema::create('medias', function (Blueprint $table) {
                $table->bigIncrements('id');
                $table->string('tournamentName');
                $table->string('myTeamName');
                $table->string('opponentTeamName');
                $table->integer('firstSetMyCount');
                $table->integer('firstSetOpponentCount');
                $table->integer('secondSetMyCount');
                $table->integer('secondSetOpponentCount');
                $table->integer('thirdSetMyCount');
                $table->integer('thirdSetOpponentCount');
                $table->integer('victoryThrowMyCount');
                $table->integer('victoryThrowOpponentCount');
                $table->integer('totalMyCount');
                $table->integer('totalOpponentCount');
                $table->text('content');
                $table->string('fileName');
                $table->string('filePath');
                $table->timestamps();
            });
        }
        
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('medias');
    }
}
