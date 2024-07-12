export default function Map() {
  return (
    <div>
      <div className="px-10 pt-12">
        <iframe
          src="https://maps.google.com/maps?q=Dhaka&t=&z=13&ie=UTF8&iwloc=&output=embed"
          className="left-0 top-0 h-[500px] w-full rounded-t-lg lg:rounded-tr-none lg:rounded-bl-lg"
        ></iframe>
      </div>
    </div>
  );
}
