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
            'description' => 'nullable|string|max:2000',
            'image' => 'nullable|url',
            'header_image' => 'nullable|url',
            'price' => 'numeric|min:0',
            'category_id' => 'required'
        ];
    }

}
