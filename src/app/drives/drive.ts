export class Drive {
    Id: number;
    DFC: string; // Indexed
    DLC: string;
    User: string;
    Pid: number;  // Indexed
	Did: number; // Indexed
	SchedId: number; // Indexed
	PO: number;
	Processed: number ;// Indexed
	DriveFromId: number; // Not indexed due to rare use (delete)
	DriveFromName: string;
	DriveFromLat: string;
	DriveFromLng: string;
	DriveToId: number;
	DriveToName: string;
	DriveToLat: string;
	DriveToLng: string;
	DriveDistance: number;
	DriveDuration: number;
	DriveDate: string;
	DriveStartTime: string;
	DriveEndTime: string;
	DriveStart: number; // Indexed
	DriveEnd: number; // Indexed
	DriveMax: number;
	DriveMin: number;
	DriveRate: number;
	DriveFee: number ;
}