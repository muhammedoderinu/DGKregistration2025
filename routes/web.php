<?php

use App\Http\Controllers\ImageUploadController;
use App\Http\Controllers\ParticipantTagController;
use App\Http\Controllers\UserLoginController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::post('upload/index',[ImageUploadController::class, 'index'])->name('upload.index');
Route::get('/', [UserLoginController::class, 'index']);
Route::post('/user/login', [UserLoginController::class, 'store']);
Route::get('tag',[ParticipantTagController::class, 'index']);
Route::post('/profile-upload', [ImageUploadController::class, 'store']);
