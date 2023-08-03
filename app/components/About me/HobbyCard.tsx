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
