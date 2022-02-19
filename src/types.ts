import React from "react";

export interface ResortsCardInfo {
  name: string,
  country : string,
  heigh: string | null,
  slopes: {
    total: string | number | null,
    blue: string | number | null,
    red: string | number | null,
    black: string | number | null,
  },
  cabel: {
    total: string | number | null,
    gondola: string | number | null,
    bugel: string | number | null,
    chairlift: string | number | null,
  },
  rate: string | number | null,
  img: string | number | null,
  tag: string[] | null,
  id?: number
}

export interface LimitTagsProps {
  items: string[],
  type: string
}

export interface SearchParametrs {
  country: string[] | undefined,
  heigh: number[] | undefined,
  slopes: number[] | undefined,
  cabel: number[] | undefined,
  rating: number[] | undefined,
  tags: string[] | undefined
  type?: string
}

export interface RangeSliderProps {
  type: string;
  range: number[];
}