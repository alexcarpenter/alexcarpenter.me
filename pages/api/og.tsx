/* eslint-disable @next/next/no-server-import-in-page */
/* eslint-disable @next/next/no-img-element */
import { ImageResponse } from "@vercel/og";
import { NextRequest } from "next/server";

export const config = {
  runtime: "edge",
};

const font = fetch(
  new URL("../../public/fonts/Inter-SemiBold.otf", import.meta.url)
).then((res) => res.arrayBuffer());

export default async function handler(req: NextRequest) {
  const [fontData] = await Promise.all([font]);
  try {
    const { searchParams } = new URL(req.url);
    const title = searchParams.has("title")
      ? searchParams.get("title")?.slice(0, 100)
      : "Design Engineer";
    const description = searchParams.has("description")
      ? searchParams.get("description")?.slice(0, 100)
      : "alexcarpenter.me";

    return new ImageResponse(
      (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            backgroundColor: "#161616",
            height: "100%",
            width: "100%",
            padding: 64,
          }}
        >
          <div
            style={{
              width: "75%",
              height: "50%",
              position: "absolute",
              top: "-10%",
              left: "-10%",
              backgroundImage: "linear-gradient(to right, #63d0ff, #844fba)",
              filter: "blur(140px)",
              opacity: 0.75,
            }}
          />
          <div
            style={{
              width: "75%",
              height: "100%",
              position: "absolute",
              top: "-10%",
              right: "-10%",
              backgroundImage: "linear-gradient(to right, #ffb2b8, #c74fb8)",
              filter: "blur(140px)",
              opacity: 0.15,
            }}
          />
          <img
            src={new URL(
              "../../public/img/me.jpeg",
              import.meta.url
            ).toString()}
            width={96}
            height={96}
            alt=""
            style={{
              borderRadius: 8,
              border: "1px solid rgba(255, 255, 255, .25)",
            }}
          />
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              fontFamily: "Inter",
            }}
          >
            <div
              style={{
                fontSize: title ? 56 : 64,
                fontStyle: "normal",
                color: "#fff",
                whiteSpace: "pre-wrap",
              }}
            >
              {title}
            </div>
            <div
              style={{
                marginTop: 16,
                fontSize: 32,
                color: "#a0a0a0",
              }}
            >
              {description}
            </div>
          </div>
        </div>
      ),
      {
        width: 1200,
        height: 630,
        fonts: [
          {
            name: "Inter",
            data: fontData,
          },
        ],
      }
    );
  } catch (e: any) {
    console.log(`${e.message}`);
    return new Response(`Failed to generate the image`, {
      status: 500,
    });
  }
}
