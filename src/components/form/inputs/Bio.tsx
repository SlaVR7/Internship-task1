import { InputProps } from '../../../lib/interfaces.ts';
import { ChangeEvent } from 'react';
import { ValidFieldNames } from '../../../lib/types.ts';

export function Bio({ fieldName, register, errors, setValue }: InputProps) {
  const registerParams = fieldName.toLowerCase() as ValidFieldNames;

  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const value = e.target.value;
    setValue(registerParams, value, { shouldValidate: true });
  };

  return (
    <label className="form-label">
      <div className="field-name">{fieldName}:</div>
      <div>
        <div className="warning">{errors}</div>
        <textarea className="form-bio" {...register(registerParams)} onChange={handleChange} />
      </div>
    </label>
  );
}
