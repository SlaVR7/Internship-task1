import { ChangeEvent } from 'react';
import { InputProps } from '../../../lib/interfaces.ts';
import { ValidFieldNames } from '../../../lib/types.ts';

export function Input({ fieldName, register, errors, type, setValue }: InputProps) {
  let registerParams = fieldName.toLowerCase() as ValidFieldNames;
  if (fieldName === 'Confirm password') {
    registerParams = 'confirmPassword';
  }

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setValue(registerParams, value, { shouldValidate: true });
  };

  return (
    <label className="form-label">
      <div className="field-name">{fieldName}:</div>
      <div>
        <div className="warning">{errors}</div>
        <input
          className="form-input"
          type={type}
          {...register(registerParams)}
          onChange={handleChange}
        />
      </div>
    </label>
  );
}
