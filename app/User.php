<?php

namespace App;

use App\Models\Recipe;
use App\Traits\IdTrait;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Passport\HasApiTokens;

/**
 * Cook-Book\App\User
 *
*/
class User extends Authenticatable
{
    use Notifiable, SoftDeletes, IdTrait, HasApiTokens;

    protected $table = 'users';
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'id',
        'username',
        'email',
        'password',
        "forename",
        "surname",
        "verified",
        "about",
        "avatar",
        "recipes_public",
        "is_admin"
    ];

    protected $primaryKey = 'id';
    public $incrementing = false;


    public function getAuthIdentifier()
    {
        return $this->id;
    }
    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password', 'remember_token',
    ];

    /**
     * The attributes that should be cast to native types.
     *
     * @var array
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];

    public function Recipes()
    {
        return $this->hasMany(Recipe::class);
    }
}
