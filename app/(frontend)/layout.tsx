import BackButton from "@/components/layout/BackButton";
import Navbar from "@/components/layout/Navbar";
import CanvasCursorWrapper from "@/components/layout/CanvasCursorWrapper";
import TransitionWrapper from "@/components/layout/TransitionWrapper";

export default function FrontendLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <TransitionWrapper>
      <CanvasCursorWrapper />
      <Navbar />
      <BackButton />
      {children}
    </TransitionWrapper>
  );
}
