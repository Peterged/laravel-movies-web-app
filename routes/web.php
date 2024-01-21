<?php

use Illuminate\Support\Facades\Route;

Route::view('/', 'index');
Route::view('/movie', 'show');

//! Route::view(... ) IS THE SAME AS THE ONE BELOW
// Route::get('/', function () {
//     return view('welcome');
// });
