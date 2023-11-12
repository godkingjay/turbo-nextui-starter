"use client";

import { AppUIProvider } from "ui/providers";

export function Providers({ children }: { children: React.ReactNode }) {
	return <AppUIProvider>{children}</AppUIProvider>;
}
