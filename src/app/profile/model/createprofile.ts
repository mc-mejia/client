import { Bank } from "./bank";
import { Beneficiary } from "./beneficiary";
import { Education } from "./education";
import { Experience } from "./experience";
//mirrors CustomerAccount from backend
//name unchanged for time
export class CreateProfile {

    // company: string;
    // website: string;
    // location: string;
    // skills: string;
    // githubusername: string;
    // bio: string;
    // twitter: string;
    // facebook: string;
    // youtube: string;
    // linkedin: string;
    // instagram: string;
    // experience: Experience[];
    // education: Education[];
 
    dob:string;
    username: string;
    question: string;
    answer: string;
    ssn: string;
    phoneNo: string;
    status: string;
    banks: Bank[];
    ben: Beneficiary[];
    user: any;
    approved:boolean = true;
    password: string;
    password2: string;
  }
