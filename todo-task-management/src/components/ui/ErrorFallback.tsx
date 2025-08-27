import { ErrorFallbackProps } from "../../types/ui";

const ErrorFallback = ({ error }: ErrorFallbackProps) => {
  return (
    <div className="p-4 bg-red-100 text-red-700 shadow">
      <h2 className="font-bold text-lg">
        There was a problem running the program!
      </h2>
      <p className="mt-2">Please contact support if the problem persists.</p>
      <p className="mt-3 text-xs text-gray-600">
        Error code: <span className="font-mono">{error.message}</span>
      </p>
    </div>
  );
};

export default ErrorFallback;
