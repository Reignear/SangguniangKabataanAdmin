<?php

use App\Http\Controllers\Dashboard\ListOfYearController;
use App\Http\Controllers\Dashboard\TermYearController;
use App\Http\Controllers\Dashboard\SettingsController;
use Illuminate\Support\Facades\Route;


Route::inertia('/', 'landing/Welcome')-> name('landing.welcome');
  
// Route::middleware(['auth', 'admin'])->group(function () {
    Route::inertia('/dashboard', 'dashboard/Dashboard')->name('dashboard.dashboard');
    Route::inertia('/abyip', 'dashboard/Abyip')->name('dashboard.abyip');
    Route::inertia('/budget', 'dashboard/BudgetMonitoring')->name('dashboard.budget');
    Route::inertia('/attachments','dashboard/Attachments')-> name('dashboard.attachments');
    Route::inertia('/calendar', 'dashboard/Calendar')->name('dashboard.calendar');
    Route::inertia('/activity', 'dashboard/Activity')->name('dashboard.activity');
    Route::inertia('/kkofficers','dashboard/KKOfficers')->name('dashboard.kkofficers');
    Route::inertia('/programs', 'dashboard/Programs')->name('dashboard.programs');
    Route::inertia('/projects', 'dashboard/Projects')->name('dashboard.projects');
    Route::inertia('/reports','dashboard/Reports')->name('dashboard.reports');
    Route::inertia('/settings', 'dashboard/Settings')->name('dashboard.settings');
    
    Route::prefix('/settings')->group(function(){
        Route::get('/profile',[SettingsController::class, 'getProfile'])->name('dashboard.settings.profile');
     
    });
    Route::inertia('/skofficials', 'dashboard/SKOfficials')->name('dashboard.skofficials');
    Route::inertia('/kkprofiling', 'dashboard/KKProfiling')->name('dashboard.kkprofiling');

    Route::prefix('termsofservice')->group(function(){
        Route::get('/',[TermYearController::class, 'index'] )-> name('dashboard.termsofservice');
        Route::post('/', [TermYearController::class, 'storeTerm'])->name('dashboard.termsofservice.create.year');
        Route::get('/allterms', [ListOfYearController::class, 'index'])->name('dashboard.termsofservice.list.year');
        Route::get('/allterms/{term_service_id?}', [ListOfYearController::class, 'create'])->name('dashboard.termsofservice.active.year');
        Route::post('/officials', [TermYearController::class, 'storeOfficial'])->name('dashboard.termsofservice.create.official');
    });

    Route::inertia('/reports/fullreport','dashboard/Report/FullReport')->name('dashboard.fullreport');
        // });

require __DIR__.'/settings.php';
require __DIR__.'/auth.php';
