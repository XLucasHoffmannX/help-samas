<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;

class AuthController extends Controller
{
    public function store(Request $request){
        /* Validator */
        $validator = Validator::make($request->all(), [
            'name' => 'required|string|max:255',
            'user_name' => 'required|string|max:255|unique:users',
            'email' => 'required|string|max:255|unique:users',
            'password' => 'required|string|min:6',

            'link_url_image' => 'string|max:255',
            'number_whatsapp' => 'required|min:10',
            'bio' => 'string',
            'date_begin' => 'required|string|min:4',
            'district' => 'required|string|max:255',
        ]);

        if($validator->fails()) return response()->json([ 'errors' => $validator->errors() ], 400);

        $user = new User;

        // SECTION data user
        $user->name = $request->name;
        $user->user_name = $request->user_name;
        $user->email = $request->email;
        $user->password = Hash::make($request->password);

        // SECTION aditional data user
        $user->link_url_image = $request->link_url_image;
        $user->number_whatsapp = $request->number_whatsapp;
        $user->bio = $request->bio;
        $user->date_begin = $request->date_begin;
        $user->district = $request->district;
        
        // SECTION save data user
        $user->save();

        if($user->id){
            return response()->json([
                'access_token' => $user->createToken('auth-api')->accessToken
            ], 200);
        }

        return response()->json([
            'error' => 'Erro ao cadastrar usuário!'
        ]);
    }
}
