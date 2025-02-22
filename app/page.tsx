import Header from "@/components/Header/Header";
import { ThemeToggle } from "@/components/ui/toggleButton";
export default function Home() {
  return (
    <>
      <ThemeToggle />
      <Header />
      <h1>Home page</h1>
    </>
  );
}
