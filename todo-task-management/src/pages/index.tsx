import Header from "../components/ui/header";
import Sidebar from "../components/ui/sidebar";

const Index = () => {
  return (
    <section className="h-dvh flex flex-col">
      <Header />
      <div className="flex">
        <Sidebar />
        <main className="flex-1 p-6">
          <h1 className="text-2xl font-bold">Welcome back, Sundar 👋</h1>
        </main>
      </div>
    </section>
  );
};

export default Index;
