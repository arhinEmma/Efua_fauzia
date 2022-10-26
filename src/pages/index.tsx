import type { NextPage } from "next";
import Head from "next/head";
import { PieChart } from "react-minimal-pie-chart";
import { FcMultipleInputs } from "react-icons/fc";
import React, { useState, useEffect } from "react";
const Home: NextPage = () => {
  const data = [
    { title: "positive ", value: 20, color: "#cb3700" },
    { title: "Negative ", value: 50, color: "orange" },
    { title: "Neutral ", value: 30, color: "#ff6103" },
  ];
  const [pie, setPie] = useState<any>([]);
  const [table, setTable] = useState<any>([]);
  const [loading, setLoading] = useState<any>(false);

  const allItems = [
    [
      [
        { title: "positive 50%", value: 20, color: "#cb3700" },
        { title: "Negative 40%", value: 50, color: "orange" },
        { title: "Neutral 10%", value: 30, color: "#ff6103" },
      ],
      [
        { sentence: "curriculum", howmanytimes: 30, sentiment: "Neutral" },
        {
          sentence: "pratical lesson",
          howmanytimes: 20,
          sentiment: "Negative",
        },
        { sentence: "lecture halls", howmanytimes: 20, sentiment: "Negative" },
        { sentence: "lecture halls", howmanytimes: 30, sentiment: "Negative" },
        { sentence: "internet", howmanytimes: 40, sentiment: "#ositive" },
      ],
    ],
    [
      [
        { title: "positive 30%", value: 20, color: "#cb3700" },
        { title: "Negative 20%", value: 50, color: "orange" },
        { title: "Neutral 50%", value: 30, color: "#ff6103" },
      ],
      [
        { sentence: "curriculum", howmanytimes: 4, sentiment: "Neutral" },
        {
          sentence: "pratical lesson",
          howmanytimes: 40,
          sentiment: "Negative",
        },
        { sentence: "lecture halls", howmanytimes: 10, sentiment: "Negative" },
        { sentence: "lecture halls", howmanytimes: 30, sentiment: "Negative" },
        { sentence: "internet", howmanytimes: 30, sentiment: "#ositive" },
      ],
    ],
    [
      [
        { title: "positive 10%", value: 20, color: "#cb3700" },
        { title: "Negative 40%", value: 50, color: "orange" },
        { title: "Neutral 50%", value: 30, color: "#ff6103" },
      ],
      [
        { sentence: "curriculum", howmanytimes: 4, sentiment: "Neutral" },
        {
          sentence: "pratical lesson",
          howmanytimes: 70,
          sentiment: "Negative",
        },
        { sentence: "lecture halls", howmanytimes: 10, sentiment: "Negative" },
        { sentence: "lecture halls", howmanytimes: 20, sentiment: "Negative" },
        { sentence: "internet", howmanytimes: 10, sentiment: "#ositive" },
      ],
    ],

    [
      [
        { title: "positive 50%", value: 20, color: "#cb3700" },
        { title: "Negative 50%", value: 50, color: "orange" },
        { title: "Neutral 0%", value: 30, color: "#ff6103" },
      ],
      [
        { sentence: "curriculum", howmanytimes: 10, sentiment: "Neutral" },
        {
          sentence: "pratical lesson",
          howmanytimes: 20,
          sentiment: "Negative",
        },
        { sentence: "lecture halls", howmanytimes: 20, sentiment: "Negative" },
        { sentence: "lecture halls", howmanytimes: 30, sentiment: "Negative" },
        { sentence: "internet", howmanytimes: 30, sentiment: "#ositive" },
      ],
    ],
    [
      [
        { title: "positive 30%", value: 20, color: "#cb3700" },
        { title: "Negative 30%", value: 50, color: "orange" },
        { title: "Neutral 40%", value: 30, color: "#ff6103" },
      ],
      [
        { sentence: "curriculum", howmanytimes: 15, sentiment: "Neutral" },
        {
          sentence: "pratical lesson",
          howmanytimes: 15,
          sentiment: "Negative",
        },
        { sentence: "lecture halls", howmanytimes: 20, sentiment: "Negative" },
        { sentence: "lecture halls", howmanytimes: 10, sentiment: "Negative" },
        { sentence: "internet", howmanytimes: 40, sentiment: "#ositive" },
      ],
    ],
    [
      [
        { title: "positive 10%", value: 20, color: "#cb3700" },
        { title: "Negative 10%", value: 50, color: "orange" },
        { title: "Neutral 80%", value: 30, color: "#ff6103" },
      ],
      [
        { sentence: "curriculum", howmanytimes: 10, sentiment: "Neutral" },
        {
          sentence: "pratical lesson",
          howmanytimes: 20,
          sentiment: "Negative",
        },
        { sentence: "lecture halls", howmanytimes: 10, sentiment: "Negative" },
        { sentence: "lecture halls", howmanytimes: 30, sentiment: "Negative" },
        { sentence: "internet", howmanytimes: 10, sentiment: "#ositive" },
      ],
    ],
  ];

  const getData = () => {
    const number = Math.floor(Math.random() * allItems.length);
    setLoading(true);
    const newdata = allItems[number];
    if (newdata == undefined) {
      setTable([]);
      setPie([]);
      return;
    }
    setTimeout(function () {
      //code goes here

      setTable(newdata[1]);
      setPie(newdata[0]);

      setLoading(false);
    }, 1000);
  };

  return (
    <>
      <Head>
        <title>Sentiment Analysis</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css"
          integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm"
          crossOrigin="anonymous"
        ></link>
      </Head>

      <header aria-label="Page Header">
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:py-12 sm:px-6 lg:px-8">
          <div className="sm:flex sm:items-center sm:justify-between">
            <div className="text-center sm:text-left">
              <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl">
                Welcome to Sentiment Analyzer App
              </h1>

              <p className="mt-1.5 text-sm text-gray-500">
                {" "}
                developed by Ewuraba and Fauzia{" "}
              </p>
            </div>

            <div className="text-center sm:text-left">
              <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl">
                <FcMultipleInputs />
              </h1>

              <p className="mt-1.5 text-sm text-gray-500">
                <label
                  className="mb-2 block text-sm font-medium text-gray-900 dark:text-gray-300"
                  htmlFor="file_input"
                >
                  Upload csv file
                </label>
                <input
                  className="block h-10 w-full cursor-pointer rounded-lg border border-gray-300 bg-gray-50 text-sm text-gray-900 focus:outline-none dark:border-gray-600 dark:bg-gray-700 dark:text-gray-400 dark:placeholder-gray-400"
                  id="file_input"
                  type="file"
                ></input>
              </p>
            </div>

            <div className="mt-4 flex flex-col gap-4 sm:mt-0 sm:flex-row sm:items-center">
              <button
                className="block rounded-lg bg-indigo-600 px-5 py-3 text-sm font-medium text-white transition hover:bg-indigo-700 focus:outline-none focus:ring"
                type="button"
                onClick={getData}
              >
                {loading ? "loading" : "Analyse"}
              </button>
            </div>
          </div>
        </div>
      </header>

      <header aria-label="Page Header">
        <div className=" bg-indigo-300 px-4  sm:py-12 sm:px-6   lg:items-center lg:px-8">
          <div className="sm:flex sm:items-center sm:justify-between">
            <div className="text-center sm:text-left">
              <h1 className="text-2xl font-bold text-white sm:text-3xl">
                Results
              </h1>
            </div>

            <div className="text-center sm:text-left">
              <h1 className="text-2xl font-bold text-white sm:text-3xl">
                Pie chart showing the result
              </h1>

              <p className="mt-1.5 text-sm text-gray-500">
                <PieChart
                  animate
                  animationDuration={500}
                  animationEasing="ease-out"
                  center={[50, 50]}
                  data={pie}
                  lengthAngle={360}
                  lineWidth={70}
                  paddingAngle={0}
                  radius={50}
                  startAngle={0}
                  viewBoxSize={[100, 100]}
                  label={(data) => data.dataEntry.title}
                  labelPosition={65}
                  labelStyle={{
                    fontSize: "5px",
                    fill: "white",
                    fontWeight: "800",
                  }}
                />
                ;
              </p>
            </div>

            <div className="text-center sm:text-left">
              <h1 className="text-2xl font-bold text-white sm:text-3xl">
                Frequently Appearing words
              </h1>

              <table className="table-dark table">
                <thead className="thead-dark">
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">sentence</th>
                    <th scope="col">how many times</th>
                    <th scope="col">sentiment</th>
                  </tr>
                </thead>
                <tbody>
                  {table?.map((value: any) => (
                    // eslint-disable-next-line react/jsx-key
                    <tr>
                      <th scope="row">1</th>
                      <td>{value.sentence}</td>
                      <td>{value.howmanytimes}</td>
                      <td>{value.sentiment}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </header>

      {/* <section className="bg-zinc-900 text-white">
        <div className="mx-auto max-w-screen-xl  py-5 lg:h-screen lg:items-center">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl">
              Understand User Flow.
              <span className="sm:block"> Increase Conversion. </span>
            </h1>

            <p className="mx-auto mt-4 max-w-xl sm:text-xl sm:leading-relaxed">
              <PieChart
                data={[
                  { title: "One", value: 10, color: "#E38627", label: "one" },
                  { title: "Two", value: 15, color: "#C13C37" },
                  { title: "Three", value: 20, color: "#6A2135" },
                ]}
              />
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <a
                className="block w-full rounded border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-white focus:outline-none focus:ring active:text-opacity-75 sm:w-auto"
                href="/get-started"
              >
                Get Started
              </a>

              <a
                className="block w-full rounded border border-blue-600 px-12 py-3 text-sm font-medium text-white hover:bg-blue-600 focus:outline-none focus:ring active:bg-blue-500 sm:w-auto"
                href="/about"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </section> */}
      {/* </main> */}
    </>
  );
};

export default Home;

type TechnologyCardProps = {
  name: string;
  description: string;
  documentation: string;
};

const TechnologyCard = ({
  name,
  description,
  documentation,
}: TechnologyCardProps) => {
  return (
    <section className="flex flex-col justify-center rounded border-2 border-gray-500 p-6 shadow-xl duration-500 motion-safe:hover:scale-105">
      <h2 className="text-lg text-gray-700">{name}</h2>
      <p className="text-sm text-gray-600">{description}</p>
      {/* <a
        className="mt-3 text-sm text-violet-500 underline decoration-dotted underline-offset-2"
        href={documentation}
        target="_blank"
        rel="noreferrer"
      >
        Documentation
      </a> */}
    </section>
  );
};
