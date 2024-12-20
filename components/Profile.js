export default function UserProfile({ name, age, favoriteColor, img }) {
  return (
    <>
      <h1>{name}</h1>
      <h2>Age: {age}</h2>
      <h2>Favorite Color: {favoriteColor}</h2>
      <Image src={img} />
    </>
  );
}
