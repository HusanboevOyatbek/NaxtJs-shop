// "use client"

import SingleProduct from "@/app/components/single-product/SinglePage";



const SinglePage = async ({
  params
}: {
  params: Promise<{ singelId: number }>
}) => {

  const { singelId } = await params;


  const singData = await fetch(`https://fakestoreapi.com/products/${singelId}`)

  const res = await singData.json()
  console.log(res);




  return (



    <div className="">
      <SingleProduct res={res} />


      

    </div>

  );
}

export default SinglePage;
