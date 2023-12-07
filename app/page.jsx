"use client";

import Feed from "@components/Feed";
import GameVerDropdown from "@components/GameVerDropdown";
import HatUp from '@components/Device_VKB_SpaceEvo';
import ActionTable from '@app/editor/ActionTable.jsx'
const Home = () => (
  <section className='w-full flex-center flex-col'>
    <h1 className='head_text text-center'>
      Discover & Share
      <br className='max-md:hidden' />
      <span className='orange_gradient text-center'> AI-Powered Prompts</span>

    </h1>
    <p className='desc text-center'>
      Promptopia is an open-source AI prompting tool for modern world to
      discover, create and share creative prompts
    </p>

    <Feed />
    <GameVerDropdown/>
    <HatUp/>
    <ActionTable/>
  </section>
);

export default Home;
