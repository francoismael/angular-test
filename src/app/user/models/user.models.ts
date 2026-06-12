export interface Setting {
  id: number;
  key: string;
  value: string;
}

export interface Company {
  id: number;
  Settings: Setting[];
}

export interface Role {
  id: number;
  name: string;
}

export interface User {
  id: number;
  code: string;
  name: string;
  email: string;
  enabled: boolean;
  Companies: Company[];
  Roles: Role[];
}