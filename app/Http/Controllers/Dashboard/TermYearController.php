<?php

namespace App\Http\Controllers\Dashboard;

use App\Http\Controllers\Controller;
use App\Models\TermYear;
use App\Models\User;
use App\Models\SKOfficials;
use GuzzleHttp\Promise\Create;
use Illuminate\Http\Request;
use Illuminate\Auth\Events\Registered;
use Inertia\Inertia;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\DB;

class TermYearController extends Controller
{

    public function index()
    {
        $activeTermId = TermYear::where('active', true)->value('term_service_id');
        $TermYears = TermYear::orderBy('term_service_id', 'desc')->get();
        $activeTerm = $activeTermId ? $TermYears->firstWhere('term_service_id', $activeTermId)->only(['term_year_start', 'term_year_end']) : [];
        $Officials = $activeTermId ? SKOfficials::where('term_service_id', $activeTermId)->get() : [];
        return Inertia::render('dashboard/TermsOfService',compact('TermYears', 'activeTermId', 'Officials', 'activeTerm'));
    }

    public function storeTerm(Request $request)
    {
        $validated = $request->validate([
            'term_year_start' => 'required|string',
            'term_year_end' => 'required|string|after:term_year_start',
        ]);
        TermYear::query()->update(['active' => false]);
        // Deactivate all existing terms before creating a new one
        $createTerm = TermYear::create([
            'term_year_start' => $validated['term_year_start'],
            'term_year_end' => $validated['term_year_end'],
            'active' => true,  
        ]);
        
       $defaultOfficial = SKOfficials::create([
            'official_firstname' =>     'admin',
            'official_middlename' =>    'admin',
            'official_lastname' =>      'admin',
            'official_position' =>      'admin',
            'official_vote' =>           1,
            'official_precinct' =>      'admin',
            'official_term_elected' =>  '2020-01-01',
            'official_term_ended' =>    '2021-01-01',
            'term_service_id' => $createTerm->term_service_id,
            
            ]);

        $defaultUser = User::updateOrCreate([
            'user_name' => 'admin',
            'user_email' => 'admin@example.com',
            'user_role' => 'admin',
            'user_password' => Hash::make('admin'),
            'official_id' =>$defaultOfficial->official_id,
        ]);
        event(new Registered($defaultUser));
        return redirect()->route('dashboard.termsofservice.years');
    }

    

    public function storeOfficial(Request $request)
    {
        $request->validate
            ([
                'officials'=>'required|array|min:1',
                'officials.*.official_firstname' => 'required|string|max:50',
                'officials.*.official_middlename' => 'required|string|max:50',
                'officials.*.official_lastname' => 'required|string|max:50',
                'officials.*.official_position' => 'required|string|max:50',
                'officials.*.official_vote'=> 'required|numeric|min:0',
                'officials.*.official_precinct' => 'required|string|max:10',
        ]);

            $activeTermId = TermYear::where('active', true)->value('term_service_id');
            
            $requestOfficialIds = collect($request -> officials)
            ->pluck('official_id')
            ->filter()
            ->toArray();
            
            SKOfficials::where('term_service_id', $activeTermId)
                ->whereNotIn('official_id', $requestOfficialIds)
                ->delete();

            foreach ($request->officials as $official) {
                SKOfficials::updateOrCreate(
                    ['official_id' => $official['official_id'] ?? null],
                    [
                        'official_firstname' => $official['official_firstname'],
                        'official_middlename' => $official['official_middlename'],
                        'official_lastname' => $official['official_lastname'],
                        'official_position' => $official['official_position'],
                        'official_vote' => $official['official_vote'],
                        'official_precinct' => $official['official_precinct'],
                        'term_service_id' => $activeTermId,

                ]   
                );
            }
           redirect()->route('dashboard.termsofservice');
     }
}
