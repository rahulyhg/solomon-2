export class Comment {
 	Id: number;
    DFC: string; // Indexed
    DLC: string;
    User: string;
    PO: number;
	RideId: number;
	RidePid: number;// Indexed
	RideDate: string;
	RideTime: string;
	RideToName: string;
	RideFromName: string;
	RideScore: string;
	RideComments: string;
	DriveId: number;
	DrivePid: number; // Indexed
	DriveDate: string;
	DriveTime: string;
	DriveToName: string;
	DriveFromName: string;
	DriveScore: number;
	DriveComments: string;
	Charge: number;

}