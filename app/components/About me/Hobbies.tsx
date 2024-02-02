/**
 * Represents the "Hobbies" section of the About Me page.
 *
 * This component displays information about the developer's hobbies.
 * It showcases different hobbies, such as coding, playing the guitar, weightlifting, playing videogames,
 * and love for dogs, along with brief descriptions of each hobby.
 *
 * @component
 *
 * @returns {JSX.Element} JSX element representing the "Hobbies" section of the About Me page.
 */
import { useContext } from "react";
import HobbyCard from "./HobbyCard";
import { LanguageContext } from "@/app/page";

function Hobbies() {
  const languageContext = useContext(LanguageContext);

  return (
    <div className="flex flex-col">
      <p className="p-4 text-center text-3xl font-medium sm:text-start">
        {languageContext === "en" ? "Hobbies" : "Pasatiempos"}
      </p>
      <div className="grid-cols1 grid justify-center p-3 md:grid-cols-2">
        <HobbyCard
          imageSrc="/hobbies/programming.png"
          description={
            languageContext === "en"
              ? "I enjoy coding, and I find it both exciting and rewarding. It has become more than just a profession; it's a source of fun and fulfillment for me"
              : "Disfruto programar, y lo encuentro emocionante y gratificante a la vez. Se ha convertido en más que una profesión; es una fuente de diversión y realización para mí"
          }
        />
        <HobbyCard
          imageSrc="/hobbies/guitar.png"
          description={
            languageContext === "en"
              ? "Since the age of 16, I've been passionately playing the guitar and singing. Music has taught me the importance of attentive listening and the art of expressing myself creatively"
              : "Desde los 16 años, toco la guitarra y canto con pasión. La música me ha enseñado la importancia de la escucha atenta y el arte de expresarme creativamente."
          }
        />
        <HobbyCard
          imageSrc="/hobbies/weightlifter.png"
          description={
            languageContext === "en"
              ? "Weightlifting has been a significant part of my life for over 10 years. Through regular exercise, I have developed a disciplined mentality that positively influences other aspects of my life"
              : "El levantamiento de pesas ha sido una parte importante de mi vida durante más de 10 años. A través del ejercicio regular, he desarrollado una mentalidad disciplinada que influye positivamente en otros aspectos de mi vida"
          }
        />
        <HobbyCard
          imageSrc="/hobbies/videogames.png"
          description={
            languageContext === "en"
              ? "Although I don't spend as much time playing videogames nowadays, they hold a special place in my heart. They were once a cherished pastime, and they've contributed to my appreciation for interactive storytelling and problem-solving"
              : "Aunque ya no paso tanto tiempo jugando videojuegos hoy en día, tienen un lugar especial en mi corazón. Antes eran un pasatiempo muy querido, y han contribuido a mi aprecio por la narrativa interactiva y la resolución de problemas."
          }
        />
        <HobbyCard
          imageSrc="/hobbies/dogs.png"
          description={
            languageContext === "en"
              ? "I have a profound love for dogs due to their incredible loyalty. Their companionship and unwavering devotion have brought immeasurable joy into my life"
              : "Tengo un profundo amor por los perros debido a su increíble lealtad. Su compañía y devoción inquebrantable han traído una alegría inconmensurable a mi vida."
          }
        />
      </div>
    </div>
  );
}

export default Hobbies;
