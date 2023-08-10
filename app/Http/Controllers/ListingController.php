<?php

namespace App\Http\Controllers;

use App\Models\Listing;
use Illuminate\Http\Request;
use Intervention\Image\Facades\Image;

class ListingController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        // $listings = Listing::all();
        // dd($listings);
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
        $validated = $request->validate([
            'category' => 'required',
            'location' => 'required',
            'guestCount' => 'required',
            'roomCount' => 'required',
            'bathroomCount' => 'required',
            'imageSrc' => 'required|array',
            'imageSrc.*' => 'image|mimes:jpeg,png,jpg,gif|max:2048',
            'title' => 'required',
            'description' => 'required',
            'price' => 'required'
        ]);

    
        
        $imagePaths = [];
        foreach(request('imageSrc') as $file){
            
            $imagePath = $file->store('uploads', 'public');
            $image = Image::make(public_path("storage/{$imagePath}"))->fit(1200, 1200); 
            $image->save();
            array_push($imagePaths, $imagePath);

        }
        
        

        Listing::create([
            'category' => $validated['category'],
            'location' => $validated['location'],
            'imageSrc' => $imagePaths,
            'guestCount' => $validated['guestCount'],
            'roomCount' => $validated['roomCount'],
            'bathroomCount' => $validated['bathroomCount'],
            'title' => $validated['title'],
            'description' => $validated['description'],
            'price' => $validated['price']
        ]);

    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Listing  $listing
     * @return \Illuminate\Http\Response
     */
    public function show(Listing $listing)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Listing  $listing
     * @return \Illuminate\Http\Response
     */
    public function edit(Listing $listing)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Listing  $listing
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Listing $listing)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Listing  $listing
     * @return \Illuminate\Http\Response
     */
    public function destroy(Listing $listing)
    {
        //
    }
}