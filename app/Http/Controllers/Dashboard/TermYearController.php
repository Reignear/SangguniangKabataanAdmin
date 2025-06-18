<?php

namespace App\Http\Controllers\Dashboard;

use App\Http\Controllers\Controller;
use App\Models\TermYear;
use App\Models\SKOfficials as Official;
use GuzzleHttp\Promise\Create;
use Illuminate\Http\Request;
use Inertia\Inertia;

class TermYearController extends Controller
{

    public function index()
    {
        $activeTermId = TermYear::where('active', true)->value('term_service_id');
        $TermYears = TermYear::orderBy('term_service_id', 'desc')->get();
        $activeTerm = $activeTermId ? $TermYears->firstWhere('term_service_id', $activeTermId)->only(['term_year_start', 'term_year_end']) : [];
        $Officials = $activeTermId ? Official::where('term_service_id', $activeTermId)->get() : [];
        return Inertia::render('dashboard/TermsOfService',compact('TermYears', 'activeTermId', 'Officials', 'activeTerm'));
    }


    public function listTermYears(){
        $TermYears = TermYear::orderBy('created_at', 'desc')->get();
        return Inertia::render('dashboard/TermsOfService/TermYear', compact('TermYears'));
    }

    public function setActiveTermYear($term_service_id)
    {
        TermYear::query()->update(['active' => false]);
        $termYear = TermYear::find($term_service_id);
        if ($termYear) {
            $termYear->active = true;
            $termYear->save();
        }
        return redirect()->route('dashboard.termsofservice');
    }

    public function createTerm(Request $request)
    {
        $validated = $request->validate([
            'term_year_start' => 'required|string',
            'term_year_end' => 'required|string|after:term_year_start',
        ]);
        TermYear::query()->update(['active' => false]);
        TermYear::create([
            'term_year_start' => $validated['term_year_start'],
            'term_year_end' => $validated['term_year_end'],
            'active' => true,  
        ]);
        return redirect()->route('dashboard.termsofservice.years');
        
    }

    public function store()
    {

    }

    public function show($term_service_id)
    {
        $term_service_id = TermYear::where('term_service_id', $term_service_id)->get();
        $officials = Official::where('term_service_id', $term_service_id)->get();
        return Inertia::render('dashboard/TermsOfService', 
    ['Officials' => $officials, 'TermYear' => $term_service_id]
        );
    }
 
    public function edit()
    {

    }

    public function update()
    {

    }

    public function destroy($id)
    {
        //delete specific record
    }
}
