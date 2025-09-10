<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
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

        return Inertia::render('Upload');
       
    }
}
