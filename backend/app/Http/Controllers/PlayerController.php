<?php

namespace App\Http\Controllers;

use App\Models\player;
use App\Http\Requests\StoreplayerRequest;
use App\Http\Requests\UpdateplayerRequest;

class PlayerController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreplayerRequest $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(player $player)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(player $player)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateplayerRequest $request, player $player)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(player $player)
    {
        //
    }
}
