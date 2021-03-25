<?php

use Illuminate\Http\Request;
namespace App\Http\Controllers;
use App\Models\Article;

use Illuminate\Http\Request;

class ApiController extends Controller
{
    public function index(Request $request){
        $articles = Article::all();
        return response()->json(['articles' => $articles]);
    }

    public function store(Request $request){
        $validator = Validator($request->all(), [
            'title' => 'required',
            'category' => 'required',
            'content' => 'required'
        ]);
        //バリデーション:エラー
        if ($validator->fails()) {
                return redirect('/')
                    ->withInput()
                    ->withErrors($validator);
        }
        // Eloquent モデル
        $article = new Article;
        $article->title = $request->title;
        $article->category = $request->category;
        $article->content = $request->content;
        $article->save();   //「/」ルートにリダイレクト
        return redirect('/');
    }
}

