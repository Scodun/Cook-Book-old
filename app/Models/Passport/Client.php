<?php
namespace App\Models\Passport;

use Laravel\Passport\Client as OAuthClient;
class Client extends OAuthClient
{
    /**
     * Indicates if the IDs are auto-incrementing.
     *
     * @var bool
     */
    public $incrementing = false;

}
