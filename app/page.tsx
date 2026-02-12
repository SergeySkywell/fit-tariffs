import { getTariffs } from "@/lib/api";
import OfferPage from "@/components/OfferPage";

export default async function Page() {
  const tariffs = await getTariffs();
  return <OfferPage tariffs={tariffs} />;
}
