"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import  Select from "react-select";

const GameVerSelect = () => {

  const [options, setOptions] = useState([]);

  useEffect(() => {
    const fetchGames = async () => {
      const response = await fetch(`/api/games`);
      const data = await response.json();

      const options = data.JSON.stringify(data)

      setOptions(options);
    }
  });

  return (
    <section className='w-full max-w-full flex-start flex-col'>
      <h1 className='head_text text-left'>
        <span className='blue_gradient'>{type} Post</span>
      </h1>
      <p className='desc text-left max-w-md'>
        {type} and share control profiles with the world, and let your
        imagination run wild with any AI-powered platform
      </p>

      <form
        onSubmit={handleSubmit}
        className='mt-10 w-full max-w-2xl flex flex-col gap-7 glassmorphism'
      >
        <label>
          <span className='font-satoshi font-semibold text-base text-gray-700'>
            Your AI Prompt
          </span>

          <textarea
            value={post.controlProfile}
            onChange={(e) => setPost({ ...post, controlProfile: e.target.value })}
            placeholder='Write your post here'
            required
            className='form_textarea '
          />
        </label>

        <label>
          <span className='font-satoshi font-semibold text-base text-gray-700'>
            Field of Prompt{" "}
            <span className='font-normal'>
              (#product, #webdevelopment, #idea, etc.)
            </span>
          </span>
          <input
            value={post.tag}
            onChange={(e) => setPost({ ...post, tag: e.target.value })}
            type='text'
            placeholder='#Tag'
            required
            className='form_input'
          />
        </label>

        <label>
          <span className='font-satoshi font-semibold text-base text-gray-700'>
            Game{" "}
            <span className='font-normal'>
              (Star Citizen)
            </span>
          </span>
          <input
            value={post.game}
            onChange={(e) => {

              setPost({ ...post, game: e.target.value })

            }}
            type='text'
            placeholder='Star Citizen 3.19'
            required
            className='form_input'
          />
        </label>

        <label>
          <span className='font-satoshi font-semibold text-base text-gray-700'>
            Game{" "}
            <span className='font-normal'>
              (Star Citizen)
            </span>
          </span>
          <Select
            options={options}
            onChange={(e) => {
              setOptions({ game: e.target.value })
            }}
            value={post.options}
            placeholder="Select an option" />;
          
        </label>




        <div className='flex-end mx-3 mb-5 gap-4'>
          <Link href='/' className='text-gray-500 text-sm'>
            Cancel
          </Link>

          <button
            type='submit'
            disabled={submitting}
            className='px-5 py-1.5 text-sm bg-primary-orange rounded-full text-white'
          >
            {submitting ? `${type}ing...` : type}
          </button>
        </div>
      </form>
    </section>
  );
};

export default GameVerSelect;
