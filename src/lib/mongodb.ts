import { MongoClient } from "mongodb";

const uri = process.env.MONGODB_URI;
if (!uri) throw new Error("MONGODB_URI가 설정되지 않았습니다");

// 핫 리로드와 서버리스 재호출 때 연결이 계속 늘어나지 않도록 재사용
const g = globalThis as unknown as { _mongo?: MongoClient };
export const client = (g._mongo ??= new MongoClient(uri));
export const db = client.db("linknamu");
