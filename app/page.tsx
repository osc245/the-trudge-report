import Link from "next/link";
import Image from 'next/image';
import { getAllPosts } from "@/lib/contentful";
import React from 'react';

export default async function Page() {
  const posts = await getAllPosts();

  return (
    <>
      <section className="md:px-10 lg:px-40 xl:px-80 flex flex-col lg:flex-row py-4 items-center justify-center">
        <Image
          src="/carter-and-ned.png"
          alt="Carter and Ned Smiling"
          sizes="100vw"
          width={700}
          height={1}
          className="rounded-lg shadow-lg w-full md:w-3/5 h-auto"
        />
        <div className="pt-5 lg:pt-0 md:pl-5 xl:pl-10">
          <h2 className="pt-5  flex justify-center items-center text-center text-lg xl:text-xl">
            Dust, dharma, and reflections of dubious merit from a slovenly loafer and a flea-bitten tramp
          </h2>
        </div>
      </section>
      <section className="sm:px-4 md:px-20 lg:px-28 xl:px-80">
        <ul className="px-28 pt-4">
          {
            posts.map((post) => (
              <li
                key={post.slug}
                className="py-2 px-4 rounded-lg hover:bg-white hover:shadow"
              >
                <Link href={`/posts/${post.slug}`} className="flex items-center">
                  <div>
                    <h2 className="text-2xl font-semibold">{post.title}</h2>
                    <p>{post.description}</p>
                    <time className="text-sm text-gray-400">{post.dateString}</time>
                  </div>
                  <div className="flex-shrink-0 relative w-28 h-28 overflow-hidden">
                    <Image
                      src={`https:${post.previewPhoto!.fields.file!.url}`}
                      alt="TODO" // TODO
                      quality={100}
                      className="object-cover w-full h-full rounded-lg"
                      fill
                    />
                  </div>
                </Link>
              </li>
            ))
          }
        </ul>
      </section>
    </>
  );
}
