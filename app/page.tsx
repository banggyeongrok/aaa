import Image from "next/image";

import Link from "next/link";
import { CardContent, Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
 <header className="px-4 lg:px-6 h-14 flex items-center justify-center bg-gray-900 text-gray-50 dark:bg-gray-950 dark:text-gray-50">
  <div className="flex items-center justify-center">
    <Link className="flex items-center justify-center" href="#">
      <PaletteIcon className="h-6 w-6" />
      <span className="sr-only">방경록</span>
    </Link>
  </div>
  <nav className="ml-auto flex gap-4 sm:gap-6">
    <Link
      className="text-sm font-medium hover:underline underline-offset-4"
      href="#"
    >
      Work
    </Link>
    <Link
      className="text-sm font-medium hover:underline underline-offset-4"
      href="#"
    >
      About
    </Link>
    <Link
      className="text-sm font-medium hover:underline underline-offset-4"
      href="#"
    >
      Contact
    </Link>
  </nav>
</header>
      <main className="flex-grow flex items-center justify-center">
      <section
  className="w-full py-12 md:py-24 lg:py-32 xl:py-48 text-gray-100 dark:text-gray-100 flex justify-center"
  style={{
    backgroundImage: `url('/fff.jpg')`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  }}
>
  <div className="container px-4 md:px-6 flex justify-center">
    <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
      <div className="flex flex-col justify-center space-y-4 text-center">
        <div className="space-y-2">
          <h1
            className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6x1/none"
            style={{
              textShadow:
                "1px 1px 0 black, -1px -1px 0 black, 1px -1px 0 black, -1px 1px 0 black",
            }}
          >
            2D 캐릭터 아트디자이너 <br className="hidden xl:inline" />
            포트폴리오
          </h1>
          <p
            className="max-w-auto font-bold text-gray-700 text-lg md:text-xl dark:text-gray-700 text-center"
            style={{
              textShadow:
                "1px 1px 0 white, -1px -1px 0 white, 1px -1px 0 white, -1px 1px 0 white",
            }}
          >
            -name. 방경록-
          </p>
        </div>
        <div className="flex flex-col gap-2 min-[400px] md:flex-row justify-center">
          <a
            className="inline-flex h-10 items-center justify-center rounded-md bg-gray-50 px-8 text-sm font-medium text-gray-900 shadow transition-colors hover:bg-gray-100 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-800 dark:text-gray-50 dark:hover:bg-gray-700 dark:focus-visible:ring-gray-300"
            href="https://www.pixiv.net/users/31384520"
            target="_blank"
            rel="noopener noreferrer"
          >
            작업물
          </a>
          <a
            className="inline-flex h-10 items-center justify-center rounded-md bg-gray-50 px-8 text-sm font-medium text-gray-900 shadow transition-colors hover:bg-gray-100 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-800 dark:text-gray-50 dark:hover:bg-gray-700 dark:focus-visible:ring-gray-300"
            href="#"
          >
            e메일 : rudfhr2679@naver.com
          </a>
        </div>
      </div>
      <div className="flex justify-center">
        <img
          alt="Portfolio"
          className="mx-auto aspect-square overflow-hidden rounded-xl object-cover sm:w-full"
          height="550"
          src="/aaa.png"
          width="550"
        />
      </div>
    </div>
  </div>
</section>
        ;
      </main>
      <section
  className="w-full py-12 md:py-24 lg:py-32 bg-yellow-200 flex justify-center"
  style={{
    backgroundImage: `url('/ggg.png')`,
    backgroundSize: "60%",  
    backgroundPosition: "100%",
    backgroundRepeat: "repeat",
  }}
>
  <div className="container px-4 md:px-6 flex flex-col items-center">
    <div className="grid items-center gap-6 lg:grid-cols-[1fr_500px] lg:gap-12 xl:grid-cols-[1fr_550px]">
      <div className="flex flex-col justify-center space-y-4 items-center">
        <div className="space-y-2 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-gray-700">
            디자이너 소개
          </h2>
          <p className="max-w-[600px] text-gray-700 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
            매우 열정적인 2D 일러스트레이터 입니다. 주로 그리는 그림은
            <br />
            캐주얼 아트 이며 동화풍의 판타지스러운 그림체를 선호 합니다.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="rounded-lg bg-gray-100 p-4 text-gray-600 dark:bg-gray-950 dark:text-gray-50">
            <h3 className="text-xl font-bold ">5 Years</h3>
            <p className="text-sm">5년간 그림을 그려 쌓아온 경력</p>
          </div>
          <div className="rounded-lg bg-gray-100 p-4 text-gray-600 dark:bg-gray-950 dark:text-gray-50">
            <h3 className="text-xl font-bold">3D OK</h3>
            <p className="text-sm">3D작업도 가능</p>
          </div>
          <div className="rounded-lg bg-gray-100 p-4 text-gray-600 dark:bg-gray-950 dark:text-gray-50">
            <h3 className="text-xl font-bold">98% satisfaction</h3>
            <p className="text-sm">98% 의 고객만족도</p>
          </div>
          <div className="rounded-lg bg-gray-100 p-4 text-gray-600 dark:bg-gray-950 dark:text-gray-50">
            <h3 className="text-xl font-bold">fast & feedback</h3>
            <p className="text-sm">빠른 작업속도 와 원활한 소통</p>
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <img
          alt="Designer"
          className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full"
          height="310"
          src="/bbb.png"
          width="550"
        />
      </div>
    </div>
  </div>
</section>

<section className="w-full py-12 md:py-24 lg:py-32 flex items-center justify-center bg-cover bg-center"
      style={{ 
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/qqq.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
  <div className="container px-4 md:px-6 flex flex-col items-center">
    <div className="flex flex-col items-center justify-center space-y-4 text-center">
      <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-gray-100">
        포트폴리오
      </h2>
      <p className="font-bold max-w-[900px] text-gray-100 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
        그동안 그린 작업물들 과 연습작품입니다. 천천히 둘러봐 주시면
        감사하겠습니다.
      </p>
    </div>
    <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 sm:grid-cols-2 lg:grid-cols-3 lg:gap-12">
  <Card>
    <CardContent className="flex flex-col items-start gap-4">
      <img
        alt="Project 1"
        className="object-cover group-hover:scale-110 transition-transform duration-300"
        height="310"
        src="/ccc.jpg"
        width="550"
        style={{ height: '310px', width: '100%', objectFit: 'cover' }}
      />
      <div className="space-y-2">
        <h3 className="text-xl font-bold">북방 민족</h3>
        <p className="text-gray-500 dark:text-gray-400">
          겨울을 컨셉으로한 북방민족 소녀
          <br />캐릭터 디자인 입니다.
        </p>
      </div>
      <Link
        className="inline-flex h-9 items-center justify-center rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
        href="https://www.pixiv.net/users/31384520"
        target="_blank"
        rel="noopener noreferrer"
      >
        View
      </Link>
    </CardContent>
  </Card>
  <Card>
    <CardContent className="flex flex-col items-start gap-4">
      <img
        alt="Project 2"
        className="object-cover group-hover:scale-110 transition-transform duration-300"
        height="310"
        src="/ddd.png"
        width="550"
        style={{ height: '310px', width: '100%', objectFit: 'cover' }}
      />
      <div className="space-y-2">
        <h3 className="text-xl font-bold">해적 선장</h3>
        <p className="text-gray-500 dark:text-gray-400">
          해적을 컨셉으로한 여선장
          <br />캐릭터 디자인 입니다.
        </p>
      </div>
      <Link
        className="inline-flex h-9 items-center justify-center rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
        href="https://www.pixiv.net/users/31384520"
        target="_blank"
        rel="noopener noreferrer"
      >
        View
      </Link>
    </CardContent>
  </Card>
  <Card>
    <CardContent className="flex flex-col items-start gap-4">
      <img
        alt="Project 3"
        className="object-cover group-hover:scale-110 transition-transform duration-300"
        height="310"
        src="/eee.jpg"
        width="550"
        style={{ height: '310px', width: '100%', objectFit: 'cover' }}
      />
      <div className="space-y-2">
        <h3 className="text-xl font-bold">붉은 여기사</h3>
        <p className="text-gray-500 dark:text-gray-400">
          기사를 컨셉으로한 붉은 여기사
          <br />캐릭터 디자인 입니다.
        </p>
      </div>
      <Link
        className="inline-flex h-9 items-center justify-center rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
        href="https://www.pixiv.net/users/31384520"
        target="_blank"
        rel="noopener noreferrer"
      >
        View
      </Link>
    </CardContent>
  </Card>
</div>
  </div>
</section>


<section
        className="w-full py-12 md:py-24 lg:py-32 border-t flex items-center justify-center"
        id="contact"
      >
        <div className="container px-4 md:px-6">
          <div className="grid gap-4 px-4 text-center md:px-6 lg:gap-10">
            <div className="space-y-3">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl flex items-center justify-center">
  <img 
    src="/pon.png" 
    alt="Contact Icon" 
    className="inline-block w-12 h-13 mr-3" // 이미지 크기를 12픽셀로 조정
  />
  연락처를 남겨주세요.
</h2>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                이곳에 성함과 이메일을 남겨주시고 <br></br>
                간단하게 작업하고 싶은 프로젝트 내용을 말씀 드리시면
                <br></br> 원활한 작업 진행이 가능합니다.
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
                  <Input
                    id="email"
                    placeholder="you@example.com"
                    required
                    type="email"
                  />
                </div>
                <div className="space-y-1">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    placeholder="How can I help you?"
                    required
                    rows={5}
                  />
                </div>
                <Button className="w-full" type="submit">
                  보내기
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t bg-gray-900 text-gray-50 dark:bg-gray-950 dark:text-gray-50">
        <p className="text-xs">
          © 2024 Designers Portfolio. All rights reserved.
        </p>
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
  );
}
