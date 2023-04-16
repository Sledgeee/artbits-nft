<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class AuctionBetCreateRequest extends FormRequest
{
    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, Rule|array|string>
     */

    public function rules(): array
    {
        return [
            'value' => 'required|numeric',
            'auction_id' => 'required|numeric'
        ];
    }

}
