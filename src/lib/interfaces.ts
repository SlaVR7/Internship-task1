import { UseFormRegister, UseFormSetValue, UseFormWatch } from 'react-hook-form';
import React from 'react';

export interface ButtonProps {
  text: string;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  onClick?: Function;
  disabled?: boolean;
}

export interface IResolver {
  age: string;
  accept?: boolean;
  name: string;
  email: string;
  password: string;
  gender: NonNullable<'male' | 'female' | undefined>;
  file: File;
  country: string;
  confirmPassword: string;
  bio: string;
}

export interface InputProps {
  fieldName: string;
  register: UseFormRegister<IResolver>;
  errors: string | undefined;
  type?: string;
  setValue: UseFormSetValue<IResolver>;
}

export interface AdditionInputProps {
  validationErrors: string | undefined;
  setValue: UseFormSetValue<IResolver>;
  register: UseFormRegister<IResolver>;
  watch?: UseFormWatch<IResolver>;
}

export interface IFileContainer {
  errors: string | undefined;
  setValue: UseFormSetValue<IResolver>;
  file: File | undefined;
  setFile: React.Dispatch<React.SetStateAction<File | undefined>>;
}

export interface ICountriesContainer {
  errors: string | undefined;
  setValue: UseFormSetValue<IResolver>;
  register: UseFormRegister<IResolver>;
  countries: string[];
}

export interface FormProps {
  setResults: React.Dispatch<React.SetStateAction<Array<IResolver>>>;
}

export interface FilterCountries {
  countries: string[];
  inputValue: string;
  setFilteredCountries: React.Dispatch<React.SetStateAction<Array<string>>>;
}
