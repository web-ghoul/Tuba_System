// Define the Claim type
export interface ClaimItem {
    id: number;
    description: string;
    amount: number;
  }
  
  export interface ClaimActivity {
    id: number;
    date: string; // ISO 8601 format date
    activity: string;
  }
  
  export interface Claim {
    id: number;
    name: string;
    description: string;
    status: 'Approved' | 'Pending' | 'Rejected'; // You can adjust statuses
    createdAt: string; // ISO 8601 format
    items: ClaimItem[];
    activities: ClaimActivity[];
  }
  