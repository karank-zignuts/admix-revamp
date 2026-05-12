"use client";

import { motion, useReducedMotion } from "motion/react";
import Image from "next/image";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { productImages, productsContent, productSizes, productTableColumns } from "@/data/main";

import { reveal } from "./animations";
import { SectionLabel } from "./SectionLabel";

export function ProductsSection() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="products" className="bg-[#f8f8f2] px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
          <SectionLabel>{productsContent.eyebrow}</SectionLabel>
          <h2 className="mt-4 text-3xl font-medium leading-tight sm:text-5xl">
            {productsContent.title}
          </h2>
          <p className="mt-5 max-w-2xl text-sm leading-6 text-neutral-600 sm:text-base">
            {productsContent.body}
          </p>
        </div>

        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {productImages.slice(0, 3).map((src, index) => (
            <motion.div
              key={src}
              {...(shouldReduceMotion ? {} : reveal(index))}
              className="relative aspect-[4/3] overflow-hidden rounded-lg bg-neutral-200"
            >
              <Image
                src={src}
                alt={`${productsContent.imageAltPrefix} ${index + 1}`}
                fill
                sizes="(min-width: 768px) 33vw, 100vw"
                className="object-cover transition duration-500 hover:scale-105"
              />
            </motion.div>
          ))}
        </div>

        <div className="mt-8 overflow-hidden rounded-lg border border-neutral-200 bg-white">
          <Table>
            <TableHeader>
              <TableRow className="bg-neutral-950 hover:bg-neutral-950">
                {productTableColumns.map((column) => (
                  <TableHead key={column} className="text-white">
                    {column}
                  </TableHead>
                ))}
              </TableRow>
            </TableHeader>
            <TableBody>
              {productSizes.map((size) => (
                <TableRow key={`${size.shape}-${size.inches}`}>
                  <TableCell className="font-medium">{size.shape}</TableCell>
                  <TableCell>{size.inches}</TableCell>
                  <TableCell>{size.mm}</TableCell>
                  <TableCell>{size.weightKg}</TableCell>
                  <TableCell>{size.packing}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </section>
  );
}
