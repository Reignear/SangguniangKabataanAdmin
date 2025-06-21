<?php

namespace App\Http\Controllers\Dashboard;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\TermYear;
use Inertia\Inertia;

class ListOfYearController extends Controller
{
    public function index(){
        $TermYears = TermYear::orderBy('created_at', 'desc')->get();
        return Inertia::render('dashboard/TermsOfService/TermYear', compact('TermYears'));
   
    }

    public function create($term_service_id){
        TermYear::query()->update(['active' => false]);
        $termYear = TermYear::find($term_service_id);
        $termYear ? ($termYear-> active = true) && $termYear->save() : null;
        return redirect()->route('dashboard.termsofservice');
    }
}
