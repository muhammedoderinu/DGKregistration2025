<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Support\Facades\Storage;

class Media extends Model
{
    use HasFactory;

    protected $fillable =[
        'path',
        'disk',
        'description',
        'user_id'
    ];

    protected static function booted()
    {
        static::creating(fn (Media $model) => $model->disk ??= 'public');

        static::deleting(fn (Media $model) => $model->deleteMedia());
    }

    public function user():BelongsTo{
        
        return $this->belongsTo(User::class);
    }

    protected function url(): Attribute
    {
        return Attribute::get(fn () => filter_var($this->path, FILTER_VALIDATE_URL) ? $this->path : Storage::disk($this->disk)->url($this->path));
    }

    protected function deleteMedia(): bool
    {
        return (bool) $this->disk && Storage::disk($this->disk)->delete($this->path);
    }
}
