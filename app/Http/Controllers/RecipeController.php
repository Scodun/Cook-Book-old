<?php

namespace App\Http\Controllers;


use App\Models\Ingredient;
use App\Models\Recipe;
use App\Models\RecipeStep;
use App\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Log;

class RecipeController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        Auth::shouldUse("user");
    }

    public function getAllForUser(Request $request){
        return User::findById(Auth::user()->id)->recipes;
    }

    public function imageAdd(Request $request){
        $filename = time().'.'.$request->file->getClientOriginalExtension();
        $request->file->move(public_path('images'), $filename);
        return $filename;
    }

    public function create(Request $request){
        $data = $request->all();
        /* @var $recipe \App\Models\Recipe */
        $recipe = Recipe::create([
            'user_id' => Auth::user()->id,
            'name' => array_key_exists('name',$data)?$data['name']:"",
            'description' => array_key_exists('description',$data)?$data['description']:"",
            'difficulty' => array_key_exists('difficulty',$data)?$data['difficulty']:0
        ]);
        Log::debug($recipe->id);
        foreach (array_key_exists('ingredients',$data)?$data['ingredients']:[] as $item){
            Ingredient::create([
                "recipe_id"=>$recipe->id,
                "ingredient_name"=>array_key_exists('ingredient',$item)?$item['ingredient']:"",
                "amount"=>array_key_exists('amount',$item)?$item['amount']:"",
                "unit"=>array_key_exists('unit',$item)?$item['unit']:""
            ]);
        }
        $i=0;
        foreach (array_key_exists('steps',$data)?$data['steps']:[] as $item){
            RecipeStep::create([
                "recipe_id"=>$recipe->id,
                "title"=>array_key_exists('title',$item)?$item['title']:"",
                "text"=>array_key_exists('text',$item)?$item['text']:"",
                "step"=>$i
            ]);
            $i++;
        }

        return $recipe;
    }
}
