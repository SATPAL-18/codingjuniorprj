export interface FormData {
    name: string;
    email: string;
    street: string;
    city: string;
    zipcode: string;
  }
  
  export interface FormErrors {
    name?: string;
    email?: string;
    street?: string;
    city?: string;
    zipcode?: string;
  }