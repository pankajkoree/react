const EnvironmentVariables = () => {
  // console.log(process.env.WEATHERAPPAPI);
  return (
    <>
      <h1 className="relative flex justify-center text-3xl bg-blue-700 text-white p-2">
        Environment Variables
      </h1>
      {process.env.NODE_ENV == "development" ? (
        <h2 className="relative flex justify-center text-xl bg-red-700 text-white p-2">
          Development Mode{" "}
        </h2>
      ) : (
        <h2 className="relative flex justify-center text-xl bg-red-700 text-white p-2">
          Production Mode
        </h2>
      )}
    </>
  );
};

export default EnvironmentVariables;
