export class Ride {
    Id: number;
    DFC: string; // Indexed
    DLC: string;
    User: string;
    Did: number; // Indexed
	Pid: number; // Indexed
	SchedId: number; // Indexed
	Processed: number; // Indexed
	PO: number;
	RideFromId: number;
	RideFromName: string;
	RideFromLat: string;
	RideFromLng: string;
	RideToId: number;
	RideToName: string;
	RideToLat: string;
	RideToLng: string;
	RideDistance: number;
	RideDuration: number;
	RideDate: string;
	RideStartTime: string;
	RideEndTime: string;
	RideStart: number; // Indexed
	RideEnd: number; // Indexed
	Weight: number;


}