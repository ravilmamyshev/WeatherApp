export function ErrorMessage({ message }: { message: string }) {
  return (
    <p className="error-message text-center text-red-700 py-2">{message}</p>
  );
}
