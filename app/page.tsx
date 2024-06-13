import Image from "next/image";


import Link from "next/link"
import { CardContent, Card } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <header className="px-4 lg:px-6 h-14 flex items-center bg-gray-900 text-gray-50 dark:bg-gray-950 dark:text-gray-50">
        <Link className="flex items-center justify-center" href="#">
          <PaletteIcon className="h-6 w-6" />
          <span className="sr-only">방경록</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Work
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            About
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Contact
          </Link>
        </nav>
      </header>
      <main className="flex-grow flex items-center justify-center">
      <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gray-900 text-gray-50 dark:bg-gray-950 dark:text-gray-50 flex items-center justify-center">
  <div className="container px-4 md:px-6">
    <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
      <div className="flex flex-col justify-center space-y-4 text-center">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
            Crafting Exceptional Designs
          </h1>
          <p className="max-w-auto text-gray-400 md:text-xl dark:text-gray-400 ">
            Explore the portfolio of a talented designer, showcasing their exceptional work and creative vision.
          </p>
        </div>
        <div className="flex flex-col gap-2 min-[400px] md:flex-row justify-center">
          <Link
            className="inline-flex h-10 items-center justify-center rounded-md bg-gray-50 px-8 text-sm font-medium text-gray-900 shadow transition-colors hover:bg-gray-100 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-800 dark:text-gray-50 dark:hover:bg-gray-700 dark:focus-visible:ring-gray-300"
            href="#"
          >
            View Work
          </Link>
          <Link
            className="inline-flex h-10 items-center justify-center rounded-md border border-gray-200 border-gray-50 bg-transparent px-8 text-sm font-medium shadow-sm transition-colors hover:bg-gray-50/10 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800 dark:hover:bg-gray-800/10 dark:focus-visible:ring-gray-300 dark:border-gray-800"
            href="#"
          >
            Contact Me
          </Link>
        </div>
      </div>
      <div className="flex justify-center">
        <img
          alt="Portfolio"
          className="mx-auto aspect-square overflow-hidden rounded-xl object-cover sm:w-full"
          height="550"
          src="/placeholder.svg"
          width="550"
        />
      </div>
    </div>
  </div>
</section>

      </main>
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
        <div className="container px-4 md:px-6">
          <div className="grid items-center gap-6 lg:grid-cols-[1fr_500px] lg:gap-12 xl:grid-cols-[1fr_550px]">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800 dark:text-gray-50">
                  About Me
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center">
                  Passionate Designer with a Keen Eye for Detail
                </h2>
                <p className="max-w-[6000px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400 text-center">
                  With over a decade of experience in the design industry, I have honed my skills in creating visually
                  stunning and user-friendly designs. From branding and web design to mobile app development, I bring a
                  unique blend of creativity and technical expertise to every project.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-lg bg-gray-900 p-4 text-gray-50 dark:bg-gray-950 dark:text-gray-50">
                  <h3 className="text-xl font-bold ">10+</h3>
                  <p className="text-sm">Years of Experience</p>
                </div>
                <div className="rounded-lg bg-gray-900 p-4 text-gray-50 dark:bg-gray-950 dark:text-gray-50">
                  <h3 className="text-xl font-bold">100+</h3>
                  <p className="text-sm">Satisfied Clients</p>
                </div>
                <div className="rounded-lg bg-gray-900 p-4 text-gray-50 dark:bg-gray-950 dark:text-gray-50">
                  <h3 className="text-xl font-bold">20+</h3>
                  <p className="text-sm">Awards Won</p>
                </div>
                <div className="rounded-lg bg-gray-900 p-4 text-gray-50 dark:bg-gray-950 dark:text-gray-50">
                  <h3 className="text-xl font-bold">98%</h3>
                  <p className="text-sm">Client Satisfaction</p>
                </div>
              </div>
            </div>
            <div className="flex justify-center">
              <img
                alt="Designer"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full"
                height="310"
                src="/placeholder.svg"
                width="550"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32 flex items-center justify-center">
  <div className="container px-4 md:px-6">
    <div className="flex flex-col items-center justify-center space-y-4 text-center">
      <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800 dark:text-gray-50">
        Featured Work
      </div>
      <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl ">Explore My Portfolio</h2>
      <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
        Discover a collection of my most impressive design projects, showcasing my versatility and attention to
        detail.
      </p>
    </div>
    <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 sm:grid-cols-2 lg:grid-cols-3 lg:gap-12">
      <Card>
        <CardContent className="flex flex-col items-start gap-4">
          <img
            alt="Project 1"
            className="aspect-video w-full overflow-hidden rounded-xl object-cover object-center"
            height="310"
            src="/placeholder.svg"
            width="550"
          />
          <div className="space-y-2">
            <h3 className="text-xl font-bold">Branding Design</h3>
            <p className="text-gray-500 dark:text-gray-400">
              Crafting a cohesive brand identity for a leading tech startup.
            </p>
          </div>
          <Link
            className="inline-flex h-9 items-center justify-center rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
            href="#"
          >
            View Project
          </Link>
        </CardContent>
      </Card>
      <Card>
        <CardContent className="flex flex-col items-start gap-4">
          <img
            alt="Project 2"
            className="aspect-video w-full overflow-hidden rounded-xl object-cover object-center"
            height="310"
            src="/placeholder.svg"
            width="550"
          />
          <div className="space-y-2">
            <h3 className="text-xl font-bold">Mobile App Design</h3>
            <p className="text-gray-500 dark:text-gray-400">
              Designing a user-friendly and visually appealing mobile app for a fitness startup.
            </p>
          </div>
          <Link
            className="inline-flex h-9 items-center justify-center rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
            href="#"
          >
            View Project
          </Link>
        </CardContent>
      </Card>
      <Card>
        <CardContent className="flex flex-col items-start gap-4">
          <img
            alt="Project 3"
            className="aspect-video w-full overflow-hidden rounded-xl object-cover object-center"
            height="310"
            src="/placeholder.svg"
            width="550"
          />
          <div className="space-y-2">
            <h3 className="text-xl font-bold">Website Design</h3>
            <p className="text-gray-500 dark:text-gray-400">
              Designing a visually stunning and user-friendly website for a luxury fashion brand.
            </p>
          </div>
          <Link
            className="inline-flex h-9 items-center justify-center rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
            href="#"
          >
            View Project
          </Link>
        </CardContent>
      </Card>
    </div>
  </div>
</section>

<section className="w-full py-12 md:py-24 lg:py-32 border-t flex items-center justify-center" id="contact">
  <div className="container px-4 md:px-6">
    <div className="grid gap-4 px-4 text-center md:px-6 lg:gap-10">
      <div className="space-y-3">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Let's Work Together</h2>
        <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
          I'm excited to discuss your project and how I can help bring your vision to life. Fill out the form below,
          and I'll get back to you as soon as possible.
        </p>
      </div>
      <div className="mx-auto w-full max-w-sm space-y-2">
        <form className="flex flex-col gap-4">
          <div className="space-y-1">
            <Label htmlFor="name">Name</Label>
            <Input id="name" placeholder="Your Name" required />
          </div>
          <div className="space-y-1">
            <Label htmlFor="email">Email</Label>
            <Input id="email" placeholder="you@example.com" required type="email" />
          </div>
          <div className="space-y-1">
            <Label htmlFor="message">Message</Label>
            <Textarea id="message" placeholder="How can I help you?" required rows={5} />
          </div>
          <Button className="w-full" type="submit">
            Send Message
          </Button>
        </form>
      </div>
    </div>
  </div>
</section>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t bg-gray-900 text-gray-50 dark:bg-gray-950 dark:text-gray-50">
        <p className="text-xs">© 2024 Designers Portfolio. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Privacy
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Terms
          </Link>
        </nav>
      </footer>
    </div>
  );
}

function PaletteIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="13.5" cy="6.5" r=".5" fill="currentColor" />
      <circle cx="17.5" cy="10.5" r=".5" fill="currentColor" />
      <circle cx="8.5" cy="7.5" r=".5" fill="currentColor" />
      <circle cx="6.5" cy="12.5" r=".5" fill="currentColor" />
      <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z" />
    </svg>
  )
}

