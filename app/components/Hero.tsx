import React from "react";
import Button from "./Button";
import Image from "next/image";

const Hero = () => {
  return (
    <section
    className="relative padding-container flex flex-col gap-20 py-10 pb-32 md:gap-28 lg:py-20 xl:flex-row"
    style={{
     backgroundColor:'#FBEECA'
    }}
  >
    
      <div className="" />
      <div className="relative z-20 flex flex-1 gap-3 flex-col xl:w-1/2">
      
        <h1 className="bold-52 lg:bold-78">
          Association pour l'intégration des personnes handicapées
        </h1>

        <p className="regular-16 mt-6 text-gray-30 xl:max-w-[520px]">
        Notre organisme à comme mission de contribuer au développement du plein potentiel et
         augmenter le pouvoir d'agir de personnes en situation de handicap et issues de l'immigration,
          en favorisant leur inclusion dans la société d'accueil.
        </p>

        <div className="flex flex-col w-full gap-4 sm:flex-row">
          <Button type="button" title="Download App" variant="btn_green" />
          <Button
            type="button"
            title="Learn more"
            icon="/play.svg"
            variant="btn_dark_green"
          />
        </div>
      </div>
      

      <div className="relative flex flex-1 items-start " >
    
          <Image
        src='/hero.jpg'
        alt="fache"
        width={500}
        height={350}
        className="inline-block mt-28 hidden xl:block"
      />
					
             
					
			
      </div>
    </section>
  );
};

export default Hero;