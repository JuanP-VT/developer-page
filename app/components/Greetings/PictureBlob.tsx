/**
 * Represents a React component called PictureBlob.
 * This component renders a div element with a morphing effect and a background image.
 *
 * @returns {JSX.Element} The rendered React element.
 */
export default function PictureBlob() {
  return (
    <div
      className="h-60 w-60 animate-blobMorph border-4 border-x-emerald-100 border-y-blue-200 transition-all
      sm:h-80 sm:w-80 md:h-96 md:w-96"
      style={{
        backgroundImage: 'url("/main-profile-picture.png")',
        backgroundPositionY: "100%",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        borderRadius: " 60% 40% 30% 70%/60% 30% 70% 40%",
      }}
    ></div>
  );
}
