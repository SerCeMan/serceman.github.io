import React from 'react';
import Layout from '../components/Layout';
import {GetStaticProps} from "next";
import {getAllTalks, Talk} from "../lib/talks";
import Link from "next/link";
import {formatDate} from "../utils/dates";


export const Talks = ({talks}: { talks: Talk[]; }): JSX.Element => {

  return (
    <Layout>
      <div>
        <div className="container max-w-4xl	mx-auto px-12 py-6 text-base">
          <div>
            <h1
              style={{
                fontFamily: 'Alegreya',
              }}
              className="text-3xl font-normal mb-3">Talks</h1>
            <hr/>
            {talks.map((talk) =>
              <div className="flex flex-col mt-6" key={talk.title}>
                <div className="flex flex-col">
                  <h1
                    style={{
                      fontFamily: 'Alegreya',
                    }}
                    className="flex flex-row text-2xl gap-1 mb-2 items-center">
                    <div>({talk.language === 'ru' ? 'RU' : 'EN'})</div>
                    <div className="whitespace-pre-wrap">{talk.title}</div>
                  </h1>
                  {talk.events.map((event) =>
                    <div key={event.name} className="flex flex-col">
                      <div
                        style={{
                          fontFamily: 'Alegreya',
                        }}
                        className="text-lg"
                      >{formatDate(event.date)}</div>
                      <div className="flex flex-col">
                        <Link className="text-lg" href={event.eventUrl}>
                          {event.name}
                        </Link>
                        <div className="flex flex-row gap-2 italic">
                          {event.slides &&
                            <Link href={event.slides}>
                              Slides
                            </Link>}
                          {event.recording &&
                            <Link href={event.recording}>
                              Recording
                            </Link>}
                          {event.repo &&
                            <Link href={event.repo}>
                              Repository
                            </Link>}
                        </div>
                      </div>
                    </div>
                  )}
                  <div className="pt-2 whitespace-pre-wrap">{talk.description}</div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const talks = getAllTalks();

  return {
    props: {talks},
  };
};

export default Talks;
