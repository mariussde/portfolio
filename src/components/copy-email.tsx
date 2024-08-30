"use client";

import { getCalApi } from "@calcom/embed-react";
import { useEffect, useState } from "react"; // Import useState
import { Button } from "@/components/ui/button";
import { useTheme } from "next-themes";

export function CopyEmailButton() {
  const { theme } = useTheme();
  const [isCopied, setIsCopied] = useState(false); // State to manage copy status

  useEffect(() => {
    (async function () {
      const cal = await getCalApi({ namespace: "meeting" });
      cal("ui", {
        theme: theme === "dark" ? "dark" : "light",
        cssVarsPerTheme: {
          dark: { "--brand-color": "#000000" },
          light: { "--brand-color": "#000000" },
        },
        hideEventTypeDetails: false,
      });
    })();
  }, [theme]);

  // Function to copy the email to the clipboard
  const copyEmailToClipboard = async () => {
    try {
      await navigator.clipboard.writeText("marius.sdeing@gmail.com");
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 3000); // Reset copy status after 10 seconds
    } catch (err) {
      console.error("Failed to copy text: ", err);
    }
  };

  return (
    <Button
      onClick={copyEmailToClipboard} // Call the copy function on button click
      className="shadow-none hover:bg-background hover:text-primary border-[0.3px] border-transparent hover:border-b-4 hover:border-primary/30 active:border-b transition-all"
      disabled={isCopied} // Disable the button if the email is copied
    >
      {isCopied ? "Copied!" : "Copy Email"}
    </Button>
  );
}
