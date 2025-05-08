<?php

namespace App\Http\Controllers\auth;

use App\Http\Controllers\Controller;
use Inertia\Response;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ResetPasswordController extends Controller
{
    public function create():Response
    {
        return Inertia::render('auth/ResetPassword');
    }
}
