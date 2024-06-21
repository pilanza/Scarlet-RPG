<?php

namespace App\Http\Controllers;

use App\Http\Requests\StorePlayerRequest;
use App\Http\Requests\UpdatePlayerRequest;
use App\Models\Player;
use Illuminate\Http\Request;

class PlayerController extends Controller
{
    private Player $player;

    public function __construct(Player $player)
    {
        $this->player = $player;
    }

    public function index(Request $request)
    {

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
