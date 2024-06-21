<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StorePlayerRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'bank_coins' => 'sometimes',
            'coins' => 'required',
            'level' => 'required',
            'xp' => 'required',
            'role' => 'required',
            'area' => 'required',
            'loyalty_rank' => 'sometimes',
            'weapon' => 'sometimes',
            'armor' => 'sometimes',
            'blessing' => 'sometimes',
        ];
    }
}
