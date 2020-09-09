<?php


namespace App\Traits;

use Illuminate\Database\Eloquent\Model;
use Ramsey\Uuid\Uuid;


trait IdTrait
{
    public static function bootIdTrait()
    {
        static::creating(function (Model $model) {
                $model->id = Uuid::uuid1();
        });
    }

    /**
     * Find a model by its external id.
     *
     * @param  mixed $id
     * @param  array $columns
     *
     * @return static
     */
    public static function findById($id, $columns = ['*'])
    {
        return self::where('id', '=', $id)->first($columns);
    }

}
