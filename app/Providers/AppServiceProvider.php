<?php

namespace App\Providers;

use App\Base\FirebaseStorageInterface;
use App\Base\FirestoreInterface;
use App\Base\Implement\FirebaseStorageRepository;
use App\Base\Implement\FirestoreRepository;
use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        //
        $this->app->bind(FirestoreInterface::class,FirestoreRepository::class);
        $this->app->bind(FirebaseStorageInterface::class,FirebaseStorageRepository::class);

    }

    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
        //
    }
}
