import Feed from "@components/Feed";

const Home = () => (
   <>
  <section className='bg-[url("/assets/images/andalusiaVillage".png)]
   bg-cover bg-non repeat
   w-full flex-center flex-col'>
    <h1 className='head_text text-center'>
      Wohntraum
      <br className='max-md:hidden' />
      <span className='orange_gradient text-center'> Andalusien</span>
    </h1>
    <p className='desc text-center'>
      Wir erfüllen Ihre Immobilie in Andalusien
    </p>

    
  </section>
  <Feed />
   </>
);

export default Home;
