import { AdditionInputProps } from '../../../lib/interfaces.ts';

export function Accept({ validationErrors, register, setValue, watch }: AdditionInputProps) {
  return (
    <div className="accept-container">
      <div className={validationErrors ? 'warning' : 'empty-warning'}>{validationErrors}</div>
      <label className="accept-label" htmlFor="accept">
        <div className="field-name">Accept T&C:</div>
        <input
          {...(register && register('accept'))}
          className="accept-input"
          type="checkbox"
          name="accept"
          id="accept"
          onClick={() => {
            if (setValue && watch) setValue('accept', !watch('accept'), { shouldValidate: true });
          }}
        />
      </label>
    </div>
  );
}
