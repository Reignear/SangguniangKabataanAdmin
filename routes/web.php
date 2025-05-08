<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::inertia('/', 'landing/Welcome')-> name('landing.welcome');



// Route::middleware(['auth', 'verified'])->group(function () {
    Route::inertia('/dashboard', 'dashboard/Dashboard')->name('dashboard.dashboard');
    Route::inertia('/abyip', 'dashboard/Abyip')->name('dashboard.abyip');
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
    Route::inertia('/ termsofservice','dashboard/TermsOfService')->name('dashboard.termsofservice');
// });

require __DIR__.'/settings.php';
require __DIR__.'/auth.php';
