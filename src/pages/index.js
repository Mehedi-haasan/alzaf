import React from "react";
import Layout from "@/layout/layout";
import Image from "next/image";
import HeroImage from '@/assets/images/heroimage.png'



export default function Home() {
  return (
    <div>
      <Layout>
        <Image src={HeroImage} className="h-[291px] w-full" alt="dfyhbtf" height={1000} width={1000}/>
      </Layout>
    </div>

  );
}
