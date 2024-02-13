import { Button } from '../components/Button.tsx';

export function ButtonPage() {
  return (
    <div className="page-container">
      <h1 className="title">Button page</h1>
      <p className="page__description">
        The button component changes its color randomly when clicked. You can pass text, classes,
        type, disabled state, and a function through props.
      </p>
      <Button className="my-button" text="Press me" />
    </div>
  );
}
