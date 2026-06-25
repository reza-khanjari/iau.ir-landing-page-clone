import type { ReactNode } from "react";

function Button({ children }: { children: ReactNode }) {
  return (
    <button
      type="button"
     className="text-primary-700 border-primary-700 font-vazir-bold hover:bg-primary-700 cursor-pointer rounded-lg border bg-white px-8 py-2 text-center text-sm transition-all hover:text-white"
    >
      {children}
    </button>
  );
}

export default Button;
