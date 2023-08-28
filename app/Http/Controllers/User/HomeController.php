<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use App\Models\Category;
use App\Models\Home;
use App\Models\Listing;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class HomeController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $listings = Listing::orderBy("created_at", "desc")->get();
        $categories = Category::all();
        // if($listings->count() > 0){
        //     return response()->json([
        //         'status' => 200,
        //         'listings'=> $listings
        //     ], 200);
        // }
        // else{
        //     return response()->json([
        //         'status' => 404,
        //         'message'=> "No records found"
        //     ], 404);
        // }
        return Inertia::render('User/Home',[
            'listings' => $listings,
            'categories' => $categories
        ]);
    }

    public function show_listing( $id)
    {
        $listing = Listing::find($id);
        $posted_by = User::find($listing->user_id);
        return Inertia::render('User/Listings/Details',[
            'listing' => $listing,
            'posted_by' => $posted_by
        ]);
        
    }

    public function rental_form()
    {
        // if(Auth::check())
        // {
            return Inertia::render('User/RentalInfos/Create');
        // }
        
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Home  $home
     * @return \Illuminate\Http\Response
     */
    public function show(Home $home)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Home  $home
     * @return \Illuminate\Http\Response
     */
    public function edit(Home $home)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Home  $home
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Home $home)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Home  $home
     * @return \Illuminate\Http\Response
     */
    public function destroy(Home $home)
    {
        //
    }
}
