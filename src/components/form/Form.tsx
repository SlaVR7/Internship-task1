import { countries } from '../../lib/constants/countries.ts';
import { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { FormProps, IResolver } from '../../lib/interfaces.ts';
import { defaultInputsValues } from '../../lib/defaultInputValues.ts';
import { validationSchema } from '../../services/validationSchema.ts';
import { Input } from './inputs/Input.tsx';
import { Gender } from './inputs/Gender.tsx';
import { Accept } from './inputs/Accept.tsx';
import { File } from './inputs/File.tsx';
import { Country } from './inputs/Country.tsx';
import { Bio } from './inputs/Bio.tsx';
import { Button } from '../Button.tsx';

export function Form({ setResults }: FormProps) {
  const [file, setFile] = useState<File>();
  const {
    register,
    setValue,
    watch,
    handleSubmit,
    formState: { errors, isValid, isDirty },
    reset,
  } = useForm<IResolver>({
    mode: 'onChange',
    resolver: yupResolver(validationSchema(countries)),
    defaultValues: defaultInputsValues,
  });

  const onSubmit: SubmitHandler<IResolver> = (data: IResolver): void => {
    setResults((prevState) => [...prevState, data]);
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Input
        fieldName="Name"
        register={register}
        errors={errors.name?.message}
        type="text"
        setValue={setValue}
      />
      <Input
        fieldName="Age"
        register={register}
        errors={errors.age?.message}
        type="text"
        setValue={setValue}
      />
      <Input
        fieldName="Email"
        register={register}
        errors={errors.email?.message}
        type="email"
        setValue={setValue}
      />
      <Input
        fieldName="Password"
        register={register}
        errors={errors.password?.message}
        type="password"
        setValue={setValue}
      />
      <Input
        fieldName="Confirm password"
        register={register}
        errors={errors.confirmPassword?.message}
        type="password"
        setValue={setValue}
      />
      <Bio fieldName="Bio" register={register} errors={errors.bio?.message} setValue={setValue} />
      <Country
        errors={errors.country?.message}
        setValue={setValue}
        register={register}
        countries={countries}
      />
      <Gender validationErrors={errors.gender?.message} register={register} setValue={setValue} />
      <Accept
        validationErrors={errors.accept?.message}
        register={register}
        setValue={setValue}
        watch={watch}
      />
      <File errors={errors.file?.message} setValue={setValue} file={file} setFile={setFile} />
      <Button text="Submit" type="submit" disabled={!isDirty || !isValid} />
    </form>
  );
}
