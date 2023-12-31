import "~/styles/globals.css";

import { Inter } from "next/font/google";
import { cookies } from "next/headers";

import { TRPCReactProvider } from "~/trpc/react";
import SaasHeader from "~/app/_components/SaasHeader";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata = {
  title: "Create T3 App",
  description: "Generated by create-t3-app",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

    return (
      <html lang="en" className="h-full bg-gray-100">
      <head>

      </head>
      <body className={`font-sans ${inter.variable} h-full`}>
      <TRPCReactProvider cookies={cookies().toString()}>
        <SaasHeader children={children} />
      </TRPCReactProvider>
      </body>
      </html>
  );
}