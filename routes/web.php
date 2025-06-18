<?php

use App\Http\Controllers\Dashboard\TermYearController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::inertia('/', 'landing/Welcome')-> name('landing.welcome');

// Route::middleware(['auth', 'verified'])->group(function () {
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
    Route::inertia('/skofficials', 'dashboard/SKOfficials')->name('dashboard.skofficials');
    Route::inertia('/kkprofiling', 'dashboard/KKProfiling')->name('dashboard.kkprofiling');

    Route::prefix('termsofservice')->group(function(){
        Route::get('/',[TermYearController::class, 'index'] )-> name('dashboard.termsofservice');
        Route::get('/allterms', [TermYearController::class, 'listTermYears'])->name('dashboard.termsofservice.years');
        Route::get('/{term_service_id?}', [TermYearController::class, 'setActiveTermYear'])->name('dashboard.termsofservice.active.year');
        Route::post('/create/year', [TermYearController::class, 'createTerm'])->name('dashboard.termsofservice.create.year');
    });

    Route::inertia('/reports/fullreport','dashboard/Report/FullReport')->name('dashboard.fullreport');
// });

require __DIR__.'/settings.php';
require __DIR__.'/auth.php';
