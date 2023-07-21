import { ImageResponse } from "next/server";
import { NextRequest } from "next/server";

export const runtime = "edge";

export async function GET(req: NextRequest) {
  const { searchParams } = req.nextUrl;
  const title = searchParams.get("title");
  const description = searchParams.get("description");
  const fontRegular = fetch(
    new URL("../../public/fonts/InstrumentSans-Regular.ttf", import.meta.url)
  ).then((res) => res.arrayBuffer());
  const fontSemiBold = fetch(
    new URL("../../public/fonts/InstrumentSans-SemiBold.ttf", import.meta.url)
  ).then((res) => res.arrayBuffer());
  const fontDataRegular = await fontRegular;
  const fontDataSemiBold = await fontSemiBold;

  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          padding: 80,
        }}
      >
        <div
          style={{
            width: 144,
            height: 144,
            borderRadius: 16,
            backgroundImage: "url(https://alexcarpenter.me/me.jpeg)",
          }}
        />
        <div
          style={{
            marginTop: "auto",
            display: "flex",
            fontFamily: "Instrument Sans SemiBold",
            fontSize: 64,
            fontStyle: "normal",
            whiteSpace: "pre-wrap",
          }}
        >
          {title ? `${title} // Alex Carpenter` : "Alex Carpenter"}
        </div>
        <div
          style={{
            display: "flex",
            fontFamily: "Instrument Sans Regular",
            fontSize: 64,
            fontStyle: "normal",
            color: "#6f6f6f",
            whiteSpace: "pre-wrap",
          }}
        >
          {description ? description : "Web Engineer"}
        </div>
      </div>
    ),
    {
      width: 1920,
      height: 1080,
      fonts: [
        {
          name: "Instrument Sans Regular",
          data: fontDataRegular,
          style: "normal",
        },
        {
          name: "Instrument Sans SemiBold",
          data: fontDataSemiBold,
          style: "normal",
        },
      ],
    }
  );
}
