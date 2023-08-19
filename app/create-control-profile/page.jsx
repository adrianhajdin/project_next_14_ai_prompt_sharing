"use client";
import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

import Form from "@components/Form";
import dropdown from "@components/GameVerDropdown";

const CreateControlProfile = () => {
  const router = useRouter();
  const { data: session } = useSession();

  const [submitting, setIsSubmitting] = useState(false);
  const [post, setPost] = useState({ controlProfile: "", tag: "", });
  
  const createControlProfile = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/controlProfile/new", {
        method: "POST",
        body: JSON.stringify({
          controlProfile: post.controlProfile,
          userId: session?.user.id,
          tag: post.tag,
          game: post.game,
          devices: post.devices,
          deviceBindsList: post.deviceBindsList,
        }),
      });

      if (response.ok) {
        router.push("/");
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Form
      type='Create'
      post={post}
      setPost={setPost}
      submitting={submitting}
      handleSubmit={createControlProfile}
 
    />
  );
};

export default CreateControlProfile;
