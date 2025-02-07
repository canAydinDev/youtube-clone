import React from "react";

interface UserIdProps {
  params: Promise<{ userId: string }>;
}

const Page = async ({ params }: UserIdProps) => {
  const { userId } = await params;
  return (
    <div>
      <p>userId: {userId}</p>
    </div>
  );
};

export default Page;
