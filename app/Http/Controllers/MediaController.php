<?php

namespace App\Http\Controllers;
use App\Models\Media;

use Illuminate\Http\Request;

class MediaController extends Controller
{
    public function index(Request $request){
        $medias = Media::all();
        return response()->json(['medias' => $medias]);
    }

    public function store(Request $request){
        // $validator = Validator($request->all(), [

        // ]);
        // //バリデーション:エラー
        // if ($validator->fails()) {
        //         return redirect('/')
        //             ->withInput()
        //             ->withErrors($validator);
        // }
        // // Eloquent モデル
        $media = new Media;
        $media->tournamentName = $request->tournamentName;
        // $media->myTeamName = $request->myTeamName;
        // $media->opponentTeamName = $request->opponentTeamName;
        // $media->firstSetMyCount = $request->firstSetMyCount;
        // $media->firstSetOpponentCount = $request->firstSetOpponentCount;
        // $media->secondSetMyCount = $request->secondSetMyCount;
        // $media->secondSetOpponentCount = $request->secondSetOpponentCount;
        // $media->thirdSetMyCount = $request->thirdSetMyCount;
        // $media->thirdSetOpponentCount = $request->thirdSetOpponentCount;
        // $media->victoryThrowMyCount = $request->victoryThrowMyCount;
        // $media->victoryThrowOpponentCount = $request->victoryThrowOpponentCount;
        // $media->totalMyCount = $request->totalMyCount;
        // $media->totalOpponentCount = $request->totalOpponentCount;
        // $media->content = $request->content;
        // $media->fileName = $request->fileName;
        // $media->filePath = $request->filePath;
        $media->save();   //「/」ルートにリダイレクト
        return redirect('/');
    }
}
