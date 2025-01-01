// user interface. role only admin and resident
export interface Resident {
    id: string;
    name: string;
    houseNo: number;
    phoneNo: string;
}

export interface ResidentResponseDto {
    id: string;
    name: string;
    phoneNo: string;
    role: Role;
}


export type Role = "Admin" | "Resident";

export interface PaginationResponse<T> {
    data: T[];
    total: number;
    pageNumber: number;
    sizeLimit: number;
}

export interface Admin {
    username: string;
    password: string;
}

