<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class QRScanController extends Controller
{
    //<?php
    public function index()
    {
       return Inertia::render('QRScan');
    }
}


