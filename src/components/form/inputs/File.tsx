import { IFileContainer } from '../../../lib/interfaces.ts';
import { useEffect } from 'react';

export function File({ errors, setValue, file, setFile }: IFileContainer) {
  useEffect(() => {
    if (file) {
      setValue('file', file, { shouldValidate: true });
    } else {
      setValue('file', file!, { shouldValidate: false });
    }
  }, [file]);
  return (
    <label>
      <div className="field-name">Upload your photo:</div>
      <div>
        <div className={errors ? 'warning' : 'empty-warning'}>{errors}</div>
        <input
          type="file"
          onChange={(e) => {
            if (e.target.files) setFile(e.target.files[0]);
          }}
        />
      </div>
    </label>
  );
}
