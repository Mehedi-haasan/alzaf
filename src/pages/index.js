import React from "react";
import Layout from "@/layout/layout";
import Image from "next/image";
import HeroImage from '@/assets/images/heroimage.png'



export default function Home() {
  return (
    <div>
      <Layout>
        <div className="h-full">
          <Image src={HeroImage} className="h-[600px] w-full z-30" alt="dfyhbtf" height={1000} width={1000} />
        </div>
      </Layout>
    </div>

  );
}
