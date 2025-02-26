import React from "react";
import Intro from "@/components/intro";
import { MDXRemote } from "next-mdx-remote/rsc";
import RecentProjects from '@/components/recent-projects';

export default function Home() {
  const content = `
        # this is markdown heading
        `
  
  return (
    <section className='pb-24 pt-40'>
      <div className='container max-w-3xl'>
        <Intro />

        <RecentProjects />
      </div>
    </section>
  );
}
