<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\Category;
use App\Models\Listing;
use Illuminate\Http\Request;
use Illuminate\Routing\Route;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;
use Inertia\Inertia;
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
        $listings = Listing::orderBy("created_at", "desc")->get();
        $categories = Category::all();
        if(Auth::guard('admin')->check()){
            $admin = Auth::guard('admin')->user();
            return Inertia::render('Admin/Listings/Index',[
                'listings' => $listings,
                'admin' => $admin,
                'categories' => $categories
            ]);
        }
        
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
            // 'user_id'  => ['required', 'string'],
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
          foreach(request('imageSrc') as $file)
          {
            $imagePath = $file->store('uploads', 'public');
            $image = Image::make(public_path("storage/{$imagePath}"))->fit(1200, 1200); 
            $image->save();
            array_push($imagePaths, $imagePath);
          }


        
          Listing::create([
            'user_id' => $request->input('user_id'),
            'category' => $validated['category'],
            'location' => $validated['location'],
            'imageSrc' => $imagePaths,
            'guestCount' => $validated['guestCount'],
            'roomCount' => $validated['roomCount'],
            'bathroomCount' => $validated['bathroomCount'],
            'title' => $validated['title'],
            'description' => $validated['description'],
            'price' => $validated['price'],

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
        $listing = Listing::find($listing->id);
        
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Listing  $listing
     * @return \Illuminate\Http\Response
     */
    public function edit(Listing $listing)
    {
        $admin = Auth::guard('admin')->user();
        return Inertia::render('Admin/Listings/Edit',[
            'listing' => $listing,
            'admin' => $admin,
            'categories' => Category::all()
        ]);
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
        $validated = $request->validate([
            'user_id'  => 'required',
            'category' => 'required',
            'location' => 'required',
            'guestCount' => 'required',
            'roomCount' => 'required',
            'bathroomCount' => 'required',
            'imageSrc' => 'required|array',
            // 'imageSrc.*' => 'image|mimes:jpeg,png,jpg,gif|max:2048',
            'title' => 'required',
            'description' => 'required',
            'price' => 'required'
        ]);
        
        //   $imagePaths = [];
        //   foreach(request('imageSrc') as $file)
        //   {
        //     $imagePath = $file->store('uploads', 'public');
        //     $image = Image::make(public_path("storage/{$imagePath}"))->fit(1200, 1200); 
        //     $image->save();
        //     array_push($imagePaths, $imagePath);
        //   }


        
          $listing->update([
            'user_id' => $validated['user_id'],
            'category' => $validated['category'],
            'location' => $validated['location'],
            'imageSrc' => request()->input('imageSrc'),
            'guestCount' => $validated['guestCount'],
            'roomCount' => $validated['roomCount'],
            'bathroomCount' => $validated['bathroomCount'],
            'title' => $validated['title'],
            'description' => $validated['description'],
            'price' => $validated['price'],

        ]);
      
        // return to_route('admin.listings.index');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Listing  $listing
     * @return \Illuminate\Http\Response
     */
    public function destroy( Listing $listing)
    {
        
        $listing->delete();
        return response()->json([
          'status' => 200,
          'message'=> "Listing deleted successfully"
        ], 200);

    }
}
