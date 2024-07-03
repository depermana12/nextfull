"use client";

type Props = {
  error: Error;
  reset: () => void;
};

const ErrorPage = ({ error, reset }: Props) => {
  console.log("cought error: ", error);
  return (
    <>
      <p>An unexpected error has occured</p>
      <button className="btn" onClick={() => reset()}>
        Retry
      </button>
    </>
  );
};
export default ErrorPage;
