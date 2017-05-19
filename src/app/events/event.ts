export class Event {
    Id: number;
    DFC: string; // Indexed
    DLC: string;
    User: string;
    Country: string; // Indexed
	Did: number; // Indexed
	Pid: number; // Indexed
	Fid: number;
	ImgE: number;
	EventName: string; // Indexed
	SearchTerms: string; // Indexed
	Descrip: string;
	Route: number;
	EventDate: string; // Indexed
	StartTime: string;
	EndTime: string;
	SiteName: string;
	Phone: string;
	MapAddress: string;
	Lat: string; // Indexed
	Lng: string; // Indexed
	GeoType: string;
	GeoQual: string;
	GeoSource: number;
	GeoPlaceId: string;
	Website: string;
	Invitation: string;


}