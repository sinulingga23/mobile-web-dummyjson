import BottomNavigation from "../component/BottomNavigation";

export default function Home() {
  return (
    <section>
      <div className="fixed left-0 z-50 w-full h-16 bg-white border-t border-gray-200">
        <div className="grid h-full max-w-lg grid-cols-4 mx-auto font-medium">
          Content
        </div>
      </div>

      <BottomNavigation />
    </section>
  );
}
