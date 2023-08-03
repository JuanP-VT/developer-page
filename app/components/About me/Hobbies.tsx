import HobbyCard from "./HobbyCard";

function Hobbies() {
  return (
    <div className="flex flex-col">
      <p className="p-4 text-center text-3xl font-medium sm:text-start">
        Hobbies
      </p>
      <div className="grid-cols1 grid justify-center p-3 md:grid-cols-2">
        <HobbyCard
          imageSrc="/hobbies/programming.png"
          description="I enjoy coding, and I find it both exciting and rewarding. It has become more than just a profession; it's a source of fun and fulfillment for me."
        />
        <HobbyCard
          imageSrc="/hobbies/guitar.png"
          description="Since the age of 16, I've been passionately playing the guitar and singing. Music has taught me the importance of attentive listening and the art of expressing myself creatively."
        />
        <HobbyCard
          imageSrc="/hobbies/weightlifter.png"
          description="Weightlifting has been a significant part of my life for over 10 years. Through regular exercise, I have developed a disciplined mentality that positively influences other aspects of my life."
        />
        <HobbyCard
          imageSrc="/hobbies/videogames.png"
          description="Although I don't spend as much time playing videogames nowadays, they hold a special place in my heart. They were once a cherished pastime, and they've contributed to my appreciation for interactive storytelling and problem-solving."
        />
        <HobbyCard
          imageSrc="/hobbies/dogs.png"
          description="I have a profound love for dogs due to their incredible loyalty. Their companionship and unwavering devotion have brought immeasurable joy into my life."
        />
      </div>
    </div>
  );
}

export default Hobbies;
