<?php

namespace App\Http\Controllers;

use App\Models\RentalInfo;
use DateInterval;
use DateTime;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;
use Devfaysal\BangladeshGeocode\Models\Division;
use Devfaysal\BangladeshGeocode\Models\District;
use Devfaysal\BangladeshGeocode\Models\Upazila;

class RentalInfoController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $rental_infos = RentalInfo::orderBy("created_at", "desc")->get();
        
        if(Auth::guard('admin')->check()){
            $admin = Auth::guard('admin')->user();
            return Inertia::render('Admin/RentalInfos/Index',[
                'rental_infos' => $rental_infos,
                'admin' => $admin,
            ]);
        }
        // return Inertia::render('Home',[
        //     'listings' => $listings,
        //     'categories' => $categories
        // ]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        
        $divisions = Division::all();
        $districts = District::all();
        $upazilas = Upazila::all();
        if(Auth::guard('admin')->check()){
            $admin = Auth::guard('admin')->user();
            return Inertia::render('Admin/RentalInfos/Create',[
                        'admin' => $admin,
                        'divisions' => $divisions,
                        'districts' => $districts,
                        'upazilas' => $upazilas,
        
            ]);
        }
        else{
            return Inertia::render('User/RentalInfos/Create', [
                
                'divisions' => $divisions,
                'districts' => $districts,
                'upazilas' => $upazilas,

    ]);
        }
        
        
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        
        $validate = $request->validate([
            'office_name' => ['required', 'string', 'max:255'],
            'type_of_rent' => ['required', 'numeric'],
            'building_type' => 'required',
            'year_of_construction' => 'required', 
            'date_of_starting' => ['required'],
            'floor_space' => ['required', 'numeric'],
            'floor_position' => 'required',
            'rent_per_sqft' => ['required', 'numeric'],
            'tensure_of_lease_aggrement' => ['required', 'numeric'],
            // 'expiry_date_of_aggrement',
            'address' => ['required', 'string', 'max:255'],
            'division' => ['required', 'string', 'max:30'],
            'district' => ['required', 'string', 'max:255'],
            'upazila' => ['required', 'string', 'max:255'],



            // 'longitude',
            // 'latitude',
            // 'status',
        ]);

        // dd($request->date_of_starting);
        $rental_info = new RentalInfo();

        // floor position formatter
        $floor_position = [];
        foreach ($request->floor_position as $item) {
            array_push($floor_position, $item['value']);
        }

        // expiry date formatter
        $dateTime = new DateTime($request->date_of_starting);
        $dateTime->add(new DateInterval('P' . $request->tensure_of_lease_aggrement . 'Y'));
        $formated_expiry_date = $dateTime->format('Y-m-d\TH:i:s.v\Z');


        $rental_info->office_name = $request->office_name;
        $rental_info->previous_name = $request->previous_name;
        $rental_info->type_of_rent = $request->type_of_rent;
        $rental_info->building_type = $request->building_type;
        $rental_info->year_of_construction = $request->year_of_construction;
        $rental_info->date_of_starting = $request->date_of_starting;
        $rental_info->floor_space = $request->floor_space;
        $rental_info->floor_position = $floor_position;
        $rental_info->rent_per_sqft = $request->rent_per_sqft;
        $rental_info->tensure_of_lease_aggrement = $request->tensure_of_lease_aggrement;
        $rental_info->expiry_date_of_aggrement = $formated_expiry_date;
        $rental_info->address = $request->address;
        $rental_info->division = $request->division;
        $rental_info->district = $request->district;
        $rental_info->upazila = $request->upazila;

        $rental_info->longitude = $request->location['lng'];
        $rental_info->latitude = $request->location['lat'];
        $rental_info->status = $request->status;

        $rental_info->save();

        // dd($rental_info);
        return back();
        // if(Auth::guard('admin')->check()){
        //     return to_route('admin.rental-infos.index');
        // }
        // else{
        //     return to_route('home.index');
        // }
        
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show(RentalInfo $rental_info)
    {
        return Inertia::render('Admin/RentalInfos/Details',[
            'rental_info' => $rental_info,
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit(RentalInfo $rental_info)
    {
        
        $divisions = Division::all();
        $districts = District::all();
        $upazilas = Upazila::all();
        return Inertia::render('Admin/RentalInfos/Edit',[
            'rental_info' => $rental_info,
            'divisions' => $divisions,
            'districts' => $districts,
            'upazilas' => $upazilas,
        ]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, RentalInfo $rental_info)
    {
        $validate = $request->validate([
            'office_name' => ['required', 'string', 'max:255'],
            'type_of_rent' => ['required', 'numeric'],
            'building_type' => 'required',
            'year_of_construction' => 'required', 
            'date_of_starting' => ['required'],
            'floor_space' => ['required', 'numeric'],
            'floor_position' => 'required',
            'rent_per_sqft' => ['required', 'numeric'],
            'tensure_of_lease_aggrement' => ['required', 'numeric'],
            // 'expiry_date_of_aggrement',
            'address' => ['required', 'string', 'max:255'],
            // 'longitude',
            // 'latitude',
            // 'status',
        ]);

        $floor_position = [];
        foreach ($request->floor_position as $item) {
            array_push($floor_position, $item['value']);
        }

        // expiry date formatter
        $dateTime = new DateTime($request->date_of_starting);
        $dateTime->add(new DateInterval('P' . $request->tensure_of_lease_aggrement . 'Y'));
        $formated_expiry_date = $dateTime->format('Y-m-d\TH:i:s.v\Z');

        $rental_info->update([
            'office_name' => $request->office_name,
            'previous_name' => $request->previous_name,
            'type_of_rent' => $request->type_of_rent,
            'building_type' => $request->building_type,
            'year_of_construction' => $request->year_of_construction,
            'date_of_starting' => $request->date_of_starting,
            'floor_space' => $request->floor_space,
            'floor_position' => $floor_position,
            'rent_per_sqft' => $request->rent_per_sqft,
            'tensure_of_lease_aggrement' => $request->tensure_of_lease_aggrement,
            'expiry_date_of_aggrement' => $formated_expiry_date,
            'address' => $request->address,
            'longitude' => $request->location['lng'],
            'latitude' => $request->location['lat'],
            'status' => $request->status,

        ]);


    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(RentalInfo $rentalInfo)
    {
        
        $rentalInfo->delete();
        return response()->json([
          'status' => 200,
          'message'=> "This item is deleted successfully"
        ], 200);
    }
}
