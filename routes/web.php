<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::inertia('/', 'landing/Welcome')-> name('landing.welcome');
Route::inertia('/about', 'landing/AboutUs')-> name('landing.about');
Route::inertia('/Contact', 'landing/Contact')-> name('landing.contact');



// Route::middleware(['auth', 'verified'])->group(function () {
    Route::inertia('/dashboard', 'dashboard/Dashboard')->name('dashboard.dashboard');
    Route::inertia('/dashboard/abyip', 'dashboard/Abyip')->name('dashboard.abyip');
    Route::inertia('/dashboard/attachments','dashboard/Attachments')-> name('dashboard.attachments');
    Route::inertia('/dashboard/calendar', 'dashboard/Calendar')->name('dashboard.calendar');
    Route::inertia('/dashboard/events', 'dashboard/Events')->name('dashboard.events');
    Route::inertia('/dashboard/kkofficers','dashboard/KKOfficers')->name('dashboard.kkofficers');
    Route::inertia('/dashboard/programs', 'dashboard/Programs')->name('dashboard.programs');
    Route::inertia('/dashboard/projects', 'dashboard/Projects')->name('dashboard.projects');
    Route::inertia('/dashboard/reports','dashboard/Reports')->name('dashboard.reports');
    Route::inertia('/dashboard/settings', 'dashboard/Settings')->name('dashboard.settings');
    Route::inertia('/dashboard/skofficials', 'dashboard/SKOfficials')->name('dashboard.skofficials');
    Route::inertia('/dashboard/ termsofservice','dashboard/TermsOfService')->name('dashboard.termsofservice');
// });

require __DIR__.'/settings.php';
require __DIR__.'/auth.php';
