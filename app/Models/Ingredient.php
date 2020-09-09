<?php

namespace App\Models;

use App\Traits\IdTrait;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

/**
 * Cook-Book\App\User
 *
 */
class Ingredient extends Model
{
    use SoftDeletes, IdTrait;
    public $incrementing = false;

    protected $table = 'ingredients';
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'id',
        'ingredient_name',
        'amount',
        'unit',
        'recipe_id'
    ];

    public function recipe()
    {
        return $this->belongsTo(Recipe::class, 'recipe_id');
    }
}
