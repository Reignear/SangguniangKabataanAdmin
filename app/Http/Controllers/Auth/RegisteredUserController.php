<?php

namespace App\Http\Controllers\Auth;

use App\Models\User;
use Inertia\Inertia;
use Inertia\Response;
use App\Models\SKOfficials;
use Illuminate\Http\Request;
use Illuminate\Validation\Rules;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Http\RedirectResponse;
use Illuminate\Auth\Events\Registered;
use Illuminate\Validation\ValidationException;

class RegisteredUserController extends Controller
{
    /**
     * Show the registration page.
     */
    public function create(): Response
    {
        return Inertia::render('auth/register');
    }

    /**
     * Handle an incoming registration request.
     *
     * @throws \Illuminate\Validation\ValidationException
     */
    public function store(Request $request)
    {
        $request->validate([
            'official_firstname' =>     'required|string|max:50',
            'official_middlename' =>    'required|string|max:50',
            'official_lastname' =>      'required|string|max:50',
            'official_position' =>      'required|string|max:50',
            'official_vote' =>          'required|numeric',
            'official_precinct' =>      'required|string|max:50',
            'user_name'=>               'required|string|max:50',
            'user_email' =>             'required|email|max:50',
            'user_password' =>          ['required', 'confirmed', Rules\Password::defaults()],

        ]);
     
        $skOfficial = SKOfficials::where([
            'official_firstname' =>     $request->official_firstname,
            'official_middlename' =>        $request->official_middlename,
            'official_lastname' =>      $request->official_lastname,
            'official_position' =>      $request->official_position,
            'official_vote' =>          $request->official_vote,
            'official_precinct' =>      $request->official_precinct,
        ])->first();

        if(!$skOfficial){
          throw ValidationException::withMessages([
            'official' => 'The official does not exist. Please register the official first.'
          ]);
        }

           $user = User::create([
              'user_name' =>            $request->user_name,
              'user_email' =>           $request->user_email,
              'user_password' =>        Hash::make($request->user_password),
              'official_id' =>          $skOfficial->official_id
           ]);
 
        event(new Registered($user));
        return redirect()->route('login')->with('success', 'Registration successful! You can now log in.');
    }
}
