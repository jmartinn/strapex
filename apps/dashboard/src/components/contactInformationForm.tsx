import React, { useState } from 'react';
import PhoneInput from 'react-phone-number-input';
import { TextField, Callout, Button } from '@radix-ui/themes';
import { InfoCircledIcon } from '@radix-ui/react-icons';

interface ContactInformationProps {
  setContactInformation: (contactInformation: ContactInformation) => void;
  contactInformation: ContactInformation;
  handleNextClick: () => void;
}

export interface ContactInformation {
  name: string;
  surname: string;
  phoneNumber: string ;
  email: string;
}

export default function ContactInformationForm({
  contactInformation,
  setContactInformation,
  handleNextClick,
}: ContactInformationProps) {
  const [error, setError] = useState('');

  const handleChange = (field: keyof ContactInformation, value: string) => {
    const updatedContactInfo = {
      ...contactInformation,
      [field]: value,
    } as ContactInformation;
    setContactInformation(updatedContactInfo);
  };

  const handleInternalNextClick = () => {
    if (!contactInformation?.name || !contactInformation?.surname || !contactInformation?.phoneNumber || !contactInformation?.email) {
      setError('All fields are required and must be correctly formatted.');
    } else {
      setError('');
      handleNextClick();
    }
  };

  return (
    <div className="space-y-4">
      <div className="flex flex-col md:flex-row space-y-4 md:space-x-4 md:space-y-0 justify-between">
        <TextField.Root
          type="text"
          placeholder="Name"
          value={contactInformation?.name || ''}
          onChange={(e) => handleChange('name', e.target.value)}
          required
          size="3"
          className=""
        />
        <TextField.Root
          type="text"
          placeholder="Surname"
          value={contactInformation?.surname || ''}
          onChange={(e) => handleChange('surname', e.target.value)}
          required
          size="3"
        />
      </div>
      <PhoneInput
        placeholder="Enter phone number"
        value={contactInformation?.phoneNumber as any || ''}
        onChange={(value) => handleChange('phoneNumber', value || '')}
        required
        className="w-full p-2 border border-gray-300 rounded"
      />
      <TextField.Root
        type="email"
        placeholder="Email"
        value={contactInformation?.email || ''}
        onChange={(e) => handleChange('email', e.target.value)}
        size="3"
        className="w-full"
      />
      {error && (
        <Callout.Root color="red">
          <Callout.Icon>
            <InfoCircledIcon />
          </Callout.Icon>
          <Callout.Text>
            {error}
          </Callout.Text>
        </Callout.Root>
      )}
      <Button onClick={handleInternalNextClick} className="w-full bg-neutral-800 text-white px-6 py-3 rounded font-semibold hover:bg-gray-600" size="3">
        Next
      </Button>
    </div>
  );
}