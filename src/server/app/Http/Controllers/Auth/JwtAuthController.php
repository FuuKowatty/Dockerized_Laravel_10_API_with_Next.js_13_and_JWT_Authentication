<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Http\Requests\LoginUserRequest;
use App\Http\Requests\RegisterUserRequest;
use App\Http\Resources\UserResource;
use App\Models\User;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Auth;

class JwtAuthController extends Controller
{
    /**
     * Register a new user and return an access token.
     */
    public function register(RegisterUserRequest $request): JsonResponse
    {
        $credentials = $request->validated();

        User::create([
            'name' => $credentials['name'],
            'email' => $credentials['email'],
            'password' => bcrypt($credentials['password']),
        ]);

        return response()->json([
            'status' => 'user-created'
        ]);
    }

    /**
     * Authenticate a user and return an access token.
     */
    public function login(LoginUserRequest $request): JsonResponse
    {
        $credentials = collect($request->validated())->only(['email', 'password'])->toArray();
        $token = Auth::attempt($credentials);

        if (!$token) {
            return response()->json([
                'status' => 'wrong-credentials'
            ], 401);
        }

        return response()->json([
            'user' => new UserResource(Auth::user()),
            'access_token' => $token,
        ]);
    }

    /**
     * Log out the currently authenticated user (invalidate the token).
     */
    public function logout(): Response
    {
        Auth::logout();
        return response()->noContent();
    }

    /**
     * Refresh the currently authenticated user's access token.
     */
    public function refresh(): JsonResponse
    {
        $token = Auth::refresh();
        return response()->json([
            'access_token' => $token
        ]);
    }
}
