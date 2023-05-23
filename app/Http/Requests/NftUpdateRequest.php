<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class NftUpdateRequest extends FormRequest
{
    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, Rule|array|string>
     */

    public function rules(): array
    {
        return [
            'name' => 'required|string|min:3|max:255',
            'description' => 'string|max:2000',
            'price' => 'required|numeric',
            'image' => 'required|image|mimes:png,jpg,jpeg,webp|max:10256',
            'category_id' => 'required',
            'auction_date'=>'required|date'
        ];
    }

}
