<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Http\UploadedFile;
use Inertia\Inertia;

class ImageUploadController extends Controller
{
    public function index()
    {
        return Inertia::render('Upload');
    }

    public function store(Request $request)
    {
        $request->validate([
            'avatar' => 'required|image|file|max:5000',
            
        ]);

       
        if ($request->hasFile('avatar')) {
            $user = $request->user();
            $user ??= auth()->user();

            $disk = User::mediaDisk();
            $image = $request->file('avatar');

            if ($image instanceof UploadedFile) {
                $image = $image->storePublicly(User::mediaDir(), $disk);
            }


            $user->avatarImage()->updateOrCreate(['description' => 'avatar'], [
                'path' => $image,
                'disk' => $disk,        
            ]);

            $imagePath = asset('storage/'.$image);

           
        }

        return Inertia::render('ParticipantTag', ['imagePath'=> $imagePath]);

    }
}
