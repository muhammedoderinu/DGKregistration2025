<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class ParticipantTagController extends Controller
{
    public function index()
    {
        return Inertia::render('ParticipantTag');
    }
}
