/**
 * Represents a card displaying information about a specific hobby.
 *
 * This component displays an image related to the hobby along with a brief description.
 * It is used within the "Hobbies" section of the About Me page.
 *
 * @component
 *
 * @param {Object} Props - The props for the HobbyCard component.
 * @param {string} Props.imageSrc - The URL or path of the image representing the hobby.
 * @param {string} Props.description - A brief description of the hobby.
 * @returns {JSX.Element} JSX element representing a card displaying information about a specific hobby.
 */
import Image from "next/image";
type Props = {
  imageSrc: string;
  description: string;
};

function HobbyCard({ imageSrc, description }: Props) {
  return (
    <div className="flex flex-col items-center p-2 sm:flex-row sm:items-start">
      <Image
        src={imageSrc}
        alt="Hobby"
        width={200}
        height={200}
        className="h-24 w-24"
      />
      <div className="w- flex p-2 font-medium md:max-w-xl">{description}</div>
    </div>
  );
}

export default HobbyCard;
