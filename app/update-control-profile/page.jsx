"use client";

import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

import Form from "@components/Form";

const UpdateControlProfile = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const controlProfileId = searchParams.get("id");

  const [post, setPost] = useState({ controlProfile: "", tag: "", });
  const [submitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const getPromptDetails = async () => {
      const response = await fetch(`/api/controlProfile/${controlProfileId}`);
      const data = await response.json();

      setPost({
        controlProfile: data.controlProfile,
        tag: data.tag,
      });
    };

    if (controlProfileId) getPromptDetails();
  }, [controlProfileId]);

  const updatePrompt = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    if (!controlProfileId) return alert("Missing ControlProfileId!");

    try {
      const response = await fetch(`/api/controlProfile/${controlProfileId}`, {
        method: "PATCH",
        body: JSON.stringify({
          controlProfile: post.controlProfile,
          tag: post.tag,
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
      type='Edit'
      post={post}
      setPost={setPost}
      submitting={submitting}
      handleSubmit={updatePrompt}
    />
  );
};

export default UpdateControlProfile;
