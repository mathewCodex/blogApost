This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

<main className="min-h-screen space-y-4">
        <section className="mx-auto grid max-w-screen-2xl grid-cols-3 gap-3 px-4 py-6">
          <section className="col-span-2 min-h-[380px] space-y-4">
            <div className="relative min-h-[360px]">
              <Image
                alt="artitle title"
                src="/dan-aragon-n20DUSVsUk8-unsplash.jpg"
                className="object-cover"
                fill
              />
            </div>
            <ContentTitle />
            <p>Heatwaves</p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Molestias vero autem laborum ullam quibusdam quo dolore
              repellendus consectetur quis facere sapiente voluptatum, eos,
              rerum id nesciunt
            </p>
            <div className="flex items-center">
              {/* <Image /> */}
              <p>By author name</p>
              <span>.</span>
              <p>Monday, 11 Jan 2023</p>
            </div>
          </section>
          <aside>
            <ContentTitle />
            <p>Digital</p>
            <p className="line-clamp-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
              minus ab neque veritatis, rem similique, illum consequatur sint
              voluptatibus odio nesciunt ex a velit enim? Quod obcaecati quo
              delectus soluta?
            </p>
            <div className="flex items-center">
              <Image />
              <p>Name of publisher</p>
              <span>.</span>
              <p>Sunday 10 January 2023</p>
              <Image />
            </div>
          </aside>
        </section>
        <section>section 2</section>
      </main>
