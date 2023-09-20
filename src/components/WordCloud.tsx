"use client";
import { useTheme } from "next-themes";
import { useRouter } from "next/navigation";
import React from "react";
import D3WordCloud from "react-d3-cloud";

type Props = {};

const data = [
    {
        text:"Hey",
        value: 3,
    },
    {
        text:"Hi",
        value: 5,
    },
    {
        text:"Computer",
        value: 10,
    },
    {
        text:"nextjs",
        value: 8,
    },
    {
        text:"Live",
        value: 7,
    },
    {
        text:"developer",
        value: 2,
    },
];

const fontSizeMapper = (word: { value: number }) => {
  return Math.log2(word.value) * 5 + 16;
}

const WordCloud = (props: Props) => {
  const theme = useTheme();
  const router = useRouter();
  return (
    <>
      <D3WordCloud
        data={data}
        height={550}
        font="Times"
        fontSize={fontSizeMapper}
        rotate={0}
        padding={10}
        fill={theme.theme === "dark" ? "white" : "black"}
        onWordClick={(e, d) => {
          router.push("/quiz?topic=" + d.text);
        }}
      />
    </>
  );
};

export default WordCloud;