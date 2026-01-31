"use client";

export default function FloatingLayer({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="fixed inset-0 z-[9999] pointer-events-none">
      <div className="pointer-events-auto">
        {children}
      </div>
    </div>
  );
}
