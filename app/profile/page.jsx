"use client";

import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Profile from "@components/UserProfile";
import GameVerDropdown from "@components/GameVerDropdown";

const MyProfile = () => {
  const router = useRouter();
  const { data: session } = useSession();

  const [myPosts, setMyPosts] = useState([]);

 //  const [gameVersionOptions, setGameVersionOptions] = useState([{key: 'test0', name: 'test0'},{key: 'test2', name: 'test2'}]);
  // const [gameVersionOptions, setGameVersionOptions] = useState([]);

  // useEffect(() => {
  //   const fetchGameOptions = async () => {
  //     const response = await fetch(`/api/games/`);
  //     const data = await response.json();

  //     setGameVersionOptions([{key: 'test0', name: 'test0'},{key: 'test2', name: 'test2'}]);
  //   };

  //   fetchGameOptions();

  // }, []);




  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch(`/api/users/${session?.user.id}/posts`);
      const data = await response.json();
      console.log("APSODAPOSDKAPS");
      setMyPosts(data);


      // const response1 = await fetch(`/api/games/`);
      // const data1 = await response1.json();

      // setGameVersionOptions(data1);
      //  setGameVersionOptions([{ key: 'pog', name: 'pog' }, { key: 'asd', name: 'asd' }]);


    };

    if (session?.user.id) fetchPosts();
  }, [session?.user.id]);

  const handleEdit = (post) => {
    router.push(`/update-controlProfile?id=${post._id}`);
  };

  const handleDelete = async (post) => {
    const hasConfirmed = confirm(
      "Are you sure you want to delete this controlProfile?"
    );

    if (hasConfirmed) {
      try {
        await fetch(`/api/controlProfile/${post._id.toString()}`, {
          method: "DELETE",
        });

        const filteredPosts = myPosts.filter((item) => item._id !== post._id);

        setMyPosts(filteredPosts);
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <section>
      <Profile
        name='My'
        desc='Welcome to your personalized profile page. Share your exceptional prompts and inspire others with the power of your imagination'
        data={myPosts}
        handleEdit={handleEdit}
        handleDelete={handleDelete}
      />
      <GameVerDropdown
      />
    </section>
  );
};

export default MyProfile;
