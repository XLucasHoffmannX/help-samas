<?php

use App\Http\Controllers\Auth\AuthController;
use App\Http\Controllers\User\UserController;
use Illuminate\Support\Facades\Route;


// SECTION user
Route::group(['prefix' => 'user'], function(){
    Route::get('/', [UserController::class, 'get']);

    Route::post('/register', [AuthController::class, 'store']);
});