export class Run {
    Id: number;
    DFC: string; // Indexed
    DLC: string;
    User: string;
    DriveId: number; // Indexed
	RideId: number; // Indexed
	DrivePid: number; // Indexed
	RidePid: number; // Indexed
	DriveDate: string; // Indexed
	RideDate: string;
	DriveTime: string;
	RideTime: string;
	DriveFromName: string;
	RideFromName: string;
	DriveToName: string;
	RideToName: string;
	DriveScore: number; // Indexed
	RideScore: number; // Indexed
	DriveComments: string;
	RideComments: string;
	PO: number;
	Charge: number;
}