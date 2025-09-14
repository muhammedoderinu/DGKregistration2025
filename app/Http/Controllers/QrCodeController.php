<?php

namespace App\Http\Controllers;

use App\Models\Media;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;
use SimpleSoftwareIO\QrCode\Facades\QrCode;

class QrCodeController extends Controller
{
    public function index(Request $request){
        
        $user = $request->user();

        QrCode::size('300')->generate($user->email, public_path('images/qrcode.svg') );

        DB::beginTransaction();

        $user->update(['attendance_status' => 'Booked']);
        $user->attendanceList()->create();

        DB::commit();

        $media = Media::where('user_id', $user->id)->first();

        // if($user->email_status != 'Sent'){
        //     try{
        //         Notification::send($user, new RegistrationConfirmation($user));
        //         $user->update(['email_status' => 'Sent']);
        //     }catch(ConnectionException $e){
        //         throw new ConnectionException();
        //     }

           
        // }
      
          
        return Inertia::render('qrcode', ['users'=> $user->full_name, 'image' => $media->path]);
        
    }
}
