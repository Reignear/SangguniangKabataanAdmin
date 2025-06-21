<?php

namespace App\Http\Controllers\Dashboard;

use App\Http\Resources\AddressCollection;
use App\Http\Controllers\Controller;
use App\Models\TermYear;
use Illuminate\Http\Request;
use Inertia\Inertia;

class SettingsController extends Controller
{
    
    public function getProfile()
    {
        $regions = json_decode(file_get_contents(storage_path(). "/app/addresses/refregion.json"), true)['RECORDS'];
        $provinces = json_decode(file_get_contents(storage_path(). "/app/addresses/refprovince.json"), true)['RECORDS'];
        $cityMunicipality = json_decode(file_get_contents(storage_path(). "/app/addresses/refcitymun.json"), true)['RECORDS'];  

        return Inertia::render('dashboard/Settings', [
            'addressData' => [
                'regions' => $regions,
                'provinces' => $provinces,
                'cityMunicipality' => $cityMunicipality,
            ]
        ]);
    }

    public function getAddress(Request $request)
    {
    
    
    }
}
