<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class UserLoginController extends Controller
{
    public function index()
    {
        
        return Inertia::render('UserLogin');
    }

    public function store(Request $request )
    {

        $request->validate([
            'email' => 'required|email|exists:users,email'
        ]);
        $user = User::where('email', $request->email)->first();

        Auth::login($user);
     
        return Inertia::render('Upload');
       
    }
}
