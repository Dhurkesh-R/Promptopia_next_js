"use client";

import { useState } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation"; // Correct hook for navigation

import Form from "@components/Form";

const CreatePrompt = () => {
  const router = useRouter(); // Use `useRouter` for navigation
  const { data: session } = useSession();

  const [submitting, setSubmitting] = useState(false);
  const [post, setPost] = useState({
    prompt: "",
    tag: "",
  });

  const createPrompt = async (e) => {
    e.preventDefault();
    setSubmitting(true);

    try {
      const response = await fetch("/api/prompt/new", {
        method: "POST",
        headers: {
          "Content-Type": "application/json", // Add headers for JSON content
        },
        body: JSON.stringify({
          prompt: post.prompt,
          userId: session?.user.id, // Ensure session exists
          tag: post.tag,
        }),
      });

      if (response.ok) {
        router.push("/"); // Navigate to homepage on success
      }
    } catch (error) {
      console.log(error);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Form
      type="Create"
      post={post}
      setPost={setPost}
      submitting={submitting}
      handleSubmit={createPrompt}
    />
  );
};

export default CreatePrompt;

