import { Source_Code_Pro } from "next/font/google";

const sourceCode = Source_Code_Pro({ subsets: ["latin"] });

export const metadata = {
  title: "Crib Parking Instructions",
};

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-16">
      <p className={`${sourceCode.className} m-0 text-lg`}>
        Yo. So parking spots might be non-existent depending on the time you
        arrive. If you want to save yourself time looking for a spot, park at
        the lot of the town center down the road. It&apos;s about a 3 minute
        walk to the property from there. If you&apos;re feeling lucky, when you
        enter the property, you can park at any open spot that says “Future
        resident parking only” or “One night parking only”. These spots are on
        the right side facing away from the building and the sides opposite the
        leasing office. You could also find some spots by taking the first exit
        of the roundabout and driving all the way to the back of the property.
        <br></br>
        <br></br>
        <br></br>
        Call me when you&apos;re parked and on the property and I&apos;ll come
        get you.
      </p>
    </main>
  );
}
