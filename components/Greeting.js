export default function Greeting({ name, weather }) {
  return (
    <>
      <h1>
        Hello, {name}! It is {weather ? weather : "Who Knows the temp"} today.
      </h1>
    </>
  );
}
