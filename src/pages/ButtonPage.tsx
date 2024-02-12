import { Button } from '../components/Button.tsx';

export function ButtonPage() {
  return (
    <div className="page-container">
      <h1 className="title">Button page</h1>
      <p>This button generates a random color when pressed</p>
      <Button className="my-button" text="Press me" />
    </div>
  );
}
