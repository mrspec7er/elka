import MainNavbar from "./components/navbar";
import MainFooter from "./components/footer";

export default function Home() {
  return (
    <>
      <MainNavbar />
      <main className="flex min-h-screen flex-col items-center justify-between p-24"></main>
      <MainFooter />
    </>
  );
}
