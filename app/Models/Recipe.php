<?php

namespace App\Models;

use App\Traits\IdTrait;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

/**
 * Cook-Book\App\User
 *
 */
class Recipe extends Model
{
    use SoftDeletes, IdTrait;

    protected $table = 'recipes';
    public $incrementing = false;
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'id',
        'user_id',
        'name',
        'description',
        "difficulty",
        "rating",
        "additional_information",
        "public",
    ];

    public function RecipeSteps()
    {
        return $this->hasMany(RecipeStep::class);
    }
    public function Ingredients()
    {
        return $this->hasMany(Ingredient::class);
    }
}
