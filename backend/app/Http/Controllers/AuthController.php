<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Cookie;
use Illuminate\Support\Facades\Hash;
use Symfony\Component\HttpFoundation\Response;

class AuthController extends Controller
{
    public function login(Request $request) {
        if (!Auth::attempt($request->only('email', 'password'))) {
            return response([
                'message' => 'Invalid Credentials!'
            ], Response::HTTP_UNAUTHORIZED);
        }

        $user = Auth::user();
        
        $token = $user->createToken('token')->plainTextToken;

        $cookie = cookie('jwt', $token, 60*24); //1 day

        return response([
            'message'=>'Success'
        ])->withCookie($cookie);
    }

    public function user() {
        return Auth::user();
    }

    public function logout() {
        $cookie = Cookie::forget('jwt');

        return response ([
            'message' => 'Success'
        ])->withCookie($cookie);
    }
}
