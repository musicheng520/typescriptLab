
export interface Friend {
  name: string;
  phone: string;
  dob?: Date;          // optional
  age: number;
  interests?: string[]; // optional
}

export interface Colleague {
    name: string;
    department: string;
    contact: {
      email: string;
      extension: number
    } 
  }

export interface ColleagueHistory {
  current: Colleague[],
  former: Colleague[]
}

export interface EmailContact {
    name: string;
    email: string
}
