import { links } from "@/lib/links";
import { db } from "@/lib/mongodb";

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  const { id } = await params;
  const link = links.find((l) => l.id === id);
  if (!link) return new Response("Not found", { status: 404 });

  try {
    // shortcut: bots that follow links are counted too, filter by user agent if counts look inflated
    await db
      .collection<{ _id: string; clicks: number }>("clicks")
      .updateOne({ _id: id }, { $inc: { clicks: 1 } }, { upsert: true });
  } catch (error) {
    // DB 장애가 나도 방문자는 링크로 이동해야 함
    console.error("클릭 수 저장 실패", error);
  }

  return Response.redirect(link.url, 302);
}
