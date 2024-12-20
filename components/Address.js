function Address({ number, street, city, state, zip }) {
  return (
    <div>
      <p>
        {number} {street}
      </p>
      <p>
        {city}, {state} {zip}
      </p>
    </div>
  );
}

export default Address;
