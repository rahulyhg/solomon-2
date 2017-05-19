export class Schedule {
    Id: number;
    DFC: string; // Indexed
    DLC: string;
    User: string;
    Did: number;
	Pid: number;
	RT: number;
	LastRun: string;
	PO: number;
	SchedFromId: number;
	SchedToId: number;
	Distance: number;
	Duration: number;
	Extra: number;
	Weight: number;
	M: number;
	T: number;
	W: number;
	Th: number;
	F: number;
	Sa: number;
	Su: number;
	StartTime: string;
	EndTime: string;
	DriveMin: number;
	DriveMax: number;
	DriveRate: number;
	DriveFee: number;
	DriveCost: number;
}