import React from "react";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import Image from "next/image";

type Data = [{ id: string; url: string; width: number; height: number }];

export default function sideprops({
  data,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  console.log(data);
  return (
    <>
      <h1>Cat test</h1>
      <Image
        src={data[0]?.url}
        width={data[0].width}
        height={data[0].height}
        alt="isLoding"
      />
    </>
  );
}

// getServerSideProps;
export const getServerSideProps: GetServerSideProps<{
  data: Data;
}> = async () => {
  const res = await fetch("https://api.thecatapi.com/v1/images/search");
  const data: Data = await res.json();

  return {
    props: {
      data,
    },
  };
};
