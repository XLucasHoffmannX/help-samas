<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Http\Requests\UserCreateRequest;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class AuthController extends Controller
{
    public function store(UserCreateRequest $request){
        $user = new User;

        $user = $user->create($request->only(
            'name',
            'user_name',
            'email',
            'link_url_image',
            'number_whatsapp',
            'bio',
            'date_begin',
            'district'
        ) + ["password" => Hash::make($request->password)]);

        // SECTION auth-api
        if($user->id){
            return response()->json([
                'access_token' => $user->createToken('auth-api')->accessToken
            ], 200);
        }

        return response()->json([
            'error' => 'Erro ao cadastrar usuário!'
        ], 401);
    }
}
