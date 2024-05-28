"use client"
import React from 'react'
import { useParams } from 'next/navigation';

const DynamicSlug = () => {
  const params = useParams();
  const { slug } = params;
  return (

    <div>
      DynamicSlug
      <h2>{slug}</h2>
    </div>
  )
}

export default DynamicSlug
