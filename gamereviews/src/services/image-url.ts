const getCroppedUrl = (url: string) => {
  const index = url.indexOf("media/") + "media/".length;
  const newUrl = url.slice(0, index) + "crop/600/400/" + url.slice(index);
  console.log(newUrl);
  return newUrl;
};

export default getCroppedUrl;
