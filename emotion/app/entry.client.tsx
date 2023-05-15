import { CacheProvider } from "@emotion/react";
import { RemixBrowser } from "@remix-run/react";
import * as React from "react";
import { hydrate } from "react-dom";

import ClientStyleContext from "./styles/client.context";
import createEmotionCache from "./styles/createEmotionCache";
import { hydrateRoot } from "react-dom/client";

interface ClientCacheProviderProps {
  children: React.ReactNode;
}

function ClientCacheProvider({ children }: ClientCacheProviderProps) {
  const [cache, setCache] = React.useState(createEmotionCache());

  const reset = React.useCallback(() => {
    setCache(createEmotionCache());
  }, []);

  return (
    <ClientStyleContext.Provider value={{ reset }}>
      <CacheProvider value={cache}>{children}</CacheProvider>
    </ClientStyleContext.Provider>
  );
}

hydrateRoot(
  document,
  <ClientCacheProvider>
    <RemixBrowser />
  </ClientCacheProvider>,
);
