const fetchImages = async () => {
  let getData = await fetch("https://jsonplaceholder.typicode.com/photos");
  getData = await getData.json();
  return getData;
};

const page = async () => {
  const photos = await fetchImages();

  // function getFullImage() {
  //   photos.map((photo) => {
  //     <img src={photo.url}></img>;
  //   });
  // }
  return (
    <>
      <h1 className="relative flex justify-center text-3xl bg-black text-lime-400 p-4">
        Google Photos
      </h1>
      <div className="relative flex flex-wrap justify-center gap-4 top-2 text-center">
        {photos.map((photo) => (
          <div
            className="relative flex flex-col bg-black text-white mb-2 w-[300px] p-2"
            key={photo.id}
          >
            <h2>Album ID : {photo.albumId}</h2>
            <img src={photo.thumbnailUrl} alt="thumbnail" />
          </div>
        ))}
      </div>
    </>
  );
};

export default page;
