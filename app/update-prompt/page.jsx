"use client";

import { Suspense } from "react";

const UpdatePromptPage = () => {
  const UpdatePrompt = React.lazy(() => import("./UpdatePrompt"));

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <UpdatePrompt />
    </Suspense>
  );
};

export default UpdatePromptPage;

