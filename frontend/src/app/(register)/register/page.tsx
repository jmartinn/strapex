"use client"
import ContactInformationForm, { ContactInformation } from "@/components/contactInformationForm";
import { useState } from "react";



export default function Register(){

    const [contactInformation, setContactInformation] = useState<ContactInformation | null>(null);

    return(
        <div className="w-full flex-col items-center justify-center">
        <div className="flex flex-col items-center justify-center h-screen space-y-4">
            <ContactInformationForm setContactInformation={setContactInformation} contactInformation={contactInformation as ContactInformation} handleNextClick={()=>{}}/>
        </div>
        </div>
    )
}
