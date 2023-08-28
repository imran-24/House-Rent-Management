<?php

use App\Http\Controllers\Admin\HomeController as AdminHomeController;
use App\Http\Controllers\AdminController;
use App\Http\Controllers\CategoryController;
use App\Http\Controllers\ListingController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\RentalInfoController;
use App\Http\Controllers\User\HomeController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/


// Route::get('/dashboard', function () {
//     return Inertia::render('Dashboard');
// })->middleware(['auth', 'verified'])->name('dashboard');



Route::group([
    // 'prefix' => 'user',
    'as' => 'user.',
    'namespace' => 'User',
], function () {
    Route::get('/', [HomeController::class, 'index'])->name('home.index');
    Route::get('/profile', [ProfileController::class, 'index'])->name('profile.index');
    Route::get('/listings/{id}', [HomeController::class, 'show_listing'])->name('listings.show')->middleware('auth');
    Route::get('/rental-infos/create', [RentalInfoController::class, 'create'])->name('rental-infos.create')->middleware('auth');
    Route::post('/rental-infos/store', [RentalInfoController::class, 'store'])->name('rental-infos.store')->middleware('auth');
});

// Route::resource('listings', ListingController::class);

// admin routes

    Route::prefix('admin')->name('admin.')->group(function(){
    Route::get('login', [AdminController::class, 'create'])->name('login');
    Route::post('login', [AdminController::class, 'store'])->name('login.store');
    Route::get('dashboard', [AdminController::class, 'index'])->name('dashboard')
    ->middleware('admin');
    Route::post('logout', [AdminController::class, 'logout'])->name('logout')
    ->middleware('admin');  
    Route::post('/logout', [AdminController::class, 'logout'])->name('logout')
    ->middleware('admin');  
    Route::resource('listings', ListingController::class)
    ->middleware('admin');
    Route::resource('rental-infos', RentalInfoController::class)->middleware('admin');
    Route::get('categories', [CategoryController::class, 'index'])->name('categories.index')->middleware('admin');
    Route::post('categories', [CategoryController::class, 'store'])->name('categories.store')->middleware('admin');
    Route::put('/categories/{id}', [CategoryController::class, 'update'])->name('categories.update')->middleware('admin');
    Route::delete('/categories/{id}', [CategoryController::class, 'destroy'])->name('categories.destroy')->middleware('admin');

});



Route::middleware('auth')->group(function () {


    // Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    // Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    // Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
