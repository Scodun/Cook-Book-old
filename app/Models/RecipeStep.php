<?php

namespace App\Models;

use App\Traits\IdTrait;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

/**
 * Cook-Book\App\User
 *
 */
class RecipeStep extends Model
{
    use SoftDeletes,IdTrait;

    protected $table = 'recipe_steps';
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'id',
        'recipe_id',
        'step',
        'text',
        'title'
    ];

    public function recipe()
    {
        return $this->belongsTo(Recipe::class, 'recipe_id');
    }
}
