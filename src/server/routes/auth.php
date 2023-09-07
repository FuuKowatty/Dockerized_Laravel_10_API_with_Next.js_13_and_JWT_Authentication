<?php

use App\Http\Controllers\Auth\JwtAuthController;
use Illuminate\Support\Facades\Route;

Route::post('/register', [JwtAuthController::class, 'register'])
    ->name('register');

Route::post('/login', [JwtAuthController::class, 'login'])
    ->name('login');

Route::post('/refresh', [JwtAuthController::class, 'refresh'])
    ->name('refresh');

Route::middleware('auth:api')->group(function () {
    Route::post('/logout', [JwtAuthController::class, 'logout'])
        ->name('logout');
});
