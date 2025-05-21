<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::inertia('/', 'landing/Welcome')-> name('landing.welcome');

// Route::middleware(['auth', 'verified'])->group(function () {
    Route::inertia('/dashboard', 'dashboard/Dashboard')->name('dashboard.dashboard');
    Route::prefix('/abyip')->group(function(){
        Route::inertia('/overview', 'dashboard/Abyip/Overview')->name('dashboard.abyip.overview');
        Route::inertia('/participation', 'dashboard/Abyip/Participation')->name('dashboard.abyip.participation');
        Route::inertia('/comparison', 'dashboard/Abyip/YearComparison') ->name('dashboard.abyip.comparison');
        Route::inertia('/details-breakdown', 'dashboard/Abyip/DetailsBreakdown') ->name('dashboard.abyip.breakdown');
    });
   Route::inertia('/budget', 'dashboard/BudgetMonitoring')->name('dashboard.budget');
    Route::inertia('/attachments','dashboard/Attachments')-> name('dashboard.attachments');
    Route::inertia('/calendar', 'dashboard/Calendar')->name('dashboard.calendar');
    Route::inertia('/events', 'dashboard/Events')->name('dashboard.events');
    Route::inertia('/kkofficers','dashboard/KKOfficers')->name('dashboard.kkofficers');
    Route::inertia('/programs', 'dashboard/Programs')->name('dashboard.programs');
    Route::inertia('/projects', 'dashboard/Projects')->name('dashboard.projects');
    Route::inertia('/reports','dashboard/Reports')->name('dashboard.reports');
    Route::inertia('/settings', 'dashboard/Settings')->name('dashboard.settings');
    Route::inertia('/skofficials', 'dashboard/SKOfficials')->name('dashboard.skofficials');
    Route::inertia('/kkprofiling', 'dashboard/KKProfiling')->name('dashboard.kkprofiling');
    Route::inertia('/termsofservice','dashboard/TermsOfService')->name('dashboard.termsofservice');
// });

require __DIR__.'/settings.php';
require __DIR__.'/auth.php';
