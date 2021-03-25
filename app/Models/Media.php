<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;


class Media extends Model
{
    use HasFactory;
    protected $fillable = [
        'tournamentName',
        'myTeamName',
        'opponentTeamName',
        'firstSetMyCount',
        'firstSetOpponentCount',
        'secondSetMyCount',
        'secondSetOpponentCount',
        'thirdSetMyCount',
        'thirdSetOpponentCount',
        'victoryThrowMyCount',
        'victoryThrowOpponentCount',
        'totalMyCount',
        'totalOpponentCount',
        'content',
        'fileName',
        'filePath'
    ];
}
