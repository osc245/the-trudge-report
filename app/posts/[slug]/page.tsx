import { getAllPosts, getPost } from "@/lib/contentful";
import Image from "next/image";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS } from '@contentful/rich-text-types';

export interface Asset {
  fields: {
    title: string,
    description: string,
    file: {
      url: string
    },
  }
}

const options = {
  renderNode: {
    [BLOCKS.EMBEDDED_ASSET]: (node: any) => {
      const asset = node.data.target as Asset;
      return (
        <div className="flex justify-center py-6 relative">
          <Image src={`https:${asset.fields.file.url}`} alt={asset.fields.description} width={400} height={300} quality={100} />
        </div>
      );
    },
  }
};

export async function generateStaticParams() {
  const allPosts = await getAllPosts();
  return allPosts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function Page({
  params,
}: {
  params: { slug: string };
}) {
  const post = await getPost(params.slug);

  return (
    <>
      <h1 className="text-4xl font-semibold tracking-tighter text-center py-4">{post.title}</h1>
      <time>{post.date.toLocaleDateString()}</time>
      {documentToReactComponents(post.content, options)}
    </>
  );
}
