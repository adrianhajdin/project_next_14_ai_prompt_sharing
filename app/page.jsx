import Feed from "@components/Feed";
import Team from "@sections/team";

const Home = () => (
   <>
  <section className='bg-[url("/assets/images/andalusiaRedRoofs.jpg")]
   bg-cover bg-non repeat
   w-full flex-center flex-col'>
    <h1 className='head_text text-center'>
      Wohntraum
      <br className='max-md:hidden' />
      <span className='orange_gradient text-center'> Andalusien</span>
    </h1>
    <p className='desc text-center'>
 
    </p>

    
  </section>
  <Feed />
  <Team/>
   </>
);

export default Home;
