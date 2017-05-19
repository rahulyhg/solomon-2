export class Output {
   Id: number;
   DFC: string; // Indexed
   DLC: string;
   User: string;
   Admin: number;
   Did: number; // Indexed
   Pid: number; // Indexed
   Lang: string;
   PidDFC: number;
   OutputType: string; // Indexed
   Trys: number; // Indexed left in  for traditional server back compat
   Sent: number; // Indexed
   Delay: number;
   Email: string;
   MatchPid: number;
   TripDate: string;
   FromName: string;
   ToName: string;
   CellDom: string;
   M_Phone: string;
   RunId: number;
   CellValid: string;
   RD: number;
   RDId: number;
   RDDFC: string;
}
